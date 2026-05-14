import React, { useState } from 'react'
import { glassHover, glass, innerSurface, } from "./CCTVStyles"

export function SystemCard({system, index}) {

    const [hovered, setHovered] = useState(false)
    const Icon = system.icon
    const color = system.accentColor
    
    return (
        <div className="rounded-2xl overflow-hidden transition-all duration-300 flex flex-col relative"
            style={{
                ...(hovered ? glassHover : glass),
                borderRadius: 20,
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >

            {/* Radial glow */}
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(ellipse at 0% 0%, ${color}18, transparent 60%)`,
                    borderRadius: 20,
                    zIndex: 0,
                }}
            />
            
            {/* Image */}
            <div className="relative w-full overflow-hidden" style={{height: 180, zIndex: 1}}>
                <div className="absolute inset-0" style={{ background: system.imageFallbackBg }} />
                <img src={system.image}
                    alt={system.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ opacity: 0.82 }}
                    onError={e => { e.currentTarget.style.display = 'none' }}
                />
                <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.22)' }} />

                {/* Pill Badge */}
                <div className="absolute top-3 right-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{
                            background: `${color}18`,
                            border: `1px solid ${color}40`,
                            color: color,
                        }}
                    >
                        {system.badge}
                    </span>
                </div>

                {/* Step Watermark */}
                <div className="absolute bottom-2 right-3 font-black select-none pointer-events-none"
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

            {/* Text Area */}
            <div className="flex flex-col gap-3 p-5 flex-1 relative" style={{zIndex: 1}}>
                
                {/* Icon + label */}
                <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg flex item-center justify-center shrink-0 transition-all duration-300"
                       style={{
                            background: `${color}18`,
                            border: `1px solid ${color}25`,
                            color: color,
                            boxShadow: hovered ? `0 0 16px ${color}25` : 'none',
                        }} 
                    >
                        <Icon size={15} />
                    </div>
                    <span className="text-xs font-medium tracking-wide"
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

                {/* Highlight Pills */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                    {system.highlights.map(h => (
                        <div key={h} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                            style={{
                                ...innerSurface,
                                background: `${color}0e`,
                                border: `1px solid ${color}25`,
                            }}
                        >
                        {/* Glowing bullet dot */}
                        <div
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{
                            background: color,
                            boxShadow: `0 0 6px ${color}80`,
                            }}
                        />
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.68)' }}>{h}</span>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Watermark icon */}
            <div className="absolute bottom-4 right-4 pointer-events-none select-none"
                style={{ opacity: 0.045, zIndex: 0, color: color }}
            >
                <Icon size={120} />
            </div>

        </div>
    )
}