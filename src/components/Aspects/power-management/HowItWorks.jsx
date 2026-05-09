import React, { useState } from 'react'
import {
  CheckCircle2, ArrowRight, CalendarClock
} from "lucide-react";
import { glass, glassHover, glassStrong } from "../CCTV-Holder/CCTVStyles";
import {Stats, Steps} from './index'

const HowItWorks = () => {

  const [active, setActive] = useState(null);

  return (
    <section className='w-full px-4 sm:px-6 md:px-10 lg:px-14 py-14 sm:py-20 md:py-24'
      style={{color: "white"}}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          
          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{color: "rgba(255,255,255,0.35)", letterSpacing: "0.22em"}}
          >
            The Experience
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
            style={{letterSpacing: "-0.03em", lineHeight: 1.05}}
          >
            What it's like to work with us.
          </h2>
          <p className="text-sm sm:text-base font-light max-w-lg mx-auto leading-relaxed"
            style={{color: "rgba(255,255,255,0.5)"}}
          >
            From first call to fully live — here's exactly what happens, when, and how it feels at every stage.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 sm:mb-14 rounded-2xl px-5 py-5"
          style={glassStrong}
        >
          {Stats.map(({ value, unit, label, color }) => (
            <div key={label} className="flex flex-col items-center text-center gap-0.5">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-black" style={{ color }}>{value}</span>
                {unit && <span className="text-xs font-medium" style={{ color }}>{unit}</span>}
              </div>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Timeline Section */}

        {/* Desktop connector bar (hidden on mobile) */}
        <div className="hidden md:block relative mb-6">
          <div
            className="absolute top-4 left-0 right-0 h-px"
            style={{ background: "rgba(255,255,255,0.08)", margin: "0 3rem" }}
          />
          <div className="grid grid-cols-6 gap-0">
            {Steps.map(({ n, color }) => (
              <div key={n} className="flex flex-col items-center">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold z-10"
                  style={{
                    background: `${color}20`,
                    border: `2px solid ${color}55`,
                    color,
                  }}
                >
                  {n}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Step cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Steps.map(({ n, icon: Icon, color, phase, title, body, feeling }) => (
              <div
                key={n}
                className="rounded-2xl p-5 sm:p-6 flex flex-col gap-3 cursor-default transition-transform duration-300 hover:-translate-y-0.5"
                style={active === n ? glassHover : glass}
                onMouseEnter={() => setActive(n)}
                onMouseLeave={() => setActive(null)}
              >
                {/* Step number + phase */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {/* Mobile step dot (visible when no horizontal timeline) */}
                    <div
                      className="md:hidden w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                      style={{ background: `${color}20`, border: `2px solid ${color}55`, color }}
                    >
                      {n}
                    </div>
                    <Icon size={15} strokeWidth={1.75} style={{ color }} />
                  </div>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ color, background: `${color}12`, border: `1px solid ${color}25` }}
                  >
                    {phase}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                  {title}
                </h3>

                {/* Body */}
                <p className="text-sm font-light leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {body}
                </p>

                {/* "Feeling" — the emotional hook */}
                <div
                  className="flex items-center gap-1.5 pt-3 mt-auto"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <CheckCircle2 size={12} style={{ color, flexShrink: 0 }} />
                  <span className="text-xs font-medium italic" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {feeling}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ── CTA Strip ── */}
        <div
          className="mt-4 rounded-2xl px-5 sm:px-8 py-5 sm:py-6
            flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          style={glassStrong}
        >
          <div className="flex items-start gap-3">
            <CalendarClock size={18} strokeWidth={1.5} style={{ color: "#ff751f", flexShrink: 0, marginTop: 2 }} />
            <div>
              <p className="text-sm sm:text-base font-semibold text-white">
                Most sites are fully live within 2–5 weeks.
              </p>
              <p className="text-xs sm:text-sm font-light mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>
                Book a free call and we'll map out a realistic timeline for your site.
              </p>
            </div>
          </div>

          <button
            className="shrink-0 flex items-center justify-center gap-2 text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl w-full sm:w-auto"
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