import React, { useState } from 'react'
import { glass, glassHover } from './CCTVStyles'
import { systems } from './index'

// Bento layout config — every card gets the same balanced sizing
// Row 1: 3 equal cards  |  Row 2: 3 equal cards
// All cards identical in proportion so nothing overpowers another

function SystemCard({ system, index }) {
  const [hovered, setHovered] = useState(false)
  const Icon = system.icon
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300 flex flex-col"
      style={hovered ? glassHover : glass}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Image area ── */}
      <div className="relative w-full overflow-hidden" style={{ height: 180 }}>
        {/* Gradient fallback */}
        <div
          className="absolute inset-0"
          style={{ background: system.imageFallbackBg }}
        />
        {/* Image */}
        <img
          src={system.image}
          alt={system.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.82 }}
          onError={e => { e.currentTarget.style.display = 'none' }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.22)' }} />

        {/* Badge — top left */}
        <div className="absolute top-3 left-3">
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{
              background: system.badgeColor,
              border: `1px solid ${system.badgeBorder}`,
              color: system.badgeText,
            }}
          >
            {system.badge}
          </span>
        </div>

        {/* Step number watermark — bottom right */}
        <div
          className="absolute bottom-2 right-3 font-black select-none"
          style={{
            fontSize: 48,
            color: 'rgba(255,255,255,0.07)',
            lineHeight: 1,
            fontFamily: 'monospace',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      {/* ── Text area ── */}
      <div className="flex flex-col gap-3 p-5 flex-1">

        {/* Icon + label */}
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.9)' }}
          >
            <Icon />
          </div>
          <span
            className="text-xs font-medium tracking-wide"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            {system.label}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-white leading-snug">
          {system.title}
        </h3>

        {/* Description */}
        <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.58)' }}>
          {system.description}
        </p>

        {/* Highlight pills — pushed to bottom */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {system.highlights.map(h => (
            <div
              key={h}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: system.badgeText }}
              />
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.68)' }}>{h}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Systems = () => {
  return (
    <div className="w-full px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            Choose Your Surveillance System
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
            Types of CCTV Systems
          </h2>
          <p
            className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            From high-tech IP cameras to rugged outdoor bullet cams — we supply,
            install, and configure every type of CCTV system.
          </p>
        </div>

        {/* 3-column bento grid — 2 rows of 3, all equal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {systems.map((system, index) => (
            <SystemCard key={system.id} system={system} index={index} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Systems