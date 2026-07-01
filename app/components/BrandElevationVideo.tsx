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
    <section className="relative w-full h-[70vh] md:h-[85vh] min-h-[720px] overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="https://emmanuelcolewilliams.com/uss-assets/USS AD_FINAL.mp4"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover object-top"
        aria-label="USS brand video"
      />

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}

      {/* Mute / Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-6 right-6 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition hover:bg-black/70"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </section>
  );
}
