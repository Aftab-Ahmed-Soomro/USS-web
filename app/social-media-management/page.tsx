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

const stats = [
  { value: "500M+", label: "Total Reach" },
  { value: "35M+", label: "Video Views" },
  { value: "4M+", label: "Engagements" },
  { value: "100+", label: "Brands Worldwide" },
];

const problems = [
  "Posting without a clear strategy",
  "Inconsistent content and branding",
  "Low engagement and audience growth",
  "Content not aligned with business goals",
  "Focusing on output instead of impact",
];

const services = [
  "Social Media Strategy",
  "Content Planning and Scheduling",
  "Account Management",
  "Community Engagement",
  "Performance Tracking and Optimisation",
  "Platform-Specific Growth Strategies",
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
    <section className="bg-[#080808] px-6 py-[70px] text-white  lg:py-[86px]">
      <div className="mx-auto max-w-[1150px]">
        <p className="font-[var(--font-be-vietnam)] text-[10px] font-bold uppercase tracking-[4px] text-[#ff5500]">
          SERVICES
        </p>
        <h2 className="mt-[26px] font-[var(--font-be-vietnam)] text-[36px] font-medium lowercase leading-none tracking-[-1.4px] sm:text-[50px]">
          our social media{" "}
          <span className="font-[var(--font-cormorant)] text-[1.12em] font-extralight timesFontFamily italic tracking-[-0.04em]">
            services
          </span>
        </h2>
        <div className="mt-[26px] grid border-y border-white/14 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              className="grid min-h-[102px] grid-cols-[30px_minmax(0,1fr)] gap-[22px] border-b border-white/14 py-[31px] pr-7 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+3)]:border-b-0"
              key={service}
            >
              <span className="font-[var(--font-inter)] text-[9px] font-bold leading-[1.7] tracking-[2px] text-[#ff5500]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="max-w-[260px] font-[var(--font-be-vietnam)] text-[16px] font-medium leading-[1.35] text-white sm:text-[17px]">
                {service}
              </h3>
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
    description: 'Beautiful, responsive designs tailored to your brand identity that captivate your audience across all devices.',
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
    <div className="w-full bg-black text-white py-20 px-6 min-h-screen flex flex-col justify-center items-center font-sans">
      <div className="max-w-[1150px] w-full">
       

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
      <EmailMarketingQuote first={"your social media is your"} second={"digital window"} third={"shop front"} />
      <PlatformsWeWorkWith />
      <Brands />
      <OurOrganicSocialMediaApproach />
      <RevenueMethod />
      {/* <Approach /> */}
      {/* <StrategyProblem /> */}
      {/* <SocialServices /> */}
      <Testimonials />
      <Team />
      <GoodCompanyMap />
      <FinalCta />
      <Footer />
    </main>
  );
}
