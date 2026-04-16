import React, { useState, useEffect } from "react";
import { card, cardStyle, badge, badgeStyle, heading, sub, subStyle, divider } from "./accessControlStyles";

const RemoteCard = () => {
    const [states, setStates] = useState([true, true, false]);
      const sequence = [[true,true,false],[true,true,true],[true,false,true],[false,false,true],[true,true,false]];
    
      useEffect(() => {
        let i = 0;
        const iv = setInterval(() => { i = (i+1) % sequence.length; setStates(sequence[i]); }, 1600);
        return () => clearInterval(iv);
      }, []);
    
      const doors = [
        { name: "Executive floor — Level 4", meta: "12 users · Weekdays 07:00–20:00" },
        { name: "Server room A",             meta: "4 users · 24 / 7" },
        { name: "Loading bay",               meta: "Visitor pass · Expires today" },
      ];
    
      return (
        <div className={`${card} col-span-1 md:col-span-2 lg:col-span-2`} style={cardStyle}>
          <span className={badge} style={badgeStyle}>Remote Management</span>
          <h3 className={heading}>Remote Access Control</h3>
          <p className={sub} style={subStyle}>Manage permissions and monitor entry points from anywhere.</p>
    
          <div style={divider} className="pt-3">
            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-2 mb-3">
              {[{ val:"142", lbl:"Active credentials" },{ val:"8", lbl:"Zones controlled" },{ val:"3s", lbl:"Revocation time" }].map(s => (
                <div key={s.lbl} className="flex-1 rounded-lg px-3 py-2"
                  style={{ background: "rgba(255,255,255,0.08)" }}>
                  <div className="text-base md:text-lg font-medium text-white">{s.val}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{s.lbl}</div>
                </div>
              ))}
            </div>
    
            {/* Zone toggles */}
            <div className="flex flex-col">
              {doors.map((d, i) => (
                <div key={d.name}
                  className="flex items-center justify-between gap-3 py-2.5"
                  style={{ borderBottom: i < doors.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium truncate text-white">{d.name}</div>
                    <div className="text-xs truncate" style={{ color: "rgba(255,255,255,0.45)" }}>{d.meta}</div>
                  </div>
                  <div className="shrink-0 transition-all duration-500"
                    style={{
                      width:32, height:18, borderRadius:9, padding:2, display:"flex",
                      background: states[i] ? "#4ade80" : "rgba(255,255,255,0.2)",
                      justifyContent: states[i] ? "flex-end" : "flex-start",
                    }}>
                    <div style={{ width:14, height:14, borderRadius:"50%", background:"white", transition:"all 0.4s" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}
export default RemoteCard;