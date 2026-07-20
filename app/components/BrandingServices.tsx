"use client";

import React from "react";

export function BrandingServices() {
  return (
    <section className="bg-black pt-16 lg:pt-24 px-6 w-full flex flex-col items-center">
      <div className="w-full max-w-[1150px] border-t border-[#333333]">
        
        {/* Top Header */}
        <div className="flex flex-col gap-4 border-b border-[#333333] pt-12 pb-12">
          <h4 className="text-[#FF5500] uppercase text-[13px] leading-[1] tracking-[2.08px] font-semibold">
            Our Services
          </h4>
          <h2 className="text-white lowercase flex items-center flex-wrap gap-x-3">
            <span className="font-medium text-[36px] sm:text-[56px] leading-[1.2] sm:leading-[74px] tracking-[-1px] sm:tracking-[-1.92px]">what's included</span>
            <span style={{ fontFamily: '"Times New Roman", Times, serif' }} className="font-normal italic text-[46px] sm:text-[72px] leading-[1.2] sm:leading-[74px] tracking-[-1px] sm:tracking-[-1.92px]">in branding</span>
          </h2>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col lg:flex-row w-full border-b border-[#333333]">
          
          {/* Left Block */}
          <div className="flex flex-col flex-1 border-r-0 lg:border-r border-[#333333] pt-12 lg:pt-16 pb-12 pr-0 lg:pr-12 gap-8 lg:gap-[60px] w-full lg:max-w-[55%] xl:max-w-[700px]">
            <div className="flex flex-col gap-6">
              <h1 className="text-white font-light text-[60px] sm:text-[100px] lg:text-[140px] leading-[1] lg:leading-[148.61px] tracking-[-1.73px]">
                Branding
              </h1>
              <p className="text-[#a3a3a3] font-light text-[16px] sm:text-[19px] leading-[1.6] sm:leading-[29.45px] max-w-[580px]">
                A brand is more than a logo. We build strategic identities that create recognition, consistency and long-term brand value across every customer touchpoint.
              </p>
            </div>
            <div className="w-full max-w-[644px] rounded-[10px] overflow-hidden aspect-[644/194] bg-[#111]">
              <img src="/assets/yulaBranding.png" alt="Branding lounge" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Columns */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#333333]">
            {/* Strategy */}
            <div className="flex flex-col justify-between pt-12 lg:pt-16 pb-8 px-6 lg:px-8 h-[300px] lg:h-auto">
              <h5 className="text-[#666666] uppercase text-[13px] leading-[1] tracking-[1.3px] font-normal">
                Strategy
              </h5>
              <div className="flex flex-col gap-2">
                <span className="text-white font-bold text-[80px] lg:text-[150px] leading-[1] lg:leading-[117px] tracking-[-2px] lg:tracking-[-4.5px]">St</span>
                <span className="text-[#FF550099] uppercase text-[9px] leading-[1] tracking-[0.9px] font-normal">
                  FIG. 01 — DISCOVERY
                </span>
              </div>
            </div>
            
            {/* Identity */}
            <div className="flex flex-col justify-between pt-12 lg:pt-16 pb-8 px-6 lg:px-8 h-[300px] lg:h-auto">
              <h5 className="text-[#666666] uppercase text-[13px] leading-[1] tracking-[1.3px] font-normal">
                Identity
              </h5>
              <div className="flex flex-col gap-2">
                <span className="text-white font-bold text-[80px] lg:text-[150px] leading-[1] lg:leading-[117px] tracking-[-2px] lg:tracking-[-4.5px]">Id</span>
                <span className="text-[#FF550099] uppercase text-[9px] leading-[1] tracking-[0.9px] font-normal">
                  FIG. 02 — MARKS
                </span>
              </div>
            </div>

            {/* Guidelines */}
            <div className="flex flex-col justify-between pt-12 lg:pt-16 pb-8 px-6 lg:px-8 h-[300px] lg:h-auto">
              <h5 className="text-[#666666] uppercase text-[13px] leading-[1] tracking-[1.3px] font-normal">
                Guidelines
              </h5>
              <div className="flex flex-col gap-2">
                <span className="text-white font-bold text-[80px] lg:text-[150px] leading-[1] lg:leading-[117px] tracking-[-2px] lg:tracking-[-4.5px]">Gu</span>
                <span className="text-[#FF550099] uppercase text-[9px] leading-[1] tracking-[0.9px] font-normal">
                  FIG. 03 — SYSTEM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 border-b border-[#333333] divide-y lg:divide-y-0 lg:divide-x divide-[#333333]">
          {bottomCards.map((card, index) => (
            <div key={card.id} className="flex flex-col pt-8 pb-8 px-4 lg:px-6 gap-6">
              <div className="w-full aspect-[247/194] rounded-[10px] bg-[#111] overflow-hidden">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[#666666] font-normal text-[12px] leading-[1] tracking-[0.72px]">
                  {card.id}
                </span>
                <h4 className="text-white font-semibold text-[18px] leading-[1] tracking-[-0.18px]">
                  {card.title}
                </h4>
                <p className="text-[#a3a3a3] font-normal text-[13.5px] leading-[20.25px]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

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
