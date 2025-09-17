'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Coffee, Sparkles, Zap, Heart, Star, ArrowRight, Clock, Award, Flame, Droplets } from 'lucide-react';

const BubbleTeaMenuSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const particlesRef = useRef([]);
  const featuredRef = useRef(null);
  const statsRef = useRef([]);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const menuCategories = [
    {
      id: 1,
      title: "Signature Classics",
      subtitle: "Our legendary bestsellers",
      description: "Time-tested recipes perfected over years. Premium tea leaves with our secret blend of milk and signature toppings.",
      price: "From $4.99",
      image: "/images/5.png",
      icon: Award,
      gradient: "from-[#6f837a] to-[#5a6d63]",
      specialties: ["Brown Sugar", "Classic Milk Tea", "Taro Supreme"],
      popular: true,
      stats: { orders: "2K+", rating: 4.9 }
    },
    {
      id: 2,
      title: "Fruit Fusion",
      subtitle: "Fresh tropical explosions",
      description: "Real fruit pieces blended with premium teas. Refreshing, vibrant, and bursting with natural flavors.",
      price: "From $5.49",
      image: "/images/6.png",
      icon: Sparkles,
      gradient: "from-[#7a6f83] to-[#635a6d]",
      specialties: ["Mango Passion", "Berry Blast", "Citrus Storm"],
      popular: false,
      stats: { orders: "1.5K+", rating: 4.8 }
    },
    {
      id: 3,
      title: "Energy Boosters",
      subtitle: "Caffeinated perfection",
      description: "Double-shot espresso meets creamy textures. Perfect for that extra kick when you need it most.",
      price: "From $6.99",
      image: "/images/7.png",
      icon: Zap,
      gradient: "from-[#83756f] to-[#6d635a]",
      specialties: ["Coffee Boba", "Mocha Fusion", "Espresso Cream"],
      popular: false,
      stats: { orders: "1.2K+", rating: 4.7 }
    },
  
  ];

  const stats = [
    { icon: Star, value: "50K+", label: "Happy Customers", color: "#6f837a" },
    { icon: Coffee, value: "200+", label: "Drink Varieties", color: "#7a6f83" },
    { icon: Clock, value: "24/7", label: "Fresh Brewing", color: "#83756f" },
    { icon: Award, value: "#1", label: "Local Favorite", color: "#6f7a83" }
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
                particle.style.transition = `all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${index * 0.1}s`;
                particle.style.opacity = '0.8';
                particle.style.transform = 'scale(1) rotate(180deg)';
              }
            });
          }, 200);

          // Animate cards
          setTimeout(() => {
            cardsRef.current.forEach((card, index) => {
              if (card) {
                card.style.transition = `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.1}s`;
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
              }
            });
          }, 400);

          // Animate stats
          setTimeout(() => {
            statsRef.current.forEach((stat, index) => {
              if (stat) {
                stat.style.transition = `all 0.5s ease-out ${index * 0.1}s`;
                stat.style.opacity = '1';
                stat.style.transform = 'translateY(0) scale(1)';
              }
            });
          }, 800);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 relative overflow-hidden py-20">
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={el => particlesRef.current[0] = el} className="absolute top-32 left-20 w-3 h-3 bg-[#6f837a] rounded-full shadow-[0_0_20px_#6f837a] opacity-0 scale-0"></div>
        <div ref={el => particlesRef.current[1] = el} className="absolute top-60 right-32 w-2 h-2 bg-[#7a6f83] rounded-full shadow-[0_0_15px_#7a6f83] opacity-0 scale-0"></div>
        <div ref={el => particlesRef.current[2] = el} className="absolute bottom-40 left-40 w-4 h-4 bg-[#83756f] rounded-full shadow-[0_0_25px_#83756f] opacity-0 scale-0"></div>
        <div ref={el => particlesRef.current[3] = el} className="absolute bottom-20 right-20 w-2.5 h-2.5 bg-[#6f7a83] rounded-full shadow-[0_0_18px_#6f7a83] opacity-0 scale-0"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-40 left-1/4 w-32 h-32 bg-[#6f837a]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-[#7a6f83]/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div ref={titleRef} className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="w-32 h-px bg-[#6f837a] shadow-[0_0_10px_#6f837a] mx-auto mb-6"></div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Our Menu
            <span className="block text-[#6f837a] drop-shadow-[0_0_20px_#6f837a] animate-pulse">
              Categories
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our carefully crafted collections, each designed to deliver the perfect bubble tea experience
          </p>
        </div>

        {/* Menu Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {menuCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                ref={el => cardsRef.current[index] = el}
                className="group cursor-pointer opacity-0 translate-y-12 scale-95 relative"
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Popular badge */}
                {category.popular && (
                  <div className="absolute -top-3 -right-3 z-20">
                    <div className="bg-gradient-to-r from-[#6f837a] to-[#5a6d63] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-[#6f837a]/50 animate-pulse">
                      <Flame className="w-3 h-3 inline mr-1" />
                      HOT
                    </div>
                  </div>
                )}

                <div className="relative h-[480px] bg-gray-900/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 hover:border-[#6f837a]/50 shadow-xl hover:shadow-[#6f837a]/20 hover:shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:-translate-y-4">
                  
                  {/* Neon glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
                       style={{background: `linear-gradient(135deg, ${category.gradient.split(' ')[1]}/10, ${category.gradient.split(' ')[3]}/5)`}}></div>
                  
                  {/* Image placeholder with neon border */}
                {/* Image with neon border */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-700 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br opacity-80" 
                         style={{background: `linear-gradient(135deg, ${category.gradient.split(' ')[1]}/30, ${category.gradient.split(' ')[3]}/10)`}}></div>
                    
                    {/* Try to load image, fallback to icon */}
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    
                    {/* Fallback icon (hidden by default) */}
                    <div className="absolute inset-0 flex items-center justify-center" style={{display: 'none'}}>
                      <IconComponent className="w-16 h-16 text-gray-400 group-hover:text-[#6f837a] transition-colors duration-500 drop-shadow-[0_0_20px_currentColor]" />
                    </div>
                    
                    {/* Floating bubbles */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-white/20 rounded-full animate-bounce"></div>
                    <div className="absolute bottom-6 left-6 w-2 h-2 bg-white/15 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute top-8 left-8 w-1.5 h-1.5 bg-white/10 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-[#6f837a] transition-colors duration-300">
                        {category.title}
                      </h3>
                      <div className="flex items-center space-x-1 text-xs text-gray-400">
                        <Star className="w-3 h-3 text-[#6f837a] fill-current" />
                        <span>{category.stats.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-[#6f837a] font-semibold text-sm mb-3 drop-shadow-[0_0_8px_#6f837a]">
                      {category.subtitle}
                    </p>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                      {category.description}
                    </p>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {category.specialties.map((specialty, idx) => (
                        <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full border border-gray-600 group-hover:border-[#6f837a]/50 group-hover:text-[#6f837a] transition-all duration-300">
                          {specialty}
                        </span>
                      ))}
                    </div>

                    {/* Stats and Price */}
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg font-bold text-[#6f837a] drop-shadow-[0_0_8px_#6f837a]">
                          {category.price}
                        </span>
                        <span className="text-xs text-gray-400">
                          {category.stats.orders} sold
                        </span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-[#6f837a] group-hover:translate-x-2 transition-all duration-300" />
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Drink Highlight */}
        <div ref={featuredRef} className={`mb-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700/50 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#6f837a]/10 via-transparent to-[#7a6f83]/10"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6f837a] via-[#7a6f83] to-[#83756f] shadow-[0_0_20px_currentColor]"></div>
            
            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6f837a] to-[#5a6d63] rounded-xl flex items-center justify-center shadow-[0_0_20px_#6f837a] border border-[#6f837a]/50">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Try Our <span className="text-[#6f837a] drop-shadow-[0_0_15px_#6f837a]">Signature Creation</span>
              </h3>
              <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                The perfect blend of premium milk tea, brown sugar pearls, and our secret ingredient that keeps customers coming back for more.
              </p>
              <button className="group relative bg-gradient-to-r from-[#6f837a] to-[#5a6d63] text-white px-8 py-4 rounded-full text-lg font-bold hover:from-[#5a6d63] hover:to-[#6f837a] transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-[#6f837a]/40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative flex items-center">
                  <Droplets className="w-5 h-5 mr-2" />
                  Order Signature Drink
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                ref={el => statsRef.current[index] = el}
                className="text-center opacity-0 translate-y-4 scale-95"
              >
                <div className="relative inline-block mb-4">
                  <div className="w-16 h-16 bg-gray-900/80 rounded-2xl flex items-center justify-center border border-gray-700/50 shadow-xl relative overflow-hidden group hover:border-[#6f837a]/50 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                         style={{background: `linear-gradient(135deg, ${stat.color}/20, ${stat.color}/5)`}}></div>
                    <IconComponent className="w-8 h-8 text-gray-400 group-hover:text-[#6f837a] transition-colors duration-500 relative z-10" 
                                   style={{'--tw-drop-shadow': `drop-shadow(0 0 8px ${stat.color})`}} />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-[#6f837a] mb-1 drop-shadow-[0_0_8px_#6f837a]">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-10px) rotate(2deg); 
          }
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default BubbleTeaMenuSection;