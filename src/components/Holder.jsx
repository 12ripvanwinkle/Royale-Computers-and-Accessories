import React, { useState, useEffect } from 'react'
import { MessageSquare, MonitorCheck, Wrench, LayoutTemplate, HeadphonesIcon } from 'lucide-react'
import { glass } from '../CCTV-Holder'
import { glassStrong } from './digitalStyles'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Consultation',
    label: 'Understanding Your Needs',
    description:
      'We begin with a thorough discovery session to understand your goals, audience, locations, and budget. Our consultants map out the right signage strategy before a single screen is specified.',
    highlights: ['Site walkthrough', 'Goals & budget review', 'Audience analysis'],
    accent: '#93c5fd',
    accentBg: 'rgba(147,197,253,0.1)',
    accentBorder: 'rgba(147,197,253,0.25)',
  },
  {
    number: '02',
    icon: MonitorCheck,
    title: 'Display Selection',
    label: 'Right Screen for the Job',
    description:
      'Based on your consultation, we recommend the best hardware — LED, LCD, outdoor, interactive, or video wall — matched precisely to your environment, footfall, and content requirements.',
    highlights: ['Hardware specification', 'Environment matching', 'Future-proof selection'],
    accent: '#a78bfa',
    accentBg: 'rgba(167,139,250,0.1)',
    accentBorder: 'rgba(167,139,250,0.25)',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Installation',
    label: 'Clean & Professional',
    description:
      'Our certified engineers handle full installation — mounting, cabling, media players, and network setup — with minimal disruption to your operation. Every install is tested on-site before sign-off.',
    highlights: ['Full hardware install', 'Network & media setup', 'On-site testing'],
    accent: '#4ade80',
    accentBg: 'rgba(74,222,128,0.1)',
    accentBorder: 'rgba(74,222,128,0.25)',
  },
  {
    number: '04',
    icon: LayoutTemplate,
    title: 'Content Setup',
    label: 'Ready to Broadcast',
    description:
      'We configure your CMS, load your brand assets, set up playlists, schedules, and templates — so your screens are live and looking great from day one. Training included.',
    highlights: ['CMS configuration', 'Schedule & playlist setup', 'Team training included'],
    accent: '#fbbf24',
    accentBg: 'rgba(251,191,36,0.1)',
    accentBorder: 'rgba(251,191,36,0.25)',
  },
  {
    number: '05',
    icon: HeadphonesIcon,
    title: 'Ongoing Management',
    label: 'We Stay With You',
    description:
      'Post-launch, we provide remote monitoring, content updates, firmware management, and a dedicated support line — keeping your network performing at its best 24/7.',
    highlights: ['Remote monitoring', 'Content & firmware updates', '24/7 support line'],
    accent: '#5eead4',
    accentBg: 'rgba(94,234,212,0.1)',
    accentBorder: 'rgba(94,234,212,0.25)',
  },
]

function StepConnector({ accent }) {
  return (
    <div className="hidden lg:flex items-center justify-center w-8 shrink-0 mt-8">
      <div className="flex flex-col items-center gap-1">
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className="rounded-full"
            style={{
              width: 3,
              height: 3,
              background: accent,
              opacity: 1 - i * 0.25,
            }}
          />
        ))}
      </div>
    </div>
  )
}

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const iv = setInterval(() => {
      setActiveStep(s => (s + 1) % steps.length)
    }, 2800)
    return () => clearInterval(iv)
  }, [])

  const active = steps[activeStep]

  return (
    <div className="w-full px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            Our Process
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
            How It Works
          </h2>
          <p
            className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            From first conversation to live screens — a clear, managed process
            with no surprises.
          </p>
        </div>

        {/* ── Bento grid ──
            Top: stepper progress bar (full width)
            Row 1: Active step detail (wide 2col) | Quick summary list (1col)
            Row 2: 5 mini step cards full width
        ── */}
        <div className="flex flex-col gap-4">

          {/* Stepper bar */}
          <div
            className="rounded-2xl px-6 py-4"
            style={glass}
          >
            <div className="flex items-center">
              {steps.map((step, i) => {
                const Icon = step.icon
                const isActive = i === activeStep
                const isDone = i < activeStep
                return (
                  <React.Fragment key={step.number}>
                    <button
                      onClick={() => setActiveStep(i)}
                      className="flex items-center gap-2 shrink-0 transition-all duration-300"
                    >
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                        style={{
                          background: isActive ? step.accentBg : isDone ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.05)',
                          border: `1.5px solid ${isActive ? step.accent : isDone ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)'}`,
                          color: isActive ? step.accent : isDone ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.25)',
                          boxShadow: isActive ? `0 0 14px ${step.accent}40` : 'none',
                        }}
                      >
                        <Icon size={14} />
                      </div>
                      <span
                        className="text-xs font-medium hidden sm:block transition-all duration-300"
                        style={{ color: isActive ? 'white' : 'rgba(255,255,255,0.35)' }}
                      >
                        {step.title}
                      </span>
                    </button>

                    {i < steps.length - 1 && (
                      <div
                        className="flex-1 mx-2 h-px transition-all duration-500"
                        style={{
                          background: i < activeStep
                            ? steps[i].accent
                            : 'rgba(255,255,255,0.1)',
                        }}
                      />
                    )}
                  </React.Fragment>
                )
              })}
            </div>
          </div>

          {/* Main content row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Active step detail — wide */}
            <div
              className="md:col-span-2 rounded-2xl p-7 flex flex-col gap-5 transition-all duration-500"
              style={glassStrong}
            >
              {/* Step number + icon */}
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300"
                  style={{
                    background: active.accentBg,
                    border: `1px solid ${active.accentBorder}`,
                    color: active.accent,
                  }}
                >
                  {React.createElement(active.icon, { size: 24 })}
                </div>
                <div>
                  <span
                    className="text-xs font-semibold tracking-widest"
                    style={{ color: active.accent, fontFamily: 'monospace' }}
                  >
                    STEP {active.number}
                  </span>
                  <h3 className="text-xl font-semibold text-white leading-snug mt-0.5">
                    {active.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.65)' }}
              >
                {active.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-col gap-2.5">
                {active.highlights.map(h => (
                  <div key={h} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-md flex items-center justify-center shrink-0"
                      style={{ background: active.accentBg, border: `1px solid ${active.accentBorder}` }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: active.accent }}
                      />
                    </div>
                    <span className="text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>{h}</span>
                  </div>
                ))}
              </div>

              {/* Progress dots */}
              <div className="flex items-center gap-2 mt-auto pt-2">
                {steps.map((s, i) => (
                  <button
                    key={s.number}
                    onClick={() => setActiveStep(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === activeStep ? 20 : 6,
                      height: 6,
                      background: i === activeStep ? active.accent : 'rgba(255,255,255,0.18)',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Summary list */}
            <div
              className="md:col-span-1 rounded-2xl p-5 flex flex-col gap-2"
              style={glass}
            >
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-2"
                style={{ color: 'rgba(255,255,255,0.35)' }}
              >
                All Steps
              </p>
              {steps.map((step, i) => {
                const Icon = step.icon
                const isActive = i === activeStep
                return (
                  <button
                    key={step.number}
                    onClick={() => setActiveStep(i)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-left w-full transition-all duration-300"
                    style={{
                      background: isActive ? step.accentBg : 'transparent',
                      border: `1px solid ${isActive ? step.accentBorder : 'rgba(255,255,255,0.06)'}`,
                    }}
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300"
                      style={{
                        background: isActive ? step.accentBg : 'rgba(255,255,255,0.07)',
                        color: isActive ? step.accent : 'rgba(255,255,255,0.35)',
                        border: `1px solid ${isActive ? step.accentBorder : 'rgba(255,255,255,0.08)'}`,
                      }}
                    >
                      <Icon size={13} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-xs font-medium leading-tight"
                        style={{ color: isActive ? 'white' : 'rgba(255,255,255,0.55)' }}
                      >
                        {step.title}
                      </div>
                      <div
                        className="text-xs mt-0.5 truncate"
                        style={{ color: isActive ? step.accent : 'rgba(255,255,255,0.25)', fontSize: 10 }}
                      >
                        {step.label}
                      </div>
                    </div>
                    <span
                      className="text-xs shrink-0"
                      style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'monospace' }}
                    >
                      {step.number}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Bottom mini cards — one per step */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isActive = i === activeStep
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(i)}
                  className="rounded-xl p-4 text-left transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: isActive ? step.accentBg : 'rgba(255,255,255,0.05)',
                    border: `1px solid ${isActive ? step.accentBorder : 'rgba(255,255,255,0.09)'}`,
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{
                        background: isActive ? `${step.accent}25` : 'rgba(255,255,255,0.08)',
                        color: isActive ? step.accent : 'rgba(255,255,255,0.4)',
                      }}
                    >
                      <Icon size={13} />
                    </div>
                    <span
                      className="text-xs font-bold"
                      style={{
                        color: isActive ? step.accent : 'rgba(255,255,255,0.15)',
                        fontFamily: 'monospace',
                      }}
                    >
                      {step.number}
                    </span>
                  </div>
                  <div
                    className="text-xs font-semibold leading-tight"
                    style={{ color: isActive ? 'white' : 'rgba(255,255,255,0.5)' }}
                  >
                    {step.title}
                  </div>
                </button>
              )
            })}
          </div>

        </div>
      </div>
    </div>
  )
}

export default HowItWorks