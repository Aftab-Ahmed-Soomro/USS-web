import Image from "next/image";
import FadeLeft from "./FadeLeft";
import FadeRight from "./FadeRight";

export function TishWondersProfile() {
  return (
    <section className="bg-black py-20 text-white overflow-hidden font-[var(--font-inter)]">
      <div className="w-full max-w-[1150px] px-4 mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-16">
        
        {/* Left Column (Text & Stats) */}
        <FadeLeft>
          <div className="flex flex-col w-full lg:max-w-[650px] pt-4 lg:pt-12">
          
          <span 
            className="text-white mb-6 uppercase"
            style={{ fontWeight: 600, fontSize: "14px", lineHeight: "21px", letterSpacing: "2.52px" }}
          >
            Talent Management
          </span>
          
          <h2 
            className="text-white mb-10"
            style={{ fontWeight: 700, fontSize: "44px", lineHeight: "60px", letterSpacing: "-0.9px" }}
          >
            Tish
            <br />
            Wonders
          </h2>

          {/* Stats Grid */}
          <div className="flex items-start gap-14 mb-10">
            {/* YouTube */}
            <div className="flex flex-col">
              <img className="w-5 h-5 mb-3" src="/assets/youIcon.png" alt="" />
              <span className="text-white" style={{ fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>YouTube</span>
              <span className="text-white mt-1" style={{ fontWeight: 700, fontSize: "32px", lineHeight: "48px", letterSpacing: "-0.64px" }}>2.8M</span>
              <span className="text-[#A0A0A0]" style={{ fontWeight: 400, fontSize: "14px", lineHeight: "21px" }}>Subscribers</span>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-[120px] bg-white/80"></div>

            {/* Instagram */}
            <div className="flex flex-col">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3 text-white">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span className="text-white" style={{ fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Instagram</span>
              <span className="text-white mt-1" style={{ fontWeight: 700, fontSize: "32px", lineHeight: "48px", letterSpacing: "-0.64px" }}>1.7M</span>
              <span className="text-[#A0A0A0]" style={{ fontWeight: 400, fontSize: "14px", lineHeight: "21px" }}>Followers</span>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-[120px] bg-white/80"></div>

            {/* TikTok */}
            <div className="flex flex-col">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3 text-white">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
              </svg>
              <span className="text-white" style={{ fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>TikTok</span>
              <span className="text-white mt-1" style={{ fontWeight: 700, fontSize: "32px", lineHeight: "48px", letterSpacing: "-0.64px" }}>5.2M</span>
              <span className="text-[#A0A0A0]" style={{ fontWeight: 400, fontSize: "14px", lineHeight: "21px" }}>Followers</span>
            </div>
          </div>

          <p 
            className="text-[#EAEAEA] mb-10 max-w-[650px]"
            style={{ fontWeight: 400, fontSize: "18px", lineHeight: "32.4px" }}
          >
            Tish Wonders is a food and wellness creator sharing healthy recipes 
            and lifestyle content with a global audience. USS partnered with Tish 
            to launch her healthy cooking e-book, supporting the campaign with 
            a dedicated website, email marketing and a Black Friday launch strategy 
            that turned audience engagement into sales.
          </p>

          <button 
            className="flex items-center justify-center gap-2 border border-white rounded-full px-8 py-3 w-fit hover:bg-white hover:text-black transition-colors"
            style={{ fontWeight: 400, fontSize: "15px", lineHeight: "22.5px" }}
          >
            See More
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          </div>
        </FadeLeft>

        {/* Right Column (Image) */}
        <FadeRight className="flex-1 w-full flex justify-end">
          <div className="relative overflow-hidden rounded-[24px]" style={{ width: "450px", height: "680px", maxWidth: "100%" }}>
            <Image 
              src="/assets/tisha.jpg"
              alt="Tish Wonders"
              fill
              className="object-cover object-center"
            />
          </div>
        </FadeRight>

      </div>
    </section>
  );
}
