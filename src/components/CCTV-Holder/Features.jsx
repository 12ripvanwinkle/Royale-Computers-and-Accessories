import React from 'react'
import { card } from './CCTVStyles'
import { Video, Moon, Bell, Smartphone, Database, Brain, Move, Globe } from 'lucide-react'

function Icon({ children }) {
  return (
    <div
      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 shrink-0"
      style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.9)" }}
    >
      {children}
    </div>
  );
}
 
function Badge({ children }) {
  return (
    <span
      className="inline-block text-xs px-2.5 py-1 rounded-full mr-1.5 mb-1.5"
      style={{
        background: "rgba(255,255,255,0.1)",
        border: "1px solid rgba(255,255,255,0.18)",
        color: "rgba(255,255,255,0.75)",
      }}
    >
      {children}
    </span>
  );
}
 
function StatBox({ value, label }) {
  return (
    <div
      className="flex-1 rounded-xl px-3 py-2.5 text-center"
      style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}
    >
      <div className="text-base font-semibold text-white leading-tight">{value}</div>
      <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>{label}</div>
    </div>
  );
}
 
function FeatureRow({ children }) {
  return (
    <div
      className="flex items-center gap-2 py-2"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#4ade80" }} />
      <span className="text-xs" style={{ color: "rgba(255,255,255,0.78)" }}>{children}</span>
    </div>
  );
}
 
const Features = () => {
  return (
    <div className="w-full px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
 
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Core Capabilities
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight">
            Key Features
          </h2>
        </div>
 
        {/* Bento grid */}
        <div
          className="grid gap-3"
          style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
        >
 
          {/* HD / 4K — wide, spans 2 cols */}
          <div
            className="p-6 flex flex-col sm:flex-row items-start gap-4 col-span-3 md:col-span-2 hover:-translate-y-0.5 transition-transform duration-300"
            style={card}
          >
            <div className="flex-1">
              <Icon><Video size={18} /></Icon>
              <h3 className="text-base font-semibold text-white mb-2">HD / 4K Camera Resolution</h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.6)" }}>
                Crystal-clear footage at up to 4K resolution — every detail captured, day or night, across your entire site.
              </p>
              <div className="flex flex-wrap">
                <Badge>4K Ultra HD</Badge>
                <Badge>H.265 compression</Badge>
                <Badge>Wide dynamic range</Badge>
              </div>
            </div>
            <div className="flex gap-2 shrink-0 sm:self-center w-full sm:w-auto">
              <StatBox value="4K" label="Resolution" />
              <StatBox value="120fps" label="Frame rate" />
            </div>
          </div>
 
          {/* AI Analytics — tall, spans 2 rows */}
          <div
            className="p-6 row-span-2 col-span-3 md:col-span-1 hover:-translate-y-0.5 transition-transform duration-300"
            style={{ ...card, display: "flex", flexDirection: "column" }}
          >
            <Icon><Brain size={18} /></Icon>
            <h3 className="text-base font-semibold text-white mb-2">AI-Powered Analytics</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
              Intelligent motion detection, facial recognition, and behaviour analysis that turns your cameras into proactive security assets.
            </p>
            <div className="flex flex-col mb-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <FeatureRow>Facial Recognition</FeatureRow>
              <FeatureRow>Object &amp; Vehicle detection</FeatureRow>
              <FeatureRow>Loitering &amp; perimeter alerts</FeatureRow>
              <FeatureRow>Smart search by attribute</FeatureRow>
            </div>
            <div
              className="mt-auto rounded-xl px-4 py-3"
              style={{ background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.25)" }}
            >
              <div className="text-xs font-medium mb-1" style={{ color: "rgba(74,222,128,0.9)" }}>Detection accuracy</div>
              <div className="text-2xl font-bold text-white">99.4%</div>
            </div>
          </div>
 
          {/* Night Vision */}
          <div
            className="p-6 col-span-3 sm:col-span-1 hover:-translate-y-0.5 transition-transform duration-300"
            style={card}
          >
            <Icon><Moon size={18} /></Icon>
            <h3 className="text-base font-semibold text-white mb-2">Night Vision</h3>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.6)" }}>
              IR and colour night vision up to 100m — full clarity in complete darkness.
            </p>
            <div className="flex flex-wrap">
              <Badge>IR LEDs</Badge>
              <Badge>Colour night</Badge>
              <Badge>100m range</Badge>
            </div>
          </div>
 
          {/* Motion Detection */}
          <div
            className="p-6 col-span-3 sm:col-span-1 hover:-translate-y-0.5 transition-transform duration-300"
            style={card}
          >
            <Icon><Bell size={18} /></Icon>
            {/* Fixed: was "semi-bold" which is not a valid Tailwind class */}
            <h3 className="text-base font-semibold text-white mb-2">Motion Detection</h3>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.6)" }}>
              Advanced motion detection with customisable zones and sensitivity to minimise false alerts.
            </p>
            <div className="flex flex-wrap">
              <Badge>Zone masking</Badge>
              <Badge>Push alerts</Badge>
              <Badge>Sensitivity control</Badge>
            </div>
          </div>
 
          {/* Remote Viewing — wide */}
          <div
            className="p-6 col-span-3 md:col-span-2 hover:-translate-y-0.5 transition-transform duration-300"
            style={card}
          >
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="flex-1">
                <Icon><Smartphone size={18} /></Icon>
                <h3 className="text-base font-semibold text-white mb-2">Remote Viewing — Mobile &amp; Web</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Watch any camera live or review recordings from your phone, tablet, or browser — from anywhere in the world.
                </p>
              </div>
              <div className="flex gap-2 shrink-0 w-full sm:w-auto sm:self-center">
                <StatBox value="iOS" label="App" />
                <StatBox value="Android" label="App" />
                <StatBox value="Web" label="Browser" />
              </div>
            </div>
          </div>
 
          {/* Storage */}
          <div
            className="p-6 col-span-3 md:col-span-1 hover:-translate-y-0.5 transition-transform duration-300"
            style={card}
          >
            <Icon><Database size={18} /></Icon>
            <h3 className="text-base font-semibold text-white mb-2">Cloud &amp; Local Storage</h3>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.6)" }}>
              Redundant dual-storage — edge NVR on-site plus encrypted cloud archive for off-site redundancy.
            </p>
            <div className="flex gap-2">
              <StatBox value="30d" label="Cloud" />
              <StatBox value="NVR" label="On-site" />
              <StatBox value="AES-256" label="Encrypted" />
            </div>
          </div>
 
          {/* PTZ */}
          <div
            className="p-6 col-span-3 sm:col-span-1 hover:-translate-y-0.5 transition-transform duration-300"
            style={card}
          >
            <Icon><Move size={18} /></Icon>
            <h3 className="text-base font-semibold text-white mb-2">PTZ Control</h3>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.6)" }}>
              Pan, tilt, and zoom any camera remotely — 360° coverage with preset patrol routes and auto-tracking.
            </p>
            <div className="flex flex-wrap">
              <Badge>360° pan</Badge>
              <Badge>Auto-track</Badge>
              <Badge>Patrol routes</Badge>
            </div>
          </div>
 
          {/* Multi-Location — wide */}
          <div
            className="p-6 col-span-3 sm:col-span-2 hover:-translate-y-0.5 transition-transform duration-300"
            style={card}
          >
            <Icon><Globe size={18} /></Icon>
            <h3 className="text-base font-semibold text-white mb-2">Multi-Location Monitoring</h3>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.6)" }}>
              Manage cameras across multiple sites from a single unified dashboard — branches, warehouses, and remote locations all in one view, with role-based access for your team.
            </p>
            <div className="flex flex-wrap">
              <Badge>Unlimited sites</Badge>
              <Badge>Unified dashboard</Badge>
              <Badge>Role-based access</Badge>
              <Badge>Site grouping</Badge>
            </div>
          </div>
 
        </div>
      </div>
    </div>
  );
};
 
export default Features;