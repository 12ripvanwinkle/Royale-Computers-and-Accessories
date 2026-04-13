import React, { useState } from 'react'
import { Lightbulb, Monitor, TouchpadOff, LayoutGrid, UtensilsCrossed, Sun } from 'lucide-react'
import { glass, glassHover } from '../CCTV-Holder'
import { glassStrong, innerSurface } from './digitalStyles'

const types = [
  {
    id: 1,
    icon: <Lightbulb size={18} />,
    badge: 'High Brightness',
    badgeColor: '#fbbf24',
    badgeBg: 'rgba(251,191,36,0.12)',
    badgeBorder: 'rgba(251,191,36,0.3)',
    title: 'LED Displays',
    label: 'Vibrant · Energy Efficient',
    description:
      'LED displays deliver exceptional brightness, vivid colour accuracy, and long operational lifespans — making them ideal for high-traffic environments where impact matters. Ultra-thin bezels and modular panel designs allow for seamless large-format installations.',
    highlights: ['Up to 100,000hr lifespan', 'Ultra-high brightness', 'Modular panel design'],
    image: '/images/signage/led.jpg',
    imageFallbackBg: 'linear-gradient(135deg, rgba(251,191,36,0.25), rgba(45,74,107,0.9))',
  },
  {
    id: 2,
    icon: <Monitor size={18} />,
    badge: 'Versatile',
    badgeColor: '#93c5fd',
    badgeBg: 'rgba(147,197,253,0.12)',
    badgeBorder: 'rgba(147,197,253,0.3)',
    title: 'LCD Screens',
    label: 'Sharp · Cost-Effective',
    description:
      'LCD screens are the most widely deployed digital signage format — offering sharp resolution, wide viewing angles, and competitive pricing. Available in portrait or landscape orientations, they suit retail, corporate lobbies, and waiting areas.',
    highlights: ['4K resolution options', 'Wide viewing angles', 'Portrait & landscape'],
    image: '/images/signage/lcd.jpg',
    imageFallbackBg: 'linear-gradient(135deg, rgba(147,197,253,0.2), rgba(45,74,107,0.9))',
  },
  {
    id: 3,
    icon: <TouchpadOff size={18} />,
    badge: 'Interactive',
    badgeColor: '#5eead4',
    badgeBg: 'rgba(94,234,212,0.12)',
    badgeBorder: 'rgba(94,234,212,0.3)',
    title: 'Interactive Kiosks',
    label: 'Self-Service · Engaging',
    description:
      'Interactive kiosks turn passive viewers into active users. With multi-touch screens, wayfinding maps, self-checkout, and product discovery tools — kiosks reduce staff workload while improving the customer experience.',
    highlights: ['Multi-touch display', 'Wayfinding & self-checkout', 'ADA compliant options'],
    image: '/images/signage/kiosk.jpg',
    imageFallbackBg: 'linear-gradient(135deg, rgba(94,234,212,0.2), rgba(45,74,107,0.9))',
  },
  {
    id: 4,
    icon: <LayoutGrid size={18} />,
    badge: 'Large Format',
    badgeColor: '#a78bfa',
    badgeBg: 'rgba(167,139,250,0.12)',
    badgeBorder: 'rgba(167,139,250,0.3)',
    title: 'Video Walls',
    label: 'Immersive · Impactful',
    description:
      'Video walls combine multiple displays into a single seamless canvas — creating immersive brand experiences at scale. Used in control rooms, broadcast studios, retail flagships, and event spaces. Bezel-free and ultra-thin configurations available.',
    highlights: ['Seamless bezel-free joins', 'Any size configuration', 'Control room ready'],
    image: '/images/signage/videowall.jpg',
    imageFallbackBg: 'linear-gradient(135deg, rgba(167,139,250,0.25), rgba(45,74,107,0.9))',
  },
  {
    id: 5,
    icon: <UtensilsCrossed size={18} />,
    badge: 'Food & Retail',
    badgeColor: '#4ade80',
    badgeBg: 'rgba(74,222,128,0.12)',
    badgeBorder: 'rgba(74,222,128,0.3)',
    title: 'Menu Boards',
    label: 'Dynamic · Appetising',
    description:
      'Digital menu boards let hospitality and retail businesses update pricing, promotions, and availability instantly — no printing, no delay. Daypart scheduling automatically switches content for breakfast, lunch, and dinner without manual input.',
    highlights: ['Instant price updates', 'Daypart scheduling', 'POS integration ready'],
    image: '/images/signage/menuboard.jpg',
    imageFallbackBg: 'linear-gradient(135deg, rgba(74,222,128,0.2), rgba(45,74,107,0.9))',
  },
  {
    id: 6,
    icon: <Sun size={18} />,
    badge: 'Weatherproof',
    badgeColor: '#f87171',
    badgeBg: 'rgba(248,113,113,0.12)',
    badgeBorder: 'rgba(248,113,113,0.3)',
    title: 'Outdoor Digital Displays',
    label: 'Rugged · All-Weather',
    description:
      'Outdoor displays are engineered to perform in rain, dust, direct sunlight, and extreme temperatures. High-brightness panels (up to 5,000 nits) ensure visibility in full daylight, while IP65-rated enclosures protect hardware year-round.',
    highlights: ['Up to 5,000 nit brightness', 'IP65 weatherproof rated', 'Anti-glare coating'],
    image: '/images/signage/outdoor.jpg',
    imageFallbackBg: 'linear-gradient(135deg, rgba(248,113,113,0.2), rgba(45,74,107,0.9))',
  },
]

function TypeCard({ type, index }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-0.5"
      style={hovered ? glassHover : glass}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative w-full overflow-hidden shrink-0" style={{ height: 160 }}>
        <div className="absolute inset-0" style={{ background: type.imageFallbackBg }} />
        <img
          src={type.image}
          alt={type.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.8 }}
          onError={e => { e.currentTarget.style.display = 'none' }}
        />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.2)' }} />

        {/* Badge */}
        <div className="absolute top-3 left-3">
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{
              background: type.badgeBg,
              border: `1px solid ${type.badgeBorder}`,
              color: type.badgeColor,
            }}
          >
            {type.badge}
          </span>
        </div>

        {/* Step number watermark */}
        <div
          className="absolute bottom-2 right-3 font-black select-none"
          style={{
            fontSize: 44,
            color: 'rgba(255,255,255,0.07)',
            lineHeight: 1,
            fontFamily: 'monospace',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        {/* Icon + label */}
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
            style={{
              background: type.badgeBg,
              color: type.badgeColor,
              border: `1px solid ${type.badgeBorder}`,
            }}
          >
            {type.icon}
          </div>
          <span
            className="text-xs font-medium tracking-wide"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            {type.label}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-white leading-snug">
          {type.title}
        </h3>

        {/* Description */}
        <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.58)' }}>
          {type.description}
        </p>

        {/* Highlights */}
        <div className="flex flex-col gap-1.5 mt-auto pt-2">
          {type.highlights.map(h => (
            <div key={h} className="flex items-center gap-2">
              <div
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: type.badgeColor }}
              />
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>{h}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const SignageTypes = () => {
  return (
    <div className="w-full px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            What We Supply & Install
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
            Types of Digital Signage
          </h2>
          <p
            className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            From indoor retail screens to weatherproof outdoor displays — we supply,
            install, and manage every format of digital signage.
          </p>
        </div>

        {/* ── Bento grid ──
            Row 1: [LED — wide 2col] [LCD — 1col]
            Row 2: [Kiosk — 1col]   [Video Wall — wide 2col]
            Row 3: [Menu Board — wide 2col] [Outdoor — 1col]
        ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {types.map((type, index) => (
            <TypeCard key={type.id} type={type} index={index} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default SignageTypes