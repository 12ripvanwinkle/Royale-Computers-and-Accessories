import React from 'react'
import TitleHeader from '../../TitleHeader'
import Contact from '../../sections/Contact'
import Footer from '../../sections/Footer'
import Features from '../../Aspects/Network-security/Features'
import TypesOfSecurity from '../../Aspects/Network-security/TypesOfSecurity'
import Benefits from '../../Aspects/Network-security/Benefits'
import Services from '../../Aspects/Network-security/Services'
import HowItWorks from '../../Aspects/Network-security/HowItWorks'

const NetworkSecurity = () => {
  return (
    <section className="mt-70">
        <div className="min-h-screen flex flex-col items-center justify-start pt-8 md:pt-16 px-4 md:px-6">

            {/* Header */}
            <div className="text-center mb-6 md:mb-8">
                <TitleHeader title="Power Management" className="" />
                <p className="font-semibold text-2xl md:text-4xl tracking-tight mt-3 md:mt-5"
                    style={{color: "rgba(255,255,255,0.65)"}}
                >
                    Detect. Defend. Secure.
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
            <div className="w-full max-w-5xl rounded-2xl overflow-hidden mr--7"
            style={{
                aspectRatio: "16/9",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(0,0,0,0.25)",
            }}
            >
                <img src="/images/max.jpg" alt="Access Control System" className="w-full h-full object-cover" />
            </div>

            {/* Overview Section */}
            <div className="text-center mt-20 max-w-3xl mx-auto px-4">
                <h2 className="text-4xl sm:text-5xl font-light text-white leading-tight mb-6">
                    Complete protection for every connection.

                </h2>
                <p className="text-base sm:text-lg font-light leading-relaxed"
                    style={{color: "rgba(255,255,255,0.62)"}}
                >
                    Our network security solutions transform standard data infrastructures into high-performance defensive ecosystems 
                    that deliver up to 99.9% more protection than traditional legacy systems. Using our centralized cloud-based platform, 
                    your security team can mitigate threats, monitor traffic health, or prevent system breaches across one or a thousand nodes in real-time..
                </p>
            </div>

            {/* Features */}
            <Features />

            {/* Types of Security */}
            <TypesOfSecurity />

            {/* Benefits */}
            <Benefits />

            {/* Services */}
            <Services />

            {/* How It Works */}
            <HowItWorks />

            {/* Contact Us */}
            <Contact />

            {/* Footer */}
            <Footer />
        </div>
    </section>
  )
}

export default NetworkSecurity