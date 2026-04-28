import React, { useState } from 'react'
import { glass, glassHover, innerSurface, glassStrong } from '../CCTV-Holder/CCTVStyles'
import {
  Database,
  GraduationCap,
  CalendarCheck,
  Clock4,
  MessagesSquare,
  CreditCard,
} from "lucide-react";

function Chip({ children, color = "#93c5fd" }) {
  return (
    <div
      className="inline-block text-xs px-2.5 py-1 rounded-full whitespace-nowrap"
      style={{ background: `${color}18`, border: `1px solid ${color}35`, color }}
    >
      {children}
    </div>
  )
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
  )
}

function StatBox({ value, label }) {
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

function CardLabel({ icon: IconComp, label, accent }) {
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
  )
}

function DiffBadge({ children }) {
  return (
    <span
      className="inline-flex items-start gap-1.5 text-xs px-2.5 py-1.5 rounded-xl font-medium"
      style={{
        background: "rgba(251,191,36,0.12)",
        border: "1px solid rgba(251,191,36,0.28)",
        color: "#fbbf24",
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-0.5" style={{ background: "#fbbf24" }} />
      {children}
    </span>
  )
}

const Modules = () => {

  const [hovered, setHovered] = useState(null);

  const cs = (id) => (hovered === id ? glassHover : glass);
  const hp = (id) => ({
    onMouseEnter: () => setHovered(id),
    onMouseLeave: () => setHovered(null),
  });

  return (
    <div
      className="w-full px-4 md:px-6 py-16 md:py-24"
      style={{
        fontFamily: '"Playfair Display", serif',
        color: "white",
      }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Built for Education
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
            Core Modules
          </h2>
          <p
            className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-5"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Unlike a generic CRM, every module here is purpose-built for schools —
            covering the academic, operational, and communication workflows that
            educational institutions actually run on.
          </p>

          {/* Differentiator callout — wraps gracefully on mobile */}
          <div
            className="inline-flex items-start sm:items-center gap-2 px-4 py-2.5 rounded-2xl sm:rounded-full mx-auto text-left sm:text-center max-w-sm sm:max-w-none"
            style={{
              background: "rgba(251,191,36,0.08)",
              border: "1px solid rgba(251,191,36,0.2)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-0.5 sm:mt-0" style={{ background: "#fbbf24" }} />
            <span className="text-xs font-medium leading-relaxed" style={{ color: "#fbbf24" }}>
              This is where it differs from a CRM — school-specific by design, not by configuration
            </span>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            BENTO GRID — 6 items (even)
            Row 1: [SIS col-span-1]           [Academic Mgmt col-span-2]
            Row 2: [Timetable col-span-2]     [Attendance col-span-1]
            Row 3: [Comms col-span-1]         [Fees col-span-1]          [Dashboard col-span-1]
            Mobile: all cards full-width, stacked
        ══════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* ── Card 1: Student Information System — narrow (col-span-1) ── */}
          <div
            className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
            style={cs("sis")}
            {...hp("sis")}
          >
            <div className="flex items-start justify-between mb-1">
              <CardLabel icon={Database} label="STUDENT INFORMATION SYSTEM" accent="#93c5fd" />
            </div>

            {/* Chips wrap on small screens */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Chip color="#93c5fd">SIS</Chip>
              <DiffBadge>Not in CRM</DiffBadge>
            </div>

            <h3 className="text-base font-semibold text-white mb-2">
              The Single Source of Truth
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
              A structured student record purpose-built for schools — covering
              enrolment, guardianship, medical notes, and academic history in
              a format no generic CRM can replicate out of the box.
            </p>

            <div className="mt-auto">
              <FeatureRow>Enrolment & re-enrolment flows</FeatureRow>
              <FeatureRow>Guardian & emergency contacts</FeatureRow>
              <FeatureRow>Medical & SEN flags</FeatureRow>
              <FeatureRow>Full academic history archive</FeatureRow>
            </div>
          </div>

          {/* ── Card 2: Academic Management — wide (col-span-2) ── */}
          <div
            className="md:col-span-2 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
            style={cs("academic")}
            {...hp("academic")}
          >
            <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
              <CardLabel icon={GraduationCap} label="ACADEMIC MANAGEMENT" accent="#a78bfa" />
              <Chip color="#a78bfa">Grades · Exams · Curriculum</Chip>
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">
              The Full Academic Lifecycle, Managed
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
              From curriculum planning through to exam results and transcripts —
              this module handles the entire academic workflow in one place.
              Teachers set assessments, record marks, and publish report cards
              without ever leaving the platform.
            </p>

            {/* Academic workflow — collapses to 1-col on mobile */}
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-px mb-5 overflow-hidden"
              style={innerSurface}
            >
              {[
                { label: "Curriculum", sub: "Syllabus & learning objectives" },
                { label: "Assessments", sub: "Assignments, tests & exams" },
                { label: "Results", sub: "Grades, GPA & transcripts" },
              ].map(({ label, sub }) => (
                <div key={label} className="p-3">
                  <div className="text-xs font-semibold text-white mb-0.5">{label}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{sub}</div>
                </div>
              ))}
            </div>

            <div className="mb-4">
              <DiffBadge>Education-specific — CRMs have no curriculum layer</DiffBadge>
            </div>

            {/* Stat boxes wrap on very small screens */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-auto">
              <StatBox value="Custom" label="Grading schemes" />
              <StatBox value="Auto" label="Report generation" />
              <StatBox value="Multi-term" label="Exam scheduling" />
            </div>
          </div>

          {/* ── Card 3: Timetable & Scheduling — wide (col-span-2) ── */}
          <div
            className="md:col-span-2 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
            style={cs("timetable")}
            {...hp("timetable")}
          >
            <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
              <CardLabel icon={Clock4} label="TIMETABLE & SCHEDULING" accent="#fbbf24" />
              <Chip color="#fbbf24">Conflict-free</Chip>
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">
              School Scheduling CRMs Can't Do
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
              Period-based scheduling with bell times, room allocation, and teacher
              workload balancing — all with automatic clash detection. A generic
              CRM has no concept of a school period, a form group, or a bell schedule.
            </p>

            {/* Scheduling dimensions — 2-col on sm+, 1-col on mobile */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-px mb-5 overflow-hidden"
              style={innerSurface}
            >
              {[
                { label: "Rooms", sub: "Capacity-aware allocation" },
                { label: "Teachers", sub: "Load-balanced assignment" },
                { label: "Classes", sub: "Form groups & sets" },
                { label: "Bell times", sub: "Custom period structure" },
              ].map(({ label, sub }) => (
                <div key={label} className="p-3">
                  <div className="text-xs font-semibold text-white mb-0.5">{label}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{sub}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-auto">
              <StatBox value="Auto" label="Clash detection" />
              <StatBox value="Live" label="Updates" />
              <StatBox value="iCal" label="Export" />
            </div>
          </div>

          {/* ── Card 4: Attendance Management — narrow (col-span-1) ── */}
          <div
            className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
            style={cs("attendance")}
            {...hp("attendance")}
          >
            <div className="flex items-start justify-between mb-1">
              <CardLabel icon={CalendarCheck} label="ATTENDANCE MANAGEMENT" accent="#4ade80" />
            </div>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Chip color="#4ade80">Per-period</Chip>
              <DiffBadge>Not in CRM</DiffBadge>
            </div>

            <h3 className="text-base font-semibold text-white mb-2">
              Period-by-Period Registers
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
              Attendance tracked at every lesson, not just daily check-ins.
              Absence patterns trigger alerts before they become safeguarding concerns.
            </p>

            <div className="mt-auto">
              <FeatureRow>Period-level digital register</FeatureRow>
              <FeatureRow>Automated absence alerts</FeatureRow>
              <FeatureRow>Safeguarding threshold flags</FeatureRow>
              <FeatureRow>Statutory compliance reports</FeatureRow>
            </div>
          </div>

          {/* ── Card 5: Communication Portal — narrow (col-span-1) ── */}
          <div
            className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
            style={cs("comms")}
            {...hp("comms")}
          >
            <div className="flex items-start justify-between mb-1">
              <CardLabel icon={MessagesSquare} label="COMMUNICATION PORTAL" accent="#5eead4" />
            </div>
            <Chip color="#5eead4">Two-way</Chip>

            <h3 className="text-base font-semibold text-white mt-4 mb-2">
              School-Aware Messaging
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
              Unlike a CRM inbox, messages here are contextualised by class,
              student, and role — parents see their child's data, teachers
              see their class, admins see everything.
            </p>

            <div className="mt-auto">
              <FeatureRow>Role-scoped parent & teacher views</FeatureRow>
              <FeatureRow>Class & school-wide announcements</FeatureRow>
              <FeatureRow>SMS & email notification bridge</FeatureRow>
              <FeatureRow>Read receipts & message log</FeatureRow>
            </div>
          </div>

          {/* ── Card 6: Fee & Payment Management — narrow (col-span-1) ── */}
          <div
            className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
            style={cs("fees")}
            {...hp("fees")}
          >
            <div className="flex items-start justify-between mb-1">
              <CardLabel icon={CreditCard} label="FEE & PAYMENT MANAGEMENT" accent="#f87171" />
            </div>
            <Chip color="#f87171">School billing</Chip>

            <h3 className="text-base font-semibold text-white mt-4 mb-2">
              Tuition, Levies & Beyond
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
              School fee structures are complex — term-based tuition, sibling
              discounts, activity levies, bursaries. This module handles all of
              it; a CRM's billing tools simply aren't built for it.
            </p>

            <div className="mt-auto">
              <FeatureRow>Term-based tuition scheduling</FeatureRow>
              <FeatureRow>Sibling & bursary discounts</FeatureRow>
              <FeatureRow>Activity & trip levies</FeatureRow>
              <FeatureRow>Overdue reminders & receipts</FeatureRow>
            </div>
          </div>

          {/* ── Card 7: Admin Dashboard snapshot — col-span-1 balances row 3 ── */}
          <div
            className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
            style={{ ...glassStrong }}
          >
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Admin at a glance
            </p>

            <h3 className="text-base font-semibold text-white mb-2">
              Your School. One Dashboard.
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
              Every module feeds into a single admin view — so principals and
              office staff always have a live pulse on the whole school without
              switching between systems.
            </p>

            <div className="flex flex-col gap-2 mb-5">
              {[
                { metric: "Students enrolled", value: "1,240", accent: "#93c5fd" },
                { metric: "Attendance today",  value: "96.4%", accent: "#4ade80" },
                { metric: "Fees outstanding",  value: "18",    accent: "#f87171" },
                { metric: "Classes in session", value: "34 / 36", accent: "#fbbf24" },
                { metric: "Messages unread",   value: "7",     accent: "#5eead4" },
              ].map(({ metric, value, accent }) => (
                <div
                  key={metric}
                  className="flex items-center justify-between px-3 py-2 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span className="text-xs truncate mr-2" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {metric}
                  </span>
                  <span className="text-xs font-semibold shrink-0" style={{ color: accent }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <button
              className="mt-auto w-full py-2.5 rounded-full text-xs font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{
                background: "rgba(147,197,253,0.18)",
                border: "1px solid rgba(147,197,253,0.35)",
                color: "#93c5fd",
              }}
            >
              Explore the dashboard →
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Modules