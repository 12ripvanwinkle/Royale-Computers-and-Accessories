import React from 'react'
import {glassStrong, innerSurface} from './digitalStyles'
import { glass } from "../CCTV-Holder"
import {
  MonitorPlay, Zap, Film, Clock, LayoutGrid,
  TouchpadOff, Cloud, BarChart2
} from 'lucide-react'
import {Chip, CardLabel, CmsMockup, RealtimeMockup, ScheduleMockup, MultiScreenMockup, AnalyticsMockup} from './SignageHolder'


function DSFeatures() {
    return (
        <div className="w-full px-4 md:px-6 py-16 md:py-24">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-xs font-semibold tracking-widest uppercase mb-4"
                        style={{ color: 'rgba(255,255,255,0.45)' }}
                    >
                        Core Capabilities
                    </p>
                    <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
                        Key Features
                    </h2>
                    <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
                        style={{color: 'rgba(255,255,255,0.55)'}}
                    >
                        Everything you need to manage, schedule, and measure your digital signage estate
                        from a single platform.
                    </p>
                </div>

                {/* Bento Grid section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    
                    {/* 1. CMS - Wide */}
                    <div className="md:col-span-2 rounded-2xl p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300" style={glassStrong}>
                        <CmsMockup />
                    
                        <div className="mt-auto">
                            <CardLabel icon={<MonitorPlay size={16} />} label="Content Management" accent="#93c5fd" />
                            <h3 className="text-lg font-semibold text-white mb-2">Remote Content Management</h3>
                            <p className="text-sm leading-relaxed mb-3" style={{color: 'rgba(255,255,255,0.6)'}}>
                                Upload, organise, and push content to any screen from a single cloud CMS — no on-site visits required.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <Chip color='#93c5fd'>Drag & Drop Editor</Chip>
                                <Chip color='#93c5fd'>Role Based Access</Chip>
                                <Chip color='#93c5fd'>Verison History</Chip>
                            </div>
                        </div>
                    </div>

                    {/* 2. Real-time updates */}
                    <div className="md:col-span-1 rounded-2xl p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300" style={glass}>
                        <RealtimeMockup />
                        <div className="mt-auto">
                            <CardLabel icon={<Zap size={16} />} label="Instant Delivery" accent="#4ade80" />
                            <h3 className="text-base font-semibold text-white mb-2">
                                Real-Time Updates
                            </h3>
                            <p className="text-sm leading-relaxed mb-3" style={{color: 'rgba(255,255,255,0.6)'}}>
                                Push content changes live to any screen in seconds — emergency alerts, price changes, or new campaigns.   
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <Chip color='#4ade80'>Sub-5s Delivery</Chip>
                                <Chip color='#4ade80'>Emergency Override</Chip>
                            </div>
                        </div>
                    </div>

                    {/* 3. Multimedia Support */}
                    <div className="md:col-span-1 rounded-2xl p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300" style={glass}>
                        <div className="rounded-xl p-4 mb-4 flex flex-wrap gap-2" style={innerSurface}>
                            {[
                                { label: 'MP4 / WebM', color: '#a78bfa' },
                                { label: 'PNG / JPG', color: '#93c5fd' },
                                { label: 'GIF / APNG', color: '#4ade80' },
                                { label: 'CSS Anim', color: '#fbbf24' },
                                { label: 'HTML5', color: '#f87171' },
                                { label: 'RTSP Stream', color: '#5eead4' },
                            ].map(f => (
                                <div key={f.label} className="px-2.5 py-1 rounded-lg text-xs font-medium"
                                style={{ background: `${f.color}15`, border: `1px solid ${f.color}30`, color: f.color }}>
                                {f.label}
                                </div>
                            ))}
                        </div>
                        <div className="mt-auto">
                            <CardLabel icon={<Film size={16} />} label="Media Formats" accent="#a78bfa" />
                            <h3 className="text-base font-semibold text-white mb-2">Multimedia Support</h3>
                            <p className="text-sm leading-relaxed" style={{color: 'rgba(255,255,255,0.6)'}}>
                                Video, images, animations, HTML5 widgets, and live RTSP streams — all supported natively.
                            </p>
                        </div>
                    </div>

                    {/* 4. Scheduled Playback - Wide */}
                    <div className="md:col-span-2 rounded-2xl p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300" style={glassStrong}>
                        <ScheduleMockup />
                        <div className="mt-auto">
                            <CardLabel icon={<Clock size={16} />} label="Playback Scheduling" accent="#fbbf24" />
                            <h3 className="text-lg font-semibold text-white mb-2">Schedule Content Playback</h3>
                            <p className="text-sm leading-relaxed mb-3" style={{color: 'rgba(255,255,255,0.6)'}}>
                                Set it and forget it. Define exactly when each piece of content plays — by time, day, date range, or recurring rule.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <Chip color="#fbbf24">Time-based triggers</Chip>
                                <Chip color="#fbbf24">Day-of-week rules</Chip>
                                <Chip color="#fbbf24">Priority override</Chip>
                            </div>
                        </div>
                    </div>

                    {/* 5. Multi-Screen - Wide */}
                    <div className="md:col-span-2 rounded-2xl p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300" style={glassStrong}>
                        <MultiScreenMockup />
                        <div className="mt-auto">
                            <CardLabel icon={<LayoutGrid size={16} />} label="Screen Management" accent="#5eead4" />
                            <h3 className="text-lg font-semibold text-white mb-2">Multi-Screen Control</h3>
                            <p className="text-sm leading-relaxed mb-3" style={{color: 'rgba(255,255,255,0.6)'}}>
                                Manage unlimited screens across any number of locations from one dashboard — group them, sync them, or control individually.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <Chip color="#5eead4">Unlimited screens</Chip>
                                <Chip color="#5eead4">Group sync</Chip>
                                <Chip color="#5eead4">Per-screen override</Chip>
                            </div>
                        </div>
                    </div>

                    {/* 6. TouchScreen */}
                    <div className="md:col-span-1 rounded-2xl p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300" style={glass}>
                        <div className="rounded-xl p-4 mb-4 flex flex-col gap-2" style={innerSurface}>
                            <div className="flex items-center gap-2 p-2 rounded-lg" style={{ background: 'rgba(94,234,212,0.08)', border: '1px solid rgba(94,234,212,0.2)'}}>

                                <div className="w-5 h-5 rounded-md flex items-center justify-center shrink-0" style={{background: 'rgba(94,234,212,0.2)'}}>
                                <TouchpadOff size={11} color='#5eead4' /> 
                                </div>
                                <span className="text-xs" style={{color: 'rgba(255,255,255,0.7)'}}>Tap — navigate menu</span>
                            </div>

                            <div className="flex items-center gap-2 p-2 rounded-lg" style={{background: 'rgba(255,255,255,0.05)'}}>
                                <div className="w-5 h-5 rounded-md flex items-center justify-center shrink-0" style={{background: 'rgba(255,255,255,0.1)'}}>
                                    <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.6)' }}>↔</span>
                                </div>
                                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Swipe — browse content</span>
                            </div>

                            <div className="flex items-center gap-2 p-2 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)' }}>
                                <div className="w-5 h-5 rounded-md flex items-center justify-center shrink-0" style={{ background: 'rgba(255,255,255,0.1)' }}>
                                <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.6)' }}>⊕</span>
                                </div>
                                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Pinch — zoom in</span>
                            </div>
                        </div>
                        <div className="mt-auto">
                            <CardLabel icon={<TouchpadOff size={16} />} label="Touch Interaction" accent="#5eead4" />
                            <h3 className="text-base font-semibold text-white mb-2">Interactive Touchscreen</h3>
                            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                                Transform passive displays into interactive kiosks — wayfinding, product browsers, self-service menus, and more.
                            </p>
                        </div>
                    </div>

                    {/* 7. Cloud Access */}
                    <div className="md:col-span-1 rounded-2xl p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300" style={glass}>
                        <div className="rounded-xl p-3 mb-4" style={innerSurface}>
                            <div className="flex flex-col gap-2">
                                {[
                                    { label: 'Web browser', icon: '🌐', status: 'Connected' },
                                    { label: 'iOS / Android', icon: '📱', status: 'Connected' },
                                    { label: 'API access', icon: '⚡', status: 'Available' },
                                    ].map(d => (
                                    <div key={d.label} className="flex items-center gap-2 px-2 py-1.5 rounded-lg"
                                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                                        <span style={{ fontSize: 13 }}>{d.icon}</span>
                                        <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.7)' }}>{d.label}</span>
                                        <span className="text-xs" style={{ color: '#4ade80' }}>{d.status}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-auto">
                            <CardLabel icon={<Cloud size={16} />} label="Cloud Platform" accent="#93c5fd" />
                            <h3 className="text-base font-semibold text-white mb-2">Cloud Based Access</h3>
                            <p className="text-sm leading-relaxed" style={{color: 'rgba(255,255,255,0.6)'}} >
                                Manage your entire network from any device, anywhere — no VPN, no local server required.
                            </p>
                        </div>
                    </div>

                    {/* 8. Analytics - Wide */}
                    <div className="md:col-span-2 rounded-2xl p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300" style={glassStrong}>
                        <AnalyticsMockup />
                        <div className="mt-auto">
                            <CardLabel icon={<BarChart2 size={16} />} label="Engagement Insights" accent="#93c5fd" />
                            <h3 className="text-lg font-semibold text-white mb-2">Analytics & Engagement Tracking</h3>
                            <p className="text-sm leading-relaxed mb-3" style={{color: 'rgba(255,255,255,0.6)'}}>
                                See exactly what's resonating — screen-level view counts, dwell time, interaction rates, and campaign performance over time.    
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <Chip color="#93c5fd">View & dwell tracking</Chip>
                                <Chip color="#93c5fd">Campaign reports</Chip>
                                <Chip color="#93c5fd">CSV export</Chip>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DSFeatures