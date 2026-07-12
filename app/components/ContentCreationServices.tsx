import React from 'react';
import FadeUp from './FadeUp';

const ICONS = {
  strategy: (
    <img src="/assets/pre1.png" />
  ),
  planning: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="7" height="7"></rect>
      <rect x="14" y="3" width="7" height="7"></rect>
      <rect x="14" y="14" width="7" height="7"></rect>
      <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
  ),
  script: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 7V4h16v3M12 4v16M8 20h8"></path>
    </svg>
  ),
  storyboard: (
    <img src="/assets/pre4.png" />
  ),
  motion: (
    <img src="/assets/post6.png" />
  ),
  editing: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="6" cy="6" r="3"></circle>
      <circle cx="6" cy="18" r="3"></circle>
      <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
      <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
      <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
    </svg>
  ),
  delivery: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="22" y1="2" x2="11" y2="13"></line>
      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
  ),
  color: (
    <img src="/assets/post7.png" />
  ),
};

function ServiceCard({ num, title, heightClass, icon }: any) {
  return (
    <div
      className={`relative w-full ${heightClass} rounded-[24px] border border-white/[0.04] overflow-hidden p-[24px] flex flex-col justify-between group transition-transform duration-500 hover:-translate-y-1`}
      style={{
        background: 'radial-gradient(circle at 30% 30%, rgba(255,85,0,0.18) 0%, rgba(15,8,5,1) 40%, rgba(5,5,5,1) 100%)'
      }}
    >
      {/* Soft overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none" />

      <div className="relative z-10 flex justify-between items-start">
        <span className="font-[var(--font-inter)] text-[10px] text-white/50 tracking-[2px]">
          / {num}
        </span>
        <div className="text-white/70 w-[20px] object-contain h-[20px]">{icon}</div>
      </div>

      <div className="relative z-10">
        <div className="font-[var(--font-be-vietnam)] text-[48px] sm:text-[64px] font-light leading-[1] tracking-[-2px] text-white mb-2">
          {num}
        </div>
        <div className="font-[var(--font-inter)] text-[10px] font-medium tracking-[3px] text-white/60 uppercase">
          {title}
        </div>
      </div>
    </div>
  );
}

export function ContentCreationServices() {
  return (
    <section className="bg-black text-white pb-[60px] sm:pb-[100px] px-4 min-[375px]:px-6 overflow-hidden">
      <div className="max-w-[1150px] mx-auto">
        {/* Header */}
        <div className="mb-[60px] sm:mb-[100px]">
          <FadeUp delay={0.1}>
            <h4 className="font-[var(--font-inter)] text-[#ff5500] font-bold text-[14px] leading-[16px] tracking-[2.64px] uppercase mb-6">
              Services
            </h4>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="font-[var(--font-be-vietnam)] text-white font-medium text-[32px] sm:text-[56px] leading-[1.1] sm:leading-[50.4px] tracking-[-1.2px]">
              our content creation{" "}
              <span className="font-[var(--font-cormorant)] font-normal italic text-[42px] sm:text-[72px] leading-[1.1] sm:leading-[50.4px] tracking-[-1.2px] timesFontFamily">
                services
              </span>
            </h2>
          </FadeUp>
        </div>

        {/* Block 1: Pre Production */}
        <div className="flex flex-col lg:flex-row justify-between gap-[60px] lg:gap-[100px] mb-[120px]">
          {/* Left Text */}
          <div className="lg:w-[45%] flex flex-col">
            <FadeUp delay={0.1}>
              <div className="flex items-center gap-4 mb-[30px] sm:mb-[40px]">
                <span className="font-[var(--font-inter)] text-[#ff5500] font-medium text-[16px] leading-[16.5px] tracking-[4.4px] align-middle">
                  01
                </span>
                <div className="w-[40px] h-[1px] bg-[#ff5500]/50" />
                <span className="font-[var(--font-inter)] text-[#a0a0a0] font-light text-[11px] leading-[16.5px] tracking-[4.4px] uppercase align-middle">
                  CHAPTER ONE
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <h3 className="font-[var(--font-be-vietnam)] font-light text-[48px] sm:text-[80px] leading-[1.1] sm:leading-[80px] tracking-[-2.4px] align-middle mb-[24px] sm:mb-[30px]">
                Pre<br />Production
              </h3>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="font-[var(--font-inter)] font-light text-[16px] sm:text-[18px] leading-[1.6] sm:leading-[29.25px] text-white/90 align-middle mb-[24px] sm:mb-[30px] max-w-[400px]">
                Where the story is imagined. Strategy, structure, and the quiet architecture behind every frame that will one day exist.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p className="font-[var(--font-inter)] font-normal text-[11px] leading-[16.5px] tracking-[1.65px] align-middle text-white/60 uppercase mb-[30px] sm:mb-[40px]">
                From blank page to blueprint.
              </p>
            </FadeUp>

            {/* Pills */}
            <div className="flex flex-wrap gap-[10px]">
              {[
                "Creative Strategy",
                "Content Planning",
                "Script Writing",
                "Storyboarding",
                "Shot Lists",
                "Mood Boards",
                "Location Scouting",
                "Talent Coordination",
              ].map((tag, i) => (
                <FadeUp key={tag} delay={0.4 + i * 0.05}>
                  <div className="flex items-center justify-center gap-2 px-[14px] py-[8px] sm:py-[10px] rounded-full border border-white/10 bg-[#0a0a0a]/50">
                    <div className="w-[4px] h-[4px] rounded-full bg-[#ff5500] shrink-0" />
                    <span className="font-[var(--font-inter)] font-light text-[11px] sm:text-[12px] leading-[1.4] sm:leading-[18px] tracking-[0.3px] text-white/80 align-middle text-center">
                      {tag}
                    </span>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Right Grid */}
          <div className="lg:w-[50%] flex flex-col">
            <FadeUp delay={0.2}>
              <div className="flex justify-between items-center mb-[20px] sm:mb-[30px]">
                <span className="font-[var(--font-inter)] font-light text-[10px] leading-[15px] tracking-[3px] align-middle text-white/60 uppercase">
                  COMPOSITION / 01
                </span>
              </div>
            </FadeUp>

            <div className="flex gap-[12px] sm:gap-[16px]">
              {/* Col 1 */}
              <div className="flex flex-col gap-[12px] sm:gap-[16px] w-1/2">
                <FadeUp delay={0.3}>
                  <ServiceCard num="01" title="STRATEGY" heightClass="h-[200px] sm:h-[340px]" icon={ICONS.strategy} />
                </FadeUp>
                <FadeUp delay={0.4}>
                  <ServiceCard num="03" title="SCRIPT" heightClass="h-[140px] sm:h-[220px]" icon={ICONS.script} />
                </FadeUp>
              </div>
              {/* Col 2 */}
              <div className="flex flex-col gap-[12px] sm:gap-[16px] w-1/2 mt-[30px] sm:mt-[40px]">
                <FadeUp delay={0.5}>
                  <ServiceCard num="02" title="PLANNING" heightClass="h-[140px] sm:h-[220px]" icon={ICONS.planning} />
                </FadeUp>
                <FadeUp delay={0.6}>
                  <ServiceCard num="04" title="STORYBOARD" heightClass="h-[200px] sm:h-[340px]" icon={ICONS.storyboard} />
                </FadeUp>
              </div>
            </div>

            <FadeUp delay={0.7}>
              <div className="text-right mt-[16px] sm:mt-[24px]">
                <span className="font-[var(--font-inter)] font-light text-[10px] leading-[15px] tracking-[3px] text-white/40 uppercase">
                  4 STAGES
                </span>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Block 2: Post Production */}
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-[60px] lg:gap-[100px]">
          {/* Left Grid */}
          <div className="lg:w-[50%] flex flex-col">
            <FadeUp delay={0.2}>
              <div className="flex justify-between items-center mb-[20px] sm:mb-[30px]">
                <span className="font-[var(--font-inter)] font-light text-[10px] leading-[15px] tracking-[3px] align-middle text-white/60 uppercase">
                  COMPOSITION / 02
                </span>
              </div>
            </FadeUp>

            <div className="flex gap-[12px] sm:gap-[16px]">
              {/* Col 1 */}
              <div className="flex flex-col gap-[12px] sm:gap-[16px] w-1/2">
                <FadeUp delay={0.3}>
                  <ServiceCard num="06" title="MOTION" heightClass="h-[140px] sm:h-[220px]" icon={ICONS.motion} />
                </FadeUp>
                <FadeUp delay={0.4}>
                  <ServiceCard num="08" title="DELIVERY" heightClass="h-[200px] sm:h-[340px]" icon={ICONS.delivery} />
                </FadeUp>
              </div>
              {/* Col 2 */}
              <div className="flex flex-col gap-[12px] sm:gap-[16px] w-1/2 mt-[30px] sm:mt-[40px]">
                <FadeUp delay={0.5}>
                  <ServiceCard num="05" title="EDITING" heightClass="h-[200px] sm:h-[340px]" icon={ICONS.editing} />
                </FadeUp>
                <FadeUp delay={0.6}>
                  <ServiceCard num="07" title="COLOR" heightClass="h-[140px] sm:h-[220px]" icon={ICONS.color} />
                </FadeUp>
              </div>
            </div>

            <FadeUp delay={0.7}>
              <div className="text-right mt-[16px] sm:mt-[24px]">
                <span className="font-[var(--font-inter)] font-light text-[10px] leading-[15px] tracking-[3px] text-white/40 uppercase">
                  4 STAGES
                </span>
              </div>
            </FadeUp>
          </div>

          {/* Right Text */}
          <div className="lg:w-[45%] flex flex-col">
            <FadeUp delay={0.1}>
              <div className="flex items-center gap-4 mb-[30px] sm:mb-[40px]">
                <span className="font-[var(--font-inter)] text-[#ff5500] font-medium text-[16px] leading-[16.5px] tracking-[4.4px] align-middle">
                  02
                </span>
                <div className="w-[40px] h-[1px] bg-[#ff5500]/50" />
                <span className="font-[var(--font-inter)] text-[#a0a0a0] font-light text-[11px] leading-[16.5px] tracking-[4.4px] uppercase align-middle">
                  CHAPTER TWO
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <h3 className="font-[var(--font-be-vietnam)] font-light text-[48px] sm:text-[80px] leading-[1.1] sm:leading-[80px] tracking-[-2.4px] align-middle mb-[24px] sm:mb-[30px]">
                Post<br />Production
              </h3>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="font-[var(--font-inter)] font-light text-[16px] sm:text-[18px] leading-[1.6] sm:leading-[29.25px] text-white/90 align-middle mb-[24px] sm:mb-[30px] max-w-[400px]">
                Where footage becomes a film. Editing, motion, color and sound woven together into a single continuous breath.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p className="font-[var(--font-inter)] font-normal text-[11px] leading-[16.5px] tracking-[1.65px] align-middle text-white/60 uppercase mb-[30px] sm:mb-[40px]">
                From raw material to release.
              </p>
            </FadeUp>

            {/* Pills */}
            <div className="flex flex-wrap gap-[10px]">
              {[
                "Editing",
                "Motion Design",
                "Color Grading",
                "Sound Design",
                "VFX & Compositing",
                "Subtitles & Localization",
                "Format Delivery",
                "Archive & Handoff",
              ].map((tag, i) => (
                <FadeUp key={tag} delay={0.4 + i * 0.05}>
                  <div className="flex items-center justify-center gap-2 px-[14px] py-[8px] sm:py-[10px] rounded-full border border-white/10 bg-[#0a0a0a]/50">
                    <div className="w-[4px] h-[4px] rounded-full bg-[#ff5500] shrink-0" />
                    <span className="font-[var(--font-inter)] font-light text-[11px] sm:text-[12px] leading-[1.4] sm:leading-[18px] tracking-[0.3px] text-white/80 align-middle text-center">
                      {tag}
                    </span>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
