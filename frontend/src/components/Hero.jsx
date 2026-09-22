import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  Rocket,
  Building2,
  Terminal,
} from "lucide-react";

// Put the chosen video at: src/assets/hero-video.mp4
import heroVideo from "../assets/hero-video.mp4";

export default function Hero({ onOpenQuote }) {
  const [typedLines, setTypedLines] = useState(["", "", ""]);
  const [activeLine, setActiveLine] = useState(0);
  const [typedDescription, setTypedDescription] = useState("");
  const videoRef = useRef(null);

  /* ---------- Heading typing ---------- */
  useEffect(() => {
    const lines = ["Your Vision.", "Our Technology.", "A Better Tomorrow."];
    let lineIndex = 0;
    let characterIndex = 0;
    let timeoutId;
    const typeNextCharacter = () => {
      if (lineIndex >= lines.length) { setActiveLine(-1); return; }
      const currentLineIndex = lineIndex;
      const currentText = lines[currentLineIndex];
      const currentCharacterIndex = characterIndex;
      setTypedLines((currentLines) => {
        const nextLines = [...currentLines];
        nextLines[currentLineIndex] = currentText.slice(0, currentCharacterIndex + 1);
        return nextLines;
      });
      characterIndex += 1;
      if (characterIndex >= currentText.length) {
        lineIndex += 1; characterIndex = 0; setActiveLine(lineIndex);
        timeoutId = setTimeout(typeNextCharacter, 260);
      } else timeoutId = setTimeout(typeNextCharacter, 75);
    };
    typeNextCharacter();
    return () => clearTimeout(timeoutId);
  }, []);

  /* ---------- Terminal description typing ---------- */
  useEffect(() => {
    const description = "We build modern websites and powerful applications for students, startups, and businesses - turning ideas into real digital success.";
    let characterIndex = 0;
    let isDeleting = false;
    let timeoutId;
    const animateDescription = () => {
      if (!isDeleting) {
        characterIndex += 1;
        setTypedDescription(description.slice(0, characterIndex));
        if (characterIndex === description.length) { isDeleting = true; timeoutId = setTimeout(animateDescription, 1800); return; }
      } else {
        characterIndex -= 1;
        setTypedDescription(description.slice(0, characterIndex));
        if (characterIndex === 0) { isDeleting = false; timeoutId = setTimeout(animateDescription, 400); return; }
      }
      timeoutId = setTimeout(animateDescription, isDeleting ? 18 : 32);
    };
    animateDescription();
    return () => clearTimeout(timeoutId);
  }, []);

  /* ---------- Video: reduced motion + seamless loop fade ---------- */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      video.pause();
      video.currentTime = 4.5;
      video.style.opacity = "0.72";
      return;
    }

    video.play().catch(() => {
      video.style.opacity = "0.72";
    });
  }, []);

  // Fade in at the start and out at the end so the loop never "jumps"
  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    const edge = 0.9;
    const o = Math.min(1, v.currentTime / edge, (v.duration - v.currentTime) / edge);
    v.style.opacity = String(Math.max(0, o));
  };

  const handleQuote = () => {
    if (typeof onOpenQuote === "function") onOpenQuote();
    else document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSection = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#02060f] font-sans text-white"
    >
      {/* Slow "breathing" glow animations */}
      <style>{`
        @keyframes bbBreathe { 0%,100% { opacity:.55; transform:translate(-50%,-50%) scale(.92);} 50% { opacity:1; transform:translate(-50%,-50%) scale(1.08);} }
        @keyframes bbVideoGlow { 0%,100% { filter:brightness(.9) saturate(1.05) blur(0px);} 50% { filter:brightness(1.35) saturate(1.3) blur(.4px);} }
        @keyframes bbTextGlow { 0%,100% { text-shadow:0 0 18px rgba(135,88,255,.35), 0 0 48px rgba(10,174,255,.18);} 50% { text-shadow:0 0 28px rgba(255,79,216,.55), 0 0 80px rgba(135,88,255,.4);} }
        .bb-breathe { animation: bbBreathe 8s ease-in-out infinite; }
        .bb-video-glow { animation: bbVideoGlow 8s ease-in-out infinite; }
        .bb-text-glow { animation: bbTextGlow 8s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .bb-breathe,.bb-video-glow,.bb-text-glow { animation:none; } }
      `}</style>

      {/* ===== CENTER VIDEO (the glowing circle) ===== */}
      <div className="bb-video-glow pointer-events-none absolute inset-0 z-0">
        <video
          ref={videoRef}
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          onTimeUpdate={handleTimeUpdate}
          style={{ opacity: 0.72 }}
          className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 scale-[1.12] object-cover object-center mix-blend-screen max-md:scale-[1.25]"
        />
      </div>

      {/* Soft breathing halo behind the circle */}
      <div className="bb-breathe pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[820px] w-[820px] max-w-[130vw] rounded-full bg-[radial-gradient(circle,rgba(135,88,255,0.28)_0%,rgba(10,174,255,0.10)_40%,transparent_68%)] blur-2xl" />

      {/* Dark centre so the text stays crisp over the bright arc */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(2,6,15,0.55)_0%,rgba(2,6,15,0.25)_35%,transparent_65%)]" />

      {/* Edge vignette for a cinematic, premium frame */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_45%,#02060f_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-[#02060f] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-[#02060f] to-transparent" />

      {/* Fine film grain / dust for depth */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* ===== CENTERED CONTENT ===== */}
      <div className="relative z-10 mx-auto flex w-[calc(100%-32px)] max-w-[980px] flex-col items-center px-2 py-28 text-center sm:w-[calc(100%-56px)] lg:py-24">

        {/* Eyebrow */}
        <div className="mb-8 inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.34em] text-white/80 backdrop-blur-md sm:text-[11px]">
          <span>Design</span>
          <span className="h-1 w-1 rounded-full bg-[#8758ff]" />
          <span>Develop</span>
          <span className="h-1 w-1 rounded-full bg-[#ff4fd8]" />
          <span>Empower</span>
        </div>

        {/* Heading */}
        <h1 className="text-[40px] font-extrabold leading-[1.06] tracking-[-0.045em] text-white sm:text-[58px] lg:text-[72px] xl:text-[84px]">
          <span className="bb-text-glow block">
            {typedLines[0]}
            {activeLine === 0 && <span className="ml-1 inline-block h-[0.8em] w-[3px] animate-pulse bg-white align-baseline" aria-hidden="true" />}
          </span>
          <span className="block bg-gradient-to-r from-[#3ec4ff] via-[#9b6bff] to-[#ff5fd9] bg-clip-text text-transparent [filter:drop-shadow(0_0_28px_rgba(155,107,255,0.55))]">
            {typedLines[1]}
            {activeLine === 1 && <span className="ml-1 inline-block h-[0.8em] w-[3px] translate-y-[0.08em] animate-pulse bg-[#9b6bff] align-baseline" aria-hidden="true" />}
          </span>
          <span className="bb-text-glow block text-white/95">
            {typedLines[2]}
            {activeLine === 2 && <span className="ml-1 inline-block h-[0.8em] w-[3px] animate-pulse bg-white align-baseline" aria-hidden="true" />}
          </span>
        </h1>

        {/* Terminal description (compact glass) */}
        <div className="mt-10 w-full max-w-[600px] overflow-hidden rounded-2xl border border-white/10 bg-[#050a18]/60 text-left font-mono shadow-[0_0_60px_rgba(135,88,255,0.22)] backdrop-blur-2xl">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 text-[10px] text-slate-400 sm:px-5">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-400/80" />
              <span className="h-2 w-2 rounded-full bg-amber-400/80" />
              <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
              <span className="ml-2 flex items-center gap-1.5 text-slate-300"><Terminal className="h-3.5 w-3.5 text-sky-400" />binarybrains:~</span>
            </div>
            <span className="flex items-center gap-1.5 text-emerald-400"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />online</span>
          </div>
          <div className="min-h-[68px] break-words px-4 py-4 text-[11px] leading-5 text-slate-200 sm:px-5 sm:text-xs" aria-live="polite">
            <span className="text-emerald-300">visitor@binarybrains</span><span className="text-slate-500">:</span><span className="text-sky-300">~$</span>
            <span className="ml-2 text-slate-100">{typedDescription}</span>
            <span className="ml-1 inline-block h-[1.1em] w-[2px] translate-y-[0.15em] animate-pulse bg-[#28adff] align-baseline" aria-hidden="true" />
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleQuote}
            className="hero-button-float group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#079ff4] via-[#6548f5] to-[#c03df0] px-8 py-4 text-[14px] font-bold text-white shadow-[0_0_40px_rgba(135,88,255,0.5)] ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(255,79,216,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#28adff]"
          >
            Start Your Project
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("recent-projects")}
            className="hero-button-float-delayed group inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/[0.05] px-8 py-4 text-[14px] font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-white/60 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#28adff]"
          >
            Our Projects
            <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Audience strip */}
        <div className="mt-14 grid w-full max-w-[760px] grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3 sm:gap-0">
          {[
            { Icon: GraduationCap, color: "text-[#3ec4ff]", title: "For Students", sub: "Learn • Build • Grow" },
            { Icon: Rocket, color: "text-[#9b6bff]", title: "For Startups", sub: "Launch • Scale • Succeed" },
            { Icon: Building2, color: "text-[#ff5fd9]", title: "For Businesses", sub: "Digitize • Automate • Lead" },
          ].map(({ Icon, color, title, sub }, i) => (
            <div key={title} className={`flex flex-col items-center gap-2 ${i < 2 ? "sm:border-r sm:border-white/10" : ""}`}>
              <Icon size={28} strokeWidth={1.4} className={`${color} drop-shadow-[0_0_12px_currentColor]`} />
              <h3 className="text-[13px] font-semibold text-white">{title}</h3>
              <p className="text-[10px] tracking-wide text-slate-400">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}