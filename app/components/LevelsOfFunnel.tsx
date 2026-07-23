"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Stagger from './Stagger';
import StaggerItem from './Staggeritem';
import FadeUp from './FadeUp';

export function LevelsOfFunnel() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="relative w-full bg-black py-[30px] sm:pt-32 px-4 min-[375px]:px-6 overflow-hidden">
      <div className="max-w-[1150px] mx-auto relative z-10">
        <Stagger staggerDelay={0.15}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Column (Title & Main Text) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <StaggerItem>
                <h2 className="m-0 p-0 mb-8 text-white flex flex-row flex-wrap items-baseline gap-x-2 sm:gap-x-3">
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

              <StaggerItem>
                <p
                  className="text-white/90 text-[13px] sm:text-[18px] sm:leading-[1.6] leading-[1.55] mb-8 lg:mb-24 max-w-[400px]"
                  style={{
                    fontWeight: 300,
                  }}
                >
                  The most effective marketing campaigns don't focus only on conversions. They build awareness, nurture consideration and create trust before turning interest into measurable business growth.
                </p>
              </StaggerItem>

              <StaggerItem>
                <p
                  className="text-[#FFFFFF59] text-[9px] sm:text-[11px]"
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

            {/* Middle Column (Descriptions & Arrows) */}
            <div className="lg:col-span-3 flex flex-col justify-center relative sm:mt-16 lg:mt-0 lg:pl-4 z-10">

              {/* Impressions Card */}
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

              {/* Levels Descriptions Container */}
              <div className="flex flex-col gap-12 lg:gap-[70px]">
                <StaggerItem>
                  <div className="flex flex-row-reverse lg:flex-row items-center justify-end lg:justify-start gap-6">
                    <p
                      className="text-neutral-300 flex-1 text-left"
                      style={{
                        fontWeight: 400,
                        fontSize: '12px',
                        lineHeight: '1.4'
                      }}
                    >
                      Build Visibility. Introduce your brand to the right audience and generate awareness at scale.
                    </p>
                    <svg width="30" height="14" viewBox="0 0 30 14" fill="none" stroke="currentColor" strokeWidth="2" className="text-white shrink-0 hidden lg:block">
                      <path d="M8 1L1 7M1 7L8 13M1 7H30" />
                    </svg>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex flex-row-reverse lg:flex-row items-center justify-end lg:justify-start gap-6">
                    <p
                      className="text-neutral-300 flex-1 text-left"
                      style={{
                        fontWeight: 400,
                        fontSize: '12px',
                        lineHeight: '1.4'
                      }}
                    >
                      Create Demand. Educate, engage and build trust with people actively considering your solution.
                    </p>
                    <svg width="30" height="14" viewBox="0 0 30 14" fill="none" stroke="currentColor" strokeWidth="2" className="text-white shrink-0 hidden lg:block">
                      <path d="M8 1L1 7M1 7L8 13M1 7H30" />
                    </svg>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex flex-row-reverse lg:flex-row items-center justify-end lg:justify-start gap-6">
                    <p
                      className="text-neutral-300 flex-1 text-left"
                      style={{
                        fontWeight: 400,
                        fontSize: '12px',
                        lineHeight: '1.4'
                      }}
                    >
                      Drive Action. Turn high-intent audiences into enquiries, purchases or loyal customers.
                    </p>
                    <svg width="30" height="14" viewBox="0 0 30 14" fill="none" stroke="currentColor" strokeWidth="2" className="text-white shrink-0 hidden lg:block">
                      <path d="M8 1L1 7M1 7L8 13M1 7H30" />
                    </svg>
                  </div>
                </StaggerItem>
              </div>

            </div>

            {/* Right Column (Funnel Image) */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end items-center mt-12 lg:mt-0 relative">
              <FadeUp delay={0.4}>
                <div className="cursor-pointer" onClick={() => setShowPopup(true)}>
                  <Image
                    src="/assets/funnel.png"
                    alt="Marketing Funnel"
                    width={500}
                    height={500}
                    className="w-full max-w-[320px] lg:max-w-full h-auto object-contain"
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

          </div>
        </Stagger>
      </div>
    </section>
  );
}
