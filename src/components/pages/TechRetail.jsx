import { useState, useEffect, useRef, useMemo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { ArrowRight, X, SlidersHorizontal, Search, ChevronDown, ChevronUp, ContactIcon } from 'lucide-react'

import { supabase } from '../../lib/supabase'
import { techRetailCategories, categoryFilters } from '../../constants'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'


gsap.registerPlugin(ScrollTrigger)

const TechRetail = () => {

    const [selectedCategory, setSelectedCategory] = useState('deals');
    const [viewMode, setViewMode] = useState('grid');
    
    // ADD THESE NEW LINES:
    const [products, setProducts] = useState({})
    const [loading, setLoading] = useState(true)
    const [dbError, setDbError] = useState(null)

    // Fetch products from Supabase
    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        try {
            setLoading(true)
            setDbError(null)
            
            const { data, error } = await supabase
                .from('products')
                .select('*')
            
            if (error) throw error

            // Organize by category
            const organized = {}

            data.forEach(product => {
                const categoryKey = product.category?.toLowerCase().trim()

                if (!organized[categoryKey]) {
                    organized[categoryKey] = []
                }

                organized[categoryKey].push({
                    id: product.id,
                    name: product.name,
                    brand: product.brand,
                    price: product.price,
                    originalPrice: product.original_price,
                    onSale: product.on_sale,
                    inStock: product.in_stock,
                    preOrder: product.pre_order,
                    rating: product.rating,
                    warranty: product.warranty,
                    image: product.image,
                    bestSelling: product.best_selling,
                    newArrival: product.new_arrival,
                })
            })
            
            setProducts(organized)
            console.log('✅ Loaded products from Supabase:', organized)
        } catch (error) {
            console.error('❌ Error fetching products:', error)
            setDbError(error.message)
            setProducts({}) // Empty products on error
        } finally {
            setLoading(false)
        }
    }
    
    const [showFilters, setShowFilters] = useState(false);
    const [expandedFilters, setExpandedFilters] = useState({
        core: true,
        categorySpecific: true
    });


    const categoryCardRefs = useRef([]);
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const imageRef = useRef(null);

    useGSAP(() => {
        // Header text slides in from left
        gsap.fromTo(
            headerRef.current,
            { y: 60, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                }
            }
        );

        // Hero image slides in from right
        gsap.fromTo(
            imageRef.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                }
            }
        );

        // Cards alternate left and right
        categoryCardRefs.current.forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    }
                }
            );
        });
    }, { scope: sectionRef });

    // Core filter states
    const [filters, setFilters] = useState({
        search: '',
        sortBy: 'bestSelling',
        brands: [],
        priceRange: [0, 5000],
        pricePreset: 'all',
        rating: 0,
        availability: [],
        warranty: [],
        // Category-specific filters
        categoryFilters: {}
    });

    // Clear filters
    const clearFilters = () => {
        setFilters({
            search: '',
            sortBy: 'bestSelling',
            brands: [],
            priceRange: [0, 5000],
            pricePreset: 'all',
            rating: 0,
            availability: [],
            warranty: [],
            categoryFilters: {}
        });
    };

    // Get all products
    const getAllDeals = () => {
        const allDeals = [];
        Object.keys(products).forEach(categoryKey => {
            if (products[categoryKey]) {
                const categoryDeals = products[categoryKey].filter(product => product.onSale);
                allDeals.push(...categoryDeals);
            }
        });
        return allDeals;
    };

    // Get unique values for filters
    const getUniqueValues = (key) => {
        const productList = selectedCategory === 'deals' ? getAllDeals() : products[selectedCategory];
        if (!productList) return [];
        
        const values = productList.map(p => p[key]).filter(Boolean);
        if (Array.isArray(values[0])) {
            return [...new Set(values.flat())].sort();
        }
        return [...new Set(values)].sort();
    };

    // Apply all filters and sorting
    const getFilteredProducts = useMemo(() => {
        let productList = selectedCategory === 'deals' ? getAllDeals() : products[selectedCategory] || [];
        
        // Search filter
        if (filters.search) {
            productList = productList.filter(p => 
                p.name.toLowerCase().includes(filters.search.toLowerCase())
            );
        }
        
        // Brand filter
        if (filters.brands.length > 0) {
            productList = productList.filter(p => filters.brands.includes(p.brand));
        }
        
        // Price filter
        if (filters.pricePreset !== 'all') {
            const ranges = {
                '0-100': [0, 100],
                '100-500': [100, 500],
                '500+': [500, Infinity]
            };
            const [min, max] = ranges[filters.pricePreset] || [0, Infinity];
            productList = productList.filter(p => p.price >= min && p.price <= max);
        } else {
            productList = productList.filter(p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]);
        }
        
        // Rating filter
        if (filters.rating > 0) {
            productList = productList.filter(p => p.rating >= filters.rating);
        }
        
        // Availability filter
        if (filters.availability.length > 0) {
            productList = productList.filter(p => {
                if (filters.availability.includes('inStock') && p.inStock) return true;
                if (filters.availability.includes('preOrder') && p.preOrder) return true;
                if (filters.availability.includes('onSale') && p.onSale) return true;
                return false;
            });
        }
        
        // Warranty filter
        if (filters.warranty.length > 0) {
            productList = productList.filter(p => filters.warranty.includes(p.warranty));
        }
        
        // Category-specific filters
        Object.entries(filters.categoryFilters).forEach(([key, values]) => {
            if (values && values.length > 0) {
                productList = productList.filter(p => {
                    if (Array.isArray(p[key])) {
                        return values.some(v => p[key].includes(v));
                    }
                    return values.includes(p[key]);
                });
            }
        });
        
        // Sorting
        switch (filters.sortBy) {
            case 'priceLowHigh':
                productList.sort((a, b) => a.price - b.price);
                break;
            case 'priceHighLow':
                productList.sort((a, b) => b.price - a.price);
                break;
            case 'bestSelling':
                productList.sort((a, b) => (b.bestSelling ? 1 : 0) - (a.bestSelling ? 1 : 0));
                break;
            case 'newArrivals':
                productList.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
                break;
            case 'rating':
                productList.sort((a, b) => b.rating - a.rating);
                break;
            default:
                break;
        }
        
        return productList;
    }, [selectedCategory, filters, products]);

    // Toggle functions
    const toggleArrayFilter = (filterKey, value) => {
        setFilters(prev => ({
            ...prev,
            [filterKey]: prev[filterKey].includes(value)
                ? prev[filterKey].filter(v => v !== value)
                : [...prev[filterKey], value]
        }));
    };

    const toggleCategoryFilter = (key, value) => {
        setFilters(prev => {
            const current = prev.categoryFilters[key] || [];
            return {
                ...prev,
                categoryFilters: {
                    ...prev.categoryFilters,
                    [key]: current.includes(value)
                        ? current.filter(v => v !== value)
                        : [...current, value]
                }
            };
        });
    };

    // Add loading check BEFORE the main return
    if (loading) {
        return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="text-center">
            <div className="text-6xl mb-4">⏳</div>
            <p className="text-2xl">Loading products...</p>
            </div>
        </section>
        )
    }

    // Add error check BEFORE the main return
    if (dbError) {
        return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="text-center max-w-md">
            <div className="text-6xl mb-4">❌</div>
            <p className="text-2xl mb-4">Database Connection Error</p>
            <p className="text-white/60">{dbError}</p>
            </div>
        </section>
        )
    }

  return (
    <section id='tech-retail' className='mt-70' ref={sectionRef}>

        <div className="min-h-screen">
            {/* Header Section */}
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">

                <div className="max-w-7xl mx-auto overflow-hidden">
                    <div className="text-center" ref={headerRef}>
                        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
                            Premium Tech.
                        </h1>
                        <p className="text-xl text-white/60 max-w-2xl mx-auto mb-1">
                            Everything You Need. Nothing You Don't.
                        </p>
                        <div ref={imageRef} className='w-full max-w-350 mx-auto sm:mt-10 h-55 sm:h-75 md:h-100 lg:h-170 bg-zinc-950
                      rounded-2xl sm:rounded-3xl
                      flex items-center justify-center
                      relative overflow-hidden
                      border border-white/5'>
                            <img  src="/images/navii.jpg" alt="Tech solutions" className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Category Grid using bento grid Layout */}
            <div className="py-20 px-4 sm:px-6 lg:px-8 mt-40">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12">Shop By Category</h2>
                    {/* Bento Grid Insert */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">

                        {/* Deals Card */}
                        <div ref={(el) => (categoryCardRefs.current[0] = el)}
                            className="md:col-span-2 md:row-span-2 rounded-3xl cursor-pointer"
                            onClick={() => setSelectedCategory('deals')}
                        >
                            <div className="w-full h-full bg-linear-to-br from-purple-600 to-purple-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-0 group overflow-hidden hover:scale-[1.02] transition-[scale] duration-300">
                                <div className="absolute top-4 right-4 w-12 h-12 bg-purple-400/30 rounded-full blur-2xl"></div>
                                <div>
                                    <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 transition-transform duration-500 group-hover:rotate-7">🔥</div>
                                    <h3 className="text-3xl sm:text-4xl font-bold mb-2">Deals/Sales</h3>
                                    <p className="text-white/80 text-base sm:text-lg">Cant Miss Offers</p>
                                </div>
                                <div className="flex items-center justify-between gap-2 mt-4">
                                    <span className="text-white font-semibold text-sm sm:text-base shrink-0">{getAllDeals().length} Items</span>
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/40 rounded-full flex items-center justify-center shrink-0 ml-auto -mt-4 sm:mt-0 transition-transform duration-300 group-hover:translate-x-1">
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2.5} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Phones */}
                        <div ref={(el) => (categoryCardRefs.current[1] = el)}
                            className="rounded-3xl cursor-pointer"
                            onClick={() => setSelectedCategory('phones')}
                        >
                            <div className="w-full h-full bg-zinc-100 rounded-3xl p-6 flex flex-col justify-between group hover:scale-[1.02] transition-[scale] duration-300">
                                <div className="text-5xl mb-6 transition-transform duration-500 group-hover:rotate-6">📱</div>
                                <div>
                                    <h3 className="text-xl font-bold text-zinc-900">Phones</h3>
                                    <p className="text-zinc-600 text-sm">30 models</p>
                                </div>
                            </div>
                        </div>

                        {/* Computers */}
                        <div ref={(el) => (categoryCardRefs.current[2] = el)}
                            className="rounded-3xl cursor-pointer"
                            onClick={() => setSelectedCategory('computers')}
                        >
                            <div className="w-full h-full bg-zinc-100 rounded-3xl p-6 flex flex-col justify-between group hover:scale-[1.02] transition-[scale] duration-300">
                                <div className="text-5xl mb-6 transition-transform duration-500 group-hover:rotate-6">💻</div>
                                <div>
                                    <h3 className="text-xl font-bold text-zinc-900">Computers</h3>
                                    <p className="text-zinc-600 text-sm">30 models</p>
                                </div>
                            </div>
                        </div>

                        {/* Tablets */}
                        <div ref={(el) => (categoryCardRefs.current[3] = el)}
                            className="rounded-3xl cursor-pointer"
                            onClick={() => setSelectedCategory('tablets')}
                        >
                            <div className="w-full h-full bg-linear-to-br from-purple-600 to-purple-800 rounded-3xl p-6 flex flex-col justify-between group hover:scale-[1.02] transition-[scale] duration-300">
                                <div className="text-5xl mb-6 transition-transform duration-500 group-hover:rotate-6">📱</div>
                                <div>
                                    <h3 className="text-xl font-bold">Tablets</h3>
                                    <p className="text-white/80 text-sm">30 models</p>
                                </div>
                            </div>
                        </div>

                        {/* TVs */}
                        <div ref={(el) => (categoryCardRefs.current[4] = el)}
                            className="rounded-3xl cursor-pointer"
                            onClick={() => setSelectedCategory('tvs')}
                        >
                            <div className="w-full h-full bg-linear-to-br from-purple-600 to-purple-800 rounded-3xl p-6 flex flex-col justify-between group hover:scale-[1.02] transition-[scale] duration-300">
                                <div className="text-5xl mb-6 transition-transform duration-500 group-hover:rotate-6">📺</div>
                                <div>
                                    <h3 className="text-xl font-bold">TVs</h3>
                                    <p className="text-white/80 text-sm">30 models</p>
                                </div>
                            </div>
                        </div>

                        {/* Monitors */}
                        <div ref={(el) => (categoryCardRefs.current[5] = el)}
                            className="md:col-span-2 rounded-3xl cursor-pointer"
                            onClick={() => setSelectedCategory('monitors')}
                        >
                            <div className="w-full h-full bg-zinc-100 rounded-3xl p-6 flex items-center justify-between group hover:scale-[1.02] transition-[scale] duration-300">
                                <div>
                                    <div className="text-5xl mb-3 transition-transform duration-500 group-hover:rotate-6">🖥️</div>
                                    <h3 className='text-2xl font-bold text-zinc-900'>Monitors</h3>
                                    <p className="text-zinc-600 text-sm">High Performance Displays</p>
                                </div>
                                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-purple-500">
                                    <ArrowRight className="w-5 h-5 text-white" strokeWidth={2.5} />
                                </div>
                            </div>
                        </div>

                        {/* Peripherals */}
                        <div ref={(el) => (categoryCardRefs.current[6] = el)}
                            className="rounded-3xl cursor-pointer"
                            onClick={() => setSelectedCategory('peripherals')}
                        >
                            <div className="w-full h-full bg-zinc-100 rounded-3xl p-6 flex flex-col justify-between group hover:scale-[1.02] transition-[scale] duration-300">
                                <div className='text-5xl mb-6 transition-transform duration-500 group-hover:rotate-6'>⌨️</div>
                                <div>
                                    <h3 className="text-xl font-bold text-zinc-900">Peripherals</h3>
                                    <p className="text-zinc-600 text-sm">30 items</p>
                                </div>
                            </div>
                        </div>

                        {/* Printers */}
                        <div ref={(el) => (categoryCardRefs.current[7] = el)}
                            className="rounded-3xl cursor-pointer"
                            onClick={() => setSelectedCategory('printers')}
                        >
                            <div className="w-full h-full bg-linear-to-br from-purple-600 to-purple-800 rounded-3xl p-6 flex flex-col justify-between group hover:scale-[1.02] transition-[scale] duration-300">
                                <div className='text-5xl mb-6 transition-transform duration-500 group-hover:rotate-6'>🖨️</div>
                                <div>
                                    <h3 className='text-xl font-bold'>Printers</h3>
                                    <p className='text-white/80 text-sm'>30 models</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* product listing with the enhanced features */}
            <div className="py-20 px-4 sm:px-6 lg:px-8" id='products'>
                <div className="max-w-7xl mx-auto">

                    {/* Search and sort textfield/bar */}
                    <div className="mb-8 flex flex-col md:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1 relative">

                            <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40' />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={filters.search} 
                                onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                                className="w-full pl-10 pr-4 py-3 bg-zinc-900 rounded-lg border border-white/10 focus:border-orange-100 outline-none transition"
                            />
                        </div>

                        {/* Sort */}
                        <select
                            value={filters.sortBy}
                            onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value }))}
                            className="px-4 py-3 bg-zinc-900 rounded-lg border border-white/10 focus:border-orange-100 outline-none transition"
                        >
                            <option value="bestSelling">Best Selling</option>
                            <option value="newArrivals">New Arrivals</option>
                            <option value="priceLowHigh">Price: Low to High</option>
                            <option value="priceHighLow">Price: High to Low</option>
                            <option value="rating">Highest Rated</option>
                        </select>

                        {/* ViewMode */}
                        <div className="flex gap-2">

                            <button onClick={() => setShowFilters(!showFilters)} className='lg:hidden px-4 py-3 rounded-lg bg-zinc-900 flex items-center gap-2 border border-white/10'>
                                <SlidersHorizontal className="w-5 h-5" />
                                Filters
                            </button>

                            <button onClick={() => setViewMode('list')} 
                                    className={`px-4 py-3 rounded-lg transition ${
                                        viewMode === 'list' ? 'bg-white text-black' : 'bg-zinc-900 border border-white/10'
                                    }`}
                            >
                                List                                
                            </button>
                        </div>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
                        {techRetailCategories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                                        selectedCategory === cat.id
                                        ? 'bg-white text-black'
                                        : 'bg-zinc-900 text-white/60 hover:text-white border border-white/10'
                                    }`}
                                >
                                    {cat.icon} {cat.name}
                                </button>
                        ))}
                    </div>
                    
                    {/* main content : filters and products */}
                    <div className="flex gap-8">

                        {/* Enhanced filter sidebar */}
                        <aside className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-80 shrink-0
                                bg-zinc-900 rounded-xl p-6 h-fit sticky top-24max-h-[calc(100vh-120px)] overflow-y-auto`}
                        >   
                            {/* Filter Header */}
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                                <h3 className="text-lg font-semibold flex items-center gap-2">
                                    <SlidersHorizontal className="w-5 h-5" />
                                    Filters
                                </h3>
                                <button onClick={clearFilters} className='text-sm text-orange-100 hover:underline'>
                                    Clear All
                                </button>
                            </div>

                            {/* Core Filters */}
                            <div className="mb-6">
                                <button onClick={() => setExpandedFilters(prev => ({ ...prev, core: !prev.core }))}
                                        className='w-full flex items-center justify-between mb-4 font-semibold text-orange-100'
                                > 
                                    <span>Core Filters</span>
                                    {expandedFilters.core ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                </button>

                                {expandedFilters.core &&(
                                    <div className="space-y-6">
                                        {/* Brand filter */}
                                        <div>
                                            <h4 className="font-medium mb-3 text-lg">Brand</h4>
                                            <div className="space-y-2 max-h-48 overflow-y-auto">
                                                {getUniqueValues('brand').map(brand => (
                                                    <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                                                        <input
                                                            type="checkbox"
                                                            checked={filters.brands.includes(brand)}
                                                            onChange={() => toggleArrayFilter('brands', brand)}
                                                            className="w-4 h-4 rounded border-white/20 bg-zinc-800 checked:bg-orange-100"
                                                        />
                                                            <span className="text-sm group-hover:text-white transition">{brand}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Price Presets */}
                                        <div>
                                            <h4 className="font-medium mb-3 text-lg">Price Range</h4>
                                            <div className="space-y-2 mb-3">
                                                {[
                                                    { value: 'all', label: 'All Prices' },
                                                    { value: '0-100', label: '$0 - $100' },
                                                    { value: '100-500', label: '$100 - $500' },
                                                    { value: '500+', label: '$500+' }
                                                ].map(preset => (
                                                    <label key={preset.value} className='flex items-center gap-2 cursor-pointer group'>
                                                        <input
                                                            type="radio"
                                                            name="pricePreset"
                                                            checked={filters.pricePreset === preset.value}
                                                            onChange={() => setFilters(prev => ({ ...prev, pricePreset: preset.value }))}
                                                            className="w-4 h-4"
                                                        />
                                                        <span className='text-sm group-hover:text-white transition'>{preset.label}</span>
                                                    </label>
                                                ))}
                                            </div>

                                            {/* Rating Filter */}
                                            <div>
                                                <h4 className="font-medium mb-3 text-lg">Rating</h4>
                                                <div className="space-y-2">
                                                    {[
                                                        { value: 0, label: 'All Ratings' },
                                                        { value: 3, label: '3★ & above' },
                                                        { value: 4, label: '4★ & above' },
                                                        { value: 5, label: '5★ only' }
                                                    ].map(rating => (
                                                        <label key={rating.value} className='flex items-center gap-2 cursor-pointer group'>
                                                            <input 
                                                                type="checkbox"
                                                                name="rating" 
                                                                checked={filters.rating === rating.value}
                                                                onChange={() => setFilters(prev => ({ ...prev, rating: rating.value }))}
                                                                className='w-4 h-4'
                                                            />
                                                            <span className="text-sm group-hover:text-white transition">{rating.label}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Availability */}
                                            <div className='mt-4'>
                                                <h4 className="font-medium mb-3 text-lg">Availability</h4>
                                                <div className="space-y-2">
                                                    {[
                                                        { value: 'inStock', label: 'In Stock' },
                                                        { value: 'preOrder', label: 'Pre-Order' },
                                                        { value: 'onSale', label: 'On Sale / Clearance' }
                                                    ].map(avail => (
                                                        <label key={avail.value} className="flex items-center gap-2 cursor-pointer group">
                                                            <input
                                                                type="checkbox"
                                                                checked={filters.availability.includes(avail.value)}
                                                                onChange={() => toggleArrayFilter('availability', avail.value)}
                                                                className="w-4 h-4 rounded"
                                                            />
                                                            <span className="text-sm group-hover:text-white transition">{avail.label}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                            
                                            {/* Warranty */}
                                            <div className='mt-7'>
                                                <h4 className="font-medium mb-3 text-lg">Warranty</h4>
                                                <div className="space-y-2">
                                                    {getUniqueValues('warranty').map(warranty => (
                                                        <label key={warranty} className="flex items-center gap-2 cursor-pointer group">
                                                            <input
                                                                type="checkbox"
                                                                checked={filters.warranty.includes(warranty)}
                                                                onChange={() => toggleArrayFilter('warranty', warranty)}
                                                                className="w-4 h-4 rounded"
                                                            />
                                                            <span className="text-sm group-hover:text-white transition">{warranty}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Category Specific Filters */}
                            {selectedCategory !== 'deals' &&
                            categoryFilters[selectedCategory] &&
                            categoryFilters[selectedCategory].length > 0 && (
                                <div className="mb-6 pt-6 border-t border-white/10">
                                    <button
                                        onClick={() => setExpandedFilters(prev => ({ ...prev, categorySpecific: !prev.categorySpecific }))}
                                        className='w-full flex items-center justify-between mb-4 font-semibold text-orange-100'
                                    >
                                        <span>Category Filters</span>
                                        {expandedFilters.categorySpecific ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                    </button>

                                    {expandedFilters.categorySpecific && (
                                        <div className="space-y-6">
                                            {categoryFilters[selectedCategory].map(filter => (
                                                <div key={filter.key}>
                                                    <h4 className="font-medium mb-3 text-sm">{filter.label}</h4>
                                                    <div className="space-y-2 max-h-48 overflow-y-auto">
                                                        {getUniqueValues(filter.key).map(option => {
                                                            const isChecked = filter.isBoolean
                                                                ? (filters.categoryFilters[filter.key] || []).includes(option === 'Yes')
                                                                : (filters.categoryFilters[filter.key] || []).includes(option);

                                                            return (
                                                                <label key={option} className="flex items-center gap-2 cursor-pointer group">
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={isChecked}
                                                                        onChange={() =>
                                                                            toggleCategoryFilter(
                                                                                filter.key,
                                                                                filter.isBoolean ? (option === 'Yes') : option
                                                                            )
                                                                        }
                                                                        className="w-4 h-4 rounded"
                                                                    />
                                                                    <span className="text-sm group-hover:text-white transition">{option}</span>
                                                                </label>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                        </aside>

                        {/* Product Grid List */}
                        <div className="flex-1">
                            {getFilteredProducts.length > 0 ? (
                                viewMode === 'grid' ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {getFilteredProducts.map((product) => (
                                            <div key={product.id} className="bg-zinc-900 rounded-xl overflow-hidden border border-white/10 hover:border-orange-100/50 transition group cursor-pointer">

                                                <div className="aspect-square bg-zinc-800 flex items-center justify-center text-6xl relative overflow-hidden">
                                                    <div className="group-hover:scale-110 transition-transform duration-500">
                                                            {product.image}
                                                    </div>
                                                    {product.onSale && (
                                                        <div className="absolute top-2 right-2 bg-orange-100 text-white px-2 py-1 rounded-full text-xs font-bold">
                                                            SALE
                                                        </div>
                                                    )}
                                                    {product.newArrival && (
                                                        <div className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                                                            New
                                                        </div>
                                                    )}
                                                    {!product.inStock && (
                                                        <div className="absolute bottom-2 left-2 bg-zinc-950/90 text-white px-2 py-1 rounded-full text-xs">
                                                            Pre-Order
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="p-4">
                                                    <p className="text-xs text-white/40 mb-1">{product.brand}</p>
                                                    <h3 className="font-medium mb-2 line-clamp-2">{product.name}</h3>
                                                    <div className="flex items-center gap-1 mb-2 text-yellow-400">
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
                                        {getFilteredProducts.map((product) => (
                                            <div key={product.id} 
                                                className="bg-zinc-900 rounded-xl p-6 border border-white/10 hover:border-orange-100/50 transition flex items-center gap-6 cursor-pointer"
                                            >
                                                <div className="w-24 h-24 bg-zinc-800 rounded-lg flex items-center justify-center text-4xl shrink-0">
                                                    {product.image}
                                                </div>
                                                <div className='flex-1'>
                                                    <p className="text-xs text-white/40 mb-1">{product.brand}</p>
                                                    <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                                                    <div className="flex items-center gap-1 mb-2 text-yellow-400">
                                                        {'⭐'.repeat(product.rating)}
                                                    </div>
                                                    <div className='flex items-baseline gap-3'>
                                                        <span className="text-2xl font-bold">${product.price}</span>
                                                            {product.onSale && product.originalPrice && (
                                                                <span className="text-base text-white/40 line-through">
                                                                    ${Math.round(product.originalPrice)}
                                                                </span>
                                                            )}
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    {product.onSale && (
                                                            <span className="bg-orange-100 text-white px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                                                                SALE
                                                            </span>
                                                        )}
                                                        {product.newArrival && (
                                                            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                                                                NEW
                                                            </span>
                                                        )}
                                                        {!product.inStock && (
                                                            <span className="bg-zinc-800 text-white px-3 py-1 rounded-full text-xs whitespace-nowrap">
                                                                Pre-Order
                                                            </span>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )
                            ): (
                                <div className="text-center py-20">
                                    <p className="text-xl text-white/60 mb-4">No products found matching your filters</p>
                                    <button onClick={clearFilters} className="px-6 py-3 bg-orange-100 text-white rounded-lg hover:bg-orange-100/90 transition">
                                        Clear All Filters
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

export default TechRetail