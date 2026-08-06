"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";

const cards = [
  {
    videos: [
      "https://unitedstrategicsolutions.com/assets/360_home/GALA BEHIND THE SCENE EDIT.webm",
      "https://unitedstrategicsolutions.com/assets/360_home/Agency 8 Event.webm",
      // "https://unitedstrategicsolutions.com/assets/360_home/USS-x-WWT-Gala.webm"
      "https://unitedstrategicsolutions.com/assets/360_home/3.webm",
      "https://unitedstrategicsolutions.com/assets/360_home/Interior Design Process for Vision Tower.mp4",
    ],
    alt: "LEFT",
  },
  {
    videos: [
      "https://unitedstrategicsolutions.com/assets/360_home/Hot seat 1 updated w_captions.webm",
      "https://unitedstrategicsolutions.com/assets/360_home/Whats-new.webm",
      "https://unitedstrategicsolutions.com/assets/360_home/Shortened version.mp4",
      "https://unitedstrategicsolutions.com/assets/360_home/USS-narrator-updated.webm",
    ],
    alt: "MIDDLE",
  },
  {
    videos: [
      "https://unitedstrategicsolutions.com/assets/360_home/Cinnamood BTS shoot.webm",
      "https://unitedstrategicsolutions.com/assets/360_home/Idea 8 - BTS v2.webm",
      "https://unitedstrategicsolutions.com/assets/360_home/DIRECTION 3.webm"
    ],
    alt: "RIGHT",
  }
];

function SequentialVideoPlayer({ videos, isActive }: { videos: string[]; isActive?: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
        setIsTransitioning(false);
      }, 400);
    }, 15000);

    return () => clearTimeout(timer);
  }, [currentIndex, videos.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.video
          key={videos[currentIndex]}
          src={videos[currentIndex]}
          autoPlay
          muted
          playsInline
          onEnded={() => {
            setIsTransitioning(true);
            setTimeout(() => {
              setCurrentIndex((prev) => (prev + 1) % videos.length);
              setIsTransitioning(false);
            }, 400);
          }}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover rounded-xl"
        />
      </AnimatePresence>

      {/* Cinematic bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl pointer-events-none" />

      {/* Video progress dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {videos.map((_, i) => (
          <motion.div
            key={i}
            animate={{
              width: i === currentIndex ? 16 : 4,
              backgroundColor: i === currentIndex ? "#ff5500" : "rgba(255,255,255,0.4)",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="h-[3px] rounded-full"
          />
        ))}
      </div>
    </div>
  );
}

// Floating particle component
function FloatingParticle({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-[#ff5500] pointer-events-none"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{
        y: [0, -30, 0],
        opacity: [0, 0.6, 0],
        scale: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 4 + delay,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
}

export function UssDifferentSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-80px" });

  const particles = [
    { delay: 0, x: "10%", y: "20%", size: 3 },
    { delay: 1.5, x: "85%", y: "15%", size: 4 },
    { delay: 0.7, x: "20%", y: "70%", size: 2 },
    { delay: 2.2, x: "75%", y: "60%", size: 3 },
    { delay: 1.0, x: "50%", y: "10%", size: 5 },
    { delay: 3.0, x: "90%", y: "80%", size: 2 },
    { delay: 0.3, x: "5%", y: "50%", size: 4 },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-[#000] text-white overflow-hidden py-[30px] sm:py-[100px]"
      style={{
        backgroundImage: "url('/assets/bgMain.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Floating ambient particles */}
      {particles.map((p, i) => (
        <FloatingParticle key={i} {...p} />
      ))}

      {/* Animated background glow that pulses */}
      <motion.div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[150px]"
        style={{ background: "radial-gradient(ellipse, rgba(255,85,0,0.08) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Top edge shimmer line */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff5500] to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: "100%", transformOrigin: "left center" }}
      />

      <div className="mx-auto flex max-w-[1150px] 2xl:max-w-[1440px] px-4 flex-col items-center relative z-10 w-full -mt-5 sm:-mt-0">

        {/* Animated Heading */}
        <div ref={headingRef} className="w-full text-center pb-5 sm:pb-16">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={isHeadingInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="w-full px-4 sm:px-0 font-[var(--font-be-vietnam)] text-[28px] sm:text-[56px] font-normal leading-[1.2] sm:leading-[18.33px] tracking-[-0.02em] mr-3">
              <motion.span
                initial={{ opacity: 0 }}
                animate={isHeadingInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                what makes{" "}
              </motion.span>
              <span
                className="text-[38px] sm:text-[72px] font-normal timesFontFamily italic tracking-[-0.02em] text-[#ff5500] relative inline-block"
              >
                {/* Shimmer effect on the accent text */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 pointer-events-none"
                  initial={{ x: "-100%" }}
                  animate={isHeadingInView ? { x: "200%" } : {}}
                  transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
                />
                uss different
              </span>
            </h2>
          </motion.div>

          {/* Animated underline */}
          <motion.div
            className="h-[2px] bg-gradient-to-r from-transparent via-[#ff5500]/60 to-transparent mx-auto mt-3 sm:mt-6"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isHeadingInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: "60%", transformOrigin: "center" }}
          />
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex w-full flex-row justify-center items-center gap-6 lg:gap-8 mt-4 sm:mt-8">
          {cards.map((card, index) => {
            const isMiddle = index === 1;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80, scale: 0.9, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, scale: isMiddle ? 1.04 : 1, rotateX: 0 }}
                whileHover={{
                  y: -14,
                  scale: isMiddle ? 1.07 : 1.04,
                  rotateY: index === 0 ? 2 : index === 2 ? -2 : 0,
                }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.18,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ perspective: 1000 }}
                className="relative w-full max-w-[405px] aspect-[405/700] group cursor-pointer rounded-2xl overflow-hidden"
              >
                {/* Glow border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none z-20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    boxShadow: isMiddle
                      ? "0 0 40px rgba(255,85,0,0.5), inset 0 0 30px rgba(255,85,0,0.1)"
                      : "0 0 30px rgba(255,85,0,0.35), inset 0 0 20px rgba(255,85,0,0.08)",
                    border: "1px solid rgba(255,85,0,0.3)",
                  }}
                />

                {/* Static subtle glow for middle card */}
                {isMiddle && (
                  <motion.div
                    className="absolute -inset-1 rounded-2xl pointer-events-none z-0"
                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                      boxShadow: "0 0 50px rgba(255,85,0,0.3)",
                    }}
                  />
                )}

                {/* Corner accent dots */}
                <motion.div
                  className="absolute top-3 left-3 w-2 h-2 rounded-full bg-[#ff5500] z-30"
                  animate={{ opacity: [1, 0.3, 1], scale: [1, 1.3, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.5 }}
                />
                <motion.div
                  className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#ff5500] z-30"
                  animate={{ opacity: [1, 0.3, 1], scale: [1, 1.3, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.5 + 0.4 }}
                />

                <div className="w-full h-full transition-transform duration-700 group-hover:scale-[1.03]">
                  <SequentialVideoPlayer videos={card.videos} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden w-full mt-0 px-1 min-[375px]:px-1.5">
          <div className="grid grid-cols-3 gap-1 min-[375px]:gap-1.5 w-full mx-auto">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative w-full aspect-[405/700] group rounded-md min-[375px]:rounded-lg overflow-hidden shadow-lg"
              >
                {/* Glow border */}
                <motion.div
                  className="absolute inset-0 rounded-md min-[375px]:rounded-lg pointer-events-none z-20"
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(255,85,0,0)",
                      "0 0 12px rgba(255,85,0,0.3)",
                      "0 0 0px rgba(255,85,0,0)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 1,
                    ease: "easeInOut",
                  }}
                />
                <div className="w-full h-full">
                  <SequentialVideoPlayer videos={card.videos} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom edge shimmer line */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff5500]/50 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: "100%", transformOrigin: "right center" }}
      />
    </section>
  );
}
