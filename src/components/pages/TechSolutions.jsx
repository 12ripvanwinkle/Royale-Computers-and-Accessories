import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { techSolutionsItems, testimonials } from "../../constants";
import TitleHeader from "../TitleHeader";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const TechSolutions = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const heroImageRef = useRef(null);
  
  // Use arrays for multiple solution items
  const solutionRefs = useRef([]);
  const solutionsTextRefs = useRef([]);
  const solutionsImgRefs = useRef([]);

  // Testimonials refs
  const testimonialsHeaderRef = useRef(null);
  const testimonialCardRefs = useRef([]);

  useGSAP(() => {
    // Title animation
    gsap.fromTo(
      titleRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );

    // Hero image animation
    gsap.fromTo(
      heroImageRef.current,
      { y: 60, opacity: 0, scale: 0.96 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroImageRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate each solution item
    techSolutionsItems.forEach((service, index) => {
      const isReversed = index % 2 !== 0;

      // Animate text
      gsap.fromTo(
        solutionsTextRefs.current[index],
        {
          x: isReversed ? 100 : -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: solutionRefs.current[index],
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate image
      gsap.fromTo(
        solutionsImgRefs.current[index],
        {
          x: isReversed ? -100 : 100,
          opacity: 0,
          scale: 0.9,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: solutionRefs.current[index],
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

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
    );

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
          delay: index * 0.2, // Stagger effect
          ease: "power3.out",
          scrollTrigger: {
            trigger: testimonialCardRefs.current[index],
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section id="TechSolutions" ref={sectionRef} className="mt-70">
      <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Main title */}
        <div
          ref={titleRef}
          className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center"
        >
          <TitleHeader title="Innovation" className="text-orange-100" />
          <TitleHeader title="Starts Here." />
        </div>

        {/* Hero image */}
        <div
          ref={heroImageRef}
          className="w-full max-w-6xl mt-8 sm:mt-10 h-55 sm:h-75 md:h-100 lg:h-125 bg-zinc-950
                      rounded-2xl sm:rounded-3xl
                      flex items-center justify-center
                      relative overflow-hidden
                      border border-white/5"
        >
          <img
            src="/images/jack.jpg"
            alt="Tech solutions"
            className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
          />
        </div>

        {/* Solutions section */}
        <div className="py-24 w-full mt-30" id="solutions">
          <div className="max-w-7xl mx-auto px-6 space-y-24">
            {techSolutionsItems.map((service, index) => {
              const isReversed = index % 2 !== 0;

              return (
                <div
                  key={index}
                  ref={(el) => (solutionRefs.current[index] = el)}
                  className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
                >
                  {/* TEXT */}
                  <div
                    ref={(el) => (solutionsTextRefs.current[index] = el)}
                    className={`flex flex-col justify-center space-y-3 ${
                      isReversed ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <div className="text-left">
                        <div className="font-semibold md:text-5xl text-3xl">
                            {service.title}
                        </div>
                    </div>
                    <p className="text-2xl text-gray-400 max-w-md">
                      {service.description}
                    </p>
                  </div>

                  {/* IMAGE */}
                  <div
                    ref={(el) => (solutionsImgRefs.current[index] = el)}
                    className={`aspect-square rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 
                                flex items-center justify-center overflow-hidden
                                ${isReversed ? "md:order-1" : "md:order-2"}`}
                  >
                    {service.image && (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

        {/* Testimonials Section */}
        <div className="py-20" id="testimonials">
        
            {/* Header for the testimonial section */}
            <div ref={testimonialsHeaderRef} className="max-w-7xl mx-auto px-6 text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Client Voices
                </h2>
                <p className="text-xl text-gray-400">
                Success stories from real clients.
                </p>
            </div>

            {/* Testimonial Cards */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((item, index) => (
                        <div
                        key={index}
                        ref={(el) => (testimonialCardRefs.current[index] = el)}
                        className="testimonial-card rounded-3xl bg-neutral-900 border border-neutral-800 p-8 flex flex-col justify-between min-h-100 hover:border-neutral-700 transition-all duration-300"
                        >
                        {/* Quote */}
                        <p className="text-gray-400 text-lg leading-relaxed">
                            "{item.quote}"
                        </p>

                        {/* Author info at bottom */}
                        <div className="mt-auto pt-8">
                            <p className="text-white font-semibold text-lg">
                            {item.name}
                            </p>
                            <p className="text-gray-500 mt-1">
                            {item.role}
                            </p>
                        </div>
                        </div>
                    ))}
                    </div>
            </div>
        </div>

        <Contact />
        <Footer />
    </section>
  );
};

export default TechSolutions;