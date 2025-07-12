import React from 'react';
import { Server, Cloud, Shield, Gamepad2, Code, Zap, Users, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Web Hosting',
      description: 'Premium web hosting solutions serving 1000+ clients with 99.9% uptime guarantee',
      icon: Server,
      features: ['SSD Storage', 'Free SSL Certificates', '24/7 Support', 'Daily Backups'],
      gradient: 'from-emerald-500 to-green-600',
      popular: false
    },
    {
      title: 'Game Server Hosting',
      description: 'Optimized hosting for 100+ Minecraft servers and gaming communities',
      icon: Gamepad2,
      features: ['DDoS Protection', 'Custom Control Panel', 'Instant Setup', 'Mod Support'],
      gradient: 'from-cyan-500 to-blue-600',
      popular: true
    },
    {
      title: 'UltraVM Hosting',
      description: 'Enterprise-grade virtual machines and cloud infrastructure solutions',
      icon: Cloud,
      features: ['High Performance VMs', 'Scalable Resources', 'Enterprise Support', 'Global Network'],
      gradient: 'from-purple-500 to-indigo-600',
      popular: false
    },
    {
      title: 'DDoS Protection',
      description: 'Enterprise-grade protection for India & Nepal markets',
      icon: Shield,
      features: ['Real-time Monitoring', 'Traffic Filtering', 'Instant Mitigation', 'Analytics Dashboard'],
      gradient: 'from-blue-500 to-purple-600',
      popular: false
    },
    {
      title: 'Minecraft Development',
      description: 'Custom plugin development and server optimization for 100+ servers',
      icon: Code,
      features: ['Custom Plugins', 'Server Optimization', 'Database Design', 'Performance Tuning'],
      gradient: 'from-green-500 to-teal-600',
      popular: false
    },
    {
      title: 'Infrastructure Consulting',
      description: 'Expert guidance for scaling digital infrastructure - 4+ years experience',
      icon: Zap,
      features: ['Architecture Review', 'Performance Optimization', 'Security Audit', 'Migration Planning'],
      gradient: 'from-orange-500 to-red-600',
      popular: false
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We discuss your requirements and analyze your current setup',
      icon: Users
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Custom solution design tailored to your specific needs',
      icon: Code
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Professional setup and configuration of your services',
      icon: Zap
    },
    {
      step: '04',
      title: 'Support',
      description: 'Ongoing monitoring and 24/7 technical support',
      icon: Clock
    }
  ];

  const testimonialStats = [
    { value: '1000+', label: 'Happy Clients' },
    { value: '100+', label: 'Minecraft Servers' },
    { value: '24/7', label: 'Support' },
    { value: '4+', label: 'Years Experience' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Professional Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Comprehensive hosting solutions, infrastructure consulting, and Minecraft development 
            services designed to power your digital success.
          </p>
          <div className="flex justify-center">
            <a 
              href="#services" 
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-medium hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Explore Services</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              What I Offer
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From hosting solutions to custom development, I provide end-to-end services 
              for your digital infrastructure needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="relative group">
                  {service.popular && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-1 rounded-full text-sm font-medium z-10">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="h-full p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/10">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="text-white" size={32} />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-400 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="text-emerald-400 mr-3 flex-shrink-0" size={16} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="w-full bg-gray-700 hover:bg-emerald-500 text-white py-3 rounded-lg font-medium transition-all duration-300 group-hover:bg-emerald-500">
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              How I Work
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A streamlined process designed to deliver exceptional results efficiently and professionally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <Icon className="text-white" size={32} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center border-2 border-emerald-500">
                      <span className="text-emerald-400 font-bold text-sm">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 p-8 md:p-12 rounded-2xl border border-emerald-500/20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Trusted by Industry Leaders</h2>
              <p className="text-gray-300">Numbers that speak for our commitment to excellence</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {testimonialStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss your project requirements and find the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-medium hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight size={20} />
            </a>
            <a 
              href="/portfolio" 
              className="border-2 border-emerald-500 text-emerald-400 px-8 py-4 rounded-lg font-medium hover:bg-emerald-500 hover:text-white transition-all duration-300"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;