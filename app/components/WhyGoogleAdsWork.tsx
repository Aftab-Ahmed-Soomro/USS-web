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
    <section className="bg-[#000] mx-auto overflow-hidden">
      <div className="mx-auto">
        {/* Body: image left, text right */}
        <div className="flex flex-col lg:flex-row items-center mt-0 lg:mt-[-20px] relative w-full">
          {/* Left — image */}
          <FadeLeft delay={0.2}>
            <div className="relative w-full lg:w-[580px] shrink-0">
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
            <div className="flex-1 mx-auto flex flex-col justify-center px-6 lg:px-0 lg:pl-[40px] xl:pl-[60px] py-[60px] lg:py-0">
            {/* Heading */}
            <FadeRight delay={0.1}>
              <h2
                className="text-white mb-[40px] lg:mb-[40px] text-center lg:text-left pl-3"
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

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] gap-y-8 place-items-center lg:place-items-start max-w-[570px] mx-auto lg:mx-0">
              {items.map((item, i) => (
                <FadeUp key={item.number} delay={0.25 + i * 0.12}>
                  <div
                    className="rounded-[24px] py-[32px] px-[20px] flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(255,85,0,0.3)] active:scale-[0.98] group"
                    style={{
                      width: "100%",
                      maxWidth: "300px",
                      height: "235px",
                      background: "radial-gradient(100% 100% at 100% 0%, rgba(255, 85, 0, 0.2) 0%, rgba(255, 255, 255, 0.02) 100%), rgba(10, 10, 10, 0.8)",
                      border: "1px solid rgba(255, 255, 255, 0.04)",
                      boxShadow: "inset 0 0 20px rgba(0,0,0,0.5)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 600,
                        fontSize: "16px",
                        lineHeight: "16.5px",
                        letterSpacing: "3.3px",
                        textTransform: "uppercase",
                        color: "#ff5500",
                      }}
                    >
                      {item.number}
                    </p>

                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontWeight: 700,
                          fontSize: "18px",
                          lineHeight: "24.75px",
                          color: "#ffffff",
                          marginBottom: "8px",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontWeight: 400,
                          fontSize: "15px",
                          lineHeight: "22.75px",
                          color: "#FFFFFF",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

