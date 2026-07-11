import Image from "next/image";

import React from "react";
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
    <section className="bg-[#0A0A0A] py-[48px] min-[390px]:py-[58px] sm:py-20 px-4 min-[375px]:px-5 min-[480px]:px-6 sm:px-6">
      <Stagger staggerDelay={0.15}>
        <StaggerItem>
          {heading ? (
            heading
          ) : (
            <h2
              className="text-white mx-auto max-w-[1150px] mb-8 min-[390px]:mb-10 sm:mb-10 font-medium text-[28px] min-[360px]:text-[32px] min-[390px]:text-[36px] sm:text-[40px] leading-none tracking-normal"
            >
              platforms we work with
            </h2>
          )}
        </StaggerItem>

      <div className="max-w-[1150px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 min-[390px]:gap-6 sm:gap-6">
        {platforms.map((platform, index) => (
          <StaggerItem key={platform.name}>
            <div
              className="relative rounded-2xl overflow-hidden  group"
            >
              {/* Number top left */}
              <div className="absolute top-[24px] left-[24px] z-20">
                <span className="text-white/70 font-[var(--font-inter)] text-[10px] font-semibold tracking-[2px] uppercase">
                  0{index + 1}
                </span>
              </div>

              <div className="relative w-full min-h-[350px] min-[375px]:min-h-[400px] min-[430px]:min-h-[450px] sm:min-h-[490px] aspect-[4/5]">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 ease-out" />

                <div className="absolute bottom-0 left-0 right-0 px-4 min-[390px]:px-5 sm:px-5 py-4 min-[390px]:py-6 sm:py-6">
                  <div className="transform translate-y-[60px] min-[390px]:translate-y-[80px] sm:translate-y-[80px] group-hover:translate-y-0 transition-transform duration-500 ease-out will-change-transform">
                    <h3
                      className="text-white mb-2 font-normal text-[20px] sm:text-[22.64px] leading-[28px] sm:leading-[35px] tracking-normal"
                    >
                      {platform.name}
                    </h3>
                    {platform.description && (
                      <p
                        className="text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 ease-out font-normal text-[14px] sm:text-[15px] leading-[22px] sm:leading-[24.38px] tracking-normal"
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
      </Stagger>
    </section>
  );
}