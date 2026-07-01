import Image from "next/image";
import { Fragment } from "react";

const purposeItems = [
  "Creates clarity around your marketing goals",
  "Identifies where to focus your time and budget",
  "Build a repeatable testing and learning cadence",
  "Create predictable, compounding pipeline",
];

const deliverableItems = [
  "3 month marketing roadmap and priorities",
  "Audience and competitor insights",
  "Channel strategy recommendations",
  "Action plan for implementation",
];

export function PerformanceMarketing() {
  return (
    <section className="bg-[#f5f4f1] px-6 py-16 sm:py-20 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* ── LEFT: Text Column ── */}
        <div className="flex flex-col">

          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="size-[6px] shrink-0 rounded-full bg-[#ff5500]" />
            <p
              style={{ fontFamily: "var(--font-be-vietnam)" }}
              className="text-[9px] sm:text-[11px] font-medium uppercase tracking-[3.52px] text-black/50"
            >
              STRATEGIC GROWTH
            </p>
          </div>

          {/* Title */}
          <h2
            style={{ fontFamily: "var(--font-be-vietnam)" }}
            className="mt-5 text-[34px] sm:text-[40px] lg:text-[56px] font-medium leading-[1.08] tracking-[-2.52px] text-[#111]"
          >
            Marketing &amp; <br className="hidden sm:block" />
            Growth Strategy
          </h2>

          {/* Description */}
          <p
            style={{ fontFamily: "var(--font-inter)" }}
            className="mt-8 max-w-[450px] text-[13px] sm:text-[16px] leading-[1.65] text-black"
          >
            Are you are running marketing but without a clear strategy? We help businesses find the right direction, identify growth opportunities and create a clear plan to move forward.
          </p>

          {/* Divider */}
          <hr className="mt-8 border-black/15" />

          {/* What It Is */}
          <p
            style={{ fontFamily: "var(--font-be-vietnam)" }}
            className="mt-8 text-[9px] sm:text-[11px] font-normal uppercase tracking-[3.52px] text-black/40"
          >
            What We Do
          </p>

          <p
            style={{ fontFamily: "var(--font-inter)" }}
            className="mt-4 mb-8 max-w-[450px] text-[13px] sm:text-[16px] leading-[1.65] text-black"
          >
            A complete marketing strategy covering your brand, audience, channels and customer journey.
          </p>

          {/* Purpose + Deliverables Table */}
          <div className="mt-8 grid grid-cols-2 gap-x-8">

            {/* Column Headers */}
            <p
              style={{ fontFamily: "var(--font-be-vietnam)" }}
              className="text-[8.5px] sm:text-[11px] font-normal uppercase tracking-[3.52px] text-[#11111199] pb-5"
            >
              HOW IT HELPS
            </p>
            <p
              style={{ fontFamily: "var(--font-be-vietnam)" }}
              className="text-[8.5px] sm:text-[11px] font-normal uppercase tracking-[3.52px] text-[#11111199] pb-5"
            >
              Deliverables
            </p>

            {/* Rows */}
            {purposeItems.map((purpose, i) => (
              <Fragment key={i}>
                {/* Purpose item */}
                <div
                  key={`purpose-${i}`}
                  className="flex items-start gap-3 border-t border-black/10 py-3"
                >
                  <span
                    style={{ fontFamily: "var(--font-be-vietnam)" }}
                    className="shrink-0 mt-[2px] text-[11px] sm:text-[12px] font-normal tracking-[2.4px] text-[#ff5500] tabular-nums"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    style={{ fontFamily: "var(--font-inter)" }}
                    className="text-[12px] sm:text-[15px] leading-[1.5] text-black/90 max-w-[200px]"
                  >
                    {purpose}
                  </p>
                </div>

                {/* Deliverable item */}
                <div
                  key={`deliverable-${i}`}
                  className="flex items-start gap-3 border-t border-black/10 py-3"
                >
                  <span
                    style={{ fontFamily: "var(--font-be-vietnam)" }}
                    className="shrink-0 mt-[2px] text-[11px] sm:text-[12px] font-normal tracking-[2.4px] text-[#ff5500] tabular-nums"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    style={{ fontFamily: "var(--font-inter)" }}
                    className="text-[12px] sm:text-[15px] leading-[1.5] text-black/90 max-w-[170px]"
                  >
                    {deliverableItems[i]}
                  </p>
                </div>
              </Fragment>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Image Grid ── */}
        <div className="flex flex-col gap-3">

          {/* Large hero image */}
          <div className="relative w-full overflow-hidden rounded-[6px] aspect-[4/3] min-h-[530px]">
            <Image
              src="/assets/Performance Marketing/hero.jpg"
              alt="Marketing analyst working at desktop"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Two smaller images */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative w-full overflow-hidden rounded-[6px] aspect-[4/3] min-h-[260px]">
              <Image
                src="/assets/Performance Marketing/sub1.jpg"
                alt="Performance marketing analytics dashboard"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <div className="relative w-full overflow-hidden rounded-[6px] aspect-[4/3] min-h-[260px]">
              <Image
                src="/assets/Performance Marketing/sub2.jpg"
                alt="Marketing strategy reports and planning"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
