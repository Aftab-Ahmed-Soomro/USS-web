import Image from "next/image";
import FadeUp from "./FadeUp";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

export function WhyWhatsappWorks() {
  return (
    <section className="w-full text-white">
      <div className="mx-auto max-w-[1150px] px-4 min-[375px]:px-6">
        <Stagger staggerDelay={0.15}>
          <StaggerItem>
            <h2 className="flex flex-wrap justify-center items-center gap-x-[8px] sm:gap-x-[15px] mb-[30px] sm:mb-[50px] text-center">
              <span
                className="lowercase font-medium text-[32px] min-[375px]:text-[38px] leading-[1.1] tracking-[-1px] sm:text-[clamp(40px,5vw,56px)] sm:leading-[clamp(50px,6vw,80px)] sm:tracking-[-3px] font-[var(--font-be-vietnam)]"
              >
                why
              </span>
              <span
                className="lowercase italic font-normal text-[36px] min-[375px]:text-[42px] leading-[1.1] tracking-[-1px] sm:text-[clamp(48px,6vw,72px)] sm:leading-[clamp(50px,6vw,80px)] sm:tracking-[-3px]"
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
              >
                whatsapp and sms
              </span>
              <span
                className="lowercase font-medium text-[32px] min-[375px]:text-[38px] leading-[1.1] tracking-[-1px] sm:text-[clamp(40px,5vw,56px)] sm:leading-[clamp(50px,6vw,80px)] sm:tracking-[-3px] font-[var(--font-be-vietnam)]"
              >
                work
              </span>
            </h2>
          </StaggerItem>
        </Stagger>
        <FadeUp delay={0.2}>
          <div className="relative w-full flex justify-center">
            <Image
              src="/assets/what.png"
              alt="Why WhatsApp and SMS Work"
              width={1169}
              height={727}
              className="w-full h-auto object-contain"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
