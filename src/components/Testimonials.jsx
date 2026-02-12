import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const Testimonials = ({ 
  title = "Client Voices", 
  subtitle = "Success stories from real clients.", 
  testimonials = [],
  sectionId = "testimonials" 
}) => {
  const testimonialsHeaderRef = useRef(null)
  const testimonialCardRefs = useRef([])

  useGSAP(() => {
    // Testimonials header animation
    gsap.fromTo(
      testimonialsHeaderRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: testimonialsHeaderRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    )

    // Animate each testimonial card
    testimonials.forEach((_, index) => {
      gsap.fromTo(
        testimonialCardRefs.current[index],
        {
          y: 60,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: testimonialCardRefs.current[index],
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      )
    })
  }, [testimonials])

  return (
    <div className="py-20" id={sectionId}>
      {/* Header for the testimonial section */}
      <div ref={testimonialsHeaderRef} className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-xl text-gray-400">
          {subtitle}
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div key={index} className="group flex flex-col">
              {/* GSAP Animated Wrapper */}
              <div ref={(el) => (testimonialCardRefs.current[index] = el)}>
                {/* Hover Animated Card */}
                <div
                  className="
                    relative
                    rounded-3xl
                    bg-neutral-900
                    border border-neutral-800
                    p-8
                    flex flex-col justify-between
                    min-h-100
                    transition-all duration-300 ease-out
                    group-hover:-translate-y-2
                    group-hover:border-neutral-700
                    group-hover:shadow-2xl
                  "
                >
                  <p className="text-gray-400 text-lg leading-relaxed">
                    "{item.quote}"
                  </p>

                  <div className="mt-auto pt-8">
                    <p className="text-white font-semibold text-lg">
                      {item.name}
                    </p>
                    <p className="text-gray-500 mt-1">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials