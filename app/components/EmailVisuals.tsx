import Image from "next/image";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

const emailVisuals = [
  {
    src: "https://res.cloudinary.com/wda6rtn3/image/upload/v1787355558/uss-website/emailGrids/1.png",
    alt: "Restaurant offer email design",
    // widthClass: "lg:w-[192px]",
  },
  {
    src: "https://res.cloudinary.com/wda6rtn3/image/upload/v1787355558/uss-website/emailGrids/2.png",
    alt: "Restaurant offer email design",
    // widthClass: "lg:w-[192px]",
  },
  {
    src: "https://res.cloudinary.com/wda6rtn3/image/upload/v1787355558/uss-website/emailGrids/3.png",
    alt: "Restaurant offer email design",
    // widthClass: "lg:w-[192px]",
  },
  {
    src: "https://res.cloudinary.com/wda6rtn3/image/upload/v1787355558/uss-website/emailGrids/4.png",
    alt: "Restaurant offer email design",
    // widthClass: "lg:w-[192px]",
  },
  {
    src: "https://res.cloudinary.com/wda6rtn3/image/upload/v1787355558/uss-website/emailGrids/5.png",
    alt: "Restaurant offer email design",
    // widthClass: "lg:w-[192px]",
  },
  {
    src: "https://res.cloudinary.com/wda6rtn3/image/upload/v1787355558/uss-website/emailGrids/6.png",
    alt: "Restaurant offer email design",
    // widthClass: "lg:w-[192px]",
  },
  {
    src: "https://res.cloudinary.com/wda6rtn3/image/upload/v1787355558/uss-website/emailGrids/7.png",
    alt: "Restaurant offer email design",
    // widthClass: "lg:w-[192px]",
  },
  {
    src: "https://res.cloudinary.com/wda6rtn3/image/upload/v1787355558/uss-website/emailGrids/8.png",
    alt: "Restaurant offer email design",
    // widthClass: "lg:w-[192px]",
  },
  {
    src: "https://res.cloudinary.com/wda6rtn3/image/upload/v1787355558/uss-website/emailGrids/9.png",
    alt: "Restaurant offer email design",
    // widthClass: "lg:w-[192px]",
  },
  {
    src: "https://res.cloudinary.com/wda6rtn3/image/upload/v1787355558/uss-website/emailGrids/10.png",
    alt: "Restaurant offer email design",
    // widthClass: "lg:w-[192px]",
  },
  {
    src: "https://res.cloudinary.com/wda6rtn3/image/upload/v1787355558/uss-website/emailGrids/11.png",
    alt: "Restaurant offer email design",
    // widthClass: "lg:w-[192px]",
  },
  {
    src: "https://res.cloudinary.com/wda6rtn3/image/upload/v1787355558/uss-website/emailGrids/12.png",
    alt: "Restaurant offer email design",
    // widthClass: "lg:w-[192px]",
  },
  {
    src: "https://res.cloudinary.com/wda6rtn3/image/upload/v1787355558/uss-website/emailGrids/13.png",
    alt: "Restaurant offer email design",
    // widthClass: "lg:w-[192px]",
  },
  {
    src: "https://res.cloudinary.com/wda6rtn3/image/upload/v1787355558/uss-website/emailGrids/14.png",
    alt: "Restaurant offer email design",
    // widthClass: "lg:w-[192px]",
  },
  {
    src: "https://res.cloudinary.com/wda6rtn3/image/upload/v1787355558/uss-website/emailGrids/15.png",
    alt: "Restaurant offer email design",
    // widthClass: "lg:w-[192px]",
  },
  {
    src: "https://res.cloudinary.com/wda6rtn3/image/upload/v1787355558/uss-website/emailGrids/16.png",
    alt: "Restaurant offer email design",
    // widthClass: "lg:w-[192px]",
  },
];

const optimizeCloudinaryUrl = (url: string, params = "f_auto,q_auto,w_500") => {
  if (url.includes("/image/upload/") && !url.includes("/image/upload/f_auto")) {
    return url.replace("/image/upload/", `/image/upload/${params}/`);
  }
  return url;
};

export function EmailVisuals() {
  return (
    <section className="relative z-10 bg-[#fff] pb-[50px] pt-[25px] sm:py-[72px] text-black lg:py-[92px]">
      <div className="flex w-full flex-col gap-[32px] sm:gap-[44px]">
        <Stagger staggerDelay={0.15} className="mx-auto w-full px-6 max-w-[1200px] xl:max-w-[1300px]  grid gap-[16px] sm:gap-8 lg:grid-cols-[360px_minmax(0,580px)] lg:items-start lg:justify-between">
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
                  src={optimizeCloudinaryUrl(visual.src)}
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
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-perspective: 1000px;
          perspective: 1000px;
        }

        @keyframes marquee-visuals {
          0%   { -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); }
          100% { -webkit-transform: translate3d(-33.333333%, 0, 0); transform: translate3d(-33.333333%, 0, 0); }
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
