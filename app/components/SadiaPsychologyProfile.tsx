import Link from "next/link";
import Image from "next/image";
import FadeRight from "./FadeRight";
import FadeLeft from "./FadeLeft";
import FadeUp from "./FadeUp";

export function SadiaPsychologyProfile() {
  return (
    <section className="bg-white py-10 sm:py-20 text-black overflow-hidden font-[var(--font-inter)]">
      <div className="w-full max-w-[1150px]  px-6 mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12">

        {/* Mobile Title */}
        <div className="flex flex-col w-full lg:hidden text-left mb-[-16px]">
          <span className="font-semibold text-black mb-4 uppercase text-[12px] sm:text-[14px] leading-[1.5] sm:leading-[21px] tracking-[2.52px]">
            OUR RECENT PROJECTS
          </span>
          <h2 className="font-bold text-black text-[36px] sm:text-[44px] leading-[1.1] sm:leading-[60px] tracking-[-0.9px]">
            Sadia <br className="hidden sm:block" /> Psychology
          </h2>
        </div>
        {/* Left Column (Collage Grid) */}
        <FadeLeft className="w-full lg:w-[540px] shrink-0 h-[480px] sm:h-[580px] lg:h-[650px]">
          <div className="grid grid-cols-5 gap-2.5 sm:gap-4 w-full h-full">
            {/* Left Column (spans 3) */}
            <div className="col-span-3 flex flex-col gap-2.5 sm:gap-4 h-full">
              <FadeUp delay={0.1} className="w-full h-[54%]">
                <div className="relative w-full h-full rounded-[12px] sm:rounded-[20px] overflow-hidden bg-[#f0f0f0]">
                  <Image
                    src="/assets/sadiq.png"
                    alt="Sadia Psychology 1"
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 60vw, 30vw"
                  />
                </div>
              </FadeUp>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-4 w-full h-[43%]">
                <FadeUp delay={0.2} className="w-full h-full">
                  <div className="relative w-full h-full rounded-[12px] sm:rounded-[20px] overflow-hidden bg-[#f0f0f0]">
                    <Image
                      src="/assets/sadiaOverview/1.png"
                      alt="Sadia Psychology 2"
                      fill
                      className="object-cover object-center hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 30vw, 15vw"
                    />
                  </div>
                </FadeUp>
                <FadeUp delay={0.3} className="w-full h-full">
                  <div className="relative w-full h-full rounded-[12px] sm:rounded-[20px] overflow-hidden bg-[#f0f0f0]">
                    <Image
                      src="/assets/sadiaOverview/2.png"
                      alt="Sadia Psychology 3"
                      fill
                      className="object-cover object-center hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 30vw, 15vw"
                    />
                  </div>
                </FadeUp>
              </div>
            </div>

            {/* Right Column (spans 2) */}
            <div className="col-span-2 flex flex-col gap-2.5 sm:gap-4 h-full">
              <FadeUp delay={0.15} className="w-full h-[36%]">
                <div className="relative w-full h-full rounded-[12px] sm:rounded-[20px] overflow-hidden bg-[#f0f0f0]">
                  <Image
                    src="/assets/sadiaOverview/3.png"
                    alt="Sadia Psychology 4"
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 40vw, 20vw"
                  />
                </div>
              </FadeUp>
              <FadeUp delay={0.35} className="w-full h-[61%]">
                <div className="relative w-full h-full rounded-[12px] sm:rounded-[20px] overflow-hidden bg-[#f0f0f0]">
                  <Image
                    src="/assets/sadiq2.jpeg"
                    alt="Sadia Psychology 5"
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 40vw, 20vw"
                  />
                </div>
              </FadeUp>
            </div>
          </div>
        </FadeLeft>

        {/* Right Column (Text & Stats) */}
        <FadeRight className="flex-1 w-full max-w-[550px]">
          <div className="flex flex-col w-full lg:pt-0">

            <span
              className="hidden lg:block font-semibold text-black mb-6 uppercase text-[12px] sm:text-[14px] leading-[1.5] sm:leading-[21px] tracking-[2.52px]"
            >
              OUR RECENT PROJECTS
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
                <span className="font-bold text-black mt-1 text-[24px] sm:text-[32px] leading-[1.2] sm:leading-[48px] tracking-[-0.64px]">857K</span>
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
                <span className="font-bold text-black mt-1 text-[24px] sm:text-[32px] leading-[1.2] sm:leading-[48px] tracking-[-0.64px]">738K</span>
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
                <span className="font-bold text-black mt-1 text-[24px] sm:text-[32px] leading-[1.2] sm:leading-[48px] tracking-[-0.64px]">820K</span>
                <span className="font-normal text-[#666666] text-[12px] sm:text-[14px] leading-[1.5] sm:leading-[21px]">Followers</span>
              </div>
            </div>

            <p
              className="font-normal text-[#333333] mb-8 sm:mb-10 max-w-[600px] text-[13px] sm:text-[18px] leading-[1.6] sm:leading-[32.4px]"
            >
              Sadia Psychology is a content creator and educator with a highly engaged global audience. USS partnered with Sadia to develop her commercial strategy, build a dedicated website and deliver a Black Friday launch that successfully turned her audience into customers.
            </p>

            <Link
              href="/projects/sadia-psychology"
              className="font-normal flex items-center justify-center gap-2 border border-black rounded-full px-8 py-3 w-fit hover:bg-black hover:text-white transition-colors text-[14px] sm:text-[15px] leading-[1.5] sm:leading-[22.5px]"
            >
              See More
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </FadeRight>

      </div>
    </section>
  );
}
