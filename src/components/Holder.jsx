import React, { useState, useEffect } from 'react'
import { glass, glassHover } from '../CCTV-Holder/CCTVStyles'
import { ShieldAlert, Radar, Lock, Bug, Activity, Monitor } from 'lucide-react'

/* ── Firewall Mockup ─────────────────────────────── */
function FirewallMockup() {
    const [tick, setTick] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setTick(t => t + 1), 900)
        return () => clearInterval(iv)
    }, [])
    const rules = [
        { src: '192.168.1.0/24', dst: 'ANY',           action: 'ALLOW', color: '#4ade80' },
        { src: '0.0.0.0/0',      dst: 'PORT 22',       action: 'DENY',  color: '#f87171' },
        { src: '10.0.0.5',       dst: 'PORT 3389',     action: 'DENY',  color: '#f87171' },
        { src: 'TRUSTED',        dst: 'INTERNAL',      action: 'ALLOW', color: '#4ade80' },
    ]
    return (
        <div className="rounded-xl overflow-hidden mt-4"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="px-3 py-2 flex items-center justify-between"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>firewall-rules</span>
                <span className="text-xs" style={{ color: '#4ade80' }}>Active</span>
            </div>
            <div className="p-2 flex flex-col gap-1">
                {rules.map((r, i) => (
                    <div key={i}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i === tick % rules.length ? 'rgba(255,255,255,0.05)' : 'transparent' }}>
                        <span className="text-xs font-mono flex-1" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 10 }}>{r.src}</span>
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>→</span>
                        <span className="text-xs font-mono flex-1" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 10 }}>{r.dst}</span>
                        <span className="text-xs font-bold px-1.5 py-0.5 rounded"
                            style={{ background: `${r.color}12`, color: r.color, border: `1px solid ${r.color}25`, fontSize: 9 }}>
                            {r.action}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

/* ── IDS/IPS Mockup ──────────────────────────────── */
function IdsMockup() {
    const [active, setActive] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setActive(a => (a + 1) % 4), 1100)
        return () => clearInterval(iv)
    }, [])
    const alerts = [
        { label: 'Port scan detected',     severity: 'High', color: '#f87171', blocked: true },
        { label: 'SQL injection attempt',  severity: 'High', color: '#f87171', blocked: true },
        { label: 'Unusual auth pattern',   severity: 'Med',  color: '#fbbf24', blocked: true },
        { label: 'DNS anomaly flagged',    severity: 'Low',  color: '#4ade80', blocked: false },
    ]
    return (
        <div className="rounded-xl overflow-hidden mt-4"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="px-3 py-2 flex items-center gap-2"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#f87171', boxShadow: '0 0 4px #f8717199' }} />
                <span className="text-xs" style={{ color: '#f87171' }}>Threat feed</span>
            </div>
            <div className="p-2 flex flex-col gap-1">
                {alerts.map((a, i) => (
                    <div key={a.label}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i === active ? 'rgba(255,255,255,0.05)' : 'transparent' }}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: a.color }} />
                        <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.65)' }}>{a.label}</span>
                        <span className="text-xs px-1.5 py-0.5 rounded"
                            style={{ background: `${a.color}12`, color: a.color, border: `1px solid ${a.color}25`, fontSize: 9 }}>
                            {a.severity}
                        </span>
                        <span className="text-xs font-semibold" style={{ color: a.blocked ? '#4ade80' : '#fbbf24' }}>
                            {a.blocked ? '✓' : '~'}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

/* ── VPN Mockup ──────────────────────────────────── */
function VpnMockup() {
    const [ping, setPing] = useState(14)
    const [active, setActive] = useState(0)
    useEffect(() => {
        const iv1 = setInterval(() => setPing(p => Math.max(8, Math.min(40, p + (Math.random() > 0.5 ? 2 : -2)))), 700)
        const iv2 = setInterval(() => setActive(a => (a + 1) % 3), 1200)
        return () => { clearInterval(iv1); clearInterval(iv2) }
    }, [])
    const tunnels = [
        { label: 'HQ ↔ Branch London',  users: 14, color: '#a78bfa' },
        { label: 'HQ ↔ Remote Workers', users: 38, color: '#a78bfa' },
        { label: 'HQ ↔ Data Centre',    users: 3,  color: '#a78bfa' },
    ]
    return (
        <div className="rounded-xl overflow-hidden mt-4"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="px-3 py-2 flex items-center justify-between"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#a78bfa', boxShadow: '0 0 4px #a78bfa99' }} />
                    <span className="text-xs" style={{ color: '#a78bfa' }}>Encrypted tunnels</span>
                </div>
                <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.3)' }}>{ping}ms</span>
            </div>
            <div className="p-2 flex flex-col gap-1">
                {tunnels.map((t, i) => (
                    <div key={t.label}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i === active ? 'rgba(167,139,250,0.08)' : 'transparent' }}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: t.color }} />
                        <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.65)' }}>{t.label}</span>
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{t.users} users</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

/* ── Malware Mockup ──────────────────────────────── */
function MalwareMockup() {
    const [scanning, setScanning] = useState(0)
    const [blocked, setBlocked] = useState(7)
    useEffect(() => {
        const iv1 = setInterval(() => setScanning(s => (s + 1) % 5), 800)
        const iv2 = setInterval(() => setBlocked(b => b + (Math.random() > 0.8 ? 1 : 0)), 2000)
        return () => { clearInterval(iv1); clearInterval(iv2) }
    }, [])
    const threats = [
        { label: 'Ransomware signature',  score: 100, color: '#f87171' },
        { label: 'Trojan heuristic',      score: 78,  color: '#fbbf24' },
        { label: 'Spyware pattern',       score: 92,  color: '#f87171' },
        { label: 'Adware detected',       score: 55,  color: '#fbbf24' },
    ]
    return (
        <div className="rounded-xl overflow-hidden mt-4"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="px-3 py-2 flex items-center justify-between"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>malware-scan</span>
                <span className="text-xs font-semibold" style={{ color: '#f87171' }}>{blocked} blocked today</span>
            </div>
            <div className="p-3 flex flex-col gap-2">
                {threats.map((t, i) => (
                    <div key={t.label}>
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>{t.label}</span>
                            <span className="text-xs font-semibold" style={{ color: t.color }}>{t.score}%</span>
                        </div>
                        <div className="w-full h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                            <div className="h-full rounded-full transition-all duration-700"
                                style={{ width: i <= scanning ? `${t.score}%` : '0%', background: t.color, opacity: 0.75 }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

/* ── Traffic Monitoring Mockup ───────────────────── */
function TrafficMockup() {
    const [vals, setVals] = useState([40, 55, 35, 70, 50, 80, 60, 75, 45, 88, 65, 72])
    useEffect(() => {
        const iv = setInterval(() => {
            setVals(v => {
                const next = [...v.slice(1), Math.max(20, Math.min(99, v[v.length - 1] + (Math.random() > 0.5 ? 8 : -8)))]
                return next
            })
        }, 600)
        return () => clearInterval(iv)
    }, [])
    return (
        <div className="rounded-xl p-3 mt-4"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="flex items-center justify-between mb-3">
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Network throughput</span>
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#5eead4' }} />
                    <span className="text-xs" style={{ color: '#5eead4' }}>Live</span>
                </div>
            </div>
            <div className="flex items-end gap-0.5 mb-3" style={{ height: 44 }}>
                {vals.map((v, i) => (
                    <div key={i} className="flex-1 rounded-sm transition-all duration-500"
                        style={{
                            height: `${v}%`,
                            background: i === vals.length - 1
                                ? '#5eead4'
                                : `rgba(94,234,212,${0.15 + (i / vals.length) * 0.3})`,
                            borderRadius: 2,
                        }} />
                ))}
            </div>
            <div className="grid grid-cols-3 gap-2">
                {[
                    { label: 'Inbound',  value: '1.2 GB/s', color: '#5eead4' },
                    { label: 'Outbound', value: '0.8 GB/s', color: '#93c5fd' },
                    { label: 'Blocked',  value: '340 req',  color: '#f87171' },
                ].map(s => (
                    <div key={s.label} className="rounded-lg p-2 text-center"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <div className="text-xs font-bold" style={{ color: s.color }}>{s.value}</div>
                        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>{s.label}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

/* ── Endpoint Mockup ─────────────────────────────── */
function EndpointMockup() {
    const [active, setActive] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setActive(a => (a + 1) % 4), 1000)
        return () => clearInterval(iv)
    }, [])
    const endpoints = [
        { label: 'Workstation-01',  status: 'Protected', color: '#4ade80', os: 'Win 11' },
        { label: 'Laptop-Sarah',    status: 'Protected', color: '#4ade80', os: 'macOS'  },
        { label: 'Server-DB-01',    status: 'Protected', color: '#4ade80', os: 'Ubuntu' },
        { label: 'Tablet-Reception',status: 'Updating',  color: '#fbbf24', os: 'iOS'   },
    ]
    return (
        <div className="rounded-xl overflow-hidden mt-4"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="px-3 py-2 flex items-center justify-between"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Managed endpoints</span>
                <span className="text-xs" style={{ color: '#4ade80' }}>3/4 protected</span>
            </div>
            <div className="p-2 flex flex-col gap-1">
                {endpoints.map((e, i) => (
                    <div key={e.label}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i === active ? 'rgba(255,255,255,0.05)' : 'transparent' }}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: e.color }} />
                        <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.65)' }}>{e.label}</span>
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.28)' }}>{e.os}</span>
                        <span className="text-xs font-medium" style={{ color: e.color }}>{e.status}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

/* ── Data ────────────────────────────────────────── */
const features = [
    {
        id: 1,
        icon: ShieldAlert,
        accent: '#f87171',
        eyebrow: 'Perimeter Defence',
        title: 'Firewalls',
        stat: { value: 'Next-gen', label: 'Deep packet inspection' },
        description: 'Next-generation firewalls inspect every packet at the application layer — enforcing granular allow/deny rules, blocking known bad actors, and preventing unauthorised access across all network segments.',
        highlights: ['Application-layer filtering', 'Geo-blocking & IP reputation', 'Zone-based rule sets'],
        mockup: FirewallMockup,
    },
    {
        id: 2,
        icon: Radar,
        accent: '#f87171',
        eyebrow: 'Threat Detection',
        title: 'Intrusion Detection & Prevention',
        stat: { value: 'Real-time', label: 'Automated blocking' },
        description: 'IDS/IPS systems continuously analyse traffic for attack signatures and behavioural anomalies — automatically blocking threats like port scans, injection attempts, and lateral movement before damage occurs.',
        highlights: ['Signature & behaviour analysis', 'Automatic threat blocking', 'Full alert audit trail'],
        mockup: IdsMockup,
    },
    {
        id: 3,
        icon: Lock,
        accent: '#a78bfa',
        eyebrow: 'Secure Connectivity',
        title: 'VPN Security',
        stat: { value: 'AES-256', label: 'Encrypted tunnels' },
        description: 'Site-to-site and remote-access VPNs ensure all traffic between offices, data centres, and remote workers is encrypted end-to-end — with certificate-based authentication and split-tunnelling controls.',
        highlights: ['Site-to-site & remote access', 'Certificate-based auth', 'Split-tunnelling control'],
        mockup: VpnMockup,
    },
    {
        id: 4,
        icon: Bug,
        accent: '#fbbf24',
        eyebrow: 'Threat Prevention',
        title: 'Malware Protection',
        stat: { value: 'Zero-day', label: 'Heuristic detection' },
        description: 'Multi-layered malware protection combines signature databases with heuristic and behavioural engines — catching known threats instantly and identifying zero-day variants before they execute.',
        highlights: ['Signature + heuristic engines', 'Real-time file scanning', 'Automatic quarantine'],
        mockup: MalwareMockup,
    },
    {
        id: 5,
        icon: Activity,
        accent: '#5eead4',
        eyebrow: 'Network Visibility',
        title: 'Traffic Monitoring',
        stat: { value: 'Full flow', label: 'Packet-level analysis' },
        description: 'Deep flow analysis gives complete visibility into what is traversing your network — identifying bandwidth hogs, unusual data transfers, shadow IT, and exfiltration attempts in real time.',
        highlights: ['Full packet capture', 'Bandwidth usage by device', 'Anomalous flow alerting'],
        mockup: TrafficMockup,
    },
    {
        id: 6,
        icon: Monitor,
        accent: '#4ade80',
        eyebrow: 'Device Protection',
        title: 'Endpoint Security',
        stat: { value: 'Centralised', label: 'Policy management' },
        description: 'EDR agents on every managed device provide continuous protection, patch status monitoring, and behavioural telemetry — all managed from a single console regardless of OS or location.',
        highlights: ['EDR on all managed devices', 'Patch compliance tracking', 'Remote isolation capability'],
        mockup: EndpointMockup,
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
const KeyFeatures = () => {
    return (
        <div className="w-full px-4 md:px-6 py-16 md:py-24">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-xs font-semibold tracking-widest uppercase mb-4"
                        style={{ color: 'rgba(255,255,255,0.45)' }}>
                        Network-Wide Coverage
                    </p>
                    <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
                        Key Features
                    </h2>
                    <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
                        style={{ color: 'rgba(255,255,255,0.55)' }}>
                        Every layer of your network — from the perimeter to every managed device —
                        protected by purpose-built security technologies working in concert.
                    </p>
                </div>

                {/*
                    Row 1: [Firewalls — 1/3] [IDS/IPS — 1/3] [VPN — 1/3]
                    Row 2: [Malware — 1/3] [Traffic — 1/3] [Endpoint — 1/3]
                */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {features.map(f => {
                        const IconComp = f.icon
                        const MockupComp = f.mockup
                        return (
                            <Card key={f.id}>
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                            style={{ background: `${f.accent}18`, color: f.accent, border: `1px solid ${f.accent}30` }}>
                                            <IconComp size={18} />
                                        </div>
                                        <span className="text-xs font-semibold tracking-widest uppercase"
                                            style={{ color: 'rgba(255,255,255,0.4)' }}>
                                            {f.eyebrow}
                                        </span>
                                    </div>
                                    <span className="font-black select-none"
                                        style={{ fontSize: 36, color: 'rgba(255,255,255,0.06)', lineHeight: 1, fontFamily: 'monospace' }}>
                                        {String(f.id).padStart(2, '0')}
                                    </span>
                                </div>

                                <h3 className="text-base font-semibold text-white leading-snug">{f.title}</h3>

                                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.58)' }}>
                                    {f.description}
                                </p>

                                <StatPill value={f.stat.value} label={f.stat.label} accent={f.accent} />

                                <div className="flex flex-col gap-1.5">
                                    {f.highlights.map(h => (
                                        <div key={h} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: f.accent }} />
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

export default KeyFeatures