import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";
import ScaleIn from "./Scalein";

export default function EmailMarketingQuote({first, second, third}: {first: string, second: string, third: string}) {
  return (
    <section className="bg-black w-full px-4 min-[375px]:px-6 flex flex-col items-center justify-center text-center overflow-hidden">
      <Stagger staggerDelay={0.15} className="flex flex-col items-center justify-center text-center w-full">
        <StaggerItem className="flex gap-1">
          <img src="/assets/bigComma.png" alt="" loading="lazy" decoding="async" />
          <img src="/assets/bigComma.png" alt="" loading="lazy" decoding="async" />
        </StaggerItem>

        <StaggerItem>
          <h2
            className="text-white max-w-[650px] mt-[24px] sm:mt-8 font-medium text-[22px] sm:text-[40px] leading-[1.3] sm:leading-[60px] tracking-[-1px] sm:tracking-[-2.44px]"
          >
            {first} {" "}
            <span
              className="text-[#FF5500] font-normal italic text-[27px] sm:text-[48px] leading-none tracking-[-1px] sm:tracking-[-2.44px]"
              style={{
                fontFamily: "Times New Roman, serif",
              }}
            >
              {second}
            </span>{" "}
            {third}
          </h2>
        </StaggerItem>

        <ScaleIn delay={0.4} startScale={0} duration={0.8}>
          <div className="w-[180px] sm:w-[243px] h-[2px] bg-orange-500 my-[20px] sm:my-7" />
        </ScaleIn>

        <StaggerItem className="flex gap-1 mb-4">
          <img src="/assets/bigCommaLeft.png" alt="" loading="lazy" decoding="async" />
          <img src="/assets/bigCommaLeft.png" alt="" loading="lazy" decoding="async" />
        </StaggerItem>

        {/* <StaggerItem>
          <p
            className="text-white font-medium text-[16px] sm:text-[20px] leading-none tracking-[-0.5px] sm:tracking-[-1px]"
          >
            Strategy. Precision. Growth.
          </p>
        </StaggerItem> */}
      </Stagger>
    </section>
  );
}