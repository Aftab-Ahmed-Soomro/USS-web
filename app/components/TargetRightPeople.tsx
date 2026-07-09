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
const VIEWBOX_H = 200;
const CONTAINER_H = 420; // matches h-[420px] wrapper
const P0 = { x: -50, y: -30 };
const P1 = { x: 700, y: 260 };
const P2 = { x: 1450, y: -30 };

function bezierY(t: number) {
  const mt = 1 - t;
  return mt * mt * P0.y + 2 * mt * t * P1.y + t * t * P2.y;
}

// Solve for t given target x (bezier x is monotonic here, so simple bisection works)
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

// Left offsets as % of container width — tuned to match the mockup,
// with the outer two nodes closer to the edges.
const leftPercents = [5.5, 23.5, 41.4, 58.7, 77, 95];

// Height of the icon row below the curve (number + icon + title + desc)
const ICON_ROW_TOP = 300; // px from top of container where the icon row starts

const positions = leftPercents.map((leftPct) => {
  const targetX = (leftPct / 100) * VIEWBOX_W;
  const t = solveTForX(targetX);
  const yInViewBox = bezierY(t);
  // scale viewBox y (0-200) to actual container height
  const curveY = (yInViewBox / VIEWBOX_H) * CONTAINER_H;
  // connector runs from the curve point DOWN to the icon row
  const lineHeight = Math.max(ICON_ROW_TOP - curveY, 8);
  return { left: `${leftPct}%`, curveY, lineHeight };
});

export default function TargetRightPeople() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-24 px-6">
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 40% at 50% 45%, rgba(255,85,0,0.15), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1150px]">
        {/* Heading */}
        <Stagger staggerDelay={0.12}>
          <StaggerItem>
            <h2
              className="lowercase text-white"
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
        <div className="relative mt-24 h-[420px] w-full">
          {/* SVG arc */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 1400 200"
              preserveAspectRatio="none"
              fill="none"
              style={{ overflow: 'visible' }}
            >
              <defs>
                <filter id="glow" x="-20%" y="-200%" width="140%" height="500%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="arcFade" x1="-1000" y1="0" x2="2400" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#ff5500" stopOpacity="0.0" />
                  <stop offset="20%" stopColor="#ff5500" stopOpacity="1" />
                  <stop offset="80%" stopColor="#ff5500" stopOpacity="1" />
                  <stop offset="100%" stopColor="#ff5500" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M -3050 -3510 Q 700 3740 4450 -3510"
                stroke="url(#arcFade)"
                strokeWidth="2.5"
                filter="url(#glow)"
              />
            </svg>

          {/* Nodes — icon row fixed, lines go from curve DOWN to icons */}
          {items.map((item, i) => {
            const Icon = item.icon;
            const pos = positions[i];
            return (
              <div
                key={item.number}
                className="absolute flex -translate-x-1/2 flex-col items-center text-center"
                style={{ left: pos.left, top: `${pos.curveY}px`, width: "180px" }}
              >
                <FadeUp delay={0.25 + i * 0.15} className="flex flex-col items-center">
                  {/* connector line: from curve down to icon */}
                  <div
                    style={{
                      width: "1px",
                      height: `${pos.lineHeight}px`,
                      background:
                        "linear-gradient(180deg, rgba(255,85,0,0.7), rgba(255,85,0,0.5))",
                    }}
                  />

                  {/* index label */}
                  <span
                    className="mt-3 text-gray-500"
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
                    className="mt-3 flex h-16 w-16 items-center justify-center rounded-2xl border"
                    style={{
                      borderColor: "rgba(255,85,0,0.6)",
                      background:
                        "linear-gradient(180deg, rgba(255,85,0,0.12), rgba(255,85,0,0.03))",
                      boxShadow:
                        "0 0 24px rgba(255,85,0,0.35), inset 0 0 12px rgba(255,85,0,0.15)",
                    }}
                  >
                    <Icon size={26} strokeWidth={1.75} color="#ff7a33" />
                  </div>

                  {/* title */}
                  <h3
                    className="mt-5 text-white"
                    style={{
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "19.5px",
                      letterSpacing: "0%",
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* description */}
                  <p
                    className="mt-2 text-white"
                    style={{
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "140%",
                      letterSpacing: "0%",
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