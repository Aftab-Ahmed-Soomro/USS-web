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
import { GrowthRoadmap } from "../components/GrowthRoadmap";
import { LevelsOfFunnel } from "../components/LevelsOfFunnel";
import { StrategyByBusinessGoal } from "../components/StrategyByBusinessGoal";
import TeamAccordion from "../components/TeamAccordion";
import { SixStepSystem } from "../components/SixStepSystem";

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
            <h1 className="mt-[24px] max-w-[700px] font-[var(--font-be-vietnam)] text-[32px] font-bold lowercase sm:leading-[70px] tracking-[-1px] sm:tracking-[-3px] sm:text-[58px] text-white text-center sm:text-start">
              strategy that drives
              <br />{" "}
              <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] lowercase font-normal timesFontFamily italic text-white leading-[1] sm:leading-[30px] tracking-[-1px] sm:tracking-[-2.8px]">
                real growth
              </span>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-[24px] min-[375px]:mt-[30px] sm:mt-[50px] max-w-[500px] font-[var(--font-inter)] text-[13px] leading-[1.6] sm:leading-[32px] text-white/90 sm:text-[18px] text-center sm:text-start">
              We build clear, data-driven marketing strategies designed to scale your business not just generate leads. Trusted by brands across UAE and globally.
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="flex justify-center sm:block">
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

function FinalCta() {
  return (
    <section className="bg-[#f5f4f1] px-6 py-[88px] text-center text-black sm:px-10 lg:px-[48px]">
      <Stagger staggerDelay={0.15}>
        <StaggerItem>
          <h2 className="mx-auto max-w-[800px] font-[var(--font-be-vietnam)] text-[32px] sm:text-[56px] font-medium lowercase leading-[1.08] tracking-[-1.44px]">
            build a strategy that
            <br />
            actually{" "}
            <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] font-normal tracking-[-1.44px] timesFontFamily italic">
              works
            </span>
          </h2>
        </StaggerItem>
        <StaggerItem>
          <p className="mx-auto mt-[15px] max-w-[800px] font-[var(--font-inter)] text-[13px] sm:text-[18px] text-[#58554F] leading-[1.6] text-[-1.44px]">
            If your marketing feels disconnected, it’s time for a clearer approach.
          </p>
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
  { value: "5x", label: "ROAS Achieved" },
  { value: "55M", label: "AED Generated in Revenue" },
  { value: "500K", label: "Leads Delivered" },
  { value: "100+", label: "Brands Worldwide" },
];

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
    title: "Paid Search Capture demand",
    pills: ["Google Ads", "PPC", "Intent-Based"],
    description: "We target high-intent buyers at the exact moment they're searching — capturing demand with precision-crafted campaigns built to convert, not just click.",
    details: [
      {
        title: "Keyword Strategy & Match Types",
        desc: "Targeting the right search terms at every stage of the buyer journey."
      },
      {
        title: "Ad Copy & Extensions",
        desc: "Compelling search ads with structured snippets, callouts and sitelinks."
      },
      {
        title: "Bid Management & ROAS Targets",
        desc: "Smart bidding strategies optimised for revenue, not vanity metrics."
      },
      {
        title: "Negative Keyword Refinement",
        desc: "Continuously pruning wasteful spend to protect your budget."
      }
    ]
  },
  {
    id: "02",
    title: "Paid Social Generate awareness",
    pills: ["Meta Ads", "TikTok", "Creative-Led"],
    description: "We build scroll-stopping creatives and audience systems across Meta and TikTok — turning cold audiences into warm prospects and loyal customers.",
    details: [
      {
        title: "Audience Segmentation & Lookalikes",
        desc: "Building layered audience structures that scale without wasted spend."
      },
      {
        title: "Creative Testing Framework",
        desc: "Rapid iteration on hooks, formats and messaging to find winners fast."
      },
      {
        title: "Funnel-Specific Ad Formats",
        desc: "TOF awareness through to BOF retargeting — every stage covered."
      },
      {
        title: "Budget Allocation & Scaling",
        desc: "Intelligent spend distribution across winning ad sets as they grow."
      }
    ]
  },
  {
    id: "03",
    title: "Email Marketing Retain customers",
    pills: ["Klaviyo", "Flows", "Segmentation"],
    description: "Email is your highest-ROI owned channel. We build automated flows and broadcast campaigns that retain customers, recover revenue and drive repeat purchases.",
    details: [
      {
        title: "Core Flow Architecture",
        desc: "Welcome, abandoned cart, post-purchase and win-back flows that work 24/7."
      },
      {
        title: "List Segmentation & Personalisation",
        desc: "The right message to the right person at the right time — every send."
      },
      {
        title: "Campaign Calendar & Cadence",
        desc: "Consistent broadcast campaigns aligned to your promotions and seasonality."
      },
      {
        title: "Deliverability & List Health",
        desc: "Protecting sender reputation so your emails actually reach the inbox."
      }
    ]
  },
  {
    id: "04",
    title: "WhatsApp & SMS Drive action",
    pills: ["WhatsApp", "SMS", "Direct Response"],
    description: "The most direct line to your customer. We deploy high-converting WhatsApp and SMS campaigns that drive immediate action with near-100% open rates.",
    details: [
      {
        title: "Broadcast Campaign Strategy",
        desc: "Timely, personalised messages sent at moments that drive the most conversions."
      },
      {
        title: "Opt-in List Growth",
        desc: "Building compliant, high-quality subscriber lists that grow with your brand."
      },
      {
        title: "Automated Conversation Flows",
        desc: "Two-way messaging sequences that nurture and convert without manual effort."
      },
      {
        title: "Offer & Urgency Messaging",
        desc: "Copy that creates genuine excitement and drives clicks in under 30 seconds."
      }
    ]
  },
  {
    id: "05",
    title: "Website Convert visitors",
    pills: ["CRO", "UX", "Landing Pages"],
    description: "Traffic means nothing without conversion. We optimise your website experience — from landing pages to checkout — to turn more visitors into paying customers.",
    details: [
      {
        title: "Conversion Rate Optimisation",
        desc: "Data-led improvements to pages that are losing revenue right now."
      },
      {
        title: "Landing Page Design & Build",
        desc: "High-converting pages built for specific campaigns and traffic sources."
      },
      {
        title: "A/B Testing & Experimentation",
        desc: "Continuous testing to find what moves the needle on your revenue."
      },
      {
        title: "Checkout & UX Friction Removal",
        desc: "Eliminating the drop-off points that are costing you sales every day."
      }
    ]
  },
  {
    id: "06",
    title: "Organic Social Build authority",
    pills: ["Instagram", "TikTok", "Brand Voice"],
    description: "Organic social builds the trust that paid can't buy. We develop a content strategy and posting cadence that grows your following and reinforces your brand authority.",
    details: [
      {
        title: "Content Strategy & Pillars",
        desc: "A structured approach to what you post, why you post it, and when."
      },
      {
        title: "Platform-Specific Formats",
        desc: "Content tailored to how each platform's algorithm rewards engagement."
      },
      {
        title: "Community Engagement",
        desc: "Building genuine two-way relationships that turn followers into advocates."
      },
      {
        title: "Brand Voice & Consistency",
        desc: "A cohesive tone and aesthetic across every post, story and reel."
      }
    ]
  },
  {
    id: "07",
    title: "SEO Long-term growth",
    pills: ["Technical SEO", "Content", "Authority"],
    description: "SEO is your compounding asset. We build organic visibility through technical foundations, strategic content and authority-building that grows your traffic month after month.",
    details: [
      {
        title: "Technical SEO Audit & Fixes",
        desc: "Fixing the crawlability, speed and structure issues holding your rankings back."
      },
      {
        title: "Keyword Research & Mapping",
        desc: "Identifying the search terms your ideal customers are using right now."
      },
      {
        title: "On-Page Optimisation",
        desc: "Optimising every page for relevance, intent match and search visibility."
      },
      {
        title: "Link Building & Authority",
        desc: "Earning high-quality backlinks that signal trust and push you up the rankings."
      }
    ]
  },
  {
    id: "08",
    title: "Content Creation Support every channel",
    pills: ["Video", "Copywriting", "Creative Assets"],
    description: "Great content powers every channel. We produce the creative assets, video content and copy that fuel your ads, social, email and SEO — all aligned to your brand.",
    details: [
      {
        title: "Video Production & Editing",
        desc: "Short-form and long-form video content built for performance and platform."
      },
      {
        title: "Ad Creative & Graphic Design",
        desc: "Scroll-stopping visuals tailored to each ad format and audience."
      },
      {
        title: "Copywriting & Messaging",
        desc: "Words that sell — from ad hooks to product descriptions and email subject lines."
      },
      {
        title: "Content Repurposing System",
        desc: "Maximising every piece of content across multiple channels and formats."
      }
    ]
  }
];

export default function MarketingStrategyPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <Header />
      <Hero />
      <Numbers stats={emailStats} />
      <Brands />
      <div className="sm:-mb-[120px] -mb-0">
        <WhyEmailFails
          hideBadge={true}
          heading={
            <h2 className="mx-auto max-w-[900px] text-center font-[var(--font-inter)] text-[32px] font-medium leading-[1] tracking-[-1.5px] sm:text-[56px]">
              why most{" "}
              <span
                className="font-normal italic text-[42px] sm:text-[72px]"
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
              >
                marketing strategy
              </span>{" "}
              fails
            </h2>
          }
          subheading="Most brands don't have an email problem, they have a strategy problem."
          leftTitle="Most Brands"
          rightTitle="The USS Difference"
          leftPoints={googleAdsBrandPoints}
          rightPoints={googleAdsUssPoints}
          centerLogo="/assets/Google__logo.webp"
          logoClassName="w-[80px] lg:w-[115px]"
        />
      </div>
      <GrowthRoadmap />
      <TeamAccordion
        heading={
          <h2 className="text-[32px] sm:text-[36px] md:text-[64px] lg:text-[75px] leading-[1] tracking-[-1px] lg:tracking-[-6px] font-light lowercase" style={{ fontWeight: 300 }}>
            from strategy to scale.
          </h2>
        }
        data={strategyAccordionData}
      />
      <LevelsOfFunnel />
      <StrategyByBusinessGoal />
      <div className="-mt-[60px] sm:-mt-0">
        <SixStepSystem
          heading={
            <h2 className="text-white font-medium tracking-[-1px] sm:tracking-[-2px] text-[36px] sm:text-[56px] leading-[1.1] sm:leading-[69.36px]">
              every digital touchpoint should <br className="hidden sm:block" />
              <span className="inline-flex items-center gap-x-2 sm:gap-x-3 sm:mt-0">
                <span>have its</span>
                <span
                  className="text-white italic font-normal font-[var(--font-cormorant)] timesFontFamily text-[46px] sm:text-[72px] leading-[0] sm:leading-[69.36px] tracking-[-1.5px] sm:tracking-[-2px]"
                >
                  own strategy
                </span>
              </span>
            </h2>
          }
          data={touchpointStepsData}
        />
      </div>
      <Testimonials />
      <Team />
      <GoodCompanyMap />
      <FinalCta />
      <Footer />
    </main>
  );
}
