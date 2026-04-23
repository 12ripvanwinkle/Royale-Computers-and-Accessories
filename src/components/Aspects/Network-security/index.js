import { ShieldAlert,
         Radar, 
         Lock, 
         Bug, 
         Activity, 
         Monitor, } from 'lucide-react'


export const rules = [
    { src: '192.168.1.0/24', dst: 'ANY',           action: 'ALLOW', color: '#4ade80' },
    { src: '0.0.0.0/0',      dst: 'PORT 22',       action: 'DENY',  color: '#f87171' },
    { src: '10.0.0.5',       dst: 'PORT 3389',     action: 'DENY',  color: '#f87171' },
    { src: 'TRUSTED',        dst: 'INTERNAL',      action: 'ALLOW', color: '#4ade80' },
];

export const alerts = [
    { label: 'Port scan detected',     severity: 'High', color: '#f87171', blocked: true },
    { label: 'SQL injection attempt',  severity: 'High', color: '#f87171', blocked: true },
    { label: 'Unusual auth pattern',   severity: 'Med',  color: '#fbbf24', blocked: true },
    { label: 'DNS anomaly flagged',    severity: 'Low',  color: '#4ade80', blocked: false },
];

export const tunnels = [
    { label: 'HQ ↔ Branch London',  users: 14, color: '#a78bfa' },
    { label: 'HQ ↔ Remote Workers', users: 38, color: '#a78bfa' },
    { label: 'HQ ↔ Data Centre',    users: 3,  color: '#a78bfa' },
];

export const threats = [
    { label: 'Ransomware signature',  score: 100, color: '#f87171' },
    { label: 'Trojan heuristic',      score: 78,  color: '#fbbf24' },
    { label: 'Spyware pattern',       score: 92,  color: '#f87171' },
    { label: 'Adware detected',       score: 55,  color: '#fbbf24' },
];

export const endpoints = [
    { label: 'Workstation-01',  status: 'Protected', color: '#4ade80', os: 'Win 11' },
    { label: 'Laptop-Sarah',    status: 'Protected', color: '#4ade80', os: 'macOS'  },
    { label: 'Server-DB-01',    status: 'Protected', color: '#4ade80', os: 'Ubuntu' },
    { label: 'Tablet-Reception',status: 'Updating',  color: '#fbbf24', os: 'iOS'   },
];

import {Firewall, Ids, Vpn, Malware, Traffic, Endpoint} from './Components'

export const features = [
    {
        id: 1,
        icon: ShieldAlert,
        accent: '#f87171',
        eyebrow: 'Perimeter Defence',
        title: 'Firewalls',
        stat: { value: 'Next-gen', label: 'Deep packet inspection' },
        description: 'Next-generation firewalls inspect every packet at the application layer — enforcing granular allow/deny rules, blocking known bad actors, and preventing unauthorised access across all network segments.',
        highlights: ['Application-layer filtering', 'Geo-blocking & IP reputation', 'Zone-based rule sets'],
        mockup: Firewall,
    },
    {
        id: 2,
        icon: Radar,
        accent: '#f87171',
        eyebrow: 'Threat Detection',
        title: 'Intrusion Detection & Prevention',
        stat: { value: 'Real-time', label: 'Automated blocking' },
        description: 'IDS/IPS systems continuously analyse traffic for attack signatures and behavioural anomalies — automatically blocking threats like port scans, injection attempts, and lateral movement before damage occurs.',
        highlights: ['Signature & behaviour analysis', 'Automatic threat blocking', 'Full alert audit trail'],
        mockup: Ids,
    },
    {
        id: 3,
        icon: Lock,
        accent: '#a78bfa',
        eyebrow: 'Secure Connectivity',
        title: 'VPN Security',
        stat: { value: 'AES-256', label: 'Encrypted tunnels' },
        description: 'Site-to-site and remote-access VPNs ensure all traffic between offices, data centres, and remote workers is encrypted end-to-end — with certificate-based authentication and split-tunnelling controls.',
        highlights: ['Site-to-site & remote access', 'Certificate-based auth', 'Split-tunnelling control'],
        mockup: Vpn,
    },
    {
        id: 4,
        icon: Bug,
        accent: '#fbbf24',
        eyebrow: 'Threat Prevention',
        title: 'Malware Protection',
        stat: { value: 'Zero-day', label: 'Heuristic detection' },
        description: 'Multi-layered malware protection combines signature databases with heuristic and behavioural engines — catching known threats instantly and identifying zero-day variants before they execute.',
        highlights: ['Signature + heuristic engines', 'Real-time file scanning', 'Automatic quarantine'],
        mockup: Malware,
    },
    {
        id: 5,
        icon: Activity,
        accent: '#5eead4',
        eyebrow: 'Network Visibility',
        title: 'Traffic Monitoring',
        stat: { value: 'Full flow', label: 'Packet-level analysis' },
        description: 'Deep flow analysis gives complete visibility into what is traversing your network — identifying bandwidth hogs, unusual data transfers, shadow IT, and exfiltration attempts in real time.',
        highlights: ['Full packet capture', 'Bandwidth usage by device', 'Anomalous flow alerting'],
        mockup: Traffic,
    },
    {
        id: 6,
        icon: Monitor,
        accent: '#4ade80',
        eyebrow: 'Device Protection',
        title: 'Endpoint Security',
        stat: { value: 'Centralised', label: 'Policy management' },
        description: 'EDR agents on every managed device provide continuous protection, patch status monitoring, and behavioural telemetry — all managed from a single console regardless of OS or location.',
        highlights: ['EDR on all managed devices', 'Patch compliance tracking', 'Remote isolation capability'],
        mockup: Endpoint,
    },
]