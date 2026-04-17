import React from 'react'
import TitleHeader from '../../TitleHeader'
import Contact from '../../sections/Contact'
import Footer from '../../sections/Footer'
import Features from '../../Aspects/Software-security/Features'
import Protection from '../../Aspects/Software-security/Protection'

const SoftwareSecurity = () => {
  return (
    <div className="mt-70">
      <div className="min-h-screen flex flex-col items-center justify-start pt-8 md:pt-16 px-4 md:px-6">
    
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <TitleHeader title="Software Security" className="" />
          <p className="font-semibold text-2xl md:text-4xl tracking-tight mt-3 md:mt-5"
            style={{color: "rgba(255,255,255,0.65)"}}
          >
            Proactive. Protected. Proven.
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
            Stop Threats At Every Layer.
          </h2>
          <p className="text-base sm:text-lg font-light leading-relaxed"
            style={{color: "rgba(255,255,255,0.62)"}}
          >
            Our cybersecurity solutions transform standard networks into impenetrable digital fortresses that block up to 99.9% more threats
            than traditional legacy systems. Using our centralized cloud-based dashboard, your IT team can deploy security patches, 
            monitor vulnerabilities, or neutralize risks across one or a thousand endpoints in real-time.
          </p>
        </div>

        {/* Features */}
        <Features />

        {/* Aspects of Protection */}
        <Protection />
      </div>
    </div>
  )
}

export default SoftwareSecurity