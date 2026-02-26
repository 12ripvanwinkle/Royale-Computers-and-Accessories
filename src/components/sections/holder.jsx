import { useState, useEffect } from "react";

const services = [
  { icon: "⬡", title: "Cloud Architecture", desc: "Design scalable, resilient cloud infrastructures tailored to your growth trajectory.", accent: "#00FFB2" },
  { icon: "◈", title: "Cybersecurity", desc: "Harden your systems with enterprise-grade threat detection and zero-trust frameworks.", accent: "#00C8FF" },
  { icon: "⬟", title: "Digital Transformation", desc: "Modernize legacy systems and unlock new operational efficiencies across your org.", accent: "#A78BFA" },
  { icon: "◇", title: "IT Strategy", desc: "Align technology roadmaps with business objectives for measurable ROI.", accent: "#F472B6" },
];

const stats = [
  { value: "98%", label: "Client Retention" },
  { value: "500+", label: "Projects Delivered" },
  { value: "12yr", label: "Industry Experience" },
  { value: "40+", label: "Enterprise Clients" },
];

const steps = [
  { number: "01", title: "Discover", desc: "Deep-dive audit of your current infrastructure, pain points, and business goals. We listen before we prescribe.", accent: "#00FFB2" },
  { number: "02", title: "Architect", desc: "We design a bespoke technology blueprint — fully documented, risk-assessed, and aligned with your budget.", accent: "#00C8FF" },
  { number: "03", title: "Execute", desc: "Hands-on implementation by certified engineers. Agile delivery with weekly milestones and zero ambiguity.", accent: "#A78BFA" },
  { number: "04", title: "Evolve", desc: "Post-deployment monitoring, optimization cycles, and strategic reviews to keep you ahead of the curve.", accent: "#F472B6" },
];

const techStack = ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "Zero Trust", "DevSecOps", "SOC 2"];

export default function App() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontFamily: "'Syne', sans-serif", background: "#080A0F", color: "#E8EAF0", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --green: #00FFB2; --blue: #00C8FF; --purple: #A78BFA; --pink: #F472B6;
          --bg: #080A0F; --surface: #0D1117; --surface2: #111820;
          --border: rgba(255,255,255,0.07); --muted: #6B7280;
        }
        html { scroll-behavior: smooth; }
        body { background: var(--bg); }

        .grid-bg {
          background-image:
            linear-gradient(rgba(0,255,178,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,178,0.025) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        .page-section { padding: 100px 24px; max-width: 1160px; margin: 0 auto; }
        .section-divider { border: none; border-top: 1px solid var(--border); margin: 0; }

        .label-chip {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 5px 14px; border-radius: 100px;
          font-size: 11px; font-family: 'JetBrains Mono', monospace;
          font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase;
          background: rgba(0,255,178,0.08); color: var(--green);
          border: 1px solid rgba(0,255,178,0.18); margin-bottom: 18px;
        }

        .glow-text {
          background: linear-gradient(135deg, #00FFB2 0%, #00C8FF 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        .card {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 18px; padding: 28px; position: relative;
          overflow: hidden; transition: border-color 0.3s, transform 0.25s;
        }
        .card::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(circle at 0% 0%, rgba(0,255,178,0.03) 0%, transparent 65%);
          pointer-events: none;
        }
        .card:hover { border-color: rgba(0,255,178,0.2); transform: translateY(-3px); }

        .step-card {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 18px; padding: 32px 28px; position: relative;
          overflow: hidden; cursor: pointer; transition: all 0.35s ease; flex: 1;
        }
        .step-card.active { background: var(--surface2); }

        .stat-num {
          font-size: 44px; font-weight: 800; letter-spacing: -0.03em; line-height: 1;
          background: linear-gradient(135deg, #fff 20%, #9CA3AF 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        .tech-pill {
          padding: 8px 18px; border-radius: 8px;
          font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 500;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
          color: #9CA3AF; transition: all 0.25s;
        }
        .tech-pill:hover { background: rgba(0,255,178,0.08); border-color: rgba(0,255,178,0.25); color: var(--green); }

        .btn { padding: 14px 30px; border-radius: 10px; font-family: 'Syne', sans-serif; font-weight: 700; font-size: 14px; letter-spacing: 0.02em; cursor: pointer; border: none; transition: all 0.3s; }
        .btn-primary { background: linear-gradient(135deg, #00FFB2, #00C8FF); color: #080A0F; }
        .btn-primary:hover { box-shadow: 0 0 32px rgba(0,255,178,0.35); transform: translateY(-2px); }
        .btn-outline { background: transparent; color: var(--green); border: 1px solid rgba(0,255,178,0.35) !important; }
        .btn-outline:hover { background: rgba(0,255,178,0.07); }

        .pulse { width: 8px; height: 8px; background: var(--green); border-radius: 50%; animation: pulse-anim 2s infinite; }
        @keyframes pulse-anim {
          0%   { box-shadow: 0 0 0 0 rgba(0,255,178,0.5); }
          70%  { box-shadow: 0 0 0 8px rgba(0,255,178,0); }
          100% { box-shadow: 0 0 0 0 rgba(0,255,178,0); }
        }

        .scanline { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(0,255,178,0.5), transparent); animation: scanmove 5s linear infinite; }
        @keyframes scanmove { from { top: 0%; } to { top: 100%; } }

        .step-circle {
          width: 40px; height: 40px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700;
          transition: all 0.4s; cursor: pointer; flex-shrink: 0;
        }

        nav a { text-decoration: none; color: var(--muted); font-weight: 600; font-size: 13px; transition: color 0.2s; }
        nav a:hover { color: #E8EAF0; }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "18px 40px", display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(8,10,15,0.9)", backdropFilter: "blur(24px)", borderBottom: "1px solid var(--border)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, background: "linear-gradient(135deg, #00FFB2, #00C8FF)", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>⬡</div>
          <span style={{ fontWeight: 800, fontSize: 17, letterSpacing: "-0.02em" }}>NEXUS<span className="glow-text">IT</span></span>
        </div>
        <div style={{ display: "flex", gap: 36 }}>
          {["Services", "Process", "About", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
        </div>
        <button className="btn btn-primary" style={{ padding: "10px 22px", fontSize: 13 }}>Book a Call</button>
      </nav>

      <div className="grid-bg">

        {/* ════════════════════════════════
            § 1  HERO
        ════════════════════════════════ */}
        <div className="page-section" style={{ paddingTop: 160, paddingBottom: 100 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
            <div className="pulse" />
            <span style={{ fontFamily: "'JetBrains Mono'", fontSize: 11, color: "var(--green)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Available for Engagements</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 60, alignItems: "end", marginBottom: 56 }}>
            <div>
              <h1 style={{ fontSize: "clamp(48px, 6vw, 76px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.0, marginBottom: 36 }}>
                Technology<br /><span className="glow-text">Intelligence</span><br />For Enterprise
              </h1>
              <div style={{ display: "flex", gap: 12 }}>
                <button className="btn btn-primary">Start Your Journey</button>
                <button className="btn btn-outline" style={{ border: "1px solid" }}>View Case Studies</button>
              </div>
            </div>
            <p style={{ color: "var(--muted)", fontSize: 17, lineHeight: 1.8 }}>
              We don't just advise — we engineer the future of your IT infrastructure. From cloud migration to cybersecurity, your transformation starts here.
            </p>
          </div>

          {/* 4-col stat bento */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
            {stats.map((s, i) => (
              <div key={i} className="card">
                <div className="stat-num">{s.value}</div>
                <div style={{ color: "var(--muted)", fontSize: 13, marginTop: 8, fontFamily: "'JetBrains Mono'", letterSpacing: "0.04em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <hr className="section-divider" />

        {/* ════════════════════════════════
            § 2  SERVICES
        ════════════════════════════════ */}
        <div id="services" className="page-section">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 40 }}>
            <div>
              <div className="label-chip">What We Do</div>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, letterSpacing: "-0.03em" }}>Core Services</h2>
              <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.75, maxWidth: 480, marginTop: 10 }}>
                Comprehensive IT consulting across the entire technology lifecycle — from strategy through execution.
              </p>
            </div>
            <span style={{ color: "var(--green)", fontSize: 13, fontFamily: "'JetBrains Mono'", cursor: "pointer", paddingBottom: 4, flexShrink: 0 }}>View all services →</span>
          </div>

          {/* 2×2 bento */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {services.map((s, i) => (
              <div key={i} className="card" style={{ cursor: "pointer", padding: "36px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 24 }}>
                  <div style={{ fontSize: 32, color: s.accent, opacity: 0.9 }}>{s.icon}</div>
                  <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono'", color: "var(--muted)", letterSpacing: "0.06em" }}>0{i + 1}</span>
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 20, marginBottom: 12 }}>{s.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.8 }}>{s.desc}</p>
                <div style={{ marginTop: 28, display: "flex", alignItems: "center", gap: 6, color: s.accent, fontSize: 12, fontFamily: "'JetBrains Mono'" }}>
                  Learn more <span>→</span>
                </div>
              </div>
            ))}
          </div>

          {/* Tech stack strip */}
          <div className="card" style={{ marginTop: 14, padding: "24px 32px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "'JetBrains Mono'", fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", flexShrink: 0 }}>Tech Stack</span>
              <div style={{ width: 1, height: 20, background: "var(--border)", flexShrink: 0 }} />
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {techStack.map(t => <div key={t} className="tech-pill">{t}</div>)}
              </div>
            </div>
          </div>
        </div>

        <hr className="section-divider" />

        {/* ════════════════════════════════
            § 3  CONSULTING MODEL
        ════════════════════════════════ */}
        <div id="process" className="page-section">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="label-chip" style={{ margin: "0 auto 18px" }}>Our Process</div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 14 }}>
              The <span className="glow-text">4-Step</span> Consulting Model
            </h2>
            <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.75, maxWidth: 480, margin: "0 auto" }}>
              A battle-tested framework that has driven transformation across 500+ engagements worldwide.
            </p>
          </div>

          {/* Stepper */}
          <div style={{ display: "flex", alignItems: "center", padding: "0 20px", marginBottom: 32 }}>
            {steps.map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", flex: i < 3 ? 1 : 0 }}>
                <div
                  className="step-circle"
                  onClick={() => setActiveStep(i)}
                  style={{
                    border: `2px solid ${i <= activeStep ? s.accent : "var(--border)"}`,
                    color: i <= activeStep ? s.accent : "var(--muted)",
                    background: i === activeStep ? `${s.accent}18` : "transparent",
                    boxShadow: i === activeStep ? `0 0 22px ${s.accent}35` : "none",
                  }}
                >{s.number}</div>
                {i < 3 && (
                  <div style={{ flex: 1, height: 1, background: i < activeStep ? steps[i].accent : "var(--border)", transition: "background 0.4s", margin: "0 4px" }} />
                )}
              </div>
            ))}
          </div>

          {/* Step cards */}
          <div style={{ display: "flex", gap: 14 }}>
            {steps.map((s, i) => (
              <div
                key={i}
                className={`step-card ${i === activeStep ? "active" : ""}`}
                onClick={() => setActiveStep(i)}
                style={{ borderColor: i === activeStep ? `${s.accent}38` : "var(--border)" }}
              >
                <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono'", fontWeight: 700, letterSpacing: "0.1em", color: s.accent, marginBottom: 14, opacity: i === activeStep ? 1 : 0.4, transition: "opacity 0.3s" }}>
                  STEP {s.number}
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 14, color: i === activeStep ? "#E8EAF0" : "var(--muted)", transition: "color 0.3s" }}>
                  {s.title}
                </h3>
                <p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.8 }}>{s.desc}</p>
                {i === activeStep && (
                  <div style={{ marginTop: 24, width: "100%", height: 2, background: `linear-gradient(90deg, ${s.accent}, transparent)`, borderRadius: 2 }} />
                )}
              </div>
            ))}
          </div>
        </div>

        <hr className="section-divider" />

        {/* ════════════════════════════════
            § 4  TESTIMONIALS
        ════════════════════════════════ */}
        <div id="about" className="page-section">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="label-chip" style={{ margin: "0 auto 18px" }}>Trusted By Leaders</div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, letterSpacing: "-0.03em" }}>What Our Clients Say</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
            {[
              { quote: "NexusIT transformed our cloud infrastructure in 6 weeks. ROI was visible within the first quarter.", name: "Sarah Chen", role: "CTO · Meridian Financial", color: "linear-gradient(135deg, #A78BFA, #F472B6)" },
              { quote: "Their cybersecurity overhaul gave us confidence we never had before. Thorough, fast, and deeply knowledgeable.", name: "James Okafor", role: "VP Engineering · Volta Systems", color: "linear-gradient(135deg, #00FFB2, #00C8FF)" },
              { quote: "The 4-step model is genuinely different. Structured enough to feel safe, flexible enough to actually work.", name: "Priya Nair", role: "COO · Archway Logistics", color: "linear-gradient(135deg, #F472B6, #00C8FF)" },
            ].map((t, i) => (
              <div key={i} className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "36px" }}>
                <div>
                  <div style={{ fontSize: 40, color: "var(--green)", opacity: 0.3, marginBottom: 10, lineHeight: 1 }}>"</div>
                  <p style={{ color: "#9CA3AF", fontSize: 15, lineHeight: 1.85, fontStyle: "italic" }}>{t.quote}</p>
                </div>
                <div style={{ marginTop: 28, paddingTop: 20, borderTop: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 38, height: 38, borderRadius: "50%", background: t.color, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>{t.name}</div>
                    <div style={{ color: "var(--muted)", fontSize: 12, fontFamily: "'JetBrains Mono'", marginTop: 2 }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="section-divider" />

        {/* ════════════════════════════════
            § 5  CTA + CONTACT
        ════════════════════════════════ */}
        <div id="contact" className="page-section" style={{ paddingBottom: 120 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 14, alignItems: "stretch" }}>

            <div className="card" style={{ padding: "56px 52px", background: "linear-gradient(135deg, #0D1117, #0A111C)", position: "relative" }}>
              <div className="scanline" />
              <div className="label-chip" style={{ marginBottom: 24 }}>Get Started</div>
              <h2 style={{ fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 18 }}>
                Ready to <span className="glow-text">Transform</span><br />Your IT?
              </h2>
              <p style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.8, maxWidth: 400, marginBottom: 40 }}>
                Book a complimentary 30-minute strategy session with a senior consultant. No commitments, just clarity.
              </p>
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <button className="btn btn-primary">Schedule Free Session</button>
                <span style={{ color: "var(--muted)", fontSize: 12, fontFamily: "'JetBrains Mono'" }}>No obligation</span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div className="card" style={{ flex: 1 }}>
                <div style={{ fontFamily: "'JetBrains Mono'", fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 20 }}>Contact</div>
                {[
                  { label: "Email", value: "hello@nexusit.co" },
                  { label: "Response time", value: "< 4 hours" },
                  { label: "Coverage", value: "Global" },
                ].map((item, i, arr) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "13px 0", borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none" }}>
                    <span style={{ color: "var(--muted)", fontSize: 13 }}>{item.label}</span>
                    <span style={{ fontSize: 14, fontWeight: 600 }}>{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="card" style={{ flex: 1 }}>
                <div style={{ fontFamily: "'JetBrains Mono'", fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>Certifications</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {["ISO 27001", "SOC 2 Type II", "AWS Partner", "CISSP"].map(c => (
                    <div key={c} className="tech-pill">{c}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ borderTop: "1px solid var(--border)", padding: "28px 40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 28, height: 28, background: "linear-gradient(135deg, #00FFB2, #00C8FF)", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>⬡</div>
          <span style={{ color: "var(--muted)", fontSize: 13, fontFamily: "'JetBrains Mono'" }}>© 2025 NexusIT Consulting</span>
        </div>
        <div style={{ display: "flex", gap: 28 }}>
          {["Privacy", "Terms", "Careers"].map(item => (
            <span key={item} style={{ color: "var(--muted)", fontSize: 13, cursor: "pointer", transition: "color 0.2s", fontFamily: "'JetBrains Mono'" }}
              onMouseEnter={e => e.target.style.color = "#00FFB2"}
              onMouseLeave={e => e.target.style.color = "var(--muted)"}
            >{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}