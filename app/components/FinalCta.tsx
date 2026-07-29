"use client";

import Link from "next/link";
import FadeDown from "./FadeDown";
import FadeUp from "./FadeUp";
import ScaleIn from "./Scalein";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

export function FinalCta() {
  return (
    <section className="relative z-10 bg-black sm:bg-transparent px-4 sm:px-6 pt-[50px] pb-[20px] sm:pt-[80px] sm:pb-[80px] text-white overflow-hidden">
      {/* Background Glows */}
      <div className="hidden sm:block pointer-events-none absolute left-[-15%] top-[-10%] h-[600px] w-[600px] rounded-full bg-[#ff5500] opacity-20 blur-[100px]" />
      <div className="hidden sm:block pointer-events-none absolute right-[-15%] bottom-[-10%] h-[600px] w-[600px] rounded-full bg-[#ff5500] opacity-20 blur-[100px]" />

      <div className="relative mx-auto max-w-[800px] text-center">

        {/* Eyebrow — drops down */}
        <FadeDown>
          <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
            <div className="h-1.5 w-1.5 rounded-full bg-[#ff5500]"></div>
            <p className="text-[10px] font-bold uppercase tracking-[2px] text-white">
              DIGITAL TRANSFORMATION
            </p>
          </div>
        </FadeDown>

        {/* Main headline — scales in for emphasis as the hero statement of the section */}
        <ScaleIn delay={0.1} startScale={0.88}>
          <h2 className="mb-8 sm:mb-10 text-[32px] leading-[0.95] font-medium sm:leading-[1.05] tracking-[-6%] sm:text-[56px]">
            we are your{" "}
            <span className="font-[var(--font-cormorant)] text-[40px] sm:text-[72px] font-light timesFontFamily italic">
              360&deg;
            </span>
            <br />
            <span className="font-[var(--font-cormorant)] text-[40px] sm:text-[72px] font-normal timesFontFamily italic">
              marketing agency
            </span>
          </h2>
        </ScaleIn>

        {/* Body copy paragraphs — staggered one after another instead of both fading together */}
        <Stagger staggerDelay={0.2} delay={0.25}>
          <div className="mx-auto max-w-[600px] space-y-6 sm:space-y-8 text-[13px] min-[375px]:text-[14px] sm:text-[15px] leading-[24px] sm:leading-[27px] text-white">
            <StaggerItem y={20}>
              <p>
                Calling ourselves a data driven, problem solving, people connecting, digitally obsessed, talent powered digital marketing agency felt a little long winded… so we call ourselves USS.
              </p>
            </StaggerItem>
            {/* <StaggerItem y={20}>
              <p>
                We bring all digital platforms to one connected system designed to scale.
              </p>
            </StaggerItem> */}
          </div>
        </Stagger>

        {/* CTA buttons — rise up last */}
        {/* <FadeUp delay={0.5}> */}
          <div className="mt-6 sm:mt-8 max-w-[600px] mx-auto flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="flex h-[40px] w-max sm:w-auto px-8 sm:px-10 items-center justify-center rounded-full bg-[#ff5500] text-[12px] sm:text-[13px] font-bold text-white transition-colors uppercase hover:bg-[#ff6b1f]">
              Book a Consultation
            </Link>
          </div>
        {/* </FadeUp> */}

      </div>
    </section>
  );
}
