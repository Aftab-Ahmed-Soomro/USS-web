import Image from "next/image";
import { Footer } from "../components/Footer";
import { Button } from "../components/common/Button";
import { Header } from "../components/Header";
import BrandElevationVideo from "../components/BrandElevationVideo";
import { Numbers } from "../components/Numbers";
import { Team } from "../components/Team";
import WeAreUSS from "../components/Weareus";
import FadeLeft from "../components/FadeLeft";
import FadeDown from "../components/FadeDown";
import FadeUp from "../components/FadeUp";
import FadeRight from "../components/FadeRight";

const stats = [
{ value: "5x", label: "Up to 5X ROAS" },
  { value: "55M", label: "AED Generated in Revenue" },
  { value: "485k", label: "Leads Generated" },
  { value: "100+", label: "Brands Worldwide" },];

const team = [
  { name: "MEET EMMANUEL", role: "CEO/Founder", image: "/assets/team/emanuel.png", color: "#72cc3b", position: "center bottom" },
  { name: "MEET MEERAL", role: "Marketing Director", image: "/assets/team/meeral.png", color: "#f45122", position: "center bottom" },
  { name: "MEET RUSS", role: "Content Creator", image: "/assets/team/russ.png", color: "#ff8f1a", position: "center bottom" },
  { name: "MEET SAADAT", role: "Creative Director", image: "/assets/team/saadat.png", color: "#45a9e9", position: "center bottom" },
];

function ArrowButton({ label, direction }: { label: string; direction: "left" | "right" }) {
  return (
    <button
      aria-label={label}
      className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-[19px] font-bold leading-none text-black transition hover:bg-white/90 sm:size-10"
    >
      {direction === "left" ? "\u2039" : "\u203a"}
    </button>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <Header />

      <main>
        <WeAreUSS />

        <BrandElevationVideo />

        <section className="relative overflow-hidden bg-black  py-16 md:py-24 lg:py-32 text-black">

          {/* Section heading — slides in from left */}
          <FadeLeft delay={0.1}>
            <div className="mx-auto max-w-[1150px] px-6 mb-12">
              <p
                className="text-[#fff] font-medium text-[42px] sm:text-[56px] tracking-[0%] leading-none"
              >
                meet our founder &
              </p>
              <span className="text-[#fff] font-medium text-[42px] sm:text-[56px] tracking-[0%] leading-none">
                  ceo{" "}
                </span>
              <span
                className="text-[#FF5500] text-[42px] sm:text-[72px] italic timesFontFamily leading-[0.9]"
                style={{  fontWeight: 400 }}
              >
                
                emmanuel
              </span>
            </div>
          </FadeLeft>

          <div className="mx-auto max-w-[1150px] px-6 grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] gap-30 lg:gap-40 items-start">

            {/* LEFT — Portrait — slides in from left */}
            <FadeLeft delay={0.2}>
              <div className="relative w-full max-w-[280px] mx-auto md:mx-0">
                <div className="relative aspect-[3/4] min-w-[318px] w-full min-h-[397.5px] overflow-hidden">
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
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 mb-6">

                {/* Bio text — rises up */}
                <FadeUp delay={0.3}>
                  <p className="text-[14px] leading-[23.8px] font-light text-[#F5F5F5] max-w-[320px]">
                    My name is Emmanuel, Founder & CEO of USS. Over the past 12 years, I have built & scaled multiple businesses across the US, UK & Middle East, both my own companies and for clients. Having worked with 50+ SME clients across multiple industries at different stages of growth.
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
                <blockquote className="text-[1.45rem] mt-4 md:text-[1.65rem] lg:text-[32px] font-medium leading-[35px] tracking-[0%] text-white max-w-[500px]">
                  &ldquo;Structured marketing systems that generate revenue.&rdquo;
                </blockquote>
              </FadeUp>

              {/* Signed row — slides in from right */}
              <FadeRight delay={0.55}>
                <div className="mt-22 flex items-center w-full gap-4">
                  <div className="h-[1px] bg-white/20 flex-grow" />
                  <span className="text-[#F5F5F5] text-[9px] font-medium tracking-[3px] shrink-0 uppercase">
                    Signed, E.C.W.
                  </span>
                </div>
              </FadeRight>

            </div>
          </div>
        </section>

        <Numbers stats={stats} />

        <Team />
      </main>

      <Footer />
    </div>
  );
}