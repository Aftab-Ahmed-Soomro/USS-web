import Image from "next/image";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

const socialVisuals = Array.from({ length: 13 }, (_, i) => ({
  src: `/assets/socialGrids/${i + 1}.png`,
  alt: `Organic Social Grid ${i + 1}`,
}));

export default function OurOrganicSocialMediaApproach() {
  return (
    <section className="bg-white py-[34px] sm:py-20">
      <Stagger staggerDelay={0.15}>
        <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-12 px-4 sm:px-0">
          <StaggerItem>
            <p
              className="uppercase mb-2 font-medium text-[14px] leading-[16px] tracking-[-1.2px] text-[#ff5500]"
            >
              Our Work
            </p>
          </StaggerItem>

          <StaggerItem>
            <h2 className="text-black">
              <span
                className="font-medium text-[32px] sm:text-[56px] leading-[1.1] sm:leading-[70px] tracking-[-1.2px]"
              >
                our{" "}
              </span>
              <span className="timesFontFamily italic font-normal text-[#FF5500] text-[42px] sm:text-[72px] leading-[1.1] sm:leading-[70px] tracking-[-1.5px]"
              >
                organic{" "}
              </span>
              <span
                className="font-medium text-[32px] sm:text-[56px] leading-[1.1] sm:leading-[70px] tracking-[-1.2px]"
              >
                social grids
              </span>
            </h2>
          </StaggerItem>
        </div>

        <div className="w-full overflow-hidden mt-8 lg:mt-16">
          <div className="social-visuals-track flex items-center gap-4 sm:gap-[46px]">
            {[...socialVisuals, ...socialVisuals, ...socialVisuals].map((visual, index) => (
              <div
                className="relative h-[356px] w-[200px] min-[360px]:h-[392px] min-[360px]:w-[220px] min-[390px]:h-[460px] min-[390px]:w-[258px] shrink-0 overflow-hidden bg-[#111] shadow-[0_16px_38px_rgba(0,0,0,0.08)] sm:h-[520px] sm:w-[292px] lg:h-[719px] lg:w-[404px]"
                key={index}
              >
                <Image
                  src={visual.src}
                  alt={visual.alt}
                  fill
                  sizes="(min-width: 1024px) 404px, (min-width: 640px) 292px, (min-width: 390px) 258px, 200px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            ))}
          </div>
        </div>
      </Stagger>

      <style>{`
        .social-visuals-track {
          width: max-content;
          animation: marquee-social-visuals 70s linear infinite;
          will-change: transform;
        }

        @keyframes marquee-social-visuals {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333333%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .social-visuals-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}