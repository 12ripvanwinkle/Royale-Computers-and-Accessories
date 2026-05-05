import { useState } from "react";
import { Zap, Scale, BatteryCharging, BarChart3, Bell, Wifi, ShieldCheck, Leaf, Activity, CheckCircle2 } from "lucide-react";
import { glass, glassHover, glassStrong, innerSurface } from "../CCTV-Holder/CCTVStyles";
import { Chip, FeatureRow, StatBox, CardLabel, EnergyBar, LoadBalance, Alert, UPS } from "./Components";

function InnerGrid({ items }) {
  const cols = items.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2";
  return (
    <div
      className={`grid grid-cols-1 ${cols} gap-px mb-5 overflow-hidden`}
      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12 }}
    >
      {items.map(({ label, sub }) => (
        <div key={label} className="p-3">
          <div className="text-xs font-semibold text-white mb-0.5">{label}</div>
          <div className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.45)" }}>{sub}</div>
        </div>
      ))}
    </div>
  );
}

export default function KeyFeaturesSection() {
  const [hov, setHov] = useState(null);
  const cs  = (id) => (hov === id ? glassHover : glass);
  const hp  = (id) => ({ onMouseEnter: () => setHov(id), onMouseLeave: () => setHov(null) });

  return (
    <div
      className="w-full px-4 md:px-6 py-16 md:py-24"
      style={{ fontFamily: '"Playfair Display", serif', color: "white" }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>
            Built-In Intelligence
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">Key Features</h2>
          <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Every tool you need to monitor, protect, and optimise your electrical infrastructure — from a single circuit to a multi-site operation.
          </p>
        </div>

        {/*
          4-col bento grid
          Row 1: [Energy col-2]          [Load col-2]
          Row 2: [Backup col-1] [Analytics col-1] [Alerts col-2]
          Row 3: [Remote col-2] [Surge col-1]     [Efficiency col-1]
          Row 4: [Strip col-4]
        */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          {/* ── Energy Monitoring ── col-span-2 */}
          <div
            className="md:col-span-2 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
            style={cs("e")} {...hp("e")}
          >
            <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
              <CardLabel icon={Zap} label="REAL-TIME ENERGY MONITORING" accent="#4ade80" />
              <Chip color="#4ade80">Live</Chip>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Every Circuit. Every Second.</h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
              Second-by-second power draw tracked across every circuit, zone, and device. Spike detection fires before damage occurs — not after.
            </p>
            <InnerGrid items={[
              { label: "Circuit metering",  sub: "Per-circuit kWh tracking"   },
              { label: "Spike detection",   sub: "Fires before damage occurs"  },
              { label: "Trend analysis",    sub: "Historical consumption data" },
              { label: "Zone mapping",      sub: "Floor-level visibility"      },
            ]} />
            <EnergyBar />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3">
              <StatBox value="±0.5%" label="Accuracy" />
              <StatBox value="1s"    label="Update interval" />
              <StatBox value="8+"    label="Circuits tracked" />
            </div>
          </div>

          {/* ── Load Balancing ── col-span-2 */}
          <div
            className="md:col-span-2 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
            style={cs("l")} {...hp("l")}
          >
            <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
              <CardLabel icon={Scale} label="SMART LOAD BALANCING" accent="#93c5fd" />
              <Chip color="#93c5fd">3-Phase</Chip>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No Circuit Left Overloaded</h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
              Intelligent distribution continuously redistributes demand across phases — preventing bottlenecks and extending equipment life without manual intervention.
            </p>
            <InnerGrid items={[
              { label: "3-phase balancing",   sub: "Continuous auto-redistribution" },
              { label: "Overload prevention", sub: "Threshold-based protection"     },
              { label: "Demand forecasting",  sub: "AI-assisted prediction"         },
              { label: "Response time",       sub: "< 200ms reaction"               },
            ]} />
            <LoadBalance />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
              <StatBox value="Auto"    label="Redistribution" />
              <StatBox value="< 200ms" label="Response time"  />
            </div>
          </div>

          {/* ── Backup Power ── col-span-1 */}
          <div
            className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
            style={cs("b")} {...hp("b")}
          >
            <div className="flex items-start justify-between mb-1">
              <CardLabel icon={BatteryCharging} label="BACKUP POWER" accent="#5eead4" />
            </div>
            <Chip color="#5eead4">UPS &amp; Gen</Chip>
            <h3 className="text-base font-semibold text-white mt-4 mb-2">Power That Never Stops</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
              Automatic failover to UPS or generator in under 20ms. Runtime estimates update live so you always know how long you have.
            </p>
            <UPS />
            <div className="mt-auto">
              <FeatureRow accent="#5eead4">Automatic failover &lt; 20ms</FeatureRow>
              <FeatureRow accent="#5eead4">Live runtime estimation</FeatureRow>
              <FeatureRow accent="#5eead4">Generator integration</FeatureRow>
              <FeatureRow accent="#5eead4">Battery health monitoring</FeatureRow>
            </div>
          </div>

          {/* ── Analytics ── col-span-1 */}
          <div
            className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
            style={cs("an")} {...hp("an")}
          >
            <div className="flex items-start justify-between mb-1">
              <CardLabel icon={BarChart3} label="POWER ANALYTICS" accent="#fbbf24" />
            </div>
            <Chip color="#fbbf24">Reporting</Chip>
            <h3 className="text-base font-semibold text-white mt-4 mb-2">Data That Drives Decisions</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
              24-month rolling data with trend charts, cost breakdowns, and exportable reports — built for both engineers and management.
            </p>
            <div className="mt-auto">
              <FeatureRow accent="#fbbf24">24-month data retention</FeatureRow>
              <FeatureRow accent="#fbbf24">Cost breakdown by zone</FeatureRow>
              <FeatureRow accent="#fbbf24">Trend &amp; forecast charts</FeatureRow>
              <FeatureRow accent="#fbbf24">PDF &amp; CSV export</FeatureRow>
            </div>
          </div>

          {/* ── Automated Alerts ── col-span-2 */}
          <div
            className="md:col-span-2 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
            style={cs("al")} {...hp("al")}
          >
            <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
              <CardLabel icon={Bell} label="AUTOMATED ALERTS" accent="#f87171" />
              <Chip color="#f87171">Real-time</Chip>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Know Before It Becomes a Problem</h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
              Threshold-based triggers fire the moment something deviates — voltage spikes, overloads, or failed failovers — delivered by SMS, email, or dashboard before damage occurs.
            </p>
            <InnerGrid items={[
              { label: "Voltage spike alerts", sub: "Fires within 1 second"      },
              { label: "Overload warnings",    sub: "Configurable thresholds"    },
              { label: "Failover notifications",sub: "UPS & generator events"    },
            ]} />
            <Alert />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3">
              <StatBox value="< 1s"       label="Alert latency" />
              <StatBox value="SMS + Email" label="Channels"      />
              <StatBox value="Custom"      label="Thresholds"    />
            </div>
          </div>

          {/* ── Remote Monitoring ── col-span-2 */}
          <div
            className="md:col-span-2 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
            style={cs("r")} {...hp("r")}
          >
            <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
              <CardLabel icon={Wifi} label="REMOTE MONITORING & CONTROL" accent="#a78bfa" />
              <Chip color="#a78bfa">Multi-site</Chip>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">All Sites. One Dashboard.</h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
              Manage every location from a single cloud interface — view live status, push configuration changes, and respond to incidents without stepping on site.
            </p>
            <InnerGrid items={[
              { label: "Live site status", sub: "All locations in one view"  },
              { label: "Remote control",   sub: "Circuit on/off & scheduling"},
              { label: "Incident response",sub: "Act without being on-site"  },
              { label: "Config push",      sub: "Update thresholds remotely" },
            ]} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-auto">
              <StatBox value="Unlimited" label="Sites supported"   />
              <StatBox value="99.9%"     label="Dashboard uptime"  />
            </div>
          </div>

          {/* ── Surge Protection ── col-span-1 */}
          <div
            className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
            style={cs("s")} {...hp("s")}
          >
            <div className="flex items-start justify-between mb-1">
              <CardLabel icon={ShieldCheck} label="SURGE PROTECTION" accent="#f87171" />
            </div>
            <Chip color="#f87171">TVSS</Chip>
            <h3 className="text-base font-semibold text-white mt-4 mb-2">Every Device Protected</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
              Multi-stage transient voltage suppressors guard every connected device. Every blocked event is logged with timestamp and severity.
            </p>
            <div className="mt-auto">
              <FeatureRow accent="#f87171">Multi-stage TVSS</FeatureRow>
              <FeatureRow accent="#f87171">±1% voltage regulation</FeatureRow>
              <FeatureRow accent="#f87171">Event logging &amp; history</FeatureRow>
              <FeatureRow accent="#f87171">Equipment warranty cover</FeatureRow>
            </div>
          </div>

          {/* ── Energy Efficiency ── col-span-1 */}
          <div
            className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
            style={cs("ef")} {...hp("ef")}
          >
            <div className="flex items-start justify-between mb-1">
              <CardLabel icon={Leaf} label="ENERGY EFFICIENCY" accent="#4ade80" />
            </div>
            <Chip color="#4ade80">AI-assisted</Chip>
            <h3 className="text-base font-semibold text-white mt-4 mb-2">Less Waste. Lower Bills.</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
              Continuous analysis identifies idle loads, inefficient scheduling, and waste patterns — with actionable recommendations to cut spend.
            </p>
            <div className="mb-4">
              <FeatureRow accent="#4ade80">Idle load detection</FeatureRow>
              <FeatureRow accent="#4ade80">Schedule optimisation</FeatureRow>
              <FeatureRow accent="#4ade80">PUE benchmarking</FeatureRow>
              <FeatureRow accent="#4ade80">Savings projections</FeatureRow>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-auto">
              <StatBox value="−40%" label="Avg. saving"  />
              <StatBox value="Live"  label="PUE tracking" />
            </div>
          </div>

          {/* ── Full-width spec strip ── col-span-4 */}
          <div className="md:col-span-4 rounded-2xl p-5 md:p-6" style={glassStrong}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Technical specifications
                </p>
                <h3 className="text-base font-semibold text-white">Enterprise-Grade. Field-Proven.</h3>
              </div>
              <button
                className="shrink-0 self-start sm:self-auto flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold hover:opacity-90 active:scale-95 transition-all duration-200"
                style={{ background: "rgba(74,222,128,0.15)", border: "1px solid rgba(74,222,128,0.3)", color: "#4ade80" }}
              >
                <Activity size={12} /> Request a datasheet
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {[
                { label: "Monitoring resolution", value: "1-second intervals",    accent: "#4ade80" },
                { label: "Measurement accuracy",  value: "±0.5% full scale",      accent: "#93c5fd" },
                { label: "Failover speed",        value: "< 20ms automatic",      accent: "#5eead4" },
                { label: "Alert latency",         value: "< 1 second",            accent: "#f87171" },
                { label: "Dashboard uptime",      value: "99.9% SLA",             accent: "#fbbf24" },
                { label: "Data retention",        value: "24 months rolling",     accent: "#a78bfa" },
                { label: "Protocol support",      value: "Modbus, BACnet, SNMP",  accent: "#93c5fd" },
                { label: "Deployment",            value: "Cloud + on-premise",    accent: "#4ade80" },
              ].map(({ label, value, accent }) => (
                <div
                  key={label}
                  className="rounded-xl p-3"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="text-xs leading-snug mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>{label}</div>
                  <div className="text-xs font-semibold leading-snug" style={{ color: accent }}>{value}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              {[
                "No proprietary hardware lock-in",
                "Integrates with existing SCADA systems",
                "Open API for third-party tools",
                "ISO 50001 aligned",
                "GDPR-compliant data handling",
              ].map(item => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} style={{ color: "#4ade80", flexShrink: 0 }} />
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}