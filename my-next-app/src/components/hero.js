
'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Coffee, Star, Heart, Zap, ArrowRight, Award, Sparkles } from 'lucide-react';

const BubbleTeaHero = () => {
  const containerRef = useRef(null);
  const heroImageRef = useRef(null);
  const titleRef = useRef(null);
  const leftCardsRef = useRef([]);
  const rightCardsRef = useRef([]);
  const mobileCardsRef = useRef([]);
  const particlesRef = useRef([]);
  const splashesRef = useRef([]);
  const credentialsRef = useRef(null);
  const testimonialRef = useRef(null);
  const ctaRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const drinkCategories = [
    {
      title: "Classic Milk Teas",
      subtitle: "Traditional flavors, modern twist",
      description: "Premium black tea with creamy milk and chewy tapioca pearls. Choose from original, taro, or matcha variations.",
      stats: { value: "50+", label: "Flavor Combos" },
      icon: Coffee,
      specialties: ["Original", "Taro", "Matcha", "Thai"]
    },
    {
      title: "Fruit Tea Blends",
      subtitle: "Fresh fruits meet quality tea",
      description: "Refreshing fruit teas with real fruit pieces, perfect balance of sweet and tangy with popping boba options.",
      stats: { value: "25+", label: "Fresh Fruits" },
      icon: Star,
      specialties: ["Mango", "Strawberry", "Passion Fruit"]
    },
    {
      title: "Premium Specials",
      subtitle: "Signature crafted beverages",
      description: "Our chef's special creations with premium ingredients, brown sugar, cheese foam, and artisanal toppings.",
      stats: { value: "15+", label: "Signature Drinks" },
      icon: Heart,
      specialties: ["Brown Sugar", "Cheese Foam", "Specialty", "Limited"]
    },
    {
      title: "Custom Creations",
      subtitle: "Build your perfect drink",
      description: "Customize sweetness, ice level, and choose from 8+ topping options including tapioca, jelly, and popping boba.",
      stats: { value: "200+", label: "Combinations" },
      icon: Zap,
      specialties: ["Custom Sweet", "Ice Options", "8+ Toppings"]
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Simulate GSAP-like animations with CSS transitions
    const animateElements = () => {
      // Animate particles
      particlesRef.current.forEach((particle, index) => {
        if (particle) {
          particle.style.transition = `all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${index * 0.1}s`;
          particle.style.opacity = '0.8';
          particle.style.transform = 'scale(1) rotate(180deg)';
        }
      });

      // Animate splashes
      splashesRef.current.forEach((splash, index) => {
        if (splash) {
          splash.style.transition = `all 0.6s ease-out ${index * 0.05}s`;
          splash.style.opacity = '0.6';
          splash.style.transform = 'scale(1)';
        }
      });

      // Animate cards
      setTimeout(() => {
        [...leftCardsRef.current, ...rightCardsRef.current, ...mobileCardsRef.current].forEach((card, index) => {
          if (card) {
            card.style.transition = `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.08}s`;
            card.style.opacity = '1';
            card.style.transform = 'translateX(0) translateY(0) rotate(0deg) scale(1)';
          }
        });
      }, 400);
    };

    const timer = setTimeout(animateElements, 100);
    return () => clearTimeout(timer);
  }, []);

  // Continuous floating animations
  useEffect(() => {
    const floatingElements = [...particlesRef.current, heroImageRef.current].filter(Boolean);
    
    floatingElements.forEach((element, index) => {
      if (element) {
        const animate = () => {
          element.style.animation = `float ${3 + index * 0.5}s ease-in-out infinite ${index * 0.2}s`;
        };
        animate();
      }
    });
  }, [isVisible]);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 relative overflow-hidden">
      {/* Neon glowing particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={el => particlesRef.current[0] = el} className="absolute top-20 left-20 w-3 h-3 bg-[#6f837a] rounded-full shadow-[0_0_20px_#6f837a] opacity-0 scale-0"></div>
        <div ref={el => particlesRef.current[1] = el} className="absolute top-40 right-32 w-2 h-2 bg-[#6f837a] rounded-full shadow-[0_0_15px_#6f837a] opacity-0 scale-0"></div>
        <div ref={el => particlesRef.current[2] = el} className="absolute bottom-40 left-40 w-4 h-4 bg-[#6f837a] rounded-full shadow-[0_0_25px_#6f837a] opacity-0 scale-0"></div>
        <div ref={el => particlesRef.current[3] = el} className="absolute bottom-60 right-20 w-2.5 h-2.5 bg-[#6f837a] rounded-full shadow-[0_0_18px_#6f837a] opacity-0 scale-0"></div>
      </div>

      {/* Liquid splash effects */}
      <div className="absolute inset-0">
        <div ref={el => splashesRef.current[0] = el} className="absolute top-32 left-16 w-32 h-2 bg-gradient-to-r from-[#6f837a]/50 to-transparent rounded-full blur-sm opacity-0 scale-0"></div>
        <div ref={el => splashesRef.current[1] = el} className="absolute top-32 left-16 w-2 h-32 bg-gradient-to-b from-[#6f837a]/50 to-transparent rounded-full blur-sm opacity-0 scale-0"></div>
        <div ref={el => splashesRef.current[2] = el} className="absolute bottom-32 right-16 w-32 h-2 bg-gradient-to-l from-[#6f837a]/50 to-transparent rounded-full blur-sm opacity-0 scale-0"></div>
        <div ref={el => splashesRef.current[3] = el} className="absolute bottom-32 right-16 w-2 h-32 bg-gradient-to-t from-[#6f837a]/50 to-transparent rounded-full blur-sm opacity-0 scale-0"></div>
        
        {/* Bubble splash effects */}
        <div ref={el => splashesRef.current[4] = el} className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-[#6f837a]/40 rounded-full opacity-0 scale-0"></div>
        <div ref={el => splashesRef.current[5] = el} className="absolute bottom-1/3 right-1/4 w-12 h-12 border-2 border-[#6f837a]/30 rounded-full opacity-0 scale-0"></div>
      </div>

      {/* Premium badge */}
      <div ref={credentialsRef} className={`absolute top-4 right-4 md:top-8 md:right-8 z-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        {/* <div className="flex items-center space-x-3 md:space-x-6">
          <div className="flex items-center space-x-1 md:space-x-2 text-xs md:text-sm text-gray-300 font-medium">
            <Award className="w-3 h-3 md:w-4 md:h-4 text-[#6f837a] drop-shadow-[0_0_8px_#6f837a]" />
            <span className="hidden sm:inline">Premium Quality</span>
          </div>
          <div className="flex items-center space-x-1 md:space-x-2 text-xs md:text-sm text-gray-300 font-medium">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-[#6f837a] drop-shadow-[0_0_8px_#6f837a]" />
            <span className="hidden sm:inline">Fresh Daily</span>
          </div>
        </div> */}
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 pt-16 md:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Brand Title */}
          <div ref={titleRef} className={`text-center mb-12 md:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="w-20 md:w-32 h-px bg-[#6f837a] shadow-[0_0_10px_#6f837a] mx-auto mb-4 md:mb-6"></div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              Bubble Tea
              <span className="block text-[#6f837a] drop-shadow-[0_0_20px_#6f837a] animate-pulse">
                Paradise
              </span>
            </h1>
          </div>

          {/* Main Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
            
            {/* LEFT CARDS - Hidden on mobile, shows on lg+ */}
            <div className="hidden lg:block lg:col-span-3 space-y-6 xl:space-y-10">
              <div className="space-y-6 xl:space-y-8">
                {drinkCategories.slice(0, 2).map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <div 
                      key={index}
                      ref={el => leftCardsRef.current[index] = el}
                      className="group cursor-pointer opacity-0 -translate-x-20 rotate-[-5deg] scale-95"
                    >
                      <div className="relative p-4 xl:p-6 rounded-2xl bg-gray-900/80 backdrop-blur-sm hover:bg-gray-800/90 transition-all duration-500 border border-gray-700/50 hover:border-[#6f837a]/50 shadow-lg hover:shadow-[#6f837a]/20 hover:shadow-xl group-hover:scale-105 group-hover:-translate-y-2">
                        {/* Neon glow effect */}
                        <div className="absolute inset-0 rounded-2xl bg-[#6f837a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="flex items-start space-x-3 xl:space-x-5 relative z-10">
                          <div className="w-10 h-10 xl:w-12 xl:h-12 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl flex items-center justify-center group-hover:from-[#6f837a]/20 group-hover:to-[#6f837a]/10 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_15px_#6f837a] border border-gray-600 group-hover:border-[#6f837a]/50">
                            <IconComponent className="w-5 h-5 xl:w-6 xl:h-6 text-gray-300 group-hover:text-[#6f837a] transition-colors duration-500" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-base xl:text-lg text-white group-hover:text-[#6f837a] transition-colors duration-300 mb-2">
                              {category.title}
                            </h4>
                            <p className="text-xs xl:text-sm text-gray-400 mb-3 leading-relaxed">{category.subtitle}</p>
                            <div className="flex flex-wrap gap-1 mb-3">
                              {category.specialties.slice(0, 2).map((specialty, idx) => (
                                <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full border border-gray-600 group-hover:border-[#6f837a]/50 group-hover:text-[#6f837a] transition-all duration-300">
                                  {specialty}
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-[#6f837a] font-bold text-base xl:text-lg drop-shadow-[0_0_8px_#6f837a]">{category.stats.value}</span>
                              <ArrowRight className="w-3 h-3 xl:w-4 xl:h-4 text-gray-500 group-hover:text-[#6f837a] group-hover:translate-x-2 transition-all duration-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CENTER - 3D BUBBLE TEA */}
            <div className="lg:col-span-6 flex justify-center relative order-first lg:order-none">
              <div className="relative">
                {/* Neon backdrop glow */}
                <div className="absolute inset-0 bg-gradient-radial from-[#6f837a]/30 via-[#6f837a]/10 to-transparent rounded-full scale-150 blur-3xl animate-pulse"></div>
                
                {/* Main 3D Bubble Tea */}
                <img 
                  
                  src="/images/1.png"
                  alt="Premium Bubble Tea 3D"
                  className="w-[280px] h-[400px] sm:w-[350px] sm:h-[500px] md:w-[420px] md:h-[600px] lg:w-[520px] lg:h-[750px] object-contain mx-auto filter drop-shadow-[0_0_30px_#6f837a] relative z-10"
                />
                
                {/* Orbiting tapioca pearls */}
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="absolute top-20 left-20 w-4 h-4 bg-black rounded-full shadow-[0_0_10px_#6f837a] border border-[#6f837a]/50"></div>
                </div>
                <div className="absolute inset-0 animate-reverse-spin">
                  <div className="absolute bottom-32 right-32 w-3 h-3 bg-black rounded-full shadow-[0_0_8px_#6f837a] border border-[#6f837a]/50"></div>
                </div>
                
                {/* Liquid splash effects around drink */}
                <div className="absolute top-1/4 -left-8 opacity-60">
                  <div className="w-6 h-6 bg-[#6f837a] rounded-full blur-sm animate-bounce shadow-[0_0_15px_#6f837a]"></div>
                </div>
                <div className="absolute bottom-1/3 -right-8 opacity-50">
                  <div className="w-4 h-4 bg-[#6f837a] rounded-full blur-sm animate-bounce shadow-[0_0_12px_#6f837a]" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>
            </div>

            {/* RIGHT CARDS - Hidden on mobile, shows on lg+ */}
            <div className="hidden lg:block lg:col-span-3 space-y-6 xl:space-y-10">
              <div className="space-y-6 xl:space-y-8">
                {drinkCategories.slice(2, 4).map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <div 
                      key={index}
                      ref={el => rightCardsRef.current[index] = el}
                      className="group cursor-pointer opacity-0 translate-x-20 rotate-[5deg] scale-95"
                    >
                      <div className="relative p-4 xl:p-6 rounded-2xl bg-gray-900/80 backdrop-blur-sm hover:bg-gray-800/90 transition-all duration-500 border border-gray-700/50 hover:border-[#6f837a]/50 shadow-lg hover:shadow-[#6f837a]/20 hover:shadow-xl group-hover:scale-105 group-hover:-translate-y-2">
                        {/* Neon glow effect */}
                        <div className="absolute inset-0 rounded-2xl bg-[#6f837a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="flex items-start space-x-3 xl:space-x-5 relative z-10">
                          <div className="w-10 h-10 xl:w-12 xl:h-12 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl flex items-center justify-center group-hover:from-[#6f837a]/20 group-hover:to-[#6f837a]/10 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_15px_#6f837a] border border-gray-600 group-hover:border-[#6f837a]/50">
                            <IconComponent className="w-5 h-5 xl:w-6 xl:h-6 text-gray-300 group-hover:text-[#6f837a] transition-colors duration-500" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-base xl:text-lg text-white group-hover:text-[#6f837a] transition-colors duration-300 mb-2">
                              {category.title}
                            </h4>
                            <p className="text-xs xl:text-sm text-gray-400 mb-3 leading-relaxed">{category.subtitle}</p>
                            <div className="flex flex-wrap gap-1 mb-3">
                              {category.specialties.slice(0, 3).map((specialty, idx) => (
                                <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full border border-gray-600 group-hover:border-[#6f837a]/50 group-hover:text-[#6f837a] transition-all duration-300">
                                  {specialty}
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-[#6f837a] font-bold text-base xl:text-lg drop-shadow-[0_0_8px_#6f837a]">{category.stats.value}</span>
                              <ArrowRight className="w-3 h-3 xl:w-4 xl:h-4 text-gray-500 group-hover:text-[#6f837a] group-hover:translate-x-2 transition-all duration-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Cards - Shows only on mobile/tablet */}
          <div className="lg:hidden mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {drinkCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div 
                    key={index}
                    ref={el => mobileCardsRef.current[index] = el}
                    className="group cursor-pointer opacity-0 translate-y-8 scale-95"
                  >
                    <div className="relative p-4 md:p-6 rounded-2xl bg-gray-900/80 backdrop-blur-sm hover:bg-gray-800/90 transition-all duration-500 border border-gray-700/50 hover:border-[#6f837a]/50 shadow-lg hover:shadow-[#6f837a]/20 hover:shadow-xl group-hover:scale-105 group-hover:-translate-y-2">
                      {/* Neon glow effect */}
                      <div className="absolute inset-0 rounded-2xl bg-[#6f837a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="flex items-start space-x-4 relative z-10">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl flex items-center justify-center group-hover:from-[#6f837a]/20 group-hover:to-[#6f837a]/10 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_15px_#6f837a] border border-gray-600 group-hover:border-[#6f837a]/50 flex-shrink-0">
                          <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-gray-300 group-hover:text-[#6f837a] transition-colors duration-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm md:text-lg text-white group-hover:text-[#6f837a] transition-colors duration-300 mb-1 md:mb-2">
                            {category.title}
                          </h4>
                          <p className="text-xs md:text-sm text-gray-400 mb-3 leading-relaxed">{category.subtitle}</p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {category.specialties.slice(0, 2).map((specialty, idx) => (
                              <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full border border-gray-600 group-hover:border-[#6f837a]/50 group-hover:text-[#6f837a] transition-all duration-300">
                                {specialty}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-[#6f837a] font-bold text-sm md:text-lg drop-shadow-[0_0_8px_#6f837a]">{category.stats.value}</span>
                            <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#6f837a] group-hover:translate-x-2 transition-all duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Testimonial */}
          <div ref={testimonialRef} className={`mt-16 md:mt-20 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center max-w-2xl mx-auto">
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl mx-4 md:mx-0 border border-gray-700/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#6f837a]/5 opacity-50"></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-4 h-4 md:w-5 md:h-5 text-[#6f837a] text-base md:text-lg drop-shadow-[0_0_5px_#6f837a]">★</div>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm md:text-lg text-gray-200 italic mb-4 leading-relaxed">
                    "The bubble tea here is absolutely incredible! Fresh ingredients, perfect sweetness, and the tapioca pearls have the perfect chewy texture. It's become my daily obsession!"
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center border border-[#6f837a]/50 shadow-[0_0_8px_#6f837a]">
                      <span className="text-[#6f837a] font-bold text-xs md:text-sm">SA</span>
                    </div>
                    <div>
                      <p className="font-bold text-sm md:text-base text-white">Sarah Anderson</p>
                      <p className="text-xs md:text-sm text-gray-400">Bubble Tea Enthusiast</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div ref={ctaRef} className={`text-center mt-16 md:mt-20 pb-16 md:pb-20 transition-all duration-1000 delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="space-y-4 md:space-y-6 px-4">
              <button className="group relative bg-gradient-to-r from-gray-800 to-gray-700 text-white px-8 md:px-16 py-4 md:py-5 rounded-full text-base md:text-xl font-bold hover:from-gray-700 hover:to-gray-600 transition-all duration-700 transform hover:scale-105 shadow-xl hover:shadow-[#6f837a]/40 hover:shadow-2xl overflow-hidden border-2 border-[#6f837a]/50 hover:border-[#6f837a]">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6f837a]/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <div className="absolute inset-0 bg-[#6f837a]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative drop-shadow-[0_0_8px_#6f837a] group-hover:text-[#6f837a]">Order Your Perfect Drink</span>
              </button>
              
              <p className="text-gray-300 text-base md:text-lg font-semibold">Crafted fresh daily with premium ingredients</p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 md:space-x-8 text-xs md:text-sm text-gray-400 font-medium mt-4">
                <span className="flex items-center"><span className="text-[#6f837a] mr-2">🧋</span>50+ Flavors</span>
                <span className="flex items-center"><span className="text-[#6f837a] mr-2">✨</span>Fresh Daily</span>
                <span className="flex items-center"><span className="text-[#6f837a] mr-2">🎯</span>Custom Made</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-15px) rotate(2deg); 
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .animate-reverse-spin {
          animation: reverse-spin 15s linear infinite;
        }
      `}</style>
    </div>
  );
};
export default BubbleTeaHero;