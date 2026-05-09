import {
  BatteryCharging, Fuel, LayoutGrid,
  Activity, Gauge, Cpu,
  ArrowRight, CheckCircle2,
  ClipboardList, PenTool, Wrench,
  GitMerge, TrendingUp,
  CalendarClock,
  BarChart3, Wifi, Building2, Cloud,
  Bell, Lock, Server, Globe, Star, SlidersHorizontal, ShieldCheck,

} from "lucide-react";

export const circuits = ["C-01", "C-02", "C-03", "C-04", "C-05", "C-06", "C-07", "C-08"];

export const Systems = [
    {
    id: "ups",
    icon: BatteryCharging,
    color: "#5eead4",
    pill: "Critical infrastructure",
    eyebrow: "UPS",
    headline: "Zero Downtime. Zero Compromise.",
    body: "Instantaneous battery backup the moment power fails — no flicker, no restart, no data loss. From desktop units to three-phase enterprise systems.",
    bullets: ["Online double-conversion UPS", "Line-interactive & standby options", "Modular scalable systems", "< 2ms switchover time"],
    stats: [["< 2ms", "Switchover"], ["1000kVA", "Max capacity"]],
    span: 2,
  },
  {
    id: "gen",
    icon: Fuel,
    color: "#fbbf24",
    pill: "Long-duration",
    eyebrow: "Generator",
    headline: "Hours of Power, Not Minutes.",
    body: "Diesel or gas generators for extended outages where UPS runtime isn't enough. Auto-start on mains failure, ATS-integrated.",
    bullets: ["Auto-start on mains failure", "ATS changeover switching", "Diesel & natural gas options", "Remote start & monitoring"],
    stats: [["72h+", "Runtime"], ["Auto", "Failover"]],
    span: 1,
  },
  {
    id: "pdu",
    icon: LayoutGrid,
    color: "#a78bfa",
    pill: "Rack-level",
    eyebrow: "PDU",
    headline: "Every Rack. Fully Controlled.",
    body: "Intelligent power distribution for data centre racks with per-outlet metering, remote switching, and overload protection.",
    bullets: ["Per-outlet kWh metering", "Remote outlet switching", "Overload & surge protection", "Hot-swap & redundant feeds"],
    stats: [["Per-outlet", "Metering"], ["0U / 1U", "Form factor"]],
    span: 1,
  },
  {
    id: "ems",
    icon: Activity,
    color: "#4ade80",
    pill: "Always-on",
    eyebrow: "Energy Management",
    headline: "See Everything. Waste Nothing.",
    body: "Site-wide monitoring across circuits, zones, and buildings — with dashboards, alerts, and reports that drive real cost reductions.",
    bullets: ["Multi-site unified dashboard", "Real-time consumption alerts", "Automated reporting & trends", "ISO 50001 aligned"],
    stats: [["−30%", "Avg. energy waste"], ["Real-time", "Data"]],
    span: 2,
  },
  {
    id: "vreg",
    icon: Gauge,
    color: "#f87171",
    pill: "TVSS + AVR",
    eyebrow: "Voltage Regulation",
    headline: "Clean Power In. Always.",
    body: "AVRs and surge suppressors filter dirty power before it reaches sensitive equipment — extending lifespan and preventing failure.",
    bullets: ["±1% output voltage", "Multi-stage surge suppression", "Harmonic distortion filtering", "Full event logging"],
    stats: [["±1%", "Output tolerance"], ["IEC 61643", "Standard"]],
    span: 1,
  },
  {
    id: "smart",
    icon: Cpu,
    color: "#93c5fd",
    pill: "AI-assisted",
    eyebrow: "Smart Management",
    headline: "Power That Thinks for Itself.",
    body: "Software-defined management that learns your consumption patterns, automates load scheduling, and optimises for cost and reliability.",
    bullets: ["AI-driven load scheduling", "Demand response integration", "Predictive maintenance alerts", "Open API & third-party sync"],
    stats: [["−40%", "Avg. cost saving"], ["Open API", "Integrations"]],
    span: 1,
  },
]

export const Comparison = [
    { system: "UPS",              best: "Servers, medical, POS",        runtime: "Minutes–hours", color: "#5eead4" },
    { system: "Generator",        best: "Entire facilities",             runtime: "Days (refuel)", color: "#fbbf24" },
    { system: "PDU",              best: "Data centre racks",            runtime: "Continuous",    color: "#a78bfa" },
    { system: "Energy Mgmt.",     best: "Any site needing visibility",  runtime: "Ongoing",       color: "#4ade80" },
    { system: "Voltage Reg.",     best: "Sensitive electronics",        runtime: "Continuous",    color: "#f87171" },
    { system: "Smart Mgmt.",      best: "Multi-site / large estates",   runtime: "Always-on",     color: "#93c5fd" },
]

export const services = [
    {
        id: "a", span: 2,
        icon: ClipboardList, color: "#93c5fd",
        pill: "Foundation", eyebrow: "Step 01 — Assessment",
        headline: "Understand Before You Build.",
        body: "Every engagement starts with a thorough site audit — measuring consumption, identifying waste, and mapping the right infrastructure before a single cable is pulled.",
        bullets: [
        "Full site energy audit — every circuit & zone",
        "Load profiling — peak demand & patterns",
        "Cost & carbon baseline quantified",
        "Infrastructure gap report",
        ],
        stats: [["100%", "Sites audited first"], ["48h", "Report turnaround"], ["Free", "Initial consult"]],
    },
    {
        id: "d", span: 1,
        icon: PenTool, color: "#a78bfa",
        pill: "Engineering", eyebrow: "Step 02 — Design",
        headline: "Precision Before Installation.",
        body: "Detailed engineering drawings, equipment specs, and phased rollout plans tailored to your load requirements, site constraints, and budget.",
        bullets: [
        "Single-line diagrams & drawings",
        "Equipment sizing & selection",
        "Phased rollout planning",
        "Budget & ROI modelling",
        ],
        stats: [["Bespoke", "Every design"], ["Phased", "Rollout plans"]],
    },
    {
        id: "i", span: 1,
        icon: Wrench, color: "#fbbf24",
        pill: "Hands-on", eyebrow: "Step 03 — Installation",
        headline: "Installed Right, First Time.",
        body: "Certified engineers handle the full physical build — from mounting and cabling to commissioning and final testing — with zero shortcuts.",
        bullets: [
        "Certified installation teams",
        "Full commissioning & load testing",
        "As-built documentation",
        "Handover training included",
        ],
        stats: [["Certified", "Engineers"], ["0", "Punch-list items left open"]],
    },
    {
        id: "int", span: 2,
        icon: GitMerge, color: "#5eead4",
        pill: "Zero disruption", eyebrow: "Step 04 — Integration",
        headline: "New Systems. No Disruption.",
        body: "We connect new power systems to your existing SCADA, BMS, and monitoring platforms without disrupting live operations — hot cutovers, protocol bridging, and API connections handled end-to-end.",
        bullets: [
        "SCADA & BMS direct integration",
        "Modbus, BACnet, SNMP protocol bridging",
        "Hot cutover — live switchover, zero downtime",
        "Open API — third-party platform ready",
        ],
        stats: [["0", "Downtime during cutover"], ["Open API", "Third-party ready"]],
    },
    {
        id: "m", span: 2,
        icon: Activity, color: "#4ade80",
        pill: "24 / 7", eyebrow: "Step 05 — Maintenance",
        headline: "We Stay Long After Install.",
        body: "Scheduled preventive maintenance and round-the-clock remote monitoring keep your systems running at peak performance — issues resolved before they become outages.",
        bullets: [
        "Scheduled quarterly site visits",
        "24/7 live remote surveillance",
        "Rapid on-site dispatch — < 4h SLA",
        "Monthly health & performance reports",
        ],
        stats: [["24/7", "Monitoring"], ["< 4h", "Response SLA"], ["99.9%", "Uptime maintained"]],
    },
    {
        id: "u", span: 1,
        icon: TrendingUp, color: "#f87171",
        pill: "Optimisation", eyebrow: "Step 06 — Upgrades",
        headline: "Evolve as You Grow.",
        body: "Load profiles change and equipment ages. We audit, upgrade, and retune existing systems to reclaim efficiency and extend infrastructure life.",
        bullets: [
        "Aging equipment assessment",
        "Capacity expansion planning",
        "Efficiency retune & PUE gains",
        "Technology refresh roadmap",
        ],
        stats: [["−40%", "Avg. efficiency gain"], ["Phased", "No big-bang upgrades"]],
    },
]

export const Steps = [
  {
    n: "01", icon: ClipboardList, color: "#93c5fd",
    phase: "Week 1",
    title: "We listen first.",
    body: "A dedicated engineer visits your site. No assumptions, no pre-built templates — just a thorough audit of your infrastructure, load profile, and goals.",
    feeling: "You feel heard, not sold to.",
  },
  {
    n: "02", icon: PenTool, color: "#a78bfa",
    phase: "Week 1–2",
    title: "You see exactly what we'll build.",
    body: "We return with a full proposal — drawings, equipment specs, costs, and a phased timeline. Nothing starts until you've approved every line.",
    feeling: "No surprises. Full transparency.",
  },
  {
    n: "03", icon: Wrench, color: "#fbbf24",
    phase: "Week 2–4",
    title: "Our engineers get to work.",
    body: "Certified installation teams handle the physical build. You get daily progress updates and a clear sign-off before we move to the next phase.",
    feeling: "Professional, punctual, tidy.",
  },
  {
    n: "04", icon: GitMerge, color: "#5eead4",
    phase: "Week 3–5",
    title: "New systems slot in cleanly.",
    body: "We integrate with your existing SCADA, BMS, or monitoring platform via hot cutover — your operations keep running throughout.",
    feeling: "Zero disruption to your team.",
  },
  {
    n: "05", icon: Activity, color: "#4ade80",
    phase: "Ongoing",
    title: "We watch so you don't have to.",
    body: "Live remote monitoring, quarterly site visits, and a < 4h response SLA mean issues are caught and resolved before they become outages.",
    feeling: "Peace of mind, 24/7.",
  },
  {
    n: "06", icon: TrendingUp, color: "#f87171",
    phase: "Annually",
    title: "Your system keeps improving.",
    body: "Annual efficiency reviews identify where to reclaim performance. We bring recommendations — you decide what to act on.",
    feeling: "Always getting better, never stale.",
  },
]

export const Stats = [
    { value: "2–5",   unit: "weeks",  label: "Avg. install time",    color: "#93c5fd" },
    { value: "0",     unit: "hrs",    label: "Downtime at cutover",  color: "#5eead4" },
    { value: "< 4h",  unit: "",       label: "Support response SLA", color: "#4ade80" },
    { value: "99.9%", unit: "",       label: "Uptime maintained",    color: "#fbbf24" },
]

export const Cards = [
  {
    id: "s", span: 2,
    icon: BarChart3, color: "#93c5fd",
    pill: "Real-time", eyebrow: "Monitoring Software",
    headline: "Intelligent Software at the Core.",
    body: "Our platform ingests data from every connected device in real time — detecting anomalies and surfacing insights without manual analysis. Purpose-built for power infrastructure, not adapted from generic tools.",
    bullets: [
      "1-second data resolution across all circuits",
      "AI anomaly detection before issues escalate",
      "Historical trend analysis for efficiency gaps",
      "Scheduled PDF & CSV reporting engine",
    ],
    stats: [["1s", "Data resolution"], ["±0.5%", "Accuracy"], ["24mo", "Retention"]],
  },
  {
    id: "iot", span: 1,
    icon: Wifi, color: "#a78bfa",
    pill: "Connected hardware", eyebrow: "IoT Devices",
    headline: "Hardware That Talks Back.",
    body: "Every device we install is IoT-enabled — smart meters, intelligent PDUs, connected UPS units — feeding live data to the platform and accepting remote commands.",
    bullets: [
      "Smart sub-metering units",
      "Intelligent PDUs & switchgear",
      "Connected UPS & battery units",
      "Remote scheduling & encrypted telemetry",
    ],
    stats: [["100%", "Devices connected"], ["Encrypted", "Telemetry"]],
  },
  {
    id: "bms", span: 1,
    icon: Building2, color: "#5eead4",
    pill: "Protocol-native", eyebrow: "BMS Integration",
    headline: "One Pane of Glass.",
    body: "Power data flows directly into your existing Building Management System — no separate dashboard required. Native protocol support means no middleware, no translation layers.",
    bullets: [
      "Modbus TCP/RTU",
      "BACnet IP & MS/TP",
      "SNMP v2c & v3",
      "REST & MQTT API endpoints",
    ],
    stats: [["4+", "Protocols"], ["0", "Middleware needed"]],
  },
  {
    id: "cloud", span: 2,
    icon: Cloud, color: "#fbbf24",
    pill: "Multi-site", eyebrow: "Cloud Dashboard",
    headline: "Every Site. One View. Anywhere.",
    body: "A cloud-hosted dashboard gives you live visibility across every site, every circuit, and every device — accessible from any browser, on any device, with role-based access so the right people see the right data.",
    bullets: [
      "All locations in one unified dashboard",
      "Granular role-based permissions per user",
      "Full access on phone, tablet, or desktop",
      "Unlimited sites and users",
    ],
    stats: [["99.9%", "Dashboard uptime"], ["Unlimited", "Sites & users"]],
  },
]

export const Compliance = [
    { icon: Lock,    label: "256-bit encryption",       color: "#4ade80" },
    { icon: Server,  label: "On-premise option",         color: "#93c5fd" },
    { icon: Globe,   label: "Open API",                  color: "#a78bfa" },
    { icon: Cpu,     label: "ISO 50001 aligned",         color: "#fbbf24" },
]

export const Reasons = [
  {
    id: "exp",
    icon: ShieldCheck, color: "#93c5fd",
    stat: "200+", statLabel: "deployments",
    headline: "Specialists, not generalists.",
    body: "Power management is all we do — certified engineers, every system type, every sector.",
  },
  {
    id: "cust",
    icon: SlidersHorizontal, color: "#a78bfa",
    stat: "Bespoke", statLabel: "every design",
    headline: "Built around your site.",
    body: "Every solution is designed from your load profile up — not picked from a catalogue.",
  },
  {
    id: "rel",
    icon: Wrench, color: "#fbbf24",
    stat: "5yr", statLabel: "avg. warranty",
    headline: "Tier-1 hardware, installed right.",
    body: "Proven manufacturers, full commissioning, and a signed handover before we leave.",
  },
  {
    id: "mon",
    icon: Activity, color: "#4ade80",
    stat: "< 4h", statLabel: "response SLA",
    headline: "We stay after install.",
    body: "24/7 remote monitoring, rapid dispatch, and a dedicated contact for the life of your system.",
  },
]

export const Testimonials = [
  {
    quote: "They stayed on-site until everything was perfect. The monitoring dashboard has been invaluable ever since.",
    name: "James O.",
    role: "Facilities Manager, Nexcore Logistics",
    rating: 5,
  },
  {
    quote: "We expanded to three new sites and they scaled our system without any disruption to existing operations.",
    name: "Linda K.",
    role: "Head of Operations, MedPoint Clinics",
    rating: 5,
  },
]