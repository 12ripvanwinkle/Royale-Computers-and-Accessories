import React from 'react'
import TitleHeader from '../../TitleHeader'
import Contact from '../../sections/Contact'
import Footer from '../../sections/Footer'
import DSFeatures from '../../Aspects/digital-signage/DSFeatures'
import FAQSection from '../../Aspects/Global/FAQs';
import {Tv2, Monitor, Zap, Activity, LayoutPanelTop, ShieldCheck, SmartphoneNfc, ArrowRight,} from 'lucide-react'
import Types from '../../Aspects/digital-signage/Types'
import { howItWorksData } from '../../Aspects/Global/HowItWorksData'
import HowItWorks from '../../Aspects/Global/HowItWorks';
import { whyChooseUsData } from '../../Aspects/Global/WhyChooseUsData';
import WhyChooseUs from '../../Aspects/Global/WhyChooseUs';
import IntegrationTech from '../../Aspects/digital-signage/IntegrationTech'


const DigitalSignage = () => {
  return (
    <section className="mt-70">
        <div className="min-h-screen flex flex-col items-center justify-start pt-8 md:pt-16 px-4 md:px-6">
            
            {/* Hero Section */}
            {/* Header */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-14 py-12 sm:py-16 md:py-20 lg:py-28">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-14 items-center">
                    
                    {/* Left Side */}
                    <div className="md:col-span-7 flex flex-col items-start gap-5 sm:gap-6">

                        {/* Eyebrow pill */}
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase px-3 py-1.5 rounded-full"
                            style={{
                                color: "#ff751f",
                                background: "rgba(255,117,31,0.1)",
                                border: "1px solid rgba(255,117,31,0.28)",
                                letterSpacing: "0.18em",
                            }}
                        >
                            {/* Changed to Tv2 for a more visual "Signage" feel */}
                            <Tv2 size={11} strokeWidth={2.5} />
                            Digital Signage
                        </span>

                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-none"
                            style={{
                                letterSpacing: "-0.03em",
                                lineHeight: "1.02",
                            }}
                        >
                            Observe Your Compound. <br />
                            <span
                                style={{
                                    background: "linear-gradient(90deg, #ff751f 0%, #ffaa6b 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                Control Every Screen. 
                            </span>
                        </h1>

                        {/* Sub Headline */}
                        <p className="text-base sm:text-lg font-light leading-relaxed max-w-xl"
                            style={{
                                color: "rgba(255,255,255,0.58)",
                                lineHeight: "1.75",
                            }}
                        >
                            Replace fragmented workflows and manual admin with one visual platform. 
                            Automate your displays to broadcast live attendance, critical alerts, and 
                            internal comms—updated in real time across every hallway.
                        </p>

                        {/* Trust Stats */}
                        <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full">
                            {[
                                { icon: Monitor, value: "500+", label: "Screens Active" },
                                { icon: Zap, value: "Instant", label: "Global Sync" },
                                { icon: Activity, value: "99.9%", label: "Uptime" },
                            ].map(({ icon: Icon, value, label }) => (
                                <div
                                    key={label}
                                    className="flex flex-col gap-1 p-2.5 sm:p-3 rounded-xl min-w-0"
                                    style={{
                                        background: "rgba(255,255,255,0.04)",
                                        border: "1px solid rgba(255,255,255,0.07)",
                                    }}
                                >
                                    <Icon
                                        size={13}
                                        strokeWidth={1.75}
                                        style={{
                                            color: "#ff751f",
                                            flexShrink: 0,
                                        }}
                                    />

                                    <span
                                        className="text-base sm:text-xl font-bold mt-0.5 leading-tight"
                                        style={{
                                            color: "#ff751f",
                                            fontFamily: "'Inter', sans-serif",
                                            wordBreak: "break-word",
                                        }}
                                    >
                                        {value}
                                    </span>

                                    <span
                                        className="text-xs leading-tight"
                                        style={{
                                            color: "rgba(255,255,255,0.32)",
                                            letterSpacing: "0.05em",
                                        }}
                                    >
                                        {label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Feature Bullets */}
                        <ul className="flex flex-col gap-2.5 mt-1">
                            {[
                                { icon: LayoutPanelTop, text: "Centralized cloud-based content management" },
                                { icon: ShieldCheck, text: "Secure, encrypted display network" },
                                { icon: SmartphoneNfc, text: "Remote mobile control for instant updates" },
                            ].map(({ icon: Icon, text }) => (
                                <li key={text} className="flex items-center gap-2.5">
                                    <Icon
                                        size={15}
                                        strokeWidth={2}
                                        style={{
                                            color: "#ff751f",
                                            flexShrink: 0,
                                        }}
                                    />

                                    <span
                                        className="text-sm sm:text-base font-light"
                                        style={{
                                            color: "rgba(255,255,255,0.6)",
                                        }}
                                    >
                                        {text}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* Primary CTA */}
                        <button className="w-full sm:w-auto mt-1 flex items-center justify-center gap-2 text-sm sm:text-base font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl"
                            style={{
                                background: "#ff751f",
                                color: "white",
                                fontFamily: "'Inter', sans-serif",
                                letterSpacing: "0.01em",
                                transition: "all 0.2s ease",
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = "#ff8c3f";
                                e.currentTarget.style.boxShadow = "0 10px 32px rgba(255,117,31,0.42)";
                                e.currentTarget.style.transform = "translateY(-2px)";
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = "#ff751f";
                                e.currentTarget.style.boxShadow = "none";
                                e.currentTarget.style.transform = "translateY(0)";
                            }}
                        >
                            Book a Free Demo
                            <ArrowRight size={16} strokeWidth={2.5} />
                        </button>
                    </div>

                    {/* Right Side */}
                    <div className="md:col-span-5 w-full">

                        {/* Image Container */}
                        <div className="card w-full rounded-2xl overflow-hidden"
                            style={{
                                aspectRatio: "4/3",
                                border: "1px solid rgba(255,255,255,0.08)",
                                background: "rgba(0,0,0,0.3)",
                                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                                position: "relative",
                                transition: "box-shadow 0.4s ease, transform 0.4s ease",
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.boxShadow =
                                    "0 28px 80px rgba(0,0,0,0.55), 0 0 48px rgba(255,117,31,0.2)";
                                e.currentTarget.style.transform = "translateY(-5px)";
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.boxShadow =
                                    "0 20px 60px rgba(0,0,0,0.5)";
                                e.currentTarget.style.transform = "translateY(0)";
                            }}
                        >
                            <img src="/images/max.jpg"
                                alt="Digital Signage CMS"
                                className="w-full h-full object-cover"
                                style={{
                                    filter: "brightness(0.88) contrast(1.06)",
                                }}
                            />

                            {/* Bottom Gradient */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background:
                                        "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 55%)",
                                }}
                            />

                            {/* Live Badge */}
                            <div
                                className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
                                style={{
                                    background: "rgba(0,0,0,0.65)",
                                    border: "1px solid rgba(255,255,255,0.12)",
                                    color: "white",
                                    backdropFilter: "blur(8px)",
                                }}
                            >
                                <span
                                    className="block rounded-full"
                                    style={{
                                        width: 7,
                                        height: 7,
                                        background: "#22c55e",
                                        boxShadow: "0 0 6px #22c55e",
                                        animation: "pulse 2s infinite",
                                    }}
                                />
                                Signage Live
                            </div>
                        </div>

                        {/* Caption */}
                        <p
                            className="text-xs mt-3 text-center"
                            style={{
                                color: "rgba(255,255,255,0.22)",
                                letterSpacing: "0.1em",
                            }}
                        >
                            Centralized cloud-based digital signage command center
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Digital Signage Features */}
            <div id='DSFeatures'>
              <DSFeatures /> 
            </div>

            {/* Types of Digital Signage */}
            <div id='DSTypes'>
              <Types />  
            </div>
            
            {/* Technology Integration */}
            <div id='DSIntegration'>
              <IntegrationTech />  
            </div>
            
            {/* How it works */}
            <div id='DSProcess'>
              <HowItWorks {...howItWorksData.digitalSignage} />  
            </div>

            {/* Why Choose us */}
            <div id='CCTVwhyUs'>
              <WhyChooseUs {...whyChooseUsData.digitalSignage} />
            </div>

            {/* FAQs */}
            <FAQSection />

            {/* Contact us section */}
            <Contact />

            {/* Footer Section */}
            <Footer />
        </div>
    </section>
  )
}

export default DigitalSignage