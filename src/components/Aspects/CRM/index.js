import {
  BarChart3, Users, Zap,
  Mail, PieChart, ArrowRight, CheckCircle2,
  UserSearch, TrendingUp, MessageSquare,
  Monitor, Sliders, GraduationCap, HeadphonesIcon, RefreshCw, 
  Target, MousePointerClick, Star, ShieldCheck, 
} from "lucide-react";

export const features = [
  {
    id: "pipeline", mdSpan: 2,
    icon: BarChart3, color: "#93c5fd",
    pill: "Core", eyebrow: "Pipeline Management",
    headline: "See every deal. Miss nothing.",
    body: "A real-time visual pipeline gives your team full visibility from first contact to closed won — so nothing slips and every rep knows exactly what to do next.",
    bullets: [
      "Drag-and-drop deal stages",
      "Weighted probability & forecast values",
      "Stale deal alerts & follow-up reminders",
      "Multi-pipeline support per team",
    ],
    stats: [["Real-time", "Pipeline view"], ["Multi", "Pipelines"], ["Auto", "Deal alerts"]],
  },
  {
    id: "contacts", mdSpan: 1,
    icon: Users, color: "#a78bfa",
    pill: "360° view", eyebrow: "Contact Management",
    headline: "Every relationship in one place.",
    body: "Full contact and company records with interaction history, notes, and activity timeline — shared across your entire team, always up to date.",
    bullets: [
      "Unified contact & company profiles",
      "Full interaction & activity timeline",
      "Custom fields & segmentation tags",
      "Duplicate detection & merge",
    ],
    stats: [["Unlimited", "Contacts"], ["Shared", "Team access"]],
  },
  {
    id: "automation", mdSpan: 1,
    icon: Zap, color: "#fbbf24",
    pill: "Time-saver", eyebrow: "Sales Automation",
    headline: "Follow-ups that run themselves.",
    body: "Trigger emails, tasks, and reminders based on deal stage or inactivity — so your team focuses on selling, not chasing.",
    bullets: [
      "Stage-based workflow triggers",
      "Auto task creation & assignment",
      "Inactivity & re-engagement alerts",
      "Round-robin lead assignment",
    ],
    stats: [["Auto", "Follow-ups"], ["Zero", "Missed leads"]],
  },
  {
    id: "email", mdSpan: 2,
    icon: Mail, color: "#5eead4",
    pill: "Built-in", eyebrow: "Email & Communication",
    headline: "Every conversation tracked.",
    body: "Send, receive, and log emails directly in the CRM. Sequences, templates, and open tracking — no copy-paste, no switching tabs.",
    bullets: [
      "Two-way sync — Gmail & Outlook",
      "Email sequences & drip campaigns",
      "Open, click & reply tracking",
      "Shared templates & team inbox",
    ],
    stats: [["2-way", "Email sync"], ["Live", "Open tracking"]],
  },
  {
    id: "reporting", mdSpan: 3,
    icon: PieChart, color: "#f87171",
    pill: "Live data", eyebrow: "Reporting & Analytics",
    headline: "Know your numbers. Always.",
    body: "Revenue forecast, rep performance, and pipeline health — updated in real time. No spreadsheet required.",
    bullets: [
      "Revenue forecast & quota tracking",
      "Rep-level performance dashboards",
      "Conversion rate by stage & source",
      "Exportable PDF & CSV reports",
    ],
    stats: [["Real-time", "Dashboards"], ["Custom", "Reports"], ["Export", "PDF & CSV"]],
  },
];

export const modules = [
  {
    id: 1,
    icon: UserSearch,
    color: '#93c5fd',
    eyebrow: 'Lead Management',
    tag: 'Capture & qualify',
    title: 'Turn Every Lead into an Opportunity',
    description: 'Capture leads from any source, score them automatically, and route them to the right rep before they go cold. Nothing falls through the cracks.',
    points: ['Multi-source lead capture', 'Automatic lead scoring', 'Smart routing rules', 'Duplicate detection'],
    stats: [
      { value: '3×', label: 'Faster qualification' },
      { value: 'Zero', label: 'Leads dropped' },
    ],
    span: 2,
    VisualComp: null, // replace with your animated component
  },
  {
    id: 2,
    icon: TrendingUp,
    color: '#4ade80',
    eyebrow: 'Pipeline',
    tag: 'Full visibility',
    title: 'Pipeline That Moves With You',
    description: "Drag-and-drop stages, deal health indicators, and real-time forecasting — so your team always knows what to push and what's stalling.'",
    points: ['Custom pipeline stages', 'Deal health scoring', 'Revenue forecasting', 'Stall detection & alerts'],
    stats: [
      { value: 'Real-time', label: 'Forecast updates' },
      { value: 'Custom', label: 'Stage logic' },
    ],
    span: 1,
    VisualComp: null,
  },
  {
    id: 3,
    icon: MessageSquare,
    color: '#a78bfa',
    eyebrow: 'Engagement',
    tag: 'Omnichannel',
    title: 'Every Conversation. One Thread.',
    description: 'Email, calls, and notes unified under each contact — so every rep picks up exactly where the last one left off, every single time.',
    points: ['Unified contact timeline', 'Email & call logging', 'Sequence automation', 'Team handoff notes'],
    stats: [
      { value: '100%', label: 'Conversation history' },
      { value: 'Auto', label: 'Follow-up sequences' },
    ],
    span: 1,
    VisualComp: null,
  },
  {
    id: 4,
    icon: BarChart3,
    color: '#fbbf24',
    eyebrow: 'Reporting',
    tag: 'Decision-ready',
    title: 'Reports That Actually Drive Decisions',
    description: 'Pre-built and custom dashboards covering pipeline health, rep performance, conversion rates, and revenue — updated live, not at month end.',
    points: ['Live pipeline dashboards', 'Rep performance tracking', 'Conversion funnel analysis', 'Exportable for any stakeholder'],
    stats: [
      { value: 'Live', label: 'Data refresh' },
      { value: 'Custom', label: 'Dashboard builder' },
      { value: 'Export', label: 'Any format' },
    ],
    span: 2,
    VisualComp: null,
  },
]

export const ctaChecklist = [
  'No long-term contracts',
  'Onboarding included',
  'Data migration handled',
  'Live in days, not months',
]

export const services = [
  {
    id: 'setup',
    icon: Monitor,
    color: '#93c5fd',
    phase: 'End-to-end',
    title: 'Live in days. Zero lift on your side.',
    body: 'We handle everything — data migration, pipeline config, user roles, and integrations. Your team shows up on go-live day ready to sell, not troubleshoot.',
    points: ['Data migration from any source', 'Pipeline & stage configuration', 'User roles & permissions', 'Third-party integrations'],
    stats: [
      { value: '< 5 days', label: 'Avg. go-live' },
      { value: '100%',     label: 'Data verified' },
      { value: 'Zero',     label: 'IT overhead' },
    ],
    span: 2,
  },
  {
    id: 'custom',
    icon: Sliders,
    color: '#a78bfa',
    phase: 'Tailored',
    title: 'Built for how your team actually sells.',
    body: 'Pipelines, fields, and automations shaped around your process — not a generic template your reps work around.',
    points: ['Custom pipeline stages', 'Bespoke fields & data points', 'Workflow & trigger automation', 'Branded client-facing views'],
    stats: null,
    span: 1,
  },
  {
    id: 'training',
    icon: GraduationCap,
    color: '#4ade80',
    phase: 'Role-based',
    title: 'Your team uses it. From day one.',
    body: 'Role-specific sessions so every rep, manager, and admin knows exactly what they need — no bloated all-hands that wastes everyone\'s afternoon.',
    points: ['Role-segmented sessions', 'Live walkthrough & Q&A', 'Recorded library for new hires', 'Quick-reference playbooks'],
    stats: null,
    span: 1,
  },
  {
    id: 'support',
    icon: HeadphonesIcon,
    color: '#fbbf24',
    phase: '24 / 7',
    title: 'Problems solved before they hit your pipeline.',
    body: 'A dedicated team that knows your CRM setup — not a generic helpdesk reading from a script.',
    points: ['Dedicated account support', 'Same-day issue resolution', 'Proactive health checks', 'Priority escalation path'],
    stats: [
      { value: '24/7', label: 'Support access' },
      { value: '< 2h', label: 'Response SLA' },
    ],
    span: 2,
  },
  {
    id: 'optimise',
    icon: RefreshCw,
    color: '#5eead4',
    phase: 'Proactive',
    title: 'A CRM that gets sharper as you grow.',
    body: 'Regular audits, workflow reviews, and adoption reports keep your CRM evolving with your team — not a static tool you quietly outgrow.',
    points: ['Quarterly workflow audits', 'Data hygiene & deduplication', 'Automation refinement', 'Adoption & usage reviews'],
    stats: null,
    span: 3,
  },
]

export const ctaPoints = [
  'No long-term contracts',
  'Onboarding included',
  'Data migration handled',
  'Live in days, not months',
]

export const reasons = [
  {
    id: 'built',
    icon: Target,
    color: '#93c5fd',
    tag: 'Sales-first',
    title: 'Built Around the Way Deals Get Closed.',
    body: 'Every pipeline stage, automation trigger, and reporting view was designed around real sales workflows — not adapted from a generic database tool.',
    points: ['Sales-native pipeline logic', 'Deal-stage automation', 'Revenue-focused reporting', 'No bloat, no noise'],
    span: 1,
  },
  {
    id: 'ease',
    icon: MousePointerClick,
    color: '#a78bfa',
    tag: 'Fast adoption',
    title: 'Reps Use It. Managers Trust It.',
    body: 'A CRM only works if your team actually opens it. Ours is fast, obvious, and built for the way reps work — on the go, under pressure, between calls.',
    points: ['One-click deal updates', 'Mobile-first design', 'Clean manager dashboards', 'No manual data entry'],
    roles: [
      { label: 'Sales Rep',  sub: 'Fast updates, zero friction',   color: '#a78bfa' },
      { label: 'Manager',    sub: 'Live pipeline visibility',       color: '#5eead4' },
      { label: 'Leadership', sub: 'Revenue forecasts on demand',    color: '#93c5fd' },
    ],
    stats: [
      { value: '< 1 day', label: 'Avg. rep adoption' },
      { value: '4.8 / 5', label: 'Ease-of-use rating' },
    ],
    span: 2,
  },
  {
    id: 'scale',
    icon: TrendingUp,
    color: '#4ade80',
    tag: 'Grows with you',
    title: 'From 5 Reps to 500.',
    body: 'Start lean, scale without re-implementation. Add users, pipelines, and modules as your team grows — no migrations, no price shocks.',
    points: ['Unlimited contacts & deals', 'Multi-pipeline support', 'Per-seat flexible pricing', 'No re-setup as you scale'],
    stats: [
      { value: '5–500+',  label: 'Seats supported' },
      { value: 'Zero',    label: 'Re-implementation' },
    ],
    span: 1,
  },
  {
    id: 'support',
    icon: HeadphonesIcon,
    color: '#fbbf24',
    tag: 'Always-on',
    title: 'Support That Knows Your Pipeline.',
    body: 'Not a generic helpdesk — a dedicated team that knows your CRM setup and responds before small problems become lost deals.',
    points: ['Dedicated account manager', 'Same-day issue resolution', 'Proactive health checks', 'Regular optimisation reviews'],
    stats: [
      { value: '24/7', label: 'Support access' },
      { value: '< 2h', label: 'Response SLA' },
    ],
    span: 1,
  },
]

export const trustStats = [
  { value: '500+',  label: 'Businesses onboarded',  color: '#93c5fd' },
  { value: '96%',   label: 'Renewal rate',           color: '#4ade80' },
  { value: '4.8',   label: 'Avg. satisfaction',      color: '#fbbf24' },
  { value: '2.4×',  label: 'Avg. pipeline growth',   color: '#a78bfa' },
]

export const testimonials = [
  {
    quote: "We went from spreadsheets to a fully live CRM in four days. The pipeline visibility alone changed how our managers run their weekly reviews.",
    name: "Daniel R.",
    role: "Head of Sales, Vertex Solutions",
  },
  {
    quote: "Our reps actually use it — every day. That's never happened with any CRM we've tried before. The interface just gets out of the way.",
    name: "Priya M.",
    role: "Sales Director, Clearpath Group",
  },
  {
    quote: "The support team knows our setup inside out. When we had an issue mid-quarter, it was resolved in under an hour. No stress, no lost deals.",
    name: "James O.",
    role: "CEO, Meridian Partners",
  },
]

export const promises = [
  'Sales-first platform',
  'Adopted in under a day',
  'Scales without friction',
  'Support that knows your setup',
  'Your data, always yours',
  'No hidden costs',
]