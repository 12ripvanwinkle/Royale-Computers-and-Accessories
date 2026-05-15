import React, { useEffect, useState } from 'react'
import { glass, glassStrong, glassHover, innerSurface } from '../CCTV-Holder/CCTVStyles'
import {platforms, endpoints, posItems, } from './index'

export function FeatureCard({ feature }) {
  const [hovered, setHovered] = useState(false)
  const { icon: Icon, color, pill, eyebrow, headline, body, bullets, stats, span, strong } = feature
  const base = strong ? glassStrong : glass
 
  return (
    <div
      // On mobile: always full width. On md+: honour span.
      className={`col-span-1 md:col-span-${span} flex flex-col relative overflow-hidden transition-all duration-300`}
      style={{
        ...(hovered ? { ...base, background: 'rgba(255,255,255,0.13)' } : base),
        borderRadius: 20,
        padding: 'clamp(1.25rem, 4vw, 1.75rem)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Radial glow — contained, won't overflow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: `radial-gradient(ellipse at 0% 0%, ${color}1a, transparent 55%)`,
          borderRadius: 20, zIndex: 0,
        }}
      />
 
      {/* Watermark icon */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', bottom: 16, right: 16,
          pointerEvents: 'none', userSelect: 'none',
          opacity: 0.04, color, zIndex: 0,
        }}
      >
        <Icon size={100} />
      </div>
 
      {/* All content above decorations */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1.1rem', flex: 1 }}>
 
        {/* Top row: icon + pill */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', flexWrap: 'wrap' }}>
          <div
            style={{
              width: 38, height: 38, borderRadius: 12, flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: `${color}18`, border: `1px solid ${color}30`, color,
              transition: 'box-shadow 0.3s',
              boxShadow: hovered ? `0 0 18px ${color}30` : 'none',
            }}
          >
            <Icon size={16} />
          </div>
          <span
            style={{
              fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.04em',
              padding: '4px 10px', borderRadius: 999,
              background: `${color}18`, border: `1px solid ${color}35`, color,
              whiteSpace: 'nowrap',
            }}
          >
            {pill}
          </span>
        </div>
 
        {/* Eyebrow */}
        <span style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
          {eyebrow}
        </span>
 
        {/* Headline */}
        <h3 style={{ margin: 0, fontSize: 'clamp(1rem, 3vw, 1.15rem)', fontWeight: 600, color: '#fff', lineHeight: 1.3 }}>
          {headline}
        </h3>
 
        {/* Body */}
        <p style={{ margin: 0, fontSize: '0.82rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.58)' }}>
          {body}
        </p>
 
        {/* Bullets */}
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
          {bullets.map(b => (
            <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
              <span
                style={{
                  width: 6, height: 6, borderRadius: '50%', flexShrink: 0, marginTop: '0.35rem',
                  background: color, boxShadow: `0 0 6px ${color}90`,
                }}
              />
              <span style={{ fontSize: '0.78rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.62)' }}>{b}</span>
            </li>
          ))}
        </ul>
 
        {/* Stats strip — always 3 cols, clamped so nothing overflows */}
        {/* Stats — vertical stack on mobile, row on md+ */}
        <div
          className="flex flex-col md:flex-row"
          style={{
            marginTop: 'auto', paddingTop: '1rem',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            gap: '0.5rem',
          }}
        >
          {stats.map(([val, lbl]) => (
            <div
              key={lbl}
              className="flex md:flex-col items-center md:items-start"
              style={{
                flex: 1, borderRadius: 10, padding: '0.5rem 0.75rem',
                background: `${color}0d`, border: `1px solid ${color}22`,
                gap: '0.5rem',
              }}
            >
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color, lineHeight: 1.2, whiteSpace: 'nowrap' }}>
                {val}
              </span>
              <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.2, whiteSpace: 'nowrap' }}>
                {lbl}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

function SpecBar({ specs, color, hovered }) {
  const count = specs.length
  return (
    <div
      className="relative w-full shrink-0 overflow-hidden"
      style={{
        height: 100,
        background: `radial-gradient(ellipse at 50% 120%, ${color}22 0%, transparent 70%)`,
        borderBottom: `1px solid ${color}18`,
      }}
    >
      {/* Inner flex — specs shrink proportionally, no overflow */}
      <div className="flex items-center justify-around w-full h-full px-3">
        {specs.map(([val, lbl], i) => (
          <React.Fragment key={lbl}>
            {i > 0 && (
              <div className="self-center h-7 w-px shrink-0" style={{ background: 'rgba(255,255,255,0.08)' }} />
            )}
            <div
              className="flex flex-col items-center gap-0.5 text-center min-w-0"
              style={{ flex: 1 }}
            >
              <span
                className="font-black leading-none truncate w-full text-center"
                style={{
                  fontSize: count === 3 ? 18 : 22,
                  color,
                  textShadow: hovered ? `0 0 18px ${color}80` : 'none',
                  transition: 'text-shadow 0.3s ease',
                }}
              >
                {val}
              </span>
              <span
                className="uppercase tracking-widest truncate w-full text-center"
                style={{
                  fontSize: count === 3 ? 9 : 10,
                  color: 'rgba(255,255,255,0.35)',
                  letterSpacing: count === 3 ? '0.08em' : '0.12em',
                }}
              >
                {lbl}
              </span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export function TypeCard({type, index}) {
    
    const [hovered, setHovered] = useState(false)
    const { icon: Icon, color } = type

    const colSpanClass = type.cols === 2 ? 'md:col-span-2' : 'md:col-span-1'

    return (
    <div className={`col-span-1 ${colSpanClass} rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-0.5 relative`}
      style={{
        ...(hovered ? glassHover : glass),
        background: `radial-gradient(ellipse at 0% 0%, ${color}18 0%, transparent 60%), ${hovered ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.04)'}`,
        boxShadow: hovered ? `0 0 32px ${color}18` : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Spec bar — top of card */}
      <SpecBar specs={type.specs} color={color} hovered={hovered} />
 
      {/* Text content */}
      <div className="relative flex flex-col gap-3 p-5 flex-1 overflow-hidden">
 
        {/* Watermark icon */}
        <div
          className="pointer-events-none absolute -bottom-4 -right-4 opacity-[0.045]"
          style={{ color }}
        >
          <Icon size={110} strokeWidth={1} />
        </div>
 
        {/* Icon + label + badge row */}
        <div className="relative z-10 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
              style={{
                background: `${color}15`,
                color,
                border: `1px solid ${color}28`,
                boxShadow: hovered ? `0 0 14px ${color}25` : 'none',
                transition: 'box-shadow 0.3s ease',
              }}
            >
              <Icon size={16} strokeWidth={1.75} />
            </div>
            <span className="text-xs font-medium tracking-wide" style={{ color: 'rgba(255,255,255,0.4)' }}>
              {type.label}
            </span>
          </div>
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0"
            style={{
              background: `${color}15`,
              border: `1px solid ${color}28`,
              color,
            }}
          >
            {type.badge}
          </span>
        </div>
 
        {/* Title */}
        <h3 className="relative z-10 text-base font-semibold text-white leading-snug">
          {type.title}
        </h3>
 
        {/* Description */}
        <p className="relative z-10 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
          {type.description}
        </p>
 
        {/* Highlights */}
        <div className="relative z-10 flex flex-col gap-1.5 mt-auto pt-2">
          {type.highlights.map(h => (
            <div key={h} className="flex items-center gap-2">
              <div
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: color, boxShadow: `0 0 6px ${color}80` }}
              />
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>{h}</span>
            </div>
          ))}
        </div>
      </div>
 
      {/* Accent bottom line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: `linear-gradient(to right, ${color}50, transparent)`,
          opacity: hovered ? 1 : 0.4,
          transition: 'opacity 0.3s ease',
        }}
      />
    </div>
  )
}

// For Tech Integration 
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

export function IntegrationCard({ card }) {
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