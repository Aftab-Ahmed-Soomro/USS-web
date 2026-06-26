import Image from "next/image";

const teamMembers = [
  {
    role: "CEO/Founder",
    image: "/assets/team/emanuel.png",
    color: "#72cc3b",
  },
  {
    role: "Marketing Director",
    image: "/assets/team/meeral.png",
    color: "#f45122",
  },
  {
    role: "Content Creator",
    image: "/assets/team/russ.png",
    color: "#ff8f1a",
  },
  {
    role: "Creative Director",
    image: "/assets/team/saadat.png",
    color: "#45a9e9",
  },
  {
    role: "Social Media Manager",
    image: "/assets/team/prag.png",
    color: "#72cc3b",
  },
  {
    role: "Content Creator2",
    image: "/assets/team/max.png",
    color: "#f45122",
  },
  {
    role: "Paid Social",
    image: "/assets/team/tania.png",
    color: "#45a9e9",
  },
];

export function Team() {
  return (
    <section className="relative z-10 bg-[#0a0a0a]  text-white overflow-hidden">
      <div className="mx-auto flex max-w-[1150px] px-6 flex-col items-center gap-8 pt-[82px]">
        <h2 className="w-full px-0 font-[var(--font-be-vietnam)] text-[38px] font-medium leading-[1.12] tracking-[-3px] sm:text-[56px] sm:leading-[68px] sm:tracking-[-3px]">
          USS{" "}
          <span className="font-serif text-[1.08em] sm:text-[72px] font-extralight timesFontFamily italic tracking-[-3px]">
            team
          </span>
        </h2>

        <div className="relative w-full mt-6">
          {/* Accordion Container */}
          <div className="flex w-full h-[450px] sm:h-[500px] lg:h-[600px] flex-row gap-0 overflow-hidden">
            {teamMembers.map((member, idx) => (
              <article
                className="group relative flex-1 cursor-pointer overflow-hidden transition-all duration-500 ease-in-out hover:flex-[1] sm:hover:flex-[1.5] lg:hover:flex-[2]"
                key={member.role}
                style={{ backgroundColor: member.color }}
              >
                {/* Image - fixed width pinned to left, doesn't stretch/zoom on hover */}
                <div className="absolute inset-0 z-0 h-full w-full overflow-hidden border border-black">
                  <div className="absolute top-0 left-0 h-full w-[200px] sm:w-[240px] lg:w-[320px] -translate-x-17">
                    <Image
                      src={member.image}
                      alt={member.role}
                      fill
                      sizes="320px"
                      className="object-cover object-bottom"
                    />
                  </div>
                </div>

                {/* Text Overlay */}
                <div className="pointer-events-none absolute top-4 left-4 z-10 flex gap-3 sm:gap-6 w-[250px] sm:w-[300px]">
                  <span className="font-sans text-[10px] sm:text-[12px] font-bold tracking-widest text-white/80 mt-1 sm:mt-0">
                    0{idx + 1}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}