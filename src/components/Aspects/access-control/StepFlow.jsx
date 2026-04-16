const StepFlow = () => {
  const steps = [
    {
      num: "01",
      title: "Site Assessment",
      description: "Our engineers visit your facility to map every entry point, identify vulnerabilities, and understand your exact security requirements before any work begins.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
      features: ["Entry point mapping", "Vulnerability audit", "Requirements brief"],
    },
    {
      num: "02",
      title: "Custom System Design",
      description: "We produce a tailored access control blueprint — hardware selection, software stack, credential types, and zone logic — all built specifically around your site.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M3 9h18M9 21V9"/>
        </svg>
      ),
      tags: ["Hardware plan", "Zone logic", "Credentials"],
    },
    {
      num: "03",
      title: "Installation",
      description: "Certified technicians deploy readers, controllers, and cabling with minimal disruption to your day-to-day operations.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
    },
    {
      num: "04",
      title: "Configuration & Testing",
      description: "Every access point configured and tested against your security policy before go-live.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 11 12 14 22 4"/>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
        </svg>
      ),
    },
    {
      num: "05",
      title: "Ongoing Support",
      description: "24/7 monitoring, firmware updates, and a dedicated support team long after install.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
          <line x1="6" y1="1" x2="6" y2="4"/>
          <line x1="10" y1="1" x2="10" y2="4"/>
          <line x1="14" y1="1" x2="14" y2="4"/>
        </svg>
      ),
      highlight: true,
      liveIndicator: true,
      fullWidth: true,
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24" id="assess">
      <div className="max-w-6xl mx-auto">
 
        {/* Section header */}
        <div className="text-center mb-10 md:mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3 md:mb-4"
            style={{ color: "rgba(255,255,255,0.45)" }}>
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight font-light">
            From Assessment<br />to Full Protection
          </h2>
        </div>
 
        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`
                rounded-2xl p-6 md:p-7 lg:p-8
                transition-all duration-300 hover:-translate-y-1
                ${step.highlight 
                  ? 'bg-white/13 border border-white/22' 
                  : 'bg-white/9 border border-white/16'
                }
                ${step.fullWidth ? 'md:col-span-2' : ''}
                backdrop-blur-md
              `}
              style={{
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4 md:mb-5">
                <span 
                  className="text-4xl md:text-5xl font-bold leading-none"
                  style={{ 
                    color: step.highlight ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.12)", 
                    fontFamily: "monospace" 
                  }}
                >
                  {step.num}
                </span>
                <div 
                  className="w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ 
                    background: step.highlight ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.12)", 
                    color: "white" 
                  }}
                >
                  {step.icon}
                </div>
              </div>

              {/* Content - Row layout for full-width cards */}
              <div className={step.fullWidth ? 'md:flex md:items-start md:gap-8' : ''}>
                <div className={step.fullWidth ? 'md:flex-1' : ''}>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p 
                    className="text-sm md:text-base leading-relaxed mb-4"
                    style={{ color: "rgba(255,255,255,0.62)" }}
                  >
                    {step.description}
                  </p>

                  {/* Live Indicator */}
                  {step.liveIndicator && (
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/10 md:border-t-0 md:pt-0">
                      <div 
                        className="w-2 h-2 rounded-full animate-pulse" 
                        style={{ 
                          background: "#4ade80", 
                          boxShadow: "0 0 8px rgba(74,222,128,0.7)" 
                        }} 
                      />
                      <span 
                        className="text-xs md:text-sm font-medium"
                        style={{ color: "rgba(255,255,255,0.6)" }}
                      >
                        24 / 7 / 365 active
                      </span>
                    </div>
                  )}
                </div>

                {/* CTA embedded in step 5 */}
                {step.fullWidth && (
                  <div 
                    className="mt-6 md:mt-0 md:w-80 rounded-xl p-5 md:p-6 flex flex-col justify-center"
                    style={{ 
                      background: "rgba(255,255,255,0.08)", 
                      border: "1px solid rgba(255,255,255,0.15)" 
                    }}
                  >
                    <p className="text-base md:text-lg font-semibold text-white mb-2">
                      Ready to get started?
                    </p>
                    <p 
                      className="text-xs md:text-sm mb-4"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      Book a free site assessment — no obligation.
                    </p>
                    <button
                      className="text-sm md:text-base font-medium px-6 py-3 
                                rounded-full transition-all duration-200 w-full
                                hover:bg-white/30"
                      style={{ 
                        background: "rgba(255,255,255,0.18)", 
                        border: "1px solid rgba(255,255,255,0.35)", 
                        color: "white" 
                      }}
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Book Assessment →
                    </button>
                  </div>
                )}
              </div>

              {/* Features List */}
              {step.features && (
                <div 
                  className="rounded-xl p-4 mt-4"
                  style={{ 
                    background: "rgba(255,255,255,0.06)", 
                    border: "1px solid rgba(255,255,255,0.1)" 
                  }}
                >
                  <div className="flex flex-col gap-2.5">
                    {step.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div 
                          className="w-1.5 h-1.5 rounded-full shrink-0" 
                          style={{ background: "rgba(255,255,255,0.4)" }} 
                        />
                        <span 
                          className="text-xs md:text-sm"
                          style={{ color: "rgba(255,255,255,0.55)" }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              {step.tags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {step.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs md:text-sm px-3 py-1.5 rounded-full whitespace-nowrap"
                      style={{ 
                        background: "rgba(255,255,255,0.1)", 
                        border: "1px solid rgba(255,255,255,0.15)", 
                        color: "rgba(255,255,255,0.75)" 
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default StepFlow;