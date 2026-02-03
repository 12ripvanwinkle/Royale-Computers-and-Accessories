import React, { useRef } from 'react';
import Button from '../Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null); // <-- must be defined!
  const buttonRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Animate headings
    tl.fromTo(
      '.hero-text h1',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.2 }
    )

    // Animate paragraph
    .fromTo(
      '#short-desc',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    )

    // Animate button
    .fromTo(
      buttonRef.current,          // use the ref here
      { y: 20, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
      '-=0.3'
    );
  }, { scope: heroRef });

  return (
    <section ref={heroRef} id="home" className="relative overflow-hidden">
  <div className="hero-background">
    <img src="/images/hero-background.jpg" alt="Hero background" className="w-full h-auto" />

    <div className="hero-layout absolute inset-0 mt-10 md:mt-20 lg:mt-28 flex items-center justify-center">
      <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5 relative z-10">

        <div className="flex flex-col gap-4 md:gap-7">
          <div className="hero-text mt-16 md:mt-20 lg:mt-28">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Making Technology
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mt-2 md:mt-6 text-orange-100 leading-tight">
              Work For You
            </h1>
          </div>
        </div>

        <p
          id="short-desc"
          className="text-white-100 text-sm sm:text-base md:text-xl lg:text-2xl mt-4 md:mt-8 leading-relaxed relative z-10 pointer-events-none"
        >
          The Future in Technology Solutions in the Caribbean
        </p>

        <Button
          ref={buttonRef}
          className="w-full sm:w-72 md:w-80 lg:w-90 h-12 md:h-16 mt-6 md:mt-10"
          id="button"
          text="Explore Our Services"
        />
      </header>
    </div>
  </div>
</section>

  );
};

export default Hero;
