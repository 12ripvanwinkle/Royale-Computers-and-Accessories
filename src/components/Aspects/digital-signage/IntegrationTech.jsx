import React from 'react'
import { glassStrong } from '../CCTV-Holder/CCTVStyles'
import {IntegrationCard} from './Components'
import {cards,} from './index'
import { Cloud, ShoppingCart, Code2, Radio, ArrowRight } from 'lucide-react'

const IntegrationTech = () => {
  return (
    <div id='integrations' className="w-full px-4 sm:px-6 md:px-10 lg:px-14 py-14 sm:py-20 md:py-24"
        style={{color: 'white'}}
    >
        <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="text-center mb-10 sm:mb-14">
                <p className="text-xs font-semibold uppercase tracking-widest mb-3"
                    style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.22em' }}>
                    Connectivity
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
                    style={{ letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                    Plugs into everything.
                </h2>
                <p className="text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.5)' }}>
                    From cloud CMS platforms to live data feeds — our signage infrastructure connects with your existing tools out of the box.
                </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {cards.map(card => (
                    <IntegrationCard key={card.id} card={card} />
                ))}
            </div>

            {/* CTA Strip */}
            <div className="mt-4 rounded-2xl px-5 sm:px-8 py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                style={glassStrong}
            >

                <div>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-1"
                        style={{color: 'rgba(255,255,255,0.35)', letterSpacing: '0.18em'}}
                    >
                        Need a custom integration
                    </p>
                    <h3 className="text-sm sm:text-base font-semibold text-white">
                        We'll connect your signage to whatever you're running.
                    </h3>
                    <p className="text-xs mt-1 font-light" style={{color: 'rgba(255,255,255,0.4)'}}>
                        Talk to our team — no integration is too bespoke.
                    </p>
                </div>

                <button className="shrink-0 w-full sm:w-auto flex items-center justify-center gap-2 text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl"
                    style={{ background: '#00e5a0', color: '#0a0d0f', transition: 'all 0.2s ease' }}
                    onMouseEnter={e => {
                        e.currentTarget.style.background = '#33ecb4'
                        e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,229,160,0.35)'
                        e.currentTarget.style.transform = 'translateY(-1px)'
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.background = '#00e5a0'
                        e.currentTarget.style.boxShadow = 'none'
                        e.currentTarget.style.transform = 'translateY(0)'
                    }}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    Get in Touch <ArrowRight size={14} strokeWidth={2.5} />
                </button>

            </div>

        </div>
    </div>
  )
}

export default IntegrationTech