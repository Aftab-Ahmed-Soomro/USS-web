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
import { RevenueMethod } from "../components/RevenueMethod";

const emailStats = [
  { value: "24.8M+", label: "Messages Delivered" },
  { value: "3.6M+", label: "Customer Conversations" },
  { value: "412K+", label: "Leads Generated" },
  { value: "100+", label: "Brands Worldwide" },
];

function Hero() {
  return (
    <section className="bg-[#f7f7f5] px-4 min-[375px]:px-6 py-[40px] sm:py-[76px] text-black lg:py-[82px] sm:px-6">
      <div className="relative z-10 mx-auto grid max-w-[1200px] xl:max-w-[1300px] gap-8 sm:gap-10 lg:grid-cols-[minmax(0,520px)_minmax(0,640px)] lg:items-center lg:justify-between">
        <Stagger staggerDelay={0.15}>

          <StaggerItem>
            <p className="font-[var(--font-be-vietnam)] text-[13px] font-normal sm:text-[14px] uppercase tracking-[0.5px] text-[#FF5500] text-center sm:text-start">
              WhatsApp & SMS Marketing
            </p>
            <h1 className="mt-[24px] max-w-[700px] font-[var(--font-be-vietnam)] text-[32px] font-bold lowercase leading-[120%] tracking-[-1px] sm:tracking-[-3px] sm:text-[50px] text-center sm:text-start">
              WhatsApp & SMS
              <br />
              that {" "}
              <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[64px] font-normal timesFontFamily italic lowercase tracking-[-1px] sm:tracking-[-2.8px]">
                drive results
              </span>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-[24px] min-[375px]:mt-[30px] sm:mt-[50px] max-w-[550px] font-[var(--font-inter)] text-[13px] leading-[1.6] sm:leading-[32px] text-black/72 sm:text-[16px] text-center sm:text-start">
              Reach customers instantly through direct, personalised messaging that drives engagement, enquiries <span className="whitespace-nowrap sm:whitespace-normal">and repeat purchases.</span>
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="flex items-center justify-center sm:justify-start">
              <Link
                className="mt-[24px] sm:mt-[36px] inline-flex h-[38px] sm:h-[38px] min-w-[178px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold uppercase text-white transition hover:bg-[#ff6b1f]"
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
            LET&apos;S CONNECT
          </p>
        </StaggerItem>
        <StaggerItem>
          <h2 className="mt-[24px] sm:mt-8 font-[var(--font-be-vietnam)] text-[32px]  font-medium leading-[1.08] tracking-[-1.5px] sm:text-[48px]">
            reach your customers
            <br />
            where it{" "}
            <span className="font-[var(--font-cormorant)] text-[42px] leading-[1.1] sm:leading-none sm:text-[64px] font-extralight timesFontFamily italic text-[#ff5500]">
              matters most
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

const relatedProjects = [
  {
    slug: "agency-8",
    name: "Agency 8",
    image: "/assets/allProjects/agency8.webp",
    copy: "We used WhatsApp and SMS campaigns to connect Agency 8 with buyers, follow up on enquiries and keep clients updated throughout their property journey.",
    tags: ["WhatsApp Marketing", "SMS Campaigns", "Lead Generation "],
    year: "2026",
    imageClassName: "object-cover object-[30%_70%]",
  },
  {
    slug: "supperclub",
    name: "SupperClub",
    image: "/assets/club.jpg",
    copy: "We increased SupperClub membership using Meta Ads to drive members using creative assets and location targeting.",
    tags: ["Membership Increase", "Hospitality"],
    year: "2026",
    imageClassName: "object-cover object-[50%_65%]",
  },
];

function RelatedProjects() {
  return (
    <section className="bg-[#080808] px-4 min-[375px]:px-6 py-[40px] sm:py-[56px] text-white">
      <div className="mx-auto max-w-[1200px] xl:max-w-[1300px] ">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <Stagger staggerDelay={0.12}>
            <StaggerItem>
              <p className="font-[var(--font-be-vietnam)] text-[12px] font-normal uppercase tracking-[3px] text-[#ff5500] mb-[16px]">
                RECENT PROJECTS
              </p>
              <h2 className="font-[var(--font-be-vietnam)] text-[32px] sm:text-[56px] font-medium lowercase leading-none tracking-[-0.96px]">
                see how we{" "} <br />
                <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] font-normal timesFontFamily italic tracking-[-0.96px]">
                  connect with customers
                </span>
              </h2>
              <p className="mt-[16px] font-[var(--font-inter)] text-[14px] sm:text-[18px] text-white/90">
                Explore how we've helped brands engage customers through strategic WhatsApp and SMS campaigns.
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


// Card Data Structure
const CARDS_DATA = [
  {
    id: '01',
    title: 'Audience Segmentation',
    description: 'Create targeted customer groups based on behaviour, purchase history, location and engagement to deliver more relevant messaging',
    bgImage: '/assets/method1.webp', // Replace with your image src
  },
  {
    id: '02',
    title: 'Campaign Strategy',
    description: 'Plan each campaign around clear objectives, customer journeys and the right communication channels to maximise results',
    bgImage: '/assets/method2.webp', // Replace with your image src
  },
  {
    id: '03',
    title: 'Messaging & Automation',
    description: 'Create personalised messages and automated workflows that engage customers at every stage of their journey',
    bgImage: '/assets/method3.webp', // Replace with your image src
  },
  {
    id: '04',
    title: 'Reporting & Optimisation',
    description: 'Track performance, refine campaigns and continuously optimise messaging to improve engagement and conversions.',
    bgImage: '/assets/method4.webp', // Replace with your image src
  },
];

const googleAdsBrandPoints = [
  {
    number: "01",
    title: "Random Campaigns",
    description:
      "Messages are sent during promotions or last minute announcements.",
  },
  {
    number: "02",
    title: "Everyone Gets the Same Message",
    description:
      "The same message is sent to every customer, regardless of behaviour.",
  },
  {
    number: "03",
    title: "No Customer Journey",
    description:
      "No automated messaging before, during or after the customer journey.",
  },
  {
    number: "04",
    title: "No Performance Tracking",
    description:
      "Campaigns run without measuring engagement, conversions or sales.",
  },
];

const googleAdsUssPoints = [
  {
    number: "01",
    title: "Planned Messaging Strategy",
    description:
      "Every campaign is planned around your business goals and customer journey.",
  },
  {
    number: "02",
    title: "Smart Audience Segmentation",
    description:
      "Messages are personalised using customer behaviour and interests.",
  },
  {
    number: "03",
    title: "Automated Customer Journeys",
    description:
      "Automated flows engage customers before, during and after every purchase.",
  },
  {
    number: "04",
    title: "Continuous Optimisation",
    description:
      "Campaigns are continually refined using real performance data.",
  },
];

const whatsappSmsTargetItems = [
  {
    number: "01",
    icon: "Users2",
    title: "New Customers",
    description: "First time enquiries and new customer introductions",
  },
  {
    number: "02",
    icon: "Users",
    title: "Existing Customers",
    description: (
      <>
        Keep current customers <br className="hidden sm:block" />
        informed and <br className="hidden sm:block" />
        engaged
      </>
    ),
  },
  {
    number: "03",
    icon: "Crown",
    title: "VIP Customers",
    description: "Reward loyal customers with exclusive updates and offers",
  },
  {
    number: "04",
    icon: "ShoppingBag",
    title: "Abandoned Carts",
    description: "Recover lost sales with timely reminder messages",
  },
  {
    number: "05",
    icon: "Calendar",
    title: "Appointments",
    description: "Send confirmations, reminders and follow up messages",
  },
  {
    number: "06",
    icon: "Target",
    title: "Customer Behaviour",
    description: "Target customers based on actions, purchases or engagement",
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
          tagline="THE OPPORTUNITY"
          hideBadge={false}
          heading={
            <h2 className="mx-auto max-w-[900px] text-center font-[var(--font-inter)] text-[32px] font-medium leading-[1] tracking-[-1.5px] sm:text-[56px]">
              why most{" "}
              <span
                className="font-normal italic text-[42px] sm:text-[72px]"
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
              >
                WhatsApp & SMS <span className="lowercase">Marketing</span>
              </span>{" "}
              fails
            </h2>
          }
          subheading="Most brands don't have a WhatsApp & SMS marketing problem.They have a strategy problem."
          leftTitle="Most Brands"
          rightTitle="The USS Difference"
          leftPoints={googleAdsBrandPoints}
          rightPoints={googleAdsUssPoints}
          centerLogo="/assets/wa-sms.webp"
          logoClassName="w-[180px] lg:w-[265px] mt-4"
        />
      </FadeUp>
      <WhyWhatsappWorks />
      <WhatsAppChannels />
      <ConversationFlow />
      <TargetRightPeople items={whatsappSmsTargetItems} />
      <RevenueMethod
        heading={
          <>
            our approach to turning <br className="hidden sm:block" />{" "}
            <span
              className="italic text-[#ff5500] font-normal text-[40px] sm:text-[72px] leading-[1.1] sm:leading-[70px] tracking-[-3%]"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              conversations into revenue
            </span>
          </>
        }
        cards={CARDS_DATA}
      />
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
