import Link from "next/link";
import { Header } from "../components/Header";
import Image from "next/image";
import { Button } from "../components/common/Button";
import { ConsultationForm } from "../components/ConsultationForm";
import { Brands } from "../components/Brands";
import { Numbers } from "../components/Numbers";
import { Approach } from "../components/Approach";
import { EmailVisuals } from "../components/EmailVisuals";
import { Testimonials } from "../components/Testimonials";
import { GoodCompanyMap } from "../components/GoodCompanyMap";
import { VideoPreview } from "../components/VideoPreview";
import { PerformanceMarketing } from "../components/PerformanceMarketing";
import { PaidAds } from "../components/PaidAds";
import { Services } from "../components/Services";

function Hero() {
  return (
      <main className="relative z-10 mx-auto grid max-w-[1150px] flex-1 items-center gap-12 px-6 pb-[68px] pt-[58px]  md:grid-cols-[minmax(0,1fr)_431px] md:gap-14  lg:pb-[74px] lg:pt-[79px] xl:grid-cols-[575px_431px] xl:gap-[132px]">
        <section className="max-w-[560px] text-white">
          
          <h1 className="max-w-[560px] text-[43px] font-bold leading-[1.03] tracking-[-1.7px] sm:text-[54px] lg:text-[58px]">
            we don’t just {" "}
            <span className="font-serif text-[1.24em] font-extralight timesFontFamily italic leading-[0.7] tracking-[-1px]">
              market
            </span>
          </h1>
          <h1 className="max-w-[560px] text-[43px] font-bold leading-[1.03] tracking-[-1.7px] sm:text-[54px] lg:text-[58px]">
            we scale{" "}
            <span className="font-serif text-[1.24em] font-extralight timesFontFamily italic leading-[0.7] tracking-[-1px]">
              brands
            </span>
          </h1>
  
          <p className="mt-[43px] max-w-[530px] text-[16px] font-normal leading-[1.62] tracking-[-0.2px] text-white/90">
            We are a 360 digital marketing agency that combine strategy, creative and performance marketing into one connected system designed to scale your business. 
          </p>

          <p className="mt-[43px] max-w-[465px] text-[16px] font-normal leading-[1.62] tracking-[-0.2px] text-white/90">
            Trusted by 100+ SMEs across UK, US & UAE.
          </p>
  
          <Button className="mt-[34px] h-[43px] px-[33px] text-[12px]">Book a Consultation</Button>
        </section>
  
        <div className="flex justify-center md:justify-end">
          <ConsultationForm />
        </div>
      </main>
    );
}

export default function New360WithForm() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080808]">
      <div className="pointer-events-none absolute left-[-40px] top-[76px] h-[357px] w-[377px] rounded-full bg-[#7a2609] opacity-80 blur-[90px]" />
      <div className="pointer-events-none absolute right-[-62px] top-[183px] h-[536px] w-[360px] rounded-full bg-[#8a330d] opacity-80 blur-[98px]" />
      <div className="pointer-events-none absolute bottom-[-120px] left-0 h-[180px] w-full bg-[#5b1803] opacity-55 blur-[80px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[4px] bg-[#222]" />
        <Header />
        <Hero />
        <Brands />
        <Services />
        <VideoPreview />
        <Numbers />
        <PerformanceMarketing />
        <PaidAds />
        <Approach />
        <EmailVisuals />    
        <Testimonials />
        <GoodCompanyMap />
    </div>
  )
}