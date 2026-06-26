import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import FadeLeft from "../components/FadeLeft";
import FadeDown from "../components/FadeDown";
import FadeUp from "../components/FadeUp";
import FadeRight from "../components/FadeRight";
import type { OutcomeIcon, ProjectDetail, WorkIcon } from "./project-details";

const outcomeIconAssets: Record<OutcomeIcon, string> = {
  megaphone: "/assets/outcome1.png",
  bars: "/assets/outcome2.png",
  shield: "/assets/outcome3.png",
  star: "/assets/outcome4.png",
};

const workIconAssets: Record<WorkIcon, string> = {
  creator: "/assets/content1.png",
  social: "/assets/content2.png",
  email: "/assets/content3.png",
  "360": "/assets/content4.png",
};

function CornerFrame() {
  return (
    <>
      <span className="absolute left-[13px] top-[13px] size-[23px] border-l border-t border-[#ff5500]" />
      <span className="absolute right-[13px] top-[13px] size-[23px] border-r border-t border-[#ff5500]" />
      <span className="absolute bottom-[13px] left-[13px] size-[23px] border-b border-l border-[#ff5500]" />
      <span className="absolute bottom-[13px] right-[13px] size-[23px] border-b border-r border-[#ff5500]" />
    </>
  );
}

function LineIcon({ type }: { type: OutcomeIcon }) {
  return (
    <Image
      src={outcomeIconAssets[type]}
      alt=""
      width={31}
      height={31}
      aria-hidden
      className="size-[31px] object-contain"
    />
  );
}

function WorkIconView({ type }: { type: WorkIcon }) {
  return (
    <Image
      src={workIconAssets[type]}
      alt=""
      width={17}
      height={17}
      aria-hidden
      className="size-[17px] object-contain"
    />
  );
}

export function ProjectDetailPage({ project }: { project: ProjectDetail }) {
  return (
    <main className="min-h-screen bg-white text-black overflow-hidden">
      <Header />

      {/* ── HERO SECTION ── */}
      <section className="bg-[#f7f7f5] px-6 pb-[38px] pt-[42px] sm:pb-[44px] sm:pt-[55px] lg:pt-[64px]">
        <div className="mx-auto grid max-w-[1150px] items-start justify-between gap-10 lg:grid-cols-[470px_428px] lg:gap-[74px]">
          {/* Left — back link, title, description */}
          <div className="lg:pt-[11px]">
            {/* Back link — slides in from left */}
            <FadeLeft delay={0.1}>
              <Link
                href="/projects"
                className="font-[var(--font-inter)] flex items-center gap-2 text-[12px] font-normal leading-none tracking-[-0.05px] text-[#777] transition hover:text-[#ff5500]"
              >
                <span>
                  <img
                    className="w-[14px] h-[14px]"
                    src="/assets/leftArrow.png"
                    alt=""
                  />
                </span>
                Back to Projects
              </Link>
            </FadeLeft>

            {/* Product pill — drops down */}
            <FadeDown delay={0.2}>
              <p className="mt-[59px] inline-flex w-fit max-w-[220px] items-center justify-center rounded-full bg-[#e9e9e7] px-3 py-2 text-center font-[var(--font-inter)] text-[10px] font-medium uppercase leading-none tracking-[0.4px] text-[#242424] lg:mt-[58px]">
                {project.productName}
              </p>
            </FadeDown>

            {/* Page title — slides in from left */}
            <FadeLeft delay={0.3}>
              <h1 className="mt-[28px] max-w-[450px] font-[var(--font-be-vietnam)] text-[32px] font-bold leading-[1.35] tracking-[1.05px] text-[#141414] sm:text-[35px]">
                {project.title}
              </h1>
            </FadeLeft>

            {/* Description — rises up */}
            <FadeUp delay={0.4}>
              <p className="mt-[15px] max-w-[470px] font-[var(--font-inter)] text-[12px] font-normal leading-[1.72] tracking-[-0.18px] text-[#707070] sm:text-[14px]">
                {project.description}
              </p>
            </FadeUp>
          </div>

          {/* Right — hero image — slides in from right */}
          <FadeRight delay={0.25}>
            <div className="relative aspect-[428/377] overflow-hidden rounded-[13px] bg-[#8f512f]">
              <Image
                src={project.heroImage.src}
                alt={project.heroImage.alt}
                fill
                priority
                sizes="(min-width: 1024px) 428px, 92vw"
                className="object-cover"
                style={{
                  objectPosition: project.heroImage.position ?? "center",
                }}
              />
              <CornerFrame />
            </div>
          </FadeRight>
        </div>
      </section>

      {/* ── OVERVIEW SECTION ── */}
      <section className="bg-black px-5 pb-[40px] pt-[68px] text-white sm:px-8 sm:pb-[43px] lg:px-12">
        <div className="mx-auto max-w-[1150px] text-center">
          {/* Heading — drops down */}
          <FadeDown delay={0.1}>
            <h2 className="font-[var(--font-be-vietnam)] text-[30px] font-bold lowercase leading-none tracking-[-1.6px] sm:text-[43px]">
              project{" "}
              <span className="font-[var(--font-cormorant)] text-[1.15em] font-extralight italic timesFontFamily tracking-[-0.04em]">
                overview.
              </span>
            </h2>
          </FadeDown>

          {/* Subtitle — rises up */}
          <FadeUp delay={0.2}>
            <p className="mt-[17px] font-[var(--font-be-vietnam)] text-[13px] font-light uppercase leading-none tracking-[-0.1px] sm:text-[17px]">
              {project.overviewSubtitle}
            </p>
          </FadeUp>

          {/* Gallery grid — each image staggered up */}
          <div className="mt-[15px] grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4 lg:gap-[20px]">
            {project.galleryImages.map((image, idx) => (
              <FadeUp key={image.alt} delay={0.25 + idx * 0.1}>
                <div className="relative h-[310px] overflow-hidden bg-[#171717] sm:h-[390px] lg:h-[510px]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
                    className="object-cover"
                    style={{ objectPosition: image.position ?? "center" }}
                  />
                  {image.overlay ? (
                    <div className="absolute inset-0 -z-0 bg-[#36023d]/45 mix-blend-multiply" />
                  ) : null}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOAL / WORK / OUTCOME SECTION ── */}
      <section className="bg-[#f7f7f5] px-6 pb-[70px] pt-[72px] sm:pb-[82px] sm:pt-[82px]">
        <div className="mx-auto grid max-w-[1150px] gap-14 lg:grid-cols-[840px_226px] lg:gap-[96px]">
          <div>
            {/* The Goal — slides in from left */}
            <FadeLeft delay={0.1}>
              <div>
                <div className="flex items-center gap-[15px]">
                  <span className="grid size-[25px] shrink-0 place-items-center text-[#ff5500]">
                    <img src="/assets/goalIcon.png" alt="" />
                  </span>
                  <h2 className="font-[var(--font-be-vietnam)] text-[18px] font-bold leading-none tracking-[0.85px] text-[#111]">
                    The Goal
                  </h2>
                </div>
                <p className="mt-[20px] max-w-[680px] font-[var(--font-inter)] text-[15px] font-normal leading-[1.58] tracking-[0.28px] text-[#6c6c6c]">
                  {project.goal}
                </p>
              </div>
            </FadeLeft>

            {/* What We Did — rises up */}
            <FadeUp delay={0.2}>
              <div className="mt-[70px]">
                <h3 className="font-[var(--font-be-vietnam)] text-[16px] font-bold leading-none tracking-[0.85px] text-[#111]">
                  What We Did
                </h3>
                <p className="mt-[21px] font-[var(--font-inter)] text-[12px] font-bold leading-none tracking-[0.85px] text-[#777]">
                  {project.workIntro}
                </p>
                <ul className="mt-[13px] flex flex-col gap-[12px]">
                  {project.workItems.map((item) => (
                    <li
                      className="flex items-center gap-[10px] font-[var(--font-inter)] text-[12px] font-normal leading-none tracking-[0.38px] text-[#747474]"
                      key={item.text}
                    >
                      <span className="grid size-[17px] shrink-0 place-items-center text-[#ff5500]">
                        <WorkIconView type={item.icon} />
                      </span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            {/* The Approach — slides in from left */}
            <FadeLeft delay={0.15}>
              <div className="mt-[54px]">
                <h3 className="font-[var(--font-be-vietnam)] text-[16px] font-bold leading-none tracking-[0.85px] text-[#111]">
                  The Approach
                </h3>
                <p className="mt-[21px] max-w-[560px] font-[var(--font-inter)] text-[12px] font-normal leading-[1.48] tracking-[0.38px] text-[#747474]">
                  {project.approach}
                </p>
              </div>
            </FadeLeft>

            {/* The Outcome — rises up, cards staggered */}
            <FadeUp delay={0.1}>
              <div className="mt-[56px]">
                <h3 className="font-[var(--font-be-vietnam)] text-[16px] font-bold leading-none tracking-[0.85px] text-[#111]">
                  The Outcome
                </h3>
                <div className="mt-[17px] max-w-[560px] grid grid-cols-2 gap-[17px] sm:grid-cols-4">
                  {project.outcomes.map((outcome, idx) => (
                    <FadeUp key={outcome.text} delay={0.15 + idx * 0.1}>
                      <div className="flex min-h-[104px] w-full max-w-[130px] flex-col items-center justify-start rounded-[7px] border border-[#dededb] px-[10px] pb-[10px] pt-[12px] text-center text-[#ff5500]">
                        <LineIcon type={outcome.icon} />
                        <p className="mt-[10px] font-[var(--font-inter)] text-[11px] font-normal leading-[1.48] tracking-[0.3px] text-black">
                          {outcome.text}
                        </p>
                      </div>
                    </FadeUp>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Aside — slides in from right */}
          <FadeRight delay={0.2}>
            <aside className="lg:pt-[1px]">
              <h3 className="font-[var(--font-inter)] text-[14px] font-normal leading-none tracking-[0.28px] text-black">
                What We Focused On
              </h3>
              <div className="mt-[18px] flex max-w-[210px] flex-wrap gap-x-[7px] gap-y-[8px]">
                {project.focusAreas.map((area) => (
                  <span
                    className="rounded-full bg-[#e9e9e7] px-[12px] py-[7px] font-[var(--font-inter)] text-[11px] font-normal leading-none tracking-[-0.18px] text-black"
                    key={area}
                  >
                    {area}
                  </span>
                ))}
              </div>
              <Link
                href="/#contact"
                className="mt-[31px] inline-flex h-[35px] w-full max-w-[226px] items-center justify-center rounded-full bg-[#f0522b] px-7 font-[var(--font-be-vietnam)] text-[11px] font-medium leading-none text-white transition hover:bg-[#ff6b1f]"
              >
                Book Your Consultation
              </Link>
            </aside>
          </FadeRight>
        </div>
      </section>

      {/* ── VIDEO SECTION ── */}
      <section className="bg-black px-5 pb-[80px] pt-[80px] text-center text-white sm:px-8 sm:pb-[107px] sm:pt-[83px] lg:px-12">
        <div className="mx-auto max-w-[1180px]">
          {/* Heading — drops down */}
          <FadeDown delay={0.1}>
            <h2 className="font-[var(--font-be-vietnam)] text-[31px] font-bold lowercase leading-none tracking-[-1.5px] sm:text-[43px]">
              {project.videoTitle}
            </h2>
          </FadeDown>

          {/* Subtitle — rises up */}
          <FadeUp delay={0.2}>
            <p className="mt-[20px] font-[var(--font-be-vietnam)] text-[13px] font-light uppercase leading-none tracking-[0] text-white/70 sm:text-[17px]">
              {project.videoSubtitle}
            </p>
          </FadeUp>

          {/* Video player — rises up last */}
          <FadeUp delay={0.3}>
            <div className="relative mx-auto mt-[48px] aspect-[1014/540] max-w-[1014px] overflow-hidden rounded-[10px] bg-[#181818] shadow-[0_0_65px_rgba(255,255,255,0.23)]">
              <Image
                src={project.videoPreview.src}
                alt={project.videoPreview.alt}
                fill
                sizes="(min-width: 1024px) 1014px, 92vw"
                className="scale-[1.03] object-cover blur-[8px]"
                style={{
                  objectPosition: project.videoPreview.position ?? "center",
                }}
              />
              <div className="absolute inset-0 bg-black/12" />
              <button
                aria-label={`Play ${project.productName} campaign video`}
                className="absolute left-1/2 top-1/2 grid size-[82px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#f47700] text-white transition hover:bg-[#ff861b] sm:size-[94px]"
                type="button"
              >
                <span className="ml-[5px] h-0 w-0 border-y-[13px] border-l-[19px] border-y-transparent border-l-white sm:border-y-[15px] sm:border-l-[22px]" />
              </button>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </main>
  );
}
