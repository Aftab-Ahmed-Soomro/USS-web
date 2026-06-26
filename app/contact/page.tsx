import { Brands } from "../components/Brands";
import WeAreGlobal from "../components/ContactGlobal";
import ContactHero from "../components/ContactHero";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const contactItems = [
  {
    icon: "⌖",
    eyebrow: "OFFICE",
    title: "USS",
    lines: ["Dubai Hills Business Park 4 Flowork", "Office Floor 7, Unit 57, Dubai"],
  },
  {
    icon: "☎",
    eyebrow: "PHONE",
    title: "+971 4 000 0000",
    lines: ["Sun - Thu, 9:00 - 18:00 GST"],
  },
  {
    icon: "✉",
    eyebrow: "EMAIL",
    title: "hello@uss.com",
    lines: ["We reply within one business day."],
  },
];

const inputClass =
  "mt-[7px] h-[36px] w-full rounded-[8px] border border-[#d8dee8] bg-white px-[13px] font-[var(--font-inter)] text-[11px] font-normal text-[#111] outline-none shadow-[0_1px_2px_rgba(15,23,42,0.04)] placeholder:text-[#9aa4b2] focus:border-[#ff5500]";

function ContactForm() {
  return (
    <section className="w-full max-w-[508px] rounded-[22px] border border-[#d8dee8] bg-white px-[26px] py-[35px] text-black shadow-[0_32px_70px_rgba(15,23,42,0.08)] sm:px-[34px] sm:py-[39px]">
      <h2 className="font-[var(--font-be-vietnam)] text-[22px] font-medium leading-none tracking-[-0.45px]">
        Book a Call
      </h2>
      <p className="mt-[12px] max-w-[330px] font-[var(--font-inter)] text-[12.5px] font-normal leading-[1.45] tracking-[-0.1px] text-[#596b8b]">
        Tell us about your business — we&apos;ll reply within 24 hours.
      </p>

      <form className="mt-[29px]">
        <div className="grid gap-x-[16px] gap-y-[19px] sm:grid-cols-2">
          <label className="font-[var(--font-inter)] text-[12px] font-medium leading-none text-black">
            Name
            <input className={inputClass} placeholder="Your name" />
          </label>
          <label className="font-[var(--font-inter)] text-[12px] font-medium leading-none text-black">
            Email
            <input className={inputClass} placeholder="you@company.com" type="email" />
          </label>
          <label className="font-[var(--font-inter)] text-[12px] font-medium leading-none text-black">
            Phone
            <input className={inputClass} placeholder="+971..." />
          </label>
          <label className="font-[var(--font-inter)] text-[12px] font-medium leading-none text-black">
            Business Name <span className="text-[#54617a]">(optional)</span>
            <input className={inputClass} placeholder="Company" />
          </label>
        </div>

        <label className="mt-[22px] block font-[var(--font-inter)] text-[12px] font-medium leading-none text-black">
          Message / Requirement
          <textarea
            className="mt-[7px] min-h-[78px] w-full resize-none rounded-[8px] border border-[#d8dee8] bg-white px-[13px] py-[12px] font-[var(--font-inter)] text-[11px] font-normal text-[#111] outline-none shadow-[0_1px_2px_rgba(15,23,42,0.04)] placeholder:text-[#9aa4b2] focus:border-[#ff5500]"
            placeholder="What do you want to achieve?"
          />
        </label>

        <button
          className="mt-[20px] inline-flex h-[44px] w-full items-center justify-center rounded-full bg-[#ff5500] font-[var(--font-be-vietnam)] text-[13px] font-bold leading-none text-white transition hover:bg-[#ff6b1f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5500]"
          type="button"
        >
          Book a Call <span className="ml-[8px]">-&gt;</span>
        </button>
      </form>

      <p className="mt-[18px] text-center font-[var(--font-inter)] text-[10.5px] font-normal leading-none text-[#596b8b]">
        No spam. Your details stay with us.
      </p>
    </section>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Header />

      <ContactHero />



      <WeAreGlobal />

      <div className="bg-[#080808]">
        <Brands />
      </div>

      <Footer />
    </main>
  );
}
