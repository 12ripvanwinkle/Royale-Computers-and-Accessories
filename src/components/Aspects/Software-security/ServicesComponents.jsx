import { useState, useEffect } from "react"
import {checks, steps, tasks, events} from './index'

export function AssessmentMockup() {

    const [scanning, setScanning] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setScanning(s => (s + 1) % 5), 900)
        return () => clearInterval(iv)
    }, [])

    return (
        <div className="rounded-xl overflow-hidden mt-auto"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>
                    risk-assessment.sh
                </span>
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#fbbf24' }} />
                    <span className="text-xs" style={{ color: '#fbbf24' }}>Scanning…</span>
                </div>
            </div>
            <div className="p-3 flex flex-col gap-2">
                {checks.map((c, i) => (
                    <div key={c.label}>
                        <div className="flex items-center justify-between mb-1">
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>{c.label}</span>
                        <span className="text-xs font-semibold" style={{ color: c.color }}>{c.score}</span>
                        </div>
                        <div className="w-full h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                        <div className="h-full rounded-full transition-all duration-700"
                            style={{
                            width: i <= scanning ? `${c.score}%` : '0%',
                            background: c.color,
                            opacity: 0.8,
                            }} />
                        </div>
                    </div>
                ))}  
            </div>
        </div>
    )
}

export function PenTestMockup() {
    const [active, setActive] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setActive(a => (a + 1) % 5), 1000)
        return () => clearInterval(iv)
    }, [])

    const statusStyle = (s, i) => {
        if (i < active) return { color: '#4ade80' }
        if (i === active) return { color: '#f87171' }
        return { color: 'rgba(255,255,255,0.28)' }
    }

    const dot = (s, i) => {
        if (i < active) return '#4ade80'
        if (i === active) return '#f87171'
        return 'rgba(255,255,255,0.2)'
    }

    return (
        <div className="rounded-xl overflow-hidden mt-auto"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <span className="text-xs">
                    Pentest-Pipeline
                </span>
            </div>
            <div className="p-3 flex flex-col gap-0">
                {steps.map((s, i) => (
                    <div key={s.label} className="flex items-center gap-3 py-1.5">
                        <div className="flex flex-col items-center shrink-0" style={{ width: 10 }}>
                        <div className="w-2 h-2 rounded-full transition-all duration-300"
                            style={{ background: dot(s.status, i), boxShadow: i === active ? `0 0 6px ${dot(s.status, i)}` : 'none' }} />
                        {i < steps.length - 1 && (
                            <div className="w-px flex-1 mt-0.5" style={{ height: 10, background: 'rgba(255,255,255,0.1)' }} />
                        )}
                        </div>
                        <span className="text-xs transition-all duration-300" style={statusStyle(s.status, i)}>
                        {s.label}
                        </span>
                        {i === active && (
                        <span className="text-xs ml-auto px-1.5 py-0.5 rounded"
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

export function ImplementationMockup(){

    const [done, setDone] = useState(2)
    useEffect(() => {
      const iv = setInterval(() => setDone(d => d >= 5 ? 0 : d + 1), 1400)
      return () => clearInterval(iv)
    }, [])

    return (
        <div className="rounded-xl overflow-hidden mt-auto"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>
                    Deployment Check list
                </span>
                <span className="text-xs"
                    style={{color: '#a78bfa'}}
                >
                    {done}/5 complete
                </span>
            </div>
            <div className="p-3 flex flex-col gap-1.5">
                {tasks.map((t, i) => (
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
                        <span className="text-xs transition-all duration-300"
                        style={{ color: i < done ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.35)', textDecoration: i < done ? 'none' : 'none' }}>
                        {t}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
} 

export function MonitoringMockup() {
    const [tick, setTick] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setTick(t => t + 1), 800)
        return () => clearInterval(iv)
    })

    const activeRow = tick % events.length

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
            <div className="p-2 flex flex-col gap-1">
                {events.map((e, i) => (
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