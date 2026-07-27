import Image from "next/image";
import FadeLeft from "./FadeLeft";
import FadeRight from "./FadeRight";
import FadeUp from "./FadeUp";

export interface WhyAdsItem {
  number: string;
  icon: string;
  title: string;
  description: string;
}

interface WhyAdsWorkProps {
  imageSrc: string;
  imageAlt?: string;
  headingItalic: string;
  items: WhyAdsItem[];
  logoSrc?: string;
  headingSuffix?: string;
  headingPrefix?: string;
  logoClassName?: string;
}

export function WhyGoogleAdsWork({
  imageSrc,
  imageAlt = "Side image",
  headingItalic,
  items,
  logoSrc,
  headingSuffix = "works",
  headingPrefix,
  logoClassName,
}: WhyAdsWorkProps) {
  return (
    <section className="bg-[#000] mx-auto overflow-hidden w-full">
      <div className="mx-auto w-full">
        {/* Body: image left, text right */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center mt-0 lg:mt-[-20px] relative w-full">
          {/* Left — image */}
          <FadeLeft delay={0.2}>
            <div className="relative w-[90%] sm:w-[80%] md:w-[70%] lg:w-[560px] shrink-0">
              <div
                className="relative w-full lg:w-[600px] overflow-hidden"
                style={{
                  aspectRatio: "580 / 680",
                  borderRadius: "0px 1550px 1550px 0px",
                }}
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(min-width: 1024px) 580px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </FadeLeft>

          {/* Right - Content */}
            <div className="flex-1 w-full flex flex-col justify-center items-center px-6 py-[40px] sm:py-[60px] lg:py-0">
            {/* Heading */}
            <div className="w-full flex justify-center">
              <FadeRight delay={0.1}>
              <h2
                className="text-white mb-[24px] sm:mb-[40px] text-center lg:text-left pr-1 font-[var(--font-be-vietnam)] font-medium text-[22px] min-[360px]:text-[26px] min-[400px]:text-[30px] sm:text-[clamp(36px,5vw,56px)] leading-[1.1] tracking-[-1px] sm:tracking-[-3px] flex items-center justify-center lg:justify-start gap-1 sm:gap-2.5 flex-nowrap whitespace-nowrap"
              >
                <span>why</span>
                {logoSrc && (
                  <span className="inline-flex items-center shrink-0 mx-0.5 sm:mx-1.5">
                    <Image
                      src={logoSrc}
                      alt="Logo"
                      width={180}
                      height={60}
                      className={logoClassName || "h-[0.85em] sm:h-[0.9em] w-auto object-contain inline-block self-center mt-0.5 sm:mt-0"}
                    />
                  </span>
                )}
                {headingPrefix && (
                  <span className="font-medium text-[22px] min-[360px]:text-[26px] min-[400px]:text-[30px] sm:text-[clamp(36px,5vw,56px)] tracking-[-1px] sm:tracking-[-3px]">
                    {headingPrefix}
                  </span>
                )}
                <span
                  className="font-medium text-[22px] min-[360px]:text-[26px] min-[400px]:text-[30px] sm:text-[clamp(36px,5vw,56px)] tracking-[-1px] sm:tracking-[-3px]"
                  
                >
                  {headingItalic}
                </span>
                <span>{headingSuffix}</span>
              </h2>
            </FadeRight>
            </div>

            {/* Cards Grid */}
            <div className="w-full flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] sm:gap-[30px] gap-y-6 sm:gap-y-8 place-items-center lg:place-items-start max-w-[730px] w-full">
              {items.map((item, i) => (
                <FadeUp key={item.number} delay={0.25 + i * 0.12}>
                  <div
                    className="relative rounded-[24px] py-[24px] sm:py-[32px] px-[16px] sm:px-[20px] flex flex-col justify-between cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-10px_rgba(255,85,0,0.4)] border border-white/5 hover:border-[#ff5500]/50 active:scale-[0.98] group overflow-hidden bg-[#0a0a0a] w-full max-w-[350px] h-auto min-h-[150px] sm:min-h-[235px] sm:h-[235px]"
                    style={{
                      boxShadow: "inset 0 0 20px rgba(0,0,0,0.5)",
                    }}
                  >
                    {/* Default Gradient */}
                    <div 
                      className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: "radial-gradient(100% 100% at 100% 0%, rgba(255, 85, 0, 0.15) 0%, rgba(255, 255, 255, 0.02) 100%)",
                      }}
                    />
                    
                    {/* Hover Gradient (More vibrant + shifting angle) */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: "radial-gradient(120% 120% at 80% 20%, rgba(255, 85, 0, 0.3) 0%, rgba(255, 85, 0, 0.05) 50%, transparent 100%)",
                      }}
                    />
                    
                    {/* Content wrapper */}
                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <p
                        className="text-[#ff5500] transition-all duration-500 group-hover:text-[#ff7733] group-hover:translate-x-1 font-[var(--font-inter)] font-semibold text-[14px] sm:text-[16px] leading-[1] sm:leading-[16.5px] tracking-[2px] sm:tracking-[3.3px] uppercase mb-4 sm:mb-0"
                      >
                      {item.number}
                    </p>

                    <div className="transition-transform duration-500 group-hover:translate-x-1">
                      <h3
                        className="text-white transition-colors duration-500 group-hover:text-[#ffaa80] font-[var(--font-inter)] font-bold text-[16px] sm:text-[18px] leading-[1.3] sm:leading-[24.75px] mb-[8px]"
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-white/70 transition-colors duration-500 group-hover:text-white/95 font-[var(--font-inter)] font-normal text-[14px] sm:text-[15px] leading-[20px] sm:leading-[22.75px]"
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
                </FadeUp>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

