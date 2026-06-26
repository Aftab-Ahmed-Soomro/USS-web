import Image from "next/image";

const projects = [
  {
    name: "CINNAMOOD",
    image: "/assets/company/cinamood-card.jpg",
    alt: "Cinnamood drink campaign",
  },
  {
    name: "AGENCY 8",
    image: "/assets/company/agency8-card.jpg",
    alt: "Agency 8 luxury property campaign",
  },
  {
    name: "YULA LOUNGE",
    image: "/assets/company/yula-card.jpg",
    alt: "Yula Lounge dessert campaign",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 flex min-h-[1056px] flex-col items-center justify-center gap-12 bg-[#0a0a0a] px-6 py-[100px] text-white lg:px-12"
    >
      <div className="flex w-full max-w-[1150px] flex-col items-center gap-8">
        <h2 className="font-[var(--font-be-vietnam)] text-[38px] font-medium lowercase leading-[1.05] tracking-[-0.06em] sm:text-[48px] lg:text-[56px] lg:leading-[71px]">
          you&apos;re in good{" "}
          <span className="font-serif text-[1.08em] font-extralight timesFontFamily italic tracking-[-0.035em]">
            company
          </span>
        </h2>

        <p className="w-full font-[var(--font-be-vietnam)] text-[14px] font-medium uppercase leading-[1.25] tracking-[-0.5px] text-white sm:text-[18px] lg:text-[24px] lg:leading-[17px] lg:tracking-[-1px]">
          DELIVERING SOLUTIONS ACROSS THE WORLD
        </p>
      </div>

      <div className="grid w-full max-w-[1150px] grid-cols-1 justify-items-center gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            className="relative aspect-[390/625] w-full max-w-[390px] overflow-hidden bg-[#151515]"
            key={project.name}
          >
            <Image
              src={project.image}
              alt={project.alt}
              fill
              sizes="(min-width: 1024px) 390px, (min-width: 768px) 31vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
            <h3 className="absolute bottom-[46px] left-[38px] right-6 font-[var(--font-be-vietnam)] text-[23px] font-bold leading-none tracking-[0.02em] text-white sm:text-[28px]">
              {project.name}
            </h3>
          </article>
        ))}
      </div>

      <a
        href="#projects"
        className="inline-flex h-9 w-[258px] items-center justify-center rounded-full bg-[#ff5500] px-[22px] py-2.5 font-[var(--font-be-vietnam)] text-[13px] font-bold leading-4 tracking-[0.52px] text-white transition hover:bg-[#ff6b1f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5500]"
      >
        View All Projects <span className="ml-[6px]">&rarr;</span>
      </a>
    </section>
  );
}
