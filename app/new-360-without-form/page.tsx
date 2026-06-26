import { Brands } from "../components/Brands";
import { Faqs } from "../components/Faqs";
import { Footer } from "../components/Footer";
import { GoodCompanyMap } from "../components/GoodCompanyMap";
import { Header } from "../components/Header";
import { MarketingSystems } from "../components/MarketingSystems";
import { Numbers } from "../components/Numbers";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";

export default function New360WithoutForm() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fff]">
        <Header />
        <MarketingSystems />
        <Numbers />
        <Testimonials />
        <GoodCompanyMap />
        <Brands />
        <Team />
        <Faqs />
        <Footer />
    </div>    
  )
}