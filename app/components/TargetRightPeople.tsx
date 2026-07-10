"use client";

import {
  Users2,
  MapPin,
  Heart,
  ShoppingBag,
  Briefcase,
  Target,
  type LucideIcon,
} from "lucide-react";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";
import FadeUp from "./FadeUp";

interface TargetItem {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const items: TargetItem[] = [
  {
    number: "01",
    icon: Users2,
    title: "Demographics",
    description: "Age, gender, language and household profile.",
  },
  {
    number: "02",
    icon: MapPin,
    title: "Location",
    description: "Countries, cities, postcodes or custom radius targeting.",
  },
  {
    number: "03",
    icon: Heart,
    title: "Interests",
    description: "Hobbies, passions, brands and lifestyle preferences.",
  },
  {
    number: "04",
    icon: ShoppingBag,
    title: "Behavior",
    description: "Shopping habits, online activity and purchase intent.",
  },
  {
    number: "05",
    icon: Briefcase,
    title: "Professional",
    description: "Job titles, industries and business decision-makers.",
  },
  {
    number: "06",
    icon: Target,
    title: "Custom Audiences",
    description:
      "Website visitors, existing customers and lookalike audiences.",
  },
];

/**
 * The curve is a quadratic bezier: P(t) = (1-t)^2 * P0 + 2(1-t)t * P1 + t^2 * P2
 * P0 = (-50, -30), P1 = (700, 260), P2 = (1450, -30)  [in the 0-1400 x 0-200 viewBox]
 *
 * We pick each node's x position (as % of the 1400-wide box), solve for t,
 * then compute the curve's y at that t. The "drop" is how far (in px, at
 * the 420px container height scale) the connector line must travel from
 * the top of the curve container down to the curve itself, so the line
 * visually touches the arc exactly like in the mockup.
 */
const VIEWBOX_W = 1400;
const VIEWBOX_H = 420;
const CONTAINER_H = 420;
const P0 = { x: -50, y: 20 };
const P1 = { x: 700, y: 580 };
const P2 = { x: 1450, y: 20 };

function bezierY(t: number) {
  const mt = 1 - t;
  return mt * mt * P0.y + 2 * mt * t * P1.y + t * t * P2.y;
}

function solveTForX(targetX: number) {
  let lo = 0;
  let hi = 1;
  for (let i = 0; i < 40; i++) {
    const mid = (lo + hi) / 2;
    const mt = 1 - mid;
    const x = mt * mt * P0.x + 2 * mt * mid * P1.x + mid * mid * P2.x;
    if (x < targetX) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
}

// Evenly distribute the 6 nodes
const leftPercents = [8.33, 25, 41.66, 58.33, 75, 91.66];
const ICON_ROW_TOP = 320; 

const positions = leftPercents.map((leftPct) => {
  const targetX = (leftPct / 100) * VIEWBOX_W;
  const t = solveTForX(targetX);
  const yInViewBox = bezierY(t);
  const curveY = (yInViewBox / VIEWBOX_H) * CONTAINER_H;
  const lineHeight = Math.max(ICON_ROW_TOP - curveY, 0);
  return { left: `${leftPct}%`, curveY, lineHeight };
});

export default function TargetRightPeople() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-40 px-6">
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255,85,0,0.15), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1150px]">
        {/* Heading */}
        <Stagger staggerDelay={0.12}>
          <StaggerItem>
            <h2
              className="lowercase text-center text-white"
              style={{
                fontWeight: 500,
                fontSize: "56px",
                lineHeight: "80px",
                letterSpacing: "-3px",
              }}
            >
              target the{" "}
              <span
                className="italic"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontWeight: 400,
                  fontSize: "72px",
                  lineHeight: "80px",
                  letterSpacing: "-3px",
                  color: "#ff5500",
                }}
              >
                right people
              </span>
            </h2>
          </StaggerItem>
        </Stagger>

        {/* Curve + nodes */}
        <div className="relative mt-[-75px] h-[420px] w-full">
          {/* SVG arc */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
            preserveAspectRatio="none"
            fill="none"
            style={{ overflow: 'visible' }}
          >
            <defs>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="arcFade" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff5500" stopOpacity="0" />
                <stop offset="15%" stopColor="#ff5500" stopOpacity="1" />
                <stop offset="85%" stopColor="#ff5500" stopOpacity="1" />
                <stop offset="100%" stopColor="#ff5500" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d={`M ${P0.x} ${P0.y} Q ${P1.x} ${P1.y} ${P2.x} ${P2.y}`}
              stroke="url(#arcFade)"
              strokeWidth="2.5"
              filter="url(#glow)"
            />
          </svg>

          {/* Nodes */}
          {items.map((item, i) => {
            const Icon = item.icon;
            const pos = positions[i];
            return (
              <div
                key={item.number}
                className="absolute flex -translate-x-1/2 flex-col items-center text-center"
                style={{ left: pos.left, top: `${pos.curveY}px`, width: "180px" }}
              >
                <FadeUp delay={0.25 + i * 0.15} className="flex flex-col items-center w-full">
                  {/* connector line */}
                  <div
                    style={{
                      width: "1px",
                      height: `${pos.lineHeight}px`,
                      background: "linear-gradient(180deg, rgba(255,85,0,0.8), rgba(255,85,0,0.2))",
                    }}
                  />

                  {/* label */}
                  <span
                    className="mt-4 text-gray-500"
                    style={{
                      fontWeight: 400,
                      fontSize: "10px",
                      lineHeight: "15px",
                      letterSpacing: "3px",
                    }}
                  >
                    {item.number}
                  </span>

                  {/* icon */}
                  <div
                    className="mt-3 flex h-14 w-14 items-center justify-center rounded-[14px] border"
                    style={{
                      borderColor: "rgba(255,85,0,0.4)",
                      background: "linear-gradient(180deg, rgba(255,85,0,0.1), rgba(255,85,0,0.02))",
                      boxShadow: "0 0 20px rgba(255,85,0,0.2), inset 0 0 10px rgba(255,85,0,0.1)",
                    }}
                  >
                    <Icon size={24} strokeWidth={1.5} color="#ff7a33" />
                  </div>

                  {/* title */}
                  <h3
                    className="mt-4 text-white"
                    style={{
                      fontWeight: 600,
                      fontSize: "15px",
                      lineHeight: "19.5px",
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* description */}
                  <p
                    className="mt-2 text-white/80"
                    style={{
                      fontWeight: 400,
                      fontSize: "13px",
                      lineHeight: "1.4",
                    }}
                  >
                    {item.description}
                  </p>
                </FadeUp>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}