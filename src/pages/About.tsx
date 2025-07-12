import React from 'react';
import { Calendar, MapPin, Users, Trophy, Code, Server, Shield, Gamepad2, Heart, Star, Award, Target, Zap, Globe } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Server Management', level: 98, icon: Server, color: 'emerald' },
    { name: 'Minecraft Development', level: 95, icon: Gamepad2, color: 'cyan' },
    { name: 'DDoS Protection', level: 92, icon: Shield, color: 'blue' },
    { name: 'Infrastructure Design', level: 96, icon: Code, color: 'purple' },
    { name: 'Cloud Architecture', level: 94, icon: Globe, color: 'green' },
    { name: 'Performance Optimization', level: 97, icon: Zap, color: 'yellow' },
  ];

  const achievements = [
    { title: 'Founded PowerDown Hosting', description: 'Built from ground up to serve 1000+ clients', icon: Trophy, color: 'text-yellow-400' },
    { title: 'YouTube Creator Support', description: 'Hosting infrastructure for major content creators', icon: Star, color: 'text-red-400' },
    { title: 'DDoS Protection Leader', description: 'Expanding services across India & Nepal', icon: Shield, color: 'text-blue-400' },
    { title: 'Minecraft Innovation', description: 'Developed 12+ successful server networks', icon: Gamepad2, color: 'text-green-400' },
    { title: 'Industry Recognition', description: '4+ years of excellence in hosting industry', icon: Award, color: 'text-purple-400' },
    { title: 'Global Expansion', description: 'Serving clients across multiple continents', icon: Globe, color: 'text-cyan-400' },
  ];

  const values = [
    { title: 'Innovation', description: 'Constantly pushing the boundaries of hosting technology', icon: Code },
    { title: 'Reliability', description: '99.9% uptime guarantee with enterprise-grade infrastructure', icon: Server },
    { title: 'Community', description: 'Building lasting relationships with clients and creators', icon: Users },
    { title: 'Excellence', description: 'Delivering premium quality in every project and service', icon: Trophy },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            About Anish Ghimire
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
            A passionate hosting specialist and Minecraft developer with over 4 years of experience 
            leading and managing companies in the web hosting and game hosting industries.
          </p>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="professional-card rounded-2xl p-8 md:p-12 hover-lift">
            <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
              <Heart className="text-red-500 mr-3" size={32} />
              My Journey
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
              <p>
                My journey in the hosting industry began over 4 years ago with a simple passion for technology and gaming. 
                What started as curiosity about how Minecraft servers work evolved into a deep understanding 
                of infrastructure, networking, and the critical importance of reliable hosting services.
              </p>
              <p>
                Through founding and leading multiple hosting companies, I've learned that success isn't 
                just about technical expertise—it's about understanding client needs, building trust, and 
                delivering consistent value. With over 1000+ satisfied clients, every project teaches me something new, and every client 
                relationship strengthens my commitment to excellence.
              </p>
              <p>
                Today, I'm proud to serve over 1000+ clients through PowerDown Hosting, support amazing 
                YouTube creators, and contribute to the gaming community through innovative Minecraft 
                server development with 100+ gaming communities. The future holds even more exciting possibilities as we expand our 
                DDoS protection services and continue building the Token SMP brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-800/30 via-gray-900/30 to-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
            Core Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className={`professional-card rounded-xl p-6 hover-lift animate-slide-up stagger-${(index % 6) + 1}`}>
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-600 rounded-lg flex items-center justify-center mr-4`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex-grow bg-gray-700 rounded-full h-2 mr-4">
                          <div 
                            className={`bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-400 h-2 rounded-full transition-all duration-1000 animate-gradient-shift`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <span className={`text-${skill.color}-400 font-semibold`}>{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className={`group animate-bounce-in stagger-${(index % 6) + 1}`}>
                  <div className="flex items-start space-x-4 p-6 rounded-xl professional-card hover-lift">
                    <div className="flex-shrink-0">
                      <Icon className={`${achievement.color} group-hover:scale-110 transition-transform`} size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-800/30 via-gray-900/30 to-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
            Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className={`text-center group animate-slide-up stagger-${index + 1}`}>
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform hover-glow">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="professional-card p-8 md:p-12 rounded-2xl hover-lift">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Let's Build Something Amazing</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Ready to discuss your hosting needs or explore collaboration opportunities? 
              I'm always excited to work on innovative projects with my 4+ years of experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="btn-primary text-white px-8 py-4 rounded-lg font-medium hover-lift"
              >
                Get In Touch
              </a>
              <a 
                href="/portfolio" 
                className="border-2 border-emerald-500 text-emerald-400 px-8 py-4 rounded-lg font-medium hover:bg-emerald-500 hover:text-white transition-all duration-300 hover-lift"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;