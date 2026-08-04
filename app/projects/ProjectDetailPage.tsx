import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import FadeLeft from "../components/FadeLeft";
import FadeDown from "../components/FadeDown";
import FadeUp from "../components/FadeUp";
import FadeRight from "../components/FadeRight";
import type { OutcomeIcon, ProjectDetail, WorkIcon } from "./project-details";
import { TripleVideoPlayer } from "./TripleVideoPlayer";
import { DoubleVideoPlayer } from "./DoubleVideoPlayer";
import { SingleVideoPlayer } from "./SingleVideoPlayer";

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
      width={41}
      height={39}
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
  const hasVideo = !!(project.videoSrc || project.videoSrcs);
  const isFlowork = project.slug === "flowork" || project.productName?.toLowerCase() === "flowork";

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Header />

      {/* ── HERO SECTION ── */}
      <section className="bg-[#f7f7f5] px-4 min-[375px]:px-6 pb-[38px] pt-[42px] sm:pb-[44px] sm:pt-[55px] lg:pt-[64px]">
        <div className="mx-auto grid max-w-[1150px] items-start justify-between gap-10 sm:gap-14 lg:grid-cols-[550px_566px] lg:gap-[64px]">
          {/* Left — back link, title, description */}
          <div className="lg:pt-[11px]">
            {/* Back link — slides in from left */}
            <FadeLeft delay={0.1}>
              <Link
                href="/projects"
                className="font-[var(--font-inter)] flex items-center mb-4 gap-2 text-[12px] font-normal leading-none tracking-[-0.05px] text-[#777] transition hover:text-[#ff5500]"
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
              <p className="mt-[15px] sm:mt-[60px] mb-2 inline-flex w-fit max-w-[400px] items-center justify-center rounded-full bg-[#e9e9e7] px-4 py-2 text-center font-[var(--font-inter)] text-[10px] sm:text-[14px] font-normal uppercase leading-none tracking-[0.7px] text-[#242424] lg:mt-[58px]">
                {project.productName}
              </p>
            </FadeDown>

            {/* Page title — slides in from left */}
            <FadeLeft delay={0.3}>
              <h1 className={`mt-[16px] sm:mt-[28px] mb-4 sm:mb-6 max-w-[360px] lowercase mx-auto sm:mx-0 ${isFlowork ? "sm:max-w-[550px]" : "sm:max-w-[500px]"} font-[var(--font-be-vietnam)] text-[28px] min-[375px]:text-[32px] font-bold leading-[1.2] tracking-[-0.9px] text-[#141414] sm:text-[44px] text-center sm:text-start`}>
                {project.title}
              </h1>
            </FadeLeft>

            {/* Description — rises up */}
            <FadeUp delay={0.4}>
              <p className="mt-[10px] sm:mt-[15px] max-w-[490px] font-[var(--font-inter)] text-[12px] font-normal leading-[1.6] sm:leading-[1.72] tracking-[-0.18px] text-[#707070] text-center sm:text-start sm:text-[16px]">
                {project.description}
              </p>
            </FadeUp>
          </div>

          {/* Right — hero image — slides in from right */}
          <FadeRight delay={0.25}>
            <div className="relative overflow-hidden w-full h-[300px] min-[375px]:h-[350px] sm:h-[400px] lg:h-[500px] lg:min-h-[400px] lg:min-w-[566px] rounded-[13px] bg-[#8f512f]">
              <Image
                src={project.heroImage.src}
                alt={project.heroImage.alt}
                fill
                priority
                sizes="(min-width: 1024px) 566px, 92vw"
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

      {/* ── VIDEO SECTION (with-video projects only — appears before main info) ── */}
      {hasVideo && !project.hideVideoSection && (
        <section className="bg-black px-4 min-[375px]:px-5 pb-[50px] pt-[50px] text-center text-white sm:px-8 sm:pb-[107px] sm:pt-[83px] lg:px-12">
          <div className="mx-auto max-w-[1180px]">
            {/* Heading — drops down */}
            <FadeDown delay={0.1}>
              <h2 className="font-[var(--font-be-vietnam)] text-[26px] min-[375px]:text-[31px] font-bold leading-none tracking-[-1.5px] sm:text-[43px]">
                {project.videoTitle}
              </h2>
            </FadeDown>

            {/* Subtitle — rises up */}
            <FadeUp delay={0.2}>
              <p className="mt-[14px] min-[375px]:mt-[20px] font-[var(--font-be-vietnam)] text-[11px] min-[375px]:text-[13px] font-light uppercase leading-none tracking-[0] text-white/70 sm:text-[17px]">
                {project.videoSubtitle}
              </p>
            </FadeUp>

            {/* Video player — rises up last */}
            <FadeUp delay={0.3}>
              {project.videoSrcs && project.videoSrcs.length === 3 ? (
                <TripleVideoPlayer
                  srcs={project.videoSrcs}
                  productName={project.productName}
                />
              ) : project.videoSrcs && project.videoSrcs.length === 2 ? (
                <DoubleVideoPlayer
                  srcs={project.videoSrcs as [string, string]}
                  productName={project.productName}
                />
              ) : (
                <SingleVideoPlayer
                  src={project.videoSrc}
                  previewSrc={project.videoPreview.src}
                  previewAlt={project.videoPreview.alt}
                  previewPosition={project.videoPreview.position}
                  productName={project.productName}
                />
              )}
            </FadeUp>
          </div>
        </section>
      )}

      {/* ── OVERVIEW / PICTURES SECTION (no-video projects: before main info; with-video: after) ── */}
      {!hasVideo && !project.hideSocialGridPreview && (
        <section className="bg-black px-4 min-[375px]:px-5 pb-[40px] pt-[50px] sm:pt-[68px] text-white sm:px-8 sm:pb-[43px] lg:px-12">
          <div className="mx-auto max-w-[1150px] text-center">
            {/* Heading — drops down */}
            <FadeDown delay={0.1}>
              <h2 className="font-[var(--font-be-vietnam)] text-[26px] min-[375px]:text-[30px] font-bold lowercase leading-none tracking-[-1.6px] sm:text-[43px]">
                project{" "}
                <span className="font-[var(--font-cormorant)] text-[1.15em] font-extralight italic timesFontFamily tracking-[-0.04em]">
                  overview.
                </span>
              </h2>
            </FadeDown>

            {/* Subtitle — rises up */}
            <FadeUp delay={0.2}>
              <p className="mt-[14px] sm:mt-[17px] font-[var(--font-be-vietnam)] text-[11px] min-[375px]:text-[13px] font-light uppercase leading-none tracking-[-0.1px] sm:text-[17px]">
                {project.overviewSubtitle}
              </p>
            </FadeUp>

            {/* Gallery grid — each image staggered up */}
            {project.galleryLayout === "centerVideo" ? (
              <div className="mt-[15px] flex flex-col items-center gap-[12px] sm:gap-[18px] sm:flex-row sm:items-stretch sm:justify-center lg:gap-[24px]">
                {project.galleryImages.map((image, idx) => {
                  const isCenter = idx === 1;
                  const isVideo = image.src.toLowerCase().endsWith(".mov") || image.src.toLowerCase().endsWith(".mp4");

                  return (
                    <FadeUp key={image.alt} delay={0.25 + idx * 0.1}>
                      <div
                        className={
                          isCenter
                            ? "relative h-[300px] min-[375px]:h-[340px] w-full max-w-[280px] overflow-hidden bg-[#171717] sm:h-[480px] sm:w-[340px] sm:max-w-none"
                            : "relative h-[260px] min-[375px]:h-[280px] w-full max-w-[240px] overflow-hidden bg-[#171717] sm:h-[360px] sm:w-[280px] lg:h-[480px] lg:w-[330px] sm:max-w-none sm:self-center"
                        }
                      >
                        {isVideo ? (
                          <video
                            src={image.src}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 h-full w-full object-cover"
                            style={{ objectPosition: image.position ?? "center" }}
                          />
                        ) : (
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(min-width: 1024px) 330px, (min-width: 640px) 45vw, 90vw"
                            className="object-cover"
                            style={{ objectPosition: image.position ?? "center" }}
                          />
                        )}
                        {image.overlay ? (
                          <div className="absolute inset-0 -z-0 bg-[#36023d]/45 mix-blend-multiply" />
                        ) : null}
                      </div>
                    </FadeUp>
                  );
                })}
              </div>
            ) : (
              <div className="mt-[15px] grid gap-[12px] min-[375px]:gap-[18px] sm:grid-cols-2 lg:grid-cols-4 lg:gap-[20px]">
                {project.galleryImages.map((image, idx) => (
                  <FadeUp key={image.alt} delay={0.25 + idx * 0.1}>
                    <div className="relative h-[260px] min-[375px]:h-[310px] overflow-hidden bg-[#171717] sm:h-[390px] lg:h-[510px]">
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
            )}
          </div>
        </section>
      )}

      {/* ── GOAL / WORK / OUTCOME SECTION ── */}

      <section className="bg-[#f7f7f5] px-6 pb-[40px] pt-[40px] sm:pb-[82px] sm:pt-[82px]">
        <div className="mx-auto grid max-w-[1150px] gap-12 sm:gap-14 lg:grid-cols-[840px_300px] lg:gap-[30px]">
          <div>
            {/* The Goal — slides in from left */}
            <FadeLeft delay={0.1}>
              <div>
                <div className="flex items-center gap-[15px]">
                  <span className="grid size-[25px] shrink-0 place-items-center text-[#ff5500]">
                    <img src="/assets/goalIcon.png" alt="" />
                  </span>
                  <h2 className="font-[var(--font-be-vietnam)] text-[18px] sm:text-[24px] font-bold leading-none tracking-[3.13%] text-[#141414]">
                    The Goal
                  </h2>
                </div>
                <p className="mt-[14px] sm:mt-[20px] max-w-[780px] font-[var(--font-inter)] text-[12px] sm:text-[16px] font-normal leading-[1.6] sm:leading-[28px] tracking-[0%] text-[#737373]">
                  {project.goal}
                </p>
              </div>
            </FadeLeft>

            {/* What We Did — rises up */}
            <FadeUp delay={0.2}>
              <div className="mt-[40px] sm:mt-[70px]">
                <h3 className="font-[var(--font-be-vietnam)] text-[16px] sm:text-[20px] font-bold leading-none tracking-[2.34%] text-[#141414]">
                  What We Did
                </h3>
                <p className="mt-[16px] sm:mt-[21px] font-[var(--font-inter)] text-[12px] sm:text-[16px] font-bold leading-none tracking-[0%] text-[#737373]">
                  {project.workIntro}
                </p>
                <ul className="mt-[13px] flex flex-col gap-[17px]">
                  {project.workItems.map((item) => (
                    <li
                      className="flex items-center gap-[10px] font-[var(--font-inter)] text-[12px] font-normal leading-none tracking-[0%] sm:text-[16px] text-[#747474]"
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
              <div className="mt-[40px] sm:mt-[54px]">
                <h3 className="font-[var(--font-be-vietnam)] text-[16px] sm:text-[20px] font-bold leading-none tracking-[2.34%] text-[#141414]">
                  The Approach
                </h3>
                <p className="mt-[16px] sm:mt-[21px] max-w-[700px] font-[var(--font-inter)] text-[12px] sm:text-[16px] font-normal leading-[1.6] sm:leading-[1.48] tracking-[0%] text-[#747474]">
                  {project.approach}
                </p>
              </div>
            </FadeLeft>

            {/* The Outcome — rises up, cards staggered */}
            <FadeUp delay={0.1}>
              <div className="mt-[40px] sm:mt-[56px]">
                <h3 className="font-[var(--font-be-vietnam)] text-[16px] font-bold leading-none tracking-[2.34%] text-[#141414] sm:text-[20px]">
                  The Outcome
                </h3>
                <div className="mt-[17px] max-w-[760px] grid grid-cols-2 gap-[12px] min-[375px]:gap-[16px] sm:gap-[25px] sm:grid-cols-4">
                  {project.outcomes.map((outcome, idx) => (
                    <FadeUp key={outcome.text} delay={0.15 + idx * 0.1}>
                      <div className="flex h-[110px] sm:h-[160px] min-h-[104px] w-full max-w-[330px] flex-col items-center justify-start rounded-[7px] border border-[#dededb] px-2 sm:px-[10px] pb-2 sm:pb-[10px] pt-4 sm:pt-[12px] text-center text-[#ff5500]">
                        <div className="scale-75 sm:scale-100">
                          <LineIcon type={outcome.icon} />
                        </div>
                        <p className="mt-[8px] sm:mt-[10px] font-[var(--font-inter)] text-[11px] sm:text-[16px] font-normal leading-[1.3] sm:leading-[1.48] tracking-[0%] text-[#141414]">
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
              <h3 className="font-[var(--font-inter)] text-[14px] sm:text-[18px] font-normal leading-none tracking-[0%] text-[#141414]">
                What We Focused On
              </h3>
              <div className="mt-[18px] flex max-w-[300px] flex-wrap gap-x-[7px] gap-y-[8px]">
                {project.focusAreas.map((area) => (
                  <span
                    className="rounded-full bg-[#e9e9e7] px-[12px] py-[7px] font-[var(--font-inter)] text-[11px] sm:text-[14px] font-normal leading-none tracking-[-0.18px] text-[#141414]"
                    key={area}
                  >
                    {area}
                  </span>
                ))}
              </div>
              <Link
                href="/#contact"
                className="mt-[31px] inline-flex h-[35px] w-full max-w-[250px] items-center justify-center rounded-full bg-[#f0522b] px-7 font-[var(--font-be-vietnam)] text-[11px] sm:text-[16px] font-normal leading-none text-white transition hover:bg-[#ff6b1f]"
              >
                Book Your Consultation
              </Link>
              {project.socialGridImage ? (
                <img
                  src={project.socialGridImage}
                  className="mt-[70px] w-full max-w-[389px] h-[480px] object-contain"
                  alt=""
                />
              ) : null}
            </aside>
          </FadeRight>
        </div>
      </section>

      {/* ── OVERVIEW / PICTURES SECTION (with-video projects only — appears after main info) ── */}
      {hasVideo && !project.hideSocialGridPreview && (
        <section className="bg-black px-5 pb-[4px] pt-[68px] text-white sm:px-8 sm:pb-[43px] lg:px-12">
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

            {/* Mobile Carousel Loop (like Brands.tsx) — prevents images from being cut off */}
            <div className="mt-[20px] mb-[20px] w-full overflow-hidden block sm:hidden">
              <div className="project-overview-track flex items-center gap-x-3 min-[375px]:gap-x-4">
                {[...project.galleryImages, ...project.galleryImages, ...project.galleryImages, ...project.galleryImages].map((image, idx) => (
                  <div
                    key={`${image.alt}-${idx}`}
                    className="relative h-[220px] min-[375px]:h-[260px] w-[140px] shrink-0 overflow-hidden rounded-[14px] bg-[#171717]"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="230px"
                      className="object-cover"
                      style={{ objectPosition: image.position ?? "center" }}
                    />
                    {image.overlay ? (
                      <div className="absolute inset-0 -z-0 bg-[#36023d]/45 mix-blend-multiply" />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Grid — unchanged */}
            <div className="mt-[15px] hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-[18px] lg:gap-[20px]">
              {project.galleryImages.map((image, idx) => (
                <FadeUp key={image.alt} delay={0.25 + idx * 0.1} className="flex-1">
                  <div className="relative w-full overflow-hidden bg-[#171717] sm:h-[390px] lg:h-[510px]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 25vw"
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

            <style>{`
              .project-overview-track {
                width: max-content;
                animation: project-overview-marquee 35s linear infinite;
                will-change: transform;
              }
              @keyframes project-overview-marquee {
                0%   { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              @media (prefers-reduced-motion: reduce) {
                .project-overview-track {
                  animation: none;
                }
              }
            `}</style>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
