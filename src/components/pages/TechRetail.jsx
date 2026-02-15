import React, { useState, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { ArrowRight } from 'lucide-react'

import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

gsap.registerPlugin(ScrollTrigger)

// Tech Retail Products/Categories
const productCategories = {
    phones: Array.from({length: 30}, (_, i) => ({
        id: `phone-${i + 1}`,
        name: `Phone Model ${i + 1}`,
        price: 299 + (i * 50),
        originalPrice: i % 3 === 0 ? (299 + (i * 50)) * 1.25 : null,
        onSale: i % 3 === 0,
        image: '📱'
    })),

    computers: Array.from({length: 30}, (_, i) => ({
        id: `Computer-${i + 1}`,
        name: `Computer Model ${i + 1}`,
        price: 599 + (i * 50),
        originalPrice: i % 4 === 0 ? (799 + (i * 100)) * 1.3 : null,
        onSale: i % 4 === 0,
        image: '💻'
    })),

    tablets: Array.from({length: 30}, (_, i) => ({
        id: `tablet-${i + 1}`,
        name: `Tablet ${i + 1}`,
        price: 399 + (i * 40),
        originalPrice: i % 5 === 0 ? (399 + (i * 40)) * 1.2 : null,
        onSale: i % 5 === 0,
        image: '📱'
    })),

    tvs: Array.from({length: 30}, (_, i) => ({
        id: `tv-${i + 1}`,
        name: `TV ${i + 1}"`,
        price: 499 + (i * 80),
        originalPrice: i % 3 === 0 ? (499 + (i * 80)) * 1.35 : null,
        onSale: i % 3 === 0,
        image: '📺'
    })),

    monitors: Array.from({length: 30}, (_, i) => ({
        id: `monitor-${i + 1}`,
        name: `Monitor ${i + 1}"`,
        price: 199 + (i * 30),
        originalPrice: i % 4 === 0 ? (199 + (i * 30)) * 1.25 : null,
        onSale: i % 4 === 0,
        image: '🖥️'
    })),

    peripherals: Array.from({length: 30}, (_, i) => ({
        id: `peripheral-${i + 1}`,
        name: `Peripheral ${i + 1}`,
        price: 49 + (i * 10),
        originalPrice: i % 3 === 0 ? (49 + (i * 10)) * 1.3 : null,
        onSale: i % 3 === 0,
        image: '⌨️'
    })),

    printers: Array.from({length: 30}, (_, i) => ({
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

export default function TechRetail() {
    const [selectedCategory, setSelectedCategory] = useState('deals');
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

    // Refs for animations
    const sectionRef = useRef(null)
    const headerRef = useRef(null)
    const categoryHeaderRef = useRef(null)
    const categoryCardRefs = useRef([])
    const headerTitleRef = useRef(null)
    const headerTextRef = useRef(null)
    const headerButtonRef = useRef(null)

    useGSAP(() => {

        // Header title animation
    gsap.fromTo(
        headerTitleRef.current,
        { y: 40, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: headerTitleRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        }
    )

    // Header text animation (with delay)
    gsap.fromTo(
        headerTextRef.current,
        { y: 40, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: headerTitleRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        }
    )

    // Header button animation (with more delay)
    gsap.fromTo(
        headerButtonRef.current,
        { y: 40, opacity: 0, scale: 0.95 },
        {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: 0.4,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: headerTitleRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        }
    )
        // Header animation
        gsap.fromTo(
            headerRef.current,
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        )

        // Category header animation
        gsap.fromTo(
            categoryHeaderRef.current,
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: categoryHeaderRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        )

        // Category cards staggered animation
        categoryCardRefs.current.forEach((card, index) => {
            if (card) { // Check if card exists
                gsap.fromTo(
                    card,
                    {
                        y: 60,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        delay: index * 0.1, // Stagger effect
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                )
            }
        })
    }, { scope: sectionRef })

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
    <section ref={sectionRef} id='techRetail' className='mt-70'>
        <div className="min-h-screen">
            {/* Header Section */}
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div ref={headerRef}  className="text-center">
                        <h1 ref={headerTitleRef} className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
                            Premium Tech
                        </h1>
                        <p ref={headerTextRef} className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
                            Everything you need. Nothing you don't.
                        </p>

                        <button ref={headerButtonRef} className="px-8 py-4 bg-white text-black font-medium text-lg hover:bg-orange-100 transition">
                            Browse Products
                        </button>
                    </div>
                </div>
            </div>

            {/* Category Selection - Bento Grid */}
            <div className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 ref={categoryHeaderRef} className="text-4xl font-bold mb-12">Shop By Category</h2>

                    {/* Bento Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">

                        {/* Deals Square - Large Featured (2x2) */}
                        <div ref={(el) => (categoryCardRefs.current[0] = el)}
                            className="md:col-span-2 md:row-span-2 bg-linear-to-br from-purple-600 to-purple-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-0 hover:scale-[1.02] transition-all cursor-pointer group relative overflow-hidden"
                            onClick={() => setSelectedCategory('deals')}
                        >
                            <div className="absolute top-4 right-4 w-12 h-12 bg-purple-400/30 rounded-full blur-2xl"></div>
                            
                            <div className="">
                                <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 transform transition-all duration-500 group-hover:rotate-7">
                                    🔥
                                </div>
                                <h3 className="text-3xl sm:text-4xl font-bold mb-2">Deals/Sales</h3>
                                <p className="text-white/80 text-base sm:text-lg">Cant Miss Offers</p>
                            </div>
                            
                            <div className="flex items-center justify-between gap-2 mt-4">
                                <span className="text-white font-semibold text-sm sm:text-base shrink-0">
                                    {getAllDeals().length} Items
                                </span>
                                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/40 rounded-full flex items-center justify-center 
                                                group-hover:bg-white/40 transition-all duration-300 group-hover:translate-x-1 
                                                shrink-0 ml-auto -mt-4 sm:mt-0">
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2.5} />
                                </div>
                            </div>
                        </div>

                        {/* Phones Square - (1x1) */}
                        <div ref={(el) => (categoryCardRefs.current[1] = el)}
                            className="bg-zinc-100 rounded-3xl p-6 flex flex-col justify-between border-0 hover:scale-[1.02] transition-all cursor-pointer group"
                            onClick={() => setSelectedCategory('phones')}
                        >
                            <div className="text-5xl mb-6 transform transition-all duration-500 group-hover:rotate-6">📱</div>
                            <div>
                                <h3 className="text-xl font-bold text-zinc-900">Phones</h3>
                                <p className="text-zinc-600 text-sm">30 models</p>
                            </div>
                        </div>

                        {/* Computers */}
                        <div ref={(el) => (categoryCardRefs.current[2] = el)}
                            className="bg-zinc-100 rounded-3xl p-6 flex flex-col justify-between border-0 hover:scale-[1.02] transition-all cursor-pointer group"
                            onClick={() => setSelectedCategory('computers')}
                        >
                            <div className="text-5xl mb-6 transform transition-all duration-500 group-hover:rotate-6">💻</div>
                            <div>
                                <h3 className="text-xl font-bold text-zinc-900">Computers</h3>
                                <p className="text-zinc-600 text-sm">30 models</p>
                            </div>
                        </div>

                        {/* Tablets */}
                        <div ref={(el) => (categoryCardRefs.current[3] = el)}
                            className="bg-linear-to-br from-purple-600 to-purple-800 rounded-3xl p-6 flex flex-col justify-between border-0 hover:scale-[1.02] transition-all cursor-pointer group"
                            onClick={() => setSelectedCategory('tablets')}
                        >
                            <div className="text-5xl mb-6 transform transition-all duration-500 group-hover:rotate-6">📱</div>
                            <div>
                                <h3 className="text-xl font-bold">Tablets</h3>
                                <p className="text-white/80 text-sm">30 models</p>
                            </div>
                        </div>

                        {/* Tvs */}
                        <div ref={(el) => (categoryCardRefs.current[4] = el)}
                            className="bg-linear-to-br from-purple-600 to-purple-800 rounded-3xl p-6 flex flex-col justify-between border-0 hover:scale-[1.02] transition-all cursor-pointer group"
                            onClick={() => setSelectedCategory('tvs')}
                        >
                            <div className="text-5xl mb-6 transform transition-all duration-500 group-hover:rotate-6">📺</div>
                            <div>
                                <h3 className="text-xl font-bold">TVs</h3>
                                <p className="text-white/80 text-sm">30 models</p>
                            </div>
                        </div>

                        {/* Monitors */}
                        <div ref={(el) => (categoryCardRefs.current[5] = el)}
                            className="md:col-span-2 bg-zinc-100 rounded-3xl p-6 flex items-center justify-between border-0 hover:scale-[1.02] transition-all cursor-pointer group"
                            onClick={() => setSelectedCategory('monitors')}
                        >
                            <div>
                                <div className="text-5xl mb-3 transform transition-all duration-500 group-hover:rotate-6">🖥️</div>
                                <h3 className='text-2xl font-bold text-zinc-900'>Monitors</h3>
                                <p className="text-zinc-600 text-sm">High Performance Displays</p>
                            </div>
                            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center 
                                            group-hover:bg-purple-500 transition-all duration-300 
                                            group-hover:translate-x-1">
                                <ArrowRight className="w-5 h-5 text-white" strokeWidth={2.5} />
                            </div>
                        </div>

                        {/* Peripherals */}
                        <div ref={(el) => (categoryCardRefs.current[6] = el)}
                            className="bg-zinc-100 rounded-3xl p-6 flex flex-col justify-between border-0 hover:scale-[1.02] transition-all cursor-pointer group"
                            onClick={() => setSelectedCategory('peripherals')}
                        >
                            <div className='text-5xl mb-6 transform transition-all duration-500 group-hover:rotate-6'>⌨️</div>
                            <div>
                                <h3 className="text-xl font-bold text-zinc-900">Peripherals</h3>
                                <p className="text-zinc-600 text-sm">30 items</p>
                            </div>
                        </div>

                        {/* Printers */}
                        <div ref={(el) => (categoryCardRefs.current[7] = el)}
                            className="bg-linear-to-br from-purple-600 to-purple-800 rounded-3xl p-6 flex flex-col justify-between border-0 hover:scale-[1.02] transition-all cursor-pointer group"
                            onClick={() => setSelectedCategory('printers')}
                        >
                            <div className='text-5xl mb-6 transform transition-all duration-500 group-hover:rotate-6'>🖨️</div>
                            <div>
                                <h3 className='text-xl font-bold'>Printers</h3>
                                <p className='text-white/80 text-sm'>30 models</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            {/* Product Listings */}
            <div className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950" id='products'>
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

                    {/* Product listings under each category */}
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
                            
                            </div>
                        ))}
                        </div>
                    )}
                </div>
            </div>

            <Contact />
            <Footer />
        </div>
    </section>
  )
}
