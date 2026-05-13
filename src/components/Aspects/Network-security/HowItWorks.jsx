import React, { useState } from 'react'
import {HowItWorksStats, steps, checklist, } from './index'
import { glass, glassHover, glassStrong } from "../CCTV-Holder/CCTVStyles"
import { CheckCircle2, ArrowRight, CalendarClock, } from "lucide-react"

const HowItWorks = () => {

  const [active, setActive] = useState(null)

  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-14 py-16 sm:py-24"
        style={{color: "white"}}
    >
        <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="text-center mb-14">

                <p className="text-xs font-semibold uppercase tracking-widest mb-4"
                    style={{color: "rgba(255,255,255,0.3)", letterSpacing: "0.2em"}}
                >
                    The Process
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5"
                    style={{letterSpacing: "-0.03em", lineHeight: 1.05}}
                >
                    How It Works
                </h2>
                <p className="text-sm sm:text-base font-light max-w-md mx-auto leading-relaxed"
                    style={{color: "rgba(255,255,255,0.45)"}}
                >
                    Six steps from first conversation to a fully live,
                    supported platform — nothing left to chance.
                </p>
            </div>

            {/* Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12 rounded-2xl px-6 py-6"
                style={glassStrong}
            >
                {HowItWorksStats.map(({ value, unit, label, color }) => (
                    <div key={label} className="flex flex-col items-center text-center gap-1">
                    <div className="flex items-baseline gap-1">
                        <span className="text-2xl sm:text-3xl font-black" style={{ color }}>{value}</span>
                        {unit && <span className="text-xs font-semibold" style={{ color }}>{unit}</span>}
                    </div>
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{label}</span>
                    </div>
                ))}
            </div>

            {/* Step Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                {steps.map(({ n, icon: Icon, color, phase, title, body, points }) => {
                    const isActive = active === n
                    return (
                    // ── CHANGED: added "relative overflow-hidden" to enable watermark + accent line
                    <div
                        key={n}
                        className="relative overflow-hidden rounded-2xl cursor-default transition-all duration-300 hover:-translate-y-0.5"
                        // ── CHANGED: background now includes a radial glow from the card's accent colour
                        style={{
                        ...(isActive ? glassHover : glass),
                        background: `radial-gradient(ellipse at 0% 0%, ${color}18 0%, transparent 60%), ${isActive ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.04)"}`,
                        }}
                        onMouseEnter={() => setActive(n)}
                        onMouseLeave={() => setActive(null)}
                    >
                        {/* ── ADDED: large faded watermark icon, bottom-right of each card */}
                        <div
                        className="pointer-events-none absolute -bottom-4 -right-4 opacity-[0.045]"
                        style={{ color }}
                        >
                        <Icon size={120} strokeWidth={1} />
                        </div>
        
                        {/* ── ADDED: relative z-10 so content sits above the watermark */}
                        <div className="relative z-10 p-6 flex flex-col gap-4">
        
                        {/* Icon + phase badge */}
                        <div className="flex items-center justify-between">
                            <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                            // ── CHANGED: added boxShadow glow on hover
                            style={{
                                background: `${color}15`, border: `1px solid ${color}30`, color,
                                boxShadow: isActive ? `0 0 16px ${color}25` : "none",
                                transition: "box-shadow 0.3s ease",
                            }}
                            >
                            <Icon size={16} strokeWidth={1.75} />
                            </div>
                            <span
                            className="text-xs font-semibold px-2.5 py-1 rounded-full"
                            style={{ color, background: `${color}12`, border: `1px solid ${color}22` }}
                            >
                            {phase}
                            </span>
                        </div>
        
                        {/* Step + title */}
                        <div>
                            <span
                            className="text-xs font-bold tracking-widest block mb-1"
                            style={{ color: "rgba(255,255,255,0.2)" }}
                            >
                            STEP {n}
                            </span>
                            <h3 className="text-base font-bold text-white leading-snug">
                            {title}
                            </h3>
                        </div>
        
                        {/* Body */}
                        <p
                            className="text-sm leading-relaxed flex-1"
                            style={{ color: "rgba(255,255,255,0.5)" }}
                        >
                            {body}
                        </p>
        
                        {/* Points */}
                        <ul className="flex flex-col gap-2.5 pt-3" style={{ borderTop: `1px solid ${color}18` }}>
                            {points.map((pt) => (
                            <li key={pt} className="flex items-center gap-2">
                                {/* ── CHANGED: dot now has a colour glow */}
                                <div className="w-1 h-1 rounded-full shrink-0" style={{ background: color, boxShadow: `0 0 6px ${color}80` }} />
                                <span className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>{pt}</span>
                            </li>
                            ))}
                        </ul>
        
                        </div>
        
                        {/* ── ADDED: accent gradient line along the bottom of each card */}
                        <div
                        className="absolute bottom-0 left-0 right-0 h-px"
                        style={{
                            background: `linear-gradient(to right, ${color}50, transparent)`,
                            opacity: isActive ? 1 : 0.4,
                            transition: "opacity 0.3s ease",
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
                
                <div className="flex items-start gap-3">
                    <CalendarClock size={18} strokeWidth={1.5} style={{ color: "#93c5fd", flexShrink: 0, marginTop: 2 }} />
                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-semibold text-white">Typically live in 2 weeks.</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                            {checklist.map((item) => (
                                <div key={item} className="flex items-center gap-1.5">
                                    <CheckCircle2 size={11} style={{ color: "#4ade80", flexShrink: 0 }} />
                                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{item}</span>
                                </div>
                            ))}  
                        </div>
                    </div>    
                
                </div>

                <button className="shrink-0 flex items-center justify-center gap-2 text-sm font-bold px-6 py-3 rounded-xl w-full sm:w-auto"
                    style={{ background: "#ff751f", color: "#0f172a", transition: "all 0.2s ease" }}
                    onMouseEnter={e => {
                    e.currentTarget.style.background = "#93c5fd"
                    e.currentTarget.style.boxShadow = "0 6px 24px rgba(147,197,253,0.3)"
                    e.currentTarget.style.transform = "translateY(-1px)"
                    }}
                    onMouseLeave={e => {
                    e.currentTarget.style.background = "#ff751f"
                    e.currentTarget.style.boxShadow = "none"
                    e.currentTarget.style.transform = "translateY(0)"
                    }}
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                    Book a Free Consultation <ArrowRight size={14} strokeWidth={2.5} />
                </button>
            </div>
        </div>
    </section>
  )
}

export default HowItWorks