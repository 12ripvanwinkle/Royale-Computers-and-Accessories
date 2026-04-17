import React, { useState } from 'react'
import { glass, glassHover } from '../CCTV-Holder/CCTVStyles'
import {
  ScanSearch,
  LockKeyhole,
  ShieldCheck,
  Plug,
  Users,
  Activity,
  ClipboardList,
} from 'lucide-react'

const features = [
  {
    id: 1,
    icon: ScanSearch,
    accent: '#f87171',
    eyebrow: 'Proactive Defence',
    title: 'Vulnerability Scanning',
    description:
      'Automated scans continuously probe your network and display infrastructure for weaknesses — flagging misconfigurations, outdated firmware, and exposure points before they can be exploited.',
    highlights: ['Scheduled & on-demand scans', 'Firmware version checks', 'Exposure risk reports'],
    stat: { value: '24/7', label: 'Continuous scanning' },
    wide: true,
  },
  {
    id: 2,
    icon: LockKeyhole,
    accent: '#93c5fd',
    eyebrow: 'Data at Rest & in Transit',
    title: 'Data Encryption',
    description:
      'All content, credentials, and communications are encrypted end-to-end using AES-256 and TLS 1.3 — ensuring data is unreadable even if intercepted.',
    highlights: ['AES-256 at rest', 'TLS 1.3 in transit', 'Encrypted backups'],
    stat: { value: 'AES-256', label: 'Encryption standard' },
    wide: false,
  },
  {
    id: 3,
    icon: ShieldCheck,
    accent: '#4ade80',
    eyebrow: 'Identity Verification',
    title: 'Multi-Factor Authentication',
    description:
      'MFA is enforced across all CMS logins and admin panels — adding a second layer of verification that blocks unauthorised access even when credentials are compromised.',
    highlights: ['TOTP & SMS support', 'Enforced for all admins', 'SSO-compatible'],
    stat: { value: 'MFA', label: 'Enforced on all logins' },
    wide: false,
  },
  {
    id: 4,
    icon: Plug,
    accent: '#a78bfa',
    eyebrow: 'Integration Security',
    title: 'Secure APIs',
    description:
      'Every integration point uses authenticated, rate-limited APIs with token-based access — preventing abuse, injection attacks, and unauthorised data exchange between connected systems.',
    highlights: ['OAuth 2.0 & API tokens', 'Rate limiting enforced', 'Input sanitisation'],
    stat: { value: 'OAuth 2.0', label: 'Auth standard' },
    wide: false,
  },
  {
    id: 5,
    icon: Users,
    accent: '#5eead4',
    eyebrow: 'Least Privilege Access',
    title: 'Role-Based Access Control',
    description:
      'Define exactly who can view, edit, publish, or manage screens. RBAC ensures staff only access what they need — reducing insider risk and accidental content changes.',
    highlights: ['Custom role definitions', 'Per-screen permissions', 'Audit trail per user'],
    stat: { value: 'RBAC', label: 'Granular permissions' },
    wide: false,
  },
  {
    id: 6,
    icon: Activity,
    accent: '#fbbf24',
    eyebrow: 'Always Watching',
    title: 'Real-Time Threat Monitoring',
    description:
      'Live dashboards and automated alerts surface anomalies the moment they occur — unusual login attempts, unexpected content changes, or device disconnections trigger instant notifications.',
    highlights: ['Live event dashboard', 'Instant alert notifications', 'Anomaly detection'],
    stat: { value: '<1s', label: 'Alert response time' },
    wide: true,
  },
  {
    id: 7,
    icon: ClipboardList,
    accent: '#fb923c',
    eyebrow: 'Compliance & Assurance',
    title: 'Security Audits',
    description:
      'Regular third-party and internal audits verify that your signage infrastructure meets industry compliance standards — with full documentation provided for regulatory reporting.',
    highlights: ['Annual third-party audits', 'Compliance documentation', 'Remediation support'],
    stat: { value: 'Annual', label: 'Full audit cycle' },
    wide: true,
  },
]

function StatPill({ value, label, accent }) {
  return (
    <div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
      style={{
        background: `${accent}12`,
        border: `1px solid ${accent}30`,
      }}
    >
      <span className="text-xs font-bold" style={{ color: accent }}>{value}</span>
      <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{label}</span>
    </div>
  )
}

function FeatureCard({ feature, index }) {
  const [hovered, setHovered] = useState(false)
  const IconComp = feature.icon

  return (
    <div
      className="rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-0.5"
      style={hovered ? glassHover : glass}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top row */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{
              background: `${feature.accent}18`,
              color: feature.accent,
              border: `1px solid ${feature.accent}30`,
            }}
          >
            <IconComp size={18} />
          </div>
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            {feature.eyebrow}
          </span>
        </div>
        <span
          className="font-black select-none"
          style={{
            fontSize: 36,
            color: 'rgba(255,255,255,0.06)',
            lineHeight: 1,
            fontFamily: 'monospace',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-white leading-snug">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.58)' }}>
        {feature.description}
      </p>

      {/* Stat pill */}
      <StatPill value={feature.stat.value} label={feature.stat.label} accent={feature.accent} />

      {/* Highlights */}
      <div className="flex flex-col gap-1.5 mt-auto pt-1">
        {feature.highlights.map(h => (
          <div key={h} className="flex items-center gap-2">
            <div
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: feature.accent }}
            />
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>{h}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const KeyFeatures = () => {
  return (
    <div className="w-full px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            Security-First Infrastructure
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
            Key Features
          </h2>
          <p
            className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            Every layer of your digital signage network is protected — from content delivery
            to device management, access control, and compliance.
          </p>
        </div>

        {/* Bento Grid
            Row 1: [Vulnerability — 2col wide] [Encryption — 1col]
            Row 2: [MFA — 1col] [Secure APIs — 1col] [RBAC — 1col]
            Row 3: [Real-time — 2col wide] [Audits — 1col]
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Row 1 */}
          <div className="md:col-span-2">
            <FeatureCard feature={features[0]} index={0} />
          </div>
          <div className="md:col-span-1">
            <FeatureCard feature={features[1]} index={1} />
          </div>

          {/* Row 2 */}
          <div className="md:col-span-1">
            <FeatureCard feature={features[2]} index={2} />
          </div>
          <div className="md:col-span-1">
            <FeatureCard feature={features[3]} index={3} />
          </div>
          <div className="md:col-span-1">
            <FeatureCard feature={features[4]} index={4} />
          </div>

          {/* Row 3 */}
          <div className="md:col-span-1">
            <FeatureCard feature={features[5]} index={5} />
          </div>
          <div className="md:col-span-2">
            <FeatureCard feature={features[6]} index={6} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default KeyFeatures