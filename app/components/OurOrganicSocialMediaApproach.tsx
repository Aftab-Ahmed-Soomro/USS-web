import Image from "next/image";
import Stagger from "./Stagger";
import StaggerItem from "./Staggeritem";

interface GridImage {
  src: string;
  alt: string;
}

const column1: GridImage = { src: "/assets/approachGrid/1.png", alt: "reclaim feature 1" };


const column2: GridImage = { src: "/assets/approachGrid/2.png", alt: "hospitality feature 1" };

const column3: GridImage = { src: "/assets/approachGrid/3.png", alt: "rckxperience feature 1" };

function ImageColumn({ images }: { images: GridImage }) {
  return (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio: "404 / 719" }}>
      {images.src ? (
            <Image
              src={images.src}
              alt={images.alt}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-neutral-200" />
          )}
    </div>
  );
}

export default function OurOrganicSocialMediaApproach() {
  return (
    <section className="bg-white py-20 px-6">
      <Stagger staggerDelay={0.15}>
        <div className="max-w-6xl mx-auto text-center mb-12">
          <StaggerItem>
            <p
              className="uppercase mb-4"
              style={{
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "16px",
                letterSpacing: "-1.2px",
                color: "#ff5500",
              }}
            >
              Our Approach
            </p>
          </StaggerItem>

          <StaggerItem>
            <h2 className="text-black">
              <span
                style={{
                  fontWeight: 500,
                  fontSize: "56px",
                  lineHeight: "70px",
                  letterSpacing: "-1.2px",
                }}
              >
                our{" "}
              </span>
              <span className="timesFontFamily"
                style={{
                  fontWeight: 400,
                  fontStyle: "italic",
                  fontSize: "72px",
                  lineHeight: "70px",
                  letterSpacing: "-1.2px",
                  color: "#FF5500"
                }}
              >
                organic{" "}
              </span>
              <span
                style={{
                  fontWeight: 500,
                  fontSize: "56px",
                  lineHeight: "70px",
                  letterSpacing: "-1.2px",
                }}
              >
                social grids
              </span>
            </h2>
          </StaggerItem>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <StaggerItem>
            <ImageColumn images={column1} />
          </StaggerItem>
          <StaggerItem>
            <ImageColumn images={column2} />
          </StaggerItem>
          <StaggerItem>
            <ImageColumn images={column3} />
          </StaggerItem>
        </div>
      </Stagger>
    </section>
  );
}