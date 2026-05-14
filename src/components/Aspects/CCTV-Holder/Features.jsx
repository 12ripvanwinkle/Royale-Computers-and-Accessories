import React, { useState } from 'react'
import {features} from './index'
import {glass, glassHover, glassStrong} from './CCTVStyles'
import { ArrowRight,  } from 'lucide-react'

const Features = () => {

  const [active, setActive] = useState(null)

  return (
    <section id="features" className="w-full"
      style={{color:'white'}}
    >

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">

          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{color: 'rgba(255,255,255,0.35)', letterSpacing: '0.22em'}}
          >
            Core Capabilities 
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
            style={{letterSpacing: '-0.03em', lineHeight: 1.05}}
          >
            Built to see Everything.
          </h2>
          <p className="text-sm sm:text-base font-light max-w-lg mx-auto leading-relaxed"
            style={{color: 'rgba(255,255,255,0.5)'}}
          >
            Eight intelligent features working together — from 4K clarity to AI analytics that never sleep.
          </p>

        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {features.map(({ id, icon: Icon, color, pill, eyebrow, headline, body, bullets, stats, cols }) => {
            const isActive = active === id

            // col-span class derived from data — only applied at md+
            const colSpanClass =
              cols === 3 ? 'md:col-span-3'
              : cols === 2 ? 'md:col-span-2'
              : 'md:col-span-1'

            return (
              <div
                key={id}
                className={`
                  col-span-1 ${colSpanClass}
                  relative overflow-hidden rounded-2xl
                  hover:-translate-y-0.5 transition-all duration-300
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

                {/* Card content */}
                <div className="relative z-10 p-5 sm:p-6 flex flex-col gap-4">

                  {/* Icon + eyebrow + headline + pill */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{
                          background: `${color}15`,
                          border: `1px solid ${color}28`,
                          color,
                          boxShadow: isActive ? `0 0 16px ${color}25` : 'none',
                          transition: 'box-shadow 0.3s ease',
                        }}
                      >
                        <Icon size={17} strokeWidth={1.75} />
                      </div>
                      <div className="min-w-0">
                        <p
                          className="text-xs font-medium uppercase"
                          style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em' }}
                        >
                          {eyebrow}
                        </p>
                        <h3 className="text-base font-bold text-white leading-tight truncate">{headline}</h3>
                      </div>
                    </div>
                    <span
                      className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full shrink-0"
                      style={{
                        color,
                        background: `${color}15`,
                        border: `1px solid ${color}28`,
                        letterSpacing: '0.08em',
                      }}
                    >
                      {pill}
                    </span>
                  </div>

                  {/* Body */}
                  <p className="text-sm font-light leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {body}
                  </p>

                  {/* Bullets */}
                  <div className="flex flex-col gap-2">
                    {bullets.map((b, i) => (
                      <div key={`${b}-${i}`} className="flex items-center gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: color, boxShadow: `0 0 6px ${color}80` }}
                        />
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div
                    className="grid gap-2 mt-auto pt-4"
                    style={{ gridTemplateColumns: `repeat(${stats.length}, 1fr)` }}
                  >
                    {stats.map(([val, lbl], i) => (
                      <div
                        key={`${lbl}-${i}`}
                        className="flex flex-col items-center justify-center px-3 py-3 rounded-xl text-center"
                        style={{ background: `${color}0e`, border: `1px solid ${color}25` }}
                      >
                        <span className="text-base font-bold leading-none mb-1" style={{ color }}>{val}</span>
                        <span className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{lbl}</span>
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
                    transition: 'opacity 0.3s ease',
                  }}
                />
              </div>
            )
          })}

        </div>

        {/* CTA Strip */}
        <div className="mt-4 rounded-2xl px-5 sm:px-8 py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          style={glassStrong}
        >

          <div className="">
            <p className="text-xs font-semibold uppercase tracking-widest mb-1"
              style={{color: 'rgba(255,255,255,0.35)', letterSpacing: '0.18em'}}
            >
              See it in Action. 
            </p>
            <h3 className="text-sm sm:text-base font-semibold text-white">
              Get a personalised CCTV walkthrough for your site.
            </h3>
            <p className="text-xs mt-1 font-light" style={{color: 'rgba(255,255,255,0.4)'}}>
              No commitment. Installed and live within days.
            </p>
          </div>

          <button className="shrink-0 w-full sm:w-auto flex items-center justify-center gap-2 text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl"
            style={{background: '#00e5a0', color: '#0a0d0f', transition: 'all 0.2s ease'}}
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
            Book a Free Demo <ArrowRight size={14} strokeWidth={2.5} />
          </button>
        </div>

      </div>

    </section>
  )
}

export default Features