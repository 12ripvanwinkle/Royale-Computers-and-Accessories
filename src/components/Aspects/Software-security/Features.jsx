import React, { useState } from 'react'
import {glass, glassHover} from '../CCTV-Holder/CCTVStyles'

import {features} from './index'

function StatPill({value, label, accent}) {
    return (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
            style={{
                background: `${accent}12`,
                border: `1px solid ${accent}30`,
            }}
        >
            <span className="text-xs font-bold" style={{ color: accent }}>{value}</span>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{label}</span>
        </div>
    )
}

function FeatureCard({feature, index}) {
    const [hovered, setHovered] = useState(false)
    const IconComp = feature.icon

    return (
        <div className="rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-0.5"
            style={hovered ? glassHover : glass}
            onMouseEnter = {() => setHovered(true)}
            onMouseLeave = {() => setHovered(false)}
        >   
            {/* Top Row */}
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{
                            background: `${feature.accent}18`,
                            color: feature.accent,
                            border: `1px solid ${feature.accent}30`,
                        }}
                    >
                        <IconComp size={18} />
                    </div>
                    <span className="text-xs font-semibold tracking-widest uppercase"
                        style={{color:'rgba(255,255,255,0.4)'}}
                    >
                        {feature.eyebrow}
                    </span>
                </div>
                <span className="font-black select-none"
                    style={{
                        fontSize: 36,
                        color: 'rgba(255,255,255,0.06)',
                        lineHeight: 1,
                        fontFamily: 'monospace',
                    }}
                >
                  {String(index + 1).padStart(2, '0')}  
                </span>
            </div>

            {/* Title */}
            <h3 className="text-base font-semibold text-white leading-snug">
                {feature.title}
            </h3>

            {/* Description */}
            <p className="text-sm leading-relaxed" style={{color: 'rgba(255,255,255,0.58)'}}>
                {feature.description}
            </p>

            {/* Statistics Pill */}
            <StatPill value={feature.stat.value} label={feature.stat.label} accent={feature.accent} />
            
            {/* Highlights */}
            <div className="flex flex-col gap-1.5 mt-auto pt-1">
                {feature.highlights.map(h => (
                <div key={h} className="flex items-center gap-2">
                    <div
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: feature.accent }}
                    />
                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>{h}</span>
                </div>
                ))}
            </div>
        </div>
    )
}

const Features = () => {
  return (
    <div className="w-full px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
 
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            Security-First Infrastructure
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
            Key Features
          </h2>
          <p
            className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            Every layer of your digital signage network is protected — from content delivery
            to device management, access control, and compliance.
          </p>
        </div>
 
        {/* Bento Grid
            Row 1: [Vulnerability — 1col] [Encryption — 1col] [MFA — 1col]   (3 equal)
            Row 2: [Secure APIs — 1.5col] [RBAC — 1.5col]                    (2 equal halves)
            Row 3: [Real-time — 1.5col]  [Audits — 1.5col]                   (2 equal halves)
        */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
 
          {/* Row 1 — 3 equal cards */}
          <div className="md:col-span-2">
            <FeatureCard feature={features[0]} index={0} />
          </div>
          <div className="md:col-span-2">
            <FeatureCard feature={features[1]} index={1} />
          </div>
          <div className="md:col-span-2">
            <FeatureCard feature={features[2]} index={2} />
          </div>
 
          {/* Row 2 — 2 wider equal cards */}
          <div className="md:col-span-3">
            <FeatureCard feature={features[3]} index={3} />
          </div>
          <div className="md:col-span-3">
            <FeatureCard feature={features[4]} index={4} />
          </div>
 
          {/* Row 3 — 2 wider equal cards */}
          <div className="md:col-span-3">
            <FeatureCard feature={features[5]} index={5} />
          </div>
          <div className="md:col-span-3">
            <FeatureCard feature={features[6]} index={6} />
          </div>
 
        </div>
      </div>
    </div>
  )
}
export default Features