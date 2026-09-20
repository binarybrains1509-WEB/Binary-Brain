import React from 'react';
import { ArrowUp } from 'lucide-react';
import logoIcon from '../assets/logo-icon.jpeg';

// Crisp SVG social icons
function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

export default function Footer({ onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#040711] border-t border-slate-900 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-900">
          
          {/* Left: Brand Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative flex h-10 w-10 items-center justify-center">
                <div className="absolute inset-0 rounded-xl bg-cyan-400/10 blur-xl transition duration-300 group-hover:bg-cyan-400/25" />
                <img
                  src={logoIcon}
                  alt="BinaryBrains logo"
                  className="relative h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center tracking-tight text-xl font-extrabold leading-none">
                <span className="text-white">Binary</span>
                <span className="text-sky-400 ml-0.5">Brains</span>
              </div>
            </a>
            <span className="text-xs font-medium text-slate-400 tracking-wide mt-2">
              Build Today. A Brighter Tomorrow.
            </span>
          </div>

          {/* Center: Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm font-medium">
            <a href="#" className="text-slate-300 hover:text-white transition-colors">
              Home
            </a>
            <button onClick={() => scrollToSection('student-services')} className="text-slate-300 hover:text-purple-300 transition-colors">
              Students
            </button>
            <button onClick={() => scrollToSection('business-services')} className="text-slate-300 hover:text-emerald-300 transition-colors">
              Business
            </button>
            <button onClick={() => scrollToSection('recent-projects')} className="text-slate-300 hover:text-sky-300 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-slate-300 hover:text-amber-300 transition-colors">
              Reviews
            </button>
            <button onClick={() => scrollToSection('why-us')} className="text-slate-300 hover:text-white transition-colors">
              About
            </button>
            <button onClick={onOpenQuote} className="text-slate-300 hover:text-white transition-colors">
              Contact
            </button>
          </div>

          {/* Right: Social Media Icons matching mockup */}
          <div className="flex items-center gap-3">
            <a 
              href="https://www.instagram.com/binarybrains11?stkn=MW1pN2RxZDZ3NGd0eA==" 
              target="_blank" 
              rel="noreferrer"
              className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-pink-600 hover:border-pink-500 flex items-center justify-center transition-all shadow-sm"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <a 
              href="https://github.com/binarybrains1509-WEB/Binary-Brain" 
              target="_blank" 
              rel="noreferrer"
              className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 hover:border-slate-600 flex items-center justify-center transition-all shadow-sm"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:bg-slate-800 flex items-center justify-center transition-all ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © 2026 BinaryBrains. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="text-sky-400/80">React 19 + Spring Boot 3.4.2</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
