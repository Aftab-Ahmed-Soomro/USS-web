"use client";

import React, { useRef } from "react";
import Image from "next/image";
import FadeUp from "./FadeUp";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

const imageConfigs = [
  {
    src: "/assets/black-friday/1.jpg",
    position: "10% 0%",
    scale: 1.2
  },
  {
    src: "/assets/black-friday/2.jpg",
    position: "center 0%",
    mobilePosition: "center",
    scale: 1.4
  },
  {
    src: "/assets/black-friday/3.jpg",
    position: "60% 0%",
    mobilePosition: "center",
    scale: 1.35
  },
  {
    src: "/assets/black-friday/4.jpg",
    position: "40% 50%",
    mobilePosition: "50% 20%",
    scale: 1.35,
    mobileScale: 0.85,
    fit: "contain"
  },
  {
    src: "/assets/IMG_2830.png",
    position: "50% 50%",
    mobilePosition: "50% 50%",
    scale: 1.2,
    mobileScale: 1,
    fit: "contain"
  },
  {
    src: "/assets/black-friday/6.jpg",
    position: "40% 20%",
    mobilePosition: "center",
    scale: 1.4
  },
];

const features = [
  {
    title: "Plan Early",
    description: "Secure brand partnerships ahead of peak season and build a clear campaign schedule around key retail dates."
  },
  {
    title: "Create with Purpose",
    description: "Develop content that feels authentic to your audience while naturally showcasing each brand and its products."
  },
  {
    title: "Maximise Revenue",
    description: "Turn increased audience demand into stronger conversions, repeat partnerships and long-term commercial growth."
  }
];

export function BlackFridayOpportunity() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-16 sm:py-24 text-black overflow-hidden flex flex-col items-center relative">
      {/* Header Section */}
      <FadeUp>
        <div className="max-w-[1150px] text-center px-6 mx-auto mb-10 sm:mb-16">
          <h2 
            className="font-medium lowercase tracking-[-1px] sm:tracking-[-3.2px] text-[#000000] sm:mb-2 font-[var(--font-be-vietnam)] text-[28px] sm:text-[56px] leading-[1.2] sm:leading-[70px]"
          >
            black friday is your highest {" "}
            <br className="hidden sm:block" />
            <span 
              className="text-[#FF5500] italic font-medium font-[var(--font-cormorant)] timesFontFamily text-[38px] sm:text-[56px] leading-[0] sm:leading-[70px] tracking-[-1px] sm:tracking-[-3.2px]"
            >
              revenue opportunity
            </span>
          </h2>
          <p 
            className="mt-4 sm:mt-6 font-normal text-[#1A1A1A] mx-auto max-w-[750px] font-[var(--font-inter)] text-[13px] sm:text-[18px] leading-[1.6] sm:leading-[29.25px] px-6"
          >
            Black Friday is when audiences are actively searching, comparing and ready to buy. For YouTubers with engaged, loyal communities, it’s a key opportunity to turn trusted content into meaningful brand partnerships and revenue.
          </p>
        </div>
      </FadeUp>

      {/* Images Arc Section */}
      {/* <FadeUp> */}
        <div className="w-full mb-12 sm:mb-20">
          <style>{`
            .arc-clip-path {
              clip-path: polygon(0% 0%, 10% 3%, 20% 5%, 30% 6.5%, 40% 7.5%, 50% 8%, 60% 7.5%, 70% 6.5%, 80% 5%, 90% 3%, 100% 0%, 100% 100%, 90% 97%, 80% 95%, 70% 93.5%, 60% 92.5%, 50% 92%, 40% 92.5%, 30% 93.5%, 20% 95%, 10% 97%, 0% 100%);
            }
            .responsive-img {
              object-position: var(--mobile-pos) !important;
              transform: scale(var(--mobile-scale)) !important;
            }
            @media (min-width: 640px) {
              .arc-clip-path {
                clip-path: polygon(0% 0%, 10% 6.48%, 20% 11.52%, 30% 15.12%, 40% 17.28%, 50% 18%, 60% 17.28%, 70% 15.12%, 80% 11.52%, 90% 6.48%, 100% 0%, 100% 100%, 90% 93.52%, 80% 88.48%, 70% 84.88%, 60% 82.72%, 50% 82%, 40% 82.72%, 30% 84.88%, 20% 88.48%, 10% 93.52%, 0% 100%);
              }
              .responsive-img {
                object-position: var(--pos) !important;
                transform: scale(var(--scale)) !important;
              }
            }
          `}</style>
          <div 
            className="w-full flex gap-[2px] sm:gap-4 overflow-hidden relative h-[250px] sm:h-[400px] lg:h-[600px] arc-clip-path"
          >
             {imageConfigs.map((config, i) => (
               <div key={i} className="flex-1 relative h-full bg-gray-100 overflow-hidden">
                 <Image 
                   src={config.src} 
                   alt={`Black Friday Creator ${i+1}`}
                   fill
                   className={`responsive-img ${config.fit ? `max-sm:!object-cover object-${config.fit}` : "object-cover"}`}
                   style={{ 
                     '--pos': config.position,
                     '--mobile-pos': config.mobilePosition || config.position,
                     '--scale': config.scale,
                     '--mobile-scale': config.mobileScale || config.scale,
                     transformOrigin: config.position // Zoom from the focus point
                   } as any}
                 />
               </div>
             ))}
          </div>
        </div>
      {/* </FadeUp> */}

      {/* Features Section */}
      <div className="relative w-full max-w-[1150px] mx-auto md:px-4">
        {/* Mobile Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 z-10 md:hidden">
          <button 
            onClick={() => scroll('left')}
            className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-black border border-gray-100"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-2 z-10 md:hidden">
          <button 
            onClick={() => scroll('right')}
            className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-black border border-gray-100"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <div ref={scrollRef} className="w-full flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <Stagger className="flex md:grid md:grid-cols-3 md:gap-12 text-center w-max md:w-full">
            {features.map((feature, i) => (
              <StaggerItem key={i} className="w-[100vw] md:w-auto snap-center shrink-0 px-12 md:px-0">
                <div className="flex flex-col items-center">
                  <h3 
                    className="font-semibold text-black font-[var(--font-inter)] mb-2 sm:mb-4 text-[16px] sm:text-[20px] leading-[1.3] sm:leading-[32px] tracking-[-0.6px]"
                  >
                    {feature.title}
                  </h3>
                  <p 
                    className="font-normal text-[#1A1A1A] font-[var(--font-inter)] max-w-[280px] text-[13px] sm:text-[16px] leading-[1.6] sm:leading-[30px] tracking-[-0.02em]"
                  >
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
