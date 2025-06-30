import React from 'react';
import { Heart, ArrowUp, Terminal } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-cyan-500/20 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Terminal className="w-8 h-8 text-cyan-400" />
            <span className="text-3xl font-bold font-mono bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Riku Kodama
            </span>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>
          
          {/* Quote */}
          <div className="text-center max-w-2xl">
            <p className="text-slate-400 italic">
              "Code is poetry written in logic, and every line tells a story of innovation."
            </p>
          </div>
          
          {/* Copyright */}
          <div className="text-center text-slate-500">
            <p className="flex items-center justify-center">
              Crafted with <Heart className="w-4 h-4 mx-2 text-red-400" fill="currentColor" /> by Riku Kodama
            </p>
            <p className="mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          
          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group p-3 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-1"
          >
            <ArrowUp className="w-5 h-5 text-slate-900 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;