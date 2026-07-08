import Image from "next/image";
import FadeLeft from "./FadeLeft";
import FadeRight from "./FadeRight";
import FadeUp from "./FadeUp";

const items = [
  {
    number: "01",
    icon: "/assets/googleAds/icon1.png",
    title: "Reach Your Ideal Audience",
    description:
      "Target customers based on interests, behaviours, location and intent.",
  },
  {
    number: "02",
    icon: "/assets/googleAds/icon2.png",
    title: "Generate Qualified Leads",
    description:
      "Drive enquiries from people actively interested in your product or service.",
  },
  {
    number: "03",
    icon: "/assets/googleAds/icon3.png",
    title: "Increase Sales",
    description:
      "Convert website visitors into paying customers with conversion-focused campaigns.",
  },
  {
    number: "04",
    icon: "/assets/googleAds/icon4.png",
    title: "Retarget Warm Audiences",
    description:
      "Stay visible to people who have already visited your website or engaged with your brand.",
  },
];

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
  { top: "19%", right: "40px" },
  { top: "40%", right: "-12px" },
  { top: "63%", right: "-13px" },
  { top: "85%", right: "72px" },
];

export function WhyGoogleAdsWork() {
  return (
    <section className="bg-[#0a0a0a] overflow-hidden">
      <div className="mx-auto max-w-[1150px] px-4 sm:px-8 lg:px-0">

        {/* Heading — top right aligned */}
        <FadeRight delay={0.1}>
          <div className="flex justify-end pt-[60px] pb-0 relative z-10 mr-26 pr-0">
            <h2
              className="text-white text-right"
              style={{
                fontWeight: 500,
                fontSize: "clamp(36px, 5vw, 56px)",
                lineHeight: "80px",
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
                  lineHeight: "80px",
                  letterSpacing: "-3px",
                }}
              >
                google ads
              </span>{" "}
              work
            </h2>
          </div>
        </FadeRight>

        {/* Body: image left (with edge icons), text right */}
        <div className="flex flex-col lg:flex-row items-start gap-0 mt-[-20px]">

          {/* Left — image + absolutely positioned edge icons */}
          <FadeLeft delay={0.2}>
            {/* overflow-visible so icons can protrude past the image edge */}
            <div className="relative w-full lg:w-[580px] shrink-0" style={{ overflow: "visible" }}>

              {/* The actual clipped image */}
              <div
                className="relative w-full lg:w-[580px] overflow-hidden"
                style={{
                  aspectRatio: "580 / 680",
                  borderRadius: "0px 1550px 1550px 0px",
                }}
              >
                <Image
                  src="/assets/googleAds/leftPicture.jpg"
                  alt="Team working on Google Ads strategy"
                  fill
                  sizes="(min-width: 1024px) 580px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Icon circles following the curve of the rounded right edge */}
              {items.map((item, i) => (
                <div
                  key={item.number}
                  className="absolute z-20 hidden lg:flex items-center gap-[8px]"
                  style={{
                    top: iconPositions[i].top,
                    right: iconPositions[i].right,
                    transform: "translateY(-50%)",
                  }}
                >
                  {/* Icon circle */}
                  <div
                    className="flex items-center justify-center size-[52px] rounded-full shrink-0"
                    style={{
                      background: "#000",
                      border: "1px solid #FF550059"
                    }}
                  >
                    <Image
                      src={item.icon}
                      alt=""
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  {/* Number label to the right of icon */}
                  {/* <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 600,
                      fontSize: "10px",
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      color: "#ff5500",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.number}
                  </p> */}
                </div>
              ))}
            </div>
          </FadeLeft>

          {/* Right — title + description only (no icons) */}
          <div className="flex-1 flex flex-col justify-center pt-[80px] lg:pt-[110px] lg:pl-[80px] pb-[60px]">
            <div className="flex flex-col gap-[52px]" >
              {items.map((item, i) => (
                <FadeUp key={item.number} delay={0.25 + i * 0.12}>
                  <div>
                    {/* Number — always visible above title */}
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 600,
                        fontSize: "11px",
                        letterSpacing: "3.3px",
                        textTransform: "uppercase",
                        color: "#ff5500",
                        marginBottom: "6px",
                      }}
                    >
                      {item.number}
                    </p>
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
                        fontSize: "14px",
                        lineHeight: "22.75px",
                        color: "#FFFFFFB8",
                        maxWidth: "270px",
                      }}
                    >
                      {item.description}
                    </p>
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

