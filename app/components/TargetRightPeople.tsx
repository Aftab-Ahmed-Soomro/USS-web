"use client";

import { useId } from "react";
import {
  Users2,
  MapPin,
  Heart,
  ShoppingBag,
  Briefcase,
  Target,
  Users,
  Crown,
  Calendar,
  UserPlus,
  type LucideIcon,
} from "lucide-react";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";
import FadeUp from "./FadeUp";

export interface TargetItem {
  number: string;
  icon?: LucideIcon | string;
  title: string;
  description?: string;
  points?: string[];
}

export interface TargetRightPeopleProps {
  items?: TargetItem[];
  title?: React.ReactNode;
}

const iconMap: Record<string, LucideIcon> = {
  Users2,
  MapPin,
  Heart,
  ShoppingBag,
  Briefcase,
  Target,
  Users,
  Crown,
  Calendar,
  UserPlus,
};

function renderIcon(
  iconProp: LucideIcon | string | undefined,
  fallbackIcon: LucideIcon,
  size: number
) {
  if (!iconProp) {
    const Fallback = fallbackIcon;
    return <Fallback size={size} strokeWidth={1.5} color="#ff7a33" />;
  }
  if (typeof iconProp === "string") {
    if (iconProp.startsWith("/")) {
      return (
        <img
          src={iconProp}
          alt=""
          className="object-contain"
          style={{
            width: size,
            height: size,
            filter:
              "brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(346deg) brightness(100%) contrast(100%)",
          }}
        />
      );
    }
    const MappedIcon = iconMap[iconProp] || fallbackIcon;
    return <MappedIcon size={size} strokeWidth={1.5} color="#ff7a33" />;
  }
  const IconComp = iconProp;
  return <IconComp size={size} strokeWidth={1.5} color="#ff7a33" />;
}

const defaultItems: TargetItem[] = [
  {
    number: "01",
    icon: Users2,
    title: "Demographics",
    description: " Age, gender, language, household income and life stage.",
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
    title: "Behaviours",
    description: "Shopping habits, online activity and customer behaviours.",
  },
  {
    number: "05",
    icon: Briefcase,
    title: "Professional",
    description: "Job titles, industries, employers and business decision makers.",
  },
  {
    number: "06",
    icon: Target,
    title: "Custom Audiences",
    description:
      "Website visitors, existing customers and lookalike audiences.",
  },
];

const defaultIcons = [Users2, MapPin, Heart, ShoppingBag, Briefcase, Target];

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

function getPositions(count: number) {
  const leftPercents = Array.from({ length: count }, (_, i) => {
    return ((i + 0.5) / count) * 100;
  });
  const ICON_ROW_TOP = 320;

  return leftPercents.map((leftPct) => {
    const targetX = (leftPct / 100) * VIEWBOX_W;
    const t = solveTForX(targetX);
    const yInViewBox = bezierY(t);
    const curveY = (yInViewBox / VIEWBOX_H) * CONTAINER_H;
    const lineHeight = Math.max(ICON_ROW_TOP - curveY, 0);
    return { left: `${leftPct}%`, curveY, lineHeight };
  });
}

export default function TargetRightPeople({
  items: customItems,
  title,
}: TargetRightPeopleProps) {
  const rawId = useId();
  const filterId = `glow-${rawId.replace(/:/g, "")}`;
  const gradientId = `arcFade-${rawId.replace(/:/g, "")}`;

  const displayItems =
    customItems && customItems.length > 0 ? customItems : defaultItems;
  const positions = getPositions(displayItems.length);

  return (
    <section className="relative w-full overflow-hidden bg-black py-[60px] sm:pt-40 sm:pb-30 px-4 sm:px-6">
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
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
        {title ? (
          title
        ) : (
          <Stagger staggerDelay={0.12}>
            <StaggerItem>
              <h2 className="lowercase text-center text-white font-[var(--font-be-vietnam)] font-medium text-[36px] sm:text-[56px] leading-[1.2] sm:leading-[80px] tracking-[-1.5px] sm:tracking-[-3px]">
                target the{" "}
                <span
                  className="italic font-normal text-[44px] sm:text-[72px] leading-[1.2] sm:leading-[80px] tracking-[-1.5px] sm:tracking-[-3px] text-[#ff5500]"
                  style={{
                    fontFamily: '"Times New Roman", Times, serif',
                  }}
                >
                  right people
                </span>
              </h2>
            </StaggerItem>
          </Stagger>
        )}

        {/* Mobile View (Vertical Timeline) */}
        <div className="sm:hidden mt-8 relative flex flex-col gap-8 px-2">
          {/* Vertical line connector */}
          <div className="absolute left-[30px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[rgba(255,85,0,0.1)] via-[rgba(255,85,0,0.5)] to-[rgba(255,85,0,0.1)]" />

          {displayItems.map((item, i) => (
            <FadeUp
              key={item.number || i}
              delay={0.1 + i * 0.1}
              className="relative flex items-start gap-5 z-10"
            >
              {/* icon container */}
              <div
                className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[12px] border bg-[#0a0a0a]"
                style={{
                  borderColor: "rgba(255,85,0,0.4)",
                  boxShadow:
                    "0 0 15px rgba(255,85,0,0.2), inset 0 0 10px rgba(255,85,0,0.1)",
                }}
              >
                {renderIcon(item.icon, defaultIcons[i % defaultIcons.length], 20)}
              </div>

              {/* text content */}
              <div className="flex flex-col pt-[2px]">
                <span className="text-[#ff5500] font-normal text-[10px] leading-[15px] tracking-[2px] mb-1">
                  {item.number}
                </span>
                <h3 className="text-white font-semibold text-[16px] leading-[1.2] mb-1.5">
                  {item.title}
                </h3>
                {item.points && item.points.length > 0 ? (
                  <ul className="space-y-1 flex flex-col items-start w-full mt-1">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2 text-white/70 text-[13px] leading-[1.4] items-start text-left">
                        <span className="text-[#ff5500] shrink-0 mt-[1px]">·</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-white/70 font-normal text-[14px] leading-[1.4]">
                    {item.description}
                  </p>
                )}
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Desktop View (Curve + nodes) */}
        <div className="hidden sm:block relative mt-[-75px] min-h-[540px] w-full">
          <div className="relative w-full h-full">
            {/* SVG arc */}
            <svg
              className="pointer-events-none absolute left-0 top-0 h-[420px] w-full"
              viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
              preserveAspectRatio="none"
              fill="none"
              style={{ overflow: "visible" }}
            >
              <defs>
                <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff5500" stopOpacity="0" />
                  <stop offset="15%" stopColor="#ff5500" stopOpacity="1" />
                  <stop offset="85%" stopColor="#ff5500" stopOpacity="1" />
                  <stop offset="100%" stopColor="#ff5500" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d={`M ${P0.x} ${P0.y} Q ${P1.x} ${P1.y} ${P2.x} ${P2.y}`}
                stroke={`url(#${gradientId})`}
                strokeWidth="3"
                filter={`url(#${filterId})`}
              />
            </svg>

            {/* Nodes */}
            {displayItems.map((item, i) => {
              const pos = positions[i];
              return (
                <div
                  key={item.number || i}
                  className="absolute flex -translate-x-1/2 flex-col items-center text-center"
                  style={{
                    left: pos.left,
                    top: `${pos.curveY}px`,
                    width: "200px",
                  }}
                >
                  <FadeUp
                    delay={0.25 + i * 0.15}
                    className="flex flex-col items-center w-full"
                  >
                    {/* connector line */}
                    <div
                      style={{
                        width: "1px",
                        height: `${pos.lineHeight}px`,
                        background:
                          "linear-gradient(180deg, rgba(255,85,0,0.8), rgba(255,85,0,0.2))",
                      }}
                    />

                    {/* label */}
                    <span className="mt-4 text-gray-500 font-normal text-[10px] leading-[15px] tracking-[3px]">
                      {item.number}
                    </span>

                    {/* icon */}
                    <div
                      className="mt-3 flex h-14 w-14 items-center justify-center rounded-[14px] border"
                      style={{
                        borderColor: "rgba(255,85,0,0.4)",
                        background:
                          "linear-gradient(180deg, rgba(255,85,0,0.1), rgba(255,85,0,0.02))",
                        boxShadow:
                          "0 0 20px rgba(255,85,0,0.2), inset 0 0 10px rgba(255,85,0,0.1)",
                      }}
                    >
                      {renderIcon(
                        item.icon,
                        defaultIcons[i % defaultIcons.length],
                        24
                      )}
                    </div>

                    {/* title */}
                    <h3 className="mt-4 text-white font-semibold text-[15px] leading-[19.5px]">
                      {item.title}
                    </h3>

                    {/* description or points */}
                    {item.points && item.points.length > 0 ? (
                      <ul className="mt-2 space-y-1 flex flex-col items-start text-left w-full">
                        {item.points.map((point) => (
                          <li key={point} className="flex gap-1.5 text-white/70 whitespace-nowrap text-[12px] leading-[1.4] items-start">
                            <span className="text-[#ff5500] shrink-0 mt-[1px]">·</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-2 text-white/80 font-normal text-[13px] leading-[1.4]">
                        {item.description}
                      </p>
                    )}
                  </FadeUp>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}