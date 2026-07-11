import Image from "next/image";
import Link from "next/link";
import { Brands } from "../components/Brands";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Numbers as NumbersSection } from "../components/Numbers";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";
import { ConsultationForm, LightConsultationForm } from "../components/ConsultationForm";
import { OnlyBrands } from "../components/OnlyBrands";
import { GoodCompanyMap } from "../components/GoodCompanyMap";
import Stagger from "../components/Stagger";
import StaggerItem from "../components/Staggeritem";
import FadeRight from "../components/FadeRight";
import { WhyEmailFails } from "../components/WhyEmailFails";
import EmailMarketingQuote from "../components/EmailMarketingQuote";
import { ContentCreationGrid } from "../components/ContentCreationGrid";
import FadeUp from "../components/FadeUp";

const stats = [
  { value: "18.4K+", label: "Creative Assets Produced" },
  { value: "6.2K+", label: "Videos Delivered" },
  { value: "12.1K+", label: "Design Assets Created" },
  { value: "100+", label: "Brands worldwide" },
];

const problems = [
  "Content created without strategy",
  "Poor quality or inconsistent visuals",
  "No clear message or direction",
  "Not built for platform performance",
  "Content that looks good but doesn’t convert",
];

const approach = [
  {
    number: "01",
    title: "Creative Direction",
    copy: "We define the concept, style and messaging before production.",
  },
  {
    number: "02",
    title: "Platform First Content",
    copy: "Content designed specifically for social and digital platforms.",
  },
  {
    number: "03",
    title: "Production Quality",
    copy: "High quality photo and video that reflects your brand.",
  },
  {
    number: "04",
    title: "Performance-Driven Content",
    copy: "Content built to engage, convert and support campaigns.",
  },
];

const services = [
  "Photo and Video Production",
  "Creative Direction and Concept Development",
  "Social Media Content Creation",
  "Ad Creative Production",
  "Short-Form Video and Reels",
  "Content for Campaigns and Launches",
];

const process = [
  {
    number: "01",
    title: "Concept and Planning",
    copy: "Briefing, research and strategic foundation for the shoot.",
  },
  {
    number: "02",
    title: "Creative Direction",
    copy: "Mood-boards, references, styling and visual concept creation.",
  },
  {
    number: "03",
    title: "Production",
    copy: "On set photography and video capture with our USS team.",
  },
  {
    number: "04",
    title: "Editing",
    copy: "Our creative team edit content post production.",
  },
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#ff5500] px-6 pb-[58px] pt-[56px] text-white sm:pb-[72px] sm:pt-[78px]">
      <div className="mx-auto grid max-w-[1150px] gap-10 lg:grid-cols-[minmax(0,660px)_430px] lg:items-center lg:justify-between">
        <Stagger staggerDelay={0.12}>
          <StaggerItem>
            <p className="font-[var(--font-be-vietnam)] text-[10px] font-normal sm:text-[14px] uppercase tracking-[0.5px] text-white">
              Google Ads
            </p>
          </StaggerItem>
          <StaggerItem>
            <h1 className="mt-[24px] max-w-[700px] font-[var(--font-be-vietnam)] text-[38px] font-bold lowercase leading-[100%] tracking-[-3px] sm:text-[58px] text-white">
              content that works
              <br />
              not just{" "}
              <span className="font-[var(--font-cormorant)] text-[1.12em] sm:text-[72px] lowercase font-normal timesFontFamily italic text-white tracking-[-2.8px]">
                looks good
              </span>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-[40px] max-w-[530px] font-[var(--font-inter)] text-[14px] leading-[32px] text-white/90 sm:text-[18px]">
              We create high quality photo and video content designed to capture attention, reflect your brand and support your marketing across every platform.
            </p>
          </StaggerItem>
          <StaggerItem>
            <Link
              className="mt-[30px] inline-flex h-[38px] min-w-[178px] items-center justify-center rounded-full bg-white px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-black transition uppercase hover:bg-[#ff6b1f]"
              href="/contact"
            >
              Book a Consultation
            </Link>
          </StaggerItem>
        </Stagger>

        <FadeRight delay={0.3}>
          <LightConsultationForm />
        </FadeRight>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="bg-[#050505] px-6 pb-[56px] pt-[58px] text-white ">
      <div className="mx-auto max-w-[1150px] text-center">
        <h2 className="font-[var(--font-be-vietnam)] text-[28px] font-medium lowercase leading-tight tracking-[-4%] sm:text-[56px]">
          take a look at our{" "}
          <span className="font-[var(--font-cormorant)] text-[1.15em] sm:text-[72px] font-normal tracking-[-4%] timesFontFamily italic">
            creative world
          </span>
        </h2>
        <p className="mx-auto mt-[9px] max-w-[600px] font-[var(--font-inter)] text-[16px] sm:text-[24px] leading-[1.7] text-[#FFFFFFB2] uppercase">
          See how we brought this campaign to life.
        </p>
        <div className="relative mx-auto mt-[38px] aspect-[1040/515] w-full max-w-[1150px] overflow-hidden rounded-[4px] shadow-[0_0_42px_rgba(255,255,255,0)]">
          <Image
            src="/assets/blurred.png"
            alt="Content creation video preview"
            fill
            sizes="(min-width: 1024px) 1040px, 100vw"
            className="object-cover object-center blur-[17.5px] scale-[1.1]"
          />
          <div className="absolute inset-0 bg-black/14" />
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_92px_58px_rgba(0,0,0,0.92)]" />
          <button
            aria-label="Play creative video"
            className="absolute left-1/2 top-1/2 grid size-[54px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#ff5500] text-white shadow-[0_12px_32px_rgba(0,0,0,0.36)] transition hover:bg-[#ff6b1f] sm:size-[70px]"
          >
            <span className="ml-[4px] h-0 w-0 border-y-[10px] border-l-[15px] border-y-transparent border-l-white sm:border-y-[13px] sm:border-l-[19px]" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return <NumbersSection stats={stats} />;
}

function Problems() {
  return (
    <section className="bg-white px-6 py-[72px] text-black lg:pb-[74px] lg:pt-[78px]">
      <div className="mx-auto grid max-w-[1150px] gap-10 lg:grid-cols-[minmax(0,385px)_minmax(0,448px)] lg:justify-between">
        <div>
          <p className="font-[var(--font-be-vietnam)] text-[9px] font-bold uppercase tracking-[4px] text-[#ff5500]">
            The Problem
          </p>
          <h2 className="mt-[27px] font-[var(--font-be-vietnam)] text-[36px] font-medium lowercase leading-[0.98] tracking-[-2.3px] sm:text-[42px]">
            why most content
            <br />
            <span className="font-[var(--font-cormorant)] text-[1.22em] font-extralight timesFontFamily italic tracking-[-0.04em] text-[#ff5500]">
              doesn&apos;t perform
            </span>
          </h2>
        </div>
        <div>
          <p className="font-[var(--font-inter)] text-[13px] leading-[1.55] text-black/68">
            Most brands are producing content, but not content that works.
          </p>
          <div className="mt-[17px] border-t border-black/8">
            {problems.map((problem, index) => (
              <div className="grid grid-cols-[27px_minmax(0,1fr)] gap-0 border-b border-black/8 py-[16px]" key={problem}>
                <span className="font-[var(--font-inter)] text-[11px] font-bold text-[#ff5500]">
                  0{index + 1}
                </span>
                <p className="font-[var(--font-inter)] text-[13px] leading-[1.45] text-black/72">
                  {problem}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteImage() {
  return (
    <section className="relative min-h-[335px] overflow-hidden bg-black text-white sm:min-h-[430px] lg:min-h-[520px]">
      <Image
        src="/assets/great_content.png"
        alt="Bright lifestyle content setting"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/22" />
      <div className="absolute inset-0 grid place-items-center px-6 text-center">
        <p className="max-w-[650px] font-[var(--font-cormorant)] text-[27px] font-extralight timesFontFamily italic leading-[1.34] tracking-[-0px] sm:text-[42px]">
          &quot;Good content gets attention.
          <br />
          Great content gets results.&quot;
        </p>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section className="bg-white px-6 py-[64px] text-black lg:pb-[52px] lg:pt-[62px]">
      <div className="mx-auto grid max-w-[1150px] gap-10 lg:grid-cols-[402px_minmax(0,455px)] lg:justify-between">
        <div>
          <p className="font-[var(--font-be-vietnam)] text-[9px] font-bold uppercase tracking-[5px] text-[#ff5500]">
            Our System
          </p>
          <h2 className="mt-[35px] max-w-[390px] font-[var(--font-be-vietnam)] text-[38px] font-medium lowercase leading-[1.02] tracking-[-2.4px] sm:text-[42px]">
            our{" "}
            <span className="font-[var(--font-cormorant)] text-[1.2em] font-extralight timesFontFamily italic tracking-[-0.04em]">
              content
            </span>
            <br />
            <span className="font-[var(--font-cormorant)] text-[1.2em] font-extralight timesFontFamily italic tracking-[-0.04em]">
              creation
            </span>{" "}
            approach
          </h2>
          <div className="relative mt-[10px] aspect-[402/433] w-full overflow-hidden">
            <Image
              src="/assets/content_approach.jpg"
              alt="Audience watching content creation session"
              fill
              sizes="(min-width: 1024px) 402px, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
        <div className="grid content-start gap-x-[72px] gap-y-[62px] pt-0 sm:grid-cols-2 lg:pt-[160px]">
          {approach.map((step) => (
            <article key={step.number}>
              <span className="font-[var(--font-inter)] text-[14px] font-bold text-[#ff5500]">
                {step.number}
              </span>
              <h3 className="mt-[46px] font-[var(--font-be-vietnam)] text-[17px] font-semibold leading-[1.2] tracking-[-0.7px]">
                {step.title}
              </h3>
              <p className="mt-[12px] font-[var(--font-inter)] text-[12px] leading-[1.5] text-black/62">
                {step.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="bg-black px-6 py-[72px] text-white  lg:pb-[104px] lg:pt-[97px]">
      <div className="mx-auto grid max-w-[1150px] gap-12 lg:grid-cols-[377px_minmax(0,545px)] lg:items-start lg:justify-between">
        <div>
          <p className="font-[var(--font-be-vietnam)] text-[9px] font-bold uppercase tracking-[5px] text-[#ff5500]">
            Services
          </p>
          <h2 className="mt-[36px] font-[var(--font-be-vietnam)] text-[38px] font-medium lowercase leading-[1.06] tracking-normal sm:text-[40px]">
            our{" "}
            <span className="font-[var(--font-cormorant)] text-[1.18em] font-extralight timesFontFamily italic tracking-normal text-[#ff5500]">
              content
            </span>
            <br />
            <span className="font-[var(--font-cormorant)] text-[1.18em] font-extralight timesFontFamily italic tracking-normal text-[#ff5500]">
              creation
            </span>{" "}
            services
          </h2>
          <div className="relative mt-[8px] aspect-[377/416] w-full overflow-hidden">
            <Image
              src="/assets/content_service.png"
              alt="Food content creation set"
              fill
              sizes="(min-width: 1024px) 377px, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
        <div className="border-t border-white/12 pt-[92px] lg:mt-0 lg:pt-[136px]">
          {services.map((service, index) => (
            <article className="flex min-h-[74px] items-center justify-between gap-5 border-b border-white/12 py-[18px]" key={service}>
              <div className="flex min-w-0 items-baseline gap-[18px]">
                <span className="translate-y-[1px] font-[var(--font-inter)] text-[12px] font-bold leading-none tracking-normal text-[#ff5500]">
                  /{String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-[var(--font-be-vietnam)] text-[16px] font-medium leading-none tracking-normal text-white sm:text-[18px]">
                  {service}
                </h3>
              </div>
              <span className="shrink-0 font-[var(--font-inter)] text-[20px] leading-none text-white" aria-hidden="true">
                <img className="w-5 h-5" src="/assets/topRight.png" alt="" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-white px-6 py-[62px] text-black lg:pb-[54px] lg:pt-[62px]">
      <div className="mx-auto max-w-[1150px]">
        <p className="font-[var(--font-be-vietnam)] text-[9px] font-bold uppercase tracking-[5px] text-[#ff5500]">
          Process
        </p>
        <h2 className="mt-[33px] max-w-[405px] font-[var(--font-be-vietnam)] text-[36px] font-medium lowercase leading-[1.14] tracking-normal sm:text-[40px]">
          our content
          <br />
          creation{" "}
          <span className="font-[var(--font-cormorant)] text-[1.22em] font-extralight timesFontFamily italic tracking-normal">
            process
          </span>
        </h2>
        <div className="mt-[31px] grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
          {process.map((step, index) => (
            <article
              className={`min-h-[222px] px-[29px] pt-[25px] ${index === 0 ? "sm:pl-[29px] lg:pl-[29px]" : ""} ${index > 0 ? "lg:border-l lg:border-black/10" : ""}`}
              key={step.number}
            >
              <div className="flex items-center gap-[11px]">
                <span className="font-[var(--font-cormorant)] text-[36px] font-light leading-none tracking-normal text-black">
                  {step.number}
                </span>
                <span className="mt-[4px] h-px w-[36px] bg-[#ff5500]" />
              </div>
              <h3 className="mt-[45px] font-[var(--font-be-vietnam)] text-[17px] font-semibold leading-tight tracking-normal">
                {step.title}
              </h3>
              <p className="mt-[29px] max-w-[200px] font-[var(--font-inter)] text-[12px] leading-[1.55] tracking-normal text-black/62">
                {step.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-black px-6 py-[72px] text-white ">
      <div className="mx-auto max-w-[1150px] text-center">
        <p className="font-[var(--font-be-vietnam)] text-[10px] font-medium uppercase tracking-[3px] text-[#ff5500]">
          Let&apos;s Create
        </p>
        <h2 className="mt-[22px] font-[var(--font-be-vietnam)] text-[34px] font-medium lowercase leading-[1.08] tracking-[-1.3px] sm:text-[50px]">
          create content
          <br />
          that actually{" "}
          <span className="font-[var(--font-cormorant)] text-[1.12em] font-extralight timesFontFamily italic tracking-[-0.04em] text-[#ff5500]">
            performs
          </span>
        </h2>
        <div className="mt-[26px] flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            className="inline-flex h-[37px] min-w-[166px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[11px] font-bold uppercase text-white transition hover:bg-[#ff6b1f]"
            href="/contact"
          >
            Book a Consultation
          </Link>
          <Link className="font-[var(--font-be-vietnam)] text-[13px] font-medium text-white/80 transition hover:text-white border-white border rounded-full px-5 h-[38px] inline-flex items-center justify-center" href="#services">
            Book a Strategy Call
          </Link>
        </div>
      </div>
    </section>
  );
}

const googleAdsBrandPoints = [
  {
    number: "01",
    title: "Wasted Budget",
    description:
      "Budget is spent on keywords that don't convert.",
  },
  {
    number: "02",
    title: "Poor Campaign Structure",
    description:
      "Poor campaign structure makes it harder to improve performance.",
  },
  {
    number: "03",
    title: "Weak Ad Copy",
    description:
      "Ads don't stand out or encourage people to click and engage.",
  },
  {
    number: "04",
    title: "Set and Forget",
    description:
      "Campaigns run without A/B testing or optimisation.",
  },
];

const googleAdsUssPoints = [
  {
    number: "01",
    title: "High-Intent Targeting",
    description:
      "We target searches that are ready to convert.",
  },
  {
    number: "02",
    title: "Built for Performance",
    description:
      "Campaigns structured for better results and scalability.",
  },
  {
    number: "03",
    title: "Ads That Drive Action",
    description:
      "Copy written to increase clicks and enquiries",
  },
  {
    number: "04",
    title: "Always Optimising",
    description:
      "Continuous improvements based on real campaign data",
  },
];

// Card Data Structure
const CARDS_DATA = [
  {
    id: '01',
    title: 'Campaign Strategy',
    description: 'Every campaign starts with a clear objective. We define your goals, audience, budget and messaging before any ad goes live.',
    bgImage: '/assets/method1.png', // Replace with your image src
  },
  {
    id: '02',
    title: 'Audience Targeting',
    description: 'We identify and engage the most relevant demographics through data-driven targeting strategies, ensuring your ads reach the right people.',
    bgImage: '/assets/method2.png', // Replace with your image src
  },
  {
    id: '03',
    title: 'Creative & Ad Content',
    description: 'Our team crafts compelling visuals and persuasive copy that capture attention and drive meaningful engagement from your audience.',
    bgImage: '/assets/method3.png', // Replace with your image src
  },
  {
    id: '04',
    title: 'Optimisation & Scaling',
    description: 'We continuously monitor performance metrics to refine campaigns, maximizing return on ad spend and scaling what works best.',
    bgImage: '/assets/method4.png', // Replace with your image src
  },
];

function RevenueMethod() {
  return (
    <div className="w-full bg-black text-white py-20 px-6 min-h-screen flex flex-col justify-center items-center font-sans">
      <div className="max-w-[1150px] w-full">

        <Stagger staggerDelay={0.12}>
          <StaggerItem>
            <h2 className="lowercase text-white text-[32px] font-medium leading-[1.15] tracking-[-3%] sm:text-[56px] sm:leading-[70px] mb-16">
              our content creation  <br />
              {" "}
              <span
                className="italic text-[#ff5500] font-normal text-[1.1em] tracking-[-3%] sm:text-[72px] sm:leading-[70px]"
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
              >
                process
              </span>
            </h2>
          </StaggerItem>
        </Stagger>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center">
          {CARDS_DATA.map((card, i) => (
            <FadeUp key={card.id} delay={0.1 + i * 0.1}>
              <div
                style={{
                  width: '1285.61px', // Scaled proportions fallback or driven via wrapper max-width
                  maxWidth: '100%',
                  height: '606.93px',
                  backgroundImage: `url(${card.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                className="group relative rounded-[28px] overflow-hidden p-2 flex flex-col justify-between cursor-pointer transition-all duration-500 ease-out"
              >
                {/* Card Number */}
                <div
                  className="text-[9.82px] font-medium leading-[14.73px] tracking-[2.95px] text-white opacity-80 align-middle"
                  style={{ fontStyle: 'Medium' }}
                >
                  {card.id}
                </div>

                {/* Bottom Content Group (Animates Up on Hover) */}
                <div className="transform translate-y-[80px] group-hover:translate-y-0 transition-transform duration-500 ease-out will-change-transform">

                  {/* Title */}
                  <h3
                    className="text-[22.64px] font-normal leading-[26.78px] tracking-[0%] text-white align-middle mb-3 min-h-[60px]"
                    style={{ fontStyle: 'Regular' }}
                  >
                    {card.title}
                  </h3>

                  {/* Description (Fades and slides in cleanly) */}
                  <p
                    className="text-[15.5px] font-normal leading-[18.86px] tracking-[0%] text-white/90 align-middle opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 ease-out min-h-[120px]"
                    style={{ fontStyle: 'Regular' }}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </div>
  );
}

export default function ContentCreationPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <Header />
      <Hero />
      <VideoSection />
      {/* <Brands /> */}
      {/* <Metrics /> */}
      <WhyEmailFails
        hideBadge={true}
        heading={
          <h2 className="mx-auto max-w-[900px] text-center font-[var(--font-inter)] text-[40px] font-medium leading-[1] tracking-[-1.5px] sm:text-[56px]">
            why most{" "}
            <span
              className="font-normal italic text-[60px] sm:text-[72px]"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              google ads
            </span>{" "}
            fails
          </h2>
        }
        subheading="Most brands don't have a Google Ads problem, they have a strategy problem."
        leftTitle="Most Brands"
        rightTitle="The USS Difference"
        leftPoints={googleAdsBrandPoints}
        rightPoints={googleAdsUssPoints}
        centerLogo="/assets/Google__logo.webp"
        logoClassName="w-[80px] lg:w-[115px]"
      />
      <div className="mt-[-150px]">
        <EmailMarketingQuote first={"your social media is your"} second={"digital window"} third={"shop front"} />
      </div>
      <ContentCreationGrid />
      <RevenueMethod />
      {/* <Problems /> */}
      {/* <QuoteImage /> */}
      {/* <ApproachSection /> */}
      {/* <ServicesSection /> */}
      {/* <ProcessSection /> */}
      {/* <OnlyBrands /> */}
      <Testimonials />
      <Team />
      <GoodCompanyMap />
      <FinalCta />
      <Footer />
    </main>
  );
}
