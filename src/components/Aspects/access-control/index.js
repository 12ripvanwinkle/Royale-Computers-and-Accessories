import {ClipboardList, Settings2, DatabaseZap, Users2, Rocket, ShieldCheck} from 'lucide-react'

// How it works stuff
export const HowItWorksStats = [
    { value: "2",    unit: "wks",  label: "Avg. deployment time",     color: "#93c5fd" },
    { value: "<48",  unit: "hrs",  label: "System configuration",     color: "#a78bfa" },
    { value: "24/7", unit: null,   label: "Access monitoring",        color: "#4ade80" },
    { value: "Multi-site", unit: null, label: "Facility support",     color: "#fbbf24" },
]

export const steps = [
    {
    n: "01",
    icon: ClipboardList,
    color: "#93c5fd",
    phase: "Assessment",
    title: "Understanding Your Facility",
    body: "We assess your facility layout, security requirements, and operational needs before deployment begins.",
    points: [
        "Facility security review",
        "Entry point assessment",
        "Risk evaluation",
        "Access requirements planning",
    ],
    },

    {
    n: "02",
    icon: Settings2,
    color: "#a78bfa",
    phase: "Planning",
    title: "Built Around Your Operations",
    body: "Access permissions, authentication methods, and security policies configured to match your organization.",
    points: [
        "User roles & permissions",
        "Authentication setup",
        "Access level configuration",
        "Security policy planning",
    ],
    },

    {
    n: "03",
    icon: DatabaseZap,
    color: "#5eead4",
    phase: "Installation",
    title: "Secure System Deployment",
    body: "Access control hardware and monitoring systems installed with minimal disruption to daily operations.",
    points: [
        "Device installation",
        "System integration",
        "Network configuration",
        "Security validation checks",
    ],
    },

    {
    n: "04",
    icon: Users2,
    color: "#4ade80",
    phase: "Configuration",
    title: "Ready for Everyday Use",
    body: "Staff access, monitoring tools, and permissions configured for secure and efficient day-to-day operations.",
    points: [
        "Staff onboarding",
        "Access credential setup",
        "Monitoring dashboard setup",
        "Administrator guidance",
    ],
    },

    {
    n: "05",
    icon: Rocket,
    color: "#fbbf24",
    phase: "Activation",
    title: "Real-Time Access Monitoring",
    body: "Your access control system goes live with active monitoring and real-time visibility across your facility.",
    points: [
        "Live system activation",
        "Real-time monitoring",
        "Entry activity tracking",
        "Operational verification",
    ],
    },

    {
    n: "06",
    icon: ShieldCheck,
    color: "#f87171",
    phase: "Support",
    title: "Ongoing Protection & Support",
    body: "We provide continuous maintenance, updates, and support to keep your security systems running reliably.",
    points: [
        "Technical support access",
        "System maintenance",
        "Security updates",
        "Rapid response assistance",
    ],
    },
]

export const checklist = [
    "Dedicated security specialists",
    "Real-time deployment updates",
    "System activation verification",
    "Ongoing monitoring & support",
    "Minimal disruption to daily operations",
]