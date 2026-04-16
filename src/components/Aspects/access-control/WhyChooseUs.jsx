const WhyChooseUs = () => {
    return (
        <div className="w-full px-4 md:px-6 py-16 md:py-24" id="whyUs">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
                        Why Choose Us?
                    </h2>
                    <p className="text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed"
                        style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                        We deliver enterprise-grade access control backed by internationally
                        recognised certifications, uncompromising data privacy, and round-the-clock support.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                    {/* Card 1: ISO & Security Certifications */}
                    <div className="rounded-2xl overflow-hidden"
                        style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.15)" }}
                    >
                        {/* Visual Area */} 
                        <div className="px-6 pt-6 pb-4"
                            style={{ background: "rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                        >
                            <div className="flex flex-wrap gap-2">
                                {[
                                    { label: "ISO 27001", sub: "Certified" },
                                    { label: "SOC 2 Type II", sub: "Audited" },
                                    { label: "FIPS 201", sub: "Compliant" },
                                    { label: "UL 294", sub: "Listed" },
                                    ].map((cert) => (
                                    <div key={cert.label}
                                        className="flex flex-col items-center justify-center rounded-xl px-4 py-3 min-w-20"
                                        style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)" }}>
                                        <span className="text-sm font-bold text-white leading-tight">{cert.label}</span>
                                        <span className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>{cert.sub}</span>
                                    </div>
                                ))}
                                {/* Checkmark Badge */}
                                <div className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full self-start"
                                    style={{ background: "rgba(74,222,128,0.15)", border: "1px solid rgba(74,222,128,0.35)" }}
                                >
                                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"/>
                                    </svg>
                                    <span className="text-xs font-medium" style={{ color: "#4ade80" }}>Verified</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 1 text */}
                        <div className="px-6 py-5">
                            <h3 className="text-lg font-semibold text-white mb-2">ISO &amp; Security Certifications</h3>
                            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                                Every deployment meets ISO 27001, SOC 2 Type II, and FIPS 201 standards —
                                independently audited so your compliance is never in question.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Data Privacy */}
                    <div className="rounded-2xl overflow-hidden"
                     style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.15)" }}
                    >
                        {/* Visual Area */}
                        <div className="px-6 pt-6 pb-4"
                         style={{ background: "rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                        >
                         <div className="rounded-xl p-4"
                          style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
                         >
                            {[
                                { label: "Biometric templates", note: "On-device only — never uploaded" },
                                { label: "Access logs", note: "AES-256 encrypted at rest" },
                                { label: "User data", note: "GDPR right-to-erasure ready" },
                                ].map((row, i, arr) => (
                                <div key={row.label}
                                    className="flex items-center justify-between py-2"
                                    style={{ borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                                    <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#93c5fd" }} />
                                    <span className="text-xs text-white">{row.label}</span>
                                    </div>
                                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{row.note}</span>
                                </div>
                            ))}
                         </div>
                        </div>

                        <div className="px-6 py-5">
                            <h3 className="text-lg font-semibold text-white mb-2">Data Privacy Protection</h3>
                            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                                Biometric data never leaves the device. All records are encrypted end-to-end
                                and fully GDPR &amp; HIPAA compliant — privacy built in from the ground up.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: 24/7 Support */}
                    <div className="rounded-2xl overflow-hidden"
                     style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.15)" }}
                    >
                        {/* Visual Area */}
                        <div className="px-6 pt-6 pb-4"
                            style={{ background: "rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                            <div className="flex items-center gap-3 mb-3">
                                {/* Avatar stack */}
                                <div className="flex -space-x-2">
                                {["#4d7aa3","#3d6287","#2d4a6b","#5a8ab5"].map((bg, i) => (
                                    <div key={i} className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white ring-2"
                                    style={{ background: bg, ringColor: "rgba(255,255,255,0.2)" }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
                                        <circle cx="12" cy="8" r="4"/>
                                        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                                    </svg>
                                    </div>
                                ))}
                                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white ring-2"
                                    style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}>
                                    +6
                                </div>
                                </div>
                                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full"
                                style={{ background: "rgba(74,222,128,0.15)", border: "1px solid rgba(74,222,128,0.3)" }}>
                                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#4ade80", boxShadow: "0 0 5px rgba(74,222,128,0.8)" }} />
                                <span className="text-xs font-medium" style={{ color: "#4ade80" }}>Online now</span>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                {[
                                { stat: "< 2 min", label: "Response time" },
                                { stat: "99.98%", label: "Uptime SLA" },
                                { stat: "24/7", label: "Availability" },
                                ].map((s) => (
                                <div key={s.label} className="flex-1 rounded-lg px-3 py-2 text-center"
                                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}>
                                    <div className="text-sm font-bold text-white">{s.stat}</div>
                                    <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>{s.label}</div>
                                </div>
                                ))}
                            </div>
                        </div>

                        {/* Card 3: text */}
                        <div className="px-6 py-5">
                            <h3 className="text-lg font-semibold text-white mb-2">24 / 7 Expert Support</h3>
                            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                                Our security engineers are available around the clock — remote monitoring,
                                instant incident response, and a guaranteed sub-2-minute reply time.
                            </p>
                        </div>
                    </div>

                    {/* Card 4: Zero-Trust Architecture */}
                    <div className="rounded-2xl overflow-hidden"
                        style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.15)" }}
                    >
                        {/* Visual Area */}
                        <div className="px-6 pt-6 pb-4"
                            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                        >
                             <div className="flex flex-col gap-2">
                                {[
                                    { label: "Every request independently verified", ok: true },
                                    { label: "Mutual TLS — reader to controller", ok: true },
                                    { label: "Hardware Security Module key storage", ok: true },
                                    { label: "Implicit network trust", ok: false },
                                    ].map((item) => (
                                    <div key={item.label} className="flex items-center gap-2.5 rounded-lg px-3 py-2"
                                        style={{
                                        background: item.ok ? "rgba(74,222,128,0.07)" : "rgba(248,113,113,0.07)",
                                        border: `1px solid ${item.ok ? "rgba(74,222,128,0.2)" : "rgba(248,113,113,0.2)"}`,
                                        }}>
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                                        stroke={item.ok ? "#4ade80" : "#f87171"}
                                        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        {item.ok
                                            ? <polyline points="20 6 9 17 4 12"/>
                                            : <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                                        }
                                        </svg>
                                        <span className="text-xs" style={{ color: item.ok ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.4)" }}>
                                        {item.label}
                                        </span>
                                    </div>
                                ))}
                             </div>
                        </div>

                        {/* Card 4 Text */}
                         <div className="px-6 py-5">
                            <h3 className="text-lg font-semibold text-white mb-2">Zero-Trust Architecture</h3>
                            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                                No implicit trust — every single access request is authenticated independently,
                                whether the device is on-site or remote, keeping your perimeter airtight.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default WhyChooseUs;