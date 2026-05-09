import React, { useState } from 'react'
import {Reasons, Testimonials} from './index'
import { glass, glassHover, glassStrong } from "../CCTV-Holder/CCTVStyles";
import {
    ArrowRight, Star, CheckCircle2,
} from "lucide-react";

const WhyChooseUs = () => {

  const [hovered, setHovered] = useState(null)

  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-14 py-14 sm:py-20 md:py-24"
        style={{color: "white"}}
    >
        <div className="max-w-6xl mx-auto flex flex-col gap-4">

            {/* Header */}
            <div className="text-center mb-6 sm:mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest mb-3"
                    style={{color: "rgba(255,255,255,0.35)", letterSpacing: "0.22em"}}
                >
                    The Difference
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
                    style={{letterSpacing: "-0.03em", lineHeight: 1.05}}
                >
                    Why Choose us. 
                </h2>
                <p className="text-sm sm:text-base font-light max-w-md mx-auto leading-relaxed"
                    style={{color: "rgba(255,255,255,0.45)"}}
                >
                    The expertise, equipment, and long-term commitment that critical infrastructure demands.
                </p>
            </div>

            {/* Reason Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Reasons.map(({ id, icon: Icon, color, stat, statLabel, headline, body }) => (
                    <div
                    key={id}
                    className="rounded-2xl p-6 sm:p-7 flex flex-col gap-4 hover:-translate-y-0.5 transition-transform duration-300"
                    style={hovered === id ? glassHover : glass}
                    onMouseEnter={() => setHov(id)}
                    onMouseLeave={() => setHov(null)}
                    >
                    {/* Icon + big stat side by side */}
                    <div className="flex items-center justify-between">
                        <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: `${color}15`, border: `1px solid ${color}28`, color }}
                        >
                        <Icon size={18} strokeWidth={1.75} />
                        </div>
                        <div className="text-right">
                        <div className="text-2xl font-black" style={{ color, lineHeight: 1 }}>{stat}</div>
                        <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{statLabel}</div>
                        </div>
                    </div>

                    {/* Text */}
                    <div>
                        <h3 className="text-base sm:text-lg font-bold text-white mb-1.5">{headline}</h3>
                        <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.52)" }}>
                        {body}
                        </p>
                    </div>
                    </div>
                ))}
            </div>

            {/* Testimonials strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Testimonials.map(({ quote, name, role, rating }) => (
                    <div
                    key={name}
                    className="rounded-2xl p-5 sm:p-6 flex flex-col gap-3"
                    style={glass}
                    >
                    {/* Stars */}
                    <div className="flex gap-0.5">
                        {[...Array(rating)].map((_, i) => (
                        <Star key={i} size={12} strokeWidth={0} fill="#fbbf24" />
                        ))}
                    </div>
                    {/* Quote */}
                    <p
                        className="text-sm font-light leading-relaxed italic flex-1"
                        style={{ color: "rgba(255,255,255,0.65)" }}
                    >
                        "{quote}"
                    </p>
                    {/* Attribution */}
                    <div
                        className="pt-3 flex items-center gap-2"
                        style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
                    >
                        <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                        style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" }}
                        >
                        {name[0]}
                        </div>
                        <div>
                        <div className="text-xs font-semibold text-white">{name}</div>
                        <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{role}</div>
                        </div>
                    </div>
                    </div>
                ))}
            </div>

            {/* CTA Strip */}
            <div className="rounded-2xl px-5 sm:px-8 py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                style={glassStrong}
            >
                <div>
                    {/* Star Ratings */}
                    <div className="flex items-center gap-2 mb-1.5">
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} strokeWidth={0} fill="#fbbf24" />
                            ))}
                        </div>
                        <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>4.9 from 200+ clients</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-white">
                        Ready to protect your power infrastructure?
                    </h3>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
                    <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                        {["Free assessment", "Certified engineers", "No lock-in"].map(item => (
                            <div key={item} className="flex items-center gap-1.5">
                                <CheckCircle2 size={11} style={{ color: "#4ade80", flexShrink: 0 }} />
                                <span className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>{item}</span>
                            </div>
                        ))}
                    </div>
                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold shrink-0"
                        style={{ background: "#ff751f", color: "white", transition: "all 0.2s ease" }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = "#ff8c3f";
                            e.currentTarget.style.boxShadow = "0 6px 20px rgba(255,117,31,0.4)";
                            e.currentTarget.style.transform = "translateY(-1px)";
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = "#ff751f";
                            e.currentTarget.style.boxShadow = "none";
                            e.currentTarget.style.transform = "translateY(0)";
                        }}
                        >
                        Book a Free Assessment <ArrowRight size={14} strokeWidth={2.5} />
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs