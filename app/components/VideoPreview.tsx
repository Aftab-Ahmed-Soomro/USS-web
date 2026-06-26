import Image from "next/image";

export function VideoPreview() {
  return (
    <section className="relative z-10 bg-[#080808] px-0 pb-[5px] text-white">
      <div className="relative mx-auto aspect-[16/9] w-full overflow-hidden border-y border-black sm:aspect-[2.05/1] lg:aspect-[2.72/1] min-h-[600px]">
        <Image
          src="/assets/swimming video.png"
          alt="Luxury rooftop pool video preview"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/5" />

        <button
          aria-label="Play video"
          className="absolute left-1/2 top-1/2 grid size-[72px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#ff5a05] text-white shadow-[0_14px_40px_rgba(0,0,0,0.35)] transition hover:bg-[#ff6b1f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff5a05] sm:size-[82px]"
        >
          <span className="ml-[5px] h-0 w-0 border-y-[14px] border-l-[20px] border-y-transparent border-l-white sm:border-y-[16px] sm:border-l-[23px]" />
        </button>
      </div>
    </section>
  );
}
