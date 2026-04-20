import { BatteryCharging, LayoutGrid, BarChart2, Gauge, TrendingDown, ShieldCheck, Cpu, Zap} from 'lucide-react'

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
]