import React, { useState } from 'react'
import {features} from './index'
import {glass, glassHover, glassStrong} from '../CCTV-Holder/CCTVStyles'
import { ArrowRight, } from "lucide-react"

const Features = () => {

  const [active, setActive] = useState(null)

  return (
        <section id="features" className="w-full px-4 sm:px-6 md:px-10 lg:px-14 py-14 sm:py-20 md:py-24"
            style={{ color: "white" }}
        >
            <div className="max-w-5xl mx-auto">
 
                {/* Header */}
                <div className="text-center mb-10 sm:mb-14">
                    <p
                        className="text-xs font-semibold uppercase tracking-widest mb-3"
                        style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.22em" }}
                    >
                        Platform Capabilities
                    </p>
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
                        style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}
                    >
                        Everything your network needs.
                    </h2>
                    <p
                        className="text-sm sm:text-base font-light max-w-lg mx-auto leading-relaxed"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                        Every layer of your network — from the perimeter to every managed device —
                        protected by purpose-built security technologies working in concert.
                    </p>
                </div>
 
                {/* Bento Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {features.map(({ id, icon: Icon, color, pill, eyebrow, headline, body, bullets, stats, span }) => {
                        const isActive = active === id
                        return (
                            <div
                                key={id}
                                className={`
                                    col-span-1 ${span === 2 ? "sm:col-span-2" : ""}
                                    relative overflow-hidden rounded-2xl
                                    hover:-translate-y-0.5 transition-all duration-300
                                `}
                                style={{
                                    background: `radial-gradient(ellipse at 0% 0%, ${color}22 0%, transparent 60%), ${isActive ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.04)"}`,
                                    backdropFilter: "blur(12px)",
                                    transition: "all 0.3s ease",
                                }}
                                onMouseEnter={() => setActive(id)}
                                onMouseLeave={() => setActive(null)}
                            >
                                {/* Watermark icon */}
                                <div
                                    className="pointer-events-none absolute -bottom-4 -right-4"
                                    style={{ color, opacity: isActive ? 0.07 : 0.04, transition: "opacity 0.3s ease" }}
                                >
                                    <Icon size={120} strokeWidth={1} />
                                </div>
 
                                {/* Content */}
                                <div className="relative z-10 p-5 sm:p-6 flex flex-col gap-5 sm:gap-4">
 
                                    {/* Icon + eyebrow + headline */}
                                    <div className="flex items-start gap-3">
                                        <div
                                            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                                            style={{
                                                background: `${color}15`,
                                                border: `1px solid ${color}28`,
                                                color,
                                                boxShadow: isActive ? `0 0 16px ${color}25` : "none",
                                                transition: "box-shadow 0.3s ease",
                                            }}
                                        >
                                            <Icon size={17} strokeWidth={1.75} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs font-medium uppercase" style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em" }}>
                                                {eyebrow}
                                            </p>
                                            <h3 className="text-base sm:text-lg font-bold text-white leading-tight">{headline}</h3>
                                        </div>
                                    </div>
 
                                    {/* Pill — sits on its own line, never competes for space */}
                                    <span
                                        className="inline-flex items-center self-start text-xs font-semibold px-2.5 py-1 rounded-full"
                                        style={{ color, background: `${color}15`, border: `1px solid ${color}28`, letterSpacing: "0.08em", whiteSpace: "nowrap" }}
                                    >
                                        {pill}
                                    </span>
 
                                    {/* Body */}
                                    <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                                        {body}
                                    </p>
 
                                    {/* Bullets */}
                                    <div className="flex flex-col gap-2.5 sm:gap-2">
                                        {bullets.map(b => (
                                            <div key={b} className="flex items-center gap-2.5">
                                                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color, boxShadow: `0 0 6px ${color}80` }} />
                                                <span className="text-xs sm:text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{b}</span>
                                            </div>
                                        ))}
                                    </div>
 
                                    {/* Stats */}
                                    <div className={`grid grid-cols-${stats.length} gap-2 mt-auto pt-2`}>
                                        {stats.map(([val, lbl]) => (
                                            <div
                                                key={lbl}
                                                className="flex flex-col items-center justify-center px-3 py-3 sm:py-4 rounded-xl text-center"
                                                style={{ background: `${color}0e`, border: `1px solid ${color}25` }}
                                            >
                                                <span className="text-base font-bold leading-none mb-1" style={{ color }}>{val}</span>
                                                <span className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{lbl}</span>
                                            </div>
                                        ))}
                                    </div>
 
                                </div>
 
                                {/* Accent bottom line */}
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
                <div
                    className="mt-4 rounded-2xl px-5 sm:px-8 py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    style={glassStrong}
                >
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.18em" }}>
                            See it in action
                        </p>
                        <h3 className="text-sm sm:text-base font-semibold text-white">
                            Get a personalised walkthrough for your network.
                        </h3>
                        <p className="text-xs mt-1 font-light" style={{ color: "rgba(255,255,255,0.4)" }}>
                            No commitment. Deployed in days, not months.
                        </p>
                    </div>
                    <button
                        className="shrink-0 w-full sm:w-auto flex items-center justify-center gap-2 text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl"
                        style={{ background: "#ff751f", color: "white", transition: "all 0.2s ease" }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = "#ff8c3f"
                            e.currentTarget.style.boxShadow = "0 6px 24px rgba(255,117,31,0.35)"
                            e.currentTarget.style.transform = "translateY(-1px)"
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = "#ff751f"
                            e.currentTarget.style.boxShadow = "none"
                            e.currentTarget.style.transform = "translateY(0)"
                        }}
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        Book a Free Demo <ArrowRight size={14} strokeWidth={2.5} />
                    </button>
                </div>
 
            </div>
        </section>
    )
}

export default Features