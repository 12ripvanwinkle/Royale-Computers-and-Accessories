import React from 'react'
import { techServices, features,TechServicestestimonials } from "../../constants";
import Testimonials from '../Testimonials';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

const TechServices = () => {
  return (
    <section id='Tech Services' className="mt-70">
        <div className="w-full py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-left mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        Your Tech Partner.
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-500">
                        Simplifying IT. Trusted. Modern.
                    </p>
                </div>

                {/* Hero Image */}
                <div 
                    className="w-full max-w-350 mx-auto sm:mt-10 h-55 sm:h-75 md:h-100 lg:h-170 bg-zinc-950
                      rounded-2xl sm:rounded-3xl
                      flex items-center justify-center
                      relative overflow-hidden
                      border border-white/5"
                >

                    <img src="/images/elden-ring.jpg" alt="" className='w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105' />

                </div>

                {/* Services Aspect */}
                <div className="max-w-7xl mx-auto mt-60">

                    {/* Services Header */}
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-semibold">
                            Effortless Tech.
                        </h2>
                        <p className="mt-4 text-lg text-gray-400">
                            Modern solutions for your business.
                        </p>
                    </div>

                    {/* Service Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10" id='servicesFeatures'>
                        {techServices.map((service, index) => (
                            <div key={index} className="group flex flex-col">
                                
                                {/* Card Itself */}
                                <div className="relative rounded-3xl bg-neutral-900 h-80 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:-translate-y-2">
                
                                    {/* Icon Placeholder */}
                                    {service.image && (
                                        <img src={service.image} className='w-full h-full object-cover rounded-2xl'/>
                                    )}
                                </div>

                                {/* Text for the Card */}
                                <div className="mt-6">
                                    <h3 className="text-xl font-semibold">
                                        {service.title}. {service.price}
                                    </h3>
                                    <p className="mt-3 text-gray-400 text-sm leading-relaxed max-w-sm">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Experience Section */}
                <div className="max-w-6xl mx-auto mt-50">

                    {/* Top Feature Icons */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">
                        {features.map((item, index) => {
                            const Icon = item.icon;

                            return (
                            <div
                                key={index}
                                className="flex flex-col items-center space-y-4 transition duration-300 hover:-translate-y-1"
                            >
                                <Icon size={40} className="text-neutral-400 sm:w-12 sm:h-12 md:w-14 md:h-14" />
                                <p className="font-medium text-white">
                                    {item.title}
                                </p>
                            </div>
                            );
                        })}
                    </div>
                </div>

                {/* Testimonies Section */}
                <div className="py-20" id="testimonials">
                    <Testimonials title="What Our Clients Say" subtitle="Real feedback from real people." testimonials={TechServicestestimonials} sectionId="reviews" />
                </div>
            </div>
            
        </div>
        <Contact />
        <Footer />
    </section>
  )
}

export default TechServices