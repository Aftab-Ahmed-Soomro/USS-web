import Image from "next/image";

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

export function WhyGoogleAdsWork() {
  return (
    <section className="bg-[#0a0a0a] overflow-hidden">
      <div className="mx-auto max-w-[1150px] px-4 sm:px-8 lg:px-0">
        {/* Heading — top right aligned */}
        <div className="flex justify-end pt-[60px] pb-0 relative z-10 pr-0">
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

        {/* Body: image left, list right */}
        <div className="flex flex-col lg:flex-row items-start gap-0 mt-[-20px]">
          {/* Left — rounded bottom image */}
          <div className="relative w-full lg:w-[580px] shrink-0">
            <div
              className="relative w-full lg:w-[580px] overflow-hidden"
              style={{
                aspectRatio: "580 / 680",
                borderRadius: "0px 1550px 1550px 0px ",
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
          </div>

          {/* Right — feature list */}
          <div className="flex-1 flex flex-col justify-center pt-[80px] lg:pt-[100px] lg:pl-[56px] pb-[60px]">
            <div className="flex flex-col gap-[44px]">
              {items.map((item) => (
                <div key={item.number} className="flex items-start gap-[22px]">
                  {/* Icon circle */}
                  <div
                    className="shrink-0 flex items-center justify-center size-[52px] rounded-full"
                    style={{ background: "#1c1c1c", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <Image
                      src={item.icon}
                      alt=""
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 600,
                        fontSize: "11px",
                        lineHeight: "16.5px",
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
                        letterSpacing: "0",
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
                        letterSpacing: "0",
                        color: "rgba(255,255,255,0.55)",
                        maxWidth: "270px",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
    </section >
  );
}
