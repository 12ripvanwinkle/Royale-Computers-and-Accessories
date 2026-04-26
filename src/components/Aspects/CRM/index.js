import { Users, TrendingUp, Target, Megaphone, BarChart3, GitBranch,
    HeadphonesIcon,
} from 'lucide-react'


export const customers = [
    { name: 'Acme Corp',       segment: 'Enterprise', value: '$48k', color: '#93c5fd' },
    { name: 'Bright Studio',   segment: 'SMB',        value: '$12k', color: '#4ade80' },
    { name: 'Delta Logistics', segment: 'Mid-market', value: '$29k', color: '#a78bfa' },
    { name: 'Ember Health',    segment: 'Enterprise', value: '$61k', color: '#93c5fd' },
]

export const stages = [
    { label: 'New',        count: 24, color: '#93c5fd',  w: 85 },
    { label: 'Contacted',  count: 18, color: '#a78bfa',  w: 65 },
    { label: 'Qualified',  count: 11, color: '#fbbf24',  w: 42 },
    { label: 'Proposal',   count: 6,  color: '#5eead4',  w: 25 },
    { label: 'Closed',     count: 3,  color: '#4ade80',  w: 14 },
]

export const flows = [
    { label: 'Lead captured',        trigger: 'Form submit',  color: '#93c5fd' },
    { label: 'Welcome email sent',   trigger: 'Auto — 0min',  color: '#a78bfa' },
    { label: 'Follow-up scheduled',  trigger: 'Auto — 2 days', color: '#5eead4' },
    { label: 'Assigned to sales',    trigger: 'Auto — 5 days', color: '#4ade80' },
]

export const tasks = [
    { label: 'Invoice auto-generated', color: '#fbbf24' },
    { label: 'Contract sent for sign', color: '#fbbf24' },
    { label: 'Task assigned to CSM',   color: '#fbbf24' },
    { label: 'Onboarding email fired',  color: '#fbbf24' },
]

import {CustomerDb, Sales, Lead, Marketing, Reporting, Workflow} from './Components'

export const features = [
    {
        id: 1,
        icon: Users,
        accent: '#93c5fd',
        eyebrow: 'Central Record',
        title: 'Customer Database',
        stat: { value: '360°', label: 'Customer view' },
        description: 'A single source of truth for every customer — contact details, interaction history, deal history, and segment tags all stored, searchable, and accessible by your entire team in real time.',
        highlights: ['Unified contact profiles', 'Full interaction history', 'Segment & tag filtering'],
        mockup: CustomerDb,
    },
    {
        id: 2,
        icon: TrendingUp,
        accent: '#4ade80',
        eyebrow: 'Revenue Intelligence',
        title: 'Sales Tracking',
        stat: { value: 'Live', label: 'Pipeline visibility' },
        description: 'Track every deal from first touch to close — with live revenue dashboards, win/loss analysis, rep performance metrics, and forecast accuracy tools that keep your sales team focused and on target.',
        highlights: ['Live revenue dashboards', 'Win/loss analysis', 'Forecast accuracy tracking'],
        mockup: Sales,
    },
    {
        id: 3,
        icon: Target,
        accent: '#a78bfa',
        eyebrow: 'Pipeline Management',
        title: 'Lead Management',
        stat: { value: 'Visual', label: 'Drag-and-drop pipeline' },
        description: 'Capture, score, and advance leads through a fully customisable pipeline — with automatic assignment rules, follow-up reminders, and stage-by-stage conversion tracking to keep deals moving.',
        highlights: ['Custom pipeline stages', 'Lead scoring & routing', 'Conversion rate tracking'],
        mockup: Lead,
    },
    {
        id: 4,
        icon: Megaphone,
        accent: '#5eead4',
        eyebrow: 'Nurture at Scale',
        title: 'Marketing Automation',
        stat: { value: 'Trigger-based', label: 'Multi-step workflows' },
        description: 'Build automated nurture flows that respond to lead behaviour — sending the right email, assigning follow-up tasks, and routing hot leads to sales reps without manual intervention.',
        highlights: ['Behaviour-triggered flows', 'Email sequence builder', 'Lead-to-sales handoff'],
        mockup: Marketing,
    },
    {
        id: 5,
        icon: BarChart3,
        accent: '#fbbf24',
        eyebrow: 'Data-Driven Decisions',
        title: 'Reporting & Analytics',
        stat: { value: 'Custom', label: 'Dashboards & reports' },
        description: 'Build dashboards that surface the metrics that matter — pipeline velocity, conversion rates, rep performance, and campaign ROI — with exportable reports for stakeholder review and strategic planning.',
        highlights: ['Custom report builder', 'Pipeline velocity metrics', 'Campaign ROI tracking'],
        mockup: Reporting,
    },
    {
        id: 6,
        icon: GitBranch,
        accent: '#f87171',
        eyebrow: 'Process Automation',
        title: 'Workflow Automation',
        stat: { value: 'No-code', label: 'Drag-and-drop builder' },
        description: 'Automate repetitive tasks across your entire revenue process — from auto-generating invoices on deal close to triggering onboarding sequences and assigning tasks to the right team member automatically.',
        highlights: ['No-code workflow builder', 'Cross-team task automation', 'Trigger on any CRM event'],
        mockup: Workflow,
    },
]

export const MarketingFlows = [
    { label: 'Lead captured',       color: '#93c5fd' },
    { label: 'Welcome email fired', color: '#5eead4' },
    { label: 'Follow-up queued',    color: '#a78bfa' },
    { label: 'Assigned to sales',   color: '#4ade80' },
];

export const tickets = [
    { id: '#1042', subject: 'Login issue',       status: 'Open',     color: '#f87171' },
    { id: '#1041', subject: 'Billing query',      status: 'Pending',  color: '#fbbf24' },
    { id: '#1040', subject: 'Export not working', status: 'Resolved', color: '#4ade80' },
    { id: '#1039', subject: 'Data import help',   status: 'Open',     color: '#f87171' },
];

import {SalesVisual, MarketingVisual, SupportVisual, AnalyticsVisual} from './Components'

export const modules = [
    {
        id: 1,
        icon: TrendingUp,
        accent: '#4ade80',
        eyebrow: 'Module 01',
        title: 'Sales Management',
        description: 'Track every deal from first touch to close — live pipeline visibility, rep performance metrics, and revenue forecasting keep your team focused and on target.',
        visual: SalesVisual,
    },
    {
        id: 2,
        icon: Megaphone,
        accent: '#5eead4',
        eyebrow: 'Module 02',
        title: 'Marketing Automation',
        description: 'Build trigger-based nurture flows that respond to lead behaviour — routing the right message at the right time, with zero manual intervention required.',
        visual: MarketingVisual,
    },
    {
        id: 3,
        icon: HeadphonesIcon,
        accent: '#f87171',
        eyebrow: 'Module 03',
        title: 'Customer Support',
        description: 'Manage every support interaction from one place — shared inboxes, SLA tracking, and full customer history so every agent has context from the first reply.',
        visual: SupportVisual,
    },
    {
        id: 4,
        icon: BarChart3,
        accent: '#fbbf24',
        eyebrow: 'Module 04',
        title: 'Analytics Dashboard',
        description: 'Surface the metrics that matter — pipeline velocity, conversion rates, and campaign ROI — with custom dashboards and exportable reports for every stakeholder.',
        visual: AnalyticsVisual,
    },
]