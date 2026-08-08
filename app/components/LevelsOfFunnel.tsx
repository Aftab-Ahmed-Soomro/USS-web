"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Stagger from './Stagger';
import StaggerItem from './Staggeritem';
import FadeUp from './FadeUp';

export function LevelsOfFunnel() {
  const [showPopup, setShowPopup] = useState(false);
  const [activeMobileLevel, setActiveMobileLevel] = useState<"awareness" | "consideration" | "conversion">("awareness");

  const levelsData = [
    {
      id: "awareness" as const,
      number: "01",
      name: "Awareness",
      title: "Build Awareness",
      desc: " Introduce your brand to the right audience and create visibility at scale.",
    },
    {
      id: "consideration" as const,
      number: "02",
      name: "Consideration",
      title: "Create Consideration",
      desc: " Build trust through valuable content, consistent messaging and meaningful engagement.",
    },
    {
      id: "conversion" as const,
      number: "03",
      name: "Conversion",
      title: "Drive Conversions",
      desc: " Turn audiences into enquiries, customers and long term business growth.",
    },
  ];

  return (
    <section className="relative w-full bg-black pb-[14px] sm:pt-15 sm:pb-10 px-4 min-[375px]:px-6 overflow-hidden">
      <div className="max-w-[1150px]  mx-auto relative z-10">
        <Stagger staggerDelay={0.15}>
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* Title Column (Order 1 on mobile, Col 1-4 on desktop) */}
            <div className="order-1 lg:order-1 lg:col-span-4 flex flex-col justify-center items-center lg:items-start w-full text-center lg:text-left">
              <StaggerItem>
                <h2 className="m-0 p-0 -mb-5 sm:mb-8 text-white flex flex-row items-center justify-center lg:flex-col lg:items-start gap-x-2 sm:gap-x-3 text-center lg:text-left w-full whitespace-nowrap lg:whitespace-normal">
                  <span
                    style={{
                      fontWeight: 500,
                      fontSize: 'clamp(32px, 4vw, 56px)',
                      letterSpacing: '-0.02em',
                      textTransform: 'lowercase',
                    }}
                  >
                    full funnel
                  </span>
                  <span
                    className="lg:-mt-[24px] mb-1"
                    style={{
                      fontFamily: "'Times New Roman', Times, serif",
                      fontWeight: 400,
                      fontStyle: 'italic',
                      fontSize: 'clamp(42px, 5vw, 72px)',
                      letterSpacing: '-0.02em',
                      textTransform: 'lowercase'
                    }}
                  >
                    marketing
                  </span>
                </h2>
              </StaggerItem>

              {/* Desktop-only Paragraph & Label */}
              <div className="hidden lg:block">
                <StaggerItem>
                  <p
                    className="text-white/90 text-[18px] leading-[1.6] mb-16 max-w-[400px]"
                    style={{ fontWeight: 300 }}
                  >
                    Customers don't buy the first time they discover your brand. Every stage of the journey plays a role. They build awareness, create demand and convert your audiences into customers through a connected full funnel approach.
                  </p>
                </StaggerItem>

                <StaggerItem>
                  <p
                    className="text-[#FFFFFF59] text-[11px]"
                    style={{
                      fontWeight: 400,
                      lineHeight: '16.5px',
                      letterSpacing: '3.08px',
                      textTransform: 'uppercase'
                    }}
                  >
                    3 CORE STAGES
                  </p>
                </StaggerItem>
              </div>
            </div>

            {/* Funnel Image Column (Order 2 on mobile, Col 9-12 on desktop) */}
            <div className="order-2 lg:order-3 lg:col-span-4 flex justify-center lg:justify-end items-center mt-2 lg:mt-0 relative w-full">
              <FadeUp delay={0.2}>
                <div className="cursor-pointer" onClick={() => setShowPopup(true)}>
                  <Image
                    src="/assets/funnel.png"
                    alt="Marketing Funnel"
                    width={500}
                    height={500}
                    className="w-full max-w-[300px] sm:max-w-[360px] lg:max-w-full h-auto object-contain"
                  />
                </div>
              </FadeUp>

              {/* Mobile Impressions Popup */}
              {showPopup && (
                <div
                  className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm lg:hidden p-4"
                  onClick={() => setShowPopup(false)}
                >
                  <div
                    className="border border-white/10 rounded-[12px] p-6 bg-[#0a0a0a] w-[200px] shadow-2xl relative"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setShowPopup(false)}
                      className="absolute top-2 right-3 text-white/50 hover:text-white"
                    >
                      ✕
                    </button>
                    <p
                      className="text-neutral-500 mb-2 mt-2"
                      style={{
                        fontWeight: 400,
                        fontSize: '11px',
                        lineHeight: '13.5px',
                        letterSpacing: '2.52px',
                        textTransform: 'uppercase'
                      }}
                    >
                      Impressions
                    </p>
                    <p
                      className="text-white font-medium"
                      style={{
                        fontWeight: 600,
                        fontSize: '32px',
                        lineHeight: '1.2'
                      }}
                    >
                      2.4M
                    </p>
                    <svg className="w-full h-[24px] mt-4" viewBox="0 0 100 20" preserveAspectRatio="none">
                      <path d="M0 15 L 20 12 L 40 16 L 60 8 L 80 12 L 100 5" fill="none" stroke="#FF5500" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* Descriptions & Mobile Interactive Links Column (Order 3 on mobile, Col 5-8 on desktop) */}
            <div className="order-3 lg:order-2 lg:col-span-4 flex flex-col justify-center relative sm:mt-16 lg:mt-0 z-10 w-full">

              {/* Mobile-only Paragraph & Label */}
              <div className="block lg:hidden mb-6">
                <StaggerItem>
                  <p
                    className="text-white/90 text-[13px] leading-[1.55] mb-6"
                    style={{ fontWeight: 300 }}
                  >
                    Customers don't buy the first time they discover your brand. Every stage of the journey plays a role. They build awareness, create demand and convert your audiences into customers through a connected full funnel approach.
                  </p>
                </StaggerItem>

                <StaggerItem>
                  <p
                    className="text-[#FFFFFF] text-[9px] mb-6"
                    style={{
                      fontWeight: 400,
                      lineHeight: '16.5px',
                      letterSpacing: '3.08px',
                      textTransform: 'uppercase'
                    }}
                  >
                    3 CORE STAGES
                  </p>
                </StaggerItem>
              </div>

              {/* Impressions Card (Desktop Only) */}
              {/* <FadeUp delay={0.2}>
                <div className="hidden lg:block lg:absolute lg:-top-[150px] lg:left-4 border border-white/10 rounded-[12px] p-4 bg-[#0a0a0a]/80 backdrop-blur-sm w-[120px] mb-8 lg:mb-0">
                  <p
                    className="text-neutral-500 mb-2"
                    style={{
                      fontWeight: 400,
                      fontSize: '9px',
                      lineHeight: '13.5px',
                      letterSpacing: '2.52px',
                      textTransform: 'uppercase'
                    }}
                  >
                    Impressions
                  </p>
                  <p
                    className="text-white font-medium"
                    style={{
                      fontWeight: 600,
                      fontSize: '20px',
                      lineHeight: '30px'
                    }}
                  >
                    2.4M
                  </p>
                  <svg className="w-full h-[20px] mt-3" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0 15 L 20 12 L 40 16 L 60 8 L 80 12 L 100 5" fill="none" stroke="#FF5500" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                  </svg>
                </div>
              </FadeUp> */}

              {/* Desktop View: Styled Cards with Standout Badges & Highlights */}
              <div className="hidden lg:flex flex-col gap-5">
                {levelsData.map((lvl) => (
                  <StaggerItem key={lvl.id}>
                    <div className="group relative bg-[#0c0c0c]/90 border border-white/10 hover:border-[#FF5500]/60 rounded-2xl p-5 xl:p-6 transition-all duration-300 hover:bg-[#111111] hover:shadow-[0_0_30px_rgba(255,85,0,0.12)]">
                      {/* Top Row: Stage Number, Title & Animated Arrow */}
                      <div className="flex items-center justify-between gap-3 mb-2.5">
                        <div className="flex items-center gap-3">
                          <span className="text-[11px] font-mono font-semibold text-[#FF5500] bg-[#FF5500]/10 border border-[#FF5500]/30 px-2.5 py-0.5 rounded-full tracking-wider">
                            {lvl.number}
                          </span>
                          <h3 className="text-white font-semibold text-[18px] xl:text-[20px] tracking-tight group-hover:text-white transition-colors">
                            {lvl.title}
                          </h3>
                        </div>
                        <svg
                          width="28"
                          height="14"
                          viewBox="0 0 30 14"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-[#FF5500] shrink-0 group-hover:-translate-x-1.5 transition-transform duration-300"
                        >
                          <path d="M8 1L1 7M1 7L8 13M1 7H30" />
                        </svg>
                      </div>
                      <p className="text-neutral-300 group-hover:text-neutral-200 text-[13px] xl:text-[14px] leading-[1.55] font-light text-left pl-1">
                        {lvl.desc}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </div>

              {/* Mobile View: Clickable Links / Tabs for Awareness, Consideration, Conversion */}
              <div className="block lg:hidden w-full space-y-3">
                <p className="text-white/40 text-[10px] uppercase tracking-[2px] mb-2 font-medium">
                  Tap to view funnel levels:
                </p>
                <div className="flex flex-col gap-2.5">
                  {levelsData.map((lvl) => {
                    const isActive = activeMobileLevel === lvl.id;
                    return (
                      <div
                        key={lvl.id}
                        className={`rounded-xl border transition-all duration-300 overflow-hidden ${isActive
                          ? "bg-[#111111] border-[#FF5500]/60 shadow-[0_0_20px_rgba(255,85,0,0.15)]"
                          : "bg-[#0a0a0a]/60 border-white/10 hover:border-white/20"
                          }`}
                      >
                        <button
                          onClick={() => setActiveMobileLevel(isActive ? ("" as any) : lvl.id)}
                          className="w-full px-4 py-3.5 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                        >
                          <div className="flex items-center gap-3">
                            <span className={`text-[11px] font-mono uppercase tracking-[1px] ${isActive ? "text-[#FF5500]" : "text-white/40"
                              }`}>
                              {lvl.number}
                            </span>
                            <span className={`text-[14px] font-medium tracking-tight ${isActive ? "text-white" : "text-white/80"
                              }`}>
                              {lvl.title}
                            </span>
                          </div>
                          <svg
                            className={`size-4 shrink-0 transition-transform duration-300 ${isActive ? "text-[#FF5500] rotate-90" : "text-white/40"
                              }`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M9 18l6-6-6-6" />
                          </svg>
                        </button>

                        {/* Collapsible Text Content */}
                        {isActive && (
                          <div className="px-4 pb-4 pt-1 border-t border-white/5 animate-fadeIn">
                            <p className="text-neutral-300 text-[12px] leading-[1.5]">
                              {lvl.desc}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        </Stagger>
      </div>
    </section>
  );
}
