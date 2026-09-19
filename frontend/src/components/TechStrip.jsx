
import React from "react";
import { techStack } from "../data/mockData";
import { Cpu } from "lucide-react";

export default function TechStrip() {
  // Duplicate the technologies for a seamless infinite loop
  const scrollingTechStack = [...techStack, ...techStack];

  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#080d1e] py-10 sm:py-12">
      {/* Subtle background glow */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/[0.04] blur-[100px]" />

      <div className="relative mx-auto max-w-[1600px]">
        {/* Section Heading */}

        <div className="mb-8 flex items-center justify-center gap-2.5 px-4">
          <Cpu className="h-4 w-4 text-cyan-400" />

          <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-slate-400 sm:text-xs">
            Technologies We Work With
          </span>
        </div>

        {/* Moving Horizontal Track */}

        <div
          className="tech-marquee relative flex w-full overflow-hidden"
          aria-label="Technologies we work with"
        >
          {/* Left gradient fade */}

          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#080d1e] to-transparent sm:w-28" />

          {/* Right gradient fade */}

          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#080d1e] to-transparent sm:w-28" />

          {/* Infinite Scrolling Track */}

          <div className="tech-track flex w-max items-center gap-3 pr-3 sm:gap-4">
            {scrollingTechStack.map((tech, idx) => (
              <div
                key={`${tech.name}-${idx}`}
                aria-hidden={idx >= techStack.length}
                className="tech-badge group flex shrink-0 items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.035] px-5 py-3 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.07] sm:px-6 sm:py-3.5"
              >
                {/* Technology Icon */}

                <span className="flex h-7 w-7 items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110">
                  {tech.icon}
                </span>

                {/* Technology Name */}

                <span className="whitespace-nowrap text-xs font-bold tracking-wide text-slate-200 transition-colors duration-300 group-hover:text-white sm:text-sm">
                  {tech.name}
                </span>

                {/* Glowing Dot */}

                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-700 transition-all duration-300 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Styles */}

      <style>{`
        .tech-track {
          animation: techMarquee 35s linear infinite;
          will-change: transform;
        }

        .tech-marquee:hover .tech-track {
          animation-play-state: paused;
        }

        @keyframes techMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .tech-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}