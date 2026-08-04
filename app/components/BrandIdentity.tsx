"use client";

import Image from "next/image";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

export function BrandIdentity() {
  return (
    <section className="bg-black py-16 lg:py-24 px-4 min-[375px]:px-6 w-full flex flex-col items-center">
      <div className="w-full max-w-[1350px] flex flex-col items-center">
        <Stagger staggerDelay={0.15} className="flex flex-col items-center w-full">
          
          {/* Header Section */}
          <StaggerItem>
            <div className="flex flex-col items-center gap-4 ">
              <h2 className="text-white font-medium text-[32px] sm:text-[56px] leading-[1.1] sm:leading-[60px] tracking-[-2px] sm:tracking-[-3.2px] text-center lowercase">
                brand identity
              </h2>
              <p className="text-white/90 font-normal text-[13px] sm:text-[18px] leading-[1.6] sm:leading-[32px] text-center max-w-[600px]">
                Every brand identity is built around your business, creating a distinctive visual system that remains consistent across every customer touchpoint.
              </p>
            </div>
          </StaggerItem>

          {/* Navigation Pills */}
          {/* <StaggerItem>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
              <span className="bg-[#FF5500] text-white px-5 py-2 rounded-full font-medium text-[11px] leading-[16.5px] cursor-pointer transition-opacity hover:opacity-90">
                Logo Design
              </span>
              <span className="bg-white text-black px-5 py-2 rounded-full font-medium text-[11px] leading-[16.5px] cursor-pointer transition-opacity hover:opacity-90">
                Colour Palette
              </span>
              <span className="bg-white text-black px-5 py-2 rounded-full font-medium text-[11px] leading-[16.5px] cursor-pointer transition-opacity hover:opacity-90">
                Typography
              </span>
              <span className="bg-white text-black px-5 py-2 rounded-full font-medium text-[11px] leading-[16.5px] cursor-pointer transition-opacity hover:opacity-90">
                Graphic Elements
              </span>
            </div>
          </StaggerItem> */}

          {/* Image Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-2">
              <StaggerItem>
                <div className="relative w-full aspect-[434/293] rounded-[17.15px] overflow-hidden group">
                  <img src="/assets/brandIdentity/1.png" alt="Brand Identity" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="relative w-full aspect-[434/293] rounded-[17.15px] overflow-hidden group">
                  <img src="/assets/brandIdentity/2.png" alt="Brand Identity" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="relative w-full aspect-[434/293] rounded-[17.15px] overflow-hidden group">
                  <img src="/assets/brandIdentity/3.png" alt="Brand Identity" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              </StaggerItem>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-2">
              <StaggerItem>
                <div className="relative w-full aspect-[434/592] rounded-[17.15px] overflow-hidden group">
                  <img src="/assets/brandIdentity/middle.png" alt="Brand Identity" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="relative w-full aspect-[434/293] rounded-[17.15px] overflow-hidden group">
                  <img src="/assets/brandIdentity/4.png" alt="Brand Identity" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              </StaggerItem>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-2">
              <StaggerItem>
                <div className="relative w-full aspect-[434/293] rounded-[17.15px] overflow-hidden group">
                  <img src="/assets/brandIdentity/5.png" alt="Brand Identity" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="relative w-full aspect-[434/293] rounded-[17.15px] overflow-hidden group">
                  <img src="/assets/brandIdentity/venom.png" alt="Brand Identity" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="relative w-full aspect-[434/293] rounded-[17.15px] overflow-hidden group">
                  <img src="/assets/brandIdentity/7.jpg" alt="Brand Identity" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              </StaggerItem>
            </div>

          </div>

        </Stagger>
      </div>
    </section>
  );
}
