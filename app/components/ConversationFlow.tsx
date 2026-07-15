"use client";

import FadeUp from "./FadeUp";
import Image from "next/image";

const steps = [
  {
    step: "Step 01",
    titleLeft: "Customer Message",
    description: "A lead reaches out on WhatsApp or SMS.",
    titleRight: "Customer Message",
    number: "1-4",
    boxTitle: "Customer Message",
  },
  {
    step: "Step 02",
    titleLeft: "AI Reply",
    description: "Trained AI understands intent and responds instantly.",
    titleRight: "AI Reply",
    number: "2-4",
    boxTitle: "AI Reply",
  },
  {
    step: "Step 03",
    titleLeft: "Booking",
    description: "Availability checked and slot reserved automatically.",
    titleRight: "Booking, Availability",
    number: "3-4",
    boxTitle: "Booking",
  },
  {
    step: "Step 04",
    titleLeft: "Confirmation",
    description: "Customer gets a delivered, read-receipt confirmation.",
    titleRight: "Confirming",
    number: "4-4",
    boxTitle: "Confirmation",
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
                The Flow
              </span>
            </FadeUp>
            <FadeUp delay={0.3}>
              <h2 className="mt-4 font-semibold text-[28px] sm:text-[40px] leading-[1.1] tracking-[-0.9px] text-white">
                From "Hi &nbsp;&nbsp;" to confirmed booking
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
        <div className="relative mt-8">
          {/* Center Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ff5500]/0 via-[#ff5500]/40 to-[#ff5500]/0 md:-translate-x-1/2">
            {/* Glowing line effect */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[8px] -translate-x-1/2 bg-[#ff5500] blur-[12px] opacity-30" />
          </div>

          <div className="relative z-10 flex flex-col gap-4">
            {steps.map((item, index) => (
              <div key={item.step} className="relative flex flex-col md:flex-row items-start md:items-start w-full group py-4">
                
                {/* Left Text Content */}
                <div className="flex-1 w-full md:w-1/2 pl-[48px] md:pl-0 md:pr-[70px] flex flex-col items-start md:items-end">
                  <FadeUp delay={0.2 + index * 0.1} className="w-full flex flex-col items-start md:items-end text-left md:text-right">
                    <div className="inline-flex px-3 py-1 rounded-full border border-[#0DFF0066] bg-[#0DFF001A] w-fit mb-4">
                      <span className="font-medium text-[11px] leading-[16.5px] tracking-[0.28px] text-[#0DFF00]">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="font-semibold text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] tracking-[-0.6px] text-white mb-2">
                      {item.titleLeft}
                    </h3>
                    <p className="font-normal text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-white/60 max-w-[320px]">
                      {item.description}
                    </p>
                  </FadeUp>
                </div>

                {/* Center Dot */}
                <div className="absolute left-[12px] md:left-1/2 top-[24px] md:top-[28px] w-[18px] h-[18px] rounded-full bg-[#ff5500] md:-translate-x-1/2 shadow-[0_0_16px_4px_rgba(255,85,0,0.6)]" />

                {/* Right Box Content */}
                <div className="flex-1 w-full md:w-1/2 pl-[48px] md:pl-[70px] mt-8 md:mt-0 flex flex-col items-start">
                  <FadeUp delay={0.4 + index * 0.1} className="flex flex-col items-start">
                    <div className="inline-flex px-3 py-1 rounded-full border border-[#0084FF66] bg-[#0084FF1A] w-fit mb-4">
                      <span className="font-medium text-[11px] leading-[16.5px] tracking-[0.28px] text-[#0084FF]">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="font-semibold text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] tracking-[-0.6px] text-white mb-6">
                      {item.titleRight}
                    </h3>
                    <div className="flex items-center gap-5 p-4 sm:p-5 rounded-[16px] bg-[#0A0A0A] border border-white/5 min-w-[240px] sm:min-w-[320px] shadow-[0_0_30px_rgba(255,85,0,0.05)] transition-all duration-300 hover:border-[#ff5500]/20 hover:shadow-[0_0_30px_rgba(255,85,0,0.15)] relative overflow-hidden">
                      {/* Subtle subtle gradient on the dark box */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent pointer-events-none" />
                      
                      <span className="font-medium text-[14px] leading-[20px] text-[#ff5500] relative z-10">
                        {item.number}
                      </span>
                      <div className="w-[1px] h-[32px] bg-white/10 relative z-10" />
                      <div className="flex flex-col relative z-10">
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
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
