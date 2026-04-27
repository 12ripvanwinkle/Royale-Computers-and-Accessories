import React, { useState } from 'react'
import { glass, glassHover, innerSurface } from '../CCTV-Holder/CCTVStyles'
import {
  Monitor,
  Sliders,
  GraduationCap,
  HeadphonesIcon,
  ShieldCheck,
} from "lucide-react";



function Chip({ children, color= "#93c5fd"}) {
    return (
        <div className="inline-block text-xs px-2.5 py-1 rounded-full"
            style={{background: `${color}18`, border: `1px solid ${color}35`, color}}
        >
            {children}
        </div>
    )
}

function FeatureRow({ children}) {
    return (
        <div className="flex items-center gap-2 py-2"
            style={{borderBottom: "1px solid rgba(255,255,255,0.08)"}}
        >
            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#4ade80" }} />
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.78)" }}>{children}</span>
        </div>
    )
}

function StatBox({ value, label}) {
    return (
    <div
      className="flex-1 rounded-xl px-3 py-2.5 text-center"
      style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}
    >
      <div className="text-base font-semibold text-white leading-tight">{value}</div>
      <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>{label}</div>
    </div>
  )
}

function CardLabel({icon: IconComp, label, accent}) {
    return (
        <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{background: `${accent}18`, color: accent, border: `1px solid ${accent}30`}}
            >
                <IconComp size={16} />
            </div>
            <div className="text-xs font-medium tracking-wide" style={{color: "rgba(255,255,255,0.45)"}}>
                {label}
            </div>
        </div>
    )
}

const Services = () => {
  const [hovered, setHovered] = useState(null)

  const cardStyle = (id) => (hovered === id ? glassHover : glass)
  const hoverProps = (id) => ({
    onMouseEnter: () => setHovered(id),
    onMouseLeave: () => setHovered(null),
  })

  return (
    <div className="w-full px-4 md:px-6 py-16 md:py-24"
        style={{
            fontFamily: '"Playfair Display", serif',
            color: "white",
        }}
    >
        <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="text-center mb-12">
                <p className="text-xs font-semibold tracking-widest uppercase mb-4"
                    style={{color: "rgba(255,255,255,0.45)"}}
                >
                    What We Offer
                </p>
                <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
                    Service Built for Every Stage
                </h2>
                <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
                    style={{color: "rgba(255,255,255,0.55)"}}
                >
                    From the first cable pulled to the last firmware update, we cover
                    every phase of your security system's life cycle.
                </p>
            </div>

            {/* Bento Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {/* Card 1: System Setup - wide hero card */}
                <div className="md:col-span-2 rounded-2xl p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
                    style={cardStyle('setup')}
                    {...hoverProps('setup')}
                >   
                    <div className="flex items-start justify-between mb-4">
                        <CardLabel icon={Monitor} label="SYSTEM SETUP" accent="#93c5fd" />
                        <Chip color="#93c5fd">End-to-end</Chip>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2">
                        Full System Installation 
                    </h3>
                    <p className="text-sm leading-relaxed mb-5" style={{color: "rgba(255,255,255,0.6)"}}>
                        From site survey to final testing, we handle every step of your security
                        system deployment — hardware mounting, cable routing, network configuration,
                        and live verification. Our technicians leave only when everything is confirmed working.
                    </p>

                    {/* Numbered Process steps on inner surface */}
                    <div className="grid grid-cols-2 gap-px mb-5 overflow-hidden" style={innerSurface}>
                        {[
                            { step: "01", text: "Site survey & planning" },
                            { step: "02", text: "Hardware mounting & cabling" },
                            { step: "03", text: "Network & NVR configuration" },
                            { step: "04", text: "Live feed verification" },
                        ].map(({ step, text }) => (
                            <div key={step} className="flex items-center gap-3 p-3">
                            <span className="text-xs font-semibold shrink-0" style={{ color: "#93c5fd" }}>
                                {step}
                            </span>
                            <span className="text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>
                                {text}
                            </span>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-3 mt-auto">
                        <StatBox value="48h" label="Avg. install" />
                        <StatBox value="100%" label="Tested on-site" />
                        <StatBox value="5yr" label="Warranty" />
                    </div>
                </div>

                {/* Card 2: Customization - narrow tall card */}
                <div className="md:col-span-1 rounded-2xl p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
                    style={cardStyle("custom")}
                    {...hoverProps("custom")}
                >
                    <div className="flex items-start justify-between mb-1">
                        <CardLabel icon={Sliders} label="CUSTOMIZATION" accent="#a78bfa" />
                    </div>
                    <Chip color="#a78bfa">Tailored</Chip>

                    <h3 className="text-base font-semibold text-white mt-4 mb-2">
                        Built Around your needs
                    </h3>

                    <p className="text-sm leading-relaxed mb-4" style={{color: "rgba(255,255,255,0.6)"}}>
                        Camera layouts, motion zones, recording schedules, and alert rules
                        designed specifically for your property — nothing generic.
                    </p>

                    <div className="mt-auto">
                        <FeatureRow>Custom camera positioning</FeatureRow>
                        <FeatureRow>Motion zone & alert tuning</FeatureRow>
                        <FeatureRow>Recording schedule rules</FeatureRow>
                        <FeatureRow>Branded dashboard setup</FeatureRow>
                    </div>
                </div>

                {/* Card 3: Training -equal third */}
                <div className="md:col-span-1 rounded-2xl p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
                    style={cardStyle("Training")}
                    {...hoverProps("Training")}
                >
                    <div className="flex items-start justify-between mb-3">
                        <CardLabel icon={GraduationCap} label="TRAINING" accent="#4ade80" />
                        <Chip color="#4ade80">On-site & Remote</Chip>
                    </div>

                    <h3 className="text-base font-semibold text-white mb-2">
                        Team Enablement
                    </h3>

                    <p className="text-sm leading-relaxed mb-4" style={{color: "rgba(255,255,255,0.6)"}}>
                        Live walkthroughs, recorded sessions, and quick-reference guides
                        so your staff operate the system with confidence from day one.
                    </p>

                    <div className="mt-auto">
                        <FeatureRow>Live hands-on walkthroughs</FeatureRow>
                        <FeatureRow>Recorded tutorial library</FeatureRow>
                        <FeatureRow>Quick-reference cheat sheets</FeatureRow>
                    </div>
                </div>

                {/* Card 4: Support - equal third boxes with stats */}
                <div className="md:col-span-1 rounded-2xl p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
                    style={cardStyle("support")}
                    {...hoverProps("support")}
                >
                    <div className="flex items-start justify-between mb-3">
                        <CardLabel icon={HeadphonesIcon} label="SUPPORT" accent="#fbbf24" />
                        <Chip color="#fbbf24">24 / 7</Chip>
                    </div>

                    <h3 className="text-base font-semibold text-white mb-2">
                        Always-on Support
                    </h3>

                    <p className="text-sm leading-relaxed mb-4" style={{color: "rgba(255,255,255,0.6)"}}>
                        Remote diagnostics, firmware updates, and a dedicated line so your
                        system never goes dark when it matters most.
                    </p>
                    
                    <div className="mb-4">
                        <FeatureRow>Remote diagnostics & fix</FeatureRow>
                        <FeatureRow>Proactive firmware updates</FeatureRow>
                        <FeatureRow>Priority response SLA</FeatureRow>
                    </div>

                    <div className="flex gap-3 mt-auto">
                        <StatBox value="24/7" label="Available" />
                        <StatBox value="&lt;2h" label="Response" />
                    </div>
                </div>

                {/* Card 5: Maintenance - equal third */}
                <div className="md:col-span-1 rounded-2xl p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
                    style={cardStyle("maintenance")}
                    {...hoverProps("maintenance")}
                >
                    <div className="flex items-start justify-between mb-3">
                        <CardLabel icon={ShieldCheck} label="MAINTENANCE" accent="#5eead4" />
                        <Chip color="#5eead4">Proactive</Chip>
                    </div>

                    <h3 className="text-base font-semibold text-white mb-2">
                        Scheduled Maintenance
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{color: "rgba(255,255,255,0.6)"}}>
                        Regular health checks, lens cleaning, storage audits, and preventive
                        replacements keep your system running at peak performance year-round.
                    </p>

                    <div className="mt-auto">
                        <FeatureRow>Quarterly health checks</FeatureRow>
                        <FeatureRow>Lens & hardware cleaning</FeatureRow>
                        <FeatureRow>Storage & backup audits</FeatureRow>
                        <FeatureRow>Preventive part replacement</FeatureRow>
                    </div>
                </div> 

                {/* ── ROW 3: Full-width CTA strip (col-span-3) ── */}
                <div
                    className="md:col-span-3 rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 hover:-translate-y-0.5 transition-transform duration-300"
                    style={cardStyle("cta")}
                    {...hoverProps("cta")}
                >
                    <div>
                    <p
                        className="text-xs font-semibold tracking-widest uppercase mb-1"
                        style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                        Ready to get started?
                    </p>
                    <h3 className="text-lg font-semibold text-white">
                        Get a free site assessment — no obligation.
                    </h3>
                    </div>
                    <button
                    className="shrink-0 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
                    style={{
                        background: "rgba(147,197,253,0.18)",
                        border: "1px solid rgba(147,197,253,0.35)",
                        color: "#93c5fd",
                    }}
                    >
                        Book a Consultation →
                    </button>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Services