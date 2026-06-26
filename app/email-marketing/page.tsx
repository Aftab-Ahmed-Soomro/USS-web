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
  "Campaigns without strategy",
  "No automation or lifecycle flows",
  "Poor segmentation and targeting",
  "Low engagement and missed revenue",
  "Email treated as a secondary channel",
];

const systemItems = [
  {
    number: "01",
    title: "Flow Automation",
    copy: "Flows that run 24/7, from welcome series to retention campaigns.",
  },
  {
    number: "02",
    title: "Campaign Strategy",
    copy: "Planned, revenue focused campaigns, not random sends to your full database.",
  },
  {
    number: "03",
    title: "Segmentation and Personalisation",
    copy: "Delivering the right message to the right audience.",
  },
  {
    number: "04",
    title: "Revenue Optimisation",
    copy: "We track and improve performance based on real revenue.",
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
      <div className="mx-auto grid max-w-[1150px] gap-10 lg:grid-cols-[minmax(0,560px)_430px] lg:items-center lg:justify-between">
        <div>
          <p className="font-[var(--font-be-vietnam)] text-[10px] font-bold uppercase tracking-[3px] text-white/80">
            Email Marketing
          </p>
          <h1 className="mt-[24px] max-w-[560px] font-[var(--font-be-vietnam)] text-[38px] font-medium lowercase leading-[1.08] tracking-[-1.7px] sm:text-[40px]">
            turn your email database
            <br />
            into a{" "}
            <span className="font-[var(--font-cormorant)] text-[1.12em] font-extralight timesFontFamily italic text-white">
              revenue engine
            </span>
          </h1>
          <p className="mt-[28px] max-w-[430px] font-[var(--font-inter)] text-[13px] leading-[1.75] text-white/82 sm:text-[14px]">
            We build email systems that drive retention, repeat purchases and consistent growth.
          </p>
          <Link
            className="mt-[24px] inline-flex h-[38px] min-w-[178px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] font-bold text-white transition hover:bg-[#ff6b1f]"
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
        <div className="py-[64px] text-black lg:py-[78px]">
          <div className="max-w-[500px]">
            <h2 className="font-[var(--font-be-vietnam)] text-[36px] font-medium leading-[1.05] tracking-[-1.5px] sm:text-[48px]">
              why most{" "}
              <span className="font-[var(--font-cormorant)] text-[1.12em] font-extralight timesFontFamily italic">
                email
              </span>
              <br />
              <span className="font-[var(--font-cormorant)] text-[1.12em] font-extralight timesFontFamily italic">
                marketing{" "}
              </span>
              fails
            </h2>
            <p className="mt-[19px] max-w-[390px] font-[var(--font-inter)] text-[13px] leading-[1.7] text-black/70">
              Most brands aren&apos;t lacking emails, they&apos;re lacking a system.
            </p>
            <ul className="mt-[30px] space-y-[25px] border-t border-t-[#c2c1c1] pt-[16px]">
              {failPoints.map((point) => (
                <li
                  className="flex items-center gap-3 font-[var(--font-inter)] text-[13px] text-black/80"
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
          <div className="relative mx-auto aspect-[800/1650] w-full max-w-[430px] overflow-hidden bg-white shadow-[0_24px_55px_rgba(0,0,0,0.18)] lg:aspect-auto lg:h-[calc(100%-82px)] lg:min-h-[880px]">
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
          <p className="mb-[26px] font-[var(--font-be-vietnam)] text-[10px] font-bold uppercase tracking-[3.8px] text-white/80">
            Our Email System for Retention and Growth
          </p>
          <h2 className="font-[var(--font-be-vietnam)] text-[37px] font-medium leading-[1.08] tracking-[-1.7px] sm:text-[52px]">
            our{" "}
            <span className="font-[var(--font-cormorant)] text-[1.12em] font-extralight timesFontFamily italic text-[#ff5500]">
              email system
            </span>
            <br />
            for retention and growth
          </h2>
          <div className="mt-[48px] grid border-white/20 sm:grid-cols-2 sm:[&>*:nth-child(2n)]:border-l sm:[&>*:nth-child(n+3)]:border-t">
            {systemItems.map((item) => (
              <article className="min-h-[165px] border-t border-white/20 py-7 sm:border-t-0 sm:px-7 sm:py-8 first:pt-0 sm:first:pt-8" key={item.number}>
                <p className="font-[var(--font-inter)] text-[11px] leading-none text-white">
                  {item.number}
                </p>
                <h3 className="mt-[18px] max-w-[260px] font-[var(--font-be-vietnam)] text-[18px] font-medium leading-[1.25] tracking-[-0.3px] sm:text-[19px]">
                  {item.title}
                </h3>
                <p className="mt-[16px] max-w-[290px] font-[var(--font-inter)] text-[12px] leading-[1.8] text-white/82">
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
