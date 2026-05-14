import React, { useState } from 'react'
import { systems } from './index'
import { SystemCard } from './Components'

const Systems = () => {
  return (
    <div className="w-full px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">

          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{color: 'rgba(255,255,255,0.35)', letterSpacing: '0.22em'}}
          >
            CChoose Your Surveillance System
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
            style={{letterSpacing: '-0.03em', lineHeight: 1.05}}
          >
            Types of CCTV Systems
          </h2>
          <p className="text-sm sm:text-base font-light max-w-lg mx-auto leading-relaxed"
            style={{color: 'rgba(255,255,255,0.5)'}}
          >
            From high-tech IP cameras to rugged outdoor bullet cams — we supply,
            install, and configure every type of CCTV system.
          </p>

        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {systems.map((system, index) => (
            <SystemCard key={system.id} system={system} index={index} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Systems