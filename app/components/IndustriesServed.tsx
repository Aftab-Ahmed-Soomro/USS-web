"use client";

import React, { useState, useEffect } from 'react';

interface SlideData {
  id: number;
  imageSrc: string;
  centerText: string;
  bottomText: string;
}

const defaultSlides: SlideData[] = [
  // {
  //   id: 1,
  //   imageSrc: "/assets/web-carousel/1.webp", // User will put the actual sources here
  //   centerText: "We design Brand Identity for Art & Culture",
  //   bottomText: "Restaurants, cafés, F&B groups. Menu-led design, ordering, reservation flows."
  // },
  {
    id: 1,
    imageSrc: "/assets/websites/Wellness.webp",
    centerText: "We create websites for Wellness Brands",
    bottomText: ""
  },
  {
    id: 2,
    imageSrc: "/assets/websites/Technology.webp",
    centerText: "We create websites for Technology Brands",
    bottomText: ""
  },
  {
    id: 3,
    imageSrc: "/assets/websites/Real Estate.webp",
    centerText: "We create websites for Real Estate Brands",
    bottomText: ""
  },
  {
    id: 4,
    imageSrc: "/assets/websites/Fashion.webp",
    centerText: "We create websites for Fashion Brands",
    bottomText: ""
  },
  {
    id: 5,
    imageSrc: "/assets/websites/Events.webp",
    centerText: "We create websites for Events Brands",
    bottomText: ""
  }
];

export default function IndustriesServed() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % defaultSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % defaultSlides.length);
  };

  return (
    <section className="bg-[#0b0b0b] text-white py-12 lg:py-20 w-full overflow-hidden">

      {/* Text Header Section */}
      <div className="w-full mx-auto px-6 max-w-[1442px]">
        <div className="mb-10 lg:mb-14 flex flex-col  sm:items-start items-center text-center sm:text-left">
          <h2 className="text-white mb-6 font-medium text-[32px] sm:text-[36px] leading-[40px] sm:leading-[44px] tracking-[-1px] lg:text-[56px] lg:leading-[75.6px] lg:tracking-[-3.16px] align-middle">
            Industries we have <span className="timesFontFamily font-serif text-[42px] sm:text-[48px] lg:text-[72px] font-normal italic">served</span>
          </h2>
          <p className="text-[#FFFFFF] font-normal text-[13px] leading-[20px] lg:text-[20px] lg:leading-[32.5px] tracking-normal align-middle max-w-[650px]">
            Our website approach combines strategy, design, custom development & ongoing optimization all under one USS roof.
          </p>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="relative w-full overflow-hidden">
        {/* Main Background Image */}
        <div 
          onClick={handleNext}
          className="w-full transition-opacity duration-500 cursor-pointer select-none"
          title="Click to view next industry"
        >
          {defaultSlides[currentSlide].imageSrc ? (
            <img
              src={defaultSlides[currentSlide].imageSrc}
              alt="Industry served"
              loading="lazy"
              decoding="async"
              className="w-full h-auto block"
            />
          ) : (
            <div className="w-full h-[300px] sm:h-[600px] bg-zinc-800 flex items-center justify-center">
              <span className="text-zinc-600">Image Source Empty</span>
            </div>
          )}
        </div>

        {/* Centered Box Component */}
        <div className="absolute inset-0 items-end ml-4 sm:ll-0 bottom-2 justify-center pointer-events-none px-4 flex">
          <div 
            onClick={handleNext}
            className="bg-[#f0f0f0] text-black px-3 py-1.5 sm:px-6 sm:py-2.5 lg:px-8 rounded-sm shadow-xl font-normal text-[10px] sm:text-[14px] leading-[14px] sm:leading-[18px] lg:text-[16px] lg:leading-[21.12px] capitalize text-center max-w-[90%] pointer-events-auto cursor-pointer select-none"
          >
            {defaultSlides[currentSlide].centerText}
          </div>
        </div>

        {/* Bottom Overlay & Navigation */}
        <div className="absolute bottom-0 left-0 w-full px-4 sm:px-6 md:px-12 py-4 sm:py-6 lg:py-10 flex flex-col md:flex-row justify-between items-start md:items-end ">

          {/* Bottom Left Text */}
          <p className={`text-white md:mb-0 md:pr-10 font-semibold text-[13px] leading-[20px] lg:text-[14px] lg:leading-[22.75px] align-middle max-w-[800px] ${defaultSlides[currentSlide].bottomText ? 'mb-4 sm:mb-6' : 'mb-2 sm:mb-4'}`}>
            {defaultSlides[currentSlide].bottomText}
          </p>

          {/* Dots Navigation */}
          <div className="flex space-x-2.5 pb-1">
            {defaultSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === index
                    ? 'bg-white scale-110'
                    : 'bg-white/40 hover:bg-white/60'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
