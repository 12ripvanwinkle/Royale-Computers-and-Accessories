import {
  ClipboardList,
  Settings2,
  DatabaseZap,
  Users2,
  Rocket,
  ShieldCheck,
  UsersRound,
  Workflow,
  BarChart3,
  HeadphonesIcon,
} from "lucide-react"

// ─────────────────────────────────────────────────────────────
//  GLOBAL HowItWorks DATA
//  Usage: import { howItWorksData } from './HowItWorksData'
//         <HowItWorks {...howItWorksData.school} />
//         <HowItWorks {...howItWorksData.networkSecurity} />
// ─────────────────────────────────────────────────────────────

export const howItWorksData = {

  // ── School Management System ──────────────────────────────
  school: {
    subtitle: "The Process",
    heading: "How It Works",
    description:
      "Six steps from first conversation to a fully live, supported platform — nothing left to chance.",
    stats: [
      { value: "3",    unit: "wks",  label: "Avg. implementation",     color: "#93c5fd" },
      { value: "<5",   unit: "days", label: "System setup",            color: "#a78bfa" },
      { value: "100%", unit: null,   label: "Data verified pre-launch", color: "#4ade80" },
      { value: "24/7", unit: null,   label: "Post-launch support",      color: "#fbbf24" },
    ],
    steps: [
      {
        n: "01", icon: ClipboardList, color: "#93c5fd", phase: "Discovery",
        title: "Understanding Your School",
        body: "We map your school's structure, workflows, and goals before a single setting is touched.",
        points: ["School profile & year groups", "Workflow review", "Pain points", "Success criteria"],
      },
      {
        n: "02", icon: Settings2, color: "#a78bfa", phase: "Configuration",
        title: "Built Around You",
        body: "Modules, roles, grading schemes, and templates configured to match your school from day one.",
        points: ["Module activation", "User roles & permissions", "Academic calendar", "Grading templates"],
      },
      {
        n: "03", icon: DatabaseZap, color: "#5eead4", phase: "Migration",
        title: "Your Records, Moved Safely",
        body: "Student records, history, and fee data cleaned, mapped, and verified before anything goes live.",
        points: ["CSV, Excel & legacy imports", "Data cleaning", "Pre-import audit", "Rollback safety net"],
      },
      {
        n: "04", icon: Users2, color: "#4ade80", phase: "Onboarding",
        title: "Confident Before Day One",
        body: "Role-specific sessions for admins, teachers, and staff — focused only on what they'll actually use.",
        points: ["Role-segmented tracks", "Live walkthrough & Q&A", "Recorded sessions", "Quick-reference guides"],
      },
      {
        n: "05", icon: Rocket, color: "#fbbf24", phase: "Launch",
        title: "We're There on Launch Day",
        body: "Our team monitors the platform in real time as your school switches over — remote or on-site.",
        points: ["Supervised go-live", "Real-time monitoring", "Staff on-call support", "Sign-off checklist"],
      },
      {
        n: "06", icon: ShieldCheck, color: "#f87171", phase: "Post-launch",
        title: "We Stay After the Switch",
        body: "Dedicated support channel, regular updates, and a 30-day review so you're never left alone.",
        points: ["Dedicated support line", "Platform updates included", "30-day review", "< 4h response SLA"],
      },
    ],
    checklist: [
      "Dedicated implementation manager",
      "Weekly progress updates",
      "Go-live sign-off checklist",
      "30-day post-launch review",
      "No disruption to school operations",
    ],
    cta: {
      timelineText: "Typically live in 3–6 weeks.",
      buttonLabel: "Book a Free Consultation",
      buttonColor: "#93c5fd",
      buttonHoverColor: "#bfdbfe",
      buttonTextColor: "#0f172a",
    },
  },

  // ── Network Security ──────────────────────────────────────
  networkSecurity: {
    subtitle: "The Process",
    heading: "How It Works",
    description:
      "Six steps from first conversation to a fully live, supported platform — nothing left to chance.",
    stats: [
      { value: "2",     unit: "wks", label: "Avg. deployment time",      color: "#93c5fd" },
      { value: "<48",   unit: "hrs", label: "Threat monitoring setup",   color: "#a78bfa" },
      { value: "99.9%", unit: null,  label: "Network uptime reliability", color: "#4ade80" },
      { value: "24/7",  unit: null,  label: "Security monitoring",        color: "#fbbf24" },
    ],
    steps: [
      {
        n: "01", icon: ClipboardList, color: "#93c5fd", phase: "Assessment",
        title: "Understanding Your Infrastructure",
        body: "We assess your network environment, identify vulnerabilities, and evaluate current security risks before deployment begins.",
        points: ["Infrastructure assessment", "Risk & vulnerability review", "Security gap analysis", "Business continuity planning"],
      },
      {
        n: "02", icon: Settings2, color: "#a78bfa", phase: "Planning",
        title: "Security Strategy Built Around You",
        body: "Our team designs a tailored network security strategy aligned with your business operations and infrastructure needs.",
        points: ["Firewall planning", "Access control policies", "VPN & remote access setup", "Security architecture mapping"],
      },
      {
        n: "03", icon: DatabaseZap, color: "#5eead4", phase: "Deployment",
        title: "Secure System Implementation",
        body: "Security tools, monitoring systems, and protection layers are deployed with minimal disruption to daily operations.",
        points: ["Firewall deployment", "Threat monitoring setup", "Endpoint protection", "Secure network configuration"],
      },
      {
        n: "04", icon: Users2, color: "#4ade80", phase: "Testing",
        title: "Validate & Strengthen Protection",
        body: "We test your network defenses, validate configurations, and ensure your systems are protected against common threats.",
        points: ["Security validation testing", "Vulnerability checks", "Access verification", "Performance optimization"],
      },
      {
        n: "05", icon: Rocket, color: "#fbbf24", phase: "Monitoring",
        title: "Real-Time Threat Monitoring",
        body: "Your network is continuously monitored to detect suspicious activity and respond quickly to potential threats.",
        points: ["24/7 monitoring", "Threat detection alerts", "Traffic analysis", "Incident response support"],
      },
      {
        n: "06", icon: ShieldCheck, color: "#f87171", phase: "Support",
        title: "Ongoing Security & Support",
        body: "We provide continuous updates, maintenance, and expert support to keep your infrastructure secure and optimized.",
        points: ["Security updates", "Ongoing maintenance", "Dedicated support access", "Rapid response assistance"],
      },
    ],
    checklist: [
      "Dedicated security specialists",
      "Minimal operational disruption",
      "24/7 threat monitoring",
      "Continuous security updates",
      "Scalable protection for growing businesses",
    ],
    cta: {
      timelineText: "Typically live in 2 weeks.",
      buttonLabel: "Book a Free Consultation",
      buttonColor: "#ff751f",
      buttonHoverColor: "#93c5fd",
      buttonTextColor: "#0f172a",
    },
  },
  // ── Access Control ──────────────────────────────────────────
  accessControl: {
    subtitle: "The Process",
    heading: "How It Works",
    description:
        "From initial assessment to live monitoring, we deploy secure access control systems built around your facility and operational needs.",

    stats: [
        { value: "2",     unit: "wks", label: "Avg. deployment time", color: "#93c5fd" },
        { value: "<48",   unit: "hrs", label: "System configuration", color: "#a78bfa" },
        { value: "24/7",  unit: null,  label: "Access monitoring",    color: "#4ade80" },
        { value: "Multi-site", unit: null, label: "Facility support", color: "#fbbf24" },
    ],

    steps: [
        {
        n: "01",
        icon: ClipboardList,
        color: "#93c5fd",
        phase: "Assessment",
        title: "Understanding Your Facility",
        body: "We assess your facility layout, entry points, and operational requirements to design the right access control strategy.",
        points: [
            "Facility security review",
            "Entry point assessment",
            "Access risk analysis",
            "Security requirement planning",
        ],
        },

        {
        n: "02",
        icon: Settings2,
        color: "#a78bfa",
        phase: "Planning",
        title: "Built Around Your Operations",
        body: "Access permissions, authentication methods, and monitoring systems configured around your business workflows.",
        points: [
            "Role-based permissions",
            "Authentication setup",
            "Access level planning",
            "Security policy configuration",
        ],
        },

        {
        n: "03",
        icon: DatabaseZap,
        color: "#5eead4",
        phase: "Installation",
        title: "Secure System Deployment",
        body: "Access hardware, monitoring systems, and integrations installed with minimal disruption to your operations.",
        points: [
            "Reader & device installation",
            "Control panel setup",
            "Network integration",
            "Security validation checks",
        ],
        },

        {
        n: "04",
        icon: Users2,
        color: "#4ade80",
        phase: "Configuration",
        title: "Ready for Daily Operations",
        body: "Staff credentials, permissions, and monitoring dashboards configured for secure day-to-day access management.",
        points: [
            "Credential enrollment",
            "User access setup",
            "Monitoring dashboard setup",
            "Administrator onboarding",
        ],
        },

        {
        n: "05",
        icon: Rocket,
        color: "#fbbf24",
        phase: "Activation",
        title: "Real-Time Access Monitoring",
        body: "Your access control system goes live with centralized monitoring and real-time activity visibility.",
        points: [
            "Live system activation",
            "Real-time access logs",
            "Entry activity tracking",
            "Remote management setup",
        ],
        },

        {
        n: "06",
        icon: ShieldCheck,
        color: "#f87171",
        phase: "Support",
        title: "Ongoing Security & Support",
        body: "We provide continuous maintenance, updates, and technical support to keep your systems secure and reliable.",
        points: [
            "System maintenance",
            "Security updates",
            "Dedicated support access",
            "Rapid issue response",
        ],
        },
    ],

    checklist: [
        "Dedicated security specialists",
        "Real-time deployment updates",
        "System activation verification",
        "Ongoing monitoring & support",
        "Minimal disruption to operations",
    ],

    cta: {
        timelineText: "Typically deployed in 1–2 weeks.",
        buttonLabel: "Book a Free Consultation",
        buttonColor: "#93c5fd",
        buttonHoverColor: "#bfdbfe",
        buttonTextColor: "#0f172a",
    },
  },

  // CCTV 
  cctv: {
    subtitle: "The Process",
    heading: "How It Works",

    description:
        "From site assessment to live monitoring, we deploy modern CCTV systems designed to improve visibility, security, and operational awareness.",

    stats: [
        { value: "2",      unit: "wks", label: "Avg. deployment time", color: "#93c5fd" },
        { value: "<48",    unit: "hrs", label: "Camera configuration", color: "#a78bfa" },
        { value: "24/7",   unit: null,  label: "Live surveillance",    color: "#4ade80" },
        { value: "Multi-site", unit: null, label: "Coverage support",  color: "#fbbf24" },
    ],

    steps: [
        {
        n: "01",
        icon: ClipboardList,
        color: "#93c5fd",
        phase: "Assessment",

        title: "Understanding Your Security Needs",

        body:
            "We assess your property layout, surveillance requirements, and risk areas to design the right CCTV solution.",

        points: [
            "Site security assessment",
            "Coverage area analysis",
            "Risk & blind spot review",
            "Monitoring requirement planning",
        ],
        },

        {
        n: "02",
        icon: Settings2,
        color: "#a78bfa",
        phase: "Planning",

        title: "Built Around Your Environment",

        body:
            "Camera placement, recording systems, and monitoring infrastructure configured around your facility and operational needs.",

        points: [
            "Camera placement strategy",
            "Recording system planning",
            "Storage configuration",
            "Monitoring architecture setup",
        ],
        },

        {
        n: "03",
        icon: DatabaseZap,
        color: "#5eead4",
        phase: "Installation",

        title: "Professional System Deployment",

        body:
            "Cameras, monitoring systems, and recording infrastructure installed with minimal disruption to your operations.",

        points: [
            "Camera installation",
            "DVR/NVR configuration",
            "Network integration",
            "System validation testing",
        ],
        },

        {
        n: "04",
        icon: Users2,
        color: "#4ade80",
        phase: "Configuration",

        title: "Optimized for Daily Monitoring",

        body:
            "Monitoring dashboards, alerts, and remote viewing systems configured for secure and efficient surveillance management.",

        points: [
            "Remote viewing setup",
            "Alert configuration",
            "Monitoring dashboard setup",
            "Administrator onboarding",
        ],
        },

        {
        n: "05",
        icon: Rocket,
        color: "#fbbf24",
        phase: "Activation",

        title: "Real-Time Surveillance Monitoring",

        body:
            "Your CCTV system goes live with centralized monitoring, real-time visibility, and secure footage access.",

        points: [
            "Live system activation",
            "Real-time monitoring",
            "Footage verification",
            "Mobile access setup",
        ],
        },

        {
        n: "06",
        icon: ShieldCheck,
        color: "#f87171",
        phase: "Support",

        title: "Ongoing Maintenance & Support",

        body:
            "We provide continuous maintenance, system updates, and technical support to keep your surveillance infrastructure operating reliably.",

        points: [
            "System maintenance",
            "Software & firmware updates",
            "Dedicated support access",
            "Rapid issue response",
        ],
        },
    ],

    checklist: [
        "Dedicated surveillance specialists",
        "Real-time deployment updates",
        "System performance verification",
        "Ongoing monitoring & support",
        "Minimal disruption to operations",
    ],

    cta: {
        timelineText: "Typically deployed in 1–2 weeks.",

        buttonLabel: "Book a Free Consultation",

        buttonColor: "#93c5fd",

        buttonHoverColor: "#bfdbfe",

        buttonTextColor: "#0f172a",
    },
  },

  // Digital Signage
  digitalSignage: {
    subtitle: "The Process",

    heading: "How It Works",

    description:
        "From strategy to live content delivery, we deploy modern digital signage solutions designed to improve communication, engagement, and brand visibility.",

    stats: [
        { value: "2",      unit: "wks", label: "Avg. deployment time", color: "#93c5fd" },
        { value: "<48",    unit: "hrs", label: "Display configuration", color: "#a78bfa" },
        { value: "24/7",   unit: null,  label: "Content scheduling",    color: "#4ade80" },
        { value: "Multi-site", unit: null, label: "Display management", color: "#fbbf24" },
    ],

    steps: [
        {
        n: "01",

        icon: ClipboardList,

        color: "#93c5fd",

        phase: "Assessment",

        title: "Understanding Your Display Needs",

        body:
            "We assess your space, audience, and communication goals to design the right digital signage solution.",

        points: [
            "Site & visibility assessment",
            "Audience engagement planning",
            "Display location analysis",
            "Content strategy review",
        ],
        },

        {
        n: "02",

        icon: Settings2,

        color: "#a78bfa",

        phase: "Planning",

        title: "Built Around Your Environment",

        body:
            "Screen placement, content management systems, and display infrastructure configured around your operational needs.",

        points: [
            "Display placement strategy",
            "CMS configuration planning",
            "Content scheduling setup",
            "Network infrastructure planning",
        ],
        },

        {
        n: "03",

        icon: DatabaseZap,

        color: "#5eead4",

        phase: "Installation",

        title: "Professional System Deployment",

        body:
            "Displays, media players, and supporting infrastructure installed with minimal disruption to your operations.",

        points: [
            "Display installation",
            "Media player setup",
            "Network integration",
            "System performance testing",
        ],
        },

        {
        n: "04",

        icon: Users2,

        color: "#4ade80",

        phase: "Configuration",

        title: "Optimized for Daily Content Management",

        body:
            "Content scheduling, user permissions, and management dashboards configured for efficient day-to-day operation.",

        points: [
            "Content scheduling setup",
            "User access configuration",
            "Management dashboard setup",
            "Administrator onboarding",
        ],
        },

        {
        n: "05",

        icon: Rocket,

        color: "#fbbf24",

        phase: "Activation",

        title: "Live Content Delivery",

        body:
            "Your digital signage network goes live with centralized content management and real-time display control.",

        points: [
            "Live system activation",
            "Real-time content updates",
            "Display verification",
            "Remote management setup",
        ],
        },

        {
        n: "06",

        icon: ShieldCheck,

        color: "#f87171",

        phase: "Support",

        title: "Ongoing Maintenance & Support",

        body:
            "We provide continuous maintenance, software updates, and technical support to keep your signage systems running reliably.",

        points: [
            "System maintenance",
            "Software & firmware updates",
            "Dedicated support access",
            "Rapid issue response",
        ],
        },
    ],

    checklist: [
        "Dedicated signage specialists",
        "Real-time deployment updates",
        "Display performance verification",
        "Ongoing monitoring & support",
        "Minimal disruption to operations",
    ],

    cta: {
        timelineText: "Typically deployed in 1–2 weeks.",

        buttonLabel: "Book a Free Consultation",

        buttonColor: "#93c5fd",

        buttonHoverColor: "#bfdbfe",

        buttonTextColor: "#0f172a",
    },
  },
  
  // Software Security 
  softwareSecurity: {
  subtitle: "The Process",

  heading: "How It Works",

  description:
      "From security assessment to continuous protection, we deploy modern software security solutions designed to reduce risk, strengthen systems, and protect critical business operations.",

  stats: [
      { value: "2",      unit: "wks", label: "Avg. deployment time", color: "#93c5fd" },
      { value: "<48",    unit: "hrs", label: "Security configuration", color: "#a78bfa" },
      { value: "24/7",   unit: null,  label: "Threat monitoring",      color: "#4ade80" },
      { value: "Multi-layer", unit: null, label: "Protection coverage", color: "#fbbf24" },
  ],

  steps: [
      {
      n: "01",

      icon: ClipboardList,

      color: "#93c5fd",

      phase: "Assessment",

      title: "Understanding Your Security Risks",

      body:
          "We assess your applications, infrastructure, and operational workflows to identify vulnerabilities and security gaps.",

      points: [
          "Security risk assessment",
          "Vulnerability analysis",
          "Infrastructure review",
          "Compliance & policy evaluation",
      ],
      },

      {
      n: "02",

      icon: Settings2,

      color: "#a78bfa",

      phase: "Planning",

      title: "Built Around Your Environment",

      body:
          "Security frameworks, protection layers, and monitoring systems configured around your business and software infrastructure.",

      points: [
          "Access control planning",
          "Security architecture setup",
          "Threat monitoring configuration",
          "Policy & permission structure",
      ],
      },

      {
      n: "03",

      icon: DatabaseZap,

      color: "#5eead4",

      phase: "Deployment",

      title: "Secure System Implementation",

      body:
          "Security tools, monitoring platforms, and protective measures deployed with minimal disruption to operations.",

      points: [
          "Security software deployment",
          "Endpoint protection setup",
          "System integration",
          "Security validation testing",
      ],
      },

      {
      n: "04",

      icon: Users2,

      color: "#4ade80",

      phase: "Configuration",

      title: "Optimized for Daily Protection",

      body:
          "User permissions, monitoring dashboards, and security controls configured for secure day-to-day operations.",

      points: [
          "User access configuration",
          "Monitoring dashboard setup",
          "Alert & notification setup",
          "Administrator onboarding",
      ],
      },

      {
      n: "05",

      icon: Rocket,

      color: "#fbbf24",

      phase: "Activation",

      title: "Real-Time Threat Monitoring",

      body:
          "Your security environment goes live with centralized monitoring, real-time threat visibility, and rapid response capabilities.",

      points: [
          "Live security activation",
          "Real-time threat detection",
          "Incident monitoring",
          "Remote management access",
      ],
      },

      {
      n: "06",

      icon: ShieldCheck,

      color: "#f87171",

      phase: "Support",

      title: "Ongoing Maintenance & Support",

      body:
          "We provide continuous updates, threat monitoring, and technical support to keep your systems secure and resilient.",

      points: [
          "Security updates & patching",
          "Continuous monitoring",
          "Dedicated support access",
          "Rapid incident response",
      ],
      },
  ],

  checklist: [
      "Dedicated security specialists",
      "Real-time deployment updates",
      "System security verification",
      "Continuous monitoring & support",
      "Minimal disruption to operations",
  ],

  cta: {
      timelineText: "Typically deployed in 1–2 weeks.",

      buttonLabel: "Book a Free Consultation",

      buttonColor: "#93c5fd",

      buttonHoverColor: "#bfdbfe",

      buttonTextColor: "#0f172a",
  },
  },
  // CRM
  crm: {
    subtitle: "The Process",

    heading: "How It Works",

    description:
        "From business assessment to workflow automation, we deploy modern CRM solutions designed to improve customer relationships, streamline operations, and support business growth.",

    stats: [
        { value: "2",      unit: "wks", label: "Avg. deployment time", color: "#93c5fd" },
        { value: "<48",    unit: "hrs", label: "CRM configuration",    color: "#a78bfa" },
        { value: "24/7",   unit: null,  label: "Customer access",      color: "#4ade80" },
        { value: "Scalable", unit: null, label: "Business support",    color: "#fbbf24" },
    ],

    steps: [
        {
        n: "01",

        icon: ClipboardList,

        color: "#93c5fd",

        phase: "Assessment",

        title: "Understanding Your Business Workflow",

        body:
            "We assess your sales processes, customer interactions, and operational workflows to design the right CRM solution for your business.",

        points: [
            "Business workflow analysis",
            "Customer journey review",
            "Sales process assessment",
            "Operational requirement planning",
        ],
        },

        {
        n: "02",

        icon: Settings2,

        color: "#a78bfa",

        phase: "Planning",

        title: "Built Around Your Operations",

        body:
            "CRM features, automation tools, and reporting systems configured around your team structure and business goals.",

        points: [
            "CRM structure planning",
            "Workflow automation setup",
            "Sales pipeline configuration",
            "Reporting & dashboard planning",
        ],
        },

        {
        n: "03",

        icon: DatabaseZap,

        color: "#5eead4",

        phase: "Deployment",

        title: "Professional CRM Implementation",

        body:
            "Customer databases, automation systems, and integrations deployed with minimal disruption to your operations.",

        points: [
            "CRM platform deployment",
            "Customer data migration",
            "Third-party integrations",
            "System performance testing",
        ],
        },

        {
        n: "04",

        icon: Users2,

        color: "#4ade80",

        phase: "Configuration",

        title: "Optimized for Daily Operations",

        body:
            "User permissions, dashboards, automations, and communication tools configured for efficient day-to-day customer management.",

        points: [
            "User access configuration",
            "Dashboard & reporting setup",
            "Automation rule configuration",
            "Team onboarding & training",
        ],
        },

        {
        n: "05",

        icon: Rocket,

        color: "#fbbf24",

        phase: "Activation",

        title: "Real-Time Customer Management",

        body:
            "Your CRM environment goes live with centralized customer management, automated workflows, and real-time business visibility.",

        points: [
            "Live CRM activation",
            "Real-time sales tracking",
            "Customer interaction monitoring",
            "Remote platform access",
        ],
        },

        {
        n: "06",

        icon: ShieldCheck,

        color: "#f87171",

        phase: "Support",

        title: "Ongoing Maintenance & Support",

        body:
            "We provide continuous updates, optimization, and technical support to keep your CRM platform running efficiently as your business grows.",

        points: [
            "CRM maintenance & updates",
            "Workflow optimization",
            "Dedicated support access",
            "Rapid issue response",
        ],
        },
    ],

    checklist: [
        "Dedicated CRM specialists",
        "Real-time deployment updates",
        "Workflow & automation verification",
        "Continuous support & optimization",
        "Minimal disruption to operations",
    ],

    cta: {
        timelineText: "Typically deployed in 1–2 weeks.",

        buttonLabel: "Book a Free Consultation",

        buttonColor: "#93c5fd",

        buttonHoverColor: "#bfdbfe",

        buttonTextColor: "#0f172a",
    },
  },
    // ── Power Management ────────────────────────────────────────
  powerManagement: {
    subtitle: "The Process",
    heading: "How It Works",
    description:
        "From energy assessment to system optimization, we implement power management solutions designed to improve efficiency, reliability, and operational stability.",

    stats: [
        { value: "2",      unit: "wks", label: "Avg. deployment time", color: "#93c5fd" },
        { value: "<72",    unit: "hrs", label: "System configuration", color: "#a78bfa" },
        { value: "24/7",   unit: null,  label: "Power monitoring",     color: "#4ade80" },
        { value: "Multi-site", unit: null, label: "Infrastructure support", color: "#fbbf24" },
    ],

    steps: [
        {
        n: "01",
        icon: ClipboardList,
        color: "#93c5fd",
        phase: "Assessment",
        title: "Understanding Your Power Requirements",
        body: "We assess your infrastructure, energy usage, and operational requirements to identify efficiency opportunities and power risks.",
        points: [
            "Power usage assessment",
            "Infrastructure review",
            "Load analysis",
            "Operational risk evaluation",
        ],
        },

        {
        n: "02",
        icon: Settings2,
        color: "#a78bfa",
        phase: "Planning",
        title: "Built Around Your Operations",
        body: "Our team designs a tailored power management strategy aligned with your facility and operational needs.",
        points: [
            "Energy optimization planning",
            "Backup power strategy",
            "Load balancing configuration",
            "Infrastructure planning",
        ],
        },

        {
        n: "03",
        icon: DatabaseZap,
        color: "#5eead4",
        phase: "Deployment",
        title: "Reliable System Installation",
        body: "Power management systems and monitoring tools installed with minimal disruption to daily operations.",
        points: [
            "Power system installation",
            "Monitoring setup",
            "Backup integration",
            "System validation checks",
        ],
        },

        {
        n: "04",
        icon: Users2,
        color: "#4ade80",
        phase: "Configuration",
        title: "Optimized for Daily Performance",
        body: "Power controls, monitoring systems, and efficiency settings configured for reliable long-term performance.",
        points: [
            "Monitoring dashboard setup",
            "Power usage controls",
            "Alert configuration",
            "Administrator onboarding",
        ],
        },

        {
        n: "05",
        icon: Rocket,
        color: "#fbbf24",
        phase: "Monitoring",
        title: "Real-Time Power Monitoring",
        body: "Track energy usage, detect irregularities, and maintain operational stability with continuous monitoring.",
        points: [
            "Live energy monitoring",
            "Usage analytics",
            "Power alerts & notifications",
            "Performance tracking",
        ],
        },

        {
        n: "06",
        icon: ShieldCheck,
        color: "#f87171",
        phase: "Support",
        title: "Ongoing Optimization & Support",
        body: "We provide continuous maintenance, updates, and technical support to keep your systems operating efficiently.",
        points: [
            "System maintenance",
            "Performance optimization",
            "Dedicated support access",
            "Rapid issue response",
        ],
        },
    ],

    checklist: [
        "Dedicated technical specialists",
        "Real-time system monitoring",
        "Optimized energy efficiency",
        "Ongoing maintenance & support",
        "Minimal operational disruption",
    ],

    cta: {
        timelineText: "Typically deployed in 1–2 weeks.",
        buttonLabel: "Book a Free Consultation",
        buttonColor: "#93c5fd",
        buttonHoverColor: "#bfdbfe",
        buttonTextColor: "#0f172a",
    },
  },

  // ── Add more pages here following the same shape ──────────
  // myNewPage: { subtitle, heading, description, stats, steps, checklist, cta }

}