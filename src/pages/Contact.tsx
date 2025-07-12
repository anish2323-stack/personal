import React, { useState } from 'react';
import { Mail, MessageCircle, Linkedin, Github, Send, CheckCircle, Phone, MapPin, Clock, User, Building, Zap } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    serviceType: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', subject: '', message: '', serviceType: '' });
    }, 5000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "anish@powerdownhosting.com",
      description: "Best for detailed inquiries",
      href: "mailto:anish@powerdownhosting.com",
      gradient: "from-emerald-500 to-cyan-500"
    },
    {
      icon: MessageCircle,
      title: "Discord",
      value: "Connect on Discord",
      description: "Real-time support & chat",
      href: "#",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Professional Network",
      description: "Business connections",
      href: "#",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "Code Repository",
      description: "Technical collaboration",
      href: "#",
      gradient: "from-gray-700 to-gray-900"
    }
  ];

  const serviceTypes = [
    "Web Hosting",
    "Game Server Hosting", 
    "DDoS Protection",
    "Cloud Infrastructure",
    "Minecraft Development",
    "Infrastructure Consulting",
    "Custom Solutions",
    "Other"
  ];

  const responseInfo = [
    { icon: Clock, title: "Email Response", time: "Within 24 hours", color: "text-emerald-400" },
    { icon: MessageCircle, title: "Discord Support", time: "Real-time", color: "text-cyan-400" },
    { icon: Phone, title: "Project Consultation", time: "Same day", color: "text-blue-400" },
    { icon: Zap, title: "Emergency Support", time: "Within 1 hour", color: "text-yellow-400" }
  ];

  const officeInfo = [
    { icon: MapPin, title: "Service Areas", value: "India, Nepal & Global" },
    { icon: Clock, title: "Business Hours", value: "24/7 Support Available" },
    { icon: Building, title: "Company", value: "PowerDown Hosting" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss hosting solutions, Minecraft server development, or infrastructure consulting? 
            Let's connect and explore how we can help power your digital success.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Send className="text-emerald-400 mr-3" size={32} />
                  Send a Message
                </h2>
                
                {isSubmitted ? (
                  <div className="bg-emerald-500/20 border border-emerald-500/50 rounded-xl p-8 text-center">
                    <CheckCircle className="mx-auto text-emerald-400 mb-4" size={64} />
                    <h3 className="text-2xl font-bold text-emerald-400 mb-4">Message Sent Successfully!</h3>
                    <p className="text-gray-300 text-lg mb-4">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                    <p className="text-gray-400">
                      For urgent matters, feel free to reach out via Discord for real-time support.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
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
                          Email Address *
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
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                          Company/Organization
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                          placeholder="Your company name"
                        />
                      </div>

                      <div>
                        <label htmlFor="serviceType" className="block text-sm font-medium text-gray-300 mb-2">
                          Service Interest
                        </label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                        >
                          <option value="">Select a service</option>
                          {serviceTypes.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                        placeholder="Brief description of your inquiry"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
                        placeholder="Tell me about your project, hosting needs, or any questions you have..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-4 px-6 rounded-lg font-medium hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                
                <div className="space-y-4 mb-8">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <a 
                        key={index}
                        href={method.href} 
                        className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 group"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${method.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <Icon className="text-white" size={24} />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold group-hover:text-emerald-400 transition-colors">{method.title}</h4>
                          <p className="text-gray-400 text-sm">{method.value}</p>
                          <p className="text-gray-500 text-xs">{method.description}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Response Times */}
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Clock className="text-emerald-400 mr-2" size={24} />
                  Response Times
                </h3>
                <div className="space-y-3">
                  {responseInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Icon className={info.color} size={16} />
                          <span className="text-gray-400 text-sm">{info.title}:</span>
                        </div>
                        <span className={`${info.color} text-sm font-medium`}>{info.time}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Office Information */}
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-4">Business Information</h3>
                <div className="space-y-3">
                  {officeInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <Icon className="text-emerald-400 mt-1" size={16} />
                        <div>
                          <div className="text-gray-400 text-sm">{info.title}</div>
                          <div className="text-white text-sm font-medium">{info.value}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-lg">Quick answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "What hosting services do you offer?",
                answer: "We provide web hosting, game server hosting, DDoS protection, cloud infrastructure, and custom solutions tailored to your needs."
              },
              {
                question: "Do you offer 24/7 support?",
                answer: "Yes, we provide round-the-clock support through multiple channels including email, Discord, and emergency contact for critical issues."
              },
              {
                question: "Can you help with Minecraft server setup?",
                answer: "Absolutely! We specialize in Minecraft server development, custom plugins, optimization, and complete server management solutions."
              },
              {
                question: "What's your uptime guarantee?",
                answer: "We maintain a 99.9% uptime guarantee across all our hosting services with enterprise-grade infrastructure and monitoring."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                <h4 className="text-lg font-semibold text-white mb-3">{faq.question}</h4>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;