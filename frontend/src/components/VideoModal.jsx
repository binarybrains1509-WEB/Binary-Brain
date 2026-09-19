import React from 'react';
import { X, Play, Sparkles, CheckCircle2, Monitor, Code2, Users } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl shadow-blue-950/80 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-bold uppercase tracking-wider text-sky-400">
            <Sparkles className="w-3.5 h-3.5" /> Inside BinaryBrains
          </div>

          <h3 className="text-2xl font-extrabold text-white tracking-tight">
            How We Build Solutions & Empower Careers
          </h3>

          {/* Interactive Mock Video Player Frame */}
          <div className="relative aspect-video rounded-2xl bg-[#070d1e] border border-slate-800 overflow-hidden flex flex-col justify-between p-6 shadow-inner">
            
            {/* Ambient player glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-transparent pointer-events-none"></div>

            <div className="flex items-center justify-between text-xs text-slate-400 z-10">
              <span className="font-mono text-sky-400 font-semibold">BinaryBrains Showcase 2026</span>
              <span className="px-2 py-0.5 rounded bg-red-600/20 text-red-400 border border-red-500/30 text-[10px] font-bold">● HD PREVIEW</span>
            </div>

            {/* Center Play Button Graphic */}
            <div className="my-auto text-center z-10 space-y-3">
              <div className="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center mx-auto shadow-xl shadow-blue-500/40 cursor-pointer transform hover:scale-110 transition-all">
                <Play className="w-7 h-7 fill-current ml-1 text-white" />
              </div>
              <p className="text-sm font-semibold text-slate-200">
                Turn Ideas Into Real Software Products & Launch Fast
              </p>
            </div>

            {/* Video Controls bar */}
            <div className="space-y-2 z-10">
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-2/5 h-full bg-gradient-to-r from-sky-400 to-blue-600 rounded-full"></div>
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>01:14 / 03:20</span>
                <span>Stereo Audio • 1080p60</span>
              </div>
            </div>

          </div>

          {/* Highlights below video */}
          <div className="grid grid-cols-3 gap-3 pt-2 text-center text-xs">
            <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <Code2 className="w-4 h-4 text-sky-400 mx-auto mb-1" />
              <div className="font-bold text-white">Full-Stack Tech</div>
              <div className="text-[10px] text-slate-400">React & Spring Boot</div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <Users className="w-4 h-4 text-purple-400 mx-auto mb-1" />
              <div className="font-bold text-white">Student Mentorship</div>
              <div className="text-[10px] text-slate-400">Live Project Guidance</div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <Monitor className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
              <div className="font-bold text-white">Enterprise Scalability</div>
              <div className="text-[10px] text-slate-400">Cloud & ERP Architecture</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
