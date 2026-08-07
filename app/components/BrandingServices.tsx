"use client";

import React from "react";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

const bottomCards = [
  {
    id: "01",
    title: "Typography",
    description: "Choose fonts that reflect your business and keep your content clear and easy to read.",
    image: "/assets/typography.png",
  },
  {
    id: "02",
    title: "Colour Palette",
    description: "Develop a colour palette that gives your business a consistent look across every touchpoint.",
    image: "/assets/colour-palette.png",
  },
  {
    id: "03",
    title: "Logo Design",
    description: "Create a distinctive logo that represents your business and leaves a lasting impression.",
    image: "/assets/logo-design.png",
  },
  {
    id: "04",
    title: "Brand Guidelines",
    description: "Set clear rules to keep your business consistent across every platform and asset.",
    image: "/assets/branding gudieliens.png",
  },
  {
    id: "05",
    title: "App Icon",
    description: "Design a clear and recognisable app icon that represents your business across mobile devices and app stores.",
    image: "/assets/App - 1.png",
  },
  {
    id: "06",
    title: "Brand Assets",
    description: "Create branded social templates, stationery, presentations and marketing materials for your business.",
    image: "/assets/brandingImages/5.png",
  },
];

export function BrandingServices() {
  return (
    <section className="bg-black pt-10 sm:pt-16 lg:pt-24 px-4 sm:px-6 w-full flex flex-col items-center">
      <div className="w-full max-w-[1150px] 2xl:max-w-[1440px]">
        {/* Top Header */}
        <div className="flex flex-col gap-3 sm:gap-4 border-b border-[#333333] pt-4 sm:pt-8 pb-4 sm:pb-12">
          <h4 className="text-[#FF5500] uppercase text-[12px] leading-[1] tracking-[2.08px] font-semibold">
            Our Services
          </h4>
          <h2 className="text-white lowercase flex items-center flex-wrap gap-x-2 sm:gap-x-3">
            <span className="font-medium text-[32px] sm:text-[56px] leading-[1.2] sm:leading-[74px] tracking-[-0.5px] sm:tracking-[-1.92px]">
              Your Brand
            </span>
            <span
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
              className="font-normal italic text-[42px] sm:text-[72px] leading-[1.2] sm:leading-[74px] tracking-[-0.5px] sm:tracking-[-1.92px]"
            >
              Foundations
            </span>
          </h2>
        </div>

        {/* Middle Hero Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full border-b border-[#333333] pt-3 sm:pt-10 pb-8 sm:pb-12 gap-8 lg:gap-12">
          {/* Left Block: Title */}
          <div className="flex-1">
            <h1 className="text-white font-light text-[32px] sm:text-[90px] leading-[1] tracking-[-1.73px]">
              Brand Identity
            </h1>
          </div>

          {/* Center Block: Vertical Dividers for Strategy & Identity */}
          <div className="hidden sm:flex items-center divide-x divide-[#333333] h-[60px] sm:h-[80px]">
            <div className="px-6 flex items-center h-full">
              <span className="text-[#666666] uppercase text-[11px] sm:text-[13px] leading-[1] tracking-[1.3px] font-normal">
                STRATEGY
              </span>
            </div>
            <div className="px-6 flex items-center h-full">
              <span className="text-[#666666] uppercase text-[11px] sm:text-[13px] leading-[1] tracking-[1.3px] font-normal">
                IDENTITY
              </span>
            </div>
          </div>

          {/* Right Block: Paragraph */}
          <div className="flex-1 max-w-[480px]">
            <p className="text-[#a3a3a3] font-light text-[13px] sm:text-[17px] leading-[1.6] sm:leading-[28px]">
              We create the visual foundations of your brand, including your logo, colour palette, typography, brand guidelines and supporting assets.
            </p>
          </div>
        </div>

        {/* Bottom Cards Section (3-column grid with 0 gap and spacing below top row) */}
        <Stagger staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 w-full pt-10 sm:pt-14 pb-12 sm:pb-20">
          {bottomCards.map((card, index) => (
            <StaggerItem key={card.id}>
              <div className={`flex flex-col group ${index < 3 ? "mb-8 sm:mb-12 lg:mb-16" : ""}`}>
                <div className="w-full aspect-[16/10] rounded-none overflow-hidden bg-[#111]">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-col gap-2 pt-4 pb-4 px-3 sm:px-4">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#666666] font-normal text-[12px] leading-[1] tracking-[0.72px]">
                      {card.id}
                    </span>
                    <h4 className="text-white font-semibold text-[16px] sm:text-[18px] leading-[1] tracking-[-0.18px]">
                      {card.title}
                    </h4>
                  </div>
                  <p className="text-[#a3a3a3] font-normal text-[13px] sm:text-[13.5px] leading-[20.25px]">
                    {card.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

