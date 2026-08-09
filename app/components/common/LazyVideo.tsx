"use client";

import React, { useRef, useState, useEffect } from "react";

export interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src?: string;
  poster?: string;
  className?: string;
  rootMargin?: string;
  autoplayWhenInView?: boolean;
  children?: React.ReactNode;
}

export function LazyVideo({
  src,
  poster,
  className = "",
  rootMargin = "200px 0px 200px 0px",
  autoplayWhenInView = true,
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  preload = "none",
  children,
  ...props
}: LazyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasBeenViewed, setHasBeenViewed] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          setHasBeenViewed(true);
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView && autoplayWhenInView) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented
        });
      }
    } else if (!isInView && video.played.length > 0) {
      video.pause();
    }
  }, [isInView, autoplayWhenInView]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {hasBeenViewed ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay={autoplayWhenInView && isInView}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          preload={preload}
          className="w-full h-full object-cover"
          {...props}
        >
          {children}
        </video>
      ) : poster ? (
        <img
          src={poster}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full bg-[#0d0d0d]" />
      )}
    </div>
  );
}
