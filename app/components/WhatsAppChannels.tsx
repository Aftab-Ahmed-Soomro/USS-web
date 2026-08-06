"use client";

import { useState } from "react";
import Image from "next/image";
import FadeUp from "./FadeUp";

const tabData = {
  whatsapp: {
    leftCards: [
      {
        icon: "/assets/whatsApp/1.png",
        subtitle: "AVG REPLY",
        title: "< 3s",
        heading: "Instant Conversations",
        description: "AI powered replies keep conversations moving 24/7",
        align: "right" as const,
      },
      {
        icon: "/assets/whatsApp/2.png",
        subtitle: "CONVERSIONS",
        title: "+42%",
        heading: "More Enquiries",
        description: "Direct conversations help convert interest into enquiries",
        align: "right" as const,
      },
    ],
    rightCards: [
      {
        icon: "/assets/whatsApp/3.png",
        subtitle: "ENGAGEMENT",
        title: "98%",
        heading: "Higher Open Rates",
        description: "Messages are read quickly, encouraging faster customer responses",
        align: "left" as const,
      },
      {
        icon: "/assets/whatsApp/4.png",
        subtitle: "AVAILABILITY",
        title: "24/7",
        heading: "Human + AI",
        description: "Automation handles routine messages while your team steps in when needed.",
        align: "left" as const,
      },
    ],
    image: "/assets/whatsApp/mobile.png",
  },
  sms: {
    leftCards: [
      {
        icon: "/assets/whatsApp/1.png",
        subtitle: "DELIVERY",
        title: "< 5s",
        heading: "Instant Delivery",
        description: "Messages are delivered immediately for time sensitive communication",
        align: "right" as const,
      },
      {
        icon: "/assets/whatsApp/2.png",
        subtitle: "RESPONSE",
        title: "Fast",
        heading: "Time Sensitive Campaigns",
        description: "Perfect for reminders, confirmations and limited time offers",
        align: "right" as const,
      },
    ],
    rightCards: [
      {
        icon: "/assets/whatsApp/3.png",
        subtitle: "OPEN RATE",
        title: "98%",
        heading: "High Visibility",
        description: "SMS reaches customers quickly with exceptional read rates",
        align: "left" as const,
      },
      {
        icon: "/assets/whatsApp/4.png",
        subtitle: "REACH",
        title: "100%",
        heading: "No App Required",
        description: "Customers receive messages directly on their mobile phone",
        align: "left" as const,
      },
    ],
    image: "/assets/whatsApp/sms.png",
  },
};

export default function WhatsAppChannels() {
  const [activeTab, setActiveTab] = useState<"whatsapp" | "sms">("whatsapp");

  const currentData = tabData[activeTab];

  return (
    <section className="relative w-full overflow-hidden bg-black py-[80px] lg:py-[80px] px-4 sm:px-6">
      <div className="mx-auto max-w-[1200px]">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-[900px] mx-auto">
          <FadeUp delay={0.1}>
            <h2 className="text-white text-center">
              <span className="font-medium text-[32px] sm:text-[56px] leading-[1.15] sm:leading-[63px] tracking-[-1px] sm:tracking-[-1.5px]">
                the power of{" "}
                <br className="block sm:hidden" />
                {/* <span className="hidden sm:inline"> </span> */}

              </span>
              <span
                className="italic font-normal text-[38px] sm:text-[72px] leading-[1.15] sm:leading-[63px] tracking-[-1px] sm:tracking-[-1.5px] text-[#ff5a05] inline"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                direct messaging
                {/* <br className="block sm:hidden" /> */}
                {/* <span className="hidden sm:inline"> </span> */}
                {/* actually read. */}
              </span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mt-5 sm:mt-8 text-[#EBEBEB] font-normal text-[13px]  sm:text-[18px] leading-[1.5] sm:leading-[29.25px] max-w-[680px] mx-auto px-2 sm:px-0">
              Fast, direct communication that helps businesses respond quicker and stay connected with customers.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="mt-8 sm:mt-10 flex items-center p-1 bg-[#1A1A1A] rounded-full border border-white/5 w-fit mx-auto">
              <button
                onClick={() => setActiveTab("whatsapp")}
                className={`px-5 cursor-pointer sm:px-8 py-2 sm:py-2.5 rounded-full font-medium text-[13px] sm:text-[14px] leading-[20px] transition-all ${activeTab === "whatsapp" ? "bg-[#ff5a05] text-white" : "text-white/60 hover:text-white"
                  }`}
              >
                WhatsApp
              </button>
              <button
                onClick={() => setActiveTab("sms")}
                className={`px-5 sm:px-8 py-2 sm:py-2.5 rounded-full font-medium text-[13px] sm:text-[14px] leading-[20px] transition-all ${activeTab === "sms" ? "bg-[#ff5a05] text-white" : "text-white/60 hover:text-white"
                  }`}
              >
                SMS
              </button>
            </div>
          </FadeUp>
        </div>

        {/* Content Section */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-[1.2fr_auto_1.3fr] gap-8 lg:gap-12 items-center">

          {/* Left Cards */}
          <div className="flex flex-col gap-6 w-full max-w-[450px] mx-auto lg:ml-auto lg:mr-0">
            {currentData.leftCards.map((card, idx) => (
              <FadeUp key={card.title} delay={0.4 + idx * 0.1}>
                <Card {...card} />
              </FadeUp>
            ))}
          </div>

          {/* Center Mobile Image */}
          <FadeUp delay={0.6} className="flex justify-center relative order-first lg:order-none mb-4 lg:mb-0">
            <div className="relative w-[240px] min-[375px]:w-[280px] sm:w-[344px] h-[427px] min-[375px]:h-[500px] sm:h-[613px]">
              {/* Glow behind the phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-[#0f3b1b]/80 blur-[60px] sm:blur-[80px] rounded-[50px] pointer-events-none" />
              <Image
                key={currentData.image} // Force re-render of image to trigger Next.js animation if any
                src={currentData.image}
                alt="Mobile App"
                fill
                className="object-contain relative z-10 transition-opacity duration-300"
              />
            </div>
          </FadeUp>

          {/* Right Cards */}
          <div className="flex flex-col gap-6 w-full max-w-[450px] mx-auto lg:mr-auto lg:ml-0">
            {currentData.rightCards.map((card, idx) => (
              <FadeUp key={card.title} delay={0.7 + idx * 0.1}>
                <Card {...card} />
              </FadeUp>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Subcomponents ─────────────────────────────────────────────────────────────

interface CardProps {
  icon: string;
  subtitle: string;
  title: string;
  heading: string;
  description: string;
  align: "left" | "right";
}

function Card({ icon, subtitle, title, heading, description, align }: CardProps) {
  const isRightAligned = align === "right";

  return (
    <>
      {/* ── Mobile layout: stat left, text right ── */}
      <div className={`sm:hidden p-4 rounded-[20px] bg-[#111111] border border-white/5 flex flex-row items-center gap-3`}>
        {/* Stat on the left */}
        <div className="flex-shrink-0 w-[72px]">
          <h3
            className="text-[26px] font-semibold leading-[30px] tracking-[-0.5px]"
            style={{
              background: 'linear-gradient(90deg, #FFFFFF 0%, #FFB08C 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            {title}
          </h3>
        </div>
        {/* Text on the right */}
        <div className="flex flex-col flex-1">
          <span className="text-[9px] font-normal leading-[14px] tracking-[1.5px] uppercase text-[#888888]">
            {subtitle}
          </span>
          <h4 className="mt-1 text-[13px] font-semibold leading-[18px] text-[#EEEEEE]">
            {heading}
          </h4>
          <p className="mt-0.5 text-[11px] font-normal leading-[16px] text-[#888888]">
            {description}
          </p>
        </div>
      </div>

      {/* ── Desktop layout: original vertical card ── */}
      <div className={`hidden sm:flex p-8 rounded-[24px] bg-[#111111] border border-white/5 flex-col ${isRightAligned ? "items-end text-right" : "items-start text-left"}`}>
        <div className="flex items-center gap-3">
          {/* <div className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center shrink-0">
            <Image src={icon} alt="" width={16} height={16} className="object-contain w-4 h-4" />
          </div> */}
          <span className="text-[12px] font-normal leading-[16px] tracking-[2.16px] uppercase text-[#888888]">
            {subtitle}
          </span>
        </div>

        <h3
          className="mt-6 text-[36px] font-semibold leading-[40px] tracking-[-0.9px]"
          style={{
            background: 'linear-gradient(90deg, #FFFFFF 0%, #FFB08C 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent'
          }}
        >
          {title}
        </h3>

        <h4 className="mt-2 text-[18px] font-semibold leading-[28px] text-[#EEEEEE]">
          {heading}
        </h4>

        <p className="mt-2 text-[12px] font-normal leading-[22.75px] text-[#888888]">
          {description}
        </p>
      </div>
    </>
  );
}
