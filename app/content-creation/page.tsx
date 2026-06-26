import Image from "next/image";
import Link from "next/link";
import { Brands } from "../components/Brands";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Numbers as NumbersSection } from "../components/Numbers";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";
import { ConsultationForm, LightConsultationForm } from "../components/ConsultationForm";
import { OnlyBrands } from "../components/OnlyBrands";
import { GoodCompanyMap } from "../components/GoodCompanyMap";

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
    <section className="bg-[#ff5500] px-6 py-[44px] text-white sm:py-[58px] lg:py-[72px]">
      <div className="mx-auto grid max-w-[1150px] gap-10 lg:grid-cols-[minmax(0,520px)_470px] lg:items-center lg:justify-between">
        <div>
          <p className="font-[var(--font-be-vietnam)] text-[10px] font-bold uppercase tracking-[2.8px] text-white/85">
            Content Creation
          </p>
          <h1 className="mt-[28px] max-w-[535px] font-[var(--font-be-vietnam)] text-[35px] font-medium lowercase leading-[1.02] tracking-[-1.5px] sm:text-[50px] lg:text-[54zpx]">
            content that works
            <br />
            not just{" "}
            <span className="font-[var(--font-cormorant)] text-[1.12em] font-extralight timesFontFamily italic tracking-[-0.04em]">
              looks good
            </span>
          </h1>
          <p className="mt-[18px] max-w-[380px] font-[var(--font-inter)] text-[12.5px] leading-[1.65] text-white/88 sm:text-[14px]">
            We create high quality content creation, designed to
stop the scroll, engage your audience and support your
growth across every platform.
          </p>
          <Link
            className="mt-[22px] inline-flex h-[37px] min-w-[164px] items-center justify-center rounded-full bg-white px-7 font-[var(--font-be-vietnam)] text-[11px] font-bold text-[#ff5500] transition hover:bg-white/90"
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

function VideoSection() {
  return (
    <section className="bg-[#050505] px-6 pb-[56px] pt-[58px] text-white ">
      <div className="mx-auto max-w-[1150px] text-center">
        <h2 className="font-[var(--font-be-vietnam)] text-[28px] font-medium lowercase leading-tight tracking-[-0.7px] sm:text-[38px]">
          take a look at our{" "}
          <span className="font-[var(--font-cormorant)] text-[1.15em] font-extralight timesFontFamily italic">
            creative world
          </span>
        </h2>
        <p className="mx-auto mt-[9px] max-w-[500px] font-[var(--font-inter)] text-[16px] leading-[1.7] text-white/64 uppercase">
          See how we brought this campaign to life. 
        </p>
        <div className="relative mx-auto mt-[38px] aspect-[1040/515] w-full max-w-[1150px] overflow-hidden rounded-[4px] shadow-[0_0_42px_rgba(255,255,255,0)]">
          <Image
            src="/assets/blurred.png"
            alt="Content creation video preview"
            fill
            sizes="(min-width: 1024px) 1040px, 100vw"
            className="object-cover object-center blur-[17.5px] scale-[1.1]"
          />
          <div className="absolute inset-0 bg-black/14" />
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_92px_58px_rgba(0,0,0,0.92)]" />
          <button
            aria-label="Play creative video"
            className="absolute left-1/2 top-1/2 grid size-[54px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#ff5500] text-white shadow-[0_12px_32px_rgba(0,0,0,0.36)] transition hover:bg-[#ff6b1f] sm:size-[70px]"
          >
            <span className="ml-[4px] h-0 w-0 border-y-[10px] border-l-[15px] border-y-transparent border-l-white sm:border-y-[13px] sm:border-l-[19px]" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return <NumbersSection stats={stats} />;
}

function Problems() {
  return (
    <section className="bg-white px-6 py-[72px] text-black lg:pb-[74px] lg:pt-[78px]">
      <div className="mx-auto grid max-w-[1150px] gap-10 lg:grid-cols-[minmax(0,385px)_minmax(0,448px)] lg:justify-between">
        <div>
          <p className="font-[var(--font-be-vietnam)] text-[9px] font-bold uppercase tracking-[4px] text-[#ff5500]">
            The Problem
          </p>
          <h2 className="mt-[27px] font-[var(--font-be-vietnam)] text-[36px] font-medium lowercase leading-[0.98] tracking-[-2.3px] sm:text-[42px]">
            why most content
            <br />
            <span className="font-[var(--font-cormorant)] text-[1.22em] font-extralight timesFontFamily italic tracking-[-0.04em] text-[#ff5500]">
              doesn&apos;t perform
            </span>
          </h2>
        </div>
        <div>
          <p className="font-[var(--font-inter)] text-[13px] leading-[1.55] text-black/68">
            Most brands are producing content, but not content that works.
          </p>
          <div className="mt-[17px] border-t border-black/8">
            {problems.map((problem, index) => (
              <div className="grid grid-cols-[27px_minmax(0,1fr)] gap-0 border-b border-black/8 py-[16px]" key={problem}>
                <span className="font-[var(--font-inter)] text-[11px] font-bold text-[#ff5500]">
                  0{index + 1}
                </span>
                <p className="font-[var(--font-inter)] text-[13px] leading-[1.45] text-black/72">
                  {problem}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteImage() {
  return (
    <section className="relative min-h-[335px] overflow-hidden bg-black text-white sm:min-h-[430px] lg:min-h-[520px]">
      <Image
        src="/assets/great_content.png"
        alt="Bright lifestyle content setting"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/22" />
      <div className="absolute inset-0 grid place-items-center px-6 text-center">
        <p className="max-w-[650px] font-[var(--font-cormorant)] text-[27px] font-extralight timesFontFamily italic leading-[1.34] tracking-[-0px] sm:text-[42px]">
          &quot;Good content gets attention.
          <br />
          Great content gets results.&quot;
        </p>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section className="bg-white px-6 py-[64px] text-black lg:pb-[52px] lg:pt-[62px]">
      <div className="mx-auto grid max-w-[1150px] gap-10 lg:grid-cols-[402px_minmax(0,455px)] lg:justify-between">
        <div>
          <p className="font-[var(--font-be-vietnam)] text-[9px] font-bold uppercase tracking-[5px] text-[#ff5500]">
            Our System
          </p>
          <h2 className="mt-[35px] max-w-[390px] font-[var(--font-be-vietnam)] text-[38px] font-medium lowercase leading-[1.02] tracking-[-2.4px] sm:text-[42px]">
            our{" "}
            <span className="font-[var(--font-cormorant)] text-[1.2em] font-extralight timesFontFamily italic tracking-[-0.04em]">
              content
            </span>
            <br />
            <span className="font-[var(--font-cormorant)] text-[1.2em] font-extralight timesFontFamily italic tracking-[-0.04em]">
              creation
            </span>{" "}
            approach
          </h2>
          <div className="relative mt-[10px] aspect-[402/433] w-full overflow-hidden">
            <Image
              src="/assets/content_approach.jpg"
              alt="Audience watching content creation session"
              fill
              sizes="(min-width: 1024px) 402px, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
        <div className="grid content-start gap-x-[72px] gap-y-[62px] pt-0 sm:grid-cols-2 lg:pt-[160px]">
          {approach.map((step) => (
            <article key={step.number}>
              <span className="font-[var(--font-inter)] text-[14px] font-bold text-[#ff5500]">
                {step.number}
              </span>
              <h3 className="mt-[46px] font-[var(--font-be-vietnam)] text-[17px] font-semibold leading-[1.2] tracking-[-0.7px]">
                {step.title}
              </h3>
              <p className="mt-[12px] font-[var(--font-inter)] text-[12px] leading-[1.5] text-black/62">
                {step.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="bg-black px-6 py-[72px] text-white  lg:pb-[104px] lg:pt-[97px]">
      <div className="mx-auto grid max-w-[1150px] gap-12 lg:grid-cols-[377px_minmax(0,545px)] lg:items-start lg:justify-between">
        <div>
          <p className="font-[var(--font-be-vietnam)] text-[9px] font-bold uppercase tracking-[5px] text-[#ff5500]">
            Services
          </p>
          <h2 className="mt-[36px] font-[var(--font-be-vietnam)] text-[38px] font-medium lowercase leading-[1.06] tracking-normal sm:text-[40px]">
            our{" "}
            <span className="font-[var(--font-cormorant)] text-[1.18em] font-extralight timesFontFamily italic tracking-normal text-[#ff5500]">
              content
            </span>
            <br />
            <span className="font-[var(--font-cormorant)] text-[1.18em] font-extralight timesFontFamily italic tracking-normal text-[#ff5500]">
              creation
            </span>{" "}
            services
          </h2>
          <div className="relative mt-[8px] aspect-[377/416] w-full overflow-hidden">
            <Image
              src="/assets/content_service.png"
              alt="Food content creation set"
              fill
              sizes="(min-width: 1024px) 377px, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
        <div className="border-t border-white/12 pt-[92px] lg:mt-0 lg:pt-[136px]">
          {services.map((service, index) => (
            <article className="flex min-h-[74px] items-center justify-between gap-5 border-b border-white/12 py-[18px]" key={service}>
              <div className="flex min-w-0 items-baseline gap-[18px]">
                <span className="translate-y-[1px] font-[var(--font-inter)] text-[12px] font-bold leading-none tracking-normal text-[#ff5500]">
                  /{String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-[var(--font-be-vietnam)] text-[16px] font-medium leading-none tracking-normal text-white sm:text-[18px]">
                  {service}
                </h3>
              </div>
              <span className="shrink-0 font-[var(--font-inter)] text-[20px] leading-none text-white" aria-hidden="true">
                <img className="w-5 h-5" src="/assets/topRight.png" alt="" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-white px-6 py-[62px] text-black lg:pb-[54px] lg:pt-[62px]">
      <div className="mx-auto max-w-[1150px]">
        <p className="font-[var(--font-be-vietnam)] text-[9px] font-bold uppercase tracking-[5px] text-[#ff5500]">
          Process
        </p>
        <h2 className="mt-[33px] max-w-[405px] font-[var(--font-be-vietnam)] text-[36px] font-medium lowercase leading-[1.14] tracking-normal sm:text-[40px]">
          our content
          <br />
          creation{" "}
          <span className="font-[var(--font-cormorant)] text-[1.22em] font-extralight timesFontFamily italic tracking-normal">
            process
          </span>
        </h2>
        <div className="mt-[31px] grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
          {process.map((step, index) => (
            <article
              className={`min-h-[222px] px-[29px] pt-[25px] ${index === 0 ? "sm:pl-[29px] lg:pl-[29px]" : ""} ${index > 0 ? "lg:border-l lg:border-black/10" : ""}`}
              key={step.number}
            >
              <div className="flex items-center gap-[11px]">
                <span className="font-[var(--font-cormorant)] text-[36px] font-light leading-none tracking-normal text-black">
                  {step.number}
                </span>
                <span className="mt-[4px] h-px w-[36px] bg-[#ff5500]" />
              </div>
              <h3 className="mt-[45px] font-[var(--font-be-vietnam)] text-[17px] font-semibold leading-tight tracking-normal">
                {step.title}
              </h3>
              <p className="mt-[29px] max-w-[200px] font-[var(--font-inter)] text-[12px] leading-[1.55] tracking-normal text-black/62">
                {step.copy}
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
    <section className="bg-black px-6 py-[72px] text-white ">
      <div className="mx-auto max-w-[1150px] text-center">
        <p className="font-[var(--font-be-vietnam)] text-[10px] font-medium uppercase tracking-[3px] text-[#ff5500]">
          Let&apos;s Create
        </p>
        <h2 className="mt-[22px] font-[var(--font-be-vietnam)] text-[34px] font-medium lowercase leading-[1.08] tracking-[-1.3px] sm:text-[50px]">
          create content
          <br />
          that actually{" "}
          <span className="font-[var(--font-cormorant)] text-[1.12em] font-extralight timesFontFamily italic tracking-[-0.04em] text-[#ff5500]">
            performs
          </span>
        </h2>
        <div className="mt-[26px] flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            className="inline-flex h-[37px] min-w-[166px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[11px] font-bold text-white transition hover:bg-[#ff6b1f]"
            href="/contact"
          >
            Book a Consultation
          </Link>
          <Link className="font-[var(--font-be-vietnam)] text-[13px] font-medium text-white/80 transition hover:text-white border-white border rounded-full px-5 h-[38px] inline-flex items-center justify-center" href="#services">
            Book a Strategy Call
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
      <Metrics />
      <Problems />
      <QuoteImage />
      <ApproachSection />
      <ServicesSection />
      <ProcessSection />
      <OnlyBrands />
      <Testimonials />
      <Team />
      <GoodCompanyMap />
      <FinalCta />
      <Footer />
    </main>
  );
}
