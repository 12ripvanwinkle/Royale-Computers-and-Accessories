import React, { useEffect, useState } from 'react'
import { Zap, Scale, BatteryCharging, Wifi, ShieldCheck, Activity, ArrowRight } from "lucide-react";
import { glass, glassHover } from "../CCTV-Holder/CCTVStyles";
import {Pill, IconBox, EnergyBar, PhaseBar} from './Components'

const Features = () => {

  const[hover, setHovered] = useState(null);
  const cs  = (id) => (hover === id ? glassHover : glass);
  const hp  = (id) => ({ onMouseEnter: () => setHovered(id), onMouseLeave: () => setHovered(null) });

  const [phases, setPhases] = useState([68, 71, 64]);
  useEffect(() => {
    const iv = setInterval(() => {
      setPhases([
        Math.floor(Math.random() * 20) + 60,
        Math.floor(Math.random() * 20) + 60,
        Math.floor(Math.random() * 20) + 58,
      ]);
    }, 1200);
    return () => clearInterval(iv);
  }, [])

  const phaseColors = ["#93c5fd", "#a78bfa", "#5eead4"];

  return (
    <section id="features" className="w-full px-4 sm:px-6 md:px-10 lg:px-14 py-14 sm:py-20 md:py-24"
      style={{color: "white"}}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">

          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{color: "rgba(255,255,255,0.35)", letterSpacing: "0.22em"}}
          >
            Built-In Intelligence
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
            style={{letterSpacing: "-0.03em", lineHeight: 1.05}}
          >
            Everything in One Platform
          </h2>
          <p className="text-sm sm:text-base font-light max-w-lg mx-auto leading-relaxed"
            style={{color: "rgba(255,255,255,0.5)"}}
          >
            Monitor, protect, and optimise your electrical infrastructure — from a single circuit to a thousand sites.
          </p>

        </div>

        {/* Bento Grid */}
        <div className="grid grid-colss-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

          {/* Card 1:  Energy Monitoring */}
          <div className="sm:col-span-2 md:col-span-2 rounded-2xl p-5 sm:p-6 flex flex-col gap-4 transition-transform duration-300 hover:-translate-y-0.5"
            style={cs("e")} {...hp("e")}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <IconBox icon={Zap} color="#4ade80" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em" }}>Real-Time</p>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-tight">Energy Monitoring</h3>
                </div>
              </div>
              <Pill color="#4ade80">Live</Pill>
            </div>

            <p className="text-sm font-light leading-relaxed" style={{color: "rgba(255,255,255,0.55)"}}>
              Per-circuit kWh tracking with spike detection that fires <em>before</em> damage occurs — not after.
            </p>

            {/* 3 quick stats inline */}
            <div className="flex items-center gap-4 flex-wrap">
              {[["±0.5%", "Accuracy"], ["1s", "Update interval"], ["8+", "Circuits"]].map(([val, lbl]) => (
                <div key={lbl}>
                  <div className="text-base font-bold text-white">{val}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{lbl}</div>
                </div>
              ))}
            </div>

            <EnergyBar />
          </div>

          {/* Card 2: Load Balancing */}
          <div className="sm:col-span-2 md:col-span-2 rounded-2xl p-5 sm:p-6 flex flex-col gap-4 transition-transform duration-300 hover:-translate-y-0.5"
            style={cs("l")} {...hp("l")}
          >

            <div className="flex items-start justify-between gap-2">

              <div className="flex items-center gap-2 5">
                <IconBox icon={Scale} color="#93c5fd" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em" }}>Smart</p>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-tight">Load Balancing</h3>
                </div>
              </div>
              <Pill color="#93c5fd">3-Phase</Pill>

            </div>

            <p className="text-sm font-light leading-relaxed" style={{color: "rgba(255,255,255,0.55)"}}>
              Demand is continuously redistributed across phases — preventing bottlenecks and extending equipment life without manual intervention.
            </p>

            {/* Live Phase Bars */}
            <div className="rounded-xl p-3 flex flex-col gap-3 mt-auto"
              style={{background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)"}}
            >

              <div className="flex items-center justify-between">
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>3-phase-monitor</span>
                <Pill color="#93c5fd">Balanced</Pill>
              </div>
              {["Phase A", "Phase B", "Phase C"].map((lbl, i) => (
                <PhaseBar key={lbl} label={lbl} value={phases[i]} color={phaseColors[i]} />
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs" style={{color: "rgba(255,255,255,0.35)"}}>
              <Activity size={12} style={{ color: "#93c5fd" }} />
              Auto-redistributes in &lt; 200ms
            </div>

          </div>

          {/* Card 3: Backup Power */}
          <div className="sm:col-span-1 md:col-span-1 rounded-2xl p-5 sm:p-6 flex flex-col transition-transform duration-300 hover:-translate-y-0.5"
            style={cs("b")} {...hp("b")}
          > 

            <div className="flex items-center gap-2 5">
              <IconBox icon={BatteryCharging} color="#5eead4" />
              <div>
                <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em" }}>UPS & Gen</p>
                <h3 className="text-base font-bold text-white leading-tight">Backup Power</h3>
              </div>
            </div>

            <p className="text-sm font-light leading-relaxed" style={{color: "rgba(255,255,255,0.55)"}}>
              Automatic failover in under 20ms. Runtime estimates update live so you always know how long you have.
            </p>

            <div className="flex flex-col gap-2 mt-auto">
              {[
                "Failover < 20ms",
                "Live runtime estimates",
                "Generator integration",
                "Battery health alerts",
              ].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#5eead4" }} />
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{item}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Card 4: Remote Monitoring */}
          <div className="sm:col-span-2 md:col-span-2 rounded-2xl p-5 sm:p-6 flex flex-col duration-300 gap-3 transition-transform hover:-translate-y-0.5"
            style={cs("r")} {...hp("r")}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <IconBox icon={Wifi} color="#a78bfa" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em" }}>Multi-site</p>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-tight">Remote Control</h3>
                </div>
              </div>
              <Pill color="#a78bfa">Unlimited Sites</Pill>
            </div>

            <p className="text-sm font-light leading-relaxed" style={{color: "rgba(255,255,255,0.55)"}}>
              Manage every location from one cloud dashboard. View live status, push config changes, and respond to incidents — without stepping on site.
            </p>

            {/* 2-col mini stats */}
            <div className="grid grid-cols-2 gap-3 mt-auto">
              {[["Unlimited", "Sites supported"], ["99.9%", "Dashboard uptime"]].map(([val, lbl]) => (
                <div
                  key={lbl}
                  className="rounded-xl p-3 text-center"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="text-lg font-bold text-white">{val}</div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.38)" }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 5: Surge Protection */}
          <div className="sm:col-span-1 md:col-span-1 rounded-2xl p-5 sm:p-6 flex flex-col duration-300 gap-3 transition-transform hover:-translate-y-0.5"
            style={cs("s")} {...hp("s")}
          >

            <div className="flex items-center gap-2 5">

              <IconBox icon={ShieldCheck} color="#f87171" />
              <div>
                <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em" }}>TVSS</p>
                <h3 className="text-base font-bold text-white leading-tight">Surge Protection</h3>
              </div>

            </div>
            
            <p className="text-sm font-light leading-relaxed" style={{color: "rgba(255,255,255,0.55)"}}>
              Multi-stage suppressors guard every device. Every blocked surge is logged with timestamp and severity.
            </p>

            <div className="flex flex-col gap-2 mt-auto">
              {[
                "Multi-stage TVSS",
                "±1% voltage regulation",
                "Full event history",
                "Equipment warranty cover",
              ].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#f87171" }} />
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{item}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-4 rounded-2xl px-5 sm:px-8 py-5 sm:py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{
            background: "rgba(255,117,31,0.07)",
            border: "1px solid rgba(255,117,31,0.2)",
          }}
        >
          
          <div>
            <p className="text-sm sm:text-base font-semibold text-white">Need the full technical specs?</p>
            <p className="text-xs sm:text-sm font-light mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>
              Modbus · BACnet · SNMP · ISO 50001 · 24-month data retention
            </p>
          </div>

          <button className="shrink-0 flex items-center gap-2 text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200"
            style={{
              background: "#ff751f",
              color: "white",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#ff8c3f";
              e.currentTarget.style.boxShadow = "0 6px 24px rgba(255,117,31,0.4)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "#ff751f";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}  
          >
            Request a Datasheet <ArrowRight size={14} strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </section>
  )
}

export default Features