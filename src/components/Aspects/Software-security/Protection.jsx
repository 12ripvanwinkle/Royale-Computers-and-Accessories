import React from 'react'
import { ProtectionCard } from './Components'
import { items } from './index'

const Protection = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 py-14 sm:py-20 md:py-24"
        style={{color: 'white'}}
    >
        <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="text-center mb-10 sm:mb-14">
                <p className="text-xs font-semibold uppercase tracking-widest mb-3"
                    style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.22em' }}>
                    Layers of Protection
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
                    style={{ letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                    Security at every layer.
                </h2>
                <p className="text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.5)' }}>
                    From the application layer to your cloud infrastructure — every surface is hardened, monitored, and compliant.
                </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                {items.map(item => (
                    <ProtectionCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Protection