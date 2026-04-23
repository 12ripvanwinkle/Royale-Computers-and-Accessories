import React, { useState } from 'react'
import { glass, glassHover } from '../CCTV-Holder/CCTVStyles'

import {types} from './index'

function Card({children, colSpan = '' }) {
    const [hovered, setHovered] = useState(false)
    return (
        <div
            className={`${colSpan} rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-0.5 overflow-hidden`}
            style={hovered ? glassHover : glass}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {children}
        </div>
    )
}

function StatPill({value, label, accent}) {
    return (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full self-start"
            style={{ background: `${accent}12`, border: `1px solid ${accent}30` }}>
            <span className="text-xs font-bold" style={{ color: accent }}>{value}</span>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{label}</span>
        </div>
    )
}

function CardContent({item}) {

    const IconComp = item.icon 
    const MockupComp = item.mockup 

    return (
        <>
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{background: `${item.accent}18`, color: item.accent, border: `1px solid ${item.accent}30`}}
                    >
                        <IconComp size={18} />
                    </div>
                    <span className="text-xs font-semibold tracking-widest uppercase"
                        style={{ color: 'rgba(255,255,255,0.4)' }}>
                        {item.eyebrow}
                    </span>
                </div>
                <span className="font-black select-none"
                    style={{fontSize: 36, color: 'rgba(255,255,255,0.06)', lineHeight: 1, fontFamily: 'monospace'}}
                >
                    {String(item.id).padStart(2, '0')}
                </span>
            </div>

            <h3 className="text-lg font-semibold text-white leading-snug">
                {item.title}
            </h3>

            <p className="text-sm leading-relaxed" style={{color: 'rgba(255,255,255,0.58)'}}>
                {item.description}
            </p>

            <StatPill value={item.stat.value} label={item.stat.label} accent={item.accent} />

            <div className="flex flex-col gap-1.5">
                {item.highlights.map(h => (
                    <div key={h} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: item.accent }} />
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>{h}</span>
                    </div>
                ))}
            </div>

            <MockupComp />
        </>
    )
}

const TypesOfSecurity = () => {
  return (
    <div className="w-full px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="text-center mb-12">
                <p className="text-xs font-semibold tracking-widest uppercase mb-4"
                    style={{color: 'rgba(255,255,255,0.45)'}}
                >
                    Layered Defence
                </p>
                <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
                    Types of Security
                </h2>
                <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
                    style={{color: 'rgba(255,255,255,0.55)'}}
                >
                    Five interlocking security disciplines that cover every vector —
                    from the network edge to every managed device on your estate.
                </p>
            </div>

            {/* Bento Grid */}
                <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {types.slice(0, 2).map(item => (
                            <Card key={item.id}>
                                <CardContent item={item} />
                            </Card>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {types.slice(2).map(item => (
                            <Card key={item.id}>
                                <CardContent item={item} />
                            </Card>
                        ))}
                    </div>
                </div>
        </div>
    </div>
  )
}

export default TypesOfSecurity