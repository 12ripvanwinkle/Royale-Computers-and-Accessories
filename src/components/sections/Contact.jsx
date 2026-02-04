import React, { useState, useEffect, useRef } from 'react';
import emailjs from "@emailjs/browser";

import TitleHeader from '../TitleHeader';


export default function Contact () {
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
            name: '',
            email: '',
            message: ''
    });

    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                },
                { threshold: 0.1 }
            );
    
            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }
    
            return () => {
                if (sectionRef.current) {
                    observer.unobserve(sectionRef.current);
                }
            };
        }, []);
    
        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            setLoading(true);

            try {
                await emailjs.sendForm(
                    import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                    formRef.current,
                    import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,

                )
                // Reset Form after Submission
                setFormData({ name: '', email: '', message: '' });
            } catch (error) {
                console.log('EMAILJS ERROR, ', error)
            } finally {
                setLoading(false)
            }
        };

    return (
        <section id="contact" ref={sectionRef}>

            <div className="min-h-screen bg-linear-to-b from-[#050a30]  py-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">

                    {/* Header Section */}
                    <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                        <div className="flex items-center justify-center gap-2 md:gap-3">
                            <TitleHeader title="Get in Touch" />
                            <TitleHeader title="-"/>
                            <TitleHeader title="Let's Connect" className="text-orange-100"/>
                        </div>
                    </div> 

                    {/* Contact Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

                        {/* The Contact Form itself */}
                        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
                                <h3 className="text-3xl font-bold text-white mb-8">Send a Message</h3>

                                <form onSubmit={handleSubmit} className="space-y-6" ref={formRef}>

                                    {/* Name Input */}
                                    <div className="group">
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3">
                                            Full Name *
                                        </label>
                                        <input 
                                            type="text"
                                            id='name'
                                            name='name' 
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:border-white/20"
                                            placeholder='John Doe'
                                        />
                                    </div>

                                    {/* Email Input */}
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                                        Email Address
                                    </label>
                                    <input 
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required 
                                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:border-white/20"
                                        placeholder='email@example.com'
                                    />

                                    {/* Message Input */}
                                    <div className="group">
                                        <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3">
                                            Your Message *
                                        </label>

                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="6"
                                            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:border-white/20 resize-none"
                                            placeholder="Tell us about your project or inquiry..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button type="submit" disabled={loading} className='group w-full bg-linear-to-r from-blue-600 via-blue-700 to-purple-600 text-white font-bold py-5 px-8 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/30 relative overflow-hidden'> 
                                        <span className="relative z-10 flex items-center justify-center gap-3">
                                            {loading ? 'Sending...' : 'Send Message'}
                                            <span className='text-xl transform group-hover:translate-x-1 transition-transform'>✈️</span>
                                        </span>
                                        <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </button>

                                </form>
                            </div>
                        </div>
                        
                        {/* Contact Information */}
                        <div className={`space-y-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>

                            {/* Opening Hours Card */}
                            <div className="bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 shadow-2xl transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group">
                                {/* Background Decoration */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                                            <span className="text-3xl">🕒</span>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white">Opening Hours</h3>
                                    </div>

                                    <div className="space-y-4 text-white/90">
                                        <div className="flex justify-between items-center pb-3 border-b border-white/20">
                                            <span className="font-semibold">Monday - Friday</span>
                                            <span className="text-white">9:00 AM - 6:00 PM</span>
                                        </div>
                                        <div className="flex justify-between items-center pb-3 border-b border-white/20">
                                            <span className="font-semibold">Saturday</span>
                                            <span className="text-white">10:00 AM - 4:00 PM</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="font-semibold">Sunday</span>
                                            <span className="text-white/60">Closed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Location Card */}
                            <div className="bg-linear-to-br from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl p-8 shadow-2xl transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group">
                                {/* Background Decoration */}
                                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                                
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                                            <span className="text-3xl">📍</span>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white">Visit Us</h3>
                                    </div>

                                    <div className="space-y-4 text-white">
                                        <p className="text-lg leading-relaxed">
                                            <span className="font-semibold block mb-3">
                                                Locations - Jamaica
                                            </span>
                                            <span className="flex items-start gap-2 mb-2">
                                                <span className="text-orange-100 ">◆</span>
                                                <span>Buck Toe Street Kingston 0</span>
                                            </span>
                                            <span className="flex items-start gap-2 mb-2">
                                                <span className="text-orange-100">◆</span>
                                                <span>Round DI Cawna Kingston -10</span>
                                            </span>
                                            <span className="flex items-start gap-2 mb-2">
                                                <span className="text-orange-100">◆</span>
                                                <span>Pass Di Big Coconut Tree near di green house</span>
                                            </span>
                                        </p>
                                        <a 
                                            href="https://maps.google.com" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 px-5 py-3 rounded-xl font-semibold transition-all backdrop-blur-sm group"
                                        >
                                            <span className="text-xl">🗺️</span>
                                            Get Directions
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Details */}
                            <div className="bg-linear-to-br from-orange-600 via-red-600 to-pink-600 rounded-3xl p-6 md:p-8 shadow-2xl transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group">
                            {/* Background Decoration */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                            
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 md:gap-4 mb-6">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm shrink-0">
                                        <span className="text-2xl md:text-3xl">💬</span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">Reach Out</h3>
                                </div>

                                <div className="space-y-4 md:space-y-5 text-white">
                                    <div className="flex items-center gap-3 md:gap-4 bg-white/10 p-3 md:p-4 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                                        <span className="text-xl md:text-2xl shrink-0">📞</span>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-xs md:text-sm text-white/70">Phone</p>
                                            <a href="tel:+18765551234" className="font-semibold text-base md:text-lg hover:text-white/80 transition-colors break-all">
                                                +1 (876) 555-1234
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 md:gap-4 bg-white/10 p-3 md:p-4 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                                        <span className="text-xl md:text-2xl shrink-0">✉️</span>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-xs md:text-sm text-white/70">Email</p>
                                            <a href="mailto:contact@company.com" className="font-semibold text-base md:text-lg hover:text-white/80 transition-colors break-all">
                                                contact@company.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

