import React, { useState } from 'react'
import {Row, Stat, Label, InnerGrid, Chip} from './Components'
import {glass, glassHover, glassStrong, innerSurface} from '../CCTV-Holder/CCTVStyles'
import {
  ClipboardList,
  PenTool,
  Wrench,
  GitMerge,
  Activity,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const Services = () => {

  const [hovered, setHovered] = useState(null);
  const cs = (id) => (hovered === id ? glassHover : glass);
  const hp = (id) => ({ onMouseEnter: () => setHovered(id), onMouseLeave: () => setHov(null) });

  return (
    <div className="w-full px-4 md:px-6 py-16 md:py-24" style={{fontFamily: '"Playfair Display", serif', color: "white"}}>
        <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="text-center mb-12">
                <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>What We Do</p>
                <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">Our Power Management Services</h2>
                <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                    End-to-end power management — from the first site audit through to long-term monitoring and optimisation. We handle every phase.
                </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {/* Assessment */}
                <div className="md:col-span-2 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
                    style={cs("a")} {...hp("a")}
                >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                        <Label icon={ClipboardList} label="STEP 01 — ENERGY ASSESSMENT & CONSULTATION" accent="#93c5fd" />
                        <Chip color="#93c5fd">Foundation</Chip>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                        Understand Before You Build
                    </h3>
                    <p className="text-sm leading-relaxed mb-5" style={{color: "rgba(255,255,255,0.6)"}}>
                       Every engagement starts with a thorough site audit — measuring current consumption, identifying waste, and mapping the right infrastructure before a single cable is pulled. 
                    </p>
                    <InnerGrid cols={2} items={[
                        { label: "Full site energy audit",    sub: "Every circuit, zone & device measured" },
                        { label: "Load profiling",            sub: "Peak demand & consumption patterns" },
                        { label: "Cost & carbon baseline",    sub: "Current spend & emissions quantified" },
                        { label: "Infrastructure gap report", sub: "What's missing, what needs replacing" },
                        ]} 
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-auto">
                        <Stat value="100%" label="Sites audited first" />
                        <Stat value="48h" label="Report turnaround" />
                        <Stat value="Free" label="Initial consultation" />
                    </div>
                </div>

                {/* System Design */}
                <div className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300" 
                    style={cs("d")} {...hp("d")}
                >
                    <div className="flex items-start justify-between mb-1"><Label icon={PenTool} label="STEP 02 — SYSTEM DESIGN & PLANNING" accent="#a78bfa" /></div>
                    <Chip color="#a78bfa">Engineering</Chip>
                    <h3 className="text-base font-semibold text-white mt-4 mb-2">
                        Precision Before Installation
                    </h3>
                    <p className="text-sm leading-relaxed mb-4"
                        style={{color: "rgba(255,255,255,0.6)"}}
                    >
                      Detailed engineering drawings, equipment specifications, and phased rollout plans tailored to your load requirements, site constraints, and budget.
                    </p>
                    <div className="mt-auto">
                        <Row accent="#a78bfa">Single-line diagrams & drawings</Row>
                        <Row accent="#a78bfa">Equipment sizing & selection</Row>
                        <Row accent="#a78bfa">Phased rollout planning</Row>
                        <Row accent="#a78bfa">Budget & ROI modelling</Row>
                    </div>
                </div>

                {/* Installation */}
                <div className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-30"
                    style={cs("int")} {...hp("int")}
                >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                        <Label icon={GitMerge} label="STEP 04 — INTEGRATION WITH EXISTING INFRASTRUCTURE" accent="#5eead4" />
                        <Chip color="#5eead4">Zero disruption</Chip>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                        New Systems. No Disruption
                    </h3>
                    <p className="text-sm  leading-relaxed mb-5" style={{color: "rgba(255,255,255,0.6)"}}>
                        We connect new power systems to your existing SCADA, BMS, and monitoring platforms without disrupting live operations — hot cutovers, protocol bridging, and API connections handled end-to-end.
                    </p>
                    <InnerGrid cols={3} items={[
                        { label: "SCADA & BMS",    sub: "Direct integration with existing systems" },
                        { label: "Protocol bridge", sub: "Modbus, BACnet, SNMP supported" },
                        { label: "Hot cutover",    sub: "Live switchover, zero downtime" },
                        ]} 
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-auto">
                        <Stat value="0" label="Downtime during cutover" />
                        <Stat value="Open API" label="Third-party ready" />
                    </div>
                </div>

                {/* Integration */}
                <div className="md:col-span-2 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
                    style={cs("m")} {...hp("m")}
                >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                        <Label icon={GitMerge} label="STEP 04 — INTEGRATION WITH EXISTING INFRASTRUCTURE" accent="#5eead4" />
                        <Chip color="#5eead4">Zero disruption</Chip>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                        New Systems. No Disruption.
                    </h3>
                    <p className="text-sm leading-relaxed mb-5"
                        style={{color: "rgba(255,255,255,0.6)"}}
                    >
                        We connect new power systems to your existing SCADA, BMS, and monitoring platforms without disrupting live operations — hot cutovers, protocol bridging, and API connections handled end-to-end.
                    </p>
                    <InnerGrid cols={3} items={[
                        { label: "SCADA & BMS",    sub: "Direct integration with existing systems" },
                        { label: "Protocol bridge", sub: "Modbus, BACnet, SNMP supported" },
                        { label: "Hot cutover",    sub: "Live switchover, zero downtime" },
                        ]} 
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-auto">
                       <Stat value="0" label="Downtime during cutover" />
                       <Stat value="Open API" label="Third-party ready" /> 
                    </div>
                </div>

                {/* Maintenance */}
                <div className="md:col-span-2 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
                    style={cs("m")} {...hp("m")}
                >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                        <Label icon={Activity} label="STEP 05 — MAINTENANCE & MONITORING" accent="#4ade80" />
                        <Chip color="#4ade80">24 / 7</Chip>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                        We Stay Long After Install
                    </h3>
                    <p className="text-sm leading-relaxed mb-5" style={{color: "rgba(255,255,255,0.6)"}}>
                        Scheduled preventive maintenance and round-the-clock remote monitoring keep your systems running at peak performance. Issues caught and resolved before they become outages.
                    </p>
                    <InnerGrid cols={2} items={[
                        { label: "Preventive maintenance", sub: "Scheduled quarterly site visits" },
                        { label: "Remote monitoring",      sub: "24/7 live system surveillance" },
                        { label: "Incident response",      sub: "Rapid on-site dispatch when needed" },
                        { label: "Health reporting",       sub: "Monthly performance reports" },
                        ]} 
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-auto">
                        <Stat value="24/7" label="Remote monitoring" />
                        <Stat value="< 4h" label="Response SLA" />
                        <Stat value="99.9%" label="Uptime maintained" />
                    </div>
                </div>

                {/* Upgrades */}
                <div className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
                    style={cs("u")} {...hp("u")}
                >
                    <div className="flex items-start justify-between mb-1"><Label icon={TrendingUp} label="STEP 06 — UPGRADES & OPTIMISATION" accent="#f87171" /></div>
                    <Chip color="#f87171">Optimisation</Chip>

                    <h3 className="text-base font-semibold text-white mt-4 mb-2">
                        Evolve as You Grow
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{color: "rgba(255,255,255,0.6)"}}>
                        Load profiles change and equipment ages. We audit, upgrade, and retune existing systems to reclaim efficiency and extend infrastructure life.
                    </p>
                    <div className="mb-4">
                        <Row accent="#f87171">Aging equipment assessment</Row>
                        <Row accent="#f87171">Capacity expansion planning</Row>
                        <Row accent="#f87171">Efficiency retune & PUE gains</Row>
                        <Row accent="#f87171">Technology refresh roadmap</Row>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-auto">
                        <Stat value="−40%" label="Avg. efficiency gain" />
                        <Stat value="Phased" label="No big-bang upgrades" />
                    </div>
                </div>

                {/* CTA Strip */}
                <div className="md:col-span-3 rounded-2xl px-5 md:px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4" style={glassStrong}>
                    <div>
                        <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "rgba(255,255,255,0.45)" }}>Ready to get started?</p>
                        <h3 className="text-base font-semibold text-white">Free site assessment — no obligation, no pressure.</h3>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                        {["End-to-end delivery", "Certified engineers", "No lock-in contracts"].map(item => (
                            <div key={item} className="flex items-center gap-1.5">
                            <CheckCircle2 size={12} style={{ color: "#4ade80", flexShrink: 0 }} />
                            <span className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{item}</span>
                            </div>
                        ))}
                        <button
                            className="shrink-0 flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
                            style={{ background: "rgba(147,197,253,0.18)", border: "1px solid rgba(147,197,253,0.35)", color: "#93c5fd" }}
                        >
                            Book a consultation <ArrowRight size={11} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services