import React, {useState} from 'react'
import {StatPill, Card, CardContent} from './Components'
import { glass, glassHover } from '../CCTV-Holder/CCTVStyles'
import { Types } from './index'

const TypesOfSecurity = () => {
  return (
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 py-14 sm:py-20 md:py-24">
            <div className="max-w-5xl mx-auto">
 
                {/* Header */}
                <div className="text-center mb-10 sm:mb-14">
                    <p
                        className="text-xs font-semibold tracking-widest uppercase mb-3"
                        style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.22em' }}
                    >
                        Layered Defence
                    </p>
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
                        style={{ letterSpacing: '-0.03em', lineHeight: 1.05 }}
                    >
                        Five layers. Zero gaps.
                    </h2>
                    <p
                        className="text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed"
                        style={{ color: 'rgba(255,255,255,0.5)' }}
                    >
                        Five interlocking security disciplines that cover every attack vector —
                        from the network edge to every managed device on your estate.
                    </p>
                </div>
 
                {/* Bento Grid */}
                <div className="flex flex-col gap-4">
 
                    {/* Row 1 — 2 cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {Types.slice(0, 2).map(item => (
                            <Card key={item.id} item={item} />
                        ))}
                    </div>
 
                    {/* Row 2 — 3 cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {Types.slice(2).map(item => (
                            <Card key={item.id} item={item} />
                        ))}
                    </div>
 
                </div>
 
            </div>
        </div>
    )
}

export default TypesOfSecurity