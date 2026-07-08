"use client";

import { useState } from "react";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

const CARDS_DATA = [
  {
    id: "01",
    title: "Social Media Strategy",
    description: "Every successful campaign starts with a clear strategy. We build a tailored plan around your goals, customer journey and opportunities for growth.",
    bgImage: "/assets/method1.png",
  },
  {
    id: "02",
    title: "Social media execution",
    description: "We implement the strategy with precision, creating high-quality content, managing scheduling, and engaging with your audience to build a loyal community.",
    bgImage: "/assets/method2.png",
  },
  {
    id: "03",
    title: "Maintenance",
    description: "Ongoing optimization and active monitoring ensure your profiles remain relevant. We analyze performance data to refine tactics and sustain long-term growth.",
    bgImage: "/assets/method3.png",
  },
];

export default function SocialMediaRevenueMethod() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getFlex = (index: number): number => {
    if (hoveredIndex === null) return index === 0 ? 2 : 1;
    return index === hoveredIndex ? 2 : 1;
  };

  const isActive = (index: number) => hoveredIndex === index;

  return (
    <div className="w-full bg-black text-white py-20 min-h-screen flex flex-col justify-center font-sans px-6">
      <Stagger staggerDelay={0.15}>
        {/* Heading — constrained width */}
        <div className="max-w-[1150px] w-full mx-auto">
          <StaggerItem>
            <p className="font-[var(--font-inter)] text-[10px] font-bold uppercase tracking-[4px] text-[#ff5500] mb-4">
              PROCESS
            </p>
          </StaggerItem>

          <StaggerItem>
            <h2 className="text-white text-[32px] font-medium leading-[1.15] tracking-[-3%] sm:text-[56px] sm:leading-[70px] mb-16">
              organic social{" "}
              <span
                className="italic text-[#ff5500] font-normal text-[1.1em] tracking-[-3%] sm:text-[72px] sm:leading-[70px]"
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
              >
                step by step process
              </span>
            </h2>
          </StaggerItem>
        </div>

        {/* Cards — full width with just edge padding */}
        <div className="w-full px-6">
          {/* Desktop: flex accordion */}
          <StaggerItem>
            <div className="hidden md:flex gap-6">
              {CARDS_DATA.map((card, index) => (
                <div
                  key={card.id}
                  style={{
                    flex: getFlex(index),
                    transition: "flex 0.5s cubic-bezier(0.4,0,0.2,1)",
                    minWidth: 0,
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    style={{
                      backgroundImage: "url(" + card.bgImage + ")",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "500px",
                    }}
                    className="relative rounded-[28px] overflow-hidden p-6 flex flex-col justify-between cursor-pointer h-full"
                  >
                    <div className="text-[9.82px] font-medium leading-[14.73px] tracking-[2.95px] text-white opacity-80">
                      {card.id}
                    </div>

                    {/* Absolutely anchored to bottom so title always aligns perfectly */}
                    <div
                      className="absolute bottom-10 left-0 right-0 p-6 transition-transform duration-500 ease-out will-change-transform"
                      style={{
                        transform: isActive(index) ? "translateY(0)" : "translateY(calc(100% - 56px))",
                      }}
                    >
                      <h3 className="text-[22.64px] font-normal leading-[26.78px] text-white mb-3">
                        {card.title}
                      </h3>
                      <p
                        className="text-[15.5px] font-normal leading-[1.8] text-white/90 transition-opacity duration-500 delay-75 ease-out"
                        style={{ opacity: isActive(index) ? 1 : 0 }}
                      >
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile: stacked */}
            <div className="flex md:hidden flex-col gap-6">
              {CARDS_DATA.map((card) => (
                <div
                  key={card.id}
                  style={{
                    backgroundImage: "url(" + card.bgImage + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "400px",
                  }}
                  className="relative rounded-[28px] overflow-hidden p-6 flex flex-col justify-between cursor-pointer"
                >
                  <div className="text-[9.82px] font-medium tracking-[2.95px] text-white opacity-80">
                    {card.id}
                  </div>
                  <div>
                    <h3 className="text-[22.64px] font-normal leading-[26.78px] text-white mb-3">
                      {card.title}
                    </h3>
                    <p className="text-[15.5px] font-normal leading-[1.8] text-white/90">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </StaggerItem>

        </div>
      </Stagger>
    </div>
  );
}
