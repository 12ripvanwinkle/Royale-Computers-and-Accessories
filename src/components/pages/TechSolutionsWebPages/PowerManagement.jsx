import React from 'react'
import TitleHeader from '../../TitleHeader'
import Contact from '../../sections/Contact'
import Footer from '../../sections/Footer'
import Features from '../../Aspects/power-management/Features';
import SystemTypes from '../../Aspects/power-management/SystemTypes';
import Services from '../../Aspects/power-management/Services';
import TechIntegration from '../../Aspects/power-management/TechIntegration';
import FAQSection from '../../Aspects/Global/FAQs';
import { howItWorksData } from '../../Aspects/Global/HowItWorksData';
import HowItWorks from '../../Aspects/Global/HowItWorks';
import { whyChooseUsData } from '../../Aspects/Global/WhyChooseUsData';
import WhyChooseUs from '../../Aspects/Global/WhyChooseUs';

import { Zap, Clock, Server, ArrowRight, ShieldCheck, Activity } from "lucide-react";



const PowerManagement = () => {
  return (
    <div className="mt-30">
        <div className="min-h-screen flex flex-col items-center justify-start pt-8 md:pt-16 px-4 md:px-6">

            {/* Hero Section */}

            {/* Header */}
            {/* Power Management - Two Column Hero */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-14 py-20 sm:py-16 md:py-20 lg:py-28">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-14 items-center">
                
                {/* Left Side */}
                <div className="md:col-span-7 flex flex-col items-start gap-5 sm:gap-6">

                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase px-3 py-1.5 rounded-full"
                    style={{
                      color: "var(--color-orange-100)",
                      background: "rgba(255,117,31,0.1)",
                      border: "1px solid rgba(255,117,31,0.28)",
                      letterSpacing: "0.18em",
                    }}
                  >
                    <Zap size={11} strokeWidth={2.5} />
                    Power Management
                  </span>

                  <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-none"
                    style={{
                      letterSpacing: "-0.03em",
                      lineHeight: "1.02",
                    }}
                  >
                    Power That 
                    <br />
                    <span
                      style={{
                        background:
                          "linear-gradient(90deg, #ff751f 0%, #ffaa6b 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    > 
                      Never Fails. 
                    </span>
                  </h1>

                  <p className="text-base sm:text-lg md:text-base lg:text-lg font-light leading-relaxed max-w-lg"
                    style={{
                      color: "rgba(255,255,255,0.58)",
                      lineHeight: "1.75",
                    }}
                  >
                    Protect your hardware and eliminate downtime.
                    Monitor, optimize, and control your entire power infrastructure — from one platform.
                  </p>

                  <div className="grid grid-cols-3 gap-4 sm:gap-6 w-full max-w-sm sm:max-w-md">
                    {[
                      { icon: Clock, value: "99.9%", label: "Uptime" },
                      { icon: Server, value: "1–1000+", label: "Units" },
                      { icon: Activity, value: "Live", label: "Monitoring" },
                    ].map(({ icon: Icon, value, label }) => (
                      <div
                        key={label}
                        className="flex flex-col gap-1 p-3 rounded-xl"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.07)",
                        }}
                      >
                        <Icon
                          size={14}
                          strokeWidth={1.75}
                          style={{ color: "#ff751f" }}
                        />

                        <span
                          className="text-lg sm:text-xl font-bold mt-0.5"
                          style={{
                            color: "#ff751f",
                            fontFamily: "'Inter', sans-serif",
                            lineHeight: 1,
                          }}
                        >
                          {value}
                        </span>

                        <span
                          className="text-xs"
                          style={{
                            color: "rgba(255,255,255,0.32)",
                            letterSpacing: "0.1em",
                          }}
                        >
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <ul className="flex flex-col gap-2.5 mt-1">
                    {[
                      {
                        icon: ShieldCheck,
                        text: "Prevent hardware failures before they happen",
                      },
                      {
                        icon: Zap,
                        text: "Optimize power loads across every unit",
                      },
                      {
                        icon: Activity,
                        text: "Full visibility in real-time, anywhere",
                      },
                    ].map(({ icon: Icon, text }) => (
                      <li key={text} className="flex items-center gap-2.5">
                        <Icon
                          size={15}
                          strokeWidth={2}
                          style={{ color: "#ff751f", flexShrink: 0 }}
                        />

                        <span
                          className="text-sm sm:text-base font-light"
                          style={{ color: "rgba(255,255,255,0.6)" }}
                        >
                          {text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full sm:w-auto mt-1 flex items-center justify-center gap-2 text-sm sm:text-base font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl"
                    style={{
                      background: "var(--color-orange-100)",
                      color: "white",
                    }}
                  >
                    Request My Power Audit
                    <ArrowRight size={16} strokeWidth={2.5} />
                  </button>
                </div>

                {/* Right side*/}
                <div className="md:col-span-5 w-full">
                    <div className="card w-full rounded-2xl overflow-hidden"
                      style={{
                        aspectRatio: "4/3",
                        border: "1px solid rgba(255,255,255,0.08)",
                        background: "rgba(0,0,0,0.3)",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                        position: "relative",
                              }}
                    >
                      <img src="/images/max.jpg" alt="Power Management Dashboard" className="w-full h-full object-cover" />
                    
                      <div className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 55%)",
                        }}
                      />

                      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background: "rgba(0,0,0,0.65)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          color: "white",
                        }}
                      >

                        <span className="block rounded-full"
                          style={{
                            width: 7,
                            height: 7,
                            background: "#22c55e",
                          }}
                        />
                          System Online 

                      </div>
                    </div>

                    <p className="text-xs mt-3 text-center"
                      style={{
                        color: "rgba(255,255,255,0.22)",
                        letterSpacing: "0.1em",
                      }}
                    >
                      Centralized cloud-based power control platform
                    </p>
                </div>
              </div>
            </div>


            {/* Features */}
            <Features />

            {/* Types of Systems */}
            <SystemTypes />

            {/* Services */}
            <Services />

            {/* How It Works */}
            <HowItWorks {...howItWorksData.powerManagement} />

            {/* Tech Integration */}
            <TechIntegration />

            {/* Why Choose us */}
            <WhyChooseUs {...whyChooseUsData.powerManagement} />
            
            {/* FAQs */}
            <FAQSection />

            {/* Contact us */}
            <Contact />

            {/* Footer */}
            <Footer />

        </div>
    </div>
  )
}

export default PowerManagement