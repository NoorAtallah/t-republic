'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ShoppingBag,
  Instagram,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  ArrowDown,
  Coffee,
  Leaf,
  Sun,
  Moon,
  Star,
  Heart,
  Eye,
  Zap
} from 'lucide-react';
import Link from 'next/link';
const TRepublikMenu = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('signature');
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [favorites, setFavorites] = useState(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const drinkCategories = [
    {
      id: 'signature',
      name: 'Signature',
      icon: Star,
      color: '#6f837a',
      description: 'Our masterpiece creations'
    },
    {
      id: 'energize',
      name: 'Energize',
      icon: Zap,
      color: '#8b9f8c',
      description: 'Bold & invigorating'
    },
    {
      id: 'refresh',
      name: 'Refresh',
      icon: Leaf,
      color: '#7a8d7b',
      description: 'Light & revitalizing'
    },
    {
      id: 'comfort',
      name: 'Comfort',
      icon: Heart,
      color: '#6b7f6c',
      description: 'Warm & soothing'
    }
  ];

  const drinks = {
    signature: [
      {
        id: 'brown-sugar',
        name: 'Artisan Brown Sugar',
        tagline: '47 minutes of perfection',
        description: 'Hand-crafted brown sugar caramelized to amber perfection, creating layers of complex sweetness',
        price: 42,
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
        intensity: 9,
        sweetness: 8,
        complexity: 10,
        tags: ['Master Crafted', 'House Special'],
        story: 'Born from 47 minutes of patient caramelization at 4 AM, when the world sleeps and magic happens.',
        ingredients: ['Premium brown sugar', 'Himalayan pink salt', 'Madagascar vanilla'],
        temperature: 'Hot/Iced'
      },
      {
        id: 'golden-hour',
        name: 'Golden Hour Ritual',
        tagline: 'Liquid wellness',
        description: 'Turmeric and honey create an anti-inflammatory elixir that heals while it delights',
        price: 32,
        image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&h=400&fit=crop',
        intensity: 6,
        sweetness: 7,
        complexity: 8,
        tags: ['Wellness', 'Anti-inflammatory'],
        story: 'Sunrise-inspired blend that awakens your body and soul with ancient healing wisdom.',
        ingredients: ['Organic turmeric', 'Raw honey', 'Coconut milk', 'Black pepper'],
        temperature: 'Hot'
      }
    ],
    energize: [
      {
        id: 'matcha-ceremony',
        name: 'Ceremonial Matcha',
        tagline: 'Ancient energy ritual',
        description: 'Stone-ground Uji matcha whisked to perfection in the traditional ceremony style',
        price: 45,
        image: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=600&h=800&fit=crop',
        intensity: 10,
        sweetness: 3,
        complexity: 9,
        tags: ['Ceremonial Grade', 'Traditional'],
        story: 'From the mist-covered hills of Uji to your cup, preserving 800 years of tea ceremony tradition.',
        ingredients: ['Ceremonial matcha', 'Bamboo whisk', 'Mindfulness'],
        temperature: 'Hot'
      },
      {
        id: 'espresso-cloud',
        name: 'Floating Espresso',
        tagline: 'Levitating coffee experience',
        description: 'Our signature espresso suspended in nitrogen-infused foam that literally floats',
        price: 38,
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop',
        intensity: 10,
        sweetness: 2,
        complexity: 7,
        tags: ['Nitrogen Infused', 'Innovative'],
        story: 'Defying gravity and expectations, this espresso floats like a cloud above your cup.',
        ingredients: ['Single-origin espresso', 'Nitrogen', 'Magic'],
        temperature: 'Hot'
      }
    ],
    refresh: [
      {
        id: 'citrus-burst',
        name: 'Aegean Citrus Storm',
        tagline: 'Mediterranean lightning',
        description: 'Fresh citrus from the Aegean coast, electrified with sparkling mineral water',
        price: 26,
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=500&fit=crop',
        intensity: 7,
        sweetness: 5,
        complexity: 6,
        tags: ['Fresh Daily', 'Vitamin C'],
        story: 'Captured Mediterranean sunshine in liquid form, straight from the Aegean coastline.',
        ingredients: ['Aegean oranges', 'Sparkling water', 'Sea salt', 'Mint'],
        temperature: 'Cold'
      },
      {
        id: 'pomegranate-fizz',
        name: 'Turkish Ruby Fizz',
        tagline: 'Sparkling tradition',
        description: 'Ancient pomegranate meets modern carbonation in this jewel-toned refresher',
        price: 28,
        image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=500&fit=crop',
        intensity: 6,
        sweetness: 6,
        complexity: 7,
        tags: ['Limited Edition', 'Antioxidant Rich'],
        story: 'Ruby-red tradition reimagined with modern sparkling techniques from Ottoman recipes.',
        ingredients: ['Turkish pomegranate', 'Rose water', 'Sparkling water'],
        temperature: 'Cold'
      }
    ],
    comfort: [
      {
        id: 'turkish-rose',
        name: 'East Meets East',
        tagline: 'Cultural harmony',
        description: 'Turkish rose water finds perfect harmony with Taiwanese oolong in this cultural fusion',
        price: 36,
        image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&h=700&fit=crop',
        intensity: 5,
        sweetness: 6,
        complexity: 9,
        tags: ['Cultural Fusion', 'Artisanal'],
        story: 'A love story between two ancient tea cultures, told through delicate petals and mountain leaves.',
        ingredients: ['Taiwanese oolong', 'Turkish rose water', 'Honey', 'Time'],
        temperature: 'Hot/Iced'
      }
    ]
  };

  const toggleFavorite = (drinkId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(drinkId)) {
      newFavorites.delete(drinkId);
    } else {
      newFavorites.add(drinkId);
    }
    setFavorites(newFavorites);
  };

  // Floating particles animation
  const FloatingParticle = ({ delay = 0 }) => (
    <motion.div
      className="absolute w-1 h-1 bg-white/30 rounded-full"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        y: [0, -100],
        x: [0, Math.random() * 50 - 25]
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 2
      }}
      style={{
        left: `${Math.random() * 100}%`,
        bottom: 0
      }}
    />
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden" ref={containerRef}>
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #6f837a 0%, transparent 50%)`
          }}
        />
        {Array.from({ length: 20 }).map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.2} />
        ))}
      </div>

      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 w-full z-50 transition-all duration-500"
        style={{
          backgroundColor: scrollY > 50 ? 'rgba(0, 0, 0, 0.9)' : 'transparent',
          backdropFilter: scrollY > 50 ? 'blur(20px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              className="flex items-center space-x-3 z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-2xl border border-white/20"
                style={{ backgroundColor: '#6f837a' }}
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(111, 131, 122, 0.3)',
                    '0 0 40px rgba(111, 131, 122, 0.5)',
                    '0 0 20px rgba(111, 131, 122, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-white font-bold text-xl">T</span>
              </motion.div>
              <div>
                <span className="text-2xl font-bold text-white tracking-wide">REPUBLIK</span>
                <div className="text-xs text-gray-400 -mt-1 tracking-wider">immersive experience</div>
              </div>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {['Experience', 'Stories', 'Craft', 'Connect'].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="font-medium text-gray-300 hover:text-white transition-all relative group"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 rounded-full group-hover:w-full transition-all duration-300" style={{ backgroundColor: '#6f837a' }} />
                </motion.a>
              ))}
              
              <motion.button
                className="px-6 py-3 rounded-2xl text-black font-semibold shadow-2xl border-2 border-transparent hover:border-white/20 transition-all flex items-center space-x-2 backdrop-blur-sm"
                style={{ backgroundColor: '#6f837a' }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: '0 10px 30px rgba(111, 131, 122, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles size={18} />
                <span>Create Magic</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section - Immersive 3D-like Experience */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                'linear-gradient(45deg, #6f837a, #1a1a1a)',
                'linear-gradient(225deg, #6f837a, #1a1a1a)',
                'linear-gradient(45deg, #6f837a, #1a1a1a)'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.h1
              className="text-6xl md:text-9xl font-bold mb-8"
              style={{
                background: 'linear-gradient(45deg, #ffffff, #6f837a, #ffffff)',
                backgroundSize: '300% 300%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              IMMERSE
            </motion.h1>

            <motion.p
              className="text-2xl md:text-4xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Step into a world where every sip tells a story,
              <br />
              every flavor creates an experience
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex justify-center"
            >
              <motion.button
                className="px-12 py-6 rounded-3xl font-bold text-xl shadow-2xl border-2 border-white/20 backdrop-blur-sm flex items-center space-x-4"
                style={{ backgroundColor: '#6f837a' }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  boxShadow: '0 20px 60px rgba(111, 131, 122, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    '0 10px 30px rgba(111, 131, 122, 0.3)',
                    '0 15px 40px rgba(111, 131, 122, 0.5)',
                    '0 10px 30px rgba(111, 131, 122, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span>Enter the Experience</span>
                <ArrowDown size={24} />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Category Navigation - Floating Cards */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Choose Your Journey
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {drinkCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.id}
                  className={`relative p-8 rounded-3xl cursor-pointer transition-all duration-500 backdrop-blur-sm border-2 ${
                    activeSection === category.id 
                      ? 'border-white/40 shadow-2xl' 
                      : 'border-white/10 hover:border-white/30'
                  }`}
                  style={{
                    background: activeSection === category.id 
                      ? `linear-gradient(135deg, ${category.color}20, transparent)`
                      : 'rgba(255, 255, 255, 0.05)'
                  }}
                  initial={{ opacity: 0, y: 50, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    rotateY: 5,
                    boxShadow: `0 20px 60px ${category.color}40`
                  }}
                  onClick={() => setActiveSection(category.id)}
                >
                  <motion.div
                    className="text-center space-y-4"
                    animate={activeSection === category.id ? { scale: 1.05 } : { scale: 1 }}
                  >
                    <motion.div
                      className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center shadow-2xl"
                      style={{ backgroundColor: category.color }}
                      animate={{
                        boxShadow: activeSection === category.id
                          ? [`0 0 30px ${category.color}60`, `0 0 50px ${category.color}80`, `0 0 30px ${category.color}60`]
                          : '0 10px 30px rgba(0, 0, 0, 0.3)'
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <IconComponent size={28} color="white" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-white">
                      {category.name}
                    </h3>
                    
                    <p className="text-gray-400">
                      {category.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Drinks Display - 3D Card Grid */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {drinks[activeSection]?.map((drink, index) => (
                <motion.div
                  key={drink.id}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, y: 50, rotateX: 20 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -10,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  onClick={() => setSelectedDrink(drink)}
                >
                  {/* Card */}
                  <div className="relative p-8 rounded-3xl backdrop-blur-sm border border-white/10 overflow-hidden"
                       style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))' }}>
                    
                    {/* Background glow effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at center, #6f837a, transparent)`
                      }}
                    />

                    {/* Image */}
                    <div className="relative mb-6 overflow-hidden rounded-2xl">
                      <img
                        src={drink.image}
                        alt={drink.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Favorite button */}
                      <motion.button
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(drink.id);
                        }}
                      >
                        <Heart
                          size={16}
                          className={favorites.has(drink.id) ? 'text-red-500 fill-current' : 'text-white'}
                        />
                      </motion.button>

                      {/* Intensity indicators */}
                      <div className="absolute bottom-4 left-4">
                        <div className="flex space-x-1">
                          {Array.from({ length: 10 }).map((_, i) => (
                            <div
                              key={i}
                              className={`w-1 h-4 rounded-full ${
                                i < drink.intensity ? 'bg-white' : 'bg-white/30'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-white mt-1 block">Intensity</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#6f837a] group-hover:bg-clip-text transition-all duration-300">
                          {drink.name}
                        </h3>
                        <p className="text-sm font-medium" style={{ color: '#6f837a' }}>
                          {drink.tagline}
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {drink.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {drink.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-xs font-semibold rounded-full border"
                            style={{ 
                              backgroundColor: '#6f837a20',
                              borderColor: '#6f837a40',
                              color: '#6f837a'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Price and action */}
                      <div className="flex items-center justify-between pt-4">
                        <span className="text-3xl font-bold" style={{ color: '#6f837a' }}>
                          ₺{drink.price}
                        </span>
                        <motion.button
                          className="px-6 py-3 rounded-2xl font-semibold shadow-lg flex items-center space-x-2"
                          style={{ backgroundColor: '#6f837a' }}
                          whileHover={{ scale: 1.05, x: 2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ShoppingBag size={16} />
                          <span>Add</span>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Drink Detail Modal */}
      <AnimatePresence>
        {selectedDrink && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDrink(null)}
            />

            {/* Modal */}
            <motion.div
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 backdrop-blur-sm"
              style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.9), rgba(111,131,122,0.1))' }}
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: 15 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="p-8">
                {/* Close button */}
                <motion.button
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedDrink(null)}
                >
                  <X size={20} color="white" />
                </motion.button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Image */}
                  <div className="space-y-6">
                    <motion.div
                      className="relative rounded-2xl overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                    >
                      <img
                        src={selectedDrink.image}
                        alt={selectedDrink.name}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </motion.div>

                    {/* Characteristics */}
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: 'Intensity', value: selectedDrink.intensity },
                        { label: 'Sweetness', value: selectedDrink.sweetness },
                        { label: 'Complexity', value: selectedDrink.complexity }
                      ].map((char) => (
                        <div key={char.label} className="text-center p-4 rounded-2xl bg-white/5">
                          <div className="text-2xl font-bold mb-2" style={{ color: '#6f837a' }}>
                            {char.value}/10
                          </div>
                          <div className="text-sm text-gray-400">{char.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-4xl font-bold text-white mb-2">
                        {selectedDrink.name}
                      </h2>
                      <p className="text-xl font-medium mb-4" style={{ color: '#6f837a' }}>
                        {selectedDrink.tagline}
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        {selectedDrink.description}
                      </p>
                    </div>

                    {/* Story */}
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <h3 className="text-lg font-semibold text-white mb-3">The Story</h3>
                      <p className="text-gray-300 italic leading-relaxed">
                        {selectedDrink.story}
                      </p>
                    </div>

                    {/* Ingredients */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Ingredients</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {selectedDrink.ingredients.map((ingredient, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center space-x-3 p-3 rounded-xl bg-white/5"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#6f837a' }} />
                            <span className="text-gray-300 text-sm">{ingredient}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Temperature */}
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5">
                      <span className="text-gray-300">Available as:</span>
                      <span className="font-semibold" style={{ color: '#6f837a' }}>
                        {selectedDrink.temperature}
                      </span>
                    </div>

                    {/* Action */}
                    <div className="flex items-center justify-between pt-6">
                      <span className="text-4xl font-bold" style={{ color: '#6f837a' }}>
                        ₺{selectedDrink.price}
                      </span>
                      <motion.button
                        className="px-8 py-4 rounded-2xl text-white font-semibold shadow-2xl flex items-center space-x-3"
                        style={{ backgroundColor: '#6f837a' }}
                        whileHover={{ 
                          scale: 1.05, 
                          boxShadow: '0 20px 60px rgba(111, 131, 122, 0.4)' 
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ShoppingBag size={20} />
                        <span>Add to Experience</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Builder Section - Interactive */}
      <section className="relative py-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <motion.h2
                className="text-6xl md:text-8xl font-bold"
                style={{
                  background: 'linear-gradient(45deg, #ffffff, #6f837a, #ffffff)',
                  backgroundSize: '300% 300%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                CREATE
              </motion.h2>
              <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Become the architect of your perfect drink.
                <br />
                Every ingredient, every moment, crafted by you.
              </p>
            </div>

            {/* Interactive elements */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {[
                { icon: Eye, title: "Visualize", desc: "See your creation come to life" },
                { icon: Coffee, title: "Customize", desc: "Every detail, your choice" },
                { icon: Sparkles, title: "Experience", desc: "Taste your imagination" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-8 rounded-3xl backdrop-blur-sm border border-white/10"
                  style={{ background: 'rgba(255, 255, 255, 0.05)' }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    backgroundColor: 'rgba(111, 131, 122, 0.1)',
                    boxShadow: '0 20px 60px rgba(111, 131, 122, 0.3)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: '#6f837a' }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <item.icon size={28} color="white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
<Link href='build'
>        <motion.button
              className="px-16 py-8 rounded-3xl font-bold text-2xl shadow-2xl border-2 border-white/20 backdrop-blur-sm flex items-center space-x-4 mx-auto"
              style={{ backgroundColor: '#6f837a' }}
              whileHover={{ 
                scale: 1.1, 
                y: -10,
                boxShadow: '0 30px 80px rgba(111, 131, 122, 0.5)',
                borderColor: 'rgba(255, 255, 255, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 20px 60px rgba(111, 131, 122, 0.3)',
                  '0 25px 70px rgba(111, 131, 122, 0.5)',
                  '0 20px 60px rgba(111, 131, 122, 0.3)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span>Begin Your Creation</span>
              <ArrowRight size={28} />
            </motion.button>
            </Link>    
          </motion.div>
        </div>
      </section>

      {/* Footer - Floating Design */}
      <footer className="relative py-20 mt-32">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="rounded-3xl p-12 backdrop-blur-sm border border-white/10"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(111,131,122,0.1))' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              
              {/* Brand */}
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center space-x-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-2xl"
                    style={{ backgroundColor: '#6f837a' }}
                  >
                    <span className="text-white font-bold text-xl">T</span>
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-white">REPUBLIK</span>
                    <div className="text-sm text-gray-400">immersive experience</div>
                  </div>
                </motion.div>
                <p className="text-gray-300 leading-relaxed">
                  Where technology meets tradition, and every moment becomes an experience worth savoring.
                </p>
              </div>
              
              {/* Experience */}
              <div className="space-y-4">
                <h4 className="font-bold text-lg text-white">Experience</h4>
                <div className="space-y-3 text-gray-300">
                  {[
                    { icon: Clock, text: "Daily: 9:00 AM - 11:00 PM" },
                    { icon: Phone, text: "+90 555 123 4567" },
                    { icon: MapPin, text: "Multiple Dimensions" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 cursor-pointer"
                      whileHover={{ x: 5, color: '#6f837a' }}
                    >
                      <item.icon size={16} />
                      <span className="text-sm">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Connect */}
              <div className="space-y-4">
                <h4 className="font-bold text-lg text-white">Connect</h4>
                <motion.a
                  href="#"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-2xl border border-white/20 backdrop-blur-sm"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: '#6f837a',
                    borderColor: '#6f837a',
                    boxShadow: '0 10px 30px rgba(111, 131, 122, 0.4)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Instagram size={20} />
                </motion.a>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                &copy; 2025 T-Republik. All experiences reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default TRepublikMenu;