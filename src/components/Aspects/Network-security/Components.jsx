import React, { useEffect, useState } from 'react'
import {rules, alerts, tunnels, threats, endpoints,
    SecurityRules, SecurityTunnels, SecurityEndpoints, Securitythreats
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