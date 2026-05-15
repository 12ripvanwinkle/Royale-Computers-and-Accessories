import React from 'react'
import {features} from './index'
import { FeatureCard } from './Components'

const DSFeatures = () => {
  return (
    <div className="w-full px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="text-center mb-10 sm:mb-14">
                <p className="text-xs font-semibold uppercase tracking-widest mb-3"
                    style={{color: "rgba(255,255,255,0.35)", letterSpacing: "0.22em"}}
                >
                    Platform Capabilities 
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
                    style={{letterSpacing: "-0.03em", lineHeight: 1.05}}
                >
                    Everything your Compound needs.
                </h2>
                <p className="text-sm sm:text-base font-light max-w-lg mx-auto leading-relaxed"
                    style={{color: "rgba(255,255,255,0.5)"}}
                >
                    Displays, content, schedules, and alerts — unified in one platform
                    so your team can focus on communication, not technical hurdles.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3"
                style={{ gap: 'clamp(0.75rem, 2vw, 1rem)' }}
            >
                {features.map(f => (
                    <FeatureCard key={f.id} feature={f} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default DSFeatures