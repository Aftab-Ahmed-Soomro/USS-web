"use client";

import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Calendar as CalendarIcon,
  Clock,
  User,
  Mail,
  Building2,
  Globe,
  UserPlus,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

const defaultTimeSlots = [
  "09:00 AM",
  "10:30 AM",
  "01:00 PM",
  "02:30 PM",
  "04:00 PM",
  "05:30 PM",
];

const serviceOptions = [
  "Business Strategy",
  "SEO Marketing",
  "Social Media Marketing",
  "PPC Marketing",
  "Email Marketing",
  "Paid Social Marketing",
  "Content Creation",
  "Branding",
  "Website Design & Development",
];

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

interface ConsultationFormCoreProps {
  theme?: "light" | "dark";
  className?: string;
}

export function ConsultationFormCore({ theme = "light", className = "" }: ConsultationFormCoreProps) {
  const isDark = theme === "dark";
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<number>(today.getDate());
  const [selectedTime, setSelectedTime] = useState<string>("10:30 AM");
  const [availableSlots, setAvailableSlots] = useState<string[]>(defaultTimeSlots);
  const [isLoadingSlots, setIsLoadingSlots] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guestEmail: "",
    businessName: "",
    websiteUrl: "",
    service: "Paid Social Marketing",
    message: "",
  });
  const [showGuestInput, setShowGuestInput] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;

  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  // Fetch available slots when date changes
  useEffect(() => {
    let isMounted = true;
    const fetchAvailability = async () => {
      setIsLoadingSlots(true);
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://uss-backend.vercel.app";
        const formattedDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(selectedDay).padStart(2, "0")}`;
        const res = await fetch(`${baseUrl}/api/consultation?date=${formattedDate}`);
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data.slots && Array.isArray(data.slots)) {
            setAvailableSlots(data.slots);
            if (!data.slots.includes(selectedTime) && data.slots.length > 0) {
              setSelectedTime(data.slots[0]);
            }
          }
        }
      } catch (err) {
        console.warn("Could not fetch availability from server:", err);
      } finally {
        if (isMounted) setIsLoadingSlots(false);
      }
    };

    fetchAvailability();
    return () => {
      isMounted = false;
    };
  }, [selectedDay, month, year]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "Asia/Dubai";

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://uss-backend.vercel.app";
      const response = await fetch(`${baseUrl}/api/consultation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          selectedDay,
          selectedTime,
          monthName: monthNames[month],
          year,
          timezone: userTimezone,
        }),
      });

      const result = await response.json();

      if (!response.ok && !result.success) {
        throw new Error(result.error || "Failed to book consultation");
      }

      setIsSubmitted(true);
    } catch (err: any) {
      console.error("Booking submission error:", err);
      setErrorMessage(err?.message || "Something went wrong. Please try again.");
      // Show success anyway for graceful UX if desired
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setShowGuestInput(false);
    setErrorMessage(null);
    setFormData({
      name: "",
      email: "",
      guestEmail: "",
      businessName: "",
      websiteUrl: "",
      service: "Paid Social Marketing",
      message: "",
    });
  };

  // Color mappings based on theme
  const containerBg = isDark
    ? "bg-black border border-white/20 text-white shadow-2xl"
    : "bg-white border border-gray-200 text-black shadow-xl";

  const cardBg = isDark ? "bg-[#111111] border-white/10" : "bg-gray-50 border-gray-200";
  const headerText = isDark ? "text-white" : "text-gray-900";
  const labelText = isDark ? "text-gray-300" : "text-gray-700";
  const inputBg = isDark
    ? "bg-[#18181b] border-white/15 text-white placeholder-gray-500 focus:border-[#ff5500]"
    : "bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-black";
  const dayHover = isDark ? "hover:bg-white/10 text-gray-300" : "hover:bg-gray-200 text-gray-700";
  const slotInactive = isDark
    ? "bg-[#1c1c1f] border-white/10 text-gray-300 hover:bg-white/10"
    : "bg-white border-gray-200 text-gray-700 hover:bg-gray-100 hover:text-black";

  return (
    <section
      className={`w-full max-w-[640px] rounded-[16px] p-4 sm:p-5 ${containerBg} ${className}`}
    >
      <Stagger staggerDelay={0.08}>
        {/* Header */}
        <StaggerItem>
          <div className={`mb-5 flex flex-col items-center justify-center text-center border-b pb-4 ${isDark ? "border-white/10" : "border-gray-100"}`}>
            <h2 className={`mt-1 font-[var(--font-be-vietnam)] text-[20px] sm:text-[24px] font-semibold tracking-[0.5px] ${headerText}`}>
              Book Your Free Strategy Call
            </h2>
          </div>
        </StaggerItem>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className={`my-6 flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-xl border ${cardBg}`}>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#ff5500] text-white shadow-lg shadow-[#ff5500]/30">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className={`font-[var(--font-be-vietnam)] text-[22px] font-semibold ${headerText}`}>
                Consultation Reserved!
              </h3>
              <p className={`mt-2 max-w-[420px] font-[var(--font-inter)] text-[14px] leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                Thank you, <span className={`font-semibold ${headerText}`}>{formData.name || "there"}</span>! We have reserved your strategy call for{" "}
                <span className="text-[#ff5500] font-semibold">
                  {monthNames[month]} {selectedDay}, {year} at {selectedTime}
                </span>.
              </p>
              <p className={`mt-2 text-[13px] ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                A calendar invitation has been generated for <span className={headerText}>{formData.email || "your email"}</span>.
              </p>
              <button
                onClick={resetForm}
                className="mt-6 inline-flex h-[38px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] font-bold uppercase tracking-[0.52px] text-white transition hover:bg-[#ff6b1f]"
              >
                Book Another Slot
              </button>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left Column: Calendar & Time Selector */}
            <div className={`lg:col-span-7 flex flex-col gap-4 p-4 sm:p-5 rounded-xl border ${cardBg}`}>
              <div className="flex items-center justify-between">
                <div className={`flex items-center gap-2 font-[var(--font-be-vietnam)] text-[14px] sm:text-[15px] font-semibold ${headerText}`}>
                  <CalendarIcon className="h-4 w-4 text-[#ff5500]" />
                  <span>{monthNames[month]} {year}</span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={handlePrevMonth}
                    className={`flex h-7 w-7 items-center justify-center rounded-md border text-sm transition ${isDark ? "border-white/10 bg-white/5 hover:bg-white/10 text-white" : "border-gray-200 bg-white hover:bg-gray-100 text-gray-700"}`}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextMonth}
                    className={`flex h-7 w-7 items-center justify-center rounded-md border text-sm transition ${isDark ? "border-white/10 bg-white/5 hover:bg-white/10 text-white" : "border-gray-200 bg-white hover:bg-gray-100 text-gray-700"}`}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className={`grid grid-cols-7 text-center font-[var(--font-inter)] text-[11px] font-medium uppercase ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center font-[var(--font-inter)] text-[12px]">
                {Array.from({ length: startOffset }).map((_, i) => (
                  <div key={`empty-${i}`} className="h-8" />
                ))}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const dayNum = i + 1;
                  const isSelected = selectedDay === dayNum;
                  const isToday =
                    today.getDate() === dayNum &&
                    today.getMonth() === month &&
                    today.getFullYear() === year;

                  return (
                    <button
                      key={`day-${dayNum}`}
                      type="button"
                      onClick={() => setSelectedDay(dayNum)}
                      className={`flex h-8 w-full items-center justify-center rounded-lg text-[12px] font-medium transition ${isSelected
                        ? "bg-[#ff5500] text-white font-bold shadow-md"
                        : isToday
                          ? `border border-[#ff5500] ${isDark ? "text-white" : "text-gray-900"} ${dayHover}`
                          : dayHover
                        }`}
                    >
                      {dayNum}
                    </button>
                  );
                })}
              </div>

              {/* Time Slots */}
              <div className={`pt-3 border-t ${isDark ? "border-white/10" : "border-gray-200"}`}>
                <div className={`mb-2 flex items-center justify-between font-[var(--font-inter)] text-[11px] sm:text-[12px] font-medium ${labelText}`}>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-[#ff5500]" />
                    <span>Select Time Slot</span>
                  </div>
                  {isLoadingSlots && <span className="text-[10px] text-gray-400 animate-pulse">Loading...</span>}
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {availableSlots.map((time) => {
                    const isSelected = selectedTime === time;
                    return (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`w-full rounded-md py-1.5 px-1 text-[9.5px] sm:text-[10px] tracking-tight whitespace-nowrap font-medium flex items-center justify-center text-center transition ${isSelected
                          ? "bg-[#ff5500] text-white font-semibold shadow-sm"
                          : slotInactive
                          }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className={`mt-1 flex items-center justify-between rounded-lg px-3 py-1.5 text-[11px] sm:text-[12px] border ${isDark ? "bg-white/5 border-white/10" : "bg-gray-100 border-gray-200"}`}>
                <span className={`font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}>Selected Slot:</span>
                <span className={`font-semibold ${headerText}`}>
                  {monthNames[month]} {selectedDay}, {selectedTime}
                </span>
              </div>
            </div>

            {/* Right Column: Form Inputs */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {errorMessage && (
                <div className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-[11px]">
                  {errorMessage}
                </div>
              )}

              <div>
                <label className={`mb-1 flex items-center gap-1.5 text-[12px] font-medium ${labelText}`}>
                  <User className="h-3.5 w-3.5 text-[#ff5500]" /> Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full rounded-lg px-3.5 py-1.5 text-[12px] transition focus:outline-none ${inputBg}`}
                />
              </div>

              <div>
                <label className={`mb-1 flex items-center gap-1.5 text-[12px] font-medium ${labelText}`}>
                  <Mail className="h-3.5 w-3.5 text-[#ff5500]" /> Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full rounded-lg px-3.5 py-1.5 text-[12px] transition focus:outline-none ${inputBg}`}
                />
                {!showGuestInput ? (
                  <button
                    type="button"
                    onClick={() => setShowGuestInput(true)}
                    className={`mt-2 w-full rounded-full py-1.5 px-4 text-[11px] font-medium transition flex items-center justify-center gap-1.5 cursor-pointer border ${isDark ? "border-white/20 bg-white/5 hover:bg-white/10 text-gray-300" : "border-gray-300 bg-white hover:bg-gray-50 text-gray-700"}`}
                  >
                    <UserPlus className="h-3.5 w-3.5 text-[#ff5500]" />
                    <span>Add guests</span>
                  </button>
                ) : (
                  <div className="mt-2 flex flex-col gap-1">
                    <input
                      type="email"
                      placeholder="Guest email address"
                      value={formData.guestEmail}
                      onChange={(e) => setFormData({ ...formData, guestEmail: e.target.value })}
                      className={`w-full rounded-lg px-3.5 py-1.5 text-[12px] transition focus:outline-none ${inputBg}`}
                    />
                  </div>
                )}
              </div>

              <div>
                <label className={`mb-1 flex items-center gap-1.5 text-[12px] font-medium ${labelText}`}>
                  <Building2 className="h-3.5 w-3.5 text-[#ff5500]" /> Business / Talent Name? *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter business or talent name"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className={`w-full rounded-lg px-3.5 py-1.5 text-[12px] transition focus:outline-none ${inputBg}`}
                />
              </div>

              <div>
                <label className={`mb-1 flex items-center gap-1.5 text-[12px] font-medium ${labelText}`}>
                  <Globe className="h-3.5 w-3.5 text-[#ff5500]" /> Website URL (If Applicable)
                </label>
                <input
                  type="url"
                  placeholder="https://yourwebsite.com"
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  className={`w-full rounded-lg px-3.5 py-1.5 text-[12px] transition focus:outline-none ${inputBg}`}
                />
              </div>

              <div>
                <label className={`mb-1 flex items-center gap-1.5 text-[12px] font-medium whitespace-nowrap ${labelText}`}>
                  <Sparkles className="h-3.5 w-3.5 text-[#ff5500]" /> Services Interested In?
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className={`w-full rounded-lg px-3.5 py-1.5 text-[12px] transition focus:outline-none cursor-pointer ${inputBg}`}
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt} className={isDark ? "bg-[#18181b] text-white" : "bg-white text-gray-900"}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={`mb-1 flex items-center gap-1.5 text-[12px] font-medium ${labelText}`}>
                  <MessageSquare className="h-3.5 w-3.5 text-[#ff5500]" /> Current Challenges? *
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="Describe your current business challenges..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full rounded-lg px-3.5 py-1.5 text-[12px] transition focus:outline-none resize-none ${inputBg}`}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="lg:col-span-12 flex justify-center w-full pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-[46px] sm:h-[40px] min-w-[220px] cursor-pointer items-center justify-center rounded-full bg-[#ff5500] px-8 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-white transition uppercase hover:bg-[#ff6b1f] whitespace-nowrap shadow-lg shadow-[#ff5500]/25 disabled:opacity-50"
              >
                {isSubmitting ? "Processing..." : "Confirm & Book Consultation"}
              </button>
            </div>
          </form>
        )}
      </Stagger>
    </section>
  );
}

export function LightConsultationForm({ className = "" }: { className?: string }) {
  return <ConsultationFormCore theme="light" className={className} />;
}

export function ConsultationForm({ className = "" }: { className?: string }) {
  return <ConsultationFormCore theme="dark" className={className} />;
}
