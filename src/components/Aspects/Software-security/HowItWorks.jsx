import React, { useState } from 'react'
import { HowItWorksSteps } from './index'
import { glass, glassHover } from '../CCTV-Holder/CCTVStyles'

function ProcessCard({step, index}) {
    const [hovered, setHovered] = useState(false)
    const IconComp = step.icon
    const MockupComp = step.mockup

    return (
        <div className={`${step.colSpan} rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden`}
            style = {hovered ? glassHover : glass}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Top Row */}
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{background: `${step.accent}18`, color: step.accent, border: `1px solid ${step.accent}30`}}
                    >
                        <IconComp size={18} />
                    </div>
                    <span className="text-xs font-semibold tracking-widest uppercase"
                        style={{color: 'rgba(255,255,255,0.4)'}}
                    >
                        {step.eyebrow}
                    </span>
                </div>
                <span className="font-black select-none"
                    style={{fontSize: 36, color: 'rgba(255,255,255,0.06)', lineHeight: 1, fontFamily: 'monospace'}}
                >
                    {String(index + 1).padStart(2, '0')}
                </span>
            </div>

            {/* Title */}
            <h3 className="text-base font-semibold text-white leading-snug">
                {step.title}
            </h3>

            {/* Description */}
            <p className="text-sm leading-relaxed" style={{color: 'rgba(255,255,255,0.58)'}}>
                {step.description}
            </p>

            {/* Highlights */}
            <div className="flex flex-col gap-1.5">
                {step.highlights.map(h => (
                    <div key={h} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: step.accent }} />
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>{h}</span>
                    </div>
                ))}
            </div>

            {/* Animated Mockup */}
            <MockupComp />
        </div>
    )
}

const HowItWorks = () => {
  return (
    <div className="w-full px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-12">
                <p className="text-xs font-semibold tracking-widest uppercase mb-4"
                    style={{color: 'rgba(255,255,255,0.45)'}}
                >
                    How We Work
                </p>

                <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
                    Our Process
                </h2>
                <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
                    style={{color: 'rgba(255,255,255,0.55)'}}
                >
                    A structured five-phase approach that takes you from raw exposure to a hardened,
                    continuously monitored security posture.
                </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {HowItWorksSteps.map((step, index) => (
                <ProcessCard key={step.id} step={step} index={index} />
            ))}
            </div>
        </div>
    </div>
  )
}

export default HowItWorks