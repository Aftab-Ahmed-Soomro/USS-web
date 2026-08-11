"use client";

import { FaInstagramSquare, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import WeAreGlobal from "./ContactGlobal";
import { useState } from "react";

const offices = [
  {
    city: "Dubai",
    lines: ["Flowork Offices", "Business Park 4", "Dubai Hills, United Arab Emirates"],
  },
  {
    city: "Atlanta",
    lines: ["Office 1175", "Peachtree Street NE", "30361", "Atlanta", "United States"],
  },
  {
    city: "London",
    lines: ["Office 4", "Green Dragon House", "CR0 1FS", "London", "United Kingdom"],
  },
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/new-360-with-form" },
  { name: "Our Work", href: "/projects" },
  { name: "Contact Us", href: "/contact" },
  { name: "Book a Consultation", href: "/contact" }
];

const servicesCol1 = [
  { name: "360 Marketing", href: "/new-360-with-form" },
  { name: "Google Ads", href: "/google-ads" },
  { name: "Meta Ads", href: "/meta-ads" },
  { name: "Email Marketing", href: "/email-marketing" },
  { name: "WhatsApp & SMS", href: "/whatsapp-and-sms" },
];

const servicesCol2 = [
  { name: "Marketing Strategy", href: "/marketing-strategy" },
  { name: "Social Media Marketing", href: "/social-media-management" },
  { name: "Content Creation", href: "/content-creation" },
  { name: "Web Development", href: "/website-development" },
  { name: "Branding & Graphics", href: "/branding" },
];

const servicesData = {
  top: { label: "360 Marketing", href: "/new-360-with-form" },
  performance: {
    title: "Performance Marketing",
    items: [
      { label: "Marketing Strategy", href: "/marketing-strategy" },
      { label: "Google Ads", href: "/google-ads" },
      { label: "Meta Ads", href: "/meta-ads" },
      { label: "Email Marketing", href: "/email-marketing" },
      { label: "WhatsApp & SMS", href: "/whatsapp-and-sms" },
    ],
  },
  creative: {
    title: "Creative Marketing",
    items: [
      { label: "Social Media Marketing", href: "/social-media-management" },
      { label: "Content Creation", href: "/content-creation" },
      { label: "Website UX Design", href: "/website-design" },
      { label: "Website Development", href: "/website-development" },
      { label: "Branding & Graphics", href: "/branding" },
    ],
  },
  bottom: { label: "Talent Management", href: "/talent-management" },
};

export function Footer({ showGlobal = true }: { showGlobal?: boolean }) {
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <footer className="bg-[#000] text-white pt-10 sm:pt-20 pb-10 px-4 sm:px-6 font-sans">
      <div className="max-w-[1200px] mx-auto">
        {/* Top Section: Offices */}
        {showGlobal && (
          <>
            <WeAreGlobal
              images={{
                Dubai: "/assets/Dubai.webp",
                London: "/assets/London.webp",
                Atlanta: "/assets/Atlanta.webp"
              }}
            />
            {/* Divider */}
            <div className="h-px bg-white/10 w-full mb-8 sm:mb-16"></div>
          </>
        )}

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 sm:gap-16 lg:gap-24">

          {/* Left Column */}
          <div className="flex flex-col w-full lg:w-[420px]">
            <div className="flex items-center justify-between mb-4 w-full">
              <h2 className="text-white text-[42px] font-bold tracking-wide">USS</h2>
              <div className="flex mr-0 sm:mr-10 items-center gap-3 text-white">
                <a href="https://www.linkedin.com/company/united-strategic-solutions" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF5500] transition-colors"><FaLinkedin className="text-3xl" /></a>
                <a href="https://www.instagram.com/unitedstrategicsolutions/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF5500] transition-colors"><FaInstagramSquare className="text-3xl" /></a>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 mb-8">
              <div className="w-[28px] h-[28px] rounded-full border border-[#FF5500] text-[#FF5500] flex items-center justify-center font-medium text-sm flex-shrink-0">
                <FaEnvelope size={14} />
              </div>
              <a href="mailto:contact@unitedstrategicsolutions.com" className="text-[#FFFFFF] text-[12px] min-[375px]:text-[13px] sm:text-[14px] break-all min-[400px]:break-normal hover:text-[#FF5500] transition-colors">
                contact@unitedstrategicsolutions.com
              </a>
            </div>

            <p className="text-white font-semibold text-lg mb-5">Subscribe to our newsletter</p>

            <form className="flex gap-2 min-[375px]:gap-4 w-full">
              <input
                type="email"
                placeholder="Your email"
                aria-label="Email address"
                className="bg-[#121212] border border-white/10 focus:border-[#FF5500] transition-colors rounded-full px-4 min-[375px]:px-6 py-3 sm:py-3.5 text-white text-[12px] sm:text-[14px] outline-none flex-grow min-w-0 placeholder-text-[#FFFFFFA6]"
                required
              />
              <button
                type="submit"
                className="bg-[#FF5500] hover:bg-[#e04a00] text-white rounded-full px-5 min-[375px]:px-8 py-3 sm:py-3.5 text-[12px] sm:text-[14px] font-medium transition-colors flex-shrink-0 shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Right Columns Container */}
          <div className="flex flex-col md:flex-row gap-4 sm:gap-16 lg:gap-24 lg:ml-auto pt-4 w-full">
            {/* Quick Links */}
            <div className="mr-0 sm:mr-14 border-b border-white/10 sm:border-none pb-4 sm:pb-0">
              <button
                onClick={() => setIsQuickLinksOpen(!isQuickLinksOpen)}
                className="flex items-center justify-between w-full sm:pointer-events-none outline-none"
              >
                <h3 className="text-[#FF5500] font-bold text-[16px] sm:text-[20px] tracking-wider">Quick Links</h3>
                <span className="text-[#FF5500] sm:hidden text-[22px] leading-none">{isQuickLinksOpen ? "−" : "+"}</span>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${isQuickLinksOpen ? "max-h-[300px] opacity-100 mt-3 sm:mt-6" : "max-h-0 opacity-0 mt-0 sm:max-h-none sm:opacity-100 sm:mt-6"}`}>
                <ul className="flex flex-col gap-2.5 sm:gap-[14px] border-l-2 border-[#FF5500]/40 pl-3 sm:border-none sm:pl-0">
                  {quickLinks.map(link => (
                    <li key={link.name}>
                      <Link href={link.href} className="flex items-center gap-2 py-0.5 text-[13px] sm:text-[14px] font-medium text-white/80 hover:text-[#FF5500] transition-colors">
                        <span className="text-[#FF5500] text-[9px] shrink-0 sm:hidden">✦</span>
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Services */}
            <div className="border-b border-white/10 sm:border-none pb-4 sm:pb-0">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full sm:pointer-events-none outline-none sm:block"
              >
                <h3 className="text-[#FF5500] font-bold text-[16px] sm:text-[20px] tracking-wider text-left sm:text-center mr-0 sm:mr-10">Services</h3>
                <span className="text-[#FF5500] sm:hidden text-[22px] leading-none">{isServicesOpen ? "−" : "+"}</span>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? "max-h-[1000px] opacity-100 mt-3 sm:mt-6" : "max-h-0 opacity-0 mt-0 sm:max-h-none sm:opacity-100 sm:mt-6"}`}>

                {/* Mobile View: 2 side-by-side columns */}
                <div className="sm:hidden border-l-2 border-[#FF5500]/40 pl-3 grid grid-cols-2 gap-3">
                  {/* Column 1: 360 Marketing + Performance Marketing */}
                  <div className="flex flex-col gap-2.5">
                    <Link
                      href={servicesData.top.href}
                      className="flex items-center gap-1.5 py-0.5 text-[13px] font-normal text-white transition hover:text-[#FF5500]"
                    >
                      <span className="text-[#FF5500] text-[9px] shrink-0">✦</span>
                      <span>{servicesData.top.label}</span>
                    </Link>

                    <div className="h-[1px] w-full bg-white/10" />

                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-1.5 text-[12px] font-bold tracking-[0.03em] text-white py-0.5">
                        <span className="text-[#FF5500] text-[8px] shrink-0">●</span>
                        <span>{servicesData.performance.title}</span>
                      </div>
                      <div className="flex flex-col gap-1.5 pl-2 border-l border-white/10">
                        {servicesData.performance.items.map((service) => (
                          <Link
                            key={service.label}
                            href={service.href}
                            className="flex items-center gap-1.5 py-0.5 text-[12px] font-medium text-white/80 transition hover:text-[#FF5500]"
                          >
                            <span className="text-[#FF5500] text-[7px] shrink-0">✦</span>
                            <span>{service.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Talent Management + Creative Marketing */}
                  <div className="flex flex-col gap-2.5">
                    <Link
                      href={servicesData.bottom.href}
                      className="flex items-center gap-1.5 py-0.5 text-[13px] font-normal text-white transition hover:text-[#FF5500]"
                    >
                      <span className="text-[#FF5500] text-[9px] shrink-0">✦</span>
                      <span>{servicesData.bottom.label}</span>
                    </Link>

                    <div className="h-[1px] w-full bg-white/10" />

                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-1.5 text-[12px] font-bold tracking-[0.03em] text-white py-0.5">
                        <span className="text-[#FF5500] text-[8px] shrink-0">●</span>
                        <span>{servicesData.creative.title}</span>
                      </div>
                      <div className="flex flex-col gap-1.5 pl-2 border-l border-white/10">
                        {servicesData.creative.items.map((service) => (
                          <Link
                            key={service.label}
                            href={service.href}
                            className="flex items-center gap-1.5 py-0.5 text-[12px] font-medium text-white/80 transition hover:text-[#FF5500]"
                          >
                            <span className="text-[#FF5500] text-[7px] shrink-0">✦</span>
                            <span>{service.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop View: Original clean 2-column layout */}
                <div className="hidden sm:flex sm:flex-row sm:gap-10">
                  <ul className="flex flex-col gap-[14px]">
                    {servicesCol1.map(service => (
                      <li key={service.name}>
                        <Link href={service.href} className="text-white/80 text-[13px] sm:text-[14px] hover:text-[#FF5500] transition-colors whitespace-nowrap">{service.name}</Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-col gap-[14px]">
                    {servicesCol2.map(service => (
                      <li key={service.name}>
                        <Link href={service.href} className="text-white/80 text-[13px] sm:text-[14px] hover:text-[#FF5500] transition-colors whitespace-nowrap">{service.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 sm:mt-24 text-center">
          <p className="text-gray-400 text-[12px]">
            © 2025 United Strategic Solutions. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}