const StepFlow = () => {
    const cardBase = {
    background: "rgba(255,255,255,0.09)",
    border: "1px solid rgba(255,255,255,0.16)",
    backdropFilter: "blur(12px)",
    borderRadius: 20,
    padding: "28px 28px",
    display: "flex",
    flexDirection: "column",
    gap: 14,
  };
 
  return (
    <div className="w-full px-4 md:px-6 py-16 md:py-24" id="assess">
      <div className="max-w-5xl mx-auto">
 
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "rgba(255,255,255,0.45)" }}>
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight font-light">
            From Assessment<br />to Full Protection
          </h2>
        </div>
 
        {/* ── Bento grid ────────────────────────────────────────── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "auto auto",
          gap: 14,
        }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
 
          {/* ── 01 Site Assessment — tall left card ── */}
          <div style={{ ...cardBase, gridColumn: "1", gridRow: "1 / 3", justifyContent: "space-between" }}
            className="hover:-translate-y-1 transition-transform duration-300">
            <div>
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl font-bold" style={{ color: "rgba(255,255,255,0.12)", fontFamily: "monospace", lineHeight: 1 }}>01</span>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.12)", color: "white" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Site Assessment</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
                Our engineers visit your facility to map every entry point, identify vulnerabilities, and understand your exact security requirements before any work begins.
              </p>
            </div>
            {/* Visual detail at bottom */}
            <div className="mt-4 rounded-xl p-4" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div className="flex flex-col gap-2">
                {["Entry point mapping", "Vulnerability audit", "Requirements brief"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "rgba(255,255,255,0.4)" }} />
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
 
          {/* ── 02 Custom System Design — wide top right ── */}
          <div style={{ ...cardBase, gridColumn: "2 / 4", gridRow: "1", flexDirection: "row", alignItems: "flex-start", gap: 20 }}
            className="hover:-translate-y-1 transition-transform duration-300">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl font-bold" style={{ color: "rgba(255,255,255,0.12)", fontFamily: "monospace", lineHeight: 1 }}>02</span>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(255,255,255,0.12)", color: "white" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <path d="M3 9h18M9 21V9"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Custom System Design</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
                We produce a tailored access control blueprint — hardware selection, software stack, credential types, and zone logic — all built specifically around your site.
              </p>
            </div>
            {/* Tag pills */}
            <div className="flex flex-col gap-2 shrink-0 mt-1">
              {["Hardware plan", "Zone logic", "Credentials"].map((tag, i) => (
                <span key={i} className="text-xs px-3 py-1.5 rounded-full whitespace-nowrap"
                  style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.75)" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
 
          {/* ── 03 Installation — bottom middle ── */}
          <div style={{ ...cardBase, gridColumn: "2", gridRow: "2" }}
            className="hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-start justify-between">
              <span className="text-4xl font-bold" style={{ color: "rgba(255,255,255,0.12)", fontFamily: "monospace", lineHeight: 1 }}>03</span>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.12)", color: "white" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white">Installation</h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
              Certified technicians deploy readers, controllers, and cabling with minimal disruption to your day-to-day operations.
            </p>
          </div>
 
          {/* ── 04 + 05 stacked in right column ── */}
          <div style={{ gridColumn: "3", gridRow: "2", display: "flex", flexDirection: "column", gap: 14 }}>
 
            {/* 04 Config & Testing */}
            <div style={{ ...cardBase, padding: "22px 24px", flex: 1 }}
              className="hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold" style={{ color: "rgba(255,255,255,0.12)", fontFamily: "monospace", lineHeight: 1 }}>04</span>
                  <h3 className="text-base font-semibold text-white mt-1">Configuration &amp; Testing</h3>
                </div>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(255,255,255,0.12)", color: "white" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 11 12 14 22 4"/>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                  </svg>
                </div>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.58)" }}>
                Every access point configured and tested against your security policy before go-live.
              </p>
            </div>
 
            {/* 05 Ongoing Support */}
            <div style={{ ...cardBase, padding: "22px 24px", flex: 1, background: "rgba(255,255,255,0.13)", border: "1px solid rgba(255,255,255,0.22)" }}
              className="hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold" style={{ color: "rgba(255,255,255,0.15)", fontFamily: "monospace", lineHeight: 1 }}>05</span>
                  <h3 className="text-base font-semibold text-white mt-1">Ongoing Support</h3>
                </div>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(255,255,255,0.15)", color: "white" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
                    <line x1="6" y1="1" x2="6" y2="4"/>
                    <line x1="10" y1="1" x2="10" y2="4"/>
                    <line x1="14" y1="1" x2="14" y2="4"/>
                  </svg>
                </div>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                24/7 monitoring, firmware updates, and a dedicated support team long after install.
              </p>
              {/* Live indicator */}
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 rounded-full" style={{ background: "#4ade80", boxShadow: "0 0 6px rgba(74,222,128,0.7)" }} />
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>24 / 7 / 365 active</span>
              </div>
            </div>
 
          </div>
 
        </div>
 
        {/* CTA strip */}
        <div className="mt-4 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
          <div>
            <p className="text-sm font-semibold text-white">Ready to get started?</p>
            <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>
              Book a free site assessment — no obligation.
            </p>
          </div>
          <button
            className="shrink-0 text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "white" }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.25)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Book Assessment →
          </button>
        </div>
 
      </div>
    </div>
  );
}
export default StepFlow;