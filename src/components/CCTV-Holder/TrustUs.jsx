import React from 'react'
import { glass } from './CCTVStyles'
import { trustPoints } from './index'

function StatPill({ value, label, accent, accentBg, accentBorder }) {
    return (
        <div 
            className="flex flex-col items-center justify-center px-4 py-3 rounded-xl shrink-0"
            style={{ background: accentBg, border: `1px solid ${accentBorder}` }}
        >
            <span className='text-xl font-bold leading-tight' style={{ color: accent }}>{value}</span>
            <span className="text-xs mt-0.5 text-center" style={{ color: 'rgba(255,255,255,0.5)' }}>{label}</span>
        </div>
    )
}

const TrustUs = () => {

    const Icon0 = trustPoints[0].icon
    const Icon1 = trustPoints[1].icon
    const Icon2 = trustPoints[2].icon
    const Icon3 = trustPoints[3].icon
    const Icon4 = trustPoints[4].icon
  return (
    <div className="w-full px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="text-center mb-12">
                <p 
                    className="text-xs font-semibold tracking-widest uppercase mb-4"
                    style={{ color: 'rgba(255,255,255,0.45)'  }}
                >
                    Why Choose Us
                </p>
                <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
                    The Trusted Choice for CCTV Solutions
                </h2>
                <p 
                    className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                >
                    With years of experience, a commitment to quality, and a customer-first approach, we are the trusted choice for CCTV solutions. Our expert team ensures seamless installation, top-tier equipment, and reliable support to keep your premises secure and give you peace of mind.
                </p>
            </div>

            {/* Bento Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Card 1 experienced technicians | Row 1 - Wide */}
                <div 
                    className="md:col-span-2 rounded-2xl p-6 flex flex-col sm:flex-row gap-5 hover:-translate-y-0.5 transition-transform duration-300"
                    style={glass}
                >
                    <div className="flex-1 flex flex-col gap-3">
                        <div className="flex items-center gap-3">

                            <div 
                                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                style={{ background: trustPoints[0].accentBg, color: trustPoints[0].accent, border: `1px solid ${trustPoints[0].accentBorder}` }}
                            >
                                <Icon0 />
                            </div>
                            <h3 className="text-base font-semibold text-white">
                                {trustPoints[0].title}
                            </h3>
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                            {trustPoints[0].description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto pt-1">
                            {trustPoints[0].highlights.map(h => (
                                <div key={h} className="flex items-center gap-1.5 px-3 py-1 rounded-full"
                                    style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: trustPoints[0].accent }} />
                                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>{h}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <StatPill {...trustPoints[0]} value={trustPoints[0].stat} label={trustPoints[0].statLabel} />
                </div>

                {/* Card 2 | Row 1 - Narrow */}
                <div 
                    className="md:col-span-1 rounded-2xl p-6 flex flex-col gap-3 hover:-translate-y-0.5 transition-transform duration-300"
                    style={glass}
                >
                    <div className="flex items-center gap-3">
                        <div 
                            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                            style={{ background: trustPoints[1].accentBg, color: trustPoints[1].accent, border: `1px solid ${trustPoints[1].accentBorder}` }}
                        >
                            <Icon1 />
                        </div>
                        <h3 className="text-base font-semibold text-white">
                            {trustPoints[1].title}
                        </h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                        {trustPoints[1].description}
                    </p>
                    <div 
                        className="mt-auto rounded-xl px-4 py-3"
                        style={{ background: trustPoints[1].accentBg, border: `1px solid ${trustPoints[1].accentBorder}` }}
                    >
                        <div className="text-xs font-medium mb-1" style={{ color: trustPoints[1].accent }}>Max resolution</div>
                        <div className="text-2xl font-bold text-white">{trustPoints[1].stat}</div>
                    </div>
                </div>

                {/* Card 3 - Customised Solutions | Row 2 */}
                <div 
                    className="md:col-span-1 rounded-2xl p-6 flex flex-col gap-3 hover:-translate-y-0.5 transition-transform duration-300"
                    style={glass}
                >
                    <div className="flex items-center gap-3">
                        <div
                         className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                         style={{ background: trustPoints[2].accentBg, color: trustPoints[2].accent, border: `1px solid ${trustPoints[2].accentBorder}` }}
                        >
                            <Icon2 />
                        </div>
                        <h3 className="text-base font-semibold text-white" >
                            {trustPoints[2].title}
                        </h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                        {trustPoints[2].description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto pt-1">
                        {trustPoints[2].highlights.map(h => (
                            <div key={h} className="flex items-center gap-1.5 px-3 py-1 rounded-full"
                            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: trustPoints[2].accent }} />
                            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>{h}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Card 4 - Reliable Support | Row 2 - Wide */}
                <div 
                    className="md:col-span-2 rounded-2xl p-6 flex flex-col sm:flex-row gap-5 hover:-translate-y-0.5 transition-transform duration-300"
                    style={glass}
                >
                    <StatPill {...trustPoints[3]} value={trustPoints[3].stat} label={trustPoints[3].statLabel} />
                    <div className="flex-1 flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <div 
                                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                style={{ background: trustPoints[3].accentBg, color: trustPoints[3].accent, border: `1px solid ${trustPoints[3].accentBorder}` }}
                            >
                                <Icon3 />
                            </div>
                            <h3 className="text-base font-semibold text-white">
                                {trustPoints[3].title}
                            </h3>
                        </div>
                        <p className="text-sm leading-relaxed" style={{color: 'rgba(255,255,255,0.6)'}}>
                            {trustPoints[3].description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto pt-1">
                            {trustPoints[3].highlights.map(h => (
                                <div key={h} className="flex items-center gap-1.5 px-3 py-1 rounded-full"
                                    style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: trustPoints[3].accent }} />
                                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>{h}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Card 5 - Competitive Pricing | Row 3 - Full Width */}
                <div className="md:col-span-3 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 hover:-translate-y-0.5 transition-transform duration-300"
                    style={glass}
                >
                    <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                        style={{ background: trustPoints[4].accentBg, color: trustPoints[4].accent, border: `1px solid ${trustPoints[4].accentBorder}` }} 
                    >
                        <Icon4 className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">
                            {trustPoints[4].title}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                            {trustPoints[4].description}
                        </p>
                    </div>
                    <div className="flex gap-3 shrink-0 flex-wrap sm:flex-nowrap">
                        {trustPoints[4].highlights.map(h => (
                            <div key={h} className="flex items-center gap-2 px-4 py-2.5 rounded-xl"
                            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: trustPoints[4].accent }} />
                                <span className="text-xs whitespace-nowrap" style={{ color: 'rgba(255,255,255,0.75)' }}>{h}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TrustUs