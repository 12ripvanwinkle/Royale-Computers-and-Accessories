import React, { useEffect, useState, useRef, } from "react"

export function GlowCard({children, accent, icon: Icon}) {

    const [hovered, setHovered] = useState(false)

    return (
        <div className="relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 h-full"
            style={{
                background: hovered
                    ? `radial-gradient(ellipse at 0% 0%, ${accent}22 0%, transparent 65%), rgba(255,255,255,0.07)`
                    : `radial-gradient(ellipse at 0% 0%, ${accent}10 0%, transparent 60%), rgba(255,255,255,0.04)`,
                border: hovered ? `1px solid ${accent}50` : "1px solid rgba(255,255,255,0.08)",
                boxShadow: hovered
                    ? `0 0 32px ${accent}30, 0 8px 32px rgba(0,0,0,0.4)`
                    : "0 2px 12px rgba(0,0,0,0.2)",
                backdropFilter: "blur(12px)",
                transition: "all 0.3s ease",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >

            {/* Watermark */}
            {Icon && (
                <div
                    className="pointer-events-none absolute -bottom-4 -right-4"
                    style={{ color: accent, opacity: hovered ? 0.07 : 0.04, transition: "opacity 0.3s ease" }}
                >
                    <Icon size={120} strokeWidth={1} />
                </div>
            )}

            {/* Accent Bottom Line */}
            <div className="absolute bottom-0 left-0 right-0 h-px pointer-events-none" 
                style={{
                    background: `linear-gradient(to right, ${accent}70, transparent)`,
                    opacity: hovered ? 1 : 0.35,
                    transition: "opacity 0.3s ease",
                }}
            />
            <div className="relative z-10 p-5 sm:p-6 flex flex-col gap-4">
                {children}
            </div>

        </div>
    )
}

export function CardHeader({badge, title, sub, accent}) {
    return(
        <div className="flex flex-col gap-1.5">
            <span className="inline-flex self-start text-xs font-semibold uppercase px-2.5 py-1 rounded-full"
                style={{color: accent, background: `${accent}15`, border: `1px solid ${accent}30`, letterSpacing: "0.1em"}}
            >
                {badge}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                {title}
            </h3>
            <p className="text-sm font-light leading-relaxed" style={{color: "rgba(255,255,255,0.55)"}}>
                {sub}
            </p>
        </div>
    )
}

// Services cards stuff

// divider
const divStyle = { borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "0.75rem" }

// Card 1 Pin entry
export function PinCard() {
    const ACCENT = "#ff751f"
    const pinSequence = ["9", "3", "5", "8"]
    const [pressed, setPressed] = useState([])
    const [activeKey, setActiveKey] = useState(null)
    const [status, setStatus] = useState(null)
    const pinKeys = ["1","2","3","4","5","6","7","8","9","*","0","#"]

    const KeypadIcon = (p) => (
        <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="3"/>
            <circle cx="9" cy="9" r="1.2" fill="currentColor" stroke="none"/>
            <circle cx="12" cy="9" r="1.2" fill="currentColor" stroke="none"/>
            <circle cx="15" cy="9" r="1.2" fill="currentColor" stroke="none"/>
            <circle cx="9" cy="12" r="1.2" fill="currentColor" stroke="none"/>
            <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"/>
            <circle cx="15" cy="12" r="1.2" fill="currentColor" stroke="none"/>
            <circle cx="9" cy="15" r="1.2" fill="currentColor" stroke="none"/>
            <circle cx="12" cy="15" r="1.2" fill="currentColor" stroke="none"/>
            <circle cx="15" cy="15" r="1.2" fill="currentColor" stroke="none"/>
        </svg>
    )

    useEffect(() => {
        let timeouts = []
        const run = () => {
            setPressed([]); setStatus(null); setActiveKey(null)
            pinSequence.forEach((digit, i) => {
                const t1 = setTimeout(() => {
                    setActiveKey(String(digit))
                    const t2 = setTimeout(() => setActiveKey(null), 180)
                    timeouts.push(t2)
                    setPressed(prev => [...prev, i])
                }, 600 + i * 600)
                timeouts.push(t1)
            })
            const t3 = setTimeout(() => {
                setStatus("granted")
                const t4 = setTimeout(run, 2200)
                timeouts.push(t4)
            }, 600 + pinSequence.length * 600 + 200)
            timeouts.push(t3)
        }
        run()
        return () => timeouts.forEach(clearTimeout)
    }, [])

    const dotBg = (i) => {
        if (pressed.length > i) return status === "denied" ? "#f87171" : "#fcd34d"
        return "rgba(255,255,255,0.18)"
    }

    return (
        <GlowCard accent={ACCENT} icon={KeypadIcon}>
            <CardHeader badge="PIN Entry" title="PIN-Based Entry" sub="Secure numeric codes with lockout protection." accent={ACCENT}  />
            <div className="" style={divStyle}>

                <div className="rounded-lg py-2 mb-3 flex items-center justify-center gap-3 transition-colors duration-300"
                    style={{
                        background: status === "granted"
                            ? "rgba(74,222,128,0.12)"
                            : status === "denied"
                            ? "rgba(248,113,113,0.12)"
                            : "rgba(255,255,255,0.05)",
                    }}
                >
                    {[0,1,2,3].map(i => (
                        <div
                            key={i}
                            className="w-2.5 h-2.5 rounded-full transition-all duration-200"
                            style={{
                                background: dotBg(i),
                                transform: pressed.length === i+1 && !status ? "scale(1.35)" : "scale(1)",
                            }}
                        />
                    ))}
                    {status && (
                        <span className="ml-1 text-xs font-medium" style={{ color: status === "granted" ? "#4ade80" : "#f87171" }}>
                            {status === "granted" ? "✓ Access granted" : "✗ Denied"}
                        </span>
                    )}
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                    {pinKeys.map(k => (
                        <div
                            key={k}
                            className="rounded-lg py-2 text-center text-xs font-medium transition-all duration-150"
                            style={{
                                background: activeKey === k ? "rgba(252,211,77,0.2)" : "rgba(255,255,255,0.07)",
                                border: activeKey === k ? "1px solid rgba(252,211,77,0.55)" : "1px solid rgba(255,255,255,0.09)",
                                color: activeKey === k ? "#fcd34d" : "rgba(255,255,255,0.8)",
                                transform: activeKey === k ? "scale(0.93)" : "scale(1)",
                            }}
                        >
                            {k}
                        </div>
                    ))}
                </div>

            </div>
        </GlowCard>
    )
}

// Card 2 RFID/KeyCard
export function RfidCard() {
    const ACCENT = "#3b82f6"
    const [scanning, setScanning] = useState(0)
    const [cardIndex, setCardIndex] = useState(0)
    const [ripple, setRipple] = useState(false)
    const cardIndexRef = useRef(0)

    const rfidCards = [
        { name: "HID Seos card",      status: "Active",  ok: true  },
        { name: "MIFARE DESFire",     status: "Active",  ok: true  },
        { name: "Visitor card #4421", status: "Expired", ok: false },
    ]

    const CreditIcon = (p) => (
        <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="5" width="20" height="14" rx="2"/>
            <line x1="2" y1="10" x2="22" y2="10"/>
        </svg>
    )

    useEffect(() => {
        let timeouts = []
        const cycle = () => {
            const current = cardIndexRef.current
            setScanning(1); setRipple(true)
            const t1 = setTimeout(() => setRipple(false), 600)
            const t2 = setTimeout(() => setScanning(rfidCards[current].ok ? 2 : 3), 900)
            const t3 = setTimeout(() => {
                setScanning(0)
                const next = (current + 1) % rfidCards.length
                cardIndexRef.current = next
                setCardIndex(next)
                const t4 = setTimeout(cycle, 600)
                timeouts.push(t4)
            }, 2300)
            timeouts.push(t1, t2, t3)
        }
        const init = setTimeout(cycle, 400)
        timeouts.push(init)
        return () => timeouts.forEach(clearTimeout)
    }, [])

    const iconStroke = scanning === 3 ? "#f87171" : scanning >= 1 ? "#93c5fd" : "rgba(255,255,255,0.4)"
    const iconBg     = scanning === 3 ? "rgba(248,113,113,0.12)" : scanning >= 1 ? "rgba(147,197,253,0.12)" : "rgba(255,255,255,0.05)"
    const iconBorder = scanning === 3 ? "rgba(248,113,113,0.5)"  : scanning >= 1 ? "rgba(147,197,253,0.5)"  : "rgba(255,255,255,0.12)"

    return(
        <GlowCard accent={ACCENT} icon={CreditIcon}>
           <CardHeader badge="Keycard / RFID" title="RFID & Keycard Access" sub="Tap-to-enter with real-time credential validation." accent={ACCENT} /> 
           <div style={divStyle}>
                <div className="relative flex items-center justify-center mb-3" style={{height: 60}}>
                    {[0,1,2].map(i => (
                        <div key={i} className="absolute rounded-full"
                            style={{
                                width: 28 + i * 18, height: 28 + i * 18,
                                border: "1px solid rgba(147,197,253,0.4)",
                                opacity: ripple ? 0 : 0.55,
                                transition: `opacity ${0.3 + i * 0.15}s ease`,
                            }}
                        />
                    ))}
                    <div className="relative z-10 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                        style={{ background: iconBg, border: `1px solid ${iconBorder}`, color: iconStroke }}
                    >
                        <CreditIcon width={18} height={18} />
                    </div>
                </div>

                <div className="flex flex-col gap-1.5">
                    {rfidCards.map((c, i) => (
                        <div key={c.name}
                            className="flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-300"
                            style={{
                                background: i === cardIndex && scanning > 0
                                    ? (c.ok ? "rgba(147,197,253,0.1)" : "rgba(248,113,113,0.1)")
                                    : "rgba(255,255,255,0.04)",
                                border: i === cardIndex && scanning > 0
                                    ? `1px solid ${c.ok ? "rgba(147,197,253,0.35)" : "rgba(248,113,113,0.35)"}`
                                    : "1px solid rgba(255,255,255,0.07)",
                            }}
                        >
                            <span className="text-xs font-medium text-white">{c.name}</span>
                            <span className="text-xs font-semibold" style={{ color: c.ok ? "#4ade80" : "#f87171" }}>{c.status}</span>
                        </div>
                    ))}
                </div>
           </div>

        </GlowCard>
    )
}

// Card 3 Audit Logs
export function AuditCard() {
    const ACCENT = "#22c55e"
    const allLogs = [
        { zone: "Executive floor", time: "09:14", granted: true  },
        { zone: "Server room A",   time: "09:18", granted: false },
        { zone: "R&D lab",         time: "09:31", granted: true  },
        { zone: "Comms vault",     time: "09:45", granted: false },
        { zone: "Loading bay",     time: "09:52", granted: true  },
        { zone: "Car park gate",   time: "09:58", granted: true  },
        { zone: "Reception",       time: "10:03", granted: true  },
        { zone: "Finance office",  time: "10:07", granted: false },
    ]
    const [offset, setOffset] = useState(0)
    const VISIBLE = 5

    const LogIcon = (p) => (
        <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="8" y1="13" x2="16" y2="13"/>
            <line x1="8" y1="17" x2="12" y2="17"/>
        </svg>
    )

    useEffect(() => {
        const iv = setInterval(() => setOffset(o => (o + 1) % (allLogs.length - VISIBLE + 1)), 1800)
        return () => clearInterval(iv)
    }, [])

    const visible = allLogs.slice(offset, offset + VISIBLE)

    return (
        <GlowCard accent={ACCENT} icon={LogIcon}>
            <CardHeader badge="Audit Logs" title="Audit Logs & Activity Feed" sub="Timestamped record of every access event across all zones." accent={ACCENT} />

            <div className="flex flex-col overflow-hidden"
                style={{...divStyle, minHeight: 140}}
            >
                {visible.map((log, i) => (
                    <div key={`${offset}-${i}`}
                        className="flex items-center gap-2 py-2"
                        style={{
                            borderBottom: i < visible.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                            opacity: i === 0 ? 0.45 : 1,
                            transition: "opacity 0.5s",
                        }}
                    >
                        <div className="w-2 h-2 rounded-full shrink-0"
                            style={{
                                background: log.granted ? "#4ade80" : "#f87171",
                                boxShadow: `0 0 5px ${log.granted ? "#4ade8090" : "#f8717190"}`,
                            }}
                        />
                        <span className="text-xs flex-1 truncate" style={{ color: "rgba(255,255,255,0.82)" }}>{log.zone}</span>
                        <span className="text-xs shrink-0" style={{ color: "rgba(255,255,255,0.35)" }}>{log.time}</span>
                        <span className="text-xs font-semibold shrink-0" style={{ color: log.granted ? "#4ade80" : "#f87171" }}>
                            {log.granted ? "Granted" : "Denied"}
                        </span>
                    </div>
                ))}
            </div>
        </GlowCard>
    )
}

// Card 4 CCTV & Alarms
export function CctvCard() {
    const ACCENT = "#f59e0b"
    const integrations = [
        "CCTV event sync — access event ties to camera frame",
        "Alarm trigger on forced entry or tailgating detection",
        "Milestone XProtect & Genetec native integration",
        "Instant push alert to SOC on denied access spike",
    ]
    const [active, setActive] = useState(0)

    const CameraIcon = (p) => (
        <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 7l-7 5 7 5V7z"/>
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
        </svg>
    )

    useEffect(() => {
        const iv = setInterval(() => setActive(a => (a + 1) % integrations.length), 1800)
        return () => clearInterval(iv)
    }, [])

    return(
        <GlowCard accent={ACCENT} icon={CameraIcon}>
            <CardHeader badge="CCTV & Alarms" title="Integration with Alarms & CCTV" sub="Connect access control with video surveillance and alarm systems for unified real-time monitoring." accent={ACCENT} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                style={divStyle}
            >
                {integrations.map((item, i) => (
                    <div key={item}
                        className="flex items-start gap-2 rounded-lg px-3 py-2.5 transition-all duration-300"
                        style={{
                            background: active === i ? "rgba(245,158,11,0.1)" : "rgba(255,255,255,0.04)",
                            border: active === i ? "1px solid rgba(245,158,11,0.35)" : "1px solid rgba(255,255,255,0.07)",
                        }}
                    >
                        <div className="rounded-full shrink-0 mt-1 transition-all duration-300"
                            style={{
                                width: 7, height: 7,
                                background: active === i ? "#f59e0b" : "rgba(255,255,255,0.22)",
                                boxShadow: active === i ? "0 0 6px rgba(245,158,11,0.7)" : "none",
                            }}
                        />
                        <span className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>{item}</span>
                    </div>
                ))}
            </div>
        </GlowCard>
    )
}

// Card 5 Remote Access Control
export function RemoteCard() {
    const ACCENT = "#a855f7"
    const [states, setStates] = useState([true, true, false])
    const sequence = [[true,true,false],[true,true,true],[true,false,true],[false,false,true],[true,true,false]]

    const RemoteIcon = (p) => (
        <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 0 1 10 10"/>
            <path d="M12 6a6 6 0 0 1 6 6"/>
            <path d="M12 10a2 2 0 0 1 2 2"/>
            <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>
        </svg>
    )

    useEffect(() => {
        let i = 0
        const iv = setInterval(() => { i = (i + 1) % sequence.length; setStates(sequence[i]) }, 1600)
        return () => clearInterval(iv)
    }, [])

    const doors = [
        { name: "Executive floor — Level 4", meta: "12 users · Weekdays 07:00–20:00" },
        { name: "Server room A",             meta: "4 users · 24 / 7" },
        { name: "Loading bay",               meta: "Visitor pass · Expires today" },
    ]

    return (
        <GlowCard accent={ACCENT} icon={RemoteIcon}>
            <CardHeader badge="Remote Management" title="Remote Access Control" sub="Manage permissions and monitor entry points from anywhere, in real time." accent={ACCENT} />
            <div style={divStyle}>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-3">
                    {[{ val:"142", lbl:"Active credentials" },{ val:"8", lbl:"Zones controlled" },{ val:"3s", lbl:"Revocation time" }].map(s => (
                        <div key={s.lbl} className="rounded-xl px-3 py-2.5 flex flex-col gap-0.5"
                            style={{ background: `${ACCENT}0e`, border: `1px solid ${ACCENT}25` }}
                        >
                            <span className="text-base font-bold leading-none" style={{ color: ACCENT }}>{s.val}</span>
                            <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{s.lbl}</span>
                        </div>
                    ))}
                </div>

                {/* Zone Toggles */}
                <div className="flex flex-col">
                    {doors.map((d, i) => (
                        <div key={d.name}
                            className="flex items-center justify-between gap-3 py-2.5"
                            style={{ borderBottom: i < doors.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}
                        >
                            <div className="flex-1 min-w-0">
                                <div className="text-xs font-medium truncate text-white">{d.name}</div>
                                <div className="text-xs truncate" style={{ color: "rgba(255,255,255,0.4)" }}>{d.meta}</div>
                            </div>
                            <div className="shrink-0 transition-all duration-500"
                                style={{
                                    width: 32, height: 18, borderRadius: 9, padding: 2, display: "flex",
                                    background: states[i] ? "#4ade80" : "rgba(255,255,255,0.18)",
                                    justifyContent: states[i] ? "flex-end" : "flex-start",
                                }}
                            >
                                <div style={{ width: 14, height: 14, borderRadius: "50%", background: "white", transition: "all 0.4s" }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </GlowCard>
    )
}
