import React, { useState } from 'react'
import { glass, glassHover, glassStrong } from '../CCTV-Holder/CCTVStyles'
import { ArrowRight, CheckCircle2, } from 'lucide-react'
import { modules, ctaChecklist } from './index'

const Modules = () => {

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
                    Built to scale with you 
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5"
                    style={{letterSpacing: '-0.03em', lineHeight: 1.05}}
                >
                    Four Modules. One Platform 
                </h2>
                <p className="text-sm sm:text-base font-light max-w-md mx-auto leading-relaxed"
                    style={{color: 'rgba(255,255,255,0.45)'}}
                >
                    Every stage of the customer lifecycle covered — from first touch
                    to closed deal to long-term retention.
                </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {modules.map(({ id, icon: Icon, color, eyebrow, tag, title, description, points, stats, span, VisualComp }) => {
                    const isActive = active === id
                    const isWide = span === 2

                    return (
                    <div
                        key={id}
                        className={`
                        relative overflow-hidden rounded-2xl cursor-default
                        transition-all duration-300 hover:-translate-y-0.5
                        ${isWide ? 'md:col-span-2' : 'md:col-span-1'}
                        `}
                        style={{
                        ...(isActive ? glassHover : glass),
                        background: `radial-gradient(ellipse at 0% 0%, ${color}18 0%, transparent 60%), ${isActive ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.04)'}`,
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

                        {/* Faded module number — top right watermark */}
                        <span
                        className="pointer-events-none absolute top-5 right-5 font-black select-none"
                        style={{ fontSize: 48, color: 'rgba(255,255,255,0.04)', lineHeight: 1, fontFamily: 'monospace' }}
                        >
                        {String(id).padStart(2, '0')}
                        </span>

                        {/* Content */}
                        <div className="relative z-10 p-6 flex flex-col gap-5 h-full">

                        {/* Icon + tag */}
                        <div className="flex items-center justify-between">
                            <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                            style={{
                                background: `${color}18`, border: `1px solid ${color}35`, color,
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
                            {tag}
                            </span>
                        </div>

                        {/* Eyebrow + title — side by side on wide cards */}
                        <div className={`${isWide ? 'md:flex md:gap-10' : ''} flex flex-col gap-1`}>
                            <div className={isWide ? 'md:w-2/5 shrink-0' : ''}>
                            <p
                                className="text-xs font-semibold uppercase tracking-widest mb-1.5"
                                style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.18em' }}
                            >
                                {eyebrow}
                            </p>
                            <h3
                                className="text-lg font-bold text-white leading-snug"
                                style={{ letterSpacing: '-0.01em' }}
                            >
                                {title}
                            </h3>
                            </div>
                            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                            {description}
                            </p>
                        </div>

                        {/* Animated visual slot — only renders if VisualComp provided */}
                        {VisualComp && (
                            <div className="flex-1 min-h-0">
                            <VisualComp />
                            </div>
                        )}

                        {/* Points + stats */}
                        <div
                            className={`flex flex-col gap-4 mt-auto pt-4 ${isWide ? 'md:flex-row md:items-start md:gap-10' : ''}`}
                            style={{ borderTop: `1px solid ${color}18` }}
                        >
                            <ul className={`flex flex-col gap-2.5 ${isWide ? 'md:flex-1 md:grid md:grid-cols-2' : ''}`}>
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

                            {stats && (
                            <div className={`flex gap-2 ${isWide ? 'md:shrink-0' : 'flex-wrap'}`}>
                                {stats.map(({ value, label }) => (
                                <div
                                    key={label}
                                    className="flex-1 flex flex-col items-center justify-center px-3 py-3 rounded-xl text-center"
                                    style={{
                                    background: `${color}0e`,
                                    border: `1px solid ${color}25`,
                                    minWidth: 72,
                                    }}
                                >
                                    <span className="text-base font-black leading-none mb-1" style={{ color }}>{value}</span>
                                    <span className="text-xs leading-snug" style={{ color: 'rgba(255,255,255,0.38)' }}>{label}</span>
                                </div>
                                ))}
                            </div>
                            )}
                        </div>
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

            {/* CTA Strip */}
            <div className="rounded-2xl px-6 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
                style={glassStrong}
            >
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-semibold text-white">
                        See Every Module Live In One Call 
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                        {ctaChecklist.map((item) => (
                            <div key={item} className="flex items-center gap-1.5">
                                <CheckCircle2 size={11} style={{ color: '#4ade80', flexShrink: 0 }} />
                                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    className="shrink-0 flex items-center justify-center gap-2 text-sm font-bold px-6 py-3 rounded-xl w-full sm:w-auto"
                    style={{ background: '#93c5fd', color: '#0f172a', transition: 'all 0.2s ease' }}
                    onMouseEnter={e => {
                    e.currentTarget.style.background = '#bfdbfe'
                    e.currentTarget.style.boxShadow = '0 6px 24px rgba(147,197,253,0.3)'
                    e.currentTarget.style.transform = 'translateY(-1px)'
                    }}
                    onMouseLeave={e => {
                    e.currentTarget.style.background = '#93c5fd'
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.transform = 'translateY(0)'
                    }}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    Book a Free Demo <ArrowRight size={14} strokeWidth={2.5} />
                </button>
            </div>

        </div>

    </section>
  )
}

export default Modules