const faqs = [
  "What does 360 marketing actually mean?",
  "Do I need all channels to get started?",
  "How do you decide which channels are right for me?",
  "How long does it take to see results?",
];

export function Faqs() {
  return (
    <section className="relative z-10 bg-black px-6 py-20 text-white  lg:py-[100px]">
      <div className="mx-auto flex min-h-[557px] max-w-[1150px] flex-col gap-16">
        <h2 className="font-[var(--font-be-vietnam)] text-[44px] font-medium leading-[1.2] tracking-[-1.5px] sm:text-[56px] sm:leading-[72px] sm:tracking-[-2.16px]">
          FAQ&apos;s
        </h2>

        <div className="">
          {faqs.map((faq) => (
            <button
              className="flex min-h-[105px] w-full items-center justify-between gap-8 border-b border-white/20 py-8 text-left"
              key={faq}
              type="button"
            >
              <span className="pr-8 font-[var(--font-be-vietnam)] text-[19px] font-normal leading-8 tracking-[-0.24px] text-white sm:text-[24px]">
                {faq}
              </span>
              <span className="grid text-[#FF5500] size-10 shrink-0 place-items-center rounded-full border border-[#fff] font-[var(--font-be-vietnam)] text-[20px] leading-7 text-[#1a1a1a]">
                +
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
