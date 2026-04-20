import { BatteryCharging, LayoutGrid, BarChart2, Gauge } from 'lucide-react'

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
]