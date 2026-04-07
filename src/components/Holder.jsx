import React from 'react'
import { Users, Shield, Settings, Headphones, BadgeDollarSign } from 'lucide-react'
import { glass } from './CCTVStyles'

const trustPoints = [
  {
    icon: <Users size={20} />,
    title: "Experienced Technicians",
    description:
      "Our certified engineers bring years of hands-on experience across commercial, residential, and industrial CCTV installations. Every technician is trained, vetted, and committed to getting the job done right the first time.",
    highlights: ["Fully certified & vetted", "Years of field experience", "Clean, professional installs"],
    stat: "10+",
    statLabel: "Years experience",
    accent: "#93c5fd",
    accentBg: "rgba(147,197,253,0.1)",
    accentBorder: "rgba(147,197,253,0.25)",
  },
  {
    icon: <Shield size={20} />,
    title: "High-Quality Equipment",
    description:
      "We only install market-leading cameras and hardware from trusted manufacturers. Every system we deploy is built to last — no cheap alternatives, no corners cut.",
    highlights: ["Tier-1 brands only", "4K & HD resolution", "Weather-rated hardware"],
    stat: "4K",
    statLabel: "Max resolution",
    accent: "#4ade80",
    accentBg: "rgba(74,222,128,0.1)",
    accentBorder: "rgba(74,222,128,0.25)",
  },
  {
    icon: <Settings size={20} />,
    title: "Customised Solutions",
    description:
      "No two sites are the same. We design every system around your specific premises, risk profile, and budget — not a one-size-fits-all package pulled off a shelf.",
    highlights: ["Site-specific design", "Scalable architecture", "Tailored to your budget"],
    stat: "100%",
    statLabel: "Bespoke designs",
    accent: "#a78bfa",
    accentBg: "rgba(167,139,250,0.1)",
    accentBorder: "rgba(167,139,250,0.25)",
  },
  {
    icon: <Headphones size={20} />,
    title: "Reliable Support",
    description:
      "Our relationship doesn't end at installation. We provide ongoing maintenance, remote diagnostics, and rapid on-site response so your system is always performing at its best.",
    highlights: ["24/7 monitoring available", "Remote diagnostics", "Fast on-site response"],
    stat: "24/7",
    statLabel: "Support available",
    accent: "#5eead4",
    accentBg: "rgba(94,234,212,0.1)",
    accentBorder: "rgba(94,234,212,0.25)",
  },
  {
    icon: <BadgeDollarSign size={20} />,
    title: "Competitive Pricing",
    description:
      "Enterprise-grade security shouldn't cost a fortune. We offer transparent, itemised quotes with no hidden fees — and flexible payment options to suit businesses of every size.",
    highlights: ["Transparent quotes", "No hidden fees", "Flexible payment options"],
    stat: "£0",
    statLabel: "Hidden fees",
    accent: "#fbbf24",
    accentBg: "rgba(251,191,36,0.1)",
    accentBorder: "rgba(251,191,36,0.25)",
  },
]

function StatPill({ value, label, accent, accentBg, accentBorder }) {
  return (
    <div
      className="flex flex-col items-center justify-center px-4 py-3 rounded-xl shrink-0"
      style={{ background: accentBg, border: `1px solid ${accentBorder}` }}
    >
      <span className="text-xl font-bold leading-tight" style={{ color: accent }}>{value}</span>
      <span className="text-xs mt-0.5 text-center" style={{ color: 'rgba(255,255,255,0.5)' }}>{label}</span>
    </div>
  )
}

const TrustSection = () => {
  return (
    <div className="w-full px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
            The Trusted Choice for CCTV
          </h2>
          <p
            className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            From first consultation to final sign-off — and everything in between — we deliver
            security solutions you can rely on.
          </p>
        </div>

        {/* ── Bento Grid ──
            Row 1: [Card 1 — wide] [Card 2]
            Row 2: [Card 3]        [Card 4 — wide]
            Row 3: [Card 5 — full width]
        ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Card 1 — Experienced Technicians (wide) */}
          <div
            className="md:col-span-2 rounded-2xl p-6 flex flex-col sm:flex-row gap-5 hover:-translate-y-0.5 transition-transform duration-300"
            style={glass}
          >
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: trustPoints[0].accentBg, color: trustPoints[0].accent, border: `1px solid ${trustPoints[0].accentBorder}` }}
                >
                  {trustPoints[0].icon}
                </div>
                <h3 className="text-base font-semibold text-white">{trustPoints[0].title}</h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {trustPoints[0].description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-1">
                {trustPoints[0].highlights.map(h => (
                  <div key={h} className="flex items-center gap-1.5 px-3 py-1 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: trustPoints[0].accent }} />
                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>
            <StatPill {...trustPoints[0]} value={trustPoints[0].stat} label={trustPoints[0].statLabel} />
          </div>

          {/* Card 2 — High-Quality Equipment */}
          <div
            className="md:col-span-1 rounded-2xl p-6 flex flex-col gap-3 hover:-translate-y-0.5 transition-transform duration-300"
            style={glass}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: trustPoints[1].accentBg, color: trustPoints[1].accent, border: `1px solid ${trustPoints[1].accentBorder}` }}
              >
                {trustPoints[1].icon}
              </div>
              <h3 className="text-base font-semibold text-white">{trustPoints[1].title}</h3>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {trustPoints[1].description}
            </p>
            <div
              className="mt-auto rounded-xl px-4 py-3"
              style={{ background: trustPoints[1].accentBg, border: `1px solid ${trustPoints[1].accentBorder}` }}
            >
              <div className="text-xs font-medium mb-1" style={{ color: trustPoints[1].accent }}>Max resolution</div>
              <div className="text-2xl font-bold text-white">{trustPoints[1].stat}</div>
            </div>
          </div>

          {/* Card 3 — Customised Solutions */}
          <div
            className="md:col-span-1 rounded-2xl p-6 flex flex-col gap-3 hover:-translate-y-0.5 transition-transform duration-300"
            style={glass}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: trustPoints[2].accentBg, color: trustPoints[2].accent, border: `1px solid ${trustPoints[2].accentBorder}` }}
              >
                {trustPoints[2].icon}
              </div>
              <h3 className="text-base font-semibold text-white">{trustPoints[2].title}</h3>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {trustPoints[2].description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto pt-1">
              {trustPoints[2].highlights.map(h => (
                <div key={h} className="flex items-center gap-1.5 px-3 py-1 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: trustPoints[2].accent }} />
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4 — Reliable Support (wide) */}
          <div
            className="md:col-span-2 rounded-2xl p-6 flex flex-col sm:flex-row gap-5 hover:-translate-y-0.5 transition-transform duration-300"
            style={glass}
          >
            <StatPill {...trustPoints[3]} value={trustPoints[3].stat} label={trustPoints[3].statLabel} />
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: trustPoints[3].accentBg, color: trustPoints[3].accent, border: `1px solid ${trustPoints[3].accentBorder}` }}
                >
                  {trustPoints[3].icon}
                </div>
                <h3 className="text-base font-semibold text-white">{trustPoints[3].title}</h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {trustPoints[3].description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-1">
                {trustPoints[3].highlights.map(h => (
                  <div key={h} className="flex items-center gap-1.5 px-3 py-1 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: trustPoints[3].accent }} />
                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 5 — Competitive Pricing (full width) */}
          <div
            className="md:col-span-3 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 hover:-translate-y-0.5 transition-transform duration-300"
            style={glass}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
              style={{ background: trustPoints[4].accentBg, color: trustPoints[4].accent, border: `1px solid ${trustPoints[4].accentBorder}` }}
            >
              {trustPoints[4].icon}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">{trustPoints[4].title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {trustPoints[4].description}
              </p>
            </div>
            <div className="flex gap-3 shrink-0 flex-wrap sm:flex-nowrap">
              {trustPoints[4].highlights.map(h => (
                <div key={h} className="flex items-center gap-2 px-4 py-2.5 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: trustPoints[4].accent }} />
                  <span className="text-xs whitespace-nowrap" style={{ color: 'rgba(255,255,255,0.75)' }}>{h}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TrustSection