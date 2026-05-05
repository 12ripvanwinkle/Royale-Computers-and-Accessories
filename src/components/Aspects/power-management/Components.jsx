import React, {useEffect, useState} from 'react'
import {glass, glassHover, glassStrong, innerSurface} from '../CCTV-Holder/CCTVStyles'
import { phases, alerts,  } from './index';


export function Chip({ children, color = "#93c5fd" }) {
  return (
    <span
      className="inline-block text-xs px-2.5 py-1 rounded-full whitespace-nowrap"
      style={{ background: `${color}18`, border: `1px solid ${color}35`, color }}
    >
      {children}
    </span>
  );
}

export function FeatureRow({ children, accent = "#4ade80" }) {
  return (
    <div
      className="flex items-center gap-2 py-2"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accent }} />
      <span className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.75)" }}>
        {children}
      </span>
    </div>
  );
}

export function StatBox({ value, label }) {
  return (
    <div
      className="rounded-xl px-3 py-2.5 text-center w-full"
      style={{
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="text-base font-semibold text-white leading-tight">{value}</div>
      <div className="text-xs mt-0.5 leading-snug" style={{ color: "rgba(255,255,255,0.45)" }}>
        {label}
      </div>
    </div>
  );
}

export function CardLabel({ icon: IconComp, label, accent }) {
  return (
    <div className="flex items-center gap-2 mb-3 min-w-0">
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
        style={{ background: `${accent}18`, color: accent, border: `1px solid ${accent}30` }}
      >
        <IconComp size={16} />
      </div>
      <span
        className="text-xs font-medium tracking-wide leading-tight"
        style={{ color: "rgba(255,255,255,0.45)" }}
      >
        {label}
      </span>
    </div>
  );
}

export function EnergyBar(){
    const [bars, setBars] = useState([72, 58, 84, 61, 77, 45, 90, 68]);

    useEffect(() => {
        const iv = setInterval(() => {
          setBars(prev =>
            prev.map(v =>
              Math.max(20, Math.min(98, v + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 8)))
            )
          );
        }, 900);
        return () => clearInterval(iv);
    }, []);

    const circuits = ["C-01", "C-02", "C-03", "C-04", "C-05", "C-06", "C-07", "C-08"];

    return (
        <div className="rounded-xl overflow-hidden" style={innerSurface}>
            <div className="px-3 py-2 flex item-center justify-between"
                style={{borderBottom: "1px solid rgba(255,255,255,0.08)"}}
            >
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#4ade80" }} />
                    <span className="text-xs" style={{color: "#4ade80", fontFamily: "monospace" }}>
                        live-feed
                    </span>
                </div>
                <span className="text-xs" style={{color: "rgba(255,255,255,0.3)", fontFamily: "monospace"}}>
                    kWh/circuit
                </span>
            </div>
            
            <div className="p-3 flex items-center gap-1.5" style={{height: 72}}>
                {bars.map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div
                        className="w-full rounded-sm transition-all duration-700"
                        style={{
                            height: `${h}%`,
                            background: h > 80 ? "#f87171" : h > 60 ? "#fbbf24" : "#4ade80",
                            opacity: 0.8,
                            minHeight: 4,
                        }}
                        />
                        <span
                        className="text-xs"
                        style={{ fontSize: 8, color: "rgba(255,255,255,0.28)", fontFamily: "monospace" }}
                        >
                        {circuits[i]}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function LoadBalance() {
    const [loads, setLoads] = useState([68, 71, 64]);

    useEffect(() => {
        const iv = setInterval(() => {
        setLoads(() => {
            const a = Math.floor(Math.random() * 20) + 60;
            const b = Math.floor(Math.random() * 20) + 60;
            const c = Math.floor(Math.random() * 20) + 58;
            return [a, b, c];
        });
        }, 1200);
        return () => clearInterval(iv);
    }, []);
    
    return (
        <div className="rounded-xl overflow-hidden" style={innerSurface}>
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: "1px solid rgba(255,255,255,0.08)"}}
            >
                <span className="text-xs" style={{color: "rgba(255,255,255,0.35)", fontFamily: "monospace"}}>
                    3-phase-monitor
                </span> 
                <Chip color="#93c5fd">Balanced</Chip>
            </div>
            <div className="p-3 flex flex-col gap-2">
                {phases.map(({ label, color }, i) => (
                    <div key={label}>
                        <div className="flex items-center justify-between mb-1">
                        <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "monospace" }}>
                            {label}
                        </span>
                        <span className="text-xs font-semibold" style={{ color }}>
                            {loads[i]}%
                        </span>
                        </div>
                        <div className="w-full h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
                        <div
                            className="h-full rounded-full transition-all duration-700"
                            style={{ width: `${loads[i]}%`, background: color, opacity: 0.8 }}
                        />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Alert() {

    const [active, setActive] = useState(0);

    useEffect(() => {
        const iv = setInterval(() => setActive(a => (a + 1) % 4), 1100);
        return () => clearInterval(iv);
    }, []);
    
    return (
        <div className="rounded-xl overflow-hidden" style={innerSurface}>
            <div className="px-3 py-2 flex items-center gap-2"
                style={{borderBottom: "1px solid rgba(255,255,255,0.08)"}}
            >
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#fbbf24" }} />
                <span className="text-xs" style={{ color: "#fbbf24", fontFamily: "monospace" }}>
                    alert-stream
                </span>
            </div>

            <div className="p-2 flex flex-col gap-0.5">
                {alerts.map((a, i) => (
                    <div
                        key={a.label}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i === active ? "rgba(255,255,255,0.05)" : "transparent" }}
                    >
                        <div
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: a.color, opacity: i === active ? 1 : 0.4 }}
                        />
                        <span
                        className="text-xs flex-1 leading-snug"
                        style={{ color: i === active ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.35)" }}
                        >
                        {a.label}
                        </span>
                        <span
                        className="text-xs shrink-0"
                        style={{ color: "rgba(255,255,255,0.25)", fontFamily: "monospace" }}
                        >
                        {a.time}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function UPS() {

    const [charge, setCharge] = useState(87);

    useEffect(() => {
        const iv = setInterval(() => {
        setCharge(prev => Math.max(75, Math.min(99, prev + (Math.random() > 0.4 ? 1 : -1))));
        }, 1500);
        return () => clearInterval(iv);
    }, []);

    return(
        <div className="rounded-xl overflow-hidden mb-4" style={innerSurface}>
            
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: "1px solid rgba(255,255,255,0.08)"}}
            >
                <span className="text-xs" style={{color: "rgba(255,255,255,0.35)", fontFamily: "monospace"}}>
                    UPS-Status 
                </span>
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#4ade80", boxShadow: "0 0 4px #4ade80" }} />
                    <span className="text-xs" style={{ color: "#4ade80" }}>Online</span>
                </div>
            </div>

            <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>Battery charge</span>
                    <span className="text-sm font-bold" style={{ color: "#5eead4" }}>{charge}%</span>
                </div>
                <div className="w-full h-2 rounded-full" style={{background: "rgba(255,255,255,0.08)"}}>
                    <div className="h-full rounded-full transition-all duration-1000"
                        style={{
                            width: `${charge}%`,
                            background: "linear-gradient(90deg, #5eead4, #4ade80)",
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

// Power System Components Section
export function SpecRow({label, value, accent}) {
    return (
        <div className="flex items-center justify-between px-3 py-2 rounded-xl"
            style={{background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)"}}
        >
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{label}</span>
            <span className="text-xs font-semibold shrink-0 ml-2" style={{ color: accent }}>{value}</span>
        </div>
    )
}

export function UseCaseTag({children, color}) {
    return (
        <div className="inline-block text-xs px-2.5 py-1 rounded-lg"
            style={{
                background: `${color}10`,
                border: `1px solid ${color}25`,
                color: "rgba(255,255,255,0.6)",
            }}
        >
            {children}
        </div>
    )
}

export function UPSChargeMockup() {
    const [charge, setCharge] = useState(88)
    const [status, setStatus] = useState("Charging")

    useEffect(() => {
        const iv = setInterval(() => {
        setCharge(prev => {
            const next = Math.max(78, Math.min(99, prev + (Math.random() > 0.35 ? 1 : -1)));
            setStatus(next > prev ? "Charging" : "Discharging");
            return next;
        });
        }, 1300);
        return () => clearInterval(iv);
    }, []);

    const color = charge > 85 ? "#4ade80" : charge > 60 ? "#fbbf24" : "#f87171";

    return (
        <div className="rounded-xl overflow-hidden mb-4" style={innerSurface}>
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: "1px solid rgba(255,255,255,0.08)"}}
            >
                <span className="text-xs" style={{color: "rgba(255,255,255,0.35)", fontFamily: "monospace"}}>
                    UPS-Battery 
                </span>
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: color }} />
                    <span className="text-xs" style={{ color }}>{status}</span>
                </div>
            </div>
            <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>Battery level</span>
                    <span className="text-sm font-bold" style={{ color }}>{charge}%</span>
                </div>
                <div className="w-full h-2 rounded-full" style={{background: "rgba(255,255,255,0.08)"}}>
                    <div className="h-full rounded-full transition-all duration-1000" 
                        style={{width: `${charge}%`, background: `linear-gradient(90deg, ${color}99, ${color})`}}
                    />
                </div>
            </div>
        </div>
    )
}

export function GeneratorMockup() {
    const [load, setLoad] = useState(62)

    useEffect(() => {
        const iv = setInterval(() => {
        setLoad(prev => Math.max(40, Math.min(90, prev + (Math.random() > 0.5 ? 2 : -2))));
        }, 1000);
        return () => clearInterval(iv);
    }, []);

    const color = load > 80 ? "#f87171" : load > 65 ? "#fbbf24" : "#4ade80";

    return (
        <div className="rounded-xl overflow-hidden mb-4" style={innerSurface}>
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: "1px solid rgba(255,255,255,0.08)"}}
            >
                <span className="text-xs" style={{color: "rgba(255,255,255,0.35)", fontFamily: "monospace"}}>
                    gen-load
                </span>
                <div className="flex items-start gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#4ade80", boxShadow: "0 0 4px #4ade80" }} />
                    <span className="text-xs" style={{ color: "#4ade80" }}>Online</span>
                </div>
            </div>
            <div className="p-3 flex items-center gap-4">
                <div className="relative shrink-0" style={{ width: 56, height: 56 }}>
                    <svg viewBox="0 0 56 56" width="56" height="56">
                        <circle cx="28" cy="28" r="22" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="5" />
                        <circle
                        cx="28" cy="28" r="22"
                        fill="none"
                        stroke={color}
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeDasharray={`${(load / 100) * 138} 138`}
                        transform="rotate(-90 28 28)"
                        style={{ transition: "stroke-dasharray 0.8s ease, stroke 0.4s" }}
                        opacity="0.8"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold" style={{ color }}>{load}%</span>
                    </div>
                </div>

                <div className="flex flex-col gap-1 flex-1 min-w-0">
                    <div className="flex justify-between">
                        <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Load</span>
                        <span className="text-xs font-semibold" style={{ color }}>{load}%</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Freq</span>
                        <span className="text-xs font-semibold text-white">50.0 Hz</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Runtime</span>
                        <span className="text-xs font-semibold text-white">72h</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
