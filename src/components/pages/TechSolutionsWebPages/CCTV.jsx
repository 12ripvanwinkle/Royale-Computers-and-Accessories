import React from 'react'
import { useState, } from "react";
import TitleHeader from '../../TitleHeader'

import Contact from '../../sections/Contact'
import Footer from '../../sections/Footer'
import { Features, Systems, TrustUs } from '../../../components/CCTV-Holder';
import {StepFlow} from '../../../components/access-control'

const CCTV = () => {
  return (
    <section className="mt-70">
      <div className="min-h-screen flex flex-col items-center justify-start pt-8 md:pt-16 px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <TitleHeader title="CCTV Solutions" className="" />
          <p className="font-semibold text-2xl md:text-4xl tracking-tight mt-3 md:mt-5"
            style={{ color: "rgba(255,255,255,0.65)" }}>
            Vigilant. Virtual. Vital.
          </p>
        </div>

        {/* CTA button */}
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

        {/* Hero image */}
        <div className="w-full max-w-5xl rounded-2xl overflow-hidden ml-10"
          style={{
            aspectRatio: "16/9",
            border: "1px solid rgba(255,255,255,0.15)",
            background: "rgba(0,0,0,0.25)",
          }}>
          <img src="/images/navii.jpg" alt="Access Control System" className="w-full h-full object-cover" />
        </div>

        {/* Overview Section */}
        <div className="text-center mt-20 max-w-3xl mx-auto px-4">
            <h2 className="text-4xl sm:text-5xl font-light text-white leading-tight mb-6">
                Smart Surveillance for Complete Security
            </h2>
            <p className="text-base sm:text-lg font-light leading-relaxed"
                style={{ color: "rgba(255,255,255,0.62)" }}>
                Our CCTV solutions provide businesses with a powerful deterrent and a reliable way to capture every detail. 
                From AI-driven motion alerts that stop intruders in their tracks to crystal-clear 4K recording for indisputable evidence, 
                we give you the tools to prevent incidents and protect your bottom line.
            </p>
        </div>

        {/* Features */}
        <Features />

        {/* CCTV Systems */}
        <Systems />

        {/* Step Flow */}
        <StepFlow />

        {/* Why Choose us / Why Trust Us */}
        <TrustUs />

        {/* Contact Section */}
        <Contact />

        {/* Footer  */}
        <Footer />

      </div>
    </section>
    
  )
}

export default CCTV