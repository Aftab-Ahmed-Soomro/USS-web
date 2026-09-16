"use client";

import { useState, useEffect, useRef, useCallback, memo } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// ─── Cloudinary video & poster optimizer ──────────────────────────────────────
const VIDEO_PARAMS = "f_auto,q_auto,w_720,c_limit";
const POSTER_PARAMS = "f_auto,q_auto,so_0,w_720,c_limit";

function optimizeVideoUrl(url: string): string {
  let u = url;
  if (u.includes("/video/upload/") && !u.includes("/video/upload/f_auto")) {
    u = u.replace("/video/upload/", `/video/upload/${VIDEO_PARAMS}/`);
  }
  // Convert .webm to .mp4 so iOS Safari gets hardware-accelerated H.264 AVC1
  return u.replace(/\.(webm|mov)$/i, ".mp4");
}

function optimizePosterUrl(url: string): string {
  if (url.includes("/video/upload/")) {
    const withParams = url.includes("/video/upload/f_auto")
      ? url.replace(`/video/upload/${VIDEO_PARAMS}/`, `/video/upload/${POSTER_PARAMS}/`)
      : url.replace("/video/upload/", `/video/upload/${POSTER_PARAMS}/`);
    return withParams.replace(/\.(webm|mp4|mov)$/i, ".jpg");
  }
  return "";
}

// ─── Video data — precomputed once at module level ───────────────────────────
const BASE = "https://res.cloudinary.com/wda6rtn3/video/upload/v1787352562/uss-website/360_home";

export interface VideoItem {
  src: string;
  poster: string;
}

const RAW_CARDS = [
  {
    videos: [
      `${BASE}/GALA BEHIND THE SCENE EDIT.webm`,
      `${BASE}/Agency 8 Event.webm`,
      `${BASE}/3.webm`,
      `https://res.cloudinary.com/wda6rtn3/video/upload/v1788166725/Interior_Design_Process_for_Vision_Tower.webm`,
    ],
    alt: "LEFT",
  },
  {
    videos: [
      `${BASE}/Hot seat 1 updated w_captions.webm`,
      `${BASE}/Whats-new.webm`,
      `https://res.cloudinary.com/wda6rtn3/video/upload/v1788166082/Shortened_version.webm`,
      `${BASE}/USS-narrator-updated.webm`,
    ],
    alt: "MIDDLE",
  },
  {
    videos: [
      `${BASE}/Cinnamood BTS shoot.webm`,
      `${BASE}/Idea 8 - BTS v2.webm`,
      `${BASE}/DIRECTION 3.webm`,
    ],
    alt: "RIGHT",
  },
];

// Pre-optimize all URLs and posters once — zero per-render overhead
const cards = RAW_CARDS.map((card) => ({
  ...card,
  videos: card.videos.map((v): VideoItem => ({
    src: optimizeVideoUrl(v),
    poster: optimizePosterUrl(v),
  })),
}));

// Custom per-video durations — keyed by OPTIMIZED video URL
const RAW_CUSTOM_DURATIONS: Record<string, number> = {
  [`${BASE}/Whats-new.webm`]:        9_000,
  [`${BASE}/Idea 8 - BTS v2.webm`]: 12_000,
  [`${BASE}/DIRECTION 3.webm`]:     13_000,
};
const CUSTOM_DURATIONS: Record<string, number> = Object.fromEntries(
  Object.entries(RAW_CUSTOM_DURATIONS).map(([k, v]) => [optimizeVideoUrl(k), v])
);

// ─── Particles — static data at module level, never recreated ────────────────
const PARTICLES = [
  { delay: 0,   x: "10%", y: "20%", size: 3 },
  { delay: 1.5, x: "85%", y: "15%", size: 4 },
  { delay: 0.7, x: "20%", y: "70%", size: 2 },
  { delay: 2.2, x: "75%", y: "60%", size: 3 },
  { delay: 1.0, x: "50%", y: "10%", size: 5 },
  { delay: 3.0, x: "90%", y: "80%", size: 2 },
  { delay: 0.3, x: "5%",  y: "50%", size: 4 },
];

// ─── Sequential Video Player ─────────────────────────────────────────────────
// Memoized so it doesn't re-render when parent re-renders
const SequentialVideoPlayer = memo(function SequentialVideoPlayer({
  videos,
  isInView,
}: {
  videos: VideoItem[];
  isInView: boolean;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Skip to next video on error (e.g. 404, network failure)
  const handleError = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  }, [videos.length]);

  // Force play whenever section comes into view — fixes middle/right freeze
  useEffect(() => {
    if (!isInView) return;
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.playsInline = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;
    const item = videos[currentIndex];
    const duration = CUSTOM_DURATIONS[item.src] ?? 19_000;
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, duration);
    return () => clearTimeout(timer);
  }, [currentIndex, videos, isInView]);

  const activeItem = videos[currentIndex];
  const nextItem = videos[(currentIndex + 1) % videos.length];

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#0d0d0d]">
      {/* 
        Instant sharp poster frame:
        Always renders immediately so user NEVER sees a black screen while video is loading/buffering.
      */}
      {activeItem.poster && (
        <img
          src={activeItem.poster}
          alt=""
          className="absolute inset-0 w-full h-full object-cover rounded-xl select-none pointer-events-none"
          loading="eager"
          decoding="async"
        />
      )}

      {isInView && (
        <AnimatePresence mode="sync">
          <motion.video
            ref={videoRef}
            key={activeItem.src}
            src={activeItem.src}
            poster={activeItem.poster}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            preload="auto"
            onError={handleError}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative z-10 w-full h-full object-cover rounded-xl"
            onLoadedMetadata={(e) => {
              const video = e.currentTarget;
              video.muted = true;
              video.defaultMuted = true;
              video.playsInline = true;
              const playPromise = video.play();
              if (playPromise !== undefined) {
                playPromise.catch(() => {});
              }
            }}
          />
        </AnimatePresence>
      )}

      {/* Hidden preloader for the NEXT video in the playlist to ensure seamless transitions */}
      {isInView && nextItem && (
        <video
          key={`preload-${nextItem.src}`}
          src={nextItem.src}
          preload="auto"
          muted
          playsInline
          controls={false}
          className="hidden"
          aria-hidden="true"
        />
      )}

      {/* Cinematic bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl pointer-events-none z-20" />
    </div>
  );
});

// ─── Main Component ──────────────────────────────────────────────────────────
export function UssDifferentSection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const headingRef  = useRef<HTMLDivElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-80px" });
  const isSectionInView = useInView(sectionRef, { margin: "500px 0px 500px 0px" });

  return (
    <section
      ref={sectionRef}
      className="uss-diff-section relative z-10 bg-[#000] text-white overflow-hidden px-4 py-[30px] sm:py-[100px]"
    >
      {/* Floating particles — pure CSS, zero JS animation overhead */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="uss-particle absolute rounded-full bg-[#ff5500] pointer-events-none"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* Ambient glow — CSS animation, no JS */}
      <div
        className="uss-glow pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[150px]"
        style={{ background: "radial-gradient(ellipse, rgba(255,85,0,0.08) 0%, transparent 70%)" }}
      />

      {/* Top shimmer line */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#ff5500] to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "left center" }}
      />

      <div className="mx-auto flex max-w-[1200px] xl:max-w-[1300px] flex-col items-center relative z-10 w-full -mt-5 sm:-mt-0">

        {/* Animated Heading */}
        <div ref={headingRef} className="w-full text-center pb-5 sm:pb-16">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={isHeadingInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="w-full px-4 sm:px-0 font-[var(--font-be-vietnam)] text-[28px] sm:text-[56px] font-normal leading-[1.2] sm:leading-[18.33px] tracking-[-0.02em] mr-3">
              <motion.span
                initial={{ opacity: 0 }}
                animate={isHeadingInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                what makes{" "}
              </motion.span>
              <span className="text-[38px] sm:text-[72px] font-normal timesFontFamily italic tracking-[-0.02em] text-[#ff5500] relative inline-block">
                {/* Shimmer on accent text */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 pointer-events-none"
                  initial={{ x: "-100%" }}
                  animate={isHeadingInView ? { x: "200%" } : {}}
                  transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
                />
                uss different
              </span>
            </h2>
          </motion.div>

          {/* Animated underline */}
          <motion.div
            className="h-[2px] bg-gradient-to-r from-transparent via-[#ff5500]/60 to-transparent mx-auto mt-3 sm:mt-6"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isHeadingInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: "60%", transformOrigin: "center" }}
          />
        </div>

        {/* ── Responsive Unified Cards Layout (Instant mount, Zero duplicate loads) ── */}
        <div className="w-full mt-0 lg:mt-8 px-1 min-[375px]:px-1.5 lg:px-0">
          <div className="grid grid-cols-3 gap-1 min-[375px]:gap-1.5 lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-6 xl:gap-8 w-full mx-auto">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -14, scale: 1.04 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full lg:max-w-[405px] aspect-[405/700] group cursor-pointer rounded-md min-[375px]:rounded-lg lg:rounded-2xl overflow-hidden shadow-lg"
              >
                {/* Desktop hover glow border */}
                <div
                  className="hidden lg:block absolute inset-0 rounded-2xl pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: "0 0 30px rgba(255,85,0,0.35), inset 0 0 20px rgba(255,85,0,0.08)",
                    border: "1px solid rgba(255,85,0,0.3)",
                  }}
                />

                {/* Desktop pulsing corner dots — CSS animation */}
                <span
                  className="hidden lg:block uss-dot absolute top-3 left-3 w-2 h-2 rounded-full bg-[#ff5500] z-30"
                  style={{ animationDelay: `${index * 0.5}s` }}
                />
                <span
                  className="hidden lg:block uss-dot absolute top-3 right-3 w-2 h-2 rounded-full bg-[#ff5500] z-30"
                  style={{ animationDelay: `${index * 0.5 + 0.4}s` }}
                />

                {/* Mobile pulsing glow border — CSS animation */}
                <span
                  className="lg:hidden uss-pulse-border absolute inset-0 rounded-md min-[375px]:rounded-lg pointer-events-none z-20"
                  style={{ animationDelay: `${index}s` }}
                />

                <div className="w-full h-full transition-transform duration-700 lg:group-hover:scale-[1.03]">
                  <SequentialVideoPlayer videos={card.videos} isInView={isSectionInView} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom shimmer line */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#ff5500]/50 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "right center" }}
      />

      <style>{`
        /* Background image */
        .uss-diff-section {
          background-image: url('/assets/bgMain.webp');
          background-size: cover;
          background-position: center;
        }

        /* Floating particles — GPU-composited CSS animation, no JS */
        @keyframes uss-float {
          0%, 100% { transform: translateY(0)   scale(0.5); opacity: 0;   }
          50%       { transform: translateY(-30px) scale(1);   opacity: 0.6; }
        }
        .uss-particle {
          animation: uss-float 4s ease-in-out infinite;
        }

        /* Ambient glow pulse */
        @keyframes uss-glow-pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1);    opacity: 0.5; }
          50%       { transform: translate(-50%, -50%) scale(1.15); opacity: 0.9; }
        }
        .uss-glow {
          animation: uss-glow-pulse 6s ease-in-out infinite;
        }

        /* Corner dot pulse */
        @keyframes uss-dot-pulse {
          0%, 100% { opacity: 1;   transform: scale(1);   }
          50%       { opacity: 0.3; transform: scale(1.3); }
        }
        .uss-dot {
          animation: uss-dot-pulse 2.5s ease-in-out infinite;
        }

        /* Mobile card border pulse */
        @keyframes uss-border-pulse {
          0%, 100% { box-shadow: 0 0 0px rgba(255,85,0,0);   }
          50%       { box-shadow: 0 0 12px rgba(255,85,0,0.3); }
        }
        .uss-pulse-border {
          animation: uss-border-pulse 3s ease-in-out infinite;
        }

        /* Respect reduced-motion preference */
        @media (prefers-reduced-motion: reduce) {
          .uss-particle,
          .uss-glow,
          .uss-dot,
          .uss-pulse-border {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
