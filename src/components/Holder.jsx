import React, { useState, useEffect } from 'react'
import { glass, glassHover } from '../CCTV-Holder/CCTVStyles'
import { ScanSearch, PenTool, HardHat, TrendingUp } from 'lucide-react'

/* ── Assessment Mockup ───────────────────────────── */
function AssessmentMockup() {
    const [scanning, setScanning] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setScanning(s => (s + 1) % 5), 850)
        return () => clearInterval(iv)
    }, [])
    const checks = [
        { label: 'Load capacity headroom',   score: 68, color: '#fbbf24' },
        { label: 'Single points of failure', score: 82, color: '#f87171' },
        { label: 'Tariff efficiency',         score: 54, color: '#fbbf24' },
        { label: 'Equipment condition',       score: 91, color: '#4ade80' },
    ]
    return (
        <div className="rounded-xl overflow-hidden mt-4"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="px-3 py-2 flex items-center justify-between"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>site-assessment.sh</span>
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#fbbf24' }} />
                    <span className="text-xs" style={{ color: '#fbbf24' }}>Analysing…</span>
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

/* ── Design Mockup ───────────────────────────────── */
function DesignMockup() {
    const [active, setActive] = useState(null)
    const layers = [
        { label: 'Mains Supply',        detail: 'DNO intake',         color: '#93c5fd' },
        { label: 'Distribution Board',  detail: 'MCB protection',     color: '#a78bfa' },
        { label: 'UPS Layer',           detail: 'Online double conv',  color: '#5eead4' },
        { label: 'PDU Outlets',         detail: 'Per-outlet metered',  color: '#4ade80' },
        { label: 'End Devices',         detail: 'Protected loads',     color: '#fbbf24' },
    ]
    return (
        <div className="rounded-xl overflow-hidden mt-4"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="px-3 py-2"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>power-architecture</span>
            </div>
            <div className="p-3 flex flex-col gap-1.5">
                {layers.map((l, i) => (
                    <div key={l.label}
                        className="flex items-center gap-3 px-2.5 py-2 rounded-lg cursor-default transition-all duration-200"
                        style={{
                            background: active === i ? `${l.color}10` : 'rgba(255,255,255,0.03)',
                            border: `1px solid ${active === i ? l.color + '30' : 'rgba(255,255,255,0.07)'}`,
                            marginLeft: i * 8,
                        }}
                        onMouseEnter={() => setActive(i)}
                        onMouseLeave={() => setActive(null)}
                    >
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: l.color }} />
                        <span className="text-xs font-medium flex-1" style={{ color: 'rgba(255,255,255,0.7)' }}>{l.label}</span>
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{l.detail}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

/* ── Installation Mockup ─────────────────────────── */
function InstallMockup() {
    const [done, setDone] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setDone(d => d >= 5 ? 0 : d + 1), 1100)
        return () => clearInterval(iv)
    }, [])
    const tasks = [
        'Cabling & containment',
        'UPS units commissioned',
        'PDUs wired & labelled',
        'Monitoring agents live',
        'Load test sign-off',
    ]
    return (
        <div className="rounded-xl overflow-hidden mt-4"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="px-3 py-2 flex items-center justify-between"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>install-checklist</span>
                <span className="text-xs" style={{ color: '#a78bfa' }}>{done}/{tasks.length} done</span>
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
                            style={{ color: i < done ? 'rgba(255,255,255,0.72)' : 'rgba(255,255,255,0.32)' }}>
                            {t}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

/* ── Optimisation Mockup ─────────────────────────── */
function OptimisationMockup() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    const before  = [94, 92, 95, 91, 93, 90]
    const after   = [94, 86, 78, 70, 63, 57]
    const [pue, setPue] = useState(1.58)
    useEffect(() => {
        const iv = setInterval(() => setPue(p => parseFloat(Math.max(1.18, Math.min(1.60, p + (Math.random() > 0.5 ? 0.01 : -0.01))).toFixed(2))), 800)
        return () => clearInterval(iv)
    }, [])
    return (
        <div className="rounded-xl p-3 mt-4"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="flex items-center justify-between mb-3">
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Energy spend trend</span>
                <div className="flex items-center gap-3">
                    {[{ label: 'Before', color: 'rgba(255,255,255,0.2)' }, { label: 'After', color: '#4ade80' }].map(l => (
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
                            <div className="flex-1 rounded-sm"
                                style={{ height: `${before[i]}%`, background: 'rgba(255,255,255,0.12)', borderRadius: 3 }} />
                            <div className="flex-1 rounded-sm transition-all duration-500"
                                style={{ height: `${after[i]}%`, background: '#4ade80', opacity: 0.8, borderRadius: 3 }} />
                        </div>
                        <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.28)' }}>{m}</span>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-between pt-2"
                style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                <div>
                    <span className="text-xs font-bold" style={{ color: '#4ade80' }}>−40% spend</span>
                    <span className="text-xs ml-1" style={{ color: 'rgba(255,255,255,0.3)' }}>over 6 months</span>
                </div>
                <div>
                    <span className="text-xs font-bold" style={{ color: pue < 1.4 ? '#4ade80' : '#fbbf24' }}>PUE {pue}</span>
                    <span className="text-xs ml-1" style={{ color: 'rgba(255,255,255,0.3)' }}>live</span>
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
        title: 'Assessment',
        stat: { value: 'Full site', label: 'Infrastructure review' },
        description: 'We start with a thorough on-site assessment — reviewing your existing power infrastructure, load profiles, single points of failure, and tariff arrangements to build a complete picture before any work begins.',
        highlights: ['On-site load profiling', 'Risk & resilience review', 'Detailed findings report'],
        mockup: AssessmentMockup,
    },
    {
        id: 2,
        icon: PenTool,
        accent: '#93c5fd',
        eyebrow: 'Step 02',
        title: 'Design',
        stat: { value: 'Bespoke', label: 'Architecture per site' },
        description: 'Using assessment findings, we design a layered power architecture tailored to your site — specifying the right UPS topology, PDU configuration, monitoring integration, and redundancy level for your risk profile.',
        highlights: ['Layered redundancy design', 'Equipment specification', 'Compliance & standards check'],
        mockup: DesignMockup,
    },
    {
        id: 3,
        icon: HardHat,
        accent: '#a78bfa',
        eyebrow: 'Step 03',
        title: 'Installation',
        stat: { value: 'End-to-end', label: 'Supply, fit & commission' },
        description: 'Our engineers handle everything from first fix cabling to final commissioning — racking UPS units, wiring PDUs, connecting monitoring agents, and completing a full load test before sign-off.',
        highlights: ['Full supply & installation', 'Cable management & labels', 'Load test & sign-off'],
        mockup: InstallMockup,
    },
    {
        id: 4,
        icon: TrendingUp,
        accent: '#4ade80',
        eyebrow: 'Step 04',
        title: 'Optimisation',
        stat: { value: 'Continuous', label: 'Efficiency improvement' },
        description: 'Once live, we analyse real consumption data to fine-tune load scheduling, eliminate waste, and improve PUE — turning your power infrastructure into an active cost-reduction asset rather than a fixed overhead.',
        highlights: ['Load scheduling & shifting', 'PUE benchmarking', 'Quarterly efficiency reports'],
        mockup: OptimisationMockup,
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
                        A structured four-phase approach that takes you from raw site survey
                        to a continuously optimised power infrastructure.
                    </p>
                </div>

                {/*
                    Row 1: [Assessment — 1/2] [Design — 1/2]
                    Row 2: [Installation — 1/2] [Optimisation — 1/2]
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