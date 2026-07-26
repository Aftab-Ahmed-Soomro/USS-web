"use client";
import { useState } from "react";
import FadeUp from "./FadeUp";
import FadeRight from "./FadeRight";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

export interface StepDetail {
  title: string;
  desc: string;
}

export interface StepData {
  id: string;
  title: string;
  pills: string[];
  description: string;
  details: StepDetail[];
}

export interface SixStepSystemProps {
  heading?: React.ReactNode;
  data?: StepData[];
}

const defaultSteps: StepData[] = [
  {
    id: "01",
    title: "Ideation & Strategy",
    pills: ["Concept", "Positioning", "Audience Fit"],
    description: "We start by identifying the right product for your niche, audience size and Q4 timing — then build the commercial architecture around it.",
    details: [
      {
        title: "Product Concept & Validation",
        desc: "The right product for your niche, audience size and Black Friday timing."
      },
      {
        title: "Brand & Creative Direction",
        desc: "Product looks and feels authentic to your personal brand."
      },
      {
        title: "Launch-ready Assets",
        desc: "Imagery, copy and sales assets ready ahead of go-live."
      },
      {
        title: "Pricing & Margin Structure",
        desc: "A commercial model that maximises revenue and stays compelling."
      }
    ]
  },
  {
    id: "02",
    title: "Production",
    pills: ["Manufacturing", "Quality Control"],
    description: "Placeholder description for Production step.",
    details: [
      { title: "Sourcing", desc: "Finding the right manufacturing partners." },
      { title: "Sampling", desc: "Iterating on product samples for perfection." }
    ]
  },
  {
    id: "03",
    title: "Marketing Execution",
    pills: ["Content", "Ads", "Email"],
    description: "Placeholder description for Marketing Execution step.",
    details: [
      { title: "Campaign Strategy", desc: "Planning the rollout of marketing materials." },
      { title: "Ad Creatives", desc: "Designing high-converting ad creatives." }
    ]
  },
  {
    id: "04",
    title: "Campaign Launch & Scale",
    pills: ["Go-live", "Optimization"],
    description: "Placeholder description for Campaign Launch & Scale step.",
    details: [
      { title: "Launch Day", desc: "Coordinating all channels for a massive launch." },
      { title: "Scaling Ads", desc: "Increasing budget on winning ad sets." }
    ]
  },
  {
    id: "05",
    title: "Fulfilment",
    pills: ["Logistics", "Support"],
    description: "Placeholder description for Fulfilment step.",
    details: [
      { title: "Shipping", desc: "Ensuring timely delivery to customers." },
      { title: "Customer Service", desc: "Handling inquiries and support tickets." }
    ]
  },
  {
    id: "06",
    title: "Post Campaign & Debrief",
    pills: ["Analytics", "Planning"],
    description: "Placeholder description for Post Campaign & Debrief step.",
    details: [
      { title: "Data Review", desc: "Analyzing campaign performance metrics." },
      { title: "Next Steps", desc: "Planning for the next big opportunity." }
    ]
  }
];

export function SixStepSystem({ heading, data = defaultSteps }: SixStepSystemProps) {
  const [activeStepId, setActiveStepId] = useState<string | null>(null);

  const activeStep = activeStepId ? data.find(s => s.id === activeStepId) || data[0] : data[0];

  return (
    <section className="bg-black py-20 text-white overflow-hidden font-[var(--font-inter)]">
      <div className="w-full max-w-[1150px] px-6 mx-auto">

        {/* Header */}
        <FadeUp>
          <div className="mb-10 sm:mb-16 md:mb-24">
            {heading ? (
              heading
            ) : (
              <h2 className="flex flex-col text-white font-medium tracking-[-1px] sm:tracking-[-2px] text-[36px] sm:text-[56px] leading-[1.1] sm:leading-[69.36px] ">
                <span>A six-step system,</span>
                <span className="flex flex-wrap items-center gap-x-2 sm:gap-x-3">
                  <span>engineered for</span>
                  <span
                    className="text-[#FF5500] italic font-normal font-[var(--font-cormorant)] timesFontFamily text-[46px] sm:text-[72px] leading-[1.1] sm:leading-[69.36px] tracking-[-1.5px] sm:tracking-[-2px]"
                  >
                    Q4 revenue.
                  </span>
                </span>
              </h2>
            )}
          </div>
        </FadeUp>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left Column (Steps List) */}
          <Stagger className="flex flex-col w-full lg:w-[55%] xl:w-[60%] gap-6">
            {data.map((step) => {
              const isActiveMobile = step.id === activeStepId;
              const isActiveDesktop = activeStepId ? step.id === activeStepId : step.id === data[0].id;
              return (
                <StaggerItem key={step.id}>
                  <div
                    className="flex items-start gap-4 sm:gap-6 cursor-pointer transition-colors duration-300"
                    onMouseEnter={() => setActiveStepId(step.id)}
                    onClick={() => setActiveStepId(isActiveMobile ? null : step.id)}
                  >
                    <span
                      className={`font-normal mt-1 sm:mt-3 transition-colors duration-300 text-[13px] leading-[19.5px] ${isActiveMobile ? 'max-lg:text-[#FF5500]' : 'max-lg:text-[#EAEAEA]'} ${isActiveDesktop ? 'lg:text-[#FF5500]' : 'lg:text-[#EAEAEA]'}`}
                    >
                      {step.id}
                    </span>
                    <h3
                      className={`font-medium transition-colors duration-300 text-[24px] sm:text-[34px] lg:text-[38px] xl:text-[40px] leading-[1.2] tracking-[-1px] whitespace-normal sm:whitespace-nowrap ${isActiveMobile ? 'max-lg:text-white' : 'max-lg:text-[#4A4A4A]'} ${isActiveDesktop ? 'lg:text-white' : 'lg:text-[#4A4A4A]'}`}
                    >
                      {step.title}
                    </h3>
                  </div>

                  {/* MOBILE ACCORDION CONTENT */}
                  {isActiveMobile && (
                    <div className="lg:hidden mt-6 pl-10 sm:pl-[52px]">
                      {/* Pills */}
                      <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                        {step.pills.map((pill, idx) => (
                          <span
                            key={idx}
                            className="bg-white text-black font-medium rounded-full px-3 py-1 sm:px-4 text-[11px] leading-[16.5px]"
                          >
                            {pill}
                          </span>
                        ))}
                      </div>

                      {/* Description */}
                      <p className="font-normal text-[#EAEAEA] mb-4 sm:mb-10 text-[14px] leading-[22.75px]">
                        {step.description}
                      </p>

                      {/* Details List */}
                      <div className="flex flex-col">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex flex-col py-2 sm:py-4 border-t border-[#333333] last:border-b">
                            <h4 className="font-semibold text-white mb-1 text-[13px] leading-[19.5px]">
                              {detail.title}
                            </h4>
                            <p className="font-normal text-[#A0A0A0] text-[12px] leading-[18px]">
                              {detail.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </StaggerItem>
              );
            })}
          </Stagger>

          {/* Right Column (Details) - Desktop Only */}
          <FadeRight className="hidden lg:block w-full lg:w-[45%] xl:w-[40%] pl-0 lg:pl-4">
            <div className="flex flex-col w-full">

              {/* Pills */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                {activeStep.pills.map((pill, idx) => (
                  <span
                    key={idx}
                    className="bg-white text-black font-medium rounded-full px-3 py-1 sm:px-4 text-[11px] leading-[16.5px]"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p
                className="font-normal text-[#EAEAEA] mb-8 sm:mb-10 max-w-[480px] text-[14px] leading-[22.75px]"
              >
                {activeStep.description}
              </p>

              {/* Details List */}
              <div className="flex flex-col">
                {activeStep.details.map((detail, idx) => (
                  <div key={idx} className="flex flex-col py-4 border-t border-[#333333] last:border-b">
                    <h4
                      className="font-semibold text-white mb-1 text-[13px] leading-[19.5px]"
                    >
                      {detail.title}
                    </h4>
                    <p
                      className="font-normal text-[#A0A0A0] text-[12px] leading-[18px]"
                    >
                      {detail.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </FadeRight>

        </div>
      </div>
    </section>
  );
}
