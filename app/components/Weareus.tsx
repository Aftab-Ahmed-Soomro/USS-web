import FadeLeft from "./FadeLeft";
import FadeUp from "./FadeUp";
import FadeRight from "./FadeRight";
import ImageSlider from "./ImageSlider";

export default function WeAreUSS() {
  return (
    <section className="relative w-full bg-[#080808] overflow-hidden py-4 sm:py-16 px-4 min-[375px]:px-6 lg:px-0 max-w-[1200px] xl:max-w-[1300px]  mx-auto">
      <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1.5fr] items-center">

        {/* LEFT — Big heading — overlaps the image's left edge */}
        <FadeLeft delay={0.1} className="relative z-10">
          <div className="relative z-1000 flex items-center justify-center sm:justify-start lg:justify-end py-8 sm:py-16 lg:py-0 lg:-mr-26 order-1 lg:order-none pointer-events-none">
            <h2
              className="text-white font-bold uppercase leading-[1.1] lg:leading-[116.28px] mt-4 lg:mt-20 tracking-[-1px] lg:tracking-[-2.74px] whitespace-nowrap text-[32px] min-[375px]:text-[40px] min-[480px]:text-[50px] sm:text-[80px] lg:text-[clamp(6rem,7vw,7rem)]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              WE ARE
              <span className="sm:hidden"> </span>
              <br className="hidden sm:block" />
              USS
              <span className="relative inline-block ml-2 align-baseline">
                <span className="absolute left-2 bottom-1 w-[0.22em] h-[0.22em] rounded-full bg-[#ff5a1f]" />
              </span>
            </h2>
          </div>
        </FadeLeft>

        {/* CENTER — Portrait — image with gradient overlays so overlapping text reads clearly */}
        <FadeUp delay={0.2} className="relative z-0">
          <div className="relative order-2 right-0 lg:right-8 lg:order-none w-full">
            <ImageSlider />

            {/* fade into black on the right so the paragraph text is legible */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-2/3" />
            {/* subtle fade on the left so the heading is legible */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-l from-transparent to-black/40" />
          </div>
        </FadeUp>

        {/* RIGHT — Description text — overlaps the image's right edge */}
        <FadeRight delay={0.1} className="relative z-10">
          <div className="relative z-1000 flex items-center justify-center sm:justify-start lg:justify-end py-8 sm:py-16 lg:py-0 ml-0 lg:-ml-2 order-3 lg:order-none">
            <div className="text-center sm:text-left lg:text-right text-[#FFFFFF] max-w-[440px] flex flex-col gap-6 sm:gap-8">
              <p className="text-[13px] sm:text-[17px] leading-[28px] sm:leading-[32.5px] font-normal tracking-[-0.1px]">
                At USS, we believe great marketing starts with understanding your business. For over 10 years, we've partnered with brands across the US, UAE and UK, creating strategies, campaigns and creatives built around your goals.
              </p>
              <p className="text-[13px] sm:text-[17px] leading-[28px] sm:leading-[32.5px] font-normal tracking-[-0.1px]">
                No two businesses are the same, neither is our approach.
              </p>
            </div>
          </div>
        </FadeRight>

      </div>
    </section>
  );
}