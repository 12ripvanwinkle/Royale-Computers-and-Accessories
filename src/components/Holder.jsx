import React, { useState, useEffect } from 'react'
import { glass, glassHover } from '../CCTV-Holder/CCTVStyles'
import { ScanSearch, PenTool, Wrench, FlaskConical, Activity } from 'lucide-react'

/* ── Risk Assessment Mockup ──────────────────────── */
function RiskMockup() {
  const [scanning, setScanning] = useState(0)
  useEffect(() => {
    const iv = setInterval(() => setScanning(s => (s + 1) % 4), 900)
    return () => clearInterval(iv)
  }, [])
  const risks = [
    { label: 'Exposed endpoints', level: 'High', color: '#f87171', w: 85 },
    { label: 'Unpatched services', level: 'Med', color: '#fbbf24', w: 58 },
    { label: 'Access controls', level: 'Low', color: '#4ade80', w: 32 },
    { label: 'Data encryption', level: 'Med', color: '#fbbf24', w: 61 },
  ]
  return (
    <div className="rounded-xl overflow-hidden mt-auto"
      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="px-3 py-2 flex items-center justify-between"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>risk-matrix.sh</span>
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
              <span className="text-xs font-semibold px-1.5 py-0.5 rounded"
                style={{ background: `${r.color}18`, color: r.color, border: `1px solid ${r.color}30` }}>
                {r.level}
              </span>
            </div>
            <div className="w-full h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
              <div className="h-full rounded-full transition-all duration-700"
                style={{ width: i <= scanning ? `${r.w}%` : '0%', background: r.color, opacity: 0.75 }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Security Design Mockup ──────────────────────── */
function DesignMockup() {
  const [active, setActive] = useState(null)
  const layers = [
    { label: 'Perimeter', icon: '⬡', color: '#93c5fd', desc: 'Firewall + WAF' },
    { label: 'Network', icon: '⬡', color: '#a78bfa', desc: 'Segmentation' },
    { label: 'Application', icon: '⬡', color: '#5eead4', desc: 'Auth + APIs' },
    { label: 'Data', icon: '⬡', color: '#4ade80', desc: 'Encryption' },
  ]
  return (
    <div className="rounded-xl overflow-hidden mt-auto"
      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="px-3 py-2"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>security-architecture</span>
      </div>
      <div className="p-3 flex flex-col gap-1.5">
        {layers.map((l, i) => (
          <div key={l.label}
            className="flex items-center gap-3 px-2.5 py-2 rounded-lg cursor-default transition-all duration-200"
            style={{
              background: active === i ? `${l.color}10` : 'rgba(255,255,255,0.03)',
              border: `1px solid ${active === i ? l.color + '30' : 'rgba(255,255,255,0.07)'}`,
              marginLeft: i * 6,
            }}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
          >
            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: l.color }} />
            <span className="text-xs font-medium flex-1" style={{ color: 'rgba(255,255,255,0.7)' }}>{l.label}</span>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{l.desc}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Implementation Mockup ───────────────────────── */
function ImplMockup() {
  const [done, setDone] = useState(0)
  useEffect(() => {
    const iv = setInterval(() => setDone(d => d >= 5 ? 0 : d + 1), 1100)
    return () => clearInterval(iv)
  }, [])
  const tasks = [
    'Firewall rules applied',
    'Endpoint agents deployed',
    'SIEM configured',
    'Policies enforced',
    'Go-live confirmed',
  ]
  return (
    <div className="rounded-xl overflow-hidden mt-auto"
      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="px-3 py-2 flex items-center justify-between"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>deploy-checklist</span>
        <span className="text-xs" style={{ color: '#a78bfa' }}>{done}/{tasks.length}</span>
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
            <span className="text-xs" style={{ color: i < done ? 'rgba(255,255,255,0.72)' : 'rgba(255,255,255,0.32)' }}>
              {t}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Testing Mockup ──────────────────────────────── */
function TestingMockup() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const iv = setInterval(() => setActive(a => (a + 1) % 5), 950)
    return () => clearInterval(iv)
  }, [])
  const steps = [
    { label: 'Reconnaissance', done: true },
    { label: 'Scanning', done: true },
    { label: 'Exploitation', done: false },
    { label: 'Post-exploit', done: false },
    { label: 'Reporting', done: false },
  ]
  return (
    <div className="rounded-xl overflow-hidden mt-auto"
      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="px-3 py-2"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>pentest-pipeline</span>
      </div>
      <div className="p-3 flex flex-col gap-0">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-center gap-3 py-1.5">
            <div className="flex flex-col items-center shrink-0" style={{ width: 10 }}>
              <div className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  background: i < active ? '#4ade80' : i === active ? '#f87171' : 'rgba(255,255,255,0.15)',
                  boxShadow: i === active ? '0 0 6px #f87171' : 'none',
                }} />
              {i < steps.length - 1 && (
                <div style={{ width: 1, height: 10, background: 'rgba(255,255,255,0.1)', marginTop: 2 }} />
              )}
            </div>
            <span className="text-xs transition-all duration-300"
              style={{ color: i < active ? '#4ade80' : i === active ? '#f87171' : 'rgba(255,255,255,0.28)' }}>
              {s.label}
            </span>
            {i === active && (
              <span className="ml-auto text-xs px-1.5 py-0.5 rounded"
                style={{ background: 'rgba(248,113,113,0.12)', color: '#f87171', border: '1px solid rgba(248,113,113,0.25)' }}>
                live
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Monitoring Mockup ───────────────────────────── */
function MonitorMockup() {
  const [tick, setTick] = useState(0)
  useEffect(() => {
    const iv = setInterval(() => setTick(t => t + 1), 750)
    return () => clearInterval(iv)
  }, [])
  const events = [
    { label: 'Brute-force blocked', time: 'just now', color: '#f87171' },
    { label: 'Patch pushed — 14 hosts', time: '1m ago', color: '#4ade80' },
    { label: 'Anomalous login flagged', time: '3m ago', color: '#fbbf24' },
    { label: 'SSL cert renewed', time: '5m ago', color: '#4ade80' },
  ]
  const bars = [30, 55, 40, 75, 50, 88, 62, 45, 70, 95, 60, 80]
  const activeRow = tick % events.length
  return (
    <div className="rounded-xl overflow-hidden mt-auto"
      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="px-3 py-2 flex items-center gap-2"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="w-2 h-2 rounded-full" style={{ background: '#4ade80', boxShadow: '0 0 5px #4ade8099' }} />
        <span className="text-xs" style={{ color: '#4ade80' }}>Live threat feed</span>
      </div>
      {/* Mini sparkline */}
      <div className="px-3 pt-2 flex items-end gap-0.5" style={{ height: 36 }}>
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-sm transition-all duration-300"
            style={{
              height: `${h}%`,
              background: i === bars.length - 1 ? '#4ade80' : 'rgba(74,222,128,0.25)',
              borderRadius: 2,
            }} />
        ))}
      </div>
      <div className="p-2 flex flex-col gap-0.5">
        {events.map((e, i) => (
          <div key={e.label}
            className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
            style={{ background: i === activeRow ? 'rgba(255,255,255,0.06)' : 'transparent' }}>
            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: e.color }} />
            <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.7)' }}>{e.label}</span>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{e.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const steps = [
  {
    id: 1,
    icon: ScanSearch,
    accent: '#fbbf24',
    eyebrow: 'Step 01',
    title: 'Risk Assessment',
    description:
      'We begin by mapping your entire attack surface — infrastructure, apps, and access points. Every risk is scored and ranked so remediation effort goes exactly where it matters most.',
    highlights: ['Full attack surface mapping', 'Risk scoring & prioritisation', 'Executive summary report'],
    mockup: RiskMockup,
    colSpan: 'md:col-span-3',
  },
  {
    id: 2,
    icon: PenTool,
    accent: '#93c5fd',
    eyebrow: 'Step 02',
    title: 'Security Design',
    description:
      'Using assessment findings, we architect a layered defence strategy — from perimeter firewalls and network segmentation down to application-level controls and data encryption policies.',
    highlights: ['Defence-in-depth architecture', 'Zero-trust network design', 'Policy & compliance alignment'],
    mockup: DesignMockup,
    colSpan: 'md:col-span-3',
  },
  {
    id: 3,
    icon: Wrench,
    accent: '#a78bfa',
    eyebrow: 'Step 03',
    title: 'Implementation',
    description:
      'Our engineers deploy, configure, and integrate every component of your security stack — from endpoint agents and SIEM platforms to firewall rules and access control policies.',
    highlights: ['End-to-end deployment', 'SIEM & EDR integration', 'Staff training & handover'],
    mockup: ImplMockup,
    colSpan: 'md:col-span-2',
  },
  {
    id: 4,
    icon: FlaskConical,
    accent: '#f87171',
    eyebrow: 'Step 04',
    title: 'Testing',
    description:
      'Before going live, we run penetration tests and red team exercises to validate every control — ensuring your defences hold up against real-world attack techniques.',
    highlights: ['Full penetration testing', 'Red team simulations', 'Vulnerability validation'],
    mockup: TestingMockup,
    colSpan: 'md:col-span-2',
  },
  {
    id: 5,
    icon: Activity,
    accent: '#4ade80',
    eyebrow: 'Step 05',
    title: 'Monitoring',
    description:
      'Once live, our SOC team watches your environment around the clock — detecting anomalies, responding to incidents, and continuously tuning defences as your threat landscape evolves.',
    highlights: ['24/7 SOC monitoring', 'Sub-4hr incident response', 'Continuous posture improvement'],
    mockup: MonitorMockup,
    colSpan: 'md:col-span-2',
  },
]

function ProcessCard({ step, index }) {
  const [hovered, setHovered] = useState(false)
  const IconComp = step.icon
  const MockupComp = step.mockup

  return (
    <div
      className={`${step.colSpan} rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden`}
      style={hovered ? glassHover : glass}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top row */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: `${step.accent}18`, color: step.accent, border: `1px solid ${step.accent}30` }}>
            <IconComp size={18} />
          </div>
          <span className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: 'rgba(255,255,255,0.4)' }}>
            {step.eyebrow}
          </span>
        </div>
        <span className="font-black select-none"
          style={{ fontSize: 36, color: 'rgba(255,255,255,0.06)', lineHeight: 1, fontFamily: 'monospace' }}>
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-white leading-snug">{step.title}</h3>

      {/* Description */}
      <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.58)' }}>
        {step.description}
      </p>

      {/* Highlights */}
      <div className="flex flex-col gap-1.5">
        {step.highlights.map(h => (
          <div key={h} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: step.accent }} />
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>{h}</span>
          </div>
        ))}
      </div>

      {/* Animated mockup */}
      <MockupComp />
    </div>
  )
}

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
            A structured five-phase approach that takes you from raw exposure to a hardened,
            continuously monitored security posture.
          </p>
        </div>

        {/* Bento Grid
            Row 1: [Risk Assessment — 3col] [Security Design — 3col]     (2 equal halves)
            Row 2: [Implementation — 2col] [Testing — 2col] [Monitor — 2col]  (3 equal thirds)
        */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {steps.map((step, index) => (
            <ProcessCard key={step.id} step={step} index={index} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Process