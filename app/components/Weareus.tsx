import FadeLeft from "./FadeLeft";
import FadeUp from "./FadeUp";
import FadeRight from "./FadeRight";
import ImageSlider from "./ImageSlider";

export default function WeAreUSS() {
  return (
    <section className="relative w-full bg-[#080808] overflow-hidden py-16 max-w-[1150px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[31fr_39fr_30fr] items-center">

        {/* LEFT — Big heading — slides in from left */}
        <FadeLeft delay={0.1}>
          <div className="flex items-center justify-start py-16 lg:py-0 order-1 lg:order-none">
            <h2
              className="text-white font-bold uppercase leading-[116.28px] z-1000 tracking-[-2.74px] whitespace-nowrap"
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

        {/* CENTER — Portrait — rises up from below */}
        <FadeUp delay={0.2}>
        <div className="relative order-2 lg:order-none w-full">
          <ImageSlider />
        </div>
      </FadeUp>

      {/* RIGHT — Description text — slides in from right */}
      <FadeRight delay={0.1}>
        <div className="flex items-center justify-end py-16 lg:py-0 order-3 lg:order-none">
          <div className="text-right text-[#FFFFFF] max-w-[270px] flex flex-col gap-8">
            <p className="text-[12px] leading-[28.5px] font-normal">
              At USS, We Focus On One Thing, Growth That Actually Translates Into Revenue. We Help Brands Across The US, UK, And Middle East Scale Through High-Performance Meta Ads, Google Ads, And Retention-Driven Email Systems.
            </p>
            <p className="text-[12px] leading-[32.5px] font-normal">
              At Some Point, You Realize Guessing Doesn&apos;t Scale.
            </p>
          </div>
        </div>
      </FadeRight>

    </div>
    </section >
  );
}