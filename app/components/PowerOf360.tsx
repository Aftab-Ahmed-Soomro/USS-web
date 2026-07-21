"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const cards = [
  {
    id: "01",
    label: "One Direction",
    image: "/assets/directionCard.jpg",
    alt: "One Direction card",
  },
  {
    id: "02",
    label: "One Team",
    image: "/assets/teamCard.jpg",
    alt: "One Team card",
  },
  {
    id: "03",
    label: "One Brand",
    image: "/assets/brandCard.jpg",
    alt: "One Brand card",
  },
  {
    id: "04",
    label: "One Goal",
    image: "/assets/goalCard.jpg",
    alt: "One Goal card",
  },
];

export function PowerOf360() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(cards.length - 1, c + 1));

  return (
    <section
      id="power-of-360"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "900px" }}
    >
      {/* Background image */}
      <Image
        src="/assets/mainPage.png"
        alt="The power of 360 background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content — full-width, relative so absolute children work */}
      <div className="relative z-10 w-full min-h-screen flex items-center px-6 py-80 lg:px-14">

        {/* ── LEFT: text block — stays on left ~40% ── */}
        <div className="flex max-w-[450px] flex-col gap-6 flex-shrink-0">

          {/* Heading */}
          <h2
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
            the power of{" "}
            <span
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
              360
            </span>
          </h2>

          {/* Body */}
          <p
            style={{
              fontFamily: "var(--font-be-vietnam), Arial, sans-serif",
              fontWeight: 400,
              fontSize: "17px",
              lineHeight: "28px",
              letterSpacing: "0%",
              color: "rgba(255,255,255,0.85)",
              margin: 0,
            }}
          >
            Growth rarely comes from a single campaign. It comes from connecting
            every part of your marketing behind one clear direction. When
            strategy, creative and execution work together, your brand stays
            consistent, projects move faster and every activity contributes
            towards the same business goals.
          </p>

          {/* CTA */}
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
            Contact Us
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
        </div>

        {/* ── RIGHT: cards + controls — absolutely positioned, overflows right edge ── */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "45%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >

          {/* Cards row — no max-width, extends beyond viewport */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: "16px" }}>
            {cards.map((card, index) => {
              const isActive = index === current;
              return (
                <button
                  key={card.id}
                  id={`power-of-360-card-${card.id}`}
                  onClick={() => setCurrent(index)}
                  style={{
                    position: "relative",
                    width: "200px",
                    height: index === cards.length - 1 ? "310px" : "320px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    flexShrink: 0,
                    cursor: "pointer",
                    border: "none",
                    padding: 0,
                    transform: isActive ? "scale(1.04)" : "scale(0.97)",
                    transition: "transform 0.35s ease, opacity 0.35s ease",
                    opacity: isActive ? 1 : 0.72,
                  }}
                  aria-label={card.label}
                >
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover"
                    sizes="220px"
                  />

                  {/* Top number badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "14px",
                      left: "14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "rgba(255,255,255,0.75)",
                    }}
                  >
                    <span
                      style={{
                        width: "20px",
                        height: "1px",
                        background: "rgba(255,255,255,0.6)",
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
                        color: "rgba(255,255,255,0.75)",
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
                        "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-be-vietnam), Arial, sans-serif",
                        fontWeight: 600,
                        fontSize: "20px",
                        lineHeight: "23px",
                        letterSpacing: "-0.2px",
                        color: "#ffffff",
                        display: "block",
                        textAlign: "left",
                      }}
                    >
                      {card.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Controls row: arrows + progress */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {/* Prev arrow */}
            <button
              id="power-of-360-prev"
              onClick={prev}
              disabled={current === 0}
              aria-label="Previous card"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.4)",
                background: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: current === 0 ? "not-allowed" : "pointer",
                opacity: current === 0 ? 0.35 : 1,
                transition: "opacity 0.2s",
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
              disabled={current === cards.length - 1}
              aria-label="Next card"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.4)",
                background: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: current === cards.length - 1 ? "not-allowed" : "pointer",
                opacity: current === cards.length - 1 ? 0.35 : 1,
                transition: "opacity 0.2s",
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
              {String(current + 1).padStart(2, "0")}
            </span>

            {/* Progress bar */}
            <div
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
                  width: `${((current + 1) / cards.length) * 100}%`,
                  background: "#FF5500",
                  borderRadius: "9999px",
                  transition: "width 0.35s ease",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
