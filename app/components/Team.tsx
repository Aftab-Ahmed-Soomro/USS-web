"use client";

import Image from "next/image";
import { useState } from "react";

const teamMembers = [
  {
    role: "CEO/Founder",
    image: "/assets/team/emanuel.webp",
    color: "#72cc3b",
  },
  {
    role: "Marketing Director",
    image: "/assets/team/meeral.webp",
    color: "#f45122",
  },
  {
    role: "Content Creator",
    image: "/assets/team/russ.webp",
    color: "#ff8f1a",
  },
  {
    role: "Creative Director",
    image: "/assets/team/saadat.webp",
    color: "#45a9e9",
  },
  {
    role: "Social Media Manager",
    image: "/assets/team/prag.webp",
    color: "#72cc3b",
  },
  {
    role: "Content Creator2",
    image: "/assets/team/max.webp",
    color: "#f45122",
  },
  {
    role: "Paid Social",
    image: "/assets/team/tania.webp",
    color: "#45a9e9",
  },
];

export function Team() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative z-10 bg-[#0a0a0a]  text-white overflow-hidden">
      <div className="mx-auto flex max-w-[1200px]  px-4 min-[375px]:px-6 flex-col items-center gap-[8px] sm:gap-4 pt-[10px] sm:pt-[20px]">
        <h2 className="w-full px-0 font-[var(--font-be-vietnam)] text-[30px] sm:text-[56px] font-medium leading-[1.12] lowercase tracking-[-0.02em] sm:leading-[68px]">
          USS{"  "}
          <span className="font-serif text-[36px] sm:text-[72px] font-extralight timesFontFamily italic tracking-[-0.02em]">
            {" "}team
          </span>
        </h2>

        <div className="relative w-full">
          {/* Accordion Container */}
          <div className="flex w-full h-[380px] sm:h-[500px] lg:h-[600px] flex-row gap-0 overflow-hidden">
            {teamMembers.map((member, idx) => (
              <article
                className={`group relative cursor-pointer overflow-hidden transition-all duration-500 ease-in-out hover:flex-[6] sm:hover:flex-[1.5] lg:hover:flex-[2] ${activeIndex === idx ? 'flex-[6] sm:flex-[1.5] lg:flex-[2]' : 'flex-1'}`}
                key={member.role}
                style={{ backgroundColor: member.color }}
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Image - fixed width pinned to left, doesn't stretch/zoom on hover */}
                <div className="absolute inset-0 z-0 h-full w-full overflow-hidden border border-black">
                  <div className="absolute top-0 left-0 h-full w-[140px] min-[375px]:w-[180px] sm:w-[240px] lg:w-[320px] -translate-x-[20px] sm:-translate-x-17">
                    <Image
                      src={member.image}
                      alt={member.role}
                      fill
                      sizes="320px"
                      className="object-cover object-bottom"
                    />
                  </div>
                </div>

                {/* Text Overlay */}
                <div className="pointer-events-none absolute top-4 left-2 min-[375px]:left-3 sm:left-4 z-10 flex gap-3 sm:gap-6 w-[250px] sm:w-[300px]">
                  <span className="font-sans text-[10px] sm:text-[12px] font-bold tracking-widest text-white/80 mt-1 sm:mt-0">
                    0{idx + 1}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}