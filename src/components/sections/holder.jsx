import React, { useState } from 'react';

// Sample product data
const productCategories = {
  phones: Array.from({ length: 30 }, (_, i) => ({
    id: `phone-${i + 1}`,
    name: `Phone Model ${i + 1}`,
    price: 299 + (i * 50),
    originalPrice: i % 3 === 0 ? (299 + (i * 50)) * 1.25 : null,
    onSale: i % 3 === 0,
    image: '📱'
  })),
  computers: Array.from({ length: 30 }, (_, i) => ({
    id: `computer-${i + 1}`,
    name: `Computer ${i + 1}`,
    price: 799 + (i * 100),
    originalPrice: i % 4 === 0 ? (799 + (i * 100)) * 1.3 : null,
    onSale: i % 4 === 0,
    image: '💻'
  })),
  tablets: Array.from({ length: 30 }, (_, i) => ({
    id: `tablet-${i + 1}`,
    name: `Tablet ${i + 1}`,
    price: 399 + (i * 40),
    originalPrice: i % 5 === 0 ? (399 + (i * 40)) * 1.2 : null,
    onSale: i % 5 === 0,
    image: '📱'
  })),
  tvs: Array.from({ length: 30 }, (_, i) => ({
    id: `tv-${i + 1}`,
    name: `TV ${i + 1}"`,
    price: 499 + (i * 80),
    originalPrice: i % 3 === 0 ? (499 + (i * 80)) * 1.35 : null,
    onSale: i % 3 === 0,
    image: '📺'
  })),
  monitors: Array.from({ length: 30 }, (_, i) => ({
    id: `monitor-${i + 1}`,
    name: `Monitor ${i + 1}"`,
    price: 199 + (i * 30),
    originalPrice: i % 4 === 0 ? (199 + (i * 30)) * 1.25 : null,
    onSale: i % 4 === 0,
    image: '🖥️'
  })),
  peripherals: Array.from({ length: 30 }, (_, i) => ({
    id: `peripheral-${i + 1}`,
    name: `Peripheral ${i + 1}`,
    price: 49 + (i * 10),
    originalPrice: i % 3 === 0 ? (49 + (i * 10)) * 1.3 : null,
    onSale: i % 3 === 0,
    image: '⌨️'
  })),
  printers: Array.from({ length: 30 }, (_, i) => ({
    id: `printer-${i + 1}`,
    name: `Printer ${i + 1}`,
    price: 149 + (i * 20),
    originalPrice: i % 5 === 0 ? (149 + (i * 20)) * 1.2 : null,
    onSale: i % 5 === 0,
    image: '🖨️'
  }))
};

const categories = [
  { id: 'deals', name: 'Deals', icon: '🔥' },
  { id: 'phones', name: 'Phones', icon: '📱' },
  { id: 'computers', name: 'Computers', icon: '💻' },
  { id: 'tablets', name: 'Tablets', icon: '📱' },
  { id: 'tvs', name: 'TVs', icon: '📺' },
  { id: 'monitors', name: 'Monitors', icon: '🖥️' },
  { id: 'peripherals', name: 'Peripherals', icon: '⌨️' },
  { id: 'printers', name: 'Printers', icon: '🖨️' }
];

export default function TechRetailStore() {
  const [selectedCategory, setSelectedCategory] = useState('deals');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Get all sale items across all categories
  const getAllDeals = () => {
    const allDeals = [];
    Object.keys(productCategories).forEach(categoryKey => {
      const categoryDeals = productCategories[categoryKey].filter(product => product.onSale);
      allDeals.push(...categoryDeals);
    });
    return allDeals;
  };

  const currentProducts = selectedCategory === 'deals' 
    ? getAllDeals() 
    : productCategories[selectedCategory];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold tracking-tight">TechStore</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#shop" className="text-sm hover:text-white/60 transition">Shop</a>
              <a href="#categories" className="text-sm hover:text-white/60 transition">Categories</a>
              <a href="#support" className="text-sm hover:text-white/60 transition">Support</a>
            </nav>
            <button className="px-4 py-2 bg-white text-black text-sm font-medium hover:bg-white/90 transition">
              Cart (0)
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              Premium tech.<br/>Simple prices.
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
              Everything you need. Nothing you don't.
            </p>
            <button className="px-8 py-4 bg-white text-black font-medium text-lg hover:bg-white/90 transition">
              Browse Products
            </button>
          </div>
        </div>
      </section>

      {/* Categories Bento Grid */}
      <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Shop by category</h2>
          
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {/* Deals - Large Featured (2x2) */}
            <div 
              className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-8 flex flex-col justify-between border-0 hover:scale-[1.02] transition-all cursor-pointer group relative overflow-hidden"
              onClick={() => setSelectedCategory('deals')}
            >
              <div className="absolute top-4 right-4 w-12 h-12 bg-purple-400/30 rounded-full blur-2xl"></div>
              <div>
                <div className="text-6xl mb-6 group-hover:scale-110 transition">🔥</div>
                <h3 className="text-4xl font-bold mb-2">Deals</h3>
                <p className="text-white/80 text-lg">Hot offers today</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-sm">{getAllDeals().length} items</span>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">→</span>
                </div>
              </div>
            </div>

            {/* Phones (1x1) */}
            <div 
              className="bg-zinc-100 rounded-3xl p-6 flex flex-col justify-between border-0 hover:scale-[1.02] transition-all cursor-pointer group"
              onClick={() => setSelectedCategory('phones')}
            >
              <div className="text-5xl mb-auto group-hover:scale-110 transition">📱</div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900">Phones</h3>
                <p className="text-zinc-600 text-sm">30 models</p>
              </div>
            </div>

            {/* Computers (1x1) */}
            <div 
              className="bg-zinc-100 rounded-3xl p-6 flex flex-col justify-between border-0 hover:scale-[1.02] transition-all cursor-pointer group"
              onClick={() => setSelectedCategory('computers')}
            >
              <div className="text-5xl mb-auto group-hover:scale-110 transition">💻</div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900">Computers</h3>
                <p className="text-zinc-600 text-sm">30 models</p>
              </div>
            </div>

            {/* Tablets (1x1) */}
            <div 
              className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-6 flex flex-col justify-between border-0 hover:scale-[1.02] transition-all cursor-pointer group"
              onClick={() => setSelectedCategory('tablets')}
            >
              <div className="text-5xl mb-auto group-hover:scale-110 transition">📱</div>
              <div>
                <h3 className="text-xl font-bold">Tablets</h3>
                <p className="text-white/80 text-sm">30 models</p>
              </div>
            </div>

            {/* TVs (1x1) */}
            <div 
              className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-6 flex flex-col justify-between border-0 hover:scale-[1.02] transition-all cursor-pointer group"
              onClick={() => setSelectedCategory('tvs')}
            >
              <div className="text-5xl mb-auto group-hover:scale-110 transition">📺</div>
              <div>
                <h3 className="text-xl font-bold">TVs</h3>
                <p className="text-white/80 text-sm">30 models</p>
              </div>
            </div>

            {/* Monitors (2x1) */}
            <div 
              className="md:col-span-2 bg-zinc-100 rounded-3xl p-6 flex items-center justify-between border-0 hover:scale-[1.02] transition-all cursor-pointer group"
              onClick={() => setSelectedCategory('monitors')}
            >
              <div>
                <div className="text-5xl mb-3 group-hover:scale-110 transition">🖥️</div>
                <h3 className="text-2xl font-bold text-zinc-900">Monitors</h3>
                <p className="text-zinc-600 text-sm">High-performance displays</p>
              </div>
              <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-white">
                →
              </div>
            </div>

            {/* Peripherals (1x1) */}
            <div 
              className="bg-zinc-100 rounded-3xl p-6 flex flex-col justify-between border-0 hover:scale-[1.02] transition-all cursor-pointer group"
              onClick={() => setSelectedCategory('peripherals')}
            >
              <div className="text-5xl mb-auto group-hover:scale-110 transition">⌨️</div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900">Peripherals</h3>
                <p className="text-zinc-600 text-sm">30 items</p>
              </div>
            </div>

            {/* Printers (1x1) */}
            <div 
              className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-6 flex flex-col justify-between border-0 hover:scale-[1.02] transition-all cursor-pointer group"
              onClick={() => setSelectedCategory('printers')}
            >
              <div className="text-5xl mb-auto group-hover:scale-110 transition">🖨️</div>
              <div>
                <h3 className="text-xl font-bold">Printers</h3>
                <p className="text-white/80 text-sm">30 models</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Listing Section */}
      <section id="shop" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          {/* Category Tabs */}
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                    selectedCategory === cat.id
                      ? 'bg-white text-black'
                      : 'bg-zinc-900 text-white/60 hover:text-white'
                  }`}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-2 rounded text-sm ${
                  viewMode === 'grid' ? 'bg-white text-black' : 'bg-zinc-900'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-2 rounded text-sm ${
                  viewMode === 'list' ? 'bg-white text-black' : 'bg-zinc-900'
                }`}
              >
                List
              </button>
            </div>
          </div>

          {/* Products Grid/List */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentProducts.map((product) => (
                <div
                  key={product.id}
                  className={`bg-zinc-900 rounded-xl overflow-hidden border transition group cursor-pointer ${
                    product.onSale 
                      ? 'border-white/20 hover:border-white/40' 
                      : 'border-white/5 hover:border-white/20'
                  }`}
                >
                  {product.onSale && (
                    <div className="absolute top-3 right-3 bg-white text-black px-3 py-1 rounded-full text-xs font-bold z-10">
                      SALE
                    </div>
                  )}
                  <div className="aspect-square bg-zinc-800 flex items-center justify-center text-6xl group-hover:scale-105 transition relative">
                    {product.image}
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold">${product.price}</span>
                        {product.onSale && product.originalPrice && (
                          <span className="text-sm text-white/40 line-through">
                            ${Math.round(product.originalPrice)}
                          </span>
                        )}
                      </div>
                      <button className="px-4 py-2 bg-white text-black text-sm font-medium rounded hover:bg-white/90 transition">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {currentProducts.map((product) => (
                <div
                  key={product.id}
                  className={`bg-zinc-900 rounded-xl p-6 border transition flex items-center justify-between cursor-pointer relative ${
                    product.onSale 
                      ? 'border-white/20 hover:border-white/40' 
                      : 'border-white/5 hover:border-white/20'
                  }`}
                >
                  {product.onSale && (
                    <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full text-xs font-bold">
                      SALE
                    </div>
                  )}
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-zinc-800 rounded-lg flex items-center justify-center text-3xl">
                      {product.image}
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                      <div className="flex items-baseline gap-3">
                        <span className="text-2xl font-bold">${product.price}</span>
                        {product.onSale && product.originalPrice && (
                          <span className="text-base text-white/40 line-through">
                            ${Math.round(product.originalPrice)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-white text-black font-medium rounded hover:bg-white/90 transition">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-white/40 text-sm">
          © 2026 TechStore. Premium technology retail.
        </div>
      </footer>
    </div>
  );
}