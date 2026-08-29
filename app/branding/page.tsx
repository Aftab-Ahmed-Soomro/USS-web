import Link from "next/link";
import { Header } from "../components/Header";
import Stagger from "../components/Stagger";
import StaggerItem from "../components/Staggeritem";
import { LightConsultationForm } from "../components/ConsultationForm";
import FadeRight from "../components/FadeRight";
import { Numbers } from "../components/Numbers";
import CaseStudies from "../components/CaseStudies";
import { Brands } from "../components/Brands";
import { BrandingServices } from "../components/BrandingServices";
import { YulaHappiness } from "../components/YulaHappiness";
import { WhyEmailFails } from "../components/WhyEmailFails";
import { BrandIdentity } from "../components/BrandIdentity";
import { SixStepSystem } from "../components/SixStepSystem";
import { Testimonials } from "../components/Testimonials";
import { Team } from "../components/Team";
import { RevenueMethod } from "../components/RevenueMethod";
import { GoodCompanyMap } from "../components/GoodCompanyMap";
import { Footer } from "../components/Footer";
import { span } from "framer-motion/client";

const emailStats = [
  { value: "36+", label: "Logos Designed" },
  { value: "210+", label: "Brand Assets Created" },
  { value: "15+", label: "Brand Guidelines Produced" },
  { value: "10+", label: "Years Experience" },
];

const touchpointStepsData = [
  {
    id: "01",
    title: "Business Discovery",
    pills: ["Discovery", "Strategy", "Workshop"],
    description: "Before any creative work begins, we take the time to understand your business, your goals and where you want the brand to go.",
    details: [
      { title: "Business Goals", desc: "" },
      { title: "Audience", desc: "" },
      { title: "Competitors", desc: "" },
      { title: "Brand Vision", desc: "" }
    ]
  },
  {
    id: "02",
    title: "Audience Research",
    pills: ["Research", "Audience", "Insights"],
    description: "Understanding who you're speaking to helps shape every decision, from your messaging to your visual identity.",
    details: [
      { title: "Customer Personas", desc: "" },
      { title: "User Behaviour", desc: "" },
      { title: "Buying Journey", desc: "" },
      { title: "Customer Insights", desc: "" }
    ]
  },
  {
    id: "03",
    title: "Competitor Analysis",
    pills: ["Market", "Positioning", "Research"],
    description: "We review your market to understand what's working, what's missing and where your brand can stand apart.",
    details: [
      { title: "Competitor Review", desc: "" },
      { title: "Market Position", desc: "" },
      { title: "Industry Trends", desc: "" },
      { title: "Opportunities", desc: "" }
    ]
  },
  {
    id: "04",
    title: "Brand Direction",
    pills: ["Identity", "Creative", "Strategy"],
    description: "Using everything we've learned, we define the creative direction that will guide your brand across every touchpoint.",
    details: [
      { title: "Creative Direction", desc: "" },
      { title: "Visual Identity", desc: "" },
      { title: "Brand Personality", desc: "" },
      { title: "Design Guidelines", desc: "" }
    ]
  }
];

const googleAdsBrandPoints = [
  {
    number: "01",
    title: "Inconsistent Identity",
    description:
      "Different logos, colours and visuals create confusion.",
  },
  {
    number: "02",
    title: "Generic Design",
    description:
      "A brand that looks like everyone else is difficult to remember.",
  },
  {
    number: "03",
    title: "No Brand Guidelines",
    description:
      "Without clear standards, every touchpoint feels different.",
  },
  {
    number: "04",
    title: "Design Without Purpose",
    description:
      "Creative assets look good but don't strengthen the brand.",
  },
];

const googleAdsUssPoints = [
  {
    number: "01",
    title: "Strategic Brand Identity",
    description:
      "Every visual element is designed around your business and audience.",
  },
  {
    number: "02",
    title: "Distinctive Design",
    description:
      "Create a memorable identity that stands apart from competitors.",
  },
  {
    number: "03",
    title: "Consistent Brand System",
    description:
      "Guidelines ensure every touchpoint feels recognisable and cohesive.",
  },
  {
    number: "04",
    title: "Purposeful Creative Assets",
    description:
      "Every design supports your brand, marketing and long term growth.",
  },
];

const brandingLeftData = [
  {
    id: 1,
    year: "Featured Work",
    category: "Company Profile",
    title: "Company Profiles",
    description: "Professionally designed company profiles that introduce your business, communicate your expertise and build credibility with potential clients.",
    image: "/assets/branding/company.webp",
  },
  {
    id: 2,
    year: "Featured Work",
    category: "Marketing Collateral",
    title: "Brochures",
    description: "Premium brochures that showcase your products, services and brand through clear, engaging visual communication.",
    image: "/assets/branding/brochures.webp",
  },
  {
    id: 3,
    year: "Featured Work",
    category: "Client Success",
    title: "Case Studies",
    description: "Professional case studies that demonstrate your work, showcase measurable outcomes and build trust through real client success stories.",
    image: "/assets/Case Studies - 1.webp",
  }
];

const brandingRightData = [
  {
    id: 4,
    year: "Featured Work",
    category: "Sales Presentation",
    title: "Sales Decks",
    description: "Sales presentations designed to communicate your brand value, support conversations and improve client engagement.",
    image: "/assets/Sales Decks - 1.webp",
    imageClass: "object-cover object-[130%_100%]"
  },
  {
    id: 5,
    year: "Featured Work",
    category: "Business Pitch",
    title: "Pitch Decks",
    description: "Strategic pitch presentations designed to communicate your vision, support investment opportunities and win new business.",
    image: "/assets/Pitch Decks - 2.webp",
  },
  {
    id: 6,
    year: "Featured Work",
    category: "Investment Materials",
    title: "Investor Decks",
    description: "Investor presentations that clearly communicate your business model, growth strategy and long term vision with confidence.",
    image: "/assets/Investor Decks - 1.webp",
  }
];

// Card Data Structure

function Hero() {
  return (
    <section className="relative overflow-hidden bg-black px-4 min-[375px]:px-6 pb-[40px] pt-[40px] text-white sm:pb-[72px] sm:pt-[78px]">
      <style>{`
        @keyframes glow-move-tl {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(8vw, 4vw) scale(1.15); }
          66% { transform: translate(3vw, 8vw) scale(0.95); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes glow-move-br {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-8vw, -4vw) scale(1.15); }
          66% { transform: translate(-3vw, -8vw) scale(0.95); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .animate-glow-tl {
          animation: glow-move-tl 8s ease-in-out infinite;
        }
        .animate-glow-br {
          animation: glow-move-br 8s ease-in-out infinite;
        }
      `}</style>

      {/* Top Left Gradient */}
      <div
        className="pointer-events-none absolute -left-[20%] -top-[20%] h-[80vw] max-h-[800px] min-h-[500px] w-[80vw] max-w-[800px] min-w-[500px] rounded-full opacity-40 blur-[100px] animate-glow-tl"
        style={{ background: 'radial-gradient(circle, #FF5500 0%, rgba(255,85,0,0) 70%)' }}
      />

      {/* Bottom Right Gradient */}
      <div
        className="pointer-events-none absolute -bottom-[20%] -right-[20%] h-[80vw] max-h-[800px] min-h-[500px] w-[80vw] max-w-[800px] min-w-[500px] rounded-full opacity-40 blur-[100px] animate-glow-br sm:px-6"
        style={{ background: 'radial-gradient(circle, #FF5500 0%, rgba(255,85,0,0) 70%)' }}
      />

      <div className="relative z-10 mx-auto grid max-w-[1200px] xl:max-w-[1300px] gap-8 sm:gap-10 lg:grid-cols-[minmax(0,520px)_minmax(0,640px)] lg:items-center lg:justify-between">
        <Stagger staggerDelay={0.15}>
          <StaggerItem>
            <p className="font-[var(--font-be-vietnam)] text-[13px] font-normal sm:text-[14px] uppercase tracking-[0.5px] text-white text-center sm:text-start">
              BRANDING & GRAPHICS
            </p>
          </StaggerItem>
          <StaggerItem>
            <h1 className="mt-[24px] max-w-[700px] font-[var(--font-be-vietnam)] text-[32px] font-bold lowercase leading-[120%] tracking-[-1px] sm:tracking-[-3px] sm:text-[50px] text-white text-center sm:text-start">
              From strategy to every {' '}

              <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[64px] lowercase font-normal timesFontFamily italic text-white tracking-[-1px] sm:tracking-[-2.8px] whitespace-nowrap">
                brand touchpoint
              </span>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-[24px] min-[375px]:mt-[30px] sm:mt-[50px] max-w-[550px] sm:max-w-[600px] font-[var(--font-inter)] text-[13px] leading-[1.6] sm:leading-[32px] text-white/90 sm:text-[16px] text-center sm:text-start">
              A strong brand is more than a logo. We create brand identities, guidelines, business presentations and creative assets that build recognition, consistency and trust across <span className="whitespace-nowrap">every customer touchpoint.</span>
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="flex justify-center sm:block">

              <Link
                className="mt-[24px] sm:mt-[36px] inline-flex h-[38px] sm:h-[38px] min-w-[178px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-white transition uppercase hover:bg-[#ff6b1f]"
                href="/contact"
              >
                Book a Consultation
              </Link>
            </div>
          </StaggerItem>
        </Stagger>

        <FadeRight delay={0.3} className="w-full flex justify-center lg:justify-end">
          <LightConsultationForm className="w-full" />
        </FadeRight>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-black px-6 pt-[50px] sm:pt-[70px] text-white pb-30">
      <Stagger staggerDelay={0.15} className="mx-auto max-w-[1200px] xl:max-w-[1300px]  text-center">
        <StaggerItem>
          <p className="font-[var(--font-be-vietnam)] text-[10px] font-medium uppercase tracking-[4px] text-[#ff5500]">
            LET&apos;S SCALE
          </p>
        </StaggerItem>
        <StaggerItem>
          <h2 className="mt-[24px] sm:mt-10 font-[var(--font-be-vietnam)] text-[32px] sm:text-[48px] font-medium leading-[1.08] tracking-[-1.5px]">
            good design
            <br />
            speaks{" "}
            <span className="font-[var(--font-cormorant)] text-[42
            px] sm:text-[64px] leading-[1.1] sm:leading-none font-extralight timesFontFamily italic text-[#ff5500]">
              for itself
            </span>
          </h2>
        </StaggerItem>
        <StaggerItem>
          <div className="mt-[30px] sm:mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              className="inline-flex h-[38px] sm:h-[42px] min-w-[190px] items-center justify-center rounded-full bg-[#ff5500] px-8 font-[var(--font-be-vietnam)] text-[12px] font-bold uppercase text-white transition hover:bg-[#ff6b1f]"
              href="/contact"
            >
              Book a Consultation
            </Link>
            {/* <Link className="font-[var(--font-be-vietnam)] text-[13px] font-medium text-white/80 transition hover:text-white border-white border rounded-full px-6 h-[48px] inline-flex items-center justify-center" href="#services">
              Book a Strategy Call
            </Link> */}
          </div>
        </StaggerItem>
      </Stagger>
    </section>
  );
}

const MarketingStrategy = () => {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <Header />
      <Hero />
      <Numbers stats={emailStats} />
      <CaseStudies
        heading={
          <h2 className="text-white">
            <span className="font-medium text-[32px] leading-[40px] sm:text-[40px] sm:leading-[48px] tracking-[-2px] lg:text-[56px] lg:leading-[70px] lg:tracking-[-3.2px]">
              see how we create
            </span>
            <span style={{ fontFamily: '"Times New Roman", Times, serif' }} className="font-normal italic text-[42px] leading-[40px] sm:text-[48px] sm:leading-[48px] tracking-[-2px] lg:text-[72px] lg:leading-[70px] lg:tracking-[-3.2px]">
              {" "}business{" "}
            </span>
            <span style={{ fontFamily: '"Times New Roman", Times, serif' }} className="font-normal italic text-[42px] leading-[40px] sm:text-[48px] sm:leading-[48px] tracking-[-2px] lg:text-[72px] lg:leading-[70px] lg:tracking-[-3.2px]">
              assets
            </span>
          </h2>
        }
        description={
          <p className="font-normal text-[13px] leading-[24px] lg:text-[18px] lg:leading-[28px] text-white/90 max-w-[600px] mt-2">
            Professionally designed business documents that strengthen your brand, communicate your value and support every <span className="whitespace-nowrap sm:whitespace-normal">client conversation.</span>
          </p>
        }
        leftData={brandingLeftData}
        rightData={brandingRightData}
        imageAspectRatio="aspect-[617/344]"
      />
      <Brands />
      <BrandingServices />
      <YulaHappiness />
      <div className="sm:-mb-[180px]">
        <WhyEmailFails
          hideBadge={false}
          heading={
            <h2 className="mx-auto max-w-[900px] text-center font-[var(--font-inter)] text-[32px] font-medium leading-[1] tracking-[-1.5px] sm:text-[56px]">
              why most{" "}
              <span
                className="font-normal italic text-[42px] sm:text-[72px]"
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
              >
                brands
              </span>{" "}
              fails
            </h2>
          }
          subheading={
            <>
              Most brands don&apos;t have a design problem, <br />
              they have a consistency and <span className="whitespace-nowrap">identity problem.</span>
            </>
          }
          leftTitle="Most Brands"
          rightTitle="The USS Difference"
          leftPoints={googleAdsBrandPoints}
          rightPoints={googleAdsUssPoints}
          centerLogo="/assets/uss-logo.png"
          logoClassName="w-[80px] lg:w-[115px]"
          tagline="THE OPPORTUNITY"
        />
      </div>
      <BrandIdentity />
      <SixStepSystem
        heading={
          <h2 className="text-white font-medium tracking-[-1px] sm:tracking-[-2px] text-[36px] sm:text-[56px] leading-[1.1] lowercase sm:leading-[60px]">
            Before the logo comes <br className="hidden sm:block" />
            <span className="inline-flex items-center gap-x-2 sm:gap-x-3 mt-1 sm:mt-0">
              <span>the</span>
              <span
                className="text-[#FF5500] italic font-normal font-[var(--font-cormorant)] timesFontFamily text-[46px] sm:text-[72px] leading-[1.1] sm:leading-[69.36px] tracking-[-1.5px] sm:tracking-[-2px]"
              >
                strategy.
              </span>
            </span>
          </h2>
        }
        data={touchpointStepsData}
      />
      <RevenueMethod
        tagline="OUR PROCESS"
        heading={<>how we bring <br /><span className="italic text-[#ff5500] font-normal text-[40px] sm:text-[72px] leading-[1.1] sm:leading-[70px] tracking-[-3%]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>your brand to life</span></>}
        cards={[
          { id: '01', title: 'Discover', description: 'Understand your business, audience, competitors and long term goals to build a strong strategic foundation', bgImage: '/assets/method1.webp' },
          { id: '02', title: 'Define', description: 'Define your positioning, messaging and creative direction before developing your visual identity', bgImage: '/assets/method2.webp' },
          { id: '03', title: 'Design', description: 'Design a distinctive visual identity, logo system and supporting brand assets that reflect your business', bgImage: '/assets/method3.webp' },
          { id: '04', title: 'Deliver', description: 'Deliver complete brand guidelines, launch-ready assets and everything needed for a consistent rollout.', bgImage: '/assets/method4.webp' },
        ]}
      />
      <Testimonials />
      <Team />
      <GoodCompanyMap />
      <FinalCta />
      <div className="mt-[-120px]">

        <Footer />
      </div>
    </main>
  );
};

export default MarketingStrategy;