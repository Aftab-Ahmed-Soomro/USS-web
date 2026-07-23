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
    <section className="w-full bg-black py-16 sm:py-20 lg:py-32 px-3 sm:px-6 overflow-hidden">
      <div className="mx-auto max-w-[1100px]">

        {/* Header with Icons (Row layout on both Mobile & Desktop) */}
        <div className="flex flex-row items-center justify-between w-full mb-12 sm:mb-16 md:mb-24 gap-2 sm:gap-6">
          <FadeUp delay={0.1} className="shrink-0">
            <Image
              src="/assets/whatIcon.png"
              alt="WhatsApp"
              width={100}
              height={100}
              className="w-[45px] h-[45px] min-[375px]:w-[55px] min-[375px]:h-[55px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] object-contain"
            />
          </FadeUp>

          <div className="flex flex-col items-center text-center px-1">
            <FadeUp delay={0.2}>
              <span className="font-medium text-[10px] sm:text-[12px] leading-none tracking-[1.8px] sm:tracking-[2.4px] uppercase text-[#FF5500]">
                How It Works
              </span>
            </FadeUp>
            <FadeUp delay={0.3}>
              <h2 className="mt-1.5 sm:mt-3 font-semibold text-[22px] min-[375px]:text-[26px] sm:text-[40px] md:text-[52px] leading-[1.1] tracking-[-0.5px] sm:tracking-[-1px] text-white">
                Customer Flow
              </h2>
            </FadeUp>
            <FadeUp delay={0.4}>
              <p className="mt-2 sm:mt-4 font-normal text-[11px] sm:text-[15px] md:text-[16px] leading-[1.4] sm:leading-[1.5] text-white/60 max-w-[450px]">
                Scroll to watch the conversation unfold — the same way it happens in production.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.5} className="shrink-0">
            <Image
              src="/assets/messageIcon.png"
              alt="Message"
              width={100}
              height={100}
              className="w-[45px] h-[45px] min-[375px]:w-[55px] min-[375px]:h-[55px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] object-contain"
            />
          </FadeUp>
        </div>

        {/* Timeline (Identical 2-column center-line layout for both Mobile & Desktop) */}
        <div className="relative">
          {/* Center Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ff5500]/0 via-[#ff5500]/40 to-[#ff5500]/0 -translate-x-1/2">
            <div className="absolute top-0 bottom-0 left-1/2 w-[6px] sm:w-[8px] -translate-x-1/2 bg-[#ff5500] blur-[8px] sm:blur-[12px] opacity-30" />
          </div>

          <div className="relative z-10 flex flex-col">
            {steps.map((item, index) => (
              <div
                key={item.step}
                className="relative flex flex-row items-center w-full py-6 sm:py-8 md:py-10"
              >
                {/* ── Left side (WhatsApp) — right-aligned ── */}
                <div className="flex-1 w-1/2 pr-3 sm:pr-8 md:pr-[64px] flex flex-col items-end text-right">
                  <FadeUp
                    delay={0.15 + index * 0.1}
                    className="flex flex-col items-end text-right w-full"
                  >
                    {/* Green step badge */}
                    <div className="inline-flex px-2 sm:px-3 py-0.5 sm:py-[5px] rounded-full border border-[#0DFF0066] bg-[#0DFF001A] w-fit mb-1.5 sm:mb-3">
                      <span className="font-medium text-[9px] sm:text-[11px] leading-tight tracking-[0.3px] text-[#0DFF00]">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="font-bold text-[13px] min-[375px]:text-[15px] sm:text-[22px] md:text-[26px] leading-[1.2] tracking-[-0.3px] sm:tracking-[-0.5px] text-white mb-1 sm:mb-2">
                      {item.title}
                    </h3>
                    <p className="font-normal text-[10px] min-[375px]:text-[11px] sm:text-[14px] md:text-[15px] leading-[1.4] sm:leading-[22px] text-white/55 max-w-[400px]">
                      {item.description}
                    </p>
                  </FadeUp>
                </div>

                {/* ── Center Dot ── */}
                <div className="absolute left-1/2 top-1/2 w-[12px] h-[12px] sm:w-[18px] sm:h-[18px] rounded-full bg-[#ff5500] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_3px_rgba(255,85,0,0.6)] sm:shadow-[0_0_14px_4px_rgba(255,85,0,0.55)] z-20" />

                {/* ── Right side (SMS) — left-aligned ── */}
                <div className="flex-1 w-1/2 pl-3 sm:pl-8 md:pl-[64px] flex flex-col items-start text-left">
                  <FadeUp
                    delay={0.3 + index * 0.1}
                    className="flex flex-col items-start text-left w-full"
                  >
                    {/* Blue step badge */}
                    <div className="inline-flex px-2 sm:px-3 py-0.5 sm:py-[5px] rounded-full border border-[#0084FF55] bg-[#0084FF18] w-fit mb-1.5 sm:mb-3">
                      <span className="font-medium text-[9px] sm:text-[11px] leading-tight tracking-[0.3px] text-[#4AA8FF]">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="font-bold text-[13px] min-[375px]:text-[15px] sm:text-[22px] md:text-[26px] leading-[1.2] tracking-[-0.3px] sm:tracking-[-0.5px] text-white mb-1 sm:mb-2">
                      {item.title}
                    </h3>
                    <p className="font-normal text-[10px] min-[375px]:text-[11px] sm:text-[14px] md:text-[15px] leading-[1.4] sm:leading-[22px] text-white/55 max-w-[400px]">
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
