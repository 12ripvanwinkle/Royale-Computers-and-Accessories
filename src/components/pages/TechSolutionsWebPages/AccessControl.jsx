import React from 'react'
import { useState, } from "react";

import Contact from '../../sections/Contact'
import Footer from '../../sections/Footer'
import TitleHeader from '../../TitleHeader'
import {
  PinCard,
  RfidCard,
  BioMetricCard,
  RemoteCard,
  AuditCard,
  CctvCard,
  StepFlow,
  WhyChooseUs,
} from "../../Aspects/access-control";

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


const AccessControl = () => {
  return (
    <section className="mt-70">
      <div className="min-h-screen flex flex-col items-center justify-start pt-8 md:pt-16 px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <TitleHeader title="Access Control" className="" />
          <p className="font-semibold text-2xl md:text-4xl tracking-tight mt-3 md:mt-5"
            style={{ color: "rgba(255,255,255,0.65)" }}>
            Secure. Simple. Modern.
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
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Learn More
        </button>

        {/* Hero image */}
        <div className="w-full max-w-5xl rounded-2xl overflow-hidden"
          style={{
            aspectRatio: "16/9",
            border: "1px solid rgba(255,255,255,0.15)",
            background: "rgba(0,0,0,0.25)",
          }}>
          <img src="/images/batman.png" alt="Access Control System" className="w-full h-full object-cover" />
        </div>

        {/* Overview Section */}
        <div className="text-center mt-20 max-w-3xl mx-auto px-4">
            <h2 className="text-4xl sm:text-5xl font-light text-white leading-tight mb-6">
                What is Access Control?
            </h2>
            <p className="text-base sm:text-lg font-light leading-relaxed"
                style={{ color: "rgba(255,255,255,0.62)" }}>
                Our Access Control solutions provide businesses with secure, flexible, and scalable ways 
                to manage who can enter specific areas. From biometric authentication to smart card systems, 
                we help you maintain complete control over your premises.
            </p>
        </div>

        {/* Services */}
        <div className="mt-20 md:mt-40 w-full max-w-5xl" id="services">
          <div className="text-center mb-6 md:mb-8">
            <TitleHeader title="Our Access Control Services" />
            <p className="font-semibold text-xl md:text-4xl tracking-tight mt-3 md:mt-5 px-4"
              style={{ color: "rgba(255,255,255,0.6)" }}>
              Every layer of security, covered — from the front gate to the server room door.
            </p>
          </div>


          <div className="pb-10 md:pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
              <PinCard />
              <RfidCard />
              <BioMetricCard />
              <RemoteCard />
              <AuditCard />
              <CctvCard />
            </div>
          </div>
        </div>

        {/* Step by step */}
        <StepFlow />

        {/* The Why us social proof section */}
        <WhyChooseUs />

        {/* FAQs */}
        <Faqs />
      </div>

      <Contact />
      <Footer />
    </section>
  );
};

export default AccessControl;