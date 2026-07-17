import Image from "next/image";
import FadeLeft from "./FadeLeft";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

export function WhatWeDoSection() {
  return (
    <section className="bg-black py-20 text-white flex justify-center overflow-hidden">
      <div className="w-full max-w-[1150px] px-4 mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">
        
        {/* Left Content */}
        <FadeLeft>
          <div className="flex flex-col w-full lg:w-[460px] shrink-0 pt-4">
            <h2 
              className="font-medium lowercase tracking-[-3px] text-white flex flex-wrap items-center gap-x-3 mb-6 font-[var(--font-be-vietnam)]"
              style={{ fontSize: "56px", lineHeight: "86.48px" }}
            >
              <span>what do</span>
              <span 
                className="text-[#FF5500] italic font-normal font-[var(--font-cormorant)] timesFontFamily"
                style={{ fontSize: "72px", lineHeight: "86.48px", letterSpacing: "-3px" }}
              >
                we do
              </span>
            </h2>
            <p 
              className="font-normal text-white/90 font-[var(--font-inter)]"
              style={{ fontSize: "16px", lineHeight: "24.8px" }}
            >
              we work with high performing youtubers to monetize their
              platforms effectively and maximize their revenue using
              strategic marketing system
            </p>
          </div>
        </FadeLeft>

        {/* Right Grid */}
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 w-full flex-1 justify-items-center lg:justify-items-end">
          
          {/* Box 1 (Top Left) */}
          <StaggerItem className="w-full">
            <div className="relative overflow-hidden w-full max-w-[380px] h-[282px] mx-auto lg:mx-0 lg:ml-auto">
            <Image 
              src="/assets/boxPics/1.png"
              alt="What we do 1"
              fill
              className="object-cover object-[30%_center]"
            />
            <div className="absolute bottom-4 left-4">
              <span 
                className="inline-block bg-white text-black rounded-full font-[var(--font-inter)] lowercase"
                style={{ fontSize: "7px", lineHeight: "11.96px", padding: "4px 14px" }}
              >
                text here
              </span>
            </div>
            </div>
          </StaggerItem>

          {/* Box 2 (Top Right) */}
          <StaggerItem className="w-full">
            <div className="relative overflow-hidden w-full max-w-[380px] h-[282px] mx-auto lg:mx-0 lg:ml-auto">
            <Image 
              src="/assets/boxPics/2.png"
              alt="What we do 2"
              fill
              className="object-cover"
            />
            <div className="absolute top-6 left-6 max-w-[220px]">
              <p 
                className="font-medium text-white font-[var(--font-inter)] lowercase"
                style={{ fontSize: "16px", lineHeight: "21.12px" }}
              >
                average uplift in affiliate conversion rates during black friday week
              </p>
            </div>
            <div className="absolute bottom-4 right-4">
              <span 
                className="inline-block bg-transparent border border-white text-white rounded-full font-[var(--font-inter)] lowercase"
                style={{ fontSize: "7px", lineHeight: "11.96px", padding: "4px 14px" }}
              >
                text here
              </span>
            </div>
            </div>
          </StaggerItem>

          {/* Box 3 (Bottom Left) */}
          <StaggerItem className="w-full">
            <div className="relative overflow-hidden w-full max-w-[380px] h-[282px] mx-auto lg:mx-0 lg:ml-auto">
            <Image 
              src="/assets/boxPics/3.png"
              alt="What we do 3"
              fill
              className="object-cover object-[40%_center]"
            />
            <div className="absolute bottom-4 left-4">
              <span 
                className="inline-block bg-white text-black rounded-full font-[var(--font-inter)] lowercase"
                style={{ fontSize: "7px", lineHeight: "11.96px", padding: "4px 14px" }}
              >
                text here
              </span>
            </div>
            </div>
          </StaggerItem>

          {/* Box 4 (Bottom Right) */}
          <StaggerItem className="w-full">
            <div className="relative overflow-hidden w-full max-w-[380px] h-[282px] mx-auto lg:mx-0 lg:ml-auto">
            <Image 
              src="/assets/boxPics/4.png"
              alt="What we do 4"
              fill
              className="object-cover"
            />
            <div className="absolute top-6 left-6 max-w-[220px]">
              <p 
                className="font-medium text-white font-[var(--font-inter)] lowercase"
                style={{ fontSize: "16px", lineHeight: "21.12px" }}
              >
                average uplift in affiliate conversion rates during black friday week
              </p>
            </div>
            <div className="absolute bottom-4 right-4">
              <span 
                className="inline-block bg-transparent border border-white text-white rounded-full font-[var(--font-inter)] lowercase"
                style={{ fontSize: "7px", lineHeight: "11.96px", padding: "4px 14px" }}
              >
                text here
              </span>
            </div>
            </div>
          </StaggerItem>

        </Stagger>
      </div>
    </section>
  );
}
