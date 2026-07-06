import Image from "next/image";
import Link from "next/link";
import { Brands } from "../components/Brands";
import { EmailVisuals } from "../components/EmailVisuals";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Numbers } from "../components/Numbers";
import { Services } from "../components/Services";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";
import { ConsultationForm } from "../components/ConsultationForm";
import { GoodCompanyMap } from "../components/GoodCompanyMap";
import EmailMarketingQuote from "../components/EmailMarketingQuote";
import { WhyEmailFails } from "../components/WhyEmailFails";

const failPoints = [
  "Emails sent without a clear strategy",
  "No automated customer journeys",
  "Generic messaging to every subscriber",
  "Low engagement and missed revenue",
  "No focus on retention or repeat purchases",
];

const emailStats = [
  { value: "40%", label: "Avg. Open Rate" },
  { value: "2-5%", label: "Avg. Click Through Rate" },
  { value: "0.2%", label: "Avg. Unsubscribe Rate" },
  { value: "100+", label: "Brands Worldwide" },
];

const systemItems = [
  {
    number: "01",
    title: "Automated Customer Journeys",
    copy: "Email flows that welcome customers and encourage repeat purchases.",
  },
  {
    number: "02",
    title: "Campaign Planning",
    copy: "Strategic campaigns built around launches and promotions.",
  },
  {
    number: "03",
    title: "Segmentation and Personalisation",
    copy: "Sending the right message to the right audience.",
  },
  {
    number: "04",
    title: "Reporting and Optimisation",
    copy: "Tracking results to improve performance over time.",
  },
];


const waysToWork = [
  {
    number: "01",
    title: "Initial Consultation",
    copy: "A focused review of your current email setup, opportunities and immediate priorities.",
  },
  {
    number: "02",
    title: "Strategy Session",
    copy: "A clear plan for email flows, segmentation, campaign cadence and retention goals.",
  },
  {
    number: "03",
    title: "Ongoing Management",
    copy: "Consistent campaign execution, automation support and performance.",
  },
  {
    number: "04",
    title: "Reporting & Scaling",
    copy: "We report on key KPIs for your email campaigns to give you the full story.",
  },
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-black px-6 pb-[58px] pt-[56px] text-white sm:pb-[72px] sm:pt-[78px]">

      <div className="mx-auto grid max-w-[1150px] gap-10 lg:grid-cols-[minmax(0,660px)_430px] lg:items-center lg:justify-between">
        <div>
          <p className="font-[var(--font-be-vietnam)] text-[10px] font-normal sm:text-[14px] uppercase tracking-[0px] text-white">
            Email Marketing
          </p>
          <h1 className="mt-[24px] max-w-[700px] font-[var(--font-be-vietnam)] text-[38px] font-bold lowercase leading-[100%] tracking-[-3px] sm:text-[58px] text-white">
            turn your email database
            <br />
            into a{" "}
            <span className="font-[var(--font-cormorant)] text-[1.12em] sm:text-[72px] lowercase font-normal timesFontFamily italic text-white leading-[103.04px] tracking-[-2.8px]">
              revenue engine
            </span>
          </h1>
          <p className="mt-[50px] max-w-[560px] font-[var(--font-inter)] text-[14px] leading-[32px] text-white/90 sm:text-[18px]">
            We create strategic email campaigns and automated customer journeys that deliver the right message at the right time, driving retention and repeat purchases.
          </p>
          <Link
            className="mt-[36px] inline-flex h-[38px] min-w-[178px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-white transition uppercase hover:bg-[#ff6b1f]"
            href="/contact"
          >
            Book a Consultation
          </Link>
        </div>

        <ConsultationForm />
      </div>
    </section>
  );
}


function EmailOverview() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="relative mx-auto grid max-w-[1150px] px-6 py-16 lg:grid-cols-[minmax(0,680px)_minmax(320px,430px)] lg:justify-between lg:py-20">
        {/* Image mockup */}
        <div className="order-2 -mx-1 pt-10 sm:mx-0 lg:order-none lg:col-start-2 lg:row-start-1 lg:flex lg:items-start lg:pt-0">
          <div className="relative mx-auto aspect-[463/842] w-full max-w-[400px] overflow-hidden bg-white shadow-[0_24px_55px_rgba(0,0,0,0.35)]">
            <Image
              src="/assets/email-market.png"
              alt="Email marketing campaign designs"
              fill
              priority
              sizes="(min-width: 1024px) 400px, calc(100vw - 48px)"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="order-1 text-white lg:col-start-1 lg:row-start-1 lg:max-w-[680px]">
          <p className="mb-[20px] text-[11px] font-normal leading-[19.6px] tracking-[0%] text-white sm:text-[14px]">
            Our Email System for Retention and Growth
          </p>

          <h2 className="text-[32px] font-medium leading-[1.1] tracking-[-1.5px] sm:text-[56px] sm:leading-[70px]">
            Our Approach to <br />
            <span
              className="text-[1.1em] font-normal italic tracking-[-1.5px] text-[#ff5500] sm:text-[72px] sm:leading-[70px]"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              Email Marketing
            </span>
          </h2>

          <div className="mt-[52px] grid grid-cols-2">
            {systemItems.map((item, i) => (
              <article
                key={item.number}
                className={[
                  "py-6 sm:py-7",
                  i % 2 === 1 ? "border-l border-white/20 pl-8" : "",
                  i >= 2 ? "border-t border-white/20" : "",
                ].join(" ")}
              >
                <p className="text-[11px] font-normal leading-5 text-white/90 sm:text-[14px]">
                  {item.number}
                </p>
                <h3 className="mt-[14px] max-w-[350px] text-[16px] font-semibold leading-[1.3] tracking-[-0.6px] sm:text-[24px] sm:leading-8">
                  {item.title}
                </h3>
                <p className="mt-[12px] max-w-[280px] text-[12px] font-normal leading-[1.7] text-white/90 sm:text-[16px] sm:leading-7">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkWithUs() {
  return (
    <section className="bg-[#f5f5f4] px-6 py-[70px] text-black  lg:py-[82px]">
      <div className="mx-auto grid max-w-[1150px] gap-12 lg:grid-cols-[330px_minmax(0,1fr)] lg:items-center lg:gap-[72px]">
        <div className="lg:pt-2">
          <h2 className="font-[var(--font-be-vietnam)] text-[36px] font-medium leading-[1.04] tracking-[-1.4px] sm:text-[48px]">
            ways to
            <br />
            <span className="font-[var(--font-cormorant)] text-[1.12em] font-extralight timesFontFamily italic">work with</span> us
          </h2>
          <p className="mt-[28px] max-w-[310px] font-[var(--font-inter)] text-[14px] leading-[1.85] text-black/65">
            Whether you&apos;re just getting started or ready to scale, we have a way to work together.
          </p>
        </div>

        <div className="grid border-y border-black/10 sm:grid-cols-2 sm:[&>*:nth-child(2n)]:border-l sm:[&>*:nth-child(n+3)]:border-t">
          {waysToWork.map((way) => (
            <article className="min-h-[176px] border-t border-black/10 py-7 first:border-t-0 sm:border-t-0 sm:px-7 sm:py-8" key={way.number}>
              <p className="font-[var(--font-inter)] text-[11px] leading-none text-black/70">{way.number}</p>
              <h3 className="mt-[20px] font-[var(--font-be-vietnam)] text-[18px] font-bold leading-[1.2] tracking-[-0.3px] sm:text-[19px]">
                {way.title}
              </h3>
              <p className="mt-[18px] max-w-[290px] font-[var(--font-inter)] text-[13px] leading-[1.75] text-black/65">
                {way.copy}
              </p>
            </article>
          ))}
        </div>
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

function EmailStrategy() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-20">
      <div className="mx-auto max-w-[1150px]">
        {/* Heading */}
        <h2 className="lowercase text-white text-[32px] font-medium leading-[1.15] tracking-[-3%] sm:text-[56px] sm:leading-[70px]">
          every brand has its <br />
          own{" "}
          <span
            className="italic text-[#ff5500] font-normal text-[1.1em] tracking-[-3%] sm:text-[72px] sm:leading-[70px]"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            email strategy
          </span>
        </h2>

        {/* Steps */}
        <div className="mt-20 grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              {/* Title */}
              <h3
                className="mb-6 text-white"
                style={{
                  fontWeight: 600,
                  fontSize: "20px",
                  lineHeight: "32px",
                  letterSpacing: "-0.6px",
                }}
              >
                {step.title}
              </h3>

              {/* Icon circle + connecting line */}
              <div className="relative flex items-center">
                <div
                  className="relative z-10 flex shrink-0 items-center justify-center rounded-full bg-white"
                  style={{ width: 108, height: 108 }}
                >
                  {step.icon ? (
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  ) : null}
                </div>

                {i < steps.length - 1 && (
                  <div className="absolute left-[108px] top-1/2 hidden h-px w-[calc(100%-108px+24px)] -translate-y-1/2 bg-white/40 lg:block" />
                )}
              </div>

              {/* Points */}
              <ul className="mt-6 space-y-2">
                {step.points.map((point) => (
                  <li
                    key={point}
                    className="flex max-w-[250px] gap-2 text-white"
                    style={{
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "30px",
                      letterSpacing: "-2%",
                    }}
                  >
                    <span>·</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
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

        {/* Header Section */}
        {/* Heading */}
        <h2 className="lowercase text-white text-[32px] font-medium leading-[1.15] tracking-[-3%] sm:text-[56px] sm:leading-[70px] mb-16">
          method to convert email database to <br />
          high{" "}
          <span
            className="italic text-[#ff5500] font-normal text-[1.1em] tracking-[-3%] sm:text-[72px] sm:leading-[70px]"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            performing revenue
          </span>
        </h2>

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

export default function EmailMarketingPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <Header />
      <Hero />
      {/* <Numbers stats={emailStats} eyebrow="Our Numbers"/> */}
      <Numbers stats={emailStats} />
      <EmailMarketingQuote first={"Email Marketing should contribute to"} second={"35%"} third={"of your business revenue with the right strategy &amp; execution"} />
      <WhyEmailFails />
      <EmailOverview />
      <Brands />
      <EmailStrategy />
      <RevenueMethod />
      {/* <Services /> */}
      <EmailVisuals />
      {/* <WorkWithUs /> */}
      <Testimonials />
      <GoodCompanyMap />
      <Team />
      <FinalCta />
      <Footer />
    </main>
  );
}
