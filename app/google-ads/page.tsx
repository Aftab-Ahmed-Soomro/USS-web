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

const inputClass =
  "mt-[6px] h-[29px] w-full rounded-[5px] border border-black/15 bg-white px-[9px] font-[var(--font-inter)] text-[9px] text-black outline-none placeholder:text-black/35 focus:border-[#ff5500]";

const failPoints = [
  "Bidding without strategy",
  "Poor keyword targeting",
  "Weak landing pages",
  "No conversion tracking",
  "Scaling too early",
];

const relatedProjects = [
  {
    name: "Cinnamood",
    year: "2024",
    copy: "Launching a German bakery franchise into the UAE market.",
    image: "/assets/projectsPagePics/cinamood.jpg",
    tags: ["Web design & development", "Branding", "F&B"],
  },
  {
    name: "Yula Lounge",
    year: "2024",
    copy: "Transforming Yalseh into Yula – a modern Dubai beach club.",
    image: "/assets/yula2.jpg",
    tags: ["Web design & development", "Hospitality"],
  },
];

const stats = [
  { value: "43.8M+", label: "Search Impressions" },
  { value: "6.2M+", label: "High-Intent Clicks" },
  { value: "287K+", label: "Qualified Leads" },
  { value: "4.3x", label: "Average ROAS" },
];

const services = [
  {
    title: "Search Ads",
    copy: "Reach customers actively searching for your products or services.",
  },
  {
    title: "Performance Max",
    copy: "Advertise across Google's network from one campaign.",
  },
  {
    title: "YouTube Ads",
    copy: "Engage your audience with targeted video campaigns.",
  },
  {
    title: "Display Ads",
    copy: "Increase brand awareness and reconnect with previous visitors.",
  },
];

const systemItems = [
  {
    title: "Intent Based Targeting",
    copy: "We target people actively searching for what you offer.",
  },
  {
    title: "Tracking and Reporting",
    copy: "Every lead and conversion is tracked to measure what's working.",
  },
  {
    title: "Conversion Focused Campaigns",
    copy: "Campaigns are built to generate enquiries and sales, not just clicks.",
  },
  {
    title: "Ongoing Optimisation",
    copy: "We test, refine, and improve campaigns based on real performance.",
  },
];

const projects = [
  {
    name: "Cinnamood",
    year: "2024",
    copy: "Launching a German bakery franchise into the UAE market.",
    image: "/assets/company/cinamood-card.jpg",
    tags: ["Web design & development", "Branding", "F&B"],
  },
  {
    name: "Yula Lounge",
    year: "2024",
    copy: "Transforming Yalseh into Yula – a modern Dubai beach club.",
    image: "/assets/company/yula-card.jpg",
    tags: ["Web design & development", "Hospitality"],
  },
];

const workWays = [
  {
    title: "Discovery & Research",
    copy: "We learn about your business, competitors and the customers you're trying to reach.",
  },
  {
    title: "Campaign Build",
    copy: "We create KPI forecast and structure campaigns, keywords and audience.",
  },
  {
    title: "Launch & Optimisation",
    copy: "Campaigns go live while we monitor performance and make ongoing improvements.",
  },
  {
    title: "Reporting & Growth",
    copy: "Clear reporting, regular optimisation and continuous improvements based on results.",
  },
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#ff5500] px-6 pb-[58px] pt-[56px] text-white sm:pb-[72px] sm:pt-[78px]">
      
      <div className="mx-auto grid max-w-[1150px] gap-10 lg:grid-cols-[minmax(0,660px)_430px] lg:items-center lg:justify-between">
        <div>
          <p className="font-[var(--font-be-vietnam)] text-[10px] font-normal sm:text-[14px] uppercase tracking-[0.5px] text-white">
            Google Ads
          </p>
          <h1 className="mt-[24px] max-w-[700px] font-[var(--font-be-vietnam)] text-[38px] font-bold lowercase leading-[100%] tracking-[1px] sm:text-[60px] text-white">
            capture high
            <br />
            quality leads
            <br />
            with{" "}
            <span className="font-[var(--font-cormorant)] text-[1.12em] sm:text-[72px] lowercase font-bold timesFontFamily italic text-white tracking-[-2.8px]">
              google ads
            </span>
          </h1>
          <p className="mt-[40px] max-w-[490px] font-[var(--font-inter)] text-[14px] leading-[32px] text-white/90 sm:text-[18px]">
            Turn searches into sales with Google Ads, built to generate qualified leads, not just clicks, by putting your business in front of customers actively searching for your products or services.
          </p>
          <Link
            className="mt-[36px] inline-flex h-[38px] min-w-[178px] items-center justify-center rounded-full bg-white px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-black transition uppercase hover:bg-[#ff6b1f]"
            href="/contact"
          >
            Book a Consultation
          </Link>
        </div>

        <LightConsultationForm />
      </div>
    </section>
  );
}

// function Hero() {
//   return (
//     <section className="bg-[#ff5500] px-6 pb-[57px] pt-[45px] text-white sm:pb-[68px] sm:pt-[56px] lg:pb-[75px] lg:pt-[70px]">
//       <div className="mx-auto grid max-w-[1150px] gap-9 lg:grid-cols-[minmax(0,560px)_377px] lg:items-center lg:justify-between">
//         <div>
//           <p className="font-[var(--font-be-vietnam)] text-[10px] font-bold uppercase tracking-[3.2px] text-white">
//             Google Ads
//           </p>
//           <h1 className="mt-[34px] max-w-[545px] font-[var(--font-be-vietnam)] text-[37px] font-medium lowercase leading-[0.98] tracking-[-1.6px] sm:text-[50px] md:text-[58px] lg:text-[62px]">
//             capture high
//             <br />
//             quality leads
//             <br />
//             with{" "}
//             <span className="font-[var(--font-cormorant)] text-[1.13em] font-extralight timesFontFamily italic tracking-[-0.04em]">
//               google ads
//             </span>
//           </h1>
//           <p className="mt-[21px] max-w-[485px] font-[var(--font-inter)] text-[13px] leading-[1.75] text-white/80 sm:text-[15px]">
//             Turn searches into sales with Google Ads, built to generate qualified leads, not just clicks, by putting your business in front of customers actively searching for your products or services.
//           </p>
//           <Link
//             className="mt-[24px] inline-flex h-[34px] min-w-[145px] items-center justify-center rounded-full bg-white px-6 font-[var(--font-be-vietnam)] text-[10.5px] font-bold uppercase text-black transition hover:bg-white/90"
//             href="/contact"
//           >
//             Book a Consultation
//           </Link>
//         </div>
//         <LightConsultationForm />
//       </div>
//     </section>
//   );
// }

function GoogleAdsVisual() {
  return (
    <div className="relative aspect-[393/267] w-full max-w-[508px] overflow-hidden rounded-[6px] bg-[#f1f1ef]">
      <Image
        src="/assets/google_ads.jpg"
        alt="Google Ads logo on a phone beside a keyboard"
        fill
        sizes="(min-width: 1024px) 393px, calc(100vw - 48px)"
        className="object-cover"
      />
    </div>
  );
}

function WhyAdsFail() {
  return (
    <section className="border-t border-[#ff5500] bg-white px-6 py-[67px] text-black lg:pb-[88px]">
      <div className="mx-auto max-w-[1150px]">
        <p className="font-[var(--font-be-vietnam)] text-[10px] font-extrabold sm:text-[14px] uppercase text-[#ff5500]">
          Problem
        </p>

        <div className="mt-[28px] grid gap-9 lg:grid-cols-[493px_minmax(0,509px)] lg:items-start lg:justify-between">
          <div>
            <h2 className="font-[var(--font-be-vietnam)] text-[40px] font-medium lowercase leading-[1] tracking-[-3%] sm:text-[56px]">
              why most google
              <br />
              ads{" "}
              <span className="font-[var(--font-cormorant)] text-[1.14em] sm:text-[72px] font-normal timesFontFamily italic">
                campaigns fail
              </span>
            </h2>
            <div className="mt-[30px]">
              <GoogleAdsVisual />
            </div>
          </div>

          <div className="pt-[106px]">
            <p className="max-w-[480px] font-[var(--font-be-vietnam)] text-[16px] sm:text-[20px] font-semibold leading-[1.95] text-black">
              Most campaigns don&rsquo;t fail because of budget,
              <br />
              they fail because of strategy, structure, and tracking
            </p>
            <div className="mt-[29px] grid gap-x-[17px] sm:grid-cols-2">
              {failPoints.map((point) => (
                <div
                  className="flex min-h-[55px] items-center gap-[13px] border-t border-[#d9d9d9] font-[var(--font-be-vietnam)] text-[12px] sm:text-[16px] font-semibold leading-[1.35] text-black last:border-b sm:[&:nth-last-child(2)]:border-b"
                  key={point}
                >
                  <span className="grid size-[21px] shrink-0 place-items-center rounded-full bg-[#ff5500] text-white">
                    <svg
                      aria-hidden="true"
                      className="size-[10px]"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      viewBox="0 0 16 16"
                    >
                      <path d="m3.5 8.2 2.7 2.7 6.3-6.8" />
                    </svg>
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <p className="mt-[28px] border-l-[4px] border-[#ff5500] pl-[7px] font-[var(--font-be-vietnam)] text-[15px] sm:text-[20px] font-semibold leading-[36px] text-black max-w-[430px]">
              Google Ads isn't about getting more clicks. It's about attracting the right customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Numbers() {
  return <NumbersSection eyebrow="RESULTS" stats={stats} />;
}

function GoogleServices() {
  return (
    <section className="overflow-hidden bg-[#050505] px-6 pt-[39px] text-white">
      <div className="mx-auto grid max-w-[1150px] gap-10 lg:grid-cols-[450px_minmax(0,632px)] lg:items-start lg:justify-between">
        <div className="relative min-h-[650px]">
          
          <h2 className="mt-[35px] font-[var(--font-be-vietnam)] text-[40px] font-medium lowercase leading-[1.05] tracking-[-3%] sm:text-[56px]">
            our{" "}
            <span className="font-[var(--font-cormorant)] text-[1.23em] sm:text-[72px] tracking-[-3%] font-normal timesFontFamily italic">
              google ads
            </span>
            <br />
            services
          </h2>
          <p className="mt-[35px] max-w-[400px] font-[var(--font-be-vietnam)] text-[12px] sm:text-[14px] font-normal leading-[1.50] text-white">
            Every business has different goals. We build Google
Ads campaigns around what matters most to yours.
          </p>
          <div className="absolute -bottom-20  left-[-4px] hidden aspect-[366/398] w-[460px] lg:block">
            <Image
              src="/assets/meeral2.png"
              alt="Google Ads strategist"
              fill
              sizes="366px"
              className="object-contain object-bottom"
            />
          </div>
        </div>

        <div className="grid border-white/20 lg:mt-[110px] sm:grid-cols-2 sm:[&>article:nth-child(2n)]:border-l sm:[&>article:nth-child(n+3)]:border-t">
          {services.map((service, index) => (
            <article
              className={`min-h-[163px] border-white/20 px-[26px] py-[30px] ${
                index % 2 === 0 ? "sm:pl-[25px] sm:pr-[28px]" : "sm:pl-[25px] sm:pr-0"
              }`}
              key={service.title}
            >
              <h3 className="font-[var(--font-be-vietnam)] text-[24px] sm:text-[30px] font-bold leading-tight">
                {service.title}
              </h3>
              <p className="mt-[24px] max-w-[220px] font-[var(--font-inter)] text-[12px] sm:text-[14px] leading-[1.85] text-white/90">
                {service.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GrowthIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-[24px] text-[#ff5500]"
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M3 15 9 9l4 4 7-7" />
      <path d="M15 6h5v5" />
    </svg>
  );
}

function GrowthSystem() {
  return (
    <section className="bg-[#f4f4f4] px-6 py-[62px] text-black lg:pb-[55px]">
      <div className="mx-auto max-w-[1150px]">
        <p className="font-[var(--font-be-vietnam)] text-[10px] font-extrabold sm:text-[14px] uppercase text-[#ff5500]">
          System
        </p>
        <h2 className="mt-[30px] max-w-[660px] font-[var(--font-be-vietnam)] text-[38px] font-medium lowercase leading-[1] tracking-[-3%] sm:text-[56px]">
          How We Build Better

          <br />
          <span className="font-[var(--font-cormorant)] text-[1.15em] font-normal sm:text-[72px] text-[#FF5500] timesFontFamily italic">
            Google Ads Campaigns
          </span>
        </h2>
        <div className="mt-[45px] grid border-y border-[#dadada] sm:grid-cols-2 lg:grid-cols-4">
          {systemItems.map((item) => (
            <article
              className="min-h-[244px] border-[#dadada] px-[25px] py-[37px] sm:[&:nth-child(even)]:border-l lg:border-l lg:first:border-l-0"
              key={item.title}
            >
              <GrowthIcon />
              <h3 className="mt-[31px] max-w-[180px] font-[var(--font-be-vietnam)] text-[19px] sm:text-[text-[19px]] font-bold leading-[1.28] tracking-[-0.45px]">
                {item.title}
              </h3>
              <p className="mt-[19px] max-w-[210px] font-[var(--font-inter)] text-[12px] sm:text-[16px] leading-[1.65] text-[#505050]">
                {item.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section className="bg-black px-6 py-[78px] text-white  lg:py-[86px]">
      <div className="mx-auto max-w-[1150px]">
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-[var(--font-be-vietnam)] text-[9px] sm:text-[12px] font-normal uppercase tracking-[4.8px] text-[#ff5500]">
              PROJECTS
            </p>
            <h2 className="mt-[24px] max-w-[510px] font-[var(--font-be-vietnam)] text-[38px] font-medium lowercase leading-[1.08] tracking-[-1.4px] sm:text-[56px]">
              see how we turn
              <br />
              search {" "}
              <span className="font-[var(--font-cormorant)] text-[1.12em] sm:text-[72px] font-normal timesFontFamily italic">
                into revenue
              </span>
            </h2>
            <p className="mt-[20px] font-[var(--font-inter)] text-[14px] sm:text-[18px] leading-[1.7] text-white">
              Explore how we’ve helped brands generate high-quality leads and scale through Google Ads.
            </p>
          </div>
          <Link
            className="inline-flex h-[42px] w-[158px] items-center justify-center rounded-full border border-white/80 font-[var(--font-be-vietnam)] text-[12px] font-normal text-white transition hover:border-white hover:bg-white hover:text-black"
            href="/projects"
          >
            View all projects <span className="ml-[4px]">-&gt;</span>
          </Link>
        </div>

        {/* Cards */}
                <div className="mt-[40px] grid gap-[24px] md:grid-cols-2">
                  {relatedProjects.map((project) => (
                    <article
                      key={project.name}
                      className="rounded-[20px] border border-white p-[14px]"
                    >
                      <div className="relative aspect-[420/260] w-full overflow-hidden max-w-[534px] rounded-[12px] bg-[#111]">
                        <Image
                          src={project.image}
                          alt={`${project.name} marketing strategy project`}
                          fill
                          sizes="(min-width: 768px) 45vw, calc(100vw - 48px)"
                          className="object-cover"
                        />
                      </div>
        
                      <div className="px-[10px] pt-[24px] pb-[6px]">
                        {/* Title + year */}
                        <div className="flex items-baseline justify-between gap-3">
                          <h3 className="font-[var(--font-be-vietnam)] text-[22px] sm:text-[36px] font-normal leading-none tracking-[-0.72px]">
                            {project.name}
                          </h3>
                          <span className="shrink-0 font-[var(--font-inter)] text-[14px] text-white">
                            {project.year}
                          </span>
                        </div>
        
                        {/* Copy */}
                        <p className="mt-[14px] max-w-[420px] font-[var(--font-inter)] text-[14px] sm:text-[18px] leading-[28px] text-white">
                          {project.copy}
                        </p>
        
                        {/* Tags */}
                        <div className="mt-[20px] flex flex-wrap gap-[10px]">
                          {(project.tags ?? []).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white px-[14px] py-[7px] font-[var(--font-inter)] text-[12px] text-white/90"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
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


function WorkTogether() {
  return (
    <section className="border-t border-black bg-white px-6 py-[66px] text-black lg:pb-[62px]">
      <div className="mx-auto max-w-[1150px]">
        <p className="font-[var(--font-be-vietnam)] text-[9px] font-normal sm:text-[12px] uppercase tracking-[4.8px] text-[#ff5500]">
          Ways To Work With Us
        </p>
        <h2 className="mt-[21px] font-[var(--font-be-vietnam)] text-[39px] font-medium lowercase leading-none tracking-[-3.5px] sm:text-[56px]">
          Our Google{" "}
          <span className="font-[var(--font-cormorant)] text-[1.16em] sm:text-[72px] tracking-[-3.5px] font-extralight timesFontFamily text-[#FF5500] italic">
            Ads Process
          </span>
        </h2>
        <p className="mt-[24px] max-w-[780px] font-[var(--font-inter)] text-[14px] sm:text-[18px] leading-[1.55] text-[#404040]">
          Whether you&rsquo;re just getting started or ready to scale, we have a way to work together.
        </p>
        <div className="mt-[49px] grid border border-[#d8d8d8] sm:grid-cols-2">
          {workWays.map((way, index) => (
            <article
              className={`min-h-[188px] px-[38px] py-[40px] ${
                index % 2 ? "sm:border-l sm:border-[#d8d8d8]" : ""
              } ${index > 1 ? "border-t border-[#d8d8d8]" : ""}`}
              key={way.title}
            >
              <div className="flex items-center gap-[10px] font-[var(--font-inter)] text-[9px] leading-none text-black/45">
                <span className="size-[8px] rounded-full bg-[#ff5500]" />
                <span>{index + 1}</span>
              </div>
              <h3 className="mt-[22px] font-[var(--font-be-vietnam)] text-[24px] sm:text-[30px] font-semibold leading-tight">
                {way.title}
              </h3>
              <p className="mt-[12px] max-w-[400px] font-[var(--font-inter)] text-[15px] sm:text-[18px] leading-[1.55] text-[#404040]">
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
    <section className="bg-black px-6 pt-[70px] text-white pb-30">
      <div className="mx-auto max-w-[1150px] text-center">
        <p className="font-[var(--font-be-vietnam)] text-[10px] font-medium uppercase tracking-[4px] text-[#ff5500]">
           LET&apos;S SCALE
        </p>
        <h2 className="mt-8 font-[var(--font-be-vietnam)] text-[36px] font-medium leading-[1.08] tracking-[-1.5px] sm:text-[55px]">
          ready to scale
          <br />
          with{" "}
          <span className="font-[var(--font-cormorant)] text-[1.12em] font-extralight timesFontFamily italic text-[#ff5500]">
            meta ads?
          </span>
        </h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            className="inline-flex h-[42px] min-w-[190px] items-center justify-center rounded-full bg-[#ff5500] px-8 font-[var(--font-be-vietnam)] text-[12px] font-bold uppercase text-white transition hover:bg-[#ff6b1f]"
            href="/contact"
          >
            Book a Consultation
          </Link>
          {/* <Link className="font-[var(--font-be-vietnam)] text-[13px] font-medium text-white/80 transition hover:text-white border-white border rounded-full px-6 h-[48px] inline-flex items-center justify-center" href="#services">
            Book a Strategy Call
          </Link> */}
        </div>
      </div>
    </section>
  );
}

export default function GoogleAdsPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <Header />
      <Hero />
      <WhyAdsFail />
      <Numbers />
      <GoogleServices />
      <GrowthSystem />
      <Brands />
      <CaseStudies />
      <WorkTogether />
      <Testimonials />
      <Team />
      <GoodCompanyMap />
      <FinalCta />
      <Footer />
    </main>
  );
}
