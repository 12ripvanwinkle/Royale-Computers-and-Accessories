import React, { useEffect, useState } from 'react'
import { glass, glassHover } from '../CCTV-Holder/CCTVStyles'
import {checks, tasks, feeds, schedule, services} from './index'

export function Audit() {
    const [scanning, setScanning] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setScanning(s => (s + 1) % 5), 800)
        return () => clearInterval(iv)
    }, [])


    return(
        <div className="rounded-xl overflow-hidden mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center justify-center"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >   
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>energy-audit.sh</span>
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#fbbf24' }} />
                    <span className="text-xs" style={{ color: '#fbbf24' }}>Scanning…</span>
                </div>
            </div>
            <div className="p-3 flex flex-col gap-2.5">
                {checks.map((c, i) => (
                    <div key={c.label}>
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>{c.label}</span>
                            <span className="text-xs font-semibold" style={{ color: c.color }}>{c.score}</span>
                        </div>
                        <div className="w-full h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                            <div className="h-full rounded-full transition-all duration-700"
                                style={{ width: i <= scanning ? `${c.score}%` : '0%', background: c.color, opacity: 0.75 }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Install(){

    const [done, setDone] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setDone(d => d >= 5 ? 0 : d + 1), 1100)
        return () => clearInterval(iv)
    }, [])

    return(
        <div className="rounded-xl overflow-hidden mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>install-checklist</span>
                <span className="text-xs" style={{ color: '#93c5fd' }}>{done}/{tasks.length} done</span>
            </div>
            <div className="p-3 flex flex-col gap-1.5">
                {tasks.map((t, i) => (
                    <div key={t} className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i < done ? 'rgba(147,197,253,0.07)' : 'transparent' }}>
                        <div className="w-4 h-4 rounded flex items-center justify-center shrink-0 transition-all duration-300"
                            style={{
                                background: i < done ? 'rgba(147,197,253,0.2)' : 'rgba(255,255,255,0.06)',
                                border: `1px solid ${i < done ? 'rgba(147,197,253,0.4)' : 'rgba(255,255,255,0.12)'}`,
                            }}>
                            {i < done && (
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                                    <path d="M1.5 4L3 5.5L6.5 2" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )}
                        </div>
                        <span className="text-xs transition-all duration-300"
                            style={{ color: i < done ? 'rgba(255,255,255,0.72)' : 'rgba(255,255,255,0.32)' }}>
                            {t}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Monitor() {

    const [tick, setTick] = useState(0)
    const [ping, setPing] = useState(18)

    useEffect(() => {
        const iv1 = setInterval(() => setTick(t => t + 1), 900)
        const iv2 = setInterval(() => setPing(p => Math.max(10, Math.min(60, p + (Math.random() > 0.5 ? 3 : -3)))), 700)
        return () => { clearInterval(iv1); clearInterval(iv2) }
    }, [])
    
    return (
        <div className="rounded-xl overflow-hidden mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full" style={{ background: '#4ade80', boxShadow: '0 0 5px #4ade8099' }} />
                    <span className="text-xs" style={{ color: '#4ade80' }}>Dashboard live</span>
                </div>

                <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.3)' }}>{ping}ms</span>
            </div>
            <div className="p-2 flex flex-col gap-0.5">
                {feeds.map((f, i) => (
                    <div key={f.label}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i === tick % feeds.length ? 'rgba(255,255,255,0.05)' : 'transparent' }}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: f.color }} />
                        <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.65)' }}>{f.label}</span>
                        <span className="text-xs font-medium" style={{ color: f.color }}>{f.status}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Maintenance() {

    const [active, setActive] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setActive(a => (a + 1) % 4), 1200)
        return () => clearInterval(iv)
    }, [])

    return (
        <div className="rounded-xl overview-hidden mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Maintenance schedule</span>
                <span className="text-xs" style={{ color: '#f87171' }}>1 due today</span>
            </div>
            <div className="p-2 flex flex-col gap-1">
                {schedule.map((s, i) => (
                    <div key={s.task}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i === active ? 'rgba(255,255,255,0.05)' : 'transparent' }}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: s.color }} />
                        <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.65)' }}>{s.task}</span>
                        <span className="text-xs" style={{ color: s.color }}>{s.due}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

function Card({ children }) {

    const [hovered, setHovered] = useState(false)

    return(
        <div className="rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
            style={hovered ? glassHover : glass}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >   
            {children}
        </div>
    )
}

function StatPill({ value, label, accent}) {
    return (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full self-start"
            style={{background: `${accent}12`, border: `1px solid ${accent}30`}}
        >
            <span className="text-xs font-bold" style={{ color: accent }}>{value}</span>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{label}</span>
        </div>
    )
}

const Services = () => {
  return (
    <div className="w-full px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="text-center mb-12">
                <p className="text-xs font-semibold tracking-widest upperecase mb-4"
                    style={{color: 'rgba(255,255,255,0.45)'}}
                >
                    What We Do
                </p>
                <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
                    Services
                </h2>
                <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
                    style={{color: 'rgba(255,255,255,0.55)'}}
                >
                    From the first audit to long-term maintenance — we cover every phase
                    of your power infrastructure lifecycle.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map(s => {
                    const IconComp = s.icon
                    const MockupComp = s.mockup
                        return (
                            <Card key={s.id}>
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                            style={{ background: `${s.accent}18`, color: s.accent, border: `1px solid ${s.accent}30` }}>
                                            <IconComp size={18} />
                                        </div>
                                        <span className="text-xs font-semibold tracking-widest uppercase"
                                            style={{ color: 'rgba(255,255,255,0.4)' }}>
                                            {s.eyebrow}
                                        </span>
                                    </div>
                                    <span className="font-black select-none"
                                        style={{ fontSize: 36, color: 'rgba(255,255,255,0.06)', lineHeight: 1, fontFamily: 'monospace' }}>
                                        {String(s.id).padStart(2, '0')}
                                    </span>
                                </div>

                                <h3 className="text-lg font-semibold text-white leading-snug">{s.title}</h3>

                                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.58)' }}>
                                    {s.description}
                                </p>

                                <StatPill value={s.stat.value} label={s.stat.label} accent={s.accent} />

                                <div className="flex flex-col gap-1.5">
                                    {s.highlights.map(h => (
                                        <div key={h} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: s.accent }} />
                                            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>{h}</span>
                                        </div>
                                    ))}
                                </div>

                            <MockupComp />
                        </Card>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Services