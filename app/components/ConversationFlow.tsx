"use client";

import FadeUp from "./FadeUp";
import Image from "next/image";

const steps = [
  {
    step: "Step 01",
    title: "Customer Message",
    description: "A lead reaches out on WhatsApp or SMS.",
  },
  {
    step: "Step 02",
    title: "AI Reply",
    description: "Trained AI understands intent and responds instantly.",
  },
  {
    step: "Step 03",
    title: "Booking",
    description: "Availability checked and slot reserved automatically.",
  },
  {
    step: "Step 04",
    title: "Confirmation",
    description: "Customer gets a delivered, read-receipt confirmation.",
  },
];

export default function ConversationFlow() {
  return (
    <section className="w-full bg-black py-20 lg:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="mx-auto max-w-[1100px]">

        {/* Header with Icons */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full mb-16 md:mb-24 gap-8">
          <FadeUp delay={0.1}>
            <Image
              src="/assets/whatIcon.png"
              alt="WhatsApp"
              width={100}
              height={100}
              className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] object-contain"
            />
          </FadeUp>

          <div className="flex flex-col items-center text-center">
            <FadeUp delay={0.2}>
              <span className="font-medium text-[12px] leading-[16px] tracking-[2.4px] uppercase text-[#FF5500]">
                How It Works
              </span>
            </FadeUp>
            <FadeUp delay={0.3}>
              <h2 className="mt-3 font-semibold text-[36px] sm:text-[52px] leading-[1.05] tracking-[-1px] text-white">
                Customer Flow
              </h2>
            </FadeUp>
            <FadeUp delay={0.4}>
              <p className="mt-4 font-normal text-[14px] sm:text-[16px] leading-[1.5] text-white/60">
                Scroll to watch the conversation unfold — the same way it happens in production.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.5}>
            <Image
              src="/assets/messageIcon.png"
              alt="Message"
              width={100}
              height={100}
              className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] object-contain"
            />
          </FadeUp>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ff5500]/0 via-[#ff5500]/40 to-[#ff5500]/0 md:-translate-x-1/2">
            <div className="absolute top-0 bottom-0 left-1/2 w-[8px] -translate-x-1/2 bg-[#ff5500] blur-[12px] opacity-30" />
          </div>

          <div className="relative z-10 flex flex-col">
            {steps.map((item, index) => (
              <div
                key={item.step}
                className="relative flex flex-col md:flex-row items-start w-full py-8 md:py-10"
              >
                {/* ── Left side — right-aligned ── */}
                <div className="flex-1 w-full md:w-1/2 pl-[48px] md:pl-0 md:pr-[64px] flex flex-col items-start md:items-end">
                  <FadeUp
                    delay={0.15 + index * 0.1}
                    className="flex flex-col items-start md:items-end text-left md:text-right w-full"
                  >
                    {/* Green step badge */}
                    <div className="inline-flex px-3 py-[5px] rounded-full border border-[#0DFF0066] bg-[#0DFF001A] w-fit mb-3">
                      <span className="font-medium text-[11px] leading-[16px] tracking-[0.3px] text-[#0DFF00]">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="font-bold text-[22px] sm:text-[26px] leading-[1.2] tracking-[-0.5px] text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="font-normal text-[14px] sm:text-[15px] leading-[22px] text-white/55 max-w-[400px]">
                      {item.description}
                    </p>
                  </FadeUp>
                </div>

                {/* ── Center Dot ── */}
                <div className="absolute left-[12px] md:left-1/2 top-[42px] md:top-1/2 w-[18px] h-[18px] rounded-full bg-[#ff5500] md:-translate-x-1/2 md:-translate-y-1/2 shadow-[0_0_14px_4px_rgba(255,85,0,0.55)]" />

                {/* ── Right side — left-aligned ── */}
                <div className="flex-1 w-full md:w-1/2 pl-[48px] md:pl-[64px] mt-6 md:mt-0 flex flex-col items-start">
                  <FadeUp
                    delay={0.3 + index * 0.1}
                    className="flex flex-col items-start w-full"
                  >
                    {/* Blue step badge */}
                    <div className="inline-flex px-3 py-[5px] rounded-full border border-[#0084FF55] bg-[#0084FF18] w-fit mb-3">
                      <span className="font-medium text-[11px] leading-[16px] tracking-[0.3px] text-[#4AA8FF]">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="font-bold text-[22px] sm:text-[26px] leading-[1.2] tracking-[-0.5px] text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="font-normal text-[14px] sm:text-[15px] leading-[22px] text-white/55 max-w-[400px]">
                      {item.description}
                    </p>
                  </FadeUp>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
