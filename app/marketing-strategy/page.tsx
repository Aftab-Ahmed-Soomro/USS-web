import Image from "next/image";
import Link from "next/link";
import { Brands } from "../components/Brands";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Numbers } from "../components/Numbers";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";
import { ConsultationForm } from "../components/ConsultationForm";
import { GoodCompanyMap } from "../components/GoodCompanyMap";

type Bullet =
  | string
  | {
    label: string;
    detail: string;
  };

type StrategySection = {
  eyebrow: string;
  title: {
    before?: string;
    italic: string;
    after?: string;
  };
  copy: string;
  bullets: Bullet[];
  image: string;
  imageAlt: string;
  imageSide: "left" | "right";
  theme: "dark" | "light";
};

const strategySections: StrategySection[] = [
  {
    eyebrow: "WHY MOST MARKETING LACKS DIRECTION",
    title: {
      before: "the",
      italic: "problem",
    },
    copy: "Are you are running marketing but without a clear strategy? Without a strategy, marketing becomes a waste of time and budget.",
    bullets: [
      "Channels not aligned",
      "No clear positioning or messaging",
      "Inconsistent execution",
      "Budget spread across the wrong areas",
      "No clear path to scale",
    ],
    image: "/assets/problem1.png",
    imageAlt: "Marketing team discussing strategy in a meeting",
    imageSide: "right",
    theme: "dark",
  },
  {
    eyebrow: "OUR APPROACH TO MARKETING STRATEGY",
    title: {
      before: "our",
      italic: "system",
    },
    copy: "We create structured strategies designed to connect all parts of your marketing.",
    bullets: [
      {
        label: "Market and Audience Understanding",
        detail: "We analyse your audience, competitors and positioning",
      },
      {
        label: "Channel and Funnel Strategy",
        detail: "We define where and how to reach your audience.",
      },
      {
        label: "Messaging and Positioning",
        detail: "Clear, consistent messaging aligned with your brand.",
      },
      {
        label: "Scalable Growth Plan",
        detail: "A roadmap designed for long-term growth.",
      },
    ],
    image: "/assets/problem22.jpg",
    imageAlt: "Creative team reviewing marketing work together",
    imageSide: "left",
    theme: "light",
  },
  {
    eyebrow: "what we deliver",
    title: {
      italic: "services",
    },
    copy: "Every strategy is tailored to your business, but typically includes:",
    bullets: [
      "Marketing Strategy Roadmap",
      "Audience and Competitor Insights",
      "Channel Recommendations",
      "Campaign Direction",
      "Messaging and Positioning",
      "Clear Action Plan",
    ],
    image: "/assets/problem3.jpg",
    imageAlt: "Strategist using a laptop",
    imageSide: "right",
    theme: "dark",
  },
  {
    eyebrow: "OUR STRATEGY FRAMEWORK",
    title: {
      italic: "process",
    },
    copy: "A clear, four-step framework that turns insight into a strategy ready to execute.",
    bullets: [
      "Step 1: Discovery and Analysis",
      "Step 2: Research and Insights",
      "Step 3: Strategy Development",
      "Step 4: Implementation Roadmap",
    ],
    image: "/assets/problem4.jpg",
    imageAlt: "Creative strategist framing an idea with his hands",
    imageSide: "left",
    theme: "light",
  },
  {
    eyebrow: "WAYS TO WORK WITH US",
    title: {
      italic: "engagements",
    },
    copy: "Whether you need clarity or a full growth plan, we have a way to work together.",
    bullets: [
      {
        label: "Initial Consultation",
        detail: "A short call to understand your business and challenges.",
      },
      {
        label: "Strategy Session",
        detail: "A detailed deep dive with a clear, actionable roadmap.",
      },
      {
        label: "Full Strategy Development",
        detail: "End-to-end marketing strategy tailored to your business.",
      },
      {
        label: "Growth Partnership",
        detail: "Ongoing strategy, execution and scaling.",
      },
    ],
    image: "/assets/problem5.jpg",
    imageAlt: "Strategist smiling during a phone call",
    imageSide: "right",
    theme: "dark",
  },
];

const strategyStats = [
  { value: "5x", label: "ROAS Achieved" },
  { value: "55M", label: "AED Generated in Revenue" },
  { value: "500K", label: "Leads Delivered" },
  { value: "100+", label: "Brands Worldwide" },
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
    copy: "Transforming Yalseh into Yula, a modern Dubai beach club.",
    image: "/assets/yula2.jpg",
    tags: ["Web design & development", "Hospitality"],
  },
];

function SectionTitle({ title }: { title: StrategySection["title"] }) {
  return (
    <h2 className="mt-[28px] flex flex-wrap items-baseline gap-x-[10px] font-[var(--font-be-vietnam)] text-[42px] font-medium lowercase leading-[0.92] tracking-[-3.2px] sm:text-[56px]">
      {title.before ? <span>{title.before}</span> : null}
      <span className="font-[var(--font-cormorant)] text-[1.04em] sm:text-[72px] font-normal timesFontFamily italic tracking-[-3.2px]">
        {title.italic}
      </span>
      {title.after ? <span>{title.after}</span> : null}
    </h2>
  );
}

function BulletList({
  bullets,
  isLight,
}: {
  bullets: Bullet[];
  isLight: boolean;
}) {
  return (
    <ul className="mt-[31px] max-w-[520px] space-y-[18px]">
      {bullets.map((bullet) => {
        const key = typeof bullet === "string" ? bullet : bullet.label;

        return (
          <li
            className={`flex items-start gap-[13px] font-[var(--font-inter)] text-[12px] font-bold sm:text-[16px] leading-[1.55] ${isLight ? "text-black/58" : "text-white/90"
              }`}
            key={key}
          >
            <span className="mt-[10px] size-[5px] shrink-0 rounded-full bg-[#ff5500]" />
            <span>
              {typeof bullet === "string" ? (
                <strong className={`${isLight ? "text-[#14110D]" : "text-white"} font-bold`}>{bullet}</strong>
              ) : (
                <>
                  <strong
                    className={` ${isLight ? "text-black" : "text-white"} font-bold`}
                  >
                    {bullet.label}:
                  </strong>{" "}
                  <span
                    className={`tracking-[-0.16px] font-normal text-[14px] ${isLight ? "text-[#58554F]" : "text-white"} font-bold`}
                  > {bullet.detail}</span>
                </>
              )}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function StrategyPanel({ section }: { section: StrategySection }) {
  const isLight = section.theme === "light";
  // For imageSide=="right": text left, image right
  // Text panel inner content aligns to max-w-[1150px] mx-auto via padding-left
  const textPanel = (
    <div
      className={`flex min-h-[440px] flex-col justify-center py-[72px] lg:min-h-[590px] ${
        isLight ? "bg-[#f5f4f1] text-black" : "bg-[#050505] text-white"
      }`}
    >
      {/* Inner wrapper: aligns content to the right edge of the max-w-[1150px] container */}
      <div
        className={`mx-auto w-full max-w-[575px] px-6 ${
          section.imageSide === "right" ? "lg:ml-auto lg:pr-12" : "lg:mr-auto lg:pl-12"
        }`}
      >
        <p
          className={`font-[var(--font-be-vietnam)] text-[8px] sm:text-[11.2px] font-normal uppercase tracking-[2.02px] ${
            isLight ? "text-[#58554F]" : "text-[#FF5500]"
          }`}
        >
          {section.eyebrow}
        </p>
        <SectionTitle title={section.title} />
        <p
          className={`mt-[25px] max-w-[370px] font-[var(--font-inter)] text-[15px] sm:text-[18px] leading-[1.55] ${
            isLight ? "text-black/58" : "text-white"
          }`}
        >
          {section.copy}
        </p>
        <BulletList bullets={section.bullets} isLight={isLight} />
      </div>
    </div>
  );

  const imagePanel = (
    <div className="relative min-h-[440px] overflow-hidden bg-[#111] lg:min-h-[590px]">
      <Image
        src={section.image}
        alt={section.imageAlt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover object-center"
      />
    </div>
  );

  return (
    <section className={`w-full ${isLight ? "bg-[#f5f4f1]" : "bg-[#050505]"}`}>
      {/* Full-width grid — no max-w so image fills edge-to-edge */}
      <div className="grid w-full lg:grid-cols-2">
        {section.imageSide === "left" ? (
          <>{imagePanel}{textPanel}</>
        ) : (
          <>{textPanel}{imagePanel}</>
        )}
      </div>
    </section>
  );
}

function StrategyHero() {
  return (
    <section className="relative overflow-hidden bg-black px-6 pb-[58px] pt-[56px] text-white sm:pb-[72px] sm:pt-[78px]">
      {/* <div className="pointer-events-none absolute left-0 top-0 h-full w-[44%] bg-[radial-gradient(circle_at_20%_20%,rgba(255,85,0,0.42),transparent_45%)]" /> */}
      <div className="mx-auto grid max-w-[1150px] gap-10 lg:grid-cols-[minmax(0,660px)_430px] lg:items-center lg:justify-between">
        <div>
          <h1 className="mt-[24px] max-w-[700px] font-[var(--font-be-vietnam)] text-[38px] font-bold lowercase leading-[50%] tracking-[-3px] sm:text-[60px] text-white">
            strategy that drives
            <br />
            <span className="font-[var(--font-cormorant)] text-[1.12em] sm:text-[72px] lowercase font-normal timesFontFamily italic text-white leading-[103.04px] tracking-[-2.8px]">
              real growth
            </span>
          </h1>
          <p className="mt-[20px] max-w-[450px] font-[var(--font-inter)] text-[14px] leading-[32px] text-white/90 sm:text-[18px]">
            We build clear, data-driven marketing strategies designed to scale your business not just generate leads. Trusted by brands across UAE and globally.
          </p>
          <Link
            className="mt-[36px] inline-flex h-[38px] min-w-[178px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-white transition uppercase hover:bg-[#ff6b1f]"
            href="/contact"
          >
            Book a Consultation
          </Link>
        </div>

        <ConsultationForm />
      </div>
    </section>
  );
}

function RelatedProjects() {
  return (
    <section className="bg-[#080808] px-6 py-[56px] text-white">
      <div className="mx-auto max-w-[1150px]">
        {/* Header */}
        <div className="flex items-center justify-between gap-6">
          <h2 className="font-[var(--font-be-vietnam)] text-[28px] sm:text-[56px] font-medium lowercase leading-none tracking-[-0.96px]">
            related{" "}
            <span className="font-[var(--font-cormorant)] text-[1.18em] sm:text-[72px] font-normal timesFontFamily italic tracking-[-0.96px]">
              projects
            </span>
          </h2>

          <Link
            href="/projects"
            className="hidden sm:inline-flex shrink-0 items-center gap-2 rounded-full border border-white px-5 py-3 font-[var(--font-inter)] text-[12px] text-white sm:text-[15px]"
          >
            View all projects
            <img src="/assets/rightArrowMed.png" className="w-4 h-4" alt="" />
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

function FinalCta() {
  return (
    <section className="bg-[#f5f4f1] px-6 py-[88px] text-center text-black sm:px-10 lg:px-[48px]">
      <h2 className="mx-auto max-w-[800px] font-[var(--font-be-vietnam)] text-[36px] sm:text-[56px] font-medium lowercase leading-[1.08] tracking-[-1.44px]">
        build a strategy that
        <br />
        actually{" "}
        <span className="font-[var(--font-cormorant)] text-[1.16em] sm:text-[72px] font-normal tracking-[-1.44px] timesFontFamily italic">
          works
        </span>
      </h2>
      <p className="mx-auto mt-[15px] max-w-[800px] font-[var(--font-inter)] text-[18px] text-[#58554F] leading-[1.6] text-[-1.44px]">
        If your marketing feels disconnected, it’s time for a clearer approach.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          className="inline-flex h-[42px] min-w-[190px] items-center justify-center rounded-full bg-[#ff5500] px-8 font-[var(--font-be-vietnam)] text-[12px] font-bold uppercase text-white transition hover:bg-[#ff6b1f]"
          href="/contact"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}

export default function MarketingStrategyPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <Header />
      <StrategyHero />
      {strategySections.map((section) => (
        <StrategyPanel key={section.eyebrow} section={section} />
      ))}
      <Numbers stats={strategyStats} />
      <Brands />
      <RelatedProjects />
      <Testimonials />
      <Team />
      <GoodCompanyMap />
      <FinalCta />
      <Footer />
    </main>
  );
}
