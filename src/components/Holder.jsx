import { useState } from "react";
import {
  ShieldCheck,
  SlidersHorizontal,
  Wrench,
  Activity,
  TrendingUp,
  CheckCircle2,
  Star,
  Users,
} from "lucide-react";

const glass       = { background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.16)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" };
const glassHover  = { background: "rgba(255,255,255,0.13)", border: "1px solid rgba(255,255,255,0.22)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" };
const glassStrong = { background: "rgba(255,255,255,0.11)", border: "1px solid rgba(255,255,255,0.18)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)" };
const inner       = { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12 };

function Chip({ children, color = "#93c5fd" }) {
  return <span className="inline-block text-xs px-2.5 py-1 rounded-full whitespace-nowrap" style={{ background: `${color}18`, border: `1px solid ${color}35`, color }}>{children}</span>;
}

function Row({ children, accent = "#4ade80" }) {
  return (
    <div className="flex items-center gap-2 py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accent }} />
      <span className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.75)" }}>{children}</span>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-xl px-3 py-2.5 text-center w-full" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}>
      <div className="text-base font-semibold text-white leading-tight">{value}</div>
      <div className="text-xs mt-0.5 leading-snug" style={{ color: "rgba(255,255,255,0.45)" }}>{label}</div>
    </div>
  );
}

function Label({ icon: I, label, accent }) {
  return (
    <div className="flex items-center gap-2 mb-3 min-w-0">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${accent}18`, color: accent, border: `1px solid ${accent}30` }}><I size={16} /></div>
      <span className="text-xs font-medium tracking-wide leading-tight" style={{ color: "rgba(255,255,255,0.45)" }}>{label}</span>
    </div>
  );
}

function InnerGrid({ items, cols = 2 }) {
  return (
    <div className={`grid grid-cols-1 ${cols === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"} gap-px mb-5 overflow-hidden`} style={inner}>
      {items.map(({ label, sub }) => (
        <div key={label} className="p-3">
          <div className="text-xs font-semibold text-white mb-0.5">{label}</div>
          <div className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.45)" }}>{sub}</div>
        </div>
      ))}
    </div>
  );
}

function StarRating({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={11} fill="#fbbf24" style={{ color: "#fbbf24" }} />
      ))}
    </div>
  );
}

function Testimonial({ quote, name, role }) {
  return (
    <div className="rounded-xl p-3" style={inner}>
      <StarRating />
      <p className="text-xs leading-relaxed mt-2 mb-2" style={{ color: "rgba(255,255,255,0.62)" }}>"{quote}"</p>
      <div>
        <span className="text-xs font-semibold text-white">{name}</span>
        <span className="text-xs ml-1" style={{ color: "rgba(255,255,255,0.38)" }}>· {role}</span>
      </div>
    </div>
  );
}

export default function WhyChooseUsSection() {
  const [hov, setHov] = useState(null);
  const cs = (id) => (hov === id ? glassHover : glass);
  const hp = (id) => ({ onMouseEnter: () => setHov(id), onMouseLeave: () => setHov(null) });

  return (
    <div className="w-full px-4 md:px-6 py-16 md:py-24" style={{ fontFamily: '"Playfair Display", serif', color: "white" }}>
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>The Difference</p>
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">Why Choose Us</h2>
          <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Power management is critical infrastructure. We bring the expertise, equipment, and long-term commitment that critical systems demand.
          </p>
        </div>

        {/* ══════════════════════════════════════════
            3-col bento, 5 items (odd)
            Row 1: [Expertise col-2]      [Customised col-1]
            Row 2: [Reliable col-1]       [Monitoring col-2]
            Row 3: [Full-width CTA strip col-3] — closes odd count
        ══════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Expertise — col-span-2 */}
          <div className="md:col-span-2 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300" style={cs("exp")} {...hp("exp")}>
            <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
              <Label icon={ShieldCheck} label="EXPERTISE IN CRITICAL POWER SYSTEMS" accent="#93c5fd" />
              <Chip color="#93c5fd">Field-proven</Chip>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Specialists, Not Generalists</h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
              Power management is all we do. Our engineers are certified across UPS, generator, PDU, and BMS systems — with hands-on experience in data centres, healthcare, retail, and industrial facilities where power failure is simply not an option.
            </p>
            <InnerGrid cols={2} items={[
              { label: "Certified engineers",     sub: "Across all major power system categories" },
              { label: "Multi-sector experience", sub: "Data centres, healthcare, retail, industrial" },
              { label: "Standards compliance",    sub: "IEC, ISO 50001, NFPA 110 aligned" },
              { label: "200+ deployments",        sub: "From single-site to multi-site estates" },
            ]} />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-auto">
              <Stat value="200+" label="Systems deployed" />
              <Stat value="15+" label="Years experience" />
              <Stat value="99.9%" label="Post-install uptime" />
            </div>
          </div>

          {/* Customised — col-span-1 */}
          <div className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300" style={cs("cust")} {...hp("cust")}>
            <div className="flex items-start justify-between mb-1"><Label icon={SlidersHorizontal} label="CUSTOMISED ENERGY SOLUTIONS" accent="#a78bfa" /></div>
            <Chip color="#a78bfa">Tailored</Chip>
            <h3 className="text-base font-semibold text-white mt-4 mb-2">No Off-the-Shelf Answers</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
              Every site has a different load profile, layout, and growth plan. We design solutions around your specific requirements — not a product catalogue.
            </p>
            <div className="mt-auto">
              <Row accent="#a78bfa">Site-specific load analysis</Row>
              <Row accent="#a78bfa">Equipment chosen for your needs</Row>
              <Row accent="#a78bfa">Phased rollout options</Row>
              <Row accent="#a78bfa">Budget-aligned design</Row>
            </div>
          </div>

          {/* Reliable — col-span-1 */}
          <div className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300" style={cs("rel")} {...hp("rel")}>
            <div className="flex items-start justify-between mb-1"><Label icon={Wrench} label="RELIABLE EQUIPMENT AND INSTALLATION" accent="#fbbf24" /></div>
            <Chip color="#fbbf24">Tier-1 hardware</Chip>
            <h3 className="text-base font-semibold text-white mt-4 mb-2">Built to Last, Installed to Standard</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
              We source only from proven manufacturers and install to the highest standards — every job is commissioned, tested, and signed off before we leave site.
            </p>
            <div className="mb-4">
              <Row accent="#fbbf24">Tier-1 manufacturer partnerships</Row>
              <Row accent="#fbbf24">Full commissioning and testing</Row>
              <Row accent="#fbbf24">Signed handover documentation</Row>
              <Row accent="#fbbf24">Manufacturer warranty backed</Row>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-auto">
              <Stat value="5yr" label="Avg. equipment warranty" />
              <Stat value="100%" label="Tested before sign-off" />
            </div>
          </div>

          {/* Monitoring + Scalable — col-span-2 */}
          <div className="md:col-span-2 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300" style={cs("mon")} {...hp("mon")}>
            <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
              <Label icon={Activity} label="ONGOING MONITORING, SUPPORT AND SCALABILITY" accent="#4ade80" />
              <Chip color="#4ade80">Long-term</Chip>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">A Partner, Not Just a Contractor</h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
              We stay involved long after installation — monitoring your systems, responding to incidents, and scaling your infrastructure as your business grows. One relationship, every phase of your power journey.
            </p>
            <InnerGrid cols={3} items={[
              { label: "24/7 monitoring",    sub: "Live surveillance across all sites" },
              { label: "Rapid response",     sub: "Under 4-hour SLA on critical issues" },
              { label: "Scalable systems",   sub: "Expand capacity without starting over" },
            ]} />

            {/* Testimonials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              <Testimonial
                quote="They stayed on-site until everything was perfect. The monitoring dashboard has been invaluable ever since."
                name="James O."
                role="Facilities Manager, Nexcore Logistics"
              />
              <Testimonial
                quote="We expanded to three new sites and they scaled our system without any disruption to existing operations."
                name="Linda K."
                role="Head of Operations, MedPoint Clinics"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-auto">
              <Stat value="24/7" label="Remote monitoring" />
              <Stat value="< 4h" label="Response SLA" />
              <Stat value="Unlimited" label="Sites scalable to" />
            </div>
          </div>

          {/* Full-width CTA strip — col-span-3 */}
          <div className="md:col-span-3 rounded-2xl px-5 md:px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4" style={glassStrong}>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <StarRating />
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>4.9 from 200+ clients</span>
              </div>
              <h3 className="text-base font-semibold text-white">Ready to protect your power infrastructure?</h3>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-3 shrink-0">
              <div className="flex flex-wrap gap-3">
                {["Certified engineers", "Free site assessment", "No lock-in contracts"].map(item => (
                  <div key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 size={12} style={{ color: "#4ade80", flexShrink: 0 }} />
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{item}</span>
                  </div>
                ))}
              </div>
              <button
                className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{ background: "rgba(147,197,253,0.18)", border: "1px solid rgba(147,197,253,0.35)", color: "#93c5fd" }}
              >
                Book a free assessment
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}