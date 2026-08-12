"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "./common/Button";

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

const navItems = [
  { label: "About US", href: "/about", hasDropdown: false },
  { label: "Our Services", href: "/new-360-with-form", hasDropdown: true },
  { label: "Our Work", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
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
    <div className="bg-black sticky top-0 z-50 w-full border-b border-white/5 transition-all px-6 duration-300">
      <header className="relative z-10 mx-auto flex w-full max-w-[1200px] xl:max-w-[1300px]  flex-col py-5 md:py-4 md:min-h-[80px] md:flex-row md:items-center md:justify-between md:py-0">

        {/* Top Bar for Mobile & Desktop */}
        <div className="flex w-full items-center justify-between md:w-auto md:flex-1 md:justify-start">
          <Link href="/" className="text-white font-bold text-[18px] md:text-[22px] tracking-[0.15em] uppercase transition hover:text-[#ff6b1f] shrink-0">
            USS
          </Link>

          <div className="flex items-center gap-2 sm:gap-3 md:hidden">
            <Link
              className="inline-flex h-[46px] sm:h-[38px] px-7 sm:px-5 items-center justify-center rounded-full bg-[#ff6b1f] font-[var(--font-be-vietnam)] text-[12px] sm:text-[12px] tracking-[0.52px] font-bold text-white transition uppercase whitespace-nowrap hover:bg-white hover:text-black"
              href="/contact"
            >
              <span className="min-[375px]:hidden">Consultation</span>
              <span className="hidden min-[375px]:inline">Book a Consultation</span>
            </Link>
            <button
              type="button"
              aria-label={isMenuOpen ? "Close main navigation" : "Open main navigation"}
              aria-expanded={isMenuOpen}
              aria-controls="main-navigation"
              className="inline-flex size-8 sm:size-10 shrink-0 flex-col items-center justify-center gap-1 sm:gap-1.5 rounded-full border border-white/25 text-white transition hover:border-[#ff6b1f] hover:text-[#ff6b1f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5a05]"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span className={`h-0.5 w-4 sm:w-5 rounded-full bg-current transition ${isMenuOpen ? "translate-y-1.5 sm:translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 w-4 sm:w-5 rounded-full bg-current transition ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-4 sm:w-5 rounded-full bg-current transition ${isMenuOpen ? "-translate-y-1.5 sm:-translate-y-2 -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`flex w-full flex-col gap-4 overflow-hidden transition-[max-height,opacity,margin,padding] duration-300 md:mt-0 md:w-auto md:flex-row md:items-center md:justify-center md:gap-8 lg:gap-10 md:overflow-visible md:border-0 md:pt-0 md:opacity-100 ${isMenuOpen ? "max-h-[100vh] opacity-100 mt-4 pt-4 border-t border-white/10" : "max-h-0 opacity-0 mt-0 pt-0 border-t-0 md:max-h-none"
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
                <Link
                  href={item.href}
                  aria-haspopup="true"
                  aria-expanded={isServicesOpen}
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
                </Link>

                <div className="absolute left-0 right-0 top-full h-8 hidden md:block" />

                <div
                  ref={dropdownRef}
                  className={`absolute left-1/2 top-[calc(100%+32px)] z-50 -translate-x-1/2 transition-all duration-200 hidden md:block ${isServicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  style={{ width: "640px" }}
                >
                  <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 h-[14px] w-[14px] rotate-45 bg-[#111]/95 backdrop-blur-md border-l border-t border-white/10" />

                  <div className="relative rounded-xl border border-white/10 bg-[#111]/95 backdrop-blur-md shadow-2xl shadow-black/60 overflow-hidden">
                    <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#ff6b1f] to-transparent" />

                    <div className="p-5">
                      {/* Top Item: 360 Marketing */}
                      <div className="pb-4 mb-4 border-b border-white/10">
                        <Link
                          href={servicesData.top.href}
                          onClick={() => setIsServicesOpen(false)}
                          className="group flex items-center justify-between rounded-xl p-3 bg-white/[0.04] border border-white/5 transition-all duration-200 hover:bg-white/[0.08] hover:border-[#ff6b1f]/40"
                        >
                          <div className="flex items-center gap-3">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#ff6b1f]/15 text-[#ff6b1f] text-[12px] transition group-hover:bg-[#ff6b1f] group-hover:text-black">
                              ✦
                            </span>
                            <span className="text-[15px] font-bold tracking-[0.05em] text-white group-hover:text-[#ff6b1f] transition">
                              {servicesData.top.label}
                            </span>
                          </div>
                          <svg
                            className="size-4 text-white/40 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#ff6b1f]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>

                      {/* Two Columns: Performance Marketing & Creative Marketing */}
                      <div className="grid grid-cols-2 gap-6 pb-4 mb-4 border-b border-white/10">
                        {/* Column 1: Performance Marketing */}
                        <div>
                          <div className="flex items-center gap-2 px-3 pb-2.5 mb-1 border-b border-white/10">
                            <span className="text-[#ff6b1f] text-[10px]">●</span>
                            <h3 className="text-[14px] font-bold tracking-[0.05em] text-white">
                              {servicesData.performance.title}
                            </h3>
                          </div>
                          <div className="flex flex-col gap-0.5 mt-1">
                            {servicesData.performance.items.map((service) => (
                              <Link
                                key={service.label}
                                href={service.href}
                                onClick={() => setIsServicesOpen(false)}
                                className="group flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] tracking-[0.03em] font-medium text-white/80 transition-all duration-150 hover:bg-white/[0.06] hover:text-white hover:translate-x-0.5"
                              >
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-white/5 text-[#ff6b1f] text-[9px] transition group-hover:bg-[#ff6b1f]/20">
                                  ✦
                                </span>
                                <span>{service.label}</span>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Column 2: Creative Marketing */}
                        <div>
                          <div className="flex items-center gap-2 px-3 pb-2.5 mb-1 border-b border-white/10">
                            <span className="text-[#ff6b1f] text-[10px]">●</span>
                            <h3 className="text-[14px] font-bold tracking-[0.05em] text-white">
                              {servicesData.creative.title}
                            </h3>
                          </div>
                          <div className="flex flex-col gap-0.5 mt-1">
                            {servicesData.creative.items.map((service) => (
                              <Link
                                key={service.label}
                                href={service.href}
                                onClick={() => setIsServicesOpen(false)}
                                className="group flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] tracking-[0.03em] font-medium text-white/80 transition-all duration-150 hover:bg-white/[0.06] hover:text-white hover:translate-x-0.5"
                              >
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-white/5 text-[#ff6b1f] text-[9px] transition group-hover:bg-[#ff6b1f]/20">
                                  ✦
                                </span>
                                <span>{service.label}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Bottom Item: Talent Management */}
                      <div>
                        <Link
                          href={servicesData.bottom.href}
                          onClick={() => setIsServicesOpen(false)}
                          className="group flex items-center justify-between rounded-xl p-3 bg-white/[0.04] border border-white/5 transition-all duration-200 hover:bg-white/[0.08] hover:border-[#ff6b1f]/40"
                        >
                          <div className="flex items-center gap-3">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#ff6b1f]/15 text-[#ff6b1f] text-[12px] transition group-hover:bg-[#ff6b1f] group-hover:text-black">
                              ✦
                            </span>
                            <span className="text-[15px] font-bold tracking-[0.05em] text-white group-hover:text-[#ff6b1f] transition">
                              {servicesData.bottom.label}
                            </span>
                          </div>
                          <svg
                            className="size-4 text-white/40 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#ff6b1f]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:hidden">
                  <div className="flex w-full items-center justify-between py-1">
                    <Link
                      href={item.href}
                      className="text-[14px] tracking-[0.1em] font-bold uppercase text-white transition hover:text-[#ff6b1f]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    <div
                      role="button"
                      tabIndex={0}
                      className="p-2 -mr-2 cursor-pointer text-white transition hover:text-[#ff6b1f]"
                      onClick={() => setIsMobileServicesOpen((o) => !o)}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsMobileServicesOpen((o) => !o) }}
                    >
                      <svg
                        className={`h-4 w-4 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  <div
                    className={`overflow-hidden transition-[max-height,opacity] duration-300 ${isMobileServicesOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                  >
                    <div className="mt-3 flex flex-col gap-2 sm:gap-4 border-l-2 border-[#ff6b1f]/40 pl-3 sm:pl-4">
                      {/* Top Item: 360 Marketing */}
                      <Link
                        href={servicesData.top.href}
                        onClick={() => {
                          setIsMobileServicesOpen(false);
                          setIsMenuOpen(false);
                        }}
                        className="flex items-center gap-2.5 py-1 text-[14px] font-normal tracking-[0.05em] text-white transition hover:text-[#ff6b1f]"
                      >
                        <span className="text-[#ff6b1f] text-[10px]">✦</span>
                        {servicesData.top.label}
                      </Link>

                      <div className="h-[1px] w-full bg-white/10" />

                      {/* Two columns or stacked categories */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Performance Marketing */}
                        <div className="flex flex-col gap-1.5">
                          <div className="flex items-center gap-2 text-[13px] font-bold tracking-[0.05em] text-white pb-1">
                            <span className="text-[#ff6b1f] text-[10px]">●</span>
                            <span>{servicesData.performance.title}</span>
                          </div>
                          <div className="flex flex-col gap-1 pl-2 border-l border-white/10">
                            {servicesData.performance.items.map((service) => (
                              <Link
                                key={service.label}
                                href={service.href}
                                onClick={() => {
                                  setIsMobileServicesOpen(false);
                                  setIsMenuOpen(false);
                                }}
                                className="flex items-center gap-2 py-1.5 text-[13px] sm:text-[14px] font-medium tracking-[0.03em] text-white/75 transition hover:text-white"
                              >
                                <span className="text-[#ff6b1f] text-[8px]">✦</span>
                                {service.label}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Creative Marketing */}
                        <div className="flex flex-col gap-1.5">
                          <div className="flex items-center gap-2 text-[13px] font-bold tracking-[0.05em] text-white pb-1">
                            <span className="text-[#ff6b1f] text-[10px]">●</span>
                            <span>{servicesData.creative.title}</span>
                          </div>
                          <div className="flex flex-col gap-1 pl-2 border-l border-white/10">
                            {servicesData.creative.items.map((service) => (
                              <Link
                                key={service.label}
                                href={service.href}
                                onClick={() => {
                                  setIsMobileServicesOpen(false);
                                  setIsMenuOpen(false);
                                }}
                                className="flex items-center gap-2 py-1.5 text-[13px] sm:text-[14px] font-medium tracking-[0.03em] text-white/75 transition hover:text-white"
                              >
                                <span className="text-[#ff6b1f] text-[8px]">✦</span>
                                {service.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="h-[1px] w-full bg-white/10" />

                      {/* Bottom Item: Talent Management */}
                      <Link
                        href={servicesData.bottom.href}
                        onClick={() => {
                          setIsMobileServicesOpen(false);
                          setIsMenuOpen(false);
                        }}
                        className="flex items-center gap-2.5 py-1 text-[14px] font-normal -mt-2 tracking-[0.05em] text-white transition hover:text-[#ff6b1f]"
                      >
                        <span className="text-[#ff6b1f] text-[10px]">✦</span>
                        {servicesData.bottom.label}
                      </Link>
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
          <Link
            className="inline-flex h-[34px] min-[375px]:h-[38px] min-w-[160px] min-[375px]:min-w-[178px] items-center justify-center rounded-full bg-[#ff6b1f] px-5 min-[375px]:px-7 font-[var(--font-be-vietnam)] text-[11px] min-[375px]:text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-white transition uppercase hover:bg-white hover:text-black"
            href="/contact"
          >
            Book a Consultation
          </Link>
        </div>

      </header>
    </div>
  );
}