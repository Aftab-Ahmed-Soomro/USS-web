import Image from "next/image";
import FadeRight from "./FadeRight";
import FadeLeft from "./FadeLeft";

export function SadiaPsychologyProfile() {
  return (
    <section className="bg-white py-20 text-black overflow-hidden font-[var(--font-inter)]">
      <div className="w-full max-w-[1150px] px-4 mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12">
        
        {/* Left Column (Image) */}
        <FadeLeft className="flex-1 w-full flex justify-start">
          <div className="relative overflow-hidden rounded-[24px]" style={{ width: "440px", height: "660px", maxWidth: "100%" }}>
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
            className="text-black mb-6 uppercase"
            style={{ fontWeight: 600, fontSize: "14px", lineHeight: "21px", letterSpacing: "2.52px" }}
          >
            Talent Management
          </span>
          
          <h2 
            className="text-black mb-10"
            style={{ fontWeight: 700, fontSize: "44px", lineHeight: "60px", letterSpacing: "-0.9px" }}
          >
            Sadia
            <br />
            Psychology
          </h2>

          {/* Stats Grid */}
          <div className="flex items-start gap-14 mb-10">
            {/* YouTube */}
            <div className="flex flex-col">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3 text-black">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white" stroke="white"></polygon>
              </svg>
              <span className="text-black" style={{ fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>YouTube</span>
              <span className="text-black mt-1" style={{ fontWeight: 700, fontSize: "32px", lineHeight: "48px", letterSpacing: "-0.64px" }}>2.8M</span>
              <span className="text-[#666666]" style={{ fontWeight: 400, fontSize: "14px", lineHeight: "21px" }}>Subscribers</span>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-[120px] bg-black/80"></div>

            {/* Instagram */}
            <div className="flex flex-col">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3 text-black">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span className="text-black" style={{ fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Instagram</span>
              <span className="text-black mt-1" style={{ fontWeight: 700, fontSize: "32px", lineHeight: "48px", letterSpacing: "-0.64px" }}>1.7M</span>
              <span className="text-[#666666]" style={{ fontWeight: 400, fontSize: "14px", lineHeight: "21px" }}>Followers</span>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-[120px] bg-black/80"></div>

            {/* TikTok */}
            <div className="flex flex-col">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3 text-black">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
              </svg>
              <span className="text-black" style={{ fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>TikTok</span>
              <span className="text-black mt-1" style={{ fontWeight: 700, fontSize: "32px", lineHeight: "48px", letterSpacing: "-0.64px" }}>5.2M</span>
              <span className="text-[#666666]" style={{ fontWeight: 400, fontSize: "14px", lineHeight: "21px" }}>Followers</span>
            </div>
          </div>

          <p 
            className="text-[#333333] mb-10 max-w-[600px]"
            style={{ fontWeight: 400, fontSize: "18px", lineHeight: "32.4px" }}
          >
            Sadia Psychology is a content creator and educator with a global audience of more than 800K+ Instagram & YouTube followers. USS partnered with Sadia to develop, launch and market her 2024 planner, turning her content into a physical product that resonated with her audience and sold out during the Black Friday campaign.
          </p>

          <button 
            className="flex items-center justify-center gap-2 border border-black rounded-full px-8 py-3 w-fit hover:bg-black hover:text-white transition-colors"
            style={{ fontWeight: 400, fontSize: "15px", lineHeight: "22.5px" }}
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
