import React, { useState, useEffect, use } from 'react'
import { customers, stages, flows, tasks, 
     MarketingFlows, tickets, 
} from './index'

export function CustomerDb() {

    const [active, setActive] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setActive(a => (a + 1) % 4), 1100)
        return () => clearInterval(iv)
    }, [])

    return (
        <div className="rounded-xl overflow-hidden mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Customer records</span>
                <span className="text-xs" style={{ color: '#93c5fd' }}>1,284 total</span>
            </div>

            <div className="p-2 flex flex-col gap-1">
                {customers.map((c, i) => (
                    <div key={c.name}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i === active ? 'rgba(255,255,255,0.05)' : 'transparent' }}>
                        <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold"
                            style={{ background: `${c.color}18`, color: c.color, border: `1px solid ${c.color}30` }}>
                            {c.name[0]}
                        </div>
                        <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.7)' }}>{c.name}</span>
                        <span className="text-xs px-1.5 py-0.5 rounded"
                            style={{ background: `${c.color}12`, color: c.color, border: `1px solid ${c.color}25`, fontSize: 9 }}>
                            {c.segment}
                        </span>
                        <span className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.55)' }}>{c.value}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Sales() {

    const [vals, setVals] = useState([40, 55, 38, 70, 52, 80, 63, 75, 48, 88, 67, 74])
    const [total, setTotal] = useState(184200)

    useEffect(() => {
        const iv1 = setInterval(() => {
            setVals(v => [...v.slice(1), Math.max(20, Math.min(99, v[v.length - 1] + (Math.random() > 0.5 ? 6 : -6)))])
        }, 700)
        const iv2 = setInterval(() => setTotal(t => t + Math.floor(Math.random() * 500)), 1500)
        return () => { clearInterval(iv1); clearInterval(iv2) }
    }, [])

    return (
        <div className="rounded-xl p-3 mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="flex items-end gap-2 mb-3">
                <div className="">
                    <div className="text-2xl font-black text-white leading-none">
                        ${(total / 1000).toFixed(1)}k
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>Revenue this month</div>
                </div>
                <div className="mb-1 ml-auto">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: 'rgba(74,222,128,0.12)', color: '#4ade80', border: '1px solid rgba(74,222,128,0.25)' }}>
                        +22% vs last month
                    </span>
                </div>
            </div>
            <div className="flex items-end gap-0.5" style={{height: 40}}>
                {vals.map((v, i) => (
                    <div key={i} className="flex-1 rounded-sm transition-all duration-500"
                        style={{
                            height: `${v}%`,
                            background: i === vals.length - 1 ? '#4ade80' : `rgba(74,222,128,${0.15 + (i / vals.length) * 0.3})`,
                            borderRadius: 2,
                        }} />
                ))}
            </div>
        </div>
    )
}

export function Lead() {

    const [tick, setTick] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setTick(t => t + 1), 1000)
        return () => clearInterval(iv)
    }, [])

    return(
        <div className="rounded-xl overflow-hidden mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Pipeline stages</span>
                <span className="text-xs" style={{ color: '#fbbf24' }}>62 active leads</span>

            </div>
            <div className="p-3 flex flex-col gap-2">
                {stages.map((s, i) => (
                    <div key={s.label}
                        className="transition-all duration-300"
                        style={{ opacity: i === tick % stages.length ? 1 : 0.7 }}>
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>{s.label}</span>
                            <span className="text-xs font-semibold" style={{ color: s.color }}>{s.count}</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                            <div className="h-full rounded-full transition-all duration-500"
                                style={{ width: `${s.w}%`, background: s.color, opacity: 0.8 }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Marketing() {

    const [step, setStep] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setStep(s => (s + 1) % 4), 1200)
        return () => clearInterval(iv)
    }, [])

    return(
        <div className="rounded-xl overflow-hidden mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>automation-flow</span>
            </div>

            <div className="p-3 flex flex-col gap-0">
                {flows.map((f, i) => (
                    <div key={f.label} className="flex items-center gap-3 py-1.5">
                        <div className="flex flex-col items-center shrink-0" style={{ width: 10 }}>
                            <div className="w-2 h-2 rounded-full transition-all duration-300"
                                style={{
                                    background: i < step ? '#4ade80' : i === step ? f.color : 'rgba(255,255,255,0.15)',
                                    boxShadow: i === step ? `0 0 6px ${f.color}` : 'none',
                                }} />
                            {i < flows.length - 1 && (
                                <div style={{ width: 1, height: 10, background: 'rgba(255,255,255,0.1)', marginTop: 2 }} />
                            )}
                        </div>
                        <span className="text-xs flex-1 transition-all duration-300"
                            style={{ color: i < step ? '#4ade80' : i === step ? f.color : 'rgba(255,255,255,0.3)' }}>
                            {f.label}
                        </span>
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.25)', fontSize: 10 }}>{f.trigger}</span>
                        {i === step && (
                            <span className="text-xs px-1.5 py-0.5 rounded"
                                style={{ background: `${f.color}12`, color: f.color, border: `1px solid ${f.color}25`, fontSize: 9 }}>
                                live
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Reporting() {
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
    const deals  = [4, 7, 5, 9, 6, 3, 8]
    const leads  = [12, 18, 14, 22, 16, 8, 20]

    return(
        <div className="rounded-xl p-3 mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="flex items-center justify-between mb-3">
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Weekly performance</span>
                <div className="flex items-center gap-3">
                    {[{ label: 'Leads', color: '#93c5fd' }, { label: 'Deals', color: '#4ade80' }].map(l => (
                        <div key={l.label} className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-sm" style={{ background: l.color }} />
                            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{l.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex items-end gap-1.5" style={{height: 52}}>
                  {days.map((d, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full flex items-end gap-0.5" style={{ height: 44 }}>
                            <div className="flex-1 rounded-sm"
                                style={{ height: `${(leads[i] / 22) * 100}%`, background: 'rgba(147,197,253,0.4)', borderRadius: 2 }} />
                            <div className="flex-1 rounded-sm"
                                style={{ height: `${(deals[i] / 9) * 100}%`, background: '#4ade80', opacity: 0.75, borderRadius: 2 }} />
                        </div>
                        <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)' }}>{d}</span>
                    </div>
                ))}  
            </div>
            
            <div className="flex gap-4 mt-2 pt-2" style={{borderTop: '1px solid rgba(255,255,255,0.07)'}}>
                <div>
                    <div className="text-sm font-bold text-white">110</div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Leads this wk</div>
                </div>
                <div>
                    <div className="text-sm font-bold" style={{ color: '#4ade80' }}>42</div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Deals closed</div>
                </div>
                <div>
                    <div className="text-sm font-bold" style={{ color: '#fbbf24' }}>38%</div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Conv. rate</div>
                </div>
            </div>
        </div>
    )
}

export function Workflow() {
    const [done, setDone] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setDone(d => d >= 4 ? 0 : d + 1), 1000)
        return () => clearInterval(iv)
    }, [])

    return (
        <div className="rounded-xl overflow-hidden mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>workflow-engine</span>
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#fbbf24' }} />
                    <span className="text-xs" style={{ color: '#fbbf24' }}>Running</span>
                </div>
            </div>

            <div className="p-3 flex flex-col gap-1.5">
                {tasks.map((t, i) => (
                    <div key={t.label} className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i < done ? 'rgba(251,191,36,0.07)' : 'transparent' }}>
                        <div className="w-4 h-4 rounded flex items-center justify-center shrink-0 transition-all duration-300"
                            style={{
                                background: i < done ? 'rgba(251,191,36,0.2)' : 'rgba(255,255,255,0.06)',
                                border: `1px solid ${i < done ? 'rgba(251,191,36,0.4)' : 'rgba(255,255,255,0.12)'}`,
                            }}>
                            {i < done && (
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                                    <path d="M1.5 4L3 5.5L6.5 2" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )}
                        </div>
                        <span className="text-xs transition-all duration-300"
                            style={{ color: i < done ? 'rgba(255,255,255,0.72)' : 'rgba(255,255,255,0.32)' }}>
                            {t.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function SalesVisual() {
    const [vals, setVals] = useState([38, 52, 44, 68, 55, 78, 62, 74, 48, 85, 66, 72])
    const [total, setTotal] = useState(248600)
    useEffect(() => {
        const iv1 = setInterval(() => {
            setVals(v => [...v.slice(1), Math.max(20, Math.min(99, v[v.length - 1] + (Math.random() > 0.5 ? 7 : -7)))])
        }, 650)
        const iv2 = setInterval(() => setTotal(t => t + Math.floor(Math.random() * 500 + 100)), 1200)
        return () => { clearInterval(iv1); clearInterval(iv2) }
    }, [])

    return (
        <div className="flex-1 flex flex-col justify-center gap-3 mb-6">
            {/* live number */}

            <div className="flex items-center gap-3">
                <span className="font-black text-white leading-none" style={{ fontSize: 56 }}>
                    ${(total / 1000).toFixed(1)}k
                </span>
                <span className="mb-1 text-xs font-semibold px-2 py-1 rounded-full"
                    style={{ background: 'rgba(74,222,128,0.12)', color: '#4ade80', border: '1px solid rgba(74,222,128,0.25)' }}>
                    +22% ↑
                </span>
            </div>

            {/* Sparkline */}
            <div className="flex item-end gap-0.5" style={{height: 48}}>
                {vals.map((v, i) => (
                    <div key={i} className="flex-1 rounded-sm transition-all duration-500"
                        style={{
                            height: `${v}%`,
                            background: i === vals.length - 1 ? '#4ade80' : `rgba(74,222,128,${0.08 + (i / vals.length) * 0.32})`,
                            borderRadius: 2,
                        }} />
                ))}
            </div>

            {/* Stage Chips */}
            <div className="flex gap-2">
                {[
                    { label: 'Prospecting', count: 32, color: '#93c5fd' },
                    { label: 'Proposal',    count: 14, color: '#a78bfa' },
                    { label: 'Closing',     count: 7,  color: '#4ade80' },
                ].map(s => (
                    <div key={s.label} className="flex-1 rounded-xl px-2 py-1.5 text-center"
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <div className="text-xs font-bold" style={{ color: s.color }}>{s.count}</div>
                        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)', marginTop: 1 }}>{s.label}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function MarketingVisual() {
    const [step, setStep] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setStep(s => (s + 1) % 4), 1100)
        return () => clearInterval(iv)
    }, [])

    return (
        <div className="flex-1 flex flex-col justify-center mb-6">
            <div className="rounded-xl overflow-hidden"
                style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
            >
                <div className="px-3 py-2 flex items-center gap-2"
                    style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
                >       
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#5eead4' }} />
                    <span className="text-xs" style={{ color: '#5eead4' }}>Automation running</span>

                </div>

                <div className="p-3 flex flex-col gap-0">
                    {MarketingFlows.map((f, i) => (
                        <div key={f.label} className="flex items-center gap-2.5 py-2">
                            <div className="flex flex-col items-center shrink-0" style={{ width: 10 }}>
                                <div className="w-2 h-2 rounded-full transition-all duration-300"
                                    style={{
                                        background: i < step ? '#4ade80' : i === step ? f.color : 'rgba(255,255,255,0.15)',
                                        boxShadow: i === step ? `0 0 6px ${f.color}` : 'none',
                                    }} />
                                {i < flows.length - 1 && (
                                    <div style={{ width: 1, height: 12, background: 'rgba(255,255,255,0.1)', marginTop: 2 }} />
                                )}
                            </div>
                            <span className="text-xs flex-1 transition-all duration-300"
                                style={{ color: i < step ? '#4ade80' : i === step ? f.color : 'rgba(255,255,255,0.28)' }}>
                                {f.label}
                            </span>
                            {i === step && (
                                <span className="text-xs px-1.5 py-0.5 rounded"
                                    style={{ background: `${f.color}12`, color: f.color, border: `1px solid ${f.color}25`, fontSize: 9 }}>
                                    live
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export function SupportVisual() {
    const [tick, setTick] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setTick(t => t + 1), 950)
        return () => clearInterval(iv)
    }, [])

    return (
        <div className="flex-1 flex flex-col justify-center mb-6">
            <div className="rounded-xl overflow-hidden"
                style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
            >
                <div className="px-3 py-2 flex items-center justify-between"
                    style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
                >
                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Support queue</span>
                    <span className="text-xs" style={{ color: '#f87171' }}>2 open</span>

                </div>

                <div className="p-2 flex flex-col gap-0.5">
                    {tickets.map((t, i) => (
                        <div key={t.id}
                            className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
                            style={{ background: i === tick % tickets.length ? 'rgba(255,255,255,0.05)' : 'transparent' }}>
                            <span className="text-xs font-mono shrink-0" style={{ color: 'rgba(255,255,255,0.28)', fontSize: 10, minWidth: 36 }}>{t.id}</span>
                            <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.65)' }}>{t.subject}</span>
                            <span className="text-xs px-1.5 py-0.5 rounded"
                                style={{ background: `${t.color}12`, color: t.color, border: `1px solid ${t.color}25`, fontSize: 9 }}>
                                {t.status}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export function AnalyticsVisual() {
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
    const leads = [12, 18, 14, 22, 16, 8, 20]
    const deals = [4,  7,  5,  9,  6,  3,  8]

    return (
        <div className="flex-1 flex flex-col justify-center mb-6">
            <div className="rounded-xl p-3"
                style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
            >
                <div className="flex item-center justify-between mb-3">
                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Weekly performance</span>
                    <div className="flex items-center gap-3">
                        {[{ l: 'Leads', c: '#93c5fd' }, { l: 'Deals', c: '#fbbf24' }].map(x => (
                            <div key={x.l} className="flex items-center gap-1">
                                <div className="w-2 h-2 rounded-sm" style={{ background: x.c }} />
                                <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)' }}>{x.l}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex items-end gap-1.5" style={{height: 52}}>
                     {days.map((d, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                            <div className="w-full flex items-end gap-0.5" style={{ height: 44 }}>
                                <div className="flex-1 rounded-sm"
                                    style={{ height: `${(leads[i] / 22) * 100}%`, background: 'rgba(147,197,253,0.35)', borderRadius: 2 }} />
                                <div className="flex-1 rounded-sm"
                                    style={{ height: `${(deals[i] / 9) * 100}%`, background: '#fbbf24', opacity: 0.75, borderRadius: 2 }} />
                            </div>
                            <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)' }}>{d}</span>
                        </div>
                    ))}   
                </div>

                <div className="flex gap-4 mt-2.5 pt-2" style={{borderTop: '1px solid rgba(255,255,255,0.07)'}}>
                    <div>
                        <div className="text-sm font-bold text-white">110</div>
                        <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Leads</div>
                    </div>
                    <div>
                        <div className="text-sm font-bold" style={{ color: '#fbbf24' }}>42</div>
                        <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Deals</div>
                    </div>
                    <div>
                        <div className="text-sm font-bold" style={{ color: '#4ade80' }}>38%</div>
                        <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Conv.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

