'use client';
import React from 'react';
import { Coffee, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Clock, Award, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const menuCategories = [
    { name: 'Classic Milk Teas', items: ['Original', 'Taro', 'Matcha', 'Thai'] },
    { name: 'Fruit Teas', items: ['Mango', 'Strawberry', 'Passion Fruit', 'Lychee'] },
    { name: 'Specialties', items: ['Brown Sugar', 'Cheese Foam', 'Oolong', 'Jasmine'] }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-950 via-black to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-3 h-3 bg-[#6f837a] rounded-full shadow-[0_0_20px_#6f837a] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-40 right-32 w-2 h-2 bg-[#6f837a] rounded-full shadow-[0_0_15px_#6f837a] opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-1 bg-gradient-to-r from-[#6f837a]/20 to-transparent rounded-full blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12  rounded-xl flex items-center justify-center shadow-[0_0_20px_#6f837a] border border-[#6f837a]/50">
                <img src="/images/4.png" alt="Logo" className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white">
                  REPUBLIK
                  <span className="block text-[#6f837a] text-base leading-none drop-shadow-[0_0_8px_#6f837a]">
                    immersive experience
                  </span>
                </h3>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Crafting premium bubble tea with fresh ingredients and authentic flavors. Your perfect drink awaits!
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-[#6f837a]" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-[#6f837a]" />
                <span>Fresh Daily</span>
              </div>
            </div>
          </div>

          {/* Menu Categories */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold text-white mb-6 flex items-center">
              <Coffee className="w-5 h-5 text-[#6f837a] mr-2 drop-shadow-[0_0_8px_#6f837a]" />
              Our Menu
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {menuCategories.map((category, index) => (
                <div key={index}>
                  <h5 className="font-semibold text-[#6f837a] mb-3 text-sm drop-shadow-[0_0_5px_#6f837a]">
                    {category.name}
                  </h5>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx}>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center">
              <Phone className="w-5 h-5 text-[#6f837a] mr-2 drop-shadow-[0_0_8px_#6f837a]" />
              Contact & Hours
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#6f837a] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">Visit Us</p>
                  <p className="text-gray-400 text-sm">Bostanlı mahallesi, cengiz kocatoros sokak, No55/a , karşıyaka İzmir</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#6f837a] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">Call Us</p>
                  <p className="text-gray-400 text-sm">+90 531 990 26 69</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-[#6f837a] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">Hours</p>
                  <p className="text-gray-400 text-sm">
                    Mon-Thu: 10AM-9PM<br />
                    Fri-Sat: 10AM-10PM<br />
                    Sun: 11AM-8PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Newsletter */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm font-medium">Follow Us:</span>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-[#6f837a] hover:bg-gray-700 hover:shadow-[0_0_15px_#6f837a] transition-all duration-300 border border-gray-700 hover:border-[#6f837a]/50"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Newsletter Signup */}
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-[#6f837a]" />
              <span className="text-gray-400 text-sm">Get updates:</span>
              <div className="flex">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-gray-800 border border-gray-700 rounded-l-full px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#6f837a] transition-colors duration-300 w-40"
                />
                <button className="bg-gradient-to-r from-[#6f837a] to-[#5a6b61] text-white px-4 py-2 rounded-r-full text-sm font-medium hover:shadow-[0_0_15px_#6f837a] transition-all duration-300">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-sm text-gray-500">
            <p>© {currentYear} REPUBLIK. All rights reserved.</p>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-[#6f837a] transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-[#6f837a] transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-[#6f837a] transition-colors duration-300">Nutrition Info</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;