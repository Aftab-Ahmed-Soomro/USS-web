import { Header } from "./components/Header";
import { Brands } from "./components/Brands";
import { Footer } from "./components/Footer";
import { Numbers } from "./components/Numbers";
import { HomeHero } from "./components/HomeHero";
import { MarketingSystems } from "./components/MarketingSystems";
import { GoodCompanyMap } from "./components/GoodCompanyMap";
import { Testimonials } from "./components/Testimonials";
import { Team } from "./components/Team";
import { Strategic } from "./components/Strategic";
import { FinalCta } from "./components/FinalCta";

const Page = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080808]">
      <div className="pointer-events-none absolute left-[-40px] top-[76px] h-[357px] w-[377px] rounded-full bg-[#7a2609] opacity-80 blur-[90px]" />
      <div className="pointer-events-none absolute right-[-62px] top-[183px] h-[536px] w-[360px] rounded-full bg-[#8a330d] opacity-80 blur-[98px]" />
      <div className="pointer-events-none absolute bottom-[-120px] left-0 h-[180px] w-full bg-[#5b1803] opacity-55 blur-[80px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[4px] bg-[#222]" />
      <Header />
      <HomeHero />
      <Numbers />
      <Brands />
      <MarketingSystems />
      <Strategic />
      <Testimonials />
      <GoodCompanyMap />
      <Team />
      <FinalCta />
      <Footer />
    </div>
  );
};

export default Page;