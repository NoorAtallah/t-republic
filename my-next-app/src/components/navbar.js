'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee, Star, Heart, Phone } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Menu', href: '#menu', icon: Coffee },
    { name: 'Specials', href: '#specials', icon: Star },
    { name: 'About', href: '#about', icon: Heart },
    { name: 'Contact', href: '#contact', icon: Phone }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-lg shadow-xl border-b border-[#6f837a]/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 md:w-12 md:h-12  rounded-xl flex items-center justify-center shadow-[0_0_20px_#6f837a] border border-[#6f837a]/50">
              <img src="/images/4.png" alt="Logo" className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-black text-white">
                REPUBLIK
                <span className="block text-[#6f837a] text-sm md:text-base leading-none drop-shadow-[0_0_8px_#6f837a]">
                 Immersive Experience
                </span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  className="group flex items-center space-x-2 text-gray-300 hover:text-[#6f837a] transition-all duration-300 font-medium"
                >
                  <IconComponent className="w-4 h-4 group-hover:drop-shadow-[0_0_8px_#6f837a] transition-all duration-300" />
                  <span className="group-hover:drop-shadow-[0_0_8px_#6f837a]">{item.name}</span>
                </a>
              );
            })}
          </div>

          {/* Order Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="hidden sm:block bg-gradient-to-r from-[#6f837a] to-[#5a6b61] text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-bold hover:shadow-[0_0_20px_#6f837a] transition-all duration-300 transform hover:scale-105 text-sm md:text-base">
              Order Now
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-gray-300 hover:text-[#6f837a] transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-gray-900/95 backdrop-blur-lg border-t border-[#6f837a]/20">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 text-gray-300 hover:text-[#6f837a] transition-all duration-300 font-medium py-2"
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{item.name}</span>
                </a>
              );
            })}
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="w-full bg-gradient-to-r from-[#6f837a] to-[#5a6b61] text-white px-6 py-3 rounded-full font-bold hover:shadow-[0_0_20px_#6f837a] transition-all duration-300 mt-4"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;