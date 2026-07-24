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
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 pb-4 sm:pb-0">
          {platforms.map((platform, index) => (
            <StaggerItem key={platform.name} className="w-full h-full">
              <div
              tabIndex={0}
              className="relative h-full rounded-xl sm:rounded-2xl overflow-hidden group cursor-pointer focus:outline-none"
            >
              {/* Number top left */}
              <div className="absolute top-[16px] sm:top-[24px] left-[16px] sm:left-[24px] z-20">
                <span className="text-white/70 font-[var(--font-inter)] text-[9px] sm:text-[10px] font-semibold tracking-[1.5px] sm:tracking-[2px] uppercase">
                  0{index + 1}
                </span>
              </div>

              <div className="relative w-full aspect-[4/5] min-h-[220px] sm:min-h-[490px] h-full flex flex-col">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-85 sm:opacity-60 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 ease-out" />

                <div className="absolute bottom-0 left-0 right-0 px-[16px] sm:px-5 py-[16px] sm:py-6">
                  {/* On mobile, text is always shown (translate-y-0). On sm+, it slides up on hover */}
                  <div className="transform translate-y-0 sm:translate-y-[80px] group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-500 ease-out will-change-transform">
                    <h3
                      className="text-white mb-1.5 sm:mb-2 font-medium text-[16px] sm:text-[22.64px] leading-[1.2] sm:leading-[35px] tracking-normal"
                    >
                      {platform.name}
                    </h3>
                    {platform.description && (
                      <p
                        className="text-neutral-300 opacity-100 sm:opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 delay-75 ease-out font-normal text-[11px] sm:text-[15px] leading-[1.4] sm:leading-[24.38px] tracking-normal line-clamp-3 sm:line-clamp-none"
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