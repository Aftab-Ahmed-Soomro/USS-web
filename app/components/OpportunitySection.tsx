import Image from "next/image";
import FadeUp from "./FadeUp";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

export function OpportunitySection() {
  return (
    <section className="bg-black py-20 text-white flex flex-col items-center overflow-hidden">
      {/* Header Section */}
      <FadeUp>
        <div className="text-center px-4 mb-16 max-w-[1150px] mx-auto">
          <h2 
            className="font-medium lowercase tracking-[-3px] text-white flex flex-wrap justify-center items-center gap-x-3 mb-4 font-[var(--font-be-vietnam)]"
            style={{ fontSize: "56px", lineHeight: "86.48px" }}
          >
            <span>the</span>
            <span 
              className="text-[#FF5500] italic font-normal font-[var(--font-cormorant)] timesFontFamily"
              style={{ fontSize: "72px", lineHeight: "86.48px", letterSpacing: "-3px" }}
            >
              opportunity
            </span>
          </h2>
          <p 
            className="font-normal text-white/90 mx-auto font-[var(--font-inter)] max-w-[700px]"
            style={{ fontSize: "16px", lineHeight: "24.8px" }}
          >
            we work with high performing youtubers to monetize their platforms effectively and
            maximize their revenue using strategic marketing system
          </p>
        </div>
      </FadeUp>

      {/* Image Grid Section */}
      <Stagger className="w-full max-w-[1200px] px-4 mx-auto flex flex-col md:flex-row justify-center items-start gap-6 md:gap-8">
        
        {/* Left Column */}
        <StaggerItem>
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
              className="font-semibold text-white font-[var(--font-inter)] mb-1"
              style={{ fontSize: "40px", lineHeight: "37.14px", letterSpacing: "-1.34px" }}
            >
              $10.8B
            </h3>
            <p 
              className="font-normal text-white/80 font-[var(--font-inter)] lowercase"
              style={{ fontSize: "16px", lineHeight: "21.12px" }}
            >
              us online sales on black friday 2025
            </p>
          </div>
          </div>
        </StaggerItem>

        {/* Middle Column */}
        <StaggerItem>
          <div className="flex flex-col w-full md:w-[380px]">
          <div className="relative w-full h-[417px] rounded-[16px] overflow-hidden">
            <Image 
              src="/assets/opportunity/2.jpg"
              alt="Content Creation"
              fill
              className="object-cover object-center"
            />
            {/* Overlay Text */}
            <div className="absolute top-0 left-0 w-full h-full p-8 flex flex-col justify-start bg-black/20">
              <h3 
                className="font-semibold text-white font-[var(--font-inter)] mb-2"
                style={{ fontSize: "40px", lineHeight: "37.14px", letterSpacing: "-1.34px" }}
              >
                4-6x
              </h3>
              <p 
                className="font-normal text-white/90 font-[var(--font-inter)] max-w-[280px]"
                style={{ fontSize: "16px", lineHeight: "21.12px" }}
              >
                average uplift in affiliate conversion rates during black friday week
              </p>
            </div>
          </div>
          </div>
        </StaggerItem>

        {/* Right Column */}
        <StaggerItem>
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
              className="font-semibold text-white font-[var(--font-inter)] mb-1"
              style={{ fontSize: "40px", lineHeight: "37.14px", letterSpacing: "-1.34px" }}
            >
              62%
            </h3>
            <p 
              className="font-normal text-white/80 font-[var(--font-inter)] lowercase"
              style={{ fontSize: "16px", lineHeight: "21.12px" }}
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
