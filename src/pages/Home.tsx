import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Server, Code, Shield, Gamepad2, ArrowRight, Play, Users, Trophy, Zap, Mail, Star, Award, Globe, Clock } from 'lucide-react';

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [statsVisible, setStatsVisible] = useState(false);
  
  const roles = [
    "CEO of PowerDown Hosting",
    "Developer of SwaggerCloud", 
    "DDOS Protection Partner in India & Nepal",
    "Minecraft Dev of LavaMC, AnchorMC, MineZillaMC..."
  ];

  const stats = [
    { icon: Users, value: '1000+', label: 'Happy Clients', color: 'text-emerald-400', description: 'Satisfied customers worldwide' },
    { icon: Gamepad2, value: '100+', label: 'Minecraft Clients', color: 'text-cyan-400', description: 'Gaming communities served' },
    { icon: Trophy, value: '4+', label: 'Years Experience', color: 'text-blue-400', description: 'Industry expertise' },
    { icon: Zap, value: '99.9%', label: 'Uptime Guarantee', color: 'text-purple-400', description: 'Reliable infrastructure' },
  ];

  const achievements = [
    { icon: Award, title: 'Industry Leader', description: 'Leading hosting provider in gaming sector' },
    { icon: Globe, title: 'Global Reach', description: 'Serving clients across multiple continents' },
    { icon: Star, title: 'Premium Quality', description: 'Enterprise-grade solutions and support' },
    { icon: Clock, title: '24/7 Support', description: 'Round-the-clock technical assistance' },
  ];

  useEffect(() => {
    const currentText = roles[currentRole];
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (index < currentText.length) {
        setTypedText(currentText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setIsTyping(false);
          setTimeout(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
            setTypedText('');
            setIsTyping(true);
          }, 1000);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentRole]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-transparent to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-emerald-400 rounded-full opacity-30 animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Floating Tech Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <Server className="absolute top-20 left-10 text-emerald-500 opacity-20 animate-pulse" size={40} />
          <Code className="absolute top-40 right-20 text-cyan-500 opacity-20 animate-pulse" style={{ animationDelay: '1s' }} size={35} />
          <Shield className="absolute bottom-40 left-20 text-blue-500 opacity-20 animate-pulse" style={{ animationDelay: '2s' }} size={45} />
          <Gamepad2 className="absolute bottom-20 right-10 text-emerald-400 opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }} size={38} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text animate-fade-in">
              Anish Ghimire
            </h1>
            
            <h2 className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in-delay">
              Hosting Company CEO | Minecraft Developer | Infrastructure Architect
            </h2>
          </div>
          
          <div className="h-20 flex items-center justify-center mb-12">
            <div className="text-lg md:text-xl text-emerald-400 font-medium">
              <span className="inline-block min-w-[400px] text-left">
                {typedText}
                {isTyping && <span className="animate-pulse">|</span>}
              </span>
            </div>
          </div>
          
          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              to="/portfolio" 
              className="group btn-primary text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center space-x-2 hover-lift"
            >
              <span>View My Work</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link 
              to="/contact" 
              className="group border-2 border-emerald-500 text-emerald-400 px-8 py-4 rounded-lg font-medium hover:bg-emerald-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 hover-lift"
            >
              <span>Get In Touch</span>
              <Mail size={20} />
            </Link>
          </div>
          
          {/* Enhanced Service Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { icon: Server, label: 'Hosting', gradient: 'from-emerald-500 to-cyan-500', delay: '0s' },
              { icon: Code, label: 'Development', gradient: 'from-cyan-500 to-blue-500', delay: '0.1s' },
              { icon: Shield, label: 'Security', gradient: 'from-blue-500 to-purple-500', delay: '0.2s' },
              { icon: Gamepad2, label: 'Gaming', gradient: 'from-emerald-500 to-green-500', delay: '0.3s' },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="flex flex-col items-center group cursor-pointer animate-bounce-in" style={{ animationDelay: service.delay }}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center mb-2 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 hover-glow`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{service.label}</span>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center animate-pulse-glow">
            <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section id="stats-section" className="py-20 px-4 bg-gradient-to-r from-gray-800/50 via-gray-900/50 to-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Trusted by Thousands</h2>
            <p className="text-gray-400 text-lg">Building the future of hosting and gaming infrastructure</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className={`text-center group professional-card p-6 rounded-xl ${statsVisible ? 'animate-bounce-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform hover-glow">
                    <Icon className={stat.color} size={32} />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2 stats-counter`}>{stat.value}</div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Achievements Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Why Choose Our Services
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Delivering excellence through innovation, reliability, and unmatched customer support
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className={`text-center group professional-card p-8 rounded-xl hover-lift animate-slide-up stagger-${index + 1}`}>
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform hover-glow">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Projects Preview */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-800/30 via-gray-900/30 to-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg">Powering the next generation of digital experiences</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="group cursor-pointer portfolio-item">
              <div className="h-full p-8 rounded-2xl professional-card">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center hover-glow">
                    <Server className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      PowerDown Hosting
                    </h3>
                    <p className="text-emerald-400">Premium Hosting Solutions</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">
                  Serving over 1000+ clients including active YouTubers with enterprise-grade hosting solutions and 99.9% uptime guarantee.
                </p>
                <div className="flex items-center text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  <span className="mr-2">Learn More</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer portfolio-item">
              <div className="h-full p-8 rounded-2xl professional-card">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center hover-glow">
                    <Gamepad2 className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      Token SMP
                    </h3>
                    <p className="text-cyan-400">Minecraft Server Network</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">
                  Building the biggest Minecraft server brand with innovative gameplay, serving 100+ gaming communities worldwide.
                </p>
                <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <span className="mr-2">Explore Project</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              to="/portfolio" 
              className="inline-flex items-center space-x-2 btn-primary text-white px-8 py-4 rounded-lg font-medium hover-lift"
            >
              <span>View All Projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="professional-card p-8 md:p-12 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Ready to Scale Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join 1000+ satisfied clients who trust us with their hosting needs. 
              Experience enterprise-grade solutions with personal touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="btn-primary text-white px-8 py-4 rounded-lg font-medium hover-lift flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight size={20} />
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-emerald-500 text-emerald-400 px-8 py-4 rounded-lg font-medium hover:bg-emerald-500 hover:text-white transition-all duration-300 hover-lift"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;