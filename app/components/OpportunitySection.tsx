import Image from "next/image";
import FadeUp from "./FadeUp";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

export function OpportunitySection() {
  return (
    <section className="bg-black py-20 text-white flex flex-col items-center overflow-hidden">
      {/* Header Section */}
      <FadeUp>
        <div className="text-center px-6 mb-10 sm:mb-16 max-w-[1150px] mx-auto">
          <h2 
            className="font-medium lowercase tracking-[-1px] sm:tracking-[-3px] text-white flex flex-wrap justify-center items-center gap-x-3 mb-2 sm:mb-4 font-[var(--font-be-vietnam)] text-[32px] sm:text-[56px] leading-[1.1] sm:leading-[86.48px]"
          >
            <span>the</span>
            <span 
              className="text-[#FF5500] italic font-normal font-[var(--font-cormorant)] timesFontFamily text-[42px] sm:text-[72px] leading-[1.1] sm:leading-[86.48px] tracking-[-1.5px] sm:tracking-[-3px]"
            >
              opportunity
            </span>
          </h2>
          <p 
            className="font-normal text-white/90 mx-auto font-[var(--font-inter)] max-w-[700px] text-[13px] sm:text-[16px] leading-[1.6]  sm:leading-[24.8px]"
          >
            We work with high performing youtubers to monetise their platforms effectively and maximize their revenue using strategic marketing system
          </p>
        </div>
      </FadeUp>

      {/* Image Grid Section */}
      <Stagger className="w-full max-w-[1200px] px-5.5 mx-auto flex flex-col md:flex-row justify-center items-start gap-10 md:gap-8">
        
        {/* Left Column */}
        <StaggerItem className="w-full md:w-auto">
          <div className="flex flex-col w-full md:w-[380px]">
            <div className="relative w-full h-[332px] rounded-[16px] overflow-hidden mb-5">
              <Image 
                src="/assets/opportunity/1.jpg"
                alt="Creator"
                fill
                className="object-cover object-[center_15%]"
              />
            </div>
          <div className="text-left">
            <h3 
              className="font-semibold text-white font-[var(--font-inter)] mb-1 text-[32px] sm:text-[40px] leading-[1.1] sm:leading-[37.14px] tracking-[-1px] sm:tracking-[-1.34px]"
            >
              $10.8B
            </h3>
            <p 
              className="font-normal text-white/80 font-[var(--font-inter)] capitalize text-[13px] sm:text-[16px] leading-[1.6] sm:leading-[21.12px]"
            >
              US online sales on black friday 2025
            </p>
          </div>
          </div>
        </StaggerItem>

        {/* Middle Column */}
        <StaggerItem className="w-full md:w-auto">
          <div className="flex flex-col w-full md:w-[380px]">
            <div className="relative w-full h-[332px] rounded-[16px] overflow-hidden mb-5">
              <Image 
                src="/assets/opportunity/2.jpg"
                alt="Content Creation"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="text-left">
              <h3 
                className="font-semibold text-white font-[var(--font-inter)] mb-1 text-[32px] sm:text-[40px] leading-[1.1] sm:leading-[37.14px] tracking-[-1px] sm:tracking-[-1.34px]"
              >
                4-6x
              </h3>
              <p 
                className="font-normal text-white/80 font-[var(--font-inter)] capitalize text-[13px] sm:text-[16px] leading-[1.6] sm:leading-[21.12px]"
              >
                average uplift in affiliate conversion rates during black friday week
              </p>
            </div>
          </div>
        </StaggerItem>

        {/* Right Column */}
        <StaggerItem className="w-full md:w-auto">
          <div className="flex flex-col w-full md:w-[380px]">
          <div className="relative w-full h-[332px] rounded-[16px] overflow-hidden mb-5">
            <Image 
              src="/assets/opportunity/3.jpg"
              alt="Strategy"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="text-left">
            <h3 
              className="font-semibold text-white font-[var(--font-inter)] mb-1 text-[32px] sm:text-[40px] leading-[1.1] sm:leading-[37.14px] tracking-[-1px] sm:tracking-[-1.34px]"
            >
              62%
            </h3>
            <p 
              className="font-normal text-white/80 font-[var(--font-inter)] capitalize text-[13px] sm:text-[16px] leading-[1.6] sm:leading-[21.12px]"
            >
              of shoppers research purchases before buying
            </p>
          </div>
          </div>
        </StaggerItem>

      </Stagger>
    </section>
  );
}
