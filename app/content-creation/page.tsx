import Image from "next/image";
import Link from "next/link";
import { Brands } from "../components/Brands";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Numbers as NumbersSection } from "../components/Numbers";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";
import { LightConsultationForm } from "../components/ConsultationForm";
import { GoodCompanyMap } from "../components/GoodCompanyMap";
import Stagger from "../components/Stagger";
import StaggerItem from "../components/Staggeritem";
import FadeRight from "../components/FadeRight";
import { WhyEmailFails } from "../components/WhyEmailFails";
import EmailMarketingQuote from "../components/EmailMarketingQuote";
import FadeUp from "../components/FadeUp";
import { RevenueMethod } from "../components/RevenueMethod";
import { ContentCreationGrid } from "../components/ContentCreationGrid";
import { ContentCreationServices } from "../components/ContentCreationServices";

const stats = [
  { value: "18.4K+", label: "Creative Assets Produced" },
  { value: "6.2K+", label: "Videos Delivered" },
  { value: "12.1K+", label: "Design Assets Created" },
  { value: "100+", label: "Brands worldwide" },
];

const problems = [
  "Content created without strategy",
  "Poor quality or inconsistent visuals",
  "No clear message or direction",
  "Not built for platform performance",
  "Content that looks good but doesn’t convert",
];

const approach = [
  {
    number: "01",
    title: "Creative Direction",
    copy: "We define the concept, style and messaging before production.",
  },
  {
    number: "02",
    title: "Platform First Content",
    copy: "Content designed specifically for social and digital platforms.",
  },
  {
    number: "03",
    title: "Production Quality",
    copy: "High quality photo and video that reflects your brand.",
  },
  {
    number: "04",
    title: "Performance-Driven Content",
    copy: "Content built to engage, convert and support campaigns.",
  },
];

const services = [
  "Photo and Video Production",
  "Creative Direction and Concept Development",
  "Social Media Content Creation",
  "Ad Creative Production",
  "Short-Form Video and Reels",
  "Content for Campaigns and Launches",
];

const process = [
  {
    number: "01",
    title: "Concept and Planning",
    copy: "Briefing, research and strategic foundation for the shoot.",
  },
  {
    number: "02",
    title: "Creative Direction",
    copy: "Mood-boards, references, styling and visual concept creation.",
  },
  {
    number: "03",
    title: "Production",
    copy: "On set photography and video capture with our USS team.",
  },
  {
    number: "04",
    title: "Editing",
    copy: "Our creative team edit content post production.",
  },
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#ff5500] px-4 min-[375px]:px-6 pb-[40px] min-[375px]:pb-[58px] pt-[40px] min-[375px]:pt-[56px] text-white sm:pb-[72px] sm:pt-[78px]">
      <div className="mx-auto grid max-w-[1150px] gap-[40px] sm:gap-10 lg:grid-cols-[minmax(0,660px)_430px] lg:items-center lg:justify-between">
        <Stagger staggerDelay={0.12}>
          <StaggerItem>
            <p className="font-[var(--font-be-vietnam)] text-[13px] font-normal sm:text-[14px] uppercase tracking-[0.5px] text-white text-center sm:text-start">
              Content Creation
            </p>
          </StaggerItem>
          <StaggerItem>
            <h1 className="mt-[35px] sm:mt-[24px] max-w-[700px] font-[var(--font-be-vietnam)] text-[32px] font-bold lowercase leading-[0.5] sm:leading-[100%] tracking-[-1px] sm:tracking-[-3px] sm:text-[58px] text-white text-center sm:text-start">
              content that does
              <br className="sm:hidden" /> {/* Adding hidden br if needed? No, I will not add new br */}
              <br />
              more than{" "}
              <span className="font-[var(--font-cormorant)] text-[42px] leading-[0.7] sm:leading-none sm:text-[72px] lowercase font-normal timesFontFamily italic text-white tracking-[-1px] sm:tracking-[-2.8px]">
                looks good
              </span>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-[24px] min-[375px]:mt-[30px] sm:mt-[40px] max-w-[530px] font-[var(--font-inter)] text-[13px] leading-[1.6] sm:leading-[32px] text-white/90 sm:text-[18px] text-center sm:text-start">
              We create high quality photo and video content designed to capture attention, strengthen your brand and support every stage of your marketing.
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="flex justify-center sm:justify-start">
              <Link
                className="mt-[24px] sm:mt-[30px] inline-flex h-[46px] sm:h-[38px] min-w-[178px] items-center justify-center rounded-full bg-white px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-black transition uppercase hover:bg-[#ff6b1f]"
                href="/contact"
              >
                Book a Consultation
              </Link>
            </div>
          </StaggerItem>
        </Stagger>

        <FadeRight delay={0.3}>
          <LightConsultationForm />
        </FadeRight>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="bg-[#050505] px-4 min-[375px]:px-6 pt-[40px] sm:pt-[58px] pb-[40px] sm:pb-[56px] text-white">
      <div className="mx-auto text-center">
        <Stagger staggerDelay={0.12}>
          <StaggerItem>
            <h2 className="font-[var(--font-be-vietnam)] text-[32px] sm:text-[56px] font-medium lowercase leading-[1.1] sm:leading-tight tracking-[-4%] hidden">
              take a look at our{" "}
              <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] font-normal tracking-[-2%] sm:tracking-[-4%] timesFontFamily italic">
                creative world
              </span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="mx-auto mt-[12px] sm:mt-[9px] max-w-[600px] font-[var(--font-inter)] text-[13px] sm:text-[24px] leading-[1.5] sm:leading-[1.7] text-[#FFFFFFB2] uppercase hidden">
              See how we brought this campaign to life.
            </p>
          </StaggerItem>
        </Stagger>
        <FadeUp delay={0.3}>
          <div className="relative mx-auto mt-[24px] sm:mt-[38px] aspect-[16/12] sm:aspect-[1040/515] w-full overflow-hidden rounded-[8px] sm:rounded-[4px] shadow-[0_0_42px_rgba(255,255,255,0)]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover object-center"
              preload="auto"
            >
              <source src="https://unitedstrategicsolutions.com/assets/USS Main Website Showreel.webm" type="video/webm" />
            </video>
            <div className="absolute inset-0 bg-black/14" />
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_20px_10px_rgba(0,0,0,0.92)] min-[480px]:shadow-[inset_0_0_40px_20px_rgba(0,0,0,0.92)] sm:shadow-[inset_0_0_92px_58px_rgba(0,0,0,0.92)]" />
          </div>
        </FadeUp>
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
            LET&apos;S CREATE
          </p>
        </StaggerItem>
        <StaggerItem>
          <h2 className="mt-[24px] sm:mt-8 font-[var(--font-be-vietnam)] text-[32px] font-medium leading-[1.08] tracking-[-1.5px] sm:text-[55px]">
            create content
            <br />
            that actually{" "}
            <span className="font-[var(--font-cormorant)] text-[42px] leading-[1.1] sm:leading-none font-extralight timesFontFamily italic text-[#ff5500]">
              performs
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
    title: "No Clear Content Strategy",
    description:
      "Content is created without a clear purpose or plan.",
  },
  {
    number: "02",
    title: "Generic Content",
    description:
      "Content fails to reflect the brand or audience.",
  },
  {
    number: "03",
    title: "Inconsistent Content",
    description:
      "Irregular posting weakens brand consistency.",
  },
  {
    number: "04",
    title: "No Clear Direction",
    description:
      "Posting becomes reactive instead of planned.",
  },
];

const googleAdsUssPoints = [
  {
    number: "01",
    title: "Strategy Before Creation",
    description:
      "Every piece of content supports your business goals.",
  },
  {
    number: "02",
    title: "Audience Focused Content",
    description:
      "Content created around your audience and brand.",
  },
  {
    number: "03",
    title: "Consistent Content Delivery",
    description:
      "Planned content that keeps your brand visible.",
  },
  {
    number: "04",
    title: "Content That Performs",
    description:
      "Every piece has a clear purpose and objective.",
  },
];

const relatedProjects = [
  {
    slug: "cinamood",
    name: "Cinnamood",
    image: "/assets/projectsPagePics/cinamood.jpg",
    copy: "We supported the launch of Cinnamood in the UAE by creating premium photo and video content that captured the brand experience and generated excitement across social media.",
    tags: ["Content Creation", "Food & Beverage", "Launch Campaign"],
    year: "2024",
    imageClassName: "object-cover object-[50%_55%]",
  },
  {
    slug: "yula-lounge",
    name: "Yula Lounge",
    image: "/assets/yula2.jpg",
    copy: "We created lifestyle photography and video content that showcased Yula's new identity, helping establish a premium social presence following the venue's transformation.",
    tags: ["Content Creation", "Hospitality", "Brand Launch"],
    year: "2024",
    imageClassName: "object-cover object-[50%_65%]",
  },
];

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
                                              see how we bring
                                              <br />
                                              {" "}
                                              <span className="font-[var(--font-cormorant)] text-[1.12em] sm:text-[72px] font-normal timesFontFamily italic leading-[1.1] sm:leading-none">
                                                brands to life
                                              </span>
                                            </h2>
                                                        </StaggerItem>
                                            
                              <StaggerItem>
                                            <p className="mt-[14px] max-w-[600px] sm:mt-[18px] font-[var(--font-inter)] text-[14px] sm:text-[18px] leading-[1.5] text-white/90 sm:text-white">
                                              Explore how we've helped brands tell their story through premium photography, videography and creative content designed to capture attention and strengthen brand identity.
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

export default function ContentCreationPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <Header />
      <Hero />
      <VideoSection />
      <Brands />
      {/* <Metrics /> */}
      <FadeUp delay={0.2}>
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
                content
              </span>{" "}
              isn't working
            </h2>
          }
          subheading="Creating content is easy. Creating content that supports your marketing strategy is where most brands fall short."
          leftTitle="Most Brands"
          rightTitle="The USS Difference"
          leftPoints={googleAdsBrandPoints}
          rightPoints={googleAdsUssPoints}
          centerLogo="/assets/cam23.jpg"
          logoClassName="w-[50px] lg:w-[90px] sm:mr-1"
        />
      </FadeUp>
      <ContentCreationServices />
      <FadeUp delay={0.2}>
        <div className="mt-[-10px] sm:mt-[-80px]">
          <EmailMarketingQuote first={""} second={"65% "} third={"of people are visual learners."} />
        </div>
      </FadeUp>
      <FadeUp delay={0.2}>
        <ContentCreationGrid />
      </FadeUp>
      <RevenueMethod
        heading={<>see how we build{" "}<span className="italic text-[#ff5500] font-normal text-[40px] sm:text-[72px] leading-[1.1] sm:leading-[70px] tracking-[-3%]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>brands</span></>}
        cards={[
          { id: '01', title: 'Discovery & Planning', description: 'Understand your brand, audience, objectives and creative direction before production begins.', bgImage: '/assets/method1.png' },
          { id: '02', title: 'Creative Planning', description: 'Develop concepts, storyboards, shot lists and production schedules ready for filming.', bgImage: '/assets/method2.png' },
          { id: '03', title: 'Production', description: 'Capture high quality photography and videography with professional direction and execution.', bgImage: '/assets/method3.png' },
          { id: '04', title: 'Post-Production', description: 'Edit, refine and optimise every asset for delivery across digital, social and paid media.', bgImage: '/assets/method4.png' },
        ]}
      />
      <RelatedProjects />
      <FadeUp delay={0.2}>
        <Testimonials />
      </FadeUp>
      <FadeUp delay={0.2}>
        <Team />
      </FadeUp>
      <FadeUp delay={0.2}>
        <GoodCompanyMap />
      </FadeUp>
      <FinalCta />
      <div className="mt-[-120px]">

        <Footer />
      </div>
    </main>
  );
}
