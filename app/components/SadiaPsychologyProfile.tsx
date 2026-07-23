import Image from "next/image";
import FadeRight from "./FadeRight";
import FadeLeft from "./FadeLeft";

export function SadiaPsychologyProfile() {
  return (
    <section className="bg-white py-10 sm:py-20 text-black overflow-hidden font-[var(--font-inter)]">
      <div className="w-full max-w-[1150px] px-4 mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12">
        
        {/* Mobile Title */}
        <div className="flex flex-col w-full lg:hidden text-left mb-[-16px]">
          <span className="font-semibold text-black mb-4 uppercase text-[12px] sm:text-[14px] leading-[1.5] sm:leading-[21px] tracking-[2.52px]">
            Talent Management
          </span>
          <h2 className="font-bold text-black text-[36px] sm:text-[44px] leading-[1.1] sm:leading-[60px] tracking-[-0.9px]">
            Sadia <br className="hidden sm:block" /> Psychology
          </h2>
        </div>
        {/* Left Column (Image) */}
        <FadeLeft className="flex-1 w-full flex justify-start">
          <div className="relative overflow-hidden rounded-[24px] w-full max-w-[440px] lg:w-[440px] h-[400px] sm:h-[500px] lg:h-[660px] mx-auto lg:mx-0 shrink-0">
            <Image 
              src="/assets/psycho.png"
              alt="Sadia Psychology"
              fill
              className="object-cover object-center"
            />
          </div>
        </FadeLeft>

        {/* Right Column (Text & Stats) */}
        <FadeRight>
          <div className="flex flex-col w-full lg:max-w-[500px]">
          
          <span 
            className="hidden lg:block font-semibold text-black mb-6 uppercase text-[12px] sm:text-[14px] leading-[1.5] sm:leading-[21px] tracking-[2.52px]"
          >
            Talent Management
          </span>
          
          <h2 
            className="hidden lg:block font-bold text-black mb-8 sm:mb-10 text-[36px] sm:text-[44px] leading-[1.1] sm:leading-[60px] tracking-[-0.9px]"
          >
            Sadia{" "}
            <br className="hidden sm:block" />
            Psychology
          </h2>

          {/* Stats Grid */}
          <div className="flex items-start justify-between sm:justify-start gap-4 sm:gap-14 mb-8 sm:mb-10 w-full">
            {/* YouTube */}
            <div className="flex flex-col">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3 text-black">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white" stroke="white"></polygon>
              </svg>
              <span className="font-semibold text-black text-[12px] sm:text-[14px] leading-[1.5] sm:leading-[21px]">YouTube</span>
              <span className="font-bold text-black mt-1 text-[24px] sm:text-[32px] leading-[1.2] sm:leading-[48px] tracking-[-0.64px]">2.8M</span>
              <span className="font-normal text-[#666666] text-[12px] sm:text-[14px] leading-[1.5] sm:leading-[21px]">Subscribers</span>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-[100px] sm:h-[120px] bg-black/80"></div>

            {/* Instagram */}
            <div className="flex flex-col">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3 text-black">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span className="font-semibold text-black text-[12px] sm:text-[14px] leading-[1.5] sm:leading-[21px]">Instagram</span>
              <span className="font-bold text-black mt-1 text-[24px] sm:text-[32px] leading-[1.2] sm:leading-[48px] tracking-[-0.64px]">1.7M</span>
              <span className="font-normal text-[#666666] text-[12px] sm:text-[14px] leading-[1.5] sm:leading-[21px]">Followers</span>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-[100px] sm:h-[120px] bg-black/80"></div>

            {/* TikTok */}
            <div className="flex flex-col">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3 text-black">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
              </svg>
              <span className="font-semibold text-black text-[12px] sm:text-[14px] leading-[1.5] sm:leading-[21px]">TikTok</span>
              <span className="font-bold text-black mt-1 text-[24px] sm:text-[32px] leading-[1.2] sm:leading-[48px] tracking-[-0.64px]">5.2M</span>
              <span className="font-normal text-[#666666] text-[12px] sm:text-[14px] leading-[1.5] sm:leading-[21px]">Followers</span>
            </div>
          </div>

          <p 
            className="font-normal text-[#333333] mb-8 sm:mb-10 max-w-[600px] text-[13px] sm:text-[18px] leading-[1.6] sm:leading-[32.4px]"
          >
            Sadia Psychology is a content creator and educator with a global audience of more than 800K+ Instagram & YouTube followers. USS partnered with Sadia to develop, launch and market her 2024 planner, turning her content into a physical product that resonated with her audience and sold out during the Black Friday campaign.
          </p>

          <button 
            className="font-normal flex items-center justify-center gap-2 border border-black rounded-full px-8 py-3 w-fit hover:bg-black hover:text-white transition-colors text-[14px] sm:text-[15px] leading-[1.5] sm:leading-[22.5px]"
          >
            See More
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          </div>
        </FadeRight>

      </div>
    </section>
  );
}
