import React from "react";
import {
  Shield,
  Lock,
  EyeOff,
  AlertTriangle,
  Database,
  Globe,
  Users,
  BadgeCheck,
  Bug,
  KeyRound,
  Rocket,
  Search,
  Layers,
  ShieldCheck,
  KanbanSquare,
  CheckCircle,
  BarChart3,
  LifeBuoy,
} from "lucide-react";

export const Business = [
  {
    id: "Businessbenefits",
    subheading:
      "In today’s digital-first world, cybersecurity is no longer optional—it’s essential. Here’s why businesses invest in professional cybersecurity solutions:",
    features: [
      {
        icon: <Shield className="stroke-muted-foreground size-7" />,
        title: "Data Protection",
        desc: "Safeguard sensitive information like financial data, customer records, and intellectual property from theft or exposure.",
      },
      {
        icon: <Lock className="stroke-muted-foreground size-7" />,
        title: "Enhanced Trust & Reputation",
        desc: "Customers trust businesses that prioritize security—building credibility and long-term loyalty.",
      },
      {
        icon: <EyeOff className="stroke-muted-foreground size-7" />,
        title: "Prevention of Data Breaches",
        desc: "Proactive monitoring and threat detection reduce risks of costly breaches and downtime.",
      },
      {
        icon: <AlertTriangle className="stroke-muted-foreground size-7" />,
        title: "Regulatory Compliance",
        desc: "Stay compliant with laws like GDPR, HIPAA, and ISO standards—avoiding penalties and legal risks.",
      },
      {
        icon: <Users className="stroke-muted-foreground size-7" />,
        title: "Secure Remote Workforce",
        desc: "Enable safe remote work with VPNs, endpoint security, and identity access management.",
      },
      {
        icon: <Database className="stroke-muted-foreground size-7" />,
        title: "Cloud & Server Security",
        desc: "Protect cloud infrastructures, servers, and databases from unauthorized access and cyber threats.",
      },
      {
        icon: <Globe className="stroke-muted-foreground size-7" />,
        title: "Business Continuity",
        desc: "Cyber resilience ensures operations remain uninterrupted during cyberattacks.",
      },
      {
        icon: <BadgeCheck className="stroke-muted-foreground size-7" />,
        title: "Competitive Advantage",
        desc: "Strong security practices differentiate your business in industries where trust matters most.",
      },
    ],
  },
];

export const allPricingData = [
  {
    id: "Pricing", // unique key
    heading: "Estimated Pricing ",
    subheading:
      "Cybersecurity costs depend on the level of protection, type of infrastructure, and industry compliance needs. At Hirebie, we provide scalable pricing options:",
    note: "Final pricing may vary based on advanced needs like SIEM integration, 24/7 monitoring, penetration testing, or enterprise-wide compliance frameworks.",
    cards: [
      {
        icon: Shield,
        title: "Basic Security Package",
        duration: "1-2 weeks",
        description: "Firewall setup, basic antivirus, and malware protection.",
        price: "$800 / Rs.65,000",
        ctaVariant: "outline",
      },
      {
        icon: Bug,
        title: "Vulnerability Assessment",
        duration: "2-3 weeks",
        description: "Comprehensive system scan with reports and patching recommendations.",
        price: "$1,500 / Rs.1,20,000",
        ctaVariant: "outline",
      },
      {
        icon: KeyRound,
        title: "Advanced Threat Protection",
        duration: "3-5 weeks",
        description: "Includes intrusion detection, endpoint protection, and cloud security.",
        price: "$3,000 / Rs.2,40,000",
        ctaVariant: "outline",
      },
      {
        icon: Rocket,
        title: "Enterprise Security Suite",
        duration: "6+ weeks",
        description: "Full-scale cybersecurity framework with monitoring, audits, and compliance.",
        price: "$7,000+ / Rs.5,60,000+",
        ctaVariant: "outline",
      },
    ],
  },
];

export const contentData = [
  {
    id: "Content",
    sectionClassName: "dark:bg-black/20 py-20",
    bigCard: {
      badge: "Security",
      title: "What It Is",
      description: [
        "Cybersecurity Solutions involve the practices, tools, and systems that protect businesses from digital threats like hacking, data theft, and ransomware. It ensures confidentiality, integrity, and availability of data across networks, devices, and cloud platforms.",
        "Cybersecurity is not just about tools—it’s about processes, monitoring, and continuous improvements that safeguard critical business operations.",
        "The process of implementing cybersecurity typically involves multiple stages:",
      ],
    },
    cards: [
      {
        badge: "Assessment",
        title: "Risk Assessment",
        desc: "Identifying vulnerabilities, evaluating risks, and analyzing threats.",
      },
      {
        badge: "Protection",
        title: "Security Implementation",
        desc: "Deploying firewalls, encryption, access controls, and intrusion detection systems.",
      },
      {
        badge: "Testing",
        title: "Penetration Testing",
        desc: "Simulating cyberattacks to test defenses and identify weaknesses.",
      },
      {
        badge: "Monitoring",
        title: "Continuous Monitoring",
        desc: "Real-time detection of suspicious activities and proactive response to threats.",
      },
      {
        badge: "Compliance",
        title: "Governance & Compliance",
        desc: "Ensuring adherence to data privacy regulations and security standards.",
      },
      {
        badge: "Recovery",
        title: "Incident Response & Recovery",
        desc: "Quick response plans to minimize downtime and restore systems securely.",
      },
    ],
  },
];
export const FeaturesData = [
  { 
    id: "Features",
    heading: "How Hirebie Delivers IT",
    subheading: "At Hirebie, we provide end-to-end cybersecurity solutions, protecting your digital assets and ensuring compliance. Here’s how we safeguard your business:",
    features: [
      {
        title: "Security Assessment & Consultation",
        description:
          "We conduct comprehensive security audits and consultations to understand your current infrastructure, vulnerabilities, and risk profile.",
        icon: <Search className="size-4 md:size-6" />,
      },
      {
        title: "Tailored Security Architecture",
        description:
          "Our experts design a customized security framework, including network security, application security, and access controls, ensuring robust protection.",
        icon: <Layers className="size-4 md:size-6" />,
      },
      {
        title: "Threat Detection & Monitoring",
        description:
          "We implement real-time monitoring solutions to detect threats, intrusions, and suspicious activities across all your digital assets.",
        icon: <ShieldCheck className="size-4 md:size-6" />,
      },
      {
        title: "Incident Response & Mitigation",
        description:
          "In case of a security incident, our team responds immediately, containing threats and minimizing potential damage to your organization.",
        icon: <KanbanSquare className="size-4 md:size-6" />,
      },
      {
        title: "Penetration Testing & Vulnerability Scans",
        description:
          "We perform thorough penetration testing and automated vulnerability scans to identify weak points before attackers do.",
        icon: <CheckCircle  className="size-4 md:size-6" />,
      },
      {
        title: "Security Compliance & Governance",
        description:
          "We help your organization meet regulatory requirements (like GDPR, ISO 27001, HIPAA) and establish strong governance policies.",
        icon: <Rocket className="size-4 md:size-6" />,
      },
      {
        title: "Continuous Support & Maintenance",
        description:
          "Hirebie provides ongoing security updates, patch management, and monitoring to ensure your systems remain secure over time.",
        icon: <LifeBuoy className="size-4 md:size-6" />,
      },
      {
        title: "Performance & Security Optimization",
        description:
          "We optimize your infrastructure to maintain high performance while ensuring maximum security and minimal downtime.",
        icon: <BarChart3 className="size-4 md:size-6" />,
      },
    ],
  },
];

