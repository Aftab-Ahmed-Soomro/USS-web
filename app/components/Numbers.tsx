"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeLeft from "./FadeLeft";
import FadeUp from "./FadeUp";
import FadeRight from "./FadeRight";

// ─── Types ───────────────────────────────────────────────────────────────────

type NumberStat = {
  value: string;
  label: string;
};

type NumbersProps = {
  stats?: NumberStat[];
  eyebrow?: string;
  title?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

// ─── Default data ─────────────────────────────────────────────────────────────

const defaultStats: NumberStat[] = [
  { value: "5x", label: "Up to 5X ROAS" },
  { value: "55M", label: "AED in Revenue" },
  { value: "485k", label: "Leads Generated" },
  { value: "100+", label: "Brands Worldwide" },
];

// ─── parseValue ───────────────────────────────────────────────────────────────
// Splits "55M", "500k", "100+", "5x", "0.2%" into
// { prefix, number, suffix, decimals }
// so we can count only the numeric part, preserving decimal precision.

function parseValue(raw: string): {
  prefix: string;
  number: number;
  suffix: string;
  decimals: number;
} {
  // e.g. "$20M+" → prefix="$", number=20, suffix="M+"
  const match = raw.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: raw, decimals: 0 };

  const numberStr = match[2];
  const decimals = numberStr.includes(".") ? numberStr.split(".")[1].length : 0;

  return {
    prefix: match[1],
    number: parseFloat(numberStr),
    suffix: match[3],
    decimals,
  };
}

// ─── useCountUp hook ──────────────────────────────────────────────────────────
// Triggers when the element enters the viewport (once), then animates
// from 0 → target over `duration` ms with an easeOut curve.
// Returns the raw float — rounding/formatting is left to the caller so
// small decimal targets (e.g. 0.2) don't get clipped to 0.

function useCountUp(target: number, duration = 3000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          observer.disconnect();

          const startTime = performance.now();

          function tick(now: number) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutQuart — matches the site's feel
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(eased * target);
            if (progress < 1) requestAnimationFrame(tick);
          }

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, count };
}

// ─── AnimatedStat ─────────────────────────────────────────────────────────────

function AnimatedStat({ value }: { value: string }) {
  const { prefix, number, suffix, decimals } = parseValue(value);
  const { ref, count } = useCountUp(number);

  const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.round(count);

  return (
    <span ref={ref} aria-label={value}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

// ─── Spark ────────────────────────────────────────────────────────────────────

function Spark() {
  return (
    <span className="relative block h-[54px] w-[18px] shrink-0">
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white to-transparent" />
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-white to-transparent" />
      <span className="absolute left-1/2 top-1/2 size-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_14px_5px_rgba(255,255,255,0.9)]" />
    </span>
  );
}

// ─── Numbers ──────────────────────────────────────────────────────────────────

export function Numbers({
  stats = defaultStats,
  eyebrow = "OUR IMPACT",
  title = "our numbers speak\nfor themselves",
  ctaLabel = "Book a Consultation",
  ctaHref = "/contact",
}: NumbersProps) {
  const titleLines = title.split("\n");

  return (
    <section className="relative z-10 overflow-hidden bg-black px-4 sm:px-6 py-[48px] sm:py-[58px] text-white lg:py-[100px]">
      <Image
        src="/assets/sections/numbers-space.webp"
        alt=""
        fill
        sizes="100vw"
        loading="lazy"
        className="object-cover object-center opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/45 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/35" />

      <div className="relative mx-auto max-w-[1150px] px-2 sm:px-6">
        <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-start md:justify-between">

          {/* Eyebrow + Title */}
          <FadeLeft delay={0.1}>
            <div>
              <p className="text-[12px] sm:text-[14px] font-bold uppercase tracking-[1.2px]">{eyebrow}</p>
              <h2 className="mt-[12px] sm:mt-[19px] max-w-[490px] text-[32px] font-medium leading-[0.98] tracking-[-6%] sm:text-[48px] lg:text-[56px]">
                {titleLines.map((line, index) => (
                  <span className="block" key={`${line}-${index}`}>
                    {line}
                  </span>
                ))}
              </h2>
            </div>
          </FadeLeft>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <FadeRight delay={0.2}>
              <Link
                className="mt-[24px] sm:mt-[36px] inline-flex h-[34px] min-[375px]:h-[38px] min-w-[160px] min-[375px]:min-w-[178px] items-center justify-center rounded-full bg-white px-5 min-[375px]:px-7 font-[var(--font-be-vietnam)] text-[11px] min-[375px]:text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-black transition uppercase hover:bg-[#ff6b1f]"
                href="/contact"
              >
                Book a Consultation
              </Link>
            </FadeRight>
          </div>

        </div>

        {/* Stats grid */}
        <div className="mt-[32px] sm:mt-[58px] border-y border-white/12 sm:border-y-0 sm:border-t bg-black/20 sm:bg-transparent py-[16px] sm:py-0 sm:pt-[43px]">
                    <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-white/12 sm:divide-x-0 gap-0 sm:gap-8 lg:gap-[54px]">

            {stats.map((stat, index) => (
              <FadeUp key={stat.label} delay={0.3 + index * 0.12}>
                <div className="flex items-center gap-[4px] min-[375px]:gap-[6px] sm:gap-[16px] px-[6px] sm:px-0 h-full">
                  <div className="scale-[0.5] sm:scale-100 origin-left -ml-2 sm:ml-0 shrink-0">
                    <Spark />
                  </div>
                  <div className="flex flex-col sm:block justify-center overflow-visible">
                    <p className="text-[16px] min-[375px]:text-[20px] font-bold leading-none tracking-[-1px] sm:text-[50px]">
                      <AnimatedStat value={stat.value} />
                    </p>
                    <p className="mt-[4px] sm:mt-[8px] text-[6px] min-[375px]:text-[7px] sm:text-[14px] font-light leading-tight sm:leading-none text-white/70 sm:text-white whitespace-nowrap sm:whitespace-normal tracking-tight sm:tracking-normal">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* CTA Button (Mobile) */}
        <div className="mt-[32px] flex justify-center pb-[16px] md:hidden">
          {/* <FadeUp delay={0.6}> */}
            <Link
              className="inline-flex h-[30px] min-[375px]:h-[34px] px-6 items-center justify-center rounded-full bg-white font-[var(--font-be-vietnam)] text-[10px] min-[375px]:text-[12px] tracking-[-0.5px] sm:tracking-[1px] font-medium text-black transition uppercase hover:bg-[#ff6b1f]"
              href="/contact"
            >
              Book a Consultation
            </Link>
          {/* </FadeUp> */}
        </div>

      </div>
    </section>
  );
}