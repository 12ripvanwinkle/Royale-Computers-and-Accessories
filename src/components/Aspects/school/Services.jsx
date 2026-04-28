import React, { useState } from 'react'
import { glass, glassHover, innerSurface, glassStrong } from '../CCTV-Holder/CCTVStyles'
import { phases } from './index';
import {
  Settings2,
  SlidersHorizontal,
  DatabaseZap,
  Users2,
  LifeBuoy,
  CheckCircle2,
} from "lucide-react";

function Chip({ children, color = "#93c5fd" }) {
  return (
    <span
      className="inline-block text-xs px-2.5 py-1 rounded-full whitespace-nowrap"
      style={{ background: `${color}18`, border: `1px solid ${color}35`, color }}
    >
      {children}
    </span>
  );
}

function FeatureRow({ children }) {
    return (
        <div
        className="flex items-center gap-2 py-2"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#4ade80" }} />
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.78)" }}>{children}</span>
        </div>
    );
}

function StatBox({value, label}) {
    return (
        <div
        className="rounded-xl px-3 py-2.5 text-center w-full"
        style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.1)",
        }}
        >
            <div className="text-base font-semibold text-white leading-tight">{value}</div>
            <div className="text-xs mt-0.5 leading-snug" style={{ color: "rgba(255,255,255,0.45)" }}>{label}</div>
        </div>
    )
}

function CardLabel({icon: IconComp, label, accent}) {
    return (
    <div className="flex items-center gap-2 mb-3 min-w-0">
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
        style={{ background: `${accent}18`, color: accent, border: `1px solid ${accent}30` }}
      >
        <IconComp size={16} />
      </div>
      <span
        className="text-xs font-medium tracking-wide leading-tight"
        style={{ color: "rgba(255,255,255,0.45)" }}
      >
        {label}
      </span>
    </div>
  );
}

function PhaseStep({number, title, sub, accent, last}) {
    return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0 flex-1 min-w-0">
      <div className="flex sm:flex-col items-center sm:items-center gap-3 sm:gap-0 w-full sm:w-auto">
        {/* Circle */}
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold"
          style={{ background: `${accent}20`, border: `2px solid ${accent}50`, color: accent }}
        >
          {number}
        </div>
        {/* Connector line — horizontal on desktop, hidden on mobile */}
        {!last && (
          <div
            className="hidden sm:block flex-1 h-px mx-2"
            style={{ background: "rgba(255,255,255,0.12)", minWidth: 24 }}
          />
        )}
      </div>
      {/* Label */}
      <div className="sm:hidden flex flex-col ml-0">
        <span className="text-xs font-semibold text-white leading-tight">{title}</span>
        <span className="text-xs mt-0.5 leading-snug" style={{ color: "rgba(255,255,255,0.45)" }}>{sub}</span>
      </div>
    </div>
  );
}

const Services = () => {

  const [hovered, setHovered] = useState(null)

  const cs = (id) => (hovered === id ? glassHover : glass);
  const hp = (id) => ({
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
                    Implementation & Beyond
                </p>
                <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
                    Our Services
                </h2>
                <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
                    style={{color: "rgba(255,255,255,0.55)"}}
                >
                    We don't just hand you a platform — we implement it. From first
                    configuration through to ongoing support, we're with your school
                    at every stage of the journey.
                </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {/* Card 1: System Setup & Configuration - wide hero */}
                <div className="md:col-span-2 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
                    style={cs("setup")}
                    {...hp("setup")}
                >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                        <CardLabel icon={Settings2} label="SYSTEM SETUP & CONFIGURATION" accent="#93c5fd" />
                        <Chip color="#93c5fd">Foundation phase</Chip>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2">
                        Built Right From Day One 
                    </h3>
                    <p className="text-sm leading-relaxed mb-5" style={{color: "rgba(255,255,255,0.6)" }}>
                        Before any staff logs in, we lay the groundwork — configuring your
                        school structure, user roles, academic calendar, and module settings
                        so the platform reflects how your institution actually operates.
                        Nothing generic, nothing to undo later.
                    </p>

                    {/* Setup phases on innersurface */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-px mb-5 overflow-hidden"
                        style={innerSurface}
                    >
                        {[
                            { label: "School structure",    sub: "Departments, classes & year groups" },
                            { label: "User roles & access", sub: "Admin, teacher, parent permissions" },
                            { label: "Academic calendar",   sub: "Terms, holidays & exam periods" },
                            { label: "Module activation",   sub: "Enable only what you need" },
                        ].map(({ label, sub }) => (
                            <div key={label} className="p-3">
                            <div className="text-xs font-semibold text-white mb-0.5">{label}</div>
                            <div className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.45)" }}>{sub}</div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-auto">
                        <StatBox value="< 5 days" label="Avg. setup time" />
                        <StatBox value="Zero" label="Downtime" />
                        <StatBox value="Dedicated" label="Setup engineer" />
                    </div>
                </div>

                {/* Card 2: Customization - narrow */}
                <div className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
                    style={cs("custom")}
                    {...hp("custom")}
                >
                    <div className="flex items-start justify-between mb-1">
                        <CardLabel icon={SlidersHorizontal} label="CUSTOMISATION" accent="#a78bfa" />
                    </div>
                    <Chip color="#a78bfa">School-specific</Chip>


                    <h3 className="text-base font-semibold text-white mt-4 mb-2">
                        Tailored to Your Requirements
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{color: "rgba(255,255,255,0.6)"}}>
                        Every school runs differently. We configure grading schemes,
                        report card templates, fee structures, and workflows to match
                        exactly how your institution works — not the other way around.
                    </p>

                    <div className="mt-auto">
                        <FeatureRow>Custom grading & report templates</FeatureRow>
                        <FeatureRow>School-specific fee structures</FeatureRow>
                        <FeatureRow>Branded parent portal</FeatureRow>
                        <FeatureRow>Custom fields & data points</FeatureRow>
                    </div>
                </div>

                {/* Card 3: Data Migration - Narrow */}
                <div
                    className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
                    style={cs("migration")}
                    {...hp("migration")}
                >
                    <div className="flex items-start justify-between mb-1">
                    <CardLabel icon={DatabaseZap} label="DATA MIGRATION" accent="#5eead4" />
                    </div>
                    <Chip color="#5eead4">Existing records</Chip>

                    <h3 className="text-base font-semibold text-white mt-4 mb-2">
                    Your History, Moved Safely
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
                    Student records, academic history, and fee data transferred from
                    your existing system — cleaned, mapped, and verified before
                    anything goes live.
                    </p>

                    <div className="mt-auto">
                    <FeatureRow>CSV, Excel & legacy system imports</FeatureRow>
                    <FeatureRow>Data cleaning & deduplication</FeatureRow>
                    <FeatureRow>Pre-migration audit report</FeatureRow>
                    <FeatureRow>Rollback safety net</FeatureRow>
                    </div>
                </div>

                {/* Card 4: Staff Training & Onboarding - narrow */}
                <div className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
                    style={cs("training")}
                    {...hp("training")}
                >
                    <div className="flex items-start justify-between mb-1">
                        <CardLabel icon={Users2} label="STAFF TRAINING & ONBOARDING" accent="#4ade80" />
                    </div>
                    <Chip color="#4ade80">Role-based</Chip>

                    <h3 className="text-base font-semibold text-white mt-4 mb-2">
                        Confident From the First Login 
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{color: "rgba(255,255,255,0.6)"}}>
                        Separate training tracks for admins, teachers, and office staff —
                        each focused on only the modules they'll actually use, so no one
                        is overwhelmed on go-live day.
                    </p>

                    <div className="mt-auto">
                        <FeatureRow>Role-segmented training sessions</FeatureRow>
                        <FeatureRow>Live walkthrough & Q&A</FeatureRow>
                        <FeatureRow>Recorded sessions for new hires</FeatureRow>
                        <FeatureRow>Quick-reference user guides</FeatureRow>
                    </div>
                </div>

                {/* Card 5: Ongoing Technical Support - Narrow */}
                <div className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
                    style={cs("support")}
                    {...hp("support")}
                >
                    <div className="flex items-start justify-between mb-1">
                        <CardLabel icon={LifeBuoy} label="ONGOING TECHNICAL SUPPORT" accent="#fbbf24" />
                    </div>
                    <Chip color="#fbbf24">Post-launch</Chip>

                    <h3 className="text-base font-semibold text-white mt-4 mb-2">
                        We Stay After Go-Live 
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{color: "rgba(255,255,255,0.6)"}}>
                        Implementation doesn't end at launch. Our support team handles
                        issues, updates, and change requests so your staff can focus on
                        teaching — not troubleshooting.
                    </p>

                    <div className="mb-4">
                        <FeatureRow>Dedicated support channel</FeatureRow>
                        <FeatureRow>Bug fixes & platform updates</FeatureRow>
                        <FeatureRow>Change request handling</FeatureRow>
                        <FeatureRow>Regular check-in calls</FeatureRow>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-auto">
                        <StatBox value="24/7" label="Support access" />
                        <StatBox value="< 4h" label="Response SLA" />
                    </div>
                </div>

                {/* Row 3: Full-width implementation timeline. Odd count = This strip closes the grid cleanly */}
                <div className="md:col-span-3 rounded-2xl p-5 md:p-6 hover:-translate-y-0.5 transition-transform duration-300"
                    style={glassStrong}
                >
                    {/* Strip Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
                        <div>
                            <p
                            className="text-xs font-semibold tracking-widest uppercase mb-1"
                            style={{ color: "rgba(255,255,255,0.45)" }}
                            >
                            Implementation journey
                            </p>
                            <h3 className="text-base font-semibold text-white">
                            From Contract to Fully Live — Typically 3–6 Weeks
                            </h3>
                        </div>
                        <button
                            className="shrink-0 self-start sm:self-auto px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
                            style={{
                            background: "rgba(147,197,253,0.18)",
                            border: "1px solid rgba(147,197,253,0.35)",
                            color: "#93c5fd",
                            }}
                        >
                            Start your implementation →
                        </button>
                    </div>

                    {/* Timeline */}
                    <div>
                        {/* ── DESKTOP: horizontal (hidden on mobile) ── */}
                        <div className="hidden md:grid md:grid-cols-5 gap-0">
                            {[
                            { n: "01", title: "Setup",      sub: "School structure & roles",  accent: "#93c5fd" },
                            { n: "02", title: "Customise",  sub: "Templates & workflows",     accent: "#a78bfa" },
                            { n: "03", title: "Migrate",    sub: "Transfer existing records", accent: "#5eead4" },
                            { n: "04", title: "Train",      sub: "Staff onboarding sessions", accent: "#4ade80" },
                            { n: "05", title: "Support",    sub: "Ongoing post-launch care",  accent: "#fbbf24" },
                            ].map(({ n, title, sub, accent }, i, arr) => (
                            <div key={n} className="flex flex-col items-center">
                                {/* Circle + connector */}
                                <div className="flex items-center w-full">
                                <div
                                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-xs font-bold"
                                    style={{ background: `${accent}20`, border: `2px solid ${accent}55`, color: accent }}
                                >
                                    {n}
                                </div>
                                {i < arr.length - 1 && (
                                    <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
                                )}
                                </div>
                                {/* Label */}
                                <div className="text-center mt-3 px-2 w-full">
                                <div className="text-xs font-semibold text-white leading-tight">{title}</div>
                                <div className="text-xs mt-0.5 leading-snug" style={{ color: "rgba(255,255,255,0.45)" }}>{sub}</div>
                                </div>
                            </div>
                            ))}
                        </div>

                        {/* ── MOBILE: vertical stack (hidden on md+) ── */}
                        <div className="flex flex-col md:hidden gap-0">
                            {[
                            { n: "01", title: "Setup",      sub: "School structure & roles",  accent: "#93c5fd" },
                            { n: "02", title: "Customise",  sub: "Templates & workflows",     accent: "#a78bfa" },
                            { n: "03", title: "Migrate",    sub: "Transfer existing records", accent: "#5eead4" },
                            { n: "04", title: "Train",      sub: "Staff onboarding sessions", accent: "#4ade80" },
                            { n: "05", title: "Support",    sub: "Ongoing post-launch care",  accent: "#fbbf24" },
                            ].map(({ n, title, sub, accent }, i, arr) => (
                            <div key={n} className="flex items-stretch gap-3">
                                {/* Left column: circle + vertical line */}
                                <div className="flex flex-col items-center">
                                <div
                                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold"
                                    style={{ background: `${accent}20`, border: `2px solid ${accent}55`, color: accent }}
                                >
                                    {n}
                                </div>
                                {i < arr.length - 1 && (
                                    <div className="flex-1 w-px my-1" style={{ background: "rgba(255,255,255,0.1)", minHeight: 20 }} />
                                )}
                                </div>
                                {/* Right column: text */}
                                <div className={`flex flex-col justify-start ${i < arr.length - 1 ? "pb-4" : ""}`}>
                                <div className="text-xs font-semibold text-white leading-tight pt-1.5">{title}</div>
                                <div className="text-xs mt-0.5 leading-snug" style={{ color: "rgba(255,255,255,0.45)" }}>{sub}</div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                    {/* Checklist row */}
                    <div
                        className="flex flex-wrap gap-3 mt-5 pt-4"
                        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                        >
                        {[
                            "Dedicated implementation manager",
                            "Weekly progress updates",
                            "Go-live sign-off checklist",
                            "30-day post-launch review",
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-1.5">
                            <CheckCircle2 size={12} style={{ color: "#4ade80", flexShrink: 0 }} />
                            <span className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services