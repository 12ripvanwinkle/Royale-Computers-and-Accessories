import React, { useState, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { ArrowRight, X, SlidersHorizontal } from 'lucide-react'

import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

gsap.registerPlugin(ScrollTrigger)

// Tech Retail Products/Categories with enhanced data
const productCategories = {
    phones: Array.from({length: 30}, (_, i) => ({
        id: `phone-${i + 1}`,
        name: `Phone Model ${i + 1}`,
        brand: ['Apple', 'Samsung', 'Google', 'OnePlus'][i % 4],
        price: 299 + (i * 50),
        originalPrice: i % 3 === 0 ? (299 + (i * 50)) * 1.25 : null,
        onSale: i % 3 === 0,
        storage: ['64GB', '128GB', '256GB', '512GB'][i % 4],
        color: ['Black', 'White', 'Blue', 'Red'][i % 4],
        rating: 3 + (i % 3),
        image: '📱'
    })),

    computers: Array.from({length: 30}, (_, i) => ({
        id: `Computer-${i + 1}`,
        name: `Computer Model ${i + 1}`,
        brand: ['Dell', 'HP', 'Lenovo', 'Apple'][i % 4],
        price: 599 + (i * 50),
        originalPrice: i % 4 === 0 ? (799 + (i * 100)) * 1.3 : null,
        onSale: i % 4 === 0,
        processor: ['Intel i5', 'Intel i7', 'Intel i9', 'AMD Ryzen'][i % 4],
        ram: ['8GB', '16GB', '32GB', '64GB'][i % 4],
        rating: 3 + (i % 3),
        image: '💻'
    })),

    tablets: Array.from({length: 30}, (_, i) => ({
        id: `tablet-${i + 1}`,
        name: `Tablet ${i + 1}`,
        brand: ['Apple', 'Samsung', 'Amazon', 'Microsoft'][i % 4],
        price: 399 + (i * 40),
        originalPrice: i % 5 === 0 ? (399 + (i * 40)) * 1.2 : null,
        onSale: i % 5 === 0,
        storage: ['64GB', '128GB', '256GB', '512GB'][i % 4],
        rating: 3 + (i % 3),
        image: '📱'
    })),

    tvs: Array.from({length: 30}, (_, i) => ({
        id: `tv-${i + 1}`,
        name: `TV ${i + 1}"`,
        brand: ['Samsung', 'LG', 'Sony', 'TCL'][i % 4],
        price: 499 + (i * 80),
        originalPrice: i % 3 === 0 ? (499 + (i * 80)) * 1.35 : null,
        onSale: i % 3 === 0,
        screenSize: ['43"', '55"', '65"', '75"'][i % 4],
        resolution: ['1080p', '4K', '4K', '8K'][i % 4],
        rating: 3 + (i % 3),
        image: '📺'
    })),

    monitors: Array.from({length: 30}, (_, i) => ({
        id: `monitor-${i + 1}`,
        name: `Monitor ${i + 1}"`,
        brand: ['Dell', 'LG', 'Samsung', 'ASUS'][i % 4],
        price: 199 + (i * 30),
        originalPrice: i % 4 === 0 ? (199 + (i * 30)) * 1.25 : null,
        onSale: i % 4 === 0,
        screenSize: ['24"', '27"', '32"', '34"'][i % 4],
        refreshRate: ['60Hz', '144Hz', '165Hz', '240Hz'][i % 4],
        rating: 3 + (i % 3),
        image: '🖥️'
    })),

    peripherals: Array.from({length: 30}, (_, i) => ({
        id: `peripheral-${i + 1}`,
        name: `Peripheral ${i + 1}`,
        brand: ['Logitech', 'Razer', 'Corsair', 'SteelSeries'][i % 4],
        price: 49 + (i * 10),
        originalPrice: i % 3 === 0 ? (49 + (i * 10)) * 1.3 : null,
        onSale: i % 3 === 0,
        type: ['Keyboard', 'Mouse', 'Headset', 'Webcam'][i % 4],
        rating: 3 + (i % 3),
        image: '⌨️'
    })),

    printers: Array.from({length: 30}, (_, i) => ({
        id: `printer-${i + 1}`,
        name: `Printer ${i + 1}`,
        brand: ['HP', 'Canon', 'Epson', 'Brother'][i % 4],
        price: 149 + (i * 20),
        originalPrice: i % 5 === 0 ? (149 + (i * 20)) * 1.2 : null,
        onSale: i % 5 === 0,
        type: ['Inkjet', 'Laser', 'All-in-One', 'Photo'][i % 4],
        rating: 3 + (i % 3),
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

export default function TechRetail() {
    const [selectedCategory, setSelectedCategory] = useState('deals');
    const [viewMode, setViewMode] = useState('grid');
    const [showFilters, setShowFilters] = useState(false);
    
    // Filter states
    const [filters, setFilters] = useState({
        brands: [],
        priceRange: [0, 5000],
        rating: 0,
        onSale: false,
    });

    // Refs for animations (keeping existing ones)
    const sectionRef = useRef(null)
    const headerRef = useRef(null)
    const categoryHeaderRef = useRef(null)
    const categoryCardRefs = useRef([])
    const headerTitleRef = useRef(null)
    const headerTextRef = useRef(null)

    useGSAP(() => {
        // ... (keep all your existing animations)
        gsap.fromTo(headerTitleRef.current, { y: 40, opacity: 0 }, {
            y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: headerTitleRef.current, start: "top 80%", toggleActions: "play none none none" }
        })
        gsap.fromTo(headerTextRef.current, { y: 40, opacity: 0 }, {
            y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power3.out",
            scrollTrigger: { trigger: headerTitleRef.current, start: "top 80%", toggleActions: "play none none none" }
        })
        gsap.fromTo(headerRef.current, { y: 40, opacity: 0 }, {
            y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: headerRef.current, start: "top 80%", toggleActions: "play none none none" }
        })
        gsap.fromTo(categoryHeaderRef.current, { y: 40, opacity: 0 }, {
            y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: categoryHeaderRef.current, start: "top 80%", toggleActions: "play none none none" }
        })
        categoryCardRefs.current.forEach((card, index) => {
            if (card) {
                gsap.fromTo(card, { y: 60, opacity: 0 }, {
                    y: 0, opacity: 1, duration: 0.8, delay: index * 0.1, ease: "power3.out",
                    scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none none" }
                })
            }
        })
    }, { scope: sectionRef })

    // Get all sale items
    const getAllDeals = () => {
        const allDeals = [];
        Object.keys(productCategories).forEach(categoryKey => {
            const categoryDeals = productCategories[categoryKey].filter(product => product.onSale);
            allDeals.push(...categoryDeals);
        });
        return allDeals;
    };

    // Get unique brands for current category
    const getUniqueBrands = () => {
        const products = selectedCategory === 'deals' ? getAllDeals() : productCategories[selectedCategory];
        return [...new Set(products.map(p => p.brand))].sort();
    };

    // Filter products
    const getFilteredProducts = () => {
        let products = selectedCategory === 'deals' ? getAllDeals() : productCategories[selectedCategory];
        
        // Apply brand filter
        if (filters.brands.length > 0) {
            products = products.filter(p => filters.brands.includes(p.brand));
        }
        
        // Apply price filter
        products = products.filter(p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]);
        
        // Apply rating filter
        if (filters.rating > 0) {
            products = products.filter(p => p.rating >= filters.rating);
        }
        
        // Apply sale filter
        if (filters.onSale) {
            products = products.filter(p => p.onSale);
        }
        
        return products;
    };

    const currentProducts = getFilteredProducts();

    // Toggle brand filter
    const toggleBrand = (brand) => {
        setFilters(prev => ({
            ...prev,
            brands: prev.brands.includes(brand)
                ? prev.brands.filter(b => b !== brand)
                : [...prev.brands, brand]
        }));
    };

    // Clear all filters
    const clearFilters = () => {
        setFilters({
            brands: [],
            priceRange: [0, 5000],
            rating: 0,
            onSale: false,
        });
    };

    return (
        <section ref={sectionRef} id='techRetail' className='mt-70'>
            <div className="min-h-screen">
                {/* Header Section - keeping your existing code */}
                <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div ref={headerRef} className="text-center">
                            <h1 ref={headerTitleRef} className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
                                Premium Tech
                            </h1>
                            <p ref={headerTextRef} className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
                                Everything you need. Nothing you don't.
                            </p>
                            <img src="/images/navii.jpg" alt="Tech solutions" className="w-full h-full object-cover transition-transform duration-700 rounded-xl ease-out hover:scale-105"/>
                        </div>
                    </div>
                </div>

                {/* Category Selection - keeping your existing bento grid */}
                <div className="py-20 px-4 sm:px-6 lg:px-8 mt-40">
                    {/* ... (keep all your existing category grid code) ... */}
                </div>

                {/* Product Listings with Filters */}
                <div className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950" id='products'>
                    <div className="max-w-7xl mx-auto">
                        
                        {/* Category Tabs & View Toggle */}
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
                                {/* Mobile Filter Toggle */}
                                <button
                                    onClick={() => setShowFilters(!showFilters)}
                                    className="lg:hidden px-3 py-2 rounded bg-zinc-900 flex items-center gap-2"
                                >
                                    <SlidersHorizontal className="w-4 h-4" />
                                    Filters
                                </button>

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

                        {/* Main Content: Filters + Products */}
                        <div className="flex gap-8">
                            
                            {/* Filter Sidebar */}
                            <aside className={`
                                ${showFilters ? 'block' : 'hidden'} lg:block
                                w-full lg:w-64 flex-shrink-0
                                bg-zinc-900 rounded-xl p-6 h-fit sticky top-24
                            `}>
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-semibold">Filters</h3>
                                    <button
                                        onClick={clearFilters}
                                        className="text-sm text-orange-100 hover:underline"
                                    >
                                        Clear All
                                    </button>
                                </div>

                                {/* Brand Filter */}
                                <div className="mb-6">
                                    <h4 className="font-medium mb-3">Brand</h4>
                                    <div className="space-y-2">
                                        {getUniqueBrands().map(brand => (
                                            <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    checked={filters.brands.includes(brand)}
                                                    onChange={() => toggleBrand(brand)}
                                                    className="w-4 h-4 rounded border-white/20 bg-zinc-800 checked:bg-orange-100"
                                                />
                                                <span className="text-sm group-hover:text-white transition">{brand}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Price Range Filter */}
                                <div className="mb-6">
                                    <h4 className="font-medium mb-3">Price Range</h4>
                                    <div className="space-y-3">
                                        <input
                                            type="range"
                                            min="0"
                                            max="5000"
                                            step="50"
                                            value={filters.priceRange[1]}
                                            onChange={(e) => setFilters(prev => ({
                                                ...prev,
                                                priceRange: [0, parseInt(e.target.value)]
                                            }))}
                                            className="w-full"
                                        />
                                        <div className="flex justify-between text-sm text-white/60">
                                            <span>${filters.priceRange[0]}</span>
                                            <span>${filters.priceRange[1]}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Rating Filter */}
                                <div className="mb-6">
                                    <h4 className="font-medium mb-3">Rating</h4>
                                    <div className="space-y-2">
                                        {[5, 4, 3].map(rating => (
                                            <label key={rating} className="flex items-center gap-2 cursor-pointer group">
                                                <input
                                                    type="radio"
                                                    name="rating"
                                                    checked={filters.rating === rating}
                                                    onChange={() => setFilters(prev => ({ ...prev, rating }))}
                                                    className="w-4 h-4"
                                                />
                                                <span className="text-sm group-hover:text-white transition">
                                                    {'⭐'.repeat(rating)} & up
                                                </span>
                                            </label>
                                        ))}
                                        <label className="flex items-center gap-2 cursor-pointer group">
                                            <input
                                                type="radio"
                                                name="rating"
                                                checked={filters.rating === 0}
                                                onChange={() => setFilters(prev => ({ ...prev, rating: 0 }))}
                                                className="w-4 h-4"
                                            />
                                            <span className="text-sm group-hover:text-white transition">All Ratings</span>
                                        </label>
                                    </div>
                                </div>

                                {/* On Sale Filter */}
                                <div>
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            checked={filters.onSale}
                                            onChange={(e) => setFilters(prev => ({ ...prev, onSale: e.target.checked }))}
                                            className="w-4 h-4"
                                        />
                                        <span className="text-sm group-hover:text-white transition">On Sale Only</span>
                                    </label>
                                </div>

                                {/* Active Filters Count */}
                                {(filters.brands.length > 0 || filters.rating > 0 || filters.onSale) && (
                                    <div className="mt-6 pt-6 border-t border-white/10">
                                        <p className="text-sm text-white/60">
                                            {currentProducts.length} products found
                                        </p>
                                    </div>
                                )}
                            </aside>

                            {/* Product Grid/List - keeping your existing product display code */}
                            <div className="flex-1">
                                {viewMode === 'grid' ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {currentProducts.map((product) => (
                                            <div
                                                key={product.id}
                                                className={`bg-zinc-900 rounded-xl overflow-hidden border transition group cursor-pointer ${
                                                    product.onSale 
                                                    ? 'border-white/20 hover:border-white/40' 
                                                    : 'border-white/5 hover:border-white/20'
                                                }`}
                                            >
                                                <div className="aspect-square bg-zinc-800 flex items-center justify-center text-6xl group-hover:scale-105 transition relative">
                                                    {product.image}
                                                    {product.onSale && (
                                                        <div className="absolute top-2 right-2 bg-orange-100 text-white px-2 py-1 rounded-full text-xs font-bold">
                                                            SALE
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="p-4">
                                                    <p className="text-xs text-white/40 mb-1">{product.brand}</p>
                                                    <h3 className="font-medium mb-2">{product.name}</h3>
                                                    <div className="flex items-center gap-1 mb-2">
                                                        {'⭐'.repeat(product.rating)}
                                                    </div>
                                                    <div className="flex items-baseline gap-2">
                                                        <span className="text-xl font-bold">${product.price}</span>
                                                        {product.onSale && product.originalPrice && (
                                                            <span className="text-sm text-white/40 line-through">
                                                                ${Math.round(product.originalPrice)}
                                                            </span>
                                                        )}
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
                                                className={`bg-zinc-900 rounded-xl p-6 border transition flex items-center justify-between cursor-pointer ${
                                                    product.onSale 
                                                    ? 'border-white/20 hover:border-white/40' 
                                                    : 'border-white/5 hover:border-white/20'
                                                }`}
                                            >
                                                <div className="flex items-center gap-6">
                                                    <div className="w-20 h-20 bg-zinc-800 rounded-lg flex items-center justify-center text-3xl">
                                                        {product.image}
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-white/40 mb-1">{product.brand}</p>
                                                        <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                                                        <div className="flex items-center gap-1 mb-2">
                                                            {'⭐'.repeat(product.rating)}
                                                        </div>
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
                                                {product.onSale && (
                                                    <div className="bg-orange-100 text-white px-3 py-1 rounded-full text-xs font-bold">
                                                        SALE
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* No Results */}
                                {currentProducts.length === 0 && (
                                    <div className="text-center py-20">
                                        <p className="text-xl text-white/60">No products found matching your filters</p>
                                        <button
                                            onClick={clearFilters}
                                            className="mt-4 px-6 py-3 bg-orange-100 text-white rounded-lg hover:bg-orange-100/90 transition"
                                        >
                                            Clear Filters
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <Contact />
                <Footer />
            </div>
        </section>
    )
}