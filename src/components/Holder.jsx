import React, { useState, useEffect } from 'react'
import { Cloud, ShoppingCart, Plug, Radio } from 'lucide-react'
import { glass, glassHover } from '../CCTV-Holder'
import { glassStrong, innerSurface } from './digitalStyles'

/* ── Cloud CMS mockup ────────────────────────── */
function CloudCmsMockup() {
  const platforms = [
    { name: 'Screenly',     color: '#93c5fd', status: 'Connected' },
    { name: 'Yodeck',       color: '#4ade80', status: 'Connected' },
    { name: 'NoviSign',     color: '#a78bfa', status: 'Available' },
    { name: 'ScreenCloud',  color: '#fbbf24', status: 'Available' },
  ]
  return (
    <div className="rounded-xl overflow-hidden mb-4" style={innerSurface}>
      <div className="flex items-center justify-between px-3 py-2"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full" style={{ background: '#4ade80', boxShadow: '0 0 5px #4ade8099' }} />
          <span className="text-xs text-white">CMS Platforms</span>
        </div>
        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>2 active</span>
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

/* ── POS mockup ──────────────────────────────── */
function PosMockup() {
  const [tick, setTick] = useState(0)
  useEffect(() => {
    const iv = setInterval(() => setTick(t => t + 1), 2000)
    return () => clearInterval(iv)
  }, [])

  const items = [
    { name: 'Americano',   price: '£3.20', updated: tick % 3 === 0 },
    { name: 'Latte',       price: '£3.80', updated: tick % 3 === 1 },
    { name: 'Croissant',   price: '£2.50', updated: tick % 3 === 2 },
  ]

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
        {items.map(item => (
          <div key={item.name}
            className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-500"
            style={{
              background: item.updated ? 'rgba(74,222,128,0.08)' : 'rgba(255,255,255,0.03)',
              border: `1px solid ${item.updated ? 'rgba(74,222,128,0.2)' : 'rgba(255,255,255,0.06)'}`,
            }}>
            <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.75)' }}>{item.name}</span>
            <span className="text-xs font-semibold"
              style={{ color: item.updated ? '#4ade80' : 'rgba(255,255,255,0.55)' }}>
              {item.price}
            </span>
            {item.updated && (
              <span className="text-xs" style={{ color: '#4ade80', fontSize: 9 }}>↑ updated</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── API mockup ──────────────────────────────── */
function ApiMockup() {
  const endpoints = [
    { method: 'POST', path: '/screens/push',    color: '#4ade80' },
    { method: 'GET',  path: '/screens/status',  color: '#93c5fd' },
    { method: 'PUT',  path: '/schedule/update', color: '#fbbf24' },
    { method: 'DEL',  path: '/content/:id',     color: '#f87171' },
  ]
  return (
    <div className="rounded-xl overflow-hidden mb-4" style={innerSurface}>
      <div className="flex items-center gap-1.5 px-3 py-2"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        {['#f87171', '#fbbf24', '#4ade80'].map(c => (
          <div key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />
        ))}
        <span className="text-xs ml-2" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>
          REST API v2
        </span>
      </div>
      <div className="p-3 flex flex-col gap-1.5">
        {endpoints.map(e => (
          <div key={e.path} className="flex items-center gap-2 px-2 py-1.5 rounded-lg"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <span className="text-xs font-bold shrink-0"
              style={{ color: e.color, fontFamily: 'monospace', minWidth: 32 }}>
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

/* ── Real-time data feed mockup ──────────────── */
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
    { label: 'Temperature',  value: `${values.temp}°C`,   color: '#fbbf24' },
    { label: 'Exchange rate', value: `$${values.rate}`,   color: '#93c5fd' },
    { label: 'Visitors today',value: `${values.visitors}`,color: '#4ade80' },
  ]

  return (
    <div className="rounded-xl overflow-hidden mb-4" style={innerSurface}>
      <div className="flex items-center gap-2 px-3 py-2"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="w-2 h-2 rounded-full animate-pulse"
          style={{ background: '#a78bfa', boxShadow: '0 0 5px #a78bfa99' }} />
        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Live data feeds</span>
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

/* ── Main component ──────────────────────────── */
const TechIntegration = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const cards = [
    {
      id: 'cms',
      icon: Cloud,
      accent: '#93c5fd',
      accentBg: 'rgba(147,197,253,0.12)',
      accentBorder: 'rgba(147,197,253,0.28)',
      label: 'Cloud Infrastructure',
      title: 'Cloud CMS Platforms',
      description:
        'Deploy and manage content across all your screens through industry-leading cloud CMS platforms. We integrate with Screenly, Yodeck, NoviSign, ScreenCloud and more — or connect your existing platform of choice.',
      highlights: ['Multi-platform support', 'Browser-based management', 'Auto software updates'],
      mockup: <CloudCmsMockup />,
      wide: true,
    },
    {
      id: 'pos',
      icon: ShoppingCart,
      accent: '#4ade80',
      accentBg: 'rgba(74,222,128,0.12)',
      accentBorder: 'rgba(74,222,128,0.28)',
      label: 'Point of Sale',
      title: 'POS System Integration',
      description:
        'Sync your digital signage directly with your point-of-sale system. Menu prices, stock levels, and promotions update on screen the moment they change in your POS — no manual editing required.',
      highlights: ['Auto price sync', 'Stock-aware content', 'Works with Square, Lightspeed & more'],
      mockup: <PosMockup />,
      wide: false,
    },
    {
      id: 'api',
      icon: Plug,
      accent: '#a78bfa',
      accentBg: 'rgba(167,139,250,0.12)',
      accentBorder: 'rgba(167,139,250,0.28)',
      label: 'Developer-Friendly',
      title: 'API Integrations',
      description:
        'Our open REST API lets developers connect any external system to your signage network. Trigger content changes, pull screen status, update schedules, and automate workflows from your own applications.',
      highlights: ['Full REST API', 'Webhook support', 'OAuth 2.0 authentication'],
      mockup: <ApiMockup />,
      wide: false,
    },
    {
      id: 'feeds',
      icon: Radio,
      accent: '#fbbf24',
      accentBg: 'rgba(251,191,36,0.12)',
      accentBorder: 'rgba(251,191,36,0.28)',
      label: 'Live Data',
      title: 'Real-Time Data Feeds',
      description:
        'Pull live data directly onto your screens — weather, currency rates, sports scores, social feeds, visitor counters, and custom business metrics. Content stays fresh and relevant without manual updates.',
      highlights: ['Weather & news feeds', 'Custom data sources', 'Auto-refresh intervals'],
      mockup: <DataFeedMockup />,
      wide: true,
    },
  ]

  return (
    <div className="w-full px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            Under the Hood
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
            Technology &amp; Integration
          </h2>
          <p
            className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            Our digital signage solutions plug seamlessly into your existing technology stack —
            no rip-and-replace required.
          </p>
        </div>

        {/* ── Bento grid ──
            Row 1: [Cloud CMS — 2col wide] [POS — 1col]
            Row 2: [API — 1col]            [Data Feeds — 2col wide]
        ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map(card => {
            const IconComp = card.icon
            return (
              <div
                key={card.id}
                className={`${card.wide ? 'md:col-span-2' : 'md:col-span-1'} rounded-2xl p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300`}
                style={hoveredCard === card.id ? glassHover : glassStrong}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Mockup */}
                {card.mockup}

                {/* Text */}
                <div className="mt-auto">
                  {/* Icon + label */}
                  <div className="flex items-center gap-2.5 mb-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background: card.accentBg,
                        color: card.accent,
                        border: `1px solid ${card.accentBorder}`,
                      }}
                    >
                      <IconComp size={16} />
                    </div>
                    <span
                      className="text-xs font-medium tracking-wide"
                      style={{ color: 'rgba(255,255,255,0.45)' }}
                    >
                      {card.label}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-white mb-2">{card.title}</h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {card.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-col gap-1.5">
                    {card.highlights.map(h => (
                      <div key={h} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: card.accent }} />
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TechIntegration