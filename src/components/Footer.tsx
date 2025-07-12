import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Code, Server } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    company: [
      { label: 'About', path: '/about' },
      { label: 'Services', path: '/services' },
      { label: 'Portfolio', path: '/portfolio' },
      { label: 'Experience', path: '/experience' }
    ],
    services: [
      { label: 'Web Hosting', path: '/services' },
      { label: 'Game Hosting', path: '/services' },
      { label: 'DDoS Protection', path: '/services' },
      { label: 'Consulting', path: '/services' }
    ],
    connect: [
      { label: 'Contact', path: '/contact' },
      { label: 'Testimonials', path: '/testimonials' },
      { label: 'Discord', path: '#' },
      { label: 'LinkedIn', path: '#' }
    ]
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                Anish Ghimire
              </h3>
            </Link>
            <p className="text-gray-400 mb-4">
              Hosting Company CEO, Minecraft Developer, and Infrastructure Architect
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
                <Server size={16} className="text-white" />
              </div>
              <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center">
                <Code size={16} className="text-white" />
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="hover:text-emerald-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="hover:text-emerald-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.connect.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="hover:text-emerald-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0 flex items-center space-x-2">
              <span>© 2025 Anish Ghimire. Made with</span>
              <Heart className="text-red-500 fill-current" size={16} />
              <span>for the tech community</span>
            </div>
            
            <div className="flex items-center space-x-6 text-gray-400">
              <span className="text-sm">Serving 500+ clients worldwide</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Online</span>
              </div>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-30"></div>
      </div>
    </footer>
  );
};

export default Footer;