import React from 'react';
import { ArrowRight, Send, Sparkles } from 'lucide-react';

export default function CtaBanner({ onOpenQuote }) {
  return (
    <section id="cta-banner" className="py-16 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curved Glowing Banner matching mockup */}
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 bg-gradient-to-r from-[#071329] via-[#0b1b3b] to-[#0d1633] border border-blue-500/30 shadow-2xl shadow-blue-950/60">
          
          {/* Ambient Glows */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

          {/* Dotted Flight Path & Paper Plane Illustration */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 1000 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M 380,240 C 480,220 540,160 620,130 C 670,110 740,120 780,110" 
                stroke="#38bdf8" 
                strokeWidth="2" 
                strokeDasharray="6 6" 
                strokeOpacity="0.6"
              />
              {/* Paper Plane Silhouette */}
              <g transform="translate(620, 115) rotate(15)">
                <polygon points="0,0 26,-8 18,12 8,8" fill="#38bdf8" />
                <line x1="8" y1="8" x2="26" y2="-8" stroke="#ffffff" strokeWidth="1" />
              </g>
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (8 Cols) */}
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Let's Build Something{' '}
                <span className="bg-gradient-to-r from-sky-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                  Amazing Together
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                Whether you're a student with a dream or a business with a vision — BinaryBrains is here to turn your ideas into reality.
              </p>
            </div>

            {/* Right Action & Script Quote (4 Cols) */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center gap-6">
              
              {/* Glowing CTA Button */}
              <button
                onClick={() => onOpenQuote('GENERAL')}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-base text-white bg-gradient-to-r from-blue-600 via-sky-600 to-blue-500 hover:from-blue-500 hover:to-sky-500 shadow-[0_0_30px_rgba(56,189,248,0.5)] hover:shadow-[0_0_40px_rgba(56,189,248,0.7)] transition-all transform hover:-translate-y-1 active:translate-y-0"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Handwritten Script Quote from mockup */}
              <div className="font-script text-slate-300/80 text-xl sm:text-2xl text-center lg:text-right leading-tight -rotate-3 select-none">
                <div>Your Ideas</div>
                <div className="text-sky-300">Our Code</div>
                <div className="text-sm sm:text-base text-slate-400">A Better Tomorrow</div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
