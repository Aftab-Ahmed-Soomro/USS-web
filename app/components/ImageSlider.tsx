"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const IMAGES = [
  "/assets/about-slider-images/1.jpeg",
  "/assets/about-slider-images/2.jpeg",
  "/assets/about-slider-images/3.jpeg",
  "/assets/about-slider-images/4.jpeg",
];

const AUTOPLAY_INTERVAL = 4000;

export default function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearInterval(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    clearTimer();
    timeoutRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % IMAGES.length);
    }, AUTOPLAY_INTERVAL);
  }, [clearTimer]);

  useEffect(() => {
    startTimer();
    return () => clearTimer();
  }, [startTimer, clearTimer]);

  const goTo = (index: number) => {
    setActiveIndex(index);
    startTimer(); // reset autoplay timer on manual interaction
  };

  const goPrev = () => goTo((activeIndex - 1 + IMAGES.length) % IMAGES.length);
  const goNext = () => goTo((activeIndex + 1) % IMAGES.length);

  return (
    <div className="relative w-full aspect-[700/750] group">
      {/* Crossfade stack */}
      {IMAGES.map((src, index) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: index === activeIndex ? 1 : 0 }}
        >
          <Image
            src={src}
            alt={`USS team collaborating ${index + 1}`}
            fill
            className="object-cover object-center"
            priority={index === 0}
            sizes="(min-width: 1024px) 39vw, 100vw"
          />
        </div>
      ))}

      {/* Arrows */}
      {/* <button
        type="button"
        onClick={goPrev}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Next image"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button> */}

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {IMAGES.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-2.5 h-2.5 bg-[#ff5a1f]"
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}