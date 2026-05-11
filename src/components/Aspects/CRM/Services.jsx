import React, { useState } from 'react'
import { glass, glassHover, glassStrong } from '../CCTV-Holder/CCTVStyles'
import { services, ctaPoints } from './index'
import { ArrowRight, CheckCircle2 } from 'lucide-react'


const Services = () => {
 
  const [active, setActive] = useState(null)
    
  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-14 py-16 sm:py-24"
        style={{color: 'white'}}
    >
        <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="text-center mb-14">
                <p className="text-xs font-semibold uppercase tracking-widest mb-4"
                    style={{color: 'rgba(255,255,255,0.3)', letterSpacing: '0.2em'}}
                >
                    What We Offer 
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5"
                    style={{letterSpacing: '-0.03em', lineHeight: 1.05}}
                >
                    Services built for every Stage.
                </h2>
                <p className="text-sm sm:text-base font-light max-w-md mx-auto leading-relaxed"
                    style={{color: 'rgba(255,255,255,0.45)'}}
                >
                    From first implementation to long-term optimisation — everything
                    your team needs to get value from your CRM, not just access to it.
                </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {services.map(({ id, icon: Icon, color, phase, title, body, points, stats, span }) => {
                    const isActive = active === id
                    const isWide   = span === 2
                    const isFull   = span === 3

                    return (
                    <div
                        key={id}
                        className={`
                        relative overflow-hidden rounded-2xl cursor-default
                        transition-all duration-300 hover:-translate-y-0.5
                        ${isFull ? 'md:col-span-3' : isWide ? 'md:col-span-2' : 'md:col-span-1'}
                        `}
                        style={{
                        ...(isActive ? glassHover : glass),
                        background: isActive
                            ? `radial-gradient(ellipse at 0% 0%, ${color}18 0%, transparent 60%), ${(glassHover).background ?? 'rgba(255,255,255,0.07)'}`
                            : `radial-gradient(ellipse at 0% 0%, ${color}0d 0%, transparent 55%), ${(glass).background ?? 'rgba(255,255,255,0.04)'}`,
                        }}
                        onMouseEnter={() => setActive(id)}
                        onMouseLeave={() => setActive(null)}
                    >
                        {/* Watermark icon */}
                        <div
                        className="pointer-events-none absolute -bottom-4 -right-4 opacity-[0.045]"
                        style={{ color }}
                        >
                        <Icon size={120} strokeWidth={1} />
                        </div>

                        {/* Card content */}
                        <div className={`relative z-10 p-6 flex flex-col gap-5 h-full ${isFull ? 'md:flex-row md:gap-12 md:items-start' : ''}`}>

                        {/* Left / main column */}
                        <div className={`flex flex-col gap-5 ${isFull ? 'md:flex-1' : ''}`}>

                            {/* Icon + phase badge */}
                            <div className="flex items-center justify-between">
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                style={{
                                background: `${color}18`,
                                border: `1px solid ${color}35`,
                                color,
                                boxShadow: isActive ? `0 0 16px ${color}25` : 'none',
                                transition: 'box-shadow 0.3s ease',
                                }}
                            >
                                <Icon size={18} strokeWidth={1.75} />
                            </div>
                            <span
                                className="text-xs font-semibold px-3 py-1 rounded-full"
                                style={{ color, background: `${color}14`, border: `1px solid ${color}28` }}
                            >
                                {phase}
                            </span>
                            </div>

                            {/* Title + body */}
                            <div>
                            <h3
                                className="text-lg font-bold text-white leading-snug mb-2"
                                style={{ letterSpacing: '-0.01em' }}
                            >
                                {title}
                            </h3>
                            <p
                                className="text-sm leading-relaxed"
                                style={{ color: 'rgba(255,255,255,0.5)' }}
                            >
                                {body}
                            </p>
                            </div>

                            {/* Points */}
                            <ul
                            className={`flex flex-col gap-2.5 pt-4 ${isFull ? 'md:grid md:grid-cols-2' : ''}`}
                            style={{ borderTop: `1px solid ${color}18` }}
                            >
                            {points.map((pt) => (
                                <li key={pt} className="flex items-center gap-2.5">
                                <div
                                    className="w-1.5 h-1.5 rounded-full shrink-0"
                                    style={{ background: color, boxShadow: `0 0 6px ${color}80` }}
                                />
                                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>{pt}</span>
                                </li>
                            ))}
                            </ul>
                        </div>

                        {/* Stats */}
                        {stats && (
                            <div className={`flex gap-3 ${isFull ? 'md:flex-col md:justify-center md:shrink-0 md:w-44' : 'flex-row flex-wrap'}`}>
                            {stats.map(({ value, label }) => (
                                <div
                                key={label}
                                className="flex-1 flex flex-col items-center justify-center px-3 py-4 rounded-2xl text-center"
                                style={{
                                    background: `${color}0e`,
                                    border: `1px solid ${color}25`,
                                    minWidth: 80,
                                }}
                                >
                                <span className="text-xl font-black leading-none mb-1" style={{ color }}>
                                    {value}
                                </span>
                                <span className="text-xs leading-snug" style={{ color: 'rgba(255,255,255,0.38)' }}>
                                    {label}
                                </span>
                                </div>
                            ))}
                            </div>
                        )}

                        </div>

                        {/* Accent bottom line */}
                        <div
                        className="absolute bottom-0 left-0 right-0 h-px"
                        style={{
                            background: `linear-gradient(to right, ${color}50, transparent)`,
                            opacity: isActive ? 1 : 0.4,
                            transition: 'opacity 0.3s ease',
                        }}
                        />
                    </div>
                    )
                })}
            </div>

            {/* CTA strip */}
            <div className="rounded-2xl px-6 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
                style={glassStrong}
            >
                <div className="flex flex-col gap-2 5">
                    <p className="text-sm font-semibold text-white">
                        See every service working for your team.
                    </p>
                    <div className="flex flex-wrap gap-x-5 gap-y-1 5">
                        {ctaPoints.map((item) => (
                            <div key={item} className="flex items-center gap-1.5">
                                <CheckCircle2 size={11} style={{ color: '#4ade80', flexShrink: 0 }} />
                                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <button className="shrink-0 flex items-center justify-center gap-2 text-sm font-bold px-6 py-3 rounded-xl w-full sm:w-auto"
                    style={{ background: '#93c5fd', color: '#0f172a', transition: 'all 0.2s ease' }}
                    onMouseEnter={e => {
                    e.currentTarget.style.background = '#bfdbfe'
                    e.currentTarget.style.boxShadow  = '0 6px 24px rgba(147,197,253,0.3)'
                    e.currentTarget.style.transform  = 'translateY(-1px)'
                    }}
                    onMouseLeave={e => {
                    e.currentTarget.style.background = '#93c5fd'
                    e.currentTarget.style.boxShadow  = 'none'
                    e.currentTarget.style.transform  = 'translateY(0)'
                    }}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    Book a Free Consultation <ArrowRight size={14} strokeWidth={2.5} />
                </button>
            </div>
        </div>
    </section>
  )
}

export default Services