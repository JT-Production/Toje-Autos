"use client";

import { useState } from "react";

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  accent: string;
}

const cards: ServiceCard[] = [
  {
    id: 1,
    title: "Expert Diagnostics",
    description:
      "State-of-the-art diagnostic tools to identify and resolve any issue with precision. Our certified technicians ensure your vehicle performs at its peak.",
    image:
      "https://res.cloudinary.com/dmvwjmy23/image/upload/v1773407180/TOJE%20AUTOS/e88806cbd605e46cf5f623e491091b00_wstoaf.jpg",
    accent: "#60a5fa",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="32" r="18" />
        <circle cx="32" cy="32" r="6" />
        <line x1="32" y1="8" x2="32" y2="14" />
        <line x1="32" y1="50" x2="32" y2="56" />
        <line x1="8" y1="32" x2="14" y2="32" />
        <line x1="50" y1="32" x2="56" y2="32" />
        <line x1="15" y1="15" x2="19" y2="19" />
        <line x1="45" y1="45" x2="49" y2="49" />
        <line x1="49" y1="15" x2="45" y2="19" />
        <line x1="19" y1="45" x2="15" y2="49" />
        <circle cx="46" cy="46" r="5" fill="white" fillOpacity="0.2" />
        <path d="M44 46 L46 48 L50 43" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Full Inspection",
    description:
      "Comprehensive multi-point inspection covering all critical systems. Drive with confidence knowing every component has been thoroughly evaluated.",
    image:
      "https://res.cloudinary.com/dmvwjmy23/image/upload/v1773407180/TOJE%20AUTOS/e7b3065df2dde5f93251192336aa12c9_ie6mv1.jpg",
    accent: "#a78bfa",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="12" y="28" width="40" height="18" rx="4" />
        <path d="M16 28 L20 18 L44 18 L48 28" />
        <circle cx="20" cy="46" r="6" />
        <circle cx="44" cy="46" r="6" />
        <line x1="26" y1="46" x2="38" y2="46" />
        <path d="M24 23 L28 23 M36 23 L40 23" />
        <path d="M20 34 L44 34" />
        <path d="M12 38 L8 38 M52 38 L56 38" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Tyre & Wheel Care",
    description:
      "Premium tyre services including balancing, alignment, and replacement. Maximize safety and extend tyre life with our specialized wheel care program.",
    image:
      "https://res.cloudinary.com/dmvwjmy23/image/upload/v1773407179/TOJE%20AUTOS/621c6144e6209c7cce62f1dca4d21177_ejv6x5.jpg",
    accent: "#34d399",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="32" r="22" />
        <circle cx="32" cy="32" r="10" />
        <line x1="32" y1="10" x2="32" y2="22" />
        <line x1="32" y1="42" x2="32" y2="54" />
        <line x1="10" y1="32" x2="22" y2="32" />
        <line x1="42" y1="32" x2="54" y2="32" />
        <line x1="17" y1="17" x2="25" y2="25" />
        <line x1="39" y1="39" x2="47" y2="47" />
        <line x1="47" y1="17" x2="39" y2="25" />
        <line x1="25" y1="39" x2="17" y2="47" />
        <circle cx="47" cy="20" r="4" fill="white" fillOpacity="0.15" />
        <path d="M45.5 20 L47 21.5 L49.5 18" />
      </svg>
    ),
  },
];

export default function ServiceCards() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="w-full  py-20 md:px-20 px-4">
      {/* Section Header */}
      <div className=" mx-auto mb-14 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-3 font-light">
          What We Offer
        </p>
        <h2
          className="text-4xl md:text-5xl font-light text-BLACK"
        //   style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", letterSpacing: "-0.02em" }}
        >
          Our Services
        </h2>
        <div className="mt-5 mx-auto w-12 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </div>

      {/* Cards — Horizontal Stacked Rows */}
      <div className=" mx-auto flex flex-col gap-5">
        {cards.map((card, i) => (
          <div
            key={card.id}
            onMouseEnter={() => setHovered(card.id)}
            onMouseLeave={() => setHovered(null)}
            className="relative rounded-2xl overflow-hidden cursor-pointer w-full"
            style={{
              height: "300px",
              transform: hovered === card.id ? "translateX(6px) scale(1.01)" : "translateX(0) scale(1)",
              transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease",
              boxShadow:
                hovered === card.id
                  ? `0 20px 50px rgba(0,0,0,0.6), 0 0 0 1px ${card.accent}44`
                  : "0 8px 30px rgba(0,0,0,0.4)",
            }}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${card.image}')`,
                transform: hovered === card.id ? "scale(1.06)" : "scale(1)",
                transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
              }}
            />

            {/* Dark overlay — gradient left to right */}
            <div
              className="absolute inset-0"
              style={{
                background: hovered === card.id
                  ? `linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.2) 100%)`
                  : `linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 100%)`,
                transition: "background 0.4s ease",
              }}
            />

            {/* Content — horizontal layout */}
            <div className="absolute inset-0 flex items-center px-8 gap-8">
              {/* Icon */}
              <div
                className="w-14 h-14 flex-shrink-0"
                style={{
                  filter: `drop-shadow(0 0 14px ${card.accent}99)`,
                  transform: hovered === card.id ? "scale(1.15)" : "scale(1)",
                  transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                {card.icon}
              </div>

              {/* Divider */}
              <div
                className="h-14 w-px flex-shrink-0"
                style={{
                  background: `linear-gradient(to bottom, transparent, ${card.accent}88, transparent)`,
                  opacity: hovered === card.id ? 1 : 0.4,
                  transition: "opacity 0.4s ease",
                }}
              />

              {/* Text */}
              <div className="flex flex-col gap-2">
                <p
                  className="text-white text-base font-medium tracking-widest uppercase"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: "0.14em",
                    color: hovered === card.id ? card.accent : "white",
                    transition: "color 0.3s ease",
                  }}
                >
                  {card.title}
                </p>
                <p
                  className="text-white/70 text-sm leading-relaxed max-w-xl"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {card.description}
                </p>
              </div>

              {/* Arrow indicator */}
              <div
                className="ml-auto flex-shrink-0"
                style={{
                  opacity: hovered === card.id ? 1 : 0,
                  transform: hovered === card.id ? "translateX(0)" : "translateX(-10px)",
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke={card.accent} strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Accent line on left edge */}
            <div
              className="absolute left-0 top-0 w-[3px] rounded-full"
              style={{
                background: `linear-gradient(to bottom, transparent, ${card.accent}, transparent)`,
                height: hovered === card.id ? "100%" : "0%",
                transition: "height 0.5s cubic-bezier(0.16,1,0.3,1)",
              }}
            />
          </div>
        ))}
      </div>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>
    </section>
  );
}