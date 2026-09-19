import React from "react";
import {
  Users,
  ShieldCheck,
  Clock,
  Headphones,
  Sparkles,
} from "lucide-react";

export default function WhyBinaryBrains() {
  const features = [
    {
      title: "Client-Focused",
      desc: "Solutions designed around real requirements, active communication, and measurable outcomes.",
      icon: Users,
      ring: "from-blue-500 to-cyan-400",
      iconColor: "text-blue-200",
      border: "hover:border-blue-400/70",
      glow: "group-hover:shadow-blue-500/20",
      line: "from-blue-400 to-cyan-400",
    },
    {
      title: "Quality First",
      desc: "Clean, scalable, maintainable development following industry best practices and clean code standards.",
      icon: ShieldCheck,
      ring: "from-purple-500 to-indigo-400",
      iconColor: "text-purple-200",
      border: "hover:border-purple-400/70",
      glow: "group-hover:shadow-purple-500/20",
      line: "from-purple-400 to-indigo-400",
    },
    {
      title: "On-Time Delivery",
      desc: "Clear planning, milestone tracking, and transparent agile execution to hit your launch deadlines.",
      icon: Clock,
      ring: "from-violet-500 to-fuchsia-400",
      iconColor: "text-violet-200",
      border: "hover:border-violet-400/70",
      glow: "group-hover:shadow-violet-500/20",
      line: "from-violet-400 to-fuchsia-400",
    },
    {
      title: "Long-Term Support",
      desc: "Dedicated support, version upgrades, and ongoing maintenance long after deployment.",
      icon: Headphones,
      ring: "from-sky-500 to-blue-400",
      iconColor: "text-sky-200",
      border: "hover:border-sky-400/70",
      glow: "group-hover:shadow-sky-500/20",
      line: "from-sky-400 to-blue-400",
    },
  ];

  return (
    <section
      id="why-us"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#030817] py-20 sm:py-24"
    >
      {/* ========================================
          BACKGROUND DECORATION
      ======================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blue glow - left side */}
        <div className="absolute -left-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-blue-700/15 blur-[140px]" />

        {/* Purple glow - right side */}
        <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-purple-700/15 blur-[140px]" />

        {/* Center indigo glow */}
        <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-700/[0.08] blur-[130px]" />

        {/* Faint orbital ring */}
        <div className="absolute left-1/2 top-[-260px] h-[560px] w-[900px] -translate-x-1/2 rounded-full border border-purple-500/[0.10]" />

        {/* Small decorative sparkles */}
        <Sparkles className="absolute left-[10%] top-[18%] h-4 w-4 text-blue-400/25" />
        <Sparkles className="absolute right-[9%] bottom-[20%] h-5 w-5 text-purple-400/25" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ========================================
            SECTION HEADER
        ======================================== */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-gradient-to-r from-transparent to-blue-400 shadow-[0_0_14px_rgba(56,189,248,0.7)]" />
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-sky-300 sm:text-xs">
              <Sparkles className="h-3.5 w-3.5" />
              Proven Engineering Excellence
            </span>
            <span className="h-[2px] w-10 rounded-full bg-gradient-to-l from-transparent to-purple-400 shadow-[0_0_14px_rgba(168,85,247,0.7)]" />
          </div>

          <h2 className="text-3xl font-black leading-[1.15] tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              BinaryBrains?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            We combine technology, creativity, and practical thinking to turn
            ideas into reliable digital solutions.
          </p>
        </div>

        {/* ========================================
            FEATURE GRID
        ======================================== */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, idx) => {
            const IconComponent = item.icon;

            return (
              <div
                key={idx}
                className={`group relative flex min-h-[240px] flex-col overflow-hidden rounded-[22px] border border-slate-800/90 bg-gradient-to-br from-white/[0.055] to-white/[0.015] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${item.border} ${item.glow}`}
              >
                {/* Inner corner glow */}
                <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-white/[0.04] blur-3xl transition-all duration-500 group-hover:bg-white/10" />

                {/* Top border highlight */}
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Icon with gradient ring */}
                <div
                  className={`relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.ring} p-[1.5px] shadow-[0_0_25px_rgba(139,92,246,0.15)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.35)]`}
                >
                  <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-[#060a17] transition-colors duration-500 group-hover:bg-[#060a17]/60">
                    <IconComponent
                      className={`h-6 w-6 ${item.iconColor} transition-transform duration-500 group-hover:scale-110 group-hover:text-white`}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold tracking-[-0.01em] text-white transition-colors duration-300 group-hover:text-sky-200">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-sm leading-6 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                  {item.desc}
                </p>

                {/* Bottom accent line */}
                <div className="mt-auto pt-6">
                  <div className="h-[2px] w-8 rounded-full bg-gradient-to-r from-slate-700 to-slate-700/0">
                    <div
                      className={`h-[2px] w-8 bg-gradient-to-r ${item.line} shadow-[0_0_12px_rgba(96,165,250,0.5)] transition-all duration-500 group-hover:w-16`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}