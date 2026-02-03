import React, { useRef, useEffect } from 'react'
import TitleHeader from '../TitleHeader'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Cards = () => {

    const image1Ref = useRef(null)
    const image2Ref = useRef(null)

    useEffect(() => {
        // animate the first image which comes form the left
        gsap.fromTo(
            image1Ref.current,
            { x: -200, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                trigger: image1Ref.current,
                start: 'top 80%',
                end: 'top 50%',
                toggleActions: 'play none none none'
                }
            }
        )

        // animate the second image which comes form the right
        gsap.fromTo(
            image2Ref.current,
            { x: 200, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                trigger: image2Ref.current,
                start: 'top 80%',
                end: 'top 50%',
                toggleActions: 'play none none none'
                }
            }
        )
    }, [])

  return (
    <section id='cards' className='flex-center md:mt-40 mt-20 section-padding xl:px-0'>
        <div className="w-full h-full md:px-20 px-5">
            
            <div className="flex items-center justify-center gap-2 md:gap-4">
                <TitleHeader title="Why Choose" /> 
                <TitleHeader title="RCA" className="text-orange-100"/>
            </div>

            <div className="mt-32 relative">
                <div className="relative z-50 xl:space-y-32 space-y-10 flex flex-col items-center">

                    <img 
                    ref={image1Ref}
                    src="/images/navii.jpg" 
                    alt="battlecard" 
                    className="w-full max-w-4xl h-auto object-cover rounded-xl"
                    />

                    <img 
                    ref={image2Ref}
                    src="/images/max.jpg" 
                    alt="battlecard2" 
                    className="w-full max-w-4xl h-auto object-cover rounded-xl"
                    />

                </div>
            </div>

        </div>
    </section>
  )
}

export default Cards