import React, { useState } from 'react'  
import { glass, glassHover, glassStrong, innerSurface } from "../CCTV-Holder/CCTVStyles";  
import {  
  BatteryCharging,  
  Fuel,  
  LayoutGrid,  
  Activity,  
  Gauge,  
  Cpu,  
  CheckCircle2,  
  ArrowRight,  
} from "lucide-react";  
import {SpecRow,UseCaseTag,UPSChargeMockup,GeneratorMockup, FeatureRow, StatBox, CardLabel, Chip} from './Components'

const SystemTypes = () => {

  const [hovered, setHovered] = useState(null);

  const cs = (id) => (hovered === id ? glassHover : glass);  
  const hp = (id) => ({  
    onMouseEnter: () => setHovered(id),  
    onMouseLeave: () => setHovered(null),  
  });

  return (  
    <div className="w-full px-4 md:px-6 py-16 md:py-24"  
        style={{fontFamily: '"Playfair Display", serif', color: "white"}}  
    >  
        <div className="max-w-5xl mx-auto">

            {/* Header */}  
            <div className="text-center mb-12">  
                <p className="text-xs font-semibold tracking-widest uppercase mb-4"  
                    style={{color: "rgba(255,255,255,0.45)"}}  
                >  
                    Infrastructure Portfolio  
                </p>  
                <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">  
                    Types of Power Systems  
                </h2>  
                <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"  
                    style={{color: "rgba(255,255,255,0.55)"}}  
                >  
                    Six categories of power infrastructure — each solving a distinct  
                    problem. We supply, install, and integrate all of them.  
                </p>  
            </div>

            {/* Bento Grid */}  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {/* Row 1 */}  
                {/* UPS - wide  */}  
                <div className="md:col-span-2 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"  
                    style={cs("ups")}  
                    {...hp("ups")}  
                >  
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">  
                        <CardLabel icon={BatteryCharging} label="UNINTERRUPTIBLE POWER SUPPLY" accent="#5eead4" />  
                        <Chip color="#5eead4">Critical infrastructure</Chip>  
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2">  
                        Zero Downtime. Zero Compromise.  
                    </h3>  
                    <p className="text-sm leading-relaxed mb-5" style={{color: "rgba(255,255,255,0.6)"}}>  
                        A UPS sits between your mains supply and your critical equipment,  
                        providing instantaneous battery backup the moment power fails —  
                        no flicker, no restart, no data loss. From desktop-class units to  
                        three-phase enterprise systems, we specify the right capacity for  
                        your load.  
                    </p>

                    <UPSChargeMockup />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-px mb-5 overflow-hidden" style={innerSurface}>  
                        {[  
                            { label: "Online double-conversion", sub: "True zero-transfer time" },  
                            { label: "Line-interactive",         sub: "Efficient mid-range protection" },  
                            { label: "Standby / offline",        sub: "Cost-effective basic backup" },  
                            { label: "Modular UPS",              sub: "Scalable enterprise systems" },  
                        ].map(({ label, sub }) => (  
                            <div key={label} className="p-3">  
                            <div className="text-xs font-semibold text-white mb-0.5">{label}</div>  
                            <div className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.45)" }}>{sub}</div>  
                            </div>  
                        ))}  
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">  
                        {["Server rooms", "Medical equipment", "Financial terminals", "Data centres", "Retail POS"].map(tag => (  
                            <UseCaseTag key={tag} color="#5eead4">{tag}</UseCaseTag>  
                        ))}  
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-auto">  
                        <StatBox value="< 2ms" label="Switchover time" />  
                        <StatBox value="0.5–1000kVA" label="Capacity range" />  
                        <StatBox value="99.9%" label="Efficiency (ECO)" />  
                    </div>  
                </div>

                {/* Generators - narrow */}  
                <div className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"  
                    style={cs("gen")}  
                    {...hp("gen")}  
                >  
                    <div className="flex items-start justify-between mb-1">  
                        <CardLabel icon={Fuel} label="BACKUP GENERATOR SYSTEMS" accent="#fbbf24" />  
                    </div>  
                    <Chip color="#fbbf24">Long-duration</Chip>

                    <h3 className="text-base font-semibold text-white mt-4 mb-2">  
                        Hours of Power, Not Minutes  
                    </h3>  
                    <p className="text-sm leading-relaxed mb-4" style={{color: "rgba(255,255,255,0.6)"}}>  
                        Diesel or natural gas generators for extended outages where UPS  
                        runtime is insufficient. Auto-start on mains failure, ATS-integrated.  
                    </p>

                    <GeneratorMockup />

                    <div className="mt-auto">  
                        <FeatureRow accent="#fbbf24">Auto-start on mains failure</FeatureRow>  
                        <FeatureRow accent="#fbbf24">ATS / changeover switching</FeatureRow>  
                        <FeatureRow accent="#fbbf24">Diesel & natural gas options</FeatureRow>  
                        <FeatureRow accent="#fbbf24">Remote start & monitoring</FeatureRow>  
                    </div>  
                </div>

                {/* Row 2 */}

                {/* PDU - Narrow */}  
                <div className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"  
                    style={cs("pdu")}  
                    {...hp("pdu")}  
                >    
                    <div className="flex items-start justify-between mb-1">  
                        <CardLabel icon={LayoutGrid} label="POWER DISTRIBUTION UNITS" accent="#a78bfa" />  
                    </div>  
                    <Chip color="#a78bfa">Rack-level</Chip>

                    <h3 className="text-base font-semibold text-white mt-4 mb-2">  
                        Precision Distribution  
                    </h3>  
                    <p className="text-sm leading-relaxed mb-4" style={{color: "rgba(255,255,255,0.6)"}}>  
                        Intelligent PDUs distribute power at the rack level, with per-outlet  
                        metering, remote switching, and overload protection on every port.  
                    </p>

                    <div className="mb-4">  
                        <FeatureRow accent="#a78bfa">Per-outlet metering & control</FeatureRow>  
                        <FeatureRow accent="#a78bfa">Remote outlet switching</FeatureRow>  
                        <FeatureRow accent="#a78bfa">Overload & surge protection</FeatureRow>  
                        <FeatureRow accent="#a78bfa">1U–3U rack-mount form factors</FeatureRow>  
                    </div>

                    <div className="rounded-xl p-3 mt-auto" style={innerSurface}>  
                        <div className="grid grid-cols-4 gap-1.5">  
                            {[82, 47, 91, 33, 68, 55, 76, 40].map((load, i) => (  
                                <div key={i} className="flex flex-col items-center gap-1">  
                                    <div  
                                    className="w-full rounded-sm"  
                                    style={{  
                                        height: 24,  
                                        background: load > 80 ? "rgba(248,113,113,0.6)" : load > 60 ? "rgba(251,191,36,0.5)" : "rgba(167,139,250,0.5)",  
                                        border: "1px solid rgba(255,255,255,0.1)",  
                                    }}  
                                    />  
                                    <span className="text-xs" style={{ fontSize: 8, color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>  
                                    O{i + 1}  
                                    </span>  
                                </div>  
                            ))}  
                        </div>  
                    </div>  
                </div>

                {/* Energy Monitoring Systems - Narrow */}  
                <div className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"  
                    style={cs("ems")}  
                    {...hp("ems")}  
                >  
                    <div className="flex items-start justify-between mb-1">  
                        <CardLabel icon={Activity} label="ENERGY MONITORING SYSTEMS" accent="#4ade80" />  
                    </div>  
                    <Chip color="#4ade80">Real-time</Chip>

                    <h3 className="text-base font-semibold text-white mt-4 mb-2">  
                        See Everything. Miss Nothing  
                    </h3>  
                    <p className="text-sm leading-relaxed mb-4" style={{color: "rgba(255,255,255,0.6)"}}>  
                        Hardware and software combined to give you a real-time picture of  
                        energy consumption across every meter, circuit, and device —  
                        logged, trended, and actionable.  
                    </p>

                    <div className="mb-4">  
                        <FeatureRow accent="#4ade80">Sub-metering to circuit level</FeatureRow>  
                        <FeatureRow accent="#4ade80">Cloud + on-premise dashboards</FeatureRow>  
                        <FeatureRow accent="#4ade80">Modbus / BACnet / SNMP support</FeatureRow>  
                        <FeatureRow accent="#4ade80">ISO 50001-aligned reporting</FeatureRow>  
                    </div>

                    <div className="grid grid-cols-1 sm:grid-col-2 gap-2 mt-auto">  
                        <StatBox value="1s" label="Data resolution" />  
                        <StatBox value="24mo" label="Retention" />  
                    </div>  
                </div>

                {/* Voltage Regulations - Narrow */}  
                <div className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"  
                    style={cs("vreg")}  
                    {...hp("vreg")}  
                >  
                    <div className="flex items-start justify-between mb-1">  
                        <CardLabel icon={Gauge} label="VOLTAGE REGULATION SYSTEMS" accent="#f87171" />  
                    </div>  
                    <Chip color="#f87171">TVSS + AVR</Chip>

                    <h3 className="text-base font-semibold text-white mt-4 mb-2">  
                        Clean Power In. Always.  
                    </h3>  
                    <p className="text-sm leading-relaxed mb-4" style={{color: "rgba(255,255,255,0.6)"}}>  
                        Automatic voltage regulators and transient voltage surge suppressors  
                        filter dirty power before it reaches sensitive equipment — extending  
                        lifespan and preventing failure.  
                    </p>

                    <div className="mb-4">  
                        <FeatureRow accent="#f87171">±1% output voltage regulation</FeatureRow>  
                        <FeatureRow accent="#f87171">Multi-stage surge suppression</FeatureRow>  
                        <FeatureRow accent="#f87171">Harmonic distortion filtering</FeatureRow>  
                        <FeatureRow accent="#f87171">Event logging & diagnostics</FeatureRow>  
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-auto">  
                        <StatBox value="±1%" label="Output tolerance" />  
                        <StatBox value="IEC 61643" label="Standard" />  
                    </div>  
                </div>

                {/* Row 3 */}

                {/* Smart Power Management - narrow */}  
                <div className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"  
                    style={cs("smart")}  
                    {...hp("smart")}  
                >

                    <div className="flex items-start justify-between mb-1">  
                        <CardLabel icon={Cpu} label="SMART POWER MANAGEMENT" accent="#93c5fd" />  
                    </div>  
                    <Chip color="#93c5fd">AI-assisted</Chip>

                    <h3 className="text-base font-semibold text-white mt-4 mb-2">  
                        Power That Thinks for Itself  
                    </h3>  
                    <p className="text-sm leading-relaxed mb-4" style={{color: "rgba(255,255,255,0.6)"}}>  
                        Software-defined power management that learns your consumption  
                        patterns, automates load scheduling, and continuously optimises  
                        for cost, efficiency, and reliability.  
                    </p>

                    <div className="mb-4">  
                        <FeatureRow accent="#93c5fd">AI-driven load scheduling</FeatureRow>  
                        <FeatureRow accent="#93c5fd">Demand response integration</FeatureRow>  
                        <FeatureRow accent="#93c5fd">Predictive maintenance alerts</FeatureRow>  
                        <FeatureRow accent="#93c5fd">Open API & third-party sync</FeatureRow>  
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-auto">  
                        <StatBox value="−40%" label="Avg. cost saving" />  
                        <StatBox value="API-open" label="Integrations" />  
                    </div>  
                </div>

                {/* System Comparison Strip - Wide */}  
                <div className="md:col-span-2 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300" style={glassStrong}>  
                    <p className="text-xs font-semibold tracking-widest uppercase mb-3"  
                        style={{color: "rgba(255,255,255,0.45)"}}  
                    >  
                        System Selector  
                    </p>  
                    <h3 className="text-base font-semibold text-white mb-4">  
                        Which System Does Your Site Need?  
                    </h3>

                    <div className="flex flex-col gap-2 mb-5">  
                        {[  
                            { system: "UPS",               best: "Servers, medical, POS",       runtime: "Minutes–hours",  accent: "#5eead4" },  
                            { system: "Generator",         best: "Entire facilities",            runtime: "Days (refuel)",  accent: "#fbbf24" },  
                            { system: "PDU",               best: "Data centre racks",           runtime: "Continuous",     accent: "#a78bfa" },  
                            { system: "EMS",               best: "Any site needing visibility", runtime: "Ongoing",        accent: "#4ade80" },  
                            { system: "Voltage Reg.",      best: "Sensitive electronics",       runtime: "Continuous",     accent: "#f87171" },  
                            { system: "Smart Management",  best: "Multi-site / large estates",  runtime: "Always-on",      accent: "#93c5fd" },  
                        ].map(({ system, best, runtime, accent }) => (  
                            <div
                                key={system}
                                className="flex items-center gap-2 px-3 py-2.5 rounded-xl"
                                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                            >
                                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accent }} />
                                <div className="flex flex-col sm:flex-row sm:items-center flex-1 min-w-0 gap-0.5 sm:gap-2">
                                    <span className="text-xs font-semibold shrink-0" style={{ color: accent }}>{system}</span>
                                    <span className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.55)" }}>{best}</span>
                                </div>
                                <span
                                    className="text-xs shrink-0 px-2 py-0.5 rounded-full ml-auto"
                                    style={{ background: `${accent}12`, color: accent, border: `1px solid ${accent}25` }}
                                >
                                    {runtime}
                                </span>
                            </div>  
                        ))}  
                    </div>

                    {/* Footer */}  
                    <div  
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 mt-auto"  
                    style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}  
                    >  
                        <div className="flex flex-wrap gap-3">  
                            {[  
                            "We supply all six system types",  
                            "Integrated multi-system solutions",  
                            "Site survey included",  
                            ].map(item => (  
                            <div key={item} className="flex items-center gap-1.5">  
                                <CheckCircle2 size={11} style={{ color: "#4ade80", flexShrink: 0 }} />  
                                <span className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>{item}</span>  
                            </div>  
                            ))}  
                        </div>  
                        <button  
                            className="shrink-0 self-start sm:self-auto flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"  
                            style={{ background: "rgba(147,197,253,0.18)", border: "1px solid rgba(147,197,253,0.35)", color: "#93c5fd" }}  
                        >  
                            Get a site assessment <ArrowRight size={11} />  
                        </button>  
                    </div>  
                </div>  
            </div>  
        </div>  
    </div>  
  )  
}

export default SystemTypes