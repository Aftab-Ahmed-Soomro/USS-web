import Image from "next/image";
import FadeDown from "./FadeDown";
import FadeLeft from "./FadeLeft";
import FadeUp from "./FadeUp";
import FadeRight from "./FadeRight";

export function GoodCompanyMap() {
  const mapLogos = [
    {
      src: "/assets/mapLogos/1.png",
      alt: "Precision Talk",
      className: "top-[66%] left-[80%]",
      imgClass: "w-[85px] sm:w-[120px] md:w-[140px] lg:w-[155px]",
    },
    {
      src: "/assets/mapLogos/2.png",
      alt: "Golden Falcon",
      className: "top-[56%] left-[78%]",
      imgClass: "w-[60px] sm:w-[80px] md:w-[95px] lg:w-[110px]",
    },
    {
      src: "/assets/mapLogos/3.png",
      alt: "Hiba by Amthakara",
      className: "top-[58%] left-[34%]",
      imgClass: "w-[75px] sm:w-[105px] md:w-[125px] lg:w-[140px]",
    },
    {
      src: "/assets/mapLogos/4.png",
      alt: "Beyond Performance",
      className: "top-[25%] left-[58%]",
      imgClass: "w-[85px] sm:w-[120px] md:w-[140px] lg:w-[155px]",
    },
  ];

  return (
    <section className="relative z-10 border-t border-t-black w-full bg-white py-[50px] sm:py-16 md:py-24 px-4 min-[375px]:px-6 overflow-hidden">
      <div className="w-full max-w-[1150px] mx-auto flex flex-col items-center ">

        {/* Main heading — fades up */}
        <FadeUp delay={0.1}>
          <h2 className="text-center text-[32px] sm:text-[36px] md:text-5xl lg:text-[56px] text-black tracking-[-6%] mb-[8px] sm:mb-3 leading-[1.1] sm:leading-normal">
            <span className="font-medium">you&apos;re in</span>{" "}
            <span className="text-[#FF5722] italic timesFontFamily px-1 text-[42px] sm:text-4xl md:text-6xl lg:text-[72px]">good</span>{" "}
            <span className="font-medium tracking-[-6%]">company</span>
          </h2>
        </FadeUp>

        {/* Subheading — drops down after heading */}
        <FadeDown delay={0.2}>
          <p className="text-center text-[10px] md:text-xs lg:text-[24px] text-black tracking-[-1px] font-medium uppercase mb-[24px] sm:mb-8 md:mb-12">
            DELIVERING SOLUTIONS ACROSS THE WORLD
          </p>
        </FadeDown>

        <div className="w-full relative max-w-[1200px] mx-auto  px-0 sm:px-2 pr-4 sm:pr-0 scale-[1.18] sm:scale-100 origin-center">

          {/* Background map lines — slides in from left */}
          <FadeLeft delay={0.3}>
            <Image
              src="/assets/Group 16.webp"
              alt="World map background"
              width={1200}
              height={600}
              className="w-full h-auto mx-auto"
              sizes="100vw"
            />
          </FadeLeft>

          {/* Foreground logos — slides in from right, slightly after */}
          {/* <FadeRight delay={0.45}> */}
            <Image
              src="/assets/map.webp"
              alt="Companies we work with"
              width={1000}
              height={500}
              className="absolute max-w-[1000px] top-0 left-[8%] sm:left-20 w-[90%] sm:w-full h-auto mx-auto object-contain"
              style={{ padding: "inherit" }}
              sizes="(max-width: 640px) 90vw, 1000px"
            />
          {/* </FadeRight> */}

          {/* Additional 4 logos placed at vacant map locations */}
          {mapLogos.map((logo, index) => (
            <FadeUp
              key={index}
              delay={0.4 + index * 0.1}
              className={`absolute ${logo.className} z-20`}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={160}
                className={`${logo.imgClass} h-auto object-contain transition-transform duration-300 pointer-events-auto`}
              />
            </FadeUp>
          ))}

        </div>
      </div>
    </section>
  );
}