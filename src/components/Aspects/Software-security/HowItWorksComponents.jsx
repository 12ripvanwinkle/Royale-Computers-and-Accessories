import React, { useEffect, useState } from 'react'
import { glass, glassHover } from '../CCTV-Holder/CCTVStyles'
import { risks, Designlayers, ImplementationTasks, TestingSteps, MonitorEvents } from './index'

export function RiskMockup() {
    const [scanning, setScanning] = useState(0)

    useEffect(() => {
        const iv = setInterval(() => setScanning(s => (s + 1) % 4), 900)
        return () => clearInterval(iv)
    }, [])

    return (
        <div className="rounded-xl overflow-hidden mt-auto"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>risk-matrix.sh</span>
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#fbbf24' }} />
                    <span className="text-xs" style={{ color: '#fbbf24' }}>Analysing…</span>
                </div>
            </div>
            <div className="p-3 flex flex-col gap-2.5">
                {risks.map((r, i) => (
                    <div key={r.label}>
                        <div className="flex items-center justify-between mb-1">
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>{r.label}</span>
                        <span className="text-xs font-semibold px-1.5 py-0.5 rounded"
                            style={{ background: `${r.color}18`, color: r.color, border: `1px solid ${r.color}30` }}>
                            {r.level}
                        </span>
                        </div>
                        <div className="w-full h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                        <div className="h-full rounded-full transition-all duration-700"
                            style={{ width: i <= scanning ? `${r.w}%` : '0%', background: r.color, opacity: 0.75 }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function DesignMockup() {

    const [active, setActive] = useState(null)

    return(
        <div className="rounded-xl overflow-hidden mt-auto"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>security-architecture</span>
            </div>
            <div className="p-3 flex flex-col gap-1.5">
                {Designlayers.map((l, i) => (
                    <div key={l.label}
                        className="flex items-center gap-3 px-2.5 py-2 rounded-lg cursor-default transition-all duration-200"
                        style={{
                        background: active === i ? `${l.color}10` : 'rgba(255,255,255,0.03)',
                        border: `1px solid ${active === i ? l.color + '30' : 'rgba(255,255,255,0.07)'}`,
                        marginLeft: i * 6,
                        }}
                        onMouseEnter={() => setActive(i)}
                        onMouseLeave={() => setActive(null)}
                    >
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: l.color }} />
                        <span className="text-xs font-medium flex-1" style={{ color: 'rgba(255,255,255,0.7)' }}>{l.label}</span>
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{l.desc}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function ProcessImplementationMockup() {

    const [done, setDone] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setDone(d => d >= 5 ? 0 : d + 1), 1100)
        return () => clearInterval(iv)
    }, [])

    return(
        <div className="rounded-xl overflow-hidden mt-auto"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>deploy-checklist</span>
                <span className="text-xs" style={{ color: '#a78bfa' }}>{done}/{ImplementationTasks.length}</span>
            </div>
            <div className="p-3 flex flex-col gap-1.5">
                {ImplementationTasks.map((t, i) => (
                    <div key={t} className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i < done ? 'rgba(167,139,250,0.07)' : 'transparent' }}>
                        <div className="w-4 h-4 rounded flex items-center justify-center shrink-0 transition-all duration-300"
                        style={{
                            background: i < done ? 'rgba(167,139,250,0.2)' : 'rgba(255,255,255,0.06)',
                            border: `1px solid ${i < done ? 'rgba(167,139,250,0.4)' : 'rgba(255,255,255,0.12)'}`,
                        }}>
                        {i < done && (
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path d="M1.5 4L3 5.5L6.5 2" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )}
                        </div>
                        <span className="text-xs" style={{ color: i < done ? 'rgba(255,255,255,0.72)' : 'rgba(255,255,255,0.32)' }}>
                        {t}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function TestingMockup() {
    const [active, setActive] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setActive(a => (a + 1) % 5), 950)
        return () => clearInterval(iv) 
    }, [])

    return (
        <div className="rounded-xl overflow-hidden mt-auto"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>pentest-pipeline</span>
            </div>
            <div className="p-3 flex flex-col gap-0">
                {TestingSteps.map((s, i) => (
                    <div key={s.label} className="flex items-center gap-3 py-1.5">
                        <div className="flex flex-col items-center shrink-0" style={{ width: 10 }}>
                        <div className="w-2 h-2 rounded-full transition-all duration-300"
                            style={{
                            background: i < active ? '#4ade80' : i === active ? '#f87171' : 'rgba(255,255,255,0.15)',
                            boxShadow: i === active ? '0 0 6px #f87171' : 'none',
                            }} />
                        {i < TestingSteps.length - 1 && (
                            <div style={{ width: 1, height: 10, background: 'rgba(255,255,255,0.1)', marginTop: 2 }} />
                        )}
                        </div>
                        <span className="text-xs transition-all duration-300"
                        style={{ color: i < active ? '#4ade80' : i === active ? '#f87171' : 'rgba(255,255,255,0.28)' }}>
                        {s.label}
                        </span>
                        {i === active && (
                        <span className="ml-auto text-xs px-1.5 py-0.5 rounded"
                            style={{ background: 'rgba(248,113,113,0.12)', color: '#f87171', border: '1px solid rgba(248,113,113,0.25)' }}>
                            live
                        </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export function MonitorMockup() {

    const [tick, setTick] = useState(0)
    useEffect(() => {
       const iv = setInterval(() => setTick(t => t + 1), 750)
       return () => clearInterval(iv)     
    }, [])

    const bars = [30, 55, 40, 75, 50, 88, 62, 45, 70, 95, 60, 80]
    const activeRow = tick % MonitorEvents.length

    return (
        <div className="rounded-xl overflow-hidden mt-auto"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center gap-2"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <div className="w-2 h-2 rounded-full" style={{ background: '#4ade80', boxShadow: '0 0 5px #4ade8099' }} />
                <span className="text-xs" style={{ color: '#4ade80' }}>Live threat feed</span>
            </div>

            {/* Mini Sparkline */}
            <div className="px-3 pt-2 flex items-end gap-0.5" style={{height: 36}}>
                {bars.map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm transition-all duration-300"
                        style={{
                        height: `${h}%`,
                        background: i === bars.length - 1 ? '#4ade80' : 'rgba(74,222,128,0.25)',
                        borderRadius: 2,
                    }} />
                ))}
            </div>
            <div className="p-2 flex flex-col gap-0.5">
                {MonitorEvents.map((e, i) => (
                    <div key={e.label}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i === activeRow ? 'rgba(255,255,255,0.06)' : 'transparent' }}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: e.color }} />
                        <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.7)' }}>{e.label}</span>
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{e.time}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
