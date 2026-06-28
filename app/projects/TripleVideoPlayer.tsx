"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface TripleVideoPlayerProps {
  srcs: string[];
  productName: string;
}

export function TripleVideoPlayer({ srcs, productName }: TripleVideoPlayerProps) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const toggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    videoRefs.current.forEach((video) => {
      if (video) video.muted = newMuted;
    });
  };

  return (
    <div className="relative mx-auto mt-[48px] max-w-[1014px] overflow-hidden rounded-[10px] bg-[#181818] shadow-[0_0_65px_rgba(255,255,255,0.23)] group">
      <div className="flex h-[540px] gap-[3px]">
        {srcs.map((src, i) => (
          <video
            key={src}
            ref={(el) => {
              videoRefs.current[i] = el;
            }}
            src={src}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="metadata"
            aria-label={`${productName} campaign video ${i + 1}`}
            className="h-full flex-1 object-cover"
          />
        ))}
      </div>
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition hover:bg-black/70 opacity-0 group-hover:opacity-100"
        aria-label={isMuted ? "Unmute videos" : "Mute videos"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </div>
  );
}
