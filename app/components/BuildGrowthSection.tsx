"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function BuildGrowthSection() {
  const [activeTab, setActiveTab] = useState<"performance" | "creative">("performance");

  useEffect(() => {
    const handleSwitchTab = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail === "performance" || customEvent.detail === "creative") {
        setActiveTab(customEvent.detail);
      }
    };
    window.addEventListener("switchTab", handleSwitchTab);
    return () => window.removeEventListener("switchTab", handleSwitchTab);
  }, []);

  return (
    <section id="build-growth" className="bg-black text-white py-[60px] sm:py-[100px] flex flex-col items-center overflow-hidden">
      <div className="text-center px-4 max-w-[1150px] mx-auto w-full">
        {/* HOW WE BUILD GROWTH */}
        <p className="font-[var(--font-be-vietnam)] font-medium text-[10px] sm:text-[12px] leading-none tracking-[2.64px] uppercase text-[#F4F2EE8F] mb-4 sm:mb-8">
          How we build growth
        </p>

        {/* HEADINGS */}
        <h2 className="flex flex-col items-center gap-1 sm:gap-2">
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            <span className="timesFontFamily italic font-normal text-[40px] sm:text-[72px] leading-[1.1] sm:leading-[64.51px] tracking-[-1.15px] lowercase text-[#FF5500]">
              performance
            </span>
            <span className="font-[var(--font-be-vietnam)] font-medium text-[30px] sm:text-[56px] leading-[1.1] sm:leading-[64.51px] tracking-[-1.15px] lowercase">
              and
            </span>
            <span className="timesFontFamily italic font-normal text-[40px] sm:text-[72px] leading-[1.1] sm:leading-[64.51px] tracking-[-1.15px] lowercase text-[#FF5500]">
              creative
            </span>
          </div>
          <div className="font-[var(--font-be-vietnam)] font-medium text-[30px] sm:text-[56px] leading-[1.1] sm:leading-[64.51px] tracking-[-1.15px] lowercase">
            one system, two disciplines
          </div>
        </h2>

        {/* DESCRIPTION */}
        <p className="font-[var(--font-be-vietnam)] font-light text-[14px] sm:text-[16.8px] leading-[1.6] sm:leading-[26.88px] text-[#F4F2EE8F] mt-6 sm:mt-8 max-w-[450px] mx-auto">
          Every engagement blends both. Choose a discipline
          <br className="hidden sm:block" /> below to see how we approach it on its own.
        </p>
      </div>

      {/* IMAGE */}
      <div className="relative w-full max-w-[1150px] aspect-[1000/600] mt-10 sm:mt-0 px-4">
        <Image
          src="/assets/creativeSection2.png"
          alt="Performance and Creative overlap"
          fill
          className="object-contain mix-blend-screen brightness-95 contrast-110 pr-6"
          style={{
            WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 60%, transparent 100%)",
            maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 60%, transparent 100%)",
          }}
          sizes="(max-width: 1024px) 100vw, 1000px"
          priority
        />
      </div>

      {/* TOGGLES */}
      <div id="services-grid" className="mt-8 sm:mt-4 flex items-center justify-center p-1.5 rounded-full bg-[#111111] border border-white/5 scroll-mt-24">
        <button
          onClick={() => setActiveTab("performance")}
          className={`flex items-center gap-3 px-5 sm:px-8 py-3 sm:py-3.5 rounded-full transition-colors duration-300 ${activeTab === "performance" ? "bg-[#FF5500]" : "bg-transparent hover:bg-white/5"
            }`}
        >
          <span className={`font-semibold text-[10px] leading-none uppercase tracking-[2px] transition-colors duration-300 ${activeTab === "performance" ? "text-white" : "text-[#FFFFFFB2]"
            }`}>
            01
          </span>
          <span className={`font-medium text-[13px] sm:text-[15px] leading-none tracking-[-0.38px] transition-colors duration-300 ${activeTab === "performance" ? "text-white" : "text-[#FFFFFFB2]"
            }`}>
            Performance
          </span>
        </button>

        <button
          onClick={() => setActiveTab("creative")}
          className={`flex items-center gap-3 px-5 sm:px-8 py-3 sm:py-3.5 rounded-full transition-colors duration-300 ${activeTab === "creative" ? "bg-[#FF5500]" : "bg-transparent hover:bg-white/5"
            }`}
        >
          <span className={`font-semibold text-[10px] leading-none uppercase tracking-[2px] transition-colors duration-300 ${activeTab === "creative" ? "text-white" : "text-[#FFFFFFB2]"
            }`}>
            02
          </span>
          <span className={`font-medium text-[13px] sm:text-[15px] leading-none tracking-[-0.38px] transition-colors duration-300 ${activeTab === "creative" ? "text-white" : "text-[#FFFFFFB2]"
            }`}>
            Creative
          </span>
        </button>
      </div>

      {/* TAB CONTENTS WITH BEHTREEN ANIMATION */}
      <div className="relative w-full max-w-[1250px] mx-auto mt-16 sm:mt-24 px-4 pb-20 grid grid-cols-1 grid-rows-1">
        
        {/* PERFORMANCE TAB CONTENT */}
        <div 
          className={`col-start-1 row-start-1 transition-all duration-700 ease-out w-full flex flex-col xl:items-end ${
            activeTab === "performance" 
              ? "opacity-100 translate-y-0 pointer-events-auto scale-100 blur-none" 
              : "opacity-0 translate-y-8 pointer-events-none scale-[0.98] blur-[2px]"
          }`}
        >
          {/* Left Circle & Content */}
          <div className="xl:absolute xl:left-0 xl:top-0 relative w-full max-w-[400px] sm:max-w-[750px] aspect-square flex flex-col items-center xl:items-start justify-center xl:justify-start xl:pt-16 shrink-0 z-0 mx-auto xl:mx-0">
            <div className="absolute inset-0 z-0 pointer-events-none -left-[10%] xl:-left-[25%] scale-[1.2]">
              <Image
                src="/assets/performanceCircle2.png"
                alt="Performance Circle"
                fill
                className="object-contain mix-blend-screen object-center"
                style={{
                  WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 40%, transparent 70%)",
                  maskImage: "radial-gradient(circle at 50% 50%, black 40%, transparent 70%)",
                }}
                sizes="(max-width: 1280px) 100vw, 600px"
              />
            </div>
            <div className="relative z-10 flex flex-col items-center xl:items-start gap-2 pl-0 xl:pl-4 text-center xl:text-left mt-10 xl:mt-0 pt-50">
              <h3 className="font-[var(--font-be-vietnam)] font-semibold text-[32px] leading-none text-white capitalize">
                Performance
              </h3>
              <p className="font-[var(--font-be-vietnam)] font-normal text-[16px] leading-none text-white mt-1">
                Measurable growth
              </p>
              <div 
                onClick={() => setActiveTab("creative")}
                className="mt-4 bg-white text-black font-[var(--font-be-vietnam)] font-medium text-xs leading-[21.43px] tracking-[-0.38px] px-6 py-2.5 rounded-full hover:bg-gray-200 transition-colors cursor-pointer inline-flex items-center justify-center"
              >
                Explore Creative services
              </div>
            </div>
          </div>

          {/* Right Grid of Cards */}
          <div className="flex flex-col gap-4 sm:gap-6 w-full xl:w-auto relative z-10 mt-10 xl:mt-0 items-center xl:items-end">
            {/* Top Row (Cards 1, 2) */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center xl:justify-end w-full">
              {[
                { id: "01", title: "Marketing Strategy", desc: "Turning business goals into clear marketing plans.", link: "Explore Strategy", href: "#marketing-strategy" },
                { id: "02", title: "Paid Social", desc: "Creative campaigns designed to generate measurable results", link: "Explore Paid Social", href: "#meta-ads" }
              ].map((card) => (
                <div key={card.id} className="group relative flex flex-col justify-between w-full sm:w-[268px] h-[332px] bg-[#0c0c0c] border border-white/5 rounded-2xl px-4 py-6 hover:bg-[#FF5500] transition-colors duration-300 cursor-pointer overflow-hidden shrink-0">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="font-[var(--font-be-vietnam)] font-light text-[40px] leading-[40px] text-white">{card.id}</span>
                      <div className="w-5 h-5 border-t-[1.5px] border-r-[1.5px] border-[#FF5500] group-hover:border-white transition-colors duration-300 mt-2" />
                    </div>
                    <h4 className="font-[var(--font-be-vietnam)] font-medium text-[24px] leading-[29.4px] tracking-[-0.7px] text-white pr-4 whitespace-nowrap">{card.title}</h4>
                    <p className="font-[var(--font-be-vietnam)] font-light text-[16px] leading-[24.38px] text-[#A3A3A3] group-hover:text-white/90 mt-4">{card.desc}</p>
                  </div>
                  <div className="mt-auto pt-6 flex items-center">
                    <a href={card.href} className="flex items-center gap-1.5 bg-[#FF5500] group-hover:bg-white text-white group-hover:text-black font-[var(--font-be-vietnam)] font-medium text-xs leading-[20px] px-5 py-2.5 rounded-full transition-colors duration-300 cursor-pointer">
                      {card.link}
                      <span className="text-[14px] leading-none mb-[1px] ml-1">&gt;</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            {/* Bottom Row (Cards 3, 4, 5) */}
            <div className="flex flex-col sm:flex-row flex-wrap xl:flex-nowrap gap-4 sm:gap-6 justify-center xl:justify-end w-full mt-2 sm:mt-0">
              {[
                { id: "03", title: "Paid Search", desc: "Reaching customers when they're ready to take action.", link: "Explore Paid Search", href: "#paid-search" },
                { id: "04", title: "Email Marketing", desc: "Automated journeys that strengthen customer relationships.", link: "Explore Email Marketing", href: "#email-marketing" },
                { id: "05", title: "WhatsApp & SMS", desc: "Direct communication that keeps your audience connected.", link: "Explore WhatsApp & SMS", href: "#whatsapp-sms" }
              ].map((card) => (
                <div key={card.id} className="group relative flex flex-col justify-between w-full sm:w-[268px] h-[332px] bg-[#0c0c0c] border border-white/5 rounded-2xl px-4 py-6 hover:bg-[#FF5500] transition-colors duration-300 cursor-pointer overflow-hidden shrink-0">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="font-[var(--font-be-vietnam)] font-light text-[40px] leading-[40px] text-white">{card.id}</span>
                      <div className="w-5 h-5 border-t-[1.5px] border-r-[1.5px] border-[#FF5500] group-hover:border-white transition-colors duration-300 mt-2" />
                    </div>
                    <h4 className="font-[var(--font-be-vietnam)] font-medium text-[24px] leading-[29.4px] tracking-[-0.7px] text-white pr-4">{card.title}</h4>
                    <p className="font-[var(--font-be-vietnam)] font-light text-[16px] leading-[24.38px] text-[#A3A3A3] group-hover:text-white/90 mt-4">{card.desc}</p>
                  </div>
                  <div className="mt-auto pt-6 flex items-center">
                    <a href={card.href} className="flex items-center gap-1.5 bg-[#FF5500] group-hover:bg-white text-white group-hover:text-black font-[var(--font-be-vietnam)] font-medium text-xs leading-[20px] px-5 py-2.5 rounded-full transition-colors duration-300 whitespace-nowrap cursor-pointer">
                      {card.link}
                      <span className="text-[14px] leading-none mb-[1px] ml-1">&gt;</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CREATIVE TAB CONTENT */}
        <div 
          className={`col-start-1 row-start-1 transition-all duration-700 ease-out w-full flex flex-col xl:items-end ${
            activeTab === "creative" 
              ? "opacity-100 translate-y-0 pointer-events-auto scale-100 blur-none" 
              : "opacity-0 translate-y-8 pointer-events-none scale-[0.98] blur-[2px]"
          }`}
        >
          {/* Left Circle & Content */}
          <div className="xl:absolute xl:left-0 xl:top-0 relative w-full max-w-[400px] sm:max-w-[650px] aspect-square flex flex-col items-center xl:items-start justify-center xl:justify-start xl:pt-16 shrink-0 z-0 mx-auto xl:mx-0">
            <div className="absolute inset-0 z-0 pointer-events-none -left-[10%] xl:-left-[30%] scale-[1.3]">
              <Image 
                src="/assets/creativeCircle.png" 
                alt="Creative Circle" 
                fill 
                className="object-contain mix-blend-screen object-center" 
                style={{
                  WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 40%, transparent 80%)",
                  maskImage: "radial-gradient(circle at 50% 50%, black 40%, transparent 80%)",
                }}
                sizes="(max-width: 1280px) 100vw, 600px"
              />
            </div>
            <div className="relative z-10 flex flex-col items-center xl:items-start gap-2 pl-0 xl:pl-4 text-center xl:text-left mt-10 xl:mt-0 pt-50">
              <h3 className="font-[var(--font-be-vietnam)] font-semibold text-[32px] leading-none text-black capitalize">
                Creative
              </h3>
              <p className="font-[var(--font-be-vietnam)] font-normal text-[16px] leading-none text-black mt-1">
                Brands People remember
              </p>
              <div 
                onClick={() => setActiveTab("performance")}
                className="mt-4 bg-[#FF5500] text-white font-[var(--font-be-vietnam)] font-medium text-xs leading-[21.43px] tracking-[-0.38px] px-6 py-2.5 rounded-full hover:bg-[#ff5500]/80 transition-colors cursor-pointer inline-flex items-center justify-center"
              >
                Explore Performance services
              </div>
            </div>
          </div>

          {/* Right Grid of Cards */}
          <div className="flex flex-col gap-4 sm:gap-6 w-full xl:w-auto relative z-10 mt-10 xl:mt-0 items-center xl:items-end">
            {/* Top Row (Cards 1, 2) */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center xl:justify-end w-full">
              {[
                { id: "01", title: "Social Media", desc: "Consistent content that keeps your brand visible.", link: "Explore Social Media", href: "#social-media" },
                { id: "02", title: "Content Creation", desc: "Creative designed to engage, inspire and perform.", link: "Explore Content Creation", href: "#content-creation" }
              ].map((card) => (
                <div key={card.id} className="group relative flex flex-col justify-between w-full sm:w-[268px] h-[332px] bg-[#0c0c0c] border border-white/5 rounded-2xl px-4 py-6 hover:bg-[#FF5500] transition-colors duration-300 cursor-pointer overflow-hidden shrink-0">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="font-[var(--font-be-vietnam)] font-light text-[40px] leading-[40px] text-white">{card.id}</span>
                      <div className="w-5 h-5 border-t-[1.5px] border-r-[1.5px] border-[#FF5500] group-hover:border-white transition-colors duration-300 mt-2" />
                    </div>
                    <h4 className="font-[var(--font-be-vietnam)] font-medium text-[24px] leading-[29.4px] tracking-[-0.7px] text-white pr-4 whitespace-nowrap">{card.title}</h4>
                    <p className="font-[var(--font-be-vietnam)] font-light text-[16px] leading-[24.38px] text-[#A3A3A3] group-hover:text-white/90 mt-4">{card.desc}</p>
                  </div>
                  <div className="mt-auto pt-6 flex items-center">
                    <a href={card.href} className="flex items-center gap-1.5 bg-[#FF5500] group-hover:bg-white text-white group-hover:text-black font-[var(--font-be-vietnam)] font-medium text-xs leading-[20px] px-5 py-2.5 rounded-full transition-colors duration-300 cursor-pointer">
                      {card.link}
                      <span className="text-[14px] leading-none mb-[1px] ml-1">&gt;</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            {/* Bottom Row (Cards 3, 4, 5) */}
            <div className="flex flex-col sm:flex-row flex-wrap xl:flex-nowrap gap-4 sm:gap-6 justify-center xl:justify-end w-full mt-2 sm:mt-0">
              {[
                { id: "03", title: "Website Design", desc: "Websites designed to convert visitors into customers.", link: "Explore Website Design", href: "#web-design-development" },
                { id: "04", title: "Website Development", desc: "Full responsive custom coded website", link: "Explore Development", href: "#web-design-development" },
                { id: "05", title: "Branding & Graphics", desc: "Visual identities that create recognition and consistency.", link: "Explore Branding", href: "#branding-graphics" }
              ].map((card) => (
                <div key={card.id} className="group relative flex flex-col justify-between w-full sm:w-[268px] h-[332px] bg-[#0c0c0c] border border-white/5 rounded-2xl px-4 py-6 hover:bg-[#FF5500] transition-colors duration-300 cursor-pointer overflow-hidden shrink-0">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="font-[var(--font-be-vietnam)] font-light text-[40px] leading-[40px] text-white">{card.id}</span>
                      <div className="w-5 h-5 border-t-[1.5px] border-r-[1.5px] border-[#FF5500] group-hover:border-white transition-colors duration-300 mt-2" />
                    </div>
                    <h4 className="font-[var(--font-be-vietnam)] font-medium text-[24px] leading-[29.4px] tracking-[-0.7px] text-white pr-4 whitespace-nowrap">{card.title}</h4>
                    <p className="font-[var(--font-be-vietnam)] font-light text-[16px] leading-[24.38px] text-[#A3A3A3] group-hover:text-white/90 mt-4">{card.desc}</p>
                  </div>
                  <div className="mt-auto pt-6 flex items-center">
                    <a href={card.href} className="flex items-center gap-1.5 bg-[#FF5500] group-hover:bg-white text-white group-hover:text-black font-[var(--font-be-vietnam)] font-medium text-xs leading-[20px] px-5 py-2.5 rounded-full transition-colors duration-300 whitespace-nowrap cursor-pointer">
                      {card.link}
                      <span className="text-[14px] leading-none mb-[1px] ml-1">&gt;</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
