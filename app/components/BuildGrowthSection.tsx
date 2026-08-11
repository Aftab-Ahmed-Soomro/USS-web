"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const performanceCards = [
  { id: "01", title: "Marketing Strategy", desc: "Turning business goals into clear marketing plans.", link: "Explore Strategy", href: "#marketing-strategy" },
  { id: "02", title: "Meta Ads", desc: "Campaigns designed to reach and convert the right audience.", link: "Explore Meta Ads", href: "#meta-ads" },
  { id: "03", title: "Google Ads", desc: "Capturing demand when customers are ready to purchase.", link: "Explore Google Ads", href: "#paid-search" },
  { id: "04", title: "Email Marketing", desc: "Driving repeat purchases through personalised communication.", link: "Explore Email Marketing", href: "#email-marketing" },
  { id: "05", title: "WhatsApp & SMS", desc: "Direct communication that keeps your audience connected.", link: "Explore WhatsApp & SMS", href: "#whatsapp-sms" },
];

const creativeCards = [
  { id: "01", title: "Social Media", desc: "Build strong social presence across Meta, LinkedIn, Tiktok and more", link: "Explore Social Media", href: "#social-media" },
  { id: "02", title: "Content Creation", desc: "Creating content that captures attention and reflects your brand.", link: "Explore Content Creation", href: "#content-creation" },
  { id: "03", title: "Website Design", desc: "Creating visually strong UX designs that helps users find what they need", link: "Explore Website Design", href: "#web-design-development" },
  { id: "04", title: "Website Development", desc: "Building fast, responsive websites that perform.", link: "Explore Development", href: "#web-design-development" },
  { id: "05", title: "Branding & Graphics", desc: "Creating visual identities people recognise and remember.", link: "Explore Branding", href: "#branding-graphics" },
];

export function BuildGrowthSection() {
  const [activeTab, setActiveTab] = useState<"performance" | "creative">("performance");


  return (
    <section id="build-growth" className="bg-black text-white pt-[60px] pb-0 sm:pb-10 sm:pt-[100px] flex flex-col items-center overflow-hidden">
      <motion.div
        className="text-center max-w-[1200px]  mx-auto w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* HOW WE BUILD GROWTH */}
        <p className="font-[var(--font-be-vietnam)] font-medium text-[10px] sm:text-[12px] leading-none tracking-[2.64px] uppercase text-[#F4F2EE8F] mb-4 sm:mb-8 px-6">
          How we build growth
        </p>

        {/* HEADINGS */}
        <h2 className="flex flex-col items-center gap-1 sm:gap-2">
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 px-4">
            <span className="timesFontFamily italic font-normal text-[40px] sm:text-[72px] leading-[1.1] sm:leading-[64.51px] tracking-[-1.15px] lowercase text-[#FF5500]">
              performance
            </span>
            <span className="font-[var(--font-be-vietnam)] font-medium text-[30px] sm:text-[56px] leading-[1.1] sm:leading-[64.51px] tracking-[-1.15px] lowercase mt-1">
              and
            </span>
            <span className="timesFontFamily italic font-normal text-[40px] sm:text-[72px] leading-[1.1] sm:leading-[64.51px] tracking-[-1.15px] lowercase text-[#FF5500]">
              creative
            </span>
          </div>
          <div className="font-[var(--font-be-vietnam)] font-medium text-[30px] sm:text-[56px] leading-[1.1] sm:leading-[64.51px] tracking-[-1.15px] lowercase">
            connected by strategy.
          </div>
        </h2>

        {/* DESCRIPTION */}
        <p className="font-[var(--font-be-vietnam)] font-light text-[13px] sm:text-[16.8px] leading-[1.6] sm:leading-[26.88px] text-[#F4F2EE8F] mt-6 sm:mt-8 max-w-[550px] mx-auto px-6">
          Creative builds brands, performance drives growth &
          <br className="hidden sm:block" /> strategy brings both together to create marketing that delivers <br className="block sm:hidden" /> long term results.
        </p>
      </motion.div>

      {/* IMAGE */}
      <motion.div
        className="relative w-full max-w-[1200px]  aspect-[1000/600] mt-10 sm:mt-0 px-4"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/assets/ChatGPT-Generated.webp"
          alt="Performance and Creative overlap"
          fill
          className="object-contain mix-blend-screen brightness-95 contrast-110 pr-6"
          style={{
            WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 60%, transparent 100%)",
            maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 60%, transparent 100%)",
          }}
          sizes="(max-width: 1024px) 100vw, 1000px"
        />

        {/* Clickable Overlay for Left Circle (Performance) */}
        <button
          onClick={() => {
            setActiveTab("performance");
            document.getElementById("services-grid")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="absolute left-[2%] top-[12%] w-[45%] h-[76%] rounded-full cursor-pointer z-10 focus:outline-none"
          title="Click to view Performance services"
          aria-label="Select Performance Services"
        />

        {/* Clickable Overlay for Right Circle (Creative) */}
        <button
          onClick={() => {
            setActiveTab("creative");
            document.getElementById("services-grid")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="absolute right-[4%] top-[12%] w-[45%] h-[76%] rounded-full cursor-pointer z-10 focus:outline-none"
          title="Click to view Creative services"
          aria-label="Select Creative Services"
        />
      </motion.div>

      {/* TOGGLES */}
      <motion.div
        id="services-grid"
        className="mt-8 sm:mt-4 flex items-center justify-center p-1.5 rounded-full bg-[#111111] border border-white/5 scroll-mt-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <button
          onClick={() => setActiveTab("performance")}
          className={`flex items-center gap-3 px-5 sm:px-8 py-3 sm:py-3.5 rounded-full transition-colors duration-300 ${activeTab === "performance" ? "bg-[#FF5500]" : "bg-transparent hover:bg-white/5"
            }`}
        >
          <span className={`font-semibold text-[10px] leading-none uppercase tracking-[2px] transition-colors duration-300 ${activeTab === "performance" ? "text-white" : "text-[#FFFFFFB2]"
            }`}>
            01
          </span>
          <span className={`font-medium text-[13px] sm:text-[15px] leading-none tracking-[-0.38px] transition-colors duration-300 ${activeTab === "performance" ? "text-white" : "text-[#FFFFFFB2]"
            }`}>
            Performance
          </span>
        </button>

        <button
          onClick={() => setActiveTab("creative")}
          className={`flex items-center gap-3 px-5 sm:px-8 py-3 sm:py-3.5 rounded-full transition-colors duration-300 ${activeTab === "creative" ? "bg-[#FF5500]" : "bg-transparent hover:bg-white/5"
            }`}
        >
          <span className={`font-semibold text-[10px] leading-none uppercase tracking-[2px] transition-colors duration-300 ${activeTab === "creative" ? "text-white" : "text-[#FFFFFFB2]"
            }`}>
            02
          </span>
          <span className={`font-medium text-[13px] sm:text-[15px] leading-none tracking-[-0.38px] transition-colors duration-300 ${activeTab === "creative" ? "text-white" : "text-[#FFFFFFB2]"
            }`}>
            Creative
          </span>
        </button>
      </motion.div>

      {/* TAB CONTENTS WITH BEHTREEN ANIMATION */}
      <div className="relative w-full max-w-[1200px] mx-auto mt-8 sm:mt-24 px-4 pb-20 grid grid-cols-1 grid-rows-1">

        {/* PERFORMANCE TAB CONTENT */}
        <div
          className={`col-start-1 row-start-1 transition-all duration-700 ease-out w-full flex flex-col xl:items-end ${activeTab === "performance"
            ? "opacity-100 translate-y-0 pointer-events-auto scale-100 blur-none"
            : "opacity-0 translate-y-8 pointer-events-none scale-[0.98] blur-[2px]"
            }`}
        >
          {/* Left Circle & Content */}
          <div className="hidden sm:block xl:absolute xl:-left-24 2xl:-left-44 xl:top-0 relative w-full max-w-[450px] sm:max-w-[750px] aspect-square flex flex-col items-start justify-center xl:justify-start xl:pt-16 shrink-0 z-0 mx-auto xl:mx-0">
            <div className="absolute inset-0 z-0 pointer-events-none -left-[10%] xl:-left-[15%] 2xl:-left-[45%] scale-[1.35]">
              <Image
                src="/assets/performanceCircle2.webp"
                alt="Performance Circle"
                fill
                className="object-contain mix-blend-screen object-center"
                style={{
                  WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 40%, transparent 70%)",
                  maskImage: "radial-gradient(circle at 50% 50%, black 40%, transparent 70%)",
                }}
                sizes="(max-width: 1280px) 100vw, 600px"
              />
            </div>
            <div className="relative z-10 flex flex-col items-start gap-2 pl-0 xl:pl-14 2xl:pl-0 text-left mt-10 xl:mt-0 mb-6 sm:mb-0 sm:pt-50">
              <h3 className="font-[var(--font-be-vietnam)] font-semibold text-[32px] leading-none text-white capitalize">
                Performance
              </h3>
              <p className="font-[var(--font-be-vietnam)] font-normal text-[13px] sm:text-[16px] leading-none text-white mt-1">
                Growth through data
              </p>
              <div
                onClick={() => setActiveTab("creative")}
                className="mt-4 bg-white text-black font-[var(--font-be-vietnam)] font-medium text-xs leading-[21.43px] tracking-[-0.38px] px-4 sm:px-6 py-2.5 rounded-full hover:bg-gray-200 transition-colors cursor-pointer inline-flex items-center justify-center"
              >
                Explore Creative services
              </div>
            </div>
          </div>

          {/* Right Cards Wrapper */}
          <div className="w-full xl:w-auto relative z-10 mt-10 xl:mt-0">
            {/* Mobile View: Grid Layout (2 in a row, all cards visible) */}
            <div className="grid grid-cols-2 gap-3 w-full sm:hidden">
              {performanceCards.map((card, idx) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={activeTab === "performance" ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.45, delay: idx * 0.06, ease: "easeOut" }}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  className={`group relative flex flex-col justify-between ${idx === 4 ? "col-span-2 min-h-[160px]" : "col-span-1 min-h-[180px]"} bg-[#0c0c0c] border border-white/10 rounded-2xl p-3.5 hover:bg-[#FF5500] hover:border-[#FF5500]/50 transition-colors duration-300 cursor-pointer overflow-hidden shadow-lg`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-1.5">
                      <span className="font-[var(--font-be-vietnam)] font-light text-[24px] leading-none text-white">{card.id}</span>
                      <div className="w-3.5 h-3.5 border-t-[1.5px] border-r-[1.5px] border-[#FF5500] group-hover:border-white transition-colors duration-300 mt-0.5" />
                    </div>
                    <h4 className="font-[var(--font-be-vietnam)] font-medium text-[15px] leading-[1.25] tracking-[-0.3px] text-white">{card.title}</h4>
                    <p className="font-[var(--font-be-vietnam)] font-light text-[11px] leading-[1.35] text-[#A3A3A3] group-hover:text-white/90 mt-1 line-clamp-3">{card.desc}</p>
                  </div>
                  <div className="mt-auto pt-2 flex items-center">
                    <a href={card.href} className="flex items-center justify-between gap-1 w-full bg-[#FF5500] group-hover:bg-white text-white group-hover:text-black font-[var(--font-be-vietnam)] font-medium text-[10px] leading-none px-3 py-2 rounded-full transition-colors duration-300 cursor-pointer">
                      <span className="truncate">{card.link}</span>
                      <span className="text-[12px] leading-none shrink-0">&gt;</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Desktop / Tablet View: Grid Layout */}
            <div className="hidden sm:flex flex-col gap-4 sm:gap-6 items-center xl:items-end">
              {/* Top Row (Cards 1, 2) */}
              <div className="flex flex-row gap-4 sm:gap-6 justify-center xl:justify-end w-full">
                {performanceCards.slice(0, 2).map((card, idx) => (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={activeTab === "performance" ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                    className="group relative flex flex-col justify-between w-[268px] h-[332px] bg-[#0c0c0c] border border-white/5 rounded-2xl px-4 py-6 hover:bg-[#FF5500] hover:border-[#FF5500]/50 transition-colors duration-300 cursor-pointer overflow-hidden shrink-0 shadow-lg"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="font-[var(--font-be-vietnam)] font-light text-[40px] leading-[40px] text-white">{card.id}</span>
                        <div className="w-5 h-5 border-t-[1.5px] border-r-[1.5px] border-[#FF5500] group-hover:border-white transition-colors duration-300 mt-2" />
                      </div>
                      <h4 className="font-[var(--font-be-vietnam)] font-medium text-[24px] leading-[29.4px] tracking-[-0.7px] text-white pr-4 whitespace-nowrap">{card.title}</h4>
                      <p className="font-[var(--font-be-vietnam)] font-light text-[16px] leading-[24.38px] text-[#A3A3A3] group-hover:text-white/90 mt-4">{card.desc}</p>
                    </div>
                    <div className="mt-auto pt-6 flex items-center">
                      <a href={card.href} className="flex items-center gap-1.5 bg-[#FF5500] group-hover:bg-white text-white group-hover:text-black font-[var(--font-be-vietnam)] font-medium text-xs leading-[20px] px-5 py-2.5 rounded-full transition-colors duration-300 cursor-pointer">
                        {card.link}
                        <span className="text-[14px] leading-none mb-[1px] ml-1">&gt;</span>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Bottom Row (Cards 3, 4, 5) */}
              <div className="flex flex-row flex-wrap xl:flex-nowrap gap-4 sm:gap-6 justify-center xl:justify-end w-full mt-2 sm:mt-0">
                {performanceCards.slice(2).map((card, idx) => (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={activeTab === "performance" ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.45, delay: (idx + 2) * 0.08, ease: "easeOut" }}
                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                    className="group relative flex flex-col justify-between w-[268px] h-[332px] bg-[#0c0c0c] border border-white/5 rounded-2xl px-4 py-6 hover:bg-[#FF5500] hover:border-[#FF5500]/50 transition-colors duration-300 cursor-pointer overflow-hidden shrink-0 shadow-lg"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="font-[var(--font-be-vietnam)] font-light text-[40px] leading-[40px] text-white">{card.id}</span>
                        <div className="w-5 h-5 border-t-[1.5px] border-r-[1.5px] border-[#FF5500] group-hover:border-white transition-colors duration-300 mt-2" />
                      </div>
                      <h4 className="font-[var(--font-be-vietnam)] font-medium text-[24px] leading-[29.4px] tracking-[-0.7px] text-white pr-4">{card.title}</h4>
                      <p className="font-[var(--font-be-vietnam)] font-light text-[16px] leading-[24.38px] text-[#A3A3A3] group-hover:text-white/90 mt-4">{card.desc}</p>
                    </div>
                    <div className="mt-auto pt-6 flex items-center">
                      <a href={card.href} className="flex items-center gap-1.5 bg-[#FF5500] group-hover:bg-white text-white group-hover:text-black font-[var(--font-be-vietnam)] font-medium text-xs leading-[20px] px-5 py-2.5 rounded-full transition-colors duration-300 whitespace-nowrap cursor-pointer">
                        {card.link}
                        <span className="text-[14px] leading-none mb-[1px] ml-1">&gt;</span>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CREATIVE TAB CONTENT */}
        <div
          className={`col-start-1 row-start-1 transition-all duration-700 ease-out w-full flex flex-col xl:items-end ${activeTab === "creative"
            ? "opacity-100 translate-y-0 pointer-events-auto scale-100 blur-none"
            : "opacity-0 translate-y-8 pointer-events-none scale-[0.98] blur-[2px]"
            }`}
        >
          {/* Left Circle & Content */}
          <div className="hidden sm:block xl:absolute xl:-left-24 2xl:-left-44 xl:top-0 relative w-full max-w-[450px] sm:max-w-[650px] aspect-square flex flex-col items-start justify-center xl:justify-start xl:pt-16 shrink-0 z-0 mx-auto xl:mx-0">
            <div className="absolute inset-0 z-0 pointer-events-none -left-[22%] xl:-left-[35%] 2xl:-left-[65%] scale-[1.55]">
              <Image
                src="/assets/creativeCircle.png"
                alt="Creative Circle"
                fill
                className="object-contain mix-blend-screen object-center"
                style={{
                  WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 40%, transparent 80%)",
                  maskImage: "radial-gradient(circle at 50% 50%, black 40%, transparent 80%)",
                }}
                sizes="(max-width: 1280px) 100vw, 600px"
              />
            </div>
            <div className="relative z-10 flex flex-col items-start gap-2 pl-0 xl:pl-4 2xl:pl-0 text-left mt-10 xl:mt-0 sm:pt-50">
              <h3 className="font-[var(--font-be-vietnam)] font-semibold text-[32px] leading-none text-white xl:text-black capitalize max-xl:drop-shadow-lg max-xl:[text-shadow:_0_2px_16px_rgba(0,0,0,0.95),_0_0_25px_rgba(0,0,0,0.9)]">
                Creative
              </h3>
              <p className="font-[var(--font-be-vietnam)] font-normal text-[13px] leading-none text-white xl:text-black mt-1 max-xl:drop-shadow-md max-xl:[text-shadow:_0_2px_14px_rgba(0,0,0,0.95),_0_0_20px_rgba(0,0,0,0.9)]">
                Brands people remember
              </p>
              <div
                onClick={() => setActiveTab("performance")}
                className="mt-4 bg-[#FF5500] text-white font-[var(--font-be-vietnam)] font-medium text-xs leading-[21.43px] tracking-[-0.38px] px-4 sm:px-6 py-2.5 rounded-full hover:bg-[#ff5500]/80 transition-colors cursor-pointer inline-flex items-center justify-center"
              >
                Explore Performance services
              </div>
            </div>
          </div>

          {/* Right Cards Wrapper */}
          <div className="w-full xl:w-auto relative z-10 mt-10 xl:mt-0">
            {/* Mobile View: Grid Layout (2 in a row, all cards visible) */}
            <div className="grid grid-cols-2 gap-3 w-full sm:hidden">
              {creativeCards.map((card, idx) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={activeTab === "creative" ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.45, delay: idx * 0.06, ease: "easeOut" }}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  className={`group relative flex flex-col justify-between ${idx === 4 ? "col-span-2 min-h-[140px]" : "col-span-1 min-h-[185px]"} bg-[#0c0c0c] border border-white/10 rounded-2xl p-3.5 hover:bg-[#FF5500] hover:border-[#FF5500]/50 transition-colors duration-300 cursor-pointer overflow-hidden shadow-lg`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-1.5">
                      <span className="font-[var(--font-be-vietnam)] font-light text-[24px] leading-none text-white">{card.id}</span>
                      <div className="w-3.5 h-3.5 border-t-[1.5px] border-r-[1.5px] border-[#FF5500] group-hover:border-white transition-colors duration-300 mt-0.5" />
                    </div>
                    <h4 className="font-[var(--font-be-vietnam)] font-medium text-[15px] leading-[1.25] tracking-[-0.3px] text-white">{card.title}</h4>
                    <p className="font-[var(--font-be-vietnam)] font-light text-[11px] leading-[1.35] text-[#A3A3A3] group-hover:text-white/90 mt-1 line-clamp-3">{card.desc}</p>
                  </div>
                  <div className="mt-auto pt-2 flex items-center">
                    <a href={card.href} className="flex items-center justify-between gap-1 w-full bg-white text-black group-hover:bg-white group-hover:text-black font-[var(--font-be-vietnam)] font-medium text-[10px] leading-none px-3 py-2 rounded-full transition-colors duration-300 cursor-pointer">
                      <span className="truncate">{card.link}</span>
                      <span className="text-[12px] leading-none shrink-0">&gt;</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Desktop / Tablet View: Grid Layout */}
            <div className="hidden sm:flex flex-col gap-4 sm:gap-6 items-center xl:items-end">
              {/* Top Row (Cards 1, 2) */}
              <div className="flex flex-row gap-4 sm:gap-6 justify-center xl:justify-end w-full">
                {creativeCards.slice(0, 2).map((card, idx) => (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={activeTab === "creative" ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                    className="group relative flex flex-col justify-between w-[268px] h-[332px] bg-[#0c0c0c] border border-white/5 rounded-2xl px-4 py-6 hover:bg-[#FF5500] hover:border-[#FF5500]/50 transition-colors duration-300 cursor-pointer overflow-hidden shrink-0 shadow-lg"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="font-[var(--font-be-vietnam)] font-light text-[40px] leading-[40px] text-white">{card.id}</span>
                        <div className="w-5 h-5 border-t-[1.5px] border-r-[1.5px] border-[#FF5500] group-hover:border-white transition-colors duration-300 mt-2" />
                      </div>
                      <h4 className="font-[var(--font-be-vietnam)] font-medium text-[24px] leading-[29.4px] tracking-[-0.7px] text-white pr-4 whitespace-nowrap">{card.title}</h4>
                      <p className="font-[var(--font-be-vietnam)] font-light text-[16px] leading-[24.38px] text-[#A3A3A3] group-hover:text-white/90 mt-4">{card.desc}</p>
                    </div>
                    <div className="mt-auto pt-6 flex items-center">
                      <a href={card.href} className="flex items-center gap-1.5 bg-white text-black group-hover:bg-white group-hover:text-black font-[var(--font-be-vietnam)] font-medium text-xs leading-[20px] px-5 py-2.5 rounded-full transition-colors duration-300 cursor-pointer">
                        {card.link}
                        <span className="text-[14px] leading-none mb-[1px] ml-1">&gt;</span>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Bottom Row (Cards 3, 4, 5) */}
              <div className="flex flex-row flex-wrap xl:flex-nowrap gap-4 sm:gap-6 justify-center xl:justify-end w-full mt-2 sm:mt-0">
                {creativeCards.slice(2).map((card, idx) => (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={activeTab === "creative" ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.45, delay: (idx + 2) * 0.08, ease: "easeOut" }}
                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                    className="group relative flex flex-col justify-between w-[268px] h-[332px] bg-[#0c0c0c] border border-white/5 rounded-2xl px-4 py-6 hover:bg-[#FF5500] hover:border-[#FF5500]/50 transition-colors duration-300 cursor-pointer overflow-hidden shrink-0 shadow-lg"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="font-[var(--font-be-vietnam)] font-light text-[40px] leading-[40px] text-white">{card.id}</span>
                        <div className="w-5 h-5 border-t-[1.5px] border-r-[1.5px] border-[#FF5500] group-hover:border-white transition-colors duration-300 mt-2" />
                      </div>
                      <h4 className="font-[var(--font-be-vietnam)] font-medium text-[24px] leading-[29.4px] tracking-[-0.7px] text-white pr-4 whitespace-nowrap">{card.title}</h4>
                      <p className="font-[var(--font-be-vietnam)] font-light text-[16px] leading-[24.38px] text-[#A3A3A3] group-hover:text-white/90 mt-4">{card.desc}</p>
                    </div>
                    <div className="mt-auto pt-6 flex items-center">
                      <a href={card.href} className="flex items-center gap-1.5 bg-white text-black group-hover:bg-white group-hover:text-black font-[var(--font-be-vietnam)] font-medium text-xs leading-[20px] px-5 py-2.5 rounded-full transition-colors duration-300 whitespace-nowrap cursor-pointer">
                        {card.link}
                        <span className="text-[14px] leading-none mb-[1px] ml-1">&gt;</span>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
