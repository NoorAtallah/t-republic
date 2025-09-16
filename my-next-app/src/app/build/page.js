'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Plus,
  Minus,
  RotateCcw,
  ShoppingBag,
  Instagram,
  Phone,
  MapPin,
  Clock,
  Info,
  Droplets,
  Coffee,
  Sparkles
} from 'lucide-react';

const TRepublikMenu = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedBlocks, setSelectedBlocks] = useState([]);
  const [activeCategory, setActiveCategory] = useState('base');
  const [cupSize, setCupSize] = useState('medium');
  const [showInfo, setShowInfo] = useState(null);

  const cupSizes = {
    small: { name: 'Small', price: 0, height: 180, width: 100 },
    medium: { name: 'Medium', price: 5, height: 220, width: 120 },
    large: { name: 'Large', price: 10, height: 260, width: 140 }
  };

  const blockCategories = {
    base: {
      name: 'Tea Base',
      color: '#6f837a',
      description: 'The foundation of your drink',
      blocks: [
        {
          id: 'black-tea',
          name: 'Black Tea',
          color: '#8B4513',
          price: 0,
          opacity: 0.7,
          description: 'Rich, robust Ceylon black tea',
          caffeine: 'High',
          flavor: 'Bold, Malty'
        },
        {
          id: 'green-tea',
          name: 'Green Tea',
          color: '#90EE90',
          price: 2,
          opacity: 0.6,
          description: 'Delicate jasmine green tea',
          caffeine: 'Medium',
          flavor: 'Fresh, Grassy'
        },
        {
          id: 'oolong-tea',
          name: 'Oolong Tea',
          color: '#DAA520',
          price: 5,
          opacity: 0.8,
          description: 'Premium Taiwanese oolong',
          caffeine: 'Medium',
          flavor: 'Floral, Complex'
        },
        {
          id: 'matcha',
          name: 'Matcha',
          color: '#228B22',
          price: 8,
          opacity: 0.9,
          description: 'Ceremonial grade matcha',
          caffeine: 'High',
          flavor: 'Umami, Earthy'
        }
      ]
    },
    milk: {
      name: 'Milk & Cream',
      color: '#F5F5DC',
      description: 'Creamy foundations and foam layers',
      blocks: [
        {
          id: 'whole-milk',
          name: 'Whole Milk',
          color: '#FFF8DC',
          price: 0,
          opacity: 0.8,
          description: 'Rich, creamy dairy milk',
          texture: 'Smooth',
          flavor: 'Creamy, Sweet'
        },
        {
          id: 'oat-milk',
          name: 'Oat Milk',
          color: '#F5DEB3',
          price: 3,
          opacity: 0.7,
          description: 'Plant-based oat milk',
          texture: 'Velvety',
          flavor: 'Nutty, Mild'
        },
        {
          id: 'coconut-milk',
          name: 'Coconut Milk',
          color: '#FFFAF0',
          price: 3,
          opacity: 0.6,
          description: 'Tropical coconut milk',
          texture: 'Rich',
          flavor: 'Tropical, Sweet'
        },
        {
          id: 'milk-foam',
          name: 'Milk Foam',
          color: '#FFFFFF',
          price: 4,
          opacity: 0.9,
          description: 'Silky micro foam layer',
          texture: 'Airy',
          flavor: 'Light, Creamy'
        }
      ]
    },
    sweeteners: {
      name: 'Sweeteners',
      color: '#FFD700',
      description: 'Natural and specialty sweeteners',
      blocks: [
        {
          id: 'brown-sugar',
          name: 'Brown Sugar',
          color: '#D2691E',
          price: 0,
          opacity: 0.5,
          description: 'Caramelized brown sugar',
          sweetness: 'Rich',
          flavor: 'Caramel, Molasses'
        },
        {
          id: 'honey',
          name: 'Wildflower Honey',
          color: '#FFB347',
          price: 2,
          opacity: 0.6,
          description: 'Local wildflower honey',
          sweetness: 'Floral',
          flavor: 'Floral, Complex'
        },
        {
          id: 'maple-syrup',
          name: 'Maple Syrup',
          color: '#D2691E',
          price: 3,
          opacity: 0.7,
          description: 'Pure Canadian maple syrup',
          sweetness: 'Rich',
          flavor: 'Woody, Sweet'
        },
        {
          id: 'agave',
          name: 'Agave Nectar',
          color: '#F0E68C',
          price: 2,
          opacity: 0.4,
          description: 'Organic agave nectar',
          sweetness: 'Clean',
          flavor: 'Neutral, Pure'
        }
      ]
    },
    toppings: {
      name: 'Pearls & Toppings',
      color: '#000000',
      description: 'Textural elements and fun additions',
      blocks: [
        {
          id: 'black-pearls',
          name: 'Black Tapioca Pearls',
          color: '#2F4F4F',
          price: 3,
          opacity: 1,
          description: 'Classic chewy tapioca pearls',
          texture: 'Chewy',
          flavor: 'Neutral, Sweet'
        },
        {
          id: 'white-pearls',
          name: 'White Pearls',
          color: '#F8F8FF',
          price: 4,
          opacity: 0.9,
          description: 'Premium white tapioca',
          texture: 'Soft',
          flavor: 'Creamy, Mild'
        },
        {
          id: 'fruit-jellies',
          name: 'Fruit Jellies',
          color: '#FF69B4',
          price: 4,
          opacity: 0.8,
          description: 'Assorted fruit jellies',
          texture: 'Bouncy',
          flavor: 'Fruity, Sweet'
        },
        {
          id: 'grass-jelly',
          name: 'Grass Jelly',
          color: '#228B22',
          price: 3,
          opacity: 0.7,
          description: 'Traditional herbal jelly',
          texture: 'Silky',
          flavor: 'Herbal, Cooling'
        },
        {
          id: 'pudding',
          name: 'Vanilla Pudding',
          color: '#FFFFE0',
          price: 5,
          opacity: 0.8,
          description: 'Creamy vanilla pudding',
          texture: 'Smooth',
          flavor: 'Vanilla, Rich'
        }
      ]
    },
    flavors: {
      name: 'Flavor Enhancers',
      color: '#FF6347',
      description: 'Syrups, extracts, and special flavors',
      blocks: [
        {
          id: 'vanilla',
          name: 'Vanilla Extract',
          color: '#F5DEB3',
          price: 2,
          opacity: 0.3,
          description: 'Madagascar vanilla extract',
          intensity: 'Mild',
          flavor: 'Vanilla, Warm'
        },
        {
          id: 'rose-water',
          name: 'Rose Water',
          color: '#FFB6C1',
          price: 3,
          opacity: 0.2,
          description: 'Turkish rose water',
          intensity: 'Delicate',
          flavor: 'Floral, Romantic'
        },
        {
          id: 'cardamom',
          name: 'Cardamom',
          color: '#F0E68C',
          price: 3,
          opacity: 0.4,
          description: 'Ground green cardamom',
          intensity: 'Aromatic',
          flavor: 'Spicy, Citrusy'
        },
        {
          id: 'lavender',
          name: 'Lavender',
          color: '#E6E6FA',
          price: 4,
          opacity: 0.3,
          description: 'Dried lavender flowers',
          intensity: 'Subtle',
          flavor: 'Floral, Calming'
        }
      ]
    }
  };

  const addBlock = (block, category) => {
    const existingIndex = selectedBlocks.findIndex(
      item => item.block.id === block.id
    );
    
    if (existingIndex >= 0) {
      const updated = [...selectedBlocks];
      updated[existingIndex] = {
        ...updated[existingIndex],
        quantity: updated[existingIndex].quantity + 1
      };
      setSelectedBlocks(updated);
    } else {
      setSelectedBlocks([...selectedBlocks, { 
        block, 
        category: category,
        quantity: 1,
        position: selectedBlocks.length
      }]);
    }
  };

  const removeBlock = (blockId) => {
    const existingIndex = selectedBlocks.findIndex(
      item => item.block.id === blockId
    );
    
    if (existingIndex >= 0) {
      const updated = [...selectedBlocks];
      if (updated[existingIndex].quantity > 1) {
        updated[existingIndex].quantity -= 1;
        setSelectedBlocks(updated);
      } else {
        setSelectedBlocks(selectedBlocks.filter(item => item.block.id !== blockId));
      }
    }
  };

  const resetDrink = () => {
    setSelectedBlocks([]);
    setCupSize('medium');
  };

  const calculateTotal = () => {
    const basePrice = 15; // Base drink price
    const sizePrice = cupSizes[cupSize].price;
    const blocksPrice = selectedBlocks.reduce(
      (total, item) => total + (item.block.price * item.quantity), 0
    );
    return basePrice + sizePrice + blocksPrice;
  };

  const renderDrinkVisualization = () => {
    const cup = cupSizes[cupSize];
    const layers = selectedBlocks
      .filter(item => ['base', 'milk', 'sweeteners'].includes(item.category))
      .sort((a, b) => {
        const order = { base: 0, sweeteners: 1, milk: 2 };
        return order[a.category] - order[b.category];
      });
    
    const toppings = selectedBlocks.filter(item => 
      ['toppings', 'flavors'].includes(item.category)
    );

    return (
      <div className="relative flex items-end justify-center" style={{ height: cup.height + 40 }}>
        {/* Cup Container */}
        <motion.div
          className="relative rounded-b-3xl rounded-t-lg border-4 border-gray-300 bg-white/20 backdrop-blur-sm overflow-hidden"
          style={{ 
            width: cup.width, 
            height: cup.height,
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}
          animate={{ scale: [0.95, 1, 0.95] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          {/* Liquid Layers */}
          {layers.map((item, index) => {
            const layerHeight = Math.max(30, (cup.height - 40) / Math.max(layers.length, 1));
            const bottom = index * (layerHeight * 0.8);
            
            return (
              <motion.div
                key={`${item.block.id}-${index}`}
                className="absolute left-2 right-2 rounded"
                style={{
                  backgroundColor: item.block.color,
                  opacity: item.block.opacity,
                  height: layerHeight * item.quantity * 0.5,
                  bottom: bottom
                }}
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: layerHeight * item.quantity * 0.5, 
                  opacity: item.block.opacity 
                }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              />
            );
          })}
          
          {/* Toppings/Pearls */}
          {toppings.map((item, index) => (
            [...Array(Math.min(item.quantity * 3, 12))].map((_, pearlIndex) => (
              <motion.div
                key={`${item.block.id}-${index}-${pearlIndex}`}
                className="absolute rounded-full"
                style={{
                  backgroundColor: item.block.color,
                  opacity: item.block.opacity,
                  width: item.category === 'toppings' ? 8 : 4,
                  height: item.category === 'toppings' ? 8 : 4,
                  left: `${20 + Math.random() * 60}%`,
                  bottom: `${10 + Math.random() * 60}%`,
                }}
                initial={{ scale: 0, y: 20 }}
                animate={{ 
                  scale: 1, 
                  y: [0, -5, 0],
                  x: [0, Math.random() * 4 - 2, 0]
                }}
                transition={{ 
                  duration: 2 + Math.random(),
                  repeat: Infinity,
                  delay: pearlIndex * 0.1
                }}
              />
            ))
          ))}
          
          {/* Straw */}
          <div 
            className="absolute top-2 right-4 bg-white/60 rounded-full transform rotate-12"
            style={{ width: 4, height: cup.height - 20 }}
          />
        </motion.div>
        
        {/* Cup Label */}
        <div className="absolute -bottom-8 text-center">
          <div className="text-sm font-semibold" style={{ color: '#6f837a' }}>
            {cupSizes[cupSize].name}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div className="flex items-center space-x-3" whileHover={{ scale: 1.02 }}>
              <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: '#6f837a' }}
              >
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-black tracking-wide">REPUBLIK</span>
                <div className="text-xs text-gray-500 -mt-1 tracking-wider">refreshments reimagined.</div>
              </div>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Build', 'About', 'Locations'].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className={`font-medium transition-colors relative ${
                    item === 'Build' ? 'text-black' : 'text-gray-600 hover:text-black'
                  }`}
                  whileHover={{ y: -1 }}
                >
                  {item}
                  {item === 'Build' && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                      style={{ backgroundColor: '#6f837a' }}
                      layoutId="underline"
                    />
                  )}
                </motion.a>
              ))}
              <motion.button
                className="px-8 py-3 rounded-2xl text-white font-semibold shadow-lg"
                style={{ backgroundColor: '#6f837a' }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Order Now
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-black mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Build Your
            <br />
            <span className="bg-gradient-to-r from-gray-600 to-black bg-clip-text text-transparent">
              Perfect Drink
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Layer by layer, create a drink that's uniquely yours. Choose your base, add your flavors, 
            and watch your creation come to life.
          </motion.p>
        </div>
      </section>

      {/* Main Builder Interface */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Drink Visualization */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="bg-white rounded-3xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-center mb-8">Your Creation</h3>
                  
                  {/* Cup Size Selector */}
                  <div className="flex justify-center space-x-4 mb-8">
                    {Object.entries(cupSizes).map(([size, details]) => (
                      <button
                        key={size}
                        onClick={() => setCupSize(size)}
                        className={`px-4 py-2 rounded-xl font-semibold transition-all ${
                          cupSize === size 
                            ? 'text-white' 
                            : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
                        }`}
                        style={{ 
                          backgroundColor: cupSize === size ? '#6f837a' : undefined 
                        }}
                      >
                        {details.name}
                        {details.price > 0 && <span className="text-xs ml-1">+₺{details.price}</span>}
                      </button>
                    ))}
                  </div>

                  {/* Drink Visualization */}
                  <div className="mb-8">
                    {renderDrinkVisualization()}
                  </div>

                  {/* Selected Ingredients */}
                  <div className="space-y-2 mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">Ingredients:</h4>
                    {selectedBlocks.length === 0 ? (
                      <p className="text-gray-500 text-sm italic">Start adding blocks to build your drink</p>
                    ) : (
                      selectedBlocks.map((item, index) => (
                        <div key={index} className="flex justify-between items-center text-sm">
                          <span>{item.block.name}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-500">x{item.quantity}</span>
                            <button
                              onClick={() => removeBlock(item.block.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Minus size={16} />
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Actions */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-2xl font-bold">
                      <span>Total:</span>
                      <span style={{ color: '#6f837a' }}>₺{calculateTotal()}</span>
                    </div>
                    
                    <div className="flex space-x-3">
                      <button
                        onClick={resetDrink}
                        className="flex-1 py-3 rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
                      >
                        <RotateCcw size={18} />
                        <span>Reset</span>
                      </button>
                      
                      <motion.button
                        className="flex-1 py-3 rounded-xl text-white font-semibold flex items-center justify-center space-x-2"
                        style={{ backgroundColor: '#6f837a' }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={selectedBlocks.length === 0}
                      >
                        <ShoppingBag size={18} />
                        <span>Add to Cart</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Building Blocks Interface */}
            <div className="lg:col-span-2">
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2 mb-8">
                {Object.entries(blockCategories).map(([key, category]) => (
                  <motion.button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`px-6 py-3 rounded-2xl font-semibold transition-all ${
                      activeCategory === key 
                        ? 'text-white shadow-lg' 
                        : 'text-gray-600 bg-white hover:bg-gray-50 border border-gray-200'
                    }`}
                    style={{ 
                      backgroundColor: activeCategory === key ? category.color : undefined 
                    }}
                    whileHover={{ y: -2 }}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </div>

              {/* Category Description */}
              <div className="mb-8">
                <p className="text-gray-600">
                  {blockCategories[activeCategory].description}
                </p>
              </div>

              {/* Blocks Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blockCategories[activeCategory].blocks.map((block) => {
                  const selectedQuantity = selectedBlocks.find(
                    item => item.block.id === block.id
                  )?.quantity || 0;

                  return (
                    <motion.div
                      key={block.id}
                      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {/* Block Visual */}
                      <div className="relative h-20 flex items-center justify-center" style={{ backgroundColor: `${block.color}20` }}>
                        <motion.div
                          className="w-16 h-12 rounded-lg shadow-md"
                          style={{ 
                            backgroundColor: block.color,
                            opacity: block.opacity
                          }}
                          whileHover={{ scale: 1.1, rotateY: 15 }}
                        />
                        
                        {selectedQuantity > 0 && (
                          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                            {selectedQuantity}
                          </div>
                        )}
                      </div>
                      
                      {/* Block Info */}
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-gray-900 group-hover:text-gray-700">
                            {block.name}
                          </h4>
                          <div className="flex items-center space-x-2">
                            {block.price > 0 && (
                              <span className="text-sm font-semibold text-green-600">
                                +₺{block.price}
                              </span>
                            )}
                            <button
                              onClick={() => setShowInfo(showInfo === block.id ? null : block.id)}
                              className="text-gray-400 hover:text-gray-600"
                            >
                              <Info size={16} />
                            </button>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-4">
                          {block.description}
                        </p>

                        {/* Additional Properties */}
                        <AnimatePresence>
                          {showInfo === block.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mb-4 text-xs space-y-1"
                            >
                              {Object.entries(block).map(([key, value]) => {
                                if (['id', 'name', 'color', 'price', 'opacity', 'description'].includes(key)) return null;
                                return (
                                  <div key={key} className="flex justify-between">
                                    <span className="capitalize text-gray-500">{key}:</span>
                                    <span className="text-gray-700">{value}</span>
                                  </div>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                        
                        {/* Add Button */}
                        <motion.button
                          onClick={() => addBlock(block, activeCategory)}
                          className="w-full py-2 rounded-xl font-semibold transition-all flex items-center justify-center space-x-2"
                          style={{ 
                            backgroundColor: selectedQuantity > 0 ? '#6f837a' : 'transparent',
                            color: selectedQuantity > 0 ? 'white' : '#6f837a',
                            border: `2px solid #6f837a`
                          }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Plus size={18} />
                          <span>Add Block</span>
                        </motion.button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: '#6f837a' }}
                >
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <div>
                  <span className="text-2xl font-bold">REPUBLIK</span>
                  <div className="text-sm text-gray-400">refreshments reimagined.®</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Build your perfect drink, block by block. Every ingredient carefully sourced, 
                every combination expertly balanced for the ultimate personalized experience.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Visit Us</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-3">
                  <Clock size={16} />
                  <span className="text-sm">Daily: 9:00 AM - 11:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} />
                  <span className="text-sm">+90 555 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={16} />
                  <span className="text-sm">Multiple Locations</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Connect</h4>
              <motion.a
                href="#"
                className="inline-flex items-center justify-center w-12 h-12 rounded-2xl border border-gray-600 hover:border-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Instagram size={18} />
              </motion.a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 T-Republik. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TRepublikMenu;