"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Volume2, VolumeX } from "lucide-react";

interface SingleVideoPlayerProps {
  src?: string;
  previewSrc: string;
  previewAlt: string;
  previewPosition?: string;
  productName: string;
}

export function SingleVideoPlayer({ src, previewSrc, previewAlt, previewPosition, productName }: SingleVideoPlayerProps) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    if (videoRef.current) {
      videoRef.current.muted = newMuted;
    }
  };

  return (
    <div className="relative mx-auto mt-[48px] aspect-[1014/540] max-w-[1014px] overflow-hidden rounded-[10px] bg-[#181818] shadow-[0_0_65px_rgba(255,255,255,0.23)] group">
      {src ? (
        <>
          <video
            ref={videoRef}
            src={src}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
            aria-label={`${productName} campaign video`}
          />
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition hover:bg-black/70 opacity-0 group-hover:opacity-100"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </>
      ) : (
        <>
          <Image
            src={previewSrc}
            alt={previewAlt}
            fill
            sizes="(min-width: 1024px) 1014px, 92vw"
            className="scale-[1.03] object-cover blur-[8px]"
            style={{
              objectPosition: previewPosition ?? "center",
            }}
          />
          <div className="absolute inset-0 bg-black/12" />
        </>
      )}
    </div>
  );
}
