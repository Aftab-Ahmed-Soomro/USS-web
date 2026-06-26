"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import FadeDown from "../components/FadeDown";
import FadeUp from "../components/FadeUp";
import FadeRight from "../components/FadeRight";
import { DraggableContainer } from "../components/DraggableContainer";

const categories = [
  {
    name: "F&B",
    topTag: "Helping Brands Establish",
    bottomTag: "Brands Launching",
    projects: [
      { title: "CINNAMOOD", description: "Franchise Expanding To Dubai", image: "/assets/projectsPagePics/cinamood.jpg", tags: ["UAE Expansion"], href: "/projects/cinamood" },
      { title: "Coshe", description: "Wellness Juices", image: "/assets/projectsPagePics/Coshe.jpg", tags: ["Brand Launch"], href: "/projects/coshe-juices" },
      { title: "Oak Restaurant", description: "Building awareness for a new dining experience.", image: "/assets/projectsPagePics/oak.png", tags: ["Restaurant Launch"], href: "/projects/oak" }
    ]
  },
  {
    name: "Hospitality",
    topTag: "Travel & Tourism",
    bottomTag: "Helping Tourism Grow",
    projects: [
      { title: "SupperClub", description: "Scaling Supperclub Membership", image: "/assets/projectsPagePics/supper.png", tags: ["Scaling Business"], href: "/projects/supperclub" },
      { title: "Yula", description: "Transforming Yalseh into Yula", image: "/assets/projectsPagePics/yula.jpg", tags: ["Rebrand"], href: "/projects/yula-beach-lounge" },
      { title: "Reclaim", description: "Launching Reclaim in the US", image: "/assets/projectsPagePics/reclaim.png", tags: ["Scaling Business"], href: "/projects/reclaim-us" }
    ]
  },
  {
    name: "Professional services",
    topTag: "Helping Business Expand",
    bottomTag: "Helping Business Grow",
    projects: [
      { title: "Flowork", description: "Office Opening in Dubai Hills", image: "/assets/projectsPagePics/flowork.png", tags: ["Scaling Business"], href: "/projects/flowork" },
      { title: "Residency Advanced", description: "Paid Search Lead Generation", image: "/assets/projectsPagePics/residency.png", tags: ["Scaling Business"], href: "/projects/residency-advanced" }
    ]
  },
  {
    name: "Technology and startups",
    topTag: "Helping Business Expand",
    bottomTag: "Helping Business Grow",
    projects: [
      { title: "PrecisionTalk", description: "AI Voice Agent Expanding in UAE", image: "/assets/projectsPagePics/precision.png", tags: ["Scaling Business"], href: "/projects/precision-talk" },
      { title: "Disturbed Innovations Group", description: "3D Immersive Experiences", image: "/assets/projectsPagePics/disturbed.jpg", tags: ["Scaling Business"], href: "/projects/disturbed-innovations" }
    ]
  },
  {
    name: "Events & Entertainment",
    topTag: "Helping Business Expand",
    bottomTag: "Helping Business Grow",
    projects: [
      { title: "Women Who Thrive", description: "Networking Event Membership", image: "/assets/projectsPagePics/women.jpg", tags: ["Scaling Business"], href: "/projects/women-who-thrive" },
      { title: "Adidas UAE", description: "Product Event For New Launch", image: "/assets/projectsPagePics/adidas.jpg", tags: ["Scaling Business"], href: "/projects/adidas-middle-east" },
      { title: "Blank DXB", description: "New Warehouse Events", image: "/assets/projectsPagePics/blank.png", tags: ["Scaling Business"], href: "/projects/blank-dxb" },
      { title: "Fete Events", description: "Premium Event Planning", image: "/assets/fete/1.png", tags: ["Scaling Business"], href: "/projects/fete-events" }
    ]
  },
  {
    name: "E-Commerce",
    topTag: "Helping Business Expand",
    bottomTag: "Helping Business Grow",
    projects: [
      { title: "Afro Maya", description: "Fashion E-Commerce Brand", image: "/assets/projectsPagePics/afro.jpg", tags: ["Scaling Business"], href: "/projects/afro-maya" }
    ]
  },
  {
    name: "Wellness & Beauty",
    topTag: "Helping Business Expand",
    bottomTag: "Helping Business Grow",
    projects: [
      { title: "M&N Nail Spa", description: "Beauty Treatment Salon in Dubai", image: "/assets/projectsPagePics/m&n.png", tags: ["Scaling Business"], href: "/projects/mn-nail-spa" }
    ]
  },
  {
    name: "Talent Projects",
    topTag: "Helping Business Expand",
    bottomTag: "Helping Business Grow",
    projects: [
      { title: "Sadia Phycology", description: "Black Friday Planner Project", image: "/assets/projectsPagePics/sadia.png", tags: ["Scaling Business"], href: "/projects/sadia-psychology" },
      { title: "Tish Wonders", description: "New E-Book Launch", image: "/assets/projectsPagePics/tesh.png", tags: ["Scaling Business"], href: "/projects/tish-wonders" }
    ]
  },
  {
    name: "Real Estate",
    topTag: "Helping Business Expand",
    bottomTag: "Helping Business Grow",
    projects: [
      { title: "Agency 8", description: "Real Estate Agency in Dubai", image: "/assets/projectsPagePics/agency.png", tags: ["Scaling Business"], href: "/projects/agency-8" },
      { title: "Fabri Elite", description: "Luxury Agency in UAE", image: "/assets/projectsPagePics/fabri.jpg", tags: ["Scaling Business"], href: "#" },
      { title: "St. George Estate", description: "Real Estate Agency in Dubai", image: "/assets/projectsPagePics/st.png", tags: ["Scaling Business"], href: "#" }
    ]
  }
];

// ─── Animation Variants ────────────────────────────────────────────────────────

const rowVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const labelCardVariants = {
  hidden: { opacity: 0, x: -40, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── ProjectsCta ───────────────────────────────────────────────────────────────

function ProjectsCta() {
  return (
    <section className="relative z-10 px-6 py-[80px] text-white overflow-hidden">
      <div className="relative mx-auto max-w-[800px] text-center">

        {/* Eyebrow pill — drops down */}
        <FadeDown delay={0.1}>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-1.5 w-1.5 rounded-full bg-[#ff5500]"></div>
            <p className="text-[9px] font-bold uppercase tracking-[3px] text-white/90">
              FULL-STACK MARKETING
            </p>
          </div>
        </FadeDown>

        {/* Main heading — rises up */}
        <FadeUp delay={0.2}>
          <h2 className="mb-10 text-[42px] font-medium leading-[1.05] tracking-[-1.5px] sm:text-[60px]">
            we are your{" "}
            <span className="font-[var(--font-cormorant)] text-[1.1em] font-light timesFontFamily italic">
              360&deg;
            </span>
            <br />
            <span className="font-[var(--font-cormorant)] text-[1.1em] font-light timesFontFamily italic">
              marketing agency
            </span>
          </h2>
        </FadeUp>

        {/* Body copy — slides in from right */}
        <FadeRight delay={0.3}>
          <div className="mx-auto max-w-[600px] space-y-8 text-[12px] leading-[1.7] tracking-[1.4px] text-white/80">
            <p>
              Calling ourselves a data-driven, problem solving, people connecting, digital crazy,
              talent engaging creative agency is too long winded.. so we call ourselves USS.
            </p>
            <p>
              We bring all digital platforms to one connected system designed to scale.
            </p>
          </div>
        </FadeRight>

        {/* CTA buttons — rise up last */}
        <FadeUp delay={0.4}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="h-[40px] w-full sm:w-auto px-10 rounded-full bg-[#ff5500] text-[8px] font-bold text-white transition-colors hover:bg-[#ff6b1f]">
              Book a Call
            </button>
            <button className="flex h-[40px] w-full sm:w-auto px-8 items-center justify-center gap-2 rounded-full border border-white bg-transparent text-[8px] font-bold text-white transition-colors hover:bg-white/5">
              See How We Scale
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 opacity-80">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <Header />

      {/* Hero section */}
      <section className="bg-black px-6 pb-[60px] pt-[112px] text-center text-white sm:pb-[90px]">
        <div className="mx-auto max-w-[1150px]">

          {/* Eyebrow — drops down */}
          <FadeDown delay={0.1}>
            <p className="font-[var(--font-be-vietnam)] text-[13px] font-medium uppercase leading-none tracking-[1.3px] text-white flex items-center justify-center">
              OUR PORTFOLIO
            </p>
          </FadeDown>

          {/* Main heading — rises up */}
          <FadeUp delay={0.2}>
            <h1 className="mt-[20px] font-[var(--font-be-vietnam)] text-[38px] font-medium lowercase leading-[1.03] tracking-[-0.9px] text-white sm:text-[56px] sm:tracking-[2px]">
              projects that make an{" "}
              <span className="font-[var(--font-cormorant)] text-[1.15em] font-extralight timesFontFamily italic tracking-[-0.035em] text-[#ff5500]">
                impact
              </span>
            </h1>
          </FadeUp>

          {/* Subheading — slides in from right */}
          <FadeRight delay={0.3}>
            <p className="mt-[30px] font-[var(--font-be-vietnam)] text-[12px] font-medium uppercase leading-[1.35] tracking-[0.3px] text-white sm:text-[15px]">
              TAKE A LOOK AT USS PROJECTS ACROSS UK, US AND MIDDLE EAST
            </p>
          </FadeRight>

        </div>
      </section>

      {/* Categories scroll rows */}
      <section className="bg-black pb-[124px] pt-[20px] text-white sm:pb-[150px]">
        <div className="flex flex-col gap-8 sm:gap-12 max-w-[1200px] mx-auto">
          {categories.map((category, categoryIdx) => (
            <motion.div
              key={category.name}
              className="flex items-stretch gap-4 sm:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={rowVariants}
              custom={categoryIdx}
            >
              {/* Sticky category label card — slides in from left */}
              <motion.div
                // variants={labelCardVariants}
                className="sticky left-0 z-10 shrink-0 w-[260px] sm:w-[320px] aspect-[4/5] rounded-[16px] bg-[#0f0f0f] border border-white/5 relative p-5 sm:p-6 flex flex-col justify-between self-start"
              >
                {/* Subtle top-left glow accent */}
                <div className="pointer-events-none absolute -top-10 -left-10 h-[180px] w-[180px] rounded-full bg-[#ff5500] opacity-[0.06] blur-[60px]" />

                <div className="self-end bg-white/5 backdrop-blur-md border border-white/10 text-white/80 text-[9px] sm:text-[10px] font-medium px-3 py-1.5 rounded-full font-[var(--font-inter)] tracking-[-0.2px] w-fit">
                  {category.topTag}
                </div>
                <div>
                  <h2 className="text-white text-[28px] sm:text-[32px] font-normal font-[var(--font-be-vietnam)] leading-[1.1] tracking-[-0.5px]">
                    {category.name}
                  </h2>
                  <div className="mt-4 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white/70 text-[10px] font-medium font-[var(--font-inter)] tracking-[-0.2px] hover:bg-white/10 transition-colors cursor-pointer w-fit">
                    {category.bottomTag}
                  </div>
                </div>
              </motion.div>

              {/* Scrollable project cards — each card staggers in */}
              <DraggableContainer className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
                {category.projects.map((project, idx) => (
                  <motion.div
                    key={`${category.name}-${idx}`}
                    initial={{ opacity: 0, y: 50, scale: 0.96, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="snap-start shrink-0"
                  >
                    <Link
                      href={project.href}
                      className="relative w-[260px] sm:w-[320px] aspect-[4/5] rounded-[16px] overflow-hidden group block"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(min-width: 640px) 320px, 260px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-black/10 transition-opacity duration-500 group-hover:opacity-90" />

                      {/* See More badge */}
                      <div className="absolute top-5 left-5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] px-3 py-1.5 rounded-full flex items-center justify-center font-[var(--font-inter)] transition-all duration-300 group-hover:bg-white/25 group-hover:scale-105">
                        <span className="font-medium">See More &gt;</span>
                      </div>

                      {/* Tags */}
                      <div className="absolute top-5 right-5 flex flex-wrap gap-2 pointer-events-none">
                        {project.tags.map(tag => (
                          <span
                            key={tag}
                            className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-medium px-3 py-1.5 rounded-full font-[var(--font-inter)] tracking-[-0.2px]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title & description — slides up on hover */}
                      <div className="absolute bottom-5 left-5 right-5 pointer-events-none translate-y-1 group-hover:translate-y-0 transition-transform duration-400">
                        <h3 className="text-white text-xl sm:text-[22px] font-medium font-[var(--font-be-vietnam)] tracking-[-0.5px]">
                          {project.title}
                        </h3>
                        <p className="text-white/50 text-[12px] sm:text-[13px] mt-1 font-[var(--font-inter)] line-clamp-2 leading-[1.4]">
                          {project.description}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </DraggableContainer>

            </motion.div>
          ))}
        </div>
      </section>

      <ProjectsCta />
      <Footer />
    </main>
  );
}