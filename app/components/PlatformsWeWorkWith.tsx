"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

export interface Platform {
  name: string;
  description?: string;
  imageSrc: string;
}

interface PlatformsWeWorkWithProps {
  heading?: React.ReactNode;
  platforms?: Platform[];
}

const defaultPlatforms: Platform[] = [
  {
    name: "Meta",
    description:
      "Reach, engage and convert customers across Facebook and Instagram through high-performing paid campaigns.",
    imageSrc: "/assets/platforms/meta.png",
  },
  {
    name: "YouTube",
    description:
    "Create video campaigns that educate, build trust and convert viewers into customers.",
    imageSrc: "/assets/platforms/youtube.png",
  },
  {
    name: "LinkedIn",
    description:
      "Generate qualified B2B leads through strategic content, paid advertising and professional outreach.",
    imageSrc: "/assets/platforms/linkedin.png",
  },
  {
    name: "TikTok",
    description:
      "Capture attention with high-impact short-form video designed for modern audiences.",
    imageSrc: "/assets/platforms/2.png",
  },
];

export default function PlatformsWeWorkWith({
  heading,
  platforms = defaultPlatforms,
}: PlatformsWeWorkWithProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#0A0A0A] py-[50px] sm:py-20 px-4 sm:px-6 relative">
      <Stagger staggerDelay={0.15}>
        <StaggerItem>
          {heading ? (
            heading
          ) : (
            <h2
              className="text-white mx-auto max-w-[1150px] mb-[32px] sm:mb-10 font-medium text-[29px] sm:text-[40px] leading-none tracking-normal"
            >
              platforms we work with
            </h2>
          )}
        </StaggerItem>

      <div className="relative max-w-[1150px] mx-auto">
        {/* Mobile Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 z-10 sm:hidden">
          <button 
            onClick={() => scroll('left')}
            className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-black border border-gray-200"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-2 z-10 sm:hidden">
          <button 
            onClick={() => scroll('right')}
            className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-black border border-gray-200"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <div ref={scrollRef} className="w-full flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-[16px] sm:gap-6 pb-4 sm:pb-0">
          {platforms.map((platform, index) => (
            <StaggerItem key={platform.name} className="w-full shrink-0 snap-center sm:w-auto">
              <div
              tabIndex={0}
              className="relative rounded-2xl overflow-hidden group cursor-pointer focus:outline-none"
            >
              {/* Number top left */}
              <div className="absolute top-[20px] sm:top-[24px] left-[20px] sm:left-[24px] z-20">
                <span className="text-white/70 font-[var(--font-inter)] text-[10px] font-semibold tracking-[2px] uppercase">
                  0{index + 1}
                </span>
              </div>

              <div className="relative w-full aspect-[4/5] min-h-[360px] sm:min-h-[490px]">
                {platform.imageSrc ? (
                  <Image
                    src={platform.imageSrc}
                    alt={platform.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-neutral-900" />
                )}

                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 ease-out" />

                <div className="absolute bottom-0 left-0 right-0 px-[20px] sm:px-5 py-[24px] sm:py-6">
                  <div className="transform translate-y-[64px] sm:translate-y-[80px] group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-500 ease-out will-change-transform">
                    <h3
                      className="text-white mb-2 font-normal text-[22px] sm:text-[22.64px] leading-[1.3] sm:leading-[35px] tracking-normal"
                    >
                      {platform.name}
                    </h3>
                    {platform.description && (
                      <p
                        className="text-neutral-300 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 delay-75 ease-out font-normal text-[14px] sm:text-[15px] leading-[1.5] sm:leading-[24.38px] tracking-normal"
                      >
                        {platform.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </div>
      </div>
      </Stagger>
    </section>
  );
}