import dynamic from "next/dynamic";
import { Header } from "./components/Header";
import { HomeHero } from "./components/HomeHero";

// Lazy-load below-fold sections to reduce initial JS bundle and DOM size
const Numbers = dynamic(
  () => import("./components/Numbers").then((m) => ({ default: m.Numbers }))
);
const Brands = dynamic(
  () => import("./components/Brands").then((m) => ({ default: m.Brands }))
);
const MarketingSystems = dynamic(
  () => import("./components/MarketingSystems").then((m) => ({ default: m.MarketingSystems }))
);
const Strategic = dynamic(
  () => import("./components/Strategic").then((m) => ({ default: m.Strategic }))
);
const Testimonials = dynamic(
  () => import("./components/Testimonials").then((m) => ({ default: m.Testimonials }))
);
const GoodCompanyMap = dynamic(
  () => import("./components/GoodCompanyMap").then((m) => ({ default: m.GoodCompanyMap }))
);
const Team = dynamic(
  () => import("./components/Team").then((m) => ({ default: m.Team }))
);
const FinalCta = dynamic(
  () => import("./components/FinalCta").then((m) => ({ default: m.FinalCta }))
);
const Footer = dynamic(
  () => import("./components/Footer").then((m) => ({ default: m.Footer }))
);

const Page = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080808]">
      <div className="hidden sm:block pointer-events-none absolute left-[-40px] top-[76px] h-[357px] w-[377px] rounded-full bg-[#7a2609] opacity-80 blur-[90px]" />
      <div className="hidden sm:block pointer-events-none absolute right-[-62px] top-[183px] h-[536px] w-[360px] rounded-full bg-[#8a330d] opacity-80 blur-[98px]" />
      <div className="hidden sm:block pointer-events-none absolute bottom-[-120px] left-0 h-[180px] w-full bg-[#5b1803] opacity-55 blur-[80px]" />
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