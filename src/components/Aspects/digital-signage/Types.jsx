import React from 'react'
import { TypeCard } from './Components'
import { types } from './index'


const Types = () => {
  return (
    <div id='types' className="w-full px-4 sm:px-6 md:px-10 lg:px-14 py-14 sm:py-20 md:py-24"
        style={{color: 'white'}}
    >
        <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="text-center mb-10 sm:mb-14">
                
                <p className="text-xs font-semibold uppercase tracking-widest mb-3"
                    style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.22em' }}
                >
                    What We Supply & Install
                </p>
                <h2
                    className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
                    style={{ letterSpacing: '-0.03em', lineHeight: 1.05 }}
                >
                    Types of Digital Signage
                </h2>
                <p
                    className="text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                    From indoor retail screens to weatherproof outdoor displays — we supply,
                    install, and manage every format of digital signage.
                </p>

            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {types.map((type, index) => (
                    <TypeCard key={type.id} type={type} index={index} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Types