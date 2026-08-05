import Image from "next/image";
import Link from "next/link";
import { Brands } from "../components/Brands";
import { EmailVisuals } from "../components/EmailVisuals";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Numbers } from "../components/Numbers";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";
import { ConsultationForm } from "../components/ConsultationForm";
import { GoodCompanyMap } from "../components/GoodCompanyMap";
import EmailMarketingQuote from "../components/EmailMarketingQuote";
import { WhyEmailFails } from "../components/WhyEmailFails";
import Stagger from "../components/Stagger";
import StaggerItem from "../components/Staggeritem";
import { RevenueMethod } from "../components/RevenueMethod";
import FadeRight from "../components/FadeRight";
import TargetRightPeople, { TargetItem } from "../components/TargetRightPeople";

const emailStats = [
  { value: "40%", label: "Avg. Open Rate" },
  { value: "2-5%", label: "Avg. Click Through Rate" },
  { value: "0.2%", label: "Avg. Unsubscribe Rate" },
  { value: "100+", label: "Brands Worldwide" },
];

const relatedProjects = [
  {
    name: "Agency 8",
    slug: "agency-8",
    year: "2026",
    copy: "Email strategy for a luxury real estate agency, keeping buyers engaged through personalised property updates, off-plan launches and automated customer journeys.",
    image: "/assets/agent.png",
    tags: ["Email Marketing", "Real Estate", "Customer Journeys"],
  },
  {
    name: "SupperClub",
    slug: "supperclub",
    year: "2026",
    copy: "Built a membership focused email strategy promoting exclusive offers from 5* star hotels, restaurants and spas across the GCC and worldwide.",
    image: "/assets/supp.jpg",
    tags: ["Email Marketing", "Membership Growth", "Customer Retention"],
    imageClassName: "object-cover object-[50%_20%]",
  },
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
        Campaign <br />
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
        Reporting and <br />
        Optimisation
      </>
    ),
    copy: "Continuous reporting and optimisation to improve campaign performance.",
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
    <section className="relative overflow-hidden bg-black px-6 pb-[40px] pt-[40px] text-white sm:pb-[72px] sm:pt-[78px]">
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
            <p className="font-[var(--font-be-vietnam)] text-[10px] font-normal sm:text-[14px] uppercase tracking-[0px] text-white text-center sm:text-start">
              Email Marketing
            </p>
          </StaggerItem>
          <StaggerItem>
            <h1 className="mt-[24px] max-w-[700px] font-[var(--font-be-vietnam)] text-[32px] font-bold lowercase leading-[100%] tracking-[-1px] sm:tracking-[-3px] sm:text-[58px] text-white text-center sm:text-start">
              turn your email database {" "}
              <br className="hidden sm:block" />
              into a{" "}
              <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] lowercase font-normal timesFontFamily italic text-white leading-[1.1] sm:leading-[103.04px] tracking-[-1px] sm:tracking-[-2.8px]">
                revenue engine
              </span>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-[24px] min-[375px]:mt-[30px] sm:mt-[50px] max-w-[560px] font-[var(--font-inter)] text-[13px] leading-[1.6] sm:leading-[32px] text-white/90 sm:text-[18px] text-center sm:text-start">
              We create strategic email campaigns and automated journeys that increase retention, drive repeat purchases and maximise customer value.
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


function EmailOverview() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="relative mx-auto grid max-w-[1150px] px-4 min-[375px]:px-6 py-[50px] sm:py-16 lg:grid-cols-[minmax(0,680px)_minmax(320px,430px)] lg:justify-between lg:py-20">
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
        <Stagger staggerDelay={0.1} className="order-1 text-white lg:col-start-1 lg:row-start-1 lg:max-w-[680px]">
          <StaggerItem>
            <p className="mb-[20px] uppercase text-[11px] font-normal leading-[19.6px] tracking-[0%] text-white sm:text-[14px]">
              Our Email System for Retention & Growth
            </p>
          </StaggerItem>

          <StaggerItem>
            <h2 className="text-[30px] lowercase min-[375px]:text-[32px] font-medium leading-[1.1] tracking-[-1.5px] sm:text-[56px] sm:leading-[70px]">
              Our Approach to <br />
              <span
                className="text-[36px] font-normal italic tracking-[-1.5px] text-[#ff5500] sm:text-[72px] sm:leading-[70px]"
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
              >
                Email Marketing
              </span>
            </h2>
          </StaggerItem>

          <div className="mt-[40px] sm:mt-[52px] grid grid-cols-1 sm:grid-cols-2">
            {systemItems.map((item, i) => (
              <StaggerItem key={item.number}>
                <article
                  className={`py-[24px] sm:py-7 ${
                    i % 2 === 1 ? "sm:border-l border-white/20 sm:pl-8" : ""
                  } ${
                    i > 0 ? "border-t border-white/20" : ""
                  } ${
                    i === 1 ? "sm:border-t-0" : ""
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
            <h2 className="lowercase text-center text-white font-[var(--font-be-vietnam)] font-medium text-[36px] sm:text-[56px] leading-[1.2] sm:leading-[80px] tracking-[-1.5px] sm:tracking-[-3px]">
              every brand has its <br className="hidden sm:block" />
              own{" "}
              <span
                className="italic text-[#ff5500] font-normal text-[44px] sm:text-[72px] leading-[1.2] sm:leading-[80px] tracking-[-1.5px] sm:tracking-[-3px]"
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


function FinalCta() {
  return (
    <section className="bg-black px-4 min-[375px]:px-6 pt-[50px] sm:pt-[70px] text-white pb-30">
      <Stagger staggerDelay={0.15} className="mx-auto max-w-[1150px] text-center">
        <StaggerItem>
          <p className="font-[var(--font-be-vietnam)] text-[10px] font-medium uppercase tracking-[4px] text-[#ff5500]">
            LET&apos;S SCALE
          </p>
        </StaggerItem>
        <StaggerItem>
          <h2 className="mt-[24px] sm:mt-10 font-[var(--font-be-vietnam)] text-[32px] sm:text-[48px] font-medium leading-[1.08] tracking-[-1.5px]">
            turn your database
            <br />
            into{" "}
            <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[64px] leading-[1.1] sm:leading-none font-extralight timesFontFamily italic text-[#ff5500]">
              repeat revenue
            </span>
          </h2>
        </StaggerItem>
        <StaggerItem>
          <div className="mt-[30px] sm:mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
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

function RelatedProjects() {
  return (
    <section className="bg-[#080808] px-4 min-[375px]:px-6 py-[40px] sm:py-[56px] text-white">
      <div className="mx-auto max-w-[1150px]">
        {/* Header */}
        <div className="flex items-center justify-between gap-6">
                  <Stagger staggerDelay={0.12}>
                    <StaggerItem>
                                  <p className="font-[var(--font-be-vietnam)] text-[9px] sm:text-[12px] font-normal uppercase tracking-[4.8px] text-[#ff5500]">
                                    RECENT PROJECTS
                                  </p>
                                </StaggerItem>
                    <StaggerItem>
                                  <h2 className="mt-[16px] sm:mt-[24px] max-w-[650px] font-[var(--font-be-vietnam)] text-[32px] min-[375px]:text-[38px] font-medium lowercase leading-[0.9] tracking-[-1.4px] sm:text-[56px]">
                                    see how we
                                    <br />
                                    {" "}
                                    <span className="font-[var(--font-cormorant)] text-[1.12em] sm:text-[72px] font-normal timesFontFamily italic leading-[1.1] sm:leading-none">
                                      drive retention
                                    </span>
                                  </h2>
                                              </StaggerItem>
                                  
                    <StaggerItem>
                                  <p className="mt-[14px] max-w-[600px] sm:mt-[18px] font-[var(--font-inter)] text-[14px] sm:text-[18px] leading-[1.5] text-white/90 sm:text-white">
                                    Explore how we've helped brands strengthen customer relationships, increase repeat purchases and maximise the value of every email.
                                  </p>
                                </StaggerItem>
                  </Stagger>
        
                  <FadeRight delay={0.3}>
                    <Link
                      href="/projects"
                      className="hidden sm:inline-flex shrink-0 items-center gap-2 rounded-full border border-white px-5 py-3 font-[var(--font-inter)] text-[12px] text-white sm:text-[15px]"
                    >
                      View all projects
                      <img src="/assets/rightArrowMed.png" className="w-4 h-4" alt="" loading="lazy" decoding="async" />
                    </Link>
                  </FadeRight>
                </div>

        {/* Cards */}
        <div className="mt-[24px] sm:mt-[40px] grid gap-[16px] sm:gap-[24px] md:grid-cols-2">
          {relatedProjects.map((project) => (
            <StaggerItem key={project.name}>
              <Link
                href={`/projects/${project.slug}`}
                className="block rounded-[20px] border border-white p-[12px] sm:p-[14px] transition-colors duration-300 hover:border-[#ff5500] group"
              >
                <div className="relative aspect-[420/260] w-full overflow-hidden max-w-[534px] rounded-[12px] bg-[#111]">
                  <Image
                    src={project.image}
                    alt={`${project.name} marketing strategy project`}
                    fill
                    sizes="(min-width: 768px) 45vw, calc(100vw - 48px)"
                    className={`${project.imageClassName || 'object-cover'} transition-transform duration-700 group-hover:scale-105`}
                  />
                </div>

                <div className="px-[6px] sm:px-[10px] pt-[20px] sm:pt-[24px] pb-[6px]">
                  {/* Title + year */}
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-[var(--font-be-vietnam)] text-[24px] min-[375px]:text-[28px] sm:text-[36px] font-normal leading-[1.1] sm:leading-none tracking-[-0.72px] group-hover:text-[#ff5500] transition-colors duration-300">
                      {project.name}
                    </h3>
                    <span className="shrink-0 font-[var(--font-inter)] text-[13px] sm:text-[14px] text-white">
                      {project.year}
                    </span>
                  </div>

                  {/* Copy */}
                  <p className="mt-[12px] sm:mt-[14px] max-w-[420px] font-[var(--font-inter)] text-[13px] sm:text-[18px] leading-[1.6] sm:leading-[28px] text-white/90 sm:text-white">
                    {project.copy}
                  </p>

                  {/* Tags */}
                  <div className="mt-[16px] sm:mt-[20px] flex flex-wrap gap-[8px] sm:gap-[10px]">
                    {(project.tags ?? []).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white px-[12px] py-[6px] sm:px-[14px] sm:py-[7px] font-[var(--font-inter)] text-[11px] sm:text-[12px] text-white/90 group-hover:border-[#ff5500]/50 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </StaggerItem>
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

export default function EmailMarketingPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      
      <Header />
      <Hero />
      <Numbers stats={emailStats} />
      <EmailMarketingQuote first={"email marketing should contribute to"} second={"35%"} third={"of your business revenue with the right strategy and execution"} />
      <WhyEmailFails tagline="THE OPPORTUNITY" />
      <EmailOverview />
      <Brands />
      <EmailStrategy />
      <EmailVisuals />
      <RevenueMethod
        heading={<>how we build <br className="block sm:hidden" /> high performing <br className="block" />{" "}<span className="italic text-[#ff5500] font-normal text-[40px] sm:text-[72px] leading-[1] sm:leading-[70px] tracking-[-3%]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>email campaigns</span></>}
        cards={[
          { id: '01', title: 'Email Strategy', description: 'Every successful campaign starts with a clear strategy aligned to your business goals.', bgImage: '/assets/method1.png' },
          { id: '02', title: 'Email Automation & Flows', description: 'Build automated email journeys that engage customers at every stage of their lifecycle.', bgImage: '/assets/method2.png' },
          { id: '03', title: 'Email Design & Content', description: 'Engaging email design and compelling content that encourages opens, clicks and conversions.', bgImage: '/assets/method3.png' },
          { id: '04', title: 'Customer Segmentation', description: 'Delivering the right message to the right audience at the right stage of their journey.', bgImage: '/assets/method4.png' },
        ]}
      />
      <RelatedProjects />
      <Testimonials />
      <GoodCompanyMap />
      <Team />
      <FinalCta />
      <div className="mt-[-120px]">

      <Footer />
      </div>
    </main>
  );
}
