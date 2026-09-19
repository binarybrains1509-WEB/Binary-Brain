import React from 'react';
import { CheckCircle2, MessageCircle, ShieldCheck, Sparkles, Zap } from 'lucide-react';

export default function StatsBar() {
  const promises = [
    { label: 'Clear communication', icon: MessageCircle },
    { label: 'Reliable delivery', icon: CheckCircle2 },
    { label: 'Built to scale', icon: Zap },
  ];

  return (
    <section className="bg-slate-950 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-sky-500/20 bg-gradient-to-r from-sky-500/[0.12] via-slate-900 to-cyan-500/[0.08] px-5 py-5 shadow-2xl shadow-sky-950/20 sm:px-7">
          <div className="absolute -right-16 -top-24 h-48 w-48 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-400/10 text-sky-300"><ShieldCheck className="h-5 w-5" /></div>
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-white"><Sparkles className="h-4 w-4 text-cyan-300" />Built for the next version of your business</div>
                <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">Thoughtful solutions, dependable execution, and support that keeps moving with you.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-700/70 pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
              {promises.map(({ label, icon: Icon }) => <div key={label} className="flex items-center gap-1.5 text-xs font-semibold text-slate-300"><Icon className="h-4 w-4 text-emerald-400" />{label}</div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
