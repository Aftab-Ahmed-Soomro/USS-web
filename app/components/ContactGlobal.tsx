"use client";

import FadeLeft from "./FadeLeft";
import FadeDown from "./FadeDown";
import FadeUp from "./FadeUp";
import FadeRight from "./FadeRight";

const regions = [
  {
    name: "Atlanta",
    description: (
      <>
        Office 1175, Peachtree St NE,<br />
        Atlanta, 30361,<br />
        United States
      </>
    ),
    image: "/assets/Downtown Atlanta.webp",
    alt: "United States skyline at sunset",
  },
  {
    name: "London",
    description: (
      <>
        Office 4, Green Dragon House,<br />
        London, CR0 1FS,<br />
        United Kingdom
      </>
    ),
    image: "/assets/UK.webp",
    alt: "United Kingdom skyline at night",
  },
  {
    name: "Dubai",
    description: (
      <>
        Flowork Offices<br />
        Business Park 4, Dubai Hills<br />
        United Arab Emirates
      </>
    ),
    image: "/assets/Dubai.jpeg",
    alt: "UAE skyline at dusk",
  },
];

interface WeAreGlobalProps {
  images?: {
    Atlanta?: string;
    London?: string;
    Dubai?: string;
  };
}

export default function WeAreGlobal({ images }: WeAreGlobalProps = {}) {
  const displayRegions = regions.map((region) => ({
    ...region,
    image: images?.[region.name as keyof typeof images] || region.image,
  }));

  return (
    <>
      <style>{`
        .wag-section {
          background-color: #000;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 50px 0px;
          box-sizing: border-box;
          font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
        }

        .wag-heading {
          font-size: clamp(2.6rem, 4.5vw, 3.8rem);
          font-weight: 500;
          color: #ffffff;
          margin: 0 0 20px 0;
          line-height: 1.1;
          letter-spacing: -3px;
          text-align: center;
        }

        .wag-heading em {
          color: #ff5a14;
          font-style: italic;
          font-family: 'Georgia', 'Times New Roman', serif;
          font-weight: 400;
        }

        .wag-subtitle {
          font-size: clamp(0.875rem, 1.4vw, 1rem);
          text-align: center;
          max-width: 450px;
          line-height: 29.25px;
          margin: 0 0 72px 0;
          font-weight: 400;
        }

        .wag-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1150px;
          width: 100%;
        }

        .wag-card {
          background-color: #000;
          border-radius: 16px;
          border: 1px solid #252525;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color 0.2s ease;
        }

        .wag-card:hover {
          border-color: #363636;
        }

        .wag-image-wrapper {
          margin: 10px 10px 0 10px;
          border-radius: 10px;
          overflow: hidden;
          aspect-ratio: 4 / 3;
          flex-shrink: 0;
        }

        .wag-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 17%;
          display: block;
          border-radius: 10px;
        }

        .wag-card-body {
          padding: 22px 22px 0px 22px;
        }

        .wag-card-title {
          color: #ffffff;
          font-size: clamp(1.5rem, 1.4vw, 1.7rem);
          font-weight: 600;
          margin: 0 0 10px 0;
          letter-spacing: -0.6px;
          line-height: 32px;
        }
        .wag-card-desc-color {
          color: #fff;
          margin: 0;
          font-size: clamp(0.8125rem, 1.05vw, 0.9375rem);
          font-weight: 400;
          line-height: 22.75px;
        }

        .wag-card-desc {
          font-size: clamp(0.8125rem, 1.05vw, 0.9375rem);
          line-height: 22.75px;
          margin: 0;
          font-weight: 400;
        }

        @media (max-width: 860px) {
          .wag-grid {
            grid-template-columns: 1fr;
            max-width: 460px;
          }
          .wag-section {
            padding: 64px 24px;
          }
        }

        @media (max-width: 480px) {
          .wag-section {
            padding: 48px 16px;
          }
        }
      `}</style>

      <section className="wag-section">

        {/* Heading — drops down */}
        <FadeDown delay={0.1}>
          <h1 className="wag-heading">
            we are <em>global</em>
          </h1>
        </FadeDown>

        {/* Subtitle — rises up after heading */}
        <FadeUp delay={0.2}>
          <p className="wag-subtitle text-white/95">
            Working with businesses across the<br /> United States, United Kingdom and United Arab Emirates.
          </p>
        </FadeUp>

        {/* Cards grid — each card uses a different direction, left→up→right */}
        <div className="wag-grid">

          {/* Card 3 (UAE) — slides in from right */}
          <FadeRight delay={0.3}>
            <div className="wag-card">
              <div className="wag-image-wrapper">
                <img src={displayRegions[2].image} alt={displayRegions[2].alt} />
              </div>
              <div className="wag-card-body">
                <h2 className="wag-card-title">{displayRegions[2].name}</h2>
                <p className="wag-card-desc max-w-[240px] text-white/95">{displayRegions[2].description}</p> <br />
                {/* <div className="wag-card-desc-color mt-4">
                  {regions[2].address}
                </div> */}
              </div>
            </div>
          </FadeRight>



          {/* Card 2 (UK) — rises up from below, center anchor */}
          <FadeUp delay={0.4}>
            <div className="wag-card">
              <div className="wag-image-wrapper">
                <img src={displayRegions[1].image} alt={displayRegions[1].alt} className="!object-[80%_0%]" />
              </div>
              <div className="wag-card-body">
                <h2 className="wag-card-title">{displayRegions[1].name}</h2>
                <p className="wag-card-desc max-w-[240px] text-white/95">{displayRegions[1].description}</p> <br />
                {/* <div className="wag-card-desc-color mt-4">
                  {regions[1].address}
                </div> */}
              </div>
            </div>
          </FadeUp>

          {/* Card 1 (US) — slides in from left */}
          <FadeLeft delay={0.3}>
            <div className="wag-card">
              <div className="wag-image-wrapper">
                <img src={displayRegions[0].image} alt={displayRegions[0].alt} />
              </div>
              <div className="wag-card-body">
                <h2 className="wag-card-title">{displayRegions[0].name}</h2>
                <p className="wag-card-desc max-w-[240px] text-white/95">{displayRegions[0].description}</p> <br />
                {/* <div className="wag-card-desc-color mt-4">
                  {regions[0].address}
                </div> */}
              </div>
            </div>
          </FadeLeft>

        </div>
      </section>
    </>
  );
}