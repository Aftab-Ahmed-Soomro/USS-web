import React from 'react';
import Stagger from './Stagger';
import StaggerItem from './Staggeritem';
import FadeUp from './FadeUp';

const MONTHS = [
  "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY"
];

// Visual positioning matching the design
const TIMELINE_BARS = [
  { label: "Discovery",     left: "0%",  width: "17%", startMonth: 1, endMonth: 2,   color: '#FF5500' },
  { label: "Research",      left: "8%",  width: "22%", startMonth: 1, endMonth: 3,   color: '#FF5500' },
  { label: "Strategy",      left: "22%", width: "23%", startMonth: 2, endMonth: 4,   color: '#FF5500' },
  { label: "Planning",      left: "38%", width: "22%", startMonth: 3, endMonth: 5,   color: '#FF5500' },
  { label: "Execution",     left: "55%", width: "20%", startMonth: 4, endMonth: 6,   color: '#FF5500' },
  { label: "Optimisation",  left: "70%", width: "20%", startMonth: 5, endMonth: 7,   color: '#FF5500' },
  { label: "Scale",         left: "84%", width: "16%", startMonth: 6, endMonth: 7,   color: '#FF5500' },
];

// Short month labels for mobile cards
const SHORT_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

export function GrowthRoadmap() {
  return (
    <section className="relative w-full bg-black pt-[40px] sm:pt-20 px-6 overflow-hidden">
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
                  className="text-[#FF5500] text-center sm:text-start sm:text-[13px] mb-6"
                  style={{
                    fontWeight: 700,
                    fontSize: '12px',
                    lineHeight: '100%',
                    letterSpacing: '3.25px',
                    textTransform: 'uppercase'
                  }}
                >
                  THE JOURNEY
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-white m-0 p-0 flex flex-row flex-wrap justify-center items-baseline gap-x-2 sm:gap-x-3 md:flex-col md:justify-start md:items-start md:gap-0">
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
                  className="text-neutral-400 text-[13px] sm:text-[18px] leading-[1.6] sm:leading-[30.6px] sm:mt-[70px] max-w-[700px] text-center lg:text-right"
                  style={{
                    fontWeight: 400
                  }}
                >
                  Every strategy starts with understanding your business. From there, <br className='hidden sm:block' /> we create a marketing roadmap built around your goals, <br className='hidden sm:block' /> audience and market over a 3 - 6 month time period.
                </p>
              </StaggerItem>
            </div>
          </div>

          {/* ── DESKTOP: horizontal Gantt chart ── */}
          <StaggerItem>
            <div className="hidden md:block w-full pt-6 pb-16">
              <div className="w-full">

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
                                backgroundColor: '#FF5500',
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

          {/* ── MOBILE: 2-column compact grid ── */}
          <div className="md:hidden pb-16">
            <div className="grid grid-cols-2 gap-3">
              {TIMELINE_BARS.map((bar, index) => {
                const startPct = parseFloat(bar.left);
                const widthPct = parseFloat(bar.width);
                const isLastAlone = index === TIMELINE_BARS.length - 1 && TIMELINE_BARS.length % 2 !== 0;

                return (
                  <FadeUp
                    key={bar.label}
                    delay={0.06 + index * 0.07}
                    style={isLastAlone ? { gridColumn: '1 / -1' } : undefined}
                  >
                    <div
                      className="rounded-xl p-3"
                      style={{
                        background: isLastAlone ? '#FF5500' : 'rgba(255,255,255,0.04)',
                        border: isLastAlone ? '1px solid #FF5500' : '1px solid rgba(255,255,255,0.07)',
                      }}
                    >
                      {/* Number + Label */}
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className="flex items-center justify-center rounded-full shrink-0"
                          style={{
                            width: 26,
                            height: 26,
                            background: isLastAlone ? 'rgba(255,255,255,0.25)' : 'rgba(255,85,0,0.15)',
                            border: isLastAlone ? '1px solid rgba(255,255,255,0.4)' : '1px solid rgba(255,85,0,0.35)',
                            color: isLastAlone ? '#fff' : '#FF5500',
                            fontSize: '11px',
                            fontWeight: 700,
                          }}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span
                          className="leading-tight"
                          style={{ fontWeight: 600, fontSize: '15px', color: isLastAlone ? '#fff' : '#fff' }}
                        >
                          {bar.label}
                        </span>
                      </div>

                      {/* Mini bar */}
                      <div className="relative h-[6px] rounded-full" style={{ background: isLastAlone ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.06)' }}>
                        <div
                          className="absolute top-0 bottom-0 rounded-full"
                          style={{
                            left: `${startPct}%`,
                            width: `${widthPct}%`,
                            background: isLastAlone ? '#fff' : '#FF5500',
                            boxShadow: isLastAlone ? '0 0 8px rgba(255,255,255,0.4)' : '0 0 8px rgba(255,85,0,0.5)',
                          }}
                        />
                      </div>

                      {/* Full month axis */}
                      <div className="flex justify-between mt-1.5">
                        {SHORT_MONTHS.map((m) => (
                          <span
                            key={m}
                            style={{ fontSize: '9px', color: isLastAlone ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.25)', fontWeight: 500 }}
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>

        </Stagger>
      </div>
    </section>
  );
}
