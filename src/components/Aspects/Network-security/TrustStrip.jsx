import React from 'react'
import { Stats } from './index'

const TrustStrip = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-14 py-10 sm:py-14">
        <div className="max-w-6xl mx-auto">

            {/* Divider line and Label */}
            <div className="flex items-center gap-4 mb-8 sm:mb-10">

                <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
                <span className="text-xs font-semibold uppercase tracking-widest shrink-0"
                    style={{color: "rgba(255,255,255,0.28)", letterSpacing: "0.2em"}}
                >
                    Trusted by organisations across the region
                </span>
                <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
            
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4">
                {Stats.map(({ icon: Icon, value, label }) => (
                    <div key={label} className="flex flex-col items-center text-center gap-3">

                        {/* Icon bubble */}
                        <div
                            className="w-11 h-11 rounded-xl flex items-center justify-center"
                            style={{
                                background: "rgba(255,117,31,0.08)",
                                border: "1px solid rgba(255,117,31,0.2)",
                                color: "#ff751f",
                            }}
                        >
                            <Icon size={18} strokeWidth={1.5} />
                        </div>

                        {/* Number */}
                        <span
                            className="text-2xl sm:text-3xl md:text-4xl font-black text-white"
                            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.03em", lineHeight: 1 }}
                        >
                            {value}
                        </span>

                        {/* Label */}
                        <span
                            className="text-xs sm:text-sm font-light"
                            style={{ color: "rgba(255,255,255,0.4)" }}
                        >
                            {label}
                        </span>

                    </div>
                ))}
            </div>

        </div>
    </section>
  )
}

export default TrustStrip