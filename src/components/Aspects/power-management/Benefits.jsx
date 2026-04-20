import React, { useEffect, useState } from 'react'
import { glass, glassHover } from '../CCTV-Holder/CCTVStyles'
import { threats, benefits} from './index'

export function Cost() {

    const months = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const before = [92, 95, 88, 97, 91, 94]
    const after = [92, 85, 76, 68, 61, 55]

    return(
        <div className="rounded-xl p-3 mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="flex items-center justify-between mb-3">
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Monthly energy spend</span>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-sm" style={{ background: 'rgba(255,255,255,0.25)' }} />
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>Before</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-sm" style={{ background: '#4ade80' }} />
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>After</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-2" style={{ height: 56}}>
                {months.map((m, i) => (
                    <div key={m} className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full flex items-end gap-0.5" style={{ height: 48 }}>
                            <div className="flex-1 rounded-sm"
                                style={{ height: `${before[i]}%`, background: 'rgba(255,255,255,0.12)', borderRadius: 3 }} />
                            <div className="flex-1 rounded-sm transition-all duration-500"
                                style={{ height: `${after[i]}%`, background: '#4ade80', opacity: 0.8, borderRadius: 3 }} />
                        </div>
                        <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.28)' }}>{m}</span>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-between mt-2 px-0.5">
                <span className="text-xs font-bold" style={{ color: '#4ade80' }}>−42% avg reduction</span>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>over 6 months</span>
            </div>
        </div>
    )
}

export function Downtime() {
    const [uptime, setUptime] = useState(99.97)
    const [events, setEvents] = useState([
        { label: 'Mains failure detected', time: '09:14', resolved: true },
        { label: 'UPS switched in <8ms', time: '09:14', resolved: true },
        { label: 'Generator online', time: '09:15', resolved: true },
    ])
    useEffect(() => {
        const iv = setInterval(() => setUptime(u => parseFloat(Math.min(99.99, u + 0.001).toFixed(3))), 1200)
        return () => clearInterval(iv)
    }, [])

    return(
        <div className="rounded-xl overflow-hidden mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full" style={{ background: '#4ade80', boxShadow: '0 0 5px #4ade8099' }} />
                    <span className="text-xs" style={{ color: '#4ade80' }}>Systems online</span>
                </div>
                <span className="text-xs font-bold" style={{ color: '#4ade80' }}>{uptime}% uptime</span>
            </div>
            <div className="p-2 flex flex-col gap-1">
                {events.map((e, i) => (
                    <div key={e.label} className="flex items-center gap-2 px-2 py-1.5 rounded-lg"
                        style={{ background: 'rgba(74,222,128,0.05)' }}>
                        <svg width="12" height="12" viewBox="0 0 12 12">
                            <circle cx="6" cy="6" r="5" fill="rgba(74,222,128,0.15)" stroke="rgba(74,222,128,0.4)" strokeWidth="1" />
                            <path d="M3.5 6L5 7.5L8.5 4" stroke="#4ade80" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.65)' }}>{e.label}</span>
                        <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.3)' }}>{e.time}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Protection(){

    const [tick, setTick] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setTick(t => t + 1), 900)
        return () => clearInterval(iv)
    }, [])

    return(
        <div className="rounded-xl overflow-hidden mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Threat log — today</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(74,222,128,0.1)', color: '#4ade80', border: '1px solid rgba(74,222,128,0.25)' }}>
                    All blocked
                </span>
            </div>
            <div className="p-2 flex flex-col gap-1">
                {threats.map((t, i) => (
                    <div key={t.label}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i === tick % threats.length ? 'rgba(255,255,255,0.05)' : 'transparent' }}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: t.color }} />
                        <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.65)' }}>{t.label}</span>
                        <span className="text-xs px-1.5 py-0.5 rounded"
                            style={{ background: `${t.color}12`, color: t.color, border: `1px solid ${t.color}25`, fontSize: 9 }}>
                            {t.severity}
                        </span>
                        <span className="text-xs font-semibold" style={{ color: '#4ade80' }}>✓</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Efficiency() {
    const [pue, setPue] = useState(1.62)
    useEffect(() => {
        const iv = setInterval(() => setPue(p => parseFloat(Math.max(1.20, Math.min(1.65, p + (Math.random() > 0.5 ? 0.01 : -0.01))).toFixed(2))), 800)
        return () => clearInterval(iv)
    },[])

    const metrics = [
        { label: 'PUE rating', value: pue.toFixed(2), target: '< 1.4', color: pue < 1.4 ? '#4ade80' : '#fbbf24' },
        { label: 'Load factor', value: '87%', target: '> 80%', color: '#93c5fd' },
        { label: 'Waste heat', value: '−28%', target: 'vs baseline', color: '#5eead4' },
    ];

    
    return(
        <div className="rounded-xl p-3 mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="flex flex-col gap-2.5">
                {metrics.map(m => (
                    <div key={m.label} className="flex items-center justify-between">
                        <div>
                            <div className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{m.label}</div>
                            <div className="text-sm font-bold" style={{ color: m.color }}>{m.value}</div>
                        </div>
                        <div className="text-right">
                            <div className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>target</div>
                            <div className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>{m.target}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

function Card({children}) {

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
    return(
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full self-start"
            style={{background: `${accent}12`, border: `1px solid ${accent}30`}}
        >
            <span className="text-xs font-bold" style={{ color: accent }}>{value}</span>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{label}</span>
        </div>
    )
}

const Benefits = () => {
    return(
        <div className="w-full px-4 md:px-6 py-16 md:py-24">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-xs font-semibold tracking-widest uppercase mb-4"
                        style={{ color: 'rgba(255,255,255,0.45)' }}>
                        Why It Matters
                    </p>
                    <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
                        Benefits
                    </h2>
                    <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
                        style={{ color: 'rgba(255,255,255,0.55)' }}>
                        A properly managed power infrastructure doesn't just keep the lights on —
                        it actively saves money, protects assets, and drives operational performance.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {benefits.map(b => {
                        const IconComp = b.icon
                        const MockupComp = b.mockup
                        return (
                            <Card key={b.id}>
                                {/* Icon + eyebrow + watermark */}
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                            style={{ background: `${b.accent}18`, color: b.accent, border: `1px solid ${b.accent}30` }}>
                                            <IconComp size={18} />
                                        </div>
                                        <span className="text-xs font-semibold tracking-widest uppercase"
                                            style={{ color: 'rgba(255,255,255,0.4)' }}>
                                            {b.eyebrow}
                                        </span>
                                    </div>
                                    <span className="font-black select-none"
                                        style={{ fontSize: 36, color: 'rgba(255,255,255,0.06)', lineHeight: 1, fontFamily: 'monospace' }}>
                                        {String(b.id).padStart(2, '0')}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold text-white leading-snug">{b.title}</h3>

                                {/* Description */}
                                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.58)' }}>
                                    {b.description}
                                </p>

                                {/* Stat pill */}
                                <StatPill value={b.stat.value} label={b.stat.label} accent={b.accent} />

                                {/* Highlights */}
                                <div className="flex flex-col gap-1.5">
                                    {b.highlights.map(h => (
                                        <div key={h} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: b.accent }} />
                                            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>{h}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Animated mockup */}
                                <MockupComp />
                            </Card>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Benefits