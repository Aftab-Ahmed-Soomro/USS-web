"use client";

export function HomeHero() {
  return (
    <section className="relative w-full h-auto aspect-[16/12] sm:aspect-auto sm:h-[100svh] sm:min-h-[550px] max-h-[1080px] flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="relative sm:absolute inset-0 w-full h-full z-0">
        {/* Desktop Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden sm:block w-full h-full object-cover object-center"
          preload="metadata"
          poster="/assets/hero-poster.webp"
        >
          <source src="/assets/USS Main Website Showreel.webm" type="video/webm" />
        </video>

        {/* Mobile Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="sm:hidden w-full h-full object-cover object-center"
          preload="metadata"
          poster="/assets/hero-poster.webp"
        >
          <source src="/assets/Mobile Video.webm" type="video/webm" />
        </video>
        {/* Cinematic gradient overlay — keeps text readable */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10" />
        <div className="hidden sm:block absolute inset-0 bg-black/15" />
      </div>
    </section>
  );
}