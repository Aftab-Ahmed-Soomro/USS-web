import { Link } from "lucide-react";
import { Brands } from "../components/Brands";
import { CampaignDevelopment } from "../components/CampaignDevelopment";
import { Button } from "../components/common/Button";
import { LightConsultationForm } from "../components/ConsultationForm";
import { Header } from "../components/Header";
import { Numbers } from "../components/Numbers";
import Image from "next/image";
import { Testimonials } from "../components/Testimonials";
import { Team } from "../components/Team";
import { GoodCompanyMap } from "../components/GoodCompanyMap";
import { Footer } from "../components/Footer";
import { OurApproach } from "../components/OurApproach";

const relatedProjects = [
    {
        name: "Cinnamood",
        year: "2024",
        copy: "Launching a German bakery franchise into the UAE market.",
        image: "/assets/company/cinamood-card.jpg",
        tags: ["Web design & development", "Branding", "F&B"],
    },
    {
        name: "Yula Lounge",
        year: "2024",
        copy: "Transforming Yalseh into Yula – a modern Dubai beach club.",
        image: "/assets/company/yula-card.jpg",
        tags: ["Web design & development", "Hospitality"],
    },
];

function Hero() {
    return (
        <main className="relative z-10 mx-auto grid max-w-[1150px] flex-1 items-center gap-12 px-6 pb-[68px] pt-[58px]  md:grid-cols-[minmax(0,1fr)_431px] md:gap-14  lg:pb-[74px] lg:pt-[79px] xl:grid-cols-[575px_431px] xl:gap-[132px] bg-white">
            <section className="max-w-[560px] text-black">

                <h1 className="max-w-[560px] text-[43px] font-bold leading-[1.03] tracking-[-1.7px] sm:text-[54px] lg:text-[58px] text-black">
                    we don’t just {" "}
                    <span className="font-serif text-[1.24em] font-extralight timesFontFamily italic leading-[0.7] tracking-[-1px]">
                        market
                    </span>
                </h1>
                <h1 className="max-w-[560px] text-[43px] font-bold leading-[1.03] tracking-[-1.7px] sm:text-[54px] lg:text-[58px] text-black">
                    we scale{" "}
                    <span className="font-serif text-[1.24em] font-extralight timesFontFamily italic leading-[0.7] tracking-[-1px]">
                        brands
                    </span>
                </h1>

                <p className="mt-[43px] max-w-[530px] text-[16px] font-normal leading-[1.62] tracking-[-0.2px] text-black/90">
                    At USS we combine strategy, creative and performance
                    marketing into one connected system designed to scale
                    your business.

                </p>

                <Button className="mt-[34px] h-[43px] px-[33px] text-[12px]">Book a Consultation</Button>
            </section>

            <div className="flex justify-center md:justify-end">
                <LightConsultationForm />
            </div>
        </main>
    );
}

function RelatedProjects() {
    return (
        <section className="bg-[#080808] px-6 py-[56px] text-white">
            <div className="mx-auto max-w-[1150px]">
                {/* Header */}
                <div className="flex items-center justify-between gap-6">
                    <h2 className="font-[var(--font-be-vietnam)] text-[28px] sm:text-[32px] md:text-[38px] font-medium lowercase leading-none tracking-[-0.7px]">
                        related{" "}
                        <span className="font-[var(--font-cormorant)] text-[1.18em] font-extralight timesFontFamily italic">
                            projects
                        </span>
                    </h2>

                    <Link
                        href="/projects"
                        className="hidden sm:inline-flex shrink-0 items-center gap-2 rounded-full border border-white/30 px-5 py-3 font-[var(--font-inter)] text-[12px] text-white/85 transition-colors hover:border-white/60 hover:text-white"
                    >
                        View all projects
                        <span aria-hidden="true">→</span>
                    </Link>
                </div>

                {/* Cards */}
                <div className="mt-[40px] grid gap-[24px] md:grid-cols-2">
                    {relatedProjects.map((project) => (
                        <article
                            key={project.name}
                            className="rounded-[20px] border border-white/15 p-[14px] transition-colors hover:border-white/30"
                        >
                            <div className="relative aspect-[420/260] w-full overflow-hidden rounded-[12px] bg-[#111]">
                                <Image
                                    src={project.image}
                                    alt={`${project.name} marketing strategy project`}
                                    fill
                                    sizes="(min-width: 768px) 45vw, calc(100vw - 48px)"
                                    className="object-cover"
                                />
                            </div>

                            <div className="px-[10px] pt-[24px] pb-[6px]">
                                {/* Title + year */}
                                <div className="flex items-baseline justify-between gap-3">
                                    <h3 className="font-[var(--font-be-vietnam)] text-[22px] font-medium leading-none">
                                        {project.name}
                                    </h3>
                                    <span className="shrink-0 font-[var(--font-inter)] text-[14px] text-white/50">
                                        {project.year}
                                    </span>
                                </div>

                                {/* Copy */}
                                <p className="mt-[14px] max-w-[400px] font-[var(--font-inter)] text-[14px] leading-[1.55] text-white/60">
                                    {project.copy}
                                </p>

                                {/* Tags */}
                                <div className="mt-[20px] flex flex-wrap gap-[10px]">
                                    {(project.tags ?? []).map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-white/25 px-[14px] py-[7px] font-[var(--font-inter)] text-[12px] text-white/75"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}

                    {/* Mobile-only view all link, shown below cards on small screens */}
                    <Link
                        href="/projects"
                        className="sm:hidden inline-flex w-fit items-center gap-2 rounded-full border border-white/30 px-5 py-3 font-[var(--font-inter)] text-[12px] text-white/85 transition-colors hover:border-white/60 hover:text-white"
                    >
                        View all projects
                        <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default function Current360() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-[#fff]">
            <Header />
            <Hero />
            <Brands />
            <Numbers />
            <OurApproach />
            <CampaignDevelopment />
            <RelatedProjects />
            <Testimonials />
            <Team />
            <GoodCompanyMap />
            <Footer />
        </div>
    )
}