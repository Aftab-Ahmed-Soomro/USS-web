"use client";

import FadeUp from "./FadeUp";
import Image from "next/image";

const whatsappSteps = [
  {
    step: "Step 01",
    title: "Customer Message",
    description: "A customer starts a conversation through WhatsApp",
  },
  {
    step: "Step 02",
    title: "AI Response",
    description: "AI replies instantly, answers questions and qualifies the enquiry",
  },
  {
    step: "Step 03",
    title: "Booking",
    description: "Appointments, quotes or enquiries are handled within the conversation",
  },
  {
    step: "Step 04",
    title: "Confirmation",
    description: "The customer receives instant confirmation and ongoing updates",
  },
];

const smsSteps = [
  {
    step: "Step 01",
    title: "SMS Sent",
    description: "A targeted message is delivered to the customer's mobile",
  },
  {
    step: "Step 02",
    title: "Customer Opens",
    description: "The message is opened and the call to action is viewed",
  },
  {
    step: "Step 03",
    title: "Action Taken",
    description: "The customer books, enquires or completes the intended action",
  },
  {
    step: "Step 04",
    title: "Confirmation",
    description: "A confirmation or reminder is sent automatically",
  },
];

export default function ConversationFlow() {
  return (
    <section className="w-full bg-black pt-14 pb-12 sm:py-20 lg:py-32 px-6 overflow-hidden">
      <div className="mx-auto max-w-[1200px] xl:max-w-[1300px] ">

        {/* Header with Icons (Row layout on both Mobile & Desktop) */}
        <div className="flex flex-row items-center justify-between w-full mb-4 sm:mb-16 md:mb-24 gap-2 sm:gap-6">
          <FadeUp delay={0.1} className="shrink-0">
            <Image
              src="/assets/whatIcon.png"
              alt="WhatsApp"
              width={100}
              height={100}
              className="w-[45px] h-[45px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] object-contain"
            />
          </FadeUp>

          <div className="flex flex-col items-center text-center px-1">
            <FadeUp delay={0.2}>
              <span className="font-medium text-[10px] sm:text-[12px] leading-none tracking-[1.8px] sm:tracking-[2.4px] uppercase text-[#FF5500]">
                CUSTOMER EXPERIENCE
              </span>
            </FadeUp>
            <FadeUp delay={0.3}>
              <h2 className="mt-1.5 sm:mt-3 font-semibold lowercase text-[22px] min-[375px]:text-[26px] sm:text-[40px] md:text-[52px] leading-[1.1] tracking-[-0.5px] sm:tracking-[-1px] text-white">
                Customer Flow
              </h2>
            </FadeUp>
            <FadeUp delay={0.4}>
              <p className="mt-2 sm:mt-4 font-normal text-[11px] sm:text-[15px] md:text-[16px] leading-[1.4] sm:leading-[1.5] text-white/60 max-w-[450px]">
                Follow the customer journey from their first message to a confirmed booking.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.5} className="shrink-0">
            <Image
              src="/assets/messageIcon.png"
              alt="Message"
              width={100}
              height={100}
              className="w-[45px] h-[45px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] object-contain"
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
            {whatsappSteps.map((waItem, index) => {
              const smsItem = smsSteps[index];
              return (
                <div
                  key={waItem.step}
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
                          {waItem.step}
                        </span>
                      </div>
                      <h3 className="font-bold text-[13px] min-[375px]:text-[15px] sm:text-[22px] md:text-[26px] leading-[1.2] tracking-[-0.3px] sm:tracking-[-0.5px] text-white mb-1 sm:mb-2">
                        {waItem.title}
                      </h3>
                      <p className="font-normal text-[10px] min-[375px]:text-[11px] sm:text-[14px] md:text-[15px] leading-[1.4] sm:leading-[22px] text-white/55 max-w-[400px]">
                        {waItem.description}
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
                          {smsItem.step}
                        </span>
                      </div>
                      <h3 className="font-bold text-[13px] min-[375px]:text-[15px] sm:text-[22px] md:text-[26px] leading-[1.2] tracking-[-0.3px] sm:tracking-[-0.5px] text-white mb-1 sm:mb-2">
                        {smsItem.title}
                      </h3>
                      <p className="font-normal text-[10px] min-[375px]:text-[11px] sm:text-[14px] md:text-[15px] leading-[1.4] sm:leading-[22px] text-white/55 max-w-[400px]">
                        {smsItem.description}
                      </p>
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
