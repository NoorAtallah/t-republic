'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Star, Heart, Zap, Award, Users, Sparkles, ArrowRight, Globe, Coffee, Droplets } from 'lucide-react';

const TRepublikBrandStory = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);
  const centerContentRef = useRef(null);
  const valuesRef = useRef([]);
  const particlesRef = useRef([]);
  const splashesRef = useRef([]);
  const statsRef = useRef([]);
  const [isVisible, setIsVisible] = useState(false);
  const [activeValue, setActiveValue] = useState(0);

  const brandValues = [
    {
      id: 1,
      title: "Creativity",
      subtitle: "Innovative flavor combinations",
      description: "We push boundaries with unique recipes that blend traditional Asian techniques with modern Turkish tastes, creating beverages you won't find anywhere else.",
      icon: Sparkles,
      image: "/api/placeholder/400/300",
      color: "#6f837a",
      stats: { value: "50+", label: "Unique Recipes" }
    },
    {
      id: 2,
      title: "Customer-Centered",
      subtitle: "Your experience matters most",
      description: "Every decision we make starts with you. From customizable sweetness levels to dietary preferences, we craft each drink exactly how you want it.",
      icon: Heart,
      image: "/api/placeholder/400/300",
      color: "#7a6f83",
      stats: { value: "98%", label: "Happy Customers" }
    },
    {
      id: 3,
      title: "Happiness",
      subtitle: "Spreading joy, one sip at a time",
      description: "Our mission goes beyond serving drinks. We create moments of pure joy and connection, making every visit a celebration of flavor and friendship.",
      icon: Star,
      image: "/api/placeholder/400/300",
      color: "#83756f",
      stats: { value: "24/7", label: "Smile Guarantee" }
    }
  ];

  const achievements = [
    { icon: Award, value: "Premium", label: "Quality Standard", color: "#6f837a" },
    { icon: Users, value: "10K+", label: "Community Members", color: "#7a6f83" },
    { icon: Globe, value: "Turkey", label: "Proudly Local", color: "#83756f" },
    { icon: Zap, value: "New", label: "Innovation Daily", color: "#6f7a83" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate particles
          setTimeout(() => {
            particlesRef.current.forEach((particle, index) => {
              if (particle) {
                particle.style.transition = `all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${index * 0.15}s`;
                particle.style.opacity = '0.8';
                particle.style.transform = 'scale(1) rotate(360deg)';
              }
            });
          }, 200);

          // Animate splashes
          setTimeout(() => {
            splashesRef.current.forEach((splash, index) => {
              if (splash) {
                splash.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
                splash.style.opacity = '0.6';
                splash.style.transform = 'scale(1)';
              }
            });
          }, 400);

          // Animate images
          setTimeout(() => {
            if (leftImageRef.current) {
              leftImageRef.current.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
              leftImageRef.current.style.opacity = '1';
              leftImageRef.current.style.transform = 'translateX(0) rotate(0deg) scale(1)';
            }
            if (rightImageRef.current) {
              rightImageRef.current.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s';
              rightImageRef.current.style.opacity = '1';
              rightImageRef.current.style.transform = 'translateX(0) rotate(0deg) scale(1)';
            }
          }, 600);

          // Animate values
          setTimeout(() => {
            valuesRef.current.forEach((value, index) => {
              if (value) {
                value.style.transition = `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.1}s`;
                value.style.opacity = '1';
                value.style.transform = 'translateY(0) scale(1)';
              }
            });
          }, 800);

          // Animate stats
          setTimeout(() => {
            statsRef.current.forEach((stat, index) => {
              if (stat) {
                stat.style.transition = `all 0.5s ease-out ${index * 0.08}s`;
                stat.style.opacity = '1';
                stat.style.transform = 'translateY(0) scale(1)';
              }
            });
          }, 1000);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate active value
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue(prev => (prev + 1) % brandValues.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [brandValues.length]); // Fixed: Added missing dependency

  // Floating animations
  useEffect(() => {
    if (isVisible) {
      const floatingElements = [leftImageRef.current, rightImageRef.current].filter(Boolean);
      
      floatingElements.forEach((element, index) => {
        if (element) {
          element.style.animation = `float ${4 + index * 0.5}s ease-in-out infinite ${index * 0.3}s`;
        }
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 relative overflow-hidden py-20">
      
      {/* Neon glowing particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={el => particlesRef.current[0] = el} className="absolute top-32 left-16 w-4 h-4 bg-[#6f837a] rounded-full shadow-[0_0_25px_#6f837a] opacity-0 scale-0"></div>
        <div ref={el => particlesRef.current[1] = el} className="absolute top-60 right-20 w-3 h-3 bg-[#7a6f83] rounded-full shadow-[0_0_20px_#7a6f83] opacity-0 scale-0"></div>
        <div ref={el => particlesRef.current[2] = el} className="absolute bottom-40 left-32 w-5 h-5 bg-[#83756f] rounded-full shadow-[0_0_30px_#83756f] opacity-0 scale-0"></div>
        <div ref={el => particlesRef.current[3] = el} className="absolute bottom-20 right-40 w-2.5 h-2.5 bg-[#6f7a83] rounded-full shadow-[0_0_18px_#6f7a83] opacity-0 scale-0"></div>
        <div ref={el => particlesRef.current[4] = el} className="absolute top-1/3 left-1/3 w-3.5 h-3.5 bg-[#6f837a] rounded-full shadow-[0_0_22px_#6f837a] opacity-0 scale-0"></div>
        <div ref={el => particlesRef.current[5] = el} className="absolute bottom-1/3 right-1/3 w-4.5 h-4.5 bg-[#7a6f83] rounded-full shadow-[0_0_28px_#7a6f83] opacity-0 scale-0"></div>
      </div>

      {/* Liquid splash effects */}
      <div className="absolute inset-0">
        <div ref={el => splashesRef.current[0] = el} className="absolute top-40 left-20 w-40 h-3 bg-gradient-to-r from-[#6f837a]/40 to-transparent rounded-full blur-sm opacity-0 scale-0"></div>
        <div ref={el => splashesRef.current[1] = el} className="absolute top-40 left-20 w-3 h-40 bg-gradient-to-b from-[#6f837a]/40 to-transparent rounded-full blur-sm opacity-0 scale-0"></div>
        <div ref={el => splashesRef.current[2] = el} className="absolute bottom-40 right-20 w-40 h-3 bg-gradient-to-l from-[#7a6f83]/40 to-transparent rounded-full blur-sm opacity-0 scale-0"></div>
        <div ref={el => splashesRef.current[3] = el} className="absolute bottom-40 right-20 w-3 h-40 bg-gradient-to-t from-[#7a6f83]/40 to-transparent rounded-full blur-sm opacity-0 scale-0"></div>
        
        {/* Bubble splash effects */}
        <div ref={el => splashesRef.current[4] = el} className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-[#6f837a]/30 rounded-full opacity-0 scale-0"></div>
        <div ref={el => splashesRef.current[5] = el} className="absolute bottom-1/4 right-1/4 w-16 h-16 border-2 border-[#83756f]/30 rounded-full opacity-0 scale-0"></div>
        <div ref={el => splashesRef.current[6] = el} className="absolute top-1/2 right-1/5 w-12 h-12 border-2 border-[#7a6f83]/30 rounded-full opacity-0 scale-0"></div>
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-40 h-40 bg-[#6f837a]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-32 h-32 bg-[#7a6f83]/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/6 w-24 h-24 bg-[#83756f]/5 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div ref={titleRef} className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="w-32 h-px bg-[#6f837a] shadow-[0_0_10px_#6f837a] mx-auto mb-6"></div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Our
            <span className="block text-[#6f837a] drop-shadow-[0_0_20px_#6f837a] animate-pulse">
              Story
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            T-Republik brings the authentic bubble tea experience to Turkey with a modern twist. 
            We are not just serving drinks – we are creating a community where premium meets passion.
          </p>
          <div className="text-3xl font-bold text-[#6f837a] drop-shadow-[0_0_15px_#6f837a] italic">
            &ldquo;refreshments reimagined&rdquo;®
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-20">
          
          {/* LEFT IMAGE - Premium Bubble Tea */}
          <div className="lg:col-span-3 flex justify-center order-first lg:order-none">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-[#6f837a]/20 via-[#6f837a]/10 to-transparent rounded-full scale-150 blur-3xl animate-pulse"></div>
              
              <div 
                ref={leftImageRef}
                className="relative opacity-0 -translate-x-20 rotate-[-10deg] scale-90"
              >
                <img 
                  src="/images/1.png"
                  alt="T-Republik Premium Bubble Tea"
                  className="w-[280px] h-[400px] sm:w-[320px] sm:h-[450px] object-contain filter drop-shadow-[0_0_30px_#6f837a]"
                />
                
                {/* Floating elements around image */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#6f837a] rounded-full shadow-[0_0_15px_#6f837a] animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#7a6f83] rounded-full shadow-[0_0_12px_#7a6f83] animate-bounce" style={{animationDelay: '0.5s'}}></div>
                
                {/* Premium badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-[#6f837a] to-[#5a6d63] text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg border border-[#6f837a]/50">
                  <Award className="w-3 h-3 inline mr-1" />
                  Premium
                </div>
              </div>
            </div>
          </div>

          {/* CENTER CONTENT - Brand Values */}
          <div className="lg:col-span-6" ref={centerContentRef}>
            <div className="space-y-8">
              {brandValues.map((value, index) => {
                const IconComponent = value.icon;
                const isActive = activeValue === index;
                
                return (
                  <div 
                    key={value.id}
                    ref={el => valuesRef.current[index] = el}
                    className={`group cursor-pointer opacity-0 translate-y-12 scale-95 transition-all duration-500 ${
                      isActive ? 'transform scale-105' : ''
                    }`}
                    onClick={() => setActiveValue(index)}
                  >
                    <div className={`relative p-6 md:p-8 rounded-3xl backdrop-blur-sm transition-all duration-700 border shadow-xl ${
                      isActive 
                        ? 'bg-gray-800/90 border-[#6f837a]/50 shadow-[#6f837a]/20 shadow-2xl' 
                        : 'bg-gray-900/80 border-gray-700/50 hover:border-[#6f837a]/30 hover:shadow-[#6f837a]/10'
                    }`}>
                      
                      {/* Active indicator */}
                      {isActive && (
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6f837a] via-[#7a6f83] to-[#83756f] shadow-[0_0_15px_currentColor] rounded-t-3xl"></div>
                      )}

                      {/* Neon glow effect */}
                      <div className={`absolute inset-0 rounded-3xl transition-opacity duration-700 ${
                        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`} style={{background: `linear-gradient(135deg, ${value.color}/10, ${value.color}/5)`}}></div>
                      
                      <div className="flex items-start space-x-6 relative z-10">
                        <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl flex items-center justify-center transition-all duration-500 border ${
                          isActive 
                            ? `shadow-[0_0_20px_${value.color}] border-[#6f837a]/50` 
                            : 'border-gray-600 group-hover:border-[#6f837a]/50 group-hover:shadow-[0_0_15px_#6f837a]'
                        }`} style={isActive ? {backgroundColor: `${value.color}20`} : {}}>
                          <IconComponent className={`w-7 h-7 md:w-8 md:h-8 transition-colors duration-500 ${
                            isActive ? 'text-[#6f837a]' : 'text-gray-300 group-hover:text-[#6f837a]'
                          }`} />
                        </div>
                        
                        <div className="flex-1">
                          <h4 className={`font-bold text-xl md:text-2xl mb-2 transition-colors duration-300 ${
                            isActive ? 'text-[#6f837a]' : 'text-white group-hover:text-[#6f837a]'
                          }`}>
                            {value.title}
                          </h4>
                          <p className="text-[#6f837a] font-semibold mb-3 drop-shadow-[0_0_8px_#6f837a]">
                            {value.subtitle}
                          </p>
                          <p className="text-gray-300 leading-relaxed mb-4">
                            {value.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="text-2xl font-bold text-[#6f837a] drop-shadow-[0_0_8px_#6f837a]">
                              {value.stats.value}
                            </div>
                            <ArrowRight className={`w-5 h-5 text-gray-500 transition-all duration-300 ${
                              isActive ? 'text-[#6f837a] translate-x-2' : 'group-hover:text-[#6f837a] group-hover:translate-x-2'
                            }`} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT IMAGE - Community & Experience */}
          <div className="lg:col-span-3 flex justify-center order-last">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-[#7a6f83]/20 via-[#7a6f83]/10 to-transparent rounded-full scale-150 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
              
              <div 
                ref={rightImageRef}
                className="relative opacity-0 translate-x-20 rotate-[10deg] scale-90"
              >
                <img 
                  src="/images/2.png"
                  alt="T-Republik Community Experience"
                  className="w-[280px] h-[400px] sm:w-[320px] sm:h-[450px] object-contain filter drop-shadow-[0_0_30px_#7a6f83]"
                />
                
                {/* Floating elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#7a6f83] rounded-full shadow-[0_0_15px_#7a6f83] animate-bounce" style={{animationDelay: '0.3s'}}></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-[#83756f] rounded-full shadow-[0_0_12px_#83756f] animate-bounce" style={{animationDelay: '0.8s'}}></div>
                
                {/* Community badge */}
                <div className="absolute bottom-4 right-4 bg-gradient-to-r from-[#7a6f83] to-[#63576d] text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg border border-[#7a6f83]/50">
                  <Users className="w-3 h-3 inline mr-1" />
                  Community
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                ref={el => statsRef.current[index] = el}
                className="text-center opacity-0 translate-y-4 scale-95 group"
              >
                <div className="relative inline-block mb-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-900/80 rounded-2xl flex items-center justify-center border border-gray-700/50 shadow-xl relative overflow-hidden group hover:border-[#6f837a]/50 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                         style={{background: `linear-gradient(135deg, ${achievement.color}/20, ${achievement.color}/5)`}}></div>
                    <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-gray-400 group-hover:text-[#6f837a] transition-colors duration-500 relative z-10" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-[#6f837a] mb-1 drop-shadow-[0_0_8px_#6f837a]">
                  {achievement.value}
                </div>
                <div className="text-sm text-gray-400 font-medium">
                  {achievement.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700/50 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#6f837a]/10 via-transparent to-[#7a6f83]/10"></div>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#6f837a] via-[#7a6f83] to-[#83756f] shadow-[0_0_20px_currentColor]"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Join the <span className="text-[#6f837a] drop-shadow-[0_0_15px_#6f837a]">T-Republik</span> Experience
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Be part of Turkey&apos;s premium bubble tea revolution. Where tradition meets innovation, and every sip tells a story.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="group relative bg-gradient-to-r from-[#6f837a] to-[#5a6d63] text-white px-8 py-4 rounded-full text-lg font-bold hover:from-[#5a6d63] hover:to-[#6f837a] transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-[#6f837a]/40 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <span className="relative flex items-center">
                    <Coffee className="w-5 h-5 mr-2" />
                    Discover Our Menu
                  </span>
                </button>
                <button className="group relative bg-transparent text-[#6f837a] px-8 py-4 rounded-full text-lg font-bold border-2 border-[#6f837a]/50 hover:border-[#6f837a] hover:bg-[#6f837a]/10 transition-all duration-500 transform hover:scale-105">
                  <span className="relative flex items-center">
                    <Droplets className="w-5 h-5 mr-2" />
                    Find Locations
                  </span>
                </button>
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
            transform: translateY(-12px) rotate(3deg); 
          }
        }
      `}</style>
    </section>
  );
};

export default TRepublikBrandStory;