"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import FadeUp from "./FadeUp";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

const items = [3, 2, 1, 4, 5];

export function WhyWhatsappWorks() {
  const [active, setActive] = useState<number>(3);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActive((prev) => {
        const currentIndex = items.indexOf(prev);
        const nextIndex = (currentIndex + 1) % items.length;
        return items[nextIndex];
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="w-full text-white">
      <div className="mx-auto max-w-[1150px] px-4 min-[375px]:px-6">
        <Stagger staggerDelay={0.15}>
          <StaggerItem>
            <h2 className="flex flex-wrap justify-center items-center gap-x-[8px] sm:gap-x-[15px] mb-[30px] sm:mb-[50px] text-center">
              <span
                className="lowercase font-medium text-[32px] leading-[1.1] tracking-[-1px] sm:text-[clamp(40px,5vw,56px)] sm:leading-[clamp(50px,6vw,80px)] sm:tracking-[-3px] font-[var(--font-be-vietnam)]"
              >
                connect with customers
              </span>
              <span
                className="lowercase italic font-normal text-[42px] leading-[1.1] tracking-[-1px] sm:text-[clamp(48px,6vw,72px)] sm:leading-[clamp(50px,6vw,80px)] sm:tracking-[-3px]"
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
              >
                instantly
              </span>
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
              {items.map((num) => (
                <article
                  key={num}
                  tabIndex={0}
                  onMouseEnter={() => setActive(num)}
                  onClick={() => setActive(num)}
                  onFocus={() => setActive(num)}
                  className={`group relative cursor-pointer overflow-hidden transition-all duration-230 ease-in-out outline-none ${
                    active === num
                      ? "flex-[4] sm:flex-[2]"
                      : "flex-1"
                  }`}
                >
                  <div className="absolute inset-0 z-0 h-full w-full overflow-hidden border-r border-black last:border-none">
                    <div
                      className="absolute top-0 right-0 h-full"
                      style={{ aspectRatio: "409 / 727" }}
                    >
                      <Image
                        src={`/assets/whatsapp-and-sms/${num}.png`}
                        alt={`Why WhatsApp and SMS Work ${num}`}
                        fill
                        className="object-cover object-right"
                        sizes="(max-width: 640px) 225px, (max-width: 1024px) 282px, 394px"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

