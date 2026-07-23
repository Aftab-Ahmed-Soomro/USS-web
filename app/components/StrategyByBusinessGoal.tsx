"use client";
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Stagger from './Stagger';
import StaggerItem from './Staggeritem';
import FadeUp from './FadeUp';

const GOALS = [
  {
    id: 1,
    title: 'Lead Generation',
    description: 'Generate a consistent flow of qualified leads through the right channels, messaging and strategy.',
    image: '/assets/businessGoal/1.jpg'
  },
  {
    id: 2,
    title: 'New Location Opening',
    description: 'Generate a consistent flow of qualified leads through the right channels, messaging and strategy.',
    image: '/assets/businessGoal/2.jpg'
  },
  {
    id: 3,
    title: 'Membership Growth',
    description: 'Generate a consistent flow of qualified leads through the right channels, messaging and strategy.',
    image: '/assets/businessGoal/3.jpg'
  },
  {
    id: 4,
    title: 'Brand Launch',
    description: 'Generate a consistent flow of qualified leads through the right channels, messaging and strategy.',
    image: '/assets/businessGoal/4.png'
  },
  {
    id: 5,
    title: 'Event Promotion',
    description: 'Generate a consistent flow of qualified leads through the right channels, messaging and strategy.',
    image: '/assets/businessGoal/5.jpg'
  },
  {
    id: 6,
    title: 'Revenue Growth',
    description: 'Generate a consistent flow of qualified leads through the right channels, messaging and strategy.',
    image: '/assets/businessGoal/6.jpg'
  },
  {
    id: 7,
    title: 'Customer Retention',
    description: 'Generate a consistent flow of qualified leads through the right channels, messaging and strategy.',
    image: '/assets/businessGoal/7.png'
  },
  {
    id: 8,
    title: 'Market Expansion',
    description: 'Generate a consistent flow of qualified leads through the right channels, messaging and strategy.',
    image: '/assets/businessGoal/8.jpg'
  }
];

export function StrategyByBusinessGoal() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full bg-black py-[60px] sm:py-24 px-6 overflow-hidden">
      <div className="max-w-[1150px] mx-auto relative z-10">
        
        {/* Header Section */}
        <FadeUp delay={0.1}>
          <div className="mb-4 sm:mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <h2 className="text-white flex flex-row flex-wrap items-baseline gap-x-2 sm:gap-x-4 m-0 p-0">
              <span
                style={{
                  fontWeight: 500,
                  fontSize: 'clamp(32px, 4vw, 56px)',
                  lineHeight: 'clamp(50px, 5vw, 70px)',
                  letterSpacing: '-3px',
                  textTransform: 'lowercase'
                }}
              >
                strategy by
              </span>
              <span
                className="sm:-mt-[5px]"
                style={{
                  color: '#FF5500',
                  fontFamily: "'Times New Roman', Times, serif",
                  fontWeight: 400,
                  fontStyle: 'italic',
                  fontSize: 'clamp(42px, 5vw, 72px)',
                  lineHeight: 'clamp(50px, 5vw, 70px)',
                  letterSpacing: '-3px',
                  textTransform: 'lowercase'
                }}
              >
                business goal
              </span>
            </h2>
          </div>
        </FadeUp>

        {/* Grid Section */}
        <Stagger staggerDelay={0.1}>
          <div className="relative">
            {/* Left Arrow */}
            <button 
              onClick={() => scroll('left')}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/20 flex sm:hidden items-center justify-center text-white bg-black/50 backdrop-blur-sm hover:bg-black/80 transition-colors"
              aria-label="Scroll left"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>

            {/* Right Arrow */}
            <button 
              onClick={() => scroll('right')}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/20 flex sm:hidden items-center justify-center text-white bg-black/50 backdrop-blur-sm hover:bg-black/80 transition-colors"
              aria-label="Scroll right"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>

            <div 
              ref={scrollRef}
              className="flex overflow-x-auto snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-black border-[2px] border-black [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
            {GOALS.map((goal, index) => {
              const isActive = activeId === goal.id;
              return (
              <StaggerItem key={goal.id} className="w-[85vw] shrink-0 snap-center sm:w-auto">
                <div 
                  className="group relative overflow-hidden bg-[#111] cursor-pointer w-full"
                  style={{ aspectRatio: '318.66 / 383.96' }}
                  onClick={() => setActiveId(isActive ? null : goal.id)}
                >
                  {/* Background Image */}
                  <Image 
                    src={goal.image}
                    alt={goal.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className={`object-cover transition-transform duration-700 lg:group-hover:scale-105 ${isActive ? 'scale-105' : ''}`}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 lg:group-hover:opacity-100 ${isActive ? 'opacity-100' : 'opacity-80'}`} />

                  {/* Content Container */}
                  <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end h-full pointer-events-none">
                    <div className={`mt-auto transform transition-transform duration-300 lg:group-hover:-translate-y-2 ${isActive ? '-translate-y-2' : ''}`}>
                      <h3 
                        className="text-white"
                        style={{
                          fontWeight: 700,
                          fontSize: '20.9px',
                          lineHeight: '120%'
                        }}
                      >
                        {goal.title}
                      </h3>
                      
                      <div className={`grid transition-all duration-300 ease-in-out mt-2 lg:group-hover:grid-rows-[1fr] lg:group-hover:opacity-100 ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                          <p 
                            className="text-[#FFFFFFB3]"
                            style={{
                              fontWeight: 400,
                              fontSize: '13.93px',
                              lineHeight: '150%'
                            }}
                          >
                            {goal.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </StaggerItem>
            )})}
            </div>
          </div>
        </Stagger>

      </div>
    </section>
  );
}
