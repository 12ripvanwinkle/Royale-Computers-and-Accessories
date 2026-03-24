import React, { useState, useEffect, useRef } from "react";
import { card, cardStyle, badge, badgeStyle, heading, sub, subStyle, divider } from "./accessControlStyles";

const RfidCard = () => {
  const [scanning, setScanning]   = useState(0);
  const [cardIndex, setCardIndex] = useState(0);
  const [ripple, setRipple]       = useState(false);
  const cardIndexRef              = useRef(0);
 
  const rfidCards = [
    { name: "HID Seos card",      status: "Active",  ok: true  },
    { name: "MIFARE DESFire",     status: "Active",  ok: true  },
    { name: "Visitor card #4421", status: "Expired", ok: false },
  ];
 
  useEffect(() => {
    let timeouts = [];
    const schedule = (fn, delay) => { const t = setTimeout(fn, delay); timeouts.push(t); return t; };
    const cycle = () => {
      const current = cardIndexRef.current;
      setScanning(1); setRipple(true);
      schedule(() => setRipple(false), 600);
      schedule(() => setScanning(rfidCards[current].ok ? 2 : 3), 900);
      schedule(() => {
        setScanning(0);
        const next = (current + 1) % rfidCards.length;
        cardIndexRef.current = next;
        setCardIndex(next);
        schedule(cycle, 600);
      }, 2300);
    };
    const init = setTimeout(cycle, 400);
    timeouts.push(init);
    return () => timeouts.forEach(clearTimeout);
  }, []);
 
  const iconStroke = scanning === 3 ? "#f87171" : scanning >= 1 ? "#93c5fd" : "rgba(255,255,255,0.4)";
  const iconBg     = scanning === 3 ? "rgba(248,113,113,0.15)" : scanning >= 1 ? "rgba(147,197,253,0.15)" : "rgba(255,255,255,0.06)";
  const iconBorder = scanning === 3 ? "rgba(248,113,113,0.5)"  : scanning >= 1 ? "rgba(147,197,253,0.5)"  : "rgba(255,255,255,0.15)";
 
  return (
    <div className={card} style={cardStyle}>
      <span className={badge} style={badgeStyle}>Keycard / RFID</span>
      <h3 className={heading}>RFID &amp; Keycard Access</h3>
      <p className={sub} style={subStyle}>Tap-to-enter convenience with real-time status feedback.</p>
 
      <div style={divider} className="pt-3">
        {/* Scanner */}
        <div className="relative flex items-center justify-center mb-3" style={{ height: 56 }}>
          {[0,1,2].map(i => (
            <div key={i} className="absolute rounded-full"
              style={{
                width: 28 + i * 18, height: 28 + i * 18,
                border: "1px solid rgba(147,197,253,0.45)",
                opacity: ripple ? 0 : 0.6,
                transform: ripple ? "scale(1.6)" : "scale(1)",
                transition: `opacity ${0.6 + i * 0.12}s ease-out, transform ${0.6 + i * 0.12}s ease-out`,
                transitionDelay: `${i * 80}ms`,
              }}
            />
          ))}
          <div className="relative z-10 w-8 h-6 md:w-10 md:h-7 rounded-md flex items-center justify-center"
            style={{ background: iconBg, border: `1.5px solid ${iconBorder}`, transition: "all 0.3s" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke={iconStroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="5" width="20" height="14" rx="2"/>
              <line x1="2" y1="10" x2="22" y2="10"/>
            </svg>
          </div>
        </div>
 
        {/* Card rows */}
        <div className="flex flex-col gap-1.5">
          {rfidCards.map((c, i) => (
            <div key={c.name} className="flex items-center gap-2 rounded-lg px-2 py-1.5"
              style={{
                background: i === cardIndex && scanning >= 1
                  ? (c.ok ? "rgba(147,197,253,0.12)" : "rgba(248,113,113,0.12)")
                  : "transparent",
                transition: "background 0.4s",
              }}>
              <div className="w-6 h-6 md:w-7 md:h-7 rounded-md flex items-center justify-center shrink-0"
                style={{ background: c.ok ? "rgba(147,197,253,0.15)" : "rgba(248,113,113,0.15)" }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                  stroke={c.ok ? "#93c5fd" : "#f87171"}
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="2"/>
                  <line x1="2" y1="10" x2="22" y2="10"/>
                </svg>
              </div>
              <span className="text-xs flex-1 truncate" style={{ color: "rgba(255,255,255,0.85)" }}>{c.name}</span>
              <span className="text-xs font-medium px-2 py-0.5 rounded-full transition-all duration-300"
                style={{
                  background: i === cardIndex && scanning === 2 ? "rgba(74,222,128,0.15)"
                            : i === cardIndex && scanning === 3 ? "rgba(248,113,113,0.15)"
                            : c.ok ? "rgba(147,197,253,0.15)" : "rgba(248,113,113,0.15)",
                  color: i === cardIndex && scanning === 2 ? "#4ade80"
                       : i === cardIndex && scanning === 3 ? "#f87171"
                       : c.ok ? "#93c5fd" : "#f87171",
                }}>
                {i === cardIndex && scanning === 2 ? "✓ Granted"
               : i === cardIndex && scanning === 3 ? "✗ Denied"
               : c.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default RfidCard;