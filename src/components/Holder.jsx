import React, { useState, useEffect } from 'react'
import { glass, glassHover } from '../CCTV-Holder/CCTVStyles'
import { AppWindow, Cloud, Plug2, UserCheck, DatabaseZap } from 'lucide-react'

/* ── App Security Mockup ─────────────────────────── */
function AppSecMockup() {
  const layers = [
    { label: 'Input Validation', status: 'pass', color: '#4ade80' },
    { label: 'Auth Middleware', status: 'pass', color: '#4ade80' },
    { label: 'SQL Injection', status: 'blocked', color: '#f87171' },
    { label: 'XSS Filter', status: 'pass', color: '#4ade80' },
  ]
  return (
    <div className="rounded-xl overflow-hidden mt-auto"
      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="px-3 py-2 flex items-center gap-1.5"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        {['#f87171','#fbbf24','#4ade80'].map(c => (
          <div key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />
        ))}
        <span className="text-xs ml-1" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>
          security-scan
        </span>
      </div>
      <div className="p-3 flex flex-col gap-1.5">
        {layers.map(l => (
          <div key={l.label} className="flex items-center justify-between px-2 py-1.5 rounded-lg"
            style={{ background: 'rgba(255,255,255,0.04)' }}>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'monospace' }}>{l.label}</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{ background: `${l.color}18`, color: l.color, border: `1px solid ${l.color}35` }}>
              {l.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Cloud Security Mockup ───────────────────────── */
function CloudMockup() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const iv = setInterval(() => setActive(a => (a + 1) % 3), 1200)
    return () => clearInterval(iv)
  }, [])
  const nodes = ['us-east-1', 'eu-west-2', 'ap-south-1']
  return (
    <div className="rounded-xl p-3 mt-auto"
      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Cloud regions</span>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#4ade80', boxShadow: '0 0 4px #4ade8099' }} />
          <span className="text-xs" style={{ color: '#4ade80' }}>All secured</span>
        </div>
      </div>
      <div className="flex gap-2">
        {nodes.map((n, i) => (
          <div key={n} className="flex-1 rounded-lg py-2 text-center transition-all duration-300"
            style={{
              background: i === active ? 'rgba(147,197,253,0.12)' : 'rgba(255,255,255,0.04)',
              border: `1px solid ${i === active ? 'rgba(147,197,253,0.3)' : 'rgba(255,255,255,0.08)'}`,
            }}>
            <div className="w-1.5 h-1.5 rounded-full mx-auto mb-1"
              style={{ background: i === active ? '#93c5fd' : '#4ade80' }} />
            <span className="text-xs" style={{ color: i === active ? '#93c5fd' : 'rgba(255,255,255,0.4)', fontFamily: 'monospace', fontSize: 9 }}>{n}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── API Security Mockup ─────────────────────────── */
function ApiMockup() {
  const calls = [
    { method: 'GET', path: '/api/users', status: 200 },
    { method: 'POST', path: '/api/auth', status: 401 },
    { method: 'DELETE', path: '/api/data', status: 403 },
  ]
  const statusColor = s => s === 200 ? '#4ade80' : s === 401 ? '#fbbf24' : '#f87171'
  return (
    <div className="rounded-xl overflow-hidden mt-auto"
      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="px-3 py-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>API Gateway Log</span>
      </div>
      <div className="p-2 flex flex-col gap-1">
        {calls.map(c => (
          <div key={c.path} className="flex items-center gap-2 px-2 py-1.5 rounded-lg"
            style={{ background: 'rgba(255,255,255,0.03)' }}>
            <span className="text-xs font-bold shrink-0" style={{ color: '#a78bfa', minWidth: 40, fontFamily: 'monospace' }}>{c.method}</span>
            <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'monospace' }}>{c.path}</span>
            <span className="text-xs font-semibold" style={{ color: statusColor(c.status) }}>{c.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── IAM Mockup ──────────────────────────────────── */
function IamMockup() {
  const roles = [
    { role: 'Admin', perms: 'Full access', color: '#f87171' },
    { role: 'Editor', perms: 'Read + Write', color: '#fbbf24' },
    { role: 'Viewer', perms: 'Read only', color: '#4ade80' },
  ]
  return (
    <div className="rounded-xl p-3 mt-auto"
      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="flex flex-col gap-1.5">
        {roles.map(r => (
          <div key={r.role} className="flex items-center gap-3 px-2 py-2 rounded-lg"
            style={{ background: 'rgba(255,255,255,0.04)' }}>
            <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
              style={{ background: `${r.color}18`, border: `1px solid ${r.color}35` }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: r.color }} />
            </div>
            <span className="text-xs font-medium text-white flex-1">{r.role}</span>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{r.perms}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Data Protection Mockup ──────────────────────── */
function DataMockup() {
  const [progress, setProgress] = useState(68)
  useEffect(() => {
    const iv = setInterval(() => setProgress(p => p >= 100 ? 20 : p + 2), 120)
    return () => clearInterval(iv)
  }, [])
  const fields = ['SSN ••••••••', 'Card ••••  4242', 'Email h***@***.com']
  return (
    <div className="rounded-xl p-3 mt-auto"
      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Encryption progress</span>
        <span className="text-xs font-semibold" style={{ color: '#5eead4' }}>{progress}%</span>
      </div>
      <div className="w-full h-1.5 rounded-full mb-3" style={{ background: 'rgba(255,255,255,0.08)' }}>
        <div className="h-full rounded-full transition-all duration-100"
          style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #5eead4, #93c5fd)' }} />
      </div>
      <div className="flex flex-col gap-1">
        {fields.map(f => (
          <div key={f} className="flex items-center gap-2 px-2 py-1 rounded"
            style={{ background: 'rgba(94,234,212,0.06)' }}>
            <div className="w-1 h-1 rounded-full" style={{ background: '#5eead4' }} />
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace' }}>{f}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const protections = [
  {
    id: 1,
    icon: AppWindow,
    accent: '#f87171',
    eyebrow: 'App Layer',
    title: 'Application Security',
    description: 'Protect your software at every layer — from input validation and authentication middleware to XSS filtering and SQL injection prevention. Code-level and runtime defences working together.',
    highlights: ['OWASP Top 10 coverage', 'Runtime app self-protection', 'Secure SDLC integration'],
    mockup: AppSecMockup,
    colSpan: 'md:col-span-3',
  },
  {
    id: 2,
    icon: Cloud,
    accent: '#93c5fd',
    eyebrow: 'Infrastructure',
    title: 'Cloud Security',
    description: 'Secure multi-cloud and hybrid environments with continuous posture management, workload protection, and region-level monitoring across all your cloud infrastructure.',
    highlights: ['CSPM & CWPP', 'Multi-region coverage', 'Zero-trust networking'],
    mockup: CloudMockup,
    colSpan: 'md:col-span-3',
  },
  {
    id: 3,
    icon: Plug2,
    accent: '#a78bfa',
    eyebrow: 'Integration Security',
    title: 'API Security',
    description: 'Authenticate, rate-limit, and monitor every API call. Prevent injection attacks, enforce schema validation, and log all gateway traffic for full audit trails.',
    highlights: ['OAuth 2.0 & JWT auth', 'Schema validation', 'Rate limiting & DDoS shield'],
    mockup: ApiMockup,
    colSpan: 'md:col-span-2',
  },
  {
    id: 4,
    icon: UserCheck,
    accent: '#fbbf24',
    eyebrow: 'Access Control',
    title: 'Identity & Access Management',
    description: 'Define and enforce who can access what — with granular role-based permissions, SSO, MFA, and full audit trails for every identity in your organisation.',
    highlights: ['SSO & MFA enforced', 'Granular RBAC', 'Privileged access management'],
    mockup: IamMockup,
    colSpan: 'md:col-span-2',
  },
  {
    id: 5,
    icon: DatabaseZap,
    accent: '#5eead4',
    eyebrow: 'Privacy & Compliance',
    title: 'Data Protection',
    description: 'Encrypt sensitive data at rest and in transit, mask PII in logs, and enforce retention policies — keeping you compliant with GDPR, HIPAA, and industry standards.',
    highlights: ['AES-256 + TLS 1.3', 'PII masking & tokenisation', 'GDPR / HIPAA ready'],
    mockup: DataMockup,
    colSpan: 'md:col-span-2',
  },
]

function ProtectionCard({ item, index }) {
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

      {/* Mockup */}
      <MockupComp />
    </div>
  )
}

const ProtectionTypes = () => {
  return (
    <div className="w-full px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: 'rgba(255,255,255,0.45)' }}>
            Comprehensive Coverage
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
            Types of Protection
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.55)' }}>
            Every vector. Every layer. Every threat — covered by purpose-built security
            disciplines that work together as a unified defence.
          </p>
        </div>

        {/* Bento Grid
            Row 1: [App Security — 3col] [Cloud Security — 3col]       (2 equal halves)
            Row 2: [API Security — 2col] [IAM — 2col] [Data — 2col]   (3 equal thirds)
        */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {protections.map((item, index) => (
            <ProtectionCard key={item.id} item={item} index={index} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default ProtectionTypes