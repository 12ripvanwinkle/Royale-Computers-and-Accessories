import React, { useState, useEffect } from "react";
import { card, cardStyle, badge, badgeStyle, heading, sub, subStyle, divider } from "./accessControlStyles";

const PinCard = () => {
  const pinSequence = ["9","3","5","8"];
  const [pressed, setPressed] = useState([]);
  const [activeKey, setActiveKey] = useState(null);
  const [status, setStatus] = useState(null);
  const pinKeys = ["1","2","3","4","5","6","7","8","9","*","0","#"];

  useEffect(() => {
    let timeout;
    const run = () => {
      setPressed([]); setStatus(null); setActiveKey(null);
      pinSequence.forEach((digit, i) => {
        timeout = setTimeout(() => {
          setActiveKey(String(digit));
          setTimeout(() => setActiveKey(null), 180);
          setPressed(prev => [...prev, i]);
        }, 600 + i * 600);
      });
      timeout = setTimeout(() => {
        setStatus("granted");
        setTimeout(run, 2200);
      }, 600 + pinSequence.length * 600 + 200);
    };
    run();
    return () => clearTimeout(timeout);
  }, []);

  const dotBg = (i) => {
    if (pressed.length > i) return status === "denied" ? "#f87171" : "#fcd34d";
    return "rgba(255,255,255,0.2)";
  };

  return (
    <div className={card} style={cardStyle}>
      <span className={badge} style={badgeStyle}>PIN Entry</span>
      <h3 className={heading}>PIN-Based Entry</h3>
      <p className={sub} style={subStyle}>Secure numeric codes with lockout protection.</p>

      <div style={divider} className="pt-3">
        {/* Dot display */}
        <div
          className="rounded-lg py-2 mb-2 flex items-center justify-center gap-2 md:gap-3 transition-colors duration-300"
          style={{
            background: status === "granted"
              ? "rgba(74,222,128,0.15)"
              : status === "denied"
              ? "rgba(248,113,113,0.15)"
              : "rgba(255,255,255,0.06)",
          }}
        >
          {[0,1,2,3].map(i => (
            <div
              key={i}
              className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-200"
              style={{
                background: dotBg(i),
                transform: pressed.length === i+1 && !status ? "scale(1.35)" : "scale(1)",
              }}
            />
          ))}
          {status && (
            <span className="ml-2 text-xs font-medium" style={{ color: status === "granted" ? "#4ade80" : "#f87171" }}>
              {status === "granted" ? "✓ Access granted" : "✗ Denied"}
            </span>
          )}
        </div>

        {/* Keypad */}
        <div className="grid grid-cols-3 gap-1 md:gap-1.5">
          {pinKeys.map(k => (
            <div
              key={k}
              className="rounded-md py-1.5 md:py-2 text-center text-xs md:text-sm font-medium transition-all duration-150"
              style={{
                background: activeKey === k ? "rgba(252,211,77,0.25)" : "rgba(255,255,255,0.08)",
                border: activeKey === k ? "1px solid rgba(252,211,77,0.6)" : "1px solid rgba(255,255,255,0.1)",
                color: activeKey === k ? "#fcd34d" : "rgba(255,255,255,0.85)",
                transform: activeKey === k ? "scale(0.93)" : "scale(1)",
              }}
            >
              {k}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PinCard;