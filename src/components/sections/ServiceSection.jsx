import { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom'
import TitleHeader from '../TitleHeader';
import Button from '../Button';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100',
                    }
                }
            );
        });

        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );
    }, []);

    return (
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
                            <p className='text-white-50 md:text-xl'>Reliable solutions. Honest service. Always.</p>
                            <Link to="/tech-solutions">
                                <Button id="button" text="Discover More" />
                            </Link>
                        </div>
                    </div>

                    {/* Side Cards */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <Link to="/tech-services">
                                    <img src="/images/placeholder-tech-services.jpg" alt="Technology Services" />
                                </Link>
                            </div>
                            <h2 className='text-orange-100'>Our Technology Services</h2>
                            <Link to="/tech-services">
                                <Button id="button" text="Discover More" className="mt-7"/>
                            </Link>
                        </div>

                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <Link to="/tech-retail">
                                    <img src="/images/placeholder-tech-retail.jpg" alt="Technology Retail" />
                                </Link>
                            </div>
                            <h2 className='text-orange-100'>Our Technology Retail</h2>
                            <Link to="/tech-retail">
                                <Button id="button" text="Discover More" className="mt-7"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection