"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeDown from "./FadeDown";
import FadeUp from "./FadeUp";
import ScaleIn from "./Scalein";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

const process = [
  {
    number: "01",
    title: "DISCOVER",
    copy: "We dive deep into your business, audience and market to uncover real opportunities.",
    icon: "/assets/rigggght_arrow.png",
  },
  {
    number: "02",
    title: "STRATEGISE",
    copy: "We create a customised strategy with clear objectives, roadmap and success metrics.",
    icon: "/assets/rigggght_arrow.png",
  },
  {
    number: "03",
    title: "EXECUTE",
    copy: "We execute with precision, bringing your strategy to life and scaling measurable results.",
  },
];

export function Strategic() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % process.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoplay]);

  return (
    <section className="bg-[#F8F8F7] pb-[40px] pt-[40px] sm:pt-[70px] text-black px-6">
      <div className="mx-auto max-w-[1200px] xl:max-w-[1300px] ">

        {/* Section label — drops in from above */}
        <div className="text-center">
          <FadeDown>
            <p className="font-[var(--font-be-vietnam)] text-[10px] sm:text-[12px] font-bold uppercase leading-none tracking-[1px] text-[#ff5500]">
              OUR APPROACH
            </p>
          </FadeDown>

          {/* Headline — scales in for more punch than a plain fade */}
          <ScaleIn delay={0.1} startScale={0.92}>
            <h2 className="mt-[26px] sm:mt-[20px] text-[32px] font-medium leading-[0.6] sm:leading-[1.05] tracking-[-0.8px] sm:text-[56px]">
              a strategic process
              <span className="mt-[10px] sm:mt-[25px] block font-[var(--font-cormorant)] text-[40px] font-normal timesFontFamily italic sm:leading-[0.15] leading-[0.9] tracking-[-0.8px] text-[#ff5500] sm:text-[56px]">
                built to perform
              </span>
            </h2>
          </ScaleIn>

          {/* Supporting copy */}
          <FadeUp delay={0.2}>
            <p className="mx-auto mt-[20px] sm:mt-[40px] sm:max-w-[500px] max-w-[360px] text-[13px] sm:text-[18px] font-normal leading-[-1%] px-2 sm:px-0">
              Every project starts with understanding your business before we plan, create and deliver.
            </p>
          </FadeUp>
        </div>

        {/* Process steps — staggered sequential reveal */}
        <Stagger
          staggerDelay={0.18}
          className="mt-[60px] sm:mt-[93px] hidden md:grid md:grid-cols-3 md:gap-y-0"
        >
          {process.map((step, index) => (
            <StaggerItem key={step.number} y={50}>
              <article
                className={`relative md:min-h-[355px] ${
                  index === 0
                    ? "pr-4 sm:pr-6 lg:pr-8"
                    : index === process.length - 1
                    ? "pl-4 sm:pl-6 lg:pl-8 md:border-l md:border-black/10"
                    : "px-4 sm:px-6 lg:px-8 md:border-l md:border-black/10"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-[var(--font-cormorant)] text-[120px] sm:text-[150px] lg:text-[180px] font-normal leading-[0.72] timesFontFamily tracking-[0%] min-w-[120px] sm:min-w-[160px] inline-block">
                    {step.number}
                  </span>
                  {step.icon && (
                    <span className="grid border border-black size-[40px] sm:size-[48px] lg:size-[50px] shrink-0 place-items-center rounded-full text-[#ff5500] shadow-[0_18px_32px_rgba(0,0,0,0.08)]">
                      <Image className="size-[24px] sm:size-[28px] lg:size-[30px]" src={step.icon} alt="" width={30} height={30} />
                    </span>
                  )}
                </div>
                <div className="mt-[30px] sm:mt-[48px] h-px w-9 bg-[#ff5500]" />
                <h3 className="mt-[20px] sm:mt-[33px] text-[20px] min-[375px]:text-[24px] sm:text-[30px] lg:text-[34.6px] font-bold leading-none tracking-[-0.85px]">
                  {step.title}
                </h3>
                <p className="mt-[16px] sm:mt-[30px] max-w-[400px] text-[13px] sm:text-[15px] lg:text-[17px] font-normal leading-[20px] sm:leading-[26px] text-black/70">
                  {step.copy}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Mobile-only interactive step tabs to reduce space and add premium micro-animations */}
        <div className="mt-[35px] md:hidden block">
          {/* Tabs row */}
          <div className="flex justify-between items-center border-b border-black/10 pb-4 mb-6 relative">
            {process.map((step, idx) => (
              <button
                key={step.number}
                onClick={() => {
                  setActiveStep(idx);
                  setIsAutoplay(false);
                }}
                className="flex flex-col items-center flex-1 cursor-pointer outline-none relative"
              >
                <span className={`font-[var(--font-cormorant)] text-[32px] min-[375px]:text-[38px] leading-[1.0] timesFontFamily transition-colors duration-300 ${activeStep === idx ? "text-[#ff5500]" : "text-black"}`}>
                  {step.number}
                </span>
                <span className={`text-[9px] min-[375px]:text-[10px] font-bold tracking-wider uppercase mt-1 transition-colors duration-300 ${activeStep === idx ? "text-black" : "text-black"}`}>
                  {step.title}
                </span>
                {activeStep === idx && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-[-17px] left-0 right-0 h-[2px] bg-[#ff5500]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Active Card Body */}
          <div className="min-h-[190px] flex flex-col justify-center bg-white border border-black/[0.04] rounded-[16px] p-6 shadow-[0_12px_24px_rgba(0,0,0,0.03)] relative overflow-hidden">
            {/* Step label / Icon */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-[9px] font-bold uppercase tracking-[1.5px] text-[#ff5500] bg-[#ff5500]/10 px-2.5 py-1 rounded-full">
                Step {process[activeStep].number}
              </span>
              {process[activeStep].icon && (
                <span className="grid border border-black/10 size-[32px] place-items-center rounded-full text-[#ff5500]">
                  <Image className="size-[16px]" src={process[activeStep].icon} alt="" width={16} height={16} />
                </span>
              )}
            </div>

            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-col"
            >
              <h3 className="text-[18px] font-bold leading-none tracking-[-0.5px]">
                {process[activeStep].title}
              </h3>
              <p className="mt-2.5 text-[13px] sm:leading-[22px] leading-[20px] text-black/70">
                {process[activeStep].copy}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Partnership card — zoom-in feels more like a "highlight" than a fade */}
        <ScaleIn delay={0.1} startScale={0.94}>
          <div className="mx-auto mt-[40px] sm:mt-[56px] grid max-w-[900px] overflow-hidden rounded-[16px] border border-black/[0.03] bg-white shadow-[0_22px_42px_rgba(0,0,0,0.08)] md:min-h-[110px] md:grid-cols-[492px_1fr]">
            <div className="flex items-center gap-[12px] min-[375px]:gap-[21px] px-4 min-[375px]:px-4 py-5 min-[375px]:py-7 md:px-[38px]">
              <span className="grid size-[36px] min-[375px]:size-[46px] shrink-0 place-items-center border border-gray-200 p-2.5 min-[375px]:p-3.5 rounded-full text-[22px] font-normal text-white shadow-[0_8px_16px_rgba(0,0,0,0.08)]">
                <Image src="/assets/star.png" alt="" width={46} height={46} />
              </span>
              <div>
                <h3 className="text-[13px] min-[375px]:text-[13px] sm:text-[18px] font-bold leading-none">
                  A process that keeps things moving
                </h3>
                <p className="mt-[6px] min-[375px]:mt-[11px] max-w-[420px] text-[10px] min-[375px]:text-[11.5px] sm:text-[15px] leading-[18px] min-[375px]:leading-[24px] text-black/60">
                  From planning to delivery, we keep every project organised, efficient and on track.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center border-t border-black/[0.06] px-16 py-5 min-[375px]:py-7 md:border-l md:border-t-0 md:px-[4px] lg:px-[24px]">
              <Link
                href="/contact"
                className="inline-flex h-8 sm:h-11 w-full sm:max-w-[300px] max-w-[230px] items-center justify-center rounded-full bg-[#ff5500] px-2 sm:px-6 text-[10px] sm:text-[11px] md:text-[12px] font-semibold uppercase tracking-[1.5px] sm:tracking-[2px] text-white whitespace-nowrap transition hover:bg-[#ff6b1f]"
              >
                Book a Consultation
                <span className="text-[14px] ml-0 lg:ml-2 leading-none">
                  <Image className="size-[16px] hidden sm:block" src="/assets/smallRightArrow.png" alt="" width={16} height={16} />
                </span>
              </Link>
            </div>
          </div>
        </ScaleIn>

      </div>
    </section>
  );
}
