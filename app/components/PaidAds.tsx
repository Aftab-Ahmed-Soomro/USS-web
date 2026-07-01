import Image from "next/image";
import { Fragment } from "react";

const purposeItems = [
  "Sharpen brand distinctiveness in a crowded market",
  "Produce content at the cadence performance demands",
  "Unify voice across every customer surface",
  "Turn creative into a measurable growth lever",
];

const deliverableItems = [
  "Brand identity system and usage guidelines",
  "Monthly editorial and social content slate",
  "Performance creative for paid campaigns",
  "Landing pages and conversion-focused assets",
];

export function PaidAds() {
  return (
    <section className="bg-[#0a0a0a] px-6 py-16 sm:py-20 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* ── LEFT: Image Grid ── */}
        <div className="flex flex-col gap-3">

          {/* Large hero image */}
          <div className="relative w-full overflow-hidden rounded-[6px] aspect-[4/3]">
            <Image
              src="/assets/Paid Ads/hero.png"
              alt="Paid ads creative talent"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Two smaller images */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative w-full overflow-hidden rounded-[6px] aspect-[4/3]">
              <Image
                src="/assets/Paid Ads/sub1.png"
                alt="Paid ads influencer example"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover object-top"
              />
            </div>
            <div className="relative w-full overflow-hidden rounded-[6px] aspect-[4/3]">
              <Image
                src="/assets/Paid Ads/sub2.png"
                alt="Paid ads content example"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* ── RIGHT: Text Column ── */}
        <div className="flex flex-col">

          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="size-[6px] shrink-0 rounded-full bg-[#ff5500]" />
            <p
              style={{ fontFamily: "var(--font-be-vietnam)" }}
              className="text-[9px] font-medium uppercase tracking-[3px] text-white/50"
            >
              Creative Marketing
            </p>
          </div>

          {/* Title */}
          <h2
            style={{ fontFamily: "var(--font-be-vietnam)" }}
            className="mt-5 text-[34px] sm:text-[40px] font-bold leading-[1.08] tracking-[-1.2px] text-white"
          >
            Paid Search <br />
            Google Ads
          </h2>

          {/* Description */}
          <p
            style={{ fontFamily: "var(--font-inter)" }}
            className="mt-5 max-w-[390px] text-[13px] leading-[1.65] text-white/55"
          >
            Editorial-grade creative produced for the platforms that matter
            – designed to be both unmistakably on-brand and measurably
            effective in market.
          </p>

          {/* Divider */}
          <hr className="mt-8 border-white/15" />

          {/* What It Is */}
          <p
            style={{ fontFamily: "var(--font-be-vietnam)" }}
            className="mt-7 text-[9px] font-medium uppercase tracking-[3px] text-white/40"
          >
            What It Is
          </p>

          <p
            style={{ fontFamily: "var(--font-inter)" }}
            className="mt-4 max-w-[350px] text-[13px] leading-[1.5] font-light text-white/80"
          >
            A dedicated creative pod that ships brand systems,
            content and campaigns built to perform across paid,
            organic and owned channels.
          </p>

          {/* Purpose + Deliverables Table */}
          <div className="mt-8 grid grid-cols-2 gap-x-8">

            {/* Column Headers */}
            <p
              style={{ fontFamily: "var(--font-be-vietnam)" }}
              className="text-[8.5px] font-medium uppercase tracking-[2.5px] text-white/40 pb-3"
            >
              Purpose
            </p>
            <p
              style={{ fontFamily: "var(--font-be-vietnam)" }}
              className="text-[8.5px] font-medium uppercase tracking-[2.5px] text-white/40 pb-3"
            >
              Deliverables
            </p>

            {/* Rows */}
            {purposeItems.map((purpose, i) => (
              <Fragment key={i}>
                {/* Purpose item */}
                <div
                  key={`purpose-${i}`}
                  className="flex items-start gap-3 border-t border-white/10 py-3"
                >
                  <span
                    style={{ fontFamily: "var(--font-be-vietnam)" }}
                    className="shrink-0 text-[11px] font-bold text-[#ff5500] tabular-nums"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    style={{ fontFamily: "var(--font-inter)" }}
                    className="text-[12px] leading-[1.5] text-white/85 max-w-[160px]"
                  >
                    {purpose}
                  </p>
                </div>

                {/* Deliverable item */}
                <div
                  key={`deliverable-${i}`}
                  className="flex items-start gap-3 border-t border-white/10 py-3"
                >
                  <span
                    style={{ fontFamily: "var(--font-be-vietnam)" }}
                    className="shrink-0 text-[11px] font-bold text-[#ff5500] tabular-nums"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    style={{ fontFamily: "var(--font-inter)" }}
                    className="text-[12px] leading-[1.5] text-white/85 max-w-[160px]"
                  >
                    {deliverableItems[i]}
                  </p>
                </div>
              </Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
