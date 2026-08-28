"use client";

import Image from "next/image";
import FadeDown from "./FadeDown";
import FadeUp from "./FadeUp";
import { useEffect, useState } from "react";

// All 37 brand card images
const ALL_BRAND_CARDS = Array.from(
  { length: 41 },
  (_, i) => ({ image: `https://res.cloudinary.com/wda6rtn3/image/upload/f_auto,q_auto,w_400/v1787353020/uss-website/brands/${i + 1}.webp` })
);

// Initial set — only 10 cards rendered on first paint to avoid 74 simultaneous image requests
const INITIAL_CARDS = ALL_BRAND_CARDS.slice(0, 10);

const ecwLogos = [
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/01-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/02-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/03-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/04-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/06-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/07-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/05/08.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/09-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/010-1.png",
  "/assets/newLogos/Precision Talk.webp",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/011-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/012-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/013-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/014-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/015-1.png",
  "/assets/newLogos/Golden-Falcon-white-transparent.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/016-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/017-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/018-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/019-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/020-1.png",
  "/assets/newLogos/Beyond Performance.webp",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/021-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/022-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/023-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/024-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/025-1.png",
  "/assets/newLogos/Anthalora.webp",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/026-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/027-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/028-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/029-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/030-1.png"
];
const INITIAL_LOGOS = ecwLogos.slice(0, 6);

export function Brands() {
  // Start with only 10 cards; after page load expand to full 37 for seamless marquee
  const [brandCards, setBrandCards] = useState(INITIAL_CARDS);
  const [partnerLogos, setPartnerLogos] = useState(INITIAL_LOGOS);

  useEffect(() => {
    // Defer hydrating the full card set until the browser is idle
    const id = setTimeout(() => {
      setBrandCards(ALL_BRAND_CARDS);
      setPartnerLogos([...ecwLogos, ...ecwLogos]);
    }, 800);
    return () => clearTimeout(id);
  }, []);

  return (
    <section className="relative z-10 pb-[40px] sm:pb-[58px] pt-[30px] sm:pt-[58px] text-white bg-black">

      {/* ── Section heading ── */}
      <FadeDown delay={0.1}>
        <h2 className="text-center px-4 text-[21px] min-[375px]:text-[21px] font-medium leading-tight tracking-[-0.4px] sm:text-[40px]">
          brands we work with
        </h2>
      </FadeDown>

      {/* ── Brand Cards — horizontal left-scrolling marquee ── */}
      <div className="mt-[26px] w-full mx-auto overflow-hidden">
        <div className="brand-cards-track flex items-center gap-x-4 min-[375px]:gap-x-6 sm:gap-x-8">
          {/* Two sets for seamless loop */}
          {[...brandCards, ...brandCards].map((brand, index) => (
            <article
              key={index}
              className="group relative aspect-[176/314] w-[130px] min-[375px]:w-[150px] min-[480px]:w-[176px] shrink-0 overflow-hidden rounded-[22px] bg-black
                         sm:w-[210px] lg:w-[246px]"
            >
              <Image
                src={brand.image}
                alt="Brand campaign"
                fill
                loading="lazy"
                sizes="(max-width: 375px) 130px, (max-width: 480px) 150px, (max-width: 640px) 176px, (max-width: 1024px) 210px, 246px"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </article>
          ))}
        </div>
      </div>

      {/* ── Trusted by 100+ brands ── */}
      <div className="mt-[60px] sm:mt-[140px] text-center px-4">

        <FadeUp delay={0.1}>
          <h2 className="text-[21px] min-[375px]:text-[20px] font-medium leading-tight tracking-[0%] sm:text-[40px] whitespace-nowrap sm:whitespace-normal">
            trusted by 100+ brands worldwide
          </h2>
        </FadeUp>

        {/* ── Logo marquee — continuous scroll ── */}
        <div className="mt-[30px] sm:mt-[50px] w-full mx-auto max-w-[1000px]  overflow-hidden">
          <div className="logos-track flex items-center gap-x-0 sm:gap-x-6">
            {partnerLogos.map((src, index) => {
              const isLargeLogo =
                src.includes("Golden-Falcon") || src.includes("022-1.png");

              return (
                <article
                  key={index}
                  className="group relative h-[60px] min-[375px]:h-[75px] sm:h-[90px] lg:h-[115px] w-[130px] min-[375px]:w-[150px] sm:w-[170px] shrink-0"
                >
                  <Image
                    src={src}
                    alt="Partner brand logo"
                    fill
                    loading="lazy"
                    sizes="(max-width: 375px) 130px, (max-width: 640px) 150px, 170px"
                    className={`object-contain brightness-0 invert transition duration-500 group-hover:opacity-100 ${
                      isLargeLogo
                        ? "scale-[0.85] sm:scale-[0.7] group-hover:scale-[0.95] sm:group-hover:scale-[0.75]"
                        : "scale-[1.25] sm:scale-100 group-hover:scale-[1.35] sm:group-hover:scale-105"
                    }`}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        /* ── Brand cards: scroll left continuously ── */
        .brand-cards-track {
          width: max-content;
          animation: marquee-right 150s linear infinite;
          will-change: transform;
        }

        /* ── Logos: same direction, same speed ── */
        .logos-track {
          width: max-content;
          animation: marquee-right 80s linear infinite;
          will-change: transform;
        }

        @keyframes marquee-right {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Respect reduced-motion preference */
        @media (prefers-reduced-motion: reduce) {
          .brand-cards-track,
          .logos-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}