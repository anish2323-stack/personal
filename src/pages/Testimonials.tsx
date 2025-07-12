import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Youtube, Quote, Users, Trophy, Heart } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const creators = [
    {
      name: "SenpaiSpider",
      role: "Content Creator",
      platform: "YouTube",
      avatar: "SS",
      quote: "PowerDown Hosting has been incredible for our server infrastructure. The performance and reliability have exceeded our expectations. Anish and his team provide exceptional support that keeps our community running smoothly.",
      longQuote: "Working with PowerDown Hosting has been a game-changer for our content creation. The server performance is outstanding, and the technical support is always there when we need it. Anish understands the unique needs of content creators and delivers solutions that actually work.",
      gradient: "from-red-500 to-orange-500",
      subscribers: "50K+",
      serverType: "Minecraft SMP"
    },
    {
      name: "NotRexy",
      role: "Gaming YouTuber", 
      platform: "YouTube",
      avatar: "NR",
      quote: "Anish and his team provide exceptional hosting services. Our Minecraft server runs smoothly with zero downtime. The level of professionalism and technical expertise is exactly what we needed for our growing community.",
      longQuote: "The reliability of PowerDown Hosting is unmatched. We've been running our server for months without any issues. The control panel is intuitive, and the performance optimization they provide has significantly improved our player experience.",
      gradient: "from-blue-500 to-purple-500",
      subscribers: "75K+",
      serverType: "Creative Network"
    },
    {
      name: "NotSteave",
      role: "Minecraft Creator",
      platform: "YouTube", 
      avatar: "NS",
      quote: "The technical support and server performance from PowerDown Hosting is unmatched. Highly recommended! The team goes above and beyond to ensure our server infrastructure meets our content creation needs.",
      longQuote: "PowerDown Hosting has enabled us to focus on content creation instead of worrying about server issues. Their proactive monitoring and instant support response times have been crucial for maintaining our upload schedule and community engagement.",
      gradient: "from-green-500 to-teal-500",
      subscribers: "30K+",
      serverType: "Survival Server"
    },
    {
      name: "BulkyPlays",
      role: "Gaming Content Creator",
      platform: "YouTube",
      avatar: "BP", 
      quote: "Working with Anish has been a game-changer for our hosting needs. Professional service and great performance. The infrastructure they provide has allowed us to scale our community without any technical limitations.",
      longQuote: "The scalability and performance optimization provided by PowerDown Hosting has been essential for our growth. As our community expanded, they seamlessly upgraded our resources and maintained perfect performance throughout.",
      gradient: "from-purple-500 to-pink-500",
      subscribers: "40K+",
      serverType: "Mini-Games Hub"
    }
  ];

  const clientTypes = [
    { type: "YouTube Creators", count: "15+", icon: Youtube, color: "text-red-400" },
    { type: "Gaming Communities", count: "200+", icon: Users, color: "text-blue-400" },
    { type: "Business Clients", count: "150+", icon: Trophy, color: "text-yellow-400" },
    { type: "Minecraft Servers", count: "100+", icon: Heart, color: "text-emerald-400" },
  ];

  const testimonialStats = [
    { value: '500+', label: 'Happy Clients', description: 'Satisfied customers worldwide' },
    { value: '99.9%', label: 'Uptime', description: 'Guaranteed service availability' },
    { value: '24/7', label: 'Support', description: 'Round-the-clock assistance' },
    { value: '<5min', label: 'Response Time', description: 'Average support response' }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % creators.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => (prev + 1) % creators.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => (prev - 1 + creators.length) % creators.length);
  };

  const selectTestimonial = (index) => {
    setIsAutoPlaying(false);
    setCurrentTestimonial(index);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Client Testimonials
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hear from the amazing creators and businesses who trust PowerDown Hosting 
            for their infrastructure needs and digital success.
          </p>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-500">
              {/* Quote Icon */}
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Quote className="text-white" size={24} />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8 mb-8">
                <div className="flex items-center space-x-4">
                  <div className={`w-20 h-20 bg-gradient-to-r ${creators[currentTestimonial].gradient} rounded-full flex items-center justify-center text-white font-bold text-2xl`}>
                    {creators[currentTestimonial].avatar}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                      {creators[currentTestimonial].name}
                      <Youtube className="text-red-500" size={24} />
                    </h3>
                    <p className="text-gray-400 text-lg">{creators[currentTestimonial].role}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-emerald-400 text-sm">{creators[currentTestimonial].subscribers} subscribers</span>
                      <span className="text-cyan-400 text-sm">{creators[currentTestimonial].serverType}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 italic">
                "{creators[currentTestimonial].longQuote}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={24} />
                  ))}
                </div>
                
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={prevTestimonial}
                    className="w-12 h-12 bg-gray-700 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-colors group"
                  >
                    <ChevronLeft className="text-white group-hover:scale-110 transition-transform" size={20} />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="w-12 h-12 bg-gray-700 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-colors group"
                  >
                    <ChevronRight className="text-white group-hover:scale-110 transition-transform" size={20} />
                  </button>
                </div>
              </div>

              {/* Progress Indicators */}
              <div className="flex justify-center space-x-2 mt-8">
                {creators.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => selectTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-emerald-500 scale-125' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Grid */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Trusted by Amazing Creators
            </h2>
            <p className="text-gray-400 text-lg">Supporting content creators and their communities worldwide</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {creators.map((creator, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer group ${
                  index === currentTestimonial 
                    ? 'bg-emerald-500/20 border-emerald-500/50 scale-105' 
                    : 'bg-gray-800/50 border-gray-700/50 hover:border-emerald-500/30 hover:scale-102'
                }`}
                onClick={() => selectTestimonial(index)}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${creator.gradient} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                    {creator.avatar}
                  </div>
                  <h4 className="text-white font-semibold mb-1 flex items-center justify-center gap-1 group-hover:text-emerald-400 transition-colors">
                    {creator.name}
                    <Youtube className="text-red-500" size={16} />
                  </h4>
                  <p className="text-gray-400 text-sm mb-2">{creator.role}</p>
                  <p className="text-emerald-400 text-xs">{creator.subscribers}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Client Types */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clientTypes.map((client, index) => {
              const Icon = client.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className={client.color} size={28} />
                  </div>
                  <div className={`text-2xl font-bold ${client.color} mb-1`}>{client.count}</div>
                  <div className="text-gray-400 text-sm">{client.type}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Service Excellence</h2>
            <p className="text-gray-400 text-lg">Numbers that reflect our commitment to outstanding service</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {testimonialStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 p-8 md:p-12 rounded-2xl border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-4 text-white">Join Our Success Stories</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Ready to experience the same level of service and support that our clients rave about? 
              Let's discuss how we can help power your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-medium hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300"
              >
                Get Started Today
              </a>
              <a 
                href="/services" 
                className="border-2 border-emerald-500 text-emerald-400 px-8 py-3 rounded-lg font-medium hover:bg-emerald-500 hover:text-white transition-all duration-300"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;