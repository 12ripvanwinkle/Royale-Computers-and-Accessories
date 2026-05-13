import React from 'react'
import TitleHeader from '../../TitleHeader'
import Contact from '../../sections/Contact'
import Footer from '../../sections/Footer'
import Features from '../../Aspects/Network-security/Features'
import FAQSection from '../../Aspects/Global/FAQs';
import TrustStrip from '../../Aspects/Network-security/TrustStrip'
import TypesOfSecurity from '../../Aspects/Network-security/TypesOfSecurity'
import Services from '../../Aspects/Network-security/Services'
import WhyChooseUs from '../../Aspects/Network-security/WhyChooseUs'
import { ShieldCheck, Network, BarChart3, Users, Lock, ArrowRight, ShieldAlert } from "lucide-react";
import { howItWorksData } from '../../Aspects/Global/HowItWorksData';
import HowItWorks from '../../Aspects/Global/HowItWorks';


const NetworkSecurity = () => {
  return (
    <section className="mt-70">
        <div className="min-h-screen flex flex-col items-center justify-start pt-8 md:pt-16 px-4 md:px-6">

            {/* Hero Section */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-14 py-12 sm:py-16 md:py-20 lg:py-28">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-14 items-center">

                    {/* Left Side */}
                    <div className="md:col-span-7 flex flex-col items-start gap-5 sm:gap-6">

                        {/* Eyebrow Pill */}
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase px-3 py-1.5 rounded-full"
                            style={{
                                color: "#ff751f",
                                background: "rgba(255,117,31,0.1)",
                                border: "1px solid rgba(255,117,31,0.28)",
                                letterSpacing: "0.18em",
                            }}
                        >
                            <ShieldCheck size={11} strokeWidth={2.5} />
                            School Management Software
                        </span>

                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-none"
                            style={{
                                letterSpacing: "-0.03em",
                                lineHeight: "1.02",
                            }}
                        >
                            Protect Your Network. <br />
                            <span
                                style={{
                                    background: "linear-gradient(90deg, #ff751f 0%, #ffaa6b 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                Not Your Sleep. 
                            </span>
                        </h1>
                        
                        {/* Sub Headline */}
                        <p className="text-base sm:text-lg font-light leading-relaxed max-w-xl"
                            style={{
                                color: "rgba(255,255,255,0.58)",
                                lineHeight: "1.75",
                            }}
                        >
                           Replace fragmented legacy tools and reactive monitoring with one platform.
                           Detect threats, block intrusions, and secure every node — all in real time. 
                        </p>

                        {/* Trust Stats */}
                        <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full">
                            {[
                                { icon: Network, value: "1000+", label: "Nodes" },
                                { icon: ShieldCheck, value: "99.9%", label: "Uptime" },
                                { icon: BarChart3, value: "Live", label: "Monitoring" },
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

                        {/* Feature */}
                        <ul className="flex flex-col gap-2.5 mt-1">
                            {[
                                { icon: ShieldCheck, text: "Centralise threat intelligence, firewall rules & incident logs" },
                                { icon: BarChart3, text: "Real-time traffic analysis and intrusion detection" },
                                { icon: Lock, text: "Admin, analyst & compliance portals in one platform" },
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
                            onClick={() =>
                                document
                                    .getElementById("contact")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                        >
                            Book a Free Demo
                            <ArrowRight size={16} strokeWidth={2.5} />
                        </button>
                    </div>

                    {/* Right Side */}
                    <div className="md:col-span-5 w-full">

                        {/* Image */}
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
                                alt="Network Security Dashboard"
                                className="w-full h-full object-cover"
                                style={{
                                    filter: "brightness(0.88) contrast(1.06)",
                                }}
                            />

                            {/* Bottom Gradient */}
                            <div className="absolute inset-0 pointer-events-none"
                                style={{
                                    background:
                                        "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 55%)",
                                }}
                            />

                            {/* Live Badge */}
                            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
                                style={{
                                    background: "rgba(0,0,0,0.65)",
                                    border: "1px solid rgba(255,255,255,0.12)",
                                    color: "white",
                                    backdropFilter: "blur(8px)",
                                }}
                            >
                                <span className="block rounded-full"
                                    style={{
                                        width: 7,
                                        height: 7,
                                        background: "#22c55e",
                                        boxShadow: "0 0 6px #22c55e",
                                        animation: "pulse 2s infinite",
                                    }}
                                />
                                    Monitoring Live
                            </div>
                        </div>

                        {/* Caption */}
                        <p className="text-xs mt-3 text-center"
                            style={{
                                color: "rgba(255,255,255,0.22)",
                                letterSpacing: "0.1em",
                            }}
                        >
                            Centralised Cloud-based Network Security Platfom
                        </p>
                    </div>

                </div>
            </div>

            {/* Trust Stats Strip */}
            <TrustStrip />

            {/* Features */}
            <Features />

            {/* Types of Security */}
            <TypesOfSecurity />

            {/* Services */}
            <Services />

            {/* How It Works */}
            <HowItWorks {...howItWorksData.networkSecurity} />

            {/* Why Choose us */}
            <WhyChooseUs />

            {/* FAQs */}
            <FAQSection />

            {/* Contact Us */}
            <Contact />

            {/* Footer */}
            <Footer />
        </div>
    </section>
  )
}

export default NetworkSecurity