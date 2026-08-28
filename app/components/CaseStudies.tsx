"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const leftColumnData = [
  {
    id: 1,
    year: "2026",
    category: "Immersive Holographics",
    title: "Disturbed Innovations Group",
    description: "A technology website showcasing immersive experiences and digital innovation.",
    image: "/assets/leftColumnImages/1.webp",
    link: "/projects/disturbed-innovations"
  },
  {
    id: 2,
    year: "2026",
    category: "Fashion Brand",
    title: "Afro Maya",
    description: " A fashion website designed to highlight new collections and build brand presence.",
    image: "/assets/Afro Maya - 1.webp",
    link: "/projects/afro-maya",
    imageClass: "object-[center_15%]"
  },
  {
    id: 3,
    year: "2025",
    category: "Event Space",
    title: "Venue 29",
    description: "A bold event venue website designed to showcase experiences, increase enquiries and support bookings",
    image: "/assets/leftColumnImages/3.webp",
    link: "https://venue-29.com/"
  }
];

const rightColumnData = [
  {
    id: 4,
    year: "2026",
    category: "Real Estate",
    title: "Agency 8",
    description: "A luxury real estate website designed for users to explore exclusive developments across rental, sales and off plan.",
    image: "/assets/Agency 8 - 1.webp",
    link: "/projects/agency-8",
    imageClass: "object-[center_40%]"
  },
  {
    id: 5,
    year: "2026",
    category: "Wellness Juices",
    title: "Coshe Juices",
    description: "A wellness website built to simplify memberships, showcase products and support the brand's growth online",
    image: "/assets/Coshe.jpg.jpeg",
    link: "/projects/coshe-juices",
    imageClass: "object-[center_100%]"
  },
  {
    id: 6,
    year: "2025",
    category: "Therapy",
    title: "Sadia Psychology",
    description: "A psychologist website designed to build trust, support wellbeing and make accessing therapy feel simple.",
    image: "/assets/portrait_enhanced.jpg",
    link: "/projects/sadia-psychology",
    imageClass: "object-[58%_13%]"
  }
];

const Card = ({ year, category, title, description, image, link, imageClass, imageAspectRatio, index = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.6, delay: (index % 3) * 0.12, ease: [0.25, 1, 0.5, 1] }}
  >
    <Link
      href={link || "#"}
      target={link?.startsWith("http") ? "_blank" : undefined}
      rel={link?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex flex-col gap-6 w-full group cursor-pointer block"
    >
      {/* Image Container with Hover Zoom & Subtle Border Accent */}
      <div
        className={`w-full ${imageAspectRatio || "aspect-[16/10]"
          } bg-[#111111] rounded-[24px] overflow-hidden relative border border-white/10 group-hover:border-[#ff5500]/50 transition-colors duration-500 shadow-2xl`}
      >
        {image && (
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.07] ${imageClass || "object-center"
              }`}
          />
        )}

        {/* Subtle Dark Inset Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />

        {/* Hover Arrow Badge */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white text-sm opacity-0 group-hover:opacity-100 group-hover:scale-110 group-hover:border-[#ff5500]/60 transition-all duration-300 shadow-lg">
          <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 group-hover:text-[#ff5500]">
            ↗
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3">
        {/* Meta */}
        <div className="flex items-center gap-2 text-[#a3a3a3] text-[12px] font-light uppercase tracking-wider">
          <span className="text-[#ff5500] font-medium">{year}</span>
          <span className="text-white/20">•</span>
          <span>{category}</span>
        </div>

        {/* Title */}
        <h3 className="font-medium text-[24px] leading-[30px] tracking-[-1px] lg:text-[32px] lg:leading-[37.14px] lg:tracking-[-1.34px] text-white transition-colors duration-300 group-hover:text-[#ff5500]">
          {title}
        </h3>

        {/* Description */}
        <p className="font-normal text-[12px] sm:text-[16px] leading-[22px] text-white/80 group-hover:text-white transition-colors duration-300 max-w-[450px]">
          {description}
        </p>
      </div>
    </Link>
  </motion.div>
);

export interface CaseStudyData {
  id: string | number;
  year: string;
  category: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  imageClass?: string;
}

export interface CaseStudiesProps {
  heading?: React.ReactNode;
  description?: React.ReactNode;
  leftData?: CaseStudyData[];
  rightData?: CaseStudyData[];
  imageAspectRatio?: string;
}

export default function CaseStudies({
  heading,
  description,
  leftData = leftColumnData,
  rightData = rightColumnData,
  imageAspectRatio = "aspect-[16/10]"
}: CaseStudiesProps) {
  const mobileOrder = [];
  const maxLen = Math.max(leftData.length, rightData.length);
  for (let i = 0; i < maxLen; i++) {
    if (leftData[i]) mobileOrder.push(leftData[i]);
    if (rightData[i]) mobileOrder.push(rightData[i]);
  }

  const HeaderContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col gap-4"
    >
      <span className="font-bold text-[12px] leading-[18px] lg:text-[14px] lg:leading-[20px] tracking-[0.05em] uppercase text-[#ff5500]">
        RECENT PROJECTS
      </span>

      {heading ? (
        heading
      ) : (
        <h2 className="text-white">
          <span className="font-medium text-[32px] leading-[40px] sm:text-[40px] sm:leading-[48px] tracking-[-2px] lg:text-[56px] lg:leading-[70px] lg:tracking-[-3.2px]">
            see how we create
          </span>
          <br className="block sm:hidden" />
          <span style={{ fontFamily: '"Times New Roman", Times, serif' }} className="font-normal italic text-[42px] leading-[40px] sm:text-[48px] sm:leading-[48px] tracking-[-2px] lg:text-[72px] lg:leading-[70px] lg:tracking-[-3.2px]">
            {" "}digital {" "}
          </span>
          <span style={{ fontFamily: '"Times New Roman", Times, serif' }} className="font-normal italic text-[42px] leading-[40px] sm:text-[48px] sm:leading-[48px] tracking-[-2px] lg:text-[72px] lg:leading-[70px] lg:tracking-[-3.2px]">
            experiences{' '}
          </span>
        </h2>
      )}

      {description !== undefined ? (
        description
      ) : (
        <p className="font-normal text-[13px] leading-[24px] lg:text-[18px] lg:leading-[28px] text-white/90 whitespace-normal lg:whitespace-nowrap max-w-[600px]">
          Explore how we've helped brands transform their digital presence.
        </p>
      )}
    </motion.div>
  );

  return (
    <section className="bg-black py-16 lg:py-24 px-6 w-full flex justify-center">
      <div className="w-full max-w-[1200px] xl:max-w-[1300px]">

        {/* Mobile View */}
        <div className="flex flex-col lg:hidden w-full">
          <div className="mb-12">
            <HeaderContent />
          </div>
          <div className="flex flex-col gap-12">
            {mobileOrder.map((item, idx) => (
              <Card key={item.id} {...item} index={idx} imageAspectRatio={imageAspectRatio} />
            ))}
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 xl:gap-16 w-full items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-[120px]">
            {leftData.map((item, idx) => (
              <Card key={item.id} {...item} index={idx} imageAspectRatio={imageAspectRatio} />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            {/* Header Area */}
            <div className="mb-16">
              <HeaderContent />
            </div>

            {/* Right Column Cards */}
            <div className="flex flex-col gap-[120px]">
              {rightData.map((item, idx) => (
                <Card key={item.id} {...item} index={idx} imageAspectRatio={imageAspectRatio} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
