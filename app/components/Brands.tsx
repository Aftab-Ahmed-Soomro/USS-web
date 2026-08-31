"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";

// ─── Cloudinary transform preset ────────────────────────────────────────────
const T = "f_auto,q_auto:good,w_280,c_limit";

// ─── Brand card URLs (custom order) ─────────────────────────────────────────
const SPECIAL: Record<number, string> = {
  8:  `https://res.cloudinary.com/wda6rtn3/image/upload/${T}/v1788197283/8.webp`,
  20: `https://res.cloudinary.com/wda6rtn3/image/upload/${T}/v1788023196/20.webp`,
  26: `https://res.cloudinary.com/wda6rtn3/image/upload/${T}/v1788023196/26.webp`,
  28: `https://res.cloudinary.com/wda6rtn3/image/upload/${T}/v1788023196/28.webp`,
  30: `https://res.cloudinary.com/wda6rtn3/image/upload/${T}/v1788023196/30.webp`,
  33: `https://res.cloudinary.com/wda6rtn3/image/upload/${T}/v1788023198/33.webp`,
  35: `https://res.cloudinary.com/wda6rtn3/image/upload/${T}/v1788023198/35.webp`,
  36: `https://res.cloudinary.com/wda6rtn3/image/upload/${T}/v1788023198/36.webp`,
  42: `https://res.cloudinary.com/wda6rtn3/image/upload/${T}/v1788023197/42.webp`,
  43: `https://res.cloudinary.com/wda6rtn3/image/upload/${T}/v1788023197/43.webp`,
  41: `https://res.cloudinary.com/wda6rtn3/image/upload/${T}/v1788037806/45.webp`,
  40: `https://res.cloudinary.com/wda6rtn3/image/upload/${T}/v1788037634/44.webp`,
};

const ORDER = [
  1,  2,  3,  4,  5,  6,  7, 8,  9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 40, 34, 35, 36, 42, 37, 38, 39,
  33, 41, 43,
];

// Precompute once at module level — not on every render
const BRAND_URLS = ORDER.map(
  (n) =>
    SPECIAL[n] ??
    `https://res.cloudinary.com/wda6rtn3/image/upload/${T}/v1787353020/uss-website/brands/${n}.webp`
);
// Duplicate for seamless 0% → -50% loop
const BRAND_MARQUEE = [...BRAND_URLS, ...BRAND_URLS];

// ─── Partner / ECW logos ─────────────────────────────────────────────────────
const ECW_BASE = "https://emmanuelcolewilliams.com/wp-content/uploads";
const ECW_LOGOS: string[] = [
  `${ECW_BASE}/2026/04/01-1.png`,
  `${ECW_BASE}/2026/04/02-1.png`,
  `${ECW_BASE}/2026/04/03-1.png`,
  `${ECW_BASE}/2026/04/04-1.png`,
  `${ECW_BASE}/2026/04/06-1.png`,
  `${ECW_BASE}/2026/04/07-1.png`,
  `${ECW_BASE}/2026/05/08.png`,
  `${ECW_BASE}/2026/04/09-1.png`,
  `${ECW_BASE}/2026/04/010-1.png`,
  "/assets/newLogos/Precision Talk.webp",
  `${ECW_BASE}/2026/04/011-1.png`,
  `${ECW_BASE}/2026/04/012-1.png`,
  `${ECW_BASE}/2026/04/013-1.png`,
  `${ECW_BASE}/2026/04/014-1.png`,
  `${ECW_BASE}/2026/04/015-1.png`,
  "/assets/newLogos/Golden-Falcon-white-transparent.png",
  `${ECW_BASE}/2026/04/016-1.png`,
  `${ECW_BASE}/2026/04/017-1.png`,
  `${ECW_BASE}/2026/04/018-1.png`,
  `${ECW_BASE}/2026/04/019-1.png`,
  `${ECW_BASE}/2026/04/020-1.png`,
  "/assets/newLogos/Beyond Performance.webp",
  `${ECW_BASE}/2026/04/021-1.png`,
  `${ECW_BASE}/2026/04/022-1.png`,
  `${ECW_BASE}/2026/04/023-1.png`,
  `${ECW_BASE}/2026/04/024-1.png`,
  `${ECW_BASE}/2026/04/025-1.png`,
  "/assets/newLogos/Anthalora.webp",
  `${ECW_BASE}/2026/04/026-1.png`,
  `${ECW_BASE}/2026/04/027-1.png`,
  `${ECW_BASE}/2026/04/028-1.png`,
  `${ECW_BASE}/2026/04/029-1.png`,
  `${ECW_BASE}/2026/04/030-1.png`,
];

// Precompute large-logo flag once — avoids string search on every render
const LARGE_LOGO_INDICES = new Set(
  ECW_LOGOS.reduce<number[]>((acc, src, i) => {
    if (src.includes("Golden-Falcon") || src.includes("022-1.png")) acc.push(i);
    return acc;
  }, [])
);

const LOGO_MARQUEE = [...ECW_LOGOS, ...ECW_LOGOS];

// ─── Component ───────────────────────────────────────────────────────────────
export function Brands() {
  return (
    <section
      className="relative z-10 pb-[40px] sm:pb-[58px] pt-[30px] sm:pt-[58px] text-white bg-black overflow-hidden"
      aria-label="Brands and partners"
    >
      {/* ── Section heading ── */}
      <h2 className="text-center px-4 text-[21px] min-[375px]:text-[21px] font-medium leading-tight tracking-[-0.4px] sm:text-[40px]">
        brands we work with
      </h2>

      {/* ── Brand Cards marquee ── */}
      <div
        className="mt-[26px] w-full overflow-hidden select-none"
        aria-hidden="true"
      >
        <div className="brand-cards-track flex items-center gap-x-4 min-[375px]:gap-x-6 sm:gap-x-8">
          {BRAND_MARQUEE.map((src, i) => (
            <article
              key={i}
              className="brand-card-item group relative aspect-[176/314] w-[130px] min-[375px]:w-[150px] min-[480px]:w-[176px] shrink-0 overflow-hidden rounded-[22px] bg-[#111] sm:w-[210px] lg:w-[246px]"
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="(max-width: 375px) 130px, (max-width: 480px) 150px, (max-width: 640px) 176px, (max-width: 1024px) 210px, 246px"
                loading={i < 6 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={i < 3 ? "high" : undefined}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
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

        {/* ── Logo marquee ── */}
        <div
          className="mt-[30px] sm:mt-[50px] w-full mx-auto max-w-[1000px] overflow-hidden select-none"
          aria-hidden="true"
        >
          <div className="logos-track flex items-center gap-x-2 sm:gap-x-6">
            {LOGO_MARQUEE.map((src, i) => {
              // For duplicated set, check original index
              const origIdx = i % ECW_LOGOS.length;
              const isLarge = LARGE_LOGO_INDICES.has(origIdx);
              return (
                <article
                  key={i}
                  className="logo-item group relative h-[60px] min-[375px]:h-[75px] sm:h-[90px] lg:h-[115px] w-[130px] min-[375px]:w-[150px] sm:w-[170px] shrink-0"
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    loading={i < 6 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={i < 3 ? "high" : undefined}
                    sizes="(max-width: 375px) 130px, (max-width: 640px) 150px, 170px"
                    className={`object-contain brightness-0 invert transition-opacity duration-300 opacity-90 group-hover:opacity-100 ${
                      isLarge ? "scale-[0.85] sm:scale-[0.7]" : "scale-[1.25] sm:scale-100"
                    }`}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        /* ── Brand cards: GPU-accelerated marquee ── */
        .brand-cards-track {
          width: max-content;
          animation: marquee 80s linear infinite;
          transform: translate3d(0, 0, 0);
          will-change: transform;
          backface-visibility: hidden;
          contain: layout paint;
        }

        .brand-card-item {
          contain: layout paint style;
        }

        /* ── Partner logos: GPU-accelerated marquee ── */
        .logos-track {
          width: max-content;
          animation: marquee 70s linear infinite;
          transform: translate3d(0, 0, 0);
          will-change: transform;
          backface-visibility: hidden;
          contain: layout paint;
        }

        .logo-item {
          contain: layout paint style;
        }

        @keyframes marquee {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }

        /* Respect reduced-motion preference */
        @media (prefers-reduced-motion: reduce) {
          .brand-cards-track,
          .logos-track {
            animation: none;
            will-change: auto;
          }
        }
      `}</style>
    </section>
  );
}