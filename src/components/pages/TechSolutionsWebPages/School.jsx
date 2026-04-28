import React from 'react'
import TitleHeader from '../../TitleHeader'
import Contact from '../../sections/Contact'
import Footer from '../../sections/Footer'
import Holder from '../../Holder'
import Features from '../../Aspects/school/features'
import Modules from '../../Aspects/school/Modules'
import Services from '../../Aspects/school/Services'




const School = () => {
  return (
    <section className="mt-70">
        <div className="min-h-screen flex flex-col items-center justify-start pt-8 md:pt-16 px-4 md:px-6">

            {/* Header */}
            <div className="text-center mb-6 md:mb-8">
                <TitleHeader title="School Management Software" className="" />
                <p className="font-semibold text-2xl md:text-4xl tracking-tight mt-3 md:mt-5"
                    style={{color: "rgba(255,255,255,0.65)"}}
                >
                    Enroll. Engage. Excel.
                </p>
            </div>

            {/* CTA Button */}
            <button className="text-sm font-medium px-6 py-2 rounded-full mb-8 md:mb-10 transition-all duration-200"
            style={{
                border: "1px solid rgba(255,255,255,0.4)",
                color: "white",
                background: "transparent",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
                Learn More
            </button>

            {/* Hero Image */}
            <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden"
            style={{
                aspectRatio: "16/9",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(0,0,0,0.25)",
            }}
            >
                <img src="/images/max.jpg" alt="Access Control System" className="w-full h-full object-cover" />
            </div>

            {/* Overview */}
            <div className="text-center mt-20 max-w-3xl mx-auto px-4">
                <h2 className="text-4xl sm:text-5xl font-light text-white leading-tight mb-6">
                    Complete transparency for every classroom.

                </h2>
                <p className="text-base sm:text-lg font-light leading-relaxed"
                    style={{color: "rgba(255,255,255,0.62)"}}
                >
                    Our school management solutions transform standard administrative databases into high-performance learning ecosystems that deliver
                    up to 99.9% more efficiency than traditional legacy systems. Using our centralized cloud-based platform, your faculty team can 
                    track attendance, monitor student progress, or manage academic records across one or a thousand classrooms in real-time.
                </p>
            </div>

            {/* Features */}
            <Features />

            {/* Modules */}
            <Modules />

            {/* Services */}
            <Services />

            {/* Holder */}
            {/* <Holder /> */}
        </div>
    </section>
  )
}

export default School