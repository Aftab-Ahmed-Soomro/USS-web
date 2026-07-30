"use client";

import FadeUp from "./FadeUp";

export function YulaHappiness() {
  return (
    <section className="bg-black w-full flex flex-col items-center">
      <FadeUp delay={0.1} className="w-full relative">
        <div className="w-full aspect-[4/3] md:aspect-[1442/677] overflow-hidden">
          <img 
            src="/assets/yulaHappiness.png" 
            alt="Yula Happiness" 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </FadeUp>
    </section>
  );
}
