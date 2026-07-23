import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Numbers} from "../components/Numbers";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";
import { ConsultationForm } from "../components/ConsultationForm";
import { Brands } from "../components/Brands";
import { GoodCompanyMap } from "../components/GoodCompanyMap";
import Stagger from "../components/Stagger";
import StaggerItem from "../components/Staggeritem";
import { WhyEmailFails } from "../components/WhyEmailFails";
import IndustriesServed from "../components/IndustriesServed";
import FadeUp from "../components/FadeUp";
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
        className="pointer-events-none absolute -bottom-[20%] -right-[20%] h-[80vw] max-h-[800px] min-h-[500px] w-[80vw] max-w-[800px] min-w-[500px] rounded-full opacity-40 blur-[100px] animate-glow-br"
        style={{ background: 'radial-gradient(circle, #FF5500 0%, rgba(255,85,0,0) 70%)' }}
      />

      <div className="relative z-10 mx-auto grid max-w-[1150px] gap-10 lg:grid-cols-[minmax(0,660px)_430px] lg:items-center lg:justify-between">
        <Stagger staggerDelay={0.15}>
          <StaggerItem>
            <h1 className="mt-[24px] max-w-[700px] font-[var(--font-be-vietnam)] text-[32px] font-bold lowercase sm:leading-[70px] tracking-[-1px] sm:tracking-[-3px] sm:text-[58px] text-white text-center sm:text-start">
              your website,
              <br className="hidden sm:block" />
              is your{" "}
              <br className="block sm:hidden" />
              <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] lowercase font-normal timesFontFamily italic text-white leading-[0] sm:leading-[30px] tracking-[-1px] sm:tracking-[-2.8px]">
                hardest
                <br className="hidden sm:block" />
                working sales{" "}
                <br className="block sm:hidden" />
              </span>
              tool
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-[24px] min-[375px]:mt-[30px] sm:mt-[50px] max-w-[500px] font-[var(--font-inter)] text-[13px] leading-[1.6] sm:leading-[32px] text-white/90 sm:text-[18px] text-center sm:text-start">
              We design custom websites in Figma and develop them from the ground up, creating fast, responsive websites built to turn visitors into customers.
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

function FinalCta() {
  return (
    <section className="bg-black px-4 min-[375px]:px-6 pt-[50px] sm:pt-[70px] text-white pb-30">
      <Stagger staggerDelay={0.12} className="mx-auto max-w-[1150px] text-center">
        <StaggerItem>
          <p className="font-[var(--font-be-vietnam)] text-[10px] font-medium uppercase tracking-[4px] text-[#ff5500]">
            Get Started
          </p>
        </StaggerItem>
        <StaggerItem>
          <h2 className="mt-[24px] sm:mt-8 font-[var(--font-be-vietnam)] text-[32px] font-medium leading-[1.08] tracking-[-1.5px] sm:text-[55px]">
            turn your website into
            <br />
            a{" "}
            <span className="font-[var(--font-cormorant)] text-[42px] leading-[1.1] sm:leading-none font-extralight timesFontFamily italic text-[#ff5500]">
              growth asset
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

const emailStats = [
  { value: "24.8M+", label: "Messages Delivered" },
  { value: "3.6M+", label: "Customer Conversations" },
  { value: "412K+", label: "Leads Generated" },
  { value: "100+", label: "Brands Worldwide" },
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
    description: 'Beautiful, responsive designs tailored to your brand identity. We craft visually stunning, conversion-focused emails that captivate your audience.',
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
    <div className="w-full bg-black text-white py-[50px] sm:py-20 px-4 min-[375px]:px-6 min-h-screen flex flex-col justify-center items-center font-sans">
      <Stagger staggerDelay={0.15} className="max-w-[1150px] w-full">

        {/* Header Section */}
        {/* Heading */}
        <StaggerItem>
          <h2 className="lowercase text-white text-[32px] font-medium leading-[1.15] tracking-[-3%] sm:text-[56px] sm:leading-[70px] mb-[40px] sm:mb-16">
            method to convert email database to <br className="hidden sm:block" />

            <span
              className="italic text-[#ff5500] font-normal text-[42px] sm:text-[72px] leading-[1.1] sm:leading-[70px] tracking-[-3%]"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              high performing revenue
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

export default function WebsitePage() {
  return (
    <main className="min-h-screen bg-[#080808] overflow-x-hidden">
      <Header />
      <Hero />
      <Numbers stats={emailStats} />
      <Brands />
      <WhyEmailFails
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
            fails
          </h2>
        }
        subheading="Most brands don’t have a website problem, they have a structure and conversion problem."
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
}
