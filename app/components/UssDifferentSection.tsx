import Image from "next/image";

export function UssDifferentSection() {
  return (
    <section 
      className="relative z-10 bg-[#0a0a0a] text-white overflow-hidden py-[50px] sm:py-[100px]"
      style={{
        backgroundImage: "url('/assets/bgMain.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto flex max-w-[1150px] px-6 flex-col items-center">
        <h2 className="w-full text-center font-[var(--font-be-vietnam)] text-[32px] sm:text-[56px] font-normal leading-[1.2] sm:leading-[18.33px] tracking-[-0.02em] pb-8 sm:pb-16">
          what&apos;s make{" "}
          <span className="text-[42px] sm:text-[72px] font-normal timesFontFamily italic tracking-[-0.02em] text-[#ff5500]">
            uss different
          </span>
        </h2>

        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8 mt-4 sm:mt-8">
          <div className="relative w-full max-w-[405px] aspect-[405/620]">
            <Image
              src="/assets/cardMain1.png"
              alt="USS Different 1"
              fill
              className="object-contain lg:object-cover"
              sizes="(max-width: 1024px) 100vw, 405px"
            />
          </div>
          <div className="relative w-full max-w-[405px] aspect-[405/620]">
            <Image
              src="/assets/cardMain2.png"
              alt="USS Different 2"
              fill
              className="object-contain lg:object-cover"
              sizes="(max-width: 1024px) 100vw, 405px"
            />
          </div>
          <div className="relative w-full max-w-[405px] aspect-[405/620]">
            <Image
              src="/assets/cardMain3.png"
              alt="USS Different 3"
              fill
              className="object-contain lg:object-cover"
              sizes="(max-width: 1024px) 100vw, 405px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
