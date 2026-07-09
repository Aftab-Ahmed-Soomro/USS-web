"use client";

import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import WeAreGlobal from "./ContactGlobal";

const offices = [
  {
    city: "Dubai",
    lines: ["Flowork Offices, Business Park 4,", "Dubai Hills, United Arab Emirates"],
  },
  {
    city: "London",
    lines: ["Office 4, Green Dragon House", "London, CR0 1FS, United Kingdom"],
  },
  {
    city: "Atlanta",
    lines: ["Office 1175, Peachtree St NE, #", "Atlanta, GA 30361, United States"],
  },
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/new-360-with-form" },
  { name: "Work", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Book a Consultation", href: "/contact" }
];

const servicesCol1 = [
  { name: "Meta Ads", href: "/services/meta-ads" },
  { name: "Google Ads", href: "/services/google-ads" },
  { name: "Web Development", href: "/services/website" },
  { name: "Performance Marketing", href: "/services/performance-marketing" },
  { name: "Email Marketing", href: "/services/email-marketing" }
];

const servicesCol2 = [
  { name: "Content Creation", href: "/services/content-creation" },
  { name: "WhatsApp & SMS", href: "/services/whatsapp-and-sms" },
  { name: "Marketing Strategy", href: "/services/marketing-strategy" },
  { name: "Talent Management", href: "/services/talent-management" },
  { name: "Social Media Management", href: "/services/social-media-management" }
];

export function Footer() {
  return (
    <footer className="bg-[#050505] text-white pt-20 pb-10 px-6  font-sans border-t border-white/5">
      <div className="max-w-[1150px] mx-auto">
        {/* Top Section: Offices */}
        <WeAreGlobal />

        {/* Divider */}
        <div className="h-px bg-white/10 w-full mb-16"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8">
          
          {/* Left Column */}
          <div className="flex flex-col w-full lg:w-[420px]">
            <div className="flex items-center justify-between mb-4 w-full">
              <h2 className="text-white text-[42px] font-bold tracking-wide">USS</h2>
              <div className="flex mr-10 items-center gap-3 text-white">
                <a href="#" className="hover:text-[#FF5500] transition-colors"><FaLinkedin className="text-3xl" /></a>
                <a href="#" className="hover:text-[#FF5500] transition-colors"><FaInstagramSquare className="text-3xl" /></a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-[28px] h-[28px] rounded-full border border-[#FF5500] text-[#FF5500] flex items-center justify-center font-medium text-sm flex-shrink-0">
                @
              </div>
              <a href="mailto:contact@unitedstrategicsolutions.com" className="text-[#FFFFFF] text-[14px] hover:text-[#FF5500] transition-colors">
                contact@unitedstrategicsolutions.com
              </a>
            </div>

            <p className="text-white font-semibold text-lg mb-5">Subscribe to our newsletter</p>
            
            <form className="flex gap-4 w-full">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-[#121212] border border-white/10 focus:border-[#FF5500] transition-colors rounded-full px-6 py-3.5 text-white text-[14px] outline-none flex-grow min-w-0 placeholder-text-[#FFFFFFA6]"
                required
              />
              <button 
                type="submit" 
                className="bg-[#FF5500] hover:bg-[#e04a00] text-white rounded-full px-8 py-3.5 text-[14px] font-medium transition-colors flex-shrink-0 shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Right Columns Container */}
          <div className="flex flex-col md:flex-row gap-16 lg:gap-24 lg:ml-auto pt-4">
            {/* Quick Links */}
            <div>
              <h3 className="text-[#FF5500] font-bold text-[16px] sm:text-[20px] mb-6 tracking-wider">Quick Links</h3>
              <ul className="flex flex-col gap-[14px]">
                {quickLinks.map(link => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-white text-[14px] hover:text-[#FF5500] transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-[#FF5500] font-bold text-[16px] sm:text-[20px] mb-6 tracking-wider text-center mr-20">Services</h3>
              <div className="flex gap-12 sm:gap-20">
                <ul className="flex flex-col gap-[14px]">
                  {servicesCol1.map(service => (
                    <li key={service.name}>
                      <Link href={service.href} className="text-white text-[14px] hover:text-[#FF5500] transition-colors whitespace-nowrap">{service.name}</Link>
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-col gap-[14px]">
                  {servicesCol2.map(service => (
                    <li key={service.name}>
                      <Link href={service.href} className="text-white text-[14px] hover:text-[#FF5500] transition-colors whitespace-nowrap">{service.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 text-center">
          <p className="text-gray-400 text-[12px]">
            © 2025 United Strategic Solutions. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}