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

const failPoints = [
  "Emails sent without a clear strategy",
  "No automated customer journeys",
  "Generic messaging to every subscriber",
  "Low engagement and missed revenue",
  "No focus on retention or repeat purchases",
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
      <div className="pointer-events-none absolute left-[-80px] top-[80px] h-[260px] w-[280px] rounded-full bg-[#712507] opacity-45 blur-[90px]" />
      <div className="mx-auto grid max-w-[1150px] gap-10 lg:grid-cols-[minmax(0,660px)_430px] lg:items-center lg:justify-between">
        <div>
          <p className="font-[var(--font-be-vietnam)] text-[10px] font-normal sm:text-[14px] uppercase tracking-[3px] text-white">
            Email Marketing
          </p>
          <h1 className="mt-[24px] max-w-[700px] font-[var(--font-be-vietnam)] text-[38px] font-semibold lowercase leading-[1.08] tracking-[0px] sm:text-[40px] lg:text-[54px] text-white">
            turn your email database
            <br />
            into a{" "}
            <span className="font-[var(--font-cormorant)] text-[1.12em] sm:text-[1.2em] font-extralight timesFontFamily italic text-white">
              revenue engine
            </span>
          </h1>
          <p className="mt-[50px] max-w-[560px] font-[var(--font-inter)] text-[14px] leading-[32px] text-white/90 sm:text-[18px]">
            We create strategic email campaigns and automated customer journeys that deliver the right message at the right time, driving retention and repeat purchases.
          </p>
          <Link
            className="mt-[36px] inline-flex h-[38px] min-w-[178px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] font-bold text-white transition hover:bg-[#ff6b1f]"
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
      <div className="absolute inset-x-0 top-0 h-[47%] bg-[#f5f5f4]" />
      <div className="relative mx-auto grid max-w-[1150px] px-6 lg:grid-cols-[minmax(0,608px)_minmax(320px,430px)] lg:grid-rows-[auto_auto] lg:justify-between">
        <div className="pt-[64px] text-black lg:pt-[78px]">
          <div className="max-w-[600px]">
            <h2 className="font-[var(--font-be-vietnam)] text-[36px] font-medium leading-[1.05] tracking-[-1.5px] sm:text-[56px]">
              why most{" "}
              <span className="font-[var(--font-cormorant)] text-[1.12em] sm:text-[72px] font-normal timesFontFamily italic">
                email
              </span>
              <br />
              <span className="font-[var(--font-cormorant)] text-[1.12em] sm:text-[72px] font-normal timesFontFamily italic">
                marketing{" "}
              </span>
              fails
            </h2>
            <p className="mt-[19px] font-[var(--font-inter)] text-[13px] sm:text-[16px] leading-[1.7] text-[#4A4543]">
              Most brands don't have an email problem, they have a strategy problem.
            </p>
            <ul className="mt-[30px] space-y-[30px] border-t border-t-[#c2c1c1] pt-[8px]">
              {failPoints.map((point) => (
                <li
                  className="flex items-center gap-3 font-[var(--font-inter)] text-[13px] text-[#4A4543]"
                  key={point}
                >
                  <span className="size-1.5 rounded-full bg-[#ff5500]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="order-3 -mx-1 pb-[54px] sm:mx-0 lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:flex lg:items-start lg:pb-0 lg:pt-[78px]">
          <div className="relative mx-auto aspect-[800/1650] w-full max-w-[430px] overflow-hidden bg-white shadow-[0_24px_55px_rgba(0,0,0,0.18)] lg:aspect-auto lg:h-[calc(100%-82px)] lg:min-h-900px]">
            <Image
              src="/assets/email-market.png"
              alt="Email marketing campaign designs"
              fill
              priority
              sizes="(min-width: 1024px) 430px, calc(100vw - 48px)"
              className="object-cover object-top"
            />
          </div>
        </div>

        <div className="py-[70px] text-white lg:py-[82px]">
          <p className="mb-[26px] font-[var(--font-be-vietnam)] text-[10px] sm:text-[14px] font-normal text-white">
            Our Email System for Retention and Growth
          </p>
          <h2 className="font-[var(--font-be-vietnam)] text-[37px] font-medium leading-[1.08] tracking-[-1.5px] sm:text-[56px]">
            Our Approach to <br />
            <span className="font-[var(--font-cormorant)] text-[1.12em] sm:text-[72px] font-normal tracking-[-1.5px] timesFontFamily italic text-[#ff5500]">
              Email Marketing
            </span>
          </h2>
          <div className="mt-[48px] grid border-white/20 sm:grid-cols-2 sm:[&>*:nth-child(2n)]:border-l sm:[&>*:nth-child(n+3)]:border-t">
            {systemItems.map((item) => (
              <article className="min-h-[165px] border-t border-white/20 py-7 sm:border-t-0 sm:py-8 first:pt-0 sm:first:pt-8" key={item.number}>
                <p className="font-[var(--font-inter)] text-[11px] sm:text-[14px] leading-none text-white">
                  {item.number}
                </p>
                <h3 className="mt-[18px] max-w-[300px] font-[var(--font-be-vietnam)] text-[18px] font-semibold leading-[1.25] tracking-[-0.6px] sm:text-[24px]">
                  {item.title}
                </h3>
                <p className="mt-[16px] max-w-[290px] font-[var(--font-inter)] text-[12px] sm:text-[16px] leading-[1.8] text-white">
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

function FinalCta() {
  return (
    <section className="bg-black px-6 py-[70px] text-white  lg:py-[78px]">
      <div className="mx-auto max-w-[1150px] text-center">
        <p className="font-[var(--font-be-vietnam)] text-[10px] font-medium uppercase tracking-[4px] text-[#ff5500]">
           LET&apos;S SCALE
        </p>
        <h2 className="mt-7 font-[var(--font-be-vietnam)] text-[36px] font-medium leading-[1.08] tracking-[-1.5px] sm:text-[55px]">
          turn your database
          <br />
          into{" "}
          <span className="font-[var(--font-cormorant)] text-[1.12em] font-extralight timesFontFamily italic text-[#ff5500]">
            repeat revenue
          </span>
        </h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            className="inline-flex h-[42px] min-w-[190px] items-center justify-center rounded-full bg-[#ff5500] px-8 font-[var(--font-be-vietnam)] text-[12px] font-bold text-white transition hover:bg-[#ff6b1f]"
            href="/contact"
          >
            Book a Consultation
          </Link>
          <Link className="font-[var(--font-be-vietnam)] text-[13px] font-medium text-white/80 transition hover:text-white border-white border rounded-full px-6 h-[48px] inline-flex items-center justify-center" href="#services">
            Book a Strategy Call
          </Link>
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
      <Numbers />
      <EmailOverview />
      <Brands />
      <Services />
      <EmailVisuals />
      <WorkWithUs />
      <GoodCompanyMap />
      <Team />
      <Testimonials />
      <FinalCta />
      <Footer />
    </main>
  );
}
