import { ArrowRight, ShieldCheck, Eye, Lock, Zap, Network, AlertTriangle,
    Clock, Award, Users,
    Wifi,Server, 
    Search, Shield, Activity, Wrench, BookOpen, Cloud, 
    ClipboardList, Settings2 ,DatabaseZap, Users2, Rocket, 
    TrendingUp, HeadphonesIcon
 } from "lucide-react"

export const features = [
    {
        id: 1,
        icon: ShieldCheck,
        color: "#ff751f",
        pill: "Core Defence",
        eyebrow: "Threat Prevention",
        headline: "Stop Threats Before They Land",
        body: "Proactive perimeter defence blocks malicious traffic, malware, and unauthorised access attempts before they ever reach your internal network.",
        bullets: [
            "Next-gen firewall with deep packet inspection",
            "Automatic signature & behaviour-based blocking",
            "Zero-day exploit protection",
        ],
        stats: [["99.97%", "Block Rate"], ["<1ms", "Latency Impact"]],
        span: 1,
    },
    {
        id: 2,
        icon: Eye,
        color: "#3b82f6",
        pill: "Always On",
        eyebrow: "Real-Time Monitoring",
        headline: "Full Visibility Across Every Node",
        body: "Live dashboards surface anomalies, suspicious sessions, and policy violations the moment they occur — across every device on your network.",
        bullets: [
            "Traffic analysis across all network layers",
            "Instant alerts on policy violations",
            "Historical log retention & audit trails",
        ],
        stats: [["Live", "Feed"], ["360°", "Coverage"]],
        span: 1,
    },
    {
        id: 3,
        icon: AlertTriangle,
        color: "#ec4899",
        pill: "Rapid Response",
        eyebrow: "Incident Management",
        headline: "Detect, Triage & Respond Fast",
        body: "Automated incident workflows cut mean time to response. Every alert is triaged, assigned, and tracked from detection through to resolution in one place.",
        bullets: [
            "Auto-triage with severity scoring",
            "One-click isolation of compromised nodes",
            "Full incident timeline & post-mortem reports",
        ],
        stats: [["~4 min", "Avg. MTTR"], ["100%", "Traceability"]],
        span: 2,
    },
    {
        id: 4,
        icon: Lock,
        color: "#a855f7",
        pill: "Zero Trust",
        eyebrow: "Access Control",
        headline: "Least-Privilege by Default",
        body: "Role-based access and zero-trust policies ensure users and devices only reach exactly what they need — nothing more.",
        bullets: [
            "Granular RBAC across all resources",
            "MFA enforcement at every entry point",
            "Device posture checks before access is granted",
        ],
        stats: [["0", "Implicit Trust"], ["RBAC", "Enforced"]],
        span: 1,
    },
    {
        id: 5,
        icon: Network,
        color: "#22c55e",
        pill: "Unified View",
        eyebrow: "Network Intelligence",
        headline: "One Platform. Every Asset.",
        body: "Map, monitor, and manage your entire network topology from a single pane of glass — from on-prem infrastructure to cloud endpoints.",
        bullets: [
            "Auto-discovery of new devices & endpoints",
            "Real-time topology mapping",
            "Cloud, hybrid & on-prem support",
        ],
        stats: [["1–∞", "Nodes"], ["Multi-Cloud", "Ready"]],
        span: 1,
    },
]

export const Stats = [
    {
        icon: ShieldCheck,
        value: "99.97%",
        label: "Threat Block Rate",
    },
    {
        icon: Clock,
        value: "< 4 min",
        label: "Mean Time to Respond",
    },
    {
        icon: Network,
        value: "10,000+",
        label: "Nodes Protected",
    },
    {
        icon: Award,
        value: "8+ Years",
        label: "Industry Experience",
    },
    {
        icon: Users,
        value: "300+",
        label: "Enterprise Clients",
    },
    {
        icon: Zap,
        value: "24 / 7",
        label: "Live Monitoring",
    },
]

export const Types = [
    {
        id: 1,
        icon: ShieldCheck,
        accent: "#ff751f",
        eyebrow: "Perimeter Defence",
        title: "Firewall & Intrusion Prevention",
        description: "Your first and most critical line of defence. Next-gen firewalls inspect every packet at the network edge, blocking threats before they ever enter your infrastructure.",
        stat: { value: "99.97%", label: "Block Rate" },
        highlights: [
            "Deep packet inspection on all traffic",
            "Geo-blocking & IP reputation filtering",
            "Automatic rule updates & threat feeds",
        ],
    },
    {
        id: 2,
        icon: Eye,
        accent: "#3b82f6",
        eyebrow: "Threat Detection",
        title: "Security Information & Event Management",
        description: "SIEM aggregates logs and events from every corner of your network, applying AI-driven correlation to surface real threats fast and cut through alert noise.",
        stat: { value: "< 4 min", label: "Avg. MTTR" },
        highlights: [
            "Centralised log aggregation & correlation",
            "AI-assisted anomaly detection",
            "Real-time dashboards & audit trails",
        ],
    },
    {
        id: 3,
        icon: Lock,
        accent: "#a855f7",
        eyebrow: "Identity & Access",
        title: "Zero Trust Access Control",
        description: "No user or device is trusted by default. Every access request is verified, least-privilege is enforced, and lateral movement is stopped in its tracks.",
        stat: { value: "0", label: "Implicit Trust" },
        highlights: [
            "MFA at every entry point",
            "Granular role-based access control",
            "Device posture checks before access",
        ],
    },
    {
        id: 4,
        icon: Wifi,
        accent: "#22c55e",
        eyebrow: "Network Segmentation",
        title: "Micro-Segmentation & VLANs",
        description: "Divide your network into isolated zones so a breach in one segment can never cascade. Critical assets stay walled off regardless of what else is compromised.",
        stat: { value: "100%", label: "Blast Containment" },
        highlights: [
            "VLAN isolation for critical systems",
            "East-west traffic control",
            "Automatic quarantine on anomaly detection",
        ],
    },
    {
        id: 5,
        icon: Server,
        accent: "#ec4899",
        eyebrow: "Endpoint Security",
        title: "Device Protection & EDR",
        description: "Every managed device is a potential entry point. Endpoint Detection & Response monitors, detects, and neutralises threats directly on the device before they spread.",
        stat: { value: "360°", label: "Endpoint Visibility" },
        highlights: [
            "Continuous endpoint health monitoring",
            "Automated threat containment & rollback",
            "Full device inventory & compliance checks",
        ],
    },
]

export const services = [
    {
        id: 1,
        icon: Search,
        accent: "#ff751f",
        eyebrow: "Assessment",
        title: "Security Audit & Risk Assessment",
        description: "We start by mapping your entire attack surface — identifying vulnerabilities, misconfigurations, and gaps before a threat actor does. You get a full risk report with prioritised remediation.",
        stat: { value: "100%", label: "Coverage" },
        highlights: [
            "Full network topology discovery",
            "Vulnerability scanning & CVE mapping",
            "Prioritised risk remediation roadmap",
        ],
    },
    {
        id: 2,
        icon: Shield,
        accent: "#3b82f6",
        eyebrow: "Managed Security",
        title: "Managed Detection & Response",
        description: "Our security analysts monitor your network around the clock, triaging alerts, investigating incidents, and neutralising threats — so your team can focus on the business.",
        stat: { value: "24 / 7", label: "SOC Coverage" },
        highlights: [
            "Dedicated security operations centre",
            "Real-time alert triage & escalation",
            "Threat hunting & proactive defence",
        ],
    },
    {
        id: 3,
        icon: Activity,
        accent: "#a855f7",
        eyebrow: "Incident Response",
        title: "Rapid Incident Response & Recovery",
        description: "When a breach occurs, every minute counts. Our incident response team deploys fast — containing the threat, preserving forensic evidence, and restoring operations with minimal downtime.",
        stat: { value: "< 4 min", label: "Avg. MTTR" },
        highlights: [
            "Immediate containment & isolation",
            "Full forensic investigation & timeline",
            "Post-incident hardening & report",
        ],
    },
    {
        id: 4,
        icon: Wrench,
        accent: "#22c55e",
        eyebrow: "Implementation",
        title: "Security Architecture & Deployment",
        description: "From firewall configuration to zero-trust implementation, we design and deploy security infrastructure that fits your environment — on-prem, cloud, or hybrid.",
        stat: { value: "Days", label: "Not Months" },
        highlights: [
            "Next-gen firewall & IPS deployment",
            "Zero trust architecture design",
            "Cloud, hybrid & on-prem support",
        ],
    },
    {
        id: 5,
        icon: BookOpen,
        accent: "#ec4899",
        eyebrow: "Compliance",
        title: "Compliance & Regulatory Advisory",
        description: "We help you meet the frameworks that matter — ISO 27001, GDPR, NIS2, and more. Our advisors guide you through audits, gap analyses, and ongoing compliance maintenance.",
        stat: { value: "ISO 27001", label: "Aligned" },
        highlights: [
            "Gap analysis against key frameworks",
            "Policy & procedure documentation",
            "Audit preparation & ongoing support",
        ],
    },
    {
        id: 6,
        icon: Cloud,
        accent: "#f59e0b",
        eyebrow: "Cloud Security",
        title: "Cloud & Hybrid Security",
        description: "Secure your cloud workloads with the same rigour as your on-prem estate. We configure, monitor, and protect your AWS, Azure, or GCP environments end to end.",
        stat: { value: "Multi-Cloud", label: "Ready" },
        highlights: [
            "Cloud posture management (CSPM)",
            "Workload & container protection",
            "Identity & access management in the cloud",
        ],
    },
]

// How it Works stuff
export const HowItWorksStats = [
  { value: "2",    unit: "wks",  label: "Avg. deployment time",      color: "#93c5fd" },
  { value: "<48",  unit: "hrs",  label: "Threat monitoring setup",   color: "#a78bfa" },
  { value: "99.9%",unit: null,   label: "Network uptime reliability",color: "#4ade80" },
  { value: "24/7", unit: null,   label: "Security monitoring",       color: "#fbbf24" },
]

export const steps = [
  {
    n: "01",
    icon: ClipboardList,
    color: "#93c5fd",
    phase: "Assessment",
    title: "Understanding Your Infrastructure",
    body: "We assess your network environment, identify vulnerabilities, and evaluate current security risks before deployment begins.",
    points: [
      "Infrastructure assessment",
      "Risk & vulnerability review",
      "Security gap analysis",
      "Business continuity planning",
    ],
  },

  {
    n: "02",
    icon: Settings2,
    color: "#a78bfa",
    phase: "Planning",
    title: "Security Strategy Built Around You",
    body: "Our team designs a tailored network security strategy aligned with your business operations and infrastructure needs.",
    points: [
      "Firewall planning",
      "Access control policies",
      "VPN & remote access setup",
      "Security architecture mapping",
    ],
  },

  {
    n: "03",
    icon: DatabaseZap,
    color: "#5eead4",
    phase: "Deployment",
    title: "Secure System Implementation",
    body: "Security tools, monitoring systems, and protection layers are deployed with minimal disruption to daily operations.",
    points: [
      "Firewall deployment",
      "Threat monitoring setup",
      "Endpoint protection",
      "Secure network configuration",
    ],
  },

  {
    n: "04",
    icon: Users2,
    color: "#4ade80",
    phase: "Testing",
    title: "Validate & Strengthen Protection",
    body: "We test your network defenses, validate configurations, and ensure your systems are protected against common threats.",
    points: [
      "Security validation testing",
      "Vulnerability checks",
      "Access verification",
      "Performance optimization",
    ],
  },

  {
    n: "05",
    icon: Rocket,
    color: "#fbbf24",
    phase: "Monitoring",
    title: "Real-Time Threat Monitoring",
    body: "Your network is continuously monitored to detect suspicious activity and respond quickly to potential threats.",
    points: [
      "24/7 monitoring",
      "Threat detection alerts",
      "Traffic analysis",
      "Incident response support",
    ],
  },

  {
    n: "06",
    icon: ShieldCheck,
    color: "#f87171",
    phase: "Support",
    title: "Ongoing Security & Support",
    body: "We provide continuous updates, maintenance, and expert support to keep your infrastructure secure and optimized.",
    points: [
      "Security updates",
      "Ongoing maintenance",
      "Dedicated support access",
      "Rapid response assistance",
    ],
  },
]

export const checklist = [
  "Dedicated security specialists",
  "Minimal operational disruption",
  "24/7 threat monitoring",
  "Continuous security updates",
  "Scalable protection for growing businesses",
]

// Why Choose us Stuff

export const reasons = [
  {
    id: "protection",
    icon: ShieldCheck,
    color: "#93c5fd",
    tag: "Proactive security",
    title: "Protection Built for Modern Networks",
    body: "Our security solutions are designed to identify threats early, reduce vulnerabilities, and keep your business protected without slowing operations down.",
    points: [
      "Real-time threat detection",
      "Secure network architecture",
      "Firewall & endpoint protection",
      "Continuous risk monitoring",
    ],
    span: 1,
  },

  {
    id: "visibility",
    icon: Eye,
    color: "#a78bfa",
    tag: "Complete visibility",
    title: "See What's Happening Across Your Network",
    body: "Monitor network activity, user access, and potential threats through centralized dashboards and real-time alerts.",
    points: [
      "Live network monitoring",
      "Instant threat alerts",
      "Traffic & activity insights",
      "Centralized security visibility",
    ],

    roles: [
      { label: "IT Teams", sub: "Real-time monitoring & alerts", color: "#a78bfa" },
      { label: "Managers", sub: "Clear operational visibility", color: "#5eead4" },
      { label: "Remote Teams", sub: "Secure access from anywhere", color: "#93c5fd" },
    ],

    stats: [
      { value: "24/7", label: "Threat monitoring" },
      { value: "< 5 min", label: "Alert response visibility" },
    ],

    span: 2,
  },

  {
    id: "scalable",
    icon: TrendingUp,
    color: "#4ade80",
    tag: "Scales with you",
    title: "Security That Grows With Your Business",
    body: "From small offices to enterprise environments, our solutions scale alongside your infrastructure and operational needs.",
    points: [
      "Multi-site protection",
      "Cloud & on-premise support",
      "Flexible security architecture",
      "Built for business growth",
    ],

    stats: [
      { value: "Multi-site", label: "Infrastructure ready" },
      { value: "Enterprise", label: "Scalable deployment" },
    ],

    span: 1,
  },

  {
    id: "support",
    icon: HeadphonesIcon,
    color: "#fbbf24",
    tag: "Always supported",
    title: "Security Support You Can Rely On",
    body: "Our team provides continuous monitoring, maintenance, and expert support to help keep your network secure and optimized.",
    points: [
      "Dedicated technical support",
      "Ongoing maintenance",
      "Security updates included",
      "Rapid issue response",
    ],

    stats: [
      { value: "24/7", label: "Support access" },
      { value: "< 4h", label: "Response SLA" },
    ],

    span: 1,
  },
]

export const trustStats = [
  { value: "99.9%", label: "Network uptime",        color: "#93c5fd" },
  { value: "24/7",  label: "Threat monitoring",      color: "#4ade80" },
  { value: "< 5m",  label: "Alert visibility",       color: "#fbbf24" },
  { value: "Multi-site", label: "Infrastructure support", color: "#a78bfa" },
]

export const testimonials = [
  {
    quote: "Their monitoring and security systems gave our team complete visibility across the network.",
    name: "David R.",
    role: "Operations Manager",
  },

  {
    quote: "The deployment process was smooth, and the ongoing support has been excellent.",
    name: "Melissa K.",
    role: "IT Administrator",
  },

  {
    quote: "We needed scalable protection for multiple locations, and the system has performed reliably.",
    name: "Andre T.",
    role: "Infrastructure Lead",
  },
]

export const promises = [
  "Real-time threat monitoring",
  "Scalable network protection",
  "Secure remote connectivity",
  "Dedicated technical support",
  "Reliable infrastructure security",
  "Business-focused solutions",
]