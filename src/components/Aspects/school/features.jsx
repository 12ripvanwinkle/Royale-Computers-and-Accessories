import React, { useState } from 'react'
import { glass, glassHover, innerSurface, glassStrong } from '../CCTV-Holder/CCTVStyles'

import {
  Users,
  CalendarCheck,
  BookOpen,
  Clock,
  MessageSquareHeart,
  Wallet,
} from "lucide-react";


function Chip({children, color = "#93c5fd" }) {
    return (
        <span className="inline-block text-xs px-2.5 py-1 rounded-full"
            style={{ background: `${color}18`, border: `1px solid ${color}35`, color }}
        >
            {children}
        </span>
    )
}

function FeatureRow({children}) {
    return (
        <div className="flex items-center gap-2 py-2"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}  
        >   
            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#4ade80" }} />
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.78)" }}>{children}</span>  
        </div>
    )
}

function StatBox({value, label}) {
    return(
        <div className="flex-1 rounded-xl px-3 py-2.5 text-center"
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
                style={{ background: `${accent}18`, color: accent, border: `1px solid ${accent}30` }}  
            >
                <IconComp size={16} />
            </div>
            <span className="text-xs font-medium tracking-wide" style={{color: "rgba(255,255,255,0.45)"}}>
                {label}
            </span>
        </div>
    )
}

const Features = () => {

  const [hovered, setHovered] = useState(null)
  const cs = (id) => (hovered === id ? glassHover : glass);
  const hp = (id) => ({
    onMouseEnter: () => setHovered(id),
    onMouseLeave: () => setHovered(null),
  });

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
                    Platform Capabilities
                </p>

                <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
                    Key Features
                </h2>
                <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
                    style={{color: "rgba(255,255,255,0.55)"}}
                >
                   Everything a modern school needs — student records, attendance,
                   grades, scheduling, parent communication, and finances — unified
                   in one platform. 
                </p>   
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {/* Card 1 - Student Management - Wide */}
                <div className="md:col-span-2 rounded-xl p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
                    style={cs("students")}
                    {...hp("students")}
                >
                    <div className="flex items-start justify-between mb-4">
                        <CardLabel icon={Users} label="STUDENT MANAGEMENT" accent="#93c5fd" />
                        <Chip color="#93c5fd">Core module</Chip>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2">
                        Every Student. One Profile 
                    </h3>
                    <p className="text-sm leading-relaxed mb-5" style={{color: "rgba(255,255,255,0.6)"}}>
                        A centralised student record covering enrolment, personal details,
                        academic history, behaviour notes, and documents — accessible instantly
                        by authorised staff, with a full audit trail for every change made.
                    </p>

                    {/* Profile Field grid on inner surface */}
                    <div className="grid grid-cols-2 gap-px mb-5 overflow-hidden" style={innerSurface}>
                        {[
                            { label: "Personal Info", sub: "Contact & demographics" },
                            { label: "Academic History", sub: "Grades & transcripts" },
                            { label: "Enrolment Status", sub: "Active, transferred, alumni" },
                            { label: "Documents", sub: "IDs, reports, consent forms" },
                        ].map(({ label, sub }) => (
                            <div key={label} className="p-3">
                            <div className="text-xs font-semibold text-white mb-0.5">{label}</div>
                            <div className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{sub}</div>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-3 mt-auto">
                        <StatBox value="∞" label="Student records" />
                        <StatBox value="GDPR" label="Compliant" />
                        <StatBox value="Full" label="Audit trail" />
                    </div>
                </div>

                {/* Card 2: Attendance Tracking - Narrow */}
                <div className="md:col-span-1 rounded-2xl p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
                    style={cs("attendance")}
                    {...hp("attendance")}
                >
                    <div className="flex items-start justify-between mb-1">
                        <CardLabel icon={CalendarCheck} label="ATTENDANCE TRACKING" accent="#4ade80" />
                    </div>

                    <Chip color="#4ade80">Automated</Chip>

                    <h3 className="text-base font-semibold text-white mt-4 mb-2">
                        Real-Time Register, Zero Paperwork 
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{color: "rgba(255,255,255,0.6)"}}>
                        Mark attendance by class or school-wide in seconds. Late arrivals,
                        absences, and patterns are flagged automatically.
                    </p>

                    <div className="mt-auto">
                        <FeatureRow>Digital class register</FeatureRow>
                        <FeatureRow>Late & absence auto-alerts</FeatureRow>
                        <FeatureRow>Parent SMS/email notifications</FeatureRow>
                        <FeatureRow>Monthly attendance reports</FeatureRow>
                    </div>
                </div>

                {/* Card 3: Grade Management */}
                <div className="md:col-span-1 rounded-2xl p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
                    style={cs("grades")}
                    {...hp("grades")}
                >
                    <div className="flex items-start justify-between mb-1">
                        <CardLabel icon={BookOpen} label="GRADE MANAGEMENT" accent="#a78bfa" />
                    </div>
                    <Chip color="#a78bfa">Multi-scheme</Chip>

                    <h3 className="text-base font-semibold text-white mt-4 mb-2">
                        Grading Management, Clear Insights 
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{color: "rgba(255,255,255,0.6)"}}>
                        Support letter grades, percentages, GPA, or custom rubrics.
                        Progress reports and transcripts generate automatically at term end.
                    </p>

                    <div className="mt-auto">
                        <FeatureRow>Custom grading schemes</FeatureRow>
                        <FeatureRow>Per-subject & overall GPA</FeatureRow>
                        <FeatureRow>Auto-generated report cards</FeatureRow>
                        <FeatureRow>Performance trend analysis</FeatureRow>
                    </div>
                </div>

                {/* Card 4: Timetable Scheduling */}
                <div className="md:col-span-2 rounded-2xl p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
                    style={cs("timetable")}
                    {...hp("timetable")}
                >
                    <div className="flex items-start justify-between mb-4">
                        <CardLabel icon={Clock} label="TIMETABLE SCHEDULING" accent="#fbbf24" />
                        <Chip color="#fbbf24">Conflict-free</Chip>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2">
                        Smart Scheduling, No Clashes
                    </h3>
                    <p className="text-sm leading-relaxed mb-5" style={{color: "rgba(255,255,255,0.6)"}}>
                        Build full school timetables with automatic conflict detection —
                        rooms, teachers, and classes are checked simultaneously so no
                        double-bookings slip through. Changes propagate instantly across
                        all affected views.
                    </p>

                    {/* Scheduling Feature Grid on inner surface */}
                    <div className="grid grid-cols-3 gap-px mb-5 overflow-hidden" style={innerSurface}>
                        {[
                            { label: "Room booking", sub: "Capacity-aware" },
                            { label: "Teacher allocation", sub: "Workload balanced" },
                            { label: "Class periods", sub: "Custom bell times" },
                        ].map(({ label, sub }) => (
                            <div key={label} className="p-3">
                            <div className="text-xs font-semibold text-white mb-0.5">{label}</div>
                            <div className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{sub}</div>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-3 mt-auto">
                        <StatBox value="Auto" label="Conflict detect" />
                        <StatBox value="Live" label="Updates" />
                        <StatBox value="iCal" label="Export ready" />
                    </div>
                </div>

                {/* Card 5: Parent Portal */}
                <div className="md:col-span-1 rounded-2xl p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
                    style={cs("parents")}
                    {...hp("parents")}
                >
                    <div className="flex items-start justify-between mb-1">
                        <CardLabel icon={MessageSquareHeart} label="PARENT PORTAL" accent="#5eead4" />   
                    </div>

                    <Chip color="#5eead4">Always-on access</Chip>

                    <h3 className="text-base font-semibold text-white mt-4 mb-2">
                        Keep Parents in the Loop
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
                        A dedicated portal where parents check grades, attendance, notices,
                        and fee balances — reducing admin calls and building trust.
                    </p>

                    <div className="mt-auto">
                        <FeatureRow>Live grade & attendance view</FeatureRow>
                        <FeatureRow>Direct teacher messaging</FeatureRow>
                        <FeatureRow>Event & notice board</FeatureRow>
                        <FeatureRow>Mobile-friendly access</FeatureRow>
                    </div>
                </div>

                {/* Card 6: Fee Management - narrow */}
                <div className="md:col-span-1 rounded-2xl p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
                    style={cs("fees")}
                    {...hp("fees")}
                >

                    <div className="flex items-start justify-between mb-1">
                        <CardLabel icon={Wallet} label="FEE MANAGEMENT" accent="#f87171" />
                    </div>
                    <Chip color="#f87171">Automated billing</Chip>

                    <h3 className="text-base font-semibold text-white mt-4 mb-2">
                        Fees Collected. Finances Clear
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{color: "rgba(255,255,255,0.6)"}}>
                        Set fee structures, generate invoices, track payments, and send
                        automated reminders — all without a spreadsheet in sight.
                    </p>

                    <div className="mt-auto">
                        <FeatureRow>Custom fee structures</FeatureRow>
                        <FeatureRow>Auto invoice generation</FeatureRow>
                        <FeatureRow>Overdue payment reminders</FeatureRow>
                        <FeatureRow>Financial summary reports</FeatureRow>
                    </div>
                </div>

                {/* Card 7: Stats Strip - full width */}
                <div
                    className="md:col-span-1 rounded-2xl p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
                    style={{ ...glassStrong }}
                >
                    {/* Label */}
                    <p
                    className="text-xs font-semibold tracking-widest uppercase mb-3"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                    Platform at a glance
                    </p>
        
                    {/* Title + description */}
                    <h3 className="text-base font-semibold text-white mb-2">
                    Everything in One Place
                    </h3>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
                    Built for schools of all sizes — cloud-hosted, secure, and
                    accessible from any device with no software to install.
                    </p>
        
                    {/* Key-value stat rows */}
                    <div className="flex flex-col gap-2 mb-5">
                    {[
                        { value: "6", label: "Core modules" },
                        { value: "99.9%", label: "Uptime SLA" },
                        { value: "256-bit", label: "Encryption" },
                        { value: "Real-time", label: "Cross-device sync" },
                        { value: "Cloud", label: "No install needed" },
                    ].map(({ value, label }) => (
                        <div
                        key={label}
                        className="flex items-center justify-between px-3 py-2 rounded-xl"
                        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                        >
                        <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{label}</span>
                        <span className="text-xs font-semibold text-white">{value}</span>
                        </div>
                    ))}
                    </div>
        
                </div>
            </div>
        </div>

    </div>
  )
}

export default Features