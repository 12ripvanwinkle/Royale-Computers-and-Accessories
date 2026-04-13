import React, { useState } from 'react'
import { glass, glassHover } from '../CCTV-Holder/CCTVStyles'
import { Lightbulb, Monitor, TouchpadOff, LayoutGrid, UtensilsCrossed, Sun } from 'lucide-react'
import {types} from './index'

function TypeCard({type, index}) {
    const [hovered, setHovered] = useState(false)

    return(
        <div className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-0.5"
            style={hovered ? glassHover : glass}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >

            {/* Image */}
            <div className="relative w-full overflow-hidden shrink-0" style={{ height: 160 }}>
                <div className="absolute inset-0" style={{background: type.imageFallbackBg}} />

                <img src={type.image}
                    alt={type.title}
                    className='absolute inset-0 w-full h-full object-cover'
                    style={{opacity: 0.8}} 
                    onError={e => { e.currentTarget.style.display = 'none' }}
                />
                <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.2)' }} />

                {/* Badge */}
                <div className="absolute top-3 left-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{
                            background: type.badgeBg,
                            border: `1px solid ${type.badgeBorder}`,
                            color: type.badgeColor,
                        }}
                    >
                        {type.badge}
                    </span>
                </div>
                
                {/* Step Number Watermark */}
                <div className="absolute bottom-2 right-3 font-black select-none"
                    style={{
                        fontSize: 44,
                        color: 'rgba(255,255,255,0.07)',
                        lineHeight: 1,
                        fontFamily: 'monospace',
                    }}
                >
                    {String(index + 1).padStart(2, '0')}
                </div>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-3 p-5 flex-1">
                {/* Icon and label */}
                <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                        style={{
                            background: type.badgeBg,
                            color: type.badgeColor,
                            border: `1px solid ${type.badgeBorder}`,
                        }}
                    >
                        <type.icon size={16} />
                    </div>
                    <span 
                        className="text-xs font-medium tracking-wide"
                        style={{color: 'rgba(255,255,255,0.45)'}}
                    >
                        {type.label}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-white leading-snug">
                    {type.title}
                </h3>

                {/* Description */}
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.58)' }}>
                    {type.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-col gap-1.5 mt-auto pt-2">
                    {type.highlights.map(h => (
                        <div key={h} className="flex items-center gap-2">
                        <div
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: type.badgeColor }}
                        />
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>{h}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

const Types = () => {
  return (
    <div className="w-full px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="text-center mb-12">
                <p className="text-xs font-semibold tracking-widest uppercase mb-4"
                    style={{color: 'rgba(255,255,255,0.45)'}}
                >
                    What We Supply & Install
                </p>
                <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
                    Types of Digital Signage
                </h2>
                <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
                    style={{color: 'rgba(255,255,255,0.55)'}}
                >
                    From indoor retail screens to weatherproof outdoor displays — we supply,
                    install, and manage every format of digital signage.
                </p>
            </div>

            {/* Bento Grid */}
            {/* 
                Row 1: [LED — wide 2col] [LCD — 1col]
                Row 2: [Kiosk — 1col]   [Video Wall — wide 2col]
                Row 3: [Menu Board — wide 2col] [Outdoor — 1col]
             */}
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {types.map((type, index) => (
                    <TypeCard key={type.id} type={type} index={index} />
                ))}
            </div>
        </div>

    </div>
  )
}

export default Types