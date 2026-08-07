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
    topTag: "Brand Launches",
    bottomTag: "Customer Growth",
    projects: [
      { title: "CINNAMOOD", description: "Franchise Expanding To Dubai", image: "/assets/projectsPagePics/cinamood.jpg", tags: ["UAE Expansion"], href: "/projects/cinamood" },
      { title: "Coshe", description: "Membership Growth Strategy", image: "/assets/projectsPagePics/Coshe.jpg", tags: ["Brand Launch"], href: "/projects/coshe-juices" },
      { title: "Oak Restaurant", description: "Creative Content Production", image: "/assets/projectsPagePics/oak.png", tags: ["Content Creation"], href: "/projects/oak" }
    ]
  },
  {
    name: "Hospitality",
    topTag: "Customer Experience",
    bottomTag: "Bookings & Loyalty",
    projects: [
      { title: "SupperClub", description: "360 Marketing for 5 Star Venues", image: "/assets/projectsPagePics/supper.png", tags: ["Membership Growth"], href: "/projects/supperclub" },
      { title: "Yula", description: "Transforming Yalseh into Yula", image: "/assets/projectsPagePics/yula.jpg", tags: ["Rebrand"], href: "/projects/yula-beach-lounge" }
    ]
  },
  {
    name: "Professional services",
    topTag: "Business Growth",
    bottomTag: "Lead Generation",
    projects: [
      { title: "Flowork", description: "Office Opening in Dubai Hills", image: "/assets/projectsPagePics/flowork.png", tags: ["Business Launch"], href: "/projects/flowork" },
      { title: "Residency Advanced", description: "Paid Search Lead Generation", image: "/assets/projectsPagePics/residency.png", tags: ["Google Ads"], href: "/projects/residency-advanced" },
      { title: "Reclaim", description: "Launching Reclaim in the US", image: "/assets/Untitled design - 2.png", tags: ["US Expansion"], href: "/projects/reclaim-us" }
    ]
  },
  {
    name: "Technology and startups",
    topTag: "Market Expansion",
    bottomTag: "Business Growth",
    projects: [
      { title: "PrecisionTalk", description: "AI Voice Agent Expanding in UAE", image: "/assets/projectsPagePics/precision.png", tags: ["Brand Launch"], href: "/projects/precision-talk" },
      { title: "Disturbed Innovations Group", description: "3D Immersive Experiences", image: "/assets/projectsPagePics/disturbed.jpg", tags: ["Rebrand"], href: "/projects/disturbed-innovations" }
    ]
  },
  {
    name: "Events & Entertainment",
    topTag: "Brand Experiences",
    bottomTag: "Event Launches",
    projects: [
      { title: "Women Who Thrive", description: "Scaling Networking Events", image: "/assets/projectsPagePics/women.jpg", tags: ["Membership Growth"], href: "/projects/women-who-thrive" },
      { title: "Adidas UAE", description: "Product Event For New Launch", image: "/assets/projectsPagePics/adidas.jpg", tags: ["Product Launch"], href: "/projects/adidas-middle-east" },
      { title: "Blank DXB", description: "360 Marketing Driving Enquiries", image: "/assets/projectsPagePics/blank.png", tags: ["Business Launch"], href: "/projects/blank-dxb" },
      { title: "Fete Events", description: "Premium Event Planning", image: "/assets/Fete.png", tags: ["Scaling Business"], href: "/projects/fete-events" }
      ,
      {
        title: "Picksperience",
        description: "Global Sampling Events",
        image: "/assets/pikachu.jpeg",
        tags: ["Brand Launch"],
        href: "/projects/picksperience"
      }
    ]
  },
  {
    name: "E-Commerce",
    topTag: "Online Growth",
    bottomTag: "Revenue Growth",
    projects: [
      { title: "Afro Maya", description: "Fashion E-Commerce Brand", image: "/assets/projectsPagePics/afro.jpg", tags: ["E-Commerce Growth"], href: "/projects/afro-maya" }
    ]
  },
  {
    name: "Wellness & Beauty",
    topTag: "Customer Growth",
    bottomTag: "Brand Awareness",
    projects: [
      { title: "M&N Nail Spa", description: "Beauty Salon In Dubai", image: "/assets/projectsPagePics/m&n.png", tags: ["Scaling Business"], href: "/projects/mn-nail-spa" }
    ]
  },
  {
    name: "Talent Projects",
    topTag: "Personal Branding",
    bottomTag: "Audience Growth",
    projects: [
      { title: "Sadia Psychology", description: "Black Friday Planner Project", image: "/assets/projectsPagePics/sadia.png", tags: ["Black Friday Project"], href: "/projects/sadia-psychology", imageClass: "object-[center_top]" },
      { title: "Tish Wonders", description: "New E-Book Launch", image: "/assets/projectsPagePics/tesh.png", tags: ["Product Launch"], href: "/projects/tish-wonders" }
    ]
  },
  {
    name: "Real Estate",
    topTag: "Property Growth",
    bottomTag: "Leads & Sales",
    projects: [
      { title: "Agency 8", description: "Email Marketing Lead Generation", image: "/assets/projectsPagePics/agency.png", tags: ["Lead Generation"], href: "/projects/agency-8" },
      { title: "Fabri Elite", description: "Luxury Agency in UAE", image: "/assets/projectsPagePics/fabri.jpg", tags: ["Agency Opening"], href: "/projects/fabri-elite" },
      { title: "St. George Estate", description: "Content That Makes An Impact", image: "/assets/projectsPagePics/st.png", tags: ["Content Creation"], href: "/projects/st-georges" }
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
    <section className="relative z-10 px-4 min-[375px]:px-6 pb-[4px] sm:pb-[80px] -mt-20 sm:mt-0 text-white overflow-hidden">
      <div className="relative mx-auto max-w-[800px] text-center">

        {/* Eyebrow pill — drops down */}
        {/* <FadeDown delay={0.1}> */}
        <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
          <div className="h-1.5 w-1.5 rounded-full bg-[#ff5500]"></div>
          <p className="text-[10px] font-bold uppercase tracking-[3px] text-white">
            DIGITAL TRANSFORMATION
          </p>
        </div>
        {/* </FadeDown> */}

        {/* Main heading — rises up */}
        <FadeUp delay={0.2}>
          <h2 className="mb-6 sm:mb-10 font-medium text-[32px] leading-[0.95] tracking-[-6%] sm:text-[56px]">
            we are your{" "}
            <span className="font-[var(--font-cormorant)] text-[40px] sm:text-[72px] text-[1.1em] font-light timesFontFamily italic">
              360&deg;
            </span>
            <br />
            <span className="font-[var(--font-cormorant)] text-[40px] sm:text-[72px] tracking-[-6%] font-normal timesFontFamily italic">
              marketing agency
            </span>
          </h2>
        </FadeUp>

        {/* Body copy — slides in from right */}
        <FadeRight delay={0.3}>
          <div className="mx-auto max-w-[640px] space-y-6 sm:space-y-8 text-[13px] min-[375px]:text-[14px] sm:text-[16px] leading-[1.6] sm:leading-[1.7] tracking-[0%] text-white">
            <p>
              Calling ourselves a data driven, problem solving, people connecting, digitally obsessed, talent powered digital marketing agency felt a little long winded… so we call ourselves USS.
            </p>
            {/* <p>
              We bring all digital platforms to one connected system designed to scale.
            </p> */}
          </div>
        </FadeRight>

        {/* CTA buttons — rise up last */}
        <FadeUp delay={0.4}>
          <div className="mt-6 sm:mt-8 max-w-[600px] mx-auto flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="flex h-[40px] w-max sm:w-auto px-8 sm:px-10 items-center justify-center rounded-full bg-[#ff5500] text-[12px] sm:text-[13px] font-bold text-white transition-colors uppercase hover:bg-[#ff6b1f]">
              Book a Consultation
            </Link>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function ProjectsPage() {
  return (
    <main className="bg-black overflow-hidden">
      <Header />

      {/* Hero section */}
      <section className="bg-black px-4 min-[375px]:px-6 pb-[40px] min-[375px]:pb-[60px] pt-[44px] sm:pt-[112px] text-center text-white sm:pb-[90px]">
        <div className="mx-auto max-w-[1150px] ">

          {/* Eyebrow — drops down */}
          <FadeDown delay={0.1}>
            <p className="font-[var(--font-be-vietnam)] text-[11px] sm:text-[13px] font-medium uppercase leading-none tracking-[2px] sm:tracking-[3px] text-white flex items-center justify-center">
              OUR WORK
            </p>
          </FadeDown>

          {/* Main heading — rises up */}
          <FadeUp delay={0.2}>
            <h1 className="mt-[12px] sm:mt-[20px] font-[var(--font-be-vietnam)] text-[32px] font-bold lowercase leading-[1] tracking-[-0.9px] text-white sm:text-[56px] sm:tracking-[-0.9px]">
              projects that make
              <br className="block sm:hidden" /> an{" "}
              <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] font-extralight timesFontFamily italic tracking-[-0.9px] text-[#ff5500]">
                impact
              </span>
            </h1>
          </FadeUp>

          {/* Subheading — slides in from right */}
          <FadeRight delay={0.3}>
            <p className="mt-[16px] max-w-[800px] mx-auto sm:mt-[30px] font-[var(--font-be-vietnam)] text-[12px] font-normal leading-[24px] text-[#F5F5F5] sm:text-[16.5px]">
              Explore our work across the UK, US and Middle East
            </p>
          </FadeRight>

        </div>
      </section>

      {/* Categories scroll rows */}
      <section className="bg-black pb-[130px] pt-[20px] text-white">
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
                className="sticky left-0 z-10 shrink-0 w-[150px] min-[375px]:w-[160px] sm:w-[270px] aspect-[4/5] rounded-[12px] sm:rounded-[16px] bg-[#0E0E0E] border border-white/5 relative p-4 sm:p-6 flex flex-col justify-between items-start self-start"
              >
                {/* Subtle top-left glow accent */}
                <div className="pointer-events-none absolute -top-10 -left-10 h-[100px] sm:h-[180px] w-[100px] sm:w-[180px] rounded-full bg-[#ff5500] opacity-[0.06] blur-[60px]" />

                <div className="self-end bg-white/5 backdrop-blur-md border border-white/10 text-white/80 text-[8px] min-[375px]:text-[9px] sm:text-[10px] font-medium px-2 min-[375px]:px-3 py-1 sm:py-1.5 rounded-full font-[var(--font-inter)] tracking-[-0.2px] w-fit">
                  {category.topTag}
                </div>

                <div className="flex flex-col items-start text-left w-full">
                  <h2 className="text-white text-[18px] min-[375px]:text-[20px] sm:text-[32px] font-normal font-[var(--font-be-vietnam)] leading-[1.1] tracking-[-0.5px] break-words">
                    {category.name}
                  </h2>
                  <div className="mt-2 sm:mt-4 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 min-[375px]:px-4 min-[375px]:py-2 text-white/70 text-[8px] min-[375px]:text-[10px] font-medium font-[var(--font-inter)] tracking-[-0.2px] hover:bg-white/10 transition-colors cursor-pointer w-fit">
                    {category.bottomTag}
                  </div>
                </div>
              </motion.div>

              {/* Scrollable project cards — each card staggers in */}
              <div className="relative flex-1 min-w-0">
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
                        className="relative w-[150px] min-[375px]:w-[160px] sm:w-[270px] aspect-[4/5] rounded-[12px] sm:rounded-[16px] overflow-hidden group block"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(min-width: 640px) 320px, 260px"
                          className={`object-cover transition-transform duration-700 group-hover:scale-105 ${(project as any).imageClass || ""
                            }`}
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-black/10 transition-opacity duration-500 group-hover:opacity-90" />

                        {/* Badges Container */}
                        <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-5 sm:left-5 sm:right-5 flex flex-row justify-between items-start gap-1 z-10 pointer-events-none">
                          {/* See More badge */}
                          <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[7.5px] min-[375px]:text-[8.5px] sm:text-[10px] px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-full flex items-center justify-center font-[var(--font-inter)] transition-all duration-300 group-hover:bg-white/25 group-hover:scale-105 pointer-events-auto shrink-0">
                            <span className="font-medium">See More &gt;</span>
                          </div>

                          {/* Tags */}
                          <div className="hidden sm:flex flex-wrap gap-1 sm:gap-2 justify-end">
                            {project.tags.map(tag => (
                              <span
                                key={tag}
                                className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[7.5px] min-[375px]:text-[8.5px] sm:text-[10px] font-medium px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-full font-[var(--font-inter)] tracking-[-0.2px]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Title & description — slides up on hover */}
                        <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-0 pointer-events-none translate-y-1 group-hover:translate-y-0 transition-transform duration-400">
                          <h3 className="text-white text-[15px] sm:text-[22px] font-medium font-[var(--font-be-vietnam)] tracking-[-0.44px] leading-tight">
                            {project.title}
                          </h3>
                          <p className="text-white/50 text-[11px] sm:text-[16px] font-[var(--font-inter)] font-light line-clamp-2 leading-[1.4] whitespace-nowrap tracking-[-0.44px] mt-1 sm:mt-0">
                            {project.description}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </DraggableContainer>

                {/* Arrow indicator for 3+ projects on mobile */}
                {category.projects.length >= 3 && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      const container = e.currentTarget.previousElementSibling;
                      if (container) {
                        container.scrollBy({ left: 160, behavior: 'smooth' });
                      }
                    }}
                    className="absolute right-0 top-0 bottom-4 w-16 sm:hidden bg-gradient-to-l from-[#000000] via-black/80 to-transparent flex items-center justify-end pr-2 z-10 cursor-pointer pointer-events-auto"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80 animate-pulse hover:opacity-100 transition-opacity">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                )}
              </div>

            </motion.div>
          ))}
        </div>
      </section>

      <ProjectsCta />
      <Footer />
    </main>
  );
}