import React, { useState, useRef  } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { items } from '../../constants'

gsap.registerPlugin(ScrollTrigger);

const Markets = () => {

  const sectionRef = useRef(null);

  useGSAP(() => {

  gsap.fromTo(
    ".bento-card",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true
        }
      }
    );

    }, { scope: sectionRef });

  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  return (
    <section ref={sectionRef}id='markets' className='bg-[#050a30] mt-40'>

        <div className="min-h-screen  p-6 md:p-12">

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12 text-center">
                  <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 flex-wrap">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                        What We Do 
                    </h1>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-orange-100">
                        Best
                    </h1>
                </div>

                  <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                    From strategy to execution, our services are built to elevate your brand, engage your audience, and drive measurable growth.
                  </p>
                </div>

                {/* Bento Grid section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                  {items.map((item, index) => (
                    <div
                      key={item.id}
                      className={`bento-card ${item.span} group overflow-hidden rounded-3xl bg-neutral-800 border border-neutral-700 transition-all duration-500 ease-out hover:border-neutral-600 ${
                        hoveredIndex === index ? 'scale-[1.02]' : 'scale-100'
                      }`}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      style={{
                        minHeight: index === 0 || index === 3 ? '400px' : '190px'
                      }}
                    >
                      {/* Background gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-linear-to-br from-neutral-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      
                      {/* Content */}
                      <div className="relative h-full p-8 flex flex-col justify-between">
                        {/* Icon/Visual Element */}
                        <div className="flex-1 flex items-center justify-center mb-6">
                          <div className={`text-7xl md:text-8xl lg:text-9xl transform transition-all duration-500 ${
                            hoveredIndex === index ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
                          }`}>
                            {item.icon}
                          </div>
                        </div>

                        {/* Text Content */}
                        <div className="space-y-3">
                          <h3 className="text-2xl md:text-3xl font-bold text-orange-100 leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Subtle corner accent */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      {/* Bottom shine effect */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-white/20 to-transparent transform transition-transform duration-500 ${
                        hoveredIndex === index ? 'scale-x-100' : 'scale-x-0'
                      }`} />
                    </div>
                  ))}
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Markets