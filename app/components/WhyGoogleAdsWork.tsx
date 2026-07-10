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
  headingItalic: string; // e.g. "google ads" or "meta ads"
  items: WhyAdsItem[];
}

/**
 * Icon positions follow the right curved edge of the image.
 * Image: 580×680px, effective border-radius ≈ 340px on right corners,
 * arc center at (240, 340). Curve: x(y) = 240 + √(340² − (y−340)²)
 * right = 580 − x_curve(y) − 26   (26 = half of 52px icon)
 *
 * y=13% (88px):  x≈468 → right=86px   (icon inward — top of curve)
 * y=36% (245px): x≈566 → right=-12px  (near widest point)
 * y=57% (388px): x≈577 → right=-23px  (slightly past widest)
 * y=78% (530px): x≈522 → right=32px   (icon inward — bottom of curve)
 */
const iconPositions = [
  { top: "19%", right: "-370px" },
  { top: "40%", right: "-440px" },
  { top: "63%", right: "-440px" },
  { top: "85%", right: "-360px" },
];

export function WhyGoogleAdsWork({
  imageSrc,
  imageAlt = "Side image",
  headingItalic,
  items,
}: WhyAdsWorkProps) {
  return (
    <section className="bg-[#000]">
      <div className="mx-auto ">

        {/* Heading — Mobile */}
        <div className="lg:hidden">
          <FadeRight delay={0.1}>
            <div className="flex justify-center pt-[60px] pb-0 relative z-10">
              <h2
                className="text-white text-center"
                style={{
                  fontWeight: 500,
                  fontSize: "clamp(36px, 5vw, 56px)",
                  lineHeight: "1.1",
                  letterSpacing: "-3px",
                  textTransform: "lowercase",
                  marginBottom: "18px",
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
            </div>
          </FadeRight>
        </div>

        {/* Body: image left (with edge icons), text right */}
        <div className="flex flex-col lg:flex-row items-center gap-0 mt-0 lg:mt-[-20px] relative w-full">
          
          {/* Desktop Heading (vertically centered on the right) */}
          <div className="hidden lg:flex absolute inset-y-0 right-[5%] xl:right-[10%] items-center z-10 pointer-events-none">
            <FadeRight delay={0.1}>
              <h2
                className="text-white text-right"
                style={{
                  fontWeight: 500,
                  fontSize: "clamp(36px, 5vw, 56px)",
                  lineHeight: "80px",
                  letterSpacing: "-3px",
                  textTransform: "lowercase",
                  fontFamily: "var(--font-be-vietnam)",
                  whiteSpace: "nowrap",
                }}
              >
                why{" "}
                <span
                  style={{
                    fontFamily: "'Times New Roman', Times, serif",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontSize: "clamp(44px, 6vw, 72px)",
                    lineHeight: "80px",
                    letterSpacing: "-3px",
                  }}
                >
                  {headingItalic}
                </span>{" "}
                work
              </h2>
            </FadeRight>
          </div>

          {/* Left — image + absolutely positioned edge icons */}
          <FadeLeft delay={0.2}>
            {/* overflow-visible so icons can protrude past the image edge */}
            <div className="relative w-full lg:w-[580px] shrink-0" style={{ overflow: "visible" }}>

              {/* The actual clipped image */}
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

              {/* Icon + number + title + description following the curve */}
              {items.map((item, i) => (
                <div
                  key={item.number}
                  className="absolute z-20 hidden lg:flex flex-col gap-[18px]"
                  style={{
                    top: iconPositions[i].top,
                    right: iconPositions[i].right,
                    transform: "translateY(-50%)",
                  }}
                >
                  {/* Number above */}
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 600,
                      fontSize: "12px",
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      color: "#ff5500",
                      lineHeight: 1,
                      paddingLeft: "68px",
                    }}
                  >
                    {item.number}
                  </p>

                  {/* Icon + text row */}
                  <div className="flex items-start gap-[20px]">
                    {/* Icon circle */}
                    <div
                      className="flex items-center justify-center size-[48px] rounded-full shrink-0"
                      style={{
                        background: "#000",
                        border: "1px solid #FF550059",
                      }}
                    >
                      <Image
                        src={item.icon}
                        alt=""
                        width={22}
                        height={22}
                        className="object-contain"
                      />
                    </div>

                    {/* Title + description */}
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontWeight: 700,
                          fontSize: "20px",
                          lineHeight: "26px",
                          color: "#ffffff",
                          marginBottom: "6px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "22px",
                          color: "#FFFFFFB8",
                          maxWidth: "380px",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeLeft>

          {/* Mobile only — stacked list (hidden on lg, shown on smaller screens) */}
          <div className="flex-1 flex flex-col justify-center pt-[40px] pb-[60px] px-4 lg:hidden">
            <div className="flex flex-col gap-[32px]">
              {items.map((item, i) => (
                <FadeUp key={item.number} delay={0.25 + i * 0.12}>
                  <div className="flex items-start gap-[20px]">
                    <div
                      className="flex items-center justify-center size-[44px] rounded-full shrink-0"
                      style={{ background: "#111", border: "1px solid #FF550059" }}
                    >
                      <Image src={item.icon} alt="" width={20} height={20} className="object-contain" />
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", color: "#ff5500", marginBottom: "6px" }}>
                        {item.number}
                      </p>
                      <h3 style={{ fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "18px", lineHeight: "24px", color: "#fff", marginBottom: "6px" }}>
                        {item.title}
                      </h3>
                      <p style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "14px", lineHeight: "22px", color: "#FFFFFFB8" }}>
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

