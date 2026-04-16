import React, { useState, useEffect } from "react";
import { card, cardStyle, badge, badgeStyle, heading, sub, subStyle, divider } from "./accessControlStyles";

const BioMetricCard = () => {
    const [scanY, setScanY]             = useState(0);
      const [faceVerified, setFaceVerified] = useState(false);
      const [fpRows, setFpRows]           = useState(0);
      const fpPattern = [
        [true,true,false,true,false],
        [false,true,true,false,true],
        [true,false,true,true,false],
        [false,true,false,true,true],
      ];
    
      useEffect(() => {
        let frame, start = null;
        const animate = (ts) => {
          if (!start) start = ts;
          const p = Math.min((ts - start) / 1400, 1);
          setScanY(p);
          if (p < 1) { frame = requestAnimationFrame(animate); }
          else {
            setFaceVerified(true);
            setTimeout(() => { setFaceVerified(false); setScanY(0); start = null; frame = requestAnimationFrame(animate); }, 1800);
          }
        };
        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
      }, []);
    
      useEffect(() => {
        const iv = setInterval(() => setFpRows(r => (r + 1) % (fpPattern.length + 2)), 400);
        return () => clearInterval(iv);
      }, []);
    
      return (
        <div className={card} style={cardStyle}>
          <span className={badge} style={badgeStyle}>Biometric</span>
          <h3 className={heading}>Biometric Authentication</h3>
          <p className={sub} style={subStyle}>Facial recognition and fingerprint scanning for keyless entry.</p>
    
          <div style={divider} className="pt-3 flex gap-3 md:gap-4">
            {/* Face */}
            <div className="flex-1 text-center">
              <p className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.45)" }}>Facial Recognition</p>
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full mx-auto mb-2 overflow-hidden flex items-center justify-center"
                style={{ border: `2px solid ${faceVerified ? "#4ade80" : "#5eead4"}` }}>
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.1)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5eead4" strokeWidth="1.5" strokeLinecap="round">
                    <circle cx="12" cy="8" r="4"/>
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                  </svg>
                </div>
                {!faceVerified && (
                  <div className="absolute left-0 right-0 h-0.5 opacity-80"
                    style={{ top: `${scanY * 100}%`, background: "#5eead4", transition: "none" }} />
                )}
              </div>
              <p className="text-xs font-medium transition-colors duration-300"
                style={{ color: faceVerified ? "#4ade80" : "#5eead4" }}>
                {faceVerified ? "✓ Verified" : "Scanning..."}
              </p>
            </div>
    
            {/* Fingerprint */}
            <div className="flex-1 text-center">
              <p className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.45)" }}>Fingerprint</p>
              <div className="flex flex-col gap-1 items-center mb-1">
                {fpPattern.map((row, ri) => (
                  <div key={ri} className="flex gap-1">
                    {row.map((active, ci) => (
                      <div key={ci} className="rounded-full transition-all duration-300"
                        style={{ width: 16, height: 3, background: active && ri < fpRows ? "#93c5fd" : "rgba(255,255,255,0.2)" }} />
                    ))}
                  </div>
                ))}
              </div>
              <p className="text-xs mt-1" style={{ color: fpRows >= fpPattern.length ? "#4ade80" : "#93c5fd" }}>
                {fpRows >= fpPattern.length ? "✓ Match" : "Scanning..."}
              </p>
            </div>
          </div>
        </div>
      );
}
export default BioMetricCard;