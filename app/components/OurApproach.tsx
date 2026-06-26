"use client";

const steps = [
  {
    number: "01",
    description:
      "Roadmap - Industry-specific 6-month plan tailored to your market, audience, and growth potential.",
    label: "Start",
  },
  {
    number: "02",
    description:
      "Strategy - Deep-dive workshop with a clear growth direction. We analyse your brand, market, and competition.",
    label: "Journey",
  },
  {
    number: "03",
    description:
      "Execution - Full marketing execution across every channel. We build, launch, and manage everything.",
    label: "Today",
  },
];

export function OurApproach() {
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8">
      <div
        className="mx-auto max-w-[1150px] rounded-[20px] bg-[#111111]/95 px-8 py-10 sm:px-10 sm:py-12 lg:px-14"
        style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.06)" }}
      >
        {/* Label */}
        <p className="font-[var(--font-be-vietnam)] text-[9px] font-medium uppercase tracking-[2.5px] text-white/50">
          How It Works
        </p>

        {/* Heading */}
        <h2 className="mt-4 font-[var(--font-be-vietnam)] text-[38px] font-medium lowercase leading-[1.05] tracking-[-1px] text-white sm:text-[44px] lg:text-[52px]">
          our{" "}
          <span className="font-[var(--font-cormorant)] text-[1.15em] font-extralight timesFontFamily italic leading-[0.85] tracking-[-1px]">
            approach
          </span>
        </h2>

        {/* Steps grid */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`flex flex-col pb-8 pt-6 sm:pb-10 sm:pt-8 ${
                i === 0
                  ? "sm:pr-10 lg:pr-14"
                  : i === 1
                  ? "sm:border-white/10 sm:px-10 lg:px-14"
                  : "sm:pl-10 lg:pl-14"
              } ${i > 0 ? "border-t border-white/10 sm:border-t-0" : ""}`}
            >
              {/* Top rule */}
              <div className="mb-6 h-px w-full bg-white/15" />

              {/* Number */}
              <span className="font-[var(--font-be-vietnam)] text-[52px] font-bold leading-none tracking-[-2px] text-white sm:text-[56px]">
                {step.number}
              </span>

              {/* Description */}
              <p className="mt-4 max-w-[320px] font-[var(--font-be-vietnam)] text-[11px] leading-[1.7] text-white/55">
                {step.description}
              </p>

              {/* CTA link */}
              <div className="mt-auto pt-6">
                <a
                  href="#"
                  className="group inline-flex items-center gap-3 font-[var(--font-be-vietnam)] text-[11px] text-white/80 transition-colors hover:text-white"
                >
                  {step.label}
                  <span
                    className="inline-block transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
