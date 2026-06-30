import FadeLeft from "./FadeLeft";
import FadeUp from "./FadeUp";
import FadeRight from "./FadeRight";
import ImageSlider from "./ImageSlider";

export default function WeAreUSS() {
  return (
    <section className="relative w-full bg-[#080808] overflow-hidden py-16 max-w-[1150px] mx-auto">
      <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1.5fr] items-center">

        {/* LEFT — Big heading — overlaps the image's left edge */}
        <FadeLeft delay={0.1} className="relative z-10">
          <div className="relative z-1000 flex items-center justify-start lg:justify-end py-16 lg:py-0 lg:-mr-24 order-1 lg:order-none pointer-events-none">
            <h2
              className="text-white font-bold uppercase leading-[116.28px] mt-20 tracking-[-2.74px] whitespace-nowrap"
              style={{ fontSize: "clamp(6rem, 7vw, 7rem)", fontFamily: "Poppins, sans-serif" }}
            >
              WE ARE
              <br />
              USS
              <span className="relative inline-block ml-2 align-baseline">
                <span className="absolute left-2 bottom-1 w-[0.22em] h-[0.22em] rounded-full bg-[#ff5a1f]" />
              </span>
            </h2>
          </div>
        </FadeLeft>

        {/* CENTER — Portrait — image with gradient overlays so overlapping text reads clearly */}
        <FadeUp delay={0.2} className="relative z-0">
          <div className="relative order-2 lg:order-none w-full">
            <ImageSlider />

            {/* fade into black on the right so the paragraph text is legible */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-2/3" />
            {/* subtle fade on the left so the heading is legible */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-l from-transparent to-black/40" />
          </div>
        </FadeUp>

        {/* RIGHT — Description text — overlaps the image's right edge */}
        <FadeRight delay={0.1} className="relative z-10">
          <div className="relative z-1000 flex items-center justify-end py-16 lg:py-0 lg:-ml-60 order-3 lg:order-none">
            <div className="text-right text-[#FFFFFF] max-w-[440px] flex flex-col gap-8">
              <p className="text-[12px] sm:text-[14px] leading-[32.5px] font-normal">
                At USS, we believe great marketing starts with understanding your business. For over 10 years, we've partnered with brands across the UK, US, and Middle East. Every recommendation, campaign and creative decision is built around your goals, helping you attract the right customers and build a stronger business over time.
              </p>
              <p className="text-[12px] sm:text-[14px] leading-[32.5px] font-normal">
                The best marketing isn't about doing more. It's about doing the right things well.
              </p>
            </div>
          </div>
        </FadeRight>

      </div>
    </section>
  );
}