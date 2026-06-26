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

const failPoints = [
  "Poor creative gets ignored",
  "Weak structure wastes budget",
  "No testing system means no scale",
  "Over reliance on targeting",
];

const stats = [
  { value: "72.4M+", label: "Impressions Delivered" },
  { value: "18.6M+", label: "Video Views" },
  { value: "643K+", label: "Customer Actions" },
  { value: "4.7x", label: "Average ROAS" },
];

const systemItems = [
  ["01", "Creative-First Strategy", "We focus on scroll-stopping creatives that convert."],
  ["02", "Full-Funnel Structure", "Building strong efficient funnel campaign"],
  ["03", "Testing and Optimisation", "Continuous testing to find and scale winners."],
  ["04", "Scalable Growth", "We increase spend only when performance is proven."],
];

const workSteps = [
  "Strategy and account setup",
  "Creative direction and production",
  "Campaign management",
  "Conversion tracking and pixel setup",
  "Landing page optimisation",
  "Scaling and performance optimisation",
];

const projects = [
  {
    name: "Cinnamood",
    image: "/assets/company/cinamood-card.jpg",
    copy: "Launching a German bakery franchise into the UAE market.",
    tags: ["Web design & development", "Branding", "F&B"],
    year: "2024",
  },
  {
    name: "Yula Lounge",
    image: "/assets/company/yula-card.jpg",
    copy: "Transforming Yalseh into Yula - a modern Dubai beach club.",
    tags: ["Web design & development", "Hospitality"],
    year: "2024",
  },
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-black px-6 pb-[58px] pt-[42px] text-white sm:pb-[76px] sm:pt-[68px] lg:pt-[56px]">
      <div className="pointer-events-none absolute left-[-110px] top-[70px] h-[280px] w-[330px] rounded-full bg-[#6b2409] opacity-35 blur-[95px]" />
      <div className="relative mx-auto grid max-w-[1150px] gap-9 lg:grid-cols-[minmax(0,585px)_430px] lg:items-center lg:justify-between">
        <div>
          <h1 className="max-w-[610px] font-[var(--font-be-vietnam)] text-[34px] font-medium lowercase leading-[1.03] tracking-[-1.4px] sm:text-[48px] lg:text-[54px]">
            scale your brand
            <br />
            with meta ads, don&apos;t
            <br />
            just{" "}
            <span className="font-[var(--font-cormorant)] text-[1.1em] font-extralight timesFontFamily italic tracking-[-0.04em] text-[#ff5500]">
              spending more.
            </span>
          </h1>
          <p className="mt-[25px] max-w-[520px] font-[var(--font-inter)] text-[13px] leading-[1.75] text-white/74 sm:text-[14.5px]">
            We turn Facebook and Instagram into consistent revenue engines using
paid social first creatives and data-driven strategies. Trusted by brands
across the UAE and globally.
          </p>

          <div className="mt-[28px] grid max-w-[420px] grid-cols-2 gap-7 border-b border-white/12 pb-[22px]">
            <div>
              <p className="font-[var(--font-cormorant)] text-[28px] font-extralight timesFontFamily italic leading-none text-[#ff5500]">
                $100M+
              </p>
              <p className="mt-2 font-[var(--font-inter)] text-[10px] uppercase tracking-[1.6px] text-white/62">
                in ad spend managed
              </p>
            </div>
            <div>
              <p className="font-[var(--font-cormorant)] text-[28px] font-extralight timesFontFamily italic leading-none text-[#ff5500]">
                5x
              </p>
              <p className="mt-2 font-[var(--font-inter)] text-[10px] uppercase tracking-[1.6px] text-white/62">
                average ROAS acheived
              </p>
            </div>
          </div>

          <Link
            className="mt-[24px] inline-flex h-[36px] min-w-[142px] items-center justify-center rounded-full bg-[#ff5500] px-6 font-[var(--font-be-vietnam)] text-[11px] font-bold text-white transition hover:bg-[#ff6b1f]"
            href="/contact"
          >
            Book a Call
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
          <p className="font-[var(--font-be-vietnam)] text-[10px] font-medium uppercase tracking-[7px] text-[#ff5500]">
            THE PROBLEM
          </p>
          <h2 className="mt-[38px] font-[var(--font-be-vietnam)] text-[38px] font-medium lowercase leading-[1.08] tracking-[-1.4px] sm:text-[50px]">
            why most
            <br />
            <span className="font-[var(--font-cormorant)] text-[1.12em] font-extralight timesFontFamily italic">
              meta ads
            </span>{" "}
            fails
          </h2>
          <p className="mt-[28px] max-w-[390px] font-[var(--font-inter)] text-[15px] leading-[1.45] text-black/65">
            Most brands don&apos;t have a Meta Ads problem
            <br />
            they have a strategy problem.
          </p>
          <ul className="mt-[24px] max-w-[548px] border-b border-black/10">
            {failPoints.map((point) => (
              <li
                className="flex items-center gap-[18px] border-t border-black/10 py-[15px] font-[var(--font-inter)] text-[15px] text-black/78"
                key={point}
              >
                <span className="size-[13px] shrink-0 rounded-full bg-[#ff5500]" />
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-[24px] font-[var(--font-be-vietnam)] text-[14px] font-extrabold uppercase leading-[1.55]">
            <p>META PERFORMANCE IS DRIVEN BY</p>
            <p className="text-[#ff5500]">CREATIVE AND DATA</p>
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
        <p className="font-[var(--font-be-vietnam)] text-[9px] font-medium uppercase tracking-[5px] text-[#ff5500]">
          OUR SYSTEM
        </p>
        <h2 className="mt-[30px] max-w-[590px] font-[var(--font-be-vietnam)] text-[38px] font-medium lowercase leading-[1.06] tracking-[-1.4px] sm:text-[50px]">
          our meta ads system for
          <br />
          <span className="font-[var(--font-cormorant)] text-[1.12em] font-extralight timesFontFamily italic">
            scalable growth.
          </span>
        </h2>
        <p className="mt-[22px] max-w-[560px] font-[var(--font-inter)] text-[13px] leading-[1.75] text-white/82">
          We don&apos;t just run ads, we build systems designed to scale.
        </p>

        <div className="mt-[62px] grid border border-white/16 md:grid-cols-2 md:[&>*:nth-child(2n)]:border-l md:[&>*:nth-child(n+3)]:border-t">
          {systemItems.map(([number, title, copy]) => (
            <article className="min-h-[196px] border-[0.5px] border-white/16 px-[38px] py-[42px] first:border-t-0 md:border-t-0 md:px-[48px]" key={number}>
              <div className="grid items-center gap-[26px] sm:grid-cols-[58px_minmax(0,1fr)]">
                <p className="font-[var(--font-cormorant)] text-[42px] font-extralight timesFontFamily italic leading-none text-[#ff5500]">
                  {number}
                </p>
                <span className="hidden h-px bg-white/12 sm:block" />
              </div>
              <h3 className="mt-[28px] font-[var(--font-be-vietnam)] text-[22px] font-medium leading-tight tracking-[0.2px]">
                {title}
              </h3>
              <p className="mt-[14px] max-w-[360px] font-[var(--font-cormorant)] text-[13px] font-medium leading-[1.45] text-white/80">
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
      <div className="mx-auto grid max-w-[1150px] gap-10 md:grid-cols-[minmax(0,550px)_minmax(320px,430px)] md:items-center md:justify-between">
        <div>
          <p className="font-[var(--font-be-vietnam)] text-[9px] font-medium uppercase tracking-[7px] text-white/85">
            WHAT WE DO
          </p>
          <h2 className="mt-[26px] font-[var(--font-be-vietnam)] text-[38px] font-medium lowercase leading-[1.02] tracking-[-1.4px] sm:text-[50px]">
            how it
            <br />
            <span className="font-[var(--font-cormorant)] text-[1.12em] font-extralight timesFontFamily italic">
              works
            </span>
          </h2>
          <ul className="mt-[72px] grid gap-y-[40px] sm:grid-cols-2">
            {workSteps.map((step, index) => (
              <li
                className="grid grid-cols-[22px_minmax(0,1fr)] gap-[13px] font-[var(--font-be-vietnam)] text-[12px] font-normal leading-[1.35]"
                key={step}
              >
                <span className="font-[var(--font-inter)] text-[9px] font-bold leading-[1.8] tracking-[2px] text-white/90">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {step}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[490/510] w-full overflow-hidden rounded-[8px] bg-black/10">
          <Image
            src="/assets/how_it_works.jpg"
            alt="Team reviewing campaign performance"
            fill
            sizes="(min-width: 768px) 490px, 90vw"
            className="object-cover object-[center_42%]"
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
            <p className="font-[var(--font-be-vietnam)] text-[9px] font-medium uppercase tracking-[6px] text-[#ff5500]">
              PROJECTS
            </p>
            <h2 className="mt-[34px] max-w-[470px] font-[var(--font-be-vietnam)] text-[38px] font-medium lowercase leading-[1.08] tracking-[-1.4px] sm:text-[50px]">
              see how we
              <br />
              <span className="font-[var(--font-cormorant)] text-[1.12em] font-extralight timesFontFamily italic">
                scale brands.
              </span>
            </h2>
            <p className="mt-[26px] font-[var(--font-inter)] text-[14px] leading-[1.7] text-white/86">
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

        <div className="mt-[52px] grid gap-[24px] md:grid-cols-2">
          {projects.map((project) => (
            <article className="group rounded-[18px] border border-white/80 p-[25px] pb-[22px]" key={project.name}>
              <div className="relative aspect-[470/292] overflow-hidden rounded-[12px] bg-[#171717]">
                <Image
                  src={project.image}
                  alt={`${project.name} campaign`}
                  fill
                  sizes="(min-width: 768px) 470px, 90vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-[23px] flex items-start justify-between gap-5">
                <div>
                  <h3 className="font-[var(--font-be-vietnam)] text-[28px] font-medium leading-none tracking-[-0.8px]">
                    {project.name}
                  </h3>
                  <p className="mt-[12px] max-w-[360px] font-[var(--font-be-vietnam)] text-[14px] font-normal leading-[1.45] text-white/92">
                    {project.copy}
                  </p>
                </div>
                <span className="mt-[12px] shrink-0 font-[var(--font-inter)] text-[10px] text-white/55">
                  {project.year}
                </span>
              </div>
              <div className="mt-[13px] flex flex-wrap gap-[6px]">
                {project.tags.map((tag) => (
                  <span
                    className="rounded-full border border-white/55 px-[10px] py-[4px] font-[var(--font-inter)] text-[8px] text-white/72"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
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

export default function MetaAdsPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <Header />
      <Hero />
      <WhyAdsFail />
      <Numbers />
      <Brands />
      <MetaSystem />
      <HowItWorks />
      <BrandWork />
      <Testimonials />
      <Team />
      <GoodCompanyMap />
      <FinalCta />
      <Footer />
    </main>
  );
}
