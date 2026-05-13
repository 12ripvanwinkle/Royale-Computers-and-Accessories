import React, { useState } from 'react'
import {reasons, trustStats, testimonials, promises} from './index'
import {Star, CheckCircle2, ArrowRight, } from "lucide-react"
import { glassStrong, glass, glassHover, } from '../CCTV-Holder/CCTVStyles'

// Helper function
const Stars = () => {
    return (
        <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={11} fill="#fbbf24" style={{ color: "#fbbf24" }} />
                ))}
        </div>
    )
    
}

const WhyChooseUs = () => {

  const [active, setActive] = useState(null)

  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-14 py-16 sm:py-24"
        style={{color:"white"}}
    >
        <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="text-center mb-14">
                <p className="text-xs font-semibold uppercase tracking-widest mb-4"
                    style={{color: "rgba(255,255,255,0.3)", letterSpacing: "0.2em"}}
                >
                    The Difference 
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5"
                    style={{letterSpacing: "-0.03em", lineHeight: 1.05}}
                >
                    Why Choose Us 
                </h2>
                <p className="text-sm sm:text-base font-light max-w-md mx-auto leading-relaxed"
                    style={{color: "rgba(255,255,255,0.45)"}}
                >
                    Built for modern network environments — not retrofitted from outdated security systems.
                    That focus is reflected in everything from deployment to ongoing protection.
                </p>
            </div>
            


        {/* Bento Grid */}
        
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {reasons.slice(0, 2).map(({ id, icon: Icon, color, tag, title, body, points, roles, stats, span }) => {
                const isActive = active === id
                return (
                <div
                    key={id}
                    className={`
                    relative overflow-hidden rounded-2xl cursor-default
                    transition-all duration-300 hover:-translate-y-0.5
                    ${span === 2 ? "md:col-span-2" : "md:col-span-1"}
                    `}
                    style={{
                    ...(isActive ? glassHover : glass),
                    background: `radial-gradient(ellipse at 0% 0%, ${color}18 0%, transparent 60%), ${isActive ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.04)"}`,
                    }}
                    onMouseEnter={() => setActive(id)}
                    onMouseLeave={() => setActive(null)}
                >
                    {/* Watermark icon */}
                    <div className="pointer-events-none absolute -bottom-4 -right-4 opacity-[0.045]" style={{ color }}>
                        <Icon size={120} strokeWidth={1} />
                    </div>

                    <div className="relative z-10 p-6 flex flex-col gap-5 h-full">

                    {/* Icon + tag */}
                    <div className="flex items-center justify-between">
                        <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{
                            background: `${color}18`, border: `1px solid ${color}35`, color,
                            boxShadow: isActive ? `0 0 16px ${color}25` : "none",
                            transition: "box-shadow 0.3s ease",
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

                    {/* Title + body — side by side on wide card */}
                    <div className={`${span === 2 ? "md:flex md:gap-10" : ""} flex flex-col gap-2`}>
                        <div className={span === 2 ? "md:w-2/5 shrink-0" : ""}>
                        <h3 className="text-lg font-bold text-white leading-snug" style={{ letterSpacing: "-0.01em" }}>
                            {title}
                        </h3>
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                            {body}
                        </p>
                    </div>

                    {/* Role pills — wide card only */}
                    {roles && (
                        <div className="flex gap-2">
                        {roles.map(({ label, sub, color: rc }) => (
                            <div
                            key={label}
                            className="flex-1 rounded-xl px-3 py-2.5"
                            style={{ background: `${rc}0e`, border: `1px solid ${rc}25` }}
                            >
                            <div className="text-xs font-bold mb-0.5" style={{ color: rc }}>{label}</div>
                            <div className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.45)" }}>{sub}</div>
                            </div>
                        ))}
                        </div>
                    )}

                    {/* Points */}
                    {!roles && (
                        <ul
                        className="flex flex-col gap-2.5 pt-4 mt-auto"
                        style={{ borderTop: `1px solid ${color}18` }}
                        >
                        {points.map((pt) => (
                            <li key={pt} className="flex items-center gap-2.5">
                            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color, boxShadow: `0 0 6px ${color}80` }} />
                            <span className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{pt}</span>
                            </li>
                        ))}
                        </ul>
                    )}

                    {/* Stats */}
                    {stats && (
                        <div className="flex gap-2 mt-auto">
                        {stats.map(({ value, label }) => (
                            <div
                            key={label}
                            className="flex-1 flex flex-col items-center justify-center px-3 py-3 rounded-xl text-center"
                            style={{ background: `${color}0e`, border: `1px solid ${color}25` }}
                            >
                            <span className="text-lg font-black leading-none mb-1" style={{ color }}>{value}</span>
                            <span className="text-xs" style={{ color: "rgba(255,255,255,0.38)" }}>{label}</span>
                            </div>
                        ))}
                        </div>
                    )}

                    {/* Footnote — wide card only */}
                    {id === "ui" && (
                        <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
                        *We still offer training — it's just rarely needed after day two.
                        </p>
                    )}
                    </div>

                    <div
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{ background: `linear-gradient(to right, ${color}50, transparent)`, opacity: isActive ? 1 : 0.4, transition: "opacity 0.3s ease" }}
                    />
                </div>
                )
            })}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">

            {/* Scale Card */}
            {reasons.slice(2, 3).map(({ id, icon: Icon, color, tag, title, body, points, stats }) => {
                const isActive = active === id
                return (
                <div
                    key={id}
                    className="md:col-span-1 relative overflow-hidden rounded-2xl cursor-default transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                    ...(isActive ? glassHover : glass),
                    background: `radial-gradient(ellipse at 0% 0%, ${color}18 0%, transparent 60%), ${isActive ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.04)"}`,
                    }}
                    onMouseEnter={() => setActive(id)}
                    onMouseLeave={() => setActive(null)}
                >
                    <div className="pointer-events-none absolute -bottom-4 -right-4 opacity-[0.045]" style={{ color }}>
                        <Icon size={120} strokeWidth={1} />
                    </div>
                    <div className="relative z-10 p-6 flex flex-col gap-5 h-full">
                        <div className="flex items-center justify-between">
                            <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                            style={{ background: `${color}18`, border: `1px solid ${color}35`, color, boxShadow: isActive ? `0 0 16px ${color}25` : "none", transition: "box-shadow 0.3s ease" }}
                            >
                                <Icon size={18} strokeWidth={1.75} />
                            </div>
                            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ color, background: `${color}14`, border: `1px solid ${color}28` }}>
                                {tag}
                            </span>
                        </div>
                    <div>
                        <h3 className="text-lg font-bold text-white leading-snug mb-2" style={{ letterSpacing: "-0.01em" }}>{title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{body}</p>
                    </div>
                    <ul className="flex flex-col gap-2.5 pt-4 mt-auto" style={{ borderTop: `1px solid ${color}18` }}>
                        {points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2.5">
                            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color, boxShadow: `0 0 6px ${color}80` }} />
                            <span className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{pt}</span>
                        </li>
                        ))}
                    </ul>
                    {stats && (
                        <div className="flex gap-2">
                        {stats.map(({ value, label }) => (
                            <div key={label} className="flex-1 flex flex-col items-center px-3 py-3 rounded-xl text-center" style={{ background: `${color}0e`, border: `1px solid ${color}25` }}>
                            <span className="text-lg font-black leading-none mb-1" style={{ color }}>{value}</span>
                            <span className="text-xs" style={{ color: "rgba(255,255,255,0.38)" }}>{label}</span>
                            </div>
                        ))}
                        </div>
                    )}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, ${color}50, transparent)`, opacity: isActive ? 1 : 0.4, transition: "opacity 0.3s ease" }} />
                </div>
                )
            })}

            {/* Testimonial Card */}
            <div className="md:col-span-2 relative overflow-hidden rounded-2xl cursor-default transition-all duration-300 hover:-translate-y-0.5"
               style={{
                    ...(active === "testimonials" ? glassHover : glass),
                    background: `radial-gradient(ellipse at 100% 0%, #fbbf2412 0%, transparent 55%), ${active === "testimonials" ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.04)"}`,
               }} 
               onMouseEnter={() => setActive("testimonials")}
               onMouseLeave={() => setActive(null)}
            >
                <div className="relative z-10 p-6 flex flex-col gap-4 h-full">

                    <div className="flex items-center justify-between">
                        <p className="text-xs font-semibold uppercase tracking-widest" style={{color: "rgba(255,255,255,0.3)", letterSpacing: "0.18em"}}>
                            What Schools Say 
                        </p>  
                        <div className="flex items-center gap-1.5">
                            <Stars /> 
                            <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>4.9 avg</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 flex-1">
                        {testimonials.map(({ quote, name, role }) => (
                        <div
                            key={name}
                            className="rounded-xl p-4 flex flex-col gap-2"
                            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                        >
                            <Stars />
                            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                            "{quote}"
                            </p>
                            <div className="flex items-center gap-1.5">
                                <span className="text-xs font-semibold text-white">{name}</span>
                                <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>· {role}</span>
                            </div>
                        </div>
                        ))}
                    </div>
               
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, #fbbf2450, transparent)", opacity: active === "testimonials" ? 1 : 0.4, transition: "opacity 0.3s ease" }} />

            </div>

            {/* Support Card */}
            {reasons.slice(3, 4).map(({ id, icon: Icon, color, tag, title, body, points, stats }) => {
                const isActive = active === id
                return (
                <div
                    key={id}
                    className="md:col-span-1 relative overflow-hidden rounded-2xl cursor-default transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                    ...(isActive ? glassHover : glass),
                    background: `radial-gradient(ellipse at 0% 0%, ${color}18 0%, transparent 60%), ${isActive ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.04)"}`,
                    }}
                    onMouseEnter={() => setActive(id)}
                    onMouseLeave={() => setActive(null)}
                >
                    <div className="pointer-events-none absolute -bottom-4 -right-4 opacity-[0.045]" style={{ color }}>
                    <Icon size={120} strokeWidth={1} />
                    </div>
                    <div className="relative z-10 p-6 flex flex-col gap-5 h-full">
                    <div className="flex items-center justify-between">
                        <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: `${color}18`, border: `1px solid ${color}35`, color, boxShadow: isActive ? `0 0 16px ${color}25` : "none", transition: "box-shadow 0.3s ease" }}
                        >
                        <Icon size={18} strokeWidth={1.75} />
                        </div>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ color, background: `${color}14`, border: `1px solid ${color}28` }}>
                        {tag}
                        </span>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white leading-snug mb-2" style={{ letterSpacing: "-0.01em" }}>{title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{body}</p>
                    </div>
                    <ul className="flex flex-col gap-2.5 pt-4 mt-auto" style={{ borderTop: `1px solid ${color}18` }}>
                        {points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2.5">
                            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color, boxShadow: `0 0 6px ${color}80` }} />
                            <span className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{pt}</span>
                        </li>
                        ))}
                    </ul>
                    {stats && (
                        <div className="flex gap-2">
                        {stats.map(({ value, label }) => (
                            <div key={label} className="flex-1 flex flex-col items-center px-3 py-3 rounded-xl text-center" style={{ background: `${color}0e`, border: `1px solid ${color}25` }}>
                            <span className="text-lg font-black leading-none mb-1" style={{ color }}>{value}</span>
                            <span className="text-xs" style={{ color: "rgba(255,255,255,0.38)" }}>{label}</span>
                            </div>
                        ))}
                        </div>
                    )}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, ${color}50, transparent)`, opacity: isActive ? 1 : 0.4, transition: "opacity 0.3s ease" }} />
                </div>
                )
            })}
        </div>

        {/* Cta Strip */}
        <div className="relative overflow-hidden rounded-2xl px-6 py-6 flex flex-col md:flex-row md:items-center justify-between gap-6"
            style={glassStrong}
        >
            {/* Subtle Glow */}
            <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 120%, #93c5fd0a 0%, transparent 60%)" }} />

            {/* Trust Stats */}
            <div className="relative z-10 flex flex-wrap gap-6 flex-1">
                {trustStats.map(({ value, label, color }) => (
                    <div key={label} className="flex flex-col">
                        <span className="text-2xl font-black leading-none" style={{ color }}>{value}</span>
                        <span className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.38)" }}>{label}</span>
                    </div>
                ))} 
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px self-stretch" style={{ background: "rgba(255,255,255,0.08)" }} />
            
            {/* Promises & CTA */}
            <div className="relative z-10 flex flex-col gap-4 md:w-72 shrink-0">

                <p className="text-xs font-semibold uppercase tracking-widest" style={{color: "rgba(255,255,255,0.3)", letterSpacing: "0.18em"}}>
                    Our Promise to Every Network 
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {promises.map((item) => (
                        <div key={item} className="flex items-center gap-1.5">
                            <CheckCircle2 size={11} style={{ color: "#4ade80", flexShrink: 0 }} />
                            <span className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>{item}</span>
                        </div>
                    ))}
                </div>
                <button className="self-start flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl"
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
                        See it in action <ArrowRight size={14} strokeWidth={2.5} />
                </button>
            </div>
        </div>
     </div>


    </section>
  )
}

export default WhyChooseUs