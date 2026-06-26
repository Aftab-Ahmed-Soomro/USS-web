import Image from "next/image";
import Link from "next/link";
import { Brands } from "../components/Brands";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Numbers as NumbersSection } from "../components/Numbers";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";
import { LightConsultationForm } from "../components/ConsultationForm";
import { GoodCompanyMap } from "../components/GoodCompanyMap";

const inputClass =
  "mt-[6px] h-[29px] w-full rounded-[5px] border border-black/15 bg-white px-[9px] font-[var(--font-inter)] text-[9px] text-black outline-none placeholder:text-black/35 focus:border-[#ff5500]";

const failPoints = [
  "Bidding without strategy",
  "Poor keyword targeting",
  "Weak landing pages",
  "No conversion tracking",
  "Scaling too early",
];

const stats = [
  { value: "43.8M+", label: "Search Impressions" },
  { value: "6.2M+", label: "High-Intent Clicks" },
  { value: "287K+", label: "Qualified Leads" },
  { value: "4.3x", label: "Average ROAS" },
];

const services = [
  {
    title: "Search Ads",
    copy: "Structured for clear intent, measurable action and profitable campaign learning.",
  },
  {
    title: "Performance Max",
    copy: "Structured for clear intent, measurable action and profitable campaign learning.",
  },
  {
    title: "YouTube Ads",
    copy: "Structured for clear intent, measurable action and profitable campaign learning.",
  },
  {
    title: "Display Ads",
    copy: "Structured for clear intent, measurable action and profitable campaign learning.",
  },
];

const systemItems = [
  {
    title: "Intent-Based Targeting",
    copy: "We capture users actively searching for your product or service",
  },
  {
    title: "Data and Tracking",
    copy: "Every action is measured and optimised",
  },
  {
    title: "Conversion-Focused Structure",
    copy: "Campaigns are built around results, not clicks",
  },
  {
    title: "Scalable Optimisation",
    copy: "We scale what proves profitable",
  },
];

const projects = [
  {
    name: "Cinnamood",
    year: "2024",
    copy: "Launching a German bakery franchise into the UAE market.",
    image: "/assets/company/cinamood-card.jpg",
    tags: ["Web design & development", "Branding", "F&B"],
  },
  {
    name: "Yula Lounge",
    year: "2024",
    copy: "Transforming Yalseh into Yula – a modern Dubai beach club.",
    image: "/assets/company/yula-card.jpg",
    tags: ["Web design & development", "Hospitality"],
  },
];

const workWays = [
  {
    title: "Initial Consultation",
    copy: "A quick conversation to understand your business and highlight key opportunities.",
  },
  {
    title: "Strategy Session",
    copy: "A detailed deep dive with a clear, actionable roadmap tailored to your business.",
  },
  {
    title: "Ongoing Management",
    copy: "Full-service Meta Ads management focused on performance and growth.",
  },
  {
    title: "Growth Partnership",
    copy: "End-to-end strategy, execution and scaling across channels.",
  },
];


function Hero() {
  return (
    <section className="bg-[#ff5500] px-6 pb-[57px] pt-[45px] text-white sm:pb-[68px] sm:pt-[56px] lg:pb-[75px] lg:pt-[70px]">
      <div className="mx-auto grid max-w-[1150px] gap-9 lg:grid-cols-[minmax(0,560px)_377px] lg:items-center lg:justify-between">
        <div>
          <p className="font-[var(--font-be-vietnam)] text-[10px] font-bold uppercase tracking-[3.2px] text-white">
            Google Ads
          </p>
          <h1 className="mt-[34px] max-w-[545px] font-[var(--font-be-vietnam)] text-[37px] font-medium lowercase leading-[0.98] tracking-[-1.6px] sm:text-[50px] md:text-[58px] lg:text-[62px]">
            capture high
            <br />
            quality leads
            <br />
            with{" "}
            <span className="font-[var(--font-cormorant)] text-[1.13em] font-extralight timesFontFamily italic tracking-[-0.04em]">
              google ads
            </span>
          </h1>
          <p className="mt-[21px] max-w-[485px] font-[var(--font-inter)] text-[13px] leading-[1.75] text-white/80 sm:text-[15px]">
            Turn searches into sales with campaigns built to convert to generate high quality leads, not just clicks.
          </p>
          <Link
            className="mt-[24px] inline-flex h-[34px] min-w-[145px] items-center justify-center rounded-full bg-white px-6 font-[var(--font-be-vietnam)] text-[10.5px] font-bold text-black transition hover:bg-white/90"
            href="/contact"
          >
            Book a Consultation
          </Link>
        </div>
        <LightConsultationForm />
      </div>
    </section>
  );
}

function GoogleAdsVisual() {
  return (
    <div className="relative aspect-[393/267] w-full max-w-[393px] overflow-hidden rounded-[6px] bg-[#f1f1ef]">
      <Image
        src="/assets/google_ads.jpg"
        alt="Google Ads logo on a phone beside a keyboard"
        fill
        sizes="(min-width: 1024px) 393px, calc(100vw - 48px)"
        className="object-cover"
      />
    </div>
  );
}

function WhyAdsFail() {
  return (
    <section className="border-t border-[#ff5500] bg-white px-6 py-[67px] text-black lg:pb-[88px]">
      <div className="mx-auto max-w-[1150px]">
        <p className="font-[var(--font-be-vietnam)] text-[10px] font-bold uppercase tracking-[3px] text-[#ff5500]">
          Problem
        </p>

        <div className="mt-[28px] grid gap-9 lg:grid-cols-[393px_minmax(0,509px)] lg:items-start lg:justify-between">
          <div>
            <h2 className="font-[var(--font-be-vietnam)] text-[40px] font-medium lowercase leading-[1.2] tracking-[-1.4px] sm:text-[40px]">
              why most google
              <br />
              ads{" "}
              <span className="font-[var(--font-cormorant)] text-[1.14em] font-extralight timesFontFamily italic">
                campaigns fail
              </span>
            </h2>
            <div className="mt-[66px]">
              <GoogleAdsVisual />
            </div>
          </div>

          <div className="pt-[106px]">
            <p className="max-w-[420px] font-[var(--font-be-vietnam)] text-[16px] font-medium leading-[1.95] text-black">
              Most campaigns don&rsquo;t fail because of budget
              <br />
              they fail because of structure.
            </p>
            <div className="mt-[29px] grid gap-x-[17px] sm:grid-cols-2">
              {failPoints.map((point) => (
                <div
                  className="flex min-h-[55px] items-center gap-[13px] border-t border-[#d9d9d9] font-[var(--font-be-vietnam)] text-[12px] font-medium leading-[1.35] text-black last:border-b sm:[&:nth-last-child(2)]:border-b"
                  key={point}
                >
                  <span className="grid size-[21px] shrink-0 place-items-center rounded-full bg-[#ff5500] text-white">
                    <svg
                      aria-hidden="true"
                      className="size-[10px]"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      viewBox="0 0 16 16"
                    >
                      <path d="m3.5 8.2 2.7 2.7 6.3-6.8" />
                    </svg>
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <p className="mt-[28px] border-l-[4px] border-[#ff5500] pl-[7px] font-[var(--font-be-vietnam)] text-[15px] font-medium leading-[1.45] text-black">
              Google Ads is not about traffic it&rsquo;s is about intent and execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Numbers() {
  return <NumbersSection eyebrow="RESULTS" stats={stats} />;
}

function GoogleServices() {
  return (
    <section className="overflow-hidden bg-[#050505] px-6 pt-[39px] text-white">
      <div className="mx-auto grid max-w-[1150px] gap-10 lg:grid-cols-[350px_minmax(0,532px)] lg:items-start lg:justify-between">
        <div className="relative min-h-[485px]">
          <p className="font-[var(--font-be-vietnam)] text-[10px] font-bold uppercase tracking-[3px] text-[#ff5500]">
            Services
          </p>
          <h2 className="mt-[35px] font-[var(--font-be-vietnam)] text-[40px] font-medium lowercase leading-[1.05] tracking-[-1.4px] sm:text-[42px]">
            our{" "}
            <span className="font-[var(--font-cormorant)] text-[1.23em] font-extralight timesFontFamily italic">
              google ads
            </span>
            <br />
            services
          </h2>
          <div className="absolute -bottom-20  left-[-4px] hidden aspect-[366/398] w-[366px] lg:block">
            <Image
              src="/assets/meeral2.png"
              alt="Google Ads strategist"
              fill
              sizes="366px"
              className="object-contain object-bottom"
            />
          </div>
        </div>

        <div className="grid border-white/20 lg:mt-[110px] sm:grid-cols-2 sm:[&>article:nth-child(2n)]:border-l sm:[&>article:nth-child(n+3)]:border-t">
          {services.map((service, index) => (
            <article
              className={`min-h-[163px] border-white/20 px-[26px] py-[30px] ${
                index % 2 === 0 ? "sm:pl-[25px] sm:pr-[28px]" : "sm:pl-[25px] sm:pr-0"
              }`}
              key={service.title}
            >
              <h3 className="font-[var(--font-be-vietnam)] text-[24px] font-bold leading-tight tracking-[-0.7px]">
                {service.title}
              </h3>
              <p className="mt-[24px] max-w-[220px] font-[var(--font-inter)] text-[10px] leading-[1.85] text-white/82">
                {service.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GrowthIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-[24px] text-[#ff5500]"
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M3 15 9 9l4 4 7-7" />
      <path d="M15 6h5v5" />
    </svg>
  );
}

function GrowthSystem() {
  return (
    <section className="bg-[#f4f4f4] px-6 py-[62px] text-black lg:pb-[55px]">
      <div className="mx-auto max-w-[1150px]">
        <p className="font-[var(--font-be-vietnam)] text-[10px] font-bold uppercase tracking-[1.4px] text-[#ff5500]">
          System
        </p>
        <h2 className="mt-[38px] max-w-[660px] font-[var(--font-be-vietnam)] text-[38px] font-medium lowercase leading-[1.15] tracking-[-1.55px] sm:text-[42px]">
          our google ads system for
          <br />
          <span className="font-[var(--font-cormorant)] text-[1.15em] font-extralight timesFontFamily italic">
            consistent growth
          </span>
        </h2>
        <div className="mt-[45px] grid border-y border-[#dadada] sm:grid-cols-2 lg:grid-cols-4">
          {systemItems.map((item) => (
            <article
              className="min-h-[244px] border-[#dadada] px-[25px] py-[37px] sm:[&:nth-child(even)]:border-l lg:border-l lg:first:border-l-0"
              key={item.title}
            >
              <GrowthIcon />
              <h3 className="mt-[31px] max-w-[180px] font-[var(--font-be-vietnam)] text-[19px] font-bold leading-[1.28] tracking-[-0.45px]">
                {item.title}
              </h3>
              <p className="mt-[19px] max-w-[210px] font-[var(--font-inter)] text-[12px] leading-[1.65] text-black/58">
                {item.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section className="bg-black px-6 py-[70px] text-white lg:py-[88px]">
      <div className="mx-auto max-w-[1150px]">
        {/* Header */}
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-[var(--font-be-vietnam)] text-[10px] font-extralight uppercase tracking-[3px] text-[#ff5500]">
              Projects
            </p>
            <h2 className="mt-[18px] max-w-[520px] font-[var(--font-be-vietnam)] text-[31px] font-medium lowercase leading-[1.06] tracking-[-1.2px] sm:text-[46px]">
              see how we turn{" "}
              <br className="hidden sm:block" />
              search{" "}
              <span className="font-[var(--font-cormorant)] text-[1.12em] font-extralight timesFontFamily italic">
                into revenue
              </span>
            </h2>
            <p className="mt-[15px] max-w-[720px] font-[var(--font-inter)] text-[14px] leading-[1.75] text-white/82">
              Explore how we&apos;ve helped brands generate high-quality
              leads and scale through Google Ads.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex h-[40px] shrink-0 items-center gap-2 self-start rounded-full border border-white px-5 font-[var(--font-be-vietnam)] text-[11px] font-medium text-white/90 transition hover:border-white hover:text-white md:self-end"
          >
            View all projects
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Cards */}
        <div className="mt-[34px] grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group rounded-[20px] border border-white p-[14px] transition-colors hover:border-white/30"
            >
              <div className="relative aspect-[420/260] w-full overflow-hidden rounded-[12px] bg-[#171717]">
                <Image
                  src={project.image}
                  alt={`${project.name} Google Ads campaign`}
                  fill
                  sizes="(min-width: 768px) 45vw, calc(100vw - 48px)"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="px-[8px] pt-[20px] pb-[4px]">
                {/* Title + year */}
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-[var(--font-be-vietnam)] text-[19px] font-medium leading-none">
                    {project.name}
                  </h3>
                  <span className="shrink-0 font-[var(--font-inter)] text-[12px] text-white/50">
                    {project.year}
                  </span>
                </div>

                {/* Copy */}
                <p className="mt-[10px] max-w-[400px] font-[var(--font-inter)] text-[11.5px] leading-[1.65] text-white/62">
                  {project.copy}
                </p>

                {/* Tags */}
                <div className="mt-[14px] flex flex-wrap gap-2">
                  {(project.tags ?? []).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white px-3 py-1 font-[var(--font-inter)] text-[10px] text-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


function WorkTogether() {
  return (
    <section className="border-t border-black bg-white px-6 py-[66px] text-black lg:pb-[62px]">
      <div className="mx-auto max-w-[1150px]">
        <p className="font-[var(--font-be-vietnam)] text-[9px] font-bold uppercase tracking-[6px] text-[#ff5500]">
          Ways To Work With Us
        </p>
        <h2 className="mt-[31px] font-[var(--font-be-vietnam)] text-[39px] font-medium lowercase leading-none tracking-[-1.7px] sm:text-[42px]">
          a way to work{" "}
          <span className="font-[var(--font-cormorant)] text-[1.16em] font-extralight timesFontFamily italic">
            together.
          </span>
        </h2>
        <p className="mt-[24px] max-w-[680px] font-[var(--font-inter)] text-[14px] leading-[1.55] text-black/72">
          Whether you&rsquo;re just getting started or ready to scale, we have a way to work together.
        </p>
        <div className="mt-[49px] grid border border-[#d8d8d8] sm:grid-cols-2">
          {workWays.map((way, index) => (
            <article
              className={`min-h-[188px] px-[38px] py-[40px] ${
                index % 2 ? "sm:border-l sm:border-[#d8d8d8]" : ""
              } ${index > 1 ? "border-t border-[#d8d8d8]" : ""}`}
              key={way.title}
            >
              <div className="flex items-center gap-[10px] font-[var(--font-inter)] text-[9px] leading-none text-black/45">
                <span className="size-[6px] rounded-full bg-[#ff5500]" />
                <span>{index + 1}</span>
              </div>
              <h3 className="mt-[22px] font-[var(--font-be-vietnam)] text-[24px] font-bold leading-tight tracking-[-0.6px]">
                {way.title}
              </h3>
              <p className="mt-[12px] max-w-[370px] font-[var(--font-inter)] text-[15px] leading-[1.55] text-black/68">
                {way.copy}
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
    <section className="bg-black px-6 py-[62px] text-white  lg:py-[76px]">
      <div className="mx-auto max-w-[1150px] text-center">
        <p className="font-[var(--font-be-vietnam)] text-[10px] font-normal uppercase tracking-[3px] text-[#ff5500]">
          LET'S SCALE
        </p>
        <h2 className="mt-[18px] font-[var(--font-be-vietnam)] text-[32px] font-medium lowercase leading-[1.08] tracking-[-1.2px] sm:text-[46px]">
          ready to scale
          <br />
          with{" "}
          <span className="font-[var(--font-cormorant)] text-[1.12em] font-extralight timesFontFamily italic text-[#ff5500]">
            meta ads?
          </span>
        </h2>
        <div className="mt-[26px] flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            className="inline-flex h-[36px] min-w-[170px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[11px] font-bold text-white transition hover:bg-[#ff6b1f]"
            href="/contact"
          >
            Book a Consulation
          </Link>
          <Link
            className="inline-flex h-[36px] min-w-[170px] items-center justify-center rounded-full border border-white/30 px-7 font-[var(--font-be-vietnam)] text-[11px] font-bold text-white transition hover:border-white"
            href="/projects"
          >
            Book a Strategy Call
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function GoogleAdsPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <Header />
      <Hero />
      <WhyAdsFail />
      <Numbers />
      <GoogleServices />
      <GrowthSystem />
      <Brands />
      <CaseStudies />
      <Testimonials />
      <Team />
      <WorkTogether />
      <GoodCompanyMap />
      <Footer />
    </main>
  );
}
