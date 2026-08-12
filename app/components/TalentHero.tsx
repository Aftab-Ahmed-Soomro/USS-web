"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

const slides = [
  "/assets/talent-bgImage.webp",
  "/assets/webBanner/2.webp",
  "/assets/webBanner/3.webp",
  "/assets/webBanner/4.webp",
  "/assets/webBanner/5.webp",
];

export function TalentHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ── DESKTOP VIEW (hidden md:flex) — Background Slider with Text Overlaid ── */}
      <section className="hidden md:flex relative overflow-hidden bg-black text-white min-h-[80vh] items-center px-6 pb-[80px] pt-[120px]">
        {/* Background Slider */}
        <div
          className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)`, zIndex: 0 }}
        >
          {slides.map((src, index) => (
            <div
              key={index}
              className={`w-full h-full flex-shrink-0 bg-cover ${src.includes('3.png')
                ? 'bg-[80%_20%]'
                : 'bg-[75%_20%] md:bg-[center_20%]'
                }`}
              style={{
                backgroundImage: `url('${src}')`
              }}
            />
          ))}
        </div>

        {/* Content Overlaid on Top of Background Slider */}
        <div className="relative z-10 mx-auto w-full max-w-[1200px] xl:max-w-[1300px] ">
          <Stagger staggerDelay={0.15}>
            <StaggerItem>
              <h1 className="mt-[24px] max-w-[700px] font-[var(--font-be-vietnam)] text-[72px] font-bold capitalize leading-[1.1] tracking-[-3px] text-white">
                The{" "}
                <span className="font-[var(--font-cormorant)] text-[96px] font-normal timesFontFamily uppercase italic text-white leading-[30px] tracking-[-2.8px]">
                  Q4
                </span>{" "}
                Play
              </h1>
            </StaggerItem>
            <StaggerItem>
              <h2 className="font-bold text-[32px] mt-12 text-white">
                Start planning for
                <br />
                peak period
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-[50px] max-w-[515px] font-[var(--font-inter)] text-[18px] leading-[32px] text-white/90">
                Q4 is the most valuable period in the content calendar. With major retail moments, increased brand investment and audiences actively searching and buying, early planning gives creators the strongest opportunity to maximise visibility and revenue. The biggest Q4 opportunities are secured before peak period begins.
              </p>
            </StaggerItem>
            <StaggerItem>
              <Link
                className="mt-[36px] inline-flex h-[38px] min-w-[178px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[13px] tracking-[0.52px] font-bold text-white transition uppercase hover:bg-[#ff6b1f]"
                href="/contact"
              >
                Book a Consultation
              </Link>
            </StaggerItem>
          </Stagger>
        </div>

        {/* Desktop Pagination Dots */}
        <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── MOBILE VIEW (md:hidden) — Text Above, Clean Image Slider Below ── */}
      <section className="flex md:hidden flex-col relative bg-black text-white px-6 pb-[60px] pt-[50px] overflow-hidden">

        {/* Mobile Top Text Section */}
        <div className="relative z-10 mx-auto w-full max-w-[1200px] xl:max-w-[1300px]  mb-8">
          <Stagger staggerDelay={0.15}>
            <StaggerItem>
              <h1 className="font-[var(--font-be-vietnam)] text-[38px] min-[375px]:text-[44px] font-bold capitalize leading-[1.08] tracking-[-1px] text-white text-center sm:text-start">
                The{" "}
                <span className="font-[var(--font-cormorant)] text-[48px] min-[375px]:text-[56px] font-normal timesFontFamily uppercase italic text-white">
                  Q4
                </span>{" "}
                Play
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-4 font-[var(--font-inter)] text-[13px] leading-[1.65] text-white/75 text-center sm:text-start">
                Q4 is the most valuable period in the content calendar. With major retail moments, increased brand investment and audiences actively searching and buying, early planning gives creators the strongest opportunity to maximise visibility and revenue. The biggest Q4 opportunities are secured before peak period begins.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="mt-6 flex items-center justify-center sm:justify-start">
                <Link
                  className="inline-flex h-[46px] items-center justify-center rounded-full bg-[#FF5500] px-7 font-[var(--font-be-vietnam)] text-[12px] tracking-[0.6px] font-bold text-white transition-all uppercase hover:bg-[#ff6b1f] active:scale-95"
                  href="/contact"
                >
                  Book a Consultation
                </Link>
              </div>
            </StaggerItem>
          </Stagger>
        </div>

        {/* Mobile Image Slider (Below Text, Clean images scrolling with NO text overlay) */}
        <div className="relative mx-auto w-full max-w-[1200px] xl:max-w-[1300px]  h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]">
          {/* Text Overlaid on Left of Mobile Image Carousel */}
          <div className="absolute top-[45%] -translate-y-1/2 left-6 z-10 max-w-[60%] pointer-events-none">
            <h2 className="font-bold text-[22px] leading-[1.35] text-white tracking-[-0.5px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Start planning
              <br />
              for peak period
            </h2>
          </div>

          <div
            className="w-full h-full flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((src, index) => (
              <div
                key={index}
                className="w-full h-full flex-shrink-0 relative bg-[#0a0a0a]"
              >
                <Image
                  src={src}
                  alt={`Q4 Play banner ${index + 1}`}
                  fill
                  sizes="100vw"
                  className="object-cover object-[70%_center]"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Navigation Dots on Mobile Slider */}
          <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === index ? "w-6 bg-[#FF5500]" : "w-1.5 bg-white/40"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </section>
    </>
  );
}
