import React from 'react';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import TitleHeader from '../TitleHeader';

// Register the ScrollTrigger plugin so GSAP can use scroll-based animations
gsap.registerPlugin(ScrollTrigger);

const TechSolutions = () => {

    // references to DOM elements so GSAP can animate them
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const imageRef = useRef(null);

    useGSAP(() => {
        // Title animation
        gsap.fromTo(
            titleRef.current,
            {y: 40, opacity: 0},
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                    toggleActions: 'play none none none'
                }
            }
        );
        // Image container animation
        gsap.fromTo(
            imageRef.current,
            { y: 60, opacity: 0, scale: 0.96 },
            {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: imageRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
            }
        );

    },{ scope: sectionRef });

  return (
    <section id='TechSolutions' className='mt-30' ref={sectionRef}>

        <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            {/* Main title */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center" ref={titleRef}>
                <TitleHeader title="Innovation" className="text-orange-100" />
                <TitleHeader title="Starts Here." />
            </div>

            {/* Container */}
            <div ref={imageRef} className="w-full max-w-6xl mt-8 sm:mt-10 h-55 sm:h-75 md:h-100 lg:h-125 bg-zinc-950
                                rounded-2xl sm:rounded-3xl
                                flex items-center justify-center
                                relative overflow-hidden
                                border border-white/5"
            >

                <img src="/images/jack.jpg" alt="" className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105" />
            </div>
        </div>


        
    </section>
  )
}

export default TechSolutions