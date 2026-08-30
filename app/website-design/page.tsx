import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Numbers } from "../components/Numbers";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";
import { LightConsultationForm } from "../components/ConsultationForm";
import FadeRight from "../components/FadeRight";
import { Brands } from "../components/Brands";
import { GoodCompanyMap } from "../components/GoodCompanyMap";
import Stagger from "../components/Stagger";
import StaggerItem from "../components/Staggeritem";
import { WhyEmailFails } from "../components/WhyEmailFails";
import IndustriesServed from "../components/IndustriesServed";
import FadeUp from "../components/FadeUp";
import { RevenueMethod } from "../components/RevenueMethod";
import DedicatedPartner from "../components/DedicatedPartner";
import TeamAccordion from "../components/TeamAccordion";
import CaseStudies from "../components/CaseStudies";

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
              WEBSITE TRANSFORMATION
            </p>
          </StaggerItem>
          <StaggerItem>
            <h1 className="mt-[24px] max-w-[700px] font-[var(--font-be-vietnam)] text-[32px] font-bold lowercase leading-[120%] tracking-[-1px] sm:tracking-[-3px] sm:text-[50px] text-white text-center sm:text-start">
              your website,{" "}
              <br className="hidden sm:block" />
              is your{" "}
              <br className="block sm:hidden" />
              <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[64px] lowercase font-normal timesFontFamily italic text-white tracking-[-1px] sm:tracking-[-2.8px]">
                hardest{" "}
                <br className="hidden sm:block" />
                working{" "}
                <br className="block sm:hidden" />
                asset {" "}
              </span>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-[24px] min-[375px]:mt-[30px] sm:mt-[50px] max-w-[550px] font-[var(--font-inter)] text-[13px] leading-[1.6] sm:leading-[32px] text-white/90 sm:text-[16px] text-center sm:text-start">
              We design and develop bespoke websites that combine strategy, performance and user experience to turn visitors <span className="whitespace-nowrap sm:whitespace-normal">into customers.</span>
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="flex justify-center sm:justify-start">
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
    <section className="bg-black px-4 min-[375px]:px-6 pt-[50px] sm:pt-[70px] text-white pb-30">
      <Stagger staggerDelay={0.12} className="mx-auto max-w-[1200px] xl:max-w-[1300px]  text-center">
        <StaggerItem>
          <p className="font-[var(--font-be-vietnam)] text-[10px] font-medium uppercase tracking-[4px] text-[#ff5500]">
            Get Started
          </p>
        </StaggerItem>
        <StaggerItem>
          <h2 className="mt-[24px] sm:mt-8 font-[var(--font-be-vietnam)] text-[32px] font-medium leading-[1.08] tracking-[-1.5px] sm:text-[48px]">
            turn your website into a
            <br />
            {" "}
            <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[64px] leading-[1.1] sm:leading-none font-extralight timesFontFamily italic text-[#ff5500]">
              growth asset
            </span>
          </h2>
        </StaggerItem>
        <StaggerItem>
          <div className="mt-[30px] sm:mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              className="inline-flex h-[38px] sm:h-[42px] min-w-[190px] items-center justify-center rounded-full bg-[#ff5500] px-8 font-[var(--font-be-vietnam)] text-[12px] font-bold uppercase text-white transition hover:bg-[#ff6b1f]"
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

const emailStats = [
  { value: "120+", label: "Websites Designed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "1.2M+", label: "Website Visitors Generated" },
  { value: "15+", label: "Industries Served" },
];

const googleAdsBrandPoints = [
  {
    number: "01",
    title: "Looks Good, Does Little",
    description:
      "The website looks polished but doesn’t guide visitors towards taking action.",
  },
  {
    number: "02",
    title: "Confusing User Journey",
    description:
      "People struggle to find what they need or understand where to go next.",
  },
  {
    number: "03",
    title: "Slow and Hard to Use",
    description:
      "Poor mobile experience and slow loading make visitors leave quickly.",
  },
  {
    number: "04",
    title: "Built Without Business Goals",
    description:
      "The website exists, but it isn’t helping generate enquiries or sales.",
  },
];

const googleAdsUssPoints = [
  {
    number: "01",
    title: "Designed to Convert",
    description:
      "Every page is built to guide visitors towards a clear next step.",
  },
  {
    number: "02",
    title: "Clear User Journey",
    description:
      "Simple navigation and page structure make the website easy to use.",
  },
  {
    number: "03",
    title: "Fast and Responsive",
    description:
      "Custom-built websites that work properly across mobile, tablet and desktop.",
  },
  {
    number: "04",
    title: "Built Around Your Business",
    description:
      "The website reflects your brand and supports your wider marketing goals.",
  },
];

export default function WebsitePage() {
  return (
    <main className="min-h-screen bg-[#080808] overflow-x-hidden">
      <Header />
      <Hero />
      <Numbers stats={emailStats} />
      <Brands />
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
              websites
            </span>{" "}
            <br className="block sm:hidden" />
            don't convert
          </h2>
        }
        subheading="Most brands don't have a website problem. They have a user experience, messaging and conversion problem."
        leftTitle="Most Brands"
        rightTitle="The USS Difference"
        leftPoints={googleAdsBrandPoints}
        rightPoints={googleAdsUssPoints}
        centerLogo="/assets/figma.png"
        logoClassName="w-[60px] lg:w-[105px]"
      />
      <FadeUp>
        <DedicatedPartner />
      </FadeUp>
      <CaseStudies />
      <FadeUp delay={0.1}>
        <TeamAccordion />
      </FadeUp>
      <FadeUp delay={0.1}>
        <IndustriesServed />
      </FadeUp>
      <div className="-mt-12 sm:-mt-0">
        <RevenueMethod
        heading={<>our website development <br className="hidden sm:block" /><span className="italic text-[#ff5500] font-normal text-[40px] sm:text-[72px] leading-[1.1] sm:leading-[0] tracking-[-3%]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>process</span></>}
        cards={[
          { id: '01', title: 'Discovery & Strategy', description: 'Understand your business, audience and objectives while defining the website structure, user journeys and conversion strategy.', bgImage: '/assets/method1.webp' },
          { id: '02', title: 'Design & Prototype', description: 'Create wireframes and UX designs that bring your brand to life before development begins.', bgImage: '/assets/method2.webp' },
          { id: '03', title: 'Development', description: 'Build a fast, responsive website with clean code and a user first experience.', bgImage: '/assets/method3.webp' },
          { id: '04', title: 'Launch & Optimisation', description: 'Launch, test and continuously optimise your website to improve performance, user experience and conversions.', bgImage: '/assets/method4.webp' },
        ]}
      />
      </div>
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
