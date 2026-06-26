import Image from "next/image";

const approachSteps = [
  {
    number: "01",
    title: "Content Strategy",
    description: "A clear plan aligned with your brand, audience and goals and personality.",
    image: "/assets/approach/content_strategy.png",
    alt: "Organic social content grid for content strategy",
    imageFirst: true,
  },
  {
    number: "02",
    title: "Consistent Content Creation",
    description: "Regular, high quality content across platforms including graphics across all platforms.",
    image: "/assets/approach/content_creation.png",
    alt: "Workspace and brand content grid for consistent content creation",
    imageFirst: false,
  },
  {
    number: "03",
    title: "Audience Engagement",
    description: "Building real connections through interaction and community. Ensuring your audience is engaged.",
    image: "/assets/approach/audience.png",
    alt: "Lifestyle and restaurant social content grid for audience engagement",
    imageFirst: true,
  },
  {
    number: "04",
    title: "Growth and Optimisation",
    description: "Continuous improvement based on performance and insights.",
    image: "/assets/approach/growth.png",
    alt: "Social campaign results grid for growth and optimisation",
    imageFirst: false,
  },
];

function StepCopy({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex w-full max-w-[285px] flex-col items-start">
      <span className="font-[var(--font-be-vietnam)] text-[11px] font-bold leading-none tracking-[2px] text-[#ff5500]">
        {number}
      </span>
      <h3 className="mt-[20px] font-[var(--font-be-vietnam)] text-[22px] font-medium leading-[1.03] tracking-[-0.6px] text-[#060606] sm:text-[24px]">
        {title}
      </h3>
      <p className="mt-[18px] max-w-[270px] font-[var(--font-be-vietnam)] text-[11px] font-normal leading-[1.65] text-[#060606]/70 sm:text-[12px]">
        {description}
      </p>
    </div>
  );
}

function StepImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[592/780] w-full max-w-[420px] overflow-hidden bg-[radial-gradient(ellipse_at_center,#f2f2f2,#e0e0e0)]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 420px, (min-width: 768px) 46vw, 100vw"
        className="object-cover object-center"
      />
    </div>
  );
}

export function Approach() {
  return (
    <section className="relative z-10 border-t border-[#060606]/10 bg-white px-6 py-[46px] text-[#060606]  lg:py-[50px]">
      <div className="mx-auto flex max-w-[1150px] flex-col items-start">
        <div className="w-full border-b border-[#060606]/10 pb-[26px]">
          <p className="font-[var(--font-be-vietnam)] text-[9px] font-bold uppercase leading-none tracking-[2.4px] text-[#ff5500]">
            Our Approach
          </p>
          <h2 className="mt-[24px] max-w-[460px] font-[var(--font-be-vietnam)] text-[34px] font-medium leading-[1.08] tracking-[-1.2px] text-[#060606] sm:text-[44px]">
            our{" "}
            <span className="font-[var(--font-cormorant)] text-[1.08em] font-extralight timesFontFamily italic">
              organic
            </span>{" "}
            social media approach
          </h2>
        </div>

        <div className="flex w-full flex-col items-start pt-[34px]">
          {approachSteps.map((step, index) => (
            <article
              className={`grid w-full gap-8 py-10 md:grid-cols-2 md:items-center md:gap-12 lg:grid-cols-[minmax(0,420px)_minmax(0,420px)] lg:gap-[96px] lg:py-0 ${
                index === 0 ? "pt-0 lg:min-h-[455px]" : "border-t border-transparent lg:min-h-[455px]"
              }`}
              key={step.number}
            >
              {step.imageFirst ? (
                <>
                  <StepImage src={step.image} alt={step.alt} />
                  <div className="md:flex md:justify-start lg:pt-[18px]">
                    <StepCopy number={step.number} title={step.title} description={step.description} />
                  </div>
                </>
              ) : (
                <>
                  <div className="order-2 md:order-1 md:flex md:items-center lg:pl-0">
                    <StepCopy number={step.number} title={step.title} description={step.description} />
                  </div>
                  <div className="order-1 md:order-2 md:flex md:justify-end ">
                    <StepImage src={step.image} alt={step.alt} />
                  </div>
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
