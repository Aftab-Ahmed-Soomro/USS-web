import Image from "next/image";
import FadeLeft from "./FadeLeft";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

export function WhatWeDoSection() {
  return (
    <section className="bg-black sm:py-20 text-white flex justify-center overflow-hidden">
      <div className="w-full max-w-[1150px] px-6 mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">
        
        {/* Left Content */}
        <FadeLeft>
          <div className="flex flex-col w-full lg:w-[460px] shrink-0 pt-4">
            <h2 
              className="font-medium lowercase tracking-[-1px] sm:tracking-[-3px] text-white flex flex-wrap items-center gap-x-3 mb-4 sm:mb-6 font-[var(--font-be-vietnam)] text-[32px] sm:text-[56px] leading-[1.1] sm:leading-[86.48px]"
            >
              <span>what do</span>
              <span 
                className="text-[#FF5500] italic font-normal font-[var(--font-cormorant)] timesFontFamily text-[42px] sm:text-[72px] leading-[1.1] sm:leading-[86.48px] tracking-[-1.5px] sm:tracking-[-3px]"
              >
                we do
              </span>
            </h2>
            <p 
              className="font-normal text-white/90 font-[var(--font-inter)] text-[13px] sm:text-[16px] leading-[1.6] sm:leading-[24.8px]"
            >
              We help established YouTubers turn their audience into sustainable revenue through brand partnerships, affiliate marketing and strategic commercial growth.
            </p>
          </div>
        </FadeLeft>

        {/* Right Grid */}
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full flex-1 justify-items-center lg:justify-items-end">
          
          {/* Box 1 (Top Left) */}
          <StaggerItem className="w-full">
            <div className="relative overflow-hidden w-full max-w-[420px] h-[282px] mx-auto lg:mx-0 lg:ml-auto rounded-[16px]">
            <Image 
              src="/assets/boxPics/1.png"
              alt="What we do 1"
              fill
              className="object-cover object-[30%_center]"
            />
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 max-w-[220px]">
              <p 
                className="font-medium text-white font-[var(--font-inter)] capitalize text-[14px] sm:text-[16px] leading-[1.4] sm:leading-[21.12px]"
              >
                Brand Partnerships
              </p>
            </div>
            <div className="absolute bottom-4 left-4">
              <span 
                className="inline-block bg-white text-black rounded-full font-[var(--font-inter)] capitalize text-[10px] sm:text-[7px] leading-[1.2] sm:leading-[11.96px] px-3 py-1 sm:px-[14px] sm:py-[4px]"
              >
                Partnerships
              </span>
            </div>
            </div>
          </StaggerItem>

          {/* Box 2 (Top Right) */}
          <StaggerItem className="w-full">
            <div className="relative overflow-hidden w-full max-w-[420px] h-[282px] mx-auto lg:mx-0 lg:ml-auto rounded-[16px]">
            <Image 
              src="/assets/boxPics/2.png"
              alt="What we do 2"
              fill
              className="object-cover"
            />
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 max-w-[270px]">
              <p 
                className="font-medium text-white font-[var(--font-inter)] capitalize text-[14px] sm:text-[16px] leading-[1.4] sm:leading-[21.12px]"
              >
                Secure better brand partnerships that align with your audience and content
              </p>
            </div>
            <div className="absolute bottom-4 right-4">
              <span 
                className="inline-block bg-transparent border border-white text-white rounded-full font-[var(--font-inter)] capitalize text-[10px] sm:text-[7px] leading-[1.2] sm:leading-[11.96px] px-3 py-1 sm:px-[14px] sm:py-[4px]"
              >
                Partnerships
              </span>
            </div>
            </div>
          </StaggerItem>

          {/* Box 3 (Bottom Left) */}
          <StaggerItem className="w-full">
            <div className="relative overflow-hidden w-full max-w-[420px] h-[282px] mx-auto lg:mx-0 lg:ml-auto rounded-[16px]">
            <Image 
              src="/assets/boxPics/3.png"
              alt="What we do 3"
              fill
              className="object-cover object-[40%_center]"
            />
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 max-w-[220px]">
              <p 
                className="font-medium text-white font-[var(--font-inter)] capitalize text-[14px] sm:text-[16px] leading-[1.4] sm:leading-[21.12px]"
              >
                Affiliate Strategy
              </p>
            </div>
            <div className="absolute bottom-4 left-4">
              <span 
                className="inline-block bg-white text-black rounded-full font-[var(--font-inter)] capitalize text-[10px] sm:text-[7px] leading-[1.2] sm:leading-[11.96px] px-3 py-1 sm:px-[14px] sm:py-[4px]"
              >
                Revenue Growth
              </span>
            </div>
            </div>
          </StaggerItem>

          {/* Box 4 (Bottom Right) */}
          <StaggerItem className="w-full">
            <div className="relative overflow-hidden w-full max-w-[420px] h-[282px] mx-auto lg:mx-0 lg:ml-auto rounded-[16px]">
            <Image 
              src="/assets/boxPics/4.png"
              alt="What we do 4"
              fill
              className="object-cover"
            />
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 max-w-[220px]">
              <p 
                className="font-medium text-white font-[var(--font-inter)] capitalize text-[14px] sm:text-[16px] leading-[1.4] sm:leading-[21.12px]"
              >
                Build additional revenue streams that continue beyond each upload.
              </p>
            </div>
            <div className="absolute bottom-4 right-4">
              <span 
                className="inline-block bg-transparent border border-white text-white rounded-full font-[var(--font-inter)] capitalize text-[10px] sm:text-[7px] leading-[1.2] sm:leading-[11.96px] px-3 py-1 sm:px-[14px] sm:py-[4px]"
              >
                 Revenue Growth
              </span>
            </div>
            </div>
          </StaggerItem>

        </Stagger>
      </div>
    </section>
  );
}
