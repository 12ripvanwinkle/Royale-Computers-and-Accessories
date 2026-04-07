import React from 'react'
import TitleHeader from '../../TitleHeader'
import Contact from '../../sections/Contact'
import Footer from '../../sections/Footer'

const DigitalSignage = () => {
  return (
    <section className="mt-70">
        <div className="min-h-screen flex flex-col items-center justify-start pt-8 md:pt-16 px-4 md:px-6">
            
            {/* Header */}
            <div className="text-center mb-6 md:mb-8">
                <TitleHeader title="Digital Signage" className="" />
                <p className="font-semibold text-2xl md:text-4xl tracking-tight mt-3 md:mt-5"
                    style={{ color: "rgba(255,255,255,0.65)" }}>
                    Real-time. Remote. Responsible.
                </p>
            </div>
        </div>
    </section>
  )
}

export default DigitalSignage