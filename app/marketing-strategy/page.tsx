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
            <p className="font-[var(--font-be-vietnam)] text-[13px] font-normal sm:text-[14px] uppercase tracking-[0.5px] text-white text-center sm:text-start">
              Marketing strategy
            </p>
          </StaggerItem>
          <StaggerItem>
            <h1 className="mt-[24px] max-w-[700px] font-[var(--font-be-vietnam)] text-[32px] font-bold lowercase leading-[1.4] sm:leading-[70px] tracking-[-1px] sm:tracking-[-3px] sm:text-[58px] text-white text-center sm:text-start">
              Turn strategy into
              <br />{" "}
              <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] lowercase font-normal timesFontFamily italic text-white leading-[0.7] sm:leading-[30px] tracking-[-1px] sm:tracking-[-2.8px]">
                business growth.
              </span>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-[24px] min-[375px]:mt-[30px] sm:mt-[50px] max-w-[500px] font-[var(--font-inter)] text-[13px] leading-[1.6] sm:leading-[32px] text-white/90 sm:text-[18px] text-center sm:text-start">
              We build clear, data driven marketing strategies designed to scale your business, not just generate leads. By understanding your goals, audience and market, we create a roadmap that supports long term business growth.
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
    title: "Unclear Business Goals",
    description:
      "Marketing begins before clear business objectives are defined.",
  },
  {
    number: "02",
    title: "Market Position",
    description:
      "No clear point of difference from competitors.",
  },
  {
    number: "03",
    title: "Disconnected Channels",
    description:
      "Channels operate separately instead of working together.",
  },
  {
    number: "04",
    title: "Short Term Thinking",
    description:
      "Marketing decisions focus on immediate results.",
  },
];

const googleAdsUssPoints = [
  {
    number: "01",
    title: "Business First Strategy",
    description:
      "Every recommendation starts with your business objectives",
  },
  {
    number: "02",
    title: "Competitive Positioning",
    description:
      "Stand out with a clear market position.",
  },
  {
    number: "03",
    title: "Integrated Marketing Approach",
    description:
      "Every marketing channel works together as one connected strategy",
  },
  {
    number: "04",
    title: "Long Term Growth",
    description:
      "A roadmap built for lasting business growth.",
  },
];

const emailStats = [
  { value: "5x", label: "Up to 5X ROAS" },
  { value: "50+", label: "Start Ups Turned Profitable" },
  { value: "75M+", label: "AED In Client Revenue" },
  { value: "645k+", label: "Leads Generated for clients" },
  { value: "100+", label: "Brands Worldwide" },
];

const strategyAccordionData = [
  {
    id: "01",
    title: "Discovery & Research",
    description: "We begin by understanding your business, audience, competitors and market to identify opportunities and challenges.",
  },
  {
    id: "02",
    title: "Strategic & Planning",
    description: "Using our research, we create a tailored marketing roadmap covering objectives, channels, messaging, budgets and KPIs.",
  },
  {
    id: "03",
    title: "Launch & Optimisation",
    description: "Your strategy is brought to life across the right marketing channels, with ongoing monitoring and optimisation to improve performance.",
  },
  {
    id: "04",
    title: "Scale & Growth",
    description: "As your business grows, we continue refining your strategy, identifying new opportunities and improving performance.",
  }
];

const touchpointStepsData = [
  {
    id: "01",
    title: "Email Marketing",
    category: "Performance Marketing",
    description:
      "Your email strategy should be tailored around the customer lifecycle, delivering the right message at the right time to encourage repeat purchases and long term loyalty.",
  },
  {
    id: "02",
    title: "Google Ads",
    category: "Performance Marketing",
    description:
      "Your Google Ads strategy should focus on capturing high intent searches, ensuring your business appears when customers are actively looking for your products or services.",
  },
  {
    id: "03",
    title: "Meta Ads",
    category: "Performance Marketing",
    description:
      "Your Meta Ads strategy should build awareness and generate demand by reaching the right audiences before they're ready to buy.",
  },
  {
    id: "04",
    title: "WhatsApp & SMS",
    category: "Performance Marketing",
    description:
      "Your messaging strategy should deliver timely, relevant communication that encourages action without overwhelming your audience.",
  },
  {
    id: "05",
    title: "Website",
    category: "Creative Marketing",
    description:
      "Your website strategy should guide visitors towards the actions that matter most, whether that's making an enquiry, booking a service or completing a purchase.",
  },
  {
    id: "06",
    title: "Organic Social",
    category: "Creative Marketing",
    description:
      "Your social strategy should build credibility through consistent content that keeps your brand visible and relevant.",
  },
  {
    id: "07",
    title: "Content Creation",
    category: "Creative Marketing",
    description:
      "Your content strategy should support every marketing channel with creative tailored to different audiences and stages of the funnel.",
  },
  {
    id: "08",
    title: "Branding & Graphics",
    category: "Creative Marketing",
    description:
      "Your brand strategy should create consistency across every touchpoint, helping customers recognise and remember your business.",
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
          tagline="THE OPPORTUNITY"
          hideBadge={false}
          heading={
            <h2 className="mx-auto max-w-[900px] text-center font-[var(--font-inter)] text-[32px] font-medium leading-[1] tracking-[-1.5px] sm:text-[56px]">
              why most{" "}
              <span
                className="font-normal italic text-[42px] sm:text-[72px]"
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
              >
                marketing <br /> strategies
              </span>{" "}
              fail
            </h2>
          }
          subheading="Most businesses don't have a marketing problem, they have a strategy problem."
          leftTitle="Most Brands"
          rightTitle="The USS Difference"
          leftPoints={googleAdsBrandPoints}
          rightPoints={googleAdsUssPoints}
          centerLogo="/assets/uss-logo.png"
          logoClassName="w-[80px] lg:w-[115px]"
        />
      </div>
      <GrowthRoadmap />
      <TeamAccordion
        heading={
          <h2 className="text-[32px] sm:text-[36px] md:text-[64px] lg:text-[75px] leading-[1] tracking-[-1px] lg:tracking-[-3px] font-light lowercase" style={{ fontWeight: 300 }}>

            from discovery to <span className="relative inline-block z-10 whitespace-nowrap text-[#ff5500] timesFontFamily italic text-[42px] sm:text-[51px] md:text-[79px] lg:text-[90px]">
              scale.

              {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[135%] bg-[#ff5500]/30 blur-[24px] -z-10 rounded-[100%] pointer-events-none"></div>

              <svg
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[48%] w-[128%] h-[160%] pointer-events-none overflow-visible"
                viewBox="0 0 400 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 32,72 C 22,32 90,14 205,15 C 320,16 388,32 384,72 C 380,112 315,138 195,136 C 75,134 16,108 26,66 C 34,36 102,20 220,18"
                  stroke="#ff5500"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-95"
                />
              </svg> */}
            </span>
          </h2>
        }
        data={strategyAccordionData}
      />
      <LevelsOfFunnel />
      <StrategyByBusinessGoal />
      <div className="-mt-[60px] sm:-mt-0 marketing-six-step-wrapper">
        <style>{`
          .marketing-six-step-wrapper .cursor-pointer > span {
            font-size: 14px !important;
          }
          .marketing-six-step-wrapper p {
            font-size: 14px !important;
            line-height: 1.6 !important;
          }
          @media (min-width: 640px) {
            .marketing-six-step-wrapper .cursor-pointer > span {
              font-size: 14px !important;
            }
            .marketing-six-step-wrapper p {
              font-size: 14px !important;
            }
          }
          @media (min-width: 1024px) {
            .marketing-six-step-wrapper .cursor-pointer > span {
              font-size: 20px !important;
              margin-top: 8px !important;
            }
            .marketing-six-step-wrapper p {
              font-size: 19px !important;
              line-height: 1.65 !important;
              max-width: 620px !important;
            }
          }
        `}</style>
        <SixStepSystem
          cardStyle={true}
          heading={
            <h2 className="text-white font-medium tracking-[-1px] sm:tracking-[-2px] text-[36px] sm:text-[56px] leading-[1.1] sm:leading-[69.36px]">
              every digital touchpoint <br className="hidden sm:block" />
              needs its {" "}
              <span
                className="text-[#FF5500] italic font-normal font-[var(--font-cormorant)] timesFontFamily text-[46px] sm:text-[72px] leading-[0] sm:leading-[69.36px] tracking-[-1.5px] sm:tracking-[-2px]"
              >
                own strategy
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
