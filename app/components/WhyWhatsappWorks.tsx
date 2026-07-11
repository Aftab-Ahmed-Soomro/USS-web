import Image from "next/image";
import FadeUp from "./FadeUp";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

export function WhyWhatsappWorks() {
  return (
    <section className="w-full text-white">
      <div className="mx-auto max-w-[1150px] px-6">
        <Stagger staggerDelay={0.15}>
          <StaggerItem>
            <h2 className="flex flex-wrap justify-center items-center gap-x-[15px] mb-[50px] text-center">
              <span
                className="lowercase"
                style={{
                  fontWeight: 500,
                  fontSize: "clamp(40px, 5vw, 56px)",
                  lineHeight: "clamp(50px, 6vw, 80px)",
                  letterSpacing: "-3px",
                  fontFamily: "var(--font-be-vietnam, sans-serif)",
                }}
              >
                why
              </span>
              <span
                className="lowercase italic"
                style={{
                  fontWeight: 400,
                  fontSize: "clamp(48px, 6vw, 72px)",
                  lineHeight: "clamp(50px, 6vw, 80px)",
                  letterSpacing: "-3px",
                  fontFamily: "'Times New Roman', Times, serif",
                }}
              >
                whatsapp and sms
              </span>
              <span
                className="lowercase"
                style={{
                  fontWeight: 500,
                  fontSize: "clamp(40px, 5vw, 56px)",
                  lineHeight: "clamp(50px, 6vw, 80px)",
                  letterSpacing: "-3px",
                  fontFamily: "var(--font-be-vietnam, sans-serif)",
                }}
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
