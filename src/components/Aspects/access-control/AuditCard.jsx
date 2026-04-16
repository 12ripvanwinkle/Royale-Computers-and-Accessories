import React, { useState, useEffect } from "react";
import { card, cardStyle, badge, badgeStyle, heading, sub, subStyle, divider } from "./accessControlStyles";

const AuditCard = () => {
    const allLogs = [
        { zone:"Executive floor", time:"09:14", granted:true  },
        { zone:"Server room A",   time:"09:18", granted:false },
        { zone:"R&D lab",         time:"09:31", granted:true  },
        { zone:"Comms vault",     time:"09:45", granted:false },
        { zone:"Loading bay",     time:"09:52", granted:true  },
        { zone:"Car park gate",   time:"09:58", granted:true  },
        { zone:"Reception",       time:"10:03", granted:true  },
        { zone:"Finance office",  time:"10:07", granted:false },
      ];
      const [offset, setOffset] = useState(0);
      const VISIBLE = 5;
    
      useEffect(() => {
        const iv = setInterval(() => setOffset(o => (o+1) % (allLogs.length - VISIBLE + 1)), 1800);
        return () => clearInterval(iv);
      }, []);
    
      const visible = allLogs.slice(offset, offset + VISIBLE);
    
      return (
        <div className={card} style={cardStyle}>
          <span className={badge} style={badgeStyle}>Audit Logs</span>
          <h3 className={heading}>Audit Logs &amp; Recent Activity</h3>
          <p className={sub} style={subStyle}>Timestamped record of every access event across all zones.</p>
    
          <div style={{ ...divider, minHeight:140 }} className="pt-2 flex flex-col overflow-hidden">
            {visible.map((log, i) => (
              <div key={`${offset}-${i}`}
                className="flex items-center gap-2 py-2"
                style={{
                  borderBottom: i < visible.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  opacity: i === 0 ? 0.45 : 1,
                  transition: "opacity 0.5s",
                }}>
                <div className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: log.granted ? "#4ade80" : "#f87171" }} />
                <span className="text-xs flex-1 truncate" style={{ color: "rgba(255,255,255,0.85)" }}>{log.zone}</span>
                <span className="text-xs shrink-0" style={{ color: "rgba(255,255,255,0.4)" }}>{log.time}</span>
                <span className="text-xs font-medium shrink-0"
                  style={{ color: log.granted ? "#4ade80" : "#f87171" }}>
                  {log.granted ? "Granted" : "Denied"}
                </span>
              </div>
            ))}
          </div>
        </div>
    );
}
export default AuditCard;