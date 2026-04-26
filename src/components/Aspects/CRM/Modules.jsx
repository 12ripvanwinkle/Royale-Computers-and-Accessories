import React, {useState} from 'react'
import { glass, glassHover } from '../CCTV-Holder/CCTVStyles'
import { modules } from './index'

function ModuleCard({mod}) {

    const [hovered, setHovered] = useState(false)
    const IconComp = mod.icon
    const VisualComp = mod.visual

    return (
        <div className="rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
            style={{
                ...(hovered ? glassHover : glass),
                minHeight: 360,
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)} 
        >

            {/* Top - eyebrow + watermark */}
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg flex item-center justify-center shrink-0"
                        style={{background: `${mod.accent}18`, color: mod.accent, border: `1px solid ${mod.accent}30`}}
                    >
                        <IconComp size={18} />
                    </div>
                    <span className="text-xs font-semibold tracking-widest uppercase"
                        style={{color: 'rgba(255,255,255,0.35)'}}
                    >
                        {mod.eyebrow}
                    </span>
                </div>

                <span className="font-black select-none"
                    style={{fontSize: 32, color: 'rgba(255,255,255,0.05)', lineHeight: 1, fontFamily: 'monospace'}}
                >
                    {String(mod.id).padStart(2, '0')}
                </span>
            </div>

            {/* Middle - animated visual fills remaining height */}
            <VisualComp />

            {/* Bottom — title + description */}
            <div className="mt-auto">
                <div className="w-full h-px mb-4" style={{ background: 'rgba(255,255,255,0.08)' }} />
                <h3 className="text-xl font-semibold text-white leading-snug mb-2">{mod.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {mod.description}
                </p>
            </div>
        </div>
    )
}

const Modules = () => {
  return (
    <div className="w-full px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="text-center mb-12">
                <p className="text-xs font-semibold tracking-widest uppercase mb-4"
                    style={{color: 'rgba(255,255,255,0.45)'}}
                >
                    Built To Scale With you
                </p>
                <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
                    Modules
                </h2>
                <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
                    style={{color: 'rgba(255,255,255,0.55)'}}
                >
                    Four purpose-built modules that cover every stage of the customer lifecycle —
                    from first contact to long-term retention.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {modules.map(m => <ModuleCard key={m.id} mod={m} />)}
            </div>
        </div>
    </div>
  )
}

export default Modules