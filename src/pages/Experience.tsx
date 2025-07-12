import React from 'react';
import { Calendar, MapPin, Users, Trophy, Building, Code, Server, Gamepad2, ArrowRight, Clock, Shield } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "PowerDown Hosting",
      role: "CEO & Founder",
      period: "Dec 2024 - Present",
      duration: "Current",
      description: "Founded and leading PowerDown Hosting, serving hundreds of clients including active YouTubers. Built the company from ground up with focus on premium hosting solutions and exceptional customer service.",
      achievements: [
        "Grew client base to 500+ active users",
        "Achieved 99.9% uptime across all services",
        "Established partnerships with major content creators",
        "Implemented enterprise-grade DDoS protection"
      ],
      icon: Trophy,
      color: "text-yellow-400",
      gradient: "from-yellow-500 to-orange-500",
      current: true,
      type: "leadership"
    },
    {
      company: "SwaggerCloud Hosting",
      role: "Managing Partner",
      period: "2024 - Present", 
      duration: "Current",
      description: "Currently managing SwaggerCloud Hosting operations, partnering with UltraVM for enterprise solutions. Focus on scalable cloud infrastructure and business-grade hosting services.",
      achievements: [
        "Established UltraVM partnership",
        "Developed enterprise client solutions",
        "Implemented advanced cloud infrastructure",
        "Created scalable hosting architectures"
      ],
      icon: Users,
      color: "text-blue-400",
      gradient: "from-blue-500 to-cyan-500",
      current: true,
      type: "management"
    },
    {
      company: "FusionOX Hosting",
      role: "Tech & Development Lead",
      period: "2024",
      duration: "6 months",
      description: "Led technical development and infrastructure optimization for hosting services. Focused on performance improvements and system architecture design.",
      achievements: [
        "Optimized server performance by 40%",
        "Implemented automated deployment systems",
        "Designed scalable infrastructure architecture",
        "Led development team of 5 engineers"
      ],
      icon: Code,
      color: "text-emerald-400",
      gradient: "from-emerald-500 to-green-500",
      current: false,
      type: "technical"
    },
    {
      company: "PeakNodes",
      role: "CEO",
      period: "2024",
      duration: "3 months",
      description: "Managed hosting operations and client relationships. Gained valuable experience in business operations and customer service excellence.",
      achievements: [
        "Streamlined customer support processes",
        "Improved client satisfaction ratings",
        "Implemented new billing systems",
        "Expanded service offerings"
      ],
      icon: Building,
      color: "text-cyan-400",
      gradient: "from-cyan-500 to-blue-500",
      current: false,
      type: "leadership"
    },
    {
      company: "Anchor Hosting",
      role: "CEO & Founder",
      period: "2023",
      duration: "Foundation Period",
      description: "First venture into the hosting industry, foundation of expertise. Learned fundamental business operations and technical infrastructure management.",
      achievements: [
        "Established first hosting company",
        "Built initial client base",
        "Learned industry fundamentals",
        "Developed core technical skills"
      ],
      icon: Calendar,
      color: "text-purple-400",
      gradient: "from-purple-500 to-pink-500",
      current: false,
      type: "foundation"
    }
  ];

  const minecraftProjects = [
    { name: "LavaMC", role: "Lead Developer", status: "Active", players: "2000+" },
    { name: "AnchorMC", role: "Founder & Developer", status: "Legacy", players: "1500+" },
    { name: "FusionMC", role: "Technical Lead", status: "Active", players: "1800+" },
    { name: "MineZillaMC", role: "Developer", status: "Active", players: "1200+" },
    { name: "NepiZMC", role: "Consultant", status: "Active", players: "800+" },
    { name: "LaliMC", role: "Developer", status: "Legacy", players: "600+" },
    { name: "EterNityMC", role: "Technical Advisor", status: "Active", players: "1000+" },
    { name: "ExtremeNetwork", role: "Infrastructure Lead", status: "Active", players: "2500+" }
  ];

  const skills = [
    { category: "Leadership", items: ["Team Management", "Strategic Planning", "Business Development", "Client Relations"] },
    { category: "Technical", items: ["Server Administration", "Infrastructure Design", "Performance Optimization", "Security Implementation"] },
    { category: "Development", items: ["Minecraft Plugins", "Custom Solutions", "Database Design", "API Development"] },
    { category: "Operations", items: ["24/7 Support", "Monitoring Systems", "Backup Solutions", "Disaster Recovery"] }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Professional Experience
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive journey through my career in hosting, infrastructure management, 
            and Minecraft server development spanning over 2 years of industry experience.
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Career Timeline</h2>
            <p className="text-gray-400 text-lg">From startup founder to industry leader</p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative group ${exp.current ? 'current-role' : ''}`}>
                <div className="flex flex-col lg:flex-row items-start space-y-4 lg:space-y-0 lg:space-x-6 p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-[1.01]">
                  
                  {/* Icon and Timeline */}
                  <div className="flex-shrink-0 relative">
                    <div className={`w-16 h-16 bg-gradient-to-r ${exp.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <exp.icon className="text-white" size={28} />
                    </div>
                    {exp.current && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full animate-pulse flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                          {exp.company}
                        </h3>
                        <p className="text-emerald-400 font-semibold text-lg">{exp.role}</p>
                      </div>
                      <div className="flex flex-col lg:items-end mt-2 lg:mt-0">
                        <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                          exp.current 
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                            : 'bg-gray-600/50 text-gray-400'
                        }`}>
                          {exp.period}
                        </span>
                        <span className="text-gray-500 text-sm mt-1">{exp.duration}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-6">{exp.description}</p>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <Trophy className="text-yellow-400 mr-2" size={16} />
                        Key Achievements
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start text-gray-400">
                            <ArrowRight className="text-emerald-400 mr-2 mt-1 flex-shrink-0" size={14} />
                            <span className="text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Minecraft Projects */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Minecraft Development Portfolio
            </h2>
            <p className="text-gray-400 text-lg">Server networks and communities I've helped build and maintain</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {minecraftProjects.map((project, index) => (
              <div key={index} className="group">
                <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center group-hover:animate-pulse">
                      <Gamepad2 className="text-white" size={20} />
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Active' 
                        ? 'bg-emerald-500/20 text-emerald-400' 
                        : 'bg-gray-600/50 text-gray-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-emerald-400 text-sm mb-3">{project.role}</p>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Users size={14} className="mr-1" />
                    <span>{project.players} players</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Core Competencies</h2>
            <p className="text-gray-400 text-lg">Skills developed through hands-on experience and continuous learning</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="group">
                <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-gray-400 text-sm flex items-center">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 flex-shrink-0"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 p-8 md:p-12 rounded-2xl border border-emerald-500/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white">Current Focus & Future Goals</h2>
              <p className="text-gray-300">What I'm working on now and where I'm heading next</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-emerald-400 mb-2">Expanding DDoS Protection</h3>
                <p className="text-gray-400">Building comprehensive DDoS protection services across India and Nepal markets</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Gamepad2 className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">Token SMP Growth</h3>
                <p className="text-gray-400">Scaling Token SMP to become the biggest Minecraft server brand globally</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;