import React, { useState } from 'react'
import { glass, glassHover, innerSurface } from './CCTVStyles'
import {
  Camera,
  Wifi,
  Moon,
  Activity,
  Globe,
  LayoutGrid,
} from 'lucide-react'

// ─── Data ────────────────────────────────────────────────────────────────────
const systems = [
  {
    id: 'ip-camera',
    icon: Wifi,
    label: 'Network Based',
    badge: 'Most Popular',
    accentColor: '#00e5a0',
    imageFallbackBg: 'linear-gradient(135deg, #0a2a1f 0%, #0d1f17 100%)',
    image: '/images/systems/ip-camera.jpg',
    title: 'IP Camera Systems',
    description:
      'High-definition network cameras that stream and record over your existing LAN or Wi-Fi. Scalable from a single camera to enterprise-grade deployments.',
    highlights: ['4K Resolution', 'PoE Powered', 'Remote Access', 'AI Analytics'],
  },
  {
    id: 'analog-hd',
    icon: Camera,
    label: 'Traditional HD',
    badge: 'Cost Effective',
    accentColor: '#c09aff',
    imageFallbackBg: 'linear-gradient(135deg, #1a0f2e 0%, #130d22 100%)',
    image: '/images/systems/analog-hd.jpg',
    title: 'HD Analog / TVI Systems',
    description:
      'Upgrade legacy coax wiring to full HD with TVI/AHD technology. Keep your existing cable runs while getting modern image quality and DVR recording.',
    highlights: ['1080p–8MP', 'Coax Reuse', 'DVR Storage', 'Long Cable Runs'],
  },
  {
    id: 'night-vision',
    icon: Moon,
    label: 'Low-Light',
    badge: 'Night Ready',
    accentColor: '#7ab8ff',
    imageFallbackBg: 'linear-gradient(135deg, #0b1525 0%, #091220 100%)',
    image: '/images/systems/night-vision.jpg',
    title: 'Night Vision Cameras',
    description:
      'IR and colour night-vision cameras that deliver crisp footage in complete darkness. Infrared LEDs illuminate up to 100 m with zero visible light.',
    highlights: ['Starlight Sensor', '100 m IR Range', 'Full-Colour Night', 'Auto IR Cut'],
  },
  {
    id: 'motion-detection',
    icon: Activity,
    label: 'Smart Detection',
    badge: 'AI Powered',
    accentColor: '#f0a33c',
    imageFallbackBg: 'linear-gradient(135deg, #251800 0%, #1c1200 100%)',
    image: '/images/systems/motion.jpg',
    title: 'Motion Detection Systems',
    description:
      'AI-driven perimeter protection that distinguishes people, vehicles, and animals from wind and shadows — eliminating false alerts around the clock.',
    highlights: ['Person / Vehicle AI', 'Zone Masking', 'Instant Alerts', 'Event Clips'],
  },
  {
    id: 'remote-viewing',
    icon: Globe,
    label: 'Cloud & Mobile',
    badge: 'Always On',
    accentColor: '#ff8775',
    imageFallbackBg: 'linear-gradient(135deg, #250e0a 0%, #1c0a07 100%)',
    image: '/images/systems/remote.jpg',
    title: 'Remote Viewing Systems',
    description:
      'Monitor your property from anywhere in the world via smartphone, tablet, or browser. Encrypted P2P connections with no port-forwarding required.',
    highlights: ['iOS & Android', 'Multi-Site View', 'Cloud Backup', 'Two-Way Audio'],
  },
  {
    id: 'multi-location',
    icon: LayoutGrid,
    label: 'Enterprise',
    badge: 'Multi-Site',
    accentColor: '#60c8f0',
    imageFallbackBg: 'linear-gradient(135deg, #071922 0%, #051318 100%)',
    image: '/images/systems/multi-location.jpg',
    title: 'Multi-Location Systems',
    description:
      'Centralised VMS platforms that unify cameras across multiple branches, warehouses, or sites into one management console with role-based access.',
    highlights: ['Centralised VMS', 'Role-Based Access', 'Cross-Site Search', 'Health Monitoring'],
  },
]

// ─── Card ─────────────────────────────────────────────────────────────────────
function SystemCard({ system, index }) {
  const [hovered, setHovered] = useState(false)
  const Icon = system.icon
  const color = system.accentColor

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300 flex flex-col relative"
      style={{
        ...(hovered ? glassHover : glass),
        borderRadius: 20,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Radial glow — top-left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 0% 0%, ${color}18, transparent 60%)`,
          borderRadius: 20,
          zIndex: 0,
        }}
      />

      {/* ── Image area ── */}
      <div className="relative w-full overflow-hidden" style={{ height: 180, zIndex: 1 }}>
        <div className="absolute inset-0" style={{ background: system.imageFallbackBg }} />
        <img
          src={system.image}
          alt={system.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.82 }}
          onError={e => { e.currentTarget.style.display = 'none' }}
        />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.22)' }} />

        {/* Pill badge — top-right */}
        <div className="absolute top-3 right-3">
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{
              background: `${color}18`,
              border: `1px solid ${color}40`,
              color: color,
            }}
          >
            {system.badge}
          </span>
        </div>

        {/* Step watermark — bottom-right */}
        <div
          className="absolute bottom-2 right-3 font-black select-none pointer-events-none"
          style={{
            fontSize: 48,
            color: 'rgba(255,255,255,0.07)',
            lineHeight: 1,
            fontFamily: 'monospace',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      {/* ── Text area ── */}
      <div className="flex flex-col gap-3 p-5 flex-1 relative" style={{ zIndex: 1 }}>

        {/* Icon + label */}
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300"
            style={{
              background: `${color}18`,
              border: `1px solid ${color}25`,
              color: color,
              boxShadow: hovered ? `0 0 16px ${color}25` : 'none',
            }}
          >
            <Icon size={15} />
          </div>
          <span
            className="text-xs font-medium tracking-wide"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            {system.label}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-white leading-snug">
          {system.title}
        </h3>

        {/* Description */}
        <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.58)' }}>
          {system.description}
        </p>

        {/* Highlight pills */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {system.highlights.map(h => (
            <div
              key={h}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
              style={{
                ...innerSurface,
                background: `${color}0e`,
                border: `1px solid ${color}25`,
              }}
            >
              {/* Glowing bullet dot */}
              <div
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{
                  background: color,
                  boxShadow: `0 0 6px ${color}80`,
                }}
              />
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.68)' }}>{h}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Watermark icon — bottom-right of full card */}
      <div
        className="absolute bottom-4 right-4 pointer-events-none select-none"
        style={{ opacity: 0.045, zIndex: 0, color: color }}
      >
        <Icon size={120} />
      </div>

      {/* Accent bottom line */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none transition-opacity duration-300"
        style={{
          height: 1,
          background: `linear-gradient(to right, transparent, ${color})`,
          opacity: hovered ? 1 : 0.4,
          borderRadius: '0 0 20px 20px',
          zIndex: 2,
        }}
      />
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────
const Systems = () => {
  return (
    <div className="w-full px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            Choose Your Surveillance System
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
            Types of CCTV Systems
          </h2>
          <p
            className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            From high-tech IP cameras to rugged outdoor bullet cams — we supply,
            install, and configure every type of CCTV system.
          </p>
        </div>

        {/* 3-column bento grid — md only, no sm breakpoint (avoids orphan gap) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {systems.map((system, index) => (
            <SystemCard key={system.id} system={system} index={index} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Systems