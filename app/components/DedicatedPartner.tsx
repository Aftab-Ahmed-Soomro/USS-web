"use client";

import React from "react";
import Link from "next/link";

export default function DedicatedPartner() {
  const stats = [
    { number: "120+", label: "Websites Designed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "1.2M+", label: "Website Visitors Generated" },
    { number: "15+", label: "Industries Served" },
  ];

  return (
    <section className="bg-[#000] text-white pt-4 pb-12 sm:pt-0 py-0 lg:pb-24 px-6 w-full flex flex-col items-center">
      <div className="w-full max-w-[1150px]">
        
        {/* Top Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 mb-14">
          
          {/* Left: Heading */}
          <div className="lg:col-span-8">
            <h2 className="whitespace-normal lg:whitespace-nowrap font-normal text-[28px] leading-[36px] sm:text-[36px] sm:leading-[44px] tracking-[-1px] lg:text-[50px] lg:leading-[65px] lg:tracking-[-1.52px] align-middle">
              your website is the <br className="hidden md:block" /> 
              foundation of your <br className="hidden md:block" /> 
              digital presence.
            </h2>
          </div>

          {/* Right: Paragraph & Button */}
          <div className="lg:col-span-4 flex flex-col items-start mt-0 sm:mt-8 lg:mt-5 ml-0 lg:-ml-26">
            <p className="font-normal text-[13px] sm:text-[15px] leading-[24.38px] align-middle text-[#a3a3a3] mb-6 max-w-[500px]">
              Your website is where every customer journey begins. It's the place your marketing, advertising and social media lead back to, making it one of the most important assets your business will ever invest in.
            </p>
            
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3.5 transition duration-300 hover:bg-white hover:text-black group"
            >
              <span className="uppercase text-[12px] sm:text-[13px] font-bold leading-[20px] align-middle">
                Book a Consultation
              </span>
              {/* <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span> */}
            </Link>
          </div>
        </div>

        {/* Bottom: Stats */}
        <div className="flex justify-between gap-2 sm:gap-12 md:gap-0 w-full mt-24">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-start">
              <span className="font-medium text-[24px] min-[375px]:text-[28px] leading-[1.1] sm:text-[48px] sm:leading-[48px] lg:text-[80px] lg:leading-[88px] tracking-[-0.5px] lg:tracking-[-1.76px] mb-1.5 sm:mb-2 lg:mb-4">
                {stat.number}
              </span>
              <span className="font-normal text-[7px] leading-[1.3] lg:text-[13px] lg:leading-[19.5px] tracking-[0.32px] text-[#a3a3a3]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
