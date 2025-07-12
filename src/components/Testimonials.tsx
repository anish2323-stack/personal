import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Youtube } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const creators = [
    {
      name: "SenpaiSpider",
      role: "Content Creator",
      platform: "YouTube",
      avatar: "SS",
      quote: "PowerDown Hosting has been incredible for our server infrastructure. The performance and reliability have exceeded our expectations.",
      gradient: "from-red-500 to-orange-500"
    },
    {
      name: "NotRexy",
      role: "Gaming YouTuber", 
      platform: "YouTube",
      avatar: "NR",
      quote: "Anish and his team provide exceptional hosting services. Our Minecraft server runs smoothly with zero downtime.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      name: "NotSteave",
      role: "Minecraft Creator",
      platform: "YouTube", 
      avatar: "NS",
      quote: "The technical support and server performance from PowerDown Hosting is unmatched. Highly recommended!",
      gradient: "from-green-500 to-teal-500"
    },
    {
      name: "BulkyPlays",
      role: "Gaming Content Creator",
      platform: "YouTube",
      avatar: "BP", 
      quote: "Working with Anish has been a game-changer for our hosting needs. Professional service and great performance.",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % creators.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % creators.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + creators.length) % creators.length);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Creator Collaborations
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proud to support these amazing creators through hosting
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-500">
            <div className="flex items-center mb-6">
              <div className={`w-16 h-16 bg-gradient-to-r ${creators[currentTestimonial].gradient} rounded-full flex items-center justify-center text-white font-bold text-xl mr-4`}>
                {creators[currentTestimonial].avatar}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  {creators[currentTestimonial].name}
                  <Youtube className="text-red-500" size={20} />
                </h3>
                <p className="text-gray-400">{creators[currentTestimonial].role}</p>
              </div>
            </div>
            
            <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 italic">
              "{creators[currentTestimonial].quote}"
            </blockquote>
            
            <div className="flex items-center justify-between">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              
              <div className="flex space-x-2">
                <button 
                  onClick={prevTestimonial}
                  className="w-10 h-10 bg-gray-700 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="text-white" size={20} />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-10 h-10 bg-gray-700 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="text-white" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Creator Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {creators.map((creator, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                index === currentTestimonial 
                  ? 'bg-emerald-500/20 border-emerald-500/50 scale-105' 
                  : 'bg-gray-800/50 border-gray-700/50 hover:border-emerald-500/30'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <div className="text-center">
                <div className={`w-12 h-12 bg-gradient-to-r ${creator.gradient} rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3`}>
                  {creator.avatar}
                </div>
                <h4 className="text-white font-semibold mb-1 flex items-center justify-center gap-1">
                  {creator.name}
                  <Youtube className="text-red-500" size={16} />
                </h4>
                <p className="text-gray-400 text-sm">{creator.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 p-6 bg-gray-800/30 rounded-2xl border border-gray-700/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400 mb-1">500+</div>
              <div className="text-gray-400 text-sm">Happy Clients</div>
            </div>
            <div className="w-px h-8 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-1">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime</div>
            </div>
            <div className="w-px h-8 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">24/7</div>
              <div className="text-gray-400 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;