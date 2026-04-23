import {ShieldAlert,
        Radar, 
        Lock, 
        Bug, 
        Activity, 
        Monitor,
        ShieldOff, 
        MessageSquareLock, 
        Database, 
        ServerCrash,  
    } from 'lucide-react'


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

export const SecurityRules = [
    { src: '192.168.1.0/24', dst: 'INTERNET',    action: 'ALLOW', color: '#4ade80' },
    { src: '0.0.0.0/0',      dst: 'PORT 22',     action: 'DENY',  color: '#f87171' },
    { src: '10.0.0.5',       dst: 'PORT 3389',   action: 'DENY',  color: '#f87171' },
    { src: 'TRUSTED ZONE',   dst: 'INTERNAL',    action: 'ALLOW', color: '#4ade80' },
]

export const SecurityTunnels = [
    { label: 'HQ ↔ Branch Office',  users: 14, color: '#a78bfa' },
    { label: 'HQ ↔ Remote Workers', users: 38, color: '#a78bfa' },
    { label: 'HQ ↔ Data Centre',    users: 3,  color: '#a78bfa' },
]

export const SecurityEndpoints = [
    { label: 'Workstation-01',   status: 'Protected', color: '#4ade80', os: 'Win 11' },
    { label: 'Laptop-Sarah',     status: 'Protected', color: '#4ade80', os: 'macOS'  },
    { label: 'Server-DB-01',     status: 'Protected', color: '#4ade80', os: 'Ubuntu' },
    { label: 'Tablet-Reception', status: 'Updating',  color: '#fbbf24', os: 'iOS'   },
]

export const Securitythreats = [
    { label: 'Port scan detected',    severity: 'High', color: '#f87171', blocked: true  },
    { label: 'SQL injection attempt', severity: 'High', color: '#f87171', blocked: true  },
    { label: 'Unusual auth pattern',  severity: 'Med',  color: '#fbbf24', blocked: true  },
    { label: 'DNS anomaly flagged',   severity: 'Low',  color: '#4ade80', blocked: false },
]

import {SecurityFirewall, SecurityVpn, SecurityEndpoint, Network, Threat} from './Components'

export const types = [
    {
        id: 1,
        icon: ShieldAlert,
        accent: '#f87171',
        eyebrow: 'Perimeter Defence',
        title: 'Firewall Protection',
        stat: { value: 'Next-gen', label: 'Deep packet inspection' },
        description: 'Next-generation firewalls inspect every packet at the application layer — enforcing granular allow/deny policies, blocking known threat actors, and segmenting your network into controlled trust zones.',
        highlights: ['Application-layer filtering', 'Geo-blocking & IP reputation', 'Zone-based segmentation'],
        mockup: SecurityFirewall,
    },
    {
        id: 2,
        icon: Lock,
        accent: '#a78bfa',
        eyebrow: 'Secure Connectivity',
        title: 'VPN Solutions',
        stat: { value: 'AES-256', label: 'End-to-end encryption' },
        description: 'Site-to-site and remote-access VPNs keep all traffic between offices, data centres, and remote workers encrypted end-to-end — with certificate-based authentication and always-on enforcement policies.',
        highlights: ['Site-to-site & remote access', 'Certificate-based auth', 'Always-on policy enforcement'],
        mockup: SecurityVpn,
    },
    {
        id: 3,
        icon: Monitor,
        accent: '#4ade80',
        eyebrow: 'Device Protection',
        title: 'Endpoint Security',
        stat: { value: 'Centralised', label: 'Policy management' },
        description: 'EDR agents deployed on every managed device provide continuous protection, real-time patch compliance tracking, and behavioural telemetry — all managed from a single console across every OS and location.',
        highlights: ['EDR on all managed devices', 'Patch compliance tracking', 'Remote isolation capability'],
        mockup: SecurityEndpoint,
    },
    {
        id: 4,
        icon: Activity,
        accent: '#5eead4',
        eyebrow: 'Full Visibility',
        title: 'Network Monitoring',
        stat: { value: 'Full flow', label: 'Packet-level analysis' },
        description: 'Deep flow analysis provides complete visibility into every byte traversing your network — identifying bandwidth hogs, unusual data transfers, shadow IT, and potential exfiltration attempts in real time.',
        highlights: ['Full packet capture', 'Bandwidth usage by device', 'Anomalous flow alerting'],
        mockup: Network,
    },
    {
        id: 5,
        icon: Radar,
        accent: '#fbbf24',
        eyebrow: 'Proactive Security',
        title: 'Threat Detection System',
        stat: { value: 'Real-time', label: 'Automated blocking' },
        description: 'Signature and behavioural analysis engines work in tandem to identify and neutralise threats like port scans, injection attempts, and lateral movement — automatically blocking attacks before they cause damage.',
        highlights: ['Signature & behaviour engines', 'Automated threat blocking', 'Full alert audit trail'],
        mockup: Threat,
    },
]

export const attempts = [
    { label: 'Brute-force login',     src: '45.33.32.156',   color: '#f87171' },
    { label: 'Ransomware payload',    src: '198.51.100.22',  color: '#f87171' },
    { label: 'Credential stuffing',   src: '203.0.113.99',   color: '#fbbf24' },
    { label: 'Zero-day exploit',      src: '192.0.2.144',    color: '#f87171' },
]

export const channels = [
    { label: 'Email gateway',       enc: 'TLS 1.3',    color: '#93c5fd' },
    { label: 'VoIP traffic',        enc: 'SRTP',       color: '#93c5fd' },
    { label: 'File transfers',      enc: 'SFTP/AES',   color: '#93c5fd' },
    { label: 'Video conferencing',  enc: 'E2E AES-256', color: '#93c5fd' }, 
]

export const datasets = [
    { label: 'Customer PII',    status: 'Encrypted', color: '#5eead4' },
    { label: 'Payment records', status: 'Tokenised', color: '#5eead4' },
    { label: 'Staff data',      status: 'Encrypted', color: '#5eead4' },
    { label: 'Health records',  status: 'Encrypted', color: '#5eead4' },
]

export const services = [
    { label: 'Core network',     status: 'Online',  latency: '2ms',  color: '#4ade80' },
    { label: 'Firewall cluster', status: 'Online',  latency: '1ms',  color: '#4ade80' },
    { label: 'VPN gateway',      status: 'Online',  latency: '14ms', color: '#4ade80' },
    { label: 'IDS/IPS engine',   status: 'Online',  latency: '3ms',  color: '#4ade80' },
]

import {Breach, Comms, Data, Uptime} from './Components'

export const benefits = [
    {
        id: 1,
        icon: ShieldOff,
        accent: '#f87171',
        eyebrow: 'Attack Prevention',
        title: 'Prevent Breaches',
        stat: { value: '99.9%', label: 'Threat block rate' },
        description: 'Layered defences across your perimeter, network, and endpoints stop breaches before they start — blocking ransomware, credential stuffing, zero-day exploits, and brute-force attacks automatically, around the clock.',
        highlights: ['Perimeter + endpoint coverage', 'Zero-day exploit blocking', 'Automated incident response'],
        mockup: Breach,
    },
    {
        id: 2,
        icon: MessageSquareLock,
        accent: '#93c5fd',
        eyebrow: 'Data in Transit',
        title: 'Secure Communications',
        stat: { value: 'End-to-end', label: 'All channel encryption' },
        description: 'Every communication channel — email, VoIP, file transfers, and video conferencing — is encrypted in transit using modern protocols, ensuring sensitive conversations and data can never be intercepted or tampered with.',
        highlights: ['TLS 1.3 email gateway', 'SRTP voice encryption', 'E2E video & file transfer'],
        mockup: Comms,
    },
    {
        id: 3,
        icon: Database,
        accent: '#5eead4',
        eyebrow: 'Data at Rest',
        title: 'Protect Sensitive Data',
        stat: { value: 'AES-256', label: 'At-rest encryption' },
        description: 'Customer PII, payment records, health data, and staff files are encrypted at rest, tokenised where appropriate, and access-controlled by role — keeping you compliant with GDPR, PCI-DSS, and HIPAA requirements.',
        highlights: ['AES-256 at-rest encryption', 'PII tokenisation', 'GDPR / PCI-DSS / HIPAA ready'],
        mockup: Data,
    },
    {
        id: 4,
        icon: ServerCrash,
        accent: '#4ade80',
        eyebrow: 'Business Continuity',
        title: 'Maintain Uptime',
        stat: { value: '99.99%', label: 'Network availability' },
        description: 'Redundant security infrastructure — clustered firewalls, failover VPN gateways, and high-availability IDS/IPS — ensures your defences never become a single point of failure, keeping operations running without interruption.',
        highlights: ['Clustered firewall HA', 'Failover VPN gateways', 'Zero-downtime updates'],
        mockup: Uptime,
    },
];