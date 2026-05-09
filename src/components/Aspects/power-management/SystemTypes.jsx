import React, { useState } from 'react'
import {Pill, IconBox, Bullet, StatPair} from './Components'
import {Comparison, Systems} from './index'
import {glass, glassHover, glassStrong} from '../CCTV-Holder/CCTVStyles'
import {
  CheckCircle2,ArrowRight, 
} from "lucide-react"

const SystemTypes = () => {

  const [hovered, setHovered] = useState(null);
  const cs = (id) => (hovered === id ? glassHover : glass);
  const hp = (id) => ({ onMouseEnter: () => setHovered(id), onMouseLeave: () => setHovered(null) });

  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-14 py-14 sm:py-20 md:py-24"
      style={{color: "white"}}
    >

      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{color: "rgba(255,255,255,0.35)", letterSpacing: "0.22em"}}
          >
            Infrastructure Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
            style={{letterSpacing: "-0.03em", lineHeight: 1.05}}
          >
            Six systems. One provider.
          </h2>
          <p className="text-sm sm:text-base font-light max-w-lg mx-auto leading-relaxed"
            style={{color: "rgba(255,255,255,0.5)"}}
          >
            Every category of power infrastructure — supplied, installed, and integrated by us.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Systems.map(({ id, icon, color, pill, eyebrow, headline, body, bullets, stats, span }) => (
            <div
              key={id}
              className={`
                col-span-1
                ${span === 2 ? "sm:col-span-2" : "sm:col-span-1"}
                rounded-2xl p-5 sm:p-6 flex flex-col gap-4
                hover:-translate-y-0.5 transition-transform duration-300
              `}
              style={cs(id)}
              {...hp(id)}
            >
              {/* Card header */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <IconBox icon={icon} color={color} />
                  <div>
                    <p
                      className="text-xs font-medium uppercase tracking-widest"
                      style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em" }}
                    >
                      {eyebrow}
                    </p>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                      {headline}
                    </h3>
                  </div>
                </div>
                <Pill color={color}>{pill}</Pill>
              </div>

              {/* Body */}
              <p
                className="text-sm font-light leading-relaxed"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {body}
              </p>

              {/* Bullets */}
              <div className="flex flex-col gap-2">
                {bullets.map(b => <Bullet key={b} color={color}>{b}</Bullet>)}
              </div>

              {/* Stats */}
              <StatPair stats={stats} color={color} />
            </div>
          ))}

          {/* System Selector */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1 rounded-2xl p-5 sm:p-6 flex flex-col gap-4"
            style={cs("cmp")}
            {...hp("cmp")}
          >
            
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-1"
                style={{color: "rgba(255,255,255,0.35)", letterSpacing: "0.18em"}}
              >
                System Selector
              </p>
              <h3 className="text-base text-white">
                Which System Does your Site Require
              </h3>
            </div>

            <div className="flex flex-col gap-2">
              {Comparison.map(({ system, best, runtime, color }) => (
                <div
                  key={system}
                  className="flex items-start gap-2 px-3 py-2.5 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-1" style={{ background: color }} />
                  <div className="flex flex-col flex-1 min-w-0 gap-0.5">
                    <span className="text-xs font-semibold leading-tight" style={{ color }}>{system}</span>
                    <span className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.45)" }}>{best}</span>
                  </div>
                  <span
                    className="text-xs shrink-0 px-2 py-0.5 rounded-full self-start mt-0.5"
                    style={{ background: `${color}12`, color, border: `1px solid ${color}25`, whiteSpace: "nowrap" }}
                  >
                    {runtime}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-auto pt-4 flex flex-col gap-3"
              style={{borderTop: "1px solid rgba(255,255,255,0.08)"}}
            >
              <div className="flex flex-col gap-1.5">
                {["We supply all six system types", "Integrated multi-system solutions", "Site survey included"].map(item => (
                  <div key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 size={11} style={{ color: "#4ade80", flexShrink: 0 }} />
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{item}</span>
                  </div>
                ))}
              </div>

              <button
                className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200"
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
                Get a Site Assessment <ArrowRight size={12} strokeWidth={2.5} />
              </button>
            </div>

          </div>
        </div>

      </div>

    </section>
  )
}

export default SystemTypes