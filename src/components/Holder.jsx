import React, { useEffect, useState } from 'react'
import { glass, glassHover, glassStrong, innerSurface } from '../CCTV-Holder/CCTVStyles'
import { Cloud, ShoppingCart, Code2, Radio, ArrowRight } from 'lucide-react'

// ── Data ──────────────────────────────────────────────────────────────────────

const platforms = [
  { name: 'Screenly',   color: '#4ade80', status: 'Connected' },
  { name: 'NoviSign',   color: '#60a5fa', status: 'Connected' },
  { name: 'Rise Vision', color: '#f472b6', status: 'Available' },
  { name: 'Yodeck',     color: '#fb923c', status: 'Available' },
]

const endpoints = [
  { method: 'GET',    path: '/api/screens',         color: '#4ade80' },
  { method: 'POST',   path: '/api/content/push',    color: '#60a5fa' },
  { method: 'PATCH',  path: '/api/schedule/:id',    color: '#fbbf24' },
  { method: 'DELETE', path: '/api/playlist/:id',    color: '#f87171' },
]

const posItems = [
  { name: 'Americano', price: '£3.20', cycle: 0 },
  { name: 'Latte',     price: '£3.80', cycle: 1 },
  { name: 'Croissant', price: '£2.50', cycle: 2 },
]

// Cards that make up the bento grid
// Each has: id, icon, color, eyebrow, headline, pill, body, highlights, cols
// Plus a `mockup` key that maps to which animated widget to render

const cards = [
  {
    id: 'cms',
    icon: Cloud,
    color: '#00e5a0',
    eyebrow: 'Content Management',
    headline: 'Cloud CMS Integration',
    pill: '2 Active',
    body: 'Connect your preferred digital signage CMS and push content to any screen — remotely, in real time, from one dashboard.',
    highlights: ['Screenly, NoviSign, Yodeck & more', 'Remote playlist management', 'Role-based publishing access'],
    mockup: 'cms',
    cols: 2,
  },
  {
    id: 'pos',
    icon: ShoppingCart,
    color: '#f0a33c',
    eyebrow: 'Point of Sale',
    headline: 'POS Sync',
    pill: 'Live',
    body: 'Prices and menu items update on-screen the moment they change in your POS — no manual edits, no mismatches.',
    highlights: ['Real-time price sync', 'Automatic menu updates', 'Supports Square, Lightspeed & more'],
    mockup: 'pos',
    cols: 1,
  },
  {
    id: 'api',
    icon: Code2,
    color: '#c09aff',
    eyebrow: 'Developer',
    headline: 'REST API Access',
    pill: 'Open',
    body: 'Full REST API so your dev team can push content, trigger playlists, and control screens from any internal system.',
    highlights: ['Authenticated endpoints', 'Webhook support', 'Swagger docs included'],
    mockup: 'api',
    cols: 1,
  },
  {
    id: 'datafeed',
    icon: Radio,
    color: '#60c8f0',
    eyebrow: 'Live Data',
    headline: 'Data Feed Display',
    pill: 'Real-time',
    body: 'Pull in live data — weather, exchange rates, footfall counters, sports scores — and display it dynamically on any screen.',
    highlights: ['JSON / XML feed support', 'Auto-refresh intervals', 'Custom widget templates'],
    mockup: 'datafeed',
    cols: 2,
  },
]

// ── Mockup Components ─────────────────────────────────────────────────────────

function CmsMockup() {
  return (
    <div className="rounded-xl overflow-hidden mb-4" style={innerSurface}>
      <div className="flex items-center justify-between px-3 py-2"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full" style={{ background: '#4ade80', boxShadow: '0 0 5px #4ade8099' }} />
          <span className="text-xs text-white">CMS Platforms</span>
        </div>
        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>2 Active</span>
      </div>
      <div className="p-3 flex flex-col gap-1.5">
        {platforms.map(p => (
          <div key={p.name} className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="w-2 h-2 rounded-full shrink-0" style={{ background: p.color }} />
            <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.75)' }}>{p.name}</span>
            <span className="text-xs px-2 py-0.5 rounded-full"
              style={{
                background: p.status === 'Connected' ? 'rgba(74,222,128,0.1)' : 'rgba(255,255,255,0.06)',
                color: p.status === 'Connected' ? '#4ade80' : 'rgba(255,255,255,0.35)',
                border: p.status === 'Connected' ? '1px solid rgba(74,222,128,0.25)' : '1px solid rgba(255,255,255,0.08)',
              }}>
              {p.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function PosMockup() {
  const [tick, setTick] = useState(0)
  useEffect(() => {
    const iv = setInterval(() => setTick(t => t + 1), 2000)
    return () => clearInterval(iv)
  }, [])

  return (
    <div className="rounded-xl overflow-hidden mb-4" style={innerSurface}>
      <div className="flex items-center gap-2 px-3 py-2"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>POS → Signage sync</span>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#4ade80', boxShadow: '0 0 4px #4ade8099' }} />
          <span className="text-xs" style={{ color: '#4ade80' }}>Live</span>
        </div>
      </div>
      <div className="p-3 flex flex-col gap-1.5">
        {posItems.map((item, i) => {
          const updated = tick % 3 === i
          return (
            <div key={item.name}
              className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-500"
              style={{
                background: updated ? 'rgba(74,222,128,0.08)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${updated ? 'rgba(74,222,128,0.2)' : 'rgba(255,255,255,0.06)'}`,
              }}>
              <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.75)' }}>{item.name}</span>
              <span className="text-xs font-semibold"
                style={{ color: updated ? '#4ade80' : 'rgba(255,255,255,0.55)' }}>
                {item.price}
              </span>
              {updated && (
                <span style={{ color: '#4ade80', fontSize: 9 }}>↑ updated</span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function ApiMockup() {
  return (
    <div className="rounded-xl overflow-hidden mb-4" style={innerSurface}>
      <div className="flex items-center gap-1.5 px-3 py-2"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        {['#f87171', '#fbbf24', '#4ade80'].map(c => (
          <div key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />
        ))}
        <span className="text-xs ml-2" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>REST API</span>
      </div>
      <div className="p-3 flex flex-col gap-1.5">
        {endpoints.map(e => (
          <div key={e.path} className="flex items-center gap-2 px-2 py-1.5 rounded-lg"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <span className="text-xs font-bold shrink-0"
              style={{ color: e.color, fontFamily: 'monospace', minWidth: 48 }}>
              {e.method}
            </span>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'monospace' }}>
              {e.path}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function DataFeedMockup() {
  const [values, setValues] = useState({ temp: 18, rate: 4.2, visitors: 312 })
  useEffect(() => {
    const iv = setInterval(() => {
      setValues(v => ({
        temp: +(v.temp + (Math.random() - 0.5) * 0.4).toFixed(1),
        rate: +(v.rate + (Math.random() - 0.5) * 0.2).toFixed(2),
        visitors: v.visitors + Math.floor(Math.random() * 3),
      }))
    }, 1600)
    return () => clearInterval(iv)
  }, [])

  const feeds = [
    { label: 'Temperature',   value: `${values.temp}°C`, color: '#fbbf24' },
    { label: 'Exchange rate', value: `$${values.rate}`,  color: '#93c5fd' },
    { label: 'Visitors today',value: `${values.visitors}`, color: '#4ade80' },
  ]

  return (
    <div className="rounded-xl overflow-hidden mb-4" style={innerSurface}>
      <div className="flex items-center gap-2 px-3 py-2"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="w-2 h-2 rounded-full animate-pulse"
          style={{ background: '#a78bfa', boxShadow: '0 0 5px #a78bfa99' }} />
        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Live Data Feed</span>
      </div>
      <div className="p-3 grid grid-cols-3 gap-2">
        {feeds.map(f => (
          <div key={f.label} className="flex flex-col items-center justify-center rounded-lg py-2.5 px-1"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <span className="text-sm font-bold transition-all duration-500"
              style={{ color: f.color, fontFamily: 'monospace' }}>
              {f.value}
            </span>
            <span className="text-center leading-tight mt-1"
              style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)' }}>
              {f.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

const mockupMap = {
  cms:      <CmsMockup />,
  pos:      <PosMockup />,
  api:      <ApiMockup />,
  datafeed: <DataFeedMockup />,
}

// ── Card ──────────────────────────────────────────────────────────────────────

function IntegrationCard({ card }) {
  const [active, setActive] = useState(false)
  const { icon: Icon, color } = card
  const colSpanClass = card.cols === 2 ? 'md:col-span-2' : 'md:col-span-1'

  return (
    <div
      className={`col-span-1 ${colSpanClass} relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-0.5`}
      style={{
        ...(active ? glassHover : glass),
        background: `radial-gradient(ellipse at 0% 0%, ${color}18 0%, transparent 60%), ${active ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.04)'}`,
        boxShadow: active ? `0 0 32px ${color}18` : 'none',
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {/* Watermark icon */}
      <div className="pointer-events-none absolute -bottom-4 -right-4 opacity-[0.045]" style={{ color }}>
        <Icon size={110} strokeWidth={1} />
      </div>

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
                boxShadow: active ? `0 0 16px ${color}25` : 'none',
                transition: 'box-shadow 0.3s ease',
              }}
            >
              <Icon size={17} strokeWidth={1.75} />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase"
                style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em' }}>
                {card.eyebrow}
              </p>
              <h3 className="text-base font-bold text-white leading-tight">{card.headline}</h3>
            </div>
          </div>
          <span
            className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full shrink-0"
            style={{ color, background: `${color}15`, border: `1px solid ${color}28`, letterSpacing: '0.08em' }}
          >
            {card.pill}
          </span>
        </div>

        {/* Body */}
        <p className="text-sm font-light leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
          {card.body}
        </p>

        {/* Mockup widget */}
        {mockupMap[card.mockup]}

        {/* Bullets */}
        <div className="flex flex-col gap-2 -mt-2">
          {card.highlights.map(h => (
            <div key={h} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: color, boxShadow: `0 0 6px ${color}80` }} />
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>{h}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Accent bottom line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: `linear-gradient(to right, ${color}50, transparent)`,
          opacity: active ? 1 : 0.4,
          transition: 'opacity 0.3s ease',
        }}
      />
    </div>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────

const TechIntegration = () => {
  return (
    <section
      id="integrations"
      className="w-full px-4 sm:px-6 md:px-10 lg:px-14 py-14 sm:py-20 md:py-24"
      style={{ color: 'white' }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.22em' }}>
            Connectivity
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
            style={{ letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            Plugs into everything.
          </h2>
          <p className="text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.5)' }}>
            From cloud CMS platforms to live data feeds — our signage infrastructure connects with your existing tools out of the box.
          </p>
        </div>

        {/* Bento Grid
            Row 1: CMS (2) + POS (1)
            Row 2: API (1) + Data Feed (2)
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map(card => (
            <IntegrationCard key={card.id} card={card} />
          ))}
        </div>

        {/* CTA Strip */}
        <div
          className="mt-4 rounded-2xl px-5 sm:px-8 py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          style={glassStrong}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-1"
              style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.18em' }}>
              Need a custom integration?
            </p>
            <h3 className="text-sm sm:text-base font-semibold text-white">
              We'll connect your signage to whatever you're running.
            </h3>
            <p className="text-xs mt-1 font-light" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Talk to our team — no integration is too bespoke.
            </p>
          </div>
          <button
            className="shrink-0 w-full sm:w-auto flex items-center justify-center gap-2 text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl"
            style={{ background: '#00e5a0', color: '#0a0d0f', transition: 'all 0.2s ease' }}
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
            Get in Touch <ArrowRight size={14} strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </section>
  )
}

export default TechIntegration