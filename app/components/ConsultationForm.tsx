const darkInput =
  "mt-[7px] h-[34px] w-full rounded-[6px] border border-white/70 bg-black px-[10px] font-[var(--font-inter)] text-[10px] text-white outline-none placeholder:text-white/45 focus:border-[#ff5500]";

const lightInput =
  "mt-[6px] h-[39px] w-full rounded-[11px] border border-[#dce3ed] bg-white px-[12px] font-[var(--font-inter)] text-[13px] text-[#111111] shadow-[0_2px_5px_rgba(20,38,58,0.12)] outline-none placeholder:text-[#8b8f96] focus:border-[#ff5500]";

export function ConsultationForm() {
  return (
    <section className="w-full max-w-[430px] rounded-[12px] border border-white/70 bg-black px-[22px] py-[25px] text-white shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      <h2 className="font-[var(--font-be-vietnam)] text-[18px] font-medium leading-tight">
        Book Your Free Consultation
      </h2>
      <p className="mt-[8px] font-[var(--font-inter)] text-[11px] leading-[1.45] text-white/75">
        Get in touch with us, we&apos;d love to hear from you.
      </p>

      <form className="mt-[22px] space-y-[12px]">
        <div className="grid gap-[12px] sm:grid-cols-2">
          <label className="font-[var(--font-inter)] text-[11px] font-medium leading-none">
            Name
            <input className={darkInput} placeholder="Your name" />
          </label>
          <label className="font-[var(--font-inter)] text-[11px] font-medium leading-none">
            Email
            <input className={darkInput} placeholder="you@company.com" type="email" />
          </label>
        </div>
        <div className="grid gap-[12px] sm:grid-cols-2">
          <label className="font-[var(--font-inter)] text-[11px] font-medium leading-none">
            Business Name
            <input className={darkInput} placeholder="Company" />
          </label>
          <label className="font-[var(--font-inter)] text-[11px] font-medium leading-none">
            Website URL
            <input className={darkInput} placeholder="Website" />
          </label>
        </div>
        <label className="block font-[var(--font-inter)] placeholder:text-white/45 text-[11px] font-medium leading-none">
          Services You Need
          <select className={`${darkInput} text-white/45 appearance-none`}>
            <option>Select...</option>
            <option>Email Marketing</option>
            <option>Flow Automation</option>
            <option>Campaign Strategy</option>
          </select>
        </label>
        <label className="block font-[var(--font-inter)] text-[11px] font-medium leading-none">
          Message / Requirement
          <textarea
            className="mt-[7px] min-h-[64px] w-full resize-none rounded-[6px] border border-white/70 bg-black px-[10px] py-[10px] font-[var(--font-inter)] text-[10px] text-white outline-none placeholder:text-white/45 focus:border-[#ff5500]"
            placeholder="What do you want to achieve?"
          />
        </label>
        <button
          className="!mt-[15px] inline-flex h-[38px] w-full items-center justify-center rounded-full bg-[#ff5500] font-[var(--font-be-vietnam)] text-[12px] font-bold text-white transition hover:bg-[#ff6b1f]"
          type="button"
        >
          Book a Call <span className="ml-[8px]">-&gt;</span>
        </button>
      </form>

      <p className="mt-[14px] text-center font-[var(--font-inter)] text-[10px] text-white/70">
        No spam. Your details stay with us.
      </p>
    </section>
  );
}

export function LightConsultationForm() {
  return (
    <section className="w-full max-w-[430px] rounded-[12px] border border-white/70 bg-white px-[22px] py-[25px] text-black shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      <h2 className="font-[var(--font-be-vietnam)] text-[18px] font-medium leading-tight">
        Book Your Free Consultation
      </h2>
      <p className="mt-[8px] font-[var(--font-inter)] text-[11px] leading-[1.45] text-white/75">
        Get in touch with us, we&apos;d love to hear from you.
      </p>

      <form className="mt-[22px] space-y-[12px]">
        <div className="grid gap-[12px] sm:grid-cols-2">
          <label className="font-[var(--font-inter)] text-[11px] font-medium leading-none">
            Name
            <input className={lightInput} placeholder="Your name" />
          </label>
          <label className="font-[var(--font-inter)] text-[11px] font-medium leading-none">
            Email
            <input className={lightInput} placeholder="you@company.com" type="email" />
          </label>
        </div>
        <div className="grid gap-[12px] sm:grid-cols-2">
          <label className="font-[var(--font-inter)] text-[11px] font-medium leading-none">
            Business Name
            <input className={lightInput} placeholder="Company" />
          </label>
          <label className="font-[var(--font-inter)] text-[11px] font-medium leading-none">
            Website URL
            <input className={lightInput} placeholder="Website" />
          </label>
        </div>
        <label className="block font-[var(--font-inter)] text-[11px] font-medium leading-none">
          Services You Need
          <select className={`${lightInput} text-gray-400/100 appearance-none`}>
            <option>Select...</option>
            <option>Email Marketing</option>
            <option>Flow Automation</option>
            <option>Campaign Strategy</option>
          </select>
        </label>
        <label className="block font-[var(--font-inter)] text-[11px] font-medium leading-none">
          Message / Requirement
          <textarea
            className="mt-[7px] min-h-[64px] w-full resize-none rounded-[6px] border border-[#dce3ed] bg-white px-[10px] py-[10px] font-[var(--font-inter)] text-[10px] text-[#111111] shadow-[0_2px_5px_rgba(20,38,58,0.12)] outline-none placeholder:text-[#8b8f96] focus:border-[#ff5500]"
            placeholder="What do you want to achieve?"
          />
        </label>
        <button
          className="!mt-[15px] inline-flex h-[38px] w-full items-center justify-center rounded-full bg-[#ff5500] font-[var(--font-be-vietnam)] text-[12px] font-bold text-white transition hover:bg-[#ff6b1f]"
          type="button"
        >
          Book a Call <span className="ml-[8px]">-&gt;</span>
        </button>
      </form>

      <p className="mt-[14px] text-center font-[var(--font-inter)] text-[10px] text-white/70">
        No spam. Your details stay with us.
      </p>
    </section>
  );
}
