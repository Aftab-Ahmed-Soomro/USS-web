import { NextResponse } from "next/server";

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
    } = data;

    // Validate required fields
    if (!name || !email || !businessName || !selectedDay || !selectedTime) {
      return NextResponse.json(
        { error: "Required fields missing" },
        { status: 400 }
      );
    }

    const bookingDetails = {
      recipient: "contact@unitedstrategicsolutions.com",
      subject: `New Consultation Booking: ${name} - ${service || "General Inquiry"}`,
      bookingTime: `${monthName || ""} ${selectedDay}, ${year || new Date().getFullYear()} at ${selectedTime}`,
      clientInfo: {
        name,
        email,
        guestEmail: guestEmail || "N/A",
        businessName,
        websiteUrl: websiteUrl || "N/A",
        serviceInterested: service || "Not specified",
        challenges: message || "N/A",
      },
      createdAt: new Date().toISOString(),
    };

    console.log("=== NEW CONSULTATION BOOKING RECEIVED ===");
    console.log(JSON.stringify(bookingDetails, null, 2));

    // Optional: If RESEND_API_KEY or SMTP environment variables are configured, send real email.
    // Example using Webhook / Resend REST API if key exists:
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
        console.error("Failed to trigger Resend API email:", emailErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Consultation booked successfully",
        booking: bookingDetails,
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Consultation API error:", err);
    return NextResponse.json(
      { error: err?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
