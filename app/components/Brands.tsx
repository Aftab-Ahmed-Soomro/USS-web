"use client";

import Image from "next/image";
import FadeDown from "./FadeDown";
import FadeUp from "./FadeUp";

const brandCards = [
  { image: "/assets/brands/agent.png" },
  { image: "/assets/brands/sadia-psychology.png" },
  { image: "/assets/brands/unilever-forest.png" },
  { image: "/assets/brands/adidas.png" },
];

const trustedBrandImages = [
  { name: "Agency 8",        image: "/assets/100brands/image 1.png", size: "170px" },
  { name: "Vodafone",        image: "/assets/brands/vodafone.png",   size: "170px" },
  { name: "Sadia Psychology",image: "/assets/brands/sadia.png",      size: "170px" },
  { name: "Flowork",         image: "/assets/brands/flowork.png",    size: "170px" },
  { name: "Unilever",        image: "/assets/100brands/image 3.png", size: "170px" },
];

export function Brands() {
  return (
    <section className="relative z-10 px-6 pb-[100px] pt-[58px] text-white lg:pb-[111px]">

      {/* ── Section heading ── */}
      <FadeDown delay={0.1}>
        <h2 className="text-center text-[31px] font-medium leading-tight tracking-[-0.4px] sm:text-[40px]">
          brands we work with
        </h2>
      </FadeDown>

      {/* ── Brand Cards — horizontal left-scrolling marquee ── */}
      <div className="mt-[26px] max-w-[1150px] mx-auto overflow-hidden -mx-6">
        <div className="brand-cards-track flex items-center gap-x-12">
          {/* Three sets for seamless loop */}
          {[...brandCards, ...brandCards, ...brandCards].map((brand, index) => (
            <article
              key={index}
              className="group relative aspect-[176/314] w-[176px] shrink-0 overflow-hidden rounded-[22px] bg-[#151515]
                         sm:w-[210px] lg:w-[246px]"
            >
              <Image
                src={brand.image}
                alt="Brand campaign"
                fill
                sizes="(min-width: 1024px) 246px, (min-width: 640px) 210px, 176px"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </article>
          ))}
        </div>
      </div>

      {/* ── Trusted by 100+ brands ── */}
      <div className="mt-[140px] text-center">

        <FadeUp delay={0.1}>
          <h2 className="text-[31px] font-medium leading-tight tracking-[0%] sm:text-[40px]">
            trusted by 100+ brands worldwide
          </h2>
        </FadeUp>

        {/* ── Logo marquee — same direction, same speed ── */}
        <div className="mt-[40px] max-w-[900px] mx-auto overflow-hidden -mx-6">
          <div className="logos-track flex items-center gap-x-20 sm:gap-x-28">
            {[...trustedBrandImages, ...trustedBrandImages, ...trustedBrandImages].map((brand, index) => (
              <article
                key={index}
                className="group relative h-[90px] shrink-0"
                style={{ width: brand.size }}
              >
                <Image
                  src={brand.image}
                  alt={`${brand.name} logo`}
                  fill
                  sizes={brand.size}
                  className="object-contain opacity-80 saturate-[0.85] transition duration-500
                             group-hover:scale-105 group-hover:opacity-100"
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
          animation: marquee-left 25s linear infinite;
          will-change: transform;
        }

        /* ── Logos: same direction, same speed ── */
        .logos-track {
          width: max-content;
          animation: marquee-left 35s linear infinite;
          will-change: transform;
        }

        /* Both scroll by exactly 1/3 (one set) so the loop is seamless
           with three duplicated sets */
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
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