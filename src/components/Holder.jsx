import React, { useState, useEffect } from 'react'
import { glass, glassHover } from '../CCTV-Holder/CCTVStyles'
import { ShieldOff, MessageSquareLock, Database, ServerCrash } from 'lucide-react'

/* ── Prevent Breaches Mockup ─────────────────────── */
function BreachMockup() {
    const [blocked, setBlocked] = useState(247)
    const [tick, setTick] = useState(0)
    useEffect(() => {
        const iv1 = setInterval(() => setBlocked(b => b + (Math.random() > 0.6 ? 1 : 0)), 1200)
        const iv2 = setInterval(() => setTick(t => t + 1), 950)
        return () => { clearInterval(iv1); clearInterval(iv2) }
    }, [])
    const attempts = [
        { label: 'Brute-force login',     src: '45.33.32.156',   color: '#f87171' },
        { label: 'Ransomware payload',    src: '198.51.100.22',  color: '#f87171' },
        { label: 'Credential stuffing',   src: '203.0.113.99',   color: '#fbbf24' },
        { label: 'Zero-day exploit',      src: '192.0.2.144',    color: '#f87171' },
    ]
    return (
        <div className="rounded-xl overflow-hidden mt-4"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="px-3 py-2 flex items-center justify-between"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ background: '#f87171', boxShadow: '0 0 4px #f8717199' }} />
                    <span className="text-xs" style={{ color: '#f87171' }}>Attack feed</span>
                </div>
                <span className="text-xs font-bold" style={{ color: '#4ade80' }}>{blocked} blocked</span>
            </div>
            <div className="p-2 flex flex-col gap-1">
                {attempts.map((a, i) => (
                    <div key={a.label}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i === tick % attempts.length ? 'rgba(255,255,255,0.05)' : 'transparent' }}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: a.color }} />
                        <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.65)' }}>{a.label}</span>
                        <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.28)', fontSize: 10 }}>{a.src}</span>
                        <span className="text-xs font-bold" style={{ color: '#4ade80' }}>✓</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

/* ── Secure Communications Mockup ───────────────── */
function CommsMockup() {
    const [tick, setTick] = useState(0)
    const [ping, setPing] = useState(11)
    useEffect(() => {
        const iv1 = setInterval(() => setTick(t => t + 1), 1000)
        const iv2 = setInterval(() => setPing(p => Math.max(8, Math.min(30, p + (Math.random() > 0.5 ? 1 : -1)))), 600)
        return () => { clearInterval(iv1); clearInterval(iv2) }
    }, [])
    const channels = [
        { label: 'Email gateway',       enc: 'TLS 1.3',    color: '#93c5fd' },
        { label: 'VoIP traffic',        enc: 'SRTP',       color: '#93c5fd' },
        { label: 'File transfers',      enc: 'SFTP/AES',   color: '#93c5fd' },
        { label: 'Video conferencing',  enc: 'E2E AES-256', color: '#93c5fd' },
    ]
    return (
        <div className="rounded-xl overflow-hidden mt-4"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="px-3 py-2 flex items-center justify-between"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full"
                        style={{ background: '#93c5fd', boxShadow: '0 0 4px #93c5fd99' }} />
                    <span className="text-xs" style={{ color: '#93c5fd' }}>All channels encrypted</span>
                </div>
                <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.3)' }}>{ping}ms</span>
            </div>
            <div className="p-2 flex flex-col gap-1">
                {channels.map((c, i) => (
                    <div key={c.label}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i === tick % channels.length ? 'rgba(147,197,253,0.07)' : 'transparent' }}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: c.color }} />
                        <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.65)' }}>{c.label}</span>
                        <span className="text-xs font-mono px-1.5 py-0.5 rounded"
                            style={{ background: 'rgba(147,197,253,0.1)', color: '#93c5fd', border: '1px solid rgba(147,197,253,0.2)', fontSize: 10 }}>
                            {c.enc}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

/* ── Protect Sensitive Data Mockup ──────────────── */
function DataMockup() {
    const [progress, setProgress] = useState(72)
    const [tick, setTick] = useState(0)
    useEffect(() => {
        const iv1 = setInterval(() => setProgress(p => p >= 100 ? 20 : p + 1), 120)
        const iv2 = setInterval(() => setTick(t => t + 1), 850)
        return () => { clearInterval(iv1); clearInterval(iv2) }
    }, [])
    const datasets = [
        { label: 'Customer PII',    status: 'Encrypted', color: '#5eead4' },
        { label: 'Payment records', status: 'Tokenised', color: '#5eead4' },
        { label: 'Staff data',      status: 'Encrypted', color: '#5eead4' },
        { label: 'Health records',  status: 'Encrypted', color: '#5eead4' },
    ]
    return (
        <div className="rounded-xl overflow-hidden mt-4"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="px-3 py-2 flex items-center justify-between"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Data protection status</span>
                <span className="text-xs font-semibold" style={{ color: '#5eead4' }}>{progress}%</span>
            </div>
            <div className="px-3 pt-2.5 pb-1">
                <div className="w-full h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <div className="h-full rounded-full transition-all duration-100"
                        style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #5eead4, #93c5fd)' }} />
                </div>
            </div>
            <div className="p-2 flex flex-col gap-1">
                {datasets.map((d, i) => (
                    <div key={d.label}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i === tick % datasets.length ? 'rgba(94,234,212,0.06)' : 'transparent' }}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: d.color }} />
                        <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.65)' }}>{d.label}</span>
                        <span className="text-xs font-medium" style={{ color: d.color }}>{d.status}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

/* ── Maintain Uptime Mockup ──────────────────────── */
function UptimeMockup() {
    const [uptime, setUptime] = useState(99.982)
    const [tick, setTick] = useState(0)
    useEffect(() => {
        const iv1 = setInterval(() => setUptime(u => parseFloat(Math.min(99.999, u + 0.001).toFixed(3))), 1200)
        const iv2 = setInterval(() => setTick(t => t + 1), 900)
        return () => { clearInterval(iv1); clearInterval(iv2) }
    }, [])
    const services = [
        { label: 'Core network',     status: 'Online',  latency: '2ms',  color: '#4ade80' },
        { label: 'Firewall cluster', status: 'Online',  latency: '1ms',  color: '#4ade80' },
        { label: 'VPN gateway',      status: 'Online',  latency: '14ms', color: '#4ade80' },
        { label: 'IDS/IPS engine',   status: 'Online',  latency: '3ms',  color: '#4ade80' },
    ]
    return (
        <div className="rounded-xl overflow-hidden mt-4"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="px-3 py-2 flex items-center justify-between"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full"
                        style={{ background: '#4ade80', boxShadow: '0 0 6px #4ade8099' }} />
                    <span className="text-xs" style={{ color: '#4ade80' }}>All systems operational</span>
                </div>
                <span className="text-xs font-bold" style={{ color: '#4ade80' }}>{uptime}%</span>
            </div>
            <div className="p-2 flex flex-col gap-1">
                {services.map((s, i) => (
                    <div key={s.label}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i === tick % services.length ? 'rgba(74,222,128,0.06)' : 'transparent' }}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: s.color }} />
                        <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.65)' }}>{s.label}</span>
                        <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.3)' }}>{s.latency}</span>
                        <span className="text-xs font-medium" style={{ color: s.color }}>{s.status}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

/* ── Data ────────────────────────────────────────── */
const benefits = [
    {
        id: 1,
        icon: ShieldOff,
        accent: '#f87171',
        eyebrow: 'Attack Prevention',
        title: 'Prevent Breaches',
        stat: { value: '99.9%', label: 'Threat block rate' },
        description: 'Layered defences across your perimeter, network, and endpoints stop breaches before they start — blocking ransomware, credential stuffing, zero-day exploits, and brute-force attacks automatically, around the clock.',
        highlights: ['Perimeter + endpoint coverage', 'Zero-day exploit blocking', 'Automated incident response'],
        mockup: BreachMockup,
    },
    {
        id: 2,
        icon: MessageSquareLock,
        accent: '#93c5fd',
        eyebrow: 'Data in Transit',
        title: 'Secure Communications',
        stat: { value: 'End-to-end', label: 'All channel encryption' },
        description: 'Every communication channel — email, VoIP, file transfers, and video conferencing — is encrypted in transit using modern protocols, ensuring sensitive conversations and data can never be intercepted or tampered with.',
        highlights: ['TLS 1.3 email gateway', 'SRTP voice encryption', 'E2E video & file transfer'],
        mockup: CommsMockup,
    },
    {
        id: 3,
        icon: Database,
        accent: '#5eead4',
        eyebrow: 'Data at Rest',
        title: 'Protect Sensitive Data',
        stat: { value: 'AES-256', label: 'At-rest encryption' },
        description: 'Customer PII, payment records, health data, and staff files are encrypted at rest, tokenised where appropriate, and access-controlled by role — keeping you compliant with GDPR, PCI-DSS, and HIPAA requirements.',
        highlights: ['AES-256 at-rest encryption', 'PII tokenisation', 'GDPR / PCI-DSS / HIPAA ready'],
        mockup: DataMockup,
    },
    {
        id: 4,
        icon: ServerCrash,
        accent: '#4ade80',
        eyebrow: 'Business Continuity',
        title: 'Maintain Uptime',
        stat: { value: '99.99%', label: 'Network availability' },
        description: 'Redundant security infrastructure — clustered firewalls, failover VPN gateways, and high-availability IDS/IPS — ensures your defences never become a single point of failure, keeping operations running without interruption.',
        highlights: ['Clustered firewall HA', 'Failover VPN gateways', 'Zero-downtime updates'],
        mockup: UptimeMockup,
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
const Benefits = () => {
    return (
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
                        Robust network security doesn't just block attacks — it protects your people,
                        your data, your reputation, and your ability to operate without interruption.
                    </p>
                </div>

                {/*
                    Row 1: [Prevent Breaches — 1/2] [Secure Comms — 1/2]
                    Row 2: [Protect Data — 1/2]     [Maintain Uptime — 1/2]
                */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {benefits.map(b => {
                        const IconComp = b.icon
                        const MockupComp = b.mockup
                        return (
                            <Card key={b.id}>
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

                                <h3 className="text-lg font-semibold text-white leading-snug">{b.title}</h3>

                                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.58)' }}>
                                    {b.description}
                                </p>

                                <StatPill value={b.stat.value} label={b.stat.label} accent={b.accent} />

                                <div className="flex flex-col gap-1.5">
                                    {b.highlights.map(h => (
                                        <div key={h} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: b.accent }} />
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

export default Benefits