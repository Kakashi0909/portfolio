import React from 'react';
import { Code2, Database, Globe, Zap, Brain, Rocket } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend Mastery",
      description: "React, TypeScript, Next.js with pixel-perfect designs and modern UX patterns"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Excellence",
      description: "Node.js, Python, PostgreSQL, and scalable cloud architecture solutions"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Full Stack Vision",
      description: "End-to-end solutions from concept to deployment with DevOps integration"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Focus",
      description: "Optimized applications that scale efficiently and deliver exceptional speed"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Integration",
      description: "Machine learning and AI-powered features for next-generation applications"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovation Drive",
      description: "Cutting-edge technologies and experimental approaches to solve complex problems"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm Riku Kodama, a passionate full-stack engineer with over 6 years of experience 
              building innovative web applications. I specialize in creating seamless digital 
              experiences that bridge the gap between cutting-edge technology and user needs.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              My journey began with a fascination for how code can transform ideas into reality. 
              Today, I focus on building scalable, performant applications using modern 
              technologies while maintaining clean, maintainable codebases that teams love to work with.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              When I'm not coding, you'll find me exploring emerging technologies, contributing 
              to open source projects, or mentoring aspiring developers in the community.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30">
                6+ Years Experience
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-purple-500/20 text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/30">
                100+ Projects Delivered
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-400 rounded-full text-sm font-medium border border-purple-500/30">
                Global Remote
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="group p-6 bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-sm rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;