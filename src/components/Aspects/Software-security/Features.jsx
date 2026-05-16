import React from 'react'
import { FeatureCard } from './Components'
import { features } from './index'

const Features = () => {
  return (
    <section id="security-features" className="w-full px-4 sm:px-6 md:px-10 lg:px-14 py-14 sm:py-20 md:py-24"
      style={{color: 'white'}}
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          
          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{color: 'rgba(255,255,255,0.35)', letterSpacing: '0.22em'}}
          >
            Security-First Infrastructure 
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
            style={{ letterSpacing: '-0.03em', lineHeight: 1.05}}
          >
            Built secure. By default.
          </h2>
          <p className="text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed"
            style={{color: 'rgba(255,255,255,0.5)'}}
          >
            Every layer of your digital signage network is protected — from content delivery
            to device management, access control, and compliance.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {/* Row 1 — 3 equal */}
          {features.slice(0, 3).map(f => (
            <div key={f.id} className="md:col-span-2">
              <FeatureCard feature={f} />
            </div>
          ))}

          {/* Row 2 — 2 wide equal */}
          {features.slice(3, 5).map(f => (
            <div key={f.id} className="md:col-span-3">
              <FeatureCard feature={f} />
            </div>
          ))}

          {/* Row 3 — 2 wide equal */}
          {features.slice(5, 7).map(f => (
            <div key={f.id} className="md:col-span-3">
              <FeatureCard feature={f} />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Features