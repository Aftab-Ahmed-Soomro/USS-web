import Link from "next/link";
import { Header } from "../components/Header";
import Stagger from "../components/Stagger";
import StaggerItem from "../components/Staggeritem";
import { ConsultationForm } from "../components/ConsultationForm";
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
import { GoodCompanyMap } from "../components/GoodCompanyMap";
import { Footer } from "../components/Footer";

const emailStats = [
  { value: "5x", label: "ROAS Achieved" },
  { value: "55M", label: "AED Generated in Revenue" },
  { value: "500K", label: "Leads Delivered" },
  { value: "100+", label: "Brands Worldwide" },
];

const rightSidePlaceholder = {
  pills: ["Concept", "Positioning", "Audience Fit"],
  description: "We start by identifying the right product for your niche, audience size and Q4 timing — then build the commercial architecture around it.",
  details: [
    {
      title: "Product Concept & Validation",
      desc: "The right product for your niche, audience size and Black Friday timing."
    },
    {
      title: "Brand & Creative Direction",
      desc: "Product looks and feels authentic to your personal brand."
    },
    {
      title: "Launch-ready Assets",
      desc: "Imagery, copy and sales assets ready ahead of go-live."
    },
    {
      title: "Pricing & Margin Structure",
      desc: "A commercial model that maximises revenue and stays compelling."
    }
  ]
};

const touchpointStepsData = [
  { id: "01", title: "Business Discovery", ...rightSidePlaceholder },
  { id: "02", title: "Audience Research", ...rightSidePlaceholder },
  { id: "03", title: "Competitor Analysis", ...rightSidePlaceholder },
  { id: "04", title: "Brand Direction", ...rightSidePlaceholder }
];

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

const brandingLeftData = [
  {
    id: 1,
    year: "Featured Work",
    category: "Company Profile",
    title: "Company Profiles",
    description: "a professionally designed overview of your business, helping you introduce your company, services and expertise with confidence.",
    image: "/assets/branding/company.png",
  },
  {
    id: 2,
    year: "Featured Work",
    category: "Marketing Collateral",
    title: "Brochures",
    description: "Beautifully Designed Brochures That Present Your Products, Services Or Brand In A Clear And Visually Engaging Way.",
    image: "/assets/branding/brochures.png",
  },
  {
    id: 3,
    year: "Featured Work",
    category: "Client Success",
    title: "Case Studies",
    description: "Real Examples Of Your Work, Highlighting Projects, Outcomes And The Value You've Delivered For Your Clients.",
    image: "/assets/branding/case.png",
  }
];

const brandingRightData = [
  {
    id: 4,
    year: "Featured Work",
    category: "Sales Presentation",
    title: "Sales Decks",
    description: "Clear, Engaging Presentations That Help You Communicate Ideas, Showcase Your Offering And Support Every Sales Conversation.",
    image: "/assets/branding/sales.png",
    imageClass: "object-cover object-[130%_100%]"
  },
  {
    id: 5,
    year: "Featured Work",
    category: "Business Pitch",
    title: "Pitch Decks",
    description: "Professional Presentations Designed To Communicate Your Vision, Explain Your Business And Support Investor Or Client Meetings.",
    image: "/assets/branding/pitch.png",
  },
  {
    id: 6,
    year: "Featured Work",
    category: "Investment Materials",
    title: "Investor Decks",
    description: "Present Your Business, Vision And Growth Plans With A Professionally Designed Investment Presentation.",
    image: "/assets/branding/investor.png",
  }
];

// Card Data Structure
const CARDS_DATA = [
  {
    id: '01',
    title: 'Discover',
    description: 'We get to know your business, audience and ambitions before any creative work begins.',
    bgImage: '/assets/method1.png', // Replace with your image src
  },
  {
    id: '02',
    title: 'Define',
    description: 'We track every metric meticulously, ensuring your campaigns are continuously optimized for open rates, click-throughs, and conversions.',
    bgImage: '/assets/method2.png', // Replace with your image src
  },
  {
    id: '03',
    title: 'Design',
    description: 'Beautiful, responsive designs tailored to your brand identity. We craft visually stunning, conversion-focused emails that captivate your audience.',
    bgImage: '/assets/method3.png', // Replace with your image src
  },
  {
    id: '04',
    title: 'Deliver',
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
          <h2 className="lowercase text-white text-[32px] font-medium leading-[1.15] tracking-[-3%] sm:text-[56px] sm:leading-[70px] mb-[40px] sm:mb-16">
            How we bring <br />

            <span
              className="italic text-[#ff5500] font-normal text-[42px] sm:text-[72px] leading-[1.1] sm:leading-[70px] tracking-[-3%]"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              your brand to life
            </span>
          </h2>
        </StaggerItem>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] sm:gap-6 justify-center items-center">
          {CARDS_DATA.map((card) => (
            <StaggerItem key={card.id}>
              <div
                tabIndex={0}
                style={{
                  backgroundImage: `url(${card.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                className="group relative rounded-[28px] overflow-hidden p-6 flex flex-col justify-between cursor-pointer focus:outline-none transition-all duration-500 ease-out w-full h-[360px] sm:h-[606.93px]"
              >
                {/* Card Number */}
                <div
                  className="text-[9.82px] font-medium leading-[14.73px] tracking-[2.95px] text-white opacity-80 align-middle"
                >
                  {card.id}
                </div>

                {/* Bottom Content Group (Animates Up on Hover) */}
                <div className="transform translate-y-[80px] group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-500 ease-out will-change-transform">

                  {/* Title */}
                  <h3
                    className="text-[18px] sm:text-[22.64px] font-normal leading-[1.3] sm:leading-[26.78px] tracking-[0%] text-white align-middle mb-[8px] sm:mb-3"
                  >
                    {card.title}
                  </h3>

                  {/* Description (Fades and slides in cleanly) */}
                  <p
                    className="text-[14px] sm:text-[15.5px] font-normal leading-[1.4] sm:leading-[18.86px] tracking-[0%] text-white/90 align-middle opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 delay-75 ease-out"
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
        className="pointer-events-none absolute -bottom-[20%] -right-[20%] h-[80vw] max-h-[800px] min-h-[500px] w-[80vw] max-w-[800px] min-w-[500px] rounded-full opacity-40 blur-[100px] animate-glow-br"
        style={{ background: 'radial-gradient(circle, #FF5500 0%, rgba(255,85,0,0) 70%)' }}
      />

      <div className="relative z-10 mx-auto grid max-w-[1150px] gap-10 lg:grid-cols-[minmax(0,660px)_430px] lg:items-center lg:justify-between">
        <Stagger staggerDelay={0.15}>
          <StaggerItem>
            <h1 className="mt-[24px] max-w-[700px] font-[var(--font-be-vietnam)] text-[32px] font-bold lowercase sm:leading-[70px] tracking-[-1px] sm:tracking-[-3px] sm:text-[58px] text-white">
              From strategy and identity to every
              <br />{" "}
              <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] lowercase font-normal timesFontFamily italic text-white leading-[0] sm:leading-[30px] tracking-[-1px] sm:tracking-[-2.8px]">
                brand touchpoint.
              </span>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-[24px] min-[375px]:mt-[30px] sm:mt-[50px] max-w-[550px] font-[var(--font-inter)] text-[13px] leading-[1.6] sm:leading-[32px] text-white/90 sm:text-[18px]">
              A strong brand is more than a logo. We develop the strategy, identity and supporting assets that help your business present itself professionally across every customer touchpoint.
            </p>
          </StaggerItem>
          <StaggerItem>
            <Link
              className="mt-[24px] sm:mt-[36px] inline-flex h-[46px] sm:h-[38px] min-w-[178px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-white transition uppercase hover:bg-[#ff6b1f]"
              href="/contact"
            >
              Book a Consultation
            </Link>
          </StaggerItem>
        </Stagger>

        <ConsultationForm />
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-black px-4 min-[375px]:px-6 pt-[50px] sm:pt-[70px] text-white pb-30">
      <Stagger staggerDelay={0.15} className="mx-auto max-w-[1150px] text-center">
        <StaggerItem>
          <p className="font-[var(--font-be-vietnam)] text-[10px] font-medium uppercase tracking-[4px] text-[#ff5500]">
            LET&apos;S SCALE
          </p>
        </StaggerItem>
        <StaggerItem>
          <h2 className="mt-[24px] sm:mt-10 font-[var(--font-be-vietnam)] text-[32px] sm:text-[55px] font-medium leading-[1.08] tracking-[-1.5px]">
            turn your database
            <br />
            into{" "}
            <span className="font-[var(--font-cormorant)] text-[42
            px] sm:text-[62px] leading-[1.1] sm:leading-none font-extralight timesFontFamily italic text-[#ff5500]">
              repeat revenue
            </span>
          </h2>
        </StaggerItem>
        <StaggerItem>
          <div className="mt-[30px] sm:mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              className="inline-flex h-[46px] sm:h-[42px] min-w-[190px] items-center justify-center rounded-full bg-[#ff5500] px-8 font-[var(--font-be-vietnam)] text-[12px] font-bold uppercase text-white transition hover:bg-[#ff6b1f]"
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
              documents
            </span>
          </h2>
        }
        description={
          <p className="font-normal text-[13px] leading-[24px] lg:text-[18px] lg:leading-[28px] text-white/90 max-w-[600px] mt-2">
            Explore how we've helped businesses communicate professionally through sales decks, company profiles and branded presentations.
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
          subheading="Most brands don't have an email problem, they have a strategy problem."
          leftTitle="Most Brands"
          rightTitle="The USS Difference"
          leftPoints={googleAdsBrandPoints}
          rightPoints={googleAdsUssPoints}
          centerLogo="/assets/uss-logo.png"
          logoClassName="w-[80px] lg:w-[115px]"
        />
      </div>
      <BrandIdentity />
      <SixStepSystem
        heading={
          <h2 className="text-white font-medium tracking-[-1px] sm:tracking-[-2px] text-[36px] sm:text-[56px] leading-[1.1] sm:leading-[69.36px]">
            Before the logo comes <br className="hidden sm:block" />
            <span className="inline-flex items-center gap-x-2 sm:gap-x-3 mt-1 sm:mt-0">
              <span>the</span>
              <span
                className="text-[#FF5500] italic font-normal font-[var(--font-cormorant)] timesFontFamily text-[46px] sm:text-[72px] leading-[1.1] sm:leading-[69.36px] tracking-[-1.5px] sm:tracking-[-2px]"
              >
                strategy
              </span>
            </span>
          </h2>
        }
        data={touchpointStepsData}
      />
      <RevenueMethod />
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