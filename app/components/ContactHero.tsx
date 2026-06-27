"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

// ─── Shared easing ────────────────────────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1] as const;

export default function ContactHero() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@unitedstrategicsolutions.com",
      href: "mailto:contact@unitedstrategicsolutions.com",
    },
    {
      icon: Phone,
      label: "Call us to phone",
      value: "+971 58 525 8431",
      href: "tel:+15011234567",
    },
    {
      icon: MapPin,
      label: "Locations",
      value: "United States · United Kingdom · U.A.E",
      href: undefined,
    },
  ];

  return (
    <section className="relative w-full bg-[#000] overflow-hidden py-28">

      {/* Ambient glow — top centre */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-full h-[800px]"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, #FF550033 0%, transparent 60%)",
        }}
      />
      {/* Ambient glow — bottom right accent */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] opacity-20"
        style={{
          background:
            "radial-gradient(circle at 100% 100%, #FF5500 0%, transparent 65%)",
        }}
      />

      {/* Giant watermark heading — floats down slowly */}
      <motion.div
        className="pointer-events-none absolute top-[20px] left-0 w-full flex justify-center select-none"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease }}
      >
        <h1
          className="font-bold uppercase text-[#fff]/[0.05] tracking-tight whitespace-nowrap"
          style={{ fontSize: "clamp(5rem, 14vw, 13rem)", fontFamily: "Poppins, sans-serif" }}
        >
          CONTACT
        </h1>
      </motion.div>

      <div className="relative mx-auto max-w-[1440px] px-[7.3%]">
        <div className="grid grid-cols-1 lg:grid-cols-[486fr_100fr_642fr] gap-y-12">

          {/* ── LEFT COLUMN ─────────────────────────────────────────── */}
          <div className="flex flex-col order-1 lg:order-none pt-[160px] lg:pt-[200px]">

            {/* Badge pill — drops down */}
            <motion.div
              className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/[0.03] px-5 py-[7px]"
              initial={{ opacity: 0, y: -18, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
            >
              <motion.span
                className="w-[7px] h-[7px] rounded-full bg-[#ff5a14]"
                animate={{ scale: [1, 1.35, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              />
              <span className="text-[12px] font-medium tracking-[2.16px] text-[#cfcfcf]">
                CONTACT
              </span>
            </motion.div>

            {/* Heading — slides in from left with word-stagger feel */}
            <motion.h2
              className="mt-6 font-semibold text-white leading-[1] whitespace-nowrap"
              style={{ fontSize: "clamp(2.6rem, 4.2vw, 3.75rem)", fontFamily: "Poppins, sans-serif" }}
              initial={{ opacity: 0, x: -50, filter: "blur(12px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.75, delay: 0.25, ease }}
            >
              get in{" "}
              <motion.span
                className="text-[#ff5a14] italic font-medium"
                style={{ fontFamily: "'Playfair Display', serif" }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.45, ease }}
              >
                touch
              </motion.span>
            </motion.h2>

            {/* Paragraph — fades up */}
            <motion.p
              className="mt-6 max-w-[380px] text-[#9d9d9d] text-[13px] leading-[1.6]"
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.35, ease }}
            >
              <b>Ready to grow your business with USS? </b> Whether you're starting from scratch or looking to improve your marketing, we're here to help.
            </motion.p>

            {/* Divider line — draws itself */}
            <motion.div
              className="mt-8 h-px bg-gradient-to-r from-white/15 via-[#ff5a14]/30 to-transparent"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.5, ease }}
            />

            {/* Contact info cards — staggered slide from left */}
            <div className="mt-6 flex flex-col gap-4">
              {contactItems.map(({ icon: Icon, label, value, href }, index) => {
                const Wrapper = href ? "a" : "div";
                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.65, delay: 0.55 + index * 0.12, ease }}
                  >
                    <Wrapper
                      {...(href ? { href } : {})}
                      className="group flex items-center justify-between gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.08] px-[21px] py-[18px] min-h-[90px] transition-all duration-300 hover:bg-white/[0.05] hover:border-white/[0.12] hover:translate-x-1"
                    >
                      <div className="flex items-center gap-5">
                        <motion.span
                          className="flex items-center justify-center w-12 h-12 rounded-full bg-white/[0.06] shrink-0 transition-colors duration-300 group-hover:bg-[#ff5a14]/15"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Icon className="w-5 h-5 text-white transition-colors duration-300 group-hover:text-[#ff5a14]" strokeWidth={1.75} />
                        </motion.span>
                        <span className="flex flex-col">
                          <span className="text-white font-medium text-[13px]">
                            {label}
                          </span>
                          <span className="text-[#8c8c8c] text-[12px]">{value}</span>
                        </span>
                      </div>
                      <motion.span
                        className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 shrink-0 transition-all duration-300 group-hover:border-[#ff5a14]/40 group-hover:bg-[#ff5a14]/10"
                        whileHover={{ rotate: 45 }}
                        transition={{ duration: 0.25 }}
                      >
                        <ArrowUpRight className="w-4 h-4 text-white/70 group-hover:text-[#ff5a14]" strokeWidth={1.75} />
                      </motion.span>
                    </Wrapper>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* GAP COLUMN */}
          <div className="hidden lg:block" />

          {/* ── RIGHT COLUMN — Form slides in from right ─────────────── */}
          <motion.div
            className="order-2 lg:order-none flex items-end"
            initial={{ opacity: 0, x: 60, filter: "blur(16px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.85, delay: 0.3, ease }}
          >
            <form
              onSubmit={handleSubmit}
              className="w-full rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-[21px] flex flex-col gap-[18px] backdrop-blur-sm"
              style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)" }}
            >

              {/* Form field label */}
              {/* <p className="text-white/40 text-[10px] font-medium tracking-[0.2em] uppercase px-1">
                Send us a message
              </p> */}

              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className="w-full h-[78px] rounded-2xl border bg-white/[0.04] px-6 text-white placeholder:text-white text-[14px] outline-none transition-all duration-300"
                  style={{
                    borderColor: focused === "name" ? "rgba(255,90,20,0.5)" : "rgba(255,255,255,0.08)",
                    boxShadow: focused === "name" ? "0 0 0 3px rgba(255,90,20,0.08)" : "none",
                  }}
                />
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6, ease }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className="w-full h-[78px] rounded-2xl border bg-white/[0.03] px-6 text-white placeholder:text-white text-[14px] outline-none transition-all duration-300"
                  style={{
                    borderColor: focused === "email" ? "rgba(255,90,20,0.5)" : "rgba(255,255,255,0.08)",
                    boxShadow: focused === "email" ? "0 0 0 3px rgba(255,90,20,0.08)" : "none",
                  }}
                />
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7, ease }}
              >
                <textarea
                  name="message"
                  placeholder="Message"
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className="w-full h-[190px] rounded-2xl border bg-[#111] px-6 py-5 text-white placeholder:text-white text-[14px] outline-none resize-none transition-all duration-300"
                  style={{
                    borderColor: focused === "message" ? "rgba(255,90,20,0.5)" : "rgba(255,255,255,0.08)",
                    boxShadow: focused === "message" ? "0 0 0 3px rgba(255,90,20,0.08)" : "none",
                  }}
                />
              </motion.div>

              {/* Submit button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8, ease }}
              >
                <motion.button
                  type="submit"
                  className="w-full h-[58px] rounded-2xl bg-[#ff5a14] text-white font-semibold text-[14px] tracking-wide relative overflow-hidden"
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Shimmer on hover */}
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full"
                    whileHover={{ translateX: "200%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                  <span className="relative z-10">Send&nbsp;&nbsp;Message</span>
                </motion.button>
              </motion.div>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}