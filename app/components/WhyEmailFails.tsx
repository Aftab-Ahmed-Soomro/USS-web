import React from "react";
import FadeUp from "./FadeUp";
import FadeLeft from "./FadeLeft";
import FadeRight from "./FadeRight";
import ScaleIn from "./Scalein";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

const brandPoints: Point[] = [
    {
        number: "01",
        title: "Send and Forget",
        description: "Emails are only sent when there's a promotion or announcement.",
    },
    {
        number: "02",
        title: "Every Subscriber Looks the Same",
        description: "The same message is sent to every subscriber, regardless of behaviour.",
    },
    {
        number: "03",
        title: "No Long Term Customer Journey",
        description: "No automated flows to welcome, recover or retain customers.",
    },
    {
        number: "04",
        title: "No Clear Performance Tracking",
        description: "Little reporting or optimisation means opportunities are missed.",
    },
];

const ussPoints: Point[] = [
    {
        number: "01",
        title: "Always on Email Strategy",
        description: "Strategic email calendars that keep your brand consistently visible.",
    },
    {
        number: "02",
        title: "Personalised Customer Experiences",
        description: "Every subscriber receives content relevant to their interests and behaviour.",
    },
    {
        number: "03",
        title: "Automated Customer Journeys",
        description: "Welcome, abandoned cart and post purchase flows working automatically.",
    },
    {
        number: "04",
        title: "Continuous Performance Optimisation",
        description: "Every campaign is measured, refined and improved over time.",
    },
];

// ─── AbsolutePoint (Desktop) ─────────────────────────────────────────────────
function AbsolutePoint({ side, x, y, point, index }: { side: 'left' | 'right', x: number, y: number, point: Point, index: number }) {
    const isLeft = side === 'left';
    const bgColor = isLeft ? 'bg-[#A81508]' : 'bg-[#12801F]';

    const AnimationWrapper = isLeft ? FadeLeft : FadeRight;

    return (
        <div className="absolute z-10" style={{ left: x, top: y }}>
            <AnimationWrapper delay={0.2 + index * 0.15}>
                {/* Text Box & Title */}
                <div
                    className={`absolute top-0 -translate-y-1/2 w-[320px] ${isLeft ? 'right-[34px]' : 'left-[34px]'}`}
                >
                    <div className="relative">
                        <h4 className="absolute bottom-[100%] mb-[8px] pl-[2px] w-[300px] text-left font-[var(--font-inter)] text-[14px] font-semibold text-white">
                            {point.title}
                        </h4>
                        <div className={`flex h-[70px] w-[320px] items-center justify-center rounded-[40px] bg-[#eef0f2] ${isLeft ? 'px-[24px]' : 'px-[18px]'} py-[8px] shadow-lg`}>
                            <p className="font-[var(--font-inter)] text-[14px] leading-[1.45] text-[#333]">
                                {point.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Circle */}
                <div className={`absolute -translate-x-1/2 -translate-y-1/2 flex size-[42px] items-center justify-center rounded-full ${bgColor} font-[var(--font-inter)] text-[13px] font-bold text-white shadow-md`}>
                    {point.number}
                </div>
            </AnimationWrapper>
        </div>
    );
}

// ─── SegmentedRing ───────────────────────────────────────────────────────────
// Four white arc segments with clean butt gaps between them
// function SegmentedRing({ size = 260 }: { size?: number }) {
//   const cx = size / 2;
//   const cy = size / 2;
//   const r = size * 0.355;
//   const sw = size * 0.128;
//   const gap = 11;
//   const segs = [
//     { s: 0   + gap / 2, e: 90  - gap / 2 },
//     { s: 90  + gap / 2, e: 180 - gap / 2 },
//     { s: 180 + gap / 2, e: 270 - gap / 2 },
//     { s: 270 + gap / 2, e: 360 - gap / 2 },
//   ];
//   const rad = (d: number) => (d * Math.PI) / 180;
//   const pt = (deg: number) => ({
//     x: cx + r * Math.cos(rad(deg - 90)),
//     y: cy + r * Math.sin(rad(deg - 90)),
//   });
//   return (
//     <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} fill="none">
//       {segs.map((seg, i) => {
//         const s = pt(seg.s);
//         const e = pt(seg.e);
//         return (
//           <path
//             key={i}
//             d={`M ${s.x.toFixed(2)} ${s.y.toFixed(2)} A ${r} ${r} 0 0 1 ${e.x.toFixed(2)} ${e.y.toFixed(2)}`}
//             stroke="white"
//             strokeWidth={sw}
//             strokeLinecap="butt"
//           />
//         );
//       })}
//     </svg>
//   );
// }

// ─── WhyEmailFails ───────────────────────────────────────────────────────────
export type Point = {
    number: string;
    title: string;
    description: string;
};

export function WhyEmailFails({
    tagline,
    heading,
    subheading,
    leftTitle = "Most Brands",
    rightTitle = "The USS Difference",
    leftPoints = brandPoints,
    rightPoints = ussPoints,
    hideBadge = false,
    centerLogo,
    logoClassName,
}: {
    tagline?: string;
    heading?: React.ReactNode;
    subheading?: React.ReactNode;
    leftTitle?: string;
    rightTitle?: string;
    leftPoints?: Point[];
    rightPoints?: Point[];
    hideBadge?: boolean;
    centerLogo?: string;
    logoClassName?: string;
} = {}) {
    return (
        <section className="bg-black px-4 py-[50px] sm:py-[80px] text-white sm:px-8 lg:px-14">
            <div className="mx-auto max-w-[1200px] xl:max-w-[1300px] ">

                {/* Header Section */}
                <Stagger staggerDelay={0.1}>
                    {/* Tagline */}
                    {tagline && (
                        <StaggerItem>
                            <p className="mb-[8px] sm:mb-4 text-center font-[var(--font-inter)] text-[12px] sm:text-[14px] font-medium tracking-[2.64px] text-[#ff5500] uppercase">
                                {tagline}
                            </p>
                        </StaggerItem>
                    )}

                    {/* Heading */}
                    {heading ?? (
                        <StaggerItem>
                            <h2 className="mx-auto max-w-[900px] text-center font-[var(--font-inter)] text-[32px] sm:text-[56px] font-medium leading-[1.2] sm:leading-[70px] tracking-[-1.5px]">
                                why most{" "}
                                <span
                                    className="font-normal italic text-[42px] sm:text-[70px] leading-none"
                                    style={{ fontFamily: "'Times New Roman', Times, serif" }}
                                >
                                    email
                                    <br />
                                    marketing
                                </span>{" "}
                                fails
                            </h2>
                        </StaggerItem>
                    )}

                    {/* Sub-heading */}
                    <StaggerItem>
                        <p className="mx-auto mt-[16px] sm:mt-5 max-w-[370px] text-center font-[var(--font-inter)] text-[13px] sm:text-[18px] font-normal leading-[1.6] text-white/90 sm:text-white">
                            {subheading ?? "Most brands don't have an email problem, they have a strategy problem."}
                        </p>
                    </StaggerItem>
                </Stagger>

                {/* ═══ DESKTOP layout (lg+): Absolute Positioned Diagram ═══ */}
                <div className="mt-8 hidden lg:flex justify-center">

                    <div className="relative mx-auto w-[1000px] h-[640px] shrink-0">
                        {/* Column labels */}
                        <div className="absolute top-[20px] left-[90px] -translate-x-1/2">
                            <p className="text-center font-[var(--font-inter)] text-[20px] font-normal text-white">
                                {leftTitle}
                            </p>
                        </div>
                        <div className="absolute top-[20px] left-[890px] -translate-x-1/2">
                            <p className="text-center font-[var(--font-inter)] text-[20px] font-normal whitespace-nowrap text-white">
                                {rightTitle}
                            </p>
                        </div>

                        {/* SVG Lines and Dots */}
                        <FadeUp delay={0.6} duration={1} className="absolute inset-0 z-0 pointer-events-none">
                            <svg
                                className="h-full w-full"
                                viewBox="0 0 1000 640"
                            >
                                {/* Left Lines (\ staircase) */}
                                <line x1={330} y1={145} x2={380} y2={170} stroke="white" strokeWidth="1.5" />
                                <circle cx={380} cy={170} r={4.5} fill="white" />

                                <line x1={340} y1={240} x2={372} y2={240} stroke="white" strokeWidth="1.5" />
                                <circle cx={372} cy={240} r={4.5} fill="white" />

                                <line x1={350} y1={350} x2={392} y2={319} stroke="white" strokeWidth="1.5" />
                                <circle cx={392} cy={319} r={4.5} fill="white" />

                                <line x1={400} y1={430} x2={440} y2={370} stroke="white" strokeWidth="1.5" />
                                <circle cx={440} cy={370} r={4.5} fill="white" />

                                {/* Right Lines (/ staircase) */}
                                <line x1={670} y1={145} x2={630} y2={170} stroke="white" strokeWidth="1.5" />
                                <circle cx={630} cy={170} r={4.5} fill="white" />

                                <line x1={680} y1={240} x2={630} y2={240} stroke="white" strokeWidth="1.5" />
                                <circle cx={630} cy={240} r={4.5} fill="white" />

                                <line x1={650} y1={350} x2={608} y2={319} stroke="white" strokeWidth="1.5" />
                                <circle cx={608} cy={319} r={4.5} fill="white" />

                                <line x1={600} y1={430} x2={555} y2={370} stroke="white" strokeWidth="1.5" />
                                <circle cx={555} cy={370} r={4.5} fill="white" />
                            </svg>
                        </FadeUp>

                        {/* Center Ring */}
                        <div className="absolute left-1/2 top-[230px] -translate-x-1/2 -translate-y-1/2 z-0">
                            <ScaleIn delay={0.4} duration={0.8}>
                                <div className="relative flex items-center justify-center">
                                    <img src="/assets/circled.png" alt="" loading="lazy" decoding="async" className="w-[310px] object-contain" />
                                    {!hideBadge && (
                                        <img
                                            src={centerLogo ?? "/assets/klaviyo-logo-white.webp"}
                                            alt="center logo"
                                            loading="lazy"
                                            decoding="async"
                                            className={`absolute ml-1 object-contain ${logoClassName ?? 'w-[140px]'}`}
                                        />
                                    )}
                                </div>
                            </ScaleIn>
                        </div>

                        {/* Left Items (Stairs: moving right as going down \ ) */}
                        {leftPoints[0] && <AbsolutePoint side="left" x={290} y={130} point={leftPoints[0]} index={0} />}
                        {leftPoints[1] && <AbsolutePoint side="left" x={320} y={240} point={leftPoints[1]} index={1} />}
                        {leftPoints[2] && <AbsolutePoint side="left" x={350} y={350} point={leftPoints[2]} index={2} />}
                        {leftPoints[3] && <AbsolutePoint side="left" x={380} y={460} point={leftPoints[3]} index={3} />}

                        {/* Right Items (Stairs: moving left as going down / ) */}
                        {rightPoints[0] && <AbsolutePoint side="right" x={710} y={130} point={rightPoints[0]} index={0} />}
                        {rightPoints[1] && <AbsolutePoint side="right" x={680} y={240} point={rightPoints[1]} index={1} />}
                        {rightPoints[2] && <AbsolutePoint side="right" x={650} y={350} point={rightPoints[2]} index={2} />}
                        {rightPoints[3] && <AbsolutePoint side="right" x={620} y={460} point={rightPoints[3]} index={3} />}
                    </div>
                </div>

                {/* ═══ MOBILE layout (< lg): stacked list ═══ */}
                <div className="mt-8 sm:mt-10 block lg:hidden">
                    <Stagger staggerDelay={0.1}>
                        <StaggerItem>
                            <p className="mb-4 sm:mb-5 text-center font-[var(--font-inter)] text-[15px] sm:text-[17px] font-normal text-white">
                                {leftTitle}
                            </p>
                        </StaggerItem>
                        <div className="flex flex-col gap-3 sm:gap-4">
                            {leftPoints.map((point) => (
                                <StaggerItem key={point.number}>
                                    <div className="flex items-start gap-3 rounded-[18px] bg-[#eef0f2] p-4 shadow-lg">
                                        <span className="mt-[1px] flex size-[34px] shrink-0 items-center justify-center rounded-full bg-[#A81508] font-[var(--font-inter)] text-[11px] font-bold text-white shadow-md">
                                            {point.number}
                                        </span>
                                        <div>
                                            <h4 className="font-[var(--font-inter)] text-[13px] font-bold text-[#141414]">{point.title}</h4>
                                            <p className="mt-[4px] font-[var(--font-inter)] text-[12px] leading-[1.55] text-[#333]">{point.description}</p>
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </div>

                        <div className="my-[32px] sm:my-12 flex justify-center">
                            <ScaleIn delay={0.3} duration={0.6}>
                                <div className="relative flex items-center justify-center">
                                    <img src="/assets/circled.png" alt="" loading="lazy" decoding="async" className="w-[180px] sm:w-[200px] object-contain" />
                                    {!hideBadge && (
                                        <img
                                            src={centerLogo ?? "/assets/klaviyo-logo-white.webp"}
                                            alt="center logo"
                                            loading="lazy"
                                            decoding="async"
                                            className={`absolute object-contain ${logoClassName ?? 'w-[70px] sm:w-[100px]'}`}
                                        />
                                    )}
                                </div>
                            </ScaleIn>
                        </div>

                        <StaggerItem>
                            <p className="mb-4 sm:mb-5 text-center font-[var(--font-inter)] text-[15px] sm:text-[17px] font-normal text-white">
                                {rightTitle}
                            </p>
                        </StaggerItem>
                        <div className="flex flex-col gap-3 sm:gap-4">
                            {rightPoints.map((point) => (
                                <StaggerItem key={point.number}>
                                    <div className="flex items-start gap-3 rounded-[18px] bg-[#eef0f2] p-4 shadow-lg">
                                        <span className="mt-[1px] flex size-[34px] shrink-0 items-center justify-center rounded-full bg-[#12801F] font-[var(--font-inter)] text-[11px] font-bold text-white shadow-md">
                                            {point.number}
                                        </span>
                                        <div>
                                            <h4 className="font-[var(--font-inter)] text-[13px] font-bold text-[#141414]">{point.title}</h4>
                                            <p className="mt-[4px] font-[var(--font-inter)] text-[12px] leading-[1.55] text-[#333]">{point.description}</p>
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </div>
                    </Stagger>
                </div>

            </div>
        </section>
    );
}