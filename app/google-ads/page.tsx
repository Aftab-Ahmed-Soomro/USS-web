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
import FadeLeft from "../components/FadeLeft";
import FadeRight from "../components/FadeRight";
import FadeUp from "../components/FadeUp";

const inputClass =
  "mt-[6px] h-[29px] w-full rounded-[5px] border border-black/15 bg-white px-[9px] font-[var(--font-inter)] text-[9px] text-black outline-none placeholder:text-black/35 focus:border-[#ff5500]";

const failPoints = [
  "Bidding without strategy",
  "Poor keyword targeting",
  "Weak landing pages",
  "No conversion tracking",
  "Scaling too early",
];

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
  { value: "6.2M+", label: "High-Intent Clicks" },
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
    copy: "Transforming Yalseh into Yula, a modern Dubai beach club.",
    image: "/assets/company/yula-card.jpg",
    tags: ["Web design & development", "Hospitality"],
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
              capture high
              <br />
              quality leads
              <br />
              with{" "}
              <span className="font-[var(--font-cormorant)] text-[1.12em] sm:text-[72px] lowercase font-bold timesFontFamily italic text-white tracking-[-2.8px]">
                google ads
              </span>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-[40px] max-w-[530px] font-[var(--font-inter)] text-[14px] leading-[32px] text-white/90 sm:text-[18px]">
              Turn searches into sales with Google Ads, built to generate qualified leads, not just clicks, by putting your business in front of customers actively searching for your products or services.
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

// function Hero() {
//   return (
//     <section className="bg-[#ff5500] px-6 pb-[57px] pt-[45px] text-white sm:pb-[68px] sm:pt-[56px] lg:pb-[75px] lg:pt-[70px]">
//       <div className="mx-auto grid max-w-[1150px] gap-9 lg:grid-cols-[minmax(0,560px)_377px] lg:items-center lg:justify-between">
//         <div>
//           <p className="font-[var(--font-be-vietnam)] text-[10px] font-bold uppercase tracking-[3.2px] text-white">
//             Google Ads
//           </p>
//           <h1 className="mt-[34px] max-w-[545px] font-[var(--font-be-vietnam)] text-[37px] font-medium lowercase leading-[0.98] tracking-[-1.6px] sm:text-[50px] md:text-[58px] lg:text-[62px]">
//             capture high
//             <br />
//             quality leads
//             <br />
//             with{" "}
//             <span className="font-[var(--font-cormorant)] text-[1.13em] font-extralight timesFontFamily italic tracking-[-0.04em]">
//               google ads
//             </span>
//           </h1>
//           <p className="mt-[21px] max-w-[485px] font-[var(--font-inter)] text-[13px] leading-[1.75] text-white/80 sm:text-[15px]">
//             Turn searches into sales with Google Ads, built to generate qualified leads, not just clicks, by putting your business in front of customers actively searching for your products or services.
//           </p>
//           <Link
//             className="mt-[24px] inline-flex h-[34px] min-w-[145px] items-center justify-center rounded-full bg-white px-6 font-[var(--font-be-vietnam)] text-[10.5px] font-bold uppercase text-black transition hover:bg-white/90"
//             href="/contact"
//           >
//             Book a Consultation
//           </Link>
//         </div>
//         <LightConsultationForm />
//       </div>
//     </section>
//   );
// }

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

function WhyAdsFail() {
  return (
    <section className="border-t border-[#ff5500] bg-white px-6 py-[67px] text-black lg:pb-[88px]">
      <div className="mx-auto max-w-[1150px]">
        <Stagger staggerDelay={0.12}>
          <StaggerItem>
            <p className="font-[var(--font-be-vietnam)] text-[10px] font-extrabold sm:text-[14px] uppercase text-[#ff5500]">
              Problem
            </p>
          </StaggerItem>
        </Stagger>

        <div className="mt-[28px] grid gap-9 lg:grid-cols-[493px_minmax(0,509px)] lg:items-start lg:justify-between">
          <FadeLeft delay={0.15}>
            <div>
              <h2 className="font-[var(--font-be-vietnam)] text-[40px] font-medium lowercase leading-[1] tracking-[-3%] sm:text-[56px]">
                why most google
                <br />
                ads{" "}
                <span className="font-[var(--font-cormorant)] text-[1.14em] sm:text-[72px] font-normal timesFontFamily italic">
                  campaigns fail
                </span>
              </h2>
              <div className="mt-[30px]">
                <GoogleAdsVisual />
              </div>
            </div>
          </FadeLeft>

          <FadeRight delay={0.25}>
            <div className="pt-[106px]">
              <p className="max-w-[480px] font-[var(--font-be-vietnam)] text-[16px] sm:text-[20px] font-semibold leading-[1.95] text-black">
                Most campaigns don&rsquo;t fail because of budget,
                <br />
                they fail because of strategy, structure, and tracking
              </p>
              <div className="mt-[29px] grid gap-x-[17px] sm:grid-cols-2">
                {failPoints.map((point) => (
                  <div
                    className="flex min-h-[55px] items-center gap-[13px] border-t border-[#d9d9d9] font-[var(--font-be-vietnam)] text-[12px] sm:text-[16px] font-semibold leading-[1.35] text-black last:border-b sm:[&:nth-last-child(2)]:border-b"
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
              <p className="mt-[28px] border-l-[4px] border-[#ff5500] pl-[7px] font-[var(--font-be-vietnam)] text-[15px] sm:text-[20px] font-semibold leading-[36px] text-black max-w-[430px]">
                Google Ads isn't about getting more clicks. It's about attracting the right customers.
              </p>
            </div>
          </FadeRight>
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
      <div className="mx-auto grid max-w-[1150px] gap-10 lg:grid-cols-[450px_minmax(0,632px)] lg:items-start lg:justify-between">
        <FadeLeft delay={0.15}>
          <div className="relative min-h-[650px]">
            
            <h2 className="mt-[35px] font-[var(--font-be-vietnam)] text-[40px] font-medium lowercase leading-[1.05] tracking-[-3%] sm:text-[56px]">
              our{" "}
              <span className="font-[var(--font-cormorant)] text-[1.23em] sm:text-[72px] tracking-[-3%] font-normal timesFontFamily italic">
                google ads
              </span>
              <br />
              services
            </h2>
            <p className="mt-[35px] max-w-[400px] font-[var(--font-be-vietnam)] text-[12px] sm:text-[14px] font-normal leading-[1.50] text-white">
              Every business has different goals. We build Google
  Ads campaigns around what matters most to yours.
            </p>
            <div className="absolute -bottom-20  left-[-4px] hidden aspect-[366/398] w-[460px] lg:block">
              <Image
                src="/assets/meeral2.png"
                alt="Google Ads strategist"
                fill
                sizes="366px"
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </FadeLeft>

        <div className="grid border-white/20 lg:mt-[110px] sm:grid-cols-2 sm:[&>article:nth-child(2n)]:border-l sm:[&>article:nth-child(n+3)]:border-t">
          {services.map((service, index) => (
            <FadeUp key={service.title} delay={0.2 + index * 0.1}>
              <article
                className={`min-h-[163px] border-white/20 px-[26px] py-[30px] h-full ${
                  index % 2 === 0 ? "sm:pl-[25px] sm:pr-[28px]" : "sm:pl-[25px] sm:pr-0"
                }`}
              >
                <h3 className="font-[var(--font-be-vietnam)] text-[24px] sm:text-[30px] font-bold leading-tight">
                  {service.title}
                </h3>
                <p className="mt-[24px] max-w-[220px] font-[var(--font-inter)] text-[12px] sm:text-[14px] leading-[1.85] text-white/90">
                  {service.copy}
                </p>
              </article>
            </FadeUp>
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
        <Stagger staggerDelay={0.12}>
          <StaggerItem>
            <p className="font-[var(--font-be-vietnam)] text-[10px] font-extrabold sm:text-[14px] uppercase text-[#ff5500]">
              System
            </p>
          </StaggerItem>
          <StaggerItem>
            <h2 className="mt-[30px] max-w-[660px] font-[var(--font-be-vietnam)] text-[38px] font-medium lowercase leading-[1] tracking-[-3%] sm:text-[56px]">
              How We Build Better
              <br />
              <span className="font-[var(--font-cormorant)] text-[1.15em] font-normal sm:text-[72px] text-[#FF5500] timesFontFamily italic">
                Google Ads Campaigns
              </span>
            </h2>
          </StaggerItem>
        </Stagger>
        <div className="mt-[45px] grid border-y border-[#dadada] sm:grid-cols-2 lg:grid-cols-4">
          {systemItems.map((item, i) => (
            <FadeUp key={item.title} delay={0.1 + i * 0.1}>
              <article
                className="min-h-[244px] border-[#dadada] px-[25px] py-[37px] sm:[&:nth-child(even)]:border-l lg:border-l lg:first:border-l-0"
              >
                <GrowthIcon />
                <h3 className="mt-[31px] max-w-[180px] font-[var(--font-be-vietnam)] text-[19px] font-bold leading-[1.28] tracking-[-0.45px]">
                  {item.title}
                </h3>
                <p className="mt-[19px] max-w-[210px] font-[var(--font-inter)] text-[12px] sm:text-[16px] leading-[1.65] text-[#505050]">
                  {item.copy}
                </p>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section className="bg-black px-6 py-[78px] text-white lg:py-[86px]">
      <div className="mx-auto max-w-[1150px]">
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <Stagger staggerDelay={0.12}>
            <StaggerItem>
              <p className="font-[var(--font-be-vietnam)] text-[9px] sm:text-[12px] font-normal uppercase tracking-[4.8px] text-[#ff5500]">
                PROJECTS
              </p>
            </StaggerItem>
            <StaggerItem>
              <h2 className="mt-[24px] max-w-[650px] font-[var(--font-be-vietnam)] text-[38px] font-medium lowercase leading-[0.9] tracking-[-1.4px] sm:text-[56px]">
                see how we turn
                <br />
                search{" "}
                <span className="font-[var(--font-cormorant)] text-[1.12em] sm:text-[72px] font-normal timesFontFamily italic">
                  into revenue
                </span>
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-[18px] font-[var(--font-inter)] text-[14px] sm:text-[18px] leading-[1.5] text-white">
                Explore how we've helped brands generate high-quality leads and scale through Google Ads.
              </p>
            </StaggerItem>
          </Stagger>
          <FadeRight delay={0.3}>
            <Link
              className="inline-flex h-[42px] w-[158px] items-center justify-center rounded-full border border-white/80 font-[var(--font-be-vietnam)] text-[12px] font-normal text-white transition hover:border-white hover:bg-white hover:text-black"
              href="/projects"
            >
              View all projects <span className="ml-[4px]">-&gt;</span>
            </Link>
          </FadeRight>
        </div>

        {/* Cards */}
        <div className="mt-[40px] grid gap-[24px] md:grid-cols-2">
          {relatedProjects.map((project, i) => (
            <FadeUp key={project.name} delay={0.15 + i * 0.15}>
              <Link
                href={`/projects/${project.slug}`}
                className="block rounded-[20px] border border-white p-[14px] transition-colors duration-300 hover:border-[#ff5500] group"
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

                <div className="px-[10px] pt-[24px] pb-[6px]">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-[var(--font-be-vietnam)] text-[22px] sm:text-[36px] font-normal leading-none tracking-[-0.72px] group-hover:text-[#ff5500] transition-colors duration-300">
                      {project.name}
                    </h3>
                    <span className="shrink-0 font-[var(--font-inter)] text-[14px] text-white">
                      {project.year}
                    </span>
                  </div>

                  <p className="mt-[14px] max-w-[420px] font-[var(--font-inter)] text-[14px] sm:text-[18px] leading-[28px] text-white">
                    {project.copy}
                  </p>

                  <div className="mt-[20px] flex flex-wrap gap-[10px]">
                    {(project.tags ?? []).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white px-[14px] py-[7px] font-[var(--font-inter)] text-[12px] text-white/90 group-hover:border-[#ff5500]/50 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </FadeUp>
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
        <Stagger staggerDelay={0.12}>
          <StaggerItem>
            <p className="font-[var(--font-be-vietnam)] text-[9px] font-normal sm:text-[12px] uppercase tracking-[4.8px] text-[#ff5500]">
              Ways To Work With Us
            </p>
          </StaggerItem>
          <StaggerItem>
            <h2 className="mt-[21px] font-[var(--font-be-vietnam)] text-[39px] font-medium lowercase leading-none tracking-[-3.5px] sm:text-[56px]">
              Our Google{" "}
              <span className="font-[var(--font-cormorant)] text-[1.16em] sm:text-[72px] tracking-[-3.5px] font-extralight timesFontFamily text-[#FF5500] italic">
                Ads Process
              </span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-[24px] max-w-[780px] font-[var(--font-inter)] text-[14px] sm:text-[18px] leading-[1.55] text-[#404040]">
              Whether you&rsquo;re just getting started or ready to scale, we have a way to work together.
            </p>
          </StaggerItem>
        </Stagger>
        <div className="mt-[49px] grid border border-[#d8d8d8] sm:grid-cols-2">
          {workWays.map((way, index) => (
            <FadeUp key={way.title} delay={0.1 + index * 0.1}>
              <article
                className={`min-h-[188px] px-[38px] py-[40px] ${
                  index % 2 ? "sm:border-l sm:border-[#d8d8d8]" : ""
                } ${index > 1 ? "border-t border-[#d8d8d8]" : ""}`}
              >
                <div className="flex items-center gap-[10px] font-[var(--font-inter)] text-[9px] leading-none text-black/45">
                  <span className="size-[8px] rounded-full bg-[#ff5500]" />
                  <span>{index + 1}</span>
                </div>
                <h3 className="mt-[22px] font-[var(--font-be-vietnam)] text-[24px] sm:text-[30px] font-semibold leading-tight">
                  {way.title}
                </h3>
                <p className="mt-[12px] max-w-[400px] font-[var(--font-inter)] text-[15px] sm:text-[18px] leading-[1.55] text-[#404040]">
                  {way.copy}
                </p>
              </article>
            </FadeUp>
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
    title: 'Keyword Strategy',
    description: 'We identify the keywords your customers are actively searching for and build campaigns around high-intent search terms.',
    bgImage: '/assets/method1.png', // Replace with your image src
  },
  {
    id: '02',
    title: 'Campaign Structure',
    description: 'We build meticulously organized campaigns designed to maximize relevance, improve Quality Score, and give precise control over your budget.',
    bgImage: '/assets/method2.png', // Replace with your image src
  },
  {
    id: '03',
    title: 'Ad Copy & Creative',
    description: 'Our team crafts compelling ad copy and engaging creatives that capture attention, drive higher click-through rates, and increase conversions.',
    bgImage: '/assets/method3.png', // Replace with your image src
  },
  {
    id: '04',
    title: 'Optimisation & Growth',
    description: 'We continuously monitor and refine your campaigns based on data-driven insights, ensuring scalable growth and maximum return on ad spend.',
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
              how we capture demand  <br />
              and turn it into{" "}
              <span
                className="italic text-[#ff5500] font-normal text-[1.1em] tracking-[-3%] sm:text-[72px] sm:leading-[70px]"
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
              >
                revenue
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
                  width: '1285.61px',
                  maxWidth: '100%',
                  height: '606.93px',
                  backgroundImage: `url(${card.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                className="group relative rounded-[28px] overflow-hidden p-6 flex flex-col justify-between cursor-pointer transition-all duration-500 ease-out"
              >
                <div
                  className="text-[9.82px] font-medium leading-[14.73px] tracking-[2.95px] text-white opacity-80 align-middle"
                  style={{ fontStyle: 'Medium' }}
                >
                  {card.id}
                </div>

                <div className="transform translate-y-[80px] group-hover:translate-y-0 transition-transform duration-500 ease-out will-change-transform">
                  <h3
                    className="text-[22.64px] font-normal leading-[26.78px] tracking-[0%] text-white align-middle mb-3"
                    style={{ fontStyle: 'Regular' }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-[15.5px] font-normal leading-[18.86px] tracking-[0%] text-white/90 align-middle opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 ease-out"
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

function FinalCta() {
  return (
    <section className="bg-black px-6 pt-[70px] text-white pb-30">
      <Stagger staggerDelay={0.12} className="mx-auto max-w-[1150px] text-center">
        <StaggerItem>
          <p className="font-[var(--font-be-vietnam)] text-[10px] font-medium uppercase tracking-[4px] text-[#ff5500]">
             LET&apos;S SCALE
          </p>
        </StaggerItem>
        <StaggerItem>
          <h2 className="mt-8 font-[var(--font-be-vietnam)] text-[36px] font-medium leading-[1.08] tracking-[-1.5px] sm:text-[55px]">
            ready to scale
            <br />
            with{" "}
            <span className="font-[var(--font-cormorant)] text-[1.12em] font-extralight timesFontFamily italic text-[#ff5500]">
              google ads?
            </span>
          </h2>
        </StaggerItem>
        <StaggerItem>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              className="inline-flex h-[42px] min-w-[190px] items-center justify-center rounded-full bg-[#ff5500] px-8 font-[var(--font-be-vietnam)] text-[12px] font-bold uppercase text-white transition hover:bg-[#ff6b1f]"
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

export default function GoogleAdsPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <Header />
      <Hero />
      <Numbers />
      <Brands />
      
      <WhyEmailFails
      hideBadge={false}
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
      <WhyGoogleAdsWork
        imageSrc="/assets/googleside.jpg"
        imageAlt="Team working on Google Ads strategy"
        headingItalic="google ads"
        items={[
          {
            number: "01",
            icon: "/assets/GoogleAds/icon1.png",
            title: "Reach Your Ideal Audience",
            description: "Target customers based on interests, behaviours, location and intent.",
          },
          {
            number: "02",
            icon: "/assets/GoogleAds/icon2.png",
            title: "Generate Qualified Leads",
            description: "Drive enquiries from people actively interested in your product or service.",
          },
          {
            number: "03",
            icon: "/assets/GoogleAds/icon3.png",
            title: "Increase Sales",
            description: "Convert website visitors into paying customers with conversion-focused campaigns.",
          },
          {
            number: "04",
            icon: "/assets/GoogleAds/icon4.png",
            title: "Retarget Warm Audiences",
            description: "Stay visible to people who have already visited your website or engaged with your brand.",
          },
        ]}
      />
      <PlatformsWeWorkWith
        heading={
          <h2
            className="text-white mx-auto max-w-[1150px] mb-10 tracking-[-1.5px]"
            style={{
              fontWeight: 500,
              fontSize: "clamp(36px, 5vw, 56px)",
              lineHeight: "100%",
              fontFamily: "var(--font-be-vietnam, var(--font-inter))",
            }}
          >
            platforms we work with
          </h2>
        }
        platforms={[
          {
            name: "Search Campaigns",
            description:
              "Reach, engage and convert customers across Facebook and Instagram through high-performing paid campaigns.",
            imageSrc: "/assets/1.png",
          },
          {
            name: "Performance Max",
            description:
              "Maximise conversions across all Google channels using AI-driven campaigns.",
            imageSrc: "/assets/googlePlatforms/2.png",
          },
          {
            name: "YouTube Campaigns",
            description:
              "Engage audiences with compelling video ads across YouTube and the web.",
            imageSrc: "/assets/googlePlatforms/3.png",
          },
          {
            name: "Display Ads",
            description:
              "Build brand awareness and retarget visitors with visually striking image ads.",
            imageSrc: "/assets/googlePlatforms/4.png",
          },
        ]}
      />
      <RevenueMethod />
      <CaseStudies />
      {/* <WorkTogether /> */}
      <Testimonials />
      <Team />
      <GoodCompanyMap />
      <FinalCta />
      <Footer />
    </main>
  );
}
