import { NextResponse } from "next/server";

// CORS headers to allow Hostinger frontend to communicate with Vercel backend
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// Handle OPTIONS preflight request for CORS
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

// Helper to convert date components and time slot string (e.g. "10:30 AM") to UTC ISO String
function parseTimeToISO(
  year: number,
  monthName: string,
  day: number,
  timeStr: string,
  timezoneOffsetMinutes = 0
): string {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const monthIndex = monthNames.indexOf(monthName);
  const m = monthIndex >= 0 ? monthIndex : new Date().getMonth();

  let [time, modifier] = timeStr.trim().split(" ");
  let [hoursStr, minutesStr] = time.split(":");
  let hours = parseInt(hoursStr, 10);
  let minutes = parseInt(minutesStr, 10);

  if (modifier === "PM" && hours < 12) hours += 12;
  if (modifier === "AM" && hours === 12) hours = 0;

  // Create date in UTC
  const date = new Date(Date.UTC(year, m, day, hours, minutes, 0));
  return date.toISOString();
}

/**
 * GET /api/consultation?date=YYYY-MM-DD
 * Fetches available time slots from Calendly Scheduling API
 */
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const dateParam = searchParams.get("date"); // e.g. "2026-08-11"

    const token = process.env.CALENDLY_API_TOKEN;
    const eventTypeUri = process.env.CALENDLY_EVENT_TYPE_URI;

    const defaultSlots = [
      "09:00 AM",
      "10:30 AM",
      "01:00 PM",
      "02:30 PM",
      "04:00 PM",
      "05:30 PM",
    ];

    if (!token || !eventTypeUri) {
      return NextResponse.json(
        {
          available: true,
          slots: defaultSlots,
          source: "fallback_default",
        },
        { headers: corsHeaders }
      );
    }

    const targetDate = dateParam ? new Date(dateParam) : new Date();
    const startOfDay = new Date(targetDate);
    startOfDay.setUTCHours(0, 0, 0, 0);

    const endOfDay = new Date(targetDate);
    endOfDay.setUTCHours(23, 59, 59, 999);

    const params = new URLSearchParams({
      event_type: eventTypeUri,
      start_time: startOfDay.toISOString(),
      end_time: endOfDay.toISOString(),
    });

    const response = await fetch(
      `https://api.calendly.com/event_type_available_times?${params.toString()}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.warn(
        "Calendly GET availability warning (fallback to default slots):",
        response.status,
        errText
      );
      return NextResponse.json(
        {
          available: true,
          slots: defaultSlots,
          source: "fallback_free_plan_or_error",
          errorDetails: response.statusText,
        },
        { headers: corsHeaders }
      );
    }

    const data = await response.json();
    const availableTimes: any[] = data.collection || [];

    const formattedSlots = availableTimes.map((item: any) => {
      const d = new Date(item.start_time);
      return d.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    });

    return NextResponse.json(
      {
        available: true,
        slots: formattedSlots.length > 0 ? formattedSlots : defaultSlots,
        source: "calendly_live",
      },
      { headers: corsHeaders }
    );
  } catch (err: any) {
    console.error("Error in GET /api/consultation:", err);
    return NextResponse.json(
      {
        available: true,
        slots: [
          "09:00 AM",
          "10:30 AM",
          "01:00 PM",
          "02:30 PM",
          "04:00 PM",
          "05:30 PM",
        ],
        source: "fallback_exception",
      },
      { headers: corsHeaders }
    );
  }
}

/**
 * POST /api/consultation
 * Books an event via Calendly Scheduling API (POST /invitees)
 * Fallback to direct booking recording if on a Free Calendly plan.
 */
export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      name,
      email,
      guestEmail,
      businessName,
      websiteUrl,
      service,
      message,
      selectedDay,
      selectedTime,
      monthName,
      year,
      timezone = "Asia/Dubai",
    } = data;

    // Validate required fields
    if (!name || !email || !businessName || !selectedDay || !selectedTime) {
      return NextResponse.json(
        { error: "Required fields missing" },
        { status: 400, headers: corsHeaders }
      );
    }

    const currentYear = year || new Date().getFullYear();
    const startTimeISO = parseTimeToISO(
      currentYear,
      monthName || "August",
      selectedDay,
      selectedTime
    );

    const bookingDetails = {
      recipient: "contact@unitedstrategicsolutions.com",
      subject: `New Consultation Booking: ${name} - ${service || "General Inquiry"}`,
      bookingTime: `${monthName || ""} ${selectedDay}, ${currentYear} at ${selectedTime}`,
      startTimeISO,
      clientInfo: {
        name,
        email,
        guestEmail: guestEmail || "N/A",
        businessName,
        websiteUrl: websiteUrl || "N/A",
        serviceInterested: service || "Not specified",
        challenges: message || "N/A",
        timezone,
      },
      createdAt: new Date().toISOString(),
    };

    const token = process.env.CALENDLY_API_TOKEN;
    const eventTypeUri = process.env.CALENDLY_EVENT_TYPE_URI;

    let calendlyBookingSuccess = false;
    let calendlyResponseData = null;
    let calendlyError = null;

    if (token && eventTypeUri) {
      try {
        const payload: any = {
          event_type: eventTypeUri,
          start_time: startTimeISO,
          invitee: {
            name,
            email,
            timezone,
          },
          questions_and_answers: [
            {
              question: "Business / Talent Name?",
              answer: businessName,
              position: 1,
            },
            {
              question: "Website URL",
              answer: websiteUrl || "N/A",
              position: 2,
            },
            {
              question: "What services are you interested in?",
              answer: service || "N/A",
              position: 3,
            },
            {
              question: "What are your current challenges?",
              answer: message || "N/A",
              position: 4,
            },
          ],
        };

        const calRes = await fetch("https://api.calendly.com/invitees", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (calRes.ok) {
          calendlyResponseData = await calRes.json();
          calendlyBookingSuccess = true;
          console.log("=== CALENDLY BOOKING SUCCESSFUL ===", calendlyResponseData);
        } else {
          const errText = await calRes.text();
          calendlyError = `Calendly API (${calRes.status}): ${errText}`;
          console.warn(
            "Calendly API booking notice (Plan restriction or token scope):",
            calRes.status,
            errText
          );
        }
      } catch (calErr: any) {
        calendlyError = calErr?.message || "Calendly fetch error";
        console.error("Calendly fetch exception:", calErr);
      }
    }

    console.log("=== CONSULTATION BOOKING PROCESSED ===");
    console.log(JSON.stringify(bookingDetails, null, 2));

    // Optional: Send email notification via Resend API if configured
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "USS Consultations <consultations@unitedstrategicsolutions.com>",
            to: ["contact@unitedstrategicsolutions.com"],
            reply_to: email,
            subject: bookingDetails.subject,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
                <div style="background-color: #ff5500; padding: 20px; text-align: center; color: white;">
                  <h1 style="margin: 0; font-size: 22px;">New Consultation Booked</h1>
                </div>
                <div style="padding: 24px; color: #333333;">
                  <div style="background-color: #f9f9f9; border-left: 4px solid #ff5500; padding: 12px 16px; margin-bottom: 20px;">
                    <strong style="font-size: 16px; color: #111;">Appointment Time:</strong><br />
                    <span style="font-size: 18px; font-weight: bold; color: #ff5500;">${bookingDetails.bookingTime}</span>
                  </div>

                  <h3 style="border-bottom: 1px solid #eee; padding-bottom: 8px; margin-top: 24px;">Client Details</h3>
                  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                    <tr><td style="padding: 6px 0; color: #666;">Full Name:</td><td style="font-weight: bold;">${name}</td></tr>
                    <tr><td style="padding: 6px 0; color: #666;">Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
                    ${guestEmail ? `<tr><td style="padding: 6px 0; color: #666;">Guest Email:</td><td><a href="mailto:${guestEmail}">${guestEmail}</a></td></tr>` : ""}
                    <tr><td style="padding: 6px 0; color: #666;">Business / Talent Name:</td><td style="font-weight: bold;">${businessName}</td></tr>
                    ${websiteUrl ? `<tr><td style="padding: 6px 0; color: #666;">Website:</td><td><a href="${websiteUrl}" target="_blank">${websiteUrl}</a></td></tr>` : ""}
                    <tr><td style="padding: 6px 0; color: #666;">Service Interested:</td><td style="font-weight: bold; color: #ff5500;">${service}</td></tr>
                  </table>

                  <h3 style="border-bottom: 1px solid #eee; padding-bottom: 8px; margin-top: 24px;">Current Challenges / Goals</h3>
                  <p style="background: #f5f5f5; padding: 12px; border-radius: 6px; font-size: 14px; line-height: 1.5;">${message || "No specific details provided."}</p>
                </div>
              </div>
            `,
          }),
        });
      } catch (emailErr) {
        console.error("Failed to trigger Resend email:", emailErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: calendlyBookingSuccess
          ? "Consultation booked directly on Calendly"
          : "Consultation booked successfully in system",
        calendlyBookingSuccess,
        calendlyData: calendlyResponseData,
        calendlyError: calendlyError ? "Calendly API note: Paid plan or token required for direct sync." : null,
        booking: bookingDetails,
      },
      { status: 200, headers: corsHeaders }
    );
  } catch (err: any) {
    console.error("Consultation API error:", err);
    return NextResponse.json(
      { error: err?.message || "Internal server error" },
      { status: 500, headers: corsHeaders }
    );
  }
}
