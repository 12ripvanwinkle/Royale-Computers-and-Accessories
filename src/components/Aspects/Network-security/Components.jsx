import React, {useState} from 'react'
import { glass, glassHover } from '../CCTV-Holder/CCTVStyles'

export function StatPill({ value, label, accent }) {
    return (
        <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full self-start"
            style={{ background: `${accent}12`, border: `1px solid ${accent}30` }}
        >
            <span className="text-xs font-bold" style={{ color: accent }}>{value}</span>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{label}</span>
        </div>
    )
}

export function Card({ item }) {
    const [hovered, setHovered] = useState(false)
    const IconComp = item.icon
 
    return (
        <div
            className="relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1"
            style={{
                background: hovered
                    ? `radial-gradient(ellipse at 0% 0%, ${item.accent}22 0%, transparent 65%), rgba(255,255,255,0.07)`
                    : `radial-gradient(ellipse at 0% 0%, ${item.accent}10 0%, transparent 60%), rgba(255,255,255,0.04)`,
                backdropFilter: "blur(12px)",
                transition: "all 0.3s ease",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Watermark icon */}
            <div
                className="pointer-events-none absolute -bottom-4 -right-4"
                style={{ color: item.accent, opacity: hovered ? 0.07 : 0.04, transition: "opacity 0.3s ease" }}
            >
                <IconComp size={120} strokeWidth={1} />
            </div>
 
            {/* Accent bottom line */}
            <div
                className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
                style={{
                    background: `linear-gradient(to right, ${item.accent}70, transparent)`,
                    opacity: hovered ? 1 : 0.35,
                    transition: "opacity 0.3s ease",
                }}
            />
 
            {/* Content */}
            <div className="relative z-10 p-5 sm:p-6 flex flex-col gap-4 sm:gap-5">
 
                {/* Icon + eyebrow + watermark number */}
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                        <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                            style={{
                                background: `${item.accent}18`,
                                color: item.accent,
                                border: `1px solid ${item.accent}35`,
                                boxShadow: hovered ? `0 0 18px ${item.accent}40` : "none",
                                transition: "box-shadow 0.3s ease",
                            }}
                        >
                            <IconComp size={18} />
                        </div>
                        <span
                            className="text-xs font-semibold tracking-widest uppercase"
                            style={{ color: 'rgba(255,255,255,0.4)' }}
                        >
                            {item.eyebrow}
                        </span>
                    </div>
                    <span
                        className="font-black select-none"
                        style={{ fontSize: 36, color: 'rgba(255,255,255,0.06)', lineHeight: 1, fontFamily: 'monospace' }}
                    >
                        {String(item.id).padStart(2, '0')}
                    </span>
                </div>
 
                {/* Title */}
                <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                    {item.title}
                </h3>
 
                {/* Description */}
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {item.description}
                </p>
 
                {/* Stat pill */}
                <StatPill value={item.stat.value} label={item.stat.label} accent={item.accent} />
 
                {/* Highlights */}
                <div className="flex flex-col gap-2 sm:gap-2.5">
                    {item.highlights.map(h => (
                        <div key={h} className="flex items-center gap-2.5">
                            <div
                                className="w-1.5 h-1.5 rounded-full shrink-0"
                                style={{
                                    background: item.accent,
                                    boxShadow: hovered ? `0 0 6px ${item.accent}90` : `0 0 4px ${item.accent}50`,
                                    transition: "box-shadow 0.3s ease",
                                }}
                            />
                            <span className="text-xs sm:text-sm" style={{ color: 'rgba(255,255,255,0.62)' }}>{h}</span>
                        </div>
                    ))}
                </div>
 
            </div>
        </div>
    )
}
 
export function CardContent({ item }) {
    const IconComp = item.icon
    return (
        <>
            {/* Icon + eyebrow + watermark number */}
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: `${item.accent}18`, color: item.accent, border: `1px solid ${item.accent}30`, transition: "box-shadow 0.3s ease" }}
                    >
                        <IconComp size={18} />
                    </div>
                    <span
                        className="text-xs font-semibold tracking-widest uppercase"
                        style={{ color: 'rgba(255,255,255,0.4)' }}
                    >
                        {item.eyebrow}
                    </span>
                </div>
                <span
                    className="font-black select-none"
                    style={{ fontSize: 36, color: 'rgba(255,255,255,0.06)', lineHeight: 1, fontFamily: 'monospace' }}
                >
                    {String(item.id).padStart(2, '0')}
                </span>
            </div>
 
            {/* Title */}
            <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                {item.title}
            </h3>
 
            {/* Description */}
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {item.description}
            </p>
 
            {/* Stat pill */}
            <StatPill value={item.stat.value} label={item.stat.label} accent={item.accent} />
 
            {/* Highlights */}
            <div className="flex flex-col gap-2 sm:gap-1.5">
                {item.highlights.map(h => (
                    <div key={h} className="flex items-center gap-2">
                        <div
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: item.accent, boxShadow: `0 0 6px ${item.accent}80` }}
                        />
                        <span className="text-xs sm:text-sm" style={{ color: 'rgba(255,255,255,0.62)' }}>{h}</span>
                    </div>
                ))}
            </div>
 
            {/* Accent bottom line */}
            <div
                className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
                style={{ background: `linear-gradient(to right, ${item.accent}50, transparent)`, opacity: 0.5 }}
            />
        </>
    )
}