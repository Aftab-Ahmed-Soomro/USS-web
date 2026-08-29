"use client";

import React, { useState } from "react";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

export interface TeamMember {
  id: string;
  title: string;
  description: string;
  responsibilities?: string[];
  details?: { label: string; value: string }[];
}

export interface TeamAccordionProps {
  heading?: React.ReactNode;
  data?: TeamMember[];
}

const defaultTeamData: TeamMember[] = [
  {
    id: "01",
    title: "Website Strategist",
    description: "Defines the website structure, customer journey and conversion strategy before design begins.",
    responsibilities: [
      "Website kick-off session",
      "Website sitemap",
      "User journey experience",
      "Landing page strategy"
    ]
  },
  {
    id: "02",
    title: "UX/UI Designer",
    description: "Designs creative user experiences and premium interfaces that reflect your brand.",
    responsibilities: [
      "Wireframes",
      "UX / UI Design",
      "Figma Designs"
    ]
  },
  {
    id: "03",
    title: "Web Developer",
    description: "Builds fast, responsive websites that are custom coded",
    responsibilities: [
      "Front end Development",
      "CMS Integration",
      "Responsive Development",
      "Performance Optimisation"
    ]
  },
  {
    id: "04",
    title: "QA & Optimisation",
    description: "Tests, refines and optimises every website before launch.",
    responsibilities: [
      "Cross -browser Testing",
      "Speed Optimisation",
      "Quality Assurance"
    ]
  }
];

function preventOrphan(text: string): string {
  if (!text) return text;
  const trimmed = text.trim();
  const lastSpaceIndex = trimmed.lastIndexOf(" ");
  if (lastSpaceIndex === -1) return text;
  return trimmed.slice(0, lastSpaceIndex) + "\u00A0" + trimmed.slice(lastSpaceIndex + 1);
}

export default function TeamAccordion({ heading, data = defaultTeamData }: TeamAccordionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section className="bg-black text-white pt-6 pb-10 lg:pb-24 px-6  w-full flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-[1200px] xl:max-w-[1300px] ">
        <Stagger staggerDelay={0.15}>

          {/* Heading Section */}
          <StaggerItem>
            <div className="sm:mb-12">
              {heading ? (
                heading
              ) : (
                <h2 className="text-[32px] sm:text-[56px] leading-[1] tracking-[-1.5px] sm:tracking-[-3px] font-light lowercase" style={{ fontWeight: 300 }}>

                  every website is built by<br />
                  a team of <span className="relative inline-block z-10 whitespace-nowrap text-[#ff5500] timesFontFamily italic text-[42px] sm:text-[72px]">
                    specialists

                  </span><br />
                  {/* art designers */}
                </h2>
              )}
            </div>
          </StaggerItem>

          {/* Accordion Section */}
          <StaggerItem>
            <div className="flex flex-col w-full border-b border-white/20">
              {data.map((item, index) => {
                const isHovered = hoveredIndex === index;
                return (
                  <div
                    key={item.id}
                    className={`border-t border-white/20 group cursor-pointer transition-all duration-500 hover:bg-white/[0.03] overflow-hidden ${isHovered ? 'py-8 md:py-12' : 'py-5 md:py-8'}`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onClick={() => setHoveredIndex(hoveredIndex === index ? null : index)}
                  >
                    <div className="flex flex-row gap-4 sm:gap-6 lg:gap-24 items-start lg:items-start">

                      {/* Big Number */}
                      <div
                        className={`text-[44px] mt-2 sm:mt-0 sm:text-[80px] lg:text-[216px] leading-[1] lg:leading-[183.6px] tracking-[-3px] lg:tracking-[-8.64px] text-white w-auto lg:w-[250px] shrink-0 font-light transition-all duration-500 ${isHovered ? 'mb-0' : 'mb-[-35px] lg:mb-[-110px]'}`}
                        style={{ fontWeight: 300 }}
                      >
                        {item.id}
                      </div>

                      {/* Right Content Area */}
                      <div className={`flex-1 w-full flex flex-col justify-start transition-all duration-500 ${isHovered ? 'pt-4 lg:pt-12' : 'pt-2 lg:pt-6'}`}>

                        {/* Title and Plus/Minus Icon */}
                        <div className="flex justify-between items-center w-full gap-2">
                          <h3 className={`text-[18px] sm:text-[20px] lg:text-[34px] leading-[1.2] lg:leading-[51px] tracking-[0.68px] uppercase text-white font-normal ${isHovered ? 'mb-0' : 'mb-[-35px] lg:mb-[-110px]'}`}>
                            {item.title}
                          </h3>

                          {/* Icon */}
                          <div className={`shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${isHovered ? 'border-white text-white mb-0' : 'border-white/20 text-white/50 mb-[-40px] lg:mb-[-110px]'}`}>
                            <span className="text-xl lg:text-2xl font-light leading-none mb-1">{isHovered ? '-' : '+'}</span>
                          </div>
                        </div>

                        {/* Expandable Details */}
                        <div
                          className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isHovered ? 'grid-rows-[1fr] opacity-100 mt-4 lg:mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
                        >
                          <div className="overflow-hidden">
                            <div className="max-w-[550px] text-[13.5px] sm:text-[17px] leading-[20px] sm:leading-[26px]">
                              <p style={{
                                fontWeight: 400,
                              }} className=" text-[#a3a3a3] mb-4 [text-wrap:pretty]">
                                {preventOrphan(item.description)}
                              </p>

                              {item.responsibilities && item.responsibilities.length > 0 && (
                                <div className="mb-4">
                                  <p className="text-[13px] font-medium text-white mb-2">
                                    Responsibilities
                                  </p>
                                  <ul className="flex flex-col gap-1 text-[#a3a3a3] text-[13px] leading-[22.1px] font-light">
                                    {item.responsibilities.map((resp, i) => (
                                      <li key={i} className="flex items-center gap-2">
                                        <span className="text-[#ff5500]">•</span>
                                        <span>{resp}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {item.details && (
                                <ul className="flex flex-col gap-1 text-white/90 text-[13px] leading-[22.1px] font-light">
                                  {item.details.map(detail => (
                                    <li key={detail.label}>
                                      <span className="text-[#a3a3a3]">{detail.label}:</span> {detail.value}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </StaggerItem>

        </Stagger>
      </div>
    </section>
  );
}
