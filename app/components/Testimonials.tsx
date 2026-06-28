"use client";
import { useRef } from "react";
import Image from "next/image";
import FadeLeft from "./FadeLeft";
import FadeDown from "./FadeDown";
import FadeUp from "./FadeUp";
import FadeRight from "./FadeRight";

const testimonials = [
  {
    company: "Yula Lounge",
    author: "Manhal Naser - Founder",
    quote: "USS played a key role in our transition from Yalseh to Yula Lounge, helping us bring our new brand vision to life across every touchpoint. Their attention to detail and strategic support made the entire rebrand process seamless.",
    image: "/assets/Testimonels/Manhal Naser - Yula.jpg",
  },
  {
    company: "Cinnamood",
    author: "Sabrina Gora - Brand Director",
    quote: "Launching in the UAE was an exciting milestone for our brand. The support we received helped us build strong local awareness while maintaining the look, feel, and values that define Cinnamood.",
    image: "/assets/Testimonels/Sabrina Gora - Cinnamood.jpeg",
  },
  {
    company: "Agency 8",
    author: "Darrell Elliot - CEO",
    quote: "USS delivered a custom website and marketing infrastructure that elevated our digital presence and improved how we engage with clients. Through email and WhatsApp marketing, we were able to create more meaningful touchpoints with prospects and build a stronger lead nurturing process.",
    image: "/assets/Testimonels/Darrell Elliot - Agency 8.webp",
  },
  {
    company: "Women Who Thrive",
    author: "Sue & Achasah - Co-Founders",
    quote: "Our community has grown significantly over the last 15 months, both in membership and engagement. The combination of content, email marketing and social media managment has helped us reach more women and strengthen the value of our network.",
    image: "/assets/Testimonels/Sue & Achasah - Women Who Women.jpg",
  },
  {
    company: "Disturbed Innovations Group",
    author: "Co-Founders",
    quote: "We knew it was time for our brand to evolve, but translating that vision into reality was the challenge. The rebrand helped us create a more modern identity that better represents our business and connects with our audience.",
    image: "/assets/Testimonels/Disturbed Innovations Group - Co-Founders.png",
  },
  {
    company: "Flowork",
    author: "Abir Moussa - CEO",
    quote: "From launch strategy to content and digital marketing, USS helped us successfully introduce flowork to the Dubai market. Their team played a crucial role in building awareness and generating momentum ahead of opening.",
    image: "/assets/Testimonels/Abir Moussa - Flowork.webp",
  },
  {
    company: "Residency Advanced",
    author: "Humphrey Ddagirira - Founder",
    quote: "The paid search strategy delivered a consistent flow of high-quality enquiries, generating an average of 125 qualified leads per month. The results exceeded our expectations and helped us connect with the right audience at scale.",
    image: "/assets/Testimonels/Humphrey Ddagirira - Residency Advanced.jpeg",
  },
  {
    company: "Afro Maya",
    author: "Bemnet Maru - Founder",
    quote: "Building a fashion brand requires more than great products, it requires a strong presence. The combination of strategy, content, and creative direction helped us reach new audiences and strengthen our brand online.",
    image: "/assets/Testimonels/Bemnet Maru - Afro Maya.jpg",
  },
  {
    company: "SupperClub",
    author: "Mehreen Omar - Co-Founder",
    quote: "Growing a premium membership community requires the right mix of brand, content, and communication. The strategic approach helped strengthen our presence in the market and support continued membership growth across the region.",
    image: "/assets/Testimonels/Mehreen - SupperClub.jpeg",
  },
];

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "left" ? "Previous testimonial" : "Next testimonial"}
      className="grid cursor-pointer size-10 place-items-center rounded-full bg-white/10 border border-white/20 text-white transition hover:bg-[#ff5500] hover:border-[#ff5500] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5500]"
    >
      <span className="text-[20px] leading-none">
        {direction === "left" ? "\u2190" : "\u2192"}
      </span>
    </button>
  );
}

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0]?.clientWidth || 0;
      const gap = 24;
      const scrollAmount = direction === "left" ? -(cardWidth + gap) : (cardWidth + gap);
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="relative z-10 bg-[#0a0a0a] py-[58px] text-white lg:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1150px] flex-col items-center px-6">

        {/* Eyebrow pill — drops down */}
        <FadeDown delay={0.1}>
          <div className="flex h-[15px] items-center gap-2">
            <span className="size-1.5 rounded-full bg-[#ff5500]" />
            <p className="font-[var(--font-be-vietnam)] text-[8px] sm:text-[10px] font-bold uppercase leading-none tracking-[3px] text-white">
              What Our Clients Say
            </p>
          </div>
        </FadeDown>

        {/* Section heading — rises up after eyebrow */}
        <FadeUp delay={0.2}>
          <h2 className="mt-[25px] w-full text-center font-[var(--font-be-vietnam)] text-[34px] font-medium leading-tight tracking-[0%] sm:text-[48px] mb-12">
            what clients say about us
          </h2>
        </FadeUp>

        {/* Full slider block — fades up as one unit */}
        {/* <FadeUp delay={0.3}> */}
          <div className="w-full relative group">

            {/* Left Arrow — slides in from left */}
            {/* <FadeLeft delay={0.45}> */}
              <div className="absolute -left-5 top-[calc(50%-16px)] -translate-y-1/2 z-10 opacity-100 transition-opacity cursor-pointer duration-300">
                <ArrowButton direction="left" onClick={() => scroll("left")} />
              </div>
            {/* </FadeLeft> */}

            {/* Scrollable cards row */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333333%-16px)] shrink-0 h-[420px] sm:h-[480px] snap-start overflow-hidden group/card bg-[#111]"
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.company}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover/card:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-6 sm:p-8 transition-colors duration-500 group-hover/card:from-black/90 group-hover/card:via-black/50">
                    <h3 className="text-white text-xl sm:text-2xl font-bold font-[var(--font-be-vietnam)]">
                      {testimonial.company}
                    </h3>
                    <p className="text-[#fff] text-[11px] sm:text-xs mt-1 uppercase tracking-wider font-[var(--font-be-vietnam)] font-medium">
                      {testimonial.author}
                    </p>
                    <div className="grid grid-rows-[0fr] group-hover/card:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                      <div className="overflow-hidden opacity-0 group-hover/card:opacity-100 transition-all duration-500 translate-y-4 group-hover/card:translate-y-0">
                        <p className="text-white/97 text-xs sm:text-sm pt-3 sm:pt-4 leading-[1.6] font-[var(--font-be-vietnam)]">
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow — slides in from right */}
            {/* <FadeRight delay={0.45}> */}
              <div className="absolute -right-5 top-[calc(50%-16px)] -translate-y-1/2 z-10 opacity-100 cursor-pointer transition-opacity duration-300">
                <ArrowButton direction="right" onClick={() => scroll("right")} />
              </div>
            {/* </FadeRight> */}

          </div>
        {/* </FadeUp> */}

      </div>
    </section>
  );
}