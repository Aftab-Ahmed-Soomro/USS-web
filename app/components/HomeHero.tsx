export function HomeHero() {
  return (
    <section className="relative w-full h-auto aspect-video sm:h-[100svh] sm:min-h-[550px] max-h-[1080px] flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="relative sm:absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
          preload="auto"
        >
          <source src="https://emmanuelcolewilliams.com/uss-assets/USS Main Website Showreel.mp4" type="video/mp4" />
        </video>
        {/* Cinematic gradient overlay — keeps text readable */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10" />
        <div className="hidden sm:block absolute inset-0 bg-black/15" />
      </div>

      {/* Main Content */}
      {/* <div className="relative w-full max-w-[1150px] mx-auto px-4 sm:px-6 pt-16 sm:pt-24">
        <div className="max-w-[900px]">

          <FadeLeft delay={0.1}>
            <h1 className="text-[36px] min-[375px]:text-[44px] sm:text-[60px] md:text-[84px] leading-[1.05] text-white tracking-[-0.04em]">
              <span className="font-bold">built to </span>
              <span className="font-[var(--font-cormorant)] timesFontFamily italic font-light tracking-normal">scale.</span>
              <br />
              <span className="font-bold">designed to </span>
              <span className="font-[var(--font-cormorant)] timesFontFamily italic font-light tracking-normal">convert.</span>
            </h1>
          </FadeLeft>

          <FadeDown delay={0.3}>
            <p className="mt-3 sm:mt-4 text-white text-[10px] min-[375px]:text-[12px] md:text-[14px] font-bold tracking-[0.2em] sm:tracking-[0.4em] uppercase">
              WE ARE USS
            </p>
          </FadeDown>

          <FadeUp delay={0.45}>
            <div className="mt-6 sm:mt-8 md:mt-10">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center bg-[#ff5500] hover:bg-[#ff6b1f] text-white px-6 md:px-8 h-[40px] md:h-[46px] rounded-full font-[var(--font-be-vietnam)] text-[12px] md:text-[13px] font-bold transition"
              >
                Book a Consultation
              </Link>
            </div>
          </FadeUp>

        </div>
      </div> */}

      {/* Let's Connect — slides in from right, bottom corner */}
      {/* <FadeRight delay={0.55}> */}
      {/* <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-6 md:bottom-12 md:right-12 z-10">
          <Link href="#connect" className="text-white text-[16px] min-[375px]:text-[20px] md:text-[28px] tracking-tight hover:opacity-80 transition flex items-center gap-1">
            <span className="font-medium">let&apos;s</span> <span className="font-bold">connect</span>
          </Link>
        </div> */}
      {/* </FadeRight> */}

    </section>
  );
}