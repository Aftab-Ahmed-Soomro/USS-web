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
  pills?: string[];
  description: string;
  details?: StepDetail[];
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
    description: "We start by identifying the right product for your niche, audience size and Q4 timing, then build the commercial strategy around it.",
    details: [
      {
        title: "Product Concept & Validation",
        desc: "The right product for your niche, audience size and Black Friday timing"
      },
      {
        title: "Brand & Creative Direction",
        desc: "Product positioning, messaging and creative built around your audience"
      },
      {
        title: "Launch-ready Assets",
        desc: "Imagery, copy and sales assets prepared ahead of launch"
      },
      {
        title: "Pricing & Margin Structure",
        desc: "A commercial model that maximises revenue while remaining competitive."
      }
    ]
  },
  {
    id: "02",
    title: "Production",
    pills: ["Creative", "Content", "Assets"],
    description: "Every asset is produced with the launch in mind, ensuring your audience experiences a consistent brand across every touchpoint.",
    details: [
      {
        title: "Content Production",
        desc: "Creating photography and video assets for launch"
      },
      {
        title: "Website & Landing Pages",
        desc: "Building high-converting pages designed to sell"
      },
      {
        title: "Sales & Marketing Assets",
        desc: "Emails, adverts, graphics and promotional materials"
      },
      {
        title: "Creative Review & Approval",
        desc: "Final quality checks before launch."
      }
    ]
  },
  {
    id: "03",
    title: "Marketing Execution",
    pills: ["Campaign", "Launch", "Growth"],
    description: "A complete Black Friday marketing strategy designed to build anticipation before launch and maximise conversions once live.",
    details: [
      {
        title: "Campaign Strategy & Roadmap",
        desc: "A full launch plan covering messaging, timing, content windows and targeting"
      },
      {
        title: "Content Integration Planning",
        desc: "Planning how products are naturally introduced across content"
      },
      {
        title: "Paid Media & Amplification",
        desc: "Extending reach through paid advertising and remarketing"
      },
      {
        title: "Urgency & Scarcity Mechanics",
        desc: "Limited offers and countdown messaging designed to increase conversions"
      }
    ]
  },
  {
    id: "04",
    title: "Campaign Launch & Scale",
    pills: ["Optimisation", "Revenue", "Performance"],
    description: "Once campaigns go live, performance is monitored continuously to maximise sales throughout the launch.",
    details: [
      {
        title: "Live Campaign Management",
        desc: "Monitoring campaign performance in real time"
      },
      {
        title: "Creative Optimisation",
        desc: "Refreshing creatives and messaging based on results"
      },
      {
        title: "Budget Optimisation",
        desc: "Scaling the best-performing audiences and campaigns"
      },
      {
        title: "Revenue Growth",
        desc: "Maximising sales throughout the campaign period."
      }
    ]
  },
  {
    id: "05",
    title: "Fulfilment",
    pills: ["Operations", "Logistics", "Customer Experience"],
    description: "Operational systems ensure every customer receives a smooth experience from purchase through to delivery",
    details: [
      {
        title: "Storefront & Checkout Setup",
        desc: "Building the sales infrastructure and purchase journey"
      },
      {
        title: "Order Processing",
        desc: "Managing orders from purchase through to dispatch"
      },
      {
        title: "Inventory & Stock Management",
        desc: "Monitoring stock availability throughout the campaign"
      },
      {
        title: "Customer Service",
        desc: "Handling customer queries while protecting your brand reputation."
      }
    ]
  },
  {
    id: "06",
    title: "Post Campaign & Debrief",
    pills: ["Reporting", "Insights", "Planning"],
    description: "Every campaign finishes with a commercial review, identifying what worked and how the next launch can perform even better.",
    details: [
      {
        title: "Campaign Performance Report",
        desc: "Revenue, traffic, conversion rates and ROI analysis"
      },
      {
        title: "Audience Insights & Behaviour",
        desc: "Understanding purchasing behaviour and highest-performing content"
      },
      {
        title: "Revenue & Margin Review",
        desc: "Reviewing commercial performance and profitability"
      },
      {
        title: "Next Campaign Playbook",
        desc: "A strategic blueprint built from the learnings of the previous launch."
      }
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
                      {step.pills && step.pills.length > 0 && (
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
                      )}

                      {/* Description */}
                      <p className="font-normal text-[#EAEAEA] mb-4 sm:mb-10 text-[14px] leading-[22.75px]">
                        {step.description}
                      </p>

                      {/* Details List */}
                      {step.details && step.details.length > 0 && (
                        <div className="flex flex-col">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex flex-col py-2 sm:py-3 border-t border-[#333333] last:border-b">
                              <h4 className={`font-semibold text-white text-[13px] leading-[19.5px] ${detail.desc ? 'mb-1' : ''}`}>
                                {detail.title}
                              </h4>
                              {detail.desc && (
                                <p className="font-normal text-[#A0A0A0] text-[12px] leading-[18px]">
                                  {detail.desc}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
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
              {activeStep?.pills && activeStep.pills.length > 0 && (
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
              )}

              {/* Description */}
              <p
                className="font-normal text-[#EAEAEA] mb-8 sm:mb-10 max-w-[480px] text-[14px] leading-[22.75px]"
              >
                {activeStep?.description}
              </p>

              {/* Details List */}
              {activeStep?.details && activeStep.details.length > 0 && (
                <div className="flex flex-col">
                  {activeStep.details.map((detail, idx) => (
                    <div key={idx} className="flex flex-col py-3 border-t border-[#333333] last:border-b">
                      <h4
                        className={`font-semibold text-white text-[13px] leading-[19.5px] ${detail.desc ? 'mb-1' : ''}`}
                      >
                        {detail.title}
                      </h4>
                      {detail.desc && (
                        <p
                          className="font-normal text-[#A0A0A0] text-[12px] leading-[18px]"
                        >
                          {detail.desc}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}

            </div>
          </FadeRight>

        </div>
      </div>
    </section>
  );
}
