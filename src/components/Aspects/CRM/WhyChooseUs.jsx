import React, { useState } from 'react'
import {stars, ReasonCard} from './Components'
import {glass,glassHover,glassStrong} from '../CCTV-Holder/CCTVStyles'
import {reasons, trustStats, testimonials, promises} from './index'
import { Stars, CheckCircle2, ArrowRight, } from 'lucide-react'

const WhyChooseUs = () => {

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
                    The Difference
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5"
                    style={{letterSpacing: '-0.03em', lineHeight: 1.05}}
                >
                    Why teams choose us.
                </h2>
                <p className="text-sm sm:text-base font-light max-w-md mx-auto leading-relaxed"
                    style={{color: 'rgba(255,255,255,0.45)'}}
                >
                    Not just another CRM — a platform built for the way sales actually
                    works. That difference shows from day one.
                </p>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {reasons.slice(0, 2).map((r) => (
                    <ReasonCard key={r.id} {...r} active={active} setActive={setActive} />
                ))}
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">

                {/* Scale Card */}
                {reasons.slice(2, 3).map((r) => {
                    const isActive = active === r.id
                    return (
                    <div
                        key={r.id}
                        className="md:col-span-1 relative overflow-hidden rounded-2xl cursor-default transition-all duration-300 hover:-translate-y-0.5"
                        style={{
                        ...(isActive ? glassHover : glass),
                        background: `radial-gradient(ellipse at 0% 0%, ${r.color}18 0%, transparent 60%), ${isActive ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.04)'}`,
                        }}
                        onMouseEnter={() => setActive(r.id)}
                        onMouseLeave={() => setActive(null)}
                    >
                        <div className="pointer-events-none absolute -bottom-4 -right-4 opacity-[0.045]" style={{ color: r.color }}>
                        <r.icon size={120} strokeWidth={1} />
                        </div>
                        <div className="relative z-10 p-6 flex flex-col gap-5 h-full">
                        <div className="flex items-center justify-between">
                            <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                            style={{ background: `${r.color}18`, border: `1px solid ${r.color}35`, color: r.color, boxShadow: isActive ? `0 0 16px ${r.color}25` : 'none', transition: 'box-shadow 0.3s ease' }}
                            >
                            <r.icon size={18} strokeWidth={1.75} />
                            </div>
                            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ color: r.color, background: `${r.color}14`, border: `1px solid ${r.color}28` }}>
                            {r.tag}
                            </span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white leading-snug mb-2" style={{ letterSpacing: '-0.01em' }}>{r.title}</h3>
                            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{r.body}</p>
                        </div>
                        <ul className="flex flex-col gap-2.5 pt-4 mt-auto" style={{ borderTop: `1px solid ${r.color}18` }}>
                            {r.points.map((pt) => (
                            <li key={pt} className="flex items-center gap-2.5">
                                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: r.color, boxShadow: `0 0 6px ${r.color}80` }} />
                                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>{pt}</span>
                            </li>
                            ))}
                        </ul>
                        {r.stats && (
                            <div className="flex gap-2">
                            {r.stats.map(({ value, label }) => (
                                <div key={label} className="flex-1 flex flex-col items-center px-3 py-3 rounded-xl text-center" style={{ background: `${r.color}0e`, border: `1px solid ${r.color}25` }}>
                                <span className="text-lg font-black leading-none mb-1" style={{ color: r.color }}>{value}</span>
                                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.38)' }}>{label}</span>
                                </div>
                            ))}
                            </div>
                        )}
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, ${r.color}50, transparent)`, opacity: isActive ? 1 : 0.4, transition: 'opacity 0.3s ease' }} />
                    </div>
                    )
                })}

                {/* Testimonial Card */}
                <div className="md:col-span-2 relative overflow-hidden rounded-2xl cursor-default transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                        ...(active === 'testimonials' ? glassHover : glass),
                        background: `radial-gradient(ellipse at 100% 0%, #fbbf2412 0%, transparent 55%), ${active === 'testimonials' ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.04)'}`, 
                    }}
                    onMouseEnter={() => setActive('testimonials')}
                    onMouseLeave={() => setActive(null)}
                >
                    <div className="relative z-10 p-6 flex flex-col gap-4 h-full">

                        <div className="flex items-center justify-between">
                            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.18em' }}>
                                What Customers Say
                            </p>
                            <div className="flex items-center gap-1.5">
                                <Stars />
                                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>4.8 avg</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 flex-1">
                            {testimonials.map(({ quote, name, role }) => (
                                <div
                                    key={name}
                                    className="rounded-xl p-4 flex flex-col gap-2"
                                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                                >
                                    <Stars />
                                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                                        "{quote}"
                                    </p>
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-xs font-semibold text-white">{name}</span>
                                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>· {role}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, #fbbf2450, transparent)', opacity: active === 'testimonials' ? 1 : 0.4, transition: 'opacity 0.3s ease' }} />

                </div>

                {/* Support Card */}
                {reasons.slice(3, 4).map((r) => {
                    const isActive = active === r.id
                    return (
                    <div
                        key={r.id}
                        className="md:col-span-1 relative overflow-hidden rounded-2xl cursor-default transition-all duration-300 hover:-translate-y-0.5"
                        style={{
                        ...(isActive ? glassHover : glass),
                        background: `radial-gradient(ellipse at 0% 0%, ${r.color}18 0%, transparent 60%), ${isActive ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.04)'}`,
                        }}
                        onMouseEnter={() => setActive(r.id)}
                        onMouseLeave={() => setActive(null)}
                    >
                        <div className="pointer-events-none absolute -bottom-4 -right-4 opacity-[0.045]" style={{ color: r.color }}>
                            <r.icon size={120} strokeWidth={1} />
                        </div>
                        <div className="relative z-10 p-6 flex flex-col gap-5 h-full">
                        <div className="flex items-center justify-between">
                            <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                            style={{ background: `${r.color}18`, border: `1px solid ${r.color}35`, color: r.color, boxShadow: isActive ? `0 0 16px ${r.color}25` : 'none', transition: 'box-shadow 0.3s ease' }}
                            >
                            <r.icon size={18} strokeWidth={1.75} />
                            </div>
                            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ color: r.color, background: `${r.color}14`, border: `1px solid ${r.color}28` }}>
                            {r.tag}
                            </span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white leading-snug mb-2" style={{ letterSpacing: '-0.01em' }}>{r.title}</h3>
                            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{r.body}</p>
                        </div>
                        <ul className="flex flex-col gap-2.5 pt-4 mt-auto" style={{ borderTop: `1px solid ${r.color}18` }}>
                            {r.points.map((pt) => (
                            <li key={pt} className="flex items-center gap-2.5">
                                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: r.color, boxShadow: `0 0 6px ${r.color}80` }} />
                                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>{pt}</span>
                            </li>
                            ))}
                        </ul>
                        {r.stats && (
                            <div className="flex gap-2">
                            {r.stats.map(({ value, label }) => (
                                <div key={label} className="flex-1 flex flex-col items-center px-3 py-3 rounded-xl text-center" style={{ background: `${r.color}0e`, border: `1px solid ${r.color}25` }}>
                                <span className="text-lg font-black leading-none mb-1" style={{ color: r.color }}>{value}</span>
                                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.38)' }}>{label}</span>
                                </div>
                            ))}
                            </div>
                        )}
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, ${r.color}50, transparent)`, opacity: isActive ? 1 : 0.4, transition: 'opacity 0.3s ease' }} />
                    </div>
                    )
                })}
            </div>

            {/* CTA Strip */}
            <div className="relative overflow-hidden rounded-2xl px-6 py-6 flex flex-col md:flex-row md:items-center justify-between gap-6"
                style={glassStrong}
            >
                <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 120%, #93c5fd0a 0%, transparent 60%)' }} />

                {/* Trust Stats */}
                <div className="relative z-10 flex flex-wrap gap-6 flex-1">
                    {trustStats.map(({ value, label, color }) => (
                        <div key={label} className="flex flex-col">
                            <span className="text-2xl font-black leading-none" style={{ color }}>{value}</span>
                            <span className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.38)' }}>{label}</span>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px self-stretch" style={{ background: 'rgba(255,255,255,0.08)' }} />
                
                {/* Promises + CTA */}
                <div className="relative z-10 flex flex-col gap-4 md:w-72 shrink-0">
                    <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.18em' }}>
                        Our promise to every customer
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {promises.map((item) => (
                        <div key={item} className="flex items-center gap-1.5">
                            <CheckCircle2 size={11} style={{ color: '#4ade80', flexShrink: 0 }} />
                            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>{item}</span>
                        </div>
                    ))}
                    </div>
                    <button className="self-start flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl"
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
                    See it in action <ArrowRight size={14} strokeWidth={2.5} />
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs