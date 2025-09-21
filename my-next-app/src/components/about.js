'use client';
import React, { useState, useEffect } from 'react';

const IngredientsStorySection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentIngredient, setCurrentIngredient] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const ingredients = [
    {
      id: 0,
      name: 'TEA LEAVES',
      subtitle: 'Premium Ceylon Black Tea',
      description: 'Hand-picked from high-altitude gardens in Sri Lanka, our tea leaves are carefully selected for their robust flavor and natural sweetness.',
      image: '/api/placeholder/600/400',
      origin: 'Sri Lanka Highlands',
      process: 'Hand-picked at dawn',
      quality: 'Single estate'
    },
    {
      id: 1,
      name: 'FRESH MILK',
      subtitle: 'Local Farm Partnership',
      description: 'Sourced daily from local farms within 50km, our milk is hormone-free and provides the perfect creamy texture for every cup.',
      image: 'https://png.pngtree.com/png-vector/20240515/ourmid/pngtree-a-bottle-in-fresh-splash-milk-png-image_12467335.png',
      origin: 'Local Dairy Farms',
      process: 'Daily fresh delivery',
      quality: 'Hormone-free'
    },
    {
      id: 2,
      name: 'TAPIOCA PEARLS',
      subtitle: 'Traditional Taiwanese Recipe',
      description: 'Made fresh every morning using authentic Taiwanese methods, our pearls have the perfect chewy texture that defines great bubble tea.',
      image: '/api/placeholder/600/400',
      origin: 'Taiwan Traditional',
      process: 'Made fresh daily',
      quality: 'Authentic recipe'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);
      
      const heroHeight = typeof window !== 'undefined' ? window.innerHeight * 3 : 3000;
      const sectionStart = heroHeight;
      const sectionHeight = typeof window !== 'undefined' ? window.innerHeight : 1000;

      
      if (newScrollY >= sectionStart) {
        const adjustedScrollY = newScrollY - sectionStart;
        const newIngredientIndex = Math.min(
          Math.floor(adjustedScrollY / sectionHeight),
          ingredients.length - 1
        );
        
        if (newIngredientIndex !== currentIngredient) {
          setIsTransitioning(true);
          setCurrentIngredient(newIngredientIndex);
          setTimeout(() => setIsTransitioning(false), 1200);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentIngredient, ingredients.length]);

  const heroHeight = window.innerHeight * 3;
  const adjustedScrollY = Math.max(0, scrollY - heroHeight);
  const sectionProgress = adjustedScrollY > 0 ? (adjustedScrollY % window.innerHeight) / window.innerHeight : 0;
  
  // Different bubble pattern for ingredients
  const bubblePositions = Array.from({ length: 25 }, (_, i) => ({
    x: 5 + (i * 6) % 90,
    y: 5 + (i * 9) % 90,
    size: 3 + (i % 6) * 2,
    speed: 0.2 + (i % 5) * 0.15
  }));

  const ingredient = ingredients[currentIngredient];
  const imageScale = isTransitioning ? 0.9 : 1 + (sectionProgress * 0.03);
  const imageX = Math.sin(scrollY * 0.006) * 8;

  return (
    <div className="relative w-full">
      <div 
        className="relative"
        style={{ height: `${ingredients.length * 100}vh` }}
      >
        {/* Fixed Background */}
        <div className="fixed inset-0 bg-black overflow-hidden" style={{ 
          zIndex: 1,
          opacity: scrollY >= heroHeight && scrollY < (heroHeight + ingredients.length * window.innerHeight) ? 1 : 0,
          transition: 'opacity 0.5s ease'
        }}>
          
          {/* Ingredient-themed floating elements */}
          {bubblePositions.map((bubble, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                left: `${bubble.x}%`,
                top: `${bubble.y}%`,
                transform: `translateX(${Math.sin(scrollY * bubble.speed * 0.008 + i) * 30}px) translateY(${Math.cos(scrollY * bubble.speed * 0.008 + i) * 20}px)`,
                opacity: 0.08 + Math.sin(scrollY * 0.004 + i) * 0.04,
                transition: 'opacity 0.6s ease'
              }}
            />
          ))}

          {/* Accent floating elements */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${12 + i * 2}px`,
                height: `${12 + i * 2}px`,
                backgroundColor: '#6c8077',
                left: `${8 + i * 6}%`,
                top: `${10 + (i % 5) * 18}%`,
                transform: `translateX(${Math.sin(scrollY * 0.005 + i * 1.1) * 35}px) scale(${0.9 + sectionProgress * 0.2})`,
                opacity: 0.12 + Math.sin(scrollY * 0.003 + i) * 0.08,
                transition: 'all 0.4s ease'
              }}
            />
          ))}

          {/* Steam/Mist Effect */}
          <div className="absolute inset-0 opacity-8">
            <svg className="w-full h-full" viewBox="0 0 1200 800">
              <defs>
                <radialGradient id="mistGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#6c8077" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="white" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle
                cx={600 + Math.sin(scrollY * 0.01) * 100}
                cy={400 + Math.cos(scrollY * 0.008) * 50}
                r={150 + Math.sin(scrollY * 0.005) * 30}
                fill="url(#mistGradient)"
              />
              <circle
                cx={300 + Math.sin(scrollY * 0.012) * 80}
                cy={600 + Math.cos(scrollY * 0.009) * 40}
                r={100 + Math.sin(scrollY * 0.007) * 20}
                fill="white"
                opacity="0.03"
              />
            </svg>
          </div>
        </div>

        {/* Fixed Content */}
        <div className="fixed inset-0 z-20 text-white" style={{ 
          opacity: scrollY >= heroHeight && scrollY < (heroHeight + ingredients.length * window.innerHeight) ? 1 : 0,
          transition: 'opacity 0.5s ease'
        }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center h-full px-8 max-w-7xl mx-auto">
            
            {/* Left Side - Origin Story */}
            <div className={`hidden lg:block transition-all duration-1200 ease-in-out delay-200 ${
              isTransitioning ? 'opacity-0 transform translate-x-4' : 'opacity-100 transform translate-x-0'
            }`}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Origin</h3>
                  <div className="text-lg font-light text-white">{ingredient.origin}</div>
                </div>

                <div>
                  <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Process</h3>
                  <div className="text-sm text-gray-300">{ingredient.process}</div>
                </div>

                <div>
                  <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Quality</h3>
                  <div className="text-sm text-gray-300">{ingredient.quality}</div>
                </div>

                <div className="pt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#6c8077' }}></div>
                    <span className="text-xs text-gray-400 uppercase tracking-wide">Sustainably sourced</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Center - Ingredient Image */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative mb-6">
                <div 
                  className="relative transition-all duration-1200 ease-in-out"
                  style={{ 
                    transform: `scale(${imageScale}) translateX(${imageX}px)`,
                    opacity: isTransitioning ? 0.7 : 1,
                    filter: isTransitioning ? 'blur(3px)' : 'blur(0px)'
                  }}
                >
                  <img 
                    src={ingredient.image} 
                    alt={ingredient.name}
                    className="w-80 h-64 lg:w-96 lg:h-72 object-contain rounded-2xl shadow-2xl"
                  />
                  
                  {/* Subtle border glow */}
                  <div 
                    className="absolute inset-0 rounded-2xl border transition-all duration-1200 ease-in-out"
                    style={{ 
                      borderColor: '#6c8077',
                      opacity: isTransitioning ? 0.2 : 0.4,
                      boxShadow: `0 0 30px #6c807720`
                    }}
                  />
                </div>

                {/* Floating accent dots */}
                <div 
                  className="absolute w-3 h-3 rounded-full bg-white"
                  style={{ 
                    top: '10%',
                    right: '-5%',
                    transform: `translateY(${Math.sin(scrollY * 0.01) * 20}px)`,
                    opacity: isTransitioning ? 0.2 : 0.6
                  }}
                />
                <div 
                  className="absolute w-2 h-2 rounded-full"
                  style={{ 
                    backgroundColor: '#6c8077',
                    bottom: '15%',
                    left: '-4%',
                    transform: `translateY(${Math.cos(scrollY * 0.012) * 15}px)`,
                    opacity: isTransitioning ? 0.1 : 0.5
                  }}
                />
              </div>

              {/* Ingredient Information */}
              <div className="text-center space-y-3 max-w-xl">
                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-[0.4em] text-gray-500">
                    Ingredient {String(currentIngredient + 1).padStart(2, '0')} / {String(ingredients.length).padStart(2, '0')}
                  </div>
                  
                  <h1 
                    className={`text-3xl lg:text-4xl font-black leading-none tracking-tight transition-all duration-1200 ease-in-out ${
                      isTransitioning ? 'opacity-0 transform translate-y-3' : 'opacity-100 transform translate-y-0'
                    }`}
                    style={{ color: '#6c8077' }}
                  >
                    {ingredient.name}
                  </h1>
                  
                  <h2 className={`text-lg lg:text-xl font-light text-gray-300 transition-all duration-1200 ease-in-out delay-100 ${
                    isTransitioning ? 'opacity-0 transform translate-y-3' : 'opacity-100 transform translate-y-0'
                  }`}>
                    {ingredient.subtitle}
                  </h2>
                </div>

                <p className={`text-sm text-gray-400 leading-relaxed transition-all duration-1200 ease-in-out delay-200 ${
                  isTransitioning ? 'opacity-0 transform translate-y-3' : 'opacity-100 transform translate-y-0'
                }`}>
                  {ingredient.description}
                </p>
              </div>
            </div>

            {/* Right Side - Quality Details */}
            <div className={`hidden lg:block transition-all duration-1200 ease-in-out delay-200 ${
              isTransitioning ? 'opacity-0 transform translate-x-4' : 'opacity-100 transform translate-x-0'
            }`}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Freshness</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-300">Daily Quality</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-2 h-2 rounded-full bg-white" />
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-300">Consistency</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-2 h-2 rounded-full bg-white" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Certifications</h3>
                  <div className="space-y-2 text-xs text-gray-300">
                    <div>Organic Certified</div>
                    <div>Fair Trade</div>
                    <div>Quality Assured</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Delivery</h3>
                  <div className="text-sm font-medium" style={{ color: '#6c8077' }}>Within 24 hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Progress */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
            <div className="flex justify-center space-x-2 mb-4">
              {ingredients.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    index === currentIngredient 
                      ? 'scale-150 opacity-100' 
                      : 'scale-100 opacity-30'
                  }`}
                  style={{ 
                    backgroundColor: index === currentIngredient ? '#6c8077' : 'white'
                  }}
                />
              ))}
            </div>

            <div className="text-xs uppercase tracking-wide text-gray-500 mb-3">
              Scroll to discover
            </div>
            <div className="w-px h-8 bg-gray-600 mx-auto relative">
              <div 
                className="absolute w-px transition-all duration-300"
                style={{ 
                  height: `${(currentIngredient + 1) / ingredients.length * 100}%`,
                  backgroundColor: '#6c8077'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientsStorySection;