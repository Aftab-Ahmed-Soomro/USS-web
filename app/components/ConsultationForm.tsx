import { ArrowRight } from "lucide-react";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

const darkInput =
  "mt-[7px] h-[38px] w-full rounded-[6px] border border-[#FFFFFF] bg-black px-[10px] font-[var(--font-inter)] text-[10px] text-[12px] text-white outline-none placeholder:text-white/45 focus:border-[#ff5500]";

const lightInput =
  "mt-[6px] h-[39px] w-full rounded-[11px] border border-[#dce3ed] bg-white px-[12px] font-[var(--font-inter)] text-[13px] text-[#111111] shadow-[0_2px_5px_rgba(20,38,58,0.12)] outline-none placeholder:text-[#8b8f96] focus:border-[#ff5500]";

export function ConsultationForm() {
  return (
    <section className="w-full max-w-[430px] rounded-[12px] border border-white/70 bg-black px-[22px] py-[25px] text-white shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      <Stagger staggerDelay={0.1}>
        <StaggerItem>
          <h2 className="font-[var(--font-be-vietnam)] text-[16px] sm:text-[20px] font-semibold tracking-[1px]">
            Book Your Free Consultation
          </h2>
        </StaggerItem>
        <StaggerItem>
          <p className="mt-[8px] font-[var(--font-inter)] text-[11px] sm:text-[14px] sm:text-[14px] leading-[1.45] text-[#FFFFFF]">
            Get in touch with us, we&apos;d love to hear from you.
          </p>
        </StaggerItem>

      <form className="mt-[22px] space-y-[12px]">
        <StaggerItem>
          <div className="grid gap-[12px] sm:grid-cols-2">
            <label className="font-[var(--font-inter)] text-[11px] sm:text-[14px] font-medium leading-none">
              Name
              <input className={darkInput} placeholder="Your name" />
            </label>
            <label className="font-[var(--font-inter)] text-[11px] sm:text-[14px] font-medium leading-none">
              Email
              <input className={darkInput} placeholder="you@company.com" type="email" />
            </label>
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="grid gap-[12px] sm:grid-cols-2">
            <label className="font-[var(--font-inter)] text-[11px] sm:text-[14px] font-medium leading-none">
              Business Name
              <input className={darkInput} placeholder="Company" />
            </label>
            <label className="font-[var(--font-inter)] text-[11px] sm:text-[14px] font-medium leading-none">
              Website URL
              <input className={darkInput} placeholder="Website" />
            </label>
          </div>
        </StaggerItem>
        <StaggerItem>
          <label className="block font-[var(--font-inter)] placeholder:text-white/45 text-[11px] sm:text-[14px] font-medium leading-none">
            Services You Need
            <div className="relative mt-2">
              <select className={`${darkInput} text-white/45 appearance-none w-full pr-10`}>
                <option>Select...</option>
                <option>Email Marketing</option>
                <option>Flow Automation</option>
                <option>Campaign Strategy</option>
              </select>
              <svg
                className="pointer-events-none absolute right-4 top-[25px] -translate-y-1/2 w-4 h-4 text-white/45"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </label>
        </StaggerItem>
        <StaggerItem>
          <label className="block font-[var(--font-inter)] text-[11px] sm:text-[14px] font-medium leading-none">
            Message / Requirement
            <textarea
              className="mt-[7px] min-h-[64px] w-full resize-none rounded-[6px] border border-white/70 bg-black px-[10px] py-[10px] font-[var(--font-inter)] text-[10px] text-white outline-none placeholder:text-white/45 focus:border-[#ff5500]"
              placeholder="What do you want to achieve?"
            />
          </label>
        </StaggerItem>
        <StaggerItem>
          <button
            className="!mt-[15px] inline-flex h-[38px] w-full items-center justify-center rounded-full bg-[#ff5500] font-[var(--font-be-vietnam)] text-[12px] sm:text-[14px] font-bold text-white transition hover:bg-[#ff6b1f]"
            type="button"
          >
            Book a Call <span className="ml-[8px]">
              <ArrowRight strokeWidth={2} className="h-[16px] w-[16px]" />
            </span>
          </button>
        </StaggerItem>
      </form>

      <StaggerItem>
        <p className="mt-[14px] text-center font-[var(--font-inter)] text-[10px] sm:text-[12px] text-white">
          No spam. Your details stay with us.
        </p>
      </StaggerItem>
      </Stagger>
    </section>
  );
}

export function LightConsultationForm() {
  return (
    <section className="w-full max-w-[430px] rounded-[12px] border border-white/70 bg-white px-[22px] py-[25px] text-black shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      <Stagger staggerDelay={0.1}>
        <StaggerItem>
          <h2 className="font-[var(--font-be-vietnam)] text-[18px] font-medium leading-tight">
            Book Your Free Consultation
          </h2>
        </StaggerItem>
        <StaggerItem>
          <p className="mt-[8px] font-[var(--font-inter)] text-[11px] sm:text-[14px] leading-[1.45] text-[#62748E]">
            Get in touch with us, we&apos;d love to hear from you.
          </p>
        </StaggerItem>

      <form className="mt-[22px] space-y-[12px]">
        <StaggerItem>
          <div className="grid gap-[12px] sm:grid-cols-2">
            <label className="font-[var(--font-inter)] text-[11px] sm:text-[14px] font-medium leading-none">
              Name
              <input className={lightInput} placeholder="Your name" />
            </label>
            <label className="font-[var(--font-inter)] text-[11px] sm:text-[14px] font-medium leading-none">
              Email
              <input className={lightInput} placeholder="you@company.com" type="email" />
            </label>
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="grid gap-[12px] sm:grid-cols-2">
            <label className="font-[var(--font-inter)] text-[11px] sm:text-[14px] font-medium leading-none">
              Business Name
              <input className={lightInput} placeholder="Company" />
            </label>
            <label className="font-[var(--font-inter)] text-[11px] sm:text-[14px] font-medium leading-none">
              Website URL (if applicable)
              <input className={lightInput} placeholder="Website" />
            </label>
          </div>
        </StaggerItem>
        <StaggerItem>
          <label className="block font-[var(--font-inter)] text-[11px] sm:text-[14px] font-medium leading-none">
            Services You Need
            <select className={`${lightInput} text-gray-400/100 appearance-none`}>
              <option>Select...</option>
              <option>Email Marketing</option>
              <option>Flow Automation</option>
              <option>Campaign Strategy</option>
            </select>
          </label>
        </StaggerItem>
        <StaggerItem>
          <label className="block font-[var(--font-inter)] text-[11px] sm:text-[14px] font-medium leading-none">
            Message / Requirement
            <textarea
              className="mt-[7px] min-h-[64px] w-full resize-none rounded-[6px] border border-[#dce3ed] bg-white px-[10px] py-[10px] font-[var(--font-inter)] text-[10px] text-[#111111] shadow-[0_2px_5px_rgba(20,38,58,0.12)] outline-none placeholder:text-[#8b8f96] focus:border-[#ff5500]"
              placeholder="What do you want to achieve?"
            />
          </label>
        </StaggerItem>
        <StaggerItem>
          <button
            className="!mt-[15px] inline-flex h-[38px] w-full items-center justify-center rounded-full bg-[#ff5500] font-[var(--font-be-vietnam)] text-[12px] font-bold text-white transition hover:bg-[#ff6b1f]"
            type="button"
          >
            Book a Call <span className="ml-[8px]">-&gt;</span>
          </button>
        </StaggerItem>
      </form>

      <StaggerItem>
        <p className="mt-[14px] text-center font-[var(--font-inter)] text-[12px] text-[#62748E]">
          No spam. Your details stay with us.
        </p>
      </StaggerItem>
      </Stagger>
    </section>
  );
}
