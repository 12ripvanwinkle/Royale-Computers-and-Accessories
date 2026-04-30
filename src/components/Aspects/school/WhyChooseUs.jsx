import React, { useState } from 'react'
import { glass, glassHover, innerSurface, glassStrong } from '../CCTV-Holder/CCTVStyles'
import {
  GraduationCap,
  MousePointerClick,
  TrendingUp,
  HeadphonesIcon,
  CheckCircle2,
  Star,
  Users,
  Building2,
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

// ── Star rating display ───────────────────────────────────────────────────
function StarRating({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} fill="#fbbf24" style={{ color: "#fbbf24" }} />
      ))}
    </div>
  );
}

// ── Testimonial pill ──────────────────────────────────────────────────────
function Testimonial({ quote, name, role }) {
  return (
    <div
      className="rounded-xl p-3"
      style={innerSurface}
    >
      <StarRating />
      <p className="text-xs leading-relaxed mt-2 mb-2" style={{ color: "rgba(255,255,255,0.65)" }}>
        "{quote}"
      </p>
      <div>
        <span className="text-xs font-semibold text-white">{name}</span>
        <span className="text-xs ml-1" style={{ color: "rgba(255,255,255,0.4)" }}>· {role}</span>
      </div>
    </div>
  );
}

const WhyChooseUs = () => {

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
                    The Difference 
                </p>
                <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
                    Why Choose Us
                </h2>
                <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
                    style={{color: "rgba(255,255,255,0.55)"}}
                >
                    We built this platform specifically for schools — not adapted from
                    a generic tool. That focus shows in everything from the interface
                    to the support your staff receives.
                </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Row 1 */}

                {/* Education Focused - narrow */}
                <div className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
                    style={cs("edu")}
                    {...hp("edu")}
                >
                  <div className="flex items-start justify-between mb-1">
                    <CardLabel icon={GraduationCap} label="EDUCATION-FOCUSED" accent="#93c5fd" />
                  </div>
                  <Chip color="#93c5fd">Built for schools</Chip>

                  <h3 className="text-base font-semibold text-white mt-4 mb-2">
                    Designed From the Inside Out 
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{color: "rgba(255,255,255,0.6)" }}>
                    Every feature, workflow, and data field was designed around how
                    schools actually run — not bolted onto a generic platform.
                  </p>

                  <div className="mt-auto">
                    <FeatureRow>School-native data structures</FeatureRow>
                    <FeatureRow>Education-specific workflows</FeatureRow>
                    <FeatureRow>Curriculum & exam-aware</FeatureRow>
                    <FeatureRow>Safeguarding built in</FeatureRow>
                  </div>
                </div>

                {/* Easy To use UI - Wide */}
                <div className="md:col-span-2 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
                  style={cs("ui")}
                  {...hp("ui")}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <CardLabel icon={MousePointerClick} label="EASY-TO-USE INTERFACE" accent="#a78bfa" />
                    <Chip color="#a78bfa">No training required*</Chip>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">
                    Built for People, Not Just Admins
                  </h3>
                  <p className="text-sm leading-relaxed mb-5" style={{color: "rgba(255,255,255,0.6)"}}>
                    Whether it's a teacher marking a register on their phone or a
                    parent checking their child's grades — the interface is clean,
                    obvious, and fast. No manuals. No guesswork. No frustration.
                  </p>

                  {/* Role Experience */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-px mb-5 overflow-hidden"
                    style={innerSurface}
                  >
                    {[
                      { role: "Admin",   sub: "Full control, no complexity",  accent: "#a78bfa" },
                      { role: "Teacher", sub: "Fast registers & grade entry",  accent: "#5eead4" },
                      { role: "Parent",  sub: "Clear, calm, always readable",  accent: "#93c5fd" },
                    ].map(({ role, sub, accent }) => (
                      <div key={role} className="p-3">
                        <div className="text-xs font-semibold mb-0.5" style={{ color: accent }}>{role}</div>
                        <div className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.5)" }}>{sub}</div>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs mb-4" style={{color: "rgba(255,255,255,0.35)"}}>
                    *We still offer training — it's just rarely needed after day two.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-auto">
                    <StatBox value="< 1 day" label="Avg. staff adoption" />
                    <StatBox value="4.9 / 5" label="Ease-of-use rating" />
                  </div>
                </div>

                {/* Scalable - Narrow */}
                <div className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
                  style={cs("scale")}
                  {...hp("scale")}
                >

                  <div className="flex items-start justify-between mb-1">
                    <CardLabel icon={TrendingUp} label="SCALABLE FOR GROWTH" accent="#4ade80" />
                  </div>
                  <Chip color="#4ade80">Grows with you</Chip>

                  <h3 className="text-base font-semibold text-white mt-4 mb-2">
                    From 80 Students to 8,000
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{color: "rgba(255,255,255,0.6)"}}>
                    Whether you're a single-campus school or a multi-site institution,
                    the platform scales without re-implementation or price shocks.
                  </p>

                  <div className="mb-4 mt-auto">
                    <FeatureRow>Single & multi-campus support</FeatureRow>
                    <FeatureRow>Unlimited student records</FeatureRow>
                    <FeatureRow>Per-module activation</FeatureRow>
                    <FeatureRow>No re-setup as you grow</FeatureRow>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <StatBox value="80–8k+" label="Students supported" />
                    <StatBox value="Multi-site" label="Campus ready" />
                  </div>
                </div>
              
              {/* Row 2 */}
              {/* Testimonials */}

              <div className="md:col-span-2 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
                style={cs("testimonials")}
                {...hp("testimonials")}
              >
                <p className="text-xs font-semibold tracking-widest uppercase mb-4"
                  style={{color: "rgba(255,255,255,0.45)"}}
                >
                  What Schools Say 
                </p>

                <div className="flex flex-col gap-3">
                    <Testimonial
                      quote="The attendance module alone saved our admin team two hours every morning. Everything just works."
                      name="Sandra M."
                      role="Head of Admin, Greenfield Academy"
                    />
                    <Testimonial
                      quote="Parents actually use the portal — that was our biggest surprise. The app is genuinely easy."
                      name="Mr. Osei"
                      role="Principal, Lakeside Primary"
                    />
                    <Testimonial
                      quote="We moved from spreadsheets to this in under a week. The migration team was excellent."
                      name="Yvonne K."
                      role="IT Coordinator, Meridian High"
                    />
                </div>
              </div>

              {/* Support & Training - Narrow */}
              <div className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
                style={cs("support")}
                {...hp("support")}
              >
                <div className="flex items-start justify-between mb-1">
                  <CardLabel icon={HeadphonesIcon} label="SUPPORT & TRAINING" accent="#fbbf24" />
                </div>
                <Chip color="#fbbf24">Always-on</Chip>

                <h3 className="text-base font-semibold text-white mt-4 mb-2">
                  Never Left on Your Own 
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{color: "rgba(255,255,255,0.6)"}}>
                  A dedicated support team that knows your school's setup —
                  not a generic helpdesk reading from a script.
                </p>

                <div className="mb-4">
                  <FeatureRow>Dedicated account support</FeatureRow>
                  <FeatureRow>Role-based training sessions</FeatureRow>
                  <FeatureRow>Recorded help library</FeatureRow>
                  <FeatureRow>Regular platform updates</FeatureRow>
                </div>

                <div className="grid grid-cols sm:grid-cols-2 gap-2 mt-auto">
                  <StatBox value="24/7" label="Support access" />
                  <StatBox value="< 4h" label="Response SLA" />
                </div>
              </div>

              {/* Numbers Card - Pure stat card */}
              <div className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col justify-between hover:-translate-y-0.5 transition-transform duration-300"
                style={{...glassStrong}}
              >
                <p className="text-xs font-semibold tracking-widest uppercase mb-4"
                  style={{color: "rgba(255,255,255,0.45)"}}
                >
                  Trusted by Schools
                </p>

                <div className="flex flex-col gap-4 flex-1 justify-center">
                    {[
                      { value: "200+", label: "Schools onboarded",      accent: "#93c5fd" },
                      { value: "98%",  label: "Renewal rate",           accent: "#4ade80" },
                      { value: "4.9",  label: "Average satisfaction",   accent: "#fbbf24" },
                      { value: "50k+", label: "Students on platform",   accent: "#a78bfa" },
                    ].map(({ value, label, accent }) => (
                      <div key={label} className="flex items-center justify-between">
                        <span className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.5)" }}>
                          {label}
                        </span>
                        <span className="text-lg font-semibold leading-none shrink-0 ml-3" style={{ color: accent }}>
                          {value}
                        </span>
                      </div>
                    ))}
                </div>

                <div className="flex items-center gap-2 mt-4 pt-4"
                  style={{borderTop: "1px solid rgba(255,255,255,0.08)"}}
                >
                  <div className="flex -space-x-2">
                    {["#93c5fd", "#a78bfa", "#4ade80", "#fbbf24"].map((color, i) => (
                      <div
                        key={i}
                        className="w-7 h-7 rounded-full flex items-center justify-center border-2"
                        style={{
                          background: `${color}25`,
                          borderColor: "rgba(255,255,255,0.15)",
                        }}
                      >
                        <Users size={10} style={{ color }} />
                      </div>
                    ))}
                  </div>

                  <span className="text-xs leading-snug" style={{color: "rgba(255,255,255,0.45)"}}>
                    Joined by 200+ schools
                  </span>
                </div>
              </div>
            </div>

            {/* Row 3: Full Width CTA Strip */}
            <div className="md:col-span-4 rounded-2xl p-5 mt-3 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 hover:-translate-y-0.5 transition-transform duration-300"
              style={glassStrong}
            >
              {/* Left: Promise list */}
              <div className="flex-1">
                <p className="text-xs font-semibold tracking-widest uppercase mb-3"
                  style={{color: "rgba(255,255,255,0.45)"}}
                >
                  Our Promise to every school
                </p>

                <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {[
                      "Education-first platform",
                      "Intuitive for every role",
                      "Scales as you grow",
                      "Support that knows your school",
                      "Data always yours",
                      "No hidden costs",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-1.5">
                        <CheckCircle2 size={12} style={{ color: "#4ade80", flexShrink: 0 }} />
                        <span className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>{item}</span>
                      </div>
                    ))}
                </div>
              </div>

              {/* Right: CTA */}
              <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                <div className="flex items-center gap-1 mb-1">
                    <StarRating count={5} />
                    <span className="text-xs ml-1" style={{color: "rgba(255,255,255,0.45)"}}>
                      4.9 from 200+ schools
                    </span>
                </div>
                 <button
                  className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
                  style={{
                    background: "rgba(147,197,253,0.18)",
                    border: "1px solid rgba(147,197,253,0.35)",
                    color: "#93c5fd",
                  }}
                >
                  See it in action →
                </button>   
              </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs