import React, { useState } from 'react'
import { glass, glassHover } from '../CCTV-Holder/CCTVStyles'
import { features } from './index'

function Card({ children}) {
    const [hovered, setHovered] = useState(false)
    return (
        <div
            className="rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
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

const Features = () => {
  return (
    <div className="w-full px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="text-center mb-12">
                <p className="text-xs font-semibold tracking-widest uppercase mb-4"
                    style={{color: 'rgba(255,255,255,0.45)'}}
                >
                    Everything in One Place
                </p>
                <h2 className="text-3xl mb:text-5xl font-light text-white leading-tight mb-4">
                    Key Features
                </h2>
                <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
                    style={{color: 'rgba(255,255,255,0.55)'}}
                >
                    Every tool your sales, marketing, and customer success teams need —
                    unified in one platform, with no data silos and no switching between apps.
                </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {features.map(f => {
                        const IconComp = f.icon
                        const MockupComp = f.mockup
                        return (
                            <Card key={f.id}>
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                            style={{ background: `${f.accent}18`, color: f.accent, border: `1px solid ${f.accent}30` }}>
                                            <IconComp size={18} />
                                        </div>
                                        <span className="text-xs font-semibold tracking-widest uppercase"
                                            style={{ color: 'rgba(255,255,255,0.4)' }}>
                                            {f.eyebrow}
                                        </span>
                                    </div>
                                    <span className="font-black select-none"
                                        style={{ fontSize: 36, color: 'rgba(255,255,255,0.06)', lineHeight: 1, fontFamily: 'monospace' }}>
                                        {String(f.id).padStart(2, '0')}
                                    </span>
                                </div>

                                <h3 className="text-base font-semibold text-white leading-snug">{f.title}</h3>

                                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.58)' }}>
                                    {f.description}
                                </p>

                                <StatPill value={f.stat.value} label={f.stat.label} accent={f.accent} />

                                <div className="flex flex-col gap-1.5">
                                    {f.highlights.map(h => (
                                        <div key={h} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: f.accent }} />
                                            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>{h}</span>
                                        </div>
                                    ))}
                                </div>

                                <MockupComp />
                            </Card>
                        )
                    })}
            </div>
        </div>
    </div>
  )
}

export default Features