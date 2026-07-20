"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

const slides = [
  "/assets/talent-bgImage.png",
  "/assets/webBanner/2.png",
  "/assets/webBanner/3.png",
  "/assets/webBanner/4.png",
  "/assets/webBanner/5.png",
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
    <section className="relative overflow-hidden bg-black text-white min-h-[80vh] flex items-center px-4 min-[375px]:px-6 pb-[80px] pt-[120px]">

      {/* Background Slider */}
      <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)`, zIndex: 0 }}
      >
        {slides.map((src, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 bg-cover"
            style={{
              backgroundImage: `url('${src}')`,
              backgroundPosition: src.includes('3.png') ? '80% 20%' : 'center 20%'
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1150px]">
        <Stagger staggerDelay={0.15}>
          <StaggerItem>
            <h1 className="mt-[24px] max-w-[700px] font-[var(--font-be-vietnam)] text-[28px] min-[375px]:text-[38px] font-bold capitalize leading-[1.1] tracking-[-1px] sm:tracking-[-3px] sm:text-[72px] text-white">
              The
              {" "}
              <span className="font-[var(--font-cormorant)] text-[1.12em] sm:text-[96px] font-normal timesFontFamily uppercase italic text-white leading-[1.2] sm:leading-[30px] tracking-[-1px] sm:tracking-[-2.8px]">
                Q4
              </span>
              {" "}
              Play
            </h1>
          </StaggerItem>
          <StaggerItem>
            <h2 className="font-bold text-[24px] sm:text-[32px] mt-8 sm:mt-12">
              Start planning for
              <br />
              peak period
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-[24px] min-[375px]:mt-[30px] sm:mt-[50px] max-w-[515px] font-[var(--font-inter)] text-[14px] leading-[1.6] sm:leading-[32px] text-white/90 sm:text-[18px]">
              Q4 is the most valuable period in the content calendar. With major retail moments, increased brand investment and audiences actively searching and buying, early planning gives creators the strongest opportunity to maximise visibility and revenue. The biggest Q4 opportunities are secured before peak period begins.
            </p>
          </StaggerItem>
          <StaggerItem>
            <Link
              className="mt-[24px] sm:mt-[36px] inline-flex h-[46px] sm:h-[38px] min-w-[178px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-white transition uppercase hover:bg-[#ff6b1f]"
              href="/contact"
            >
              Book a Consultation
            </Link>
          </StaggerItem>
        </Stagger>
      </div>

      {/* Dots */}
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
  );
}
