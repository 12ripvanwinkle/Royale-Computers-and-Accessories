import { useState } from "react"
import { glass, glassStrong } from '../CCTV-Holder/CCTVStyles'
import { ShieldCheck, Bug, Rocket, Activity } from 'lucide-react'

// ─── Data ─────────────────────────────────────────────────────────────────────

const features = [
  {
    id: 'assessment', span: 2, strong: true,
    icon: ShieldCheck, color: '#f87171',
    pill: 'Step 1', eyebrow: 'Risk Assessment',
    headline: 'Know your exposure before attackers do.',
    body: 'We scan your entire stack — code, dependencies, infrastructure, and configuration — surfacing every exploitable weakness with a clear severity score and a prioritised fix list.',
    bullets: [
      'Full OWASP Top 10 vulnerability scan',
      'Dependency & supply-chain audit',
      'Auth, session & data-exposure checks',
      'Delivered within 48 hours',
    ],
    stats: [['OWASP', 'Top 10'], ['Severity', 'Scored'], ['48h', 'Turnaround']],
  },
  {
    id: 'pentest', span: 1, strong: false,
    icon: Bug, color: '#fbbf24',
    pill: 'Step 2', eyebrow: 'Penetration Testing',
    headline: 'Real attacks. Safe environment.',
    body: 'Ethical hackers probe every layer — network, API, and application — using the same tools and techniques real attackers use, with a full proof-of-concept report.',
    bullets: [
      'Manual + automated exploit attempts',
      'Network, API & app layer coverage',
      'Proof-of-concept for every finding',
    ],
    stats: [['Manual', 'Testing'], ['All', 'Layers'], ['PoC', 'Included']],
  },
  {
    id: 'implementation', span: 1, strong: false,
    icon: Rocket, color: '#a78bfa',
    pill: 'Step 3', eyebrow: 'Secure Implementation',
    headline: 'Fixes shipped, not just listed.',
    body: "We don't hand you a PDF and walk away. Our engineers implement every remediation — hardening config, deploying controls, and verifying the close.",
    bullets: [
      'Firewall rules & network hardening',
      'MFA enforcement & secrets vault setup',
      'SSL/TLS, certs & patch management',
    ],
    stats: [['Hands-On', 'Delivery'], ['Zero', 'Lock-in'], ['Verified', 'Close']],
  },
  {
    id: 'monitoring', span: 2, strong: true,
    icon: Activity, color: '#4ade80',
    pill: 'Step 4', eyebrow: '24/7 Monitoring',
    headline: 'Always watching. Instantly responding.',
    body: 'Continuous threat detection with real-time alerting, full audit logs for compliance, and SLA-backed incident escalation — so nothing slips through.',
    bullets: [
      'Real-time threat detection & alerting',
      'Brute force, port scan & anomaly detection',
      'Full audit log for compliance & forensics',
      'Incident escalation with SLA guarantees',
    ],
    stats: [['24/7', 'Coverage'], ['< 1 min', 'Alert time'], ['Full', 'Audit log']],
  },
]

// ─── Card ─────────────────────────────────────────────────────────────────────

function FeatureCard({ feature }) {
  const [hovered, setHovered] = useState(false)
  const { icon: Icon, color, pill, eyebrow, headline, body, bullets, stats, span, strong } = feature

  return (
    <div
      className={`col-span-1 md:col-span-${span} relative overflow-hidden flex flex-col transition-all duration-300`}
      style={{
        ...(strong ? glassStrong : glass),
        ...(hovered ? { background: 'rgba(255,255,255,0.13)' } : {}),
        borderRadius: 20,
        padding: '1.35rem',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Radial glow */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, borderRadius: 20, background: `radial-gradient(ellipse at 0% 0%, ${color}18, transparent 55%)` }} />

      {/* Watermark */}
      <div aria-hidden="true" style={{ position: 'absolute', bottom: 12, right: 12, opacity: 0.04, color, zIndex: 0, pointerEvents: 'none' }}>
        <Icon size={90} />
      </div>

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>

        {/* Header row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{
              width: 34, height: 34, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              background: `${color}18`, border: `1px solid ${color}28`, color,
              boxShadow: hovered ? `0 0 14px ${color}28` : 'none', transition: 'box-shadow 0.3s',
            }}>
              <Icon size={15} />
            </div>
            <span style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)' }}>
              {eyebrow}
            </span>
          </div>
          <span style={{ fontSize: '0.65rem', fontWeight: 600, padding: '3px 10px', borderRadius: 999, whiteSpace: 'nowrap', background: `${color}18`, border: `1px solid ${color}30`, color }}>
            {pill}
          </span>
        </div>

        {/* Headline + body */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <h3 style={{ margin: 0, fontSize: 'clamp(0.98rem, 2.5vw, 1.08rem)', fontWeight: 600, color: '#fff', lineHeight: 1.3 }}>
            {headline}
          </h3>
          <p style={{ margin: 0, fontSize: '0.8rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.52)' }}>
            {body}
          </p>
        </div>

        {/* Bullets */}
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
          {bullets.map(b => (
            <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem' }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', flexShrink: 0, marginTop: '0.38rem', background: color, boxShadow: `0 0 5px ${color}90` }} />
              <span style={{ fontSize: '0.78rem', lineHeight: 1.55, color: 'rgba(255,255,255,0.6)' }}>{b}</span>
            </li>
          ))}
        </ul>

        {/* Stats — vertical on mobile, row on md+ */}
        <div
          className="flex flex-col md:flex-row"
          style={{ marginTop: 'auto', paddingTop: '0.85rem', borderTop: '1px solid rgba(255,255,255,0.07)', gap: '0.4rem' }}
        >
          {stats.map(([val, lbl]) => (
            <div key={lbl} className="flex md:flex-col items-center md:items-start"
              style={{ flex: 1, borderRadius: 9, padding: '0.45rem 0.7rem', gap: '0.3rem', background: `${color}0d`, border: `1px solid ${color}1e` }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color, lineHeight: 1, whiteSpace: 'nowrap' }}>{val}</span>
              <span style={{ fontSize: '0.67rem', color: 'rgba(255,255,255,0.36)', lineHeight: 1, whiteSpace: 'nowrap' }}>{lbl}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Accent bottom line */}
      <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, zIndex: 2, pointerEvents: 'none', borderRadius: '0 0 20px 20px', background: `linear-gradient(to right, transparent, ${color})`, opacity: hovered ? 1 : 0.3, transition: 'opacity 0.3s' }} />
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function SoftwareSecurityServices() {
  return (
    <div style={{ width: '100%', padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 1.5rem)' }}>
      <div style={{ maxWidth: 1024, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
          <p style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)', marginBottom: '0.6rem' }}>
            Security Services
          </p>
          <h2 style={{ fontSize: 'clamp(1.6rem, 5vw, 2.75rem)', fontWeight: 300, color: '#fff', lineHeight: 1.15, marginBottom: '0.75rem' }}>
            Software Security
          </h2>
          <p style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', maxWidth: 440, margin: '0 auto', lineHeight: 1.65, color: 'rgba(255,255,255,0.48)' }}>
            Assess, test, harden, and monitor — a full-cycle security practice built around your stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '0.75rem' }}>
          {features.map(f => <FeatureCard key={f.id} feature={f} />)}
        </div>

      </div>
    </div>
  )
}