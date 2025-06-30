import React from 'react';
import { ExternalLink, Github, ArrowRight, Star, GitBranch, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered E-Commerce Platform",
      description: "Next-generation e-commerce solution with AI-driven product recommendations, real-time inventory management, and advanced analytics dashboard. Features include machine learning-based pricing optimization and automated customer support.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "PostgreSQL", "TensorFlow", "AWS", "Stripe"],
      liveUrl: "https://uxify.com/blog/post/ai-tools-ecommerce",
      githubUrl: "#",
      featured: true,
      stats: { stars: 234, forks: 45, views: "12.5k" }
    },
    {
      title: "Real-Time Collaboration Suite",
      description: "Comprehensive project management and collaboration platform with real-time editing, video conferencing integration, and advanced team analytics. Built with microservices architecture for maximum scalability.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Socket.io", "Docker", "Kubernetes"],
      liveUrl: "https://thedigitalprojectmanager.com/tools/real-time-collaboration-tools/",
      githubUrl: "#",
      featured: true,
      stats: { stars: 189, forks: 32, views: "8.7k" }
    },
    {
      title: "Blockchain Analytics Dashboard",
      description: "Advanced cryptocurrency and DeFi analytics platform with real-time market data, portfolio tracking, and predictive modeling. Features custom charting libraries and WebSocket connections for live updates.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Python", "FastAPI", "Redis", "WebSockets", "D3.js"],
      liveUrl: "https://chainalysis.com",
      githubUrl: "#",
      featured: true,
      stats: { stars: 156, forks: 28, views: "6.2k" }
    },
    {
      title: "Smart IoT Dashboard",
      description: "Comprehensive IoT device management platform with real-time monitoring, predictive maintenance, and automated alerts.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Express", "InfluxDB", "MQTT", "Grafana"],
      liveUrl: "https://thingsboard.io",
      githubUrl: "#",
      featured: false,
      stats: { stars: 98, forks: 15, views: "3.4k" }
    },
    {
      title: "ML-Powered Content Generator",
      description: "AI content creation platform with natural language processing, automated SEO optimization, and multi-language support.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Python", "OpenAI", "PostgreSQL", "Celery"],
      liveUrl: "https://www.brightedge.com",
      githubUrl: "#",
      featured: false,
      stats: { stars: 142, forks: 23, views: "5.1k" }
    },
    {
      title: "Serverless Microservices API",
      description: "Scalable microservices architecture with serverless functions, API gateway, and comprehensive monitoring solutions.",
      image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "CloudWatch", "Terraform"],
      liveUrl: "https://docs.aws.amazon.com/whitepapers/latest/microservices-on-aws/microservices-on-serverless-technologies.html",
      githubUrl: "#",
      featured: false,
      stats: { stars: 87, forks: 12, views: "2.8k" }
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise across the full stack and emerging technologies
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group overflow-hidden rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Project Stats */}
                  <div className="absolute top-4 left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center space-x-1 px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full text-xs text-slate-300">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1 px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full text-xs text-slate-300">
                      <GitBranch className="w-3 h-3 text-cyan-400" />
                      <span>{project.stats.forks}</span>
                    </div>
                    <div className="flex items-center space-x-1 px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full text-xs text-slate-300">
                      <Eye className="w-3 h-3 text-emerald-400" />
                      <span>{project.stats.views}</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={project.liveUrl}
                      className="p-3 bg-slate-900/80 backdrop-blur-sm rounded-full border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1"
                    >
                      <ExternalLink className="w-5 h-5 text-cyan-400" />
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="p-3 bg-slate-900/80 backdrop-blur-sm rounded-full border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1"
                    >
                      <Github className="w-5 h-5 text-cyan-400" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <h3 className="text-3xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl}
                    className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-900 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-1"
                  >
                    View Live
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="inline-flex items-center px-6 py-3 bg-slate-800/50 backdrop-blur-sm text-slate-200 rounded-full font-semibold border border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-1"
                  >
                    <Github className="mr-2 w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-12 text-center">
            More <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Projects</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-sm rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Project Stats */}
                  <div className="absolute top-3 left-3 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center space-x-1 px-2 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full text-xs text-slate-300">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span>{project.stats.stars}</span>
                    </div>
                  </div>
                  
                  <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={project.liveUrl}
                      className="p-2 bg-slate-900/80 backdrop-blur-sm rounded-full border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 text-cyan-400" />
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="p-2 bg-slate-900/80 backdrop-blur-sm rounded-full border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300"
                    >
                      <Github className="w-4 h-4 text-cyan-400" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h4>
                  <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs font-medium border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-slate-700/50 text-slate-400 rounded-full text-xs border border-cyan-500/20">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;