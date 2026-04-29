import { useState } from "react";
import {
  ClipboardList,
  Settings2,
  DatabaseZap,
  Users2,
  Rocket,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

// ── Glass styles ──────────────────────────────────────────────────────────
const glass = {
  background: "rgba(255,255,255,0.09)",
  border: "1px solid rgba(255,255,255,0.16)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
};

const glassHover = {
  background: "rgba(255,255,255,0.13)",
  border: "1px solid rgba(255,255,255,0.22)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
};

const glassStrong = {
  background: "rgba(255,255,255,0.11)",
  border: "1px solid rgba(255,255,255,0.18)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
};

const innerSurface = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 12,
};

// ── Micro components ──────────────────────────────────────────────────────
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
      <div className="text-xs mt-0.5 leading-snug" style={{ color: "rgba(255,255,255,0.45)" }}>{label}</div>
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

// ── Section ───────────────────────────────────────────────────────────────
export default function HowItWorksSection() {
  const [hovered, setHovered] = useState(null);

  const cs = (id) => (hovered === id ? glassHover : glass);
  const hp = (id) => ({
    onMouseEnter: () => setHovered(id),
    onMouseLeave: () => setHovered(null),
  });

  return (
    <div
      className="w-full px-4 md:px-6 py-16 md:py-24"
      style={{
        fontFamily: '"Playfair Display", serif',
        color: "white",
      }}
    >
      <div className="max-w-5xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            The Process
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
            How It Works
          </h2>
          <p
            className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Six structured steps that take your school from first conversation
            to a fully live, supported platform — with nothing left to chance.
          </p>
        </div>

        {/* ══════════════════════════════════════════
            BENTO GRID — 6 items + extras (even, GridX-inspired)

            Row 1: [Step 01 hero — col-span-2]         [Step 02 narrow — col-span-1]
            Row 2: [Stats strip — col-span-1]          [Step 03 — col-span-1]          [Step 04 — col-span-1]
            Row 3: [Step 05 — col-span-1]              [Step 06 wide — col-span-2]
            Row 4: [Full-width CTA timeline — col-span-3]
        ══════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* ══ ROW 1 ══════════════════════════════════════════════════════ */}

          {/* ── STEP 01: Requirements — wide content card (col-span-2) ── */}
          <div
            className="md:col-span-2 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
            style={cs("s1")}
            {...hp("s1")}
          >
            <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
              <CardLabel icon={ClipboardList} label="STEP 01 — REQUIREMENTS ANALYSIS" accent="#93c5fd" />
              <Chip color="#93c5fd">Discovery</Chip>
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">
              Understanding Your School
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
              We start by listening. Our team works directly with your admin and
              leadership to map your school's structure, workflows, pain points,
              and goals — before a single setting is touched.
            </p>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-px mb-5 overflow-hidden"
              style={innerSurface}
            >
              {[
                { label: "School profile",   sub: "Size, structure & year groups" },
                { label: "Workflow review",  sub: "How your admin currently operates" },
                { label: "Pain points",      sub: "What's not working today" },
                { label: "Success criteria", sub: "What good looks like at go-live" },
              ].map(({ label, sub }) => (
                <div key={label} className="p-3">
                  <div className="text-xs font-semibold text-white mb-0.5">{label}</div>
                  <div className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.45)" }}>{sub}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-auto">
              <StatBox value="1–2 days" label="Workshop duration" />
              <StatBox value="100%" label="Requirements documented" />
            </div>
          </div>

          {/* ── STEP 02: Setup — narrow feature card (col-span-1) ── */}
          <div
            className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
            style={cs("s2")}
            {...hp("s2")}
          >
            <div className="flex items-start justify-between mb-1">
              <CardLabel icon={Settings2} label="STEP 02 — SETUP & CUSTOMISATION" accent="#a78bfa" />
            </div>
            <Chip color="#a78bfa">Configuration</Chip>

            <h3 className="text-base font-semibold text-white mt-4 mb-2">
              Built Around You
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
              Using your requirements as the blueprint, we configure modules,
              roles, calendar, grading schemes, and templates to match your
              school from day one.
            </p>

            <div className="mt-auto">
              <FeatureRow>Module activation & configuration</FeatureRow>
              <FeatureRow>User roles & permission setup</FeatureRow>
              <FeatureRow>Academic calendar & term structure</FeatureRow>
              <FeatureRow>Custom grading & report templates</FeatureRow>
            </div>
          </div>

          {/* ══ ROW 2 ══════════════════════════════════════════════════════ */}

          {/* ── STATS CARD — pure numbers, GridX-style (col-span-1) ── */}
          <div
            className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col justify-between hover:-translate-y-0.5 transition-transform duration-300"
            style={{ ...glassStrong }}
          >
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              By the numbers
            </p>

            <div className="flex flex-col gap-4 flex-1 justify-center">
              {[
                { value: "3–6",    unit: "weeks",   label: "Avg. implementation", accent: "#93c5fd" },
                { value: "< 5",    unit: "days",    label: "System setup time",   accent: "#a78bfa" },
                { value: "100%",   unit: "",        label: "Data verified pre-launch", accent: "#4ade80" },
                { value: "24 / 7", unit: "",        label: "Post-launch support", accent: "#fbbf24" },
              ].map(({ value, unit, label, accent }) => (
                <div key={label} className="flex items-end justify-between">
                  <span className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {label}
                  </span>
                  <div className="flex items-baseline gap-1 shrink-0 ml-3">
                    <span className="text-lg font-semibold text-white leading-none">{value}</span>
                    {unit && (
                      <span className="text-xs" style={{ color: accent }}>{unit}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── STEP 03: Data Import — narrow feature card (col-span-1) ── */}
          <div
            className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
            style={cs("s3")}
            {...hp("s3")}
          >
            <div className="flex items-start justify-between mb-1">
              <CardLabel icon={DatabaseZap} label="STEP 03 — DATA IMPORT" accent="#5eead4" />
            </div>
            <Chip color="#5eead4">Migration</Chip>

            <h3 className="text-base font-semibold text-white mt-4 mb-2">
              Your Records, Moved Safely
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
              Existing student records, history, and fee data cleaned, mapped,
              and imported — everything verified before anything goes live.
            </p>

            <div className="mt-auto">
              <FeatureRow>CSV, Excel & legacy imports</FeatureRow>
              <FeatureRow>Data cleaning & deduplication</FeatureRow>
              <FeatureRow>Pre-import audit report</FeatureRow>
              <FeatureRow>Rollback safety net</FeatureRow>
            </div>
          </div>

          {/* ── STEP 04: Staff Training — narrow feature card (col-span-1) ── */}
          <div
            className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
            style={cs("s4")}
            {...hp("s4")}
          >
            <div className="flex items-start justify-between mb-1">
              <CardLabel icon={Users2} label="STEP 04 — STAFF TRAINING" accent="#4ade80" />
            </div>
            <Chip color="#4ade80">Onboarding</Chip>

            <h3 className="text-base font-semibold text-white mt-4 mb-2">
              Confident Before Day One
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
              Role-specific sessions for admins, teachers, and office staff —
              each focused only on what they'll actually use.
            </p>

            <div className="mt-auto">
              <FeatureRow>Role-segmented training tracks</FeatureRow>
              <FeatureRow>Live walkthrough & Q&A</FeatureRow>
              <FeatureRow>Recorded sessions for future hires</FeatureRow>
              <FeatureRow>Quick-reference guides</FeatureRow>
            </div>
          </div>

          {/* ══ ROW 3 ══════════════════════════════════════════════════════ */}

          {/* ── STEP 05: Go-live — narrow (col-span-1) ── */}
          <div
            className="md:col-span-1 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
            style={cs("s5")}
            {...hp("s5")}
          >
            <div className="flex items-start justify-between mb-1">
              <CardLabel icon={Rocket} label="STEP 05 — GO-LIVE" accent="#fbbf24" />
            </div>
            <Chip color="#fbbf24">Launch day</Chip>

            <h3 className="text-base font-semibold text-white mt-4 mb-2">
              We're There on Launch Day
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
              Go-live isn't left to chance. Our team is present — remote or
              on-site — monitoring the platform in real time as your school
              switches over.
            </p>

            <div className="mt-auto">
              <FeatureRow>Supervised go-live session</FeatureRow>
              <FeatureRow>Real-time issue monitoring</FeatureRow>
              <FeatureRow>Staff on-call support</FeatureRow>
              <FeatureRow>Go-live sign-off checklist</FeatureRow>
            </div>
          </div>

          {/* ── STEP 06: Ongoing Support — wide content card (col-span-2) ── */}
          <div
            className="md:col-span-2 rounded-2xl p-5 md:p-6 flex flex-col hover:-translate-y-0.5 transition-transform duration-300"
            style={cs("s6")}
            {...hp("s6")}
          >
            <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
              <CardLabel icon={ShieldCheck} label="STEP 06 — ONGOING SUPPORT" accent="#f87171" />
              <Chip color="#f87171">Post-launch</Chip>
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">
              We Stay After the Switch
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
              Implementation doesn't end at launch. A dedicated support channel,
              regular platform updates, and a 30-day review ensure your school
              isn't left to figure things out alone — and that the platform
              keeps improving as your needs evolve.
            </p>

            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-px mb-5 overflow-hidden"
              style={innerSurface}
            >
              {[
                { label: "Post-launch channel", sub: "Dedicated line for issues & changes" },
                { label: "Platform updates",    sub: "Fixes & new features included" },
                { label: "30-day review",       sub: "Formal check-in & optimisation" },
              ].map(({ label, sub }) => (
                <div key={label} className="p-3">
                  <div className="text-xs font-semibold text-white mb-0.5">{label}</div>
                  <div className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.45)" }}>{sub}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-auto">
              <StatBox value="24/7" label="Support access" />
              <StatBox value="< 4h" label="Response SLA" />
              <StatBox value="30 days" label="Post-launch review" />
            </div>
          </div>

          {/* ══ ROW 4: Full-width CTA + timeline ══════════════════════════ */}
          <div
            className="md:col-span-3 rounded-2xl p-5 md:p-6 hover:-translate-y-0.5 transition-transform duration-300"
            style={glassStrong}
          >
            {/* Strip header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-1"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  The full journey
                </p>
                <h3 className="text-base font-semibold text-white">
                  Discovery Call to Fully Live — Typically 3–6 Weeks
                </h3>
              </div>
              <button
                className="shrink-0 self-start sm:self-auto flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{
                  background: "rgba(147,197,253,0.18)",
                  border: "1px solid rgba(147,197,253,0.35)",
                  color: "#93c5fd",
                }}
              >
                Start your journey <ArrowRight size={12} />
              </button>
            </div>

            {/* ── DESKTOP timeline ── */}
            <div className="hidden md:grid md:grid-cols-6 gap-0 mb-6">
              {[
                { n: "01", title: "Requirements", sub: "Discovery",      accent: "#93c5fd" },
                { n: "02", title: "Setup",         sub: "Configure",     accent: "#a78bfa" },
                { n: "03", title: "Data import",   sub: "Migrate",       accent: "#5eead4" },
                { n: "04", title: "Training",      sub: "Onboard",       accent: "#4ade80" },
                { n: "05", title: "Go-live",       sub: "Launch",        accent: "#fbbf24" },
                { n: "06", title: "Support",       sub: "Post-launch",   accent: "#f87171" },
              ].map(({ n, title, sub, accent }, i, arr) => (
                <div key={n} className="flex flex-col items-center">
                  <div className="flex items-center w-full">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-xs font-bold"
                      style={{ background: `${accent}20`, border: `2px solid ${accent}55`, color: accent }}
                    >
                      {n}
                    </div>
                    {i < arr.length - 1 && (
                      <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
                    )}
                  </div>
                  <div className="text-center mt-3 px-1 w-full">
                    <div className="text-xs font-semibold text-white leading-tight">{title}</div>
                    <div className="text-xs mt-0.5 leading-snug" style={{ color: "rgba(255,255,255,0.45)" }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* ── MOBILE timeline: vertical stack ── */}
            <div className="flex flex-col md:hidden gap-0 mb-6">
              {[
                { n: "01", title: "Requirements", sub: "Discovery",      accent: "#93c5fd" },
                { n: "02", title: "Setup",         sub: "Configure",     accent: "#a78bfa" },
                { n: "03", title: "Data import",   sub: "Migrate",       accent: "#5eead4" },
                { n: "04", title: "Training",      sub: "Onboard",       accent: "#4ade80" },
                { n: "05", title: "Go-live",       sub: "Launch",        accent: "#fbbf24" },
                { n: "06", title: "Support",       sub: "Post-launch",   accent: "#f87171" },
              ].map(({ n, title, sub, accent }, i, arr) => (
                <div key={n} className="flex items-stretch gap-3">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold"
                      style={{ background: `${accent}20`, border: `2px solid ${accent}55`, color: accent }}
                    >
                      {n}
                    </div>
                    {i < arr.length - 1 && (
                      <div className="flex-1 w-px my-1" style={{ background: "rgba(255,255,255,0.1)", minHeight: 20 }} />
                    )}
                  </div>
                  <div className={`flex flex-col justify-start ${i < arr.length - 1 ? "pb-4" : ""}`}>
                    <div className="text-xs font-semibold text-white leading-tight pt-1.5">{title}</div>
                    <div className="text-xs mt-0.5 leading-snug" style={{ color: "rgba(255,255,255,0.45)" }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Checklist row */}
            <div
              className="flex flex-wrap gap-x-5 gap-y-2 pt-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              {[
                "Dedicated implementation manager",
                "Weekly progress updates",
                "Go-live sign-off checklist",
                "30-day post-launch review",
                "No disruption to school operations",
              ].map((item) => (
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