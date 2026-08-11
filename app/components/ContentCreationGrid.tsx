import Image from "next/image";
import React from "react";
import FadeUp from "./FadeUp";

export function ContentCreationGrid() {
  return (
    <div className="w-full mx-auto max-w-[1200px] px-6 mt-[32px] sm:mt-[48px] flex flex-col gap-[16px] sm:gap-[20px] lg:gap-[29px]">
      {/* Block 1 */}
      <div className="grid grid-cols-3 gap-2 sm:gap-[20px] lg:gap-[29px]">
        {/* Left Column (spans 2) */}
        <div className="col-span-2 flex flex-col gap-2 sm:gap-[20px] lg:gap-[29px]">
          <FadeUp delay={0.1}>
            <div className="relative w-full aspect-[739/396] rounded-[8px] sm:rounded-[16px] overflow-hidden bg-[#111]">
              <Image src="/assets/contentImages/1.webp" alt="Gallery image 1" fill className="object-cover object-center hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 66vw" />
            </div>
          </FadeUp>
          <div className="grid grid-cols-2 gap-2 sm:gap-[20px] lg:gap-[29px]">
            <FadeUp delay={0.2}>
              <div className="relative w-full aspect-[355/400] rounded-[8px] sm:rounded-[16px] overflow-hidden bg-[#111]">
                <Image src="/assets/contentImages/3.webp" alt="Gallery image 3" fill className="object-cover object-center hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="relative w-full aspect-[355/400] rounded-[8px] sm:rounded-[16px] overflow-hidden bg-[#111]">
                <Image src="/assets/contentImages/4.webp" alt="Gallery image 4" fill className="object-cover object-[center_75%] sm:object-center hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-2 sm:gap-[20px] lg:gap-[29px]">
          <FadeUp delay={0.15}>
            <div className="relative w-full aspect-[355/253] rounded-[8px] sm:rounded-[16px] overflow-hidden bg-[#111]">
              <Image src="/assets/contentImages/2.webp" alt="Gallery image 2" fill className="object-cover object-center hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          </FadeUp>
          <FadeUp delay={0.35}>
            <div className="relative w-full aspect-[355/543] rounded-[8px] sm:rounded-[16px] overflow-hidden bg-[#111]">
              <Image src="/assets/contentImages/5.webp" alt="Gallery image 5" fill className="object-cover object-center hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Block 2 */}
      <div className="grid grid-cols-3 gap-2 sm:gap-[20px] lg:gap-[29px]">
        {/* Left Column (spans 2) */}
        <div className="col-span-2 flex flex-col gap-2 sm:gap-[20px] lg:gap-[29px]">
          <FadeUp delay={0.1}>
            <div className="relative w-full aspect-[739/396] rounded-[8px] sm:rounded-[16px] overflow-hidden bg-[#111]">
              <Image src="/assets/contentImages/6.webp" alt="Gallery image 6" fill className="object-cover object-center hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 66vw" />
            </div>
          </FadeUp>
          <div className="grid grid-cols-2 gap-2 sm:gap-[20px] lg:gap-[29px]">
            <FadeUp delay={0.2}>
              <div className="relative w-full aspect-[355/400] rounded-[8px] sm:rounded-[16px] overflow-hidden bg-[#111]">
                <Image src="/assets/cocoa.webp" alt="Gallery image 8" fill className="object-cover object-[center_42%] sm:object-center hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="relative w-full aspect-[355/400] rounded-[8px] sm:rounded-[16px] overflow-hidden bg-[#111]">
                <Image src="/assets/contentImages/9.webp" alt="Gallery image 9" fill className="object-cover object-center hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-2 sm:gap-[20px] lg:gap-[29px]">
          <FadeUp delay={0.15}>
            <div className="relative w-full aspect-[355/253] rounded-[8px] sm:rounded-[16px] overflow-hidden bg-[#111]">
              <Image src="/assets/level.webp" alt="Gallery image 7" fill className="object-cover object-center hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          </FadeUp>
          <FadeUp delay={0.35}>
            <div className="relative w-full aspect-[355/543] rounded-[8px] sm:rounded-[16px] overflow-hidden bg-[#111]">
              <Image src="/assets/contentImages/10.webp" alt="Gallery image 10" fill className="object-cover object-[center_25%] sm:object-center hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
