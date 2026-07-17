import Image from "next/image";
import Link from "next/link";
import { Brands } from "../components/Brands";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Numbers } from "../components/Numbers";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";
import { ConsultationForm } from "../components/ConsultationForm";
import { GoodCompanyMap } from "../components/GoodCompanyMap";
import Stagger from "../components/Stagger";
import StaggerItem from "../components/Staggeritem";
import { WhyEmailFails } from "../components/WhyEmailFails";
import { BlackFridayOpportunity } from "../components/BlackFridayOpportunity";
import { OpportunitySection } from "../components/OpportunitySection";
import { WhatWeDoSection } from "../components/WhatWeDoSection";
import { SixStepSystem } from "../components/SixStepSystem";
import { TishWondersProfile } from "../components/TishWondersProfile";
import { SadiaPsychologyProfile } from "../components/SadiaPsychologyProfile";
import { ProjectOverview } from "../components/ProjectOverview";
import { TalentHero } from "../components/TalentHero";

type Bullet =
  | string
  | {
    label: string;
    detail: string;
  };

type StrategySection = {
  eyebrow: string;
  title: {
    before?: string;
    italic: string;
    after?: string;
  };
  copy: string;
  bullets: Bullet[];
  image: string;
  imageAlt: string;
  imageSide: "left" | "right";
  theme: "dark" | "light";
};

const strategySections: StrategySection[] = [
  {
    eyebrow: "WHY MOST MARKETING LACKS DIRECTION",
    title: {
      before: "the",
      italic: "problem",
    },
    copy: "Are you are running marketing but without a clear strategy? Without a strategy, marketing becomes a waste of time and budget.",
    bullets: [
      "Channels not aligned",
      "No clear positioning or messaging",
      "Inconsistent execution",
      "Budget spread across the wrong areas",
      "No clear path to scale",
    ],
    image: "/assets/problem1.png",
    imageAlt: "Marketing team discussing strategy in a meeting",
    imageSide: "right",
    theme: "dark",
  },
  {
    eyebrow: "OUR APPROACH TO MARKETING STRATEGY",
    title: {
      before: "our",
      italic: "system",
    },
    copy: "We create structured strategies designed to connect all parts of your marketing.",
    bullets: [
      {
        label: "Market and Audience Understanding",
        detail: "We analyse your audience, competitors and positioning",
      },
      {
        label: "Channel and Funnel Strategy",
        detail: "We define where and how to reach your audience.",
      },
      {
        label: "Messaging and Positioning",
        detail: "Clear, consistent messaging aligned with your brand.",
      },
      {
        label: "Scalable Growth Plan",
        detail: "A roadmap designed for long-term growth.",
      },
    ],
    image: "/assets/problem22.jpg",
    imageAlt: "Creative team reviewing marketing work together",
    imageSide: "left",
    theme: "light",
  },
  {
    eyebrow: "what we deliver",
    title: {
      italic: "services",
    },
    copy: "Every strategy is tailored to your business, but typically includes:",
    bullets: [
      "Marketing Strategy Roadmap",
      "Audience and Competitor Insights",
      "Channel Recommendations",
      "Campaign Direction",
      "Messaging and Positioning",
      "Clear Action Plan",
    ],
    image: "/assets/problem3.jpg",
    imageAlt: "Strategist using a laptop",
    imageSide: "right",
    theme: "dark",
  },
  {
    eyebrow: "OUR STRATEGY FRAMEWORK",
    title: {
      italic: "process",
    },
    copy: "A clear, four-step framework that turns insight into a strategy ready to execute.",
    bullets: [
      "Step 1: Discovery and Analysis",
      "Step 2: Research and Insights",
      "Step 3: Strategy Development",
      "Step 4: Implementation Roadmap",
    ],
    image: "/assets/problem4.jpg",
    imageAlt: "Creative strategist framing an idea with his hands",
    imageSide: "left",
    theme: "light",
  },
  {
    eyebrow: "WAYS TO WORK WITH US",
    title: {
      italic: "engagements",
    },
    copy: "Whether you need clarity or a full growth plan, we have a way to work together.",
    bullets: [
      {
        label: "Initial Consultation",
        detail: "A short call to understand your business and challenges.",
      },
      {
        label: "Strategy Session",
        detail: "A detailed deep dive with a clear, actionable roadmap.",
      },
      {
        label: "Full Strategy Development",
        detail: "End-to-end marketing strategy tailored to your business.",
      },
      {
        label: "Growth Partnership",
        detail: "Ongoing strategy, execution and scaling.",
      },
    ],
    image: "/assets/problem5.jpg",
    imageAlt: "Strategist smiling during a phone call",
    imageSide: "right",
    theme: "dark",
  },
];

const strategyStats = [
  { value: "5x", label: "ROAS Achieved" },
  { value: "55M", label: "AED Generated in Revenue" },
  { value: "500K", label: "Leads Delivered" },
  { value: "100+", label: "Brands Worldwide" },
];

const relatedProjects = [
  {
    name: "Cinnamood",
    year: "2024",
    copy: "Launching a German bakery franchise into the UAE market.",
    image: "/assets/projectsPagePics/cinamood.jpg",
    tags: ["Web design & development", "Branding", "F&B"],
  },
  {
    name: "Yula Lounge",
    year: "2024",
    copy: "Transforming Yalseh into Yula, a modern Dubai beach club.",
    image: "/assets/yula2.jpg",
    tags: ["Web design & development", "Hospitality"],
  },
];

function SectionTitle({ title }: { title: StrategySection["title"] }) {
  return (
    <h2 className="mt-[28px] flex flex-wrap items-baseline gap-x-[10px] font-[var(--font-be-vietnam)] text-[42px] font-medium lowercase leading-[0.92] tracking-[-3.2px] sm:text-[56px]">
      {title.before ? <span>{title.before}</span> : null}
      <span className="font-[var(--font-cormorant)] text-[1.04em] sm:text-[72px] font-normal timesFontFamily italic tracking-[-3.2px]">
        {title.italic}
      </span>
      {title.after ? <span>{title.after}</span> : null}
    </h2>
  );
}



function BulletList({
  bullets,
  isLight,
}: {
  bullets: Bullet[];
  isLight: boolean;
}) {
  return (
    <ul className="mt-[31px] max-w-[520px] space-y-[18px]">
      {bullets.map((bullet) => {
        const key = typeof bullet === "string" ? bullet : bullet.label;

        return (
          <li
            className={`flex items-start gap-[13px] font-[var(--font-inter)] text-[12px] font-bold sm:text-[16px] leading-[1.55] ${isLight ? "text-black/58" : "text-white/90"
              }`}
            key={key}
          >
            <span className="mt-[10px] size-[5px] shrink-0 rounded-full bg-[#ff5500]" />
            <span>
              {typeof bullet === "string" ? (
                <strong className={`${isLight ? "text-[#14110D]" : "text-white"} font-bold`}>{bullet}</strong>
              ) : (
                <>
                  <strong
                    className={` ${isLight ? "text-black" : "text-white"} font-bold`}
                  >
                    {bullet.label}:
                  </strong>{" "}
                  <span
                    className={`tracking-[-0.16px] font-normal text-[14px] ${isLight ? "text-[#58554F]" : "text-white"} font-bold`}
                  > {bullet.detail}</span>
                </>
              )}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function StrategyPanel({ section }: { section: StrategySection }) {
  const isLight = section.theme === "light";
  // For imageSide=="right": text left, image right
  // Text panel inner content aligns to max-w-[1150px] mx-auto via padding-left
  const textPanel = (
    <div
      className={`flex min-h-[440px] flex-col justify-center py-[72px] lg:min-h-[590px] ${
        isLight ? "bg-[#f5f4f1] text-black" : "bg-[#050505] text-white"
      }`}
    >
      {/* Inner wrapper: aligns content to the right edge of the max-w-[1150px] container */}
      <div
        className={`mx-auto w-full max-w-[575px] px-6 ${
          section.imageSide === "right" ? "lg:ml-auto lg:pr-12" : "lg:mr-auto lg:pl-12"
        }`}
      >
        <p
          className={`font-[var(--font-be-vietnam)] text-[8px] sm:text-[11.2px] font-normal uppercase tracking-[2.02px] ${
            isLight ? "text-[#58554F]" : "text-[#FF5500]"
          }`}
        >
          {section.eyebrow}
        </p>
        <SectionTitle title={section.title} />
        <p
          className={`mt-[25px] max-w-[370px] font-[var(--font-inter)] text-[15px] sm:text-[18px] leading-[1.55] ${
            isLight ? "text-black/58" : "text-white"
          }`}
        >
          {section.copy}
        </p>
        <BulletList bullets={section.bullets} isLight={isLight} />
      </div>
    </div>
  );

  const imagePanel = (
    <div className="relative min-h-[440px] overflow-hidden bg-[#111] lg:min-h-[590px]">
      <Image
        src={section.image}
        alt={section.imageAlt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover object-center"
      />
    </div>
  );

  return (
    <section className={`w-full ${isLight ? "bg-[#f5f4f1]" : "bg-[#050505]"}`}>
      {/* Full-width grid — no max-w so image fills edge-to-edge */}
      <div className="grid w-full lg:grid-cols-2">
        {section.imageSide === "left" ? (
          <>{imagePanel}{textPanel}</>
        ) : (
          <>{textPanel}{imagePanel}</>
        )}
      </div>
    </section>
  );
}

function StrategyHero() {
  return (
    <section className="relative overflow-hidden bg-black px-6 pb-[58px] pt-[56px] text-white sm:pb-[72px] sm:pt-[78px]">
      {/* <div className="pointer-events-none absolute left-0 top-0 h-full w-[44%] bg-[radial-gradient(circle_at_20%_20%,rgba(255,85,0,0.42),transparent_45%)]" /> */}
      <div className="mx-auto grid max-w-[1150px] gap-10 lg:grid-cols-[minmax(0,660px)_430px] lg:items-center lg:justify-between">
        <div>
          <h1 className="mt-[24px] max-w-[700px] font-[var(--font-be-vietnam)] text-[38px] font-bold lowercase leading-[50%] tracking-[-3px] sm:text-[60px] text-white">
            strategy that drives
            <br />
            <span className="font-[var(--font-cormorant)] text-[1.12em] sm:text-[72px] lowercase font-normal timesFontFamily italic text-white leading-[103.04px] tracking-[-2.8px]">
              real growth
            </span>
          </h1>
          <p className="mt-[20px] max-w-[450px] font-[var(--font-inter)] text-[14px] leading-[32px] text-white/90 sm:text-[18px]">
            We build clear, data-driven marketing strategies designed to scale your business not just generate leads. Trusted by brands across UAE and globally.
          </p>
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

function RelatedProjects() {
  return (
    <section className="bg-[#080808] px-6 py-[56px] text-white">
      <div className="mx-auto max-w-[1150px]">
        {/* Header */}
        <div className="flex items-center justify-between gap-6">
          <h2 className="font-[var(--font-be-vietnam)] text-[28px] sm:text-[56px] font-medium lowercase leading-none tracking-[-0.96px]">
            related{" "}
            <span className="font-[var(--font-cormorant)] text-[1.18em] sm:text-[72px] font-normal timesFontFamily italic tracking-[-0.96px]">
              projects
            </span>
          </h2>

          <Link
            href="/projects"
            className="hidden sm:inline-flex shrink-0 items-center gap-2 rounded-full border border-white px-5 py-3 font-[var(--font-inter)] text-[12px] text-white sm:text-[15px]"
          >
            View all projects
            <img src="/assets/rightArrowMed.png" className="w-4 h-4" alt="" />
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
    <section className="bg-black px-4 min-[375px]:px-6 pt-[50px] sm:pt-[70px] text-white pb-30">
      <Stagger staggerDelay={0.12} className="mx-auto max-w-[1150px] text-center">
        <StaggerItem>
          <p className="font-[var(--font-be-vietnam)] text-[10px] font-medium uppercase tracking-[4px] text-[#ff5500]">
             Get Started
          </p>
        </StaggerItem>
        <StaggerItem>
          <h2 className="mt-[24px] sm:mt-8 font-[var(--font-be-vietnam)] text-[32px] min-[375px]:text-[36px] font-medium leading-[1.08] tracking-[-1.5px] sm:text-[55px]">
            turn your website into
            <br />
            a{" "}
            <span className="font-[var(--font-cormorant)] text-[1.12em] leading-[1.1] sm:leading-none font-extralight timesFontFamily italic text-[#ff5500]">
              growth asset
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

// Card Data Structure
const CARDS_DATA = [
  {
    id: '01',
    title: 'Email Strategy',
    description: 'Every successful campaign starts with a clear strategy. We build a tailored email plan around your goals, customer journey and opportunities for growth.',
    bgImage: '/assets/method1.png', // Replace with your image src
  },
  {
    id: '02',
    title: 'KPIs & Performance',
    description: 'We track every metric meticulously, ensuring your campaigns are continuously optimized for open rates, click-throughs, and conversions.',
    bgImage: '/assets/method2.png', // Replace with your image src
  },
  {
    id: '03',
    title: 'Email Design',
    description: 'Beautiful, responsive designs tailored to your brand identity. We craft visually stunning, conversion-focused emails that captivate your audience.',
    bgImage: '/assets/method3.png', // Replace with your image src
  },
  {
    id: '04',
    title: 'Customer Segmentation',
    description: 'Delivering the right message to the right person. We break down your database to hyper-target and maximize your ROI.',
    bgImage: '/assets/method4.png', // Replace with your image src
  },
];

function RevenueMethod() {
  return (
    <div className="w-full bg-black text-white py-[50px] sm:py-20 px-4 min-[375px]:px-6 min-h-screen flex flex-col justify-center items-center font-sans">
      <Stagger staggerDelay={0.15} className="max-w-[1150px] w-full">

        {/* Header Section */}
        {/* Heading */}
        <StaggerItem>
          <h2 className="lowercase text-white text-[28px] min-[375px]:text-[32px] font-medium leading-[1.15] tracking-[-3%] sm:text-[56px] sm:leading-[70px] mb-[40px] sm:mb-16">
            method to convert email database to <br />
            
            <span
              className="italic text-[#ff5500] font-normal text-[36px] sm:text-[72px] leading-[1.1] sm:leading-[70px] tracking-[-3%]"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              high performing revenue
            </span>
          </h2>
        </StaggerItem>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] sm:gap-6 justify-center items-center">
          {CARDS_DATA.map((card) => (
            <StaggerItem key={card.id}>
              <div
                style={{
                  backgroundImage: `url(${card.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                className="group relative rounded-[28px] overflow-hidden p-6 flex flex-col justify-between cursor-pointer transition-all duration-500 ease-out w-full h-[360px] sm:h-[606.93px]"
              >
                {/* Card Number */}
                <div
                  className="text-[9.82px] font-medium leading-[14.73px] tracking-[2.95px] text-white opacity-80 align-middle"
                >
                  {card.id}
                </div>

                {/* Bottom Content Group (Animates Up on Hover) */}
                <div className="transform translate-y-[80px] group-hover:translate-y-0 transition-transform duration-500 ease-out will-change-transform">

                  {/* Title */}
                  <h3
                    className="text-[18px] sm:text-[22.64px] font-normal leading-[1.3] sm:leading-[26.78px] tracking-[0%] text-white align-middle mb-[8px] sm:mb-3"
                  >
                    {card.title}
                  </h3>

                  {/* Description (Fades and slides in cleanly) */}
                  <p
                    className="text-[14px] sm:text-[15.5px] font-normal leading-[1.4] sm:leading-[18.86px] tracking-[0%] text-white/90 align-middle opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 ease-out"
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </div>

      </Stagger>
    </div>
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

const emailStats = [
  { value: "24.8M+", label: "Messages Delivered" },
  { value: "3.6M+", label: "Customer Conversations" },
  { value: "412K+", label: "Leads Generated" },
  { value: "100+", label: "Brands Worldwide" },
];

export default function MarketingStrategyPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <Header />
      <TalentHero />
      <BlackFridayOpportunity />
      <OpportunitySection />
      <WhatWeDoSection />
      <SixStepSystem />
      
      {/* <Numbers stats={emailStats} /> */}
      <Brands />
      {/* <WhyEmailFails
                  hideBadge={true}
                  heading={
                    <h2 className="mx-auto max-w-[900px] text-center font-[var(--font-inter)] text-[40px] font-medium leading-[1] tracking-[-1.5px] sm:text-[56px]">
                      how we build{" "}
                      <span
                        className="font-normal italic text-[60px] sm:text-[72px]"
                        style={{ fontFamily: "'Times New Roman', Times, serif" }}
                      >
                        your
                      </span>{" "}
                      brand
                    </h2>
                  }
                  subheading="Most brands don't have an email problem, they have a strategy problem."
                  leftTitle="Most Brands"
                  rightTitle="The USS Difference"
                  leftPoints={googleAdsBrandPoints}
                  rightPoints={googleAdsUssPoints}
                  centerLogo="/assets/Google__logo.webp"
                  logoClassName="w-[80px] lg:w-[115px]"
                  /> */}
                  <RevenueMethod />
      {/* <SixStepSystem /> */}
      <TishWondersProfile />
      <ProjectOverview 
        subheading="sneak peak into picksperience launch"
        images={[
          "/assets/tishOverview/1.jpg",
          "/assets/tishOverview/2.jpg",
          "/assets/tishOverview/3.png",
          "/assets/tishOverview/4.png"
        ]}
      />
      <SadiaPsychologyProfile />
      <ProjectOverview 
        subheading="sneak peak into black friday launch"
        images={[
          "/assets/sadiaOverview/1.png",
          "/assets/sadiaOverview/2.png",
          "/assets/sadiaOverview/3.png",
          "/assets/sadiaOverview/4.png"
        ]}
      />
      {/* <RelatedProjects /> */}
      <Testimonials />
      <Team />
      <GoodCompanyMap />
      <FinalCta />
      <div className="mt-[-120px]">
            
                  <Footer />
                  </div>
    </main>
  );
}
