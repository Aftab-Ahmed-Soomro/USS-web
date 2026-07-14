"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function BrandElevationVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    if (videoRef.current) {
      videoRef.current.muted = newMuted;
    }
  };

  return (
    <section className="relative w-full h-auto aspect-video sm:h-[100svh] sm:min-h-[720px] md:h-[120svh] overflow-hidden ">
  <video
    ref={videoRef}
    src="https://emmanuelcolewilliams.com/uss-assets/USS AD_FINAL.mp4"
    autoPlay
    loop
    muted={isMuted}
    playsInline
    preload="auto"
    width={1920}
    height={1080}
    className="absolute inset-0 w-full h-full object-cover object-center"
    aria-label="USS brand video"
  />

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}

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
