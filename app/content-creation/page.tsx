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
import { ContentCreationServices } from "../components/ContentCreationServices";

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
    <section className="relative overflow-hidden bg-[#ff5500] px-4 min-[375px]:px-6 pb-[40px] min-[375px]:pb-[58px] pt-[40px] min-[375px]:pt-[56px] text-white sm:pb-[72px] sm:pt-[78px]">
      <div className="mx-auto grid max-w-[1150px] gap-[40px] sm:gap-10 lg:grid-cols-[minmax(0,660px)_430px] lg:items-center lg:justify-between">
        <Stagger staggerDelay={0.12}>
          <StaggerItem>
            <p className="font-[var(--font-be-vietnam)] text-[10px] font-normal sm:text-[14px] uppercase tracking-[0.5px] text-white">
              Content Creation
            </p>
          </StaggerItem>
          <StaggerItem>
            <h1 className="mt-[35px] sm:mt-[24px] max-w-[700px] font-[var(--font-be-vietnam)] text-[32px] min-[375px]:text-[38px] font-bold lowercase leading-[0.5] sm:leading-[100%] tracking-[-1px] sm:tracking-[-3px] sm:text-[58px] text-white">
              content that works
              <br className="sm:hidden" /> {/* Adding hidden br if needed? No, I will not add new br */}
              <br />
              not just{" "}
              <span className="font-[var(--font-cormorant)] text-[1.12em] leading-[1.1] sm:leading-none sm:text-[72px] lowercase font-normal timesFontFamily italic text-white tracking-[-1px] sm:tracking-[-2.8px]">
                looks good
              </span>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-[24px] min-[375px]:mt-[30px] sm:mt-[40px] max-w-[530px] font-[var(--font-inter)] text-[14px] leading-[1.6] sm:leading-[32px] text-white/90 sm:text-[18px]">
              We create high quality photo and video content designed to capture attention, reflect your brand and support your marketing across every platform.
            </p>
          </StaggerItem>
          <StaggerItem>
            <Link
              className="mt-[24px] sm:mt-[30px] inline-flex h-[46px] sm:h-[38px] min-w-[178px] items-center justify-center rounded-full bg-white px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-black transition uppercase hover:bg-[#ff6b1f]"
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
    <section className="bg-[#050505] px-4 min-[375px]:px-6 pt-[40px] sm:pt-[58px] pb-[40px] sm:pb-[56px] text-white">
      <div className="mx-auto text-center">
        <Stagger staggerDelay={0.12}>
          <StaggerItem>
            <h2 className="font-[var(--font-be-vietnam)] text-[28px] min-[375px]:text-[32px] sm:text-[56px] font-medium lowercase leading-[1.1] sm:leading-tight tracking-[-4%]">
              take a look at our{" "}
              <span className="font-[var(--font-cormorant)] text-[1.15em] sm:text-[72px] font-normal tracking-[-2%] sm:tracking-[-4%] timesFontFamily italic">
                creative world
              </span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="mx-auto mt-[12px] sm:mt-[9px] max-w-[600px] font-[var(--font-inter)] text-[13px] sm:text-[24px] leading-[1.5] sm:leading-[1.7] text-[#FFFFFFB2] uppercase">
              See how we brought this campaign to life.
            </p>
          </StaggerItem>
        </Stagger>
        <FadeUp delay={0.3}>
          <div className="relative mx-auto mt-[24px] sm:mt-[38px] aspect-[1040/515] w-full overflow-hidden rounded-[8px] sm:rounded-[4px] shadow-[0_0_42px_rgba(255,255,255,0)]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover object-center"
              preload="auto"
            >
              <source src="https://emmanuelcolewilliams.com/uss-assets/USS Main Website Showreel.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/14" />
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_20px_10px_rgba(0,0,0,0.92)] min-[480px]:shadow-[inset_0_0_40px_20px_rgba(0,0,0,0.92)] sm:shadow-[inset_0_0_92px_58px_rgba(0,0,0,0.92)]" />
          </div>
        </FadeUp>
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
    <section className="bg-black px-4 min-[375px]:px-6 pt-[50px] sm:pt-[70px] text-white pb-30">
      <Stagger staggerDelay={0.12} className="mx-auto max-w-[1150px] text-center">
        <StaggerItem>
          <p className="font-[var(--font-be-vietnam)] text-[10px] font-medium uppercase tracking-[4px] text-[#ff5500]">
             LET&apos;S CREATE
          </p>
        </StaggerItem>
        <StaggerItem>
          <h2 className="mt-[24px] sm:mt-8 font-[var(--font-be-vietnam)] text-[32px] min-[375px]:text-[36px] font-medium leading-[1.08] tracking-[-1.5px] sm:text-[55px]">
            create content
            <br />
            that actually{" "}
            <span className="font-[var(--font-cormorant)] text-[1.12em] leading-[1.1] sm:leading-none font-extralight timesFontFamily italic text-[#ff5500]">
              performs
            </span>
          </h2>
        </StaggerItem>
        <StaggerItem>
          <div className="mt-[30px] sm:mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              className="inline-flex h-[46px] sm:h-[42px] min-w-[190px] items-center justify-center rounded-full bg-[#ff5500] px-8 font-[var(--font-be-vietnam)] text-[12px] font-bold uppercase text-white transition hover:bg-[#ff6b1f]"
              href="/contact"
            >
              Book a Consultation
            </Link>
          </div>
        </StaggerItem>
      </Stagger>
    </section>
  );
}

const googleAdsBrandPoints = [
  {
    number: "01",
    title: "Send and Forget",
    description:
      "Emails are only sent when there's a promotion or announcement.",
  },
  {
    number: "02",
    title: "Every Subscriber Looks the Same",
    description:
      "The same message is sent to everyone, regardless of interests or behavior.",
  },
  {
    number: "03",
    title: "No Long-Term Customer Journey",
    description:
      "There's no system to welcome, nurture, or retain customers after they sign up.",
  },
  {
    number: "04",
    title: "No Clear Performance Tracking",
    description:
      "Little reporting or optimization means opportunities are missed.",
  },
];

const googleAdsUssPoints = [
  {
    number: "01",
    title: "Always-On Email Strategy",
    description:
      "We create an email calendar that keeps your brand consistently in front of customers.",
  },
  {
    number: "02",
    title: "Personalized Customer Experiences",
    description:
      "Campaigns are tailored to different audiences using segmentation and customer behavior.",
  },
  {
    number: "03",
    title: "Automated Customer Journeys",
    description:
      "Welcome flows, abandoned carts, post-purchase emails and retention campaigns work in the background.",
  },
  {
    number: "04",
    title: "Continuous Performance Optimization",
    description:
      "Every campaign is measured, refined and improved using real performance data.",
  },
];

// Card Data Structure
const CARDS_DATA = [
  {
    id: '01',
    title: 'Discovery & Planning',
    description: 'Understanding your goals, audience and creative direction.',
    bgImage: '/assets/method1.png', // Replace with your image src
  },
  {
    id: '02',
    title: 'Creative Direction',
    description: 'Crafting unique visual styles to elevate your brand story.',
    bgImage: '/assets/method2.png', // Replace with your image src
  },
  {
    id: '03',
    title: 'Production',
    description: 'Bringing ideas to life with high quality video and photos.',
    bgImage: '/assets/method3.png', // Replace with your image src
  },
  {
    id: '04',
    title: 'Editing & Delivery',
    description: 'Polishing the footage into final assets ready for release.',
    bgImage: '/assets/method4.png', // Replace with your image src
  },
];

const relatedProjects = [
  {
    slug: "blank-dxb",
    name: "Blank DXB",
    image: "/assets/dxb.jpg",
    copy: "With a strong Meta Ads execution we focused on Paid Media during Blank DXB launch. We were able to target demand on a granular level making budget efficiency higher.",
    tags: ["Paid Media", "Meta Ads Targeting", "Lead Generation"],
    year: "2024",
    imageClassName: "object-cover object-[50%_55%]",
  },
  {
    slug: "supperclub",
    name: "SupperClub",
    image: "/assets/club.jpg",
    copy: "We increased SupperClub membership using Meta Ads to drive members using creative assets and location targeting.",
    tags: ["Membership Increase", "Hospitality"],
    year: "2024",
    imageClassName: "object-cover object-[50%_65%]",
  },
];

function RelatedProjects() {
  return (
    <section className="bg-[#080808] px-4 min-[375px]:px-6 py-[40px] sm:py-[56px] text-white">
      <div className="mx-auto max-w-[1150px]">
        {/* Header */}
        <div className="flex items-center justify-between gap-6">
          <Stagger staggerDelay={0.12}>
            <StaggerItem>
              <h2 className="font-[var(--font-be-vietnam)] text-[32px] sm:text-[56px] font-medium lowercase leading-none tracking-[-0.96px]">
                related{" "}
                <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] font-normal timesFontFamily italic tracking-[-0.96px]">
                  projects
                </span>
              </h2>
            </StaggerItem>
          </Stagger>

          <FadeRight delay={0.3}>
            <Link
              href="/projects"
              className="hidden sm:inline-flex shrink-0 items-center gap-2 rounded-full border border-white px-5 py-3 font-[var(--font-inter)] text-[12px] text-white sm:text-[15px]"
            >
              View all projects
              <img src="/assets/rightArrowMed.png" className="w-4 h-4" alt="" />
            </Link>
          </FadeRight>
        </div>

        {/* Cards */}
        <div className="mt-[24px] sm:mt-[40px] grid gap-[16px] sm:gap-[24px] md:grid-cols-2">
          {relatedProjects.map((project, i) => (
            <FadeUp key={project.name} delay={0.15 + i * 0.15}>
              <Link
                href={`/projects/${project.slug}`}
                className="block rounded-[20px] border border-white p-[12px] sm:p-[14px] transition-colors duration-300 hover:border-[#ff5500] group"
              >
                <div className="relative aspect-[420/260] w-full overflow-hidden max-w-[534px] rounded-[12px] bg-[#111]">
                  <Image
                    src={project.image}
                    alt={`${project.name} marketing strategy project`}
                    fill
                    sizes="(min-width: 768px) 45vw, calc(100vw - 48px)"
                    className={`${project.imageClassName || 'object-cover'} transition-transform duration-700 group-hover:scale-105`}
                  />
                </div>

                <div className="px-[6px] sm:px-[10px] pt-[20px] sm:pt-[24px] pb-[6px]">
                  {/* Title + year */}
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-[var(--font-be-vietnam)] text-[24px] min-[375px]:text-[28px] sm:text-[36px] font-normal leading-[1.1] sm:leading-none tracking-[-0.72px] group-hover:text-[#ff5500] transition-colors duration-300">
                      {project.name}
                    </h3>
                    <span className="shrink-0 font-[var(--font-inter)] text-[13px] sm:text-[14px] text-white">
                      {project.year}
                    </span>
                  </div>

                  {/* Copy */}
                  <p className="mt-[12px] sm:mt-[14px] max-w-[550px] font-[var(--font-inter)] text-[14px] sm:text-[18px] leading-[1.6] sm:leading-[28px] text-white/90 sm:text-white">
                    {project.copy}
                  </p>

                  {/* Tags */}
                  <div className="mt-[16px] sm:mt-[20px] flex flex-wrap gap-[8px] sm:gap-[10px]">
                    {(project.tags ?? []).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white px-[12px] py-[6px] sm:px-[14px] sm:py-[7px] font-[var(--font-inter)] text-[11px] sm:text-[12px] text-white/90 group-hover:border-[#ff5500]/50 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </FadeUp>
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

function RevenueMethod() {
  return (
    <div className="w-full bg-black text-white py-[50px] sm:py-20 mt-[32px] sm:mt-16 px-4 min-[375px]:px-6 min-h-screen flex flex-col justify-center items-center font-sans">
      <div className="max-w-[1150px] w-full">

        <Stagger staggerDelay={0.12}>
          <StaggerItem>
            <h2 className="lowercase text-white text-[28px] min-[375px]:text-[32px] font-medium leading-[1.15] tracking-[-3%] sm:text-[56px] sm:leading-[70px] mb-[40px] sm:mb-16">
              our content creation 
              {" "}
              <span
                className="italic text-[#ff5500] font-normal text-[36px] sm:text-[72px] leading-[1.1] sm:leading-[70px] tracking-[-3%]"
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
              >
                process
              </span>
            </h2>
          </StaggerItem>
        </Stagger>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] sm:gap-6 justify-center items-center">
          {CARDS_DATA.map((card, i) => (
            <FadeUp key={card.id} delay={0.1 + i * 0.1}>
              <div
                style={{
                  backgroundImage: `url(${card.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                className="group relative rounded-[28px] overflow-hidden p-[20px] sm:p-2 flex flex-col justify-between cursor-pointer transition-all duration-500 ease-out w-full h-[360px] sm:h-[606.93px]"
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
                    className="text-[18px] sm:text-[22.64px] font-normal leading-[1.3] sm:leading-[26.78px] tracking-[0%] text-white align-middle mb-[8px] sm:mb-3 min-h-[48px] sm:min-h-[60px]"
                    style={{ fontStyle: 'Regular' }}
                  >
                    {card.title}
                  </h3>

                  {/* Description (Fades and slides in cleanly) */}
                  <p
                    className="text-[14px] sm:text-[15.5px] font-normal leading-[1.4] sm:leading-[18.86px] tracking-[0%] text-white/90 align-middle opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 ease-out min-h-[80px] sm:min-h-[120px]"
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
      <Brands />
      {/* <Metrics /> */}
      <FadeUp delay={0.2}>
        <WhyEmailFails
          hideBadge={false}
          heading={
            <h2 className="mx-auto max-w-[900px] text-center font-[var(--font-inter)] text-[40px] font-medium leading-[1] tracking-[-1.5px] sm:text-[56px]">
              why most{" "}
              <span
                className="font-normal italic text-[60px] sm:text-[72px]"
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
              >
                content assets
              </span>{" "}
              fails
            </h2>
          }
          subheading="Most brands don't have an email problem, they have a strategy problem."
          leftTitle="Most Brands"
          rightTitle="The USS Difference"
          leftPoints={googleAdsBrandPoints}
          rightPoints={googleAdsUssPoints}
          centerLogo="/assets/camera.jpg"
          logoClassName="w-[80px] lg:w-[110px]"
        />
      </FadeUp>
        <ContentCreationServices />
      <FadeUp delay={0.2}>
        <div className="mt-[-10px] sm:mt-[-80px]">
          <EmailMarketingQuote first={"your social media is your"} second={"digital window"} third={"shop front"} />
        </div>
      </FadeUp>
      <FadeUp delay={0.2}>
        <ContentCreationGrid />
      </FadeUp>
      <RevenueMethod />
      <RelatedProjects />
      <FadeUp delay={0.2}>
        <Testimonials />
      </FadeUp>
      <FadeUp delay={0.2}>
        <Team />
      </FadeUp>
      <FadeUp delay={0.2}>
        <GoodCompanyMap />
      </FadeUp>
      <FinalCta />
      <div className="mt-[-120px]">
      
            <Footer />
            </div>
    </main>
  );
}
