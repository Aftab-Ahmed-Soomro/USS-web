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
import { ContentCreationGrid } from "../components/ContentCreationGrid";
import DedicatedPartner from "../components/DedicatedPartner";
import CaseStudies from "../components/CaseStudies";
import { BrandingServices } from "../components/BrandingServices";
import { SixStepSystem } from "../components/SixStepSystem";
import FadeUp from "../components/FadeUp";

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
        Campaign <br className="hidden sm:block" />
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
        Reporting and <br className="hidden sm:block" />
        Optimisation
      </>
    ),
    copy: "Continuous reporting and optimisation to improve performance.",
  },
];

const brandingLeftData = [
  {
    id: 1,
    year: "Featured Work",
    category: "Company Profile",
    title: "Company Profiles",
    description: "Professionally designed company profiles that introduce your business, communicate your expertise and build credibility with potential clients.",
    image: "/assets/branding/company.png",
  },
  {
    id: 2,
    year: "Featured Work",
    category: "Marketing Collateral",
    title: "Brochures",
    description: "Premium brochures that showcase your products, services and brand through clear, engaging visual communication.",
    image: "/assets/branding/brochures.png",
  },
  {
    id: 3,
    year: "Featured Work",
    category: "Client Success",
    title: "Case Studies",
    description: "Professional case studies that demonstrate your work, showcase measurable outcomes and build trust through real client success stories.",
    image: "/assets/Case Studies - 1.png",
  }
];

const brandingRightData = [
  {
    id: 4,
    year: "Featured Work",
    category: "Sales Presentation",
    title: "Sales Decks",
    description: "Sales presentations designed to communicate your brand value, support conversations and improve client engagement.",
    image: "/assets/Sales Decks - 1.png",
    imageClass: "object-cover object-[130%_100%]"
  },
  {
    id: 5,
    year: "Featured Work",
    category: "Business Pitch",
    title: "Pitch Decks",
    description: "Strategic pitch presentations designed to communicate your vision, support investment opportunities and win new business.",
    image: "/assets/Pitch Decks - 2.png",
  },
  {
    id: 6,
    year: "Featured Work",
    category: "Investment Materials",
    title: "Investor Decks",
    description: "Investor presentations that clearly communicate your business model, growth strategy and long term vision with confidence.",
    image: "/assets/Investor Decks - 1.png",
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

      <div className="relative z-10 mx-auto grid max-w-[1150px]  gap-10 lg:grid-cols-[minmax(0,660px)_430px] lg:items-center lg:justify-between text-center sm:text-start">
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
                className="mt-[24px] sm:mt-[36px] inline-flex h-[36px] sm:h-[38px] min-w-[178px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-white transition uppercase hover:bg-[#ff6b1f]"
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
      <div className="relative mx-auto grid max-w-[1150px]  px-6 py-[50px] sm:pt-10 sm:pb-0 lg:grid-cols-[minmax(0,680px)_minmax(320px,430px)] lg:justify-between">
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
        <Stagger staggerDelay={0.1} className="order-1 text-white lg:col-start-1 lg:row-start-1 lg:max-w-[680px] -mt-6">
          <StaggerItem>
            <p className="mb-[20px] hidden text-[11px] font-normal leading-[19.6px] tracking-[0%] text-white sm:text-[14px]">
              Our Email System for Retention and Growth
            </p>
          </StaggerItem>

          <StaggerItem className="text-center sm:text-left">
            <span
              className="block text-[36px] font-normal lowercase italic tracking-[-1.5px] text-[#ff5500] sm:text-[72px] sm:leading-[70px]"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              Our Approach
            </span>
          </StaggerItem>

          <div className="mt-[5px] sm:mt-[52px] grid grid-cols-1 sm:grid-cols-2">
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
            <h2 className="lowercase text-center text-white font-[var(--font-be-vietnam)] font-medium text-[32px] sm:text-[56px] leading-[0.9] sm:leading-[50px] tracking-[-1.5px] sm:tracking-[-3px]">
              every brand has its <br className="hidden sm:block" />
              own{" "}
              <span
                className="italic text-[#ff5500] font-normal text-[42px] sm:text-[72px] leading-[1.2] sm:leading-[80px] tracking-[-1.5px] sm:tracking-[-3px]"
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

const ICONS = {
  strategy: (
    <img src="/assets/pre1.png" alt="" loading="lazy" decoding="async" />
  ),
  planning: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="7" height="7"></rect>
      <rect x="14" y="3" width="7" height="7"></rect>
      <rect x="14" y="14" width="7" height="7"></rect>
      <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
  ),
  script: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 7V4h16v3M12 4v16M8 20h8"></path>
    </svg>
  ),
  storyboard: (
    <img src="/assets/pre4.png" alt="" loading="lazy" decoding="async" />
  ),
  motion: (
    <img src="/assets/post6.png" alt="" loading="lazy" decoding="async" />
  ),
  editing: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="6" cy="6" r="3"></circle>
      <circle cx="6" cy="18" r="3"></circle>
      <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
      <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
      <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
    </svg>
  ),
  delivery: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="22" y1="2" x2="11" y2="13"></line>
      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
  ),
  color: (
    <img src="/assets/post7.png" alt="" loading="lazy" decoding="async" />
  ),
};

function ServiceCard({ num, title, heightClass, icon, image }: any) {
  return (
    <div
      className={`relative w-full ${heightClass} rounded-[24px] border border-white/[0.04] overflow-hidden p-[24px] flex flex-col justify-between group transition-transform duration-500 hover:-translate-y-1`}
      style={!image ? {
        background: 'radial-gradient(circle at 30% 30%, rgba(255,85,0,0.18) 0%, rgba(15,8,5,1) 40%, rgba(5,5,5,1) 100%)'
      } : {}}
    >
      {image && (
        <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
      )}
      {/* Soft overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none" />

      <div className="relative z-10 flex justify-between items-start">
        <span className="font-[var(--font-inter)] text-[10px] text-white/50 tracking-[2px]">
          / {num}
        </span>
        <div className="text-white/70 w-[20px] object-contain h-[20px]">{icon}</div>
      </div>

      <div className="relative z-10">
        <div className="font-[var(--font-be-vietnam)] text-[48px] sm:text-[64px] font-light leading-[1] tracking-[-2px] text-white mb-2">
          {num}
        </div>
        <div className="font-[var(--font-inter)] text-[10px] font-medium tracking-[3px] text-white/60 uppercase">
          {title}
        </div>
      </div>
    </div>
  );
}

function ContentCreationServices() {
  return (
    <section className="bg-black text-white pb-[60px] sm:pb-[100px] px-4 min-[375px]:px-6 overflow-hidden">
      <div className="max-w-[1150px]  mx-auto">
        {/* Header */}
        <div className="mb-[30px] sm:mb-[30px]">
          {/* <h4 className="font-[var(--font-inter)] text-[#ff5500] font-bold text-[14px] leading-[16px] tracking-[2.64px] uppercase mb-6">
              OUR SERVICES
            </h4> */}
          <FadeUp delay={0.2}>
            <span className="font-[var(--font-cormorant)] font-normal italic text-[42px] sm:text-[72px] lowercase text-[#ff5500] leading-[1.1] sm:leading-[50.4px] tracking-[-1.2px] timesFontFamily">
              our services
            </span>
          </FadeUp>
        </div>

        {/* Block 1: Pre Production */}
        <div className="flex flex-col lg:flex-row justify-between gap-[60px] lg:gap-[100px] mb-10 sm:mb-[120px]">
          {/* Left Text */}
          <div className="lg:w-[45%] flex flex-col">
            {/* <FadeUp delay={0.1}>
              <div className="flex items-center gap-4 mb-[30px] sm:mb-[40px]">
                <span className="font-[var(--font-inter)] text-[#ff5500] font-medium text-[16px] leading-[16.5px] tracking-[4.4px] align-middle">
                  01
                </span>
                <div className="w-[40px] h-[1px] bg-[#ff5500]/50" />
                <span className="font-[var(--font-inter)] text-[#a0a0a0] font-light text-[11px] leading-[16.5px] tracking-[4.4px] uppercase align-middle">
                  CHAPTER ONE
                </span>
              </div>
            </FadeUp> */}

            <FadeUp delay={0.2}>
              <h3 className="font-[var(--font-be-vietnam)] font-light text-[38px] sm:text-[80px] leading-[1.1] sm:leading-[80px] tracking-[-2.4px] align-middle mb-[24px] sm:mb-[30px]">
                Pre<br />Production
              </h3>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="font-[var(--font-inter)] font-light text-[14px] sm:text-[18px] leading-[1.6] sm:leading-[29.25px] text-white/90 align-middle mb-[24px] sm:mb-[30px] max-w-[400px]">
                Great content starts long before the camera rolls. We define the creative direction, create mood boards and plan every detail before shoot day.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p className="font-[var(--font-inter)] font-normal text-[11px] leading-[16.5px] tracking-[1.65px] align-middle text-white/60 uppercase mb-[30px] sm:mb-[40px]">
                FROM CONCEPT TO SHOOT DAY
              </p>
            </FadeUp>

            {/* Pills */}
            <div className="flex flex-wrap gap-[10px]">
              {[
                "Creative Strategy",
                "Content Planning",
                "Script Writing",
                "Storyboarding",
                "Shot Lists",
                "Mood Boards",
                "Location Scouting",
                "Talent Coordination",
              ].map((tag, i) => (
                <FadeUp key={tag} delay={0.4 + i * 0.05}>
                  <div className="flex items-center justify-center gap-2 px-[14px] py-[8px] sm:py-[10px] rounded-full border border-white/10 bg-[#0a0a0a]/50">
                    <div className="w-[4px] h-[4px] rounded-full bg-[#ff5500] shrink-0" />
                    <span className="font-[var(--font-inter)] font-light text-[11px] sm:text-[12px] leading-[1.4] sm:leading-[18px] tracking-[0.3px] text-white/80 align-middle text-center">
                      {tag}
                    </span>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Right Grid */}
          <div className="lg:w-[50%] flex flex-col">
            {/* <FadeUp delay={0.2}>
              <div className="flex justify-between items-center mb-[20px] sm:mb-[30px]">
                <span className="font-[var(--font-inter)] font-light text-[10px] leading-[15px] tracking-[3px] align-middle text-white/60 uppercase">
                  COMPOSITION / 01
                </span>
              </div>
            </FadeUp> */}

            <div className="flex gap-[12px] sm:gap-[16px]">
              {/* Col 1 */}
              <div className="flex flex-col gap-[12px] sm:gap-[16px] w-1/2">
                <FadeUp delay={0.3}>
                  <ServiceCard num="01" title="STRATEGY" heightClass="h-[200px] sm:h-[340px]" icon={ICONS.strategy} image="/assets/pre and post/1.webp" />
                </FadeUp>
                <FadeUp delay={0.4}>
                  <ServiceCard num="03" title="SCRIPT" heightClass="h-[140px] sm:h-[220px]" icon={ICONS.script} image="/assets/pre and post/3.webp" />
                </FadeUp>
              </div>
              {/* Col 2 */}
              <div className="flex flex-col gap-[12px] sm:gap-[16px] w-1/2 mt-[30px] sm:mt-[40px]">
                <FadeUp delay={0.5}>
                  <ServiceCard num="02" title="PLANNING" heightClass="h-[140px] sm:h-[220px]" icon={ICONS.planning} image="/assets/pre and post/2.webp" />
                </FadeUp>
                <FadeUp delay={0.6}>
                  <ServiceCard num="04" title="STORYBOARD" heightClass="h-[200px] sm:h-[340px]" icon={ICONS.storyboard} image="/assets/pre and post/4.webp" />
                </FadeUp>
              </div>
            </div>

            <FadeUp delay={0.7}>
              <div className="text-right mt-[16px] sm:mt-[24px]">
                <span className="font-[var(--font-inter)] font-light text-[10px] leading-[15px] tracking-[3px] text-white/40 uppercase">
                  4 STAGES
                </span>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Block 2: Post Production */}
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-[60px] lg:gap-[100px]">
          {/* Left Grid */}
          <div className="lg:w-[50%] flex flex-col">
            {/* <FadeUp delay={0.2}>
              <div className="flex justify-between items-center mb-[20px] sm:mb-[30px]">
                <span className="font-[var(--font-inter)] font-light text-[10px] leading-[15px] tracking-[3px] align-middle text-white/60 uppercase">
                  COMPOSITION / 02
                </span>
              </div>
            </FadeUp> */}

            <div className="flex gap-[12px] sm:gap-[16px]">
              {/* Col 1 */}
              <div className="flex flex-col gap-[12px] sm:gap-[16px] w-1/2">
                <FadeUp delay={0.3}>
                  <ServiceCard num="05" title="MOTION" heightClass="h-[140px] sm:h-[220px]" icon={ICONS.motion} image="/assets/pre and post/5.webp" />
                </FadeUp>
                <FadeUp delay={0.4}>
                  <ServiceCard num="07" title="DELIVERY" heightClass="h-[200px] sm:h-[340px]" icon={ICONS.delivery} image="/assets/pre and post/7.webp" />
                </FadeUp>
              </div>
              {/* Col 2 */}
              <div className="flex flex-col gap-[12px] sm:gap-[16px] w-1/2 mt-[30px] sm:mt-[40px]">
                <FadeUp delay={0.5}>
                  <ServiceCard num="06" title="EDITING" heightClass="h-[200px] sm:h-[340px]" icon={ICONS.editing} image="/assets/pre and post/6.webp" />
                </FadeUp>
                <FadeUp delay={0.6}>
                  <ServiceCard num="08" title="COLOR" heightClass="h-[140px] sm:h-[220px]" icon={ICONS.color} image="/assets/pre and post/8.webp" />
                </FadeUp>
              </div>
            </div>

            <FadeUp delay={0.7}>
              <div className="text-right mt-[16px] sm:mt-[24px]">
                <span className="font-[var(--font-inter)] font-light text-[10px] leading-[15px] tracking-[3px] text-white/40 uppercase">
                  4 STAGES
                </span>
              </div>
            </FadeUp>
          </div>

          {/* Right Text */}
          <div className="lg:w-[45%] flex flex-col">
            {/* <FadeUp delay={0.1}>
              <div className="flex items-center gap-4 mb-[30px] sm:mb-[40px]">
                <span className="font-[var(--font-inter)] text-[#ff5500] font-medium text-[16px] leading-[16.5px] tracking-[4.4px] align-middle">
                  02
                </span>
                <div className="w-[40px] h-[1px] bg-[#ff5500]/50" />
                <span className="font-[var(--font-inter)] text-[#a0a0a0] font-light text-[11px] leading-[16.5px] tracking-[4.4px] uppercase align-middle">
                  CHAPTER TWO
                </span>
              </div>
            </FadeUp> */}

            <FadeUp delay={0.2}>
              <h3 className="font-[var(--font-be-vietnam)] font-light text-[38px] sm:text-[80px] leading-[1.1] sm:leading-[80px] tracking-[-2.4px] align-middle mb-[24px] sm:mb-[30px]">
                Post<br />Production
              </h3>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="font-[var(--font-inter)] font-light text-[14px] sm:text-[18px] leading-[1.6] sm:leading-[29.25px] text-white/90 align-middle mb-[24px] sm:mb-[30px] max-w-[400px]">
                This is where ideas come to life. From directing talent to capturing every shot, we produce high quality content designed for campaigns, social media and brand storytelling.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p className="font-[var(--font-inter)] font-normal text-[11px] leading-[16.5px] tracking-[1.65px] align-middle text-white/60 uppercase mb-[30px] sm:mb-[40px]">
                FROM SHOOT DAY TO FINAL FOOTAGE
              </p>
            </FadeUp>

            {/* Pills */}
            <div className="flex flex-wrap gap-[10px]">
              {[
                "Photography",
                "Videography",
                "Creative Direction",
                "Drone Footage",
                "Product Shoots",
                "Lifestyle Shoots",
                "Brand Films",
                "On-Location Production",
              ].map((tag, i) => (
                <FadeUp key={tag} delay={0.4 + i * 0.05}>
                  <div className="flex items-center justify-center gap-2 px-[14px] py-[8px] sm:py-[10px] rounded-full border border-white/10 bg-[#0a0a0a]/50">
                    <div className="w-[4px] h-[4px] rounded-full bg-[#ff5500] shrink-0" />
                    <span className="font-[var(--font-inter)] font-light text-[11px] sm:text-[12px] leading-[1.4] sm:leading-[18px] tracking-[0.3px] text-white/80 align-middle text-center">
                      {tag}
                    </span>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialServices() {
  return (
    <section className="bg-[#080808] px-4 min-[375px]:px-5 min-[480px]:px-6 sm:px-6 py-[48px] min-[390px]:py-[58px] sm:py-[70px] text-white lg:py-[100px]">
      <Stagger staggerDelay={0.15}>
        <div className="mx-auto max-w-[1150px] ">
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
      <div className="-mt-10 sm:-mt-0">
        <PowerOf360 />
      </div>
      <UssDifferentSection />
      <BuildGrowthSection />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 w-full flex flex-col justify-center items-center -mt-10 pt-2 sm:pt-0 bg-black gap-6 sm:gap-8 mb-0 sm:mb-5"
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
          className="inline-flex h-[36px] sm:h-[38px] min-w-[178px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-white transition uppercase hover:bg-[#ff6b1f]"
        >
          EXPLORE MORE SERVICES &gt;
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 w-full flex flex-col justify-center items-center pt-16 sm:pt-24 bg-black gap-6 sm:gap-8 mb-5">
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
      <div className="-mb-10 sm:-mb-20">
        <TargetRightPeople />
      </div>
      <RevenueMethod
        heading={<>how we build high performing <br className="hidden sm:block" />{" "}<span className="italic text-[#ff5500] font-normal text-[40px] sm:text-[72px] leading-[0.9] sm:leading-[70px] tracking-[-3%]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>meta campaigns</span></>}
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
          className="inline-flex h-[36px] sm:h-[38px] min-w-[178px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-white transition uppercase hover:bg-[#ff6b1f]"
        >
          EXPLORE MORE SERVICES &gt;
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 w-full flex flex-col justify-center items-center pt-16 sm:pt-24 bg-black gap-6 sm:gap-8 mb-10">
        <h2 id="paid-search" className="font-[var(--font-be-vietnam)] text-[32px] sm:text-[58px] font-medium text-white lowercase tracking-[-1px] sm:tracking-[-2px]">
          Google{" "}
          <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] font-normal italic timesFontFamily tracking-[-1px] sm:tracking-[-2.8px]">
            Ads
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
      </div>
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
          className="inline-flex h-[36px] sm:h-[38px] min-w-[178px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-white transition uppercase hover:bg-[#ff6b1f]"
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
      <div className="-mt-8 sm:-mt-0">
        <EmailOverview />
      </div>
      <EmailStrategy />
      <EmailVisuals />
      <div className="relative z-10 w-full flex flex-col justify-center items-center bg-white gap-6 pb-8 sm:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <a
            href="#services-grid"
            onClick={() => window.dispatchEvent(new CustomEvent('switchTab', { detail: 'performance' }))}
            className="inline-flex h-[36px] sm:h-[38px] min-w-[178px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-white transition uppercase hover:bg-[#ff6b1f]"
          >
            EXPLORE MORE SERVICES &gt;
          </a>
        </motion.div>
      </div>
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
      <div className="-mt-15 sm:-mt-30">
        <ConversationFlow />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 w-full flex flex-col justify-center items-center bg-black gap-6 sm:gap-8 sm:-mt-25">
        <a
          href="#services-grid"
          onClick={() => window.dispatchEvent(new CustomEvent('switchTab', { detail: 'performance' }))}
          className="inline-flex h-[36px] sm:h-[38px] min-w-[178px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-white transition uppercase hover:bg-[#ff6b1f]"
        >
          EXPLORE MORE SERVICES &gt;
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 w-full flex flex-col justify-center items-center pt-16 sm:pt-24 bg-black gap-6 sm:gap-8 -mb-10">

        <h2 id="social-media" className="font-[var(--font-be-vietnam)] text-[32px] sm:text-[58px] font-medium text-white lowercase tracking-[-1px] sm:tracking-[-2px]">
          social{" "}
          <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] font-normal italic timesFontFamily tracking-[-1px] sm:tracking-[-2.8px]">
            media
          </span>
        </h2>
      </motion.div>
      <PlatformsWeWorkWith />
      
        <div className="my-4">
          <EmailMarketingQuote first={"your social media is your"} second={"digital window"} third={"shop front"} />
        </div>
      <div className="">
        <OurOrganicSocialMediaApproach />
      </div>
      <SocialServices />
      <div className="-mt-16 sm:-mt-20">
        <SocialMediaRevenueMethod />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 w-full flex flex-col justify-center items-center bg-black gap-6 sm:gap-8 -mt-8">
        <a
          href="#services-grid"
          onClick={() => window.dispatchEvent(new CustomEvent('switchTab', { detail: 'creative' }))}
          className="inline-flex h-[36px] sm:h-[38px] min-w-[178px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-white transition uppercase hover:bg-[#ff6b1f]"
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
        className="relative z-10 w-full flex flex-col justify-center items-center bg-black gap-6 sm:gap-8 -mt-20 sm:-mt-10">
        <a
          href="#services-grid"
          onClick={() => window.dispatchEvent(new CustomEvent('switchTab', { detail: 'creative' }))}
          className="inline-flex h-[36px] sm:h-[38px] min-w-[178px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-white transition uppercase hover:bg-[#ff6b1f]"
        >
          EXPLORE MORE SERVICES &gt;
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 w-full flex flex-col justify-center items-center pt-12 sm:pt-24 sm:pb-10 bg-black gap-6 sm:gap-8 px-6">
        <h2 id="web-design-development" className="font-[var(--font-be-vietnam)] text-[28px] sm:text-[58px] font-medium text-white lowercase tracking-[-1px] sm:tracking-[-2px] text-center sm:text-start">
          web design{" "}
          <span className="font-[var(--font-cormorant)] text-[37px] sm:text-[72px] font-normal text-[#ff5500] italic timesFontFamily tracking-[-1px] sm:tracking-[-2.8px]">
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
        className="relative z-10 w-full flex flex-col justify-center items-center bg-black gap-6 sm:gap-8 -mt-10">
        <a
          href="#services-grid"
          onClick={() => window.dispatchEvent(new CustomEvent('switchTab', { detail: 'creative' }))}
          className="inline-flex h-[36px] sm:h-[38px] min-w-[178px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-white transition uppercase hover:bg-[#ff6b1f]"
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
      <div className="-mt-10">
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
              Professionally designed business documents that strengthen your brand, communicate your value and support every client conversation.
            </p>
          }
          leftData={brandingLeftData}
          rightData={brandingRightData}
          imageAspectRatio="aspect-[617/344]"
        />
      </div>
      <div className="-mb-25">
        <BrandingServices />
      </div>
      <SixStepSystem
        heading={
          <h2 className="text-white lowercase font-medium tracking-[-1px] sm:tracking-[-2px] text-[36px] sm:text-[56px] leading-[1.1] sm:leading-[60px]">
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
          className="inline-flex h-[36px] sm:h-[38px] min-w-[178px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-white transition uppercase hover:bg-[#ff6b1f]"
        >
          EXPLORE MORE SERVICES &gt;
        </a>
      </motion.div>

      <div className="mt-8">
        <Testimonials />
      </div>
      <GoodCompanyMap />
      <Team />
      <Footer />
    </div>
  )
}