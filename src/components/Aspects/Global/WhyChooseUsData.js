import {
  GraduationCap,
  MousePointerClick,
  TrendingUp,
  HeadphonesIcon,
  ShieldCheck,
  Fingerprint,
  ScanFace,
  LockKeyhole,
  Users,
  BarChart3,
  Workflow,
  BatteryCharging,
  Gauge,
  Activity,
  Camera,
  MonitorSmartphone, 
} from "lucide-react"

export const whyChooseUsData = {

  // ── School Management System ───────────────────────────
  school: {
    subtitle: "The Difference",

    heading: "Why Schools Choose Us",

    description:
      "Built specifically for schools — not adapted from generic software. Simple to use, scalable, and designed around real school operations.",

    reasons: [
      {
        id: "edu",
        icon: GraduationCap,
        color: "#93c5fd",
        tag: "Built for schools",
        title: "Designed From the Inside Out",
        body: "Every workflow and feature built specifically around how schools operate daily.",
        points: [
          "Education-first workflows",
          "Curriculum-aware platform",
          "Attendance & grading tools",
          "Built for admins & teachers",
        ],
        span: 1,
      },

      {
        id: "ui",
        icon: MousePointerClick,
        color: "#a78bfa",
        tag: "Easy to use",
        title: "Simple for Every Role",
        body: "Clean interfaces for administrators, teachers, parents, and students.",
        points: [
          "Fast onboarding",
          "Mobile-friendly interface",
          "Minimal training required",
          "Clean dashboard experience",
        ],

        roles: [
          {
            label: "Admin",
            sub: "Full visibility & control",
            color: "#a78bfa",
          },

          {
            label: "Teacher",
            sub: "Quick attendance & grading",
            color: "#5eead4",
          },

          {
            label: "Parent",
            sub: "Clear academic visibility",
            color: "#93c5fd",
          },
        ],

        stats: [
          { value: "<1 Day", label: "Staff onboarding" },
          { value: "4.9/5", label: "Ease-of-use rating" },
        ],

        span: 2,
      },

      {
        id: "scale",
        icon: TrendingUp,
        color: "#4ade80",
        tag: "Scalable",
        title: "Built to Grow",
        body: "Supports schools of every size without complicated migrations.",
        points: [
          "Single & multi-campus support",
          "Unlimited records",
          "Cloud-based access",
          "Flexible module activation",
        ],

        stats: [
          { value: "80–8k+", label: "Students supported" },
          { value: "Multi-site", label: "Campus ready" },
        ],

        span: 1,
      },

      {
        id: "support",
        icon: HeadphonesIcon,
        color: "#fbbf24",
        tag: "Reliable support",
        title: "Support That Knows Schools",
        body: "Fast support from people familiar with educational workflows and systems.",
        points: [
          "Dedicated support",
          "Platform updates",
          "Training assistance",
          "Rapid response times",
        ],

        stats: [
          { value: "24/7", label: "Support access" },
          { value: "<4h", label: "Response SLA" },
        ],

        span: 1,
      },
    ],

    trustStats: [
      {
        value: "200+",
        label: "Schools onboarded",
        color: "#93c5fd",
      },

      {
        value: "98%",
        label: "Renewal rate",
        color: "#4ade80",
      },

      {
        value: "4.9",
        label: "Avg. satisfaction",
        color: "#fbbf24",
      },

      {
        value: "50k+",
        label: "Students managed",
        color: "#a78bfa",
      },
    ],

    testimonials: [
      {
        quote:
          "The platform simplified attendance, grading, and reporting immediately.",
        name: "Sandra M.",
        role: "School Administrator",
      },

      {
        quote:
          "Easy for teachers and surprisingly simple for parents to use.",
        name: "Mr. Osei",
        role: "Principal",
      },

      {
        quote:
          "Implementation was smooth and the support team was excellent.",
        name: "Yvonne K.",
        role: "IT Coordinator",
      },
    ],

    testimonialsLabel: "Trusted by schools",

    promises: [
      "Education-first platform",
      "Easy onboarding",
      "Scalable infrastructure",
      "Dedicated support",
      "Secure cloud access",
      "No hidden costs",
    ],

    cta: {
      promisesLabel: "What You Can Expect",

      buttonLabel: "Book a Free Consultation",

      buttonColor: "#93c5fd",

      buttonHoverColor: "#bfdbfe",

      buttonTextColor: "#0f172a",
    },
  },

  accessControl: {
    subtitle: "Why Businesses Choose Us",

    heading: "Built for Modern Facility Security",

    description:
      "Secure, scalable, and easy-to-manage access control solutions designed to protect people, assets, and operations.",

    reasons: [
      {
        id: "security",

        icon: ShieldCheck,

        color: "#93c5fd",

        tag: "Advanced security",

        title: "Smarter Access Protection",

        body:
          "Modern authentication systems designed to secure facilities while simplifying access management.",

        points: [
          "Role-based access permissions",
          "Real-time entry monitoring",
          "Unauthorized access prevention",
          "Centralized management",
        ],

        span: 1,
      },

      {
        id: "authentication",

        icon: Fingerprint,

        color: "#a78bfa",

        tag: "Modern authentication",

        title: "Flexible Access Methods",

        body:
          "From biometric scanners to mobile access, manage entry securely across your entire organization.",

        points: [
          "Biometric authentication",
          "RFID & keycard access",
          "PIN & keypad systems",
          "Mobile access control",
        ],

        roles: [
          {
            label: "Admin",
            sub: "Centralized facility control",
            color: "#a78bfa",
          },

          {
            label: "Staff",
            sub: "Fast & secure access",
            color: "#5eead4",
          },

          {
            label: "Security",
            sub: "Real-time activity monitoring",
            color: "#93c5fd",
          },
        ],

        stats: [
          {
            value: "24/7",
            label: "Access monitoring",
          },

          {
            value: "Multi-site",
            label: "Facility support",
          },
        ],

        span: 2,
      },

      {
        id: "integration",

        icon: ScanFace,

        color: "#4ade80",

        tag: "Integrated systems",

        title: "Connected Security Infrastructure",

        body:
          "Integrates seamlessly with CCTV, alarms, and monitoring systems for complete facility visibility.",

        points: [
          "CCTV integration",
          "Alarm system connectivity",
          "Remote monitoring access",
          "Centralized activity logs",
        ],

        stats: [
          {
            value: "Real-Time",
            label: "Activity tracking",
          },

          {
            value: "Cloud Ready",
            label: "Remote access",
          },
        ],

        span: 1,
      },

      {
        id: "support",

        icon: HeadphonesIcon,

        color: "#fbbf24",

        tag: "Reliable support",

        title: "Ongoing Support & Maintenance",

        body:
          "From deployment to long-term maintenance, our team ensures your systems remain secure and operational.",

        points: [
          "Dedicated support access",
          "System maintenance",
          "Security updates",
          "Rapid issue response",
        ],

        stats: [
          {
            value: "24/7",
            label: "Support access",
          },

          {
            value: "<4h",
            label: "Response SLA",
          },
        ],

        span: 1,
      },
    ],

    trustStats: [
      {
        value: "24/7",
        label: "Access monitoring",
        color: "#93c5fd",
      },

      {
        value: "Multi-site",
        label: "Facility support",
        color: "#4ade80",
      },

      {
        value: "Real-Time",
        label: "Activity tracking",
        color: "#fbbf24",
      },

      {
        value: "Enterprise",
        label: "Security systems",
        color: "#a78bfa",
      },
    ],

    testimonials: [
      {
        quote:
          "Managing access across multiple offices became significantly easier after deployment.",

        name: "Daniel R.",

        role: "Operations Manager",
      },

      {
        quote:
          "The real-time monitoring and reporting gave our security team complete visibility.",

        name: "Melissa K.",

        role: "Security Supervisor",
      },

      {
        quote:
          "The installation process was smooth and caused almost no operational downtime.",

        name: "Andre T.",

        role: "Facilities Coordinator",
      },
    ],

    testimonialsLabel: "Trusted by modern businesses",

    promises: [
      "Advanced authentication systems",
      "Centralized access management",
      "Scalable security infrastructure",
      "Real-time monitoring",
      "Reliable technical support",
      "Seamless system integration",
    ],

    cta: {
      promisesLabel: "What You Can Expect",

      buttonLabel: "Book a Free Consultation",

      buttonColor: "#93c5fd",

      buttonHoverColor: "#bfdbfe",

      buttonTextColor: "#0f172a",
    },
  },

  crm: {
    subtitle: "Why Businesses Choose Us",

    heading: "Built for Smarter Customer Management",

    description:
      "Modern CRM software designed to help businesses manage relationships, streamline workflows, and improve sales performance.",

    reasons: [
      {
        id: "relationships",

        icon: Users,

        color: "#93c5fd",

        tag: "Customer focused",

        title: "Centralized Customer Management",

        body:
          "Manage customer interactions, sales activity, and communication from one streamlined platform.",

        points: [
          "Centralized contact database",
          "Customer interaction tracking",
          "Lead & pipeline management",
          "Organized sales workflows",
        ],

        span: 1,
      },

      {
        id: "automation",

        icon: Workflow,

        color: "#a78bfa",

        tag: "Workflow automation",

        title: "Built to Simplify Daily Operations",

        body:
          "Automate repetitive tasks, improve collaboration, and keep teams focused on growth instead of manual processes.",

        points: [
          "Sales workflow automation",
          "Task & follow-up reminders",
          "Team collaboration tools",
          "Custom workflow management",
        ],

        roles: [
          {
            label: "Sales",
            sub: "Track leads & close deals faster",
            color: "#a78bfa",
          },

          {
            label: "Support",
            sub: "Manage customer communication",
            color: "#5eead4",
          },

          {
            label: "Management",
            sub: "Monitor performance in real time",
            color: "#93c5fd",
          },
        ],

        stats: [
          {
            value: "24/7",
            label: "Cloud accessibility",
          },

          {
            value: "Real-Time",
            label: "Business insights",
          },
        ],

        span: 2,
      },

      {
        id: "analytics",

        icon: BarChart3,

        color: "#4ade80",

        tag: "Data & insights",

        title: "Real-Time Business Visibility",

        body:
          "Track customer engagement, sales performance, and operational activity with clear reporting dashboards.",

        points: [
          "Sales performance dashboards",
          "Customer activity insights",
          "Pipeline tracking",
          "Custom business reports",
        ],

        stats: [
          {
            value: "Live",
            label: "Reporting dashboards",
          },

          {
            value: "Cloud-Based",
            label: "Remote access",
          },
        ],

        span: 1,
      },

      {
        id: "support",

        icon: HeadphonesIcon,

        color: "#fbbf24",

        tag: "Reliable support",

        title: "Support That Grows With You",

        body:
          "From onboarding to long-term scaling, our team helps ensure your CRM continues supporting your business growth.",

        points: [
          "Dedicated onboarding support",
          "Platform maintenance",
          "Continuous updates",
          "Rapid technical assistance",
        ],

        stats: [
          {
            value: "24/7",
            label: "Support access",
          },

          {
            value: "<4h",
            label: "Response SLA",
          },
        ],

        span: 1,
      },
    ],

    trustStats: [
      {
        value: "24/7",
        label: "Cloud accessibility",
        color: "#93c5fd",
      },

      {
        value: "Real-Time",
        label: "Business insights",
        color: "#4ade80",
      },

      {
        value: "Automated",
        label: "Workflow management",
        color: "#fbbf24",
      },

      {
        value: "Scalable",
        label: "Business growth support",
        color: "#a78bfa",
      },
    ],

    testimonials: [
      {
        quote:
          "The CRM gave our sales team complete visibility into leads and customer activity.",

        name: "Jason M.",

        role: "Sales Manager",
      },

      {
        quote:
          "Managing customer relationships and follow-ups became far more organized and efficient.",

        name: "Kimberly R.",

        role: "Operations Lead",
      },

      {
        quote:
          "The reporting dashboards helped us make better business decisions almost immediately.",

        name: "Andre P.",

        role: "Business Director",
      },
    ],

    testimonialsLabel: "Trusted by growing businesses",

    promises: [
      "Centralized customer management",
      "Workflow automation tools",
      "Real-time business insights",
      "Scalable cloud infrastructure",
      "Dedicated onboarding support",
      "Secure data management",
    ],

    cta: {
      promisesLabel: "What You Can Expect",

      buttonLabel: "Book a Free Consultation",

      buttonColor: "#93c5fd",

      buttonHoverColor: "#bfdbfe",

      buttonTextColor: "#0f172a",
    },
  },

  powerManagement: {
    subtitle: "Why Businesses Choose Us",

    heading: "Built for Reliable Power & Operational Efficiency",

    description:
      "Modern power management solutions designed to improve efficiency, reduce operational risk, and maintain reliable infrastructure performance.",

    reasons: [
      {
        id: "efficiency",

        icon: BatteryCharging,

        color: "#93c5fd",

        tag: "Energy optimization",

        title: "Smarter Power Management",

        body:
          "Monitor, control, and optimize power consumption across your infrastructure with centralized management tools.",

        points: [
          "Energy usage monitoring",
          "Load balancing solutions",
          "Operational efficiency tracking",
          "Centralized infrastructure control",
        ],

        span: 1,
      },

      {
        id: "monitoring",

        icon: Gauge,

        color: "#a78bfa",

        tag: "Real-time monitoring",

        title: "Continuous Visibility & Control",

        body:
          "Track power usage, detect irregularities, and maintain operational stability with real-time monitoring systems.",

        points: [
          "Live power monitoring",
          "Usage analytics & reporting",
          "Automated alerts & notifications",
          "Infrastructure performance insights",
        ],

        roles: [
          {
            label: "Operations",
            sub: "Monitor infrastructure performance",
            color: "#a78bfa",
          },

          {
            label: "IT Teams",
            sub: "Protect critical systems uptime",
            color: "#5eead4",
          },

          {
            label: "Management",
            sub: "Improve operational efficiency",
            color: "#93c5fd",
          },
        ],

        stats: [
          {
            value: "24/7",
            label: "Power monitoring",
          },

          {
            value: "Real-Time",
            label: "Usage insights",
          },
        ],

        span: 2,
      },

      {
        id: "stability",

        icon: Activity,

        color: "#4ade80",

        tag: "Reliable infrastructure",

        title: "Built for Stability & Reliability",

        body:
          "Protect critical operations with scalable infrastructure designed to reduce downtime and improve continuity.",

        points: [
          "Backup power integration",
          "Infrastructure protection",
          "Operational continuity support",
          "Scalable deployment options",
        ],

        stats: [
          {
            value: "Multi-site",
            label: "Infrastructure support",
          },

          {
            value: "Scalable",
            label: "System deployment",
          },
        ],

        span: 1,
      },

      {
        id: "support",

        icon: HeadphonesIcon,

        color: "#fbbf24",

        tag: "Reliable support",

        title: "Ongoing Maintenance & Support",

        body:
          "Our team provides continuous maintenance, optimization, and technical support to keep systems operating efficiently.",

        points: [
          "Dedicated technical support",
          "Continuous system optimization",
          "Maintenance & updates",
          "Rapid issue response",
        ],

        stats: [
          {
            value: "24/7",
            label: "Support access",
          },

          {
            value: "<4h",
            label: "Response SLA",
          },
        ],

        span: 1,
      },
    ],

    trustStats: [
      {
        value: "24/7",
        label: "Power monitoring",
        color: "#93c5fd",
      },

      {
        value: "Real-Time",
        label: "Usage insights",
        color: "#4ade80",
      },

      {
        value: "Scalable",
        label: "Infrastructure support",
        color: "#fbbf24",
      },

      {
        value: "Reliable",
        label: "Operational continuity",
        color: "#a78bfa",
      },
    ],

    testimonials: [
      {
        quote:
          "The monitoring tools gave us complete visibility into our power infrastructure and usage.",

        name: "David L.",

        role: "Facilities Manager",
      },

      {
        quote:
          "System performance and operational stability improved significantly after deployment.",

        name: "Michelle R.",

        role: "Operations Director",
      },

      {
        quote:
          "The installation process was smooth and the ongoing support has been excellent.",

        name: "Kevin T.",

        role: "Infrastructure Coordinator",
      },
    ],

    testimonialsLabel: "Trusted by modern businesses",

    promises: [
      "Real-time power monitoring",
      "Operational efficiency optimization",
      "Scalable infrastructure support",
      "Reliable system performance",
      "Dedicated technical support",
      "Continuous maintenance & updates",
    ],

    cta: {
      promisesLabel: "What You Can Expect",

      buttonLabel: "Book a Free Consultation",

      buttonColor: "#93c5fd",

      buttonHoverColor: "#bfdbfe",

      buttonTextColor: "#0f172a",
    },
  },

  cctv: {
    subtitle: "Why Businesses Choose Us",

    heading: "Built for Smarter Surveillance & Reliable Security",

    description:
      "Modern CCTV solutions designed to improve visibility, strengthen security, and provide real-time monitoring across your property and operations.",

    reasons: [
      {
        id: "coverage",

        icon: Camera,

        color: "#93c5fd",

        tag: "Smart surveillance",

        title: "Complete Visibility & Coverage",

        body:
          "Monitor critical areas with strategically designed surveillance systems built for real-world security needs.",

        points: [
          "HD & 4K surveillance cameras",
          "Wide-area coverage planning",
          "Indoor & outdoor deployment",
          "Centralized monitoring systems",
        ],

        span: 1,
      },

      {
        id: "monitoring",

        icon: MonitorSmartphone,

        color: "#a78bfa",

        tag: "Real-time monitoring",

        title: "Continuous Visibility & Control",

        body:
          "Access live footage, receive alerts, and monitor your property remotely with centralized surveillance management tools.",

        points: [
          "Live video monitoring",
          "Remote mobile viewing",
          "Motion detection alerts",
          "Video playback & reporting",
        ],

        roles: [
          {
            label: "Security Teams",
            sub: "Monitor incidents in real time",
            color: "#a78bfa",
          },

          {
            label: "Operations",
            sub: "Improve site visibility & oversight",
            color: "#5eead4",
          },

          {
            label: "Management",
            sub: "Access footage from anywhere",
            color: "#93c5fd",
          },
        ],

        stats: [
          {
            value: "24/7",
            label: "Live monitoring",
          },

          {
            value: "Real-Time",
            label: "Alerts & visibility",
          },
        ],

        span: 2,
      },

      {
        id: "reliability",

        icon: ShieldCheck,

        color: "#4ade80",

        tag: "Reliable protection",

        title: "Built for Stability & Security",

        body:
          "Protect your business with scalable surveillance infrastructure designed for reliable performance and long-term security.",

        points: [
          "Night vision support",
          "Secure video storage",
          "Multi-site monitoring",
          "Scalable surveillance systems",
        ],

        stats: [
          {
            value: "Multi-site",
            label: "Location support",
          },

          {
            value: "Scalable",
            label: "System expansion",
          },
        ],

        span: 1,
      },

      {
        id: "support",

        icon: HeadphonesIcon,

        color: "#fbbf24",

        tag: "Reliable support",

        title: "Ongoing Maintenance & Support",

        body:
          "Our team provides continuous maintenance, system optimization, and technical support to keep your CCTV infrastructure running smoothly.",

        points: [
          "Dedicated technical support",
          "Camera system maintenance",
          "Firmware & software updates",
          "Rapid issue response",
        ],

        stats: [
          {
            value: "24/7",
            label: "Support access",
          },

          {
            value: "<4h",
            label: "Response SLA",
          },
        ],

        span: 1,
      },
    ],

    trustStats: [
      {
        value: "24/7",
        label: "Live surveillance",
        color: "#93c5fd",
      },

      {
        value: "Real-Time",
        label: "Alerts & monitoring",
        color: "#4ade80",
      },

      {
        value: "Multi-site",
        label: "Coverage support",
        color: "#fbbf24",
      },

      {
        value: "Reliable",
        label: "Security infrastructure",
        color: "#a78bfa",
      },
    ],

    testimonials: [
      {
        quote:
          "The live monitoring and remote access features completely changed how we manage site security.",

        name: "David L.",

        role: "Facilities Manager",
      },

      {
        quote:
          "Camera coverage and footage quality exceeded expectations. The entire deployment was smooth.",

        name: "Michelle R.",

        role: "Operations Director",
      },

      {
        quote:
          "The system is easy to manage, and support has been responsive whenever we needed assistance.",

        name: "Kevin T.",

        role: "Infrastructure Coordinator",
      },
    ],

    testimonialsLabel: "Trusted by modern businesses",

    promises: [
      "24/7 live surveillance",
      "Remote monitoring access",
      "Scalable CCTV infrastructure",
      "Reliable video storage",
      "Dedicated technical support",
      "Continuous maintenance & updates",
    ],

    cta: {
      promisesLabel: "What You Can Expect",

      buttonLabel: "Book a Free Consultation",

      buttonColor: "#93c5fd",

      buttonHoverColor: "#bfdbfe",

      buttonTextColor: "#0f172a",
    },
  },
  
}