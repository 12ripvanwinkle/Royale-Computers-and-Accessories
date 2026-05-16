import React from 'react'
import TitleHeader from '../../TitleHeader'
import Contact from '../../sections/Contact'
import Footer from '../../sections/Footer'
import Features from '../../Aspects/Software-security/Features'
import FAQSection from '../../Aspects/Global/FAQs';
import {ShieldCheck, Activity, BarChart3, Fingerprint, ArrowRight, Lock as LockIcon, Server, ShieldAlert} from 'lucide-react'
import Protection from '../../Aspects/Software-security/Protection'
import Services from '../../Aspects/Software-security/Services'
import { howItWorksData } from '../../Aspects/Global/HowItWorksData';
import HowItWorks from '../../Aspects/Global/HowItWorks';
import { whyChooseUsData } from '../../Aspects/Global/WhyChooseUsData';
import WhyChooseUs from '../../Aspects/Global/WhyChooseUs';

const SoftwareSecurity = () => {
  return (
    <div className="mt-30">
      <div className="min-h-screen flex flex-col items-center justify-start pt-8 md:pt-16 px-4 md:px-6">
    
        {/* Hero Section */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-14 py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-14 items-center">
                
                {/* Left Side */}
                <div className="md:col-span-7 flex flex-col items-start gap-5 sm:gap-6">

                    {/* Eyebrow Pill */}
                    <span
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase px-3 py-1.5 rounded-full"
                        style={{
                            color: "#ff751f",
                            background: "rgba(255,117,31,0.1)",
                            border: "1px solid rgba(255,117,31,0.28)",
                            letterSpacing: "0.18em",
                        }}
                    >
                        <ShieldCheck size={11} strokeWidth={2.5} />
                        Software Security
                    </span>

                    {/* Headline */}
                    <h1
                        className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-none"
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            letterSpacing: "-0.03em",
                            lineHeight: "1.02",
                        }}
                    >
                        Secure Your Platforms. <br />
                        <span
                            style={{
                                background: "linear-gradient(90deg, #ff751f 0%, #ffaa6b 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Protect Your Future.
                        </span>
                    </h1>

                    {/* Sub Headline */}
                    <p
                        className="text-base sm:text-lg font-light leading-relaxed max-w-xl"
                        style={{
                            color: "rgba(255,255,255,0.58)",
                            lineHeight: "1.75",
                        }}
                    >
                        Replace manual access logs and fragmented permissions with one identity platform. 
                        Monitor authentication, privilege levels, and system integrity — all in real time.
                    </p>

                    {/* Trust Stats */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full">
                        {[
                            { icon: Server, value: "500+", label: "Systems Secured" },
                            { icon: LockIcon, value: "10k+", label: "Threats Blocked" },
                            { icon: Activity, value: "Live", label: "Monitoring" },
                        ].map(({ icon: Icon, value, label }) => (
                            <div
                                key={label}
                                className="flex flex-col gap-1 p-2.5 sm:p-3 rounded-xl min-w-0 transition-all duration-300"
                                style={{
                                    background: "rgba(255,255,255,0.04)",
                                    border: "1px solid rgba(255,255,255,0.07)",
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                                    e.currentTarget.style.border = "1px solid rgba(255,117,31,0.3)";
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                                    e.currentTarget.style.border = "1px solid rgba(255,255,255,0.07)";
                                }}
                            >
                                <Icon
                                    size={13}
                                    strokeWidth={1.75}
                                    style={{ color: "#ff751f", flexShrink: 0 }}
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
                            { icon: ShieldAlert, text: "Centralize asset management, threat logs & compliance" },
                            { icon: BarChart3, text: "Real-time security posture & vulnerability dashboards" },
                            { icon: Fingerprint, text: "Role-based access control & identity management" },
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

                    {/* Primary CTA */}
                    <button
                        className="w-full sm:w-auto mt-1 flex items-center justify-center gap-2 text-sm sm:text-base font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl"
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
                        Request My Security Audit
                        <ArrowRight size={16} strokeWidth={2.5} />
                    </button>
                </div>

                {/* Right Side */}
                <div className="md:col-span-5 w-full">

                    {/* Image Container */}
                    <div
                        className="card w-full rounded-2xl overflow-hidden"
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
                        <img
                            src="/images/max.jpg"
                            alt="Security Threat Dashboard"
                            className="w-full h-full object-cover"
                            style={{ filter: "brightness(0.88) contrast(1.06)" }}
                        />

                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 55%)",
                            }}
                        />

                        {/* Status Badge */}
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
                                }}
                            />
                            Encryption Active
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
                        Centralized cloud-based security operations platform
                    </p>

                </div>
            </div>
        </div>

        {/* Features */}
        <Features />

        {/* Aspects of Protection */}
        <Protection />

        {/* Services */}
        <Services />

        {/* How it works */}
        <HowItWorks {...howItWorksData.softwareSecurity} />

        {/* Why Choose Us */}
        <WhyChooseUs {...whyChooseUsData.softwareSecurity} />

        {/* FAQs */}
        <FAQSection />

        {/* Contact Us */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

export default SoftwareSecurity