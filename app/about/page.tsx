import Image from "next/image";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import BrandElevationVideo from "../components/BrandElevationVideo";
import { Numbers } from "../components/Numbers";
import { Team } from "../components/Team";
import WeAreUSS from "../components/Weareus";
import FadeLeft from "../components/FadeLeft";
import FadeUp from "../components/FadeUp";
import FadeRight from "../components/FadeRight";
import { UssDifferentSection } from "../components/UssDifferentSection";

const stats = [
  { value: "$25M", label: "In Client Revenue" },
  { value: "645k+", label: "Leads Generated for Clients" },
  { value: "50+", label: "Start Ups Turned Profitable" },
  { value: "100+", label: "Global Brands" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen -mt-8 sm:mt-0 bg-[#080808] text-white">
      <Header />

      <main>
        <WeAreUSS />

        <BrandElevationVideo />

        <section className="relative overflow-hidden bg-black sm:py-16 py-12 md:py-24 lg:py-32 text-black">

          {/* Section heading — slides in from left */}
          <FadeLeft delay={0.1}>
            <div className="mx-auto max-w-[1150px]  px-4 min-[375px]:px-6 mb-8 sm:mb-12 text-center sm:text-start">
              <p
                className="text-[#fff] font-medium text-[32px] min-[375px]:text-[32px] sm:text-[56px] tracking-tight leading-none"
              >
                meet our founder &
              </p>
              <span className="text-[#fff] font-medium text-[32px] min-[375px]:text-[32px] sm:text-[56px] tracking-tight leading-none">
                ceo{" "}
              </span>
              <span
                className="text-[#FF5500] text-[42px] min-[375px]:text-[42px] sm:text-[72px] italic timesFontFamily tracking-tight leading-[0.7]"
                style={{ fontWeight: 400 }}
              >

                emmanuel
              </span>
            </div>
          </FadeLeft>

          <div className="mx-auto max-w-[1150px]  px-6 min-[375px]:px-6 grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] gap-10 sm:gap-30 lg:gap-40 items-start">

            {/* LEFT — Portrait — slides in from left */}
            <FadeLeft delay={0.2}>
              <div className="relative w-full max-w-[318px] mx-auto md:mx-0">
                <div className="relative aspect-[3/4] min-w-[200px] min-[375px]:min-w-[318px] sm:min-w-[318px] w-full min-h-[300px] sm:min-h-[397.5px] overflow-hidden">
                  <Image
                    src="/assets/founder.jpg"
                    alt="Emmanuel Cole Williams, Founder and CEO of USS"
                    fill
                    className="object-contain object-[center_20%]"
                  />
                </div>
              </div>
            </FadeLeft>

            {/* RIGHT — Bio, Map, Quote */}
            <div className="flex flex-col w-full">

              {/* Bio + Map row */}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-14 sm:mb-6 -mb-6 sm:-mb-0">

                {/* Bio text — rises up */}
                <FadeUp delay={0.3}>
                  <p className="text-[13px] sm:text-[17px] leading-[23.8px] font-light text-[#F5F5F5] max-w-full sm:max-w-[350px] text-center sm:text-start">
                    My name is Emmanuel, Founder & CEO of USS. I've built &  scaled multiple businesses, both my own companies & on behalf of our clients. Having worked with 50+ SME clients across a wide range of industries, I've seen what it takes to grow a business at every stage.
                  </p>
                </FadeUp>

                {/* Map — slides in from right */}
                <FadeRight delay={0.35}>
                  <div className="hidden lg:flex flex-col items-start pt-2 mr-8">
                    <h1 className="text-white text-[16px] sm:text-[24px] leading-[23.8px] mb-4">
                      Global Presence
                    </h1>
                    <div className="relative w-[300px] shrink-0">
                      <Image
                        src="/assets/smallMap.png"
                        alt="Global reach — US, UK and Middle East"
                        width={413}
                        height={175}
                        className="object-contain opacity-100"
                      />
                      {/* <div className="absolute top-[38%] left-[18%] w-1.5 h-1.5 rounded-full bg-[#e05c2a] -translate-y-1/2" />
                      <div className="absolute top-[38%] left-[-10%] w-[28%] h-[1px] bg-[#e05c2a] -translate-y-1/2" />
                      <span className="absolute top-[38%] left-[-22%] text-[14px] text-[#eee] -translate-y-1/2">USA</span>
                      <div className="absolute top-[32%] left-[46%] w-1.5 h-1.5 rounded-full bg-[#e05c2a] -translate-y-1/2" />
                      <div className="absolute top-[32%] left-[46%] w-[45%] h-[1px] bg-[#e05c2a] -translate-y-1/2" />
                      <span className="absolute top-[32%] left-[93%] text-[14px] text-[#eee] -translate-y-1/2">UK</span>
                      <div className="absolute top-[46%] left-[68%] w-1.5 h-1.5 rounded-full bg-[#e05c2a] -translate-y-1/2" />
                      <div className="absolute top-[46%] left-[68%] w-[40%] h-[1px] bg-[#e05c2a] -translate-y-1/2" />
                      <span className="absolute top-[46%] left-[110%] text-[14px] text-[#eee] -translate-y-1/2">UAE</span> */}
                    </div>
                  </div>
                </FadeRight>

              </div>

              {/* Separator */}
              <div className="w-full h-[1px] bg-white/20 mb-4" />

              {/* Quote — rises up */}
              <FadeUp delay={0.45}>
                <blockquote className="text-[1.25rem] mt-0 sm:mt-4 md:text-[1.65rem] lg:text-[32px] font-medium leading-[30px] sm:leading-[35px] tracking-[0%] text-white max-w-[500px] text-center sm:text-start">
                  &ldquo;Structured marketing systems built for long term growth.&rdquo;
                </blockquote>
              </FadeUp>

              {/* Signed row — slides in from right */}
              <FadeRight delay={0.55}>
                <div className="-mt-4 flex items-center w-full gap-4">
                  <div className="h-[1px] bg-white/20 flex-grow" />
                  <Image
                    src="/assets/Signature.png"
                    alt="Signature"
                    width={360}
                    height={120}
                    className="h-20 sm:h-36 lg:h-40 w-auto object-contain shrink-0 brightness-0 invert"
                  />
                </div>
              </FadeRight>

            </div>
          </div>
        </section>

        <div className="-mt-16 sm:-mt-0">
          <Numbers stats={stats} />
        </div>
        <UssDifferentSection />
        <Team />
      </main>

      <Footer />
    </div>
  );
}