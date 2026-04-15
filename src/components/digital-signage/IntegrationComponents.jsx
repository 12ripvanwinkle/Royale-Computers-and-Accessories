import React, { useEffect, useState } from 'react'
import { platforms, endpoints } from './index'
import {innerSurface} from './digitalStyles'

export function CloudCmsMockup() {
    return (
        <div className="rounded-xl overflow-hidden mb-4" style={innerSurface}>
            <div className="flex items-center justify-between px-3 py-2"
                style={{borderBottom: '1px solid rgba(255,255,255,0.07)'}}
            >
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ background: '#4ade80', boxShadow: '0 0 5px #4ade8099' }} />
                    <span className="text-xs text-white">
                        CMS Platforms
                    </span>
                </div>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
                    2 Active
                </span>
            </div>
            <div className="p-3 flex flex-col gap-1.5">
               {platforms.map(p => (
                    <div key={p.name} className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                        <div className="w-2 h-2 rounded-full shrink-0" style={{ background: p.color }} />
                        <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.75)' }}>{p.name}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                            background: p.status === 'Connected' ? 'rgba(74,222,128,0.1)' : 'rgba(255,255,255,0.06)',
                            color: p.status === 'Connected' ? '#4ade80' : 'rgba(255,255,255,0.35)',
                            border: p.status === 'Connected' ? '1px solid rgba(74,222,128,0.25)' : '1px solid rgba(255,255,255,0.08)',
                        }}>
                        {p.status}
                        </span>
                    </div>
                ))} 
            </div>
        </div>
    )
}

export function PosMockup() {
    
    const [tick, setTick] = useState(0)
    useEffect(() => {
        const iv = setInterval(() => setTick(t => t + 1), 2000)
        return () => clearInterval(iv)
    }, [])

    const items = [
        { name: 'Americano',   price: '£3.20', updated: tick % 3 === 0 },
        { name: 'Latte',       price: '£3.80', updated: tick % 3 === 1 },
        { name: 'Croissant',   price: '£2.50', updated: tick % 3 === 2 },
    ]

    return (
        <div className="rounded-xl overflow-hidden mb-4" style={innerSurface}>
            <div className="flex items-center gap-2 px-3 py-2"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
            >
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>POS → Signage sync</span>
                <div className="ml-auto flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#4ade80', boxShadow: '0 0 4px #4ade8099' }} />
                    <span className="text-xs" style={{ color: '#4ade80' }}>Live</span>
                </div>
            </div>

            <div className="p-3 flex flex-col gap-1.5">
                {items.map(item => (
                    <div key={item.name}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-500"
                        style={{
                        background: item.updated ? 'rgba(74,222,128,0.08)' : 'rgba(255,255,255,0.03)',
                        border: `1px solid ${item.updated ? 'rgba(74,222,128,0.2)' : 'rgba(255,255,255,0.06)'}`,
                        }}>
                        <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.75)' }}>{item.name}</span>
                        <span className="text-xs font-semibold"
                        style={{ color: item.updated ? '#4ade80' : 'rgba(255,255,255,0.55)' }}>
                        {item.price}
                        </span>
                        {item.updated && (
                        <span className="text-xs" style={{ color: '#4ade80', fontSize: 9 }}>↑ updated</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export function ApiMockup() {
    return (
        <div className="rounded-xl overflow-hidden mb-4" style={innerSurface}>
            <div className="flex items-center gap-1.5 px-3 py-2"
                style={{borderBottom: '1px solid rgba(255,255,255,0.07)'}}
            >
                {['#f87171', '#fbbf24', '#4ade80'].map(c => (
                    <div key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />
                ))}
                <span className="text-xs ml-2" style={{color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace'}}>
                    REST API
                </span>
            </div>
            <div className="p-3 flex flex-col gap-1.5">
                {endpoints.map(e => (
                    <div key={e.path} className="flex items-center gap-2 px-2 py-1.5 rounded-lg"
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <span className="text-xs font-bold shrink-0"
                        style={{ color: e.color, fontFamily: 'monospace', minWidth: 32 }}>
                        {e.method}
                        </span>
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'monospace' }}>
                        {e.path}
                        </span>
                    </div>
                ))}                
            </div>
        </div>
    )
}

export function DataFeedMockup() {

    const [values, setValues] = useState({temp: 18, rate: 4.2, visitors: 312})
    useEffect(() => {
        const iv = setInterval(() => {
            setValues(v => ({
                temp: +(v.temp + (Math.random() - 0.5) * 0.4).toFixed(1),
                rate: +(v.rate + (Math.random() - 0.5) * 0.2).toFixed(2),
                visitors: v.visitors + Math.floor(Math.random() * 3),                
            }))
        }, 1600)
    }, [])

    const feeds = [
    { label: 'Temperature',  value: `${values.temp}°C`,   color: '#fbbf24' },
    { label: 'Exchange rate', value: `$${values.rate}`,   color: '#93c5fd' },
    { label: 'Visitors today',value: `${values.visitors}`,color: '#4ade80' },
  ]

    return (
        <div className="rounded-xl overflow-hidden mb-4" style={innerSurface}>
            <div className="flex items-center gap-2 px-3 py-2"
                style={{borderBottom: '1px solid rgba(255,255,255,0.07)'}}
            >
                <div className="w-2 h-2 rounded-full animate-pulse"
                    style={{background: '#a78bfa', boxShadow: '0 0 5px #a78bfa99'}}
                />
                <span className="text-xs" style={{color: 'rgba(255,255,255,0.4)'}}>
                    Live Data feed
                </span>
            </div>
            <div className="p-3 grid grid-cols-3 gap-2 mb-1">
                {feeds.map(f => (
                    <div key={f.label} className="flex flex-col items-center justify-center rounded-lg py-2.5 px-1"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                        <span className="text-sm font-bold transition-all duration-500"
                        style={{ color: f.color, fontFamily: 'monospace' }}>
                        {f.value}
                        </span>
                        <span className="text-center leading-tight mt-1"
                        style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)' }}>
                        {f.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
