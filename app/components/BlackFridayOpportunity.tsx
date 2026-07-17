import Image from "next/image";
import FadeUp from "./FadeUp";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

const imageConfigs = [
  {
    src: "/assets/black-friday/1.jpg",
    position: "left 10%",
    scale: 1.15
  },
  {
    src: "/assets/black-friday/2.jpg",
    position: "center 10%",
    scale: 1.6
  },
  {
    src: "/assets/black-friday/3.jpg",
    position: "center 10%",
    scale: 1.4
  },
  {
    src: "/assets/black-friday/4.jpg",
    position: "center 15%",
    scale: 1.0
  },
  {
    src: "/assets/black-friday/5.jpg",
    position: "center 10%",
    scale: 1.0
  },
  {
    src: "/assets/black-friday/6.jpg",
    position: "center 20%",
    scale: 1.5
  },
];

const features = [
  {
    title: "Plan Early",
    description: "Secure brand partnerships ahead of peak season and build a clear campaign schedule around key retail dates."
  },
  {
    title: "Create with Purpose",
    description: "Develop content that feels authentic to your audience while naturally showcasing each brand and its products."
  },
  {
    title: "Maximise Revenue",
    description: "Turn increased audience demand into stronger conversions, repeat partnerships and long-term commercial growth."
  }
];

export function BlackFridayOpportunity() {
  return (
    <section className="bg-white py-16 sm:py-24 text-black overflow-hidden flex flex-col items-center">
      {/* Header Section */}
      <FadeUp>
        <div className="max-w-[1150px] text-center px-4 mx-auto mb-10 sm:mb-16">
          <h2 
            className="font-medium lowercase tracking-[-3.2px] text-[#000000] mb-2 font-[var(--font-be-vietnam)]"
            style={{ fontSize: "56px", lineHeight: "70px" }}
          >
            black friday is your highest
            <br />
            <span 
              className="text-[#FF5500] italic font-medium font-[var(--font-cormorant)] timesFontFamily"
              style={{ fontSize: "56px", lineHeight: "70px", letterSpacing: "-3.2px" }}
            >
              revenue opportunity
            </span>
          </h2>
          <p 
            className="mt-6 font-normal text-[#1A1A1A] mx-auto max-w-[720px] font-[var(--font-inter)]"
            style={{ fontSize: "18px", lineHeight: "29.25px" }}
          >
            Black Friday is when audiences are actively searching, comparing and ready to buy. For YouTubers with engaged, loyal communities, it’s a key opportunity to turn trusted content into meaningful brand partnerships and revenue.
          </p>
        </div>
      </FadeUp>

      {/* Images Arc Section */}
      {/* <FadeUp> */}
        <div className="w-full mb-12 sm:mb-20">
          <div 
         className="w-full flex gap-2 sm:gap-4 overflow-hidden relative h-[200px] sm:h-[300px] lg:h-[380px]"
             style={{ 
               clipPath: "polygon(0% 0%, 10% 4.32%, 20% 7.68%, 30% 10.08%, 40% 11.52%, 50% 12%, 60% 11.52%, 70% 10.08%, 80% 7.68%, 90% 4.32%, 100% 0%, 100% 100%, 90% 95.68%, 80% 92.32%, 70% 89.92%, 60% 88.48%, 50% 88%, 40% 88.48%, 30% 89.92%, 20% 92.32%, 10% 95.68%, 0% 100%)"
             }}
          >
             {imageConfigs.map((config, i) => (
               <div key={i} className="flex-1 relative h-full bg-gray-100 overflow-hidden">
                 <Image 
                   src={config.src} 
                   alt={`Black Friday Creator ${i+1}`}
                   fill
                   className="object-cover"
                   style={{ 
                     objectPosition: config.position,
                     transform: `scale(${config.scale})`,
                     transformOrigin: config.position // Zoom from the focus point
                   }}
                 />
               </div>
             ))}
          </div>
        </div>
      {/* </FadeUp> */}

      {/* Features Section */}
      <Stagger className="w-full max-w-[1150px] px-4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center">
        {features.map((feature, i) => (
          <StaggerItem key={i}>
            <div className="flex flex-col items-center">
              <h3 
                className="font-semibold text-black font-[var(--font-inter)] mb-4"
                style={{ fontSize: "20px", lineHeight: "32px", letterSpacing: "-0.6px" }}
              >
                {feature.title}
              </h3>
              <p 
                className="font-normal text-[#1A1A1A] font-[var(--font-inter)] max-w-[250px]"
                style={{ fontSize: "16px", lineHeight: "30px", letterSpacing: "-2%" }}
              >
                {feature.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
