import React from 'react';
import { ExternalLink, Server, Cloud, Shield, Gamepad2 } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "PowerDown Hosting",
      description: "Premium hosting services serving hundreds of clients including active YouTubers",
      tech: ["Web Hosting", "Game Hosting", "DDoS Protection"],
      icon: <Server className="text-emerald-400" size={32} />,
      gradient: "from-emerald-500 to-green-600",
      featured: true
    },
    {
      title: "SwaggerCloud",
      description: "Enterprise cloud hosting solutions with UltraVM partnership",
      tech: ["Cloud Infrastructure", "Enterprise Solutions", "Scalability"],
      icon: <Cloud className="text-cyan-400" size={32} />,
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "DDoS Protection Services",
      description: "Comprehensive DDoS protection for India & Nepal markets",
      tech: ["Network Security", "Traffic Filtering", "24/7 Monitoring"],
      icon: <Shield className="text-blue-400" size={32} />,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Token SMP",
      description: "Building the biggest Minecraft server brand with innovative gameplay",
      tech: ["Minecraft Development", "Server Management", "Community Building"],
      icon: <Gamepad2 className="text-purple-400" size={32} />,
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const minecraftProjects = [
    "LavaMC", "AnchorMC", "FusionMC", "MineZillaMC", 
    "NepiZMC", "LaliMC", "EterNityMC", "ExtremeNetwork"
  ];

  return (
    <section className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcase of hosting solutions, infrastructure projects, and Minecraft server developments
          </p>
        </div>

        {/* Main Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className={`relative group cursor-pointer ${project.featured ? 'md:col-span-2' : ''}`}>
              <div className="h-full p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/10">
                {project.featured && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
                
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>
                  <ExternalLink className="text-gray-500 group-hover:text-emerald-400 transition-colors opacity-0 group-hover:opacity-100" size={20} />
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-all duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minecraft Servers Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-white">Minecraft Server Projects</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {minecraftProjects.map((server, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-xl border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 hover:transform hover:scale-105 flex flex-col items-center justify-center p-4 hover:shadow-lg hover:shadow-emerald-500/20">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg mb-2 group-hover:animate-pulse"></div>
                  <span className="text-white font-medium text-xs text-center group-hover:text-emerald-400 transition-colors">
                    {server}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50">
            <div className="text-3xl font-bold text-emerald-400 mb-2">500+</div>
            <div className="text-gray-400">Active Clients</div>
          </div>
          <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50">
            <div className="text-3xl font-bold text-cyan-400 mb-2">8+</div>
            <div className="text-gray-400">Minecraft Servers</div>
          </div>
          <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50">
            <div className="text-3xl font-bold text-blue-400 mb-2">2+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50">
            <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;