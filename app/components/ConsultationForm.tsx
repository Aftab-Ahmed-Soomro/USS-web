"use client";

import { useState, useEffect, useRef } from "react";
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
  ChevronDown,
  Check,
  Lock,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

const defaultTimeSlots = [
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
  "08:00 PM",
  "08:30 PM",
  "09:00 PM",
  "09:30 PM",
  "10:00 PM",
  "10:30 PM",
];

const serviceOptions = [
  "Marketing Strategy",
  "Google Ads",
  "Meta Ads",
  "Email Marketing",
  "WhatsApp & SMS",
  "Social Media Marketing",
  "Content Creation",
  "Website UX Design",
  "Website Development",
  "Branding & Graphics",
  "Talent Management",
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
  const [slotUrls, setSlotUrls] = useState<Record<string, string>>({});
  const [isLoadingSlots, setIsLoadingSlots] = useState<boolean>(false);
  
  // New Step State
  const [step, setStep] = useState<1 | 2>(1);

  const [selectedServices, setSelectedServices] = useState<string[]>(["Marketing Strategy"]);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guestEmail: "",
    businessName: "",
    websiteUrl: "",
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

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleService = (opt: string) => {
    setSelectedServices((prev) =>
      prev.includes(opt)
        ? prev.filter((item) => item !== opt)
        : [...prev, opt]
    );
  };

  // Fetch available slots when date changes
  useEffect(() => {
    let isMounted = true;
    const fetchAvailability = async () => {
      setIsLoadingSlots(true);
      try {
        const formattedDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(selectedDay).padStart(2, "0")}`;
        const res = await fetch(`/api/calendly.php?date=${formattedDate}`);
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data.collection) {
            const available = data.collection
              .filter((slot: any) => slot.status === "available")
              .map((slot: any) => {
                 const dateObj = new Date(slot.start_time);
                 return {
                    timeString: dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    schedulingUrl: slot.scheduling_url
                 };
              });
              
            const slotStrings = available.map((a: any) => a.timeString);
            setAvailableSlots(slotStrings);
            setSlotUrls(available.reduce((acc: any, curr: any) => ({...acc, [curr.timeString]: curr.schedulingUrl}), {}));
            
            if (slotStrings.length > 0 && !slotStrings.includes(selectedTime)) {
              setSelectedTime(slotStrings[0]);
            } else if (slotStrings.length === 0) {
              setSelectedTime("");
            }
          } else {
             // Fallback
             setAvailableSlots(defaultTimeSlots);
          }
        }
      } catch (err) {
        console.warn("Could not fetch availability from server:", err);
        if (isMounted) setAvailableSlots(defaultTimeSlots);
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

    if (selectedServices.length === 0) {
      setErrorMessage("Please select at least one service.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "Asia/Dubai";
    const servicePayload = selectedServices.join(", ");

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://uss-backend.vercel.app";
      const response = await fetch(`${baseUrl}/api/consultation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          service: servicePayload,
          services: selectedServices,
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

      const calUrl = slotUrls[selectedTime];
      if (calUrl) {
          const params = new URLSearchParams();
          params.append("name", formData.name);
          params.append("email", formData.email);
          params.append("a1", formData.businessName);
          params.append("a2", formData.websiteUrl);
          params.append("a3", selectedServices.join(", "));
          params.append("a4", formData.message);
          window.location.href = `${calUrl}?${params.toString()}`;
      } else {
          setIsSubmitted(true);
      }
    } catch (err: any) {
      console.error("Booking submission error:", err);
      setErrorMessage(err?.message || "Something went wrong. Please try again.");
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setShowGuestInput(false);
    setErrorMessage(null);
    setSelectedServices(["Marketing Strategy"]);
    setIsServicesOpen(false);
    setStep(1);
    setFormData({
      name: "",
      email: "",
      guestEmail: "",
      businessName: "",
      websiteUrl: "",
      message: "",
    });
  };

  const containerBg = isDark
    ? "bg-[#0d0d0d] border border-white/10 text-white shadow-2xl"
    : "bg-white border border-gray-100 text-black shadow-xl";

  const cardBg = isDark ? "bg-[#111111] border-white/5" : "bg-gray-50/50 border-gray-100";
  const headerText = isDark ? "text-white" : "text-[#0f172a]";
  const labelText = isDark ? "text-gray-300" : "text-[#334155]";
  const inputBg = isDark
    ? "bg-[#18181b] border-white/10 text-white placeholder-gray-500 focus:border-[#ff5a05]"
    : "bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-black";
  const dayHover = isDark ? "hover:bg-white/10 text-gray-300" : "hover:bg-gray-200 text-gray-700";
  const slotInactive = isDark
    ? "bg-[#1c1c1f] border-white/10 text-gray-300 hover:bg-white/10"
    : "bg-white border-gray-200 text-gray-700 hover:bg-gray-100 hover:text-black";

  return (
    <section
      className={`w-full max-w-[560px] rounded-[24px] p-4 sm:p-5 ${containerBg} ${className}`}
    >
      <Stagger staggerDelay={0.08}>
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className={`my-6 flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-[20px] border ${cardBg}`}>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#ff5a05] text-white shadow-lg shadow-[#ff5500]/30">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className={`font-[var(--font-be-vietnam)] text-[22px] font-semibold ${headerText}`}>
                Consultation Reserved!
              </h3>
              <p className={`mt-2 max-w-[420px] font-[var(--font-inter)] text-[14px] leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                Thank you, <span className={`font-semibold ${headerText}`}>{formData.name || "there"}</span>! We have reserved your strategy call for{" "}
                <span className="text-[#ff5a05] font-semibold">
                  {monthNames[month]} {selectedDay}, {year} at {selectedTime}
                </span>.
              </p>
              <p className={`mt-2 text-[13px] ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                A calendar invitation has been generated for <span className={headerText}>{formData.email || "your email"}</span>.
              </p>
              <button
                onClick={resetForm}
                className="mt-6 inline-flex h-[43px] items-center justify-center rounded-full bg-[#ff5a05] px-8 font-[var(--font-be-vietnam)] font-bold uppercase text-white transition hover:bg-[#ff6b1f]"
                style={{ fontSize: '11px', letterSpacing: '0.2px' }}
              >
                Book Another Slot
              </button>
            </div>
          </motion.div>
        ) : (
          <div className="flex flex-col gap-3 sm:gap-4">
            {/* Steps Indicator & Header */}
            <StaggerItem>
              <div className="flex flex-col gap-1 items-center text-center mb-0">
                <h2 className={`font-[var(--font-be-vietnam)] text-[24px] sm:text-[28px] font-medium tracking-tight mb-1 ${headerText}`}>
                  Book Your Free Consultation
                </h2>
                
                <span className={`inline-flex self-center items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${isDark ? "bg-[#ff5a05]/20 text-[#ff5a05]" : "bg-[#ff5a05]/10 text-[#ff5a05]"}`}>
                  Step {step} of 2
                </span>
                
                {step === 1 ? (
                  <>
                    <h3 className={`mt-2 font-[var(--font-be-vietnam)] text-[18px] sm:text-[20px] font-medium tracking-tight flex items-center justify-center gap-2 ${headerText}`}>
                      <CalendarIcon className="h-4 w-4 sm:h-5 sm:w-5 text-[#ff5a05]" /> Select Date & Time
                    </h3>
                    <p className={`text-[13px] font-[var(--font-inter)] ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                      Choose your preferred date and time below.
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className={`mt-2 font-[var(--font-be-vietnam)] text-[18px] sm:text-[20px] font-medium tracking-tight flex items-center justify-center gap-2 ${headerText}`}>
                      <User className="h-4 w-4 sm:h-5 sm:w-5 text-[#ff5a05]" /> Tell Us About Your Business
                    </h3>
                    <p className={`text-[13px] font-[var(--font-inter)] ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                      Please provide a few details so we can prepare for your consultation.
                    </p>
                  </>
                )}
              </div>
            </StaggerItem>

            {/* Error Message */}
            {errorMessage && step === 2 && (
              <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-[13px] font-medium">
                {errorMessage}
              </div>
            )}

            {/* Form Content Steps */}
            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-4 items-start"
                  >
                    {/* Calendar */}
                    <div className={`p-3.5 sm:p-4 rounded-[16px] border flex flex-col gap-3 sm:gap-4 ${cardBg}`}>
                      <div className="flex items-center justify-between">
                        <div className={`flex items-center gap-2 font-[var(--font-be-vietnam)] text-[15px] sm:text-[16px] font-bold ${headerText}`}>
                          <CalendarIcon className="h-4 w-4 text-[#ff5a05]" />
                          <span>{monthNames[month]} {year}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            aria-label="Previous Month"
                            onClick={handlePrevMonth}
                            className={`flex h-7 w-7 items-center justify-center rounded-md border text-sm transition ${isDark ? "border-white/10 bg-white/5 hover:bg-white/10 text-white" : "border-gray-200 bg-white hover:bg-gray-100 text-gray-700"}`}
                          >
                            <ChevronLeft className="h-3.5 w-3.5" />
                          </button>
                          <button
                            type="button"
                            aria-label="Next Month"
                            onClick={handleNextMonth}
                            className={`flex h-7 w-7 items-center justify-center rounded-md border text-sm transition ${isDark ? "border-white/10 bg-white/5 hover:bg-white/10 text-white" : "border-gray-200 bg-white hover:bg-gray-100 text-gray-700"}`}
                          >
                            <ChevronRight className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className={`grid grid-cols-7 text-center font-[var(--font-inter)] text-[10px] sm:text-[11px] font-bold uppercase tracking-wide ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                        <span>Sun</span>
                      </div>

                      <div className="grid grid-cols-7 gap-1 text-center font-[var(--font-inter)] text-[12px] sm:text-[13px]">
                        {Array.from({ length: startOffset }).map((_, i) => (
                          <div key={`empty-${i}`} className="h-8 sm:h-9" />
                        ))}
                        {Array.from({ length: daysInMonth }).map((_, i) => {
                          const dayNum = i + 1;
                          const isSelected = selectedDay === dayNum;
                          const isToday =
                            today.getDate() === dayNum &&
                            today.getMonth() === month &&
                            today.getFullYear() === year;
                            
                          const dateObj = new Date(year, month, dayNum);
                          const dayOfWeek = dateObj.getDay();
                          const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
                          
                          const isPast = dateObj < new Date(today.getFullYear(), today.getMonth(), today.getDate());
                          const isUnavailable = isWeekend || isPast;

                          return (
                            <button
                              key={`day-${dayNum}`}
                              type="button"
                              aria-label={`Select ${monthNames[month]} ${dayNum}`}
                              disabled={isUnavailable}
                              onClick={() => !isUnavailable && setSelectedDay(dayNum)}
                              className={`flex h-8 sm:h-9 w-full items-center justify-center rounded-lg text-[12px] sm:text-[13px] font-semibold transition ${
                                isUnavailable 
                                  ? "opacity-30 cursor-not-allowed" 
                                  : isSelected
                                    ? "bg-[#ff5a05] text-white shadow-md"
                                    : isToday
                                      ? `border border-[#ff5a05] ${isDark ? "text-white" : "text-gray-900"} ${dayHover}`
                                      : dayHover
                              }`}
                            >
                              {dayNum}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Time Slots */}
                    <div className="flex flex-col h-full gap-3 sm:gap-4">
                      <div className={`flex items-center justify-between font-[var(--font-inter)] text-[12px] sm:text-[13px] font-semibold ${labelText}`}>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-[#ff5a05]" />
                          <span>Select Time Slot</span>
                        </div>
                        {isLoadingSlots && <span className="text-[10px] text-[#ff5a05] animate-pulse">Loading...</span>}
                      </div>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-2 gap-1.5 max-h-[280px] overflow-y-auto pr-1">
                        {availableSlots.map((time) => {
                          const isSelected = selectedTime === time;
                          return (
                            <button
                              key={time}
                              type="button"
                              style={{ fontSize: "11px", padding: "6px 0" }}
                              onClick={() => setSelectedTime(time)}
                              className={`w-full rounded-[8px] font-medium flex items-center justify-center text-center transition border ${
                                isSelected
                                  ? "bg-[#ff5a05] border-[#ff5a05] text-white shadow-md font-semibold"
                                  : isDark
                                  ? "bg-transparent border-white/10 text-gray-300 hover:border-[#ff5a05]"
                                  : "bg-transparent border-gray-200 text-gray-700 hover:border-[#ff5a05]"
                              }`}
                            >
                              {time}
                            </button>
                          );
                        })}
                      </div>

                      <div className={`mt-auto flex flex-col items-center justify-center rounded-[10px] p-2.5 text-[11px] sm:text-[12px] border ${isDark ? "bg-white/5 border-white/5" : "bg-gray-50/50 border-gray-100"}`}>
                        <span className={`font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}>Selected Slot:</span>
                        <span className={`font-semibold text-[12px] sm:text-[13px] mt-0.5 ${headerText}`}>
                          {monthNames[month]} {selectedDay}, {selectedTime}
                        </span>
                      </div>
                    </div>

                    <div className="md:col-span-2 pt-0.5 sm:pt-1">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="flex w-full h-[43px] items-center justify-center gap-2 rounded-full bg-[#ff5a05] font-[var(--font-be-vietnam)] font-bold text-white transition uppercase hover:bg-[#ff6b1f] shadow-lg shadow-[#ff5a05]/20"
                        style={{ fontSize: '11px', letterSpacing: '0.2px' }}
                      >
                        Continue to Details <ArrowRight className="h-4 w-4" />
                      </button>
                      <p className={`text-center mt-2.5 text-[11px] sm:text-[12px] flex items-center justify-center gap-1.5 font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                        <Lock className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> Your information is secure and will not be shared.
                      </p>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-3.5"
                  >
                    {/* Row 1: Name and Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                      <label className={`mb-1 flex items-center gap-1.5 font-semibold font-[var(--font-inter)] ${labelText}`} style={{ fontSize: '11px' }}>
                          <User className="h-3 w-3 text-[#ff5a05]" /> Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={`w-full h-[38px] rounded-[10px] px-3 py-1.5 font-[var(--font-inter)] border focus:border-[#ff5a05] transition focus:outline-none ${inputBg}`}
                          style={{ fontSize: '11px' }}
                        />
                      </div>

                      <div>
                      <label className={`mb-1 flex items-center gap-1.5 font-semibold font-[var(--font-inter)] ${labelText}`} style={{ fontSize: '11px' }}>
                          <Mail className="h-3 w-3 text-[#ff5a05]" /> Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full h-[38px] rounded-[10px] px-3 py-1.5 font-[var(--font-inter)] border focus:border-[#ff5a05] transition focus:outline-none ${inputBg}`}
                          style={{ fontSize: '11px' }}
                        />
                      </div>
                    </div>

                    {/* Add Guests (Full Width) */}
                    <div>
                      {!showGuestInput ? (
                        <button
                          type="button"
                          onClick={() => setShowGuestInput(true)}
                          className={`w-full h-[38px] rounded-[10px] font-semibold transition flex items-center justify-center gap-2 cursor-pointer border ${isDark ? "border-white/10 bg-transparent hover:bg-white/5 text-gray-300" : "border-gray-200 bg-transparent hover:bg-gray-50 text-gray-700"}`}
                        >
                          <UserPlus className="h-4 w-4 text-[#ff5a05]" />
                          <span style={{ fontSize: '11px' }}>Add guests</span>
                        </button>
                      ) : (
                        <div>
                        <label className={`mb-1 flex items-center gap-1.5 font-semibold font-[var(--font-inter)] ${labelText}`} style={{ fontSize: '11px' }}>
                            <UserPlus className="h-3 w-3 text-[#ff5a05]" /> Guest Email
                          </label>
                          <input
                            type="email"
                            placeholder="Guest email address"
                            value={formData.guestEmail}
                            onChange={(e) => setFormData({ ...formData, guestEmail: e.target.value })}
                            className={`w-full h-[38px] rounded-[10px] px-3 py-1.5 font-[var(--font-inter)] border focus:border-[#ff5a05] transition focus:outline-none ${inputBg}`}
                          style={{ fontSize: '11px' }}
                          />
                        </div>
                      )}
                    </div>

                    {/* Row 2: Business / Talent Name */}
                    <div>
                      <label className={`mb-1 flex items-center gap-1.5 font-semibold font-[var(--font-inter)] ${labelText}`} style={{ fontSize: '11px' }}>
                        <Building2 className="h-3 w-3 text-[#ff5a05]" /> Business / Talent Name? *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter business or talent name"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className={`w-full h-[32px] rounded-[10px] px-3 py-1.5 font-[var(--font-inter)] border focus:border-[#ff5a05] transition focus:outline-none ${inputBg}`}
                        style={{ fontSize: '11px' }}
                      />
                    </div>

                    {/* Row 3: Website URL */}
                    <div>
                      <label className={`mb-1 flex items-center gap-1.5 font-semibold font-[var(--font-inter)] ${labelText}`} style={{ fontSize: '11px' }}>
                        <Globe className="h-3 w-3 text-[#ff5a05]" /> Website URL (If Applicable)
                      </label>
                      <input
                        type="url"
                        placeholder="https://yourwebsite.com"
                        value={formData.websiteUrl}
                        onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                        className={`w-full h-[32px] rounded-[10px] px-3 py-1.5 font-[var(--font-inter)] border focus:border-[#ff5a05] transition focus:outline-none ${inputBg}`}
                        style={{ fontSize: '11px' }}
                      />
                    </div>

                    {/* Row 4: Services Needed */}
                    <div className="relative" ref={dropdownRef}>
                      <label className={`mb-1 flex items-center gap-1.5 font-semibold font-[var(--font-inter)] ${labelText}`} style={{ fontSize: '11px' }}>
                        <Sparkles className="h-3 w-3 text-[#ff5a05]" /> Services Needed *
                      </label>

                      <button
                        type="button"
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className={`w-full h-[38px] flex items-center justify-between rounded-[10px] px-3 py-1.5 font-[var(--font-inter)] border transition focus:outline-none cursor-pointer text-left ${inputBg} ${isServicesOpen ? "border-[#ff5a05]" : ""}`}
                        style={{ fontSize: '11px' }}
                      >
                        <span className="truncate pr-2">
                          {selectedServices.length === 0
                            ? "Select services..."
                            : selectedServices.join(", ")}
                        </span>
                        <ChevronDown className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${isDark ? "text-gray-400" : "text-gray-500"} ${isServicesOpen ? "rotate-180" : ""}`} />
                      </button>

                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -5, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -5, scale: 0.98 }}
                            transition={{ duration: 0.15 }}
                            className={`absolute left-0 right-0 z-50 mt-1 rounded-xl border p-2 shadow-2xl backdrop-blur-md ${
                              isDark ? "bg-[#18181b] border-white/10 text-white" : "bg-white border-gray-100 text-gray-900"
                            }`}
                          >
                            <div className={`flex items-center justify-between px-2 py-1.5 mb-1 border-b ${isDark ? "border-white/10" : "border-gray-50"}`} style={{ fontSize: '11px' }}>
                              <span className={isDark ? "text-gray-400" : "text-gray-500"}>
                                Select all that apply
                              </span>
                              <button
                                type="button"
                                onClick={() => {
                                  if (selectedServices.length === serviceOptions.length) {
                                    setSelectedServices([]);
                                  } else {
                                    setSelectedServices([...serviceOptions]);
                                  }
                                }}
                                className="text-[#ff5a05] hover:underline font-semibold"
                              >
                                {selectedServices.length === serviceOptions.length ? "Deselect All" : "Select All"}
                              </button>
                            </div>

                            <div className="max-h-52 overflow-y-auto space-y-0.5 pr-1 font-[var(--font-inter)]">
                              {serviceOptions.map((opt) => {
                                const isChecked = selectedServices.includes(opt);
                                return (
                                  <label
                                    key={opt}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      toggleService(opt);
                                    }}
                                    className={`flex items-center gap-2 rounded-lg px-2 py-1.5 cursor-pointer transition select-none ${
                                      isChecked
                                        ? isDark
                                          ? "bg-[#ff5a05]/20 text-white font-medium"
                                          : "bg-[#ff5a05]/10 text-gray-900 font-medium"
                                        : isDark
                                        ? "hover:bg-white/5 text-gray-300"
                                        : "hover:bg-gray-50 text-gray-700"
                                    }`}
                                  >
                                    <div
                                      className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded border transition ${
                                        isChecked
                                          ? "border-[#ff5a05] bg-[#ff5a05] text-white"
                                          : isDark
                                          ? "border-white/30 bg-white/5"
                                          : "border-gray-300 bg-white"
                                      }`}
                                    >
                                      {isChecked && <Check className="h-2.5 w-2.5 stroke-[3]" />}
                                    </div>
                                    <span className="leading-tight" style={{ fontSize: '11px' }}>{opt}</span>
                                  </label>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Row 5: Challenges (Full Width) */}
                    <div>
                      <label className={`mb-1 flex items-center gap-1.5 font-semibold font-[var(--font-inter)] ${labelText}`} style={{ fontSize: '11px' }}>
                        <MessageSquare className="h-3 w-3 text-[#ff5a05]" /> What are your current challenges? *
                      </label>
                      <textarea
                        required
                        placeholder="Describe your current business challenges..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`w-full h-[70px] rounded-[10px] px-3 py-2 font-[var(--font-inter)] border focus:border-[#ff5a05] transition focus:outline-none resize-none ${inputBg}`}
                        style={{ fontSize: '11px' }}
                      />
                    </div>

                    <div className="pt-0.5 flex flex-col gap-1.5">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex w-full h-[43px] items-center justify-center rounded-full bg-[#ff5a05] font-[var(--font-be-vietnam)] font-bold text-white transition uppercase hover:bg-[#ff6b1f] shadow-lg shadow-[#ff5a05]/20 disabled:opacity-70 disabled:cursor-not-allowed"
                        style={{ fontSize: '11px', letterSpacing: '0.2px' }}
                      >
                        {isSubmitting ? "Processing..." : "Confirm & Book Consultation"}
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className={`font-[var(--font-be-vietnam)] font-semibold text-[#ff5a05] hover:text-[#ff6b1f] flex items-center justify-center gap-1.5 transition`}
                        style={{ fontSize: '11px' }}
                      >
                        <ArrowLeft className="h-3.5 w-3.5" /> Back to Date & Time
                      </button>
                    </div>
                    
                    <p className={`text-center mt-1 text-[11px] flex items-center justify-center gap-1.5 font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                      <Lock className="h-3 w-3" /> Your information is secure and will not be shared.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
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
