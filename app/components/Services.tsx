import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type ServiceCard = {
  title: string;
  image: string;
  href?: string;
};

const performanceServices: ServiceCard[] = [
  { title: "Marketing & Growth Strategy", image: "/assets/Performance Services/1.jpg" },
  { title: "Google Ads", image: "/assets/Performance Services/2.jpg" },
  { title: "Meta Ads", image: "/assets/Performance Services/3.jpg" },
  { title: "Email & CRM", image: "/assets/Performance Services/4.jpg" },
  { title: "WhatsApp & SMS", image: "/assets/Performance Services/5.jpg" },
];

const creativeServices: ServiceCard[] = [
  { title: "Social Media Management", image: "/assets/Creative Services/1.jpg" },
  { title: "Content Creation", image: "/assets/Creative Services/2.jpg" },
  { title: "UX & Web Design", image: "/assets/Creative Services/3.jpg" },
  { title: "Website Development", image: "/assets/Creative Services/4.jpg" },
  { title: "Branding & Graphics", image: "/assets/Creative Services/5.jpg" },
];

function ServiceGroup({
  eyebrow,
  description,
  services,
}: {
  eyebrow: string;
  description: string;
  services: ServiceCard[];
}) {
  return (
    <div className="w-full">
      {/* Section header row */}
      <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
        <h3 className="text-[30px] font-medium tracking-[-2.1px] text-[#111111] sm:text-[40px]">
          {eyebrow}
        </h3>
        <p className="max-w-[300px] text-right text-[13px] leading-[1.5] text-[#000] sm:text-[14px]">
          {description}
        </p>
      </div>

      {/* Card grid */}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
        {services.map((service) => (
          <a
            key={service.title}
            href={service.href ?? "#"}
            className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-[#0a0a0a]"
          >
            {/* Image */}
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(min-width: 1024px) 220px, (min-width: 640px) 30vw, 45vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />

            {/* Bottom gradient for legibility */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Title */}
            <span className="absolute bottom-3 left-3 right-12 text-[12px] font-semibold tracking-[0.65px] leading-[1.25] text-white sm:text-[13px]">
              {service.title}
            </span>

            {/* Arrow button */}
            <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm transition-colors duration-300 ease-out group-hover:bg-[#f4651f]">
              <ArrowUpRight className="h-4 w-4 text-white" strokeWidth={2} />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section className="w-full bg-white px-6 py-16 text-[#111111] sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-[1150px] flex-col items-center gap-3 text-center">
        <span className="text-[9px] sm:text-[11px] font-medium uppercase text-[#f4651f]">
          Our Solutions
        </span>
        <h2 className="text-[40px] sm:text-[56px] font-medium leading-[1.1] tracking-[-3px] text-[#111111]">
          360° digital {" "}
          <span className="timesFontFamily text-[52px] sm:text-[72px] tracking-[-3px] italic text-[#f4651f]">growth</span>
        </h2>
        <span className="mt-2 text-[13px] text-[#404040] sm:text-[18px] max-w-[430px]">Everything your business needs to grow online, all under one roof.</span>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1280px] flex-col gap-12">
        <ServiceGroup
          eyebrow="Performance Marketing"
          description="Building brand presence, trust and demand through powerful creative."
          services={performanceServices}
        />
        <ServiceGroup
          eyebrow="Creative Services"
          description="Driving measurable growth through data, strategy and performance."
          services={creativeServices}
        />
      </div>
    </section>
  );
}