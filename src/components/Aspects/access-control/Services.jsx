import React from 'react'
import { RemoteCard,PinCard, RfidCard, AuditCard, CctvCard, GlowCard, CardHeader, } from './Components'
import { glassStrong } from '../CCTV-Holder/CCTVStyles'
import { ArrowRight } from 'lucide-react'

const Services = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 py-14 sm:py-20 md:py-24">
        <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="text-center mb-10 sm:mb-14">
                <p className="text-xs font-semibold tracking-widest uppercase mb-3"
                    style={{color: "rgba(255,255,255,0.35)", letterSpacing: "0.22em"}}
                >
                    Access Control Services
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
                    style={{letterSpacing: "-0.03em", lineHeight: 1.05}}
                >
                    Every layer covered.<br className="hidden sm:block" /> Front gate to server room.
                </h2>
                <p className="text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed"
                    style={{color: "rgba(255,255,255,0.5)"}}
                >
                    From PIN pads to remote zone management — purpose-built access control
                    that keeps the right people in and everyone else out.
                </p>
            </div>

            {/* Bento Grid */}
            <div className="flex flex-col gap-4">

                {/* Row 1 - PIN & RFID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <PinCard />
                    <RfidCard />
                </div>

                {/* Row 2 - Audit & CCTV */}
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                    <div className="sm:col-span-2 flex"><AuditCard /></div>
                    <div className="sm:col-span-3 flex"><CctvCard /></div>
                </div>

                {/* Row 3 - Remote Full Width */}
                <RemoteCard />
            </div>

            {/* CTA Strip */}
            <div className="mt-4 rounded-2xl px-5 sm:px-8 py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                style={glassStrong}
            >
                <div>
                    <p className="text-xs font-semibold uppercase tracking-wides mb-1"
                        style={{color: "rgba(255,255,255,0.35)", letterSpacing: "0.18em" }}
                    >
                        See it in action
                    </p>
                    <h3 className="text-sm sm:text-base font-semibold text-white">
                        Get a personalised walkthrough for your site.
                    </h3>
                    <p className="text-xs mt-1 font-light" style={{color: "rgba(255,255,255,0.4)"}}>
                        No commitment. Installed and running in days, not months.
                    </p>
                </div>

                <button className='shrink-0 w-full sm:w-auto flex items-center justify-center gap-2 text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl'
                    style={{ background: "#ff751f", color: "white", transition: "all 0.2s ease" }}
                    onMouseEnter={e => {
                        e.currentTarget.style.background = "#ff8c3f"
                        e.currentTarget.style.boxShadow = "0 6px 24px rgba(255,117,31,0.35)"
                        e.currentTarget.style.transform = "translateY(-1px)"
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.background = "#ff751f"
                        e.currentTarget.style.boxShadow = "none"
                        e.currentTarget.style.transform = "translateY(0)"
                    }}
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                    Book a Free Demo <ArrowRight size={14} strokeWidth={2.5} />
                </button>
            </div>

        </div>
    </div>
  )
}

export default Services