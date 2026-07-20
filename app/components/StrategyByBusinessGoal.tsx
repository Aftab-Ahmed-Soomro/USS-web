import React from 'react';
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
  return (
    <section className="relative w-full bg-black py-[60px] sm:py-24 px-6 overflow-hidden">
      <div className="max-w-[1150px] mx-auto relative z-10">
        
        {/* Header Section */}
        <FadeUp delay={0.1}>
          <div className="mb-12">
            <h2 className="text-white flex flex-col sm:flex-row sm:items-center gap-x-4 m-0 p-0">
              <span
                style={{
                  fontWeight: 500,
                  fontSize: 'clamp(40px, 4vw, 56px)',
                  lineHeight: 'clamp(50px, 5vw, 70px)',
                  letterSpacing: '-3px',
                  textTransform: 'lowercase'
                }}
              >
                strategy by
              </span>
              <span
                style={{
                  color: '#FF5500',
                  fontFamily: "'Times New Roman', Times, serif",
                  fontWeight: 400,
                  fontStyle: 'italic',
                  fontSize: 'clamp(50px, 5vw, 72px)',
                  lineHeight: 'clamp(50px, 5vw, 70px)',
                  letterSpacing: '-3px',
                  textTransform: 'lowercase',
                  marginTop: '-5px'
                }}
              >
                business goal
              </span>
            </h2>
          </div>
        </FadeUp>

        {/* Grid Section */}
        <Stagger staggerDelay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-black border-[2px] border-black">
            {GOALS.map((goal, index) => (
              <StaggerItem key={goal.id}>
                <div 
                  className="group relative overflow-hidden bg-[#111] cursor-pointer w-full"
                  style={{ aspectRatio: '318.66 / 383.96' }}
                >
                  {/* Background Image */}
                  <Image 
                    src={goal.image}
                    alt={goal.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content Container */}
                  <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end h-full">
                    <div className="mt-auto transform transition-transform duration-300 group-hover:-translate-y-2">
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
                      
                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 mt-2">
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
            ))}
          </div>
        </Stagger>

      </div>
    </section>
  );
}
