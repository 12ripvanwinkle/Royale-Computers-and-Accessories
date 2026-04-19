import React, { useState, useEffect } from 'react'
import { glass, glassHover } from '../CCTV-Holder/CCTVStyles'
import { ClipboardSearch, Crosshair, Wrench, MonitorCheck } from 'lucide-react'

/* ── Security Assessment Mockup ──────────────────── */
function AssessmentMockup() {
  const [scanning, setScanning] = useState(0)
  useEffect(() => {
    const iv = setInterval(() => setScanning(s => (s + 1) % 5), 900)
    return () => clearInterval(iv)
  }, [])

  const checks = [
    { label: 'Network exposure', score: 82, color: '#4ade80' },
    { label: 'Auth weaknesses', score: 61, color: '#fbbf24' },
    { label: 'Patch compliance', score: 90, color: '#4ade80' },
    { label: 'Data exposure', score: 44, color: '#f87171' },
  ]

  return (
    <div className="rounded-xl overflow-hidden mt-auto"
      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="px-3 py-2 flex items-center justify-between"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>
          risk-assessment.sh
        </span>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#fbbf24' }} />
          <span className="text-xs" style={{ color: '#fbbf24' }}>Scanning…</span>
        </div>
      </div>
      <div className="p-3 flex flex-col gap-2">
        {checks.map((c, i) => (
          <div key={c.label}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>{c.label}</span>
              <span className="text-xs font-semibold" style={{ color: c.color }}>{c.score}</span>
            </div>
            <div className="w-full h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
              <div className="h-full rounded-full transition-all duration-700"
                style={{
                  width: i <= scanning ? `${c.score}%` : '0%',
                  background: c.color,
                  opacity: 0.8,
                }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Penetration Testing Mockup ──────────────────── */
function PenTestMockup() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const iv = setInterval(() => setActive(a => (a + 1) % 5), 1000)
    return () => clearInterval(iv)
  }, [])

  const steps = [
    { label: 'Reconnaissance', status: 'done' },
    { label: 'Vulnerability scan', status: 'done' },
    { label: 'Exploitation attempt', status: 'active' },
    { label: 'Privilege escalation', status: 'pending' },
    { label: 'Report generation', status: 'pending' },
  ]

  const statusStyle = (s, i) => {
    if (i < active) return { color: '#4ade80' }
    if (i === active) return { color: '#f87171' }
    return { color: 'rgba(255,255,255,0.28)' }
  }

  const dot = (s, i) => {
    if (i < active) return '#4ade80'
    if (i === active) return '#f87171'
    return 'rgba(255,255,255,0.2)'
  }

  return (
    <div className="rounded-xl overflow-hidden mt-auto"
      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="px-3 py-2"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>
          pentest-pipeline
        </span>
      </div>
      <div className="p-3 flex flex-col gap-0">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-center gap-3 py-1.5">
            <div className="flex flex-col items-center shrink-0" style={{ width: 10 }}>
              <div className="w-2 h-2 rounded-full transition-all duration-300"
                style={{ background: dot(s.status, i), boxShadow: i === active ? `0 0 6px ${dot(s.status, i)}` : 'none' }} />
              {i < steps.length - 1 && (
                <div className="w-px flex-1 mt-0.5" style={{ height: 10, background: 'rgba(255,255,255,0.1)' }} />
              )}
            </div>
            <span className="text-xs transition-all duration-300" style={statusStyle(s.status, i)}>
              {s.label}
            </span>
            {i === active && (
              <span className="text-xs ml-auto px-1.5 py-0.5 rounded"
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

/* ── Implementation Mockup ───────────────────────── */
function ImplementationMockup() {
  const [done, setDone] = useState(2)
  useEffect(() => {
    const iv = setInterval(() => setDone(d => d >= 5 ? 0 : d + 1), 1400)
    return () => clearInterval(iv)
  }, [])

  const tasks = [
    'Firewall configuration',
    'Endpoint agent deploy',
    'SIEM integration',
    'Policy enforcement',
    'Go-live & handover',
  ]

  return (
    <div className="rounded-xl overflow-hidden mt-auto"
      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="px-3 py-2 flex items-center justify-between"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>
          deployment-checklist
        </span>
        <span className="text-xs" style={{ color: '#a78bfa' }}>{done}/5 complete</span>
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
              style={{ color: i < done ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.35)', textDecoration: i < done ? 'none' : 'none' }}>
              {t}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Monitoring & Support Mockup ─────────────────── */
function MonitoringMockup() {
  const [tick, setTick] = useState(0)
  useEffect(() => {
    const iv = setInterval(() => setTick(t => t + 1), 800)
    return () => clearInterval(iv)
  }, [])

  const events = [
    { label: 'Brute-force blocked', time: 'just now', ok: false, color: '#f87171' },
    { label: 'Patch pushed — 14 hosts', time: '1m ago', ok: true, color: '#4ade80' },
    { label: 'Anomalous login flagged', time: '3m ago', ok: false, color: '#fbbf24' },
    { label: 'SSL cert renewed', time: '6m ago', ok: true, color: '#4ade80' },
  ]

  const activeRow = tick % events.length

  return (
    <div className="rounded-xl overflow-hidden mt-auto"
      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="px-3 py-2 flex items-center gap-2"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="w-2 h-2 rounded-full" style={{ background: '#4ade80', boxShadow: '0 0 5px #4ade8099' }} />
        <span className="text-xs" style={{ color: '#4ade80' }}>Live threat feed</span>
      </div>
      <div className="p-2 flex flex-col gap-1">
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

const services = [
  {
    id: 1,
    icon: ClipboardSearch,
    accent: '#fbbf24',
    eyebrow: 'Know Your Risk',
    title: 'Security Assessments',
    description:
      'We perform thorough evaluations of your infrastructure, applications, and policies — scoring vulnerabilities, mapping attack surfaces, and delivering a prioritised remediation roadmap.',
    highlights: ['Risk scoring & ranking', 'Full attack surface mapping', 'Remediation roadmap included'],
    mockup: AssessmentMockup,
    colSpan: 'md:col-span-3',
  },
  {
    id: 2,
    icon: Crosshair,
    accent: '#f87171',
    eyebrow: 'Simulate Real Attacks',
    title: 'Penetration Testing',
    description:
      'Our ethical hackers replicate real-world attack techniques — probing networks, applications, and social engineering vectors to expose exploitable gaps before bad actors do.',
    highlights: ['Network & app pen testing', 'Social engineering simulations', 'Full exploitation report'],
    mockup: PenTestMockup,
    colSpan: 'md:col-span-3',
  },
  {
    id: 3,
    icon: Wrench,
    accent: '#a78bfa',
    eyebrow: 'Deploy & Configure',
    title: 'Implementation',
    description:
      'From firewall setup to SIEM integration and endpoint deployment — we handle the full technical rollout of your security stack, configured to your environment and policies.',
    highlights: ['End-to-end deployment', 'SIEM & EDR integration', 'Staff handover & training'],
    mockup: ImplementationMockup,
    colSpan: 'md:col-span-2',
  },
  {
    id: 4,
    icon: MonitorCheck,
    accent: '#4ade80',
    eyebrow: '24 / 7 Coverage',
    title: 'Monitoring & Support',
    description:
      'Round-the-clock threat monitoring, real-time alerting, and a dedicated support team — so threats are caught and neutralised fast, with minimal disruption to your operations.',
    highlights: ['24/7 SOC monitoring', 'Sub-4hr incident response', 'Dedicated account engineer'],
    mockup: MonitoringMockup,
    colSpan: 'md:col-span-4',
  },
]

function ServiceCard({ item, index }) {
  const [hovered, setHovered] = useState(false)
  const IconComp = item.icon
  const MockupComp = item.mockup

  return (
    <div
      className={`${item.colSpan} rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden`}
      style={hovered ? glassHover : glass}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top row */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: `${item.accent}18`, color: item.accent, border: `1px solid ${item.accent}30` }}>
            <IconComp size={18} />
          </div>
          <span className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: 'rgba(255,255,255,0.4)' }}>
            {item.eyebrow}
          </span>
        </div>
        <span className="font-black select-none"
          style={{ fontSize: 36, color: 'rgba(255,255,255,0.06)', lineHeight: 1, fontFamily: 'monospace' }}>
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-white leading-snug">{item.title}</h3>

      {/* Description */}
      <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.58)' }}>
        {item.description}
      </p>

      {/* Highlights */}
      <div className="flex flex-col gap-1.5">
        {item.highlights.map(h => (
          <div key={h} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: item.accent }} />
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>{h}</span>
          </div>
        ))}
      </div>

      {/* Animated Mockup */}
      <MockupComp />
    </div>
  )
}

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
            From identifying risk to deploying defences and keeping watch around the clock —
            our services cover every phase of your security lifecycle.
          </p>
        </div>

        {/* Bento Grid
            Row 1: [Assessments — 3col] [Pen Testing — 3col]    (2 equal halves)
            Row 2: [Implementation — 2col] [Monitoring — 4col]  (narrow + wide)
        */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {services.map((item, index) => (
            <ServiceCard key={item.id} item={item} index={index} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Services