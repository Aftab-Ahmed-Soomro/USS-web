"use client";

interface DoubleVideoPlayerProps {
  srcs: [string, string];
  productName: string;
}

export function DoubleVideoPlayer({ srcs, productName }: DoubleVideoPlayerProps) {
  return (
    <div className="relative mx-auto mt-[48px] max-w-[1014px] overflow-hidden rounded-[10px] bg-[#181818] shadow-[0_0_65px_rgba(255,255,255,0.23)]">
      <div className="flex h-[540px] gap-[3px]">
        {srcs.map((src, i) => (
          <video
            key={src}
            src={src}
            muted
            playsInline
            preload="metadata"
            controls
            aria-label={`${productName} campaign video ${i + 1}`}
            className="h-full flex-1 object-cover"
          />
        ))}
      </div>
    </div>
  );
}
