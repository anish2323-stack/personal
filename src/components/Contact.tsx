import React, { useState } from 'react';
import { Mail, MessageCircle, Linkedin, Github, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss hosting solutions or Minecraft server development? Let's connect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            {isSubmitted ? (
              <div className="bg-emerald-500/20 border border-emerald-500/50 rounded-xl p-8 text-center">
                <CheckCircle className="mx-auto text-emerald-400 mb-4" size={48} />
                <h4 className="text-xl font-bold text-emerald-400 mb-2">Message Sent!</h4>
                <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
                    placeholder="Tell me about your project or hosting needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-medium hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
            
            <div className="space-y-6">
              <a 
                href="mailto:anish@powerdownhosting.com" 
                className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold group-hover:text-emerald-400 transition-colors">Email</h4>
                  <p className="text-gray-400">anish@powerdownhosting.com</p>
                </div>
              </a>

              <a 
                href="#" 
                className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold group-hover:text-emerald-400 transition-colors">Discord</h4>
                  <p className="text-gray-400">Connect on Discord</p>
                </div>
              </a>

              <a 
                href="#" 
                className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold group-hover:text-emerald-400 transition-colors">LinkedIn</h4>
                  <p className="text-gray-400">Professional Network</p>
                </div>
              </a>

              <a 
                href="#" 
                className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Github className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold group-hover:text-emerald-400 transition-colors">GitHub</h4>
                  <p className="text-gray-400">Code Repository</p>
                </div>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 p-6 rounded-xl border border-emerald-500/20">
              <h4 className="text-white font-semibold mb-4">Quick Response</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Email Response:</span>
                  <span className="text-emerald-400">Within 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Discord Support:</span>
                  <span className="text-cyan-400">Real-time</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Project Consultation:</span>
                  <span className="text-blue-400">Same day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;