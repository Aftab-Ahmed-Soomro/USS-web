import Link from "next/link";
import { Button } from "./common/Button";
import { ConsultationForm } from "./ConsultationForm";

export function Hero() {
  return (
    <main className="relative z-10 mx-auto grid max-w-[1150px] flex-1 items-center gap-12 px-6 pb-[68px] pt-[58px]  md:grid-cols-[minmax(0,1fr)_431px] md:gap-14  lg:pb-[74px] lg:pt-[79px] xl:grid-cols-[575px_431px] xl:gap-[132px]">
      <section className="max-w-[560px] text-white">
        <p className="mb-[40px] text-[14px] font-normal uppercase leading-none tracking-[5px] text-white">
          EMAIL MARKETING
        </p>
        <h1 className="max-w-[560px] text-[43px] font-bold leading-[1.03] tracking-[-1.7px] sm:text-[54px] lg:text-[58px]">
          turn your email database
          <br />
          into a{" "}
          <span className="font-serif text-[1.24em] font-extralight timesFontFamily italic leading-[0.7] tracking-[-1px]">
            revenue engine
          </span>
        </h1>

        <p className="mt-[43px] max-w-[465px] text-[18px] font-normal leading-[1.62] tracking-[-0.2px] text-white/90">
          We build email systems that increase retention, repeat purchases and customer lifetime value.
        </p>
        <Link href="/contact">
        
        <Button className="mt-[34px] h-[43px] px-[33px] text-[12px]">Book a Consultation</Button>
        </Link>
      </section>

      <div className="flex justify-center md:justify-end">
        <ConsultationForm />
      </div>
    </main>
  );
}
