import React, { useState, useEffect } from 'react'
import { glass, glassHover } from './Aspects/CCTV-Holder/CCTVStyles'
import { TrendingUp, Megaphone, HeadphonesIcon, BarChart3 } from 'lucide-react'

/* ── Sales Management Mockup ─────────────────────── */
function SalesMockup() {
    const [vals, setVals] = useState([38, 52, 44, 68, 55, 78, 62, 74, 48, 85, 66, 72])
    const [total, setTotal] = useState(248600)
    useEffect(() => {
        const iv1 = setInterval(() => {
            setVals(v => [...v.slice(1), Math.max(20, Math.min(99, v[v.length - 1] + (Math.random() > 0.5 ? 6 : -6)))])
        }, 700)
        const iv2 = setInterval(() => setTotal(t => t + Math.floor(Math.random() * 400 + 100)), 1400)
        return () => { clearInterval(iv1); clearInterval(iv2) }
    }, [])

    const stages = [
        { label: 'Prospecting', count: 32, color: '#93c5fd' },
        { label: 'Proposal',    count: 14, color: '#a78bfa' },
        { label: 'Closing',     count: 7,  color: '#4ade80' },
    ]

    return (
        <div className="flex flex-col gap-5 mt-auto">
            {/* Big revenue number */}
            <div className="flex items-end justify-between">
                <div>
                    <div className="font-black text-white leading-none" style={{ fontSize: 52 }}>
                        ${(total / 1000).toFixed(1)}k
                    </div>
                    <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>Pipeline value</div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1.5 rounded-full mb-1"
                    style={{ background: 'rgba(74,222,128,0.12)', color: '#4ade80', border: '1px solid rgba(74,222,128,0.25)' }}>
                    +22% this month
                </span>
            </div>

            {/* Sparkline */}
            <div className="flex items-end gap-0.5" style={{ height: 44 }}>
                {vals.map((v, i) => (
                    <div key={i} className="flex-1 rounded-sm transition-all duration-500"
                        style={{
                            height: `${v}%`,
                            background: i === vals.length - 1 ? '#4ade80' : `rgba(74,222,128,${0.1 + (i / vals.length) * 0.3})`,
                            borderRadius: 2,
                        }} />
                ))}
            </div>

            {/* Stage pills */}
            <div className="flex gap-2">
                {stages.map(s => (
                    <div key={s.label} className="flex-1 rounded-xl px-2.5 py-2 text-center"
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <div className="text-sm font-bold" style={{ color: s.color }}>{s.count}</div>
                        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.38)', marginTop: 2 }}>{s.label}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

/* ── Marketing Automation Mockup ─────────────────── */
function MarketingMockup() {
    const [step, setStep] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setStep(s => (s + 1) % 4), 1100)
        return () => clearInterval(iv)
    }, [])
    const flows = [
        { label: 'Lead captured',       color: '#93c5fd' },
        { label: 'Welcome email fired', color: '#5eead4' },
        { label: 'Follow-up queued',    color: '#a78bfa' },
        { label: 'Assigned to sales',   color: '#4ade80' },
    ]
    return (
        <div className="rounded-xl overflow-hidden mt-auto"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="px-3 py-2 flex items-center gap-2"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#5eead4' }} />
                <span className="text-xs" style={{ color: '#5eead4' }}>Automation running</span>
            </div>
            <div className="p-3 flex flex-col gap-0">
                {flows.map((f, i) => (
                    <div key={f.label} className="flex items-center gap-2.5 py-1.5">
                        <div className="flex flex-col items-center shrink-0" style={{ width: 10 }}>
                            <div className="w-2 h-2 rounded-full transition-all duration-300"
                                style={{
                                    background: i < step ? '#4ade80' : i === step ? f.color : 'rgba(255,255,255,0.15)',
                                    boxShadow: i === step ? `0 0 5px ${f.color}` : 'none',
                                }} />
                            {i < flows.length - 1 && (
                                <div style={{ width: 1, height: 10, background: 'rgba(255,255,255,0.1)', marginTop: 2 }} />
                            )}
                        </div>
                        <span className="text-xs transition-all duration-300"
                            style={{ color: i < step ? '#4ade80' : i === step ? f.color : 'rgba(255,255,255,0.28)' }}>
                            {f.label}
                        </span>
                        {i === step && (
                            <span className="ml-auto text-xs px-1.5 py-0.5 rounded"
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

/* ── Customer Support Mockup ─────────────────────── */
function SupportMockup() {
    const [tick, setTick] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setTick(t => t + 1), 1000)
        return () => clearInterval(iv)
    }, [])
    const tickets = [
        { id: '#1042', subject: 'Login issue',      status: 'Open',     color: '#f87171' },
        { id: '#1041', subject: 'Billing query',    status: 'Pending',  color: '#fbbf24' },
        { id: '#1040', subject: 'Export not working', status: 'Resolved', color: '#4ade80' },
    ]
    return (
        <div className="rounded-xl overflow-hidden mt-auto"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="px-3 py-2 flex items-center justify-between"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Support queue</span>
                <span className="text-xs" style={{ color: '#f87171' }}>2 open</span>
            </div>
            <div className="p-2 flex flex-col gap-1">
                {tickets.map((t, i) => (
                    <div key={t.id}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i === tick % tickets.length ? 'rgba(255,255,255,0.05)' : 'transparent' }}>
                        <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.3)', fontSize: 10, minWidth: 36 }}>{t.id}</span>
                        <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.65)' }}>{t.subject}</span>
                        <span className="text-xs font-medium px-1.5 py-0.5 rounded"
                            style={{ background: `${t.color}12`, color: t.color, border: `1px solid ${t.color}25`, fontSize: 9 }}>
                            {t.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

/* ── Analytics Mockup ────────────────────────────── */
function AnalyticsMockup() {
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
    const leads = [12, 18, 14, 22, 16, 8, 20]
    const deals = [4,  7,  5,  9,  6,  3,  8]
    return (
        <div className="rounded-xl p-3 mt-auto"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="flex items-end gap-1.5" style={{ height: 48 }}>
                {days.map((d, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full flex items-end gap-0.5" style={{ height: 40 }}>
                            <div className="flex-1 rounded-sm"
                                style={{ height: `${(leads[i] / 22) * 100}%`, background: 'rgba(147,197,253,0.35)', borderRadius: 2 }} />
                            <div className="flex-1 rounded-sm"
                                style={{ height: `${(deals[i] / 9) * 100}%`, background: '#fbbf24', opacity: 0.75, borderRadius: 2 }} />
                        </div>
                        <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)' }}>{d}</span>
                    </div>
                ))}
            </div>
            <div className="flex gap-3 mt-2.5 pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
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
    )
}

/* ── Shared hover card ───────────────────────────── */
function Card({ children, className = '' }) {
    const [hovered, setHovered] = useState(false)
    return (
        <div
            className={`rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-0.5 overflow-hidden ${className}`}
            style={hovered ? glassHover : glass}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {children}
        </div>
    )
}

function Tag({ label, accent }) {
    return (
        <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)' }}>
            <div className="w-1 h-1 rounded-full" style={{ background: accent }} />
            <span className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: 'rgba(255,255,255,0.45)' }}>{label}</span>
        </div>
    )
}

/* ── Section ─────────────────────────────────────── */
const Modules = () => {
    return (
        <div className="w-full px-4 md:px-6 py-16 md:py-24">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-xs font-semibold tracking-widest uppercase mb-4"
                        style={{ color: 'rgba(255,255,255,0.45)' }}>
                        Built to Scale With You
                    </p>
                    <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
                        Modules
                    </h2>
                    <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
                        style={{ color: 'rgba(255,255,255,0.55)' }}>
                        Four purpose-built modules that cover every stage of the customer lifecycle —
                        from first contact to long-term retention.
                    </p>
                </div>

                {/*
                    Reference image layout:
                    ┌────────────────────────┬──────────────────────────────┐
                    │                        │  Marketing Automation (wide) │
                    │  Sales Management      ├──────────────┬───────────────┤
                    │  (tall hero left)      │  Customer    │  Analytics    │
                    │                        │  Support     │  Dashboard    │
                    └────────────────────────┴──────────────┴───────────────┘
                */}
                <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4"
                    style={{ minHeight: 560 }}>

                    {/* ── Sales Management — tall left hero ── */}
                    <Card className="md:col-span-5 md:row-span-2">
                        <Tag label="Sales Module" accent="#4ade80" />

                        <div className="flex items-center gap-3 mt-4">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                style={{ background: 'rgba(74,222,128,0.18)', color: '#4ade80', border: '1px solid rgba(74,222,128,0.3)' }}>
                                <TrendingUp size={18} />
                            </div>
                        </div>

                        <h3 className="text-3xl font-semibold text-white leading-snug mt-3">
                            Sales<br />Management
                        </h3>

                        <p className="text-sm leading-relaxed mt-3" style={{ color: 'rgba(255,255,255,0.55)' }}>
                            Track every deal from first touch to close. Live pipeline visibility,
                            rep performance metrics, and forecast tools keep your team focused and on target.
                        </p>

                        <div className="flex flex-col gap-1.5 mt-3">
                            {['Visual drag-and-drop pipeline', 'Win/loss analysis', 'Revenue forecasting'].map(h => (
                                <div key={h} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#4ade80' }} />
                                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>{h}</span>
                                </div>
                            ))}
                        </div>

                        <SalesMockup />
                    </Card>

                    {/* ── Marketing Automation — top right wide ── */}
                    <Card className="md:col-span-7">
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                    style={{ background: 'rgba(94,234,212,0.18)', color: '#5eead4', border: '1px solid rgba(94,234,212,0.3)' }}>
                                    <Megaphone size={18} />
                                </div>
                                <Tag label="Marketing Module" accent="#5eead4" />
                            </div>
                            <span className="font-black select-none"
                                style={{ fontSize: 36, color: 'rgba(255,255,255,0.06)', lineHeight: 1, fontFamily: 'monospace' }}>02</span>
                        </div>

                        <h3 className="text-xl font-semibold text-white leading-snug mt-3">
                            Marketing Automation
                        </h3>

                        <p className="text-sm leading-relaxed mt-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
                            Build trigger-based nurture flows that respond to lead behaviour — routing hot leads
                            to sales automatically with zero manual intervention.
                        </p>

                        <div className="flex flex-col gap-1.5 mt-2">
                            {['Behaviour-triggered sequences', 'Email campaign builder', 'Lead-to-sales handoff'].map(h => (
                                <div key={h} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#5eead4' }} />
                                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>{h}</span>
                                </div>
                            ))}
                        </div>

                        <MarketingMockup />
                    </Card>

                    {/* ── Customer Support — bottom right left ── */}
                    <Card className="md:col-span-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                style={{ background: 'rgba(248,113,113,0.18)', color: '#f87171', border: '1px solid rgba(248,113,113,0.3)' }}>
                                <HeadphonesIcon size={18} />
                            </div>
                            <Tag label="Support Module" accent="#f87171" />
                        </div>

                        <h3 className="text-lg font-semibold text-white leading-snug mt-3">
                            Customer Support
                        </h3>

                        <p className="text-sm leading-relaxed mt-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
                            Unified ticket management, SLA tracking, and customer history in one place —
                            so every support interaction has context.
                        </p>

                        <div className="flex flex-col gap-1.5 mt-2">
                            {['Shared team inbox', 'SLA tracking & alerts', 'Customer history sidebar'].map(h => (
                                <div key={h} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#f87171' }} />
                                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>{h}</span>
                                </div>
                            ))}
                        </div>

                        <SupportMockup />
                    </Card>

                    {/* ── Analytics Dashboard — bottom right right ── */}
                    <Card className="md:col-span-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                            style={{ background: 'rgba(251,191,36,0.18)', color: '#fbbf24', border: '1px solid rgba(251,191,36,0.3)' }}>
                            <BarChart3 size={18} />
                        </div>

                        <h3 className="text-lg font-semibold text-white leading-snug mt-3">
                            Analytics<br />Dashboard
                        </h3>

                        <p className="text-sm leading-relaxed mt-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
                            Surface the metrics that matter — pipeline velocity, conversion rates, and campaign ROI.
                        </p>

                        <AnalyticsMockup />
                    </Card>

                </div>
            </div>
        </div>
    )
}

export default Modules