import Image from "next/image";
import Link from "next/link";
import { Brands } from "../components/Brands";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Numbers as NumbersSection } from "../components/Numbers";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";
import { ConsultationForm } from "../components/ConsultationForm";
import { GoodCompanyMap } from "../components/GoodCompanyMap";
import { WhyEmailFails } from "../components/WhyEmailFails";
import TargetRightPeople from "../components/TargetRightPeople";

const failPoints = [
  "Creative that fails to capture attention",
  "Campaigns structured inefficiently",
  "No testing or optimisation process",
  "Scaling too quickly or too slowly",
];

const stats = [
  { value: "72.4M+", label: "Impressions Delivered" },
  { value: "18.6M+", label: "Video Views" },
  { value: "643K+", label: "Customer Actions" },
  { value: "4.7x", label: "Average ROAS" },
];

const relatedProjects = [
  {
    name: "Blank DXB",
    image: "/assets/dxb.jpg",
    copy: "With a strong Meta Ads execution we focused on Paid Media during Blank DXB launch. We were able to target demand on a granular level making budget efficiency higher",
    tags: ["Paid Media", "Meta Ads Targeting", "Lead Generation"],
    year: "2024",
  },
  {
    name: "SupperClub",
    image: "/assets/club.jpg",
    copy: "We increased SupperClub membership using Meta Ads to drive members using creative assets and location targeting",
    tags: ["Membership Increase", "Hospitality"],
    year: "2024",
  },
];

const systemItems = [
  ["01", "Creative That Converts", "High quality creative designed to stop the scroll and encourage action."],
  ["02", "Campaign Structure", "Campaigns built around clear objectives, audience and budget allocation."],
  ["03", "Testing and Optimisation", "Continuous testing to improve performance and identify winning creatives."],
  ["04", "Scaling Performance", "Increasing budget only when campaigns are consistently delivering results."],
];

const workSteps = [
  "Strategy and account setup",
  "Creative direction and production",
  "Campaign management",
  "Conversion tracking and pixel setup",
  "Landing page optimisation",
  "Scaling and performance optimisation",
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-black px-6 pb-[58px] pt-[56px] text-white sm:pb-[72px] sm:pt-[78px]">
      
      <div className="mx-auto grid max-w-[1150px] gap-10 lg:grid-cols-[minmax(0,660px)_430px] lg:items-center lg:justify-between">
        <div>
          <h1 className="mt-[24px] max-w-[700px] font-[var(--font-be-vietnam)] text-[38px] font-bold lowercase leading-[100%] tracking-[1px] sm:text-[65px] text-white">
            scale your brand with meta ads, don’t just{" "}
            <span className="font-[var(--font-cormorant)] text-[1.12em] sm:text-[72px] lowercase font-normal timesFontFamily italic text-[#FF5500] tracking-[-2px]">
              spending more.
            </span>
          </h1>
          <p className="mt-[50px] max-w-[560px] font-[var(--font-inter)] text-[14px] leading-[32px] text-white/90 sm:text-[18px]">
            We create and manage Meta Ads across Facebook and Instagram, helping businesses reach the right people, generate more enquiries and grow with confidence.
          </p>
          <div className="flex justify-start gap-24 bg-black pt-12 pb-6">
  <div className="text-center">
    <h2
      className="text-[#ff5500]"
      style={{
        fontFamily: "Times New Roman, serif",
        fontWeight: 700,
        fontStyle: "italic",
        fontSize: "48px",
        lineHeight: "48px",
        letterSpacing: "0%",
      }}
    >
      $100M
    </h2>
    <p
      className="text-white mt-2"
      style={{
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "0%",
      }}
    >
      in ad spend managed
    </p>
  </div>

  <div className="text-center">
    <h2
      className="text-[#ff5500]"
      style={{
        fontFamily: "Times New Roman, serif",
        fontWeight: 700,
        fontStyle: "italic",
        fontSize: "48px",
        lineHeight: "48px",
        letterSpacing: "0%",
      }}
    >
      5x
    </h2>
    <p
      className="text-white mt-2"
      style={{
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "0%",
      }}
    >
      average ROAS achieved
    </p>
  </div>
</div>
          <Link
            className="mt-[36px] inline-flex h-[38px] min-w-[178px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-white transition uppercase hover:bg-[#ff6b1f]"
            href="/contact"
          >
            Book a Consultation
          </Link>
        </div>

        <ConsultationForm />
      </div>
    </section>
  );
}

function WhyAdsFail() {
  return (
    <section className="bg-[#f7f7f5] px-6 py-[58px] text-black  lg:py-[70px]">
      <div className="mx-auto grid max-w-[1150px] gap-10 lg:grid-cols-[minmax(0,500px)_minmax(360px,520px)] lg:items-center lg:justify-between">
        <div>
          <p className="font-[var(--font-be-vietnam)] text-[10px] sm:text-[12px] font-normal uppercase tracking-[4.8px] text-[#ff5500]">
            THE PROBLEM
          </p>
          <h2 className="mt-[28px] font-[var(--font-be-vietnam)] text-[38px] font-medium lowercase leading-[1.08] tracking-[-1.4px] sm:text-[60px]">
            why most
            <br />
            <span className="font-[var(--font-cormorant)] text-[1.12em] sm:text-[72px] font-normal timesFontFamily italic">
              meta ads
            </span>{" "}
            fails
          </h2>
          <p className="mt-[28px] max-w-[390px] font-[var(--font-inter)] text-[15px] sm:text-[18px] leading-[1.45] text-black/65">
            Most brands don&apos;t have a Meta Ads problem
            <br />
            they have a strategy problem.
          </p>
          <ul className="mt-[24px] max-w-[548px] border-b border-black/10">
            {failPoints.map((point) => (
              <li
                className="flex items-center gap-[18px] border-t border-black/10 py-[15px] font-[var(--font-inter)] text-[15px] sm:text-[18px] text-[#262626]"
                key={point}
              >
                <span className="size-[13px] shrink-0 rounded-full bg-[#ff5500]" />
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-[24px] max-w-[430px] font-[var(--font-be-vietnam)] text-[14px] sm:text-[18px] font-bold  leading-[1.55]">
            <p>Successful Meta Ads rely on the right combination of creative, strategy and data.</p>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-[10px] bg-[#f3b0d1]">
          <Image
            src="/assets/fb_large.jpg"
            alt="Meta ads campaign dashboard illustration"
            fill
            sizes="(min-width: 1024px) 520px, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Numbers() {
  return <NumbersSection ctaLabel="See More" stats={stats} />;
}

function MetaSystem() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-[76px] text-white  lg:py-[88px]">
      <div className="pointer-events-none absolute right-[-90px] top-[-80px] h-[520px] w-[520px] rounded-full bg-[#7a2707] opacity-80 blur-[105px]" />
      <div className="relative mx-auto max-w-[1150px]">
        <p className="font-[var(--font-be-vietnam)] text-[9px] font-normal sm:text-[12px] uppercase tracking-[4.8px] text-[#ff5500]">
          OUR SYSTEM
        </p>
        <h2 className="mt-[30px] max-w-[590px] font-[var(--font-be-vietnam)] text-[38px] font-medium lowercase leading-[1.06] tracking-[-1.5px] sm:text-[56px]">
          our meta ads system for
          <br />
          <span className="font-[var(--font-cormorant)] text-[1.12em] sm:text-[72px] font-normal timesFontFamily italic">
            scalable growth.
          </span>
        </h2>
        <p className="mt-[22px] max-w-[670px] font-[var(--font-inter)] text-[13px] sm:text-[18px] leading-[1.75] text-white">
          We don't We don't just launch campaigns, we build a structured system designed to improve performance over time.just run ads, we build systems designed to scale.
        </p>

        <div className="mt-[62px] grid border border-white/16 md:grid-cols-2 md:[&>*:nth-child(2n)]:border-l md:[&>*:nth-child(n+3)]:border-t">
          {systemItems.map(([number, title, copy]) => (
            <article className="min-h-[196px] border-[0.5px] border-white/16 px-[38px] py-[42px] first:border-t-0 md:border-t-0 md:px-[48px]" key={number}>
              <div className="grid items-center gap-[26px] sm:grid-cols-[58px_minmax(0,1fr)]">
                <p className="font-[var(--font-cormorant)] text-[60px] font-bold timesFontFamily italic leading-none text-[#ff5500]">
                  {number}
                </p>
                <span className="hidden h-px bg-white/12 sm:block" />
              </div>
              <h3 className="mt-[28px] font-[var(--font-be-vietnam)] text-[22px] sm:text-[30px] font-medium leading-tight tracking-[0.75px]">
                {title}
              </h3>
              <p className="mt-[14px] max-w-[350px] font-[var(--font-cormorant)] text-[13px] sm:text-[18px] font-normal leading-[1.45] text-white/90">
                {copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="bg-[#ff5500] px-6 py-[68px] text-white  lg:py-[74px]">
      <div className="mx-auto grid max-w-[1150px] gap-10 md:grid-cols-[minmax(0,590px)_minmax(320px,430px)] md:items-center md:justify-between">
        <div>
          <p className="font-[var(--font-be-vietnam)] text-[9px] font-normal sm:text-[12px] uppercase tracking-[4.8px] text-white/85">
            WHAT WE DO
          </p>
          <h2 className="mt-[26px] font-[var(--font-be-vietnam)] text-[38px] font-medium lowercase leading-[1.02] tracking-[-1.4px] sm:text-[56px]">
            how it {" "}
            <span className="font-[var(--font-cormorant)] text-[1.12em] sm:text-[72px] font-normal timesFontFamily italic">
              works
            </span>
          </h2>
          <ul className="mt-[62px] grid gap-y-[40px] sm:grid-cols-2 gap-6">
            {workSteps.map((step, index) => (
              <li
                className="grid grid-cols-[22px_minmax(0,0.95fr)] gap-[13px] items-center justify-center font-[var(--font-be-vietnam)] text-[14px] sm:text-[18px] tracking-[1.4px] font-normal leading-[1.35]"
                key={step}
              >
                <span className="font-[var(--font-inter)] text-[12px] sm:text-[14px] tracking-[1.4px] font-normal leading-[1.35]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {step}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[490/510] min-h-[510px] max-w-[518px] w-full overflow-hidden rounded-[8px] bg-black/10">
          <Image
            src="/assets/how_it_works.jpg"
            alt="Team reviewing campaign performance"
            fill
            sizes="(min-width: 768px) 490px, 90vw"
            className="object-cover object-[center_50%]"
          />
        </div>
      </div>
    </section>
  );
}

function BrandWork() {
  return (
    <section className="bg-black px-6 py-[78px] text-white  lg:py-[86px]">
      <div className="mx-auto max-w-[1150px]">
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-[var(--font-be-vietnam)] text-[9px] sm:text-[12px] font-normal uppercase tracking-[4.8px] text-[#ff5500]">
              PROJECTS
            </p>
            <h2 className="mt-[24px] max-w-[470px] font-[var(--font-be-vietnam)] text-[38px] font-medium lowercase leading-[1.08] tracking-[-1.4px] sm:text-[56px]">
              see how we
              <br />
              <span className="font-[var(--font-cormorant)] text-[1.12em] sm:text-[72px] font-normal timesFontFamily italic">
                scale brands.
              </span>
            </h2>
            <p className="mt-[20px] font-[var(--font-inter)] text-[14px] sm:text-[18px] leading-[1.7] text-white">
              Explore how we&apos;ve helped brands grow through Meta Ads.
            </p>
          </div>
          <Link
            className="inline-flex h-[42px] w-[158px] items-center justify-center rounded-full border border-white/80 font-[var(--font-be-vietnam)] text-[12px] font-normal text-white transition hover:border-white hover:bg-white hover:text-black"
            href="/projects"
          >
            View all projects <span className="ml-[4px]">-&gt;</span>
          </Link>
        </div>

        {/* Cards */}
                <div className="mt-[40px] grid gap-[24px] md:grid-cols-2">
                  {relatedProjects.map((project) => (
                    <article
                      key={project.name}
                      className="rounded-[20px] border border-white p-[14px]"
                    >
                      <div className="relative aspect-[420/260] w-full overflow-hidden max-w-[534px] rounded-[12px] bg-[#111]">
                        <Image
                          src={project.image}
                          alt={`${project.name} marketing strategy project`}
                          fill
                          sizes="(min-width: 768px) 45vw, calc(100vw - 48px)"
                          className="object-cover"
                        />
                      </div>
        
                      <div className="px-[10px] pt-[24px] pb-[6px]">
                        {/* Title + year */}
                        <div className="flex items-baseline justify-between gap-3">
                          <h3 className="font-[var(--font-be-vietnam)] text-[22px] sm:text-[36px] font-normal leading-none tracking-[-0.72px]">
                            {project.name}
                          </h3>
                          <span className="shrink-0 font-[var(--font-inter)] text-[14px] text-white">
                            {project.year}
                          </span>
                        </div>
        
                        {/* Copy */}
                        <p className="mt-[14px] max-w-[420px] font-[var(--font-inter)] text-[14px] sm:text-[18px] leading-[28px] text-white">
                          {project.copy}
                        </p>
        
                        {/* Tags */}
                        <div className="mt-[20px] flex flex-wrap gap-[10px]">
                          {(project.tags ?? []).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white px-[14px] py-[7px] font-[var(--font-inter)] text-[12px] text-white/90"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  ))}
        
                  {/* Mobile-only view all link, shown below cards on small screens */}
                  <Link
                    href="/projects"
                    className="sm:hidden inline-flex w-fit items-center gap-2 rounded-full border border-white/30 px-5 py-3 font-[var(--font-inter)] text-[12px] text-white/85 transition-colors hover:border-white/60 hover:text-white"
                  >
                    View all projects
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-black px-6 pt-[70px] text-white pb-30">
      <div className="mx-auto max-w-[1150px] text-center">
        <p className="font-[var(--font-be-vietnam)] text-[10px] font-medium uppercase tracking-[4px] text-[#ff5500]">
           LET&apos;S SCALE
        </p>
        <h2 className="mt-8 font-[var(--font-be-vietnam)] text-[36px] font-medium leading-[1.08] tracking-[-1.5px] sm:text-[55px]">
          ready to scale
          <br />
          with{" "}
          <span className="font-[var(--font-cormorant)] text-[1.12em] font-extralight timesFontFamily italic text-[#ff5500]">
            meta ads?
          </span>
        </h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            className="inline-flex h-[42px] min-w-[190px] items-center justify-center rounded-full bg-[#ff5500] px-8 font-[var(--font-be-vietnam)] text-[12px] font-bold uppercase text-white transition hover:bg-[#ff6b1f]"
            href="/contact"
          >
            Book a Consultation
          </Link>
          {/* <Link className="font-[var(--font-be-vietnam)] text-[13px] font-medium text-white/80 transition hover:text-white border-white border rounded-full px-6 h-[48px] inline-flex items-center justify-center" href="#services">
            Book a Strategy Call
          </Link> */}
        </div>
      </div>
    </section>
  );
}

const googleAdsBrandPoints = [
  {
    number: "01",
    title: "No Clear Campaign Strategy",
    description:
      "Ads are launched without clear objectives, audience planning or a structured campaign approach.",
  },
  {
    number: "02",
    title: "Targeting the Wrong Audience",
    description:
      "Broad targeting wastes budget by reaching people who are unlikely to convert.",
  },
  {
    number: "03",
    title: "Creative That Doesn't Convert",
    description:
      "Ads fail to capture attention, communicate value or encourage action.",
  },
  {
    number: "04",
    title: "No Ongoing Optimisation",
    description:
      "Campaigns are left running without testing, refining or scaling what's working.",
  },
];

const googleAdsUssPoints = [
  {
    number: "01",
    title: "Strategy Before Spend",
    description:
      "Every campaign is built around your business goals, audience and measurable objectives.",
  },
  {
    number: "02",
    title: "Precision Audience Targeting",
    description:
      "We identify and target the audiences most likely to become customers.",
  },
  {
    number: "03",
    title: "Creative Built to Perform",
    description:
      "Scroll-stopping creatives designed to generate engagement, leads and sales.",
  },
  {
    number: "04",
    title: "Continuous Optimisation",
    description:
      "We analyse performance, test new ideas and optimise campaigns to maximise return on ad spend.",
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

        {/* Header Section */}
        {/* Heading */}
        <h2 className="lowercase text-white text-[32px] font-medium leading-[1.15] tracking-[-3%] sm:text-[56px] sm:leading-[70px] mb-16">
          How We Build High-Performing  <br />
          {" "}
          <span
            className="italic text-[#ff5500] font-normal text-[1.1em] tracking-[-3%] sm:text-[72px] sm:leading-[70px]"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            Meta Campaigns
          </span>
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center">
          {CARDS_DATA.map((card) => (
            <div
              key={card.id}
              style={{
                width: '1285.61px', // Scaled proportions fallback or driven via wrapper max-width
                maxWidth: '100%',
                height: '606.93px',
                backgroundImage: `url(${card.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              className="group relative rounded-[28px] overflow-hidden p-6 flex flex-col justify-between cursor-pointer transition-all duration-500 ease-out"
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
                  className="text-[22.64px] font-normal leading-[26.78px] tracking-[0%] text-white align-middle mb-3"
                  style={{ fontStyle: 'Regular' }}
                >
                  {card.title}
                </h3>

                {/* Description (Fades and slides in cleanly) */}
                <p
                  className="text-[15.5px] font-normal leading-[18.86px] tracking-[0%] text-white/90 align-middle opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 ease-out"
                  style={{ fontStyle: 'Regular' }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default function MetaAdsPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <Header />
      <Hero />
      {/* <WhyAdsFail /> */}
      <Numbers />
      {/* <Brands /> */}
      {/* <MetaSystem /> */}
      {/* <HowItWorks /> */}
      <WhyEmailFails
              heading={
                <h2 className="mx-auto max-w-[900px] text-center font-[var(--font-inter)] text-[40px] font-medium leading-[1] tracking-[-1.5px] sm:text-[56px]">
                  why most{" "}
                  <span
                    className="font-normal italic text-[60px] sm:text-[72px]"
                    style={{ fontFamily: "'Times New Roman', Times, serif" }}
                  >
                    meta ads
                  </span>{" "}
                  fails
                </h2>
              }
              subheading="Most brands don't have an email problem, they have a strategy problem."
              leftTitle="Most Brands"
              rightTitle="The USS Difference"
              leftPoints={googleAdsBrandPoints}
              rightPoints={googleAdsUssPoints}
            />
            <TargetRightPeople />
      <RevenueMethod />
      <BrandWork />
      <Testimonials />
      <Team />
      <GoodCompanyMap />
      <FinalCta />
      <Footer />
    </main>
  );
}
