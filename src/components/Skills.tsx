import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 92 },
        { name: "Next.js", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "Tailwind CSS", level: 94 }
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 93 },
        { name: "Python", level: 88 },
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "GraphQL", level: 82 }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: "☁️",
      skills: [
        { name: "AWS", level: 87 },
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 78 },
        { name: "CI/CD", level: 90 },
        { name: "Terraform", level: 75 }
      ]
    },
    {
      title: "Mobile & AI",
      icon: "🤖",
      skills: [
        { name: "React Native", level: 80 },
        { name: "Machine Learning", level: 75 },
        { name: "TensorFlow", level: 70 },
        { name: "OpenAI APIs", level: 85 },
        { name: "Data Analysis", level: 78 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Skills & <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 font-medium text-sm">{skill.name}</span>
                      <span className="text-xs text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${skillIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            Technology <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Stack</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'JavaScript', 'TypeScript', 'Python', 'React', 'Next.js', 'Vue.js',
              'Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis',
              'AWS', 'Docker', 'Kubernetes', 'GraphQL', 'REST APIs', 'Tailwind CSS',
              'Material-UI', 'Jest', 'Cypress', 'Git', 'Linux', 'Nginx', 'TensorFlow',
              'OpenAI', 'Stripe', 'WebSockets', 'Microservices', 'Serverless'
            ].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm text-slate-300 rounded-full text-sm font-medium border border-cyan-500/20 hover:border-cyan-400/50 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;