"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, useSpring, type Variants } from "framer-motion";

type StatItem = {
  number: string;
  label: string;
};

const stats: StatItem[] = [
  { number: "120+", label: "Websites Designed" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "1.2M+", label: "Website Visitors Generated" },
  { number: "15+", label: "Industries Served" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

const statsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const statItemVariants: Variants = {
  hidden: { opacity: 0, y: 35, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

function parseValue(raw: string) {
  const match = raw.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!match) return { prefix: "", target: 0, suffix: raw, decimals: 0 };
  const numStr = match[2];
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return {
    prefix: match[1],
    target: parseFloat(numStr),
    suffix: match[3],
    decimals,
  };
}

function Counter({ value }: { value: string }) {
  const { prefix, target, suffix, decimals } = parseValue(value);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const spring = useSpring(0, {
    stiffness: 35,
    damping: 16,
    restDelta: 0.001,
  });

  const [displayValue, setDisplayValue] = useState(
    (0).toFixed(decimals)
  );

  useEffect(() => {
    if (isInView) {
      spring.set(target);
    }
  }, [isInView, spring, target]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      const clamped = Math.min(Math.max(0, latest), target);
      setDisplayValue(clamped.toFixed(decimals));
    });
    return () => unsubscribe();
  }, [spring, target, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

export default function DedicatedPartner() {
  return (
    <section className="relative overflow-hidden bg-[#000] text-white pt-4 pb-4 sm:pt-0 py-0 lg:pb-24 px-6 w-full flex flex-col items-center">
      {/* Subtle background ambient glow */}
      <div 
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full opacity-15 blur-[140px]"
        style={{ background: 'radial-gradient(circle, #ff5500 0%, rgba(0,0,0,0) 70%)' }}
      />

      <div className="relative z-10 w-full max-w-[1150px]">
        
        {/* Top Content Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 mb-2 sm:mb-14"
        >
          
          {/* Left: Heading */}
          <div className="lg:col-span-8">
            <motion.h2 
              variants={itemVariants}
              className="whitespace-normal lg:whitespace-nowrap font-normal text-[28px] leading-[36px] sm:text-[36px] sm:leading-[44px] tracking-[-1px] lg:text-[50px] lg:leading-[65px] lg:tracking-[-1.52px] align-middle"
            >
              your website is the <br className="hidden md:block" /> 
              foundation of your <br className="hidden md:block" /> 
              digital presence.
            </motion.h2>
          </div>

          {/* Right: Paragraph & Button */}
          <div className="lg:col-span-4 flex flex-col items-start mt-0 sm:mt-8 lg:mt-5 ml-0 lg:-ml-26">
            <motion.p 
              variants={itemVariants}
              className="font-normal text-[13px] sm:text-[15px] leading-[24.38px] align-middle text-[#a3a3a3] mb-6 max-w-[500px]"
            >
              Your website is where every customer journey begins. It&apos;s the place your marketing, advertising and social media lead back to, making it one of the most important assets your business will ever invest in.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <Link 
                href="/contact"
                className="relative inline-flex items-center justify-center rounded-full border px-8 py-2 sm:py-3.5 transition-all duration-300 border-[#ff5500] bg-[#ff5500] text-white hover:shadow-[0_0_25px_rgba(255,85,0,0.4)] group overflow-hidden"
              >
                <span className="uppercase text-[12px] sm:text-[13px] font-bold leading-[20px] align-middle transition-transform duration-300 group-hover:translate-x-[-2px]">
                  Book a Consultation
                </span>
                {/* <span className="ml-2.5 text-white inline-block opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  &rarr;
                </span> */}
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Line Divider */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent my-6 origin-left"
        />

        {/* Bottom: Stats */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={statsContainerVariants}
          className="flex justify-between gap-2 sm:gap-12 md:gap-0 w-full mt-2 sm:mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={statItemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col items-start group cursor-default"
            >
              <span className="font-medium text-[24px] min-[375px]:text-[28px] leading-[1.1] sm:text-[48px] sm:leading-[48px] lg:text-[80px] lg:leading-[88px] tracking-[-0.5px] lg:tracking-[-1.76px] mb-1.5 sm:mb-2 lg:mb-4 text-white">
                <Counter value={stat.number} />
              </span>
              <span className="font-normal text-[7px] leading-[1.3] lg:text-[13px] lg:leading-[19.5px] tracking-[0.32px] text-[#a3a3a3] transition-colors duration-300 group-hover:text-white">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
