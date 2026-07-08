import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";
import ScaleIn from "./Scalein";

export default function EmailMarketingQuote({first, second, third}: {first: string, second: string, third: string}) {
  return (
    <section className="bg-black w-full py-20 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
      <Stagger staggerDelay={0.15} className="flex flex-col items-center justify-center text-center w-full">
        <StaggerItem className="flex gap-1">
          <img src="/assets/bigComma.png" alt="" />
          <img src="/assets/bigComma.png" alt="" />
        </StaggerItem>

        <StaggerItem>
          <h2
            className="text-white max-w-[650px] mt-8"
            style={{
              fontWeight: 500,
              fontSize: "40px",
              lineHeight: "60px",
              letterSpacing: "-2.44px",
            }}
          >
            {first} {" "}
            <span
              className="text-[#FF5500]"
              style={{
                fontFamily: "Times New Roman, serif",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "48px",
                lineHeight: "100%",
                letterSpacing: "-2.44px",
              }}
            >
              {second}
            </span>{" "}
            {third}
          </h2>
        </StaggerItem>

        <ScaleIn delay={0.4} startScale={0} duration={0.8}>
          <div className="w-[243px] h-[2px] bg-orange-500 my-7" />
        </ScaleIn>

        <StaggerItem className="flex gap-1 mb-4">
          <img src="/assets/bigCommaLeft.png" alt="" />
          <img src="/assets/bigCommaLeft.png" alt="" />
        </StaggerItem>

        <StaggerItem>
          <p
            className="text-white"
            style={{
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "100%",
              letterSpacing: "-1px",
            }}
          >
            Strategy. Precision. Growth.
          </p>
        </StaggerItem>
      </Stagger>
    </section>
  );
}