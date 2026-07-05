import Image from "next/image";

interface Platform {
  name: string;
  description: string;
  imageSrc: string;
}

const platforms: Platform[] = [
  {
    name: "Meta",
    description:
      "Reach, engage and convert customers across Facebook and Instagram through high-performing paid campaigns.",
    imageSrc: "/assets/platforms/meta.jpg",
  },
  {
    name: "LinkedIn",
    description:
      "Generate qualified B2B leads through strategic content, paid advertising and professional outreach.",
    imageSrc: "/assets/platforms/linkedin.jpg",
  },
  {
    name: "YouTube",
    description:
      "Create video campaigns that educate, build trust and convert viewers into customers.",
    imageSrc: "/assets/platforms/youtube.jpg",
  },
  {
    name: "TikTok",
    description:
      "Capture attention with high-impact short-form video designed for modern audiences.",
    imageSrc: "/assets/platforms/tiktok.jpg",
  },
];

export default function PlatformsWeWorkWith() {
  return (
    <section className="bg-[#0A0A0A] py-20 px-6">
      <h2
        className="text-white text-center mx-auto mb-10"
        style={{
          fontWeight: 500,
          fontSize: "40px",
          lineHeight: "100%",
          letterSpacing: "0%",
        }}
      >
        platforms we work with
      </h2>

      <div className="max-w-[1150px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {platforms.map((platform) => (
          <div
            key={platform.name}
            className="relative rounded-2xl overflow-hidden  group"
          >
            <div className="relative w-full min-h-[418px] aspect-[4/5]">
              {platform.imageSrc ? (
                <Image
                  src={platform.imageSrc}
                  alt={platform.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-neutral-900" />
              )}

              {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" /> */}

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3
                  className="text-white mb-2"
                  style={{
                    fontWeight: 700,
                    fontSize: "28px",
                    lineHeight: "35px",
                    letterSpacing: "0%",
                  }}
                >
                  {platform.name}
                </h3>
                <p
                  className="text-neutral-300"
                  style={{
                    fontWeight: 400,
                    fontSize: "15px",
                    lineHeight: "24.38px",
                    letterSpacing: "0%",
                  }}
                >
                  {platform.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}