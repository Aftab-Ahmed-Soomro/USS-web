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
}

export function WhyGoogleAdsWork({
  imageSrc,
  imageAlt = "Side image",
  headingItalic,
  items,
}: WhyAdsWorkProps) {
  return (
    <section className="bg-[#000] mx-auto overflow-hidden w-full">
      <div className="mx-auto w-full">
        {/* Body: image left, text right */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center mt-0 lg:mt-[-20px] relative w-full">
          {/* Left — image */}
          <FadeLeft delay={0.2}>
            <div className="relative w-[90%] sm:w-[80%] md:w-[70%] lg:w-[580px] shrink-0">
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
            <div className="flex-1 w-full flex flex-col justify-center items-center px-6 lg:px-0 py-[60px] lg:py-0">
            {/* Heading */}
            <div className="w-full flex justify-center">
              <FadeRight delay={0.1}>
              <h2
                className="text-white mb-[40px] lg:mb-[40px] text-center lg:text-left lg:pl-3"
                style={{
                  fontWeight: 500,
                  fontSize: "clamp(36px, 5vw, 56px)",
                  lineHeight: "1.1",
                  letterSpacing: "-3px",
                  textTransform: "lowercase",
                  fontFamily: "var(--font-be-vietnam)",
                }}
              >
                why{" "}
                <span
                  style={{
                    fontFamily: "'Times New Roman', Times, serif",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontSize: "clamp(44px, 6vw, 72px)",
                    letterSpacing: "-3px",
                  }}
                >
                  {headingItalic}
                </span>{" "}
                work
              </h2>
            </FadeRight>
            </div>

            {/* Cards Grid */}
            <div className="w-full flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] gap-y-8 place-items-center lg:place-items-start max-w-[600px] w-full">
              {items.map((item, i) => (
                <FadeUp key={item.number} delay={0.25 + i * 0.12}>
                  <div
                    className="relative rounded-[24px] py-[32px] px-[20px] flex flex-col justify-between cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-10px_rgba(255,85,0,0.4)] border border-white/5 hover:border-[#ff5500]/50 active:scale-[0.98] group overflow-hidden bg-[#0a0a0a]"
                    style={{
                      width: "100%",
                      maxWidth: "350px",
                      height: "235px",
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
                        className="text-[#ff5500] transition-all duration-500 group-hover:text-[#ff7733] group-hover:translate-x-1"
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontWeight: 600,
                          fontSize: "16px",
                          lineHeight: "16.5px",
                          letterSpacing: "3.3px",
                          textTransform: "uppercase",
                        }}
                      >
                      {item.number}
                    </p>

                    <div className="transition-transform duration-500 group-hover:translate-x-1">
                      <h3
                        className="text-white transition-colors duration-500 group-hover:text-[#ffaa80]"
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontWeight: 700,
                          fontSize: "18px",
                          lineHeight: "24.75px",
                          marginBottom: "8px",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-white/70 transition-colors duration-500 group-hover:text-white/95"
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontWeight: 400,
                          fontSize: "15px",
                          lineHeight: "22.75px",
                        }}
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

