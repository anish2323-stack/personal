import React, { useState, useEffect } from 'react';
import { Server, Code, Shield, Gamepad2 } from 'lucide-react';

const Header = () => {
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "CEO of PowerDown Hosting",
    "Developer of SwaggerCloud", 
    "DDOS Protection Partner in India & Nepal",
    "Minecraft Dev of LavaMC, AnchorMC, MineZillaMC..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative min-h-screen flex items-center justify-center text-center px-4">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23059669%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* Server Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <Server className="absolute top-20 left-10 text-emerald-500 opacity-20 animate-pulse" size={40} />
        <Code className="absolute top-40 right-20 text-cyan-500 opacity-20 animate-pulse delay-1000" size={35} />
        <Shield className="absolute bottom-40 left-20 text-blue-500 opacity-20 animate-pulse delay-2000" size={45} />
        <Gamepad2 className="absolute bottom-20 right-10 text-emerald-400 opacity-20 animate-pulse delay-500" size={38} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-fade-in">
          Anish Ghimire
        </h1>
        
        <h2 className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in-delay">
          Hosting Company CEO | Minecraft Developer | Infrastructure Architect
        </h2>
        
        <div className="h-16 flex items-center justify-center">
          <p className="text-lg md:text-xl text-emerald-400 font-medium animate-slide-up">
            {roles[currentRole]}
          </p>
        </div>
        
        <div className="mt-12 flex justify-center space-x-8">
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center mb-2 transform transition-transform group-hover:scale-110 group-hover:rotate-3">
              <Server className="text-white" size={28} />
            </div>
            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">Hosting</span>
          </div>
          
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-2 transform transition-transform group-hover:scale-110 group-hover:rotate-3">
              <Code className="text-white" size={28} />
            </div>
            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">Development</span>
          </div>
          
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-2 transform transition-transform group-hover:scale-110 group-hover:rotate-3">
              <Shield className="text-white" size={28} />
            </div>
            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">Security</span>
          </div>
          
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center mb-2 transform transition-transform group-hover:scale-110 group-hover:rotate-3">
              <Gamepad2 className="text-white" size={28} />
            </div>
            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">Gaming</span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;