"use client";

import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { LazyVideo } from "./common/LazyVideo";

export default function BrandElevationVideo() {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <section className="relative w-full h-auto aspect-video sm:h-[100svh] sm:min-h-[720px] md:h-[120svh] overflow-hidden bg-black">
      <LazyVideo
        src="/assets/USS AD_FINAL.mp4"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover object-center"
        aria-label="USS brand video"
      />

      {/* Mute / Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition hover:bg-black/70"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </section>
  );
}
