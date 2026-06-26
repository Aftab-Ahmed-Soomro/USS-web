import Image from "next/image";

const purposeItems = [
  "Align marketing spend with revenue targets",
  "Identify the highest-leverage growth channels",
  "Build a repeatable testing and learning cadence",
  "Create predictable, compounding pipeline",
];

const deliverableItems = [
  "90-day growth roadmap and forecast",
  "Channel-by-channel media plan and budget",
  "KPI framework and live reporting dashboard",
  "Quarterly strategic review and re-plan",
];

export function PerformanceMarketing() {
  return (
    <section className="bg-[#f5f4f1] px-6 py-16 sm:py-20 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* ── LEFT: Text Column ── */}
        <div className="flex flex-col">

          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="size-[6px] shrink-0 rounded-full bg-[#ff5500]" />
            <p
              style={{ fontFamily: "var(--font-be-vietnam)" }}
              className="text-[9px] font-medium uppercase tracking-[3px] text-black/50"
            >
              Performance Marketing
            </p>
          </div>

          {/* Title */}
          <h2
            style={{ fontFamily: "var(--font-be-vietnam)" }}
            className="mt-5 text-[34px] sm:text-[40px] xl:text-[46px] font-medium leading-[1.08] tracking-[-1.2px] text-[#111]"
          >
            Marketing &amp; <br className="hidden sm:block" />
            Growth Strategy
          </h2>

          {/* Description */}
          <p
            style={{ fontFamily: "var(--font-inter)" }}
            className="mt-5 max-w-[400px] text-[13px] leading-[1.65] text-black"
          >
            We build clear, data-driven marketing strategies designed to scale your business not just generate leads. Trusted by brands across UAE and globally.
          </p>

          {/* Divider */}
          <hr className="mt-8 border-black/15" />

          {/* What It Is */}
          <p
            style={{ fontFamily: "var(--font-be-vietnam)" }}
            className="mt-7 text-[9px] font-bold uppercase tracking-[3px] text-black/40"
          >
            What It Is
          </p>

          <p
            style={{ fontFamily: "var(--font-inter)" }}
            className="mt-4 max-w-[380px] text-[13px] leading-[1.5] font-normal text-[#000]"
          >
            An end-to-end growth program combining paid media,
            lifecycle and analytics into one accountable system –
            operated by a dedicated USS team.
          </p>

          {/* Purpose + Deliverables Table */}
          <div className="mt-8 grid grid-cols-2 gap-x-8">

            {/* Column Headers */}
            <p
              style={{ fontFamily: "var(--font-be-vietnam)" }}
              className="text-[8.5px] font-semibold uppercase tracking-[2.5px] text-black/40 pb-3"
            >
              Purpose
            </p>
            <p
              style={{ fontFamily: "var(--font-be-vietnam)" }}
              className="text-[8.5px] font-semibold uppercase tracking-[2.5px] text-black/40 pb-3"
            >
              Deliverables
            </p>

            {/* Rows */}
            {purposeItems.map((purpose, i) => (
              <>
                {/* Purpose item */}
                <div
                  key={`purpose-${i}`}
                  className="flex items-start gap-3 border-t border-black/10 py-3"
                >
                  <span
                    style={{ fontFamily: "var(--font-be-vietnam)" }}
                    className="shrink-0 text-[11px] font-bold text-[#ff5500] tabular-nums"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    style={{ fontFamily: "var(--font-inter)" }}
                    className="text-[12px] leading-[1.5] text-black/90 max-w-[200px]"
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
                    className="shrink-0 text-[11px] font-bold text-[#ff5500] tabular-nums"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    style={{ fontFamily: "var(--font-inter)" }}
                    className="text-[12px] leading-[1.5] text-black/90 max-w-[200px]"
                  >
                    {deliverableItems[i]}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Image Grid ── */}
        <div className="flex flex-col gap-3">

          {/* Large hero image */}
          <div className="relative w-full overflow-hidden rounded-[6px] aspect-[4/3]">
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
            <div className="relative w-full overflow-hidden rounded-[6px] aspect-[4/3]">
              <Image
                src="/assets/Performance Marketing/sub1.jpg"
                alt="Performance marketing analytics dashboard"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <div className="relative w-full overflow-hidden rounded-[6px] aspect-[4/3]">
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
