import Image from "next/image";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

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
        <Stagger staggerDelay={0.15} className="grid gap-8 lg:grid-cols-[360px_minmax(0,580px)] lg:items-start lg:justify-between">
          <StaggerItem>
            <h2 className="max-w-[400px] font-[var(--font-be-vietnam)] text-[37px] text-black font-medium leading-[1.02] tracking-[-3%]  sm:text-[56px]">
                email design{" "}
                <span className="block font-[var(--font-cormorant)] text-[72px] font-normal timesFontFamily tracking-[-3%] italic">
                  visuals
                </span>
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p className="max-w-[580px] font-[var(--font-be-vietnam)] text-[14px] font-normal leading-[32px] text-[#505050] sm:text-[18px] lg:pt-[10px]">
              A clean showcase area for email design visuals from your drive. Replace these placeholders with final assets.
            </p>
          </StaggerItem>
        </Stagger>

        <div className="w-full overflow-hidden mt-8 lg:mt-16">
          <div className="email-visuals-track flex items-center gap-4 sm:gap-[42px]">
            {[...emailVisuals, ...emailVisuals, ...emailVisuals].map((visual, index) => (
                <div
                  className="relative h-[460px] w-[190px] shrink-0 overflow-hidden bg-[#111] shadow-[0_16px_38px_rgba(0,0,0,0.08)] sm:h-[520px] sm:w-[210px] lg:h-[750px] lg:w-[250px]"
                  key={index}
                >
                  <Image
                    src={visual.src}
                    alt={visual.alt}
                    fill
                    sizes="(min-width: 1024px) 250px, (min-width: 640px) 210px, 190px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .email-visuals-track {
          width: max-content;
          animation: marquee-visuals 25s linear infinite;
          will-change: transform;
        }

        @keyframes marquee-visuals {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333333%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .email-visuals-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
