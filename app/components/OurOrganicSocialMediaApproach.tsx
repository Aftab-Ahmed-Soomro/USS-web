import Image from "next/image";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

const socialVisuals = Array.from({ length: 13 }, (_, i) => ({
  src: `https://emmanuelcolewilliams.com/uss-assets/socialGrids/${i + 1}.png`,
  alt: `Organic Social Grid ${i + 1}`,
}));

export default function OurOrganicSocialMediaApproach() {
  return (
    <section className="bg-white py-20">
      <Stagger staggerDelay={0.15}>
        <div className="max-w-6xl mx-auto text-center mb-12">
          <StaggerItem>
            <p
              className="uppercase mb-4"
              style={{
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "16px",
                letterSpacing: "-1.2px",
                color: "#ff5500",
              }}
            >
              Our Approach
            </p>
          </StaggerItem>

          <StaggerItem>
            <h2 className="text-black">
              <span
                style={{
                  fontWeight: 500,
                  fontSize: "56px",
                  lineHeight: "70px",
                  letterSpacing: "-1.2px",
                }}
              >
                our{" "}
              </span>
              <span className="timesFontFamily"
                style={{
                  fontWeight: 400,
                  fontStyle: "italic",
                  fontSize: "72px",
                  lineHeight: "70px",
                  letterSpacing: "-1.2px",
                  color: "#FF5500"
                }}
              >
                organic{" "}
              </span>
              <span
                style={{
                  fontWeight: 500,
                  fontSize: "56px",
                  lineHeight: "70px",
                  letterSpacing: "-1.2px",
                }}
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
                  className="relative h-[460px] w-[258px] shrink-0 overflow-hidden bg-[#111] shadow-[0_16px_38px_rgba(0,0,0,0.08)] sm:h-[520px] sm:w-[292px] lg:h-[719px] lg:w-[404px]"
                  key={index}
                >
                  <Image
                    src={visual.src}
                    alt={visual.alt}
                    fill
                    unoptimized
                    sizes="(min-width: 1024px) 404px, (min-width: 640px) 292px, 258px"
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