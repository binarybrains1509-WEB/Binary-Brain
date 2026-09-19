import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ExternalLink, 
  X, 
  CheckCircle, 
  Tag, 
  Clock, 
  Sparkles,
  Terminal,
  Globe,
  Anchor,
  Dumbbell
} from 'lucide-react';
import { recentProjects } from '../data/mockData';
import lexarroImage from '../assets/exarro-homepage.png';

export default function RecentProjects({ onOpenQuote }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="recent-projects" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Client & Engineering Showcase
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Some of Our{' '}
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                Recent Projects
              </span>
            </h2>
          </div>

          <button 
            onClick={() => onOpenQuote('GENERAL')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sky-400 hover:text-sky-300 group transition-colors self-start md:self-auto"
          >
            <span>Discuss Your Project</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative flex flex-col rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-950/50"
            >
              
              {/* Device Mockup Display Container */}
              <div 
                onClick={() => setSelectedProject(project)}
                className="relative aspect-[16/11] bg-gradient-to-b from-[#0a1020] to-[#040813] p-4 flex items-center justify-center overflow-hidden border-b border-slate-800/80 cursor-pointer"
              >
                
                {/* Floating ambient glow behind device */}
                <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors blur-xl"></div>

                {/* Status Badge */}
                <div className="absolute top-2.5 left-2.5 z-20">
                  {project.status === 'Under Development' ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                      Under Development
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      Live Project
                    </span>
                  )}
                </div>

                {/* Laptop Mockup Frame */}
                <div className="relative w-full max-w-[210px] aspect-[16/10] bg-slate-900 rounded-t-lg border border-slate-700 p-1 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  
                  {/* Camera hole */}
                  <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-slate-700"></div>

                  {/* Screen Content */}
                  <div className="w-full h-full rounded bg-slate-950 overflow-hidden relative">
                    
                    {/* 1. Vaibhav's Developer Portfolio Screen */}
                    {project.id === 'p-vaibhav' && (
                      <div className="w-full h-full p-2 bg-[#070a13] text-white flex flex-col justify-between font-mono">
                        <div className="flex items-center justify-between border-b border-purple-500/30 pb-1">
                          <span className="text-[7px] font-bold text-purple-400 flex items-center gap-1">
                            <Terminal className="w-2.5 h-2.5" /> VAIBHAV // PORTFOLIO
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        </div>
                        <div className="space-y-1 my-auto">
                          <div className="text-[6px] text-slate-400">&gt; npx vaibhav --role</div>
                          <div className="text-[7px] font-bold text-cyan-300">Full-Stack Developer</div>
                          <div className="text-[6px] text-purple-300">&gt; status: shipping code</div>
                        </div>
                        <div className="flex gap-1">
                          <span className="text-[5px] px-1 bg-purple-950/80 rounded border border-purple-800 text-purple-300">React</span>
                          <span className="text-[5px] px-1 bg-blue-950/80 rounded border border-blue-800 text-blue-300">Tailwind</span>
                          <span className="text-[5px] px-1 bg-indigo-950/80 rounded border border-indigo-800 text-indigo-300">Vercel</span>
                        </div>
                      </div>
                    )}

                    {/* 2. Lexarro International Screen */}
                    {project.id === 'p-lexarro' && (
                      <img
                        src={lexarroImage}
                        alt="Lexarro international business platform"
                        className="h-full w-full object-cover object-top"
                      />
                    )}

                    {/* 3. Charismight One Maritime Screen */}
                    {project.id === 'p-charismight' && (
                      <div className="w-full h-full p-2 bg-[#081524] text-white flex flex-col justify-between">
                        <div className="flex items-center justify-between border-b border-cyan-500/30 pb-1">
                          <span className="text-[7px] font-bold text-cyan-400 flex items-center gap-1">
                            <Anchor className="w-2.5 h-2.5" /> CHARISMIGHT ONE
                          </span>
                          <span className="text-[5px] text-emerald-400">ONLINE</span>
                        </div>
                        <div className="my-auto space-y-1">
                          <div className="text-[8px] font-black text-white">
                            Marine OneStop Solution
                          </div>
                          <div className="text-[5px] text-cyan-200/80">
                            Digital Maritime Logistics & Enterprise Workflows
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                          <div className="h-3 rounded bg-cyan-950/80 border border-cyan-800/50 flex items-center px-1">
                            <span className="text-[5px] text-cyan-300">Django API</span>
                          </div>
                          <div className="h-3 rounded bg-blue-950/80 border border-blue-800/50 flex items-center px-1">
                            <span className="text-[5px] text-blue-300">Operations</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 4. Gym Management System (Under Development) */}
                    {project.id === 'p-gym' && (
                      <div className="w-full h-full p-2 bg-[#0a1210] text-white flex flex-col justify-between">
                        <div className="flex items-center justify-between border-b border-emerald-500/30 pb-1">
                          <span className="text-[7px] font-bold text-emerald-400 flex items-center gap-1">
                            <Dumbbell className="w-2.5 h-2.5" /> GYM ERP SYSTEM
                          </span>
                          <span className="text-[5px] text-amber-400 font-bold">WIP</span>
                        </div>
                        <div className="my-auto space-y-1">
                          <div className="text-[8px] font-black text-white">
                            Fitness & Membership Platform
                          </div>
                          <div className="grid grid-cols-2 gap-1">
                            <div className="p-0.5 rounded bg-emerald-950/60 border border-emerald-800/40 text-[5px] text-emerald-300">
                              Members: 240+
                            </div>
                            <div className="p-0.5 rounded bg-teal-950/60 border border-teal-800/40 text-[5px] text-teal-300">
                              Trainers: Active
                            </div>
                          </div>
                        </div>
                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                          <div className="w-3/4 h-full bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full"></div>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Laptop Base */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[112%] h-1.5 bg-slate-700 rounded-b-md shadow-md flex justify-center">
                    <div className="w-8 h-0.5 bg-slate-500 rounded-full"></div>
                  </div>
                </div>

                {/* Floating Expand Arrow Button */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                  className="absolute bottom-2.5 right-2.5 w-7 h-7 rounded-full bg-slate-800/90 hover:bg-blue-600 text-white flex items-center justify-center border border-slate-700 shadow-md group-hover:scale-110 transition-all z-20"
                  title="View Details"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>

              </div>

              {/* Project Card Bottom Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-400 mb-1">
                    {project.category}
                  </div>
                  <h3 
                    onClick={() => setSelectedProject(project)}
                    className="text-base font-bold text-white group-hover:text-sky-300 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tech tags preview & Live Action Button */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 3).map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-300 border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Direct Link to Live Site if available */}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-sky-400 hover:text-white transition-colors flex-shrink-0"
                    >
                      <span>Visit</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-[10px] font-bold text-amber-400 flex items-center gap-1 flex-shrink-0">
                      <Clock className="w-3 h-3" />
                      <span>Soon</span>
                    </span>
                  )}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl shadow-blue-950/80">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Category badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-bold uppercase text-sky-400 mb-3">
              <Tag className="w-3.5 h-3.5" /> {selectedProject.category}
            </div>

            <h3 className="text-2xl font-extrabold text-white tracking-tight">
              {selectedProject.title}
            </h3>

            <p className="text-sm text-slate-300 mt-3 leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="mt-5 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Tech Stack Architecture
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-blue-500/10 text-sky-300 border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs font-semibold">
              {selectedProject.status === 'Under Development' ? (
                <span className="text-amber-400 flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> Under Active Engineering & Deployment
                </span>
              ) : (
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" /> {selectedProject.stats}
                </span>
              )}
            </div>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
              >
                Close
              </button>

              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all flex items-center gap-1.5"
                >
                  <span>Open Live Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <button
                onClick={() => {
                  setSelectedProject(null);
                  onOpenQuote(selectedProject.audience);
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/30 transition-all"
              >
                Build Something Similar →
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
