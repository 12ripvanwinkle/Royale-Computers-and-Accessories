import React, { useEffect, useState } from 'react'
import { ShieldAlert } from 'lucide-react'


export function EnergyHero() {
    const [val, setVal] = useState(72)
    useEffect(() => {
        const iv = setInterval(() => setVal(v => Math.min(99, Math.max(50, v + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 4)))), 900)
        return () => clearInterval(iv)
    }, [])
    const bars = [55, 70, 45, 80, 60, 90, 65, 78, 50, 85, 72, val]
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-end gap-3">
                <span className="font-black text-white leading-none" style={{ fontSize: 64 }}>{val}</span>
                <div className="mb-2">
                    <div className="text-sm font-semibold" style={{color: '#4ade80'}}>kWh</div>
                    <div className="text-xs" style={{color: 'rgba(255,255,255,0.4)'}}>Live Draw</div>
                </div>
                <div className="mb-2 ml-auto flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#4ade80', boxShadow: '0 0 6px #4ade8099' }} />
                    <span className="text-xs" style={{ color: '#4ade80' }}>Live</span>
                </div>
            </div>
            <div className="flex items-end gap-1" style={{height: 52}}>
                {bars.map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm transition-all duration-500"
                        style={{
                            height: `${h}%`,
                            background: i === bars.length - 1 ? 'linear-gradient(180deg,#4ade80,#22c55e)' : `rgba(74,222,128,${0.12 + (i / bars.length) * 0.28})`,
                            borderRadius: 3,
                        }} />
                ))}
            </div>
            <div className="grid grid-cols-3 gap-2">
                {[
                    { label: 'Peak today', value: '94 kWh', color: '#fbbf24' },
                    { label: 'Avg load',   value: '68 kWh', color: '#93c5fd' },
                    { label: 'Savings',    value: '−18%',   color: '#4ade80' },
                ].map(s => (
                    <div key={s.label} className="rounded-xl p-2.5 text-center"
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <div className="text-sm font-bold" style={{ color: s.color }}>{s.value}</div>
                        <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.38)' }}>{s.label}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Backup() {
    const [charge, setCharge] = useState(67)
    useEffect(() => {
        const iv = setInterval(() => setCharge(c => c >= 100 ? 40 : c + 1), 180)
        return () => clearInterval(iv)
    }, [])
    const segs = 10
    const filled = Math.round((charge / 100) * segs)
    const color = charge > 70 ? '#4ade80' : charge > 30 ? '#fbbf24' : '#f87171'
    return (
        <div className="flex flex-col items-center gap-3 mt-auto">
            <div className="flex items-center gap-1">
                <div className="rounded-lg p-2 flex items-center gap-1"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
                    {Array.from({ length: segs }).map((_, i) => (
                        <div key={i} className="rounded-sm transition-all duration-200"
                            style={{ width: 8, height: 20, background: i < filled ? color : 'rgba(255,255,255,0.08)' }} />
                    ))}
                </div>
                <div className="rounded-sm" style={{ width: 4, height: 10, background: 'rgba(255,255,255,0.2)' }} />
            </div>
            <div className="text-center">
                <div className="text-2xl font-bold text-white">{charge}%</div>
                <div className="text-xs" style={{ color }}>Charging</div>
            </div>
        </div>
    )
}

export function Surge() {
    const [blocked, setBlocked] = useState(4)
    useEffect(() => {
        const iv = setInterval(() => setBlocked(b => b + (Math.random() > 0.7 ? 1 : 0)), 1400)
        return () => clearInterval(iv)
    }, [])
    return (
        <div className="flex flex-col items-center justify-center gap-2 mt-auto">
            <div className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(248,113,113,0.12)', border: '2px solid rgba(248,113,113,0.3)' }}>
                <ShieldAlert size={24} color="#f87171" />
            </div>
            <div className="text-center">
                <div className="text-2xl font-bold text-white">{blocked}</div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>Surges Blocked Today</div>
            </div>
            <span className="text-xs px-2.5 py-1 rounded-full"
                style={{ background: 'rgba(74,222,128,0.1)', color: '#4ade80', border: '1px solid rgba(74,222,128,0.25)' }}>
                All Systems Protected
            </span>
        </div>
    )
}

export function Load() {
    const [loads, setLoads] = useState([78, 45, 62])
    useEffect(() => {
        const iv = setInterval(() => setLoads(l => l.map(v => Math.min(99, Math.max(20, v + (Math.random() > 0.5 ? 2 : -2))))), 800)
        return () => clearInterval(iv)
    }, [])
    const labels = ['Phase A', 'Phase B', 'Phase C']
    const colors = ['#93c5fd', '#a78bfa', '#5eead4']
    return (
        <div className="rounded-xl p-3 mt-auto"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="flex flex-col gap-2.5">
                {labels.map((l, i) => (
                    <div key={l}>
                        <div className="flex justify-between mb-1">
                            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{l}</span>
                            <span className="text-xs font-semibold" style={{ color: colors[i] }}>{loads[i]}%</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                            <div className="h-full rounded-full transition-all duration-500"
                                style={{ width: `${loads[i]}%`, background: colors[i], opacity: 0.8 }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Analytics() {
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
    const vals = [60, 80, 55, 90, 70, 45, 75]
    return (
        <div className="rounded-xl p-3 mt-auto"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="flex items-end gap-1.5" style={{ height: 52 }}>
                {vals.map((v, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full rounded-sm"
                            style={{ height: `${v}%`, background: i === 3 ? '#fbbf24' : 'rgba(251,191,36,0.28)', borderRadius: 3 }} />
                        <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)' }}>{days[i]}</span>
                    </div>
                ))}
            </div>
            <div className="flex gap-4 mt-2.5">
                <div>
                    <div className="text-sm font-bold text-white">8.4k</div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>kWh / week</div>
                </div>
                <div>
                    <div className="text-sm font-bold" style={{ color: '#4ade80' }}>−12%</div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>vs last week</div>
                </div>
            </div>
        </div>
    )
}

export function Remote() {
    const [ping, setPing] = useState(24)
    const [active, setActive] = useState(0)
    useEffect(() => {
        const iv1 = setInterval(() => setPing(p => Math.max(10, Math.min(80, p + (Math.random() > 0.5 ? 3 : -3)))), 700)
        const iv2 = setInterval(() => setActive(a => (a + 1) % 4), 1000)
        return () => { clearInterval(iv1); clearInterval(iv2) }
    }, [])
    const sites = ['HQ — Floor 1', 'Warehouse B', 'Server Room', 'Retail Unit']
    return (
        <div className="rounded-xl overflow-hidden mt-auto"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="px-3 py-2 flex items-center justify-between"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#4ade80', boxShadow: '0 0 4px #4ade8099' }} />
                    <span className="text-xs" style={{ color: '#4ade80' }}>Online</span>
                </div>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>{ping}ms</span>
            </div>
            <div className="p-2 flex flex-col gap-0.5">
                {sites.map((s, i) => (
                    <div key={s} className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i === active ? 'rgba(167,139,250,0.08)' : 'transparent' }}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#4ade80' }} />
                        <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.65)' }}>{s}</span>
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.28)' }}>live</span>
                    </div>
                ))}
            </div>
        </div>
    )
}