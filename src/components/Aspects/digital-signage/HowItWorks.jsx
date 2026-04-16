import React, { useEffect, useState } from 'react'
import { glass } from '../CCTV-Holder'
import { glassStrong } from './digitalStyles'
import {steps} from './index'

function StepConnector({ accent}) {
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
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (paused) return 
        const iv = setInterval(() => {
            setActiveStep(s => (s + 1) % steps.length)  
        }, 2800)
        return () => clearInterval(iv)
    }, [paused])

    const active = steps[activeStep]

  return (
    <div className="w-full px-4 md:px-6 py-16 md:py-24"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
    >
        <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="text-center mb-12">
                <p className="text-xs font-semibold tracking-widest uppercase mb-4"
                    style={{color: 'rgba(255,255,255,0.45)'}}
                >
                    Our Process 
                </p>
                <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
                    How it Works
                </h2>
                <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
                    style={{color: 'rgba(255,255,255,0.55)'}}
                >
                    From first conversation to live screens — a clear, managed process
                    with no surprises.
                </p>

                <button
                    onClick={() => setPaused(p => !p)}
                    className="px-4 py-2 rounded-lg text-sm mt-10"
                    style={{
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: 'white'
                    }}
                >
                    {paused ? 'Resume' : 'Pause'}
                </button>
            </div>

            {/* Bento Grid Section */}

            <div className="flex flex-col gap-4">
                {/* Stepper bar */}
                <div className="rounded-2xl px-6 py-4" style={glass}>
                    <div className="flex items-center">
                        {steps.map((step, i) => {
                            const Icon = step.icon
                            const isActive = i === activeStep
                            const isDone = i < activeStep
                            return (
                            <React.Fragment key={step.number}>
                                <button
                                onClick={() => {
                                    setActiveStep(i);
                                    setPaused(true);
                                }}
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

                {/* Main Content row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    
                    {/* Active Step Details - wide */}
                    <div className="md:col-span-2 rounded-2xl p-7 flex flex-col gap-5 transition-all duration-500" style={glassStrong}>
                        {/* Step Number + icon */}
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
                            <div className="">
                                <span className="text-xs font-semibold tracking-widest"
                                    style={{color: active.accent, fontFamily: 'monospace'}}
                                >
                                    STEP {active.number}
                                </span>
                                <h3 className="text-xl font-semibold text-white leading-snug mt-0.5s">
                                    {active.title}
                                </h3>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
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

                        {/* Progress Dots */}
                        <div className="flex items-center gap-2 mt-auto pt-2">
                            {steps.map((s, i) => (
                                <button
                                    key={s.number}
                                    onClick={() => {
                                        setActiveStep(i);
                                        setPaused(true);
                                    }}
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

                    {/* Summary List */}
                    <div className="md:col-span-1 rounded-2xl p-5 flex flex-col gap-2"
                        style={glass}
                    >   
                        <p className="text-xs font-semibold tracking-widest uppercase mb-2"
                            style={{color: 'rgba(255,255,255,0.35)'}}
                        >
                            All Steps
                        </p>
                        {steps.map((step, i) => {
                            const Icon = step.icon
                            const isActive = i === activeStep
                            return (
                            <button
                                key={step.number}
                                onClick={() => {
                                    setActiveStep(i);
                                    setPaused(true);
                                }}
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

                {/* Bottom mini cards - one per step */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                    {steps.map((step, i) => {
                        const Icon = step.icon
                        const isActive = i === activeStep
                        return (
                            <button
                            key={step.number}
                            onClick={() => {
                                    setActiveStep(i);
                                    setPaused(true);
                            }}
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