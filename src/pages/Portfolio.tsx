import React, { useState } from 'react';
import { ExternalLink, Server, Cloud, Shield, Gamepad2, Code, Users, Calendar, Star, Filter } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "PowerDown Hosting",
      description: "Premium hosting services serving hundreds of clients including active YouTubers with enterprise-grade infrastructure and 99.9% uptime guarantee.",
      longDescription: "PowerDown Hosting represents the pinnacle of my hosting expertise, built from the ground up to serve demanding clients including major YouTube content creators. The platform features enterprise-grade infrastructure, advanced DDoS protection, and a custom control panel designed for ease of use.",
      tech: ["Web Hosting", "Game Hosting", "DDoS Protection", "Custom Panel"],
      icon: Server,
      gradient: "from-emerald-500 to-green-600",
      category: "hosting",
      featured: true,
      stats: { clients: "500+", uptime: "99.9%", servers: "Multiple Regions" },
      image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "SwaggerCloud",
      description: "Enterprise cloud hosting solutions with UltraVM partnership, providing scalable infrastructure for businesses of all sizes.",
      longDescription: "SwaggerCloud is an enterprise-focused hosting platform developed in partnership with UltraVM. It offers scalable cloud solutions, advanced networking capabilities, and enterprise-grade security features for businesses requiring robust infrastructure.",
      tech: ["Cloud Infrastructure", "Enterprise Solutions", "Scalability", "UltraVM Partnership"],
      icon: Cloud,
      gradient: "from-cyan-500 to-blue-600",
      category: "hosting",
      featured: false,
      stats: { partnership: "UltraVM", focus: "Enterprise", scaling: "Auto-Scale" },
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "DDoS Protection Services",
      description: "Comprehensive DDoS protection infrastructure for India & Nepal markets with real-time monitoring and instant mitigation.",
      longDescription: "A specialized DDoS protection service designed specifically for the Indian and Nepalese markets. Features include real-time traffic analysis, instant attack mitigation, and comprehensive reporting dashboards for clients.",
      tech: ["Network Security", "Traffic Filtering", "24/7 Monitoring", "Regional Focus"],
      icon: Shield,
      gradient: "from-blue-500 to-purple-600",
      category: "security",
      featured: false,
      stats: { coverage: "India & Nepal", monitoring: "24/7", mitigation: "Instant" },
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Token SMP",
      description: "Building the biggest Minecraft server brand with innovative gameplay mechanics and community-driven features.",
      longDescription: "Token SMP is an ambitious project aimed at creating the largest and most innovative Minecraft server network. It features custom gameplay mechanics, advanced economy systems, and community-driven content creation tools.",
      tech: ["Minecraft Development", "Server Management", "Community Building", "Custom Plugins"],
      icon: Gamepad2,
      gradient: "from-purple-500 to-pink-600",
      category: "gaming",
      featured: true,
      stats: { goal: "Biggest Brand", features: "Custom Gameplay", community: "Growing" },
      image: "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      title: "LavaMC Network",
      description: "High-performance Minecraft server with custom plugins and optimized gameplay experience for competitive gaming.",
      longDescription: "LavaMC represents one of my most successful Minecraft server projects, featuring custom-developed plugins, optimized performance configurations, and innovative gameplay mechanics that attracted thousands of players.",
      tech: ["Custom Plugins", "Performance Optimization", "Player Management", "Anti-Cheat"],
      icon: Gamepad2,
      gradient: "from-red-500 to-orange-600",
      category: "gaming",
      featured: false,
      stats: { players: "Thousands", plugins: "Custom", performance: "Optimized" },
      image: "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 6,
      title: "Infrastructure Consulting",
      description: "Expert consulting services for businesses looking to optimize their digital infrastructure and hosting solutions.",
      longDescription: "Providing comprehensive infrastructure consulting services to help businesses optimize their hosting solutions, improve performance, and reduce costs while maintaining high availability and security standards.",
      tech: ["Architecture Review", "Performance Optimization", "Security Audit", "Migration Planning"],
      icon: Code,
      gradient: "from-green-500 to-teal-600",
      category: "consulting",
      featured: false,
      stats: { clients: "Multiple", focus: "Optimization", results: "Improved Performance" },
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: Star },
    { id: 'hosting', label: 'Hosting', icon: Server },
    { id: 'gaming', label: 'Gaming', icon: Gamepad2 },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'consulting', label: 'Consulting', icon: Code },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const stats = [
    { value: '500+', label: 'Active Clients', icon: Users },
    { value: '8+', label: 'Minecraft Servers', icon: Gamepad2 },
    { value: '2+', label: 'Years Experience', icon: Calendar },
    { value: '99.9%', label: 'Uptime', icon: Server },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcase of hosting solutions, infrastructure projects, and Minecraft server developments 
            that power digital experiences for hundreds of clients worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-emerald-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-emerald-400'
                  }`}
                >
                  <Icon size={18} />
                  <span>{filter.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const Icon = project.icon;
              return (
                <div key={project.id} className={`relative group cursor-pointer ${project.featured ? 'lg:col-span-2' : ''}`}>
                  {project.featured && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-1 rounded-full text-sm font-medium z-10">
                      Featured
                    </div>
                  )}
                  
                  <div className="h-full rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/10 overflow-hidden">
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center`}>
                          <Icon className="text-white" size={24} />
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="text-white" size={20} />
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-400 leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 3).map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-all duration-300">
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-3 py-1 bg-gray-700/50 text-gray-400 rounded-full text-sm">
                            +{project.tech.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Project Stats */}
                      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-700/50">
                        {Object.entries(project.stats).map(([key, value], index) => (
                          <div key={index} className="text-center">
                            <div className="text-emerald-400 font-semibold text-sm">{value}</div>
                            <div className="text-gray-500 text-xs capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Project Impact
            </h2>
            <p className="text-gray-400 text-lg">Numbers that reflect the success of our collaborative efforts</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={28} />
                  </div>
                  <div className="text-3xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 p-8 md:p-12 rounded-2xl border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-4 text-white">Have a Project in Mind?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Let's collaborate to bring your hosting and infrastructure vision to life. 
              From concept to deployment, I'm here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-medium hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300"
              >
                Start Your Project
              </a>
              <a 
                href="/services" 
                className="border-2 border-emerald-500 text-emerald-400 px-8 py-3 rounded-lg font-medium hover:bg-emerald-500 hover:text-white transition-all duration-300"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;