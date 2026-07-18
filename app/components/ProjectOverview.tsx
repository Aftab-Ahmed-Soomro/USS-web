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
    <section className={`bg-${bgColor} py-20 text-white overflow-hidden font-[var(--font-inter)]`}>
      <div className="w-full max-w-[1150px] px-4 mx-auto flex flex-col items-center">
        
        {/* Header */}
        <FadeUp>
          <div className="flex flex-col items-center mb-10 text-center">
            <h2 className="flex flex-wrap justify-center items-center gap-x-3 mb-2">
              <span 
                className={`text-${textColor} lowercase font-[var(--font-be-vietnam)]`}
                style={{ fontWeight: 700, fontSize: "56px", lineHeight: "51.41px", letterSpacing: "-3px" }}
              >
                project
              </span>
              <span 
                className={`text-${textColor} italic lowercase font-[var(--font-cormorant)] timesFontFamily`}
                style={{ fontWeight: 400, fontSize: "72px", lineHeight: "51.41px", letterSpacing: "-3px" }}
              >
                overview.
              </span>
            </h2>
            <p 
              className={`text-${textColor} uppercase font-[var(--font-inter)]`}
              style={{ fontWeight: 500, fontSize: "24px", lineHeight: "51.41px", letterSpacing: "-1px" }}
            >
              {subheading}
            </p>
          </div>
        </FadeUp>

        {/* Images Grid */}
        <Stagger className="flex flex-wrap justify-center gap-4 w-full">
          {images.map((src, i) => (
            <StaggerItem key={i}>
              <div 
                className="relative overflow-hidden shrink-0"
                style={{ width: "260px", height: "512px", maxWidth: "100%" }}
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
