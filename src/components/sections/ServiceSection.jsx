import { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom'
import TitleHeader from '../TitleHeader';
import Button from '../Button';


// Register the ScrollTrigger plugin so GSAP can use scroll-based animations
gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {

    // References to DOM elements so GSAP can animate them
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    // Run GSAP animations when the component mounts
    useGSAP(() => {

        // Store all project card elements in an array
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
        
        // Loop through each project card
        projects.forEach((card, index) => {

            // Animate each card from hidden + lower position to visible + normal position
            gsap.fromTo(
                card,
                {
                    y: 50,          // start 50px lower
                    opacity: 0,     // start invisible
                },
                {
                    y: 0,           // move to original position
                    opacity: 1,     // fully visible
                    duration: 1,    // animation lasts 1 second

                    // Delay increases for each card (nice stagger effect)
                    delay: 0.3 * (index + 1),

                    // Trigger animation when card scrolls into view
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100', // start when card is near viewport
                    }
                }
            );
        });

        // Fade in the entire section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

    }, []);

  return (
    // Main section wrapper (used for fading animation)
    <section id='services' ref={sectionRef} className='app-showcase'>
        <div className="w-full">
            
            <div className="flex items-center justify-center gap-2 md:gap-4">
                <TitleHeader title="RCA" className="text-orange-100"/> 
                <TitleHeader title="Solutions"/>
            </div>

            <div className="showcaselayout mt-10">
                {/* Main Feature - Technology Solutions */}
                <div className="first-project-wrapper" ref={project1Ref}>
                    <div className="image-wrapper">
                        <Link to="/tech-solutions">
                            <img src="/images/placeholder-tech-solutions.jpg" alt="Technology Solutions" />
                        </Link>
                    </div>
                    
                    <div className="text-content">
                        <h2 className='text-orange-100'>Our Technology Solutions</h2>
                        <p>Reliable solutions. Honest service. Always.</p>
                        <Link to="/tech-solutions">
                            <Button id="button" text="Discover More" />
                        </Link>
                    </div>
                </div>

                {/* Side Cards */}
                <div className="project-list-wrapper">
                    <div className="project" ref={project2Ref}>
                        <div className="image-wrapper">
                            <Link to="/tech-services">
                                <img src="/images/placeholder-tech-services.jpg" alt="Technology Services" />
                            </Link>
                        </div>
                        <h2 className='text-orange-100'>Our Technology Services</h2>
                        <Link to="/tech-services">
                            <Button id="button" text="Discover More"  className="mt-7"/>
                        </Link>
                    </div>

                    <div className="project" ref={project3Ref}>
                        <div className="image-wrapper">
                            <Link to="/tech-retail">
                                <img src="/images/placeholder-tech-retail.jpg" alt="Technology Retail" />
                            </Link>
                        </div>
                        <h2 className='text-orange-100'>Our Technology Retail</h2>
                        <Link to="/tech-retail">
                            <Button id="button" text="Discover More"  className="mt-7"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection