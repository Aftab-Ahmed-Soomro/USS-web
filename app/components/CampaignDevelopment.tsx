const campaignSteps = [
  {
    number: "01",
    title: "setup & alignment",
    duration: "1 week",
    description: "We align on goals, assets and prepare all channels for launch.",
    work: ["Account Setup", "Tracking & Pixels", "Asset Collection", "Campaign Readiness"],
    active: true,
  },
  { number: "02", title: "campaign launch" },
  { number: "03", title: "active management" },
  { number: "04", title: "creative integration" },
  { number: "05", title: "optimisation" },
  { number: "06", title: "scaling & reporting" },
];

function ToggleIcon({ active = false }: { active?: boolean }) {
  return (
    <span
      className={`grid size-10 shrink-0 place-items-center rounded-full border border-[#1a1a1a] text-[20px] leading-none ${
        active ? "bg-[#1a1a1a] text-[#efefef]" : "bg-transparent text-[#1a1a1a]"
      }`}
    >
      {active ? <span className="rotate-45">+</span> : "+"}
    </span>
  );
}

export function CampaignDevelopment() {
  const activeStep = campaignSteps[0];
  const collapsedSteps = campaignSteps.slice(1);

  return (
    <section className="relative z-10 bg-white px-6 pb-0 pt-[82px] text-[#1a1a1a]  lg:pt-[100px]">
      <div className="mx-auto max-w-[1150px]">
        <h2 className="max-w-[1150px] text-[39px] font-medium leading-[1.08] tracking-[-2px] sm:text-[50px] lg:text-[56px] lg:leading-[76px] lg:tracking-[-3.16px]">
          end to end campaign{" "}
          <span className="font-serif text-[1.08em] font-extralight timesFontFamily italic tracking-[-1.4px]">
            development
          </span>
        </h2>

        <p className="mt-[22px] text-[16px] font-normal leading-7 text-[#7b7b7b] sm:text-[18px] lg:text-[20px]">
          How we activate, manage, and scale your marketing across all channels.
        </p>

        <div className="mt-[26px] border-t border-[#1a1a1a]/20 pt-8">
          <article className="border-b border-[#1a1a1a]/12 pb-5">
            <div className="grid gap-6 py-[14px] md:grid-cols-[minmax(0,1fr)_180px] md:items-center lg:py-[18px]">
              <div className="flex items-center gap-8 sm:gap-16">
                <span className="w-8 shrink-0 text-[14px] leading-5 text-[#1a1a1a]/50">{activeStep.number}</span>
                <h3 className="text-[28px] font-normal leading-10 tracking-[-0.72px] sm:text-[36px]">
                  {activeStep.title}
                </h3>
              </div>

              <div className="flex items-center justify-between gap-8 md:justify-end">
                <span className="text-[16px] leading-6 text-[#7b7b7b]">{activeStep.duration}</span>
                <ToggleIcon active />
              </div>
            </div>

            <div className="grid gap-8 px-0 pb-[22px] pt-[24px] sm:px-[58px] md:grid-cols-[minmax(0,740px)_152px] md:gap-[92px] lg:px-[91px] lg:pb-[20px] lg:pt-[30px] xl:gap-[150px]">
              <p className="flex min-h-[100px] items-center text-[16px] font-normal leading-[1.62] text-[#7b7b7b] sm:text-[18px]">
                {activeStep.description}
              </p>

              <div>
                <p className="text-[12px] font-normal uppercase leading-4 tracking-[1.8px] text-[#1a1a1a]/50">
                  Work involved
                </p>
                <ul className="mt-3 space-y-1">
                  {activeStep.work?.map((item) => (
                    <li className="text-[14px] font-normal leading-5 text-[#1a1a1a]" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <div>
            {collapsedSteps.map((step) => (
              <article className="border-b border-[#1a1a1a]/12" key={step.number}>
                <div className="grid min-h-[105px] gap-5 py-8 md:grid-cols-[minmax(0,1fr)_197px] md:items-center md:py-0">
                  <div className="flex items-center gap-8 sm:gap-16">
                    <span className="w-8 shrink-0 text-[14px] leading-5 text-[#1a1a1a]/50">{step.number}</span>
                    <h3 className="text-[28px] font-normal leading-10 tracking-[-0.72px] sm:text-[36px]">
                      {step.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between gap-10 md:justify-end">
                    <span className="text-[12px] font-normal uppercase leading-4 tracking-[1.8px] text-[#1a1a1a]">
                      Work involved
                    </span>
                    <ToggleIcon />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
