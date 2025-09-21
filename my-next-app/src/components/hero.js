'use client';

import React, { useState, useEffect, useRef } from 'react';

const RefreshingBubbleTeaScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentProduct, setCurrentProduct] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const products = [
    {
      id: 0,
      name: 'CLASSIC',
      subtitle: 'Traditional Milk Tea',
      description: 'Rich black tea with creamy milk and signature tapioca pearls',
      productImage: '/images/5.png'
    },
    {
      id: 1,
      name: 'TARO',
      subtitle: 'Purple Signature',
      description: 'Creamy taro root with vanilla notes and crystal pearls',
      productImage: '/images/6.png'
    },
    {
      id: 2,
      name: 'MATCHA',
      subtitle: 'Premium Japanese',
      description: 'Ceremonial grade matcha with oat milk and grass jelly',
      productImage: '/images/7.png'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);
      
      const sectionHeight = typeof window !== 'undefined' ? window.innerHeight : 1000;
      const newProductIndex = Math.min(
        Math.floor(newScrollY / sectionHeight),
        products.length - 1
      );
      
      if (newProductIndex !== currentProduct) {
        setIsTransitioning(true);
        setCurrentProduct(newProductIndex);
        setTimeout(() => setIsTransitioning(false), 1200);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentProduct, products.length]);

  const sectionHeight = window.innerHeight;
  const sectionProgress = (scrollY % sectionHeight) / sectionHeight;
  
  const bubblePositions = Array.from({ length: 20 }, (_, i) => ({
    x: 5 + (i * 7) % 90,
    y: 5 + (i * 11) % 90,
    size: 4 + (i % 5) * 3,
    speed: 0.3 + (i % 4) * 0.2
  }));

  const product = products[currentProduct];
  const imageScale = isTransitioning ? 0.9 : 1 + (sectionProgress * 0.05);
  const imageY = Math.sin(scrollY * 0.008) * 15;

  return (
    <div className="relative w-full">
      <div 
        className="relative"
        style={{ height: `${products.length * 100}vh` }}
      >
        {/* Fixed Background */}
        <div className="fixed inset-0 bg-black overflow-hidden" style={{ 
          zIndex: 1,
          opacity: scrollY < (products.length * (typeof window !== 'undefined' ? window.innerHeight : 1000)),
          transition: 'opacity 0.5s ease'
        }}>
          
          {/* Floating Tapioca Pearls */}
          {bubblePositions.map((bubble, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                left: `${bubble.x}%`,
                top: `${bubble.y}%`,
                transform: `translateY(${Math.sin(scrollY * bubble.speed * 0.01 + i) * 40}px)`,
                opacity: 0.1 + Math.sin(scrollY * 0.005 + i) * 0.05,
                transition: 'opacity 0.8s ease'
              }}
            />
          ))}

          {/* Accent Colored Bubbles */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${15 + i * 4}px`,
                height: `${15 + i * 4}px`,
                backgroundColor: '#6c8077',
                left: `${10 + i * 7}%`,
                top: `${15 + (i % 4) * 20}%`,
                transform: `translateY(${Math.sin(scrollY * 0.006 + i * 1.5) * 50}px) scale(${0.8 + sectionProgress * 0.3})`,
                opacity: 0.15 + Math.sin(scrollY * 0.004 + i) * 0.1,
                transition: 'all 0.5s ease'
              }}
            />
          ))}

          {/* Liquid Flow Effect */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1200 800">
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6c8077" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="white" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#6c8077" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <path
                d={`M0,300 Q300,${250 + Math.sin(scrollY * 0.01) * 80} 600,300 T1200,300 L1200,800 L0,800 Z`}
                fill="url(#flowGradient)"
              />
              <path
                d={`M0,500 Q400,${400 + Math.sin(scrollY * 0.008) * 60} 800,500 T1200,500 L1200,800 L0,800 Z`}
                fill="white"
                opacity="0.05"
              />
            </svg>
          </div>
        </div>

        {/* Fixed Content */}
        <div className="fixed inset-0 z-20 text-white" style={{ 
          opacity: scrollY < (products.length * window.innerHeight) ? 1 : 0,
          transition: 'opacity 0.5s ease'
        }}>
          {/* Centered Product Showcase */}
          <div className="flex flex-col items-center justify-center h-full px-8">
            
            {/* Large Central Product Image */}
            <div className="relative mb-6">
              <div 
                className="relative transition-all duration-1200 ease-in-out"
                style={{ 
                  transform: `scale(${imageScale}) translateY(${imageY}px)`,
                  opacity: isTransitioning ? 0.7 : 1,
                  filter: isTransitioning ? 'blur(3px)' : 'blur(0px)'
                }}
              >
                <img 
                  src={product.productImage} 
                  alt={product.name}
                  className="w-72 h-80 lg:w-80 lg:h-96 object-contain drop-shadow-2xl"
                />
                
                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-3xl transition-all duration-1200 ease-in-out"
                  style={{ 
                    background: `radial-gradient(ellipse at center, #6c807730 0%, transparent 70%)`,
                    opacity: isTransitioning ? 0.2 : 0.3,
                    transform: `scale(${1.2 + sectionProgress * 0.1})`,
                    filter: 'blur(20px)'
                  }}
                />
              </div>

              {/* Orbiting Elements */}
              <div 
                className="absolute w-6 h-6 rounded-full bg-white"
                style={{ 
                  top: '15%',
                  right: '-8%',
                  transform: `rotate(${scrollY * 0.4}deg) translateX(80px) rotate(${-scrollY * 0.4}deg)`,
                  opacity: isTransitioning ? 0.2 : 0.6
                }}
              />
              <div 
                className="absolute w-4 h-4 rounded-full"
                style={{ 
                  backgroundColor: '#6c8077',
                  bottom: '25%',
                  left: '-6%',
                  transform: `rotate(${-scrollY * 0.6}deg) translateX(70px) rotate(${scrollY * 0.6}deg)`,
                  opacity: isTransitioning ? 0.1 : 0.5
                }}
              />
            </div>

            {/* Product Information */}
            <div className="text-center space-y-3 max-w-2xl">
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-[0.4em] text-gray-500">
                  {String(currentProduct + 1).padStart(2, '0')} / {String(products.length).padStart(2, '0')}
                </div>
                
                <h1 
                  className={`text-4xl lg:text-5xl font-black leading-none tracking-tight transition-all duration-1200 ease-in-out ${
                    isTransitioning ? 'opacity-0 transform translate-y-3' : 'opacity-100 transform translate-y-0'
                  }`}
                  style={{ color: '#6c8077' }}
                >
                  {product.name}
                </h1>
                
                <h2 className={`text-lg lg:text-xl font-light text-gray-300 transition-all duration-1200 ease-in-out delay-100 ${
                  isTransitioning ? 'opacity-0 transform translate-y-3' : 'opacity-100 transform translate-y-0'
                }`}>
                  {product.subtitle}
                </h2>
              </div>

              <p className={`text-sm text-gray-400 leading-relaxed transition-all duration-1200 ease-in-out delay-200 ${
                isTransitioning ? 'opacity-0 transform translate-y-3' : 'opacity-100 transform translate-y-0'
              }`}>
                {product.description}
              </p>

              <div className={`flex justify-center space-x-4 pt-3 pb-16 transition-all duration-1200 ease-in-out delay-300 ${
                isTransitioning ? 'opacity-0 transform translate-y-3' : 'opacity-100 transform translate-y-0'
              }`}>
                <button 
                  className="px-6 py-2 text-sm font-semibold tracking-wider rounded-full transition-all duration-300 transform hover:scale-105"
                  style={{ backgroundColor: '#6c8077', color: 'white' }}
                >
                  TASTE NOW
                </button>
                <button className="border border-white px-6 py-2 text-sm font-semibold tracking-wider rounded-full hover:bg-white hover:text-black transition-all duration-300">
                  EXPLORE
                </button>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute top-1/3 left-6 lg:left-12">
              <div 
                className="bg-black bg-opacity-70 backdrop-blur-sm rounded-xl p-4 border transition-all duration-1200"
                style={{ 
                  transform: `translateY(${-imageY * 0.2}px)`,
                  opacity: isTransitioning ? 0.3 : 0.8,
                  borderColor: '#6c807730'
                }}
              >
                <div className="text-2xl font-bold" style={{ color: '#6c8077' }}>280</div>
                <div className="text-xs text-gray-400 uppercase">Calories</div>
              </div>
            </div>

            <div className="absolute top-1/2 right-6 lg:right-12">
              <div 
                className="bg-black bg-opacity-70 backdrop-blur-sm rounded-xl p-4 border transition-all duration-1200"
                style={{ 
                  transform: `translateY(${imageY * 0.3}px)`,
                  opacity: isTransitioning ? 0.3 : 0.8,
                  borderColor: '#6c807730'
                }}
              >
                <div className="text-2xl font-bold text-white">0g</div>
                <div className="text-xs text-gray-400 uppercase">Added Sugar</div>
              </div>
            </div>

            {/* Bottom Progress */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
              <div className="flex justify-center space-x-2 mb-4">
                {products.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      index === currentProduct 
                        ? 'scale-150 opacity-100' 
                        : 'scale-100 opacity-30'
                    }`}
                    style={{ 
                      backgroundColor: index === currentProduct ? '#6c8077' : 'white'
                    }}
                  />
                ))}
              </div>

              <div className="text-xs uppercase tracking-wide text-gray-500 mb-3">
                Scroll to explore
              </div>
              <div className="w-px h-8 bg-gray-600 mx-auto relative">
                <div 
                  className="absolute w-px transition-all duration-300"
                  style={{ 
                    height: `${(currentProduct + 1) / products.length * 100}%`,
                    backgroundColor: '#6c8077'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
   
    </div>
  );
};

export default RefreshingBubbleTeaScroll;