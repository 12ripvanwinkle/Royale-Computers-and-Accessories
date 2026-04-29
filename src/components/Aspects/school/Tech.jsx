import React, { useState } from 'react'
import { glass, glassHover, innerSurface, glassStrong } from '../CCTV-Holder/CCTVStyles'
import {
  Cloud,
  Smartphone,
  CreditCard,
  Bell,
  Lock,
  Wifi,
  Server,
  Globe,
} from "lucide-react";

function Chip({ children, color = "#93c5fd" }) {
  return (
    <span
      className="inline-block text-xs px-2.5 py-1 rounded-full whitespace-nowrap"
      style={{ background: `${color}18`, border: `1px solid ${color}35`, color }}
    >
      {children}
    </span>
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

function StatBox({ value, label }) {
  return (
    <div
      className="rounded-xl px-3 py-2.5 text-center w-full"
      style={{
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="text-base font-semibold text-white leading-tight">{value}</div>
      <div className="text-xs mt-0.5 leading-snug" style={{ color: "rgba(255,255,255,0.45)" }}>
        {label}
      </div>
    </div>
  );
}

function CardLabel({ icon: IconComp, label, accent }) {
  return (
    <div className="flex items-center gap-2 mb-3 min-w-0">
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
        style={{ background: `${accent}18`, color: accent, border: `1px solid ${accent}30` }}
      >
        <IconComp size={16} />
      </div>
      <span
        className="text-xs font-medium tracking-wide leading-tight"
        style={{ color: "rgba(255,255,255,0.45)" }}
      >
        {label}
      </span>
    </div>
  );
}

function IconBubble({icon: IconComp, accent, label}){
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{
                    background: `${accent}15`,
                    border: `1px solid ${accent}30`,
                    color: accent,
                }}
            >
                <IconComp size={20} />
            </div>
            <span className="text-xs text-center leading-tight" style={{ color: "rgba(255,255,255,0.5)" }}>
                {label}
            </span>
        </div>
    )
}

const Tech = () => {

  const [hovered, setHovered] = useState(null);

  const cs = (id) => (hovered === id ? glassHover : glass);
  const hp = (id) => ({
    onMouseEnter: () => setHovered(id),
    onMouseLeave: () => setHovered(null),
  });

  return (
    <div className="w-full px-4 md:px-6 py-16 md:py-24"
        style={{
           fontFamily: '"Playfair Display", serif',
            color: "white", 
        }}
    >
        <div className="max-w-5xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-12">
                <p className="text-xs font-semibold tracking-widest uppercase mb-4"
                    style={{color: "rgba(255,255,255,0.45)"}}
                >
                    Under the Hood 
                </p>
                <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
                    Technology & Integration 
                </h2>
                <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
                    style={{color: "rgba(255,255,255,0.55)"}}
                >
                    School-grade infrastructure — not a repurposed CRM. Every technical
                    layer is chosen and configured specifically for how educational
                    institutions operate, communicate, and protect their data.
                </p>
            </div>

            {/* Bento Grid */}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Row 1 */}

                {/* Cloud Platform */}
                <div className="md:col-span-2 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
                    style={cs("cloud")}
                    {...hp("cloud")}
                >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                        <CardLabel icon={Cloud} label="CLOUD-BASED SCHOOL PLATFORM" accent="#93c5fd" />
                        <Chip color="#93c5fd">Always-on</Chip>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2">
                        No Servers. No IT Headaches.
                    </h3>
                    <p className="text-sm leading-relaxed mb-5" style={{color: "rgba(255,255,255,0.6)"}}>
                        The entire platform lives in the cloud — meaning zero on-site
                        hardware to maintain, automatic updates, and access from any
                        device, anywhere. Your IT team doesn't need to touch it.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-px mb-5 overflow-hidden"
                        style={innerSurface}
                    >
                        {[
                            { label: "Auto updates",      sub: "Platform improves without downtime" },
                            { label: "Multi-device",      sub: "Works on desktop, tablet, phone" },
                            { label: "99.9% uptime SLA",  sub: "Guaranteed availability" },
                            { label: "Zero IT overhead",  sub: "No on-site server management" },
                        ].map(({ label, sub }) => (
                            <div key={label} className="p-3">
                            <div className="text-xs font-semibold text-white mb-0.5">{label}</div>
                            <div className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.45)" }}>{sub}</div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-auto">
                        <StatBox value="99.9%" label="Uptime SLA" />
                        <StatBox value="256-bit" label="Encryption" />
                        <StatBox value="Auto" label="Backups" />
                    </div>
                </div>

                {/* Mobile Apps */}
                <div className="md:col-span-2 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
                    style={cs("mobile")}
                    {...hp("mobile")}
                >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                        <CardLabel icon={Smartphone} label="MOBILE APPS" accent="#a78bfa" />
                        <Chip color="#a78bfa">iOS & Android</Chip>
                    </div>

                    <h3 className="text-xl font-semibold teXt-white mb-2">
                        School in Every Pocket
                    </h3>

                    <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
                      Dedicated apps for parents and teachers — not a shrunken desktop
                      view. Parents check grades and attendance, get notified instantly,
                      and message teachers directly. Teachers mark registers and review
                      class performance on the go.
                    </p>

                    {/* Two-Column Role Split */}
                    <div className="grid grid-cols-2 gap-3 mb-5">
                        {[
                          {
                            role: "Parents",
                            accent: "#a78bfa",
                            items: ["Grades & attendance", "Fee balances", "School notices", "Direct messaging"],
                          },
                          {
                            role: "Teachers",
                            accent: "#5eead4",
                            items: ["Digital register", "Class performance", "Homework tracking", "Parent messaging"],
                          },
                        ].map(({ role, accent, items }) => (
                          <div key={role} className="rounded-xl p-3" style={innerSurface}>
                            <div
                              className="text-xs font-semibold mb-2"
                              style={{ color: accent }}
                            >
                              {role}
                            </div>
                            {items.map((item) => (
                              <div key={item} className="flex items-center gap-1.5 py-1"
                                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                                <div className="w-1 h-1 rounded-full shrink-0" style={{ background: accent }} />
                                <span className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.65)" }}>{item}</span>
                              </div>
                            ))}
                          </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-auto">
                        <StatBox value="iOS & Android" label="Native apps" />
                        <StatBox value="Real-time" label="Push notifications" />
                    </div>
                </div>

                {/* Row 2 */}
                {/* Secure Data - Tall */}
                <div className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
                  style={cs("security")}
                  {...hp("security")}
                > 
                  <div className="flex items-start justify-between mb-1">
                    <CardLabel icon={Lock} label="SECURE STUDENT DATA" accent="#f87171" />
                  </div>
                  <Chip color="#f87171">GDPR-ready</Chip>

                  <h3 className="text-base font-semibold text-white mt-4 mb-2">
                      Student Data you Can Trust 
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{color: "rgba(255,255,255,0.6)"}}>
                      Student records are protected by end-to-end encryption, strict
                      role-based access, and full audit trails — compliant with data
                      protection regulations from day one.
                  </p>

                  <div className="mt-auto">
                    <FeatureRow>End-to-end 256-bit encryption</FeatureRow>
                    <FeatureRow>Role-scoped data access</FeatureRow>
                    <FeatureRow>Full access audit trail</FeatureRow>
                    <FeatureRow>GDPR & data retention policies</FeatureRow>
                    <FeatureRow>Regular security audits</FeatureRow>
                  </div>
                </div>

                {/* Payment Gateways - wide */}
                <div className="md:col-span-2 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
                  style={cs("payments")}
                  {...hp("payments")}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                      <CardLabel icon={CreditCard} label="PAYMENT GATEWAY INTEGRATION" accent="#4ade80" />
                      <Chip color="#4ade80">Multi-gateway</Chip>
                  </div>

                  <h3 className="text-base font-semibold text-white mb-2">
                      Fees Collected. Automatically. 
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{color: "rgba(255,255,255,0.6)"}}>
                      Connect your preferred payment provider directly to the fee
                      management module. Parents pay online, receipts generate
                      instantly, and your accounts team sees everything in real time.
                  </p>

                  {/* Payment Gateway - logos/pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                      {["Stripe", "PayPal", "Square", "Flutterwave", "Paystack", "Bank transfer"].map((gw) => (
                        <span
                          key={gw}
                          className="text-xs px-3 py-1.5 rounded-full"
                          style={{
                            background: "rgba(74,222,128,0.08)",
                            border: "1px solid rgba(74,222,128,0.2)",
                            color: "rgba(255,255,255,0.65)",
                          }}
                        >
                          {gw}
                        </span>
                      ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-auto">
                      <StatBox value="6+" label="Supported gateways" />
                      <StatBox value="Auto" label="Receipt generation" />
                      <StatBox value="Real-time" label="Payment tracking" />
                  </div>
                </div>

                {/* Notifications - Narrow */}
                <div className="md:col-span-1"
                  style={cs("notif")}
                  {...hp("notif")}
                >
                  <div className="flex items-start justify-between mb-1">
                    <CardLabel icon={Bell} label="SMS & EMAIL NOTIFICATIONS" accent="#fbbf24" />
                  </div>
                  <Chip color="#fbbf24">Automated</Chip>

                  <h3 className="text-base font-semibold text-white mt-4 mb-2">
                    The Right Message, Right Channel
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{color: "rgba(255,255,255,0.6)"}}>
                    Attendance alerts, fee reminders, school notices, and exam
                    results delivered automatically by SMS and email —
                    no manual sending required.
                  </p>

                  <div className="mt-auto">
                    <FeatureRow>Absence & late alerts to parents</FeatureRow>
                    <FeatureRow>Overdue fee reminders</FeatureRow>
                    <FeatureRow>School-wide announcements</FeatureRow>
                    <FeatureRow>Exam & result notifications</FeatureRow>
                  </div>
                </div>

                {/* Row 3: Full-width tech stack strip */}
                <div className="md:col-span-4 rounded-2xl p-5 md:p-6 hover:-translate-y-0.5 transition-transform duration-300"
                  style={glassStrong}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                      <div>
                        <p className="text-xs font-semibold tracking-widest uppercase mb-1"
                          style={{ color: "rgba(255,255,255,0.45)" }}
                        >
                          Built for schools, not adapted for them
                        </p>
                        <h3 className="text-base font-semibold text-white">
                          The Full Technology Stack 
                        </h3>
                      </div>
                      <button className="shrink-0 self-start sm:self-auto px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
                        style={{
                          background: "rgba(147,197,253,0.18)",
                          border: "1px solid rgba(147,197,253,0.35)",
                          color: "#93c5fd",
                        }}
                      >
                        Request a tech overview →
                      </button>
                  </div>
                  {/* Icon grid — 4-col on sm+, 2-col on mobile */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    <IconBubble icon={Cloud}      accent="#93c5fd" label="Cloud hosting" />
                    <IconBubble icon={Smartphone} accent="#a78bfa" label="Mobile apps" />
                    <IconBubble icon={CreditCard} accent="#4ade80" label="Payment APIs" />
                    <IconBubble icon={Bell}       accent="#fbbf24" label="SMS & email" />
                    <IconBubble icon={Lock}       accent="#f87171" label="Encryption" />
                    <IconBubble icon={Server}     accent="#5eead4" label="Auto backups" />
                    <IconBubble icon={Globe}      accent="#93c5fd" label="API-ready" />
                    <IconBubble icon={Wifi}       accent="#a78bfa" label="Real-time sync" />
                  </div>

                  {/* Bottom distinction strip */}
                  <div
                    className="flex flex-wrap gap-x-6 gap-y-2 pt-4"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    {[
                      "No on-site servers required",
                      "Zero-downtime deployments",
                      "Open API for third-party tools",
                      "GDPR & data compliance built-in",
                      "School-owned data — always",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#4ade80" }} />
                        <span className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tech