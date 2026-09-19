import React from 'react';
import { 
  Cog, 
  Globe, 
  Smartphone, 
  Code2, 
  Cloud, 
  Headphones,
  ArrowRight
} from 'lucide-react';
import { businessServices } from '../data/mockData';

const iconMap = {
  Cog,
  Globe,
  Smartphone,
  Code2,
  Cloud,
  Headphones
};

export default function BusinessServices({ onSelectService }) {
  return (
    <section id="business-services" className="py-16 bg-slate-950/90 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
              BUSINESS SERVICES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Powerful Solutions for{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Your Business
              </span>
            </h2>
          </div>

          <button 
            onClick={() => onSelectService('ERP Solutions', 'BUSINESS')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 group transition-colors self-start md:self-auto"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5">
          {businessServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Globe;
            return (
              <div 
                key={service.id}
                onClick={() => onSelectService(service.title, 'BUSINESS')}
                className="group relative rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-slate-800 hover:border-emerald-500/50 p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/40 cursor-pointer"
              >
                {/* Top icon with gradient background */}
                <div>
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600/30 to-emerald-600/30 border border-emerald-500/20 text-emerald-300 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:text-white group-hover:from-emerald-600 group-hover:to-teal-600 transition-all shadow-sm">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors mb-2 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom subtle indicator */}
                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-medium text-slate-500 group-hover:text-emerald-400 transition-colors">
                  <span>Explore stack</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
