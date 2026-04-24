import React, { useEffect, useState } from 'react'
import {rules, alerts, tunnels, threats, endpoints,
    SecurityRules, SecurityTunnels, SecurityEndpoints, Securitythreats,
    attempts, channels, datasets, services,
    checks, tasks, timeline, feeds, 
    risks, tasks2, feeds2, 
} from './index'

export function Firewall() {

    const [tick, setTick] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setTick(t => t + 1), 900)
        return () => clearInterval(iv)
    }, [])

    return(
        <div className="rounded-xl overflow-hidden mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>firewall-rules</span>
                <span className="text-xs" style={{ color: '#4ade80' }}>Active</span>
            </div>
            <div className="p-2 flex flex-col gap-1">
                {rules.map((r, i) => (
                    <div key={i}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i === tick % rules.length ? 'rgba(255,255,255,0.05)' : 'transparent' }}>
                        <span className="text-xs font-mono flex-1" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 10 }}>{r.src}</span>
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>→</span>
                        <span className="text-xs font-mono flex-1" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 10 }}>{r.dst}</span>
                        <span className="text-xs font-bold px-1.5 py-0.5 rounded"
                            style={{ background: `${r.color}12`, color: r.color, border: `1px solid ${r.color}25`, fontSize: 9 }}>
                            {r.action}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Ids() {

    const [active, setActive] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setActive(a => (a + 1) % 4), 1100)
        return () => clearInterval(iv)
    },[])

    return(
        <div className="rounded-xl overflow-hidden mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center gap-2"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#f87171', boxShadow: '0 0 4px #f8717199' }} />
                <span className="text-xs" style={{ color: '#f87171' }}>Threat feed</span>
            </div>
            <div className="p-2 flex flex-col gap-1"> 
                {alerts.map((a, i) => (
                    <div key={a.label}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i === active ? 'rgba(255,255,255,0.05)' : 'transparent' }}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: a.color }} />
                        <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.65)' }}>{a.label}</span>
                        <span className="text-xs px-1.5 py-0.5 rounded"
                            style={{ background: `${a.color}12`, color: a.color, border: `1px solid ${a.color}25`, fontSize: 9 }}>
                            {a.severity}
                        </span>
                        <span className="text-xs font-semibold" style={{ color: a.blocked ? '#4ade80' : '#fbbf24' }}>
                            {a.blocked ? '✓' : '~'}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Vpn() {

    const [ping, setPing] = useState(14)
    const [active, setActive] = useState(0)

    useEffect(() => {
        const iv1 = setInterval(() => setPing(p => Math.max(8, Math.min(40, p + (Math.random() > 0.5 ? 2 : -2)))), 700)
        const iv2 = setInterval(() => setActive(a => (a + 1) % 3), 1200)
        return () => { clearInterval(iv1); clearInterval(iv2) }
    }, [])

    return(
        <div className="rounded-xl overflow-hidden mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >   
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#a78bfa', boxShadow: '0 0 4px #a78bfa99' }} />
                    <span className="text-xs" style={{ color: '#a78bfa' }}>Encrypted tunnels</span>
                </div>
                <span className="text-xs font-mono" style={{color: 'rgba(255,255,255,0.3)'}}>
                    {ping}ms
                </span>
            </div>
            <div className="p-2 flex flex-col gap-1">
                {tunnels.map((t, i) => (
                    <div key={t.label}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i === active ? 'rgba(167,139,250,0.08)' : 'transparent' }}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: t.color }} />
                        <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.65)' }}>{t.label}</span>
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{t.users} users</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Malware() {

    const [scanning, setScanning] = useState(0)
    const [blocked, setBlocked] = useState(7)

    useEffect(() => {
        const iv1 = setInterval(() => setScanning(s => (s + 1) % 5), 800)
        const iv2 = setInterval(() => setBlocked(b => b + (Math.random() > 0.8 ? 1 : 0)), 2000)
        return () => { clearInterval(iv1); clearInterval(iv2) }
    }, [])

    return(
        <div className="rounded-xl overflow-hidden mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>malware-scan</span>
                <span className="text-xs font-semibold" style={{ color: '#f87171' }}>{blocked} blocked today</span>
            </div>
            <div className="p-3 flex flex-col gap-2">
                {threats.map((t, i) => (
                    <div key={t.label}>
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>{t.label}</span>
                            <span className="text-xs font-semibold" style={{ color: t.color }}>{t.score}%</span>
                        </div>
                        <div className="w-full h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                            <div className="h-full rounded-full transition-all duration-700"
                                style={{ width: i <= scanning ? `${t.score}%` : '0%', background: t.color, opacity: 0.75 }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Traffic() {

    const [vals, setVals] = useState([40, 55, 35, 70, 50, 80, 60, 75, 45, 88, 65, 72])
    useEffect(() => {
        const iv = setInterval(() => {
            setVals(v => {
                const next = [...v.slice(1), Math.max(20, Math.min(99, v[v.length - 1] + (Math.random() > 0.5 ? 8 : -8)))]
                return next
            })
        }, 600)
        return () => clearInterval(iv)
    }, [])

    return (
        <div className="rounded-xl p-3 mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="flex items-center justify-between mb-3">
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Network throughput</span>
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#5eead4' }} />
                    <span className="text-xs" style={{ color: '#5eead4' }}>Live</span>
                </div>
            </div>
            <div className="flex items-end gap-0.5 mb-3" style={{height: 44}}>
                {vals.map((v, i) => (
                    <div key={i} className="flex-1 rounded-sm transition-all duration-500"
                        style={{
                            height: `${v}%`,
                            background: i === vals.length - 1
                                ? '#5eead4'
                                : `rgba(94,234,212,${0.15 + (i / vals.length) * 0.3})`,
                            borderRadius: 2,
                        }} />
                ))}
            </div>
            <div className="grid grid-cols-3 gap-2">
                {[
                    { label: 'Inbound',  value: '1.2 GB/s', color: '#5eead4' },
                    { label: 'Outbound', value: '0.8 GB/s', color: '#93c5fd' },
                    { label: 'Blocked',  value: '340 req',  color: '#f87171' },
                ].map(s => (
                    <div key={s.label} className="rounded-lg p-2 text-center"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <div className="text-xs font-bold" style={{ color: s.color }}>{s.value}</div>
                        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>{s.label}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Endpoint() {

    const [active, setActive] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setActive(a => (a + 1) % 4), 1000)
        return () => clearInterval(iv)
    }, [])

    return(
        <div className="rounded-xl overflow-hidden mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Managed endpoints</span>
                <span className="text-xs" style={{ color: '#4ade80' }}>3/4 protected</span>
            </div>
            <div className="p-2 flex flex-col gap-1">
                {endpoints.map((e, i) => (
                    <div key={e.label}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i === active ? 'rgba(255,255,255,0.05)' : 'transparent' }}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: e.color }} />
                        <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.65)' }}>{e.label}</span>
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.28)' }}>{e.os}</span>
                        <span className="text-xs font-medium" style={{ color: e.color }}>{e.status}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function SecurityFirewall() {

    const [tick, setTick] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setTick(t => t + 1), 950)
        return () => clearInterval(iv)
    }, [])

    return (
        <div className="rounded-xl overflow-hidden mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>firewall-rules</span>
                <span className="text-xs font-medium" style={{ color: '#4ade80' }}>Active</span>
            </div>

            <div className="p-2 flex flex-col gap-1">
                {SecurityRules.map((r, i) => (
                    <div key={i}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i === tick % rules.length ? 'rgba(255,255,255,0.05)' : 'transparent' }}>
                        <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.45)', fontSize: 10, minWidth: 90 }}>{r.src}</span>
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>→</span>
                        <span className="text-xs font-mono flex-1" style={{ color: 'rgba(255,255,255,0.45)', fontSize: 10 }}>{r.dst}</span>
                        <span className="text-xs font-bold px-1.5 py-0.5 rounded"
                            style={{ background: `${r.color}12`, color: r.color, border: `1px solid ${r.color}25`, fontSize: 9 }}>
                            {r.action}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function SecurityVpn() {
    const [ping, setPing] = useState(14)
    const [active, setActive] = useState(0)
    useEffect(() => {
        const iv1 = setInterval(() => setPing(p => Math.max(8, Math.min(45, p + (Math.random() > 0.5 ? 2 : -2)))), 700)
        const iv2 = setInterval(() => setActive(a => (a + 1) % 3), 1200)
        return () => { clearInterval(iv1); clearInterval(iv2) }
    },[])

    return (
        <div className="rounded-xl overflow-hidden mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#a78bfa', boxShadow: '0 0 4px #a78bfa99' }} />
                    <span className="text-xs" style={{ color: '#a78bfa' }}>Encrypted tunnels</span>
                </div>
                <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.3)' }}>{ping}ms</span>
            </div>
            <div className="p-2 flex flex-col gap-1">
                {SecurityTunnels.map((t, i) => (
                    <div key={t.label}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i === active ? 'rgba(167,139,250,0.08)' : 'transparent' }}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: t.color }} />
                        <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.65)' }}>{t.label}</span>
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{t.users} users</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function SecurityEndpoint() {
    
    const [active, setActive] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setActive(a => (a + 1) % 4), 1000)
        return () => clearInterval(iv)
    }, [])

    return (
        <div className="rounded-xl overflow-hidden mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Managed endpoints</span>
                <span className="text-xs" style={{ color: '#4ade80' }}>3/4 protected</span>
            </div>
            <div className="p-2 flex flex-col gap-1">
                {SecurityEndpoints.map((e, i) => (
                    <div key={e.label}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i === active ? 'rgba(255,255,255,0.05)' : 'transparent' }}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: e.color }} />
                        <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.65)' }}>{e.label}</span>
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.28)' }}>{e.os}</span>
                        <span className="text-xs font-medium" style={{ color: e.color }}>{e.status}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Network() {

    const [vals, setVals] = useState([40, 55, 35, 70, 50, 80, 60, 75, 45, 88, 65, 72])
    useEffect(() => {
        const iv = setInterval(() => {
            setVals(v => [...v.slice(1), Math.max(20, Math.min(99, v[v.length - 1] + (Math.random() > 0.5 ? 8 : -8)))])
        }, 600)
        return () => clearInterval(iv)
    }, [])

    return(
        <div className="rounded-xl p-3 mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="flex items-center justify-between mb-3">
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Network throughput</span>
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#5eead4' }} />
                    <span className="text-xs" style={{ color: '#5eead4' }}>Live</span>
                </div>
            </div>
            <div className="flex items-end gap-0.5 mb-3" style={{height: 44}}>
                {vals.map((v, i) => (
                    <div key={i} className="flex-1 rounded-sm transition-all duration-500"
                        style={{
                            height: `${v}%`,
                            background: i === vals.length - 1
                                ? '#5eead4'
                                : `rgba(94,234,212,${0.15 + (i / vals.length) * 0.3})`,
                            borderRadius: 2,
                        }} />
                ))}
            </div>
            <div className="grid grid-cols-3 gap-2">
                {[
                    { label: 'Inbound',  value: '1.2 GB/s', color: '#5eead4' },
                    { label: 'Outbound', value: '0.8 GB/s', color: '#93c5fd' },
                    { label: 'Blocked',  value: '340 req',  color: '#f87171' },
                ].map(s => (
                    <div key={s.label} className="rounded-lg p-2 text-center"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <div className="text-xs font-bold" style={{ color: s.color }}>{s.value}</div>
                        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>{s.label}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Threat() {
    
    const [active, setActive] = useState(0)
    const [blocked, setBlocked] = useState(12)
    useEffect(() => {
        const iv1 = setInterval(() => setActive(a => (a + 1) % 4), 1000)
        const iv2 = setInterval(() => setBlocked(b => b + (Math.random() > 0.75 ? 1 : 0)), 1800)
        return () => { clearInterval(iv1); clearInterval(iv2) }
    }, [])

    return(
        <div className="rounded-xl overflow-hidden mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#f87171', boxShadow: '0 0 4px #f8717199' }} />
                    <span className="text-xs" style={{ color: '#f87171' }}>Threat feed</span>
                </div>
                <span className="text-xs font-semibold" style={{ color: '#f87171' }}>{blocked} blocked today</span>
            </div>

            <div className="p-2 flex flex-col gap-1">
                {Securitythreats.map((t, i) => (
                    <div key={t.label}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i === active ? 'rgba(255,255,255,0.05)' : 'transparent' }}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: t.color }} />
                        <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.65)' }}>{t.label}</span>
                        <span className="text-xs px-1.5 py-0.5 rounded"
                            style={{ background: `${t.color}12`, color: t.color, border: `1px solid ${t.color}25`, fontSize: 9 }}>
                            {t.severity}
                        </span>
                        <span className="text-xs font-semibold" style={{ color: t.blocked ? '#4ade80' : '#fbbf24' }}>
                            {t.blocked ? '✓' : '~'}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )

}

export function Breach() {

    const [blocked, setBlocked] = useState(247)
    const [tick, setTick] = useState(0)
    useEffect(() => {
        const iv1 = setInterval(() => setBlocked(b => b + (Math.random() > 0.6 ? 1 : 0)), 1200)
        const iv2 = setInterval(() => setTick(t => t + 1), 950)
        return () => { clearInterval(iv1); clearInterval(iv2) }
    }, [])

    return(
        <div className="rounded-xl overflow-hidden mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ background: '#f87171', boxShadow: '0 0 4px #f8717199' }} />
                    <span className="text-xs" style={{ color: '#f87171' }}>Attack feed</span>
                </div>
                <span className="text-xs font-bold" style={{ color: '#4ade80' }}>{blocked} blocked</span>
            </div>

            <div className="p-2 flex flex-col gap-1">
                {attempts.map((a, i) => (
                    <div key={a.label}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i === tick % attempts.length ? 'rgba(255,255,255,0.05)' : 'transparent' }}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: a.color }} />
                        <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.65)' }}>{a.label}</span>
                        <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.28)', fontSize: 10 }}>{a.src}</span>
                        <span className="text-xs font-bold" style={{ color: '#4ade80' }}>✓</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Comms() {
    const [tick, setTick] = useState(0)
    const [ping, setPing] = useState(11)
    useEffect(() => {
        const iv1 = setInterval(() => setTick(t => t + 1), 1000)
        const iv2 = setInterval(() => setPing(p => Math.max(8, Math.min(30, p + (Math.random() > 0.5 ? 1 : -1)))), 600)
        return () => { clearInterval(iv1); clearInterval(iv2) }
    },[])

    return (
        <div className="rounded-xl overflow-hidden mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full"
                        style={{ background: '#93c5fd', boxShadow: '0 0 4px #93c5fd99' }} />
                    <span className="text-xs" style={{ color: '#93c5fd' }}>All channels encrypted</span>
                </div>
                <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.3)' }}>{ping}ms</span>
            </div>

            <div className="p-2 flex flex-col gap-1">
                {channels.map((c, i) => (
                    <div key={c.label}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i === tick % channels.length ? 'rgba(147,197,253,0.07)' : 'transparent' }}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: c.color }} />
                        <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.65)' }}>{c.label}</span>
                        <span className="text-xs font-mono px-1.5 py-0.5 rounded"
                            style={{ background: 'rgba(147,197,253,0.1)', color: '#93c5fd', border: '1px solid rgba(147,197,253,0.2)', fontSize: 10 }}>
                            {c.enc}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Data() {

    const [progress, setProgress] = useState(72)
    const [tick, setTick] = useState(0)
    useEffect(() => {
        const iv1 = setInterval(() => setProgress(p => p >= 100 ? 20 : p + 1), 120)
        const iv2 = setInterval(() => setTick(t => t + 1), 850)
        return () => { clearInterval(iv1); clearInterval(iv2) }
    }, [])

    return (
        <div className="rounded-xl overflow-hidden mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Data protection status</span>
                <span className="text-xs font-semibold" style={{ color: '#5eead4' }}>{progress}%</span>
            </div>
            <div className="px-3 pt-2.5 pb-1">
                <div className="w-full h-1.5 rounded-full" style={{background: 'rgba(255,255,255,0.08)'}}>
                    <div className="h-full rounded-full transition-all duration-100"
                        style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #5eead4, #93c5fd)' }} />
                </div>
            </div>

            <div className="p-2 flex flex-col gap-1">
                {datasets.map((d, i) => (
                    <div key={d.label}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i === tick % datasets.length ? 'rgba(94,234,212,0.06)' : 'transparent' }}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: d.color }} />
                        <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.65)' }}>{d.label}</span>
                        <span className="text-xs font-medium" style={{ color: d.color }}>{d.status}</span>
                    </div>
                ))}
            </div>
        </div>
    )   
}

export function Uptime() {

    const [uptime, setUptime] = useState(99.982)
    const [tick, setTick] = useState(0)
    useEffect(() => {
        const iv1 = setInterval(() => setUptime(u => parseFloat(Math.min(99.999, u + 0.001).toFixed(3))), 1200)
        const iv2 = setInterval(() => setTick(t => t + 1), 900)
        return () => { clearInterval(iv1); clearInterval(iv2) }
    }, [])

    return(
        <div className="rounded-xl overflow-hidden mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex item-center justify-between"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full"
                        style={{ background: '#4ade80', boxShadow: '0 0 6px #4ade8099' }} />
                    <span className="text-xs" style={{ color: '#4ade80' }}>All systems operational</span>
                </div>
                <span className="text-xs font-bold" style={{ color: '#4ade80' }}>{uptime}%</span>
            </div>

            <div className="p-2 flex flex-col gap-1">
                {services.map((s, i) => (
                    <div key={s.label}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i === tick % services.length ? 'rgba(74,222,128,0.06)' : 'transparent' }}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: s.color }} />
                        <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.65)' }}>{s.label}</span>
                        <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.3)' }}>{s.latency}</span>
                        <span className="text-xs font-medium" style={{ color: s.color }}>{s.status}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Assessment() {

    const [scanning, setScanning] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setScanning(s => (s + 1) % 5), 850)
        return () => clearInterval(iv)
    }, [])

    return(
        <div className="rounded-xl overflow-hidden mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>security-assessment.sh</span>
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#fbbf24' }} />
                    <span className="text-xs" style={{ color: '#fbbf24' }}>Scanning…</span>
                </div>
            </div>
            <div className="p-3 flex flex-col gap-2.5">
                {checks.map((c, i) => (
                    <div key={c.label}>
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>{c.label}</span>
                            <span className="text-xs font-semibold" style={{ color: c.color }}>{c.score}</span>
                        </div>
                        <div className="w-full h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                            <div className="h-full rounded-full transition-all duration-700"
                                style={{ width: i <= scanning ? `${c.score}%` : '0%', background: c.color, opacity: 0.75 }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Implementation() {
    const [done, setDone] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setDone(d => d >= 5 ? 0 : d + 1), 1100)
        return () => clearInterval(iv)

    }, [])

    return(
        <div className="rounded-xl overflow-hidden mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>deploy-checklist</span>
                <span className="text-xs" style={{ color: '#a78bfa' }}>{done}/{tasks.length} done</span>
            </div>

            <div className="p-3 flex flex-col gap-1.5">
                {tasks.map((t, i) => (
                    <div key={t} className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i < done ? 'rgba(167,139,250,0.07)' : 'transparent' }}>
                        <div className="w-4 h-4 rounded flex items-center justify-center shrink-0 transition-all duration-300"
                            style={{
                                background: i < done ? 'rgba(167,139,250,0.2)' : 'rgba(255,255,255,0.06)',
                                border: `1px solid ${i < done ? 'rgba(167,139,250,0.4)' : 'rgba(255,255,255,0.12)'}`,
                            }}>
                            {i < done && (
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                                    <path d="M1.5 4L3 5.5L6.5 2" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )}
                        </div>
                        <span className="text-xs transition-all duration-300"
                            style={{ color: i < done ? 'rgba(255,255,255,0.72)' : 'rgba(255,255,255,0.32)' }}>
                            {t}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Monitoring() {

    const [vals, setVals] = useState([30, 45, 38, 60, 42, 75, 55, 68, 40, 82, 58, 70])
    const [tick, setTick] = useState(0)

    useEffect(() => {
        const iv1 = setInterval(() => {
            setVals(v => [...v.slice(1), Math.max(20, Math.min(99, v[v.length - 1] + (Math.random() > 0.5 ? 7 : -7)))])
        }, 650)
        const iv2 = setInterval(() => setTick(t => t + 1), 1000)
        return () => { clearInterval(iv1); clearInterval(iv2) }
    }, [])

    return(
        <div className="rounded-xl overflow-hidden mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full" style={{ background: '#4ade80', boxShadow: '0 0 5px #4ade8099' }} />
                    <span className="text-xs" style={{ color: '#4ade80' }}>SOC live</span>
                </div>  
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>24 / 7</span>
            </div>

            {/* Sparkline */}
            <div className="px-3 pt-2 flex items-end gap-0.5" style={{height: 36}}>
                {vals.map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm transition-all duration-300"
                        style={{
                            height: `${h}%`,
                            background: i === vals.length - 1 ? '#4ade80' : `rgba(74,222,128,${0.12 + (i / vals.length) * 0.25})`,
                            borderRadius: 2,
                        }} />
                ))}
            </div>
            <div className="p-2 flex flex-col gap-0.5">
                {feeds.map((f, i) => (
                    <div key={f.label}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i === tick % feeds.length ? 'rgba(74,222,128,0.05)' : 'transparent' }}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: f.color }} />
                        <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.65)' }}>{f.label}</span>
                        <span className="text-xs font-medium" style={{ color: f.color }}>{f.status}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Incident() {
    
    const [step, setStep] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setStep(s => (s + 1) % 5), 1200)
        return () => clearInterval(iv)
    }, [])

    return(
        <div className="rounded-xl overflow-hidden mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ background: '#f87171', boxShadow: '0 0 4px #f8717199' }} />
                    <span className="text-xs" style={{ color: '#f87171' }}>Incident active</span>
                </div>
                <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.3)' }}>INC-0041</span>
            </div>
            
            <div className="p-3 flex flex-col gap-0">
                {timeline.map((t, i) => (
                    <div key={t.label} className="flex items-center gap-3 py-1.5">
                        <div className="flex flex-col items-center shrink-0" style={{ width: 10 }}>
                            <div className="w-2 h-2 rounded-full transition-all duration-300"
                                style={{
                                    background: i < step ? '#4ade80' : i === step ? '#f87171' : 'rgba(255,255,255,0.15)',
                                    boxShadow: i === step ? '0 0 6px #f87171' : 'none',
                                }} />
                            {i < timeline.length - 1 && (
                                <div style={{ width: 1, height: 10, background: 'rgba(255,255,255,0.1)', marginTop: 2 }} />
                            )}
                        </div>
                        <span className="text-xs flex-1 transition-all duration-300"
                            style={{ color: i < step ? '#4ade80' : i === step ? '#f87171' : 'rgba(255,255,255,0.28)' }}>
                            {t.label}
                        </span>
                        <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.25)', fontSize: 10 }}>{t.time}</span>
                        {i === step && (
                            <span className="text-xs px-1.5 py-0.5 rounded"
                                style={{ background: 'rgba(248,113,113,0.12)', color: '#f87171', border: '1px solid rgba(248,113,113,0.25)', fontSize: 9 }}>
                                live
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Risk(){

    const [scanning, setScanning] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setScanning(s => (s + 1) % 5), 850)
        return () => clearInterval(iv)
    }, [])

    return(
        <div className="rounded-xl overflow-hidden mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>risk-scan.sh</span>
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#fbbf24' }} />
                    <span className="text-xs" style={{ color: '#fbbf24' }}>Analysing…</span>
                </div>
            </div>

            <div className="p-3 flex flex-col gap-2.5">
                {risks.map((r, i) => (
                    <div key={r.label}>
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>{r.label}</span>
                            <span className="text-xs font-semibold" style={{ color: r.color }}>{r.score}</span>
                        </div>
                        <div className="w-full h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                            <div className="h-full rounded-full transition-all duration-700"
                                style={{ width: i <= scanning ? `${r.score}%` : '0%', background: r.color, opacity: 0.75 }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Setup() {

    const [done, setDone] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setDone(d => d >= 5 ? 0 : d + 1), 1100)
        return () => clearInterval(iv)
    },[])

    return(
        <div className="rounded-xl overflow-hidden mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>security-setup</span>
                <span className="text-xs" style={{ color: '#93c5fd' }}>{done}/{tasks.length} done</span>
            </div>

            <div className="p-3 flex flex-col gap-1.5">
                {tasks2.map((t, i) => (
                    <div key={t} className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i < done ? 'rgba(147,197,253,0.07)' : 'transparent' }}>
                        <div className="w-4 h-4 rounded flex items-center justify-center shrink-0 transition-all duration-300"
                            style={{
                                background: i < done ? 'rgba(147,197,253,0.2)' : 'rgba(255,255,255,0.06)',
                                border: `1px solid ${i < done ? 'rgba(147,197,253,0.4)' : 'rgba(255,255,255,0.12)'}`,
                            }}>
                            {i < done && (
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                                    <path d="M1.5 4L3 5.5L6.5 2" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )}
                        </div>
                        <span className="text-xs transition-all duration-300"
                            style={{ color: i < done ? 'rgba(255,255,255,0.72)' : 'rgba(255,255,255,0.32)' }}>
                            {t}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Monitoring2() {
    const [vals, setVals] = useState([30, 45, 38, 60, 42, 75, 55, 68, 40, 82, 58, 70])
    const [tick, setTick] = useState(0)

    useEffect(() => {
        const iv1 = setInterval(() => {
            setVals(v => [...v.slice(1), Math.max(20, Math.min(99, v[v.length - 1] + (Math.random() > 0.5 ? 7 : -7)))])
        }, 650)
        const iv2 = setInterval(() => setTick(t => t + 1), 1000)
        return () => { clearInterval(iv1); clearInterval(iv2) }
    }, [])

    return (
        <div className="rounded-xl overflow-hidden mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="px-3 py-2 flex items-center justify-between"
                style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}
            >
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full" style={{ background: '#4ade80', boxShadow: '0 0 5px #4ade8099' }} />
                    <span className="text-xs" style={{ color: '#4ade80' }}>SOC live</span>
                </div>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>24 / 7</span>
            </div>
            <div className="px-3 flex items-end gap-0.5" style={{ height: 36 }}>
                {vals.map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm transition-all duration-300"
                        style={{
                            height: `${h}%`,
                            background: i === vals.length - 1 ? '#4ade80' : `rgba(74,222,128,${0.12 + (i / vals.length) * 0.25})`,
                            borderRadius: 2,
                        }} />
                ))}
            </div>
            <div className="p-2 flex flex-col gap-0.5">
                {feeds2.map((f, i) => (
                    <div key={f.label}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300"
                        style={{ background: i === tick % feeds.length ? 'rgba(74,222,128,0.05)' : 'transparent' }}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: f.color }} />
                        <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.65)' }}>{f.label}</span>
                        <span className="text-xs font-medium" style={{ color: f.color }}>{f.status}</span>
                    </div>
                ))}
            </div>
        </div>
    )

}

export function Improvement() {

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    const threats  = [88, 72, 61, 48, 34, 22]
    const coverage = [62, 70, 78, 85, 91, 97]
    const [pct, setPct] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setPct(p => p >= 100 ? 0 : p + 1), 60)
        return () => clearInterval(iv)
    }, [])

    return(
        <div className="rounded-xl p-3 mt-4"
            style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}
        >
            <div className="flex items-center justify-between mb-3">
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Security posture over time</span>
                <div className="flex items-center gap-3">
                    {[{ label: 'Threats', color: '#f87171' }, { label: 'Coverage', color: '#4ade80' }].map(l => (
                        <div key={l.label} className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-sm" style={{ background: l.color }} />
                            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{l.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex items-end gap-2 mb-3" style={{height: 48}}>
                {months.map((m, i) => (
                    <div key={m} className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full flex items-end gap-0.5" style={{ height: 40 }}>
                            <div className="flex-1 rounded-sm transition-all duration-500"
                                style={{ height: `${threats[i]}%`, background: 'rgba(248,113,113,0.5)', borderRadius: 3 }} />
                            <div className="flex-1 rounded-sm transition-all duration-500"
                                style={{ height: `${coverage[i]}%`, background: '#4ade80', opacity: 0.75, borderRadius: 3 }} />
                        </div>
                        <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.28)' }}>{m}</span>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-between pt-2"
                style={{borderTop: '1px solid rgba(255,255,255,0.07)'}}
            >
                
            </div>
        </div>
    )
}