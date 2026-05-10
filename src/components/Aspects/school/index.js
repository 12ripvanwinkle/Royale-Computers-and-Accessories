import {CalendarCheck, BookOpen, MessageSquareHeart, Wallet, 
    GraduationCap, School, BookOpenCheck, Users,
    Settings2, SlidersHorizontal, DatabaseZap, Users2, LifeBuoy, ArrowRight,
    CheckCircle2, CalendarClock, ClipboardList, Rocket, ShieldCheck,
    MousePointerClick, TrendingUp, HeadphonesIcon, Star, 
} from "lucide-react";

export const features = [
  {
    id: "students", span: 1,
    icon: Users, color: "#93c5fd",
    pill: "Core module", eyebrow: "Student Management",
    headline: "Every student. One profile.",
    body: "A centralised record covering enrolment, academic history, behaviour notes, and documents — accessible by authorised staff with a full audit trail.",
    bullets: [
      "Personal info, contacts & demographics",
      "Academic history, grades & transcripts",
      "Enrolment status — active, transferred, alumni",
      "GDPR-compliant document storage",
    ],
    stats: [["Unlimited", "Records"], ["GDPR", "Compliant"], ["Full", "Audit trail"]],
  },
  {
    id: "attendance", span: 1,
    icon: CalendarCheck, color: "#4ade80",
    pill: "Automated", eyebrow: "Attendance Tracking",
    headline: "Real-time register. Zero paperwork.",
    body: "Mark attendance by class or school-wide in seconds. Absences and patterns flagged automatically — parents notified instantly.",
    bullets: [
      "One-tap class or school-wide register",
      "Auto-flag absences & late arrivals",
      "Instant parent SMS & email alerts",
      "Attendance trend reports by term",
    ],
    stats: [["< 30s", "To mark a class"], ["Auto", "Parent alerts"]],
  },
  {
    id: "grades", span: 1,
    icon: BookOpen, color: "#a78bfa",
    pill: "Flexible", eyebrow: "Grades & Reporting",
    headline: "Grades entered once. Reports done.",
    body: "Support letter grades, percentages, GPA, or custom rubrics. Progress reports and transcripts generate automatically at term end.",
    bullets: [
      "Custom grading schemes per subject",
      "Per-subject & overall GPA tracking",
      "Auto-generated report cards",
      "Performance trend analysis",
    ],
    stats: [["Auto", "Report cards"], ["Custom", "Grading schemes"]],
  },
  {
    id: "parents", span: 1,
    icon: MessageSquareHeart, color: "#5eead4",
    pill: "Always-on", eyebrow: "Parent Portal",
    headline: "Keep parents in the loop.",
    body: "A dedicated portal where parents check grades, attendance, notices, and fee balances — reducing admin calls and building school-home trust.",
    bullets: [
      "Live grade & attendance visibility",
      "Direct messaging with teachers",
      "School notices & event calendar",
      "Mobile-friendly — no app needed",
    ],
    stats: [["Real-time", "Grade access"], ["Direct", "Messaging"]],
  },
  {
    id: "fees", span: 2,
    icon: Wallet, color: "#f87171",
    pill: "Auto billing", eyebrow: "Fee Management",
    headline: "Fees collected. Finances clear.",
    body: "Set fee structures, generate invoices, track payments, and send automated reminders — all without a spreadsheet in sight.",
    bullets: [
      "Custom fee structures per class or year group",
      "Auto invoice generation & delivery",
      "Overdue payment reminders",
      "Financial summary reports",
    ],
    stats: [["Auto", "Invoicing"], ["Zero", "Manual chasing"], ["Full", "Finance reports"]],
  },
]

export const Stats = [
    { icon: School,        value: "500+",  label: "Schools Onboarded"    },
    { icon: GraduationCap, value: "120k+", label: "Students Managed"     },
    { icon: Users,         value: "8,000+",label: "Teachers & Staff"     },
    { icon: BookOpenCheck, value: "99.9%", label: "Platform Uptime"      },
]

export const phases = [
    { number: "01", title: "Setup",      sub: "Configure",   accent: "#93c5fd" },
    { number: "02", title: "Customise",  sub: "Tailor",      accent: "#a78bfa" },
    { number: "03", title: "Migrate",    sub: "Transfer",    accent: "#5eead4" },
    { number: "04", title: "Train",      sub: "Onboard",     accent: "#4ade80" },
    { number: "05", title: "Support",    sub: "Sustain",     accent: "#fbbf24" },
];

export const services = [
  {
    id: "setup",
    icon: Settings2,
    color: "#93c5fd",
    phase: "Foundation",
    title: "System Setup & Configuration",
    body: "We configure your school structure, user roles, academic calendar, and modules so the platform reflects how your institution actually operates.",
    points: ["School structure & year groups", "User roles & access permissions", "Academic calendar & terms", "Module activation"],
    stats: [
      { value: "< 5 days",  label: "Avg. setup time" },
      { value: "Zero",      label: "Downtime" },
      { value: "Dedicated", label: "Setup engineer" },
    ],
    span: 2,
  },
  {
    id: "custom",
    icon: SlidersHorizontal,
    color: "#a78bfa",
    phase: "School-specific",
    title: "Customisation",
    body: "Grading schemes, report templates, fee structures, and workflows configured to match exactly how your school runs.",
    points: ["Custom grading & report templates", "School-specific fee structures", "Branded parent portal", "Custom fields & data points"],
    span: 1,
  },
  {
    id: "migration",
    icon: DatabaseZap,
    color: "#5eead4",
    phase: "Existing records",
    title: "Data Migration",
    body: "Student records, academic history, and fee data transferred, cleaned, mapped, and verified before anything goes live.",
    points: ["CSV, Excel & legacy imports", "Data cleaning & deduplication", "Pre-migration audit report", "Rollback safety net"],
    span: 1,
  },
  {
    id: "training",
    icon: Users2,
    color: "#4ade80",
    phase: "Role-based",
    title: "Staff Training & Onboarding",
    body: "Separate training tracks for admins, teachers, and office staff — each focused only on the modules they'll use, so no one is overwhelmed on go-live day.",
    points: ["Role-segmented training sessions", "Live walkthrough & Q&A", "Recorded sessions for new hires", "Quick-reference user guides"],
    span: 2,
  },
  {
    id: "support",
    icon: LifeBuoy,
    color: "#fbbf24",
    phase: "Post-launch",
    title: "Ongoing Technical Support",
    body: "Our support team handles issues, updates, and change requests so your staff can focus on teaching — not troubleshooting.",
    points: ["Dedicated support channel", "Bug fixes & platform updates", "Change request handling", "Regular check-in calls"],
    stats: [
      { value: "24/7", label: "Support access" },
      { value: "< 4h", label: "Response SLA" },
    ],
    span: 3,
  },
]

export const HowItWorksStats = [
    { value: "3",  unit: "wks",  label: "Avg. implementation",     color: "#93c5fd" },
    { value: "<5",   unit: "days", label: "System setup",             color: "#a78bfa" },
    { value: "100%", unit: null,   label: "Data verified pre-launch", color: "#4ade80" },
    { value: "24/7", unit: null,   label: "Post-launch support",      color: "#fbbf24" },
]

export const steps = [
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
]

export const checklist = [
    "Dedicated implementation manager",
    "Weekly progress updates",
    "Go-live sign-off checklist",
    "30-day post-launch review",
    "No disruption to school operations",
]

export const reasons = [
  {
    id: "edu",
    icon: GraduationCap,
    color: "#93c5fd",
    tag: "Built for schools",
    title: "Designed From the Inside Out",
    body: "Every feature, workflow, and data field was built around how schools actually run — not bolted onto a generic platform.",
    points: ["School-native data structures", "Education-specific workflows", "Curriculum & exam-aware", "Safeguarding built in"],
    span: 1,
  },
  {
    id: "ui",
    icon: MousePointerClick,
    color: "#a78bfa",
    tag: "No training required*",
    title: "Built for People, Not Just Admins",
    body: "Whether it's a teacher marking a register on their phone or a parent checking grades — the interface is clean, obvious, and fast. No manuals, no guesswork.",
    points: ["Fast registers & grade entry", "Full control, no complexity", "Clear, calm parent portal", "Mobile-first design"],
    roles: [
      { label: "Admin",   sub: "Full control, no complexity",  color: "#a78bfa" },
      { label: "Teacher", sub: "Fast registers & grade entry", color: "#5eead4" },
      { label: "Parent",  sub: "Clear, calm, always readable", color: "#93c5fd" },
    ],
    stats: [
      { value: "< 1 day", label: "Avg. staff adoption" },
      { value: "4.9 / 5", label: "Ease-of-use rating" },
    ],
    span: 2,
  },
  {
    id: "scale",
    icon: TrendingUp,
    color: "#4ade80",
    tag: "Grows with you",
    title: "From 80 Students to 8,000",
    body: "Single-campus or multi-site — the platform scales without re-implementation or price shocks.",
    points: ["Single & multi-campus support", "Unlimited student records", "Per-module activation", "No re-setup as you grow"],
    stats: [
      { value: "80–8k+",    label: "Students supported" },
      { value: "Multi-site", label: "Campus ready" },
    ],
    span: 1,
  },
  {
    id: "support",
    icon: HeadphonesIcon,
    color: "#fbbf24",
    tag: "Always-on",
    title: "Never Left on Your Own",
    body: "A dedicated support team that knows your school's setup — not a generic helpdesk reading from a script.",
    points: ["Dedicated account support", "Role-based training sessions", "Recorded help library", "Regular platform updates"],
    stats: [
      { value: "24/7", label: "Support access" },
      { value: "< 4h", label: "Response SLA" },
    ],
    span: 1,
  },
]

export const trustStats = [
  { value: "200+", label: "Schools onboarded",    color: "#93c5fd" },
  { value: "98%",  label: "Renewal rate",          color: "#4ade80" },
  { value: "4.9",  label: "Avg. satisfaction",     color: "#fbbf24" },
  { value: "50k+", label: "Students on platform",  color: "#a78bfa" },
]

export const testimonials = [
  { quote: "The attendance module alone saved our admin team two hours every morning. Everything just works.", name: "Sandra M.", role: "Head of Admin, Greenfield Academy" },
  { quote: "Parents actually use the portal — that was our biggest surprise. The app is genuinely easy.", name: "Mr. Osei", role: "Principal, Lakeside Primary" },
  { quote: "We moved from spreadsheets to this in under a week. The migration team was excellent.", name: "Yvonne K.", role: "IT Coordinator, Meridian High" },
]

export const promises = [
  "Education-first platform", "Intuitive for every role",
  "Scales as you grow", "Support that knows your school",
  "Your data, always yours", "No hidden costs",
]