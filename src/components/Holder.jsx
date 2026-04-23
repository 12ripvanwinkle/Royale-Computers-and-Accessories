import React, { useState, useEffect } from 'react'
import { glass, glassHover } from '../CCTV-Holder/CCTVStyles'
import { ClipboardSearch, Wrench, MonitorCheck, Siren } from 'lucide-react'

/* ── Assessment Mockup ───────────────────────────── */
function AssessmentMockup() {
    const [scanning, setScanning] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setScanning(s => (s + 1) % 5), 850)
        return () => clearInterval(iv)
    }, [])
    const checks = [
        { label: 'Perimeter exposure',    score: 78, color: '#f87171' },
        { label: 'Auth vulnerabilities',  score: 62, color: '#fbbf24' },
        { label: 'Patch compliance',      score: 91, color: '#4ade80' },
        { label: 'Data exposure risk',    score: 44, color: '#f87171' },
    ]
    return (
        <div className="rounded-xl overflow-hidden mt-4"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="px-3 py-2 flex items-center justify-between"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>security-assessment.sh</span>
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

/* ── Implementation Mockup ───────────────────────── */
function ImplementationMockup() {
    const [done, setDone] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setDone(d => d >= 5 ? 0 : d + 1), 1100)
        return () => clearInterval(iv)
    }, [])
    const tasks = [
        'Firewall rules deployed',
        'IDS/IPS signatures loaded',
        'VPN tunnels established',
        'EDR agents rolled out',
        'Policies enforced & tested',
    ]
    return (
        <div className="rounded-xl overflow-hidden mt-4"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="px-3 py-2 flex items-center justify-between"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>deploy-checklist</span>
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
        { label: 'Firewall — perimeter', status: 'Online',  color: '#4ade80' },
        { label: 'IDS/IPS engine',       status: 'Online',  color: '#4ade80' },
        { label: 'Endpoint agents',      status: 'Online',  color: '#4ade80' },
        { label: 'VPN gateway',          status: 'Online',  color: '#4ade80' },
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
            {/* Sparkline */}
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

/* ── Incident Response Mockup ────────────────────── */
function IncidentMockup() {
    const [step, setStep] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setStep(s => (s + 1) % 5), 1200)
        return () => clearInterval(iv)
    }, [])
    const timeline = [
        { label: 'Threat detected',      time: '09:14:02', done: true  },
        { label: 'Alert triggered',       time: '09:14:03', done: true  },
        { label: 'SOC analyst engaged',   time: '09:14:45', done: false },
        { label: 'Endpoint isolated',     time: '09:15:10', done: false },
        { label: 'Threat neutralised',    time: '09:16:38', done: false },
    ]
    return (
        <div className="rounded-xl overflow-hidden mt-4"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="px-3 py-2 flex items-center justify-between"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ background: '#f87171', boxShadow: '0 0 4px #f8717199' }} />
                    <span className="text-xs" style={{ color: '#f87171' }}>Incident active</span>
                </div>
                <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.3)' }}>INC-0041</span>
            </div>
            <div className="p-3 flex flex-col gap-0">
                {timeline.map((t, i) => (
                    <div key={t.label} className="flex items-center gap-3 py-1.5">
                        <div className="flex flex-col items-center shrink-0" style={{ width: 10 }}>
                            <div className="w-2 h-2 rounded-full transition-all duration-300"
                                style={{
                                    background: i < step ? '#4ade80' : i === step ? '#f87171' : 'rgba(255,255,255,0.15)',
                                    boxShadow: i === step ? '0 0 6px #f87171' : 'none',
                                }} />
                            {i < timeline.length - 1 && (
                                <div style={{ width: 1, height: 10, background: 'rgba(255,255,255,0.1)', marginTop: 2 }} />
                            )}
                        </div>
                        <span className="text-xs flex-1 transition-all duration-300"
                            style={{ color: i < step ? '#4ade80' : i === step ? '#f87171' : 'rgba(255,255,255,0.28)' }}>
                            {t.label}
                        </span>
                        <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.25)', fontSize: 10 }}>{t.time}</span>
                        {i === step && (
                            <span className="text-xs px-1.5 py-0.5 rounded"
                                style={{ background: 'rgba(248,113,113,0.12)', color: '#f87171', border: '1px solid rgba(248,113,113,0.25)', fontSize: 9 }}>
                                live
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

/* ── Data ────────────────────────────────────────── */
const services = [
    {
        id: 1,
        icon: ClipboardSearch,
        accent: '#fbbf24',
        eyebrow: 'Step 01',
        title: 'Network Security Assessment',
        stat: { value: 'Full scope', label: 'Attack surface review' },
        description: 'We begin with a comprehensive assessment of your network — mapping every exposed asset, evaluating firewall rules, testing authentication controls, and scoring vulnerabilities to build a prioritised remediation plan.',
        highlights: ['Full attack surface mapping', 'Firewall & policy review', 'Prioritised risk report'],
        mockup: AssessmentMockup,
    },
    {
        id: 2,
        icon: Wrench,
        accent: '#a78bfa',
        eyebrow: 'Step 02',
        title: 'Implementation',
        stat: { value: 'End-to-end', label: 'Deploy & configure' },
        description: 'Our engineers deploy and configure every layer of your security stack — from next-gen firewalls and IDS/IPS to VPN tunnels, EDR agents, and access policies — all tested and documented before handover.',
        highlights: ['Full stack deployment', 'Policy configuration & testing', 'Documentation & handover'],
        mockup: ImplementationMockup,
    },
    {
        id: 3,
        icon: MonitorCheck,
        accent: '#4ade80',
        eyebrow: 'Step 03',
        title: 'Monitoring',
        stat: { value: '24 / 7', label: 'SOC coverage' },
        description: 'Our Security Operations Centre monitors your entire network around the clock — correlating events across firewalls, endpoints, and logs to surface real threats fast and suppress false positives automatically.',
        highlights: ['24/7 SOC analyst coverage', 'SIEM event correlation', 'False positive suppression'],
        mockup: MonitoringMockup,
    },
    {
        id: 4,
        icon: Siren,
        accent: '#f87171',
        eyebrow: 'Step 04',
        title: 'Incident Response',
        stat: { value: '< 15min', label: 'Mean time to respond' },
        description: 'When a threat is confirmed, our incident response team activates immediately — isolating affected endpoints, containing lateral movement, neutralising the threat, and producing a full post-incident report.',
        highlights: ['Sub-15min response SLA', 'Endpoint isolation & containment', 'Post-incident forensic report'],
        mockup: IncidentMockup,
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
const Services = () => {
    return (
        <div className="w-full px-4 md:px-6 py-16 md:py-24">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-xs font-semibold tracking-widest uppercase mb-4"
                        style={{ color: 'rgba(255,255,255,0.45)' }}>
                        What We Do
                    </p>
                    <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
                        Services
                    </h2>
                    <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
                        style={{ color: 'rgba(255,255,255,0.55)' }}>
                        From the initial assessment to round-the-clock monitoring and rapid incident
                        response — we cover every phase of your network security lifecycle.
                    </p>
                </div>

                {/*
                    Row 1: [Assessment — 1/2]   [Implementation — 1/2]
                    Row 2: [Monitoring — 1/2]   [Incident Response — 1/2]
                */}
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