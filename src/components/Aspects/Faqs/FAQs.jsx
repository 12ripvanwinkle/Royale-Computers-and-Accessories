import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {glass, glassHover, innerSurface, glassStrong} from '../CCTV-Holder/CCTVStyles'
import {faqs} from './index'

// ── Single accordion item ─────────────────────────────────────────────────
function FAQItem({ question, answer, index, isOpen, onToggle }) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={isOpen ? glassHover : glass}
    >
      {/* Question row */}
      <button
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
        onClick={onToggle}
      >
        <div className="flex items-center gap-3 min-w-0">
          {/* Step number */}
          <span
            className="text-xs font-bold shrink-0 w-6 text-right"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-sm md:text-base font-semibold text-white leading-snug">
            {question}
          </span>
        </div>

        {/* Chevron */}
        <div
          className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300"
          style={{
            background: isOpen ? "rgba(147,197,253,0.18)" : "rgba(255,255,255,0.08)",
            border: isOpen ? "1px solid rgba(147,197,253,0.35)" : "1px solid rgba(255,255,255,0.12)",
            color: isOpen ? "#93c5fd" : "rgba(255,255,255,0.5)",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <ChevronDown size={14} />
        </div>
      </button>

      {/* Answer — animated open/close */}
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? "600px" : "0px" }}
      >
        <div
          className="px-5 md:px-6 pb-5 md:pb-6 pt-0"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p
            className="text-sm leading-relaxed pt-4"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  // Split FAQs into two columns for desktop
  const half = Math.ceil(faqs.length / 2);
  const leftCol  = faqs.slice(0, half);
  const rightCol = faqs.slice(half);

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
            Got Questions?
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p
            className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Everything you need to know before getting started. Can't find
            what you're looking for? Reach out and we'll get back to you.
          </p>
        </div>

        {/* ── Accordion grid
              Mobile:  single column, all items stacked
              Desktop: two columns side by side             ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

          {/* Left column */}
          <div className="flex flex-col gap-4">
            {leftCol.map((faq, i) => (
              <FAQItem
                key={i}
                index={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            {rightCol.map((faq, i) => {
              const globalIndex = half + i;
              return (
                <FAQItem
                  key={globalIndex}
                  index={globalIndex}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === globalIndex}
                  onToggle={() => toggle(globalIndex)}
                />
              );
            })}
          </div>

        </div>

        {/* ── CTA strip ── */}
        <div
          className="rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={glassStrong}
        >
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-1"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Still have questions?
            </p>
            <p className="text-sm font-semibold text-white">
              Our team is happy to walk you through anything.
            </p>
          </div>
          <button
            className="shrink-0 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{
              background: "rgba(147,197,253,0.18)",
              border: "1px solid rgba(147,197,253,0.35)",
              color: "#93c5fd",
            }}
          >
            Get in touch →
          </button>
        </div>

      </div>
    </div>
  );
}