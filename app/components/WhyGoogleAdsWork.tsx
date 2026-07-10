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
    <section className="bg-[#000] overflow-hidden">
      <div className="mx-auto max-w-[1400px]">
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
          <div className="flex-1 flex flex-col justify-center px-6 lg:px-0 lg:pl-[40px] xl:pl-[80px] py-[60px] lg:py-0">
            {/* Heading */}
            <FadeRight delay={0.1}>
              <h2
                className="text-white mb-[40px] lg:mb-[60px] text-center lg:text-left"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px] place-items-center lg:place-items-start max-w-[560px] mx-auto lg:mx-0">
              {items.map((item, i) => (
                <FadeUp key={item.number} delay={0.25 + i * 0.12}>
                  <div
                    className="rounded-[24px] p-[32px] flex flex-col justify-between"
                    style={{
                      width: "100%",
                      maxWidth: "266px",
                      height: "241px",
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
                          fontSize: "16px",
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

