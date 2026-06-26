import Image from "next/image";
import Link from "next/link";
import { Brands } from "../components/Brands";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Numbers } from "../components/Numbers";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";
import { LightConsultationForm } from "../components/ConsultationForm";
import { GoodCompanyMap } from "../components/GoodCompanyMap";

const problemPoints = [
  "Messages sent without strategy",
  "Generic broadcasts with low engagement",
  "No segmentation or personalisation",
  "Over-messaging leading to drop-off",
  "No clear link to revenue",
];

const systemItems = [
  {
    title: "Direct Communication Strategy",
    copy: "Clear messaging aligned with your brand and goals.",
    icon: "target",
  },
  {
    title: "Segmentation and Personalisation",
    copy: "Targeted messages based on user behavior and intent.",
    icon: "users",
  },
  {
    title: "Automation and Flows",
    copy: "Triggered messages that reach users at the right time.",
    icon: "bolt",
  },
  {
    title: "Revenue-Focused Campaigns",
    copy: "Promotions and updates designed to drive action.",
    icon: "trend",
  },
];

const services = [
  {
    title: "WhatsApp Marketing Setup and Campaigns",
    icon: "send",
  },
  {
    title: "SMS Campaign Strategy and Execution",
    icon: "message",
  },
  {
    title: "Automation and Flow Setup",
    icon: "bolt",
  },
  {
    title: "Segmentation and Audience Targeting",
    icon: "users",
  },
  {
    title: "Campaign Planning and Scheduling",
    icon: "calendar",
  },
  {
    title: "Performance Tracking and Optimisation",
    icon: "chart",
  },
];

function Hero() {
  return (
    <section className="bg-[#f6f6f4] px-6 pb-[50px] pt-[44px] text-black sm:pb-[66px] sm:pt-[60px]">
      <div className="mx-auto grid max-w-[1150px] gap-10 lg:grid-cols-[minmax(0,545px)_506px] lg:items-center lg:justify-between">
        <div>
          <p className="font-[var(--font-be-vietnam)] text-[9px] font-bold uppercase tracking-[2.8px] text-[#ff5500]">
            Whatsapp &amp; SMS Marketing
          </p>
          <h1 className="mt-[26px] max-w-[520px] font-[var(--font-be-vietnam)] text-[40px] font-medium leading-[0.98] tracking-[-1.6px] sm:text-[52px] lg:text-[55px]">
            WhatsApp &amp;
            <br />
            SMS that
            <br />
            <span className="font-[var(--font-cormorant)] text-[1.14em] font-extralight timesFontFamily italic">
              drive results
            </span>
          </h1>
          <p className="mt-[20px] max-w-[454px] font-[var(--font-inter)] text-[12.5px] leading-[1.7] text-black/68 sm:text-[13px]">
            We use WhatsApp and SMS to deliver direct, high impact
communication that drives engagement, conversions,
and repeat revenue.
          </p>
          <Link
            className="mt-[18px] inline-flex h-[33px] min-w-[214px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[11px] font-bold text-white transition hover:bg-[#ff6b1f]"
            href="/contact"
          >
            Book Consultation
          </Link>
        </div>

        <LightConsultationForm />
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="bg-[#080808] px-6 py-[73px] text-white  lg:py-[86px]">
      <div className="mx-auto grid max-w-[1150px] gap-10 lg:grid-cols-[minmax(0,510px)_minmax(0,426px)] lg:justify-between">
        <div>
          <p className="font-[var(--font-be-vietnam)] text-[9px] font-bold uppercase tracking-[2.6px] text-[#ff5500]">
            The Problem
          </p>
          <h2 className="mt-[28px] max-w-[520px] font-[var(--font-be-vietnam)] text-[34px] font-medium leading-[1.03] tracking-[-1.2px] sm:text-[45px]">
            why most messaging
            <br />
            channels{" "}
            <span className="font-[var(--font-cormorant)] text-[1.1em] font-extralight timesFontFamily italic text-[#ff5500]">
              don&apos;t work
            </span>
          </h2>
          <p className="mt-[20px] max-w-[380px] font-[var(--font-inter)] text-[12.5px] leading-[1.72] text-white/72">
            Most brands either underuse or misuse direct communication channels.
          </p>
        </div>

        <div className="pt-[5px]">
          <ul className="space-y-[16px]">
            {problemPoints.map((point) => (
              <li
                className="border-b border-white/70 pb-[15px] font-[var(--font-inter)] text-[12.5px] leading-[1.45] text-white/88"
                key={point}
              >
                <span className="mr-[9px] text-[#ff5500]">&bull;</span>
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-[23px] max-w-[325px] font-[var(--font-inter)] text-[14px] leading-[1.7] text-white">
            WhatsApp and SMS are powerful — but only
when used correctly.
          </p>
        </div>
      </div>
    </section>
  );
}

function SystemIcon({ type }: { type: string }) {
  return (
    <div className="mb-[17px] grid size-[35px] place-items-center rounded-[9px] bg-[#070707] text-white">
      <svg
        aria-hidden="true"
        className="size-[15px]"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        {type === "target" && (
          <>
            <circle cx="12" cy="12" r="7" />
            <circle cx="12" cy="12" r="3.5" />
            <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
          </>
        )}
        {type === "users" && (
          <>
            <path d="M16 18c0-2.2-1.8-4-4-4s-4 1.8-4 4" />
            <circle cx="12" cy="9" r="3" />
            <path d="M18 17c0-1.4-.8-2.6-2-3.2" />
            <path d="M16.8 7.2a2.4 2.4 0 0 1 0 3.6" />
          </>
        )}
        {type === "bolt" && <path d="M13 2 5 13h6l-1 9 8-12h-6l1-8Z" />}
        {type === "trend" && (
          <>
            <path d="M4 16l5-5 4 4 7-7" />
            <path d="M15 8h5v5" />
          </>
        )}
      </svg>
    </div>
  );
}

function SystemSection() {
  return (
    <section className="bg-[#f7f7f5] px-6 py-[70px] text-black lg:py-[80px]">
      <div className="mx-auto grid max-w-[1150px] lg:grid-cols-[minmax(0,646px)_390px] lg:items-start lg:justify-between">
        <div>
          <p className="font-[var(--font-be-vietnam)] text-[9px] font-bold uppercase tracking-[2.8px] text-[#ff5500]">
            Our System
          </p>
          <h2 className="mt-[39px] max-w-[610px] font-[var(--font-be-vietnam)] text-[34px] font-medium leading-[1.08] tracking-[-1.35px] sm:text-[39px]">
            our messaging system for
            <br />
            <span className="font-[var(--font-cormorant)] text-[1.1em] font-extralight timesFontFamily italic text-[#ff5500]">
              engagement
            </span>{" "}
            and{" "}
            <span className="font-[var(--font-cormorant)] text-[1.1em] font-extralight timesFontFamily italic text-[#ff5500]">
              revenue
            </span>
          </h2>

          <div className="mt-[50px] grid overflow-hidden rounded-[14px] border border-[#e1e6ee] bg-white sm:grid-cols-2">
            {systemItems.map((item) => (
              <article
                className="min-h-[184px] border-t border-[#e1e6ee] px-[31px] py-[31px] first:border-t-0 sm:[&:nth-child(2)]:border-l sm:[&:nth-child(2)]:border-t-0 sm:[&:nth-child(4)]:border-l"
                key={item.title}
              >
                <SystemIcon type={item.icon} />
                <h3 className="max-w-[280px] font-[var(--font-be-vietnam)] text-[16px] font-bold leading-[1.35] tracking-[-0.35px]">
                  {item.title}
                </h3>
                <p className="mt-[12px] max-w-[215px] font-[var(--font-inter)] text-[13px] leading-[1.55] text-[#667798]">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative mx-auto aspect-[370/570] w-full max-w-[370px] overflow-hidden rounded-[7px] lg:mx-0">
          <Image
            alt="WhatsApp messaging system"
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 370px, calc(100vw - 48px)"
            src="/assets/wa_large.jpg"
          />
        </div>
      </div>
    </section>
  );
}

function ServiceIcon({ type }: { type: string }) {
  return (
    <span className="grid size-[34px] shrink-0 place-items-center rounded-[9px] border border-[#dfe6f0] text-white">
      <svg
        aria-hidden="true"
        className="size-[16px]"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
        viewBox="0 0 24 24"
      >
        {type === "send" && (
          <>
            <path d="M21 3 10 14" />
            <path d="m21 3-7 18-4-7-7-4 18-7Z" />
          </>
        )}
        {type === "message" && (
          <>
            <path d="M5 5h14v11H8l-3 3V5Z" />
            <path d="M9 9h6" />
          </>
        )}
        {type === "bolt" && <path d="m13 2-8 12h6l-1 8 9-13h-6l0-7Z" />}
        {type === "users" && (
          <>
            <path d="M16 18c0-2.2-1.8-4-4-4s-4 1.8-4 4" />
            <circle cx="12" cy="9" r="3" />
            <path d="M19 18c0-1.7-1.1-3.1-2.6-3.7" />
            <path d="M16.8 7.7a2.3 2.3 0 0 1 0 2.6" />
          </>
        )}
        {type === "calendar" && (
          <>
            <path d="M7 3v4" />
            <path d="M17 3v4" />
            <path d="M4 8h16" />
            <rect height="16" rx="2" width="16" x="4" y="5" />
          </>
        )}
        {type === "chart" && (
          <>
            <path d="M4 19h16" />
            <path d="M7 16V9" />
            <path d="M12 16V5" />
            <path d="M17 16v-4" />
          </>
        )}
      </svg>
    </span>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="bg-[#080808] px-6 py-[82px] text-white">
      <div className="mx-auto max-w-[1150px]">
        <p className="font-[var(--font-be-vietnam)] text-[9px] font-bold uppercase tracking-[2.8px] text-[#ff5500]">
          Services
        </p>
        <h2 className="mt-[26px] max-w-[460px] font-[var(--font-be-vietnam)] text-[34px] font-medium leading-[1.05] tracking-[-1.25px] sm:text-[47px]">
          our{" "}
          <span className="font-[var(--font-cormorant)] text-[1.1em] font-extralight timesFontFamily italic text-[#ff5500]">
            Whatsapp
          </span>
          <br />
          and{" "}
          <span className="font-[var(--font-cormorant)] text-[1.1em] font-extralight timesFontFamily italic text-[#ff5500]">
            SMS
          </span>{" "}
          services
        </h2>

        <div className="mt-[46px] grid gap-[20px] md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              className="flex min-h-[75px] items-center gap-[14px] rounded-[12px] border border-[#dfe6f0] bg-[#101010] px-[20px] py-[14px] text-left"
              key={service.title}
            >
              <ServiceIcon type={service.icon} />
              <h3 className="max-w-[235px] font-[var(--font-be-vietnam)] text-[15px] font-semibold leading-[1.35] tracking-[-0.25px] text-white">
                {service.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-[#080808] px-6 py-[80px] text-white ">
      <div className="mx-auto max-w-[1150px] text-center">
        <p className="font-[var(--font-be-vietnam)] text-[9px] font-medium uppercase tracking-[3px] text-[#ff5500]">
          Let's connect
        </p>
        <h2 className="mt-[16px] font-[var(--font-be-vietnam)] text-[31px] font-medium leading-[1.08] tracking-[-1.2px] sm:text-[45px]">
          reach your customers
          <br />
          where it{" "}
          <span className="font-[var(--font-cormorant)] text-[1.1em] font-extralight timesFontFamily italic text-[#ff5500]">
            matters most
          </span>
        </h2>
        <div className="mt-[26px] flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            className="inline-flex h-[35px] min-w-[176px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[11px] font-bold text-white transition hover:bg-[#ff6b1f]"
            href="/contact"
          >
            Book a Consultation
          </Link>
          <Link
            className="inline-flex h-[35px] min-w-[176px] items-center justify-center rounded-full border border-white/45 px-7 font-[var(--font-be-vietnam)] text-[11px] font-bold text-white transition hover:border-white"
            href="#services"
          >
            Book a Strategy Call
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function WhatsappAndSmsPage() {
  return (
    <main className="min-h-screen bg-[#080808] overflow-hidden">
      <Header />
      <Hero />
      <ProblemSection />
      <SystemSection />
      <Numbers />
      <Brands />
      <ServicesSection />
      <Testimonials />
      <Team />
      <GoodCompanyMap />
      <FinalCta />
      <Footer />
    </main>
  );
}
