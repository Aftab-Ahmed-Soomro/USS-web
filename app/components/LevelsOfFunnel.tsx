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
      title: "Build Visibility",
      desc: "Build Visibility. Introduce your brand to the right audience and generate awareness at scale.",
    },
    {
      id: "consideration" as const,
      number: "02",
      name: "Consideration",
      title: "Create Demand",
      desc: "Create Demand. Educate, engage and build trust with people actively considering your solution.",
    },
    {
      id: "conversion" as const,
      number: "03",
      name: "Conversion",
      title: "Drive Action",
      desc: "Drive Action. Turn high-intent audiences into enquiries, purchases or loyal customers.",
    },
  ];

  return (
    <section className="relative w-full bg-black py-[30px] sm:pt-32 px-4 min-[375px]:px-6 overflow-hidden">
      <div className="max-w-[1150px] mx-auto relative z-10">
        <Stagger staggerDelay={0.15}>
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* Title Column (Order 1 on mobile, Col 1-5 on desktop) */}
            <div className="order-1 lg:order-1 lg:col-span-5 flex flex-col justify-center w-full">
              <StaggerItem>
                <h2 className="m-0 p-0 mb-4 sm:mb-8 text-white flex flex-row flex-wrap items-baseline gap-x-2 sm:gap-x-3">
                  <span
                    style={{
                      fontWeight: 500,
                      fontSize: 'clamp(32px, 4vw, 56px)',
                      lineHeight: '1.1',
                      letterSpacing: '-0.02em',
                      textTransform: 'lowercase',
                    }}
                  >
                    levels of
                  </span>
                  <span
                    className="sm:-mt-[10px]"
                    style={{
                      fontFamily: "'Times New Roman', Times, serif",
                      fontWeight: 400,
                      fontStyle: 'italic',
                      fontSize: 'clamp(42px, 5vw, 72px)',
                      lineHeight: '1',
                      letterSpacing: '-0.02em',
                      textTransform: 'lowercase'
                    }}
                  >
                    funnel
                  </span>
                </h2>
              </StaggerItem>

              {/* Desktop-only Paragraph & Label */}
              <div className="hidden lg:block">
                <StaggerItem>
                  <p
                    className="text-white/90 text-[18px] leading-[1.6] mb-24 max-w-[400px]"
                    style={{ fontWeight: 300 }}
                  >
                    The most effective marketing campaigns don't focus only on conversions. They build awareness, nurture consideration and create trust before turning interest into measurable business growth.
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
                    full marketing funnel
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

            {/* Descriptions & Mobile Interactive Links Column (Order 3 on mobile, Col 6-8 on desktop) */}
            <div className="order-3 lg:order-2 lg:col-span-3 flex flex-col justify-center relative sm:mt-16 lg:mt-0 lg:pl-4 z-10 w-full">

              {/* Mobile-only Paragraph & Label */}
              <div className="block lg:hidden mb-6">
                <StaggerItem>
                  <p
                    className="text-white/90 text-[13px] leading-[1.55] mb-6"
                    style={{ fontWeight: 300 }}
                  >
                    The most effective marketing campaigns don't focus only on conversions. They build awareness, nurture consideration and create trust before turning interest into measurable business growth.
                  </p>
                </StaggerItem>

                <StaggerItem>
                  <p
                    className="text-[#FFFFFF59] text-[9px] mb-6"
                    style={{
                      fontWeight: 400,
                      lineHeight: '16.5px',
                      letterSpacing: '3.08px',
                      textTransform: 'uppercase'
                    }}
                  >
                    full marketing funnel
                  </p>
                </StaggerItem>
              </div>

              {/* Impressions Card (Desktop Only) */}
              <FadeUp delay={0.2}>
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
              </FadeUp>

              {/* Desktop View: Stacked Descriptions */}
              <div className="hidden lg:flex flex-col gap-[70px]">
                {levelsData.map((lvl) => (
                  <StaggerItem key={lvl.id}>
                    <div className="flex flex-row items-center justify-start gap-6">
                      <p
                        className="text-neutral-300 flex-1 text-left"
                        style={{
                          fontWeight: 400,
                          fontSize: '12px',
                          lineHeight: '1.4'
                        }}
                      >
                        {lvl.desc}
                      </p>
                      <svg width="30" height="14" viewBox="0 0 30 14" fill="none" stroke="currentColor" strokeWidth="2" className="text-white shrink-0">
                        <path d="M8 1L1 7M1 7L8 13M1 7H30" />
                      </svg>
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
                        className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                          isActive
                            ? "bg-[#111111] border-[#FF5500]/60 shadow-[0_0_20px_rgba(255,85,0,0.15)]"
                            : "bg-[#0a0a0a]/60 border-white/10 hover:border-white/20"
                        }`}
                      >
                        <button
                          onClick={() => setActiveMobileLevel(isActive ? ("" as any) : lvl.id)}
                          className="w-full px-4 py-3.5 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                        >
                          <div className="flex items-center gap-3">
                            <span className={`text-[11px] font-mono uppercase tracking-[1px] ${
                              isActive ? "text-[#FF5500]" : "text-white/40"
                            }`}>
                              {lvl.number}
                            </span>
                            <span className={`text-[14px] font-medium tracking-tight ${
                              isActive ? "text-white" : "text-white/80"
                            }`}>
                              {lvl.name}
                            </span>
                          </div>
                          <svg
                            className={`size-4 shrink-0 transition-transform duration-300 ${
                              isActive ? "text-[#FF5500] rotate-90" : "text-white/40"
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
                            <p className="text-neutral-300 text-[13px] leading-[1.5]">
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
