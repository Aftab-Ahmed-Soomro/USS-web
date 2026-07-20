"use client";

import React, { useState } from "react";

export interface TeamMember {
  id: string;
  title: string;
  description: string;
  details?: { label: string; value: string }[];
}

export interface TeamAccordionProps {
  heading?: React.ReactNode;
  data?: TeamMember[];
}

const defaultTeamData: TeamMember[] = [
  {
    id: "01",
    title: "BRAND DESIGNER",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    details: [
      { label: "Location", value: "Stockholm" },
      { label: "Domenste iouco", value: "notte nome" },
      { label: "Work experience", value: "4+ years" }
    ]
  },
  {
    id: "02",
    title: "MARKETING",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    details: [
      { label: "Location", value: "Stockholm" },
      { label: "Work experience", value: "3+ years" }
    ]
  },
  {
    id: "03",
    title: "VR DESIGNER",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    details: [
      { label: "Location", value: "London" },
      { label: "Work experience", value: "5+ years" }
    ]
  },
  {
    id: "04",
    title: "WEB DEVELOP",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    details: [
      { label: "Location", value: "Dubai" },
      { label: "Work experience", value: "2+ years" }
    ]
  }
];

export default function TeamAccordion({ heading, data = defaultTeamData }: TeamAccordionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section className="bg-black text-white pt-6 pb-16 lg:pb-24 px-4 sm:px-6 md:px-12 lg:px-[100px] w-full flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-[1442px]">
        
        {/* Heading Section */}
        <div className="mb-12">
          {heading ? (
            heading
          ) : (
            <h2 className="text-[32px] sm:text-[36px] md:text-[64px] lg:text-[75px] leading-[1] tracking-[-1px] lg:tracking-[-6px] font-light lowercase" style={{ fontWeight: 300 }}>
              we are the team of<br />
              visual and <span className="relative inline-block z-10 whitespace-nowrap">
                multiverse
                
                {/* Orange Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[90%] bg-[#ff5500]/40 blur-[40px] -z-10 rounded-[100%] pointer-events-none"></div>
                
                {/* Ellipse SVG */}
                <svg 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[110%] h-[150%] pointer-events-none" 
                  viewBox="0 0 400 150" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse cx="200" cy="75" rx="190" ry="40" transform="rotate(-3 200 75)" stroke="#ff5500" strokeOpacity="1.7" strokeWidth="1" />
                </svg>

              </span><br />
              art designers
            </h2>
          )}
        </div>

        {/* Accordion Section */}
        <div className="flex flex-col w-full border-b border-white/20">
          {data.map((item, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div 
                key={item.id} 
                className={`border-t border-white/20 group cursor-pointer transition-all duration-500 hover:bg-white/[0.03] overflow-hidden ${isHovered ? 'py-8 md:py-12' : 'py-5 md:py-8'}`}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <div className="flex flex-row gap-4 sm:gap-6 lg:gap-24 items-start lg:items-start">
                  
                  {/* Big Number */}
                  <div 
                    className={`text-[64px] sm:text-[80px] lg:text-[216px] leading-[1] lg:leading-[183.6px] tracking-[-3px] lg:tracking-[-8.64px] text-white w-auto lg:w-[250px] shrink-0 font-light transition-all duration-500 ${isHovered ? 'mb-0' : 'mb-[-40px] lg:mb-[-110px]'}`} 
                    style={{ fontWeight: 300 }}
                  >
                    {item.id}
                  </div>

                  {/* Right Content Area */}
                  <div className={`flex-1 w-full flex flex-col justify-start transition-all duration-500 ${isHovered ? 'pt-4 lg:pt-12' : 'pt-2 lg:pt-6'}`}>
                    
                    {/* Title and Plus/Minus Icon */}
                    <div className="flex justify-between items-center w-full gap-2">
                      <h3 className={`text-[18px] sm:text-[20px] lg:text-[34px] leading-[1.2] lg:leading-[51px] tracking-[0.68px] uppercase text-white font-normal ${isHovered ? 'mb-0' : 'mb-[-40px] lg:mb-[-110px]'}`}>
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
                        <div className="max-w-[500px]">
                          <p className="text-[13px] leading-[22.1px] font-light text-[#a3a3a3] mb-6">
                            {item.description}
                          </p>
                          
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

      </div>
    </section>
  );
}
