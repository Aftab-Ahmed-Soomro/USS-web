import React from 'react';
import Stagger from './Stagger';
import StaggerItem from './Staggeritem';
import FadeUp from './FadeUp';

const MONTHS = [
  "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY"
];

// Visual positioning matching the design
const TIMELINE_BARS = [
  { label: "Discovery", left: "0%", width: "17%" },
  { label: "Research", left: "8%", width: "22%" },
  { label: "Strategy", left: "22%", width: "23%" },
  { label: "Planning", left: "38%", width: "22%" },
  { label: "Execution", left: "55%", width: "20%" },
  { label: "Optimisation", left: "70%", width: "20%" },
  { label: "Scale", left: "84%", width: "16%" },
];

export function GrowthRoadmap() {
  return (
    <section className="relative w-full bg-black pt-[40px] sm:pt-20 px-4 min-[375px]:px-6 overflow-hidden">
      {/* Background glow behind header */}
      <div
        className="absolute top-0 left-0 w-[800px] h-[800px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 20% 30%, rgba(255, 85, 0, 0.15) 0%, transparent 60%)'
        }}
      />

      <div className="max-w-[1150px] mx-auto relative z-10">
        <Stagger staggerDelay={0.15}>
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:items-center mb-16 sm:mb-24">
            <div className="shrink-0">
              <StaggerItem>
                <p
                  className="text-[#FF5500] sm:text-[13px] mb-6"
                  style={{
                    fontWeight: 700,
                    fontSize: '12px',
                    lineHeight: '100%',
                    letterSpacing: '3.25px',
                    textTransform: 'uppercase'
                  }}
                >
                  04 ROADMAP
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-white m-0 p-0 flex flex-row flex-wrap items-baseline gap-x-2 sm:gap-x-3 md:flex-col md:items-start md:gap-0">
                  <span
                    style={{
                      fontWeight: 500,
                      fontSize: 'clamp(32px, 5vw, 56px)',
                      lineHeight: '1.2',
                      letterSpacing: '-0.84px',
                      textTransform: 'lowercase'
                    }}
                  >
                    your growth
                  </span>
                  <span
                    className="md:-mt-[5px]"
                    style={{
                      fontFamily: "'Times New Roman', Times, serif",
                      fontWeight: 400,
                      fontStyle: 'italic',
                      fontSize: 'clamp(42px, 6vw, 72px)',
                      lineHeight: '1',
                      letterSpacing: '-0.84px',
                      textTransform: 'lowercase'
                    }}
                  >
                    roadmap
                  </span>
                </h2>
              </StaggerItem>
            </div>

            <div className="flex lg:justify-end lg:items-center h-full">
              <StaggerItem>
                <p
                  className="text-neutral-400 sm:mt-[70px] max-w-[700px] text-left lg:text-right"
                  style={{
                    fontWeight: 400,
                    fontSize: 'clamp(13px, 5vw, 18px)',
                    lineHeight: '30.6px'
                  }}
                >
                  Every business needs a clear direction before investing in marketing. USS <br /> builds bespoke strategic roadmap aligns your goals, audience and <br /> channels, creating a plan that evolves as your business grows.
                </p>
              </StaggerItem>
            </div>
          </div>

          {/* Timeline Grid Section */}
          <StaggerItem>
            {/* Scrollable container for mobile */}
            <div className="w-full overflow-x-auto pt-6 pb-16 scrollbar-hide overflow-y-hidden">
              <div className="min-w-[1150px] w-full pr-6">

                {/* Timeline Header (Months) */}
                <div className="flex pl-[150px] border-b border-white/10 pb-4">
                  {MONTHS.map((month) => (
                    <div
                      key={month}
                      className="flex-1 text-neutral-400"
                      style={{
                        fontWeight: 600,
                        fontSize: '14px',
                        lineHeight: '100%',
                        letterSpacing: '1.4px',
                        textTransform: 'uppercase'
                      }}
                    >
                      {month}
                    </div>
                  ))}
                </div>

                {/* Timeline Body (Rows & Bars) */}
                <div className="relative pt-6">
                  {/* Faint vertical grid lines */}
                  <div className="absolute top-0 bottom-0 left-[150px] right-0 flex pointer-events-none">
                    {MONTHS.map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 border-l border-white/[0.03]"
                      />
                    ))}
                    {/* Final right border */}
                    <div className="border-l border-white/[0.03]" />
                  </div>

                  {/* Rows */}
                  <div className="flex flex-col gap-8 sm:gap-[32px] relative z-10">
                    {TIMELINE_BARS.map((bar, index) => (
                      <FadeUp key={bar.label} delay={0.1 + index * 0.1}>
                        <div className="flex items-center">
                          {/* Row Label */}
                          <div
                            className="w-[150px] shrink-0 text-white"
                            style={{
                              fontWeight: 500,
                              fontSize: '22px',
                              lineHeight: '100%'
                            }}
                          >
                            {bar.label}
                          </div>

                          {/* Row Track */}
                          <div className="flex-1 relative h-[16px]">
                            <div
                              className="absolute top-0 bottom-0 rounded-full"
                              style={{
                                left: bar.left,
                                width: bar.width,
                                background: '#FF5500',
                                boxShadow: '0px 0px 15px rgba(255, 85, 0, 0.5)'
                              }}
                            />
                          </div>
                        </div>
                      </FadeUp>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
