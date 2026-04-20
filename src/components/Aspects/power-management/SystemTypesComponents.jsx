import React, { useEffect, useState } from 'react'
import { readings } from './index'

export function Ups() {

    const [charge, setCharge] = useState(88)
    const [status, setStatus] = useState('On Battery')
    useEffect(() => {
        const iv = setInterval(() => {
            setCharge(c => {
                const next = Math.min(100, Math.max(10, c + (Math.random() > 0.4 ? 1 : -2)))
                setStatus(next > 80 ? 'Fully Charged' : next > 40 ? 'On Battery' : 'Low Battery')
                return next
            })
        }, 600)
        return () => clearInterval(iv)
    }, [])

    const color = charge > 70 ? '#4ade80' : charge > 30 ? '#fbbf24' : '#f87171'
    const segs = 12 
    const filled = Math.round((charge / 100) * segs)

    return(
        <div className="rounded-xl p-3 mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="flex items-center justify-between mb-3">
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>UPS Status</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}>
                    {status}
                </span>
            </div>
            <div className="flex items-cener gap-1 mb-2">
                {Array.from({ length: segs }).map((_, i) => (
                    <div key={i} className="flex-1 rounded-sm transition-all duration-300"
                        style={{ height: 14, background: i < filled ? color : 'rgba(255,255,255,0.08)' }} />
                ))}
                <div className="rounded-sm ml-0.5"
                    style={{width: 3, height: 8, background: 'rgba(255,255,255,0.2)'}}
                />
            </div>
            <div className="flex justify-between">
                <span className="text-xs font-bold text-white">{charge}%</span>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    ~{Math.round(charge * 1.2)}min runtime
                </span>
            </div>
        </div>
    )
}

export function Pdu() {
    const [outlets, setOutlets] = useState([
        { id: 'A1', load: 340, on: true },
        { id: 'A2', load: 120, on: true },
        { id: 'A3', load: 0,   on: false },
        { id: 'B1', load: 580, on: true },
        { id: 'B2', load: 210, on: true },
        { id: 'B3', load: 95,  on: true },
    ])
    useEffect(() => {
        const iv = setInterval(() => {
            setOutlets(prev => prev.map(o => ({
                ...o,
                load: o.on ? Math.max(50, Math.min(600, o.load + (Math.random() > 0.5 ? 15 : -15))) : 0
            })))
        }, 900)
        return () => clearInterval(iv)
    }, [])

    return (
        <div className="rounded-xl overflow-hidden mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >   
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace' }}>PDU — Rack A</span>
                <span className="text-xs" style={{ color: '#93c5fd' }}>
                    {outlets.filter(o => o.on).length}/{outlets.length} active
                </span>
            </div>
            <div className="p-2 grid grid-cols-3 gap-1.5">
                {outlets.map(o => (
                    <div key={o.id} className="rounded-lg px-2 py-1.5 flex flex-col gap-0.5"
                        style={{
                            background: o.on ? 'rgba(147,197,253,0.08)' : 'rgba(255,255,255,0.03)',
                            border: `1px solid ${o.on ? 'rgba(147,197,253,0.2)' : 'rgba(255,255,255,0.07)'}`,
                        }}>
                        <span className="text-xs font-mono" style={{ color: o.on ? '#93c5fd' : 'rgba(255,255,255,0.25)' }}>{o.id}</span>
                        <span className="text-xs" style={{ color: o.on ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.2)' }}>
                            {o.on ? `${o.load}W` : 'OFF'}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Ems() {

    const [tick, setTick] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setTick(t => t + 1), 700)
        return () => clearInterval(iv)
    },[])
    
    return(
        <div className="rounded-xl overflow-hidden mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center gap-2"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#4ade80', boxShadow: '0 0 4px #4ade8099' }} />
                <span className="text-xs" style={{ color: '#4ade80' }}>Live readings</span>
            </div>
            <div className="p-2 flex flex-col gap-1">
                {readings.map((r, i) => (
                    <div key={r.zone}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i === tick % 3 ? 'rgba(255,255,255,0.05)' : 'transparent' }}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: r.color }} />
                        <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.65)' }}>{r.zone}</span>
                        <span className="text-xs font-semibold" style={{ color: r.color }}>{r.kw} kW</span>
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{r.trend}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Generator() {

    const [rpm, setRpm] = useState(0)
    const [running, setRunning] = useState(false)
    useEffect(() => {
        const iv = setInterval(() => {
            setRunning(r => {
                const next = !r
                setRpm(next ? Math.floor(Math.random() * 400 + 1400) : 0)
                return next
            })
        }, 3000)
        return () => clearInterval(iv)
    }, [])
    useEffect(() => {
        if (!running) return
        const iv = setInterval(() => setRpm(r => Math.max(1200, Math.min(1800, r + (Math.random() > 0.5 ? 20 : -20)))), 300)
        return () => clearInterval(iv)
    }, [running])

    const pct = Math.round((rpm/1800) * 100)

    return(
        <div className="rounded-xl p-3 mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >   
            <div className="flex items-center justify-between mb-3">
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Generator</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{
                        background: running ? 'rgba(74,222,128,0.12)' : 'rgba(255,255,255,0.06)',
                        color: running ? '#4ade80' : 'rgba(255,255,255,0.35)',
                        border: `1px solid ${running ? 'rgba(74,222,128,0.3)' : 'rgba(255,255,255,0.1)'}`,
                    }}>
                    {running ? 'Running' : 'Standby'}
                </span>
            </div>
            {/* RPM Dial */}
            <div className="flex items-center gap-4">
                <div className="relative shrink-0" style={{width: 56, height: 56}}>
                    <svg viewBox="0 0 56 56" width="56" height="56">
                        <circle cx="28" cy="28" r="22" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
                        <circle cx="28" cy="28" r="22" fill="none"
                            stroke={running ? '#fbbf24' : 'rgba(255,255,255,0.15)'}
                            strokeWidth="4"
                            strokeDasharray={`${2 * Math.PI * 22}`}
                            strokeDashoffset={`${2 * Math.PI * 22 * (1 - pct / 100)}`}
                            strokeLinecap="round"
                            style={{ transition: 'stroke-dashoffset 0.3s', transformOrigin: '28px 28px', transform: 'rotate(-90deg)' }}
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold" style={{ color: running ? '#fbbf24' : 'rgba(255,255,255,0.3)', fontSize: 9 }}>
                            {running ? `${pct}%` : '—'}
                        </span>
                    </div>  
                </div>
                <div className="flex flex-col gap-1">
                    <div>
                        <div className="text-sm font-bold text-white">{running ? `${rpm} RPM` : '— RPM'}</div>
                        <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Engine speed</div>
                    </div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                        {running ? 'Auto-started on outage' : 'Awaiting trigger'}
                    </div>
                </div>
            </div>
        </div>  
    )
}

