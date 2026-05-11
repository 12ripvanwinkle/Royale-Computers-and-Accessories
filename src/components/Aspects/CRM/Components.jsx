import { Star } from "lucide-react"
import {glass,glassHover,glassStrong} from '../CCTV-Holder/CCTVStyles'

export const stars = () => (
    <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={11} fill="#fbbf24" style={{ color: '#fbbf24' }} />
        ))}
    </div>
)

export const ReasonCard = ({id, icon: Icon, color, tag, title, body, points, roles, stats, span, active, setActive}) => {
    const isActive = active === id

    return (
        <div className={`
                relative overflow-hidden rounded-2xl cursor-default
                transition-all duration-300 hover:-translate-y-0.5
                ${span === 2 ? 'md:col-span-2' : 'md:col-span-1'}
            `}
            style={{
                ...(isActive ? glassHover : glass),
                    background: `radial-gradient(ellipse at 0% 0%, ${color}18 0%, transparent 60%), ${isActive ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.04)'}`,
            }} 
            onMouseEnter={() => setActive(id)}
            onMouseLeave={() => setActive(null)} 
        >
            {/* Watermark */}
            <div className="pointer-events-none absolute -bottom-4 -right-4 opacity-[0.045]" style={{color}}>
                <Icon size={120} strokeWidth={1} />
            </div>

            <div className="relative z-10 p-6 flex flex-col gap-5 h-full">

                {/* Icon + tag */}
                <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                            background: `${color}18`, border: `1px solid ${color}35`, color,
                            boxShadow: isActive ? `0 0 16px ${color}25` : 'none',
                            transition: 'box-shadow 0.3s ease',
                        }}
                    >
                        <Icon size={18} strokeWidth={1.75} />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{color, background: `${color}14`, border: `1px solid ${color}28`}}
                    >
                        {tag}
                    </span>
                </div>

                {/* Title + Body */}
                 <div>
                    <h3 className="text-lg font-bold text-white leading-snug mb-2" style={{ letterSpacing: '-0.01em' }}>
                        {title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        {body}
                    </p>
                </div>

                {/* Role pills */}
                {roles && (
                    <div className="flex gap-2">
                        {roles.map(({ label, sub, color: rc }) => (
                        <div
                            key={label}
                            className="flex-1 rounded-xl px-3 py-2.5"
                            style={{ background: `${rc}0e`, border: `1px solid ${rc}25` }}
                        >
                            <div className="text-xs font-bold mb-0.5" style={{ color: rc }}>{label}</div>
                            <div className="text-xs leading-snug" style={{ color: 'rgba(255,255,255,0.45)' }}>{sub}</div>
                        </div>
                        ))}
                    </div>
                )}

                {/* Points */}
                {!roles && (
                    <ul className="flex flex-col gap-2.5 pt-4 mt-auto" style={{ borderTop: `1px solid ${color}18` }}>
                        {points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2.5">
                            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color, boxShadow: `0 0 6px ${color}80` }} />
                            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>{pt}</span>
                        </li>
                        ))}
                    </ul>
                )}

                {/* Stats */}
                {stats && (
                    <div className="flex gap-2 mt-auto">
                        {stats.map(({ value, label }) => (
                        <div
                            key={label}
                            className="flex-1 flex flex-col items-center justify-center px-3 py-3 rounded-xl text-center"
                            style={{ background: `${color}0e`, border: `1px solid ${color}25` }}
                        >
                            <span className="text-lg font-black leading-none mb-1" style={{ color }}>{value}</span>
                            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.38)' }}>{label}</span>
                        </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Accent bottom line */}
            <div className="absolute bottom-0 left-0 right-0 h-px" 
                style={{
                    background: `linear-gradient(to right, ${color}50, transparent)`,
                    opacity: isActive ? 1 : 0.4,
                    transition: 'opacity 0.3s ease',
                }}
            />
        </div>
    )
}