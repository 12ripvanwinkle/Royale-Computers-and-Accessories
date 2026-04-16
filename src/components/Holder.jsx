import React, { useState } from 'react'
import { glass, glassHover } from '../CCTV-Holder/CCTVStyles'
import { Sliders, Shield, MousePointerClick, HeadphonesIcon } from 'lucide-react'

const reasons = [
  {
    id: 1,
    icon: Sliders,
    accent: '#93c5fd',
    eyebrow: 'Tailored for You',
    title: 'Custom Display Solutions',
    description:
      'No two businesses are alike. We design and configure every display system around your space, brand, and goals — from screen size and placement to content layout and scheduling.',
    stats: [
      { value: '100%', label: 'Bespoke builds' },
      { value: '50+', label: 'Install types' },
    ],
    highlights: ['Site survey & consultation', 'Brand-matched content templates', 'Scalable from 1 to 100+ screens'],
  },
  {
    id: 2,
    icon: Shield,
    accent: '#4ade80',
    eyebrow: 'Built to Last',
    title: 'Reliable Hardware',
    description:
      'We source commercial-grade displays rated for 16/7 and 24/7 operation. Every unit is tested before installation, backed by manufacturer warranties and our own service guarantee.',
    stats: [
      { value: '24/7', label: 'Rated operation' },
      { value: '3yr', label: 'Avg. warranty' },
    ],
    highlights: ['Commercial-grade panels only', 'Pre-install burn-in testing', 'Redundant power options'],
  },
  {
    id: 3,
    icon: MousePointerClick,
    accent: '#a78bfa',
    eyebrow: 'No Learning Curve',
    title: 'Easy-to-Use Systems',
    description:
      'Our CMS platforms are designed for everyday users — not IT departments. Update content, schedule campaigns, and manage screens from any device in minutes.',
    stats: [
      { value: '<5min', label: 'To update content' },
      { value: 'Any', label: 'Device, anywhere' },
    ],
    highlights: ['Drag-and-drop content editor', 'Remote screen management', 'Role-based access controls'],
  },
  {
    id: 4,
    icon: HeadphonesIcon,
    accent: '#fbbf24',
    eyebrow: 'Always Here',
    title: 'Full Support',
    description:
      'From installation day onward, our team is on call. We offer remote monitoring, on-site servicing, staff training, and proactive maintenance — so your screens never go dark.',
    stats: [
      { value: '< 4hr', label: 'Response time' },
      { value: 'Free', label: 'Staff training' },
    ],
    highlights: ['Remote diagnostics & monitoring', 'On-site repair service', 'Dedicated account manager'],
  },
]

function StatBox({ value, label }) {
  return (
    <div
      className="flex-1 rounded-xl px-3 py-2.5 text-center"
      style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
    >
      <div className="text-base font-semibold text-white leading-tight">{value}</div>
      <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>{label}</div>
    </div>
  )
}

function ReasonCard({ reason, index }) {
  const [hovered, setHovered] = useState(false)
  const IconComp = reason.icon

  return (
    <div
      className="rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-0.5"
      style={hovered ? glassHover : glass}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top row: icon + eyebrow + watermark number */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{
              background: `${reason.accent}18`,
              color: reason.accent,
              border: `1px solid ${reason.accent}30`,
            }}
          >
            <IconComp size={18} />
          </div>
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            {reason.eyebrow}
          </span>
        </div>
        <span
          className="font-black select-none"
          style={{
            fontSize: 36,
            color: 'rgba(255,255,255,0.06)',
            lineHeight: 1,
            fontFamily: 'monospace',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-white leading-snug">
        {reason.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.58)' }}>
        {reason.description}
      </p>

      {/* Stats */}
      <div className="flex gap-2">
        {reason.stats.map(s => (
          <StatBox key={s.label} value={s.value} label={s.label} />
        ))}
      </div>

      {/* Highlights */}
      <div className="flex flex-col gap-1.5 mt-auto pt-1">
        {reason.highlights.map(h => (
          <div key={h} className="flex items-center gap-2">
            <div
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: reason.accent }}
            />
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>{h}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const WhyChooseUs = () => {
  return (
    <div className="w-full px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            Why Royale
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
            Why Choose Us
          </h2>
          <p
            className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            From the first consultation to long-term support, we're with you at every stage —
            delivering displays that perform, impress, and last.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reasons.map((reason, index) => (
            <ReasonCard key={reason.id} reason={reason} index={index} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default WhyChooseUs