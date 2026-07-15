import Image from "next/image";
import FadeDown from "./FadeDown";
import FadeLeft from "./FadeLeft";
import FadeUp from "./FadeUp";
import FadeRight from "./FadeRight";

export function GoodCompanyMap() {
  return (
    <section className="relative z-10 border-t border-t-black w-full bg-white py-[50px] sm:py-16 md:py-24 px-4 min-[375px]:px-6 overflow-hidden">
      <div className="w-full max-w-[1150px] mx-auto flex flex-col items-center ">

        {/* Main heading — fades up */}
        <FadeUp delay={0.1}>
          <h2 className="text-center text-[32px] sm:text-[36px] md:text-5xl lg:text-[56px] text-black tracking-[-6%] mb-[8px] sm:mb-3 leading-[1.1] sm:leading-normal">
            <span className="font-medium">you&apos;re in</span>{" "}
            <span className="text-[#FF5722] italic timesFontFamily px-1 text-[42px] sm:text-4xl md:text-6xl lg:text-[72px]">good</span>{" "}
            <span className="font-medium tracking-[-6%]">company</span>
          </h2>
        </FadeUp>

        {/* Subheading — drops down after heading */}
        <FadeDown delay={0.2}>
          <p className="text-center text-[10px] md:text-xs lg:text-[24px] text-black tracking-[-1px] font-medium uppercase mb-[24px] sm:mb-8 md:mb-12">
            DELIVERING SOLUTIONS ACROSS THE WORLD
          </p>
        </FadeDown>

        <div className="w-full relative max-w-[1200px] mx-auto  px-0 sm:px-2 pr-4 sm:pr-0 scale-[1.18] sm:scale-100 origin-center">

          {/* Background map lines — slides in from left */}
          <FadeLeft delay={0.3}>
            <Image
              src="/assets/Group 16.png"
              alt="World map background"
              width={1200}
              height={600}
              className="w-full h-auto mx-auto"
              sizes="100vw"
            />
          </FadeLeft>

          {/* Foreground logos — slides in from right, slightly after */}
          {/* <FadeRight delay={0.45}> */}
            <Image
              src="/assets/map.png"
              alt="Companies we work with"
              width={1000}
              height={500}
              className="absolute max-w-[1000px] top-0 left-[8%] sm:left-20 w-[90%] sm:w-full h-auto mx-auto object-contain"
              style={{ padding: "inherit" }}
              sizes="(max-width: 640px) 90vw, 1000px"
            />
          {/* </FadeRight> */}

        </div>
      </div>
    </section>
  );
}