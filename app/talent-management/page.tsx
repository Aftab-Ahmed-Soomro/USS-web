import Link from "next/link";
import { Brands } from "../components/Brands";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";
import { GoodCompanyMap } from "../components/GoodCompanyMap";
import Stagger from "../components/Stagger";
import StaggerItem from "../components/Staggeritem";
import { BlackFridayOpportunity } from "../components/BlackFridayOpportunity";
import { OpportunitySection } from "../components/OpportunitySection";
import { WhatWeDoSection } from "../components/WhatWeDoSection";
import { SixStepSystem } from "../components/SixStepSystem";
import { TishWondersProfile } from "../components/TishWondersProfile";
import { SadiaPsychologyProfile } from "../components/SadiaPsychologyProfile";
import { ProjectOverview } from "../components/ProjectOverview";
import { RevenueMethod } from "../components/RevenueMethod";
import { TalentHero } from "../components/TalentHero";

function FinalCta() {
  return (
    <section className="bg-black px-4 min-[375px]:px-6 pt-[50px] sm:pt-[70px] text-white pb-36">
      <Stagger staggerDelay={0.12} className="mx-auto max-w-[1200px] xl:max-w-[1300px]  text-center">
        <StaggerItem>
          <p className="font-[var(--font-be-vietnam)] text-[10px] font-medium uppercase tracking-[4px] text-[#ff5500]">
            Get Started
          </p>
        </StaggerItem>
        <StaggerItem>
          <h2 className="mt-[24px] sm:mt-8 font-[var(--font-be-vietnam)] text-[32px] font-medium leading-[1.08] tracking-[-1.5px] sm:text-[48px]">
            turn your website into a
            <br />
            {" "}
            <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[64px] leading-[1.1] sm:leading-none font-extralight timesFontFamily italic text-[#ff5500]">
              growth asset
            </span>
          </h2>
        </StaggerItem>
        <StaggerItem>
          <div className="mt-[30px] sm:mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              className="inline-flex h-[46px] sm:h-[42px] min-w-[190px] items-center justify-center rounded-full bg-[#ff5500] px-8 font-[var(--font-be-vietnam)] text-[12px] font-bold uppercase text-white transition hover:bg-[#ff6b1f]"
              href="/contact"
            >
              Book a Consultation
            </Link>
          </div>
        </StaggerItem>
      </Stagger>
    </section>
  );
}

export default function MarketingStrategyPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <Header />
      <TalentHero />
      <BlackFridayOpportunity />
      <OpportunitySection />
      <WhatWeDoSection />
      <SixStepSystem />

      <Brands />

      <RevenueMethod />
      <TishWondersProfile />
      {/* <ProjectOverview
        subheading="SNEAK PEEK INTO THE Q4 LAUNCH"
        images={[
          "/assets/tishOverview/1.jpg",
          "/assets/tishOverview/2.jpg",
          "/assets/tishOverview/3.webp",
          "/assets/tishOverview/4.webp"
        ]}
        bgColor={"black"}
        textColor={"white"}
      /> */}
      <SadiaPsychologyProfile />
      {/* <ProjectOverview
        subheading="inside the launch."
        images={[
          "/assets/sadiaOverview/1.webp",
          "/assets/sadiaOverview/2.webp",
          "/assets/sadiaOverview/3.webp",
          "/assets/sadiaOverview/4.webp"
        ]}
        bgColor={"white"}
        textColor={"black"}
      /> */}
      <Testimonials />
      <Team />
      <GoodCompanyMap />
      <FinalCta />
      <div className="mt-[-120px]">

        <Footer />
      </div>
    </main>
  );
}
