import React, { useState, useEffect } from "react";
import { card, cardStyle, badge, badgeStyle, heading, sub, subStyle, divider } from "./accessControlStyles";

const CctvCard = () => {
    const integrations = [
        "CCTV event sync — access event ties to camera frame",
        "Alarm trigger on forced entry or tailgating detection",
        "Milestone XProtect & Genetec native integration",
        "Instant push alert to SOC on denied access spike",
      ];
      const [active, setActive] = useState(0);
    
      useEffect(() => {
        const iv = setInterval(() => setActive(a => (a+1) % integrations.length), 1000);
        return () => clearInterval(iv);
      }, []);
    
      return (
        <div className={`${card} col-span-1 md:col-span-3 lg:col-span-3`} style={cardStyle}>
          <span className={badge} style={badgeStyle}>CCTV &amp; Alarms</span>
          <h3 className={heading}>Integration with Alarms &amp; CCTV</h3>
          <p className={sub} style={subStyle}>
            Seamlessly connect access control with your video surveillance and alarm systems for real-time monitoring.
          </p>
    
          <div style={divider} className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {integrations.map((item, i) => (
              <div key={item} className="flex items-start gap-2 rounded-lg px-3 py-2.5 transition-all duration-300"
                style={{
                  background: active === i ? "rgba(74,222,128,0.1)" : "rgba(255,255,255,0.05)",
                  border: active === i ? "1px solid rgba(74,222,128,0.35)" : "1px solid rgba(255,255,255,0.08)",
                }}>
                <div className="rounded-full shrink-0 mt-1 transition-all duration-300"
                  style={{
                    width:8, height:8,
                    background: active === i ? "#4ade80" : "rgba(255,255,255,0.25)",
                    boxShadow: active === i ? "0 0 6px rgba(74,222,128,0.6)" : "none",
                  }} />
                <span className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
    );
}
export default CctvCard;