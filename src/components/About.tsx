import React from 'react';
import { Calendar, MapPin, Users, Trophy } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      company: "PowerDown Hosting",
      role: "CEO & Founder",
      period: "Dec 2024 - Present",
      description: "Founded and leading PowerDown Hosting, serving hundreds of clients including active YouTubers",
      icon: <Trophy className="text-yellow-400" size={24} />,
      current: true
    },
    {
      company: "SwaggerCloud Hosting",
      role: "Managing Partner",
      period: "2024 - Present", 
      description: "Currently managing SwaggerCloud Hosting, partnering with UltraVM for enterprise solutions",
      icon: <Users className="text-blue-400" size={24} />,
      current: true
    },
    {
      company: "FusionOX Hosting",
      role: "Tech & Development Lead",
      period: "6 months",
      description: "Led technical development and infrastructure optimization for hosting services",
      icon: <Calendar className="text-emerald-400" size={24} />
    },
    {
      company: "PeakNodes",
      role: "CEO",
      period: "3 months",
      description: "Managed hosting operations and client relationships",
      icon: <MapPin className="text-cyan-400" size={24} />
    },
    {
      company: "Anchor Hosting",
      role: "CEO",
      period: "Start of Journey",
      description: "First venture into the hosting industry, foundation of expertise",
      icon: <Calendar className="text-purple-400" size={24} />
    }
  ];

  const minecraftServers = [
    "LavaMC", "AnchorMC", "FusionMC", "MineZillaMC", 
    "NepiZMC", "LaliMC", "EterNityMC", "ExtremeNetwork"
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm Anish, a hosting specialist and Minecraft server developer with over 2 years of experience 
            leading and managing companies in the web hosting and game hosting industries.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-white">Professional Journey</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative group ${exp.current ? 'current-role' : ''}`}>
                <div className="flex items-start space-x-4 p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-gray-600 transition-colors">
                    {exp.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        {exp.company}
                      </h4>
                      <span className={`text-sm px-3 py-1 rounded-full ${exp.current ? 'bg-emerald-500/20 text-emerald-400' : 'bg-gray-600/50 text-gray-400'}`}>
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-emerald-400 font-medium mb-2">{exp.role}</p>
                    <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
                {exp.current && (
                  <div className="absolute -right-2 -top-2 w-4 h-4 bg-emerald-500 rounded-full animate-pulse"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Minecraft Development */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-white">Minecraft Server Development</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {minecraftServers.map((server, index) => (
              <div key={index} className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 p-4 rounded-lg border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group">
                <div className="text-center">
                  <div className="w-8 h-8 bg-emerald-500 rounded mx-auto mb-2 group-hover:animate-pulse"></div>
                  <span className="text-white font-medium text-sm group-hover:text-emerald-400 transition-colors">{server}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Projects */}
        <div className="text-center bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 p-8 rounded-2xl border border-emerald-500/20">
          <h3 className="text-2xl font-bold mb-4 text-white">Current Focus</h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <h4 className="text-emerald-400 font-semibold mb-2">🚀 Expanding DDoS Protection</h4>
              <p className="text-gray-400">Building comprehensive DDoS protection services across India and Nepal</p>
            </div>
            <div>
              <h4 className="text-cyan-400 font-semibold mb-2">🎮 Token SMP Partnership</h4>
              <p className="text-gray-400">Building the biggest Minecraft server brand with Token SMP</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;