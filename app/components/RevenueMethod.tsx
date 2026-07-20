"use client";

import React, { useState } from "react";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

const CARDS_DATA = [
  {
    id: '01',
    title: 'Email Strategy',
    description: 'Every successful campaign starts with a clear strategy. We build a tailored email plan around your goals, customer journey and opportunities for growth.',
    bgImage: '/assets/method1.png',
  },
  {
    id: '02',
    title: 'KPIs & Performance',
    description: 'We track every metric meticulously, ensuring your campaigns are continuously optimized for open rates, click-throughs, and conversions.',
    bgImage: '/assets/method2.png',
  },
  {
    id: '03',
    title: 'Email Design',
    description: 'Beautiful, responsive designs tailored to your brand identity. We craft visually stunning, conversion-focused emails that captivate your audience.',
    bgImage: '/assets/method3.png',
  },
  {
    id: '04',
    title: 'Customer Segmentation',
    description: 'Delivering the right message to the right person. We break down your database to hyper-target and maximize your ROI.',
    bgImage: '/assets/method4.png',
  },
];

export function RevenueMethod() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <div className="w-full bg-black text-white py-[50px] sm:py-20 px-4 min-[375px]:px-6 min-h-screen flex flex-col justify-center items-center font-sans">
      <Stagger staggerDelay={0.15} className="max-w-[1150px] w-full">

        {/* Header Section */}
        {/* Heading */}
        <StaggerItem>
          <h2 className="lowercase text-white text-[28px] min-[375px]:text-[32px] font-medium leading-[1.15] tracking-[-3%] sm:text-[56px] sm:leading-[70px] mb-[40px] sm:mb-16">
            method to convert email database to <br />
            
            <span
              className="italic text-[#ff5500] font-normal text-[40px] sm:text-[72px] leading-[1.1] sm:leading-[70px] tracking-[-3%]"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              high performing revenue
            </span>
          </h2>
        </StaggerItem>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] sm:gap-6 justify-center items-center">
          {CARDS_DATA.map((card) => {
            const isActive = activeCard === card.id;
            return (
              <StaggerItem key={card.id}>
                <div
                  onClick={() => setActiveCard(isActive ? null : card.id)}
                  style={{
                    backgroundImage: `url(${card.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                  className={`group relative rounded-[28px] overflow-hidden p-6 flex flex-col justify-between cursor-pointer transition-all duration-500 ease-out w-full h-[360px] sm:h-[606.93px]`}
                >
                  {/* Card Number */}
                  <div
                    className="text-[9.82px] font-medium leading-[14.73px] tracking-[2.95px] text-white opacity-80 align-middle"
                  >
                    {card.id}
                  </div>

                  {/* Bottom Content Group (Animates Up on Hover or Tap) */}
                  <div className={`transform transition-transform duration-500 ease-out will-change-transform ${isActive ? 'translate-y-0' : 'translate-y-[80px] sm:group-hover:translate-y-0'}`}>

                    {/* Title */}
                    <h3
                      className="text-[18px] sm:text-[22.64px] font-normal leading-[1.3] sm:leading-[26.78px] tracking-[0%] text-white align-middle mb-[8px] sm:mb-3"
                    >
                      {card.title}
                    </h3>

                    {/* Description (Fades and slides in cleanly) */}
                    <p
                      className={`text-[14px] sm:text-[15.5px] font-normal leading-[1.4] sm:leading-[18.86px] tracking-[0%] text-white/90 align-middle transition-opacity duration-500 delay-75 ease-out ${isActive ? 'opacity-100' : 'opacity-0 sm:group-hover:opacity-100'}`}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </div>

      </Stagger>
    </div>
  );
}
