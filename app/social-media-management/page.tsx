import Link from "next/link";
import Stagger from "../components/Stagger";
import StaggerItem from "../components/Staggeritem";
import FadeRight from "../components/FadeRight";
import { Brands } from "../components/Brands";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Numbers as NumbersSection } from "../components/Numbers";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";
import { LightConsultationForm } from "../components/ConsultationForm";
import { GoodCompanyMap } from "../components/GoodCompanyMap";
import EmailMarketingQuote from "../components/EmailMarketingQuote";
import PlatformsWeWorkWith from "../components/PlatformsWeWorkWith";
import OurOrganicSocialMediaApproach from "../components/OurOrganicSocialMediaApproach";
import Image from "next/image";
import { WhyEmailFails } from "../components/WhyEmailFails";
import SocialMediaRevenueMethod from "../components/SocialMediaRevenueMethod";

const stats = [
  { value: "500M+", label: "Total Reach" },
  { value: "35M+", label: "Video Views" },
  { value: "4M+", label: "Engagements" },
  { value: "100+", label: "Brands Worldwide" },
];

const relatedProjects = [
  {
    name: "Women Who Thrive",
    slug: "women-who-thrive",
    year: "2026",
    copy: "Using organic social we increased Women Who Thrive membership to 10k after 6months using only Organic Social and to 22k in 18 months. ",
    image: "/assets/womenThrive.jpg",
    tags: ["Social Growth", "Increase Membership", "Women Network Organization"],
  },
  {
    name: "Yula Lounge",
    slug: "yula-beach-lounge",
    year: "2026",
    copy: "Transforming Yalseh into Yula, a modern Dubai beach club. We grew their organic social following to 20k+ in 24 months.",
    image: "/assets/yula2.jpg",
    tags: ["Social Growth", "F&B Industry"],
  },
];

const problems = [
  "Posting without a clear strategy",
  "Inconsistent content and branding",
  "Low engagement and audience growth",
  "Content not aligned with business goals",
  "Focusing on output instead of impact",
];

const socialServicesData = [
  {
    title: "Content Strategy",
    description: "Build a social media strategy aligned with your brand, audience and business objectives.",
    whatsIncluded: [
      "Social media strategy",
      "Audience research",
      "Competitor analysis",
      "Content pillars",
      "Monthly content calendars",
      "Campaign planning",
      "Platform strategy"
    ]
  },
  {
    title: "Content Creation",
    description: "Create engaging, platform specific content designed to strengthen your brand",
    whatsIncluded: [
      "Graphic design",
      "Short form video editing",
      "Reels creation",
      "Photography direction",
      "Copywriting",
      "Carousel design",
      "Motion graphics",
      "Creative concepts"
    ]
  },
  {
    title: "Publishing & Management",
    description: "Manage your channels to keep your social media active and consistent.",
    whatsIncluded: [
      "Content scheduling",
      "Multi platform publishing",
      "Community management",
      "Direct message management",
      "Profile optimisation",
      "Platform management"
    ]
  },
  {
    title: "Community Management",
    description: "Build stronger relationships through active audience engagement",
    whatsIncluded: [
      "Comment responses",
      "Direct message replies",
      "Audience engagement",
      "Community growth",
      "Brand monitoring",
      "Customer interactions"
    ]
  },
  {
    title: "Reporting & Insights",
    description: "Measure performance and identify opportunities for growth.",
    whatsIncluded: [
      "Monthly reporting",
      "Engagement analysis",
      "Reach & impressions",
      "Audience insights",
      "Content performance",
      "Competitor benchmarking",
      "KPI tracking",
      "Strategic recommendations"
    ]
  },
  {
    title: "Optimisation",
    description: "Continuously refine your strategy using performance data.",
    whatsIncluded: [
      "Performance reviews",
      "Content optimisation",
      "A/B testing",
      "Trend analysis",
      "Strategy refinement",
      "Posting optimisation",
      "Creative recommendations",
      "Continuous improvement"
    ]
  }
];


function Hero() {
  return (
    <section className="bg-[#f7f7f5] px-4 min-[375px]:px-5 min-[480px]:px-6 sm:px-6 py-[48px] min-[390px]:py-[58px] text-black sm:py-[76px] lg:py-[82px]">
      <div className="mx-auto grid max-w-[1150px] gap-8 min-[390px]:gap-10 sm:gap-10 lg:grid-cols-[minmax(0,700px)_430px] lg:items-center lg:justify-between">
        <Stagger staggerDelay={0.15}>
          <StaggerItem>
                                <p className="font-[var(--font-be-vietnam)] text-[13px] font-normal sm:text-[14px] uppercase tracking-[0.5px] text-white text-center sm:text-start">
                                  ORGANIC SOCIAL
                                </p>
                              </StaggerItem>
          <StaggerItem>
            <h1 className="max-w-[700px] font-[var(--font-be-vietnam)] text-[32px] font-bold lowercase leading-[1.03] tracking-[-1.5px] min-[390px]:tracking-[-2px] min-[480px]:tracking-[-3.2px] sm:tracking-[-3.2px] sm:text-[70px] text-center sm:text-start">
              social media that builds{" "}
              {/* <br /> */}
              <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[80px] font-normal timesFontFamily italic tracking-[-1.5px] min-[390px]:tracking-[-2px] min-[480px]:tracking-[-3.2px] sm:tracking-[-3.2px]">
                communities and trust{" "}
              </span>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-[16px] min-[390px]:mt-[20px] min-[480px]:mt-[24px] sm:mt-[24px] max-w-[580px] font-[var(--font-inter)] text-[13px] min-[390px]:text-[13px] leading-[1.75] text-black/72 sm:text-[20px] text-center sm:text-start">
              Grow an engaged audience through consistent content, creative storytelling and meaningful conversations across Instagram, TikTok, LinkedIn and more.
            </p>
          </StaggerItem>
          {/* <StaggerItem>
            <p className="mt-[24px] min-[390px]:mt-[28px] min-[480px]:mt-[32px] sm:mt-[32px] max-w-[460px] font-[var(--font-inter)] text-[10px] min-[360px]:text-[11px] min-[430px]:text-[12px] sm:text-[12px] leading-[1.7] tracking-[1.5px] min-[360px]:tracking-[2px] min-[430px]:tracking-[2.64px] sm:tracking-[2.64px] text-[#06060680] uppercase text-center sm:text-start">
              Trusted by brands across the world
            </p>
          </StaggerItem> */}
          <StaggerItem>
            <div className="flex justify-center sm:justify-start">
              <Link
                className="mt-[20px] min-[390px]:mt-[25px] sm:mt-[25px] inline-flex h-[38px] min-w-[176px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] font-bold uppercase text-white transition hover:bg-[#ff6b1f]"
                href="/contact"
              >
                Book a Consultation
            </Link>
            </div>
          </StaggerItem>
        </Stagger>

        <FadeRight delay={0.4}>
          <LightConsultationForm />
        </FadeRight>
      </div>
    </section>
  );
}

function Metrics() {
  return <NumbersSection stats={stats} />;
}

function SocialServices() {
  return (
    <section className="bg-[#080808] px-4 min-[375px]:px-5 min-[480px]:px-6 sm:px-6 py-[48px] min-[390px]:py-[58px] sm:py-[70px] text-white lg:py-[100px]">
      <Stagger staggerDelay={0.15}>
        <div className="mx-auto max-w-[1150px]">
          {/* Header */}
          <StaggerItem>
            <p className="font-[var(--font-inter)] text-[13px] font-bold uppercase tracking-[4px] text-[#ff5500]">
              OUR SERVICES
            </p>
          </StaggerItem>
          <StaggerItem>
            <h2 className="mt-[16px] min-[390px]:mt-[20px] sm:mt-[26px] mb-8 min-[390px]:mb-10 sm:mb-[60px] font-[var(--font-be-vietnam)] text-[32px] sm:text-[50px] font-medium lowercase leading-none tracking-[-1.4px]">
              our social media{" "}
              <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[70px] font-extralight timesFontFamily italic tracking-[-0.04em]">
                services
              </span>
            </h2>
          </StaggerItem>

          {/* Accordion List */}
          <div className="flex flex-col">
            {socialServicesData.map((service, index) => (
              <StaggerItem key={service.title}>
                <article
                  tabIndex={0}
                  className="group border-b border-white/20 py-5 min-[390px]:py-6 sm:py-8 first:border-t flex cursor-pointer focus:outline-none transition-colors duration-300"
                >
                  {/* Number */}
                  <div
                    className="w-[50px] min-[390px]:w-[70px] min-[480px]:w-[100px] sm:w-[150px] shrink-0 text-white font-medium text-[14px] sm:text-[32px] leading-[20px] tracking-normal"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start">

                      {/* Title */}
                      <h3
                        className="text-white font-normal text-[20px] sm:text-[36px] leading-[1.2] sm:leading-[40px] tracking-[-0.72px]"
                      >
                        {service.title}
                      </h3>

                      {/* Icon */}
                      <div className="relative w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center ml-2 min-[390px]:ml-4 shrink-0 mt-1">
                        {/* + Icon */}
                        <span className="absolute text-white text-xl sm:text-2xl group-hover:opacity-0 group-focus:opacity-0 transition-opacity duration-300">
                          +
                        </span>
                        {/* Orange X */}
                        <div className="absolute w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#ff5500] flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300">
                          <span className="text-black text-base sm:text-lg font-medium leading-none pb-[2px]">×</span>
                        </div>
                      </div>
                    </div>

                    {/* Description & What's included animation (Grid trick) */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                      <div className="overflow-hidden">
                        <p
                          className="text-white/90 mt-3 sm:mt-4 max-w-[650px] opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 delay-75 font-normal text-[14px] min-[360px]:text-[15px] sm:text-[18px] leading-[1.5] sm:leading-[26px] tracking-normal"
                        >
                          {service.description}
                        </p>
                        {service.whatsIncluded && service.whatsIncluded.length > 0 && (
                          <div className="mt-4 sm:mt-5 pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 delay-100">
                            <p className="font-[var(--font-inter)] text-[12px] sm:text-[13px] font-bold uppercase tracking-[1.5px] text-[#ff5500] mb-2.5">
                              What's included:
                            </p>
                            <ul className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-x-6 gap-y-1.5 text-[13px] sm:text-[15px] font-light text-white/80">
                              {service.whatsIncluded.map((item, i) => (
                                <li key={i} className="flex items-center gap-2">
                                  <span className="text-[#ff5500]">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </div>
        </div>
      </Stagger>
    </section>
  );
}

function RelatedProjects() {
  return (
    <section className="bg-[#080808] px-4 min-[375px]:px-6 py-[40px] sm:py-[56px] text-white">
      <Stagger staggerDelay={0.15}>
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
                                      see how we build
                                      <br />
                                      {" "}
                                      <span className="font-[var(--font-cormorant)] text-[1.12em] sm:text-[72px] font-normal timesFontFamily italic leading-[1.1] sm:leading-none">
                                        brands
                                      </span>
                                    </h2>
                                                </StaggerItem>
                                    
                      <StaggerItem>
                                    <p className="mt-[14px] max-w-[600px] sm:mt-[18px] font-[var(--font-inter)] text-[14px] sm:text-[18px] leading-[1.5] text-white/90 sm:text-white">
                                      Explore how we've helped brands grow their audience, strengthen their online presence and build engaged communities through organic social media.
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
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
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
                    <p className="mt-[12px] sm:mt-[14px] max-w-[460px] font-[var(--font-inter)] text-[13px] sm:text-[18px] leading-[1.6] sm:leading-[28px] text-white/90 sm:text-white">
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
            <StaggerItem className="sm:hidden">
              <Link
                href="/projects"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 px-5 py-3 font-[var(--font-inter)] text-[12px] text-white/85 transition-colors hover:border-white/60 hover:text-white"
              >
                View all projects
                <span aria-hidden="true">→</span>
              </Link>
            </StaggerItem>
          </div>
        </div>
      </Stagger>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-black px-4 min-[375px]:px-5 min-[480px]:px-6 sm:px-6 pt-[60px] min-[390px]:pt-[80px] sm:pt-[100px] text-white pb-[100px] sm:pb-20">
      <Stagger staggerDelay={0.15}>
        <div className="mx-auto max-w-[1150px] text-center">
          <StaggerItem>
            <p className="font-[var(--font-be-vietnam)] text-[10px] font-medium uppercase tracking-[4px] text-[#ff5500]">
              LET&apos;S SCALE
            </p>
          </StaggerItem>
          <StaggerItem>
            <h2 className="mt-6 min-[390px]:mt-8 sm:mt-10 font-[var(--font-be-vietnam)] text-[32px]  sm:text-[55px] font-medium leading-[1.08] tracking-[-1.5px]">
              build a brand
              <br />
              {" "}
              <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] font-extralight timesFontFamily italic text-[#ff5500]">
                people remember
              </span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                className="inline-flex h-[42px] min-w-[190px] items-center justify-center rounded-full bg-[#ff5500] px-8 font-[var(--font-be-vietnam)] text-[12px] font-bold uppercase text-white transition hover:bg-[#ff6b1f]"
                href="/contact"
              >
                Book a Consultation
              </Link>
            </div>
          </StaggerItem>
        </div>
      </Stagger>
    </section>
  );
}

export default function SocialMediaManagementPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <Header />
      <Hero />
      <Metrics />
      <PlatformsWeWorkWith />
      <Brands />
      <WhyEmailFails
        hideBadge={false}
        tagline="THE OPPORTUNITY"
        heading={
          <h2 className="mx-auto max-w-[900px] text-center font-[var(--font-inter)] text-[32px] font-medium leading-[1] tracking-[-1.5px] sm:text-[56px]">
            why your{" "}
            <span
              className="font-normal italic text-[42px] sm:text-[72px]"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              social strategy
            </span>{" "}
            <br />
            isn&apos;t working
          </h2>
        }
        centerLogo="/assets/organic__icon.png"
      logoClassName="w-[80px] lg:w-[125px]"
        subheading="Many brands are active on social media, but without a clear strategy, consistent content and a defined brand identity"
        leftTitle="Most Brands"
        rightTitle="The USS Difference"
        leftPoints={[
          {
            number: "01",
            title: "Posting Without A Strategy",
            description: "Content is published without a clear direction or long term purpose",
          },
          {
            number: "02",
            title: "Inconsistent Brand Identity",
            description: "Different styles and messages create an inconsistent brand experience",
          },
          {
            number: "03",
            title: "Content That Doesn't Engage",
            description: "Posts focus on selling instead of providing value to the audience",
          },
          {
            number: "04",
            title: "Chasing Every Trend",
            description: "Content follows trends rather than building a recognisable brand.",
          },
        ]}
        rightPoints={[
          {
            number: "01",
            title: "Strategy Before Content",
            description: "Every post is planned around your business goals and audience",
          },
          {
            number: "02",
            title: "Consistent Brand Identity",
            description: "Unified messaging and creative across every platform",
          },
          {
            number: "03",
            title: "Content With Purpose",
            description: "Content designed to educate, entertain and build trust",
          },
          {
            number: "04",
            title: "Defined Content Pillars",
            description: "A structured content framework that keeps your brand consistent.",
          },
        ]}
      />
      <div className="mt-[-30px] sm:mt-[-150px]">
        <EmailMarketingQuote first={"your social media is your"} second={"digital window"} third={"shop front"} />
      </div>
      <OurOrganicSocialMediaApproach />
      <SocialMediaRevenueMethod />
      <SocialServices />
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
