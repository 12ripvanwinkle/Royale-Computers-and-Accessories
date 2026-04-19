import {
  ScanSearch,
  LockKeyhole,
  ShieldCheck,
  Plug,
  Users,
  Activity,
  ClipboardList, 
  AppWindow, 
  Cloud, 
  Plug2, 
  UserCheck, 
  DatabaseZap, 
  Search, 
  Crosshair, 
  Wrench, 
  MonitorCheck, 
  PenTool, 
  FlaskConical, 
} from 'lucide-react'

import { AppSecMockup, CloudMockup, ApiMockup, IamMockup, DataMockup } from './ProtectionComponents';
import {AssessmentMockup, PenTestMockup, ImplementationMockup ,MonitoringMockup} from './ServicesComponents'

export const features = [
  {
    id: 1,
    icon: ScanSearch,
    accent: '#f87171',
    eyebrow: 'Proactive Defence',
    title: 'Vulnerability Scanning',
    description:'Automated scans continuously probe your network and display infrastructure for weaknesses — flagging misconfigurations, outdated firmware, and exposure points before they can be exploited.',
    highlights: ['Scheduled & on-demand scans', 'Firmware version checks', 'Exposure risk reports'],
    stat: { value: '24/7', label: 'Continuous scanning' },
    wide: true,
  },
  {
    id: 2,
    icon: LockKeyhole,
    accent: '#93c5fd',
    eyebrow: 'Data at Rest & in Transit',
    title: 'Data Encryption',
    description:'All content, credentials, and communications are encrypted end-to-end using AES-256 and TLS 1.3 — ensuring data is unreadable even if intercepted.',
    highlights: ['AES-256 at rest', 'TLS 1.3 in transit', 'Encrypted backups'],
    stat: { value: 'AES-256', label: 'Encryption standard' },
    wide: false,
  },
  {
    id: 3,
    icon: ShieldCheck,
    accent: '#4ade80',
    eyebrow: 'Identity Verification',
    title: 'Multi-Factor Authentication',
    description:'MFA is enforced across all CMS logins and admin panels — adding a second layer of verification that blocks unauthorised access even when credentials are compromised.',
    highlights: ['TOTP & SMS support', 'Enforced for all admins', 'SSO-compatible'],
    stat: { value: 'MFA', label: 'Enforced on all logins' },
    wide: false,
  },
  {
    id: 4,
    icon: Plug,
    accent: '#a78bfa',
    eyebrow: 'Integration Security',
    title: 'Secure APIs',
    description:'Every integration point uses authenticated, rate-limited APIs with token-based access — preventing abuse, injection attacks, and unauthorised data exchange between connected systems.',
    highlights: ['OAuth 2.0 & API tokens', 'Rate limiting enforced', 'Input sanitisation'],
    stat: { value: 'OAuth 2.0', label: 'Auth standard' },
    wide: false,
  },
  {
    id: 5,
    icon: Users,
    accent: '#5eead4',
    eyebrow: 'Least Privilege Access',
    title: 'Role-Based Access Control',
    description:'Define exactly who can view, edit, publish, or manage screens. RBAC ensures staff only access what they need — reducing insider risk and accidental content changes.',
    highlights: ['Custom role definitions', 'Per-screen permissions', 'Audit trail per user'],
    stat: { value: 'RBAC', label: 'Granular permissions' },
    wide: false,
  },
  {
    id: 6,
    icon: Activity,
    accent: '#fbbf24',
    eyebrow: 'Always Watching',
    title: 'Real-Time Threat Monitoring',
    description:'Live dashboards and automated alerts surface anomalies the moment they occur — unusual login attempts, unexpected content changes, or device disconnections trigger instant notifications.',
    highlights: ['Live event dashboard', 'Instant alert notifications', 'Anomaly detection'],
    stat: { value: '<1s', label: 'Alert response time' },
    wide: true,
  },
  {
    id: 7,
    icon: ClipboardList,
    accent: '#fb923c',
    eyebrow: 'Compliance & Assurance',
    title: 'Security Audits',
    description:'Regular third-party and internal audits verify that your signage infrastructure meets industry compliance standards — with full documentation provided for regulatory reporting.',
    highlights: ['Annual third-party audits', 'Compliance documentation', 'Remediation support'],
    stat: { value: 'Annual', label: 'Full audit cycle' },
    wide: true,
  },
];

export const layers = [
    { label: 'Input Validation', status: 'pass', color: '#4ade80' },
    { label: 'Auth Middleware', status: 'pass', color: '#4ade80' },
    { label: 'SQL Injection', status: 'blocked', color: '#f87171' },
    { label: 'XSS Filter', status: 'pass', color: '#4ade80' },
];

export const calls = [
    { method: 'GET', path: '/api/users', status: 200 },
    { method: 'POST', path: '/api/auth', status: 401 },
    { method: 'DELETE', path: '/api/data', status: 403 },
];

export const roles = [
    { role: 'Admin', perms: 'Full access', color: '#f87171' },
    { role: 'Editor', perms: 'Read + Write', color: '#fbbf24' },
    { role: 'Viewer', perms: 'Read only', color: '#4ade80' },
];

export const protections = [
  {
    id: 1,
    icon: AppWindow,
    accent: '#f87171',
    eyebrow: 'App Layer',
    title: 'Application Security',
    description: 'Protect your software at every layer — from input validation and authentication middleware to XSS filtering and SQL injection prevention. Code-level and runtime defences working together.',
    highlights: ['OWASP Top 10 coverage', 'Runtime app self-protection', 'Secure SDLC integration'],
    mockup: AppSecMockup,
    colSpan: 'md:col-span-3',
  },
  {
    id: 2,
    icon: Cloud,
    accent: '#93c5fd',
    eyebrow: 'Infrastructure',
    title: 'Cloud Security',
    description: 'Secure multi-cloud and hybrid environments with continuous posture management, workload protection, and region-level monitoring across all your cloud infrastructure.',
    highlights: ['CSPM & CWPP', 'Multi-region coverage', 'Zero-trust networking'],
    mockup: CloudMockup,
    colSpan: 'md:col-span-3',
  },
  {
    id: 3,
    icon: Plug2,
    accent: '#a78bfa',
    eyebrow: 'Integration Security',
    title: 'API Security',
    description: 'Authenticate, rate-limit, and monitor every API call. Prevent injection attacks, enforce schema validation, and log all gateway traffic for full audit trails.',
    highlights: ['OAuth 2.0 & JWT auth', 'Schema validation', 'Rate limiting & DDoS shield'],
    mockup: ApiMockup,
    colSpan: 'md:col-span-2',
  },
  {
    id: 4,
    icon: UserCheck,
    accent: '#fbbf24',
    eyebrow: 'Access Control',
    title: 'Identity & Access Management',
    description: 'Define and enforce who can access what — with granular role-based permissions, SSO, MFA, and full audit trails for every identity in your organisation.',
    highlights: ['SSO & MFA enforced', 'Granular RBAC', 'Privileged access management'],
    mockup: IamMockup,
    colSpan: 'md:col-span-2',
  },
  {
    id: 5,
    icon: DatabaseZap,
    accent: '#5eead4',
    eyebrow: 'Privacy & Compliance',
    title: 'Data Protection',
    description: 'Encrypt sensitive data at rest and in transit, mask PII in logs, and enforce retention policies — keeping you compliant with GDPR, HIPAA, and industry standards.',
    highlights: ['AES-256 + TLS 1.3', 'PII masking & tokenisation', 'GDPR / HIPAA ready'],
    mockup: DataMockup,
    colSpan: 'md:col-span-2',
  },
];

export const checks = [
    { label: 'Network exposure', score: 82, color: '#4ade80' },
    { label: 'Auth weaknesses', score: 61, color: '#fbbf24' },
    { label: 'Patch compliance', score: 90, color: '#4ade80' },
    { label: 'Data exposure', score: 44, color: '#f87171' },
];

export const steps = [
    { label: 'Reconnaissance', status: 'done' },
    { label: 'Vulnerability scan', status: 'done' },
    { label: 'Exploitation attempt', status: 'active' },
    { label: 'Privilege escalation', status: 'pending' },
    { label: 'Report generation', status: 'pending' },
];

export const tasks = [
    'Firewall configuration',
    'Endpoint agent deploy',
    'SIEM integration',
    'Policy enforcement',
    'Go-live & handover',
];

export const events = [
    { label: 'Brute-force blocked', time: 'just now', ok: false, color: '#f87171' },
    { label: 'Patch pushed — 14 hosts', time: '1m ago', ok: true, color: '#4ade80' },
    { label: 'Anomalous login flagged', time: '3m ago', ok: false, color: '#fbbf24' },
    { label: 'SSL cert renewed', time: '6m ago', ok: true, color: '#4ade80' },
];

export const services = [
  {
    id: 1,
    icon: Search,
    accent: '#fbbf24',
    eyebrow: 'Know Your Risk',
    title: 'Security Assessments',
    description: 'We perform thorough evaluations of your infrastructure, applications, and policies — scoring vulnerabilities, mapping attack surfaces, and delivering a prioritised remediation roadmap.',
    highlights: ['Risk scoring & ranking', 'Full attack surface mapping', 'Remediation roadmap included'],
    mockup: AssessmentMockup,
    colSpan: 'md:col-span-3',
  },
  {
    id: 2,
    icon: Crosshair,
    accent: '#f87171',
    eyebrow: 'Simulate Real Attacks',
    title: 'Penetration Testing',
    description:'Our ethical hackers replicate real-world attack techniques — probing networks, applications, and social engineering vectors to expose exploitable gaps before bad actors do.',
    highlights: ['Network & app pen testing', 'Social engineering simulations', 'Full exploitation report'],
    mockup: PenTestMockup,
    colSpan: 'md:col-span-3',
  },
  {
    id: 3,
    icon: Wrench,
    accent: '#a78bfa',
    eyebrow: 'Deploy & Configure',
    title: 'Implementation',
    description: 'From firewall setup to SIEM integration and endpoint deployment — we handle the full technical rollout of your security stack, configured to your environment and policies.',
    highlights: ['End-to-end deployment', 'SIEM & EDR integration', 'Staff handover & training'],
    mockup: ImplementationMockup,
    colSpan: 'md:col-span-2',
  },
  {
    id: 4,
    icon: MonitorCheck,
    accent: '#4ade80',
    eyebrow: '24 / 7 Coverage',
    title: 'Monitoring & Support',
    description:'Round-the-clock threat monitoring, real-time alerting, and a dedicated support team — so threats are caught and neutralised fast, with minimal disruption to your operations.',
    highlights: ['24/7 SOC monitoring', 'Sub-4hr incident response', 'Dedicated account engineer'],
    mockup: MonitoringMockup,
    colSpan: 'md:col-span-4',
  },
];

export const risks = [
    { label: 'Exposed endpoints', level: 'High', color: '#f87171', w: 85 },
    { label: 'Unpatched services', level: 'Med', color: '#fbbf24', w: 58 },
    { label: 'Access controls', level: 'Low', color: '#4ade80', w: 32 },
    { label: 'Data encryption', level: 'Med', color: '#fbbf24', w: 61 },
];

export const Designlayers = [
    { label: 'Perimeter', icon: '⬡', color: '#93c5fd', desc: 'Firewall + WAF' },
    { label: 'Network', icon: '⬡', color: '#a78bfa', desc: 'Segmentation' },
    { label: 'Application', icon: '⬡', color: '#5eead4', desc: 'Auth + APIs' },
    { label: 'Data', icon: '⬡', color: '#4ade80', desc: 'Encryption' },
];

export const ImplementationTasks = [
  'Firewall rules applied',
  'Endpoint agents deployed',
  'SIEM configured',
  'Policies enforced',
  'Go-live confirmed',
]

export const TestingSteps = [
  { label: 'Reconnaissance', done: true },
  { label: 'Scanning', done: true },
  { label: 'Exploitation', done: false },
  { label: 'Post-exploit', done: false },
  { label: 'Reporting', done: false },
];

export const MonitorEvents = [
  { label: 'Brute-force blocked', time: 'just now', color: '#f87171' },
  { label: 'Patch pushed — 14 hosts', time: '1m ago', color: '#4ade80' },
  { label: 'Anomalous login flagged', time: '3m ago', color: '#fbbf24' },
  { label: 'SSL cert renewed', time: '5m ago', color: '#4ade80' },
];

import {RiskMockup, DesignMockup, ProcessImplementationMockup, TestingMockup, MonitorMockup} from './HowItWorksComponents'

export const HowItWorksSteps = [
  {
    id: 1,
    icon: ScanSearch,
    accent: '#fbbf24',
    eyebrow: 'Step 01',
    title: 'Risk Assessment',
    description: 'We begin by mapping your entire attack surface — infrastructure, apps, and access points. Every risk is scored and ranked so remediation effort goes exactly where it matters most.',
    highlights: ['Full attack surface mapping', 'Risk scoring & prioritisation', 'Executive summary report'],
    mockup: RiskMockup,
    colSpan: 'md:col-span-3',
  },
  {
    id: 2,
    icon: PenTool,
    accent: '#93c5fd',
    eyebrow: 'Step 02',
    title: 'Security Design',
    description: 'Using assessment findings, we architect a layered defence strategy — from perimeter firewalls and network segmentation down to application-level controls and data encryption policies.',
    highlights: ['Defence-in-depth architecture', 'Zero-trust network design', 'Policy & compliance alignment'],
    mockup: DesignMockup,
    colSpan: 'md:col-span-3',
  },
  {
    id: 3,
    icon: Wrench,
    accent: '#a78bfa',
    eyebrow: 'Step 03',
    title: 'Implementation',
    description: 'Our engineers deploy, configure, and integrate every component of your security stack — from endpoint agents and SIEM platforms to firewall rules and access control policies.',
    highlights: ['End-to-end deployment', 'SIEM & EDR integration', 'Staff training & handover'],
    mockup: ProcessImplementationMockup,
    colSpan: 'md:col-span-2',
  },
  {
    id: 4,
    icon: FlaskConical,
    accent: '#f87171',
    eyebrow: 'Step 04',
    title: 'Testing',
    description: 'Before going live, we run penetration tests and red team exercises to validate every control — ensuring your defences hold up against real-world attack techniques.',
    highlights: ['Full penetration testing', 'Red team simulations', 'Vulnerability validation'],
    mockup: TestingMockup,
    colSpan: 'md:col-span-2',
  },
  {
    id: 5,
    icon: Activity,
    accent: '#4ade80',
    eyebrow: 'Step 05',
    title: 'Monitoring',
    description: 'Once live, our SOC team watches your environment around the clock — detecting anomalies, responding to incidents, and continuously tuning defences as your threat landscape evolves.',
    highlights: ['24/7 SOC monitoring', 'Sub-4hr incident response', 'Continuous posture improvement'],
    mockup: MonitorMockup,
    colSpan: 'md:col-span-2',
  },
];