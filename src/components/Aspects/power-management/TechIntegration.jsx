import React, { useState } from 'react'
import {Pill, IconBox, Bullet, StatPair} from './Components'
import {Stats, Cards, Compliance} from './index'
import { glass, glassHover, glassStrong } from '../CCTV-Holder/CCTVStyles';
import {Bell, ArrowRight, CheckCircle2} from 'lucide-react'
const TechIntegration = () => {

  const [hovered, setHovered] = useState(null);
  const cs = (id) => (hovered === id ? glassHover : glass);
  const hp = (id) => ({ onMouseEnter: () => setHovered(id), onMouseLeave: () => setHovered(null) });

  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-14 py-14 sm:py-20 md:py-24"
      style={{color:"white"}}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{color: "rgba(255,255,255,0.35)", letterSpacing: "0.22em"}}
          >
            Under the Hood
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
            style={{letterSpacing: "-0.03em", lineHeight: 1.05}}
          >
            Technology & Integration
          </h2>
          <p className="text-sm sm:text-base font-light max-w-lg mx-auto leading-relaxed"
            style={{color: "rgba(255,255,255,0.5)"}}
          >
            IoT-connected hardware, cloud dashboards, and deep BMS integration — working together as one unified system.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-4">

          {Cards.map(({ id, icon, color, pill, eyebrow, headline, body, bullets, stats, span }) => (
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
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <IconBox icon={icon} color={color} />
                  <div>
                    <p className="text-xs font-medium uppercase" style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em" }}>
                      {eyebrow}
                    </p>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-tight">{headline}</h3>
                  </div>
                </div>
                <Pill color={color}>{pill}</Pill>
              </div>

              <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                {body}
              </p>

              <div className="flex flex-col gap-2">
                {bullets.map(b => <Bullet key={b} color={color}>{b}</Bullet>)}
              </div>

              <StatPair stats={stats} color={color} />
            </div>
          ))}
          
        </div>

        {/* Alerts & Compliance */}
        <div className="mt-2 md:mt-4 col-span-1 sm:col-span-2 md:col-span-3 rounded-2xl p-5 sm:p-6 flex flex-col gap-5"
          style={glassStrong}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            
            <div className="flex items-center gap-2.5">
              <IconBox icon={Bell} color="#f87171" />
              <div>
                <p className="text-xs font-medium uppercase" style={{color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em"}}>
                  Automated Alerts
                </p>
                <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                  The right alert. The right person. In under a second.
                </h3>

              </div>
            </div>
            <button
              className="shrink-0 self-start sm:self-auto flex items-center gap-1.5 text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl"
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
              See Alert Capabilities <ArrowRight size={13} strokeWidth={2.5} />
            </button>
          </div>

          {/* Alert Description + Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <p className="text-sm font-light leading-relaxed" style={{color: "rgba(255,255,255,0.55)"}}>
              Threshold-based triggers fire the instant a value deviates — voltage spikes, overloads, UPS events, or missed check-ins. Alerts are routed by severity so the right person is notified without noise.
            </p>  
            
            <div className="flex flex-col gap-2.5">
                {[
                  { label: "Sub-1-second alert latency",           color: "#f87171" },
                  { label: "SMS, email & dashboard notifications",  color: "#fbbf24" },
                  { label: "Severity-based routing & escalation",   color: "#93c5fd" },
                  { label: "Automated weekly & monthly reports",    color: "#4ade80" },
                ].map(({ label, color }) => (
                  <div key={label} className="flex items-center gap-2">
                    <CheckCircle2 size={13} style={{ color, flexShrink: 0 }} />
                    <span className="text-xs sm:text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>{label}</span>
                  </div>
                ))}
            </div>
          </div>

          {/* Compliance / Stack tags */}
            <div
              className="flex flex-wrap gap-2 pt-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              {/* Icon tags */}
              {Compliance.map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{ background: `${color}10`, border: `1px solid ${color}25`, color }}
                >
                  <Icon size={11} strokeWidth={2} />
                  {label}
                </div>
              ))}
              {/* Text-only compliance tags */}
              {["No proprietary lock-in", "GDPR-compliant telemetry", "Modbus · BACnet · SNMP native"].map(item => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)" }}
                >
                  <CheckCircle2 size={10} style={{ color: "#4ade80", flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>
        </div>

      </div>
    </section>
  )
}

export default TechIntegration