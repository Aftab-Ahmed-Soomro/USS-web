import Image from "next/image";
import Link from "next/link";
import { Header } from "./components/Header";
import { Brands } from "./components/Brands";
import { Footer } from "./components/Footer";
import { Numbers } from "./components/Numbers";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { Team } from "./components/Team";
import { Button } from "./components/common/Button";
import { HomeHero } from "./components/HomeHero";
import { MarketingSystems } from "./components/MarketingSystems";
import { GoodCompanyMap } from "./components/GoodCompanyMap";
import FadeDown from "./components/FadeDown";
import FadeUp from "./components/FadeUp";
import ScaleIn from "./components/Scalein";
import Stagger from "./components/Stagger";
import StaggerItem from "./components/Staggeritem";

const failPoints = [
  "No clear customer journey.",
  "Campaigns are sent randomly.",
  "Flows are missing or outdated.",
  "Revenue leaks after purchase.",
  "The audience does not feel nurtured.",
];

const process = [
  {
    number: "01",
    title: "DISCOVER",
    copy: "We dive deep into your business, audience, and market to uncover real opportunities.",
    icon: "/assets/rigggght_arrow.png",
  },
  {
    number: "02",
    title: "STRATEGISE",
    copy: "We create a customised strategy with clear objectives, roadmap and success metrics.",
    icon: "/assets/rigggght_arrow.png",
  },
  {
    number: "03",
    title: "EXECUTE",
    copy: "We execute with precision, bringing your strategy to life and scaling measurable results.",
  },
];

const workWays = [
  {
    title: "Email System Audit",
    copy: "A clear review of what is leaking revenue and what needs to be fixed first.",
  },
  {
    title: "Strategy Buildout",
    copy: "We map flows, campaigns, segments and the customer journey for predictable retention.",
  },
  {
    title: "Design & Deployment",
    copy: "We create branded email visuals, write conversion copy and launch the system.",
  },
  {
    title: "Reporting & Scaling",
    copy: "We monitor performance, improve weak points and scale what generates repeat revenue.",
  },
];

function Strategic() {
  return (
    <section className="bg-[#f7f7f6] pb-[40px] pt-[70px] text-black">
      <div className="mx-auto max-w-[1150px] px-6">

        {/* Section label — drops in from above */}
        <div className="text-center">
          <FadeDown>
            <p className="text-[10px] sm:text-[14px] font-bold uppercase leading-none tracking-[5.6px] text-[#ff5500]">
              OUR APPROACH
            </p>
          </FadeDown>

          {/* Headline — scales in for more punch than a plain fade */}
          <ScaleIn delay={0.1} startScale={0.92}>
            <h2 className="mt-[35px] text-[42px] font-medium leading-[0.98] tracking-[-0.8px] sm:text-[56px]">
              a strategic process.
              <span className="mt-[25px] block font-[var(--font-cormorant)] text-[51px] font-normal timesFontFamily italic leading-[0.8] tracking-[-0.8px] text-[#ff5500] sm:text-[56px]">
                built to perform.
              </span>
            </h2>
          </ScaleIn>

          {/* Supporting copy */}
          <FadeUp delay={0.2}>
            <p className="mx-auto mt-[32px] max-w-[580px] text-[17px] sm:text-[24px] font-normal leading-[-1%]">
              Every project starts with understanding your business before we plan, create and deliver.
            </p>
          </FadeUp>
        </div>

        {/* Process steps — staggered sequential reveal instead of 3 identical FadeLefts */}
        <Stagger
          staggerDelay={0.18}
          className="mt-[93px] grid gap-y-12 md:grid-cols-3 md:gap-y-0"
        >
          {process.map((step, index) => (
            <StaggerItem key={step.number} y={50}>
              <article
                className={`relative px-6 md:min-h-[355px] ${
                  index > 0 ? "md:border-l md:border-black/10" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-6">
                  <span className="font-[var(--font-cormorant)] text-[180px] font-normal leading-[0.72] timesFontFamily tracking-[0%]">
                    {step.number}
                  </span>
                  {step.icon && (
                    <span className="grid border mr-10 border-black size-[50px] shrink-0 place-items-center rounded-full text-[22px] font-normal text-[#ff5500] shadow-[0_18px_32px_rgba(0,0,0,0.08)]">
                      <img className="size-[30px]" src={step.icon} alt="" />
                    </span>
                  )}
                </div>
                <div className="mt-[48px] h-px w-9 bg-[#ff5500]" />
                <h3 className="mt-[33px] text-[24px] sm:text-[34.6px] font-bold leading-none tracking-[-0.85px]">
                  {step.title}
                </h3>
                <p className="mt-[30px] max-w-[400px] text-[16px] sm:text-[17px] font-normal leading-[36px] text-black/70">
                  {step.copy}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Partnership card — zoom-in feels more like a "highlight" than a fade */}
        <ScaleIn delay={0.1} startScale={0.94}>
          <div className="mx-auto mt-[56px] grid max-w-[800px] overflow-hidden rounded-[16px] border border-black/[0.03] bg-white shadow-[0_22px_42px_rgba(0,0,0,0.08)] md:min-h-[110px] md:grid-cols-[482px_1fr]">
            <div className="flex items-center gap-[21px] px-8 py-7 md:px-[38px]">
              <span className="grid size-[46px] shrink-0 place-items-center border border-gray-200 p-3.5 rounded-full text-[22px] font-normal text-white shadow-[0_8px_16px_rgba(0,0,0,0.08)]">
                <img src="/assets/star.png" alt="" />
              </span>
              <div>
                <h3 className="text-[14px] sm:text-[18px] font-bold leading-none">
                  A process that keeps things moving
                </h3>
                <p className="mt-[11px] max-w-[420px] text-[11.5px] sm:text-[15px] leading-[24px] text-black/60">
                  From planning to delivery, we keep every project organised, efficient and on track.
                </p>
              </div>
            </div>
            <div className="flex items-center border-t border-black/[0.06] px-8 py-7 md:border-l md:border-t-0 md:px-[31px]">
              <a
                href="/contact"
                className="inline-flex h-11 w-full max-w-[300px] items-center justify-center rounded-full bg-[#ff5500] px-6 text-[12px] font-semibold uppercase tracking-[2px] text-white transition hover:bg-[#ff6b1f]"
              >
                Book a Consultation
                <span className="ml-[14px] text-[14px] leading-none">
                  <img className="size-[16px]" src="/assets/smallRightArrow.png" alt="" />
                </span>
              </a>
            </div>
          </div>
        </ScaleIn>

      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative z-10 px-6 py-[80px] text-white overflow-hidden">
      {/* Background Glows */}
      <div className="pointer-events-none absolute left-[-15%] top-[-10%] h-[600px] w-[600px] rounded-full bg-[#ff5500] opacity-20 blur-[100px]" />
      <div className="pointer-events-none absolute right-[-15%] bottom-[-10%] h-[600px] w-[600px] rounded-full bg-[#ff5500] opacity-20 blur-[100px]" />

      <div className="relative mx-auto max-w-[800px] text-center">

        {/* Eyebrow — drops down */}
        <FadeDown>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-1.5 w-1.5 rounded-full bg-[#ff5500]"></div>
            <p className="text-[10px] font-bold uppercase tracking-[2px] text-white">
              FULL-STACK MARKETING
            </p>
          </div>
        </FadeDown>

        {/* Main headline — scales in for emphasis as the hero statement of the section */}
        <ScaleIn delay={0.1} startScale={0.88}>
          <h2 className="mb-10 text-[42px] font-medium leading-[1.05] tracking-[-6%] sm:text-[56px]">
            we are your{" "}
            <span className="font-[var(--font-cormorant)] text-[72px] font-light timesFontFamily italic">
              360&deg;
            </span>
            <br />
            <span className="font-[var(--font-cormorant)] text-[72px] font-normal timesFontFamily italic">
              marketing agency
            </span>
          </h2>
        </ScaleIn>

        {/* Body copy paragraphs — staggered one after another instead of both fading together */}
        <Stagger staggerDelay={0.2} delay={0.25}>
          <div className="mx-auto max-w-[600px] space-y-8 text-[15px] leading-[27px]  text-white">
            <StaggerItem y={20}>
              <p>
                Calling ourselves a data-driven, problem solving, people connecting, digital crazy,
                talent engaging creative agency is too long winded.. so we call ourselves USS.
              </p>
            </StaggerItem>
            <StaggerItem y={20}>
              <p>
                We bring all digital platforms to one connected system designed to scale.
              </p>
            </StaggerItem>
          </div>
        </Stagger>

        {/* CTA buttons — rise up last */}
        <FadeUp delay={0.5}>
          <div className="mt-8 max-w-[600px] mx-auto flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="flex h-[40px] w-full sm:w-auto px-10 items-center justify-center rounded-full bg-[#ff5500] text-[13px] font-bold text-white transition-colors hover:bg-[#ff6b1f]">
              Book a Consultation
            </Link>
            {/* <button className="flex h-[40px] w-full sm:w-auto px-8 items-center justify-center gap-2 rounded-full border border-white bg-transparent text-[8px] font-bold text-white transition-colors hover:bg-white/5">
              See How We Scale
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 opacity-80">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button> */}
          </div>
        </FadeUp>

      </div>
    </section>
  );
}

const Page = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080808]">
      <div className="pointer-events-none absolute left-[-40px] top-[76px] h-[357px] w-[377px] rounded-full bg-[#7a2609] opacity-80 blur-[90px]" />
      <div className="pointer-events-none absolute right-[-62px] top-[183px] h-[536px] w-[360px] rounded-full bg-[#8a330d] opacity-80 blur-[98px]" />
      <div className="pointer-events-none absolute bottom-[-120px] left-0 h-[180px] w-full bg-[#5b1803] opacity-55 blur-[80px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[4px] bg-[#222]" />
      <Header />
      <HomeHero />
      <Numbers />
      <Brands />
      <MarketingSystems />
      <Strategic />
      <Testimonials />
      <GoodCompanyMap />
      <Team />
      <FinalCta />
      <Footer />
    </div>
  );
};

export default Page;