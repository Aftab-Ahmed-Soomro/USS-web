"use client";
import { useState } from "react";
import FadeUp from "./FadeUp";
import FadeRight from "./FadeRight";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

const steps = [
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

export function SixStepSystem() {
  const [activeStepId, setActiveStepId] = useState("01");

  const activeStep = steps.find(s => s.id === activeStepId) || steps[0];

  return (
    <section className="bg-black py-20 text-white overflow-hidden font-[var(--font-inter)]">
      <div className="w-full max-w-[1150px] px-4 mx-auto">
        
        {/* Header */}
        <FadeUp>
          <div className="mb-16 md:mb-24">
            <h2 className="flex flex-col text-white font-medium tracking-[-2px]" style={{ fontSize: "56px", lineHeight: "69.36px" }}>
              <span>A six-step system,</span>
              <span className="flex flex-wrap items-center gap-x-3">
                <span>engineered for</span>
                <span 
                  className="text-[#FF5500] italic font-normal font-[var(--font-cormorant)] timesFontFamily"
                  style={{ fontSize: "72px", lineHeight: "69.36px", letterSpacing: "-2px" }}
                >
                  Q4 revenue.
                </span>
              </span>
            </h2>
          </div>
        </FadeUp>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column (Steps List) */}
          <Stagger className="flex flex-col w-full lg:w-1/2 gap-6">
            {steps.map((step) => {
              const isActive = step.id === activeStepId;
              return (
                <StaggerItem key={step.id}>
                  <div 
                    className="flex items-start gap-6 cursor-pointer transition-colors duration-300"
                    onMouseEnter={() => setActiveStepId(step.id)}
                  >
                    <span 
                      className={`font-normal mt-3 transition-colors duration-300 ${isActive ? 'text-[#FF5500]' : 'text-[#EAEAEA]'}`}
                      style={{ fontSize: "13px", lineHeight: "19.5px" }}
                    >
                      {step.id}
                    </span>
                    <h3 
                      className={`font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#4A4A4A]'}`}
                      style={{ fontSize: "40px", lineHeight: "52px", letterSpacing: "-1.04px" }}
                    >
                      {step.title}
                    </h3>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>

          {/* Right Column (Details) */}
          <FadeRight className="w-full lg:w-1/2">
            <div className="flex flex-col w-full">
              
              {/* Pills */}
              <div className="flex flex-wrap gap-3 mb-6">
                {activeStep.pills.map((pill, idx) => (
                  <span 
                    key={idx}
                    className="bg-white text-black font-medium rounded-full px-4 py-1"
                    style={{ fontSize: "11px", lineHeight: "16.5px" }}
                  >
                    {pill}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p 
                className="font-normal text-[#EAEAEA] mb-10 max-w-[480px]"
                style={{ fontSize: "14px", lineHeight: "22.75px" }}
              >
                {activeStep.description}
              </p>

              {/* Details List */}
              <div className="flex flex-col">
                {activeStep.details.map((detail, idx) => (
                  <div key={idx} className="flex flex-col py-4 border-t border-[#333333] last:border-b">
                    <h4 
                      className="font-semibold text-white mb-1"
                      style={{ fontSize: "13px", lineHeight: "19.5px" }}
                    >
                      {detail.title}
                    </h4>
                    <p 
                      className="font-normal text-[#A0A0A0]"
                      style={{ fontSize: "12px", lineHeight: "18px" }}
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
