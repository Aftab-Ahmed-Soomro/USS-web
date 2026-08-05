"use client";

import Link from "next/link";
import { Header } from "../components/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import { ConsultationForm } from "../components/ConsultationForm";
import { Brands } from "../components/Brands";
import { Testimonials } from "../components/Testimonials";
import { GoodCompanyMap } from "../components/GoodCompanyMap";
import { Team } from "../components/Team";
import { Footer } from "../components/Footer";
import Stagger from "../components/Stagger";
import StaggerItem from "../components/Staggeritem";
import { PowerOf360 } from "../components/PowerOf360";
import { UssDifferentSection } from "../components/UssDifferentSection";
import { BuildGrowthSection } from "../components/BuildGrowthSection";
import TeamAccordion from "../components/TeamAccordion";
import { LevelsOfFunnel } from "../components/LevelsOfFunnel";
import { StrategyByBusinessGoal } from "../components/StrategyByBusinessGoal";
import { WhyGoogleAdsWork } from "../components/WhyGoogleAdsWork";
import TargetRightPeople, { TargetItem } from "../components/TargetRightPeople";
import { RevenueMethod } from "../components/RevenueMethod";
import PlatformsWeWorkWith from "../components/PlatformsWeWorkWith";
import FadeRight from "../components/FadeRight";
import { EmailVisuals } from "../components/EmailVisuals";
import { WhyWhatsappWorks } from "../components/WhyWhatsappWorks";
import WhatsAppChannels from "../components/WhatsAppChannels";
import ConversationFlow from "../components/ConversationFlow";
import EmailMarketingQuote from "../components/EmailMarketingQuote";
import OurOrganicSocialMediaApproach from "../components/OurOrganicSocialMediaApproach";
import SocialMediaRevenueMethod from "../components/SocialMediaRevenueMethod";
import { ContentCreationServices } from "../components/ContentCreationServices";
import { ContentCreationGrid } from "../components/ContentCreationGrid";
import DedicatedPartner from "../components/DedicatedPartner";
import CaseStudies from "../components/CaseStudies";
import { BrandingServices } from "../components/BrandingServices";
import { SixStepSystem } from "../components/SixStepSystem";

const strategyAccordionData = [
  {
    id: "01",
    title: "Discovery & Research",
    description: "We get to know your business, market, competitors and audience before any marketing begins. This gives us the insight needed to identify opportunities and build a strategy with confidence.",
  },
  {
    id: "02",
    title: "Strategic Planning",
    description: "Using our research, we create a tailored marketing roadmap covering channels, messaging, budgets, KPIs and campaign priorities, giving your business a clear direction for growth.",
  },
  {
    id: "03",
    title: "Execution & Optimisation",
    description: "Once your strategy is live, we monitor performance, analyse results and continuously refine campaigns to maximise ROI and uncover new opportunities.",
  },
  {
    id: "04",
    title: "Scale & Growth",
    description: "As your business grows, so does the strategy. We introduce new channels, optimise budgets and expand activity to support long-term, sustainable growth.",
  }
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

const systemItems = [
  {
    number: "01",
    title: "Automated Customer Journeys",
    copy: "Automated email flows that welcome, retarget and retain customers.",
  },
  {
    number: "02",
    title: (
      <>
        Campaign <br />
        Planning
      </>
    ),
    copy: "Strategic campaigns aligned with launches, promotions and key business moments.",
  },
  {
    number: "03",
    title: "Segmentation and Personalisation",
    copy: "Relevant content delivered to the right audience at the right time.",
  },
  {
    number: "04",
    title: (
      <>
        Reporting and <br />
        Optimisation
      </>
    ),
    copy: "Continuous reporting and optimisation to improve campaign performance.",
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
    image: "/assets/History Picture.png",
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

      <div className="relative z-10 mx-auto grid max-w-[1150px] gap-10 lg:grid-cols-[minmax(0,660px)_430px] lg:items-center lg:justify-between text-center sm:text-start">
        <Stagger staggerDelay={0.15}>

          <StaggerItem>
            <h1 className="mt-[24px] max-w-[700px] font-[var(--font-be-vietnam)] text-[32px] font-bold  leading-[30%] sm:leading-[95%] tracking-[-1px] sm:tracking-[-3px] sm:text-[58px] text-white text-center sm:text-start">
              we don’t just {" "}
              <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] lowercase font-normal timesFontFamily italic text-white tracking-[-1px] sm:tracking-[-2.8px]">
                market,
              </span>
            </h1>
            <h1 className="mt-[24px] max-w-[700px] font-[var(--font-be-vietnam)] text-[32px] font-bold  leading-[50%] tracking-[-1px] sm:tracking-[-3px] sm:text-[58px] text-white text-center sm:text-start">
              we scale{" "}
              <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] lowercase font-normal timesFontFamily italic text-white tracking-[-1px] sm:tracking-[-2.8px]">
                brands.
              </span>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-[24px] min-[375px]:mt-[30px] sm:mt-[50px] max-w-[600px] font-[var(--font-inter)] text-[13px] text-white/90 sm:text-[18px] text-center sm:text-start">
              Our 360 marketing approach brings strategy, creative and performance together, creating one connected system that works towards the same goal.
            </p>
            <p className="mt-[40px] max-w-[600px] font-[var(--font-inter)] text-[13px]  text-white/90 sm:text-[18px] text-center sm:text-start">
Trusted by over 100 businesses across the US, UAE & UK
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="flex justify-center sm:justify-start">
              
              <Link
              className="mt-[24px] sm:mt-[36px] inline-flex h-[46px] sm:h-[38px] min-w-[178px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-white transition uppercase hover:bg-[#ff6b1f]"
              href="/contact"
            >
              Book a Consultation
            </Link>
            </div>
          </StaggerItem>
        </Stagger>

        <ConsultationForm />
      </div>
    </section>
  );
}

function EmailOverview() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="relative mx-auto grid max-w-[1150px] px-6 py-[50px] sm:pt-10 sm:pb-0 lg:grid-cols-[minmax(0,680px)_minmax(320px,430px)] lg:justify-between">
        {/* Image mockup */}
        <FadeRight duration={0.8} delay={0.2} className="order-2 -mx-1 pt-10 sm:mx-0 lg:order-none lg:col-start-2 lg:row-start-1 lg:flex lg:items-start lg:pt-0">
          <div className="relative mx-auto aspect-[463/842] w-full max-w-[260px] min-[375px]:max-w-[300px] sm:max-w-[400px] overflow-hidden bg-white shadow-[0_24px_55px_rgba(0,0,0,0.35)]">
            <Image
              src="/assets/email-market.png"
              alt="Email marketing campaign designs"
              fill
              priority
              sizes="(min-width: 1024px) 400px, calc(100vw - 48px)"
              className="object-cover object-top"
            />
          </div>
        </FadeRight>

        {/* Text content */}
        <Stagger staggerDelay={0.1} className="order-1 text-white lg:col-start-1 lg:row-start-1 lg:max-w-[680px]">
          <StaggerItem>
            <p className="mb-[20px] text-[11px] font-normal leading-[19.6px] tracking-[0%] text-white sm:text-[14px]">
              Our Email System for Retention and Growth
            </p>
          </StaggerItem>

          <StaggerItem>
            <h2 className="text-[30px] lowercase min-[375px]:text-[32px] font-medium leading-[1.1] tracking-[-1.5px] sm:text-[56px] sm:leading-[70px]">
              Our Approach to <br />
              <span
                className="text-[36px] font-normal italic tracking-[-1.5px] text-[#ff5500] sm:text-[72px] sm:leading-[70px]"
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
              >
                Email Marketing
              </span>
            </h2>
          </StaggerItem>

          <div className="mt-[40px] sm:mt-[52px] grid grid-cols-1 sm:grid-cols-2">
            {systemItems.map((item, i) => (
              <StaggerItem key={item.number}>
                <article
                  className={`py-[24px] sm:py-7 ${i % 2 === 1 ? "sm:border-l border-white/20 sm:pl-8" : ""
                    } ${i > 0 ? "border-t border-white/20" : ""
                    } ${i === 1 ? "sm:border-t-0" : ""
                    }`}
                >
                  <p className="text-[11px] font-normal leading-5 text-white/90 sm:text-[14px]">
                    {item.number}
                  </p>
                  <h3 className="mt-[10px] sm:mt-[14px] max-w-[350px] text-[18px] font-semibold leading-[1.3] tracking-[-0.6px] sm:text-[24px] sm:leading-8">
                    {item.title}
                  </h3>
                  <p className="mt-[8px] sm:mt-[16px] max-w-[95%] sm:max-w-[280px] text-[14px] font-normal leading-[1.6] text-white/90 sm:text-[16px] sm:leading-7">
                    {item.copy}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </div>
    </section>
  );
}

const steps = [
  {
    title: "Brand & Story",
    icon: "/assets/rocket.png", // add icon src here
    points: [
      "Introduce your business",
      "USP focus",
      "Share your founder's journey",
      "Build trust through authentic storytelling",
    ],
  },
  {
    title: "Products & Services Spotlight",
    icon: "/assets/cardbox.png", // add icon src here
    points: [
      "Showcase products or services",
      "Highlight new launches and offers",
      "Explain features and benefits",
    ],
  },
  {
    title: "Education and Value",
    icon: "/assets/bulb.png", // add icon src here
    points: [
      "Tips, guides and expert advice",
      "Answer FAQ's",
      "Help customers make informed decisions",
    ],
  },
  {
    title: "Promotions & Updates",
    icon: "/assets/siren.png", // add icon src here
    points: [
      "Exclusive offers and launches",
      "Seasonal campaigns",
      "Company news and announcements",
    ],
  },
];

const emailStrategyItems: TargetItem[] = [
  {
    number: "01",
    icon: "/assets/rocket.png",
    title: "Brand & Story",
    points: [
      "Introduce your brand and values",
      "Meet the team snippet",
      "Share your founder's story",
      "Build trust through authentic content",
    ],
  },
  {
    number: "02",
    icon: "/assets/cardbox.png",
    title: "Products & Services",
    points: [
      "Showcase products and services",
      "Highlight new launches and offers",
      "Explain key features and benefits",
      "Encourage enquiries and purchases",
    ],
  },
  {
    number: "03",
    icon: "/assets/bulb.png",
    title: "Education & Value",
    points: [
      "Share tips, guides and insights",
      "Answer FAQ's",
      "Help customers make informed decisions",
      "Position your brand as the expert",
    ],
  },
  {
    number: "04",
    icon: "/assets/siren.png",
    title: "Promotions & Updates",
    points: [
      "Promote offers and campaigns",
      "Announce new products and launches",
      "Share company news and updates",
      "Re-engage existing customers",
    ],
  },
];

function EmailStrategy() {
  return (
    <TargetRightPeople
      items={emailStrategyItems}
      title={
        <Stagger staggerDelay={0.12}>
          <StaggerItem>
            <h2 className="lowercase text-center text-white font-[var(--font-be-vietnam)] font-medium text-[36px] sm:text-[56px] leading-[1.2] sm:leading-[80px] tracking-[-1.5px] sm:tracking-[-3px]">
              every brand has its <br className="hidden sm:block" />
              own{" "}
              <span
                className="italic text-[#ff5500] font-normal text-[44px] sm:text-[72px] leading-[1.2] sm:leading-[80px] tracking-[-1.5px] sm:tracking-[-3px]"
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
              >
                email strategy
              </span>
            </h2>
          </StaggerItem>
        </Stagger>
      }
    />
  );
}

function SocialServices() {
  return (
    <section className="bg-[#080808] px-4 min-[375px]:px-5 min-[480px]:px-6 sm:px-6 py-[48px] min-[390px]:py-[58px] sm:py-[70px] text-white lg:py-[100px]">
      <Stagger staggerDelay={0.15}>
        <div className="mx-auto max-w-[1150px]">
          {/* Header */}
          <StaggerItem>
            <p className="font-[var(--font-inter)] text-[13px] font-bold uppercase tracking-[4px] text-[#ff5500]">
              SERVICES
            </p>
          </StaggerItem>
          <StaggerItem>
            <h2 className="mt-[16px] min-[390px]:mt-[20px] sm:mt-[26px] mb-8 min-[390px]:mb-10 sm:mb-[60px] font-[var(--font-be-vietnam)] text-[32px] sm:text-[50px] font-medium lowercase leading-none tracking-[-1.4px]">
              our social media{" "}
              <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[70px] font-extralight timesFontFamily italic tracking-[-0.04em]">
                services
              </span>
            </h2>
          </StaggerItem>

          {/* Accordion List */}
          <div className="flex flex-col">
            {socialServicesData.map((service, index) => (
              <StaggerItem key={service.title}>
                <article
                  tabIndex={0}
                  className="group border-b border-white/20 py-5 min-[390px]:py-6 sm:py-8 first:border-t flex cursor-pointer focus:outline-none transition-colors duration-300"
                >
                  {/* Number */}
                  <div
                    className="w-[50px] min-[390px]:w-[70px] min-[480px]:w-[100px] sm:w-[150px] shrink-0 text-white font-medium text-[14px] sm:text-[32px] leading-[20px] tracking-normal"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start">

                      {/* Title */}
                      <h3
                        className="text-white font-normal text-[20px] sm:text-[36px] leading-[1.2] sm:leading-[40px] tracking-[-0.72px]"
                      >
                        {service.title}
                      </h3>

                      {/* Icon */}
                      <div className="relative w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center ml-2 min-[390px]:ml-4 shrink-0 mt-1">
                        {/* + Icon */}
                        <span className="absolute text-white text-xl sm:text-2xl group-hover:opacity-0 group-focus:opacity-0 transition-opacity duration-300">
                          +
                        </span>
                        {/* Orange X */}
                        <div className="absolute w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#ff5500] flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300">
                          <span className="text-black text-base sm:text-lg font-medium leading-none pb-[2px]">×</span>
                        </div>
                      </div>
                    </div>

                    {/* Description animation (Grid trick) */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                      <div className="overflow-hidden">
                        <p
                          className="text-white mt-3 sm:mt-4 max-w-[550px] opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 delay-75 font-normal text-[14px] min-[360px]:text-[15px] sm:text-[20px] leading-[1.5] sm:leading-[24px] tracking-normal"
                        >
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </div>
        </div>
      </Stagger>
    </section>
  );
}

export default function New360WithForm() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080808]">
      <div className="pointer-events-none absolute left-[-40px] top-[76px] h-[357px] w-[377px] rounded-full bg-[#7a2609] opacity-80 blur-[90px]" />
      <div className="pointer-events-none absolute right-[-62px] top-[183px] h-[536px] w-[360px] rounded-full bg-[#8a330d] opacity-80 blur-[98px]" />
      <div className="pointer-events-none absolute bottom-[-120px] left-0 h-[180px] w-full bg-[#5b1803] opacity-55 blur-[80px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[4px] bg-[#222]" />
      <Header />
      <Hero />
      <Brands />
      <PowerOf360 />
      <UssDifferentSection />
      <BuildGrowthSection />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 w-full flex flex-col justify-center items-center pt-0 bg-black gap-6 sm:gap-8 mb-10 sm:mb-15"
      >
        <h2 id="marketing-strategy" className="font-[var(--font-be-vietnam)] text-[32px] sm:text-[58px] font-medium text-white lowercase tracking-[-1px] sm:tracking-[-2px]">
          marketing{" "}
          <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] font-normal italic timesFontFamily tracking-[-1px] sm:tracking-[-2.8px]">
            strategy
          </span>
        </h2>
      </motion.div>
      <TeamAccordion
        heading={
          <h2 className="text-[32px] sm:text-[60px] leading-[1] tracking-[-1px] lg:tracking-[-3px] font-light lowercase" style={{ fontWeight: 300 }}>

                  from discovery to <span className="relative inline-block z-10 whitespace-nowrap text-[#ff5500] timesFontFamily italic text-[42px] sm:text-[74px]">
                    scale.

                    
                  </span>
                </h2>
        }
        data={strategyAccordionData}
      />
      <LevelsOfFunnel />
      <StrategyByBusinessGoal />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 w-full flex flex-col justify-center items-center bg-black gap-6 sm:gap-8">
        <a
          href="#services-grid"
          onClick={() => window.dispatchEvent(new CustomEvent('switchTab', { detail: 'performance' }))}
          className="inline-flex h-[46px] sm:h-[38px] min-w-[178px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-white transition uppercase hover:bg-[#ff6b1f]"
        >
          EXPLORE MORE SERVICES &gt;
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 w-full flex flex-col justify-center items-center pt-16 sm:pt-24 bg-black gap-6 sm:gap-8 mb-20">
        <h2 id="meta-ads" className="font-[var(--font-be-vietnam)] text-[32px] sm:text-[58px] font-medium text-white lowercase tracking-[-1px] sm:tracking-[-2px]">
          meta{" "}
          <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] font-normal italic timesFontFamily tracking-[-1px] sm:tracking-[-2.8px]">
            ads
          </span>
        </h2>
      </motion.div>
      <WhyGoogleAdsWork
        imageSrc="/assets/metaSide.png"
        imageAlt="Meta Ads strategy expert"
        logoSrc="/assets/meta_logo_2.png"
        // headingPrefix="Meta"
        headingItalic="ads"
        headingSuffix="works"
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
      <TargetRightPeople />
      <RevenueMethod
        heading={<>how we build high performing <br className="hidden sm:block" />{" "}<span className="italic text-[#ff5500] font-normal text-[40px] sm:text-[72px] leading-[1.1] sm:leading-[70px] tracking-[-3%]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>meta campaigns</span></>}
        cards={[
          { id: '01', title: 'Campaign Strategy', description: 'Every campaign starts with a clear objective. We define your goals, audience, budget and messaging before any ad goes live.', bgImage: '/assets/method1.png' },
          { id: '02', title: 'Audience Targeting', description: 'We identify and engage the most relevant demographics through data-driven targeting strategies, ensuring your ads reach the right people.', bgImage: '/assets/method2.png' },
          { id: '03', title: 'Creative & Ad Content', description: 'Our team crafts compelling visuals and persuasive copy that capture attention and drive meaningful engagement from your audience.', bgImage: '/assets/method3.png' },
          { id: '04', title: 'Optimisation & Scaling', description: 'We continuously monitor performance metrics to refine campaigns, maximizing return on ad spend and scaling what works best.', bgImage: '/assets/method4.png' },
        ]}
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 w-full flex flex-col justify-center items-center bg-black gap-6 sm:gap-8">
        <a
          href="#services-grid"
          onClick={() => window.dispatchEvent(new CustomEvent('switchTab', { detail: 'performance' }))}
          className="inline-flex h-[46px] sm:h-[38px] min-w-[178px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-white transition uppercase hover:bg-[#ff6b1f]"
        >
          EXPLORE MORE SERVICES &gt;
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 w-full flex flex-col justify-center items-center pt-16 sm:pt-24 bg-black gap-6 sm:gap-8 mb-20">
        <h2 id="paid-search" className="font-[var(--font-be-vietnam)] text-[32px] sm:text-[58px] font-medium text-white lowercase tracking-[-1px] sm:tracking-[-2px]">
          paid{" "}
          <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] font-normal italic timesFontFamily tracking-[-1px] sm:tracking-[-2.8px]">
            search
          </span>
        </h2>
      </motion.div>
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
            title: "Build Brand Awareness",
            description: "Introduce your business to new audiences before they start searching.",
          },
          {
            number: "02",
            icon: "/assets/GoogleAds/icon2.png",
            title: "Precision Targeting",
            description: "Target audiences by interests, behaviours, demographics and location.",
          },
          {
            number: "03",
            icon: "/assets/GoogleAds/icon3.png",
            title: "Creative That Converts",
            description: "Creative designed to capture attention and encourage action.",
          },
          {
            number: "04",
            icon: "/assets/GoogleAds/icon4.png",
            title: "Stay Top of Mind",
            description: "Reconnect with people who have already engaged with your business.",
          },
        ]}
      />
      <PlatformsWeWorkWith
        heading={
          <h2
            className="text-white mx-auto max-w-[1150px] mb-10 tracking-[-1.5px] text-center sm:text-left"
            style={{
              fontWeight: 500,
              fontSize: "clamp(32px, 5vw, 56px)",
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
      <RevenueMethod
        heading={<>how we capture demand <br className="hidden sm:block" /> and turn it into{" "}<span className="italic text-[#ff5500] font-normal text-[40px] sm:text-[72px] leading-[1.1] sm:leading-[70px] tracking-[-3%]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>revenue</span></>}
        cards={[
          { id: '01', title: 'Keyword Strategy', description: 'We identify the keywords your customers are actively searching for and build campaigns around high-intent search terms.', bgImage: '/assets/method1.png' },
          { id: '02', title: 'Campaign Structure', description: 'We build meticulously organized campaigns designed to maximize relevance, improve Quality Score, and give precise control over your budget.', bgImage: '/assets/method2.png' },
          { id: '03', title: 'Ad Copy & Creative', description: 'Our team crafts compelling ad copy and engaging creatives that capture attention, drive higher click-through rates, and increase conversions.', bgImage: '/assets/method3.png' },
          { id: '04', title: 'Optimisation & Growth', description: 'We continuously monitor and refine your campaigns based on data-driven insights, ensuring scalable growth and maximum return on ad spend.', bgImage: '/assets/method4.png' },
        ]}
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 w-full flex flex-col justify-center items-center bg-black gap-6 sm:gap-8">
        <a
          href="#services-grid"
          onClick={() => window.dispatchEvent(new CustomEvent('switchTab', { detail: 'performance' }))}
          className="inline-flex h-[46px] sm:h-[38px] min-w-[178px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-white transition uppercase hover:bg-[#ff6b1f]"
        >
          EXPLORE MORE SERVICES &gt;
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 w-full flex flex-col justify-center items-center pt-16 sm:pt-24 bg-black gap-6 sm:gap-8">
        <h2 id="email-marketing" className="font-[var(--font-be-vietnam)] text-[32px] sm:text-[58px] font-medium text-white lowercase tracking-[-1px] sm:tracking-[-2px]">
          email{" "}
          <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] font-normal italic timesFontFamily tracking-[-1px] sm:tracking-[-2.8px]">
            marketing
          </span>
        </h2>
      </motion.div>
        <EmailOverview />
        <EmailStrategy />
      <EmailVisuals />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 w-full flex flex-col justify-center items-center bg-black gap-6 mt-10 sm:gap-8">
        <a
          href="#services-grid"
          onClick={() => window.dispatchEvent(new CustomEvent('switchTab', { detail: 'performance' }))}
          className="inline-flex h-[46px] sm:h-[38px] min-w-[178px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-white transition uppercase hover:bg-[#ff6b1f]"
        >
          EXPLORE MORE SERVICES &gt;
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 w-full flex flex-col justify-center items-center pt-8 sm:pt-16 bg-black gap-6 sm:gap-8">

        <h2 id="whatsapp-sms" className="font-[var(--font-be-vietnam)] text-[32px] sm:text-[58px] font-medium text-white lowercase tracking-[-1px] sm:tracking-[-2px]">
          {/* whatsapp &{" "}
          <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] font-normal italic timesFontFamily tracking-[-1px] sm:tracking-[-2.8px]">
            sms
          </span> */}
        </h2>
      </motion.div>
      <WhyWhatsappWorks />
      <WhatsAppChannels />
      <div className="-mt-20 sm:-mt-30">
        <ConversationFlow />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 w-full flex flex-col justify-center items-center bg-black gap-6 sm:gap-8">
        <a
          href="#services-grid"
          onClick={() => window.dispatchEvent(new CustomEvent('switchTab', { detail: 'performance' }))}
          className="inline-flex h-[46px] sm:h-[38px] min-w-[178px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-white transition uppercase hover:bg-[#ff6b1f]"
        >
          EXPLORE MORE SERVICES &gt;
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 w-full flex flex-col justify-center items-center pt-16 sm:pt-24 bg-black gap-6 sm:gap-8">

        <h2 id="social-media" className="font-[var(--font-be-vietnam)] text-[32px] sm:text-[58px] font-medium text-white lowercase tracking-[-1px] sm:tracking-[-2px]">
          social{" "}
          <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] font-normal italic timesFontFamily tracking-[-1px] sm:tracking-[-2.8px]">
            media
          </span>
        </h2>
      </motion.div>
      <PlatformsWeWorkWith />
      <EmailMarketingQuote first={"your social media is your"} second={"digital window"} third={"shop front"} />
      <OurOrganicSocialMediaApproach />
      <SocialServices />
      <SocialMediaRevenueMethod />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 w-full flex flex-col justify-center items-center bg-black gap-6 sm:gap-8">
        <a
          href="#services-grid"
          onClick={() => window.dispatchEvent(new CustomEvent('switchTab', { detail: 'creative' }))}
          className="inline-flex h-[46px] sm:h-[38px] min-w-[178px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-white transition uppercase hover:bg-[#ff6b1f]"
        >
          EXPLORE MORE SERVICES &gt;
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 w-full flex flex-col justify-center items-center pt-16 sm:pt-24 pb-8 bg-black gap-6 sm:gap-8">
        <h2 id="content-creation" className="font-[var(--font-be-vietnam)] text-[32px] sm:text-[58px] font-medium text-white lowercase tracking-[-1px] sm:tracking-[-2px]">
          content{" "}
          <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] font-normal italic timesFontFamily tracking-[-1px] sm:tracking-[-2.8px]">
            creation
          </span>
        </h2>
      </motion.div>
      <ContentCreationServices />
      <div className="-my-10 sm:-my-20">
        <EmailMarketingQuote first={""} second={"65% "} third={"of people are visual learners."} />
      </div>
      <div className="mb-20">
        <ContentCreationGrid />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 w-full flex flex-col justify-center items-center bg-black gap-6 sm:gap-8">
        <a
          href="#services-grid"
          onClick={() => window.dispatchEvent(new CustomEvent('switchTab', { detail: 'creative' }))}
          className="inline-flex h-[46px] sm:h-[38px] min-w-[178px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-white transition uppercase hover:bg-[#ff6b1f]"
        >
          EXPLORE MORE SERVICES &gt;
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 w-full flex flex-col justify-center items-center pt-16 sm:pt-24 pb-20 bg-black gap-6 sm:gap-8">
        <h2 id="web-design-development" className="font-[var(--font-be-vietnam)] text-[32px] sm:text-[58px] font-medium text-white lowercase tracking-[-1px] sm:tracking-[-2px]">
          web design{" "}
          <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] font-normal italic timesFontFamily tracking-[-1px] sm:tracking-[-2.8px]">
            & development
          </span>
        </h2>
      </motion.div>
      <DedicatedPartner />
      <CaseStudies />
      <TeamAccordion />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 w-full flex flex-col justify-center items-center bg-black gap-6 sm:gap-8">
        <a
          href="#services-grid"
          onClick={() => window.dispatchEvent(new CustomEvent('switchTab', { detail: 'creative' }))}
          className="inline-flex h-[46px] sm:h-[38px] min-w-[178px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-white transition uppercase hover:bg-[#ff6b1f]"
        >
          EXPLORE MORE SERVICES &gt;
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 w-full flex flex-col justify-center items-center pt-16 sm:pt-24 bg-black gap-6 sm:gap-8">
        <h2 id="branding-graphics" className="font-[var(--font-be-vietnam)] text-[32px] sm:text-[58px] font-medium text-white lowercase tracking-[-1px] sm:tracking-[-2px]">
          branding &{" "}
          <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] font-normal italic timesFontFamily tracking-[-1px] sm:tracking-[-2.8px]">
            graphics
          </span>
        </h2>
      </motion.div>
      <CaseStudies
        heading={
          <h2 className="text-white">
            <span className="font-medium text-[32px] leading-[40px] sm:text-[40px] sm:leading-[48px] tracking-[-2px] lg:text-[56px] lg:leading-[70px] lg:tracking-[-3.2px]">
              see how we create
            </span>
            <br className="block sm:hidden" />
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
      <BrandingServices />
      <SixStepSystem
        heading={
          <h2 className="text-white lowercase font-medium tracking-[-1px] sm:tracking-[-2px] text-[36px] sm:text-[56px] leading-[1.1] sm:leading-[69.36px]">
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
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 w-full flex flex-col justify-center items-center bg-black gap-6 sm:gap-8">
        <a
          href="#services-grid"
          onClick={() => window.dispatchEvent(new CustomEvent('switchTab', { detail: 'creative' }))}
          className="inline-flex h-[46px] sm:h-[38px] min-w-[178px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-white transition uppercase hover:bg-[#ff6b1f]"
        >
          EXPLORE MORE SERVICES &gt;
        </a>
      </motion.div>

      <Testimonials />
      <GoodCompanyMap />
      <Team />
      <Footer />
    </div>
  )
}