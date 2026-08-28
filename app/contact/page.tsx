import { Brands } from "../components/Brands";
import WeAreGlobal from "../components/ContactGlobal";
import ContactHero from "../components/ContactHero";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function ContactPage() {
  return (
    <main className="min-h-screen  overflow-hidden">
      <Header />

        <ContactHero /> 



      <div className="pt-6">
        <WeAreGlobal />
      </div>

      <div className="bg-[#080808] hidden sm:block">
        <Brands />
      </div>

      <Footer showGlobal={false} />
    </main>
  );
}
