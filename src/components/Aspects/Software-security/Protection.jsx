import React from 'react'
import { protections } from './index'
import {ProtectionCard} from './ProtectionComponents'

const Protection = () => {
  return (
    <div className="w-full px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="text-center mb-12">
                <p className="text-xs font-semibold tracking-widest uppercase mb-4"
                    style={{ color: 'rgba(255,255,255,0.45)' }}
                >
                    Comprehensive Coverage
                </p>
                <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
                    Types of Protection
                </h2>
                <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
                    style={{color: 'rgba(255,255,255,0.55)'}}
                >
                    Every vector. Every layer. Every threat — covered by purpose-built security
                    disciplines that work together as a unified defence.    
                </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                {protections.map((item, index) => (
                    <ProtectionCard key={item.id} item={item} index={index} />
                ))}
            </div>

        </div>
    </div>
  )
}

export default Protection