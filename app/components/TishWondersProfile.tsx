import Image from "next/image";
import FadeLeft from "./FadeLeft";
import FadeRight from "./FadeRight";

export function TishWondersProfile() {
  return (
    <section className="bg-black py-6 sm:py-20 text-white overflow-hidden font-[var(--font-inter)]">
      <div className="w-full max-w-[1150px] px-6 mx-auto flex flex-col lg:flex-row-reverse justify-between items-center lg:items-start gap-12 lg:gap-16">
        
        {/* Mobile Title */}
        <div className="flex flex-col w-full lg:hidden text-left mb-[-16px]">
          <span className="font-semibold text-white mb-4 uppercase text-[12px] sm:text-[14px] leading-[1.5] sm:leading-[21px] tracking-[2.52px]">
            OUR RECENT PROJECTS
          </span>
          <h2 className="font-bold text-white text-[36px] sm:text-[44px] leading-[1.1] sm:leading-[60px] tracking-[-0.9px]">
            Tish <br className="hidden sm:block" /> Wonders
          </h2>
        </div>

        {/* Right Column (Image) - Moved up for mobile layout */}
        <FadeRight className="flex-1 w-full flex justify-end">
          <div className="relative overflow-hidden rounded-[24px] w-full max-w-[450px] lg:w-[450px] h-[400px] sm:h-[500px] lg:h-[680px] mx-auto lg:mx-0 shrink-0">
            <Image 
              src="/assets/tisha.jpg"
              alt="Tish Wonders"
              fill
              className="object-cover object-center"
            />
          </div>
        </FadeRight>

        {/* Left Column (Text & Stats) */}
        <FadeLeft>
          <div className="flex flex-col w-full lg:max-w-[650px]  lg:pt-12">
          
          <span 
            className="hidden lg:block font-semibold text-white mb-6 uppercase text-[12px] sm:text-[14px] leading-[1.5] sm:leading-[21px] tracking-[2.52px]"
          >
            OUR RECENT PROJECTS
          </span>
          
          <h2 
            className="hidden lg:block font-bold text-white mb-8 sm:mb-10 text-[36px] sm:text-[44px] leading-[1.1] sm:leading-[60px] tracking-[-0.9px]"
          >
            Tish{" "}
            <br className="hidden sm:block" />
            Wonders
          </h2>

          {/* Stats Grid */}
          <div className="flex items-start justify-between sm:justify-start gap-4 sm:gap-14 mb-8 sm:mb-10 w-full">
            {/* YouTube */}
            <div className="flex flex-col">
              <img className="w-5 h-5 mb-3" src="/assets/youIcon.png" alt="" />
              <span className="font-semibold text-white text-[12px] sm:text-[14px] leading-[1.5] sm:leading-[21px]">YouTube</span>
              <span className="font-bold text-white mt-1 text-[24px] sm:text-[32px] leading-[1.2] sm:leading-[48px] tracking-[-0.64px]">545K</span>
              <span className="font-normal text-[#A0A0A0] text-[12px] sm:text-[14px] leading-[1.5] sm:leading-[21px]">Subscribers</span>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-[100px] sm:h-[120px] bg-white/80"></div>

            {/* Instagram */}
            <div className="flex flex-col">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3 text-white">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span className="font-semibold text-white text-[12px] sm:text-[14px] leading-[1.5] sm:leading-[21px]">Instagram</span>
              <span className="font-bold text-white mt-1 text-[24px] sm:text-[32px] leading-[1.2] sm:leading-[48px] tracking-[-0.64px]">119K</span>
              <span className="font-normal text-[#A0A0A0] text-[12px] sm:text-[14px] leading-[1.5] sm:leading-[21px]">Followers</span>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-[100px] sm:h-[120px] bg-white/80"></div>

            {/* TikTok */}
            <div className="flex flex-col">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3 text-white">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
              </svg>
              <span className="font-semibold text-white text-[12px] sm:text-[14px] leading-[1.5] sm:leading-[21px]">TikTok</span>
              <span className="font-bold text-white mt-1 text-[24px] sm:text-[32px] leading-[1.2] sm:leading-[48px] tracking-[-0.64px]">18K</span>
              <span className="font-normal text-[#A0A0A0] text-[12px] sm:text-[14px] leading-[1.5] sm:leading-[21px]">Followers</span>
            </div>
          </div>

          <p 
            className="font-normal text-[#EAEAEA] mb-8 sm:mb-10 max-w-[650px] text-[13px] sm:text-[18px] leading-[1.6] sm:leading-[32.4px]"
          >
Tish Wonders is a food and wellness creator with a highly engaged audience across YouTube, Instagram and TikTok. USS partnered with Tish to develop her Q4 commercial strategy, launch a dedicated website and build a Black Friday campaign designed to turn her audience into customers.
          </p>

          <button 
            className="font-normal flex items-center justify-center gap-2 border border-white rounded-full px-8 py-3 w-fit hover:bg-white hover:text-black transition-colors text-[14px] sm:text-[15px] leading-[1.5] sm:leading-[22.5px]"
          >
            See More
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          </div>
        </FadeLeft>

      </div>
    </section>
  );
}
