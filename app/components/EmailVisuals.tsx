import Image from "next/image";

const emailVisuals = [
  {
    src: "/assets/email_visuals/1st.png",
    alt: "Restaurant offer email design",
    widthClass: "lg:w-[192px]",
  },
  {
    src: "/assets/email_visuals/2nd.png",
    alt: "Flowork office tower email design",
    widthClass: "lg:w-[190px]",
  },
  {
    src: "/assets/email_visuals/3rd.png",
    alt: "Luxury event curator email design",
    widthClass: "lg:w-[190px]",
  },
  {
    src: "/assets/email_visuals/4th.png",
    alt: "Agency 8 DAMAC Islands email design",
    widthClass: "lg:w-[200px]",
  },
];

export function EmailVisuals() {
  return (
    <section className="relative z-10 bg-[#000] px-6 py-[72px] text-black lg:py-[92px]">
      <div className="mx-auto flex w-full max-w-[1150px] flex-col gap-[44px]">
        <div className="grid gap-8 lg:grid-cols-[360px_minmax(0,520px)] lg:items-start lg:justify-between">
          <h2 className="max-w-[310px] font-[var(--font-be-vietnam)] text-[37px] text-white font-medium leading-[1.02] tracking-[-0.03em]  sm:text-[42px]">
              email design{" "}
              <span className="block font-[var(--font-cormorant)] text-[1.08em] font-extralight timesFontFamily italic">
                visuals
              </span>
          </h2>

          <p className="max-w-[520px] font-[var(--font-be-vietnam)] text-[14px] font-normal leading-[1.75] text-white/70 sm:text-[15px] lg:pt-[10px]">
            Take a look at our email designs, created to balance strong branding, clear communication and results that actually matter.
          </p>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 items-start justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:justify-between lg:gap-[42px]">
            {emailVisuals.map((visual) => (
              <div
                className={`relative h-[460px] w-full max-w-[190px] overflow-hidden bg-[#111] shadow-[0_16px_38px_rgba(0,0,0,0.08)] sm:h-[520px] sm:max-w-[210px] lg:h-[566px] lg:max-w-none ${visual.widthClass}`}
                key={visual.src}
              >
                <Image
                  src={visual.src}
                  alt={visual.alt}
                  fill
                  sizes="(min-width: 1024px) 200px, (min-width: 640px) 210px, 190px"
                  className="object-cover object-top"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
