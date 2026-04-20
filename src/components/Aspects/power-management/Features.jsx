import React, { useState } from 'react'
import { Remote } from './featuresComponents'
import { Zap, Scale, BatteryCharging, ShieldAlert, BarChart3, Wifi } from 'lucide-react'
import { glass, glassHover } from '../CCTV-Holder/CCTVStyles'


function Card({ children, colSpan = '', rowSpan = '' }) {
    const [hovered, setHovered] = useState(false)
    return (
        <div
            className={`${colSpan} ${rowSpan} rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden`}
            style={hovered ? glassHover : glass}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {children}
        </div>
    )
}

function CardHeader({ icon: Icon, accent, eyebrow }) {
    return (
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: `${accent}18`, color: accent, border: `1px solid ${accent}30` }}>
                <Icon size={18} />
            </div>
            {eyebrow && (
                <span className="text-xs font-semibold tracking-widest uppercase"
                    style={{ color: 'rgba(255,255,255,0.4)' }}>{eyebrow}</span>
            )}
        </div>
    )
}

function Bullets({ items, accent }) {
    return (
        <div className="flex flex-col gap-1.5">
            {items.map(h => (
                <div key={h} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accent }} />
                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>{h}</span>
                </div>
            ))}
        </div>
    )
}

function StatPill({ value, label, accent }) {
    return (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full self-start"
            style={{ background: `${accent}12`, border: `1px solid ${accent}30` }}>
            <span className="text-xs font-bold" style={{ color: accent }}>{value}</span>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{label}</span>
        </div>
    )
}

const Features = () => {
    return (
        <div className="w-full px-4 md:px-6 py-16 md:py-24">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-xs font-semibold tracking-widest uppercase mb-4"
                        style={{ color: 'rgba(255,255,255,0.45)' }}>
                        Built-In Intelligence
                    </p>
                    <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
                        Key Features
                    </h2>
                    <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
                        style={{ color: 'rgba(255,255,255,0.55)' }}>
                        Every tool you need to monitor, protect, and optimise your electrical infrastructure —
                        from a single circuit to a multi-site operation.
                    </p>
                </div>

                {/*
                    Row 1: [Energy — 1/3] [Backup — 1/3] [Surge — 1/3]
                    Row 2: [Load — 1/2]  [Analytics — 1/2]
                    Row 3: [Remote — full or centered]
                    All cards equal height, no spanning.
                */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    {/* Row 1 — 3 equal */}
                    <Card>
                        <CardHeader icon={Zap} accent="#4ade80" eyebrow="Real-Time" />
                        <h3 className="text-lg font-semibold text-white leading-snug">Energy Monitoring</h3>
                        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.58)' }}>
                            Track live power draw across every circuit, zone, and device — with second-by-second
                            updates, peak detection, and automated alerts when consumption spikes.
                        </p>
                        <StatPill value="24/7" label="Continuous monitoring" accent="#4ade80" />
                        <Bullets items={['Live kWh per circuit', 'Peak load detection', 'Threshold alerts']} accent="#4ade80" />
                    </Card>

                    <Card>
                        <CardHeader icon={BatteryCharging} accent="#5eead4" eyebrow="Backup Systems" />
                        <h3 className="text-lg font-semibold text-white leading-snug">Backup Power</h3>
                        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.58)' }}>
                            UPS and generator integration ensures critical systems stay online during outages,
                            with automatic failover and real-time charge monitoring.
                        </p>
                        <StatPill value="Auto" label="Failover enabled" accent="#5eead4" />
                        <Bullets items={['Auto failover', 'UPS integration', 'Runtime estimation']} accent="#5eead4" />
                    </Card>

                    <Card>
                        <CardHeader icon={ShieldAlert} accent="#f87171" eyebrow="Protection" />
                        <h3 className="text-lg font-semibold text-white leading-snug">Surge Protection</h3>
                        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.58)' }}>
                            Multi-stage transient voltage surge suppressors guard every connected device.
                            All blocked events are logged with timestamp and severity rating.
                        </p>
                        <StatPill value="TVSS" label="Multi-stage protection" accent="#f87171" />
                        <Bullets items={['Multi-stage TVSS', 'Event logging', 'Equipment warranty']} accent="#f87171" />
                    </Card>

                    {/* Row 2 — 2 equal halves */}
                    <div className="md:col-span-2">
                        <Card>
                            <CardHeader icon={Scale} accent="#93c5fd" eyebrow="Distribution" />
                            <h3 className="text-lg font-semibold text-white leading-snug">Load Balancing</h3>
                            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.58)' }}>
                                Intelligent load distribution prevents any single circuit from becoming a bottleneck —
                                automatically redistributing demand across phases to maximise efficiency and lifespan.
                            </p>
                            <StatPill value="3-Phase" label="Automatic balancing" accent="#93c5fd" />
                            <Bullets items={['3-phase balancing', 'Auto redistribution', 'Overload prevention']} accent="#93c5fd" />
                        </Card>
                    </div>

                    <Card>
                        <CardHeader icon={BarChart3} accent="#fbbf24" eyebrow="Insights" />
                        <h3 className="text-lg font-semibold text-white leading-snug">Usage Analytics</h3>
                        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.58)' }}>
                            Weekly and monthly reports surface consumption trends, cost projections, and
                            efficiency opportunities — giving you the data to reduce bills and carbon footprint.
                        </p>
                        <StatPill value="Weekly" label="Automated reports" accent="#fbbf24" />
                        <Bullets items={['Weekly trend reports', 'Cost projections', 'Carbon footprint tracking']} accent="#fbbf24" />
                    </Card>

                    {/* Row 3 — full width */}
                    <div className="md:col-span-3">
                        <Card>
                            <div className="flex flex-col md:flex-row md:items-start gap-6">
                                <div className="flex flex-col gap-4 flex-1">
                                    <CardHeader icon={Wifi} accent="#a78bfa" eyebrow="Remote Access" />
                                    <h3 className="text-lg font-semibold text-white leading-snug">Remote Monitoring</h3>
                                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.58)' }}>
                                        Manage and monitor all sites from a single cloud dashboard — real-time status,
                                        instant alerts, and remote control from any device, anywhere in the world.
                                    </p>
                                    <StatPill value="Any device" label="Cloud dashboard" accent="#a78bfa" />
                                </div>
                                <div className="flex flex-col gap-4 flex-1">
                                    <div className="h-px md:hidden" style={{ background: 'rgba(255,255,255,0.08)' }} />
                                    <Bullets items={['Multi-site dashboard', 'Mobile app access', 'Instant push alerts']} accent="#a78bfa" />
                                    <div className="flex-1 flex flex-col justify-end">
                                        <Remote />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Features