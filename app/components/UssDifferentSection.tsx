"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  {
    videos: [
      "https://unitedstrategicsolutions.com/assets/360_home/Agency 8 Event.webm",
      "https://unitedstrategicsolutions.com/assets/360_home/Cinnamood BTS shoot.webm",
      "https://unitedstrategicsolutions.com/assets/360_home/DIRECTION 3.webm",
      "https://unitedstrategicsolutions.com/assets/360_home/Dubai hills office v2_prob3.webm",
    ],
    alt: "USS Different 1",
  },
  {
    videos: [
      "https://unitedstrategicsolutions.com/assets/360_home/GALA BEHIND THE SCENE EDIT.webm",
      "https://unitedstrategicsolutions.com/assets/360_home/Hot seat 1 updated w_captions.webm",
      "https://unitedstrategicsolutions.com/assets/360_home/Hot seat 1.webm",
      "https://unitedstrategicsolutions.com/assets/360_home/Idea 8 - BTS v2.webm",
    ],
    alt: "USS Different 2",
  },
  {
    videos: [
      "https://unitedstrategicsolutions.com/assets/360_home/Motion USS.webm",
      "https://unitedstrategicsolutions.com/assets/360_home/USS-narrator-updated.webm",
      "https://unitedstrategicsolutions.com/assets/360_home/USS-x-WWT-Gala.webm",
      "https://unitedstrategicsolutions.com/assets/360_home/Whats-new.webm",
    ],
    alt: "USS Different 3",
  },
];

function SequentialVideoPlayer({ videos }: { videos: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <video
      key={videos[currentIndex]}
      src={videos[currentIndex]}
      autoPlay
      muted
      playsInline
      onEnded={() => setCurrentIndex((prev) => (prev + 1) % videos.length)}
      className="w-full h-full object-cover rounded-xl"
    />
  );
}

export function UssDifferentSection() {
  const allVideos = cards.flatMap(card => card.videos);

  return (
    <section 
      className="relative z-10 bg-[#0a0a0a] text-white overflow-hidden py-[30px] sm:py-[100px]"
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

      <div className="mx-auto flex max-w-[1150px] px-0 sm:px-6 flex-col items-center relative z-10 w-full">
        {/* Animated Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full px-4 sm:px-0 text-center font-[var(--font-be-vietnam)] text-[32px] sm:text-[56px] font-normal leading-[1.2] sm:leading-[18.33px] tracking-[-0.02em] pb-8 sm:pb-16"
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
              <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
                <SequentialVideoPlayer videos={card.videos} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Layout (below lg screens) */}
        <div className="lg:hidden w-full mt-0 px-1 min-[375px]:px-1.5">
          <div className="grid grid-cols-3 gap-1 min-[375px]:gap-1.5 w-full mx-auto">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative w-full aspect-[405/620] group rounded-md min-[375px]:rounded-lg overflow-hidden shadow-lg"
              >
                <div className="w-full h-full">
                  <SequentialVideoPlayer videos={card.videos} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


