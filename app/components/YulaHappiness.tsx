"use client";

import React from "react";

export function YulaHappiness() {
  return (
    <section className="bg-black w-full flex flex-col items-center">
      <div className="w-full relative">
        <div className="w-full aspect-[1442/677] overflow-hidden">
          <img 
            src="/assets/yulaHappiness.png" 
            alt="Yula Happiness" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
