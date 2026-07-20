import Image from "next/image";
import FadeUp from "./FadeUp";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

interface ProjectOverviewProps {
  subheading: string;
  images: string[];
  bgColor: string;
  textColor: string;
}

export function ProjectOverview({ subheading, images, bgColor, textColor }: ProjectOverviewProps) {
  return (
    <section className={`bg-${bgColor} sm:py-20 py-10 text-white overflow-hidden font-[var(--font-inter)]`}>
      <div className="w-full max-w-[1150px] px-4 mx-auto flex flex-col items-center">
        
        {/* Header */}
        <FadeUp>
          <div className="flex flex-col items-center mb-8 sm:mb-10 text-center">
            <h2 className="flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-3 mb-2">
              <span 
                className={`text-${textColor} lowercase font-[var(--font-be-vietnam)] font-bold text-[32px] sm:text-[56px] leading-[1.1] sm:leading-[51.41px] tracking-[-1px] sm:tracking-[-3px]`}
              >
                project
              </span>
              <span 
                className={`text-${textColor} italic lowercase font-[var(--font-cormorant)] timesFontFamily font-normal text-[42px] sm:text-[72px] leading-[1.1] sm:leading-[51.41px] tracking-[-1.5px] sm:tracking-[-3px]`}
              >
                overview.
              </span>
            </h2>
            <p 
              className={`text-${textColor} uppercase font-[var(--font-inter)] font-medium text-[14px] sm:text-[24px] leading-[1.4] sm:leading-[51.41px] tracking-[-0.5px] sm:tracking-[-1px]`}
            >
              {subheading}
            </p>
          </div>
        </FadeUp>

        {/* Images Grid */}
        <Stagger className="flex flex-wrap justify-center gap-4 sm:gap-4 w-full">
          {images.map((src, i) => (
            <StaggerItem key={i}>
              <div 
                className="relative overflow-hidden shrink-0 w-[260px] h-[400px] sm:h-[512px] max-w-full"
              >
                <Image 
                  src={src}
                  alt={`Project overview image ${i+1}`}
                  fill
                  className="object-cover object-center"
                />
              </div>
            </StaggerItem>
          ))}
        </Stagger>

      </div>
    </section>
  );
}
