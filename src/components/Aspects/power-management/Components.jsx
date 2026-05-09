import { useEffect, useState } from "react";
import { circuits } from "./index";

export function Pill({children, color = "#ff751f"}) {
    return (
        <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{
                color,
                background: `${color}15`,
                border: `1px solid ${color}28`,
                letterSpacing: "0.08em",
            }}
        >
            {children}
        </span>
    )
}

export function IconBox({icon: Icon, color}) {
    return (
        <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
            style={{background: `${color}15`, border: `1px solid ${color}28`, color}}
        >
            <Icon size={17} strokeWidth={1.75} />
        </div>
    )
}

export function EnergyBar() {
    const [bars, setBars] = useState([72, 58, 84, 61, 77, 45, 90, 68]);
    useEffect(() => {
    const iv = setInterval(() => {
      setBars(prev =>
        prev.map(v => Math.max(20, Math.min(98, v + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 8))))
      );
    }, 900);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="rounded-xl overflow-hidden mt-auto"
        style={{background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)"}}
    >
        <div className="px-3 py-2 flex items-center justify-between"
            style={{borderBottom: "1px solid rgba(255,255,255,0.07)"}}
        >
            <div className="flex items-center gap-1 5">
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#4ade80" }} />
                <span className="text-xs" style={{ color: "#4ade80", fontFamily: "monospace" }}>live-feed</span>
            </div>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.28)", fontFamily: "monospace" }}>kWh/circuit</span>
        </div>

        <div className="p-3 flex items-end gap-1.5" style={{ height: 64 }}>
            {bars.map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                    className="w-full rounded-sm transition-all duration-700"
                    style={{
                        height: `${h}%`,
                        background: h > 80 ? "#f87171" : h > 60 ? "#fbbf24" : "#4ade80",
                        opacity: 0.75,
                        minHeight: 4,
                    }}
                    />
                    <span style={{ fontSize: 7, color: "rgba(255,255,255,0.25)", fontFamily: "monospace" }}>
                    {circuits[i]}
                    </span>
                </div>
            ))}
        </div>
    </div>
  )
}

export function PhaseBar({label, value, color}) {
    return (
        <div className="">
            <div className="flex items-center justify-between mb-1">
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "monospace" }}>{label}</span>
                <span className="text-xs font-semibold" style={{ color }}>{value}%</span>
            </div>
            
            <div className="w-full h-1.5 rounded-full" style={{background: "rgba(255,255,255,0.07)"}}>
                <div className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${value}%`, background: color, opacity: 0.8 }}
                />
            </div>
        </div>
    )
}

export function Bullet({children, color}) {
    return (
        <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{children}</span>
        </div>
    )
}

export function StatPair({stats, color}) {
    return (
        <div className="grid grid-cols-2 gap-2 mt-auto">
            {stats.map(([val, lbl]) => (
                <div
                    key={lbl}
                    className="rounded-xl p-3 text-center"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                    <div className="text-base font-bold" style={{ color }}>{val}</div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{lbl}</div>
                </div>
            ))}
        </div>
    )
}

