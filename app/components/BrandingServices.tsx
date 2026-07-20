"use client";

import React from "react";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

export function BrandingServices() {
  return (
    <section className="bg-black pt-10 sm:pt-16 lg:pt-24 px-4 sm:px-6 w-full flex flex-col items-center">
      <div className="w-full max-w-[1150px]">
        <Stagger staggerDelay={0.15}>
          
          {/* Top Header */}
          <StaggerItem>
            <div className="flex flex-col gap-3 sm:gap-4 border-b border-[#333333] pt-8 sm:pt-12 pb-8 sm:pb-12">
              <h4 className="text-[#FF5500] uppercase text-[12px] leading-[1] tracking-[2.08px] font-semibold">
                Our Services
              </h4>
              <h2 className="text-white lowercase flex items-center flex-wrap gap-x-2 sm:gap-x-3">
                <span className="font-medium text-[32px] sm:text-[56px] leading-[1.2] sm:leading-[74px] tracking-[-0.5px] sm:tracking-[-1.92px]">what's included</span>
                <span style={{ fontFamily: '"Times New Roman", Times, serif' }} className="font-normal italic text-[42px] sm:text-[72px] leading-[1.2] sm:leading-[74px] tracking-[-0.5px] sm:tracking-[-1.92px]">in branding</span>
              </h2>
            </div>
          </StaggerItem>

          {/* Middle Section */}
          <StaggerItem>
            <div className="flex flex-col lg:flex-row w-full border-b border-[#333333]">
              
              {/* Left Block */}
              <div className="flex flex-col flex-1 border-r-0 lg:border-r border-[#333333] pt-6 pb-8 sm:pb-12 pr-0 lg:pr-12 gap-6 sm:gap-8 lg:gap-[60px] w-full lg:max-w-[55%] xl:max-w-[700px]">
                <div className="flex flex-col gap-4 sm:gap-6">
                  <h1 className="text-white font-light text-[52px] sm:text-[100px] lg:text-[140px] leading-[1] lg:leading-[148.61px] tracking-[-1.73px]">
                    Branding
                  </h1>
                  <p className="text-[#a3a3a3] font-light text-[13px] sm:text-[19px] leading-[1.6] sm:leading-[29.45px] max-w-[580px]">
                    A brand is more than a logo. We build strategic identities that create recognition, consistency and long-term brand value across every customer touchpoint.
                  </p>
                </div>
                <div className="w-full max-w-[644px] rounded-[10px] overflow-hidden aspect-[644/194] bg-[#111]">
                  <img src="/assets/yulaBranding.png" alt="Branding lounge" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Right Columns */}
              <div className="flex-1 grid grid-cols-3 md:grid-cols-3 divide-x md:divide-y-0 md:divide-x divide-[#333333]">
                {/* Strategy */}
                <div className="flex flex-col justify-between pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-8 px-2 sm:px-1 h-[220px] xs:h-[260px] sm:h-[300px] lg:h-auto">
                  <h5 className="text-[#666666] uppercase text-[10px] sm:text-[13px] leading-[1] tracking-[1.3px] font-normal">
                    Strategy
                  </h5>
                  <div className="flex flex-col gap-2">
                    <span className="text-white font-bold text-[52px] xs:text-[64px] sm:text-[80px] lg:text-[140px] leading-[1] lg:leading-[117px] tracking-[-2px] lg:tracking-[-4.5px]">St</span>
                    <span className="uppercase text-[8px] sm:text-[9px] leading-[1] tracking-[0.9px] font-normal">
                      <span className="text-[#FF5500]">FIG.</span> <span className="text-[#FFFFFF47]">01 — DISCOVERY</span>
                    </span>
                  </div>
                </div>
                
                {/* Identity */}
                <div className="flex flex-col justify-between pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-8 px-2 sm:px-1 h-[220px] xs:h-[260px] sm:h-[300px] lg:h-auto">
                  <h5 className="text-[#666666] uppercase text-[10px] sm:text-[13px] leading-[1] tracking-[1.3px] font-normal">
                    Identity
                  </h5>
                  <div className="flex flex-col gap-2">
                    <span className="text-white font-bold text-[52px] xs:text-[64px] sm:text-[80px] lg:text-[140px] leading-[1] lg:leading-[117px] tracking-[-2px] lg:tracking-[-4.5px]">Id</span>
                    <span className="uppercase text-[8px] sm:text-[9px] leading-[1] tracking-[0.9px] font-normal">
                      <span className="text-[#FF5500]">FIG.</span> <span className="text-[#FFFFFF47]">02 — MARKS</span>
                    </span>
                  </div>
                </div>

                {/* Guidelines */}
                <div className="flex flex-col justify-between pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-8 px-2 sm:px-1 h-[220px] xs:h-[260px] sm:h-[300px] lg:h-auto">
                  <h5 className="text-[#666666] uppercase text-[10px] sm:text-[13px] leading-[1] tracking-[1.3px] font-normal">
                    Guidelines
                  </h5>
                  <div className="flex flex-col gap-2">
                    <span className="text-white font-bold text-[52px] xs:text-[64px] sm:text-[80px] lg:text-[140px] leading-[1] lg:leading-[117px] tracking-[-2px] lg:tracking-[-4.5px]">Gu</span>
                    <span className="uppercase text-[8px] sm:text-[9px] leading-[1] tracking-[0.9px] font-normal">
                      <span className="text-[#FF5500]">FIG.</span> <span className="text-[#FFFFFF47]">03 — SYSTEM</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Bottom Cards Section */}
          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-5 border-b border-[#333333] divide-y min-[480px]:divide-y-0 lg:divide-y-0 lg:divide-x divide-[#333333] min-[480px]:[&>*:nth-child(odd)]:border-r min-[480px]:[&>*:nth-child(odd)]:border-[#333333] min-[480px]:[&>*]:border-b min-[480px]:[&>*]:border-[#333333] min-[480px]:[&>*:nth-last-child(-n+2)]:border-b-0">
            {bottomCards.map((card, index) => (
              <StaggerItem key={card.id}>
                <div className="flex flex-col pt-6 sm:pt-8 pb-6 sm:pb-8 px-4 lg:px-6 gap-4 sm:gap-6 h-full">
                  <div className="w-full aspect-[247/194] rounded-[10px] bg-[#111] overflow-hidden">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col gap-2 sm:gap-3">
                    <span className="text-[#666666] font-normal text-[12px] leading-[1] tracking-[0.72px]">
                      {card.id}
                    </span>
                    <h4 className="text-white font-semibold text-[16px] sm:text-[18px] leading-[1] tracking-[-0.18px]">
                      {card.title}
                    </h4>
                    <p className="text-[#a3a3a3] font-normal text-[13px] sm:text-[13.5px] leading-[20.25px]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>

        </Stagger>
      </div>
    </section>
  );
}

const bottomCards = [
  {
    id: "01",
    title: "Logo Design",
    description: "Simple and memorable logo systems.",
    image: "/assets/brandingImages/1.png"
  },
  {
    id: "02",
    title: "Colour Palette",
    description: "Strategic colour systems for digital and print.",
    image: "/assets/brandingImages/2.png"
  },
  {
    id: "03",
    title: "Typography",
    description: "Font selection and hierarchy.",
    image: "/assets/brandingImages/3.png"
  },
  {
    id: "04",
    title: "Brand Guidelines",
    description: "Rules for consistent brand application.",
    image: "/assets/brandingImages/4.png"
  },
  {
    id: "05",
    title: "Brand Assets",
    description: "Social media, stationery and marketing assets.",
    image: "/assets/brandingImages/5.png"
  }
];
