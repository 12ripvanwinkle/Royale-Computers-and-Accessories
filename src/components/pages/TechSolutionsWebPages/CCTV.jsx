import React from 'react'
import { useState, } from "react";
import TitleHeader from '../../TitleHeader'

import Contact from '../../sections/Contact'
import Footer from '../../sections/Footer'
import { Features, Systems, TrustUs } from '../../../components/CCTV-Holder';
import {StepFlow} from '../../../components/access-control';


function Faqs() {
  
  const faqs = [
    { question: "Placeholder question?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { question: "Placeholder question?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { question: "Placeholder question?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { question: "Placeholder question?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  ];

  const [openIndex, setOpenIndex] = useState(0);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 mt-10" id='faqs'>
      <div className="w-full max-w-7xl">
        <div className="mb-20">
          <TitleHeader title="Frequently Asked Questions" className="text-white" />
        </div>

        <div className="flex flex-col gap-2 mt-30">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: isOpen ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.07)",
                  border: isOpen ? "1px solid rgba(255,255,255,0.25)" : "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(8px)",
                }}>
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-base md:text-lg font-semibold text-white">{faq.question}</span>
                  <div className="shrink-0 ml-4 w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}>
                    <span className="text-white text-base leading-none">{isOpen ? "×" : "+"}</span>
                  </div>
                </button>
                <div className="transition-all duration-300 ease-in-out overflow-hidden"
                  style={{ maxHeight: isOpen ? 200 : 0 }}>
                  <p className="px-5 pb-5 text-md leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.65)" }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

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

        {/* FAQs */}
        <Faqs />

        {/* Contact Section */}
        <Contact />

        {/* Footer  */}
        <Footer />

      </div>
    </section>
    
  )
}

export default CCTV