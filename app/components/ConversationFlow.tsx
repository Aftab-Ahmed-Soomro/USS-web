"use client";

import FadeUp from "./FadeUp";

const steps = [
  {
    step: "Step 01",
    title: "Customer Message",
    description: "A lead reaches out on WhatsApp or SMS.",
    number: "1-4",
    boxTitle: "Customer Message",
    align: "in",
  },
  {
    step: "Step 02",
    title: "AI Reply",
    description: "Trained AI understands intent and responds instantly.",
    number: "2-4",
    boxTitle: "AI Reply",
    align: "out",
  },
  {
    step: "Step 03",
    title: "Booking",
    description: "Availability checked and slot reserved automatically.",
    number: "3-4",
    boxTitle: "Booking",
    align: "in",
  },
  {
    step: "Step 04",
    title: "Confirmation",
    description: "Customer gets a delivered, read-receipt confirmation.",
    number: "4-4",
    boxTitle: "Confirmation",
    align: "out",
  },
];

export default function ConversationFlow() {
  return (
    <section className="w-full bg-black py-20 lg:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="mx-auto max-w-[1000px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <FadeUp delay={0.1}>
            <span className="font-medium text-[12px] leading-[16px] tracking-[2.4px] uppercase text-[#FF5500]">
              The Flow
            </span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="mt-4 font-semibold text-[28px] sm:text-[36px] leading-[1.1] sm:leading-[40px] tracking-[-0.9px] text-white">
              From "Hi 👋" to confirmed booking
            </h2>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="mt-4 font-normal text-[14px] sm:text-[16px] leading-[1.5] sm:leading-[24px] text-white/60">
              Scroll to watch the conversation unfold — the same way it happens in production.
            </p>
          </FadeUp>
        </div>

        {/* Timeline */}
        <div className="relative mt-16 sm:mt-24">
          {/* Center Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ff5500]/0 via-[#ff5500]/50 to-[#ff5500]/0 md:-translate-x-1/2">
            {/* Glowing line effect */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[8px] -translate-x-1/2 bg-[#ff5500] blur-[12px] opacity-30" />
          </div>

          <div className="relative z-10 flex flex-col gap-12 ">
            {steps.map((item, index) => {
              const isIn = item.align === "in";
              return (
                <div key={item.step} className="relative flex flex-col md:flex-row items-start md:items-center w-full group">
                  
                  {/* Left Text Content (on mobile it's right next to the line) */}
                  <div className="flex-1 w-full md:w-1/2 pl-[48px] md:pl-0 md:pr-12 flex flex-col items-start">
                    <FadeUp delay={0.2 + index * 0.1} className="w-full">
                      <div className={`flex flex-col gap-3 items-start text-left w-full ${isIn ? "md:items-end md:text-right" : "md:items-start md:text-left"}`}>
                        <div className="inline-flex px-3 py-1 rounded-full border border-[#FF550066] bg-[#ff5500]/10 w-fit md:mx-0">
                          <span className="font-medium text-[11px] leading-[16.5px] tracking-[0.28px] text-[#FF9A66]">
                            {item.step}
                          </span>
                        </div>
                        <h3 className="font-semibold text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] tracking-[-0.6px] text-white">
                          {item.title}
                        </h3>
                        <p className="font-normal text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-white/60 max-w-[400px] whitespace-normal md:whitespace-nowrap md:text-right md:self-end">
                          {item.description}
                        </p>
                      </div>
                    </FadeUp>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-[12px] md:left-1/2 top-[8px] md:top-1/2 w-[16px] h-[16px] rounded-full bg-[#ff5500] md:-translate-x-1/2 md:-translate-y-1/2 shadow-[0_0_16px_4px_rgba(255,85,0,0.6)]" />

                  {/* Right Box Content */}
                  <div className={`flex-1 w-full md:w-1/2 pl-[48px] md:pl-20 mt-6 md:mt-0 flex justify-start`}>
                    <FadeUp delay={0.4 + index * 0.1}>
                      <div className="flex items-center gap-4 p-4 sm:p-5 rounded-[16px] bg-[#0A0A0A] border border-white/10 min-w-[220px] sm:min-w-[260px] shadow-[0_0_30px_rgba(255,85,0,0.05)] transition-all duration-300 hover:border-[#ff5500]/30 hover:shadow-[0_0_30px_rgba(255,85,0,0.15)]">
                        <span className="font-medium text-[14px] leading-[20px] text-[#ff5500]">
                          {item.number}
                        </span>
                        <div className="w-[1px] h-[32px] bg-white/10" />
                        <div className="flex flex-col">
                          <span className="font-normal text-[10px] sm:text-[12px] leading-[16px] tracking-[0.6px] uppercase text-white/40">
                            WHATSAPP
                          </span>
                          <span className="font-medium text-[20px] sm:text-[24px] leading-[20px] text-white mt-1.5">
                            {item.boxTitle}
                          </span>
                        </div>
                      </div>
                    </FadeUp>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
}
