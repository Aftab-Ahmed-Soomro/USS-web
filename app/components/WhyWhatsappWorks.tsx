"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import FadeUp from "./FadeUp";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

const ALL_ITEMS = [3, 2, 1, 4, 5];
const FIRST_IMAGE = 3;
const flickerItems = [2, 1, 4, 5];

export function WhyWhatsappWorks() {
  const [activeFlicker, setActiveFlicker] = useState<number>(flickerItems[0]);
  // Mobile: original single active accordion
  const [activeMobile, setActiveMobile] = useState<number>(3);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  // Detect desktop (lg = 1024px+)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Desktop: cycle through flickerItems
  useEffect(() => {
    if (!isDesktop || isHovered) return;
    const interval = setInterval(() => {
      setActiveFlicker((prev) => {
        const currentIndex = flickerItems.indexOf(prev);
        const nextIndex = (currentIndex + 1) % flickerItems.length;
        return flickerItems[nextIndex];
      });
    }, 1500);
    return () => clearInterval(interval);
  }, [isDesktop, isHovered]);

  // Mobile: cycle through ALL_ITEMS
  useEffect(() => {
    if (isDesktop || isHovered) return;
    const interval = setInterval(() => {
      setActiveMobile((prev) => {
        const currentIndex = ALL_ITEMS.indexOf(prev);
        const nextIndex = (currentIndex + 1) % ALL_ITEMS.length;
        return ALL_ITEMS[nextIndex];
      });
    }, 1500);
    return () => clearInterval(interval);
  }, [isDesktop, isHovered]);

  return (
    <section className="w-full text-white">
      <div className="mx-auto max-w-[1150px]  px-4 min-[375px]:px-6">
        <Stagger staggerDelay={0.15}>
          <StaggerItem>
            <h2 className="text-center mb-[30px] sm:mb-[50px]">
              <span className="block lowercase font-medium text-[32px] leading-[1] tracking-[-1px] sm:text-[clamp(40px,5vw,56px)] sm:leading-[40px] sm:tracking-[-3px] font-[var(--font-be-vietnam)]">
                connect with your
              </span>
              <div className="flex flex-wrap justify-center items-baseline gap-x-[8px] sm:gap-x-[15px]">
                <span className="lowercase font-medium text-[32px] leading-[1.1] tracking-[-1px] sm:text-[clamp(40px,5vw,56px)] sm:leading-[clamp(50px,6vw,80px)] sm:tracking-[-3px] font-[var(--font-be-vietnam)]">
                  customers
                </span>
                <span
                  className="lowercase italic font-normal text-[42px] leading-[1.1] tracking-[-1px] sm:text-[clamp(48px,6vw,72px)] sm:leading-[clamp(50px,6vw,80px)] sm:tracking-[-3px]"
                  style={{ fontFamily: "'Times New Roman', Times, serif" }}
                >
                  instantly
                </span>
              </div>
            </h2>
          </StaggerItem>
        </Stagger>

        <FadeUp delay={0.2}>
          <div className="relative w-full mt-8 sm:mt-12">
            <div
              className="flex w-full h-[400px] sm:h-[500px] lg:h-[700px] flex-row gap-0 overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* ── DESKTOP LAYOUT: pinned first + flickering rest ── */}
              {isDesktop ? (
                <>
                  {/* First image — always fully visible */}
                  <article
                    className="relative overflow-hidden flex-none"
                    style={{ width: "clamp(180px, 35%, 400px)" }}
                  >
                    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
                      <img
                        src={`/assets/whatsapp-and-sms/${FIRST_IMAGE}.png`}
                        alt="Why WhatsApp and SMS Work — Primary"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                          display: "block",
                          transition: "none",
                        }}
                      />
                    </div>
                  </article>

                  {/* Remaining images — flicker */}
                  {flickerItems.map((num) => {
                    const isActive = activeFlicker === num;
                    return (
                      <article
                        key={num}
                        tabIndex={0}
                        onMouseEnter={() => {
                          setIsHovered(true);
                          setActiveFlicker(num);
                        }}
                        onClick={() => setActiveFlicker(num)}
                        onFocus={() => setActiveFlicker(num)}
                        className="group relative cursor-pointer overflow-hidden outline-none"
                        style={{
                          flex: isActive ? "3 1 0%" : "0.6 1 0%",
                          transition: "flex 0.5s cubic-bezier(0.4,0,0.2,1)",
                        }}
                      >
                        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
                          <img
                            src={`/assets/whatsapp-and-sms/${num}.png`}
                            alt={`Why WhatsApp and SMS Work ${num}`}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              objectPosition: "center",
                              display: "block",
                              transition: "none",
                            }}
                          />
                        </div>

                        {/* Shimmer on active */}
                        <div
                          className="absolute inset-0 z-10 pointer-events-none"
                          style={{
                            backgroundImage: isActive
                              ? "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 55%, transparent 60%)"
                              : "none",
                            backgroundSize: "200% 100%",
                            animation: isActive ? "shimmer 2s ease-in-out infinite" : "none",
                          }}
                        />
                      </article>
                    );
                  })}
                </>
              ) : (
                /* ── MOBILE LAYOUT: original equal accordion ── */
                ALL_ITEMS.map((num) => (
                  <article
                    key={num}
                    tabIndex={0}
                    onMouseEnter={() => {
                      setIsHovered(true);
                      setActiveMobile(num);
                    }}
                    onClick={() => setActiveMobile(num)}
                    onFocus={() => setActiveMobile(num)}
                    className="group relative cursor-pointer overflow-hidden outline-none"
                    style={{
                      flex: activeMobile === num ? "4 1 0%" : "1 1 0%",
                      transition: "flex 0.4s cubic-bezier(0.4,0,0.2,1)",
                    }}
                  >
                    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
                      <Image
                        src={`/assets/whatsapp-and-sms/${num}.png`}
                        alt={`Why WhatsApp and SMS Work ${num}`}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 640px) 225px, (max-width: 1024px) 282px, 394px"
                      />
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>
        </FadeUp>
      </div>

      {/* Shimmer keyframes */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </section>
  );
}
