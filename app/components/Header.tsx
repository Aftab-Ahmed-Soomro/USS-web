"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "./common/Button";

const serviceLinks = [
  { label: "360 Marketing", href: "/new-360-with-form", icon: "✦" },
  { label: "Marketing Strategy", href: "/marketing-strategy", icon: "✦" },
  { label: "Google Ads", href: "/google-ads", icon: "✦" },
  { label: "Meta Ads", href: "/meta-ads", icon: "✦" },
  { label: "WhatsApp & SMS", href: "/whatsapp-and-sms", icon: "✦" },
  { label: "Email Marketing", href: "/email-marketing", icon: "✦" },
  { label: "Social Media Management", href: "/social-media-management", icon: "✦" },
  { label: "Content Creation", href: "/content-creation", icon: "✦" },
  { label: "Talent Management", href:"/", icon: "✦"},
  { label: "Website Design & Development", href: "/website", icon: "✦" }
];

const navItems = [
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/", hasDropdown: true },
  { label: "WORK", href: "/projects" },
  { label: "CONTACT", href: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-black sticky top-0 z-50 w-full border-b border-white/5 transition-all duration-300">
      <header className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col px-6 py-4 md:min-h-[80px] md:flex-row md:items-center md:justify-between md:py-0">
        
        {/* Top Bar for Mobile & Desktop */}
        <div className="flex w-full items-center justify-between md:w-auto md:flex-1 md:justify-start">
          <Link href="/" className="text-white font-bold text-[22px] tracking-[0.15em] uppercase transition hover:text-[#ff6b1f] shrink-0">
            USS
          </Link>
          
          <div className="flex items-center gap-3 md:hidden">
            <Link href="/contact" passHref>
              <Button className="h-[38px] px-4 text-[14px] tracking-[5px] font-bold uppercase">
                Book a Consultation
              </Button>
            </Link>
            <button
              type="button"
              aria-label={isMenuOpen ? "Close main navigation" : "Open main navigation"}
              aria-expanded={isMenuOpen}
              aria-controls="main-navigation"
              className="inline-flex size-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full border border-white/25 text-white transition hover:border-[#ff6b1f] hover:text-[#ff6b1f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5a05]"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span className={`h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`mt-4 flex w-full flex-col gap-4 overflow-hidden border-t border-white/10 pt-4 transition-[max-height,opacity] duration-300 md:mt-0 md:w-auto md:flex-row md:items-center md:justify-center md:gap-8 lg:gap-10 md:overflow-visible md:border-0 md:pt-0 md:opacity-100 ${
            isMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 md:max-h-none"
          }`}
        >
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div
                key={item.label}
                className="relative"
                ref={servicesRef}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                {/* Desktop trigger */}
                <div
                  role="button"
                  tabIndex={0}
                  aria-haspopup="true"
                  aria-expanded={isServicesOpen}
                  onClick={() => setIsServicesOpen((o) => !o)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsServicesOpen((o) => !o) }}
                  className="hidden cursor-pointer md:inline-flex items-center gap-1.5 py-1 text-[14px] md:text-[13px] mb-1 tracking-[0.1em] font-bold uppercase text-white transition hover:text-[#ff6b1f] md:py-0 focus-visible:outline-none"
                >
                  {item.label}
                  <svg
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Desktop dropdown panel */}
                <div className="absolute left-0 right-0 top-full h-8 hidden md:block" />

                <div
                  ref={dropdownRef}
                  className={`absolute left-1/2 top-[calc(100%+32px)] z-50 -translate-x-1/2 transition-all duration-200 hidden md:block ${
                    isServicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                  style={{ width: "500px" }}
                >
                  <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 h-[14px] w-[14px] rotate-45 bg-[#111]/90 backdrop-blur-md border-l border-t border-white/10" />

                  <div className="relative rounded-xl border border-white/10 bg-[#111]/90 backdrop-blur-md shadow-2xl shadow-black/60 overflow-hidden">
                    <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#ff6b1f] to-transparent" />

                    <div className="p-3 grid grid-cols-2 gap-1">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setIsServicesOpen(false)}
                          className="group flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-[13px] tracking-[0.1em] font-bold uppercase text-white transition-all duration-150 hover:bg-white/[0.06] hover:text-white"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/5 text-[#ff6b1f] text-[10px] transition group-hover:bg-[#ff6b1f]/15">
                            ✦
                          </span>
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile: accordion */}
                <div className="md:hidden">
                  <div
                    role="button"
                    tabIndex={0}
                    className="flex w-full cursor-pointer items-center justify-between py-1 text-[14px] tracking-[0.1em] font-bold uppercase text-white transition hover:text-[#ff6b1f]"
                    onClick={() => setIsMobileServicesOpen((o) => !o)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsMobileServicesOpen((o) => !o) }}
                  >
                    {item.label}
                    <svg
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  <div
                    className={`overflow-hidden transition-[max-height,opacity] duration-200 ${
                      isMobileServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="mt-2 flex flex-col gap-0.5 border-l border-[#ff6b1f]/30 pl-3">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => {
                            setIsMobileServicesOpen(false);
                            setIsMenuOpen(false);
                          }}
                          className="flex items-center gap-2 py-1.5 text-[14px] tracking-[0.1em] font-bold uppercase text-white/60 transition hover:text-white"
                        >
                          <span className="text-[#ff6b1f] text-[8px]">✦</span>
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                className="py-1 text-[14px] tracking-[0.1em] font-bold uppercase text-white transition hover:text-[#ff6b1f] md:py-0 md:text-[13px] block"
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop Right Action */}
        <div className="hidden md:flex md:w-auto md:flex-1 md:justify-end">
          <Link className="h-[42px] inline-flex h-[48px] items-center justify-center rounded-full bg-[#ff5a05] cursor-pointer px-6 text-[13px] tracking-[0.1em] font-bold uppercase" href="/contact" passHref>
              Book a Consultation
          </Link>
        </div>

      </header>
    </div>
  );
}