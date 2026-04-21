import { BatteryCharging, 
        LayoutGrid, 
        BarChart2, 
        Gauge, 
        TrendingDown, 
        ShieldCheck, 
        Cpu, 
        Zap,
        ClipboardList,
        HardHat, 
        MonitorCheck, 
        Wrench,
    } from 'lucide-react'

export const readings = [
    { zone: 'Server Room', kw: 4.2, trend: '+0.1', color: '#4ade80' },
    { zone: 'Office Floor', kw: 2.8, trend: '−0.2', color: '#93c5fd' },
    { zone: 'Comms Rack', kw: 1.1, trend: '+0.0', color: '#fbbf24' }
];

import {Ups, Pdu, Ems, Generator} from './SystemTypesComponents'

export const systems = [
    {
        id: 1,
        icon: BatteryCharging,
        accent: '#4ade80',
        eyebrow: 'Uninterruptible Power',
        title: 'UPS Systems',
        stat: { value: '<10ms', label: 'Failover switchover' },
        description: 'Uninterruptible Power Supplies provide instant battery backup the moment mains power fails — protecting sensitive equipment from data loss, hardware damage, and unexpected shutdowns with zero-gap continuity.',
        highlights: ['Instant <10ms switchover', 'Online & line-interactive modes', 'Scalable battery runtime'],
        mockup: Ups,
    },
    {
        id: 2,
        icon: LayoutGrid,
        accent: '#93c5fd',
        eyebrow: 'Outlet Management',
        title: 'Power Distribution Units',
        stat: { value: 'Per-outlet', label: 'Monitoring & control' },
        description: 'PDUs distribute power from a single source to multiple devices within a rack or enclosure. Managed PDUs allow remote per-outlet switching, load monitoring, and current alerts — maximising uptime and visibility.',
        highlights: ['Remote per-outlet switching', 'Current & wattage metering', 'Horizontal & vertical rack mount'],
        mockup: Pdu,
    },
    {
        id: 3,
        icon: BarChart2,
        accent: '#fbbf24',
        eyebrow: 'Consumption Intelligence',
        title: 'Energy Monitoring Systems',
        stat: { value: 'Real-time', label: 'Zone-level metering' },
        description: 'Dedicated EMS platforms provide granular visibility into power consumption across zones, floors, and individual circuits — enabling informed decisions on efficiency, capacity planning, and cost reduction.',
        highlights: ['Zone & circuit-level metering', 'Historical trend analysis', 'Anomaly & waste detection'],
        mockup: Ems,
    },
    {
        id: 4,
        icon: Gauge,
        accent: '#f87171',
        eyebrow: 'Long-Duration Backup',
        title: 'Backup Generators',
        stat: { value: 'Auto-start', label: 'On mains failure' },
        description: 'Diesel and gas generators provide extended backup power for outages that outlast UPS battery capacity. Auto-start controllers detect mains failure and bring the generator online within seconds.',
        highlights: ['Automatic mains-fail start', 'Diesel & gas options', 'Scheduled load testing'],
        mockup: Generator,
    },
];

export const threats = [
    { label: 'Voltage spike', severity: 'High', blocked: true, color: '#f87171' },
    { label: 'Harmonic distortion', severity: 'Med', blocked: true, color: '#fbbf24' },
    { label: 'Brown-out event', severity: 'High', blocked: true, color: '#f87171' },
    { label: 'Frequency drift', severity: 'Low', blocked: true, color: '#4ade80' },
];

import {Cost, Downtime, Protection, Efficiency} from './Benefits'

export const benefits = [
    {
        id: 1,
        icon: TrendingDown,
        accent: '#4ade80',
        eyebrow: 'Cost Reduction',
        title: 'Reduce Energy Costs',
        stat: { value: 'Up to 40%', label: 'Energy bill reduction' },
        description: 'Smart monitoring and load optimisation identify waste, eliminate idle consumption, and shift loads to off-peak tariff windows — delivering measurable reductions on your monthly energy bill from day one.',
        highlights: ['Off-peak load shifting', 'Idle circuit detection', 'Cost-per-zone reporting'],
        mockup: Cost,
    },
    {
        id: 2,
        icon: ShieldCheck,
        accent: '#93c5fd',
        eyebrow: 'Business Continuity',
        title: 'Prevent Downtime',
        stat: { value: '99.99%', label: 'Guaranteed uptime' },
        description: 'Layered UPS, generator, and automatic transfer switch systems ensure that power failures never become operational failures. Failover is measured in milliseconds — invisible to the systems that depend on it.',
        highlights: ['<10ms automatic failover', 'Redundant power paths', 'Proactive fault detection'],
        mockup: Downtime,
    },
    {
        id: 3,
        icon: Cpu,
        accent: '#f87171',
        eyebrow: 'Hardware Longevity',
        title: 'Protect Equipment',
        stat: { value: '3×', label: 'Longer hardware lifespan' },
        description: 'Voltage spikes, brown-outs, and harmonic distortion silently degrade hardware over time. Our surge suppressors, line conditioners, and UPS systems act as a clean power barrier — extending equipment life significantly.',
        highlights: ['Surge & spike suppression', 'Voltage regulation', 'Harmonic distortion filtering'],
        mockup: Protection,
    },
    {
        id: 4,
        icon: Zap,
        accent: '#fbbf24',
        eyebrow: 'Operational Excellence',
        title: 'Improve Efficiency',
        stat: { value: 'PUE < 1.4', label: 'Industry-leading rating' },
        description: 'Power Usage Effectiveness (PUE) measures how efficiently a facility uses energy. Our systems target sub-1.4 PUE through intelligent load balancing, hot-aisle containment guidance, and continuous efficiency benchmarking.',
        highlights: ['PUE monitoring & reporting', 'Load factor optimisation', 'Capacity planning tools'],
        mockup: Efficiency,
    },
];

export const checks = [
    { label: 'Peak demand windows', score: 74, color: '#fbbf24' },
    { label: 'Idle circuit waste',  score: 88, color: '#f87171' },
    { label: 'Power factor rating', score: 61, color: '#fbbf24' },
    { label: 'Tariff optimisation', score: 45, color: '#f87171' },
];

export const tasks = [
    'Site survey complete',
    'Cabling & conduit run',
    'UPS units racked',
    'PDUs wired & labelled',
    'Load test passed',
];

export const feeds = [
    { label: 'UPS — Server Room',  status: 'Online',  color: '#4ade80' },
    { label: 'PDU — Rack A',       status: 'Online',  color: '#4ade80' },
    { label: 'Generator — Roof',   status: 'Standby', color: '#fbbf24' },
    { label: 'EMS — Floor 2',      status: 'Online',  color: '#4ade80' },
];

export const schedule = [
    { task: 'UPS battery test',      due: 'Today',      color: '#f87171' },
    { task: 'Generator load test',   due: 'In 3 days',  color: '#fbbf24' },
    { task: 'PDU thermal scan',      due: 'In 1 week',  color: '#fbbf24' },
    { task: 'Full system inspection',due: 'In 1 month', color: '#4ade80' },
];

import {Audit, Install, Monitor, Maintenance} from './Services'

export const services = [
    {
        id: 1,
        icon: ClipboardList,
        accent: '#fbbf24',
        eyebrow: 'Step 01',
        title: 'Energy Audits',
        stat: { value: 'Full site', label: 'Consumption analysis' },
        description: 'We begin every engagement with a detailed energy audit — mapping consumption across all circuits, identifying peak demand windows, wasteful loads, and tariff inefficiencies to build a targeted improvement plan.',
        highlights: ['Full circuit-level mapping', 'Tariff & demand analysis', 'Written recommendations report'],
        mockup: Audit,
    },
    {
        id: 2,
        icon: HardHat,
        accent: '#93c5fd',
        eyebrow: 'Step 02',
        title: 'System Installation',
        stat: { value: 'End-to-end', label: 'Supply & fit' },
        description: 'Our engineers handle every aspect of installation — from cabling and containment through to racking UPS units, wiring PDUs, and commissioning the full system with a documented load test before sign-off.',
        highlights: ['Full supply & installation', 'Cable management & labelling', 'Commissioning & load testing'],
        mockup: Install,
    },
    {
        id: 3,
        icon: MonitorCheck,
        accent: '#4ade80',
        eyebrow: 'Step 03',
        title: 'Monitoring Setup',
        stat: { value: '24 / 7', label: 'Live dashboard access' },
        description: 'We configure your cloud monitoring dashboard, connect all devices, set alert thresholds, and ensure your team has full visibility across every UPS, PDU, and generator from day one — on any device.',
        highlights: ['Cloud dashboard configuration', 'Custom alert thresholds', 'Mobile & remote access'],
        mockup: Monitor,
    },
    {
        id: 4,
        icon: Wrench,
        accent: '#a78bfa',
        eyebrow: 'Step 04',
        title: 'Maintenance',
        stat: { value: 'Planned', label: 'Preventive schedule' },
        description: 'Scheduled preventive maintenance keeps your systems performing at peak. Battery tests, generator load runs, thermal scans, and firmware updates are all managed proactively — before faults become failures.',
        highlights: ['Scheduled battery testing', 'Generator load test runs', 'Firmware & software updates'],
        mockup: Maintenance,
    },
];