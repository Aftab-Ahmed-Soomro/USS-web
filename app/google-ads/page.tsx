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
import { WhyEmailFails } from "../components/WhyEmailFails";
import { WhyGoogleAdsWork } from "../components/WhyGoogleAdsWork";
import PlatformsWeWorkWith from "../components/PlatformsWeWorkWith";
import Stagger from "../components/Stagger";
import StaggerItem from "../components/Staggeritem";
import FadeRight from "../components/FadeRight";
import FadeUp from "../components/FadeUp";
import { RevenueMethod } from "../components/RevenueMethod";
import EmailMarketingQuote from "../components/EmailMarketingQuote";

const relatedProjects = [
  {
    slug: "residency-advanced",
    name: "Residency Advanced",
    year: "2026",
    copy: "Google Ads consistently delivered around 120 qualified enquiries every month for second passport and residency programmes.",
    image: "/assets/reside.jpg",
    tags: ["Google Ads", "Lead Generation", "Professional Services"],
  },
  {
    slug: "flowork",
    name: "Flowork",
    year: "2026",
    copy: "USS helped Flowork sell 50% of the available office space before opening by generating high intent enquiries through targeted Google Ads.",
    image: "/assets/flow.jpg",
    tags: ["Google Ads", "Office Space", "Lead Generation"],
  },
];

const stats = [
  { value: "43.8M+", label: "Search Impressions" },
  { value: "6.2M+", label: "Quality Clicks" },
  { value: "287K+", label: "Qualified Leads" },
  { value: "4.3x", label: "Average ROAS" },
];

const services = [
  {
    title: "Search Ads",
    copy: "Reach customers actively searching for your products or services.",
  },
  {
    title: "Performance Max",
    copy: "Advertise across Google's network from one campaign.",
  },
  {
    title: "YouTube Ads",
    copy: "Engage your audience with targeted video campaigns.",
  },
  {
    title: "Display Ads",
    copy: "Increase brand awareness and reconnect with previous visitors.",
  },
];

const systemItems = [
  {
    title: "Intent Based Targeting",
    copy: "We target people actively searching for what you offer.",
  },
  {
    title: "Tracking and Reporting",
    copy: "Every lead and conversion is tracked to measure what's working.",
  },
  {
    title: "Conversion Focused Campaigns",
    copy: "Campaigns are built to generate enquiries and sales, not just clicks.",
  },
  {
    title: "Ongoing Optimisation",
    copy: "We test, refine, and improve campaigns based on real performance.",
  },
];

const workWays = [
  {
    title: "Discovery & Research",
    copy: "We learn about your business, competitors and the customers you're trying to reach.",
  },
  {
    title: "Campaign Build",
    copy: "We create KPI forecast and structure campaigns, keywords and audience.",
  },
  {
    title: "Launch & Optimisation",
    copy: "Campaigns go live while we monitor performance and make ongoing improvements.",
  },
  {
    title: "Reporting & Growth",
    copy: "Clear reporting, regular optimisation and continuous improvements based on results.",
  },
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#ff5500] px-4 min-[375px]:px-6 pb-[40px] pt-[40px] min-[375px]:pb-[58px] min-[375px]:pt-[56px] text-white sm:pb-[72px] sm:pt-[78px]">
      <div className="mx-auto grid max-w-[1150px]  gap-8 sm:gap-10 lg:grid-cols-[minmax(0,660px)_430px] lg:items-center lg:justify-between text-center sm:text-start">
        <Stagger staggerDelay={0.12}>
          <StaggerItem>
            <p className="font-[var(--font-be-vietnam)] text-[13px] font-normal sm:text-[14px] uppercase tracking-[0.5px] text-white">
              PAID SEARCH
            </p>
          </StaggerItem>
          <StaggerItem>
            <h1 className="mt-[16px] min-[375px]:mt-[24px] max-w-[700px] font-[var(--font-be-vietnam)] text-[32px]  font-bold lowercase leading-[100%] tracking-[-1.5px] sm:tracking-[-3px] sm:text-[58px] text-white">
              Generate qualified  {" "}
              <br className="hidden sm:block" />
              leads with{" "}
              <br className="hidden sm:block" />
              <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] lowercase font-bold timesFontFamily italic text-white tracking-[-1.5px] sm:tracking-[-2.8px] leading-[1.1] sm:leading-none">
                google ads
              </span>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-[24px] min-[375px]:mt-[30px] sm:mt-[40px] max-w-[530px] font-[var(--font-inter)] text-[13px] leading-[20px] sm:leading-[32px] text-white/90 sm:text-[18px]">
              Google Ads lead generation campaigns connect your business with customers actively searching for your products or services, converting search demand into enquiries.
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="flex items-center justify-center sm:justify-start">
              <Link
                className="mt-[24px] sm:mt-[30px] inline-flex h-[48px] sm:h-[38px] min-w-[178px] items-center justify-center rounded-full bg-white px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-black transition uppercase hover:bg-[#ff6b1f]"
                href="/contact"
              >
                Book a Consultation
              </Link>
            </div>
          </StaggerItem>
        </Stagger>

        <FadeRight delay={0.3}>
          <LightConsultationForm />
        </FadeRight>
      </div>
    </section>
  );
}

function GoogleAdsVisual() {
  return (
    <div className="relative aspect-[393/267] w-full max-w-[508px] overflow-hidden rounded-[6px] bg-[#f1f1ef]">
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

function Numbers() {
  return <NumbersSection eyebrow="RESULTS" stats={stats} />;
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

function CaseStudies() {
  return (
    <section className="bg-black px-4 min-[375px]:px-6 py-[40px] sm:py-[78px] text-white lg:py-[86px]">
      <div className="mx-auto max-w-[1150px] ">
        <div className="flex flex-col gap-[20px] md:gap-7 md:flex-row md:items-end md:justify-between">
          <Stagger staggerDelay={0.12}>
            <StaggerItem>
              <p className="font-[var(--font-be-vietnam)] text-[9px] sm:text-[12px] font-normal uppercase tracking-[4.8px] text-[#ff5500]">
                OUR WORK
              </p>
            </StaggerItem>
            <StaggerItem>
              <h2 className="mt-[16px] sm:mt-[24px] max-w-[650px] font-[var(--font-be-vietnam)] text-[32px] min-[375px]:text-[38px] font-medium lowercase leading-[0.9] tracking-[-1.4px] sm:text-[56px]">
                See how search
                {/* <br /> */}
                {" "}
                <span className="font-[var(--font-cormorant)] text-[1.12em] sm:text-[72px] font-normal timesFontFamily italic leading-[1.1] sm:leading-none">
                  becomes revenue.
                </span>
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-[14px] max-w-[600px] sm:mt-[18px] font-[var(--font-inter)] text-[14px] sm:text-[18px] leading-[1.5] text-white/90 sm:text-white">
                From lead generation to business growth, explore how we've delivered measurable results across a range of industries.
              </p>
            </StaggerItem>
          </Stagger>
          <FadeRight delay={0.3}>
            <Link
              className="hidden md:inline-flex h-[42px] w-[158px] items-center justify-center rounded-full border border-white/80 font-[var(--font-be-vietnam)] text-[12px] font-normal text-white transition hover:border-white hover:bg-white hover:text-black"
              href="/projects"
            >
              View all projects <span className="ml-[4px]">-&gt;</span>
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
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="px-[6px] sm:px-[10px] pt-[20px] sm:pt-[24px] pb-[6px]">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-[var(--font-be-vietnam)] text-[24px] min-[375px]:text-[28px] sm:text-[36px] font-normal leading-[1.1] sm:leading-none tracking-[-0.72px] group-hover:text-[#ff5500] transition-colors duration-300">
                      {project.name}
                    </h3>
                    <span className="shrink-0 font-[var(--font-inter)] text-[13px] sm:text-[14px] text-white">
                      {project.year}
                    </span>
                  </div>

                  <p className="mt-[12px] sm:mt-[14px] max-w-[420px] font-[var(--font-inter)] text-[13px] sm:text-[18px] leading-[1.6] sm:leading-[28px] text-white/90 sm:text-white">
                    {project.copy}
                  </p>

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
            className="md:hidden inline-flex w-fit items-center gap-2 rounded-full border border-white/30 px-5 py-3 font-[var(--font-inter)] text-[12px] text-white/85 transition-colors hover:border-white/60 hover:text-white"
          >
            View all projects
            <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-black px-4 min-[375px]:px-6 pt-[50px] sm:pt-[70px] text-white pb-30">
      <Stagger staggerDelay={0.12} className="mx-auto max-w-[1150px]  text-center">
        <StaggerItem>
          <p className="font-[var(--font-be-vietnam)] text-[10px] font-medium uppercase tracking-[4px] text-[#ff5500]">
            LET&apos;S SCALE
          </p>
        </StaggerItem>
        <StaggerItem>
          <h2 className="mt-[24px] sm:mt-8 font-[var(--font-be-vietnam)] text-[32px] font-medium leading-[1.08] tracking-[-1.5px] sm:text-[48px]">
            ready to scale
            <br />
            with{" "}
            <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[64px] leading-[1.1] sm:leading-none font-extralight timesFontFamily italic text-[#ff5500]">
              google ads?
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
    title: "No Clear Strategy",
    description:
      "Campaigns launch without a defined strategy or clear objectives.",
  },
  {
    number: "02",
    title: "Reaching the Wrong People",
    description:
      "Broad targeting wastes budget on the wrong audiences.",
  },
  {
    number: "03",
    title: "No Landing Page",
    description:
      "Traffic is sent to generic website pages not landing pages.",
  },
  {
    number: "04",
    title: "Set and Forget",
    description:
      "Little testing or ongoing optimisation after launch.",
  },
];

const googleAdsUssPoints = [
  {
    number: "01",
    title: "Strategy First",
    description:
      "Every campaign starts with a tailored Google Ads strategy.",
  },
  {
    number: "02",
    title: "Smarter Targeting",
    description:
      "Reach the audiences most likely to enquire and convert",
  },
  {
    number: "03",
    title: "Dedicated Landing Pages",
    description:
      "Purpose built pages designed to increase conversions.",
  },
  {
    number: "04",
    title: "Continuous Optimisation",
    description:
      "Ongoing testing keeps campaigns improving every month.",
  },
];

export default function GoogleAdsPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <Header />
      <Hero />
      <Numbers />
      <Brands />
      <EmailMarketingQuote
        first="Google is the first choice search engine for over"
        second="90%"
        third="of users."
      />

      <WhyEmailFails
        tagline="THE OPPORTUNITY"
        hideBadge={false}
        heading={
          <h2 className="mx-auto max-w-[900px] text-center font-[var(--font-inter)] text-[32px] font-medium leading-[1] tracking-[-1.5px] sm:text-[56px]">
            why most{" "}
            <span
              className="font-normal italic text-[42px] sm:text-[72px]"
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
        logoClassName="w-[60px] lg:w-[115px]"
      />
      <div className="mt-[0px] sm:mt-[-60px]">
        <WhyGoogleAdsWork
          imageSrc="/assets/googleside.jpg"
          imageAlt="Team working on Google Ads strategy"
          logoSrc="/assets/google_logo_2.png"
          logoClassName="h-[1em] sm:h-[1.25em] w-auto object-contain inline-block self-center mt-1 sm:mt-1.5"
          headingItalic="ads"
          headingSuffix="work"
          items={[
            {
              number: "01",
              icon: "/assets/GoogleAds/icon1.png",
              title: "Capture Active Demand",
              description: "Show your business to people actively searching for your products or services.",
            },
            {
              number: "02",
              icon: "/assets/GoogleAds/icon2.png",
              title: "Measurable Results",
              description: "Track enquiries, conversions and campaign performance.",
            },
            {
              number: "03",
              icon: "/assets/GoogleAds/icon3.png",
              title: "Flexible Budget",
              description: "Scale campaigns around your business and budget.",
            },
            {
              number: "04",
              icon: "/assets/GoogleAds/icon4.png",
              title: "Fast Visibility",
              description: "Appear in search results as soon as campaigns go live.",
            },
          ]}
        />
      </div>
      <div className="-mb-10 sm:-mb-0">
        <PlatformsWeWorkWith
          heading={
            <h2
              className="text-white mx-auto max-w-[1150px]  mb-10 tracking-[-1.5px] text-center sm:text-left"
              style={{
                fontWeight: 500,
                fontSize: "clamp(32px, 5vw, 56px)",
                lineHeight: "100%",
                fontFamily: "var(--font-be-vietnam, var(--font-inter))",
              }}
            >
              campaigns built around <br className="block sm:hidden" /> your goals
            </h2>
          }
          platforms={[
            {
              name: "Search Campaigns",
              description:
                "Appear in Google Search results when customers are actively looking for your products or services",
              imageSrc: "/assets/1.png",
            },
            {
              name: "Performance Max",
              description:
                "Reach customers across Google's entire network using AI powered campaigns designed to maximise performance",
              imageSrc: "/assets/googlePlatforms/2.png",
            },
            {
              name: "YouTube Campaigns",
              description:
                "Build awareness through engaging video campaigns that reach audiences while they watch the content they love",
              imageSrc: "/assets/googlePlatforms/3.png",
            },
            {
              name: "Display Ads",
              description:
                "Keep your brand visible across millions of websites and apps with visually engaging display advertising.",
              imageSrc: "/assets/googlePlatforms/4.png",
            },
          ]}
        />
      </div>
      <RevenueMethod
        heading={<>how we capture demand <br className="hidden sm:block" /> and turn it into{" "}<span className="italic text-[#ff5500] font-normal text-[40px] sm:text-[72px] leading-[1.1] sm:leading-[70px] tracking-[-3%]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>revenue</span></>}
        cards={[
          { id: '01', title: 'Research & Keyword Strategy', description: 'We identify the keywords your customers are actively searching for and build campaigns around the opportunities most likely to perform.', bgImage: '/assets/method1.png' },
          { id: '02', title: 'Campaign Planning', description: 'We structure campaigns around your objectives, creating tailored targeting, ad messaging and bidding strategies for stronger performance.', bgImage: '/assets/method2.png' },
          { id: '03', title: 'Forecasting & Investment', description: 'Before launching, we forecast the budget required to achieve your KPIs, expected leads and estimated campaign performance.', bgImage: '/assets/method3.png' },
          { id: '04', title: 'Launch & Optimisation', description: 'Once campaigns are live, we continuously monitor performance, refining targeting, budgets and ads to maximise results over time.', bgImage: '/assets/method4.png' },
        ]}
      />
      <CaseStudies />
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
