"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  {
    id: "01",
    label: "One Direction",
    titlePrefix: "the power of ",
    titleHighlight: "360",
    description:
      "Growth rarely comes from a single campaign. It comes from connecting every part of your marketing behind one clear direction. With strategy, creative and performance working together, your brand stays consistent and your marketing becomes more effective.",
    image: "/assets/power/direction.png",
    bgImage: "/assets/power/directionLarge.png",
    bgClass: "object-top",
    alt: "One Direction card",
  },
  {
    id: "02",
    label: "One Team",
    titlePrefix: "one ",
    titleHighlight: "team",
    description:
      "At USS, we become an extension of your team. By taking the time to understand your business, we make better decisions, communicate more effectively and keep every project moving in the right direction.",
    image: "/assets/power/team.png",
    bgImage: "/assets/power/teamLarge.png",
    bgClass: "object-top",
    alt: "One Team card",
  },
  {
    id: "03",
    label: "One Brand",
    titlePrefix: "one ",
    titleHighlight: "brand",
    description:
      "A strong brand is built through consistency. At USS, we make sure every touchpoint reflects the same identity, helping your business build trust and lasting brand value.",
    image: "/assets/power/brand.png",
    bgImage: "/assets/power/brandLarge.jpeg",
    bgClass: "object-[center_38%]",
    alt: "One Brand card",
  },
  {
    id: "04",
    label: "One Goal",
    titlePrefix: "one ",
    titleHighlight: "goal",
    description:
      "Every decision should support a bigger objective. At USS, we keep your long term business goals at the centre of every strategy, campaign and recommendation, ensuring every digital touchpoint moves your business forward.",
    image: "/assets/power/goal.png",
    bgImage: "/assets/power/goalLarge.png",
    bgClass: "object-[center_25%]",
    alt: "One Goal card",
  },
];

export function PowerOf360() {
  const [items, setItems] = useState(cards);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const activeItem = items[0];
  const thumbnails = items.slice(1);

  const next = () => {
    setItems((prev) => {
      const newItems = [...prev];
      const first = newItems.shift();
      if (first) newItems.push(first);
      return newItems;
    });
  };

  const prev = () => {
    setItems((prev) => {
      const newItems = [...prev];
      const last = newItems.pop();
      if (last) newItems.unshift(last);
      return newItems;
    });
  };

  const jumpTo = (cardId: string) => {
    setItems((prev) => {
      const idx = prev.findIndex((c) => c.id === cardId);
      if (idx <= 0) return prev;
      const newItems = [...prev];
      return [...newItems.slice(idx), ...newItems.slice(0, idx)];
    });
  };

  const cooldownRef = useRef<NodeJS.Timeout | null>(null);
  const hoveredCardRef = useRef<string | null>(null);

  const startHoverTimer = (cardId: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      jumpTo(cardId);
      hoverTimeoutRef.current = null;
      // Start 2s cooldown — no hover changes during this window
      cooldownRef.current = setTimeout(() => {
        cooldownRef.current = null;
        // When cooldown ends, if we are still hovering a card, start its timer
        if (hoveredCardRef.current) {
          startHoverTimer(hoveredCardRef.current);
        }
      }, 2000);
    }, 700);
  };

  const handleMouseEnter = (cardId: string) => {
    hoveredCardRef.current = cardId;
    // Don't start if cooldown (1s after last change) is still active
    if (cooldownRef.current) return;

    startHoverTimer(cardId);
  };

  const handleMouseLeave = () => {
    hoveredCardRef.current = null;
    // Only cancel the initial hover delay, not the cooldown
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const handleCardClick = (cardId: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    jumpTo(cardId);
    if (cooldownRef.current) clearTimeout(cooldownRef.current);
    cooldownRef.current = setTimeout(() => {
      cooldownRef.current = null;
      if (hoveredCardRef.current) {
        startHoverTimer(hoveredCardRef.current);
      }
    }, 1000);
  };

  return (
    <section
      id="power-of-360"
      className="relative w-full overflow-hidden bg-black flex items-center md:min-h-[850px] lg:min-h-[900px] md:[min-height:clamp(750px,100vh,1200px)]"
    >
      {/* Background image (Active Item) */}
      <AnimatePresence initial={false}>
        <motion.div
          key={activeItem.id}
          className="hidden md:block absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          <Image
            src={activeItem.bgImage}
            alt={activeItem.alt}
            fill
            className={`object-cover ${activeItem.bgClass || "object-top"}`}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="hidden md:block absolute inset-0 bg-black/55 z-0" />

      {/* Content — balanced flex layout inside max-w-[1150px] container */}
      <div className="relative z-10 mx-auto max-w-[1150px] w-full flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-10 px-4 min-[375px]:px-6 py-10 sm:py-14 md:py-20 lg:py-24">
        {/* ── LEFT: text block ── */}
        <div className="flex w-full md:max-w-[440px] lg:max-w-[470px] xl:max-w-[490px] flex-col gap-5 sm:gap-6 flex-shrink-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex flex-col gap-4 sm:gap-6"
            >
              <h2
                className="whitespace-nowrap text-[32px] min-[375px]:text-[36px] sm:text-[44px] lg:text-[50px] xl:text-[54px] leading-tight tracking-[-1.6px] lowercase text-white font-[var(--font-be-vietnam)] font-medium m-0"
              >
                {activeItem.titlePrefix}
                <span
                  className="text-[38px] min-[375px]:text-[42px] sm:text-[52px] lg:text-[60px] xl:text-[66px] leading-tight tracking-[-1.6px] lowercase text-[#FF5500] font-normal italic timesFontFamily ml-1"
                  style={{ fontFamily: "'Times New Roman', Times, serif" }}
                >
                  {activeItem.titleHighlight}
                </span>
              </h2>

              <p
                className="text-[14px] leading-[22px] sm:text-[15px] sm:leading-[26px] lg:text-[16px] lg:leading-[27px] text-white/85 font-[var(--font-be-vietnam)] font-normal m-0 max-w-full lg:max-w-[470px] min-h-0 sm:min-h-[105px]"
              >
                {activeItem.description}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="w-fit"
          >
            <Link
              href="/contact"
              id="power-of-360-contact-us"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-white/50 font-[var(--font-be-vietnam)] font-medium text-[13px] sm:text-[14px] text-white transition hover:bg-white/10"
            >
              Book a Consultation
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M1 12L12 1M12 1H4M12 1V9"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* ── RIGHT: thumbnails + controls ── */}
        <div className="flex w-full md:w-auto flex-col gap-5 sm:gap-6 flex-shrink-0">
          {/* Cards row */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 max-md:-mx-4 max-md:px-4 max-md:w-[calc(100%+2rem)] max-md:overflow-x-auto max-md:snap-x max-md:snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] max-md:py-2"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {thumbnails.map((card) => (
                <motion.button
                  key={card.id}
                  layout
                  layoutId={`thumb-card-${card.id}`}
                  onClick={() => handleCardClick(card.id)}
                  onMouseEnter={() => handleMouseEnter(card.id)}
                  onMouseLeave={handleMouseLeave}
                  initial={{ opacity: 0, scale: 0.9, x: 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: -50 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-[160px] h-[230px] min-[375px]:w-[175px] min-[375px]:h-[250px] sm:w-[185px] sm:h-[280px] lg:w-[190px] lg:h-[290px] xl:w-[195px] xl:h-[300px] rounded-[16px] overflow-hidden flex-shrink-0 cursor-pointer border border-white/10 hover:border-white/40 transition-colors duration-300 p-0 group max-md:snap-start"
                  aria-label={card.label}
                >
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover object-[center_15%] transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 200px, 215px"
                  />

                  {/* Dark gradient overlay for thumbnail */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

                  {/* Top number badge */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 text-white/90">
                    <span className="w-5 h-[1px] bg-white/80 inline-block" />
                    <span className="font-[var(--font-be-vietnam)] font-medium text-[10px] tracking-[2.4px] uppercase">
                      {card.id}
                    </span>
                  </div>

                  {/* Bottom label */}
                  <div className="absolute bottom-0 inset-x-0 p-4 pt-10 bg-gradient-to-t from-black/85 to-transparent">
                    <span className="font-[var(--font-be-vietnam)] font-semibold text-[16px] sm:text-[18px] lg:text-[20px] text-white block text-center leading-tight">
                      {card.label}
                    </span>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Controls row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 w-full"
          >
            {/* Prev arrow */}
            <button
              id="power-of-360-prev"
              onClick={prev}
              aria-label="Previous card"
              className="w-9 h-9 rounded-full border border-white/40 bg-transparent flex items-center justify-center cursor-pointer transition hover:bg-white/10 shrink-0"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M9 2L4 7L9 12"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Next arrow */}
            <button
              id="power-of-360-next"
              onClick={next}
              aria-label="Next card"
              className="w-9 h-9 rounded-full border border-white/40 bg-transparent flex items-center justify-center cursor-pointer transition hover:bg-white/10 shrink-0"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M5 2L10 7L5 12"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Progress number */}
            <span className="font-[var(--font-be-vietnam)] text-[13px] text-white/60 shrink-0">
              {activeItem.id}
            </span>

            {/* Progress bar */}
            <div className="flex-1 h-[1px] bg-white/20 rounded-full relative max-w-[200px]">
              <div
                className="absolute left-0 top-0 h-[1px] bg-[#FF5500] rounded-full transition-[width] duration-300 ease-out"
                style={{
                  width: `${(parseInt(activeItem.id) / cards.length) * 100}%`,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
