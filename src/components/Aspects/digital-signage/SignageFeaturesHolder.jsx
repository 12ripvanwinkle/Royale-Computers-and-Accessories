import React, { useState, useEffect } from 'react'

import {innerSurface} from './digitalStyles'

function Chip({ children, color = '#93c5fd' }) {
  return (
    <span
      className="inline-block text-xs px-2.5 py-1 rounded-full"
      style={{
        background: `${color}18`,
        border: `1px solid ${color}35`,
        color,
      }}
    >
      {children}
    </span>
  )
}

function CardLabel({ icon, label, accent }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
        style={{ background: `${accent}18`, color: accent, border: `1px solid ${accent}30` }}
      >
        {icon}
      </div>
      <span className="text-xs font-medium tracking-wide" style={{ color: 'rgba(255,255,255,0.45)' }}>
        {label}
      </span>
    </div>
  )
}

/* ── CMS visual mockup ─────────────────────────── */
function CmsMockup() {
  const files = ['Hero_Banner_v3.mp4', 'Promo_Slide.png', 'Menu_Loop.gif', 'Brand_Anim.webm']
  return (
    <div className="rounded-xl overflow-hidden mb-4" style={innerSurface}>
      <div className="flex items-center gap-1.5 px-3 py-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        {['#f87171','#fbbf24','#4ade80'].map(c => (
          <div key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />
        ))}
        <span className="text-xs ml-2" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>
          /content-library
        </span>
      </div>
      <div className="p-3 flex flex-col gap-1.5">
        {files.map((f, i) => (
          <div key={f} className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg"
            style={{ background: i === 1 ? 'rgba(147,197,253,0.1)' : 'transparent', border: i === 1 ? '1px solid rgba(147,197,253,0.2)' : '1px solid transparent' }}>
            <div className="w-1.5 h-1.5 rounded-sm shrink-0"
              style={{ background: ['#a78bfa','#93c5fd','#4ade80','#fbbf24'][i] }} />
            <span className="text-xs flex-1" style={{ color: i === 1 ? '#93c5fd' : 'rgba(255,255,255,0.6)', fontFamily: 'monospace' }}>{f}</span>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
              {['2.1 MB','4.8 MB','1.3 MB','6.2 MB'][i]}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Real-time update pulse mockup ─────────────── */
function RealtimeMockup() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const iv = setInterval(() => setActive(a => (a + 1) % 3), 1400)
    return () => clearInterval(iv)
  }, [])
  const events = [
    { label: 'Screen 4 — updated', time: 'just now', ok: true },
    { label: 'New campaign pushed', time: '2s ago', ok: true },
    { label: 'Screen 7 — offline', time: '14s ago', ok: false },
  ]
  return (
    <div className="rounded-xl overflow-hidden mb-4" style={innerSurface}>
      <div className="flex items-center gap-2 px-3 py-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="w-2 h-2 rounded-full" style={{ background: '#4ade80', boxShadow: '0 0 5px #4ade8099' }} />
        <span className="text-xs" style={{ color: '#4ade80' }}>Live feed</span>
      </div>
      <div className="p-2 flex flex-col gap-1">
        {events.map((e, i) => (
          <div key={e.label}
            className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
            style={{ background: i === active ? 'rgba(255,255,255,0.06)' : 'transparent' }}>
            <div className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: e.ok ? '#4ade80' : '#f87171' }} />
            <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.72)' }}>{e.label}</span>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{e.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Schedule mockup ───────────────────────────── */
function ScheduleMockup() {
  const slots = [
    { time: '08:00', content: 'Morning news loop', color: '#93c5fd' },
    { time: '12:00', content: 'Lunch promo reel', color: '#4ade80' },
    { time: '17:00', content: 'Evening highlights', color: '#a78bfa' },
    { time: '21:00', content: 'Brand screensaver', color: '#fbbf24' },
  ]
  return (
    <div className="rounded-xl overflow-hidden mb-4" style={innerSurface}>
      <div className="flex items-center justify-between px-3 py-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Today's schedule</span>
        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>4 items</span>
      </div>
      <div className="p-2 flex flex-col gap-1">
        {slots.map(s => (
          <div key={s.time} className="flex items-center gap-2.5 px-2 py-1.5">
            <span className="text-xs shrink-0" style={{ color: s.color, fontFamily: 'monospace', minWidth: 38 }}>{s.time}</span>
            <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
              <div className="h-full rounded-full" style={{ background: s.color, width: `${[75,60,85,40][slots.indexOf(s)]}%`, opacity: 0.7 }} />
            </div>
            <span className="text-xs truncate" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: 90 }}>{s.content}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Multi-screen grid mockup ──────────────────── */
function MultiScreenMockup() {
  const [lit, setLit] = useState(0)
  useEffect(() => {
    const iv = setInterval(() => setLit(l => (l + 1) % 6), 700)
    return () => clearInterval(iv)
  }, [])
  const screens = [0,1,2,3,4,5]
  const colors = ['#93c5fd','#4ade80','#a78bfa','#fbbf24','#5eead4','#f87171']
  return (
    <div className="rounded-xl p-3 mb-4" style={innerSurface}>
      <div className="grid grid-cols-3 gap-1.5">
        {screens.map(i => (
          <div key={i} className="rounded-lg flex items-center justify-center transition-all duration-300"
            style={{
              height: 36,
              background: i === lit ? `${colors[i]}20` : 'rgba(255,255,255,0.05)',
              border: `1px solid ${i === lit ? colors[i] + '55' : 'rgba(255,255,255,0.08)'}`,
            }}>
            <span className="text-xs" style={{ color: i === lit ? colors[i] : 'rgba(255,255,255,0.25)', fontFamily: 'monospace' }}>
              S{i + 1}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between px-1">
        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>6 screens active</span>
        <span className="text-xs" style={{ color: '#4ade80' }}>All online</span>
      </div>
    </div>
  )
}

/* ── Analytics mockup ──────────────────────────── */
function AnalyticsMockup() {
  const [animated, setAnimated] = useState(false)
 
  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 100)
    return () => clearTimeout(t)
  }, [])
 
  const bars = [
    { day: 'Mon', value: 42, views: '3.1k' },
    { day: 'Tue', value: 67, views: '5.0k' },
    { day: 'Wed', value: 54, views: '4.0k' },
    { day: 'Thu', value: 81, views: '6.0k' },
    { day: 'Fri', value: 63, views: '4.7k' },
    { day: 'Sat', value: 91, views: '6.8k' },
    { day: 'Sun', value: 72, views: '5.3k' },
  ]
 
  const stats = [
    { label: 'Weekly views',   value: '34.9k', color: '#93c5fd' },
    { label: 'Avg dwell time', value: '18s',   color: '#4ade80' },
    { label: 'Interactions',   value: '2.4k',  color: '#a78bfa' },
    { label: 'vs last week',   value: '+18%',  color: '#fbbf24' },
  ]
 
  return (
    <div className="rounded-xl overflow-hidden mb-4" style={innerSurface}>
      {/* Toolbar */}
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      >
        <span className="text-xs font-medium text-white">Engagement Overview</span>
        <div className="flex items-center gap-1.5">
          {['7d', '30d', '90d'].map((r, i) => (
            <span
              key={r}
              className="text-xs px-2 py-0.5 rounded"
              style={{
                background: i === 0 ? 'rgba(147,197,253,0.15)' : 'transparent',
                color: i === 0 ? '#93c5fd' : 'rgba(255,255,255,0.3)',
                border: i === 0 ? '1px solid rgba(147,197,253,0.3)' : '1px solid transparent',
              }}
            >
              {r}
            </span>
          ))}
        </div>
      </div>
 
      {/* Chart area */}
      <div className="px-4 pt-4 pb-2">
        <div className="flex items-end gap-2" style={{ height: 80 }}>
          {bars.map((b, i) => (
            <div key={b.day} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-t-md"
                style={{
                  height: animated ? `${b.value}%` : '0%',
                  background: i === 5
                    ? 'rgba(147,197,253,0.85)'
                    : 'rgba(147,197,253,0.28)',
                  transition: `height 0.6s cubic-bezier(0.4,0,0.2,1) ${i * 60}ms`,
                  borderRadius: '4px 4px 0 0',
                  minHeight: 3,
                }}
              />
            </div>
          ))}
        </div>
 
        {/* Day labels */}
        <div className="flex gap-2 mt-1.5">
          {bars.map(b => (
            <div key={b.day} className="flex-1 text-center">
              <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)' }}>{b.day}</span>
            </div>
          ))}
        </div>
      </div>
 
      {/* Stat row */}
      <div
        className="grid grid-cols-4 gap-0"
        style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="flex flex-col items-center justify-center py-3 px-2"
            style={{
              borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
            }}
          >
            <span className="text-sm font-bold" style={{ color: s.color }}>{s.value}</span>
            <span
              className="text-center leading-tight mt-0.5"
              style={{ fontSize: 9, color: 'rgba(255,255,255,0.38)' }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export { Chip, CardLabel, CmsMockup, RealtimeMockup, ScheduleMockup, MultiScreenMockup, AnalyticsMockup }