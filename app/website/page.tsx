import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Numbers as NumbersSection } from "../components/Numbers";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";
import { ConsultationForm } from "../components/ConsultationForm";
import { Brands } from "../components/Brands";
import { GoodCompanyMap } from "../components/GoodCompanyMap";

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
    <section className="bg-[#080808] px-6 pb-[54px] pt-[60px] text-white  lg:pb-[70px] lg:pt-[68px]">
      <div className="mx-auto grid max-w-[1150px] gap-10 lg:grid-cols-[minmax(0,560px)_500px] lg:items-center lg:justify-between">
        <div>
          <h1 className="max-w-[560px] font-[var(--font-be-vietnam)] text-[39px] font-medium leading-[1.02] tracking-[-1.45px] sm:text-[48px]">
            your website, is
            <br />
            your{" "}
            <span className="font-[var(--font-cormorant)] text-[1.12em] font-extralight timesFontFamily italic">
              best sales tool
            </span>
          </h1>
          <p className="mt-[27px] max-w-[530px] font-[var(--font-inter)] text-[12.5px] leading-[1.72] text-white/92 sm:text-[16px]">
            We design and develop custom-coded websites that combine
strong design with performance, turning visitors into customers. 
A pretty website is great, but isn't conversion better?
          </p>
          <Link
            className="mt-[21px] inline-flex h-[33px] min-w-[170px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[11px] font-bold text-white transition hover:bg-[#ff6b1f]"
            href="/contact"
          >
            Book a Call
          </Link>
        </div>

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
    <section className="bg-[#080808] px-6 py-[80px] text-white ">
      <div className="mx-auto max-w-[1150px] text-center">
        <p className="font-[var(--font-be-vietnam)] text-[9px] font-medium uppercase tracking-[3px] text-[#ff5500]">
          Get Started
        </p>
        <h2 className="mt-[16px] font-[var(--font-be-vietnam)] text-[31px] font-medium leading-[1.08] tracking-[-1.2px] sm:text-[45px]">
          turn your website into
          <br />
          a{" "}
          <span className="font-[var(--font-cormorant)] text-[1.1em] font-extralight timesFontFamily italic text-[#ff5500]">
            growth asset
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

export default function WebsitePage() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <Header />
      <Hero />
      <ShowcaseIntro />
      <PerformSection />
      <NumbersWebsite />
      <ServicesSection />
      <PortfolioSection />
      {/* <Brands /> */}
      <TrustedBrands />
      <Testimonials />
      <Team />
      <GoodCompanyMap />
      <FinalCta />
      <Footer />
    </main>
  );
}
