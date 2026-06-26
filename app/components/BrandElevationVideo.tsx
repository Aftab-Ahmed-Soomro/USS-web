import Image from "next/image";
import { Play } from "lucide-react";

export default function BrandElevationVideo() {
  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] min-h-[665px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/we_are_us.png"
          alt="We Are USS Video Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark Overlay to make text pop and match the mood */}
        <div className="absolute inset-0 bg-black/45 z-10" />
      </div>

        {/* Play Button Container */}
        <div className="flex-1 flex items-center justify-center w-full mt-[-5vh] md:mt-[-10vh]">
          <button 
            className="group relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border border-white/60 hover:bg-white/10 hover:border-white hover:scale-105 transition-all duration-300 cursor-pointer z-30"
            aria-label="Play video"
          >
            <Play 
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 text-[#ff5a00] ml-1 sm:ml-2 drop-shadow-md group-hover:text-[#ff7026] transition-colors" 
              fill="currentColor" 
              strokeWidth={1}
            />
          </button>
        </div>
    </section>
  );
}
