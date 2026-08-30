"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Stagger from './Stagger';
import StaggerItem from './Staggeritem';
import FadeUp from './FadeUp';

const GOALS = [
  {
    id: 1,
    title: 'Lead Generation',
    description: 'Generate high quality leads from the audiences most likely to become customers',
    image: '/assets/businessGoal/1.webp'
  },
  {
    id: 2,
    title: 'New Location Opening',
    description: 'Build local awareness and drive footfall before, during and after launch',
    image: '/assets/businessGoal/2.webp'
  },
  {
    id: 3,
    title: 'Membership Growth',
    description: 'Increase memberships through targeted campaigns designed to attract and convert',
    image: '/assets/businessGoal/3.webp'
  },
  {
    id: 4,
    title: 'Brand Launch',
    description: 'Introduce your brand to the right audience and make a strong first impression',
    image: '/assets/businessGoal/4.webp'
  },
  {
    id: 5,
    title: 'Event Promotion',
    description: 'Reach the right audience and drive attendance for your event.',
    image: '/assets/businessGoal/5.webp'
  },
  {
    id: 6,
    title: 'Revenue Growth',
    description: 'Increase sales by identifying new opportunities and improving\u00A0marketing performance',
    image: '/assets/businessGoal/6.webp'
  },
  {
    id: 7,
    title: 'Customer Retention',
    description: 'Build stronger customer relationships beyond the first purchase',
    image: '/assets/businessGoal/7.webp'
  },
  {
    id: 8,
    title: 'Market Expansion',
    description: 'Enter new markets with a strategy tailored to local audiences and demand.',
    image: '/assets/businessGoal/8.jpg'
  }
];

function preventOrphan(text?: React.ReactNode): React.ReactNode {
  if (typeof text !== "string") return text;
  const trimmed = text.trim();
  const lastSpaceIndex = trimmed.lastIndexOf(" ");
  if (lastSpaceIndex === -1) return text;
  return trimmed.slice(0, lastSpaceIndex) + "\u00A0" + trimmed.slice(lastSpaceIndex + 1);
}

export function StrategyByBusinessGoal() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-black py-[30px] sm:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-[1200px] xl:max-w-[1300px]  mx-auto relative z-10">

        {/* Header Section */}
        <FadeUp delay={0.1}>
          <div className="mb-6 sm:mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <h2 className="text-white flex flex-row flex-wrap items-baseline gap-x-2 sm:gap-x-4 m-0 p-0">
              <span
                style={{
                  fontWeight: 500,
                  fontSize: 'clamp(32px, 4vw, 56px)',
                  lineHeight: 'clamp(30px, 5vw, 70px)',
                  letterSpacing: '-3px',
                  textTransform: 'lowercase'
                }}
              >
                strategy for every
              </span>
              <span
                className="sm:-mt-[5px]"
                style={{
                  color: '#FF5500',
                  fontFamily: "'Times New Roman', Times, serif",
                  fontWeight: 400,
                  fontStyle: 'italic',
                  fontSize: 'clamp(42px, 5vw, 72px)',
                  lineHeight: 'clamp(50px, 5vw, 70px)',
                  letterSpacing: '-3px',
                  textTransform: 'lowercase'
                }}
              >
                business goal
              </span>
            </h2>
          </div>
        </FadeUp>

        {/* Grid Section - 2x per row on mobile, 4x on large screens */}
        <Stagger staggerDelay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[2px] bg-black border-[2px] border-black">
            {GOALS.map((goal) => {
              const isActive = activeId === goal.id;
              return (
                <StaggerItem key={goal.id} className="w-full">
                  <div
                    className="group relative overflow-hidden bg-[#111] cursor-pointer w-full"
                    style={{ aspectRatio: '318.66 / 383.96' }}
                    onClick={() => setActiveId(isActive ? null : goal.id)}
                  >
                    {/* Background Image */}
                    <Image
                      src={goal.image}
                      alt={goal.title}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className={`object-cover transition-transform duration-700 lg:group-hover:scale-105 ${isActive ? 'scale-105' : ''}`}
                    />

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 lg:group-hover:opacity-100 ${isActive ? 'opacity-100' : 'opacity-80'}`} />

                    {/* Content Container */}
                    <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 flex flex-col justify-end h-full pointer-events-none">
                      <div className={`mt-auto transform transition-transform duration-300 lg:group-hover:-translate-y-2 ${isActive ? '-translate-y-2' : ''}`}>
                        <h3
                          className="text-white font-bold text-[15px] sm:text-[21px] leading-[120%] whitespace-nowrap [text-wrap:pretty]"
                        >
                          {preventOrphan(goal.title)}
                        </h3>

                        <div className={`grid transition-all duration-300 ease-in-out mt-1.5 sm:mt-2 lg:group-hover:grid-rows-[1fr] lg:group-hover:opacity-100 ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                          <div className="overflow-hidden">
                            <p
                              className="text-[#FFFFFFB3] font-normal text-[12px] sm:text-[14px] leading-[140%] sm:leading-[150%] [text-wrap:pretty]"
                            >
                              {preventOrphan(goal.description)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </Stagger>

      </div>
    </section>
  );
}
