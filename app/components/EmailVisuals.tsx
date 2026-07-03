import Image from "next/image";

const emailVisuals = [
  {
    src: "/assets/email_visuals/1st.png",
    alt: "Restaurant offer email design",
    // widthClass: "lg:w-[192px]",
  },
  {
    src: "/assets/email_visuals/2nd.png",
    alt: "Flowork office tower email design",
    // widthClass: "lg:w-[190px]",
  },
  {
    src: "/assets/email_visuals/3rd.png",
    alt: "Luxury event curator email design",
      // widthClass: "lg:w-[190px]",
  },
  {
    src: "/assets/email_visuals/4th.png",
    alt: "Agency 8 DAMAC Islands email design",
    // widthClass: "lg:w-[200px]",
  },
];

export function EmailVisuals() {
  return (
    <section className="relative z-10 bg-[#F5F5F5] px-6 py-[72px] text-black lg:py-[92px]">
      <div className="mx-auto flex w-full max-w-[1150px] flex-col gap-[44px]">
        <div className="grid gap-8 lg:grid-cols-[360px_minmax(0,580px)] lg:items-start lg:justify-between">
          <h2 className="max-w-[310px] font-[var(--font-be-vietnam)] text-[37px] text-black font-medium leading-[1.02] tracking-[-3%]  sm:text-[56px]">
              email design{" "}
              <span className="block font-[var(--font-cormorant)] text-[72px] font-normal timesFontFamily tracking-[-3%] italic">
                visuals
              </span>
          </h2>

          <p className="max-w-[580px] font-[var(--font-be-vietnam)] text-[14px] font-normal leading-[32px] text-[#505050] sm:text-[18px] lg:pt-[10px]">
            A clean showcase area for email design visuals from your drive. Replace these placeholders with final assets.
          </p>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 items-start justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:justify-between lg:gap-[42px]">
            {emailVisuals.map((visual) => (
              <div
                className="relative h-[460px] w-full max-w-[190px] overflow-hidden bg-[#111] shadow-[0_16px_38px_rgba(0,0,0,0.08)] sm:h-[520px] sm:max-w-[210px] lg:h-[750px] lg:max-w-[250px]"
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
