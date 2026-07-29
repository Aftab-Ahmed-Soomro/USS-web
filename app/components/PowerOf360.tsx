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
      className="relative w-full overflow-hidden max-md:!min-h-0 bg-black"
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
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="hidden md:block absolute inset-0 bg-black/55 z-0" />

      {/* Content — full-width, relative so absolute children work */}
      <div className="relative z-10 w-full flex items-center px-6 pt-6 pb-10 sm:py-80 lg:px-14 max-md:flex-col max-md:items-start max-md:justify-center max-md:gap-4">
        {/* ── LEFT: text block — stays on left ~40% ── */}
        <div className="flex max-w-[450px] flex-col gap-6 flex-shrink-0 max-md:max-w-full max-md:w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex flex-col gap-6"
            >
              <h2
                className="max-md:!text-[40px] max-md:!leading-[48px] max-md:!tracking-tight"
                style={{
                  fontFamily: "var(--font-be-vietnam), Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: "56px",
                  lineHeight: "81.6px",
                  letterSpacing: "-1.6px",
                  textTransform: "lowercase",
                  color: "#ffffff",
                  margin: 0,
                }}
              >
                {activeItem.titlePrefix}
                <span
                  className="max-md:!text-[56px] max-md:!leading-[60px]"
                  style={{
                    fontFamily: "'Times New Roman', Times, serif",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontSize: "72px",
                    lineHeight: "81.6px",
                    letterSpacing: "-1.6px",
                    textTransform: "lowercase",
                    color: "#FF5500",
                  }}
                >
                  {activeItem.titleHighlight}
                </span>
              </h2>

              <p
                className="max-md:!text-[15px] max-md:!leading-[24px] min-h-[140px] sm:min-h-[120px]"
                style={{
                  fontFamily: "var(--font-be-vietnam), Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: "17px",
                  lineHeight: "28px",
                  letterSpacing: "0%",
                  color: "rgba(255,255,255,0.85)",
                  margin: 0,
                  minHeight: "120px",
                }}
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
            style={{ width: "fit-content" }}
          >
            <Link
              href="/contact"
              id="power-of-360-contact-us"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                width: "fit-content",
                padding: "10px 20px",
                border: "1px solid rgba(255,255,255,0.5)",
                borderRadius: "9999px",
                fontFamily: "var(--font-be-vietnam), Arial, sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "19.5px",
                letterSpacing: "0px",
                textTransform: "capitalize",
                color: "#ffffff",
                textDecoration: "none",
                transition: "background 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(255,255,255,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "transparent";
              }}
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
        <div
          className="max-md:!static max-md:!transform-none max-md:!w-full max-md:!mt-4 max-md:!left-0"
          style={{
            position: "absolute",
            top: "50%",
            left: "42%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {/* Cards row */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="max-md:-mx-6 max-md:w-[calc(100%+3rem)] max-md:px-6 max-md:overflow-x-auto max-md:snap-x max-md:snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] max-md:py-4"
            style={{ display: "flex", alignItems: "flex-end", gap: "16px" }}
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
                  className="max-md:!w-[220px] max-md:!h-[320px] max-md:snap-start relative w-[260px] h-[380px] rounded-[16px] overflow-hidden flex-shrink-0 cursor-pointer border border-white/10 hover:border-white/40 transition-colors duration-300 p-0 group"
                  aria-label={card.label}
                >
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover object-[center_15%] transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 240px, 260px"
                  />

                  {/* Dark gradient overlay for thumbnail */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

                  {/* Top number badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "14px",
                      left: "14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "rgba(255,255,255,0.9)",
                    }}
                  >
                    <span
                      style={{
                        width: "20px",
                        height: "1px",
                        background: "rgba(255,255,255,0.8)",
                        display: "inline-block",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-be-vietnam), Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: "10px",
                        lineHeight: "15px",
                        letterSpacing: "2.4px",
                        textTransform: "uppercase",
                      }}
                    >
                      {card.id}
                    </span>
                  </div>

                  {/* Bottom label */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "40px 16px 16px",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
                    }}
                  >
                    <span
                      className="max-md:!text-[16px] max-md:!leading-[20px]"
                      style={{
                        fontFamily: "var(--font-be-vietnam), Arial, sans-serif",
                        fontWeight: 600,
                        fontSize: "20px",
                        lineHeight: "23px",
                        letterSpacing: "-0.2px",
                        color: "#ffffff",
                        display: "block",
                        textAlign: "center",
                      }}
                    >
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
            className="max-md:w-full max-md:mt-2"
            style={{ display: "flex", alignItems: "center", gap: "16px" }}
          >
            {/* Prev arrow */}
            <button
              id="power-of-360-prev"
              onClick={prev}
              aria-label="Previous card"
              className="hover:bg-white/10"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.4)",
                background: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s",
                flexShrink: 0,
              }}
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
              className="hover:bg-white/10"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.4)",
                background: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s",
                flexShrink: 0,
              }}
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
            <span
              style={{
                fontFamily: "var(--font-be-vietnam), Arial, sans-serif",
                fontWeight: 400,
                fontSize: "13px",
                color: "rgba(255,255,255,0.6)",
                flexShrink: 0,
              }}
            >
              {activeItem.id}
            </span>

            {/* Progress bar */}
            <div
              className="max-md:!max-w-none"
              style={{
                flex: 1,
                height: "1px",
                background: "rgba(255,255,255,0.2)",
                borderRadius: "9999px",
                position: "relative",
                maxWidth: "200px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  height: "1px",
                  width: `${(parseInt(activeItem.id) / cards.length) * 100}%`,
                  background: "#FF5500",
                  borderRadius: "9999px",
                  transition: "width 0.35s ease",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
