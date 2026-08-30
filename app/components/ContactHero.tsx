"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { LightConsultationForm } from "./ConsultationForm";

// ─── Shared easing ────────────────────────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1] as const;

export default function ContactHero() {
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@unitedstrategicsolutions.com",
      href: "mailto:contact@unitedstrategicsolutions.com",
    },
    {
      icon: Phone,
      label: "Call",
      value: "+971 58 525 8431",
      href: "tel:+971585258431",
    },
    {
      icon: MapPin,
      label: "Locations",
      value: "US | UAE | UK ",
      href: undefined,
    },
  ];

  return (
    <section className="relative w-full bg-[#000] overflow-hidden pb-10 pt-24 px-6 sm:py-28">

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
          className="font-bold uppercase text-[#fff]/[0.05] tracking-tight whitespace-nowrap text-[64px] min-[375px]:text-[80px] sm:text-[clamp(5rem,14vw,13rem)]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          CONTACT
        </h1>
      </motion.div>

      <div className="relative mx-auto max-w-[1200px] xl:max-w-[1300px]">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,500px)_minmax(0,640px)] gap-10 lg:items-start lg:justify-between pt-12 sm:pt-20 lg:pt-24">

          {/* ── LEFT COLUMN ─────────────────────────────────────────── */}
          <div className="flex flex-col">

            {/* Badge pill — drops down */}
            <motion.div
              className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/[0.03] px-5 py-[7px]"
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
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
              className="mt-6 font-medium text-white leading-[1] whitespace-nowrap text-[36px] min-[375px]:text-[42px] sm:text-[56px] tracking-[-1.5px]"
              style={{ fontFamily: "Poppins, sans-serif" }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.25, ease }}
            >
              get in{" "}
              <motion.span
                className="text-[#ff5a14] italic font-normal text-[48px] min-[375px]:text-[52px] sm:text-[72px]"
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
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
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
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.65, delay: 0.55 + index * 0.12, ease }}
                  >
                    <Wrapper
                      {...(href ? { href } : {})}
                      className="group flex items-center justify-between gap-3 sm:gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.08] px-4 sm:px-[21px] py-[18px] min-h-[90px] transition-all duration-300 hover:bg-white/[0.05] hover:border-white/[0.12] hover:translate-x-1"
                    >
                      <div className="flex items-center gap-3 sm:gap-5 min-w-0 flex-1">
                        <motion.span
                          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/[0.06] shrink-0 transition-colors duration-300 group-hover:bg-[#ff5a14]/15"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-colors duration-300 group-hover:text-[#ff5a14]" strokeWidth={1.75} />
                        </motion.span>
                        <span className="flex flex-col min-w-0">
                          <span className="text-white font-medium text-[12px] sm:text-[13px]">
                            {label}
                          </span>
                          <span className="text-[#8c8c8c] text-[11px] sm:text-[12px] break-all sm:break-normal leading-tight mt-0.5">{value}</span>
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


          {/* ── RIGHT COLUMN — Form slides in from right ─────────────── */}
          <motion.div
            className="w-full flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.3, ease }}
          >
            <LightConsultationForm className="w-full" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}