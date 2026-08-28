"use client";

import React, { useState, useRef } from "react";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

export interface RevenueMethodCard {
  id: string;
  title: string;
  description: string;
  bgImage: string;
}

interface RevenueMethodProps {
  heading?: React.ReactNode;
  tagline?: string;
  cards?: RevenueMethodCard[];
}

const DEFAULT_CARDS: RevenueMethodCard[] = [
  {
    id: '01',
    title: 'Ideation & Strategy',
    description: 'We identify the right product, positioning and commercial strategy before preparing the launch.',
    bgImage: '/assets/method1.webp',
  },
  {
    id: '02',
    title: 'Production',
    description: 'We create every asset needed for launch, from content and creative to websites and sales materials.',
    bgImage: '/assets/method2.webp',
  },
  {
    id: '03',
    title: 'Marketing Strategy & Execution',
    description: 'We build demand through launch planning, paid media, content integration and conversion-focused campaigns.',
    bgImage: '/assets/method3.webp',
  },
  {
    id: '04',
    title: 'Campaign Launch & Scale',
    description: 'Once live, we monitor performance, optimise campaigns and scale what delivers the strongest results.',
    bgImage: '/assets/method4.webp',
  },
];

const DEFAULT_HEADING = (
  <>
    how we maximise{" "}
    <br className="block" />
    <span
      className="italic text-[#ff5500] font-normal text-[40px] sm:text-[72px] leading-[1.1] sm:leading-[70px] tracking-[-3%]"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      Q4 revenue
    </span>
  </>
);

const DEFAULT_TAGLINE = ' OUR PROCESS'

export function RevenueMethod({ heading = DEFAULT_HEADING, tagline = DEFAULT_TAGLINE, cards = DEFAULT_CARDS }: RevenueMethodProps) {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.85;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-black text-white pb-[30px] pt-[80px] sm:py-20 px-6 min-h-screen flex flex-col justify-center items-center font-sans">
      <Stagger staggerDelay={0.15} className="max-w-[1200px] xl:max-w-[1300px]  w-full">

        <StaggerItem>
          <p className="font-[var(--font-be-vietnam)] text-[13px] font-normal sm:text-[14px] uppercase tracking-[0.5px] text-[#ff5500] text-start sm:text-start mb-4">
            {tagline}
          </p>
        </StaggerItem>

        {/* Heading */}
        <StaggerItem>
          <h2 className=" text-white text-[28px] min-[375px]:text-[32px] font-medium leading-[0.8] tracking-[-3%] sm:text-[56px] sm:leading-[60px] mb-[40px] sm:mb-16">
            {heading}
          </h2>
        </StaggerItem>

        {/* Grid Container */}
        <div className="relative">
          <div ref={scrollRef} className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-[16px] sm:gap-6">
            {cards.map((card) => {
              const isActive = activeCard === card.id;
              return (
                <StaggerItem key={card.id} className="w-full shrink-0 sm:w-auto">
                  <div
                    onClick={() => setActiveCard(isActive ? null : card.id)}
                    style={{
                      backgroundImage: `url(${card.bgImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                    className={`group relative rounded-[28px] overflow-hidden p-6 flex flex-col justify-between cursor-pointer transition-all duration-500 ease-out w-full h-[220px] sm:h-[606.93px]`}
                  >
                    {/* Card Number */}
                    <div
                      className="text-[9.82px] font-medium leading-[14.73px] tracking-[2.95px] text-white opacity-80 align-middle"
                    >
                      {card.id}
                    </div>

                    {/* Bottom Content Group */}
                    <div className="mt-auto flex flex-col justify-end">
                      {/* Title - Always 100% visible, never cut off */}
                      <h3
                        className="text-[18px] sm:text-[22.64px] font-normal leading-[1.3] sm:leading-[26.78px] tracking-[0%] text-white align-middle transition-transform duration-300"
                      >
                        {card.title}
                      </h3>

                      {/* Description - Expands smoothly on Hover or Tap */}
                      <div
                        className={`grid transition-all duration-500 ease-in-out sm:group-hover:grid-rows-[1fr] sm:group-hover:opacity-100 ${isActive ? 'grid-rows-[1fr] opacity-100 mt-2 sm:mt-3' : 'grid-rows-[0fr] opacity-0 mt-0 sm:group-hover:mt-2 sm:group-hover:sm:mt-3'
                          }`}
                      >
                        <div className="overflow-hidden">
                          <p
                            className="text-[14px] sm:text-[15.5px] font-normal leading-[1.4] sm:leading-[18.86px] tracking-[0%] text-white/90 align-middle"
                          >
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </div>

      </Stagger>
    </div>
  );
}
