import React, { useState, useRef } from 'react';
import { aboutItems } from '../../constants';
import TitleHeader from '../TitleHeader';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export default function About() {
    const aboutRef = useRef(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    useGSAP(() => {

        // Animate header first
        gsap.fromTo(
            '.about-header',
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.about-header',
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );

        // Animate all grid cards
        gsap.fromTo(
            '.about-card',
            { y: 60, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.15,
                scrollTrigger: {
                    trigger: '.about-grid',
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            }
        );

    }, { scope: aboutRef });

    
    return (
        <section id="about" ref={aboutRef}>
            <div className="min-h-screen p-6 md:p-12">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-12 text-center about-header">
                        <TitleHeader title="About Us" className="text-white-50" />
                        <p className='text-orange-100 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mt-4 about-grid'>
                            We're not just a technology provider — we're your partner in growth.
                        </p>
                    </div>

                    {/* Bento Grid layout using the 4x3 layout with an image at the center */}
                    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 md:gap-5 mt-10">

                        {/* Top Left Box - Our Mission */}
                        <div className={`about-card md:col-span-2 md:row-span-1 group relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-600 to-blue-800 transition-all duration-500 ease-out ${
                                hoveredIndex === 0 ? 'scale-[1.02] shadow-2xl shadow-blue-500/20' : 'scale-100'}`}
                                onMouseEnter={() => setHoveredIndex(0)} 
                                onMouseLeave={() => setHoveredIndex(null)} 
                                style={{ minHeight: '180px' }}>

                            <div className="relative h-full p-6 md:p-8 flex flex-col justify-center">
                                <div className="space-y-2">
                                    <div className="text-sm font-semibold text-blue-200 uppercase tracking-wider">
                                        {aboutItems[0].label}
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                        {aboutItems[0].title}
                                    </h3>
                                    <p className="text-blue-100 text-sm md:text-base leading-relaxed">
                                        {aboutItems[0].description}
                                    </p>
                                </div>

                                {/* Decorative element */}
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                            </div>
                        </div>

                        {/* Top Right Box - Years of Experience */}
                        <div className={`about-card md:col-span-2 md:row-span-1 group relative overflow-hidden rounded-3xl bg-neutral-800 border border-neutral-700 transition-all duration-500 ease-out hover:border-neutral-600 ${
                            hoveredIndex === 1 ? 'scale-[1.02]' : 'scale-100' }`}
                            onMouseEnter={() => setHoveredIndex(1)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{ minHeight: '180px' }}
                        >
                            <div className="relative h-full p-6 md:p-8 flex items-center justify-between">
                                <div className="space-y-2">
                                    <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                                        {aboutItems[1].label}
                                    </div>
                                    <h3 className="text-5xl md:text-6xl font-bold text-white">
                                        {aboutItems[1].title}
                                    </h3>
                                    <p className="text-gray-400 text-sm md:text-base">
                                        {aboutItems[1].description}
                                    </p>
                                </div>
                                <div className="text-8xl opacity-10 group-hover:opacity-20 transition-opacity">
                                    {aboutItems[1].icon}
                                </div>
                            </div>
                        </div>

                        {/* Left Side - Our Values */}
                        <div 
                            className={`about-card md:col-span-1 md:row-span-2 group relative overflow-hidden rounded-3xl bg-linear-to-br from-purple-600 to-pink-600 transition-all duration-500 ease-out ${
                            hoveredIndex === 2 ? 'scale-[1.02] shadow-2xl shadow-purple-500/20' : 'scale-100'}`}
                            onMouseEnter={() => setHoveredIndex(2)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{ minHeight: '380px' }}
                        >
                            <div className="relative h-full p-6 md:p-8 flex flex-col justify-between">
                                <div className="space-y-3">
                                    <div className="text-sm font-semibold text-purple-200 uppercase tracking-wider">
                                        {aboutItems[2].label}
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                        {aboutItems[2].title}
                                    </h3>
                                    <ul className="space-y-2 text-purple-100 text-sm md:text-base">
                                        {aboutItems[2].values.map((value, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <span className="text-lg">✦</span>
                                                <span>{value}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Decorative element */}
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                            </div>
                        </div>

                        {/* Center To Hold the Image */}
                        <div 
                            className={`about-card md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl bg-neutral-800 border-2 border-neutral-700 transition-all duration-500 ease-out hover:border-neutral-500 ${
                            hoveredIndex === 3 ? 'scale-[1.02] shadow-2xl shadow-white/10' : 'scale-100'}`}
                            onMouseEnter={() => setHoveredIndex(3)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{ minHeight: '380px' }}
                        >
                            {/* The Image Container */}
                            <div className="relative h-full w-full bg-linear-to-br from-neutral-700 to-neutral-900 flex items-center justify-center">
                                <img src="/images/placeholder-team-image.jpg" alt="Our Team" className="w-full h-full object-cover" />
                            </div>

                            {/* The Overlay Gradient */}
                            <div className="absolute inset-0 bg-linear-to-t from-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* The label to the bottom when cursor hovers */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-neutral-900 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <p className='text-white text-center font-semibold'>
                                    Meet the Team Behind Our Success
                                </p>
                            </div>
                        </div>

                        {/* Right Side Content - Client Success */}
                        <div
                            className={`about-card md:col-span-1 md:row-span-2 group relative overflow-hidden rounded-3xl bg-linear-to-br from-emerald-600 to-teal-600 transition-all duration-500 ease-out ${
                            hoveredIndex === 4 ? 'scale-[1.02] shadow-2xl shadow-emerald-500/20' : 'scale-100'}`}
                            onMouseEnter={() => setHoveredIndex(4)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{ minHeight: '380px' }}
                        >
                            <div className="relative h-full p-6 md:p-8 flex flex-col justify-between">
                                <div className="space-y-3">
                                    <div className="text-sm font-semibold text-emerald-200 uppercase tracking-wider">
                                        {aboutItems[3].label}
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                        {aboutItems[3].title}
                                    </h3>
                                    <div className="space-y-4 mt-6">
                                        {aboutItems[3].stats.map((stat, idx) => (
                                            <div key={idx} className="space-y-1">
                                                <div className="text-3xl md:text-4xl font-bold text-white">
                                                    {stat.number}
                                                </div>
                                                <div className="text-emerald-100 text-sm">
                                                    {stat.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Decorative element */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                            </div>
                        </div>
                        
                        {/* Bottom Left Content - Our approach */}
                        <div 
                            className={`about-card md:col-span-2 md:row-span-1 group overflow-hidden rounded-3xl bg-neutral-800 border border-neutral-700 transition-all duration-500 ease-out hover:border-neutral-600 ${
                            hoveredIndex === 5 ? 'scale-[1.02]' : 'scale-100'}`}
                            onMouseEnter={() => setHoveredIndex(5)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{ minHeight: '180px' }}
                        >
                            <div className="relative h-full p-6 md:p-8 flex flex-col justify-center">
                                <div className="space-y-2">
                                    <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                                        {aboutItems[4].label}
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                        {aboutItems[4].title}
                                    </h3>
                                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                        {aboutItems[4].description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Right Content - Get Started */}
                        <div
                            className={`about-card md:col-span-2 md:row-span-1 group overflow-hidden rounded-3xl bg-linear-to-br from-orange-600 to-red-600 transition-all duration-500 ease-out cursor-pointer ${
                            hoveredIndex === 6 ? 'scale-[1.02] shadow-2xl shadow-orange-500/20' : 'scale-100'}`}
                            onMouseEnter={() => setHoveredIndex(6)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{ minHeight: '180px' }}
                        >
                            <div className="relative h-full p-6 md:p-8 flex items-center justify-between">
                                <div className="space-y-2">
                                    <div className="text-sm font-semibold text-orange-200 uppercase tracking-wider">
                                        {aboutItems[5].label}
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                        {aboutItems[5].title}
                                    </h3>
                                    <p className="text-orange-100 text-sm md:text-base">
                                        {aboutItems[5].description}
                                    </p>
                                </div>
                                {/* Animated arrow */}
                                <div className="text-white transform group-hover:translate-x-2 transition-transform duration-300">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                                
                                {/* Pulse effect */}
                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}