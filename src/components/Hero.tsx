import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, Code, Database, Server } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Full Stack Engineer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingIcons = [
    { Icon: Code, delay: '0s', position: 'top-20 left-20' },
    { Icon: Database, delay: '2s', position: 'top-40 right-20' },
    { Icon: Server, delay: '4s', position: 'bottom-40 left-40' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float-delayed"></div>
        <div className="absolute -bottom-8 left-40 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float-slow"></div>
        
        {/* Floating Tech Icons */}
        {floatingIcons.map(({ Icon, delay, position }, index) => (
          <div 
            key={index}
            className={`absolute ${position} text-cyan-400/20 animate-float-icon`}
            style={{ animationDelay: delay }}
          >
            <Icon size={48} />
          </div>
        ))}
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          {/* Avatar with Tech Border */}
          <div className="w-40 h-40 mx-auto mb-8 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-400 animate-spin-slow"></div>
            <div className="absolute inset-2 rounded-full bg-slate-800 flex items-center justify-center">
              <span className="text-4xl font-bold font-mono bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                RK
              </span>
            </div>
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Riku
            </span>
            <br />
            <span className="text-slate-200">
              Kodama
            </span>
          </h1>
          
          <div className="text-2xl sm:text-3xl lg:text-4xl text-slate-300 mb-8 h-12 font-mono">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              {displayText}
              <span className="animate-pulse text-cyan-400">|</span>
            </span>
          </div>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Crafting innovative digital solutions with cutting-edge technologies. 
            Passionate about building scalable applications that push the boundaries of what's possible.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a href="#" className="group p-4 bg-slate-800/50 backdrop-blur-sm rounded-full border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/25">
            <Github className="w-6 h-6 text-slate-300 group-hover:text-cyan-400 transition-colors" />
          </a>
          <a href="#" className="group p-4 bg-slate-800/50 backdrop-blur-sm rounded-full border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/25">
            <Linkedin className="w-6 h-6 text-slate-300 group-hover:text-cyan-400 transition-colors" />
          </a>
          <a href="#" className="group p-4 bg-slate-800/50 backdrop-blur-sm rounded-full border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/25">
            <Mail className="w-6 h-6 text-slate-300 group-hover:text-cyan-400 transition-colors" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-900 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
            <span className="flex items-center justify-center">
              View My Work
              <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </button>
          <button className="group px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-slate-200 rounded-full font-semibold border border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-1">
            <span className="flex items-center justify-center">
              <Download className="mr-2 w-5 h-5" />
              Download Resume
            </span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToNext}
          className="animate-bounce p-3 rounded-full bg-slate-800/30 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 text-cyan-400"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;