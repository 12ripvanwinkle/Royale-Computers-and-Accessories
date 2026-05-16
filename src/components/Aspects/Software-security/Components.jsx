import React, { useEffect, useState } from 'react'
import { glass, glassHover,  } from '../CCTV-Holder/CCTVStyles'
import { ShieldAlert, Lock, KeyRound, Plug, Users, Activity, ClipboardList } from 'lucide-react'
import {layers, calls, roles, } from './index'

function StatPill({value, label, color}) {
    return (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
            style={{background: `${color}12`, border: `1px solid ${color}30`}}
        >
            <span className="text-xs font-bold" style={{ color }}>{value}</span>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{label}</span>
        </div>
    )
}

export function FeatureCard({feature}) {

    const [hovered, setHovered] = useState(false)
    const {icon: Icon, color} = feature

    return (
        <div className="h-full rounded-2xl flex flex-col gap-4 transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden"
            style={{
                ...(hovered ? glassHover : glass),
                background: `radial-gradient(ellipse at 0% 0%, ${color}18 0%, transparent 60%), ${hovered ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.04)'}`,
                boxShadow: hovered ? `0 0 32px ${color}18` : 'none',
                padding: '1.5rem',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >

            {/* Watermark */}
            <div className="pointer-events-none absolute -bottom-4 -right-4 opacity-[0.045]"
                style={{color}}
            >
                <Icon size={110} strokeWidth={1} />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-4 flex-1">

                {/* Icon + eyebrow */}
                <div className="flex items-center gap-3">
                    
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{
                            background: `${color}18`,
                            color,
                            border: `1px solid ${color}30`,
                            boxShadow: hovered ? `0 0 16px ${color}25` : 'none',
                            transition: 'box-shadow 0.3s ease',
                        }}
                    >
                        <Icon size={18} strokeWidth={1.75} />
                    </div>
                    <span className="text-xs font-semibold tracking-widest uppercase"
                        style={{color: 'rgba(255,255,255,0.4)'}}
                    >
                        {feature.eyebrow}
                    </span>

                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-white leading-snug">
                    {feature.title}
                </h3>

                {/* body */}
                <p className="text-sm  font-semibold text-white leading-snug">
                    {feature.body}
                </p>

                {/* Stat pill */}
                <StatPill value={feature.stat.value} label={feature.stat.label} color={color} />

                {/* Highlights */}
                <div className="flex flex-col gap-1.5 mt-auto pt-1">
                    {feature.highlights.map(h => (
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

        </div>
    )
}

// Aspects of protection stuff
function AppSecMockup() {
    return (
        <div className="rounded-xl overflow-hidden mt-auto"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center gap-1.5"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                {['#f87171', '#fbbf24', '#4ade80'].map(c => (
                    <div key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />
                ))}  
                <span className="text-xs ml-1" style={{color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace'}}>
                    Security Scan 
                </span>
            </div>
            
            <div className="p-3 flex flex-col gap-1.5">
                {layers.map(l => (
                    <div key={l.label} className="flex items-center justify-between px-2 py-1.5 rounded-lg"
                        style={{ background: 'rgba(255,255,255,0.04)' }}>
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'monospace' }}>{l.label}</span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                            style={{ background: `${l.color}18`, color: l.color, border: `1px solid ${l.color}35` }}>
                            {l.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

function CloudMockup() {

    const [active, setActive] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setActive(a => (a + 1) % 3), 1200)
        return () => clearInterval(iv)
    }, [])
    const nodes = ['us-east-1', 'eu-west-2', 'ap-south-1']

    return (
        <div className="rounded-xl p-3 mt-auto"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="flex items-center justify-between mb-3">
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Cloud Regions</span>
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#4ade80', boxShadow: '0 0 4px #4ade8099' }} />
                    <span className="text-xs" style={{ color: '#4ade80' }}>All secured</span>
                </div>
            </div>

            <div className="flex gap-2">
               {nodes.map((n, i) => (
                    <div key={n} className="flex-1 rounded-lg py-2 text-center transition-all duration-300"
                        style={{
                        background: i === active ? 'rgba(147,197,253,0.12)' : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${i === active ? 'rgba(147,197,253,0.3)' : 'rgba(255,255,255,0.08)'}`,
                        }}>
                            <div className="w-1.5 h-1.5 rounded-full mx-auto mb-1"
                            style={{ background: i === active ? '#93c5fd' : '#4ade80' }} />
                            <span className="text-xs" style={{ color: i === active ? '#93c5fd' : 'rgba(255,255,255,0.4)', fontFamily: 'monospace', fontSize: 9 }}>
                            {n}
                            </span>
                    </div>
                ))} 
            </div>
        </div>
    )
}

function ApiMockup() {
    const statusColor = s => s === 200 ? '#4ade80' : s === 401 ? '#fbbf24' : '#f87171'

    return(
        <div className="rounded-xl overflow-hidden mt-auto"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>API Gateway Log</span>
            </div>

            <div className="p-2 flex flex-col gap-1">
                {calls.map(c => (
                    <div key={c.path} className="flex items-center gap-2 px-2 py-1.5 rounded-lg"
                        style={{ background: 'rgba(255,255,255,0.03)' }}>
                        <span className="text-xs font-bold shrink-0"
                        style={{ color: '#a78bfa', minWidth: 40, fontFamily: 'monospace' }}>{c.method}</span>
                        <span className="text-xs flex-1"
                        style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'monospace' }}>{c.path}</span>
                        <span className="text-xs font-semibold"
                        style={{ color: statusColor(c.status) }}>{c.status}</span>
                    </div>
                ))}
            </div>
        </div>
    )

}

function IamMockup() {
    return (
        <div className="rounded-xl p-3 mt-auto"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="flex flex-col gap-1.5">
              {roles.map(r => (
                    <div key={r.role} className="flex items-center gap-3 px-2 py-2 rounded-lg"
                        style={{ background: 'rgba(255,255,255,0.04)' }}>
                        <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: `${r.color}18`, border: `1px solid ${r.color}35` }}>
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: r.color }} />
                        </div>
                        <span className="text-xs font-medium text-white flex-1">{r.role}</span>
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{r.perms}</span>
                    </div>
                ))}  
            </div>
        </div>
    )
}

function DataMockup() {

    const [progress, setProgress] = useState(80)
    useEffect(() => {
        const iv = setInterval(() => setProgress(p => p >= 100 ? 20 : p + 2), 120)
        return () => clearInterval(iv)
    }, [])
    const fields = ['SSN ••••••••', 'Card ••••  4242', 'Email h***@***.com']

    return (
        <div className="rounded-xl p-3 mt-auto"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="flex items-center justify-between mb-3">
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Encryption progress</span>
                <span className="text-xs font-semibold" style={{ color: '#5eead4' }}>{progress}%</span>
            </div>

            <div className="w-full h-1.5 rounded-full mb-3" style={{background: 'rgba(255,255,255,0.08)'}}>
                <div className="h-full rounded-full transition-all duration-100"
                    style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #5eead4, #93c5fd)' }} />

            </div>

            <div className="flex flex-col gap-1">
                {fields.map(f => (
                    <div key={f} className="flex items-center gap-2 px-2 py-1 rounded"
                        style={{ background: 'rgba(94,234,212,0.06)' }}>
                        <div className="w-1 h-1 rounded-full" style={{ background: '#5eead4' }} />
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace' }}>{f}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

const mockupMap = {
  appsec:  <AppSecMockup />,
  cloud:   <CloudMockup />,
  api:     <ApiMockup />,
  iam:     <IamMockup />,
  data:    <DataMockup />,
}

export function ProtectionCard({item}) {

    const [hovered, setHovered] = useState(false)
    const {icon: Icon, color} = item 
    const colSpanClass = item.cols === 3 ? 'md:col-span-3' : 'md:col-span-2'
    
    return (
        <div className={`col-span-1 ${colSpanClass} rounded-2xl flex flex-col gap-4 transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden`}
            style={{
                ...(hovered ? glassHover : glass),
                background: `radial-gradient(ellipse at 0% 0%, ${color}18 0%, transparent 60%), ${hovered ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.04)'}`,
                boxShadow: hovered ? `0 0 32px ${color}18` : 'none',
                padding: '1.5rem',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >

            {/* Watermark */}
            <div className="pointer-events-none absolute -bottom-4 -right-4 opacity-[0.045]">
                <Icon size={110} strokeWidth={1} />
            </div>

            <div className="relative z-10 flex flex-col gap-4 flex-1">

                {/* Icon + eyebrow */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{
                            background: `${color}18`,
                            color,
                            border: `1px solid ${color}30`,
                            boxShadow: hovered ? `0 0 16px ${color}25` : 'none',
                            transition: 'box-shadow 0.3s ease',
                        }}
                    >
                        <Icon size={18} strokeWidth={1.75} />
                    </div>

                    <span className="text-xs font-semibold tracking-widest uppercase"
                        style={{ color: 'rgba(255,255,255,0.4)' }}
                    >
                        {item.eyebrow}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-white leading-snug">
                    {item.title}
                </h3>

                {/* Body */}
                <p className="text-sm leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.58)' }}
                >
                    {item.body}
                </p>

                {/* Highlights */}
                <div className="flex flex-col gap-1 5">
                    {item.highlights.map(h => (
                        <div key={h} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full shrink-0"
                                style={{ background: color, boxShadow: `0 0 6px ${color}80` }} />
                            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>{h}</span>
                        </div>
                    ))}
                </div>

                {/* Mockup */}
                {mockupMap[item.mockup]}
            </div>

        </div>
    )
}

// Services stuff
export function ServicesFeatureCard({feature}) {

    const [hovered, setHovered] = useState(false)
  const { icon: Icon, color, pill, eyebrow, headline, body, bullets, stats, span } = feature
 
  return (
    <div
      className={`col-span-1 md:col-span-${span} relative overflow-hidden flex flex-col transition-all duration-300 ${hovered ? "-translate-y-1" : ""}`}
      style={{
        background: `radial-gradient(ellipse at 0% 0%, ${color}18 0%, transparent 60%), ${hovered ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.04)'}`,
        boxShadow: hovered ? `0 0 32px ${color}18` : 'none',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 20,
        padding: '1.35rem',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Watermark */}
      <div aria-hidden="true" style={{ position: 'absolute', bottom: 12, right: 12, opacity: 0.04, color, zIndex: 0, pointerEvents: 'none' }}>
        <Icon size={90} />
      </div>
 
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
 
        {/* Header row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{
              width: 34, height: 34, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              background: `${color}18`, border: `1px solid ${color}28`, color,
              boxShadow: hovered ? `0 0 14px ${color}28` : 'none', transition: 'box-shadow 0.3s',
            }}>
              <Icon size={15} />
            </div>
            <span style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)' }}>
              {eyebrow}
            </span>
          </div>
          <span style={{ fontSize: '0.65rem', fontWeight: 600, padding: '3px 10px', borderRadius: 999, whiteSpace: 'nowrap', background: `${color}18`, border: `1px solid ${color}30`, color }}>
            {pill}
          </span>
        </div>
 
        {/* Headline + body */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <h3 style={{ margin: 0, fontSize: 'clamp(0.98rem, 2.5vw, 1.08rem)', fontWeight: 600, color: '#fff', lineHeight: 1.3 }}>
            {headline}
          </h3>
          <p style={{ margin: 0, fontSize: '0.8rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.52)' }}>
            {body}
          </p>
        </div>
 
        {/* Bullets */}
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
          {bullets.map(b => (
            <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem' }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', flexShrink: 0, marginTop: '0.38rem', background: color, boxShadow: `0 0 5px ${color}90` }} />
              <span style={{ fontSize: '0.78rem', lineHeight: 1.55, color: 'rgba(255,255,255,0.6)' }}>{b}</span>
            </li>
          ))}
        </ul>
 
        {/* Stats — vertical on mobile, row on md+ */}
        <div
          className="flex flex-col md:flex-row"
          style={{ marginTop: 'auto', paddingTop: '0.85rem', borderTop: '1px solid rgba(255,255,255,0.07)', gap: '0.4rem' }}
        >
          {stats.map(([val, lbl]) => (
            <div key={lbl} className="flex md:flex-col items-center md:items-start"
              style={{ flex: 1, borderRadius: 9, padding: '0.45rem 0.7rem', gap: '0.3rem', background: `${color}0d`, border: `1px solid ${color}1e` }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color, lineHeight: 1, whiteSpace: 'nowrap' }}>{val}</span>
              <span style={{ fontSize: '0.67rem', color: 'rgba(255,255,255,0.36)', lineHeight: 1, whiteSpace: 'nowrap' }}>{lbl}</span>
            </div>
          ))}
        </div>
 
      </div>

    </div>
  )
}