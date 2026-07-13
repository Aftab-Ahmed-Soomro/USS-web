import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Numbers, Numbers as NumbersSection } from "../components/Numbers";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";
import { ConsultationForm } from "../components/ConsultationForm";
import { Brands } from "../components/Brands";
import { GoodCompanyMap } from "../components/GoodCompanyMap";
import Stagger from "../components/Stagger";
import StaggerItem from "../components/Staggeritem";
import { WhyEmailFails } from "../components/WhyEmailFails";

const inputClass =
  "mt-[6px] h-[29px] w-full rounded-[5px] border border-white/75 bg-black px-[9px] font-[var(--font-inter)] text-[10px] text-white outline-none placeholder:text-white/40 focus:border-[#ff5500]";

const performPoints = [
  "Built for aesthetics, not conversion",
  "Slow performance and poor user experience",
  "No clear structure or user journey",
  "Not optimised for mobile or speed",
  "No alignment with marketing and growth",
];

const serviceRows = [
  {
    title: "custom website design",
    copy: "A tailored design aligned with your brand and positioning.",
    duration: "1 week",
    meta: ["Design research", "Wireframes", "High fidelity design", "Prototyping"],
    open: true,
  },
  { title: "custom website development", open: false },
  { title: "ux & ui design", open: false },
  { title: "conversion focused landing pages", open: false },
  {
    title: "website optimization and performance improvements",
    open: false,
  },
  { title: "ongoing website support", open: false },
];

const portfolio = [
  {
    title: "Disturbed Innovations Group",
    type: "Web Design",
    image: "/assets/pepsi.png",
  },
  {
    title: "Agency 8",
    type: "Web Design",
    image: "/assets/pepsi2.jpg",
  },
  {
    title: "Afro Maya",
    type: "Web Design",
    image: "/assets/pepsi3.jpg",
  },
];

const trustedBrandImages = [
  {
    name: "Agency 8",
    image: "/assets/100brands/image 1.png",
    className: "w-[170px] sm:w-[180px]",
  },
  {
    name: "Vodafone",
    image: "/assets/brands/vodafone.png",
    className: "w-[150px] sm:w-[160px]",
  },
  {
    name: "Sadia Psychology",
    image: "/assets/brands/sadia.png",
    className: "w-[170px] sm:w-[180px]",
  },
  {
    name: "Flowork",
    image: "/assets/brands/flowork.png",
    className: "w-[170px] sm:w-[180px]",
  },
  {
    name: "Unilever",
    image: "/assets/100brands/image 3.png",
    className: "w-[130px] sm:w-[140px]",
  },
];


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
            <h1 className="mt-[24px] max-w-[700px] font-[var(--font-be-vietnam)] text-[32px] min-[375px]:text-[38px] font-bold lowercase leading-[70px] tracking-[-1px] sm:tracking-[-3px] sm:text-[58px] text-white">
              your website
              <br />
              is your{" "}
              <span className="font-[var(--font-cormorant)] text-[1.12em] sm:text-[72px] lowercase font-normal timesFontFamily italic text-white leading-[1.2] sm:leading-[30px] tracking-[-1px] sm:tracking-[-2.8px]">
                hardest 
                <br />
                working sales{" "}
              </span>
              tool
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-[24px] min-[375px]:mt-[30px] sm:mt-[50px] max-w-[500px] font-[var(--font-inter)] text-[14px] leading-[1.6] sm:leading-[32px] text-white/90 sm:text-[18px]">
              We design custom websites in Figma and develop them from the ground up, creating fast, responsive websites built to turn visitors into customers.
            </p>
          </StaggerItem>
          <StaggerItem>
            <Link
              className="mt-[24px] sm:mt-[36px] inline-flex h-[46px] sm:h-[38px] min-w-[178px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-white transition uppercase hover:bg-[#ff6b1f]"
              href="/contact"
            >
              Book a Consultation
            </Link>
          </StaggerItem>
        </Stagger>

        <ConsultationForm />
      </div>
    </section>
  );
}

function WebsiteMockup() {
  return (
    <div className="grid w-full gap-[34px] lg:grid-cols-[minmax(0,604px)_minmax(0,412px)] lg:items-start lg:justify-between">
      <div className="relative aspect-square w-full overflow-hidden bg-white">
        <Image
          src="/assets/web1.png"
          alt="Portfolio website mockup"
          fill
          sizes="(min-width: 1024px) 604px, calc(100vw - 48px)"
          className="object-contain"
        />
      </div>

      <div className="grid gap-[28px]">
        <div className="relative aspect-[1910/1198] w-full overflow-hidden rounded-[12px] bg-[#111]">
          <Image
            src="/assets/web2.png"
            alt="Agency 8 real estate homepage mockup"
            fill
            sizes="(min-width: 1024px) 412px, calc(100vw - 48px)"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[1912/1302] w-full overflow-hidden bg-white shadow-[0_18px_35px_rgba(0,0,0,0.06)]">
          <Image
            src="/assets/web3.png"
            alt="Agency 8 property listing website mockup"
            fill
            sizes="(min-width: 1024px) 412px, calc(100vw - 48px)"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

function ShowcaseIntro() {
  return (
    <section className="bg-white px-6 py-[42px] text-black">
      <div className="mx-auto max-w-[1150px]">
        <WebsiteMockup />
      </div>
    </section>
  );
}

function PerformSection() {
  return (
    <section className="bg-white px-6 py-[56px] text-black">
      <div className="mx-auto grid max-w-[1150px] gap-12 lg:grid-cols-[minmax(0,430px)_minmax(0,488px)] lg:justify-between">
        <div>
          <h2 className="font-[var(--font-cormorant)] text-[56px] font-extralight timesFontFamily italic leading-none text-[#ff5500] sm:text-[57px]">
            perform
          </h2>
          <p className="mt-[85px] max-w-[346px] font-[var(--font-inter)] text-[16px] leading-[1.55] text-black">
            A website should be your strongest conversion
            asset not just an online presence. They are
            the foundation of your brand.
          </p>
        </div>

        <div className="pt-[9px]">
          <p className="mb-[26px] font-[var(--font-inter)] text-[17px] leading-[1.45] text-black">
            Most websites look good but fail to deliver results.
          </p>
          <ul>
            {performPoints.map((point) => (
              <li
                className="flex min-h-[57px] items-center border-t border-[#e5e9ee] font-[var(--font-inter)] text-[15px] leading-[1.45] text-black last:border-b"
                key={point}
              >
                <span className="mr-[14px] text-[18px] leading-none text-[#ff5500]">&bull;</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function NumbersWebsite() {
  return (
    <NumbersSection
      stats={[
        { value: "45+", label: "Websites Launched" },
        { value: "18.7M+", label: "Annual User Visits Supported" },
        { value: "99.9%", label: "Average Uptime" },
        { value: "100+", label: "Brands Worldwide" },
      ]}
    />
  );
}

function ServicesSection() {
  return (
    <section id="services" className="bg-[#080808] px-6 py-[52px] text-white">
      <div className="mx-auto max-w-[1150px]">
        <h2 className="font-[var(--font-be-vietnam)] text-[34px] font-medium leading-none tracking-[-1.2px] sm:text-[40px]">
          our website{" "}
          <span className="font-[var(--font-cormorant)] text-[1.18em] font-extralight timesFontFamily italic">services</span>
        </h2>
        <p className="mt-[26px] max-w-[515px] font-[var(--font-inter)] text-[15px] leading-[1.55] text-white/90">
          Our website approach combines strategy, design, custom development
          and ongoing optimization all under one USS roof.
        </p>

        <div className="mt-[21px] border-t border-white/60">
          {serviceRows.map((service, index) => (
            <article
              className={`border-b border-white/60 ${service.open ? "py-[40px]" : "py-[22px]"}`}
              key={service.title}
            >
              <div className="grid gap-5 md:grid-cols-[42px_minmax(0,1fr)_126px_28px] md:items-start">
                <span className="pt-[8px] font-[var(--font-inter)] text-[10px] leading-none text-white/45">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-[var(--font-be-vietnam)] text-[25px] font-medium leading-[1.08] tracking-[-0.8px] text-white">
                    {service.title}
                  </h3>
                  {service.open && service.copy ? (
                    <p className="mt-[47px] max-w-[430px] font-[var(--font-inter)] text-[14px] leading-[1.55] text-white/90">
                      {service.copy}
                    </p>
                  ) : null}
                </div>
                <div className={service.open ? "pt-[6px]" : "pt-[7px]"}>
                  {service.open && service.duration ? (
                    <p className="mb-[38px] text-right font-[var(--font-inter)] text-[11px] leading-none text-white">
                      {service.duration}
                    </p>
                  ) : null}
                  <p className="font-[var(--font-inter)] text-[8px] uppercase leading-none tracking-[2.4px] text-white/55">
                    Work Involved
                  </p>
                  {service.open && service.meta ? (
                    <div className="mt-[13px] grid gap-[6px]">
                      {service.meta.map((item) => (
                        <span className="font-[var(--font-inter)] text-[9px] leading-[1.25] text-white/84" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
                <span
                  className={`grid size-[28px] place-items-center rounded-full border font-[var(--font-inter)] text-[14px] leading-none ${
                    service.open
                      ? "border-[#ff5500] bg-[#ff5500] text-black"
                      : "border-white/85 text-white"
                  }`}
                >
                  {service.open ? "x" : "+"}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section className="bg-white px-6 py-[58px] text-black lg:pb-[53px] lg:pt-[57px]">
      <div className="mx-auto max-w-[1150px]">
        <p className="font-[var(--font-be-vietnam)] text-[9px] font-bold uppercase tracking-[1.1px] text-[#ff5500]">
          Case Studies
        </p>
        <div className="mt-[20px] grid gap-6 md:grid-cols-[minmax(0,560px)_132px] md:items-end md:justify-between">
          <div>
            <h2 className="max-w-[560px] font-[var(--font-be-vietnam)] text-[39px] font-medium leading-[0.98] tracking-[-2px] sm:text-[42px]">
              see how we build{" "}
              <span className="font-[var(--font-cormorant)] text-[1.1em] font-extralight timesFontFamily italic text-[#ff5500]">
                high
              </span>
              <br />
              <span className="font-[var(--font-cormorant)] text-[1.1em] font-extralight timesFontFamily italic text-[#ff5500]">
                performing
              </span>{" "}
              websites
            </h2>
            <p className="mt-[8px] font-[var(--font-inter)] text-[12.5px] leading-[1.45] text-[#667798]">
              Explore how we&apos;ve helped brands transform their digital presence.
            </p>
          </div>
          <Link
            className="inline-flex h-[37px] w-[132px] items-center justify-center rounded-full border border-black/80 font-[var(--font-inter)] text-[10px] font-medium text-black transition hover:bg-black hover:text-white"
            href="/projects"
          >
            View all projects <span className="ml-[4px] text-[14px] leading-none">-&gt;</span>
          </Link>
        </div>

        <div className="mt-[47px] grid gap-[26px] md:grid-cols-3">
          {portfolio.map((item) => (
            <article key={item.title}>
              <div className="relative aspect-[271/344] overflow-hidden rounded-[8px] bg-[#ddd]">
                <Image
                  src={item.image}
                  alt={`${item.title} website project`}
                  fill
                  sizes="(min-width: 1024px) 271px, (min-width: 768px) 30vw, calc(100vw - 48px)"
                  className="object-cover"
                />
              </div>
              <div className="mt-[14px] flex items-center justify-between gap-3 font-[var(--font-inter)] text-[9px] leading-none">
                <span className="text-black">{item.title}</span>
                <span className="text-[#667798]">{item.type}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustedBrands() {
  return (
    <section className="bg-[#080808] px-6 py-[58px] text-white ">
      <div className="mx-auto max-w-[1150px] text-center">
        <h2 className="font-[var(--font-be-vietnam)] text-[26px] font-medium leading-tight sm:text-[34px]">
          trusted by 100+ brands worldwide
        </h2>
        <div className="mx-auto mt-[30px] flex max-w-[1150px] flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-12 lg:flex-nowrap lg:justify-between lg:gap-x-8">
                  {trustedBrandImages.map((brand) => (
                    <article className={`group relative h-[100px] max-w-full ${brand.className}`} key={brand.name}>
                      <Image
                        src={brand.image}
                        alt={`${brand.name} brand image`}
                        fill
                        sizes="(min-width: 1024px) 260px, (min-width: 640px) 220px, 46vw"
                        className="object-contain opacity-90 saturate-[0.9] transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                      />
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
             Get Started
          </p>
        </StaggerItem>
        <StaggerItem>
          <h2 className="mt-[24px] sm:mt-8 font-[var(--font-be-vietnam)] text-[32px] min-[375px]:text-[36px] font-medium leading-[1.08] tracking-[-1.5px] sm:text-[55px]">
            turn your website into
            <br />
            a{" "}
            <span className="font-[var(--font-cormorant)] text-[1.12em] leading-[1.1] sm:leading-none font-extralight timesFontFamily italic text-[#ff5500]">
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
    title: "Send and Forget",
    description:
      "Emails are only sent when there's a promotion or announcement.",
  },
  {
    number: "02",
    title: "Every Subscriber Looks the Same",
    description:
      "The same message is sent to everyone, regardless of interests or behavior.",
  },
  {
    number: "03",
    title: "No Long-Term Customer Journey",
    description:
      "There's no system to welcome, nurture, or retain customers after they sign up.",
  },
  {
    number: "04",
    title: "No Clear Performance Tracking",
    description:
      "Little reporting or optimization means opportunities are missed.",
  },
];

const googleAdsUssPoints = [
  {
    number: "01",
    title: "Always-On Email Strategy",
    description:
      "We create an email calendar that keeps your brand consistently in front of customers.",
  },
  {
    number: "02",
    title: "Personalized Customer Experiences",
    description:
      "Campaigns are tailored to different audiences using segmentation and customer behavior.",
  },
  {
    number: "03",
    title: "Automated Customer Journeys",
    description:
      "Welcome flows, abandoned carts, post-purchase emails and retention campaigns work in the background.",
  },
  {
    number: "04",
    title: "Continuous Performance Optimization",
    description:
      "Every campaign is measured, refined and improved using real performance data.",
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
          <h2 className="lowercase text-white text-[28px] min-[375px]:text-[32px] font-medium leading-[1.15] tracking-[-3%] sm:text-[56px] sm:leading-[70px] mb-[40px] sm:mb-16">
            method to convert email database to <br />
            
            <span
              className="italic text-[#ff5500] font-normal text-[36px] sm:text-[72px] leading-[1.1] sm:leading-[70px] tracking-[-3%]"
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
                style={{
                  backgroundImage: `url(${card.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                className="group relative rounded-[28px] overflow-hidden p-6 flex flex-col justify-between cursor-pointer transition-all duration-500 ease-out w-full h-[360px] sm:h-[606.93px]"
              >
                {/* Card Number */}
                <div
                  className="text-[9.82px] font-medium leading-[14.73px] tracking-[2.95px] text-white opacity-80 align-middle"
                >
                  {card.id}
                </div>

                {/* Bottom Content Group (Animates Up on Hover) */}
                <div className="transform translate-y-[80px] group-hover:translate-y-0 transition-transform duration-500 ease-out will-change-transform">

                  {/* Title */}
                  <h3
                    className="text-[18px] sm:text-[22.64px] font-normal leading-[1.3] sm:leading-[26.78px] tracking-[0%] text-white align-middle mb-[8px] sm:mb-3"
                  >
                    {card.title}
                  </h3>

                  {/* Description (Fades and slides in cleanly) */}
                  <p
                    className="text-[14px] sm:text-[15.5px] font-normal leading-[1.4] sm:leading-[18.86px] tracking-[0%] text-white/90 align-middle opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 ease-out"
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
            hideBadge={true}
            heading={
              <h2 className="mx-auto max-w-[900px] text-center font-[var(--font-inter)] text-[40px] font-medium leading-[1] tracking-[-1.5px] sm:text-[56px]">
                why most{" "}
                <span
                  className="font-normal italic text-[60px] sm:text-[72px]"
                  style={{ fontFamily: "'Times New Roman', Times, serif" }}
                >
                  websites
                </span>{" "}
                fails
              </h2>
            }
            subheading="Most brands don't have a email Ads problem, they have a strategy problem."
            leftTitle="Most Brands"
            rightTitle="The USS Difference"
            leftPoints={googleAdsBrandPoints}
            rightPoints={googleAdsUssPoints}
            centerLogo="/assets/Google__logo.webp"
            logoClassName="w-[80px] lg:w-[115px]"
            />
            <RevenueMethod />
      {/* <ShowcaseIntro /> */}
      {/* <PerformSection /> */}
      {/* <NumbersWebsite /> */}
      {/* <ServicesSection /> */}
      {/* <PortfolioSection /> */}
      {/* <Brands /> */}
      {/* <TrustedBrands /> */}
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
