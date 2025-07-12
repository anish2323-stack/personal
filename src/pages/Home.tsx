import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Server, Code, Shield, Gamepad2, ArrowRight, Play, Users, Trophy, Zap, Mail, Star, Award, Globe, Clock, TrendingUp, Target, Cpu, Database } from 'lucide-react';

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [statsVisible, setStatsVisible] = useState(false);
  const [counters, setCounters] = useState({
    clients: 0,
    minecraft: 0,
    experience: 0,
    uptime: 0
  });
  
  const roles = [
    "CEO of PowerDown Hosting - Serving 1000+ Clients",
    "Managing Partner at SwaggerCloud Hosting", 
    "DDoS Protection Leader in India & Nepal",
    "Minecraft Developer - 100+ Gaming Communities",
    "4+ Years of Industry Excellence"
  ];

  const stats = [
    { 
      icon: Users, 
      value: '1000+', 
      label: 'Happy Clients', 
      color: 'text-emerald-400', 
      description: 'Satisfied customers worldwide',
      gradient: 'from-emerald-500 to-green-600',
      target: 1000
    },
    { 
      icon: Gamepad2, 
      value: '100+', 
      label: 'Gaming Communities', 
      color: 'text-cyan-400', 
      description: 'Minecraft servers powered',
      gradient: 'from-cyan-500 to-blue-600',
      target: 100
    },
    { 
      icon: Trophy, 
      value: '4+', 
      label: 'Years Experience', 
      color: 'text-blue-400', 
      description: 'Industry expertise',
      gradient: 'from-blue-500 to-purple-600',
      target: 4
    },
    { 
      icon: Zap, 
      value: '99.9%', 
      label: 'Uptime Guarantee', 
      color: 'text-purple-400', 
      description: 'Reliable infrastructure',
      gradient: 'from-purple-500 to-pink-600',
      target: 99.9
    },
  ];

  const achievements = [
    { 
      icon: Award, 
      title: 'Industry Leader', 
      description: 'Leading hosting provider in gaming sector',
      gradient: 'from-yellow-500 to-orange-600',
      stats: '500+ Enterprise Clients'
    },
    { 
      icon: Globe, 
      title: 'Global Reach', 
      description: 'Serving clients across multiple continents',
      gradient: 'from-green-500 to-emerald-600',
      stats: '15+ Countries Served'
    },
    { 
      icon: Star, 
      title: 'Premium Quality', 
      description: 'Enterprise-grade solutions and support',
      gradient: 'from-blue-500 to-cyan-600',
      stats: '99.9% Client Satisfaction'
    },
    { 
      icon: Clock, 
      title: '24/7 Support', 
      description: 'Round-the-clock technical assistance',
      gradient: 'from-purple-500 to-pink-600',
      stats: '<5min Response Time'
    },
  ];

  const services = [
    { 
      icon: Server, 
      label: 'Premium Hosting', 
      gradient: 'from-emerald-500 to-cyan-500', 
      description: 'Enterprise-grade infrastructure',
      features: ['99.9% Uptime', 'DDoS Protection', '24/7 Support']
    },
    { 
      icon: Code, 
      label: 'Custom Development', 
      gradient: 'from-cyan-500 to-blue-500', 
      description: 'Tailored solutions for your needs',
      features: ['Minecraft Plugins', 'Web Applications', 'API Development']
    },
    { 
      icon: Shield, 
      label: 'Security Solutions', 
      gradient: 'from-blue-500 to-purple-500', 
      description: 'Advanced protection systems',
      features: ['DDoS Mitigation', 'Security Audits', 'Monitoring']
    },
    { 
      icon: Gamepad2, 
      label: 'Gaming Infrastructure', 
      gradient: 'from-emerald-500 to-green-500', 
      description: 'Optimized for gaming communities',
      features: ['Low Latency', 'Auto-scaling', 'Game Optimization']
    },
  ];

  const testimonialHighlights = [
    {
      name: "SenpaiSpider",
      role: "YouTube Creator",
      quote: "PowerDown Hosting has been incredible for our server infrastructure.",
      avatar: "SS",
      gradient: "from-red-500 to-orange-500"
    },
    {
      name: "NotRexy", 
      role: "Gaming YouTuber",
      quote: "Exceptional hosting services with zero downtime.",
      avatar: "NR",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      name: "BulkyPlays",
      role: "Content Creator", 
      quote: "Professional service and great performance.",
      avatar: "BP",
      gradient: "from-purple-500 to-pink-500"
    }
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
          }, 1500);
        }, 3000);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, [currentRole]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          // Animate counters
          const duration = 2000;
          const steps = 60;
          const stepDuration = duration / steps;
          
          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            
            setCounters({
              clients: Math.floor(1000 * progress),
              minecraft: Math.floor(100 * progress),
              experience: Math.floor(4 * progress * 10) / 10,
              uptime: Math.floor(99.9 * progress * 10) / 10
            });
            
            if (step >= steps) {
              clearInterval(timer);
              setCounters({
                clients: 1000,
                minecraft: 100,
                experience: 4,
                uptime: 99.9
              });
            }
          }, stepDuration);
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
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 via-transparent to-cyan-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/30 via-transparent to-transparent"></div>
        
        {/* Enhanced Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-40 animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                boxShadow: `0 0 ${10 + Math.random() * 20}px rgba(16, 185, 129, 0.6)`
              }}
            />
          ))}
        </div>
        
        {/* Enhanced Floating Tech Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <Server className="absolute top-20 left-10 text-emerald-500 opacity-30 animate-float-gentle" size={50} />
          <Code className="absolute top-40 right-20 text-cyan-500 opacity-30 animate-float-gentle" style={{ animationDelay: '1s' }} size={45} />
          <Shield className="absolute bottom-40 left-20 text-blue-500 opacity-30 animate-float-gentle" style={{ animationDelay: '2s' }} size={55} />
          <Gamepad2 className="absolute bottom-20 right-10 text-emerald-400 opacity-30 animate-float-gentle" style={{ animationDelay: '0.5s' }} size={48} />
          <Database className="absolute top-1/2 left-5 text-purple-500 opacity-25 animate-float-gentle" style={{ animationDelay: '1.5s' }} size={40} />
          <Cpu className="absolute top-1/3 right-5 text-pink-500 opacity-25 animate-float-gentle" style={{ animationDelay: '2.5s' }} size={42} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-7xl md:text-9xl font-bold mb-8 gradient-text animate-fade-in animate-text-glow">
              Anish Ghimire
            </h1>
            
            <h2 className="text-2xl md:text-3xl mb-12 text-gray-300 animate-fade-in-delay font-medium">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Hosting Company CEO
              </span>
              {" | "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Minecraft Developer
              </span>
              {" | "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Infrastructure Architect
              </span>
            </h2>
          </div>
          
          <div className="h-24 flex items-center justify-center mb-16">
            <div className="text-xl md:text-2xl text-emerald-400 font-medium">
              <span className="inline-block min-w-[600px] text-center font-mono">
                {typedText}
                {isTyping && <span className="animate-pulse text-cyan-400">|</span>}
              </span>
            </div>
          </div>
          
          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Link 
              to="/portfolio" 
              className="group btn-primary text-white px-10 py-5 rounded-xl font-semibold flex items-center justify-center space-x-3 hover-lift text-lg"
            >
              <span>Explore My Work</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
            </Link>
            <Link 
              to="/contact" 
              className="group btn-secondary text-emerald-400 px-10 py-5 rounded-xl font-semibold hover:text-white transition-all duration-300 flex items-center justify-center space-x-3 hover-lift text-lg"
            >
              <span>Start Your Project</span>
              <Mail size={24} />
            </Link>
          </div>
          
          {/* Enhanced Service Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="flex flex-col items-center group cursor-pointer animate-bounce-in hover-tilt" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-4 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-6 cyber-glow shadow-2xl`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {service.label}
                  </h3>
                  <p className="text-gray-400 text-sm text-center mb-3 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                  <div className="space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="text-xs text-emerald-400 text-center">
                        • {feature}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-3 border-emerald-400 rounded-full flex justify-center animate-pulse-glow">
            <div className="w-2 h-4 bg-emerald-400 rounded-full mt-3 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section id="stats-section" className="py-24 px-4 bg-gradient-to-r from-gray-800/60 via-gray-900/60 to-gray-800/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Building the future of hosting and gaming infrastructure with proven results
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className={`text-center group professional-card p-8 rounded-2xl hover-lift ${statsVisible ? 'animate-bounce-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform cyber-glow`}>
                    <Icon className="text-white" size={36} />
                  </div>
                  <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-3 stats-counter neon-glow`}>
                    {stat.label.includes('%') ? `${counters.uptime}%` : 
                     stat.label.includes('Years') ? `${counters.experience}+` :
                     stat.label.includes('Gaming') ? `${counters.minecraft}+` : `${counters.clients}+`}
                  </div>
                  <div className="text-white font-semibold mb-2 text-lg">{stat.label}</div>
                  <div className="text-gray-400">{stat.description}</div>
                </div>
              );
            })}
          </div>

          {/* Client Testimonials Preview */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonialHighlights.map((testimonial, index) => (
              <div key={index} className={`testimonial-card p-6 rounded-xl hover-lift animate-slide-up stagger-${index + 1}`}>
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold mr-4`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                <div className="flex mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Achievements Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Why Choose Our Services
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Delivering excellence through innovation, reliability, and unmatched customer support
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className={`text-center group professional-card p-8 rounded-2xl hover-lift animate-slide-up stagger-${index + 1}`}>
                  <div className={`w-24 h-24 bg-gradient-to-r ${achievement.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform cyber-glow shadow-2xl`}>
                    <Icon className="text-white" size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">{achievement.description}</p>
                  <div className="text-emerald-400 font-semibold text-sm">{achievement.stats}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Projects Preview */}
      <section className="py-24 px-4 bg-gradient-to-r from-gray-800/40 via-gray-900/40 to-gray-800/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-xl">Powering the next generation of digital experiences</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div className="group cursor-pointer portfolio-item">
              <div className="h-full p-10 rounded-3xl professional-card">
                <div className="flex items-center space-x-6 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center cyber-glow">
                    <Server className="text-white" size={36} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      PowerDown Hosting
                    </h3>
                    <p className="text-emerald-400 text-lg">Premium Hosting Solutions</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Serving over 1000+ clients including active YouTubers with enterprise-grade hosting solutions, 
                  99.9% uptime guarantee, and 24/7 premium support.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">1000+</div>
                    <div className="text-gray-400 text-sm">Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">99.9%</div>
                    <div className="text-gray-400 text-sm">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">24/7</div>
                    <div className="text-gray-400 text-sm">Support</div>
                  </div>
                </div>
                <div className="flex items-center text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  <span className="mr-3 font-semibold">Explore Project</span>
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer portfolio-item">
              <div className="h-full p-10 rounded-3xl professional-card">
                <div className="flex items-center space-x-6 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center cyber-glow">
                    <Gamepad2 className="text-white" size={36} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      Gaming Infrastructure
                    </h3>
                    <p className="text-cyan-400 text-lg">Minecraft Server Networks</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Building the biggest Minecraft server brands with innovative gameplay, 
                  serving 100+ gaming communities worldwide with custom solutions.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">100+</div>
                    <div className="text-gray-400 text-sm">Communities</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">8+</div>
                    <div className="text-gray-400 text-sm">Networks</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">Custom</div>
                    <div className="text-gray-400 text-sm">Solutions</div>
                  </div>
                </div>
                <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <span className="mr-3 font-semibold">View Networks</span>
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              to="/portfolio" 
              className="inline-flex items-center space-x-3 btn-primary text-white px-10 py-5 rounded-xl font-semibold hover-lift text-lg"
            >
              <span>View Complete Portfolio</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="professional-card p-12 md:p-16 rounded-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
              Ready to Scale Your Infrastructure?
            </h2>
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
              Join 1000+ satisfied clients who trust us with their hosting needs. 
              Experience enterprise-grade solutions with personal touch and 4+ years of proven expertise.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <TrendingUp className="text-emerald-400 mx-auto mb-3" size={32} />
                <h4 className="text-white font-semibold mb-2">Scalable Solutions</h4>
                <p className="text-gray-400 text-sm">Grow with confidence</p>
              </div>
              <div className="text-center">
                <Target className="text-cyan-400 mx-auto mb-3" size={32} />
                <h4 className="text-white font-semibold mb-2">Targeted Performance</h4>
                <p className="text-gray-400 text-sm">Optimized for your needs</p>
              </div>
              <div className="text-center">
                <Shield className="text-blue-400 mx-auto mb-3" size={32} />
                <h4 className="text-white font-semibold mb-2">Enterprise Security</h4>
                <p className="text-gray-400 text-sm">Bank-level protection</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="btn-primary text-white px-10 py-5 rounded-xl font-semibold hover-lift flex items-center justify-center space-x-3 text-lg"
              >
                <span>Start Your Project Today</span>
                <ArrowRight size={24} />
              </Link>
              <Link 
                to="/services" 
                className="btn-secondary text-emerald-400 px-10 py-5 rounded-xl font-semibold hover:text-white transition-all duration-300 hover-lift text-lg"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;