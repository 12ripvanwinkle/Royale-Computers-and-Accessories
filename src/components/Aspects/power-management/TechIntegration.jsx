import React, { useState } from 'react'
import {glass, glassHover, glassStrong, innerSurface} from '../CCTV-Holder/CCTVStyles'
import {Chip, Row, Stat, Label, InnerGrid, IconBubble} from './Components'
import {
  BarChart3,
  Wifi,
  Building2,
  Cloud,
  Bell,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Globe,
  Lock,
  Server,
} from "lucide-react";

const TechIntegration = () => {

  const [hovered, setHovered] = useState(null);
  const cs = (id) => (hovered === id ? glassHover : glass);
  const hp = (id) => ({ onMouseEnter: () => setHovered(id), onMouseLeave: () => setHovered(null)});

  return (
    <div className="w-full px-4 md:px-6 py-16 md:py-24" style={{fontFamily: '"Playfair Display", serif', color: "white"}}>
        <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="text-center mb-12">
                <p className="text-xs font-semibold tracking-widest uppercase mb-4"
                    style={{color: "rgba(255,255,255,0.45)"}}
                >
                    Under The Hood 
                </p>
                <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
                    Technology & Integration 
                </h2>
                <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
                    style={{color: "rgba(255,255,255,0.55)"}}
                >
                    Advanced power intelligence — IoT-connected hardware, cloud-hosted dashboards, and deep BMS integration working together as one unified system.
                </p>   
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {/* Smart Energy Monitoring software */}
                <div className="md:col-span-2 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300" 
                    style={cs("s")} {...hp("s")}
                >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                        <Label icon={BarChart3} label="SMART ENERGY MONITORING SOFTWARE" accent="#93c5fd" />
                        <Chip color="#93c5fd">Real-time</Chip>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                        Intelligent Software at the Core
                    </h3>
                    <p className="text-sm leading-relaxed mb-5" 
                        style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                        Our monitoring platform ingests data from every connected device in real time — processing consumption, detecting anomalies, and surfacing actionable insights without manual analysis. Purpose-built for power infrastructure, not adapted from generic tools.
                    </p>

                    <InnerGrid cols={2} items={[
                        { label: "Real-time data ingestion",  sub: "1-second resolution across all circuits" },
                        { label: "Anomaly detection",         sub: "AI flags deviations before they escalate" },
                        { label: "Trend & pattern analysis",  sub: "Historical data surfaces efficiency gaps" },
                        { label: "Custom reporting engine",   sub: "Scheduled PDF & CSV output" },
                        ]} 
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-auto">
                        <Stat value="1s" label="Data resolution" />
                        <Stat value="±0.5%" label="Measurement accuracy" />
                        <Stat value="24mo" label="Data retention" />
                    </div>
                </div>

                {/* IOT - Enabled Power Devices */}
                <div className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
                    style={cs("iot")} {...hp("iot")}
                >
                    <div className="flex items-start justify-between mb-1"><Label icon={Wifi} label="IoT-ENABLED POWER DEVICES" accent="#a78bfa" /></div>
                    <Chip color="#a78bfa">Connected hardware</Chip>
                    <h3 className="text-base font-semibold text-white mt-4 mb-2">
                        Hardware That Talks Back
                    </h3>
                    <p className="text-sm leading-relaxed mb-4"
                        style={{color: "rgba(255,255,255,0.6)"}}
                    >
                        Every device we install is IoT-enabled — smart meters, intelligent PDUs, connected UPS units — feeding live data to the platform and accepting remote commands.
                    </p>

                    <div className="mt-auto">
                        <Row accent="#a78bfa">Smart sub-metering units</Row>
                        <Row accent="#a78bfa">Intelligent PDUs & switchgear</Row>
                        <Row accent="#a78bfa">Connected UPS & battery units</Row>
                        <Row accent="#a78bfa">Remote on/off & scheduling</Row>
                        <Row accent="#a78bfa">Secure encrypted telemetry</Row>
                    </div>
                </div>

                {/* BMS Integration */}
                <div className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
                    style={cs("bms")} {...hp("bms")}
                >
                    <div className="flex items-start justify-between mb-1"><Label icon={Building2} label="BMS INTEGRATION" accent="#5eead4" /></div>
                    <Chip color="#5eead4">Protocol-native</Chip>
                    <h3 className="text-base font-semibold text-white mt-4 mb-2">
                        One Pane of Glass 
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" 
                        style={{color: "rgba(255,255,255,0.6)"}}
                    >
                        Power data flows directly into your existing Building Management System — no separate dashboard required. Native protocol support means no middleware, no translation layers.
                    </p>
                    <div className="mb-4">
                        <Row accent="#5eead4">Modbus TCP/RTU support</Row>
                        <Row accent="#5eead4">BACnet IP & MS/TP</Row>
                        <Row accent="#5eead4">SNMP v2c & v3</Row>
                        <Row accent="#5eead4">REST & MQTT API endpoints</Row>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-auto">
                        <Stat value="4+" label="Protocols supported" />
                        <Stat value="0" label="Middleware required" />
                    </div>
                </div>

                {/* Cloud Dashboard */}
                <div className="md:col-span-2 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
                    style={cs("cloud")} {...hp("cloud")}
                >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                        <Label icon={Cloud} label="CLOUD-BASED MONITORING DASHBOARDS" accent="#fbbf24" />
                        <Chip color="#fbbf24">Multi-site</Chip>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                        Every Site. One View. Anywhere.
                    </h3>
                    <p className="text-sm leading-relaxed mb-5"
                        style={{color: "rgba(255,255,255,0.6)"}}
                    >
                        A cloud-hosted dashboard gives you live visibility across every site, every circuit, and every device — accessible from any browser, on any device, with role-based access so the right people see the right data.
                    </p>
                    <InnerGrid cols={3} items={[
                        { label: "Multi-site overview",   sub: "All locations in one dashboard" },
                        { label: "Role-based access",     sub: "Granular permissions per user" },
                        { label: "Mobile-responsive",     sub: "Full access on phone or tablet" },
                        ]} 
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-auto">
                        <Stat value="99.9%" label="Dashboard uptime SLA" />
                        <Stat value="Unlimited" label="Sites & users" />
                    </div>
                </div>

                {/* Automated alerts */}
                <div className="md:col-span-3 rounded-2xl p-5 md:p-6" style={glassStrong}>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                        <div>
                            <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "rgba(255,255,255,0.45)" }}>
                            Automated alerts & reporting systems
                            </p>
                            <h3 className="text-base font-semibold text-white">
                            The Right Alert. The Right Person. In Under a Second.
                            </h3>
                        </div>
                        <button
                            className="shrink-0 self-start sm:self-auto flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
                            style={{ background: "rgba(147,197,253,0.18)", border: "1px solid rgba(147,197,253,0.35)", color: "#93c5fd" }}
                        >
                            <Bell size={12} /> See alert capabilities <ArrowRight size={11} />
                        </button>
                    </div>

                    {/* Alert Description + Feature List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <p className="text-sm leading-relaxed"
                            style={{color: "rgba(255,255,255,0.6)"}}
                        >
                            Threshold-based triggers fire the instant a value deviates — voltage spikes, overloads, UPS events, or missed check-ins. Alerts are routed by severity and recipient so the right person is notified without noise.
                        </p>
                        <div className="flex flex-col gap-2">
                            {[
                                { label: "Sub-1-second alert latency",          accent: "#f87171" },
                                { label: "SMS, email & dashboard notifications", accent: "#fbbf24" },
                                { label: "Severity-based routing & escalation",  accent: "#93c5fd" },
                                { label: "Automated weekly & monthly reports",   accent: "#4ade80" },
                            ].map(({ label, accent }) => (
                            <div key={label} className="flex items-center gap-2">
                                <CheckCircle2 size={12} style={{ color: accent, flexShrink: 0 }} />
                                <span className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>{label}</span>
                            </div>
                            ))}
                        </div>
                    </div>

                    {/* Full Stack Icon grid */}
                    <div
                    className="grid grid-cols-4 sm:grid-cols-8 gap-4 py-5 px-4 mb-6"
                    style={{ ...innerSurface, borderRadius: 12 }}
                    >
                        <IconBubble icon={BarChart3}  accent="#93c5fd" label="Monitoring" />
                        <IconBubble icon={Wifi}       accent="#a78bfa" label="IoT devices" />
                        <IconBubble icon={Building2}  accent="#5eead4" label="BMS" />
                        <IconBubble icon={Cloud}      accent="#fbbf24" label="Cloud" />
                        <IconBubble icon={Bell}       accent="#f87171" label="Alerts" />
                        <IconBubble icon={Lock}       accent="#4ade80" label="Encryption" />
                        <IconBubble icon={Server}     accent="#93c5fd" label="On-premise" />
                        <IconBubble icon={Globe}      accent="#a78bfa" label="Open API" />
                    </div>

                    {/* Bottom spec row */}
                    <div className="flex flex-wrap gap-x-5 gap-y-2 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                        {[
                            "No proprietary lock-in",
                            "Modbus, BACnet & SNMP native",
                            "ISO 50001 aligned",
                            "256-bit data encryption",
                            "GDPR-compliant telemetry",
                        ].map(item => (
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

export default TechIntegration