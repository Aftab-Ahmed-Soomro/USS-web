import Image from "next/image";
import Link from "next/link";
import { Brands } from "../components/Brands";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Numbers as NumbersSection } from "../components/Numbers";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";
import { ConsultationForm } from "../components/ConsultationForm";
import { GoodCompanyMap } from "../components/GoodCompanyMap";
import { WhyEmailFails } from "../components/WhyEmailFails";
import TargetRightPeople from "../components/TargetRightPeople";
import { WhyGoogleAdsWork } from "../components/WhyGoogleAdsWork";
import Stagger from "../components/Stagger";
import StaggerItem from "../components/Staggeritem";
import FadeLeft from "../components/FadeLeft";
import FadeRight from "../components/FadeRight";
import FadeUp from "../components/FadeUp";
import { RevenueMethod } from "../components/RevenueMethod";
import EmailMarketingQuote from "../components/EmailMarketingQuote";

const failPoints = [
  "Creative that fails to capture attention",
  "Campaigns structured inefficiently",
  "No testing or optimisation process",
  "Scaling too quickly or too slowly",
];

const stats = [
  { value: "72.4M+", label: "Impressions Delivered" },
  { value: "18.6M+", label: "Video Views" },
  { value: "643K+", label: "Customer Actions" },
  { value: "4.7x", label: "Average ROAS" },
];

const relatedProjects = [
  {
    slug: "reclaim-us",
    name: "Reclaim",
    image: "/assets/Untitled (418 x 180 px) (1).png",
    copy: "We scaled awareness and customer acquisition across the US using Meta Ads, delivering highly targeted campaigns that generated bookings while maximising return on ad spend.",
    tags: ["Meta Ads", "US Expansion", "Customer Acquisition"],
    year: "2026",
    imageClassName: "object-cover object-[50%_30%]",
  },
  {
    slug: "supperclub",
    name: "SupperClub",
    image: "/assets/Untitled (418 x 180 px) (2).png",
    copy: "Using Meta Ads to grow SupperClub memberships, promoting exclusive experiences from 5 star hotel, restaurant and spa partners through highly targeted conversion campaigns.",
    tags: ["Membership Growth", "Meta Ads", "Hospitality"],
    year: "2026",
    imageClassName: "object-cover object-[50%_65%]",
  },
];

const systemItems = [
  ["01", "Creative That Converts", "High quality creative designed to stop the scroll and encourage action."],
  ["02", "Campaign Structure", "Campaigns built around clear objectives, audience and budget allocation."],
  ["03", "Testing and Optimisation", "Continuous testing to improve performance and identify winning creatives."],
  ["04", "Scaling Performance", "Increasing budget only when campaigns are consistently delivering results."],
];

const workSteps = [
  "Strategy and account setup",
  "Creative direction and production",
  "Campaign management",
  "Conversion tracking and pixel setup",
  "Landing page optimisation",
  "Scaling and performance optimisation",
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-black px-4 min-[375px]:px-6 pb-[40px] pt-[40px] min-[375px]:pb-[58px] min-[375px]:pt-[56px] text-white sm:pb-[72px] sm:pt-[78px]">
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
        className="pointer-events-none absolute -left-[20%] -top-[20%] h-[80vw] max-h-[800px] min-h-[300px] sm:min-h-[500px] w-[80vw] max-w-[800px] min-w-[300px] sm:min-w-[500px] rounded-full opacity-40 blur-[60px] sm:blur-[100px] animate-glow-tl"
        style={{ background: 'radial-gradient(circle, #FF5500 0%, rgba(255,85,0,0) 70%)' }}
      />

      {/* Bottom Right Gradient */}
      <div
        className="pointer-events-none absolute -bottom-[20%] -right-[20%] h-[80vw] max-h-[800px] min-h-[300px] sm:min-h-[500px] w-[80vw] max-w-[800px] min-w-[300px] sm:min-w-[500px] rounded-full opacity-40 blur-[60px] sm:blur-[100px] animate-glow-br"
        style={{ background: 'radial-gradient(circle, #FF5500 0%, rgba(255,85,0,0) 70%)' }}
      />
      <div className="mx-auto grid max-w-[1150px]  gap-8 sm:gap-10 lg:grid-cols-[minmax(0,660px)_430px] lg:items-center lg:justify-between">
        <Stagger staggerDelay={0.12}>
          <StaggerItem>
            <p className="font-[var(--font-be-vietnam)] text-[13px] font-normal sm:text-[14px] uppercase tracking-[0.5px] text-white text-center sm:text-start">
              PAID SOCIAL
            </p>
          </StaggerItem>
          <StaggerItem>
                        <h1 className="mt-[16px] min-[375px]:mt-[24px] max-w-[700px] font-[var(--font-be-vietnam)] text-[32px] font-bold lowercase leading-[100%] tracking-[-1.5px] sm:tracking-[-3px] sm:text-[58px] text-white text-center sm:text-start">

              Turn reach into revenue with{" "}
              <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] lowercase font-normal timesFontFamily italic text-[#FF5500] tracking-[-1.5px] sm:tracking-[-2.8px]">
                Meta Ads
              </span>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-[24px] min-[375px]:mt-[30px] sm:mt-[50px] max-w-[600px] font-[var(--font-inter)] text-[13px] leading-[24px] sm:leading-[32px] text-white/90 sm:text-[18px] text-center sm:text-start">
              We help businesses reach, engage and convert the right audience through data led paid social campaigns across Meta and LinkedIn.
            </p>
          </StaggerItem>
          {/* <StaggerItem>
            <div className="flex justify-start gap-24 bg-black pt-12 pb-6">
              <div className="text-center">
                <h2
                  className="text-[#ff5500]"
                  style={{
                    fontFamily: "Times New Roman, serif",
                    fontWeight: 700,
                    fontStyle: "italic",
                    fontSize: "48px",
                    lineHeight: "48px",
                    letterSpacing: "0%",
                  }}
                >
                  $100M
                </h2>
                <p
                  className="text-white mt-2"
                  style={{
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "20px",
                    letterSpacing: "0%",
                  }}
                >
                  in ad spend managed
                </p>
              </div>

              <div className="text-center">
                <h2
                  className="text-[#ff5500]"
                  style={{
                    fontFamily: "Times New Roman, serif",
                    fontWeight: 700,
                    fontStyle: "italic",
                    fontSize: "48px",
                    lineHeight: "48px",
                    letterSpacing: "0%",
                  }}
                >
                  5x
                </h2>
                <p
                  className="text-white mt-2"
                  style={{
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "20px",
                    letterSpacing: "0%",
                  }}
                >
                  average ROAS achieved
                </p>
              </div>
            </div>
          </StaggerItem> */}
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

        <FadeRight delay={0.3}>
          <ConsultationForm />
        </FadeRight>
      </div>
    </section>
  );
}

function Numbers() {
  return <NumbersSection ctaLabel="See More" stats={stats} />;
}

function RelatedProjects() {
  return (
    <section className="bg-[#080808] px-4 min-[375px]:px-6 py-[40px] sm:py-[56px] text-white">
      <div className="mx-auto max-w-[1150px] ">
        {/* Header */}
        <div className="flex items-center justify-between gap-6">
          <Stagger staggerDelay={0.12}>
            <StaggerItem>
              <p className="font-[var(--font-be-vietnam)] text-[9px] sm:text-[12px] font-normal uppercase tracking-[3px] text-[#ff5500]">
                RECENT PROJECTS
              </p>
            </StaggerItem>
            <StaggerItem>
              <h2 className="mt-[16px] sm:mt-[24px] max-w-[650px] font-[var(--font-be-vietnam)] text-[32px] min-[375px]:text-[38px] font-medium lowercase leading-[0.9] tracking-[-1.4px] sm:text-[56px]">
                see how we turn
                <br />
                {" "}
                <span className="font-[var(--font-cormorant)] text-[1.12em] sm:text-[72px] font-normal timesFontFamily italic leading-[1.1] sm:leading-none">
                  social into growth
                </span>
              </h2>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-[14px] max-w-[600px] sm:mt-[18px] font-[var(--font-inter)] text-[14px] sm:text-[18px] leading-[1.5] text-white/90 sm:text-white">
                Explore how we've helped brands build awareness, generate qualified leads and grow through Meta Ads.
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
          {relatedProjects.map((project, i) => (
            <FadeUp key={project.name} delay={0.15 + i * 0.15}>
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
                  <p className="mt-[12px] sm:mt-[14px] max-w-[550px] font-[var(--font-inter)] text-[13px] sm:text-[18px] leading-[1.6] sm:leading-[28px] text-white/90 sm:text-white">
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

function FinalCta() {
  return (
    <section className="bg-black px-4 min-[375px]:px-6 pt-[50px] sm:pt-[70px] text-white pb-30">
      <Stagger staggerDelay={0.12} className="mx-auto max-w-[1150px]  text-center">
        <StaggerItem>
          <p className="font-[var(--font-be-vietnam)] text-[10px] font-medium uppercase tracking-[4px] text-[#ff5500]">
            LET&apos;S SCALE
          </p>
        </StaggerItem>
        <StaggerItem>
          <h2 className="mt-[24px] sm:mt-8 font-[var(--font-be-vietnam)] text-[32px] font-medium leading-[1.08] tracking-[-1.5px] sm:text-[48px]">
            ready to scale
            <br />
            with{" "}
            <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[64px] leading-[1.1] sm:leading-none font-extralight timesFontFamily italic text-[#ff5500]">
              meta ads?
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

const googleAdsBrandPoints = [
  {
    number: "01",
    title: "No Clear Strategy",
    description:
      "Campaigns launch without a defined direction or purpose.",
  },
  {
    number: "02",
    title: "Broad Targeting",
    description:
      "Ads are shown to people unlikely to take action.",
  },
  {
    number: "03",
    title: "Weak Creative",
    description:
      "Creative fails to communicate the value of your brand",
  },
  {
    number: "04",
    title: "Set and Forget",
    description:
      "Once live, campaigns receive minimal attention",
  },
];

const googleAdsUssPoints = [
  {
    number: "01",
    title: "Strategy First",
    description:
      "Every campaign is built around clear objectives and a defined strategy.",
  },
  {
    number: "02",
    title: "Smarter Targeting",
    description:
      "Target the audiences most likely to engage with your brand.",
  },
  {
    number: "03",
    title: "Creative That Performs",
    description:
      "Creative designed around your audience and campaign objectives.",
  },
  {
    number: "04",
    title: "Continuous Optimisation",
    description:
      "Regular testing and optimisation to improve campaign performance.",
  },
];

export default function MetaAdsPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <Header />
      <Hero />
      <Numbers />
      <Brands />
      <EmailMarketingQuote
        first="Over"
        second="60%"
        third="of people discover new products and brands through Meta platforms."
      />
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
              meta ads
            </span>{" "}
            fails
          </h2>
        }
        subheading="Most brands don't have a Meta Ads problem, they have a strategy problem."
        leftTitle="Most Brands"
        rightTitle="The USS Difference"
        leftPoints={googleAdsBrandPoints}
        rightPoints={googleAdsUssPoints}
        centerLogo="/assets/meta__logo.jpg"
        logoClassName="w-[60px] lg:w-[120px]"
      />
      <WhyGoogleAdsWork
        imageSrc="/assets/metaSide.png"
        imageAlt="Meta Ads strategy expert"
        logoSrc="/assets/meta_logo_2.png"
        // headingPrefix="Meta"
        headingItalic="ads"
        headingSuffix="works"
        items={[
          {
            number: "01",
            icon: "/assets/GoogleAds/icon1.png",
            title: "Build Brand Awareness",
            description: "Introduce your business to new audiences before they start searching.",
          },
          {
            number: "02",
            icon: "/assets/GoogleAds/icon2.png",
            title: "Precision Targeting",
            description: "Target audiences by interests, behaviours, demographics and location.",
          },
          {
            number: "03",
            icon: "/assets/GoogleAds/icon3.png",
            title: "Creative That Converts",
            description: "Creative designed to capture attention and encourage action.",
          },
          {
            number: "04",
            icon: "/assets/GoogleAds/icon4.png",
            title: "Stay Top of Mind",
            description: "Reconnect with people who have already engaged with your business.",
          },
        ]}
      />
      <div className="sm:-mb-0 -mb-10">
        <TargetRightPeople />
      </div>

      <RevenueMethod
        heading={<>how we build <br className="block sm:hidden" /> high performing <br className="hidden sm:block" />{" "}<span className="italic text-[#ff5500] font-normal text-[40px] sm:text-[72px] leading-[1.1] sm:leading-[70px] tracking-[-3%]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>  <br className="block sm:hidden" /> meta campaigns</span></>}
        cards={[
          { id: '01', title: 'Campaign Strategy', description: 'We define your objectives, audience, budget and campaign structure before launching.', bgImage: '/assets/method1.png' },
          { id: '02', title: 'Audience Targeting', description: 'We build targeted audiences using demographics, interests, behaviours and customer data.', bgImage: '/assets/method2.png' },
          { id: '03', title: 'Creative & Ad Content', description: 'We create engaging ad creatives and messaging designed to capture attention and drive action.', bgImage: '/assets/method3.png' },
          { id: '04', title: 'Optimisation & Scaling', description: 'We continuously test, refine and scale campaigns using real performance data.', bgImage: '/assets/method4.png' },
        ]}
      />
      {/* <div className="sm:-mt-0 -mt-45"> */}
      <RelatedProjects />

      <Testimonials />
      {/* </div> */}
      <Team />
      <GoodCompanyMap />
      <FinalCta />
      <div className="mt-[-120px]">

        <Footer />
      </div>
    </main>
  );
}
