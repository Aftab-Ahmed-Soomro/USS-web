import Link from "next/link";
import { Approach } from "../components/Approach";
import { Brands } from "../components/Brands";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Numbers as NumbersSection } from "../components/Numbers";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";
import { LightConsultationForm } from "../components/ConsultationForm";
import { GoodCompanyMap } from "../components/GoodCompanyMap";
import EmailMarketingQuote from "../components/EmailMarketingQuote";
import PlatformsWeWorkWith from "../components/PlatformsWeWorkWith";
import OurOrganicSocialMediaApproach from "../components/OurOrganicSocialMediaApproach";
import Image from "next/image";
import { WhyEmailFails } from "../components/WhyEmailFails";

const stats = [
  { value: "500M+", label: "Total Reach" },
  { value: "35M+", label: "Video Views" },
  { value: "4M+", label: "Engagements" },
  { value: "100+", label: "Brands Worldwide" },
];

const relatedProjects = [
  {
    name: "Women Who Thrive",
    year: "2026",
    copy: "Using organic social we increased Women Who Thrive membership to 10k after 6months using only Organic Social and to 22k in 18 months. ",
    image: "/assets/womenThrive.jpg",
    tags: ["Social Growth", "Increase Membership", "Women Network Organization"],
  },
  {
    name: "Yula Lounge",
    year: "2026",
    copy: "Transforming Yalseh into Yula — a modern Dubai beach club. Using Organic Social we increased both awareness and social following to 20k+ in 24months. ",
    image: "/assets/yula2.jpg",
    tags: ["Social Growth", "F&B Industry"],
  },
];

const problems = [
  "Posting without a clear strategy",
  "Inconsistent content and branding",
  "Low engagement and audience growth",
  "Content not aligned with business goals",
  "Focusing on output instead of impact",
];

const socialServicesData = [
  {
    title: "Monthly Content Calendars",
    description: "Plan months of strategic content that keeps your brand consistent and visible."
  },
  {
    title: "Publishing & Scheduling",
    description: "We handle the logistics of posting at optimal times across all your social channels."
  },
  {
    title: "Community Engagement",
    description: "Actively interact with your audience to foster relationships and build brand loyalty."
  },
  {
    title: "Account Management",
    description: "Comprehensive day-to-day oversight of your social profiles to ensure brand safety and responsiveness."
  },
  {
    title: "Performance Insights",
    description: "Detailed analytics and reporting to measure success and uncover new opportunities."
  },
  {
    title: "Continuous Improvements",
    description: "Iterative strategy refinements based on real-time data to maximize your social ROI."
  }
];


function Hero() {
  return (
    <section className="bg-[#f7f7f5] px-6 py-[58px] text-black sm:py-[76px] lg:py-[82px]">
      <div className="mx-auto grid max-w-[1150px] gap-10 lg:grid-cols-[minmax(0,575px)_430px] lg:items-center lg:justify-between">
        <div>
          <h1 className="max-w-[650px] font-[var(--font-be-vietnam)] text-[38px] font-bold lowercase leading-[1.03] tracking-[-3.2px] sm:text-[70px]">
            social media that
            <br />
            <span className="font-[var(--font-cormorant)] text-[1.08em] sm:text-[80px] font-normal timesFontFamily italic tracking-[-3.2px]">
              delivers real {"  "}
            </span> {" "}
            {" "} results
          </h1>
          <p className="mt-[24px] max-w-[580px] font-[var(--font-inter)] text-[14px] leading-[1.75] text-black/72 sm:text-[20px]">
            Your social media is often the first impression of your business. We help brands stay active, consistent, and memorable across Instagram, LinkedIn, TikTok, YouTube, and more.
          </p>
          <p className="mt-[32px] max-w-[460px] font-[var(--font-inter)] text-[12px] leading-[1.7] tracking-[2.64px] text-[#06060680] uppercase">
            Trusted by brands across the world
          </p>
          <Link
            className="mt-[25px] inline-flex h-[38px] min-w-[176px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] font-bold uppercase text-white transition hover:bg-[#ff6b1f]"
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

function Metrics() {
  return <NumbersSection stats={stats} />;
}

function StrategyProblem() {
  return (
    <section className="relative overflow-hidden bg-[#080808] px-6 py-[82px] text-white  lg:py-[124px]">
      <div className="pointer-events-none absolute bottom-[-170px] left-[-120px] h-[500px] w-[420px] rounded-full bg-[#7b2b0a] opacity-70 blur-[105px]" />
      <div className="relative mx-auto grid max-w-[1150px] gap-12 lg:grid-cols-[minmax(0,410px)_minmax(0,585px)] lg:justify-between">
        <div className="lg:pt-[8px]">
          <p className="font-[var(--font-be-vietnam)] text-[10px] font-bold uppercase tracking-[4px] text-[#ff5500]">
            THE PROBLEM
          </p>
          <h2 className="mt-[24px] font-[var(--font-be-vietnam)] text-[36px] font-medium lowercase leading-[1.08] tracking-[-1.5px] sm:text-[48px]">
            why your
            <br />
            <span className="font-[var(--font-cormorant)] text-[1.12em] font-extralight timesFontFamily italic tracking-[-0.04em]">
              social strategy
            </span>
            <br />
            isn&apos;t working
          </h2>
        </div>

        <div>
          <p className="mb-[34px] font-[var(--font-be-vietnam)] text-[16px] font-medium leading-[1.45] text-white/88 sm:text-[18px]">
            Most brands are active on social but not effectively
          </p>
          <div className="border-t border-white/45">
          {problems.map((problem, index) => (
            <div
              className="grid grid-cols-[28px_minmax(0,1fr)] gap-6 border-b border-white/45 py-[16px]"
              key={problem}
            >
              <span className="font-[var(--font-inter)] text-[10px] font-bold leading-[1.6] tracking-[2px] text-white/75">
                0{index + 1}
              </span>
              <p className="font-[var(--font-be-vietnam)] text-[14px] font-medium leading-[1.6] text-white/84 sm:text-[15px]">
                {problem}
              </p>
            </div>
          ))}
          </div>
          <p className="mt-[42px] max-w-[520px] font-[var(--font-be-vietnam)] text-[15px] font-medium leading-[1.55] text-white/84">
            Social media is not just about posting, it&apos;s about building a brand people
            connect with.
          </p>
        </div>
      </div>
    </section>
  );
}

function SocialServices() {
  return (
    <section className="bg-[#080808] px-6 py-[70px] text-white lg:py-[100px]">
      <div className="mx-auto max-w-[1150px]">
        {/* Header */}
        <p className="font-[var(--font-inter)] text-[10px] font-bold uppercase tracking-[4px] text-[#ff5500]">
          SERVICES
        </p>
        <h2 className="mt-[26px] mb-[60px] font-[var(--font-be-vietnam)] text-[36px] font-medium lowercase leading-none tracking-[-1.4px] sm:text-[50px]">
          our social media{" "}
          <span className="font-[var(--font-cormorant)] text-[1.12em] font-extralight timesFontFamily italic tracking-[-0.04em]">
            services
          </span>
        </h2>
        
        {/* Accordion List */}
        <div className="flex flex-col">
          {socialServicesData.map((service, index) => (
            <article
              key={service.title}
              className="group border-b border-white/20 py-8 first:border-t flex cursor-pointer transition-colors duration-300"
            >
              {/* Number */}
              <div 
                className="w-[100px] sm:w-[150px] shrink-0 text-white"
                style={{
                  fontWeight: 500,
                  fontSize: '32px',
                  lineHeight: '20px',
                  letterSpacing: '0%'
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-start">
                  
                  {/* Title */}
                  <h3 
                    className="text-white"
                    style={{
                      fontWeight: 400,
                      fontSize: '36px',
                      lineHeight: '40px',
                      letterSpacing: '-0.72px'
                    }}
                  >
                    {service.title}
                  </h3>
                  
                  {/* Icon */}
                  <div className="relative w-8 h-8 flex items-center justify-center ml-4 shrink-0 mt-1">
                    {/* + Icon */}
                    <span className="absolute text-white text-2xl group-hover:opacity-0 transition-opacity duration-300">
                      +
                    </span>
                    {/* Orange X */}
                    <div className="absolute w-8 h-8 rounded-full bg-[#ff5500] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-black text-lg font-medium leading-none pb-[2px]">×</span>
                    </div>
                  </div>
                </div>
                
                {/* Description animation (Grid trick) */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                  <div className="overflow-hidden">
                    <p 
                      className="text-white mt-4 max-w-[550px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75"
                      style={{
                        fontWeight: 400,
                        fontSize: '20px',
                        lineHeight: '24px',
                        letterSpacing: '0%'
                      }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Card Data Structure
const CARDS_DATA = [
  {
    id: '01',
    title: 'Social Media Strategy',
    description: 'Every successful campaign starts with a clear strategy. We build a tailored email plan around your goals, customer journey and opportunities for growth.',
    bgImage: '/assets/method1.png', 
  },
  {
    id: '02',
    title: 'Social media execution',
    description: 'We implement the strategy with precision, creating high-quality content, managing scheduling, and engaging with your audience to build a loyal community.',
    bgImage: '/assets/method2.png', 
  },
  {
    id: '03',
    title: 'Maintenance',
    description: 'Ongoing optimization and active monitoring ensure your profiles remain relevant. We analyze performance data to refine tactics and sustain long-term growth.',
    bgImage: '/assets/method3.png', 
  }
];

function RevenueMethod() {
  return (
    <div className="w-full bg-black text-white py-20 px-6 min-h-screen flex flex-col justify-center items-center font-sans">
      <div className="max-w-[1150px] w-full">
        
        {/* Header Section */}
        <p className="font-[var(--font-inter)] text-[10px] font-bold uppercase tracking-[4px] text-[#ff5500] mb-4">
          PROCESS
        </p>
        {/* Heading */}
        <h2 className="text-white text-[32px] font-medium leading-[1.15] tracking-[-3%] sm:text-[56px] sm:leading-[70px] mb-16">
          organic social{" "}
          <span
            className="italic text-[#ff5500] font-normal text-[1.1em] tracking-[-3%] sm:text-[72px] sm:leading-[70px]"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            step by step process
          </span>
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-center min-h-[500px] lg:min-h-[600px]">
          {CARDS_DATA.map((card, index) => (
            <div
              key={card.id}
              style={{
                backgroundImage: `url(${card.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              className={`group relative rounded-[28px] overflow-hidden p-5 flex flex-col justify-between cursor-pointer transition-all duration-500 ease-out ${
                index === 0 ? 'md:col-span-2' : 'md:col-span-1'
              }`}
            >
              {/* Card Number */}
              <div 
                className="text-[9.82px] font-medium leading-[14.73px] tracking-[2.95px] text-white opacity-80 align-middle"
                style={{ fontStyle: 'Medium' }}
              >
                {card.id}
              </div>

              {/* Bottom Content Group (Animates Up on Hover) */}
              <div className="mt-auto flex flex-col">
                
                {/* Title */}
                <h3 
                  className="text-[22.64px] font-normal leading-[26.78px] tracking-[0%] text-white align-middle transition-all duration-500"
                  style={{ fontStyle: 'Regular' }}
                >
                  {card.title}
                </h3>

                {/* Description (Grid animation for height + fade in) */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                  <div className="overflow-hidden">
                    <p 
                      className="text-[15.5px] font-normal leading-[1.8] tracking-[0%] text-white/90 align-middle opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 ease-out mt-3"
                      style={{ fontStyle: 'Regular' }}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
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
    <section className="bg-black px-6 pt-[70px] text-white pb-30">
      <div className="mx-auto max-w-[1150px] text-center">
        <p className="font-[var(--font-be-vietnam)] text-[10px] font-medium uppercase tracking-[4px] text-[#ff5500]">
           LET&apos;S SCALE
        </p>
        <h2 className="mt-20 font-[var(--font-be-vietnam)] text-[36px] font-medium leading-[1.08] tracking-[-1.5px] sm:text-[55px]">
          turn your database
          <br />
          into{" "}
          <span className="font-[var(--font-cormorant)] text-[1.12em] font-extralight timesFontFamily italic text-[#ff5500]">
            repeat revenue
          </span>
        </h2>
        <div className="mt-20 flex flex-col items-center justify-center gap-4 sm:flex-row">
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

export default function SocialMediaManagementPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <Header />
      <Hero />
      <Metrics />
      <PlatformsWeWorkWith />
      <Brands />
      <WhyEmailFails
        tagline="THE PROBLEM"
        heading={
          <h2 className="mx-auto max-w-[900px] text-center font-[var(--font-inter)] text-[40px] font-medium leading-[1] tracking-[-1.5px] sm:text-[56px]">
            why your{" "}
            <span
              className="font-normal italic text-[60px] sm:text-[72px]"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              social strategy
            </span>{" "}
            <br />
            isn&apos;t working
          </h2>
        }
        subheading=""
        leftTitle="Most Brands"
        rightTitle="The USS Difference"
        leftPoints={[
          {
            number: "01",
            title: "Posting Without A Plan",
            description: "Content is published without a clear strategy or long term direction.",
          },
          {
            number: "02",
            title: "Inconsistent Brand Presence",
            description: "Different styles, messages and visuals make it difficult to build recognition.",
          },
          {
            number: "03",
            title: "Content That Doesn't Add Value",
            description: "Posts focus on selling instead of educating, entertaining or building trust.",
          },
          {
            number: "04",
            title: "No Clear Content Pillars",
            description: "Without consistent themes, content lacks direction and becomes difficult to sustain.",
          },
        ]}
        rightPoints={[
          {
            number: "01",
            title: "Content Strategy First",
            description: "Every post is planned around your business goals, audience and brand positioning.",
          },
          {
            number: "02",
            title: "A Consistent Brand Presence",
            description: "Clear messaging, visuals and tone that make your business instantly recognisable.",
          },
          {
            number: "03",
            title: "Content People Want to Engage With",
            description: "Educational, entertaining and informative content that builds trust over time.",
          },
          {
            number: "04",
            title: "Defined Content Pillars",
            description: "A structured content plan that keeps your social channels consistent, relevant and easy to scale.",
          },
        ]}
      />
      <EmailMarketingQuote first={"your social media is your"} second={"digital window"} third={"shop front"} />
      <OurOrganicSocialMediaApproach />
      <RelatedProjects />
      <RevenueMethod />
      {/* <Approach /> */}
      {/* <StrategyProblem /> */}
      <SocialServices />
      <Testimonials />
      <GoodCompanyMap />
      <Team />
      <FinalCta />
      <Footer />
    </main>
  );
}
