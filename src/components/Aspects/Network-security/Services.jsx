import React from 'react'
import {StatPill, Card} from './Components'
import { services } from './index'

const Services = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 py-14 sm:py-20 md:py-24">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center mb-10 sm:mb-14">
                    <p
                        className="text-xs font-semibold tracking-widest uppercase mb-3"
                        style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.22em' }}
                    >
                        What We Do
                    </p>
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
                        style={{ letterSpacing: '-0.03em', lineHeight: 1.05 }}
                    >
                        Every phase. Covered.
                    </h2>
                    <p
                        className="text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed"
                        style={{ color: 'rgba(255,255,255,0.5)' }}
                    >
                        From the initial assessment to round-the-clock monitoring and rapid incident
                        response — we cover every phase of your network security lifecycle.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map(item => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>

            </div>
        </div>

  )
}

export default Services