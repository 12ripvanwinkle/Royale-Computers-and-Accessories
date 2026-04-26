import { useState } from "react"
import { glass, glassHover } from "../components/Aspects/CCTV-Holder/CCTVStyles"

// ── visuals ──────────────────────────────────────────────────────────────────

function CRMVisual() {
  const rows = [
    { badge: "Active", badgeColor: "#4ade80", bg: "rgba(74,222,128,0.15)", border: "rgba(74,222,128,0.3)", avatarBg: "rgba(147,197,253,0.5)", w1: "65%", w2: "40%" },
    { badge: "Lead",   badgeColor: "#fbbf24", bg: "rgba(251,191,36,0.15)",  border: "rgba(251,191,36,0.3)",  avatarBg: "rgba(251,191,36,0.4)",   w1: "55%", w2: "30%" },
  ]
  const stages = [
    { label: "Prospect", color: "#93c5fd" },
    { label: "Qualified", color: "#a78bfa" },
    { label: "Closed",    color: "#4ade80" },
  ]
  return (
    <div className="w-full">
      <div className="flex flex-col gap-2">
        {rows.map((r, i) => (
          <div key={i} className="flex items-center gap-2.5 rounded-xl px-3 py-2"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.13)" }}>
            <div className="w-6 h-6 rounded-full shrink-0" style={{ background: r.avatarBg }} />
            <div className="flex flex-col gap-1 flex-1">
              <div className="h-1.5 rounded" style={{ width: r.w1, background: "rgba(255,255,255,0.18)" }} />
              <div className="h-1.5 rounded" style={{ width: r.w2, background: "rgba(255,255,255,0.18)" }} />
            </div>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{ background: r.bg, color: r.badgeColor, border: `1px solid ${r.border}` }}>
              {r.badge}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1.5 mt-3.5">
        {stages.map((s, i) => (
          <>
            <div key={`dot-${i}`} className="w-2 h-2 rounded-full shrink-0" style={{ background: s.color }} />
            {i < stages.length - 1 && <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.2)" }} />}
            <span key={`label-${i}`} className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{s.label}</span>
            {i < stages.length - 1 && <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.2)" }} />}
          </>
        ))}
      </div>
    </div>
  )
}

function CustomizationVisual() {
  const controls = [
    { label: "Custom deal stages", type: "toggle", on: true,  color: "#4ade80" },
    { label: "Pipeline view",       type: "select", value: "Kanban" },
    { label: "Auto-assign leads",   type: "toggle", on: true,  color: "#93c5fd" },
    { label: "Custom fields",       type: "toggle", on: false },
  ]
  return (
    <div className="flex flex-col gap-2 w-full">
      {controls.map((c, i) => (
        <div key={i} className="flex items-center justify-between rounded-xl px-3.5 py-2.5"
          style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.13)" }}>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>{c.label}</span>
          {c.type === "toggle" ? (
            <div className="w-9 h-5 rounded-full relative"
              style={{ background: c.on ? c.color : "rgba(255,255,255,0.2)" }}>
              <div className="w-3.5 h-3.5 rounded-full bg-white absolute top-0.5"
                style={{ [c.on ? "right" : "left"]: "3px" }} />
            </div>
          ) : (
            <span className="text-xs px-2.5 py-1 rounded-md"
              style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}>
              {c.value} ▾
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

function IntegrationVisual() {
  const icons = ["📧", "📅", "📊", "🔗", "💬", "⚙️", "📁", "🔔"]
  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-2">
        {icons.map((ic, i) => (
          <div key={i} className={`h-11 rounded-xl flex items-center justify-center text-lg ${i > 3 ? "opacity-30" : ""}`}
            style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.15)" }}>
            {ic}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-3">
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.5)" }} />
        <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.2)" }} />
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>8+ integrations available</span>
        <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.2)" }} />
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.5)" }} />
      </div>
    </div>
  )
}

function TrainingVisual() {
  const steps = [
    { label: "Onboarding session with your team", status: "done" },
    { label: "Role-based training materials",     status: "done" },
    { label: "Live Q&A and walkthrough calls",     status: "active" },
    { label: "Ongoing support & check-ins",        status: "pending" },
  ]
  const statusStyle = { done: { color: "#4ade80", symbol: "✓" }, active: { color: "#93c5fd", symbol: "→" }, pending: { color: "rgba(255,255,255,0.25)", symbol: "○" } }
  return (
    <div className="flex flex-col w-full">
      {steps.map((s, i) => (
        <div key={i} className="flex items-center gap-3 py-2.5"
          style={{ borderBottom: i < steps.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-semibold shrink-0"
            style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.22)", color: "#fff" }}>
            {i + 1}
          </div>
          <span className="text-xs flex-1" style={{ color: "rgba(255,255,255,0.7)" }}>{s.label}</span>
          <span className="text-sm ml-auto" style={{ color: statusStyle[s.status].color }}>
            {statusStyle[s.status].symbol}
          </span>
        </div>
      ))}
    </div>
  )
}

// ── card ─────────────────────────────────────────────────────────────────────

function ServiceCard({ title, body, visual }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="rounded-2xl p-7 flex flex-col transition-transform duration-300 hover:-translate-y-0.5"
      style={hovered ? glassHover : glass}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3 className="text-base font-semibold text-white mb-1.5">{title}</h3>
      <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>{body}</p>
      <div className="flex-1 flex items-start">{visual}</div>
    </div>
  )
}

// ── section ──────────────────────────────────────────────────────────────────

export default function ServicesSection() {
  return (
    <div className="w-full px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "rgba(255,255,255,0.45)" }}>
            What we offer
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
            Our Services
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)" }}>
            Everything you need to get your CRM running — and keep it running well.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ServiceCard title="CRM Setup"         body="Configure your pipeline, contacts, and deal stages so your team can hit the ground running." visual={<CRMVisual />} />
          <ServiceCard title="Customization"     body="Tailor every field, workflow, and view to match exactly how your team operates."             visual={<CustomizationVisual />} />
          <ServiceCard title="Integration"       body="Connect your CRM to email, calendars, and the tools your team already uses every day."       visual={<IntegrationVisual />} />
          <ServiceCard title="Training & Support" body="Hands-on onboarding and ongoing support so your team stays confident at every stage."       visual={<TrainingVisual />} />
        </div>

      </div>
    </div>
  )
}