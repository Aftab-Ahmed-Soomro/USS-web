import Image from "next/image";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

const emailVisuals = [
  {
    src: "https://unitedstrategicsolutions.com/assets/emailGrids/1.png",
    alt: "Restaurant offer email design",
    // widthClass: "lg:w-[192px]",
  },
  {
    src: "https://unitedstrategicsolutions.com/assets/emailGrids/2.png",
    alt: "Restaurant offer email design",
    // widthClass: "lg:w-[192px]",
  },
  {
    src: "https://unitedstrategicsolutions.com/assets/emailGrids/3.png",
    alt: "Restaurant offer email design",
    // widthClass: "lg:w-[192px]",
  },
  {
    src: "https://unitedstrategicsolutions.com/assets/emailGrids/4.png",
    alt: "Restaurant offer email design",
    // widthClass: "lg:w-[192px]",
  },
  {
    src: "https://unitedstrategicsolutions.com/assets/emailGrids/5.png",
    alt: "Restaurant offer email design",
    // widthClass: "lg:w-[192px]",
  },
  {
    src: "https://unitedstrategicsolutions.com/assets/emailGrids/6.png",
    alt: "Restaurant offer email design",
    // widthClass: "lg:w-[192px]",
  },
  {
    src: "https://unitedstrategicsolutions.com/assets/emailGrids/7.png",
    alt: "Restaurant offer email design",
    // widthClass: "lg:w-[192px]",
  },
  {
    src: "https://unitedstrategicsolutions.com/assets/emailGrids/8.png",
    alt: "Restaurant offer email design",
    // widthClass: "lg:w-[192px]",
  },
  {
    src: "https://unitedstrategicsolutions.com/assets/emailGrids/9.png",
    alt: "Restaurant offer email design",
    // widthClass: "lg:w-[192px]",
  },
  {
    src: "https://unitedstrategicsolutions.com/assets/emailGrids/10.png",
    alt: "Restaurant offer email design",
    // widthClass: "lg:w-[192px]",
  },
  {
    src: "https://unitedstrategicsolutions.com/assets/emailGrids/11.png",
    alt: "Restaurant offer email design",
    // widthClass: "lg:w-[192px]",
  },
  {
    src: "https://unitedstrategicsolutions.com/assets/emailGrids/12.png",
    alt: "Restaurant offer email design",
    // widthClass: "lg:w-[192px]",
  },
  {
    src: "https://unitedstrategicsolutions.com/assets/emailGrids/13.png",
    alt: "Restaurant offer email design",
    // widthClass: "lg:w-[192px]",
  },
  {
    src: "https://unitedstrategicsolutions.com/assets/emailGrids/14.png",
    alt: "Restaurant offer email design",
    // widthClass: "lg:w-[192px]",
  },
  {
    src: "https://unitedstrategicsolutions.com/assets/emailGrids/15.png",
    alt: "Restaurant offer email design",
    // widthClass: "lg:w-[192px]",
  },
  {
    src: "https://unitedstrategicsolutions.com/assets/emailGrids/16.png",
    alt: "Restaurant offer email design",
    // widthClass: "lg:w-[192px]",
  },
];

export function EmailVisuals() {
  return (
    <section className="relative z-10 bg-[#fff] py-[50px] sm:py-[72px] text-black lg:py-[92px]">
      <div className="flex w-full flex-col gap-[32px] sm:gap-[44px]">
        <Stagger staggerDelay={0.15} className="mx-auto w-full px-4 min-[375px]:px-6 max-w-[1150px] grid gap-[16px] sm:gap-8 lg:grid-cols-[360px_minmax(0,580px)] lg:items-start lg:justify-between">
          <StaggerItem>
            <h2 className="max-w-[400px] font-[var(--font-be-vietnam)] text-[32px] sm:text-[37px] text-black font-medium leading-[1.02] tracking-[-3%] lg:text-[56px]">
                email design{" "}
                <span className="sm:block font-[var(--font-cormorant)] text-[42px] sm:text-[72px] font-normal timesFontFamily leading-[1.1] sm:leading-none tracking-[-3%] italic">
                  visuals
                </span>
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p className="max-w-[580px] font-[var(--font-be-vietnam)] text-[13px] font-normal leading-[1.6] sm:leading-[32px] text-[#505050] sm:text-[18px] lg:pt-[10px]">
              Take a look at some of the email campaigns we've created to engage customers and drive revenue.
            </p>
          </StaggerItem>
        </Stagger>

        <div className="w-full overflow-hidden mt-[24px] sm:mt-8 lg:mt-16">
          <div className="email-visuals-track flex items-center gap-2 sm:gap-[46px]">
            {[...emailVisuals, ...emailVisuals, ...emailVisuals].map((visual, index) => (
                <div
                  className="relative h-[380px] w-[160px] min-[375px]:h-[460px] min-[375px]:w-[190px] shrink-0 overflow-hidden bg-[#f5f5f5] shadow-[0_16px_38px_rgba(0,0,0,0.08)] sm:h-[520px] sm:w-[210px] lg:h-[750px] lg:w-[250px]"
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
          animation: marquee-visuals 40s linear infinite;
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
