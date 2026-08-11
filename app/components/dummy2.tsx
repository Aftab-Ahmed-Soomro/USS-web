"use client";

import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";
import { InlineWidget } from "react-calendly";

export function ConsultationForm() {
  return (
    <section className="w-full max-w-[430px] rounded-[12px] border border-white/70 bg-black px-[22px] py-[25px] text-white">
      <Stagger staggerDelay={0.1}>
        <StaggerItem>
          <h2 className="font-[var(--font-be-vietnam)] text-[16px] sm:text-[20px] font-semibold tracking-[1px]">
            Book Your Free Consultation
          </h2>
        </StaggerItem>
        <StaggerItem>
          <p className="mt-[8px] font-[var(--font-inter)] text-[11px] sm:text-[14px] leading-[1.45] text-[#FFFFFF]">
            Get in touch with us, we&apos;d love to hear from you.
          </p>
        </StaggerItem>

        <div className="mt-[22px] -mx-[22px] -mb-[25px] flex flex-col justify-center overflow-hidden rounded-b-[12px]">
          <StaggerItem>
            <InlineWidget
              url="https://calendly.com/unitedstrategicsolutions/30min"
              styles={{ minWidth: "320px", height: "440px" }}
            />
          </StaggerItem>
        </div>
      </Stagger>
    </section>
  );
}

export function LightConsultationForm() {
  return (
    <section className="w-full max-w-[430px] rounded-[12px] border border-gray-200 bg-white px-[22px] py-[25px] text-black">
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

        <div className="mt-[22px] -mx-[22px] -mb-[25px] flex flex-col justify-center overflow-hidden rounded-b-[12px]">
          <StaggerItem>
            <InlineWidget
              url="https://calendly.com/unitedstrategicsolutions/30min"
              styles={{ minWidth: "320px", height: "440px" }}
            />
          </StaggerItem>
        </div>
      </Stagger>
    </section>
  );
}
