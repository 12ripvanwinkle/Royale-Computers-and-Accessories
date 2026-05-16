import React from 'react'
import { ServicesFeatureCard } from './Components'
import { services } from './index'

const Services = () => {
  return (
    <div style={{ width: '100%', padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 1.5rem)' }}>
      <div style={{ maxWidth: 1024, margin: '0 auto' }}>

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.22em' }}>
                Security Services
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
                style={{ letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                Software Security.
            </h2>
            <p className="text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.5)' }}>
                Assess, test, harden, and monitor — a full-cycle security practice built around your stack.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '0.75rem' }}>
          {services.map(f => <ServicesFeatureCard key={f.id} feature={f} />)}
        </div>
        
      </div>
    </div>
  )
}

export default Services