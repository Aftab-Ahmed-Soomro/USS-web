"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const leftColumnData = [
  {
    id: 1,
    year: "2026",
    category: "Marketing Agency",
    title: "Disturbed Innovations Group",
    description: "A premium corporate website built to reposition the brand and communicate its innovation-led services",
    image: "/assets/leftColumnImages/1.png",
    link: "/projects/disturbed-innovations"
  },
  {
    id: 2,
    year: "2025",
    category: "Restaurant Group",
    title: "Coshe Juices",
    description: "qsr and restaurant identity formed with a reservation-and-ordering menu system built for repeat guests.",
    image: "/assets/leftColumnImages/2.png",
    link: "/projects/coshe-juices"
  },
  {
    id: 3,
    year: "2025",
    category: "Professional Services",
    title: "Venue 29",
    description: "A bold event venue website designed to showcase experiences, increase enquiries and support bookings",
    image: "/assets/leftColumnImages/3.jpg",
    link: "https://venue-29.com/"
  }
];

const rightColumnData = [
  {
    id: 4,
    year: "2025",
    category: "Real Estate",
    title: "Agency 8",
    description: "A luxury real estate website designed to showcase premium developments while delivering a seamless property browsing experience",
    image: "/assets/rightColumnImages/1.png",
    link: "/projects/agency-8"
  },
  {
    id: 5,
    year: "2025",
    category: "Restaurant Group",
    title: "Afro Maya",
    description: " A luxury fashion website designed to showcase collections, strengthen the brand identity and create a seamless online experience.",
    image: "/assets/rightColumnImages/2.png",
    link: "/projects/afro-maya"
  },
  {
    id: 6,
    year: "2025",
    category: "Wellness Business",
    title: "Bushra Therapy",
    description: "A specialist healthcare website designed to build trust, improve accessibility and simplify the patient journey",
    image: "/assets/WebsiteWithoutCTA.png",
    link: "https://bushratherapy.com/",
    imageClass: "object-[58%_0%]"
  }
];

const Card = ({ year, category, title, description, image, link, imageClass, imageAspectRatio }: any) => (
  <Link
    href={link || "#"}
    target={link?.startsWith("http") ? "_blank" : undefined}
    rel={link?.startsWith("http") ? "noopener noreferrer" : undefined}
    className="flex flex-col gap-6 w-full group cursor-pointer block"
  >
    {/* Image Placeholder */}
    <div className={`w-full ${imageAspectRatio || "aspect-[617/480]"} bg-[#111111] rounded-[20px] overflow-hidden transition-transform duration-500 group-hover:scale-[1.02] relative`}>
      {image && <img src={image} alt={title} className={`absolute inset-0 w-full h-full object-cover ${imageClass || "object-center"}`} />}
    </div>

    {/* Content */}
    <div className="flex flex-col gap-3">
      {/* Meta */}
      <div className="flex items-center gap-2 text-[#a3a3a3] text-[12px] font-light">
        <span>{year}</span>
        <span>•</span>
        <span>{category}</span>
      </div>

      {/* Title */}
      <h3 className="font-medium text-[24px] leading-[30px] tracking-[-1px] lg:text-[32px] lg:leading-[37.14px] lg:tracking-[-1.34px] text-white transition-colors group-hover:text-[#ff5500]">
        {title}
      </h3>

      {/* Description */}
      <p className="font-normal text-[12px] sm:text-[16px] leading-[22px] lowercase text-white/90 max-w-[450px]">
        {description}
      </p>
    </div>
  </Link>
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
  imageAspectRatio = "aspect-[617/480]"
}: CaseStudiesProps) {
  const mobileOrder = [];
  const maxLen = Math.max(leftData.length, rightData.length);
  for (let i = 0; i < maxLen; i++) {
    if (leftData[i]) mobileOrder.push(leftData[i]);
    if (rightData[i]) mobileOrder.push(rightData[i]);
  }

  const HeaderContent = () => (
    <>
      <span className="font-bold text-[12px] leading-[18px] lg:text-[14px] lg:leading-[20px] tracking-[0.05em] uppercase text-white">
        RECENT PROJECTS
      </span>

      {heading ? (
        heading
      ) : (
        <h2 className="text-white">
          <span className="font-medium text-[32px] leading-[40px] sm:text-[40px] sm:leading-[48px] tracking-[-2px] lg:text-[56px] lg:leading-[70px] lg:tracking-[-3.2px]">
            see how we create  
          </span>
          <span style={{ fontFamily: '"Times New Roman", Times, serif' }} className="font-normal italic text-[42px] leading-[40px] sm:text-[48px] sm:leading-[48px] tracking-[-2px] lg:text-[72px] lg:leading-[70px] lg:tracking-[-3.2px]">
            {" "}digital {" "}
          </span>
          <span style={{ fontFamily: '"Times New Roman", Times, serif' }} className="font-normal italic text-[42px] leading-[40px] sm:text-[48px] sm:leading-[48px] tracking-[-2px] lg:text-[72px] lg:leading-[70px] lg:tracking-[-3.2px]">
            experiences{' '}
          </span>
          {/* <span className="font-medium text-[32px] leading-[40px] sm:text-[40px] sm:leading-[48px] tracking-[-2px] lg:text-[56px] lg:leading-[70px] lg:tracking-[-3.2px]">
            websites
          </span> */}
        </h2>
      )}

      {description !== undefined ? (
        description
      ) : (
        <p className="font-normal text-[13px] leading-[24px] lg:text-[18px] lg:leading-[28px] text-white/90 whitespace-normal lg:whitespace-nowrap max-w-[600px]">
          Explore how we've helped brands transform their digital presence.
        </p>
      )}
    </>
  );

  return (
    <section className="bg-black py-16 lg:py-24 px-6 w-full flex justify-center">
      <div className="w-full max-w-[1150px]">

        {/* Mobile View */}
        <div className="flex flex-col lg:hidden w-full">
          <div className="flex flex-col gap-4 mb-12">
            <HeaderContent />
          </div>
          <div className="flex flex-col gap-12">
            {mobileOrder.map(item => (
              <Card key={item.id} {...item} imageAspectRatio={imageAspectRatio} />
            ))}
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex flex-row gap-16 w-full">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-[120px]">
            {leftData.map(item => (
              <Card key={item.id} {...item} imageAspectRatio={imageAspectRatio} />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col">
            {/* Header Area */}
            <div className="flex flex-col gap-4 mb-16">
              <HeaderContent />
            </div>

            {/* Right Column Cards */}
            <div className="flex flex-col gap-[120px]">
              {rightData.map(item => (
                <Card key={item.id} {...item} imageAspectRatio={imageAspectRatio} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}