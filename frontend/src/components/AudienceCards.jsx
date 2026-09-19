
import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  BriefcaseBusiness,
  Code2,
  Rocket,
  Smartphone,
  Globe,
  BarChart3,
} from "lucide-react";

import studentImage from "../assets/student-3d.png";
import businessImage from "../assets/business-3d.png";

/* ----------------------------------------
   SERVICE DATA
----------------------------------------- */

const studentServices = [
  {
    icon: Code2,
    title: "Project Development",
  },
  {
    icon: BriefcaseBusiness,
    title: "Portfolio Building",
  },
  {
    icon: Rocket,
    title: "Career Support",
  },
];

const businessServices = [
  {
    icon: Globe,
    title: "Website Development",
  },
  {
    icon: Smartphone,
    title: "Application Development",
  },
  {
    icon: BarChart3,
    title: "Business Solutions",
  },
];

/* ----------------------------------------
   AUDIENCE CARD
----------------------------------------- */

function AudienceCard({
  type,
  title,
  highlight,
  description,
  image,
  services,
  buttonText,
  onClick,
}) {
  const isStudent = type === "student";

  const colors = isStudent
    ? {
        border: "border-violet-400/25",
        background:
          "bg-gradient-to-br from-[#1a1235] via-[#100d24] to-[#080c1c]",
        glow: "bg-violet-500/15",
        accent: "text-violet-300",
        badge:
          "border-violet-400/30 bg-violet-500/10 text-violet-300",
        button:
          "bg-gradient-to-r from-[#9333ea] to-[#6366f1]",
        buttonShadow: "shadow-violet-500/20",
        iconBg: "bg-violet-500/10",
        imageBorder: "border-violet-400/20",
      }
    : {
        border: "border-emerald-400/25",
        background:
          "bg-gradient-to-br from-[#092c2a] via-[#071e24] to-[#06121f]",
        glow: "bg-emerald-500/15",
        accent: "text-emerald-300",
        badge:
          "border-emerald-400/30 bg-emerald-500/10 text-emerald-300",
        button:
          "bg-gradient-to-r from-[#059669] to-[#0891b2]",
        buttonShadow: "shadow-emerald-500/20",
        iconBg: "bg-emerald-500/10",
        imageBorder: "border-emerald-400/20",
      };

  return (
    <article
      className={`group relative isolate overflow-hidden rounded-[24px] border ${colors.border} ${colors.background} p-5 shadow-[0_15px_45px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_22px_60px_rgba(0,0,0,0.3)] sm:p-6`}
    >
      {/* AMBIENT BACKGROUND GLOW */}

      <div
        className={`pointer-events-none absolute -right-24 -top-24 -z-10 h-64 w-64 rounded-full ${colors.glow} blur-[90px]`}
      />

      <div
        className={`pointer-events-none absolute -bottom-24 -left-20 -z-10 h-56 w-56 rounded-full ${colors.glow} opacity-40 blur-[90px]`}
      />

      {/* TOP BADGE */}

      <div className="relative z-10 flex items-center justify-between">
        <div
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.15em] ${colors.badge}`}
        >
          {isStudent ? (
            <GraduationCap className="h-3.5 w-3.5" />
          ) : (
            <BriefcaseBusiness className="h-3.5 w-3.5" />
          )}

          {isStudent ? "For Students" : "For Businesses"}
        </div>

        <span
          className={`h-1.5 w-1.5 rounded-full ${
            isStudent ? "bg-violet-400" : "bg-emerald-400"
          } shadow-[0_0_12px_currentColor]`}
        />
      </div>

      {/* COMPACT CONTENT LAYOUT */}

      <div className="relative z-10 mt-5 grid grid-cols-1 items-center gap-4 sm:grid-cols-[1.15fr_0.85fr] sm:gap-2">
        {/* LEFT: TEXT CONTENT */}

        <div className="flex min-w-0 flex-col">
          <h2 className="max-w-[320px] text-[24px] font-black leading-[1.12] tracking-[-0.045em] text-white sm:text-[26px]">
            {title}
            <br />

            <span
              className={`bg-gradient-to-r ${
                isStudent
                  ? "from-fuchsia-300 to-violet-400"
                  : "from-emerald-300 to-cyan-300"
              } bg-clip-text text-transparent`}
            >
              {highlight}
            </span>
          </h2>

          <p className="mt-4 max-w-[330px] text-[12px] leading-6 text-slate-300 sm:text-[13px]">
            {description}
          </p>

          {/* COMPACT FEATURES */}

          <div className="mt-4 space-y-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex items-center gap-2 text-[11px] font-semibold text-slate-200"
              >
                <CheckCircle2
                  className={`h-3.5 w-3.5 shrink-0 ${colors.accent}`}
                />

                <span>{service.title}</span>
              </div>
            ))}
          </div>

          {/* CTA */}

          <button
            type="button"
            onClick={onClick}
            className={`group/btn mt-5 inline-flex w-fit items-center gap-2 rounded-full ${colors.button} px-4 py-2.5 text-[11px] font-extrabold text-white shadow-lg ${colors.buttonShadow} transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl`}
          >
            {buttonText}

            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </div>

        {/* RIGHT: COMPACT 3D IMAGE */}

        <div className="relative flex min-h-[205px] items-center justify-center sm:min-h-[235px]">
          {/* IMAGE BACKLIGHT */}

          <div
            className={`pointer-events-none absolute h-44 w-44 rounded-full ${colors.glow} blur-[65px]`}
          />

          {/* IMAGE FRAME */}

          <div
            className={`relative flex h-[210px] w-full max-w-[220px] items-center justify-center overflow-hidden rounded-[22px] border ${colors.imageBorder} bg-white/[0.025] sm:h-[235px]`}
          >
            {/* SUBTLE TOP HIGHLIGHT */}

            <div
              className={`pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 ${
                isStudent ? "bg-violet-300/40" : "bg-emerald-300/40"
              }`}
            />

            <img
              src={image}
              alt={
                isStudent
                  ? "3D student working on a laptop"
                  : "3D businessman working on a laptop"
              }
              loading="lazy"
              className="relative z-10 h-full w-full object-contain p-1 drop-shadow-[0_18px_30px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </div>
        </div>
      </div>

      {/* BOTTOM ACCENT LINE */}

      <div
        className={`relative z-10 mt-5 h-px w-full ${
          isStudent
            ? "bg-gradient-to-r from-violet-400/40 via-violet-400/10 to-transparent"
            : "bg-gradient-to-r from-emerald-400/40 via-emerald-400/10 to-transparent"
        }`}
      />
    </article>
  );
}

/* ----------------------------------------
   AUDIENCE SECTION
----------------------------------------- */

export default function Audience({
  onStudentClick,
  onBusinessClick,
}) {
  return (
    <section
      id="audiences"
      className="relative overflow-hidden bg-[#050b1b] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20"
    >
      {/* BACKGROUND GLOW */}

      <div className="pointer-events-none absolute left-[-15%] top-10 h-80 w-80 rounded-full bg-violet-600/[0.07] blur-[130px]" />

      <div className="pointer-events-none absolute bottom-10 right-[-15%] h-80 w-80 rounded-full bg-emerald-500/[0.07] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1300px]">
        {/* SECTION HEADER */}

        <div className="mx-auto mb-9 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.2em] text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Built for your journey
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-[-0.045em] text-white sm:text-4xl">
            Solutions for your{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              next big move.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-xs leading-6 text-slate-400 sm:text-sm">
            From academic projects to growing businesses, we turn ideas
            into modern digital experiences that help you move forward.
          </p>
        </div>

        {/* COMPACT AUDIENCE CARDS */}

        <div className="grid items-stretch gap-5 xl:grid-cols-2">
          <AudienceCard
            type="student"
            title="Build Your Future"
            highlight="with the Right Tools"
            description="From final year projects to professional portfolios, we help students build practical skills, showcase their work, and prepare for the next opportunity."
            image={studentImage}
            services={studentServices}
            buttonText="Explore Student Services"
            onClick={onStudentClick}
          />

          <AudienceCard
            type="business"
            title="Digital Solutions"
            highlight="for Real Growth"
            description="We create modern websites, mobile applications, and custom software designed around your business needs, helping you build a stronger digital presence."
            image={businessImage}
            services={businessServices}
            buttonText="Explore Business Services"
            onClick={onBusinessClick}
          />
        </div>
      </div>
    </section>
  );
}