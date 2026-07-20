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
import Stagger from "../components/Stagger";
import StaggerItem from "../components/Staggeritem";
import FadeRight from "../components/FadeRight";
import FadeUp from "../components/FadeUp";
import { WhyEmailFails } from "../components/WhyEmailFails";
import WhatsAppChannels from "../components/WhatsAppChannels";
import ConversationFlow from "../components/ConversationFlow";
import TargetRightPeople from "../components/TargetRightPeople";
import { WhyWhatsappWorks } from "../components/WhyWhatsappWorks";

const problemPoints = [
  "Messages sent without strategy",
  "Generic broadcasts with low engagement",
  "No segmentation or personalisation",
  "Over-messaging leading to drop-off",
  "No clear link to revenue",
];

const emailStats = [
  { value: "24.8M+", label: "Messages Delivered" },
  { value: "3.6M+", label: "Customer Conversations" },
  { value: "412K+", label: "Leads Generated" },
  { value: "100+", label: "Brands Worldwide" },
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
    <section className="bg-[#f7f7f5] px-4 min-[375px]:px-6 py-[40px] sm:py-[76px] text-black lg:py-[82px]">
      <div className="mx-auto grid max-w-[1150px] gap-[40px] sm:gap-10 lg:grid-cols-[minmax(0,700px)_430px] lg:items-center lg:justify-between">
        <Stagger staggerDelay={0.15}>
          
          <StaggerItem>
            <p className="mt-0 sm:mt-[32px] max-w-[600px] font-[var(--font-inter)] text-[10px] sm:text-[14px] font-bold leading-[1.7] tracking-[2.4px] text-[#FF5500] mb-[24px] sm:mb-8 uppercase">
              WhatsApp & SMS Marketing
            </p>
            <h1 className="max-w-[700px] font-[var(--font-be-vietnam)] text-[32px] font-bold leading-[1.03] tracking-[-1px] sm:tracking-[-3.2px] sm:text-[70px]">
              WhatsApp & SMS
              <br />
              that {" "}
              <span className="font-[var(--font-cormorant)] text-[42px] leading-[1.2] sm:leading-[0.5px] sm:text-[88px] font-normal timesFontFamily italic lowercase tracking-[-1px] sm:tracking-[-3.2px]">
                drive results
              </span>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-[24px] min-[375px]:mt-[30px] sm:mt-[24px] max-w-[680px] font-[var(--font-inter)] text-[13px] leading-[1.6] text-black/72 sm:text-[20px] sm:leading-[1.75]">
              We use WhatsApp and SMS to help businesses stay connected with customers through direct communication that drives enquiries, sales, and repeat purchases.
            </p>
          </StaggerItem>
          
          <StaggerItem>
            <Link
              className="mt-[24px] sm:mt-[25px] inline-flex h-[46px] sm:h-[38px] min-w-[176px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] font-bold uppercase text-white transition hover:bg-[#ff6b1f]"
              href="/contact"
            >
              Book a Consultation
            </Link>
          </StaggerItem>
        </Stagger>

        <FadeRight delay={0.4}>
          <LightConsultationForm />
        </FadeRight>
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
    <section className="bg-black px-4 min-[375px]:px-6 pt-[50px] sm:pt-[70px] text-white pb-30">
      <Stagger staggerDelay={0.12} className="mx-auto max-w-[1150px] text-center">
        <StaggerItem>
          <p className="font-[var(--font-be-vietnam)] text-[10px] font-medium uppercase tracking-[4px] text-[#ff5500]">
             LET&apos;S CONNECT
          </p>
        </StaggerItem>
        <StaggerItem>
          <h2 className="mt-[24px] sm:mt-8 font-[var(--font-be-vietnam)] text-[32px]  font-medium leading-[1.08] tracking-[-1.5px] sm:text-[55px]">
            reach your customers
            <br />
            where it{" "}
            <span className="font-[var(--font-cormorant)] text-[42px] leading-[1.1] sm:leading-none sm:text-[72px] font-extralight timesFontFamily italic text-[#ff5500]">
              matters most
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

const relatedProjects = [
  {
    slug: "blank-dxb",
    name: "Blank DXB",
    image: "/assets/dxb.jpg",
    copy: "With a strong Meta Ads execution we focused on Paid Media during Blank DXB launch. We were able to target demand on a granular level making budget efficiency higher.",
    tags: ["Paid Media", "Meta Ads Targeting", "Lead Generation"],
    year: "2024",
    imageClassName: "object-cover",
  },
  {
    slug: "supperclub",
    name: "SupperClub",
    image: "/assets/club.jpg",
    copy: "We increased SupperClub membership using Meta Ads to drive members using creative assets and location targeting.",
    tags: ["Membership Increase", "Hospitality"],
    year: "2024",
    imageClassName: "object-cover object-[50%_65%]",
  },
];

function RelatedProjects() {
  return (
    <section className="bg-[#080808] px-4 min-[375px]:px-6 py-[40px] sm:py-[56px] text-white">
      <div className="mx-auto max-w-[1150px]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <Stagger staggerDelay={0.12}>
            <StaggerItem>
              <p className="font-[var(--font-be-vietnam)] text-[12px] font-normal uppercase tracking-[4px] text-[#ff5500] mb-[16px]">
                PROJECTS
              </p>
              <h2 className="font-[var(--font-be-vietnam)] text-[32px] sm:text-[56px] font-medium lowercase leading-none tracking-[-0.96px]">
                see how we{" "}
                <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] font-normal timesFontFamily italic tracking-[-0.96px]">
                  scale brands.
                </span>
              </h2>
              <p className="mt-[16px] font-[var(--font-inter)] text-[14px] sm:text-[18px] text-white/90">
                Explore how we&apos;ve helped brands grow through Meta Ads.
              </p>
            </StaggerItem>
          </Stagger>

          <FadeRight delay={0.3}>
            <Link
              href="/projects"
              className="hidden sm:inline-flex shrink-0 items-center gap-2 rounded-full border border-white px-5 py-3 font-[var(--font-inter)] text-[12px] text-white sm:text-[15px]"
            >
              View all projects
              <img src="/assets/rightArrowMed.png" className="w-4 h-4" alt="" />
            </Link>
          </FadeRight>
        </div>

        {/* Cards */}
        <div className="mt-[24px] sm:mt-[40px] grid gap-[16px] sm:gap-[24px] grid-cols-1">
          {relatedProjects.slice(0, 1).map((project, i) => (
            <FadeUp key={project.name} delay={0.15 + i * 0.15}>
              <Link
                href={`/projects/${project.slug}`}
                className="block rounded-[20px] border border-white p-[12px] sm:p-[14px] transition-colors duration-300 hover:border-[#ff5500] group"
              >
                <div className="relative aspect-video sm:aspect-[3/1] lg:aspect-[3.5/1] w-full overflow-hidden rounded-[12px] bg-[#111]">
                  <Image
                    src={project.image}
                    alt={`${project.name} marketing strategy project`}
                    fill
                    sizes="100vw"
                    className={`${project.imageClassName || 'object-cover'} transition-transform duration-700 group-hover:scale-105`}
                  />
                </div>

                <div className="px-[6px] sm:px-[10px] pt-[20px] sm:pt-[24px] pb-[6px]">
                  {/* Title + year */}
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-[var(--font-be-vietnam)] text-[24px] min-[375px]:text-[28px] sm:text-[36px] font-normal leading-[1.1] sm:leading-none tracking-[-0.72px] group-hover:text-[#ff5500] transition-colors duration-300">
                      {project.name}
                    </h3>
                    <span className="shrink-0 font-[var(--font-inter)] text-[13px] sm:text-[14px] text-white/50">
                      {project.year}
                    </span>
                  </div>

                  {/* Copy */}
                  <p className="mt-[12px] sm:mt-[14px] max-w-[800px] font-[var(--font-inter)] text-[13px] sm:text-[18px] leading-[1.6] sm:leading-[28px] text-white/90 sm:text-white">
                    {project.copy}
                  </p>

                  {/* Tags */}
                  <div className="mt-[16px] sm:mt-[20px] flex flex-wrap gap-[8px] sm:gap-[10px]">
                    {(project.tags ?? []).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/50 px-[12px] py-[6px] sm:px-[14px] sm:py-[7px] font-[var(--font-inter)] text-[11px] sm:text-[12px] text-white/80 group-hover:border-[#ff5500]/50 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </FadeUp>
          ))}

          {/* Mobile-only view all link, shown below cards on small screens */}
          <Link
            href="/projects"
            className="sm:hidden inline-flex w-fit items-center gap-2 rounded-full border border-white/30 px-5 py-3 font-[var(--font-inter)] text-[12px] text-white/85 transition-colors hover:border-white/60 hover:text-white"
          >
            View all projects
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function  RevenueMethod() {
  return (
    <div className="w-full bg-black text-white py-[50px] sm:py-20 mt-[32px] sm:mt-16 px-4 min-[375px]:px-6 min-h-screen flex flex-col justify-center items-center font-sans">
      <div className="max-w-[1150px] w-full">

        <Stagger staggerDelay={0.12}>
          <StaggerItem>
            <h2 className="lowercase text-white text-[32px] font-medium leading-[1.15] tracking-[-3%] sm:text-[56px] sm:leading-[70px] mb-[40px] sm:mb-16">
              method to convert WhatsApp & SMS database to high
              {" "}
              <span
                className="italic text-[#ff5500] font-normal text-[42px] sm:text-[72px] leading-[1.1] sm:leading-[70px] tracking-[-3%]"
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
              >
                performing revenue 
              </span>
            </h2>
          </StaggerItem>
        </Stagger>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] sm:gap-6 justify-center items-center">
          {CARDS_DATA.map((card, i) => (
            <FadeUp key={card.id} delay={0.1 + i * 0.1}>
              <div
                tabIndex={0}
                style={{
                  backgroundImage: `url(${card.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                className="group relative rounded-[28px] overflow-hidden p-[20px] sm:p-2 flex flex-col justify-between cursor-pointer focus:outline-none transition-all duration-500 ease-out w-full h-[360px] sm:h-[606.93px]"
              >
                {/* Card Number */}
                <div
                  className="text-[9.82px] font-medium leading-[14.73px] tracking-[2.95px] text-white opacity-80 align-middle"
                  style={{ fontStyle: 'Medium' }}
                >
                  {card.id}
                </div>

                {/* Bottom Content Group (Animates Up on Hover/Focus) */}
                <div className="transform translate-y-[80px] group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-500 ease-out will-change-transform">

                  {/* Title */}
                  <h3
                    className="text-[18px] sm:text-[22.64px] font-normal leading-[1.3] sm:leading-[26.78px] tracking-[0%] text-white align-middle mb-[8px] sm:mb-3 min-h-[48px] sm:min-h-[60px]"
                    style={{ fontStyle: 'Regular' }}
                  >
                    {card.title}
                  </h3>

                  {/* Description (Fades and slides in cleanly) */}
                  <p
                    className="text-[14px] sm:text-[15.5px] font-normal leading-[1.4] sm:leading-[18.86px] tracking-[0%] text-white/90 align-middle opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 delay-75 ease-out min-h-[80px] sm:min-h-[120px]"
                    style={{ fontStyle: 'Regular' }}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </div>
  );
}

// Card Data Structure
const CARDS_DATA = [
  {
    id: '01',
    title: 'Keyword Strategy',
    description: 'We identify the keywords your customers are actively searching for and build campaigns around high-intent search terms.',
    bgImage: '/assets/method1.png', // Replace with your image src
  },
  {
    id: '02',
    title: 'Campaign Structure',
    description: 'We build meticulously organized campaigns designed to maximize relevance, improve Quality Score, and give precise control over your budget.',
    bgImage: '/assets/method2.png', // Replace with your image src
  },
  {
    id: '03',
    title: 'Ad Copy & Creative',
    description: 'Our team crafts compelling ad copy and engaging creatives that capture attention, drive higher click-through rates, and increase conversions.',
    bgImage: '/assets/method3.png', // Replace with your image src
  },
  {
    id: '04',
    title: 'Optimisation & Growth',
    description: 'We continuously monitor and refine your campaigns based on data-driven insights, ensuring scalable growth and maximum return on ad spend.',
    bgImage: '/assets/method4.png', // Replace with your image src
  },
];

const googleAdsBrandPoints = [
  {
    number: "01",
    title: "Random Campaigns",
    description:
      "Messages are only sent during promotions or last minute announcements.",
  },
  {
    number: "02",
    title: "Everyone Gets the Same Message",
    description:
      "Every customer receives identical messages regardless of interests or behaviour.",
  },
  {
    number: "03",
    title: "No Customer Journey",
    description:
      "There's no automated communication before or after a purchase.",
  },
  {
    number: "04",
    title: "No Performance Tracking",
    description:
      "Messages are sent without measuring what drives engagement or sales.",
  },
];

const googleAdsUssPoints = [
  {
    number: "01",
    title: "Planned Messaging Strategy",
    description:
      "Every campaign is planned around your customer journey and business goals.",
  },
  {
    number: "02",
    title: "Smart Audience Segmentation",
    description:
      "Customers receive messages based on behaviour, interests and purchase history.",
  },
  {
    number: "03",
    title: "Automated Customer Journeys",
    description:
      "Flows nurture customers before and after purchase without manual work.",
  },
  {
    number: "04",
    title: "Continuous Optimisation",
    description:
      "We refine campaigns using real performance data to improve results over time.",
  },
];

export default function WhatsappAndSmsPage() {
  return (
    <main className="min-h-screen bg-[#080808] overflow-hidden">
      <Header />
      <Hero />
      <Numbers stats={emailStats} />
      <Brands />
      <FadeUp delay={0.2}>
              <WhyEmailFails
                hideBadge={false}
                heading={
                  <h2 className="mx-auto max-w-[900px] text-center font-[var(--font-inter)] text-[32px] font-medium leading-[1] tracking-[-1.5px] sm:text-[56px]">
                    why most{" "}
                    <span
                      className="font-normal italic text-[42px] sm:text-[72px]"
                      style={{ fontFamily: "'Times New Roman', Times, serif" }}
                    >
                      WhatsApp & SMS Marketing
                    </span>{" "}
                    fails
                  </h2>
                }
                subheading="Most brands don't have an email problem, they have a strategy problem."
                leftTitle="Most Brands"
                rightTitle="The USS Difference"
                leftPoints={googleAdsBrandPoints}
                rightPoints={googleAdsUssPoints}
                centerLogo="/assets/wa-sms.png"
                logoClassName="w-[180px] lg:w-[265px] mt-4"
              />
            </FadeUp>
                <WhyWhatsappWorks />
                <WhatsAppChannels />
                <ConversationFlow />
                <TargetRightPeople />
      <RevenueMethod />
      <RelatedProjects />
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
