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
  { value: "55M", label: "AED Generated in Revenue" },
  { value: "485k", label: "Leads Generated" },
  { value: "100+", label: "Brands Worldwide" },
];

// ─── parseValue ───────────────────────────────────────────────────────────────
// Splits "55M", "500k", "100+", "5x", "$20M+" into
// { prefix, number, suffix }
// so we can count only the numeric part.

function parseValue(raw: string): { prefix: string; number: number; suffix: string } {
  // e.g. "$20M+" → prefix="$", number=20, suffix="M+"
  const match = raw.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: raw };
  return {
    prefix: match[1],
    number: parseFloat(match[2]),
    suffix: match[3],
  };
}

// ─── useCountUp hook ──────────────────────────────────────────────────────────
// Triggers when the element enters the viewport (once), then animates
// from 0 → target over `duration` ms with an easeOut curve.

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
            setCount(Math.round(eased * target));
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
  const { prefix, number, suffix } = parseValue(value);
  const { ref, count } = useCountUp(number);

  return (
    <span ref={ref} aria-label={value}>
      {prefix}{count}{suffix}
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
  ctaLabel = "Get in Touch",
  ctaHref = "/contact",
}: NumbersProps) {
  const titleLines = title.split("\n");

  return (
    <section className="relative z-10 overflow-hidden bg-black px-6 py-[58px] text-white lg:py-[100px]">
      <Image
        src="/assets/sections/numbers-space.jpg"
        alt=""
        fill
        sizes="100vw"
        priority={false}
        className="object-cover object-center opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/45 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/35" />

      <div className="relative mx-auto max-w-[1150px] px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

          {/* Eyebrow + Title */}
          <FadeLeft delay={0.1}>
            <div>
              <p className="text-[14px] font-bold uppercase tracking-[1.2px]">{eyebrow}</p>
              <h2 className="mt-[19px] max-w-[490px] text-[38px] font-medium leading-[0.98] tracking-[-6%] sm:text-[48px] lg:text-[56px]">
                {titleLines.map((line, index) => (
                  <span className="block" key={`${line}-${index}`}>
                    {line}
                  </span>
                ))}
              </h2>
            </div>
          </FadeLeft>

          {/* CTA Button */}
          <FadeRight delay={0.2}>
            <Link
              className="inline-flex h-[42px] w-[210px] items-center justify-center gap-[15px] rounded-full bg-white text-[11px] font-extrabold text-black transition hover:bg-white/90"
              href={ctaHref}
            >
              {ctaLabel} <span className="text-[18px] leading-none">&rsaquo;</span>
            </Link>
          </FadeRight>

        </div>

        {/* Stats grid */}
        <div className="mt-[58px] border-t border-white/12 pt-[43px]">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[54px]">
            {stats.map((stat, index) => (
              <FadeUp key={stat.label} delay={0.3 + index * 0.12}>
                <div className="flex items-center gap-[16px]">
                  <Spark />
                  <div>
                    <p className="text-[42px] font-bold leading-none tracking-[-1px] sm:text-[50px]">
                      <AnimatedStat value={stat.value} />
                    </p>
                    <p className="mt-[8px] text-[11px] font-light sm:text-[14px] leading-none text-white">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}