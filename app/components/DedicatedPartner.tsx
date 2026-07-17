"use client";

import React from "react";
import Link from "next/link";

export default function DedicatedPartner() {
  const stats = [
    { number: "146+", label: "Projects Delivered" },
    { number: "92+", label: "Happy Clients" },
    { number: "11+", label: "Industries" },
    { number: "7+", label: "Years Experience" },
  ];

  return (
    <section className="bg-[#000] text-white pb-16 lg:pb-24 px-6 md:px-12 lg:px-[100px] w-full flex flex-col items-center">
      <div className="w-full max-w-[1442px]">
        
        {/* Top Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 mb-20 lg:mb-48">
          
          {/* Left: Heading */}
          <div className="lg:col-span-8">
            <h2 className="whitespace-normal lg:whitespace-nowrap font-normal text-[36px] leading-[44px] tracking-[-1px] lg:text-[56px] lg:leading-[79.8px] lg:tracking-[-1.52px] align-middle">
              As your dedicated partner we<br className="hidden md:block" /> 
              create digital experiences that<br className="hidden md:block" /> 
              drive measurable growth.
            </h2>
          </div>

          {/* Right: Paragraph & Button */}
          <div className="lg:col-span-4 flex flex-col items-start lg:mt-70 mt-4 -ml-26 lg:mt-0">
            <p className="font-normal text-[15px] leading-[24.38px] align-middle text-[#a3a3a3] mb-8 max-w-[500px]">
              We partner with ambitious brands and agencies to design,
              build, and refine digital products that resonate. From
              strategy to launch, every detail is considered — nothing left
              to chance.
            </p>
            
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3.5 transition duration-300 hover:bg-white hover:text-black group"
            >
              <span className="font-medium text-[14px] leading-[20px] align-middle">
                Book a Discovery Call
              </span>
              <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom: Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-start">
              <span className="font-medium text-[56px] leading-[56px] tracking-[-1px] lg:text-[88px] lg:leading-[88px] lg:tracking-[-1.76px] align-middle mb-2 lg:mb-4">
                {stat.number}
              </span>
              <span className="font-normal text-[12px] leading-[18px] lg:text-[13px] lg:leading-[19.5px] tracking-[0.32px] align-middle text-[#a3a3a3]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
