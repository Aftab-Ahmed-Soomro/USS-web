"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  {
    src: "/assets/cardMain1.png",
    alt: "USS Different 1",
  },
  {
    src: "/assets/cardMain2.png",
    alt: "USS Different 2",
  },
  {
    src: "/assets/cardMain3.png",
    alt: "USS Different 3",
  },
];

export function UssDifferentSection() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const currentIndex = (page % cards.length + cards.length) % cards.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const setCardIndex = (index: number) => {
    const dir = index > currentIndex ? 1 : -1;
    setPage([index, dir]);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 40;
    const isRightSwipe = distance < -40;

    if (isLeftSwipe) {
      paginate(1);
    } else if (isRightSwipe) {
      paginate(-1);
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.94,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 80 : -80,
      opacity: 0,
      scale: 0.94,
    }),
  };

  return (
    <section 
      className="relative z-10 bg-[#0a0a0a] text-white overflow-hidden py-[50px] sm:py-[100px]"
      style={{
        backgroundImage: "url('/assets/bgMain.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Ambient Glow */}
      <div 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff5500]/15 rounded-full blur-[140px] opacity-60"
      />

      <div className="mx-auto flex max-w-[1150px] px-6 flex-col items-center relative z-10">
        {/* Animated Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full text-center font-[var(--font-be-vietnam)] text-[32px] sm:text-[56px] font-normal leading-[1.2] sm:leading-[18.33px] tracking-[-0.02em] pb-8 sm:pb-16"
        >
          what&apos;s make{" "}
          <span className="text-[42px] sm:text-[72px] font-normal timesFontFamily italic tracking-[-0.02em] text-[#ff5500]">
            uss different
          </span>
        </motion.h2>

        {/* Desktop Layout (lg screens and above - with reveal stagger & hover animation) */}
        <div className="hidden lg:flex w-full flex-row justify-center items-center gap-6 lg:gap-8 mt-4 sm:mt-8">
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="relative w-full max-w-[405px] aspect-[405/620] group cursor-pointer transition-shadow rounded-2xl overflow-hidden shadow-2xl hover:shadow-[#ff5500]/20"
            >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                className="object-contain lg:object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 405px"
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel Layout (below lg screens with smooth AnimatePresence transition) */}
        <div className="lg:hidden w-full flex flex-col items-center mt-2">
          <div 
            className="relative w-full max-w-[380px] sm:max-w-[450px] flex items-center justify-center px-8"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Left Arrow Button */}
            <motion.button
              whileTap={{ scale: 0.85 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => paginate(-1)}
              aria-label="Previous slide"
              className="absolute left-0 z-20 p-2.5 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 backdrop-blur-md transition-colors shadow-xl"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Active Image Container with animated slide switching */}
            <div className="w-full relative h-[460px] sm:h-[530px] mx-auto overflow-hidden rounded-xl">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={page}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.25 },
                    scale: { duration: 0.25 }
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Image
                    src={cards[currentIndex].src}
                    alt={cards[currentIndex].alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 450px"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Arrow Button */}
            <motion.button
              whileTap={{ scale: 0.85 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => paginate(1)}
              aria-label="Next slide"
              className="absolute right-0 z-20 p-2.5 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 backdrop-blur-md transition-colors shadow-xl"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Dots Navigation with smooth width expansion animation */}
          <div className="flex space-x-2.5 mt-5">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCardIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className="relative py-1"
              >
                <motion.div
                  animate={{
                    width: index === currentIndex ? 24 : 8,
                    backgroundColor: index === currentIndex ? "#ff5500" : "rgba(255, 255, 255, 0.4)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-2 rounded-full"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


