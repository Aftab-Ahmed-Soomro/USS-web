"use client";

import { useState } from "react";
import {
  ArrowRight,
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
  Phone,
} from "lucide-react";
import { PopupModal } from "react-calendly";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

const timeSlots = [
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

export function ConsultationForm({ className = "" }: { className?: string }) {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<number>(today.getDate());
  const [selectedTime, setSelectedTime] = useState<string>("10:30 AM");

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
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  // Adjust so Monday = 0, Sunday = 6
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          selectedDay,
          selectedTime,
          monthName: monthNames[month],
          year,
        }),
      });

      setIsCalendlyOpen(true);
      setIsSubmitted(true);
    } catch (err) {
      console.error("Booking error:", err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setShowGuestInput(false);
    setFormData({ name: "", email: "", guestEmail: "", businessName: "", websiteUrl: "", service: "Paid Social Marketing", message: "" });
  };

  return (
    <section
      className={`w-full max-w-[640px] rounded-[16px] border border-white/20 bg-black p-4 sm:p-5 text-white shadow-2xl ${className}`}
    >
      <Stagger staggerDelay={0.08}>
        {/* Header */}
        <StaggerItem>
          <div className="mb-5 flex flex-col items-center justify-center text-center border-b border-white/10 pb-4">
            {/* <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[1.5px] text-[#ff5500]">
              <Sparkles className="h-3.5 w-3.5" /> Book Consultation
            </span> */}
            <h2 className="mt-1 font-[var(--font-be-vietnam)] text-[20px] sm:text-[24px] font-semibold text-white tracking-[0.5px]">
              Book Your Free Strategy Call
            </h2>
          </div>
        </StaggerItem>

        {isSubmitted ? (
          <StaggerItem>
            <div className="my-8 flex flex-col items-center justify-center text-center p-8 bg-[#111111] rounded-xl border border-white/15">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-black">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="font-[var(--font-be-vietnam)] text-[22px] font-semibold text-white">
                Consultation Reserved!
              </h3>
              <p className="mt-2 max-w-[420px] font-[var(--font-inter)] text-[14px] leading-relaxed text-white/70">
                Thank you, <span className="font-semibold text-white">{formData.name || "there"}</span>! We have scheduled your consultation for{" "}
                <span className="text-[#ff5500] font-semibold">
                  {monthNames[month]} {selectedDay}, {year} at {selectedTime}
                </span>.
              </p>
              <p className="mt-2 text-[13px] text-white/50">
                A calendar invite and meeting details have been sent to <span className="text-white">{formData.email || "your email"}</span>.
              </p>
              <button
                onClick={resetForm}
                className="mt-6 inline-flex h-[38px] items-center justify-center rounded-full bg-white px-7 font-[var(--font-be-vietnam)] text-[12px] font-bold uppercase tracking-[0.52px] text-black transition hover:bg-white/90"
              >
                Book Another Slot
              </button>
            </div>
          </StaggerItem>
        ) : (
          /* Landscape 2-Column Grid: Left Calendar, Right Questions */
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">
            {/* Left Column: Calendar & Time Selector (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-4 bg-[#0a0a0a] p-4 sm:p-5 rounded-xl border border-white/10">
              {/* Month Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-[var(--font-be-vietnam)] text-[14px] sm:text-[15px] font-semibold text-white">
                  <CalendarIcon className="h-4 w-4 text-white/70" />
                  <span>{monthNames[month]} {year}</span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={handlePrevMonth}
                    className="flex h-7 w-7 items-center justify-center rounded-md border border-white/15 bg-black hover:bg-white/10 text-white transition"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextMonth}
                    className="flex h-7 w-7 items-center justify-center rounded-md border border-white/15 bg-black hover:bg-white/10 text-white transition"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Day Names */}
              <div className="grid grid-cols-7 text-center font-[var(--font-inter)] text-[11px] font-medium uppercase text-white/40">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>

              {/* Days Grid */}
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
                        ? "bg-white text-black font-bold shadow-md"
                        : isToday
                          ? "border border-white/40 text-white hover:bg-white/10"
                          : "hover:bg-white/10 text-white/80"
                        }`}
                    >
                      {dayNum}
                    </button>
                  );
                })}
              </div>

              {/* Time Slots */}
              <div className="pt-3 border-t border-white/10">
                <div className="mb-2 flex items-center gap-1.5 font-[var(--font-inter)] text-[11px] sm:text-[12px] font-medium text-white/70">
                  <Clock className="h-3.5 w-3.5 text-white/70" />
                  <span>Select Time Slot</span>
                </div>
                <div className="grid grid-cols-3 gap-x-3 gap-y-2.5">
                  {timeSlots.map((time) => {
                    const isSelected = selectedTime === time;
                    return (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`w-full rounded-md py-1.5 px-1 text-[9.5px] sm:text-[10px] tracking-tight whitespace-nowrap font-medium flex items-center justify-center text-center transition ${isSelected
                          ? "bg-[#ff5500] text-white font-semibold shadow-sm"
                          : "bg-black border border-white/15 text-white/70 hover:border-white hover:text-white"
                          }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Selected Slot Summary Badge */}
              <div className="mt-1 flex items-center justify-between rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 text-[11px] sm:text-[12px]">
                <span className="font-medium text-white/60">Selected Slot:</span>
                <span className="font-semibold text-white">
                  {monthNames[month]} {selectedDay}, {selectedTime}
                </span>
              </div>
            </div>

            {/* Right Column: Form Questions & Inputs (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div>
                <label className="mb-1 flex items-center gap-1.5 text-[12px] font-medium text-white/80">
                  <User className="h-3.5 w-3.5 text-white/60" /> Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-white/15 bg-[#0a0a0a] px-3.5 py-1.5 text-[12px] text-white placeholder:text-[14px] placeholder-white/40 focus:border-white focus:outline-none transition"
                />
              </div>

              <div>
                <label className="mb-1 flex items-center gap-1.5 text-[12px] font-medium text-white/80">
                  <Mail className="h-3.5 w-3.5 text-white/60" /> Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-white/15 bg-[#0a0a0a] px-3.5 py-1.5 text-[12px] text-white placeholder:text-[12px] placeholder-white/40 focus:border-white focus:outline-none transition"
                />
                {!showGuestInput ? (
                  <button
                    type="button"
                    onClick={() => setShowGuestInput(true)}
                    className="mt-2 w-full rounded-full border border-white/20 bg-transparent py-1.5 px-4 text-[12px] font-medium text-white/90 transition hover:border-white hover:bg-white/5 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <UserPlus className="h-3.5 w-3.5" />
                    <span>Add guests</span>
                  </button>
                ) : (
                  <div className="mt-2 flex flex-col gap-1">
                    <input
                      type="email"
                      placeholder="Guest email address"
                      value={formData.guestEmail}
                      onChange={(e) => setFormData({ ...formData, guestEmail: e.target.value })}
                      className="w-full rounded-lg border border-white/15 bg-[#0a0a0a] px-3.5 py-1.5 text-[12px] text-white placeholder:text-[12px] placeholder-white/40 focus:border-white focus:outline-none transition"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="mb-1 flex items-center gap-1.5 text-[12px] font-medium text-white/80">
                  <Building2 className="h-3.5 w-3.5 text-white/60" /> Business / Talent Name? *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter business or talent name"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full rounded-lg border border-white/15 bg-[#0a0a0a] px-3.5 py-1.5 text-[12px] text-white placeholder:text-[12px] placeholder-white/40 focus:border-white focus:outline-none transition"
                />
              </div>

              <div>
                <label className="mb-1 flex items-center gap-1.5 text-[12px] font-medium text-white/80">
                  <Globe className="h-3.5 w-3.5 text-white/60" /> Website URL (If Applicable)
                </label>
                <input
                  type="url"
                  placeholder="https://yourwebsite.com"
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  className="w-full rounded-lg border border-white/15 bg-[#0a0a0a] px-3.5 py-1.5 text-[12px] text-white placeholder:text-[12px] placeholder-white/40 focus:border-white focus:outline-none transition"
                />
              </div>

              <div>
                <label className="mb-1 flex items-center gap-1.5 text-[12px] font-medium text-white/80 whitespace-nowrap">
                  <Sparkles className="h-3.5 w-3.5 text-white/60" /> What Services Are You <br className="sm:block hidden" /> Interested In?
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full rounded-lg border border-white/15 bg-[#0a0a0a] px-3.5 py-1.5 text-[12px] text-white/40 focus:border-white focus:outline-none transition cursor-pointer"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-black text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1 flex items-center gap-1.5 text-[12px] font-medium text-white/80">
                  <MessageSquare className="h-3.5 w-3.5 text-white/60" /> What are your current challenges within your business? *
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe your current business challenges..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-lg border border-white/15 bg-[#0a0a0a] px-3.5 py-1.5 text-[12px] text-white placeholder:text-[12px] placeholder-white/40 focus:border-white focus:outline-none transition resize-none"
                />
              </div>
            </div>

            {/* Bottom Row: Centered Submit Button across entire card (12 cols) */}
            <div className="lg:col-span-12 flex justify-center w-full pt-1">
              <div
                role="button"
                onClick={handleSubmit as any}
                className="inline-flex h-[46px] sm:h-[38px] min-w-[200px] cursor-pointer items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-white transition uppercase hover:bg-[#ff6b1f] whitespace-nowrap shadow-lg shadow-[#ff5500]/25"
              >
                {isSubmitting ? "Processing..." : "Confirm & Book Consultation"}
              </div>
            </div>
          </form>
        )}
      </Stagger>
      {typeof window !== "undefined" && isCalendlyOpen && (
        <PopupModal
          url="https://calendly.com/unitedstrategicsolutions/30min"
          onModalClose={() => setIsCalendlyOpen(false)}
          open={isCalendlyOpen}
          rootElement={typeof document !== "undefined" ? document.body : (null as any)}
          prefill={{
            email: formData.email,
            name: formData.name,
            guests: formData.guestEmail ? [formData.guestEmail] : [],
          }}
        />
      )}
    </section>
  );
}

export function LightConsultationForm({ className = "" }: { className?: string }) {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<number>(today.getDate());
  const [selectedTime, setSelectedTime] = useState<string>("10:30 AM");

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
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;

  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          selectedDay,
          selectedTime,
          monthName: monthNames[month],
          year,
        }),
      });

      setIsCalendlyOpen(true);
      setIsSubmitted(true);
    } catch (err) {
      console.error("Booking error:", err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setShowGuestInput(false);
    setFormData({ name: "", email: "", guestEmail: "", businessName: "", websiteUrl: "", service: "Paid Social Marketing", message: "" });
  };

  return (
    <section
      className={`w-full max-w-[640px] rounded-[16px] border border-gray-200 bg-white p-4 sm:p-5 text-black shadow-xl ${className}`}
    >
      <Stagger staggerDelay={0.08}>
        {/* Header */}
        <StaggerItem>
          <div className="mb-5 flex flex-col items-center justify-center text-center border-b border-gray-100 pb-4">
            {/* <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[1.5px] text-[#ff5500]">
              <Sparkles className="h-3.5 w-3.5" /> Book Consultation
            </span> */}
            <h2 className="mt-1 font-[var(--font-be-vietnam)] text-[20px] sm:text-[24px] font-semibold text-gray-900 tracking-[0.5px]">
              Book Your Free Strategy Call
            </h2>
          </div>
        </StaggerItem>

        {isSubmitted ? (
          <StaggerItem>
            <div className="my-8 flex flex-col items-center justify-center text-center p-8 bg-gray-50 rounded-xl border border-gray-200">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="font-[var(--font-be-vietnam)] text-[22px] font-semibold text-gray-900">
                Consultation Reserved!
              </h3>
              <p className="mt-2 max-w-[420px] font-[var(--font-inter)] text-[14px] leading-relaxed text-gray-600">
                Thank you, <span className="font-semibold text-gray-900">{formData.name || "there"}</span>! We have scheduled your consultation for{" "}
                <span className="text-[#ff5500] font-semibold">
                  {monthNames[month]} {selectedDay}, {year} at {selectedTime}
                </span>.
              </p>
              <button
                onClick={resetForm}
                className="mt-6 inline-flex h-[38px] items-center justify-center rounded-full bg-black px-7 font-[var(--font-be-vietnam)] text-[12px] font-bold uppercase tracking-[0.52px] text-white transition hover:bg-gray-800"
              >
                Book Another Slot
              </button>
            </div>
          </StaggerItem>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left Column: Calendar & Time Selector */}
            <div className="lg:col-span-7 flex flex-col gap-4 bg-gray-50 p-4 sm:p-5 rounded-xl border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-[var(--font-be-vietnam)] text-[14px] sm:text-[15px] font-semibold text-gray-900">
                  <CalendarIcon className="h-4 w-4 text-gray-700" />
                  <span>{monthNames[month]} {year}</span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={handlePrevMonth}
                    className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 bg-white hover:bg-gray-100 text-gray-700 transition"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextMonth}
                    className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 bg-white hover:bg-gray-100 text-gray-700 transition"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 text-center font-[var(--font-inter)] text-[11px] font-medium uppercase text-gray-400">
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
                        ? "bg-black text-white font-bold shadow-md"
                        : isToday
                          ? "border border-gray-900 text-gray-900 hover:bg-gray-200"
                          : "hover:bg-gray-200 text-gray-700"
                        }`}
                    >
                      {dayNum}
                    </button>
                  );
                })}
              </div>

              {/* Time Slots */}
              <div className="pt-3 border-t border-gray-200">
                <div className="mb-2 flex items-center gap-1.5 font-[var(--font-inter)] text-[11px] sm:text-[12px] font-medium text-gray-700">
                  <Clock className="h-3.5 w-3.5 text-gray-700" />
                  <span>Select Time Slot</span>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {timeSlots.map((time) => {
                    const isSelected = selectedTime === time;
                    return (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`w-full rounded-md py-1.5 px-1 text-[9.5px] sm:text-[10px] tracking-tight whitespace-nowrap font-medium flex items-center justify-center text-center transition ${isSelected
                          ? "bg-[#ff5500] text-white font-semibold shadow-sm"
                          : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 hover:text-black"
                          }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-1 flex items-center justify-between rounded-lg bg-gray-100 border border-gray-200 px-3 py-1.5 text-[11px] sm:text-[12px]">
                <span className="font-medium text-gray-500">Selected Slot:</span>
                <span className="font-semibold text-gray-900">
                  {monthNames[month]} {selectedDay}, {selectedTime}
                </span>
              </div>
            </div>

            {/* Right Column: Form Questions & Inputs */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div>
                <label className="mb-1 flex items-center gap-1.5 text-[12px] font-medium text-gray-700">
                  <User className="h-3.5 w-3.5 text-gray-500" /> Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-1.5 text-[12px] text-gray-900 placeholder:text-[14px] placeholder-gray-400 focus:border-black focus:outline-none transition"
                />
              </div>

              <div>
                <label className="mb-1 flex items-center gap-1.5 text-[12px] font-medium text-gray-700">
                  <Mail className="h-3.5 w-3.5 text-gray-500" /> Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-1.5 text-[12px] text-gray-900 placeholder:text-[12px] placeholder-gray-400 focus:border-black focus:outline-none transition"
                />
                {!showGuestInput ? (
                  <button
                    type="button"
                    onClick={() => setShowGuestInput(true)}
                    className="mt-2 w-full rounded-full border border-gray-300 bg-white py-1.5 px-4 text-[12px] font-medium text-gray-700 transition hover:border-gray-500 hover:bg-gray-50 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <UserPlus className="h-3.5 w-3.5" />
                    <span>Add guests</span>
                  </button>
                ) : (
                  <div className="mt-2 flex flex-col gap-1">
                    <input
                      type="email"
                      placeholder="Guest email address"
                      value={formData.guestEmail}
                      onChange={(e) => setFormData({ ...formData, guestEmail: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-1.5 text-[12px] text-gray-900 placeholder:text-[12px] placeholder-gray-400 focus:border-black focus:outline-none transition"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="mb-1 flex items-center gap-1.5 text-[12px] font-medium text-gray-700">
                  <Building2 className="h-3.5 w-3.5 text-gray-500" /> Business / Talent Name? *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter business or talent name"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-1.5 text-[12px] text-gray-900 placeholder:text-[12px] placeholder-gray-400 focus:border-black focus:outline-none transition"
                />
              </div>

              <div>
                <label className="mb-1 flex items-center gap-1.5 text-[12px] font-medium text-gray-700">
                  <Globe className="h-3.5 w-3.5 text-gray-500" /> Website URL (If Applicable)
                </label>
                <input
                  type="url"
                  placeholder="https://yourwebsite.com"
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-1.5 text-[12px] text-gray-900 placeholder:text-[12px] placeholder-gray-400 focus:border-black focus:outline-none transition"
                />
              </div>

              <div>
                <label className="mb-1 flex items-center gap-1.5 text-[12px] font-medium text-gray-700 whitespace-nowrap">
                  <Sparkles className="h-3.5 w-3.5 text-gray-500" /> What Services Are You <br className="sm:block hidden" /> Interested In?
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-1.5 text-[12px] text-gray-500 focus:border-black focus:outline-none transition cursor-pointer"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-white text-gray-900">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1 flex items-center gap-1.5 text-[12px] font-medium text-gray-700 ">
                  <MessageSquare className="h-3.5 w-3.5 text-gray-500" /> What are your current challenges within your business? *
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe your current business challenges..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-1.5 text-[12px] text-gray-900 placeholder:text-[12px] placeholder-gray-400 focus:border-black focus:outline-none transition resize-none"
                />
              </div>
            </div>

            {/* Bottom Row: Centered Submit Button across entire card (12 cols) */}
            <div className="lg:col-span-12 flex justify-center w-full pt-1">
              <div
                role="button"
                onClick={handleSubmit as any}
                className=" inline-flex h-[46px] sm:h-[38px] min-w-[200px] cursor-pointer items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-white transition uppercase hover:bg-[#ff6b1f] whitespace-nowrap shadow-lg shadow-[#ff5500]/20"
              >
                {isSubmitting ? "Processing..." : "Confirm & Book Consultation"}
              </div>
            </div>
          </form>
        )}
      </Stagger>
      {typeof window !== "undefined" && isCalendlyOpen && (
        <PopupModal
          url="https://calendly.com/unitedstrategicsolutions/30min"
          onModalClose={() => setIsCalendlyOpen(false)}
          open={isCalendlyOpen}
          rootElement={typeof document !== "undefined" ? document.body : (null as any)}
          prefill={{
            email: formData.email,
            name: formData.name,
            guests: formData.guestEmail ? [formData.guestEmail] : [],
          }}
        />
      )}
    </section>
  );
}
