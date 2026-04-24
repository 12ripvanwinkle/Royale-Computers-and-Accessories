import React, { useState, useEffect } from 'react'
import { glass, glassHover } from '../CCTV-Holder/CCTVStyles'
import { ScanSearch, ShieldCheck, MonitorCheck, TrendingUp } from 'lucide-react'

/* ── Risk Assessment Mockup ──────────────────────── */
function RiskMockup() {
    const [scanning, setScanning] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setScanning(s => (s + 1) % 5), 850)
        return () => clearInterval(iv)
    }, [])
    const risks = [
        { label: 'Exposed attack surface', score: 74, color: '#f87171' },
        { label: 'Auth weaknesses',        score: 58, color: '#fbbf24' },
        { label: 'Unpatched services',     score: 82, color: '#f87171' },
        { label: 'Data exposure risk',     score: 41, color: '#fbbf24' },
    ]
    return (
        <div className="rounded-xl overflow-hidden mt-4"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="px-3 py-2 flex items-center justify-between"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>risk-scan.sh</span>
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
                            <span className="text-xs font-semibold" style={{ color: r.color }}>{r.score}</span>
                        </div>
                        <div className="w-full h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                            <div className="h-full rounded-full transition-all duration-700"
                                style={{ width: i <= scanning ? `${r.score}%` : '0%', background: r.color, opacity: 0.75 }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

/* ── Security Setup Mockup ───────────────────────── */
function SetupMockup() {
    const [done, setDone] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setDone(d => d >= 5 ? 0 : d + 1), 1100)
        return () => clearInterval(iv)
    }, [])
    const tasks = [
        'Firewall rules deployed',
        'IDS/IPS configured',
        'VPN tunnels live',
        'EDR agents installed',
        'Policies enforced',
    ]
    return (
        <div className="rounded-xl overflow-hidden mt-4"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="px-3 py-2 flex items-center justify-between"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>security-setup</span>
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

/* ── Monitoring Mockup ───────────────────────────── */
function MonitoringMockup() {
    const [vals, setVals] = useState([30, 45, 38, 60, 42, 75, 55, 68, 40, 82, 58, 70])
    const [tick, setTick] = useState(0)
    useEffect(() => {
        const iv1 = setInterval(() => {
            setVals(v => [...v.slice(1), Math.max(20, Math.min(99, v[v.length - 1] + (Math.random() > 0.5 ? 7 : -7)))])
        }, 650)
        const iv2 = setInterval(() => setTick(t => t + 1), 1000)
        return () => { clearInterval(iv1); clearInterval(iv2) }
    }, [])
    const feeds = [
        { label: 'Firewall cluster',  status: 'Online', color: '#4ade80' },
        { label: 'IDS/IPS engine',    status: 'Online', color: '#4ade80' },
        { label: 'Endpoint agents',   status: 'Online', color: '#4ade80' },
        { label: 'VPN gateway',       status: 'Online', color: '#4ade80' },
    ]
    return (
        <div className="rounded-xl overflow-hidden mt-4"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="px-3 py-2 flex items-center justify-between"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full" style={{ background: '#4ade80', boxShadow: '0 0 5px #4ade8099' }} />
                    <span className="text-xs" style={{ color: '#4ade80' }}>SOC live</span>
                </div>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>24 / 7</span>
            </div>
            <div className="px-3 pt-2 flex items-end gap-0.5" style={{ height: 36 }}>
                {vals.map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm transition-all duration-300"
                        style={{
                            height: `${h}%`,
                            background: i === vals.length - 1 ? '#4ade80' : `rgba(74,222,128,${0.12 + (i / vals.length) * 0.25})`,
                            borderRadius: 2,
                        }} />
                ))}
            </div>
            <div className="p-2 flex flex-col gap-0.5">
                {feeds.map((f, i) => (
                    <div key={f.label}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i === tick % feeds.length ? 'rgba(74,222,128,0.05)' : 'transparent' }}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: f.color }} />
                        <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.65)' }}>{f.label}</span>
                        <span className="text-xs font-medium" style={{ color: f.color }}>{f.status}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

/* ── Continuous Improvement Mockup ──────────────── */
function ImprovementMockup() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    const threats  = [88, 72, 61, 48, 34, 22]
    const coverage = [62, 70, 78, 85, 91, 97]
    const [pct, setPct] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setPct(p => p >= 100 ? 0 : p + 1), 60)
        return () => clearInterval(iv)
    }, [])
    return (
        <div className="rounded-xl p-3 mt-4"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="flex items-center justify-between mb-3">
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Security posture over time</span>
                <div className="flex items-center gap-3">
                    {[{ label: 'Threats', color: '#f87171' }, { label: 'Coverage', color: '#4ade80' }].map(l => (
                        <div key={l.label} className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-sm" style={{ background: l.color }} />
                            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{l.label}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex items-end gap-2 mb-3" style={{ height: 48 }}>
                {months.map((m, i) => (
                    <div key={m} className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full flex items-end gap-0.5" style={{ height: 40 }}>
                            <div className="flex-1 rounded-sm transition-all duration-500"
                                style={{ height: `${threats[i]}%`, background: 'rgba(248,113,113,0.5)', borderRadius: 3 }} />
                            <div className="flex-1 rounded-sm transition-all duration-500"
                                style={{ height: `${coverage[i]}%`, background: '#4ade80', opacity: 0.75, borderRadius: 3 }} />
                        </div>
                        <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.28)' }}>{m}</span>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-between pt-2"
                style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                <div>
                    <span className="text-xs font-bold" style={{ color: '#4ade80' }}>+35% coverage</span>
                    <span className="text-xs ml-1" style={{ color: 'rgba(255,255,255,0.3)' }}>in 6 months</span>
                </div>
                <div>
                    <span className="text-xs font-bold" style={{ color: '#f87171' }}>−75% threats</span>
                    <span className="text-xs ml-1" style={{ color: 'rgba(255,255,255,0.3)' }}>detected</span>
                </div>
            </div>
        </div>
    )
}

/* ── Data ────────────────────────────────────────── */
const steps = [
    {
        id: 1,
        icon: ScanSearch,
        accent: '#fbbf24',
        eyebrow: 'Step 01',
        title: 'Risk Assessment',
        stat: { value: 'Full scope', label: 'Attack surface review' },
        description: 'We start by mapping every asset, evaluating your existing controls, and scoring vulnerabilities across your perimeter, network, and endpoints — producing a clear, prioritised risk register to guide everything that follows.',
        highlights: ['Full attack surface mapping', 'Control gap analysis', 'Prioritised risk register'],
        mockup: RiskMockup,
    },
    {
        id: 2,
        icon: ShieldCheck,
        accent: '#93c5fd',
        eyebrow: 'Step 02',
        title: 'Security Setup',
        stat: { value: 'Bespoke', label: 'Configured for your network' },
        description: 'Using risk findings, we deploy and configure your full security stack — firewalls, IDS/IPS, VPN gateways, and EDR agents — all tailored to your network topology, user base, and compliance requirements.',
        highlights: ['Full stack deployment', 'Topology-aware configuration', 'Compliance alignment'],
        mockup: SetupMockup,
    },
    {
        id: 3,
        icon: MonitorCheck,
        accent: '#4ade80',
        eyebrow: 'Step 03',
        title: 'Monitoring',
        stat: { value: '24 / 7', label: 'SOC coverage' },
        description: 'Our Security Operations Centre watches your environment around the clock — correlating events across every layer, surfacing real threats fast, and responding to incidents before they escalate into breaches.',
        highlights: ['24/7 SOC analyst coverage', 'SIEM event correlation', 'Sub-15min incident response'],
        mockup: MonitoringMockup,
    },
    {
        id: 4,
        icon: TrendingUp,
        accent: '#5eead4',
        eyebrow: 'Step 04',
        title: 'Continuous Improvement',
        stat: { value: 'Ongoing', label: 'Posture hardening' },
        description: 'Security is never static. We run quarterly reviews, update threat signatures, close newly discovered gaps, and measure your posture over time — ensuring your defences grow stronger as the threat landscape evolves.',
        highlights: ['Quarterly posture reviews', 'Threat intelligence updates', 'Coverage & gap tracking'],
        mockup: ImprovementMockup,
    },
]

/* ── Shared card ─────────────────────────────────── */
function Card({ children }) {
    const [hovered, setHovered] = useState(false)
    return (
        <div
            className="rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
            style={hovered ? glassHover : glass}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {children}
        </div>
    )
}

function StatPill({ value, label, accent }) {
    return (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full self-start"
            style={{ background: `${accent}12`, border: `1px solid ${accent}30` }}>
            <span className="text-xs font-bold" style={{ color: accent }}>{value}</span>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{label}</span>
        </div>
    )
}

/* ── Section ─────────────────────────────────────── */
const Process = () => {
    return (
        <div className="w-full px-4 md:px-6 py-16 md:py-24">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-xs font-semibold tracking-widest uppercase mb-4"
                        style={{ color: 'rgba(255,255,255,0.45)' }}>
                        How We Work
                    </p>
                    <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
                        Our Process
                    </h2>
                    <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
                        style={{ color: 'rgba(255,255,255,0.55)' }}>
                        A four-phase cycle that takes you from raw exposure to a hardened,
                        continuously improving network security posture.
                    </p>
                </div>

                {/*
                    Row 1: [Risk Assessment — 1/2] [Security Setup — 1/2]
                    Row 2: [Monitoring — 1/2]      [Continuous Improvement — 1/2]
                */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {steps.map(s => {
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

export default Process