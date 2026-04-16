import React, {useState} from 'react'
import {cards} from './index'
import { glassHover } from '../CCTV-Holder'
import { glassStrong, } from './digitalStyles'

const IntegrationTech = () => {
  const [hoveredCard, setHoveredCard] = useState(null)
    
  return (
    <div className="w-full px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="text-center mb-12">
                <p className="text-xs font-semibold tracking-widest uppercase mb-4"
                    style={{color: 'rgba(255,255,255,0.45)'}}
                >
                    The Core Architecture
                </p>
                <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
                    Technology &amp; Integration
                </h2>
                <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
                    style={{color: 'rgba(255,255,255,0.55)'}}
                >
                    Our digital signage solutions plug seamlessly into your existing technology stack —
                    no rip-and-replace required.
                </p>
            </div>

            {/* Bento Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {cards.map(card => {
                    const IconComp = card.icon
                    const Mockup = card.mockup
                    return (
                    <div
                        key={card.id}
                        className={`${card.wide ? 'md:col-span-2' : 'md:col-span-1'} rounded-2xl p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300`}
                        style={hoveredCard === card.id ? glassHover : glassStrong}
                        onMouseEnter={() => setHoveredCard(card.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        {/* Mockup */}
                        {Mockup && <Mockup />}


                        {/* Text */}
                        <div className="mt-auto">
                        {/* Icon + label */}
                        <div className="flex items-center gap-2.5 mb-3">
                            <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                            style={{
                                background: card.accentBg,
                                color: card.accent,
                                border: `1px solid ${card.accentBorder}`,
                            }}
                            >
                            <IconComp size={16} />
                            </div>
                            <span
                            className="text-xs font-medium tracking-wide"
                            style={{ color: 'rgba(255,255,255,0.45)' }}
                            >
                            {card.label}
                            </span>
                        </div>

                        <h3 className="text-base font-semibold text-white mb-2">{card.title}</h3>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
                            {card.description}
                        </p>

                        {/* Highlights */}
                        <div className="flex flex-col gap-1.5">
                            {card.highlights.map(h => (
                            <div key={h} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: card.accent }} />
                                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>{h}</span>
                            </div>
                            ))}
                        </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default IntegrationTech