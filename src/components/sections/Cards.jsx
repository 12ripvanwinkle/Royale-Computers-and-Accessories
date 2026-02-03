import React from 'react'
import TitleHeader from '../TitleHeader'
const Cards = () => {
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
                    src="/images/navii.jpg" 
                    alt="battlecard" 
                    className="w-full max-w-4xl h-auto object-cover rounded-xl"
                    />

                    <img 
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