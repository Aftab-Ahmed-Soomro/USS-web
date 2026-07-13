"use client";

import Image from "next/image";
import FadeDown from "./FadeDown";
import FadeUp from "./FadeUp";

const brandCards = Array.from(
  { length: 37 },
  (_, i) => ({ image: `/assets/brands/brands/${i + 1}.png` })
);

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
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/011-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/012-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/013-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/014-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/015-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/016-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/017-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/018-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/019-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/020-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/021-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/022-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/023-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/024-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/025-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/026-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/027-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/028-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/029-1.png",
  "https://emmanuelcolewilliams.com/wp-content/uploads/2026/04/030-1.png"
];

export function Brands() {
  return (
    <section className="relative z-10 pb-[40px] sm:pb-[58px] pt-[40px] sm:pt-[58px] text-white bg-black">

      {/* ── Section heading ── */}
      <FadeDown delay={0.1}>
        <h2 className="text-center px-4 text-[21px] min-[375px]:text-[21px] font-medium leading-tight tracking-[-0.4px] sm:text-[40px]">
          brands we work with
        </h2>
      </FadeDown>

      {/* ── Brand Cards — horizontal left-scrolling marquee ── */}
      <div className="mt-[26px] w-full mx-auto overflow-hidden">
        <div className="brand-cards-track flex items-center gap-x-4 min-[375px]:gap-x-6 sm:gap-x-12">
          {/* Three sets for seamless loop */}
          {[...brandCards, ...brandCards, ...brandCards].map((brand, index) => (
            <article
              key={index}
              className="group relative aspect-[176/314] w-[130px] min-[375px]:w-[150px] min-[480px]:w-[176px] shrink-0 overflow-hidden rounded-[22px] bg-black
                         sm:w-[210px] lg:w-[246px]"
            >
              <img
                src={brand.image}
                alt="Brand campaign"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
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
            {[...ecwLogos, ...ecwLogos, ...ecwLogos].map((src, index) => (
              <article
                key={index}
                className="group relative h-[60px] min-[375px]:h-[75px] sm:h-[90px] lg:h-[115px] w-[130px] min-[375px]:w-[150px] sm:w-[170px] shrink-0"
              >
                <img
                  src={src}
                  alt={`Brand logo ${index}`}
                  className="w-full h-full object-contain brightness-0 invert transition duration-500
                             scale-[1.25] sm:scale-100 group-hover:scale-[1.35] sm:group-hover:scale-105 group-hover:opacity-100"
                />
              </article>
            ))}
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

        /* Both scroll by exactly 1/3 (one set) so the loop is seamless
           with three duplicated sets */
        @keyframes marquee-right {
          0%   { transform: translateX(-33.3333%); }
          100% { transform: translateX(0); }
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