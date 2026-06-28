"use client";

import Image from "next/image";
import FadeLeft from "./FadeLeft";
import FadeDown from "./FadeDown";
import FadeUp from "./FadeUp";
import FadeRight from "./FadeRight";

const rawSystems = [
  { title: "MARKETING\nSTRATEGY", icon: "/assets/marketingGrowths/marketingSvg.png" },
  { title: "SOCIAL MEDIA\nMARKETING", icon: "/assets/marketingGrowths/socialMediaIcon.png" },
  { title: "META\nADS", icon: "/assets/marketingGrowths/metaIcon.png" },
  { title: "GOOGLE\nADWORDS", icon: "/assets/marketingGrowths/googleIcon.png" },
  { title: "CONTENT\nCREATION", icon: "/assets/marketingGrowths/contentIcon.png" },
  { title: "EMAIL\nMARKETING", icon: "/assets/marketingGrowths/emailIcon.png" },
  { title: "WHATSAPP\n& SMS", icon: "/assets/marketingGrowths/whatsappIcon.png" },
  { title: "TALENT\nMANAGEMENT", icon: "/assets/marketingGrowths/talentIcon.png" },
  { title: "WEBSITE\nTRANSFORMATION", icon: "/assets/marketingGrowths/websiteTransformationIcon.png" },
];

// Evenly distribute angles around the full circle so spacing never drifts
// no matter how many items you add/remove later. Starts at -90deg (top),
// same as the original first item, then steps by 360/length degrees.
const systems = rawSystems.map((sys, i) => ({
  ...sys,
  angle: -90 + (360 / rawSystems.length) * i,
}));

export function MarketingSystems() {
  return (
    <section className="bg-black py-20 px-4 min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* Header */}
      <div className="text-center mb-16 md:mb-24 z-10 mt-10">
        <FadeDown delay={0.1}>
          <p className="text-[#ff5500] text-[11px] font-medium tracking-[0px] uppercase mb-4">
            OUR SOLUTIONS
          </p>
        </FadeDown>
        <FadeUp delay={0.2}>
          <h2 className="text-white mt-[28px] text-[32px] md:text-[56px] font-medium leading-[0.9] tracking-tight">
            marketing systems<br />
            designed for <span className="text-[#ff5500] font-[var(--font-cormorant)] timesFontFamily italic text-[42px] md:text-[76px] font-light">growth</span>
          </h2>
        </FadeUp>
      </div>

      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes counter-orbit {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }

        /* ── Node button ── */
        .node-btn {
          background: #151515;
          border: 1px solid rgba(255,255,255,0.25);
          box-shadow: 0 0 20px rgba(0,0,0,0.5);
          transition: transform 0.3s ease, background 0.3s ease,
                      border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .node-btn:hover {
          transform: scale(1.13);
          background: #1f0d00;
          border-color: rgba(255, 85, 0, 0.7);
          box-shadow: 0 0 22px 4px rgba(255, 85, 0, 0.35),
                      0 0 8px 2px rgba(255, 85, 0, 0.2);
        }

        /* ── Icon image ── */
        .node-icon {
          opacity: 0.65;
          transition: opacity 0.3s ease, filter 0.3s ease;
          filter: brightness(1) saturate(0);
        }
        .node-btn:hover .node-icon {
          opacity: 1;
          /* tint to orange — works for white/grey icons */
          filter: brightness(0) saturate(100%) invert(45%) sepia(90%)
                  saturate(500%) hue-rotate(5deg) brightness(110%);
        }

        /* ── Label text ── */
        .node-label {
          color: white;
          transition: color 0.3s ease;
        }
        .node-btn:hover .node-label {
          color: #ff5500;
        }
      `}</style>

      {/* Circular Diagram */}
      <div className="relative w-full max-w-[340px] sm:max-w-[500px] md:max-w-[750px] aspect-square mx-auto mt-8 md:mt-12">

        {/* Faint Concentric Circles — centered with translate, not flex-on-absolute */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full border border-white" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[84%] h-[84%] rounded-full border border-white" />
        </div>

        {/* Central Planet — guaranteed circle, guaranteed centered */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[68%] h-[68%] max-w-[400px] max-h-[400px]">

            {/* Glow — sits behind, same center, scaled up */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] rounded-full bg-[#FF5A1F1A] blur-[40px]" />

            {/* Circle frame with fallback gradient — always renders as a circle even if the image fails to load */}
            <div className="absolute inset-0 rounded-full overflow-hidden bg-gradient-to-br from-[#2a1206] via-[#170900] to-[#0a0400] border border-[#ff5500]/25 shadow-[0_0_60px_rgba(255,85,0,0.15)]">
              <Image
                src="/assets/marketingGrowths/growthCircle.png"
                alt="Growth Planet"
                fill
                className="object-cover"
              />
            </div>

            {/* Label */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <span className="text-white text-xs sm:text-sm md:text-xl font-medium tracking-[0.15em] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                GROWTH
              </span>
            </div>

          </div>
        </div>

        {/* Rotating Systems Container */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{ animation: "orbit 60s linear infinite" }}
        >
          {/* SVG Radial Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10">
            {systems.map((sys) => {
              const rad = (sys.angle * Math.PI) / 180;
              const r = 42;
              const x2 = 50 + r * Math.cos(rad);
              const y2 = 50 + r * Math.sin(rad);
              return (
                <line
                  key={sys.title}
                  x1="50%" y1="50%"
                  x2={`${x2}%`} y2={`${y2}%`}
                  stroke="white" strokeWidth="1"
                />
              );
            })}
          </svg>

          {/* Nodes */}
          {systems.map((sys) => {
            const rad = (sys.angle * Math.PI) / 180;
            const r = 42;
            const left = `calc(50% + ${r * Math.cos(rad)}%)`;
            const top = `calc(50% + ${r * Math.sin(rad)}%)`;

            return (
              <div key={sys.title} className="absolute" style={{ left, top }}>
                <div style={{ animation: "counter-orbit 60s linear infinite" }}>

                  {/* ── Clickable node ── */}
                  <div
                    className="node-btn relative pointer-events-auto rounded-full flex items-center justify-center cursor-pointer
                      w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[72px] lg:h-[72px]
                      -ml-[20px] -mt-[20px] sm:-ml-[28px] sm:-mt-[28px] md:-ml-[32px] md:-mt-[32px] lg:-ml-[36px] lg:-mt-[36px]"
                  >
                    {/* Icon */}
                    <div className="relative w-4 h-4">
                      <Image
                        src={sys.icon}
                        alt={sys.title.replace("\n", " ")}
                        fill
                        className="node-icon object-contain"
                      />
                    </div>

                    {/* Label — above the node */}
                    <div className="node-label text-white absolute whitespace-nowrap text-[7px] sm:text-[9px] md:text-[12px] lg:text-[14px] uppercase font-medium tracking-wide flex flex-col items-center text-center bottom-full left-1/2 -translate-x-1/2 mb-3 md:mb-5">
                      {sys.title.split("\n").map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center mt-24 md:mt-32 z-10 flex flex-col items-center max-w-[800px] px-6">
        <FadeLeft delay={0.1}>
          <h3 className="text-white text-xl md:text-[34px] font-medium tracking-[-0.34px] mb-6">
            One Unified Growth Engine
          </h3>
        </FadeLeft>
        <FadeRight delay={0.2}>
          <p className="text-white text-[8px] md:text-[12px] uppercase font-medium tracking-[3.84px] mb-7">
            BRAND &middot; CONTENT &middot; ADVERTISING &middot; AUTOMATION
          </p>
        </FadeRight>
        <FadeUp delay={0.3}>
          <p className="text-white text-[10px] md:text-[14px] font-normal tracking-[1%]">
            Working together to create measurable business growth.
          </p>
        </FadeUp>
      </div>

    </section>
  );
}