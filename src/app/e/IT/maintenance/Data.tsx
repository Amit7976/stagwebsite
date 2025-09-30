import React from "react";
import { LifeBuoy, ShieldCheck, Zap, BarChart3, CheckCircle, Rocket, Layers, Search, Users } from "lucide-react";

export const Business = [
  {
    id: "BusinessBenefits",
    subheading: "Ongoing maintenance & support ensures your digital platforms remain secure, performant, and up-to-date. Here’s why it’s crucial:",
    features: [
      {
        icon: <ShieldCheck className="stroke-muted-foreground size-7" />,
        title: "Security Updates",
        desc: "Regularly patch vulnerabilities and keep your systems protected against emerging threats.",
      },
      {
        icon: <Zap className="stroke-muted-foreground size-7" />,
        title: "Performance Optimization",
        desc: "Monitor and optimize performance to ensure fast, reliable, and seamless user experience.",
      },
      {
        icon: <LifeBuoy className="stroke-muted-foreground size-7" />,
        title: "24/7 Support",
        desc: "Provide assistance to fix issues promptly, minimizing downtime and disruption.",
      },
      {
        icon: <BarChart3 className="stroke-muted-foreground size-7" />,
        title: "Analytics & Reporting",
        desc: "Track system performance, usage statistics, and areas for improvement through detailed reports.",
      },
      {
        icon: <Rocket className="stroke-muted-foreground size-7" />,
        title: "Feature Enhancements",
        desc: "Implement new features, upgrades, or integrations as your business evolves.",
      },
      {
        icon: <Layers className="stroke-muted-foreground size-7" />,
        title: "Backup & Recovery",
        desc: "Regular backups and disaster recovery plans ensure data safety and business continuity.",
      },
      {
        icon: <Users className="stroke-muted-foreground size-7" />,
        title: "User & System Support",
        desc: "Assist staff and end-users with technical issues, troubleshooting, and training.",
      },
    ],
  },
];

export const allPricingData = [
  {
    id: "Pricing",
    heading: "Estimated Pricing",
    subheading: "Maintenance & support pricing depends on service level, response time, and scope of work:",
    note: "These are starting estimates; final pricing may vary depending on the complexity of your system and SLA requirements.",
    cards: [
      {
        icon: LifeBuoy,
        title: "Basic Maintenance",
        duration: "Monthly",
        description: "Security updates, minor bug fixes, and basic monitoring.",
        price: "$200 / Rs.16,000",
        ctaVariant: "outline",
      },
      {
        icon: ShieldCheck,
        title: "Standard Support",
        duration: "Monthly",
        description: "Includes performance optimization, monitoring, and regular backups.",
        price: "$500 / Rs.40,000",
        ctaVariant: "outline",
      },
      {
        icon: Rocket,
        title: "Comprehensive Support",
        duration: "Monthly",
        description: "24/7 support, feature enhancements, analytics, and system improvements.",
        price: "$1,000 / Rs.80,000",
        ctaVariant: "outline",
      },
      {
        icon: Layers,
        title: "Enterprise Maintenance",
        duration: "Monthly",
        description: "Full service SLA, priority support, disaster recovery, and continuous improvements.",
        price: "$2,000+ / Rs.1,60,000+",
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
      badge: "Research",
      title: "What It Is",
      description: [
        "Maintenance & Support services ensure your website, web app, or enterprise software remains secure, functional, and optimized over time.",
        "This includes applying security patches, optimizing performance, backing up data, troubleshooting issues, and implementing feature updates.",
        "Proactive maintenance prevents downtime, reduces risks, and extends the life of your digital solutions while keeping your business running smoothly.",
      ],
    },
    cards: [
      {
        badge: "Monitoring",
        title: "System Monitoring",
        desc: "Continuously track performance, uptime, and errors to ensure smooth operations.",
      },
      {
        badge: "Security",
        title: "Security & Compliance",
        desc: "Apply updates, patches, and ensure compliance with security standards.",
      },
      {
        badge: "Optimization",
        title: "Performance & Analytics",
        desc: "Analyze system performance and implement improvements to enhance user experience.",
      },
      {
        badge: "Support",
        title: "User & Technical Support",
        desc: "Provide troubleshooting, guidance, and assistance for end-users and staff.",
      },
      {
        badge: "Backup",
        title: "Backup & Recovery",
        desc: "Regular backups and disaster recovery plans to protect your data.",
      },
      {
        badge: "Enhancements",
        title: "Feature Updates & Upgrades",
        desc: "Implement new functionalities and system upgrades as required.",
      },
    ],
  },
];

export const FeaturesData = [
  {
    id: "Features",
    heading: "How Hirebie Delivers IT",
    subheading: "Our approach ensures your platforms remain secure, up-to-date, and fully functional:",
    features: [
      {
        title: "Continuous Monitoring",
        description: "Track uptime, performance, and errors to proactively prevent issues.",
        icon: <BarChart3 className="size-4 md:size-6" />,
      },
      {
        title: "Security & Compliance",
        description: "Apply patches, monitor vulnerabilities, and maintain regulatory compliance.",
        icon: <ShieldCheck className="size-4 md:size-6" />,
      },
      {
        title: "Performance Optimization",
        description: "Analyze system performance and implement improvements regularly.",
        icon: <Zap className="size-4 md:size-6" />,
      },
      {
        title: "Technical Support",
        description: "Assist users and staff with troubleshooting, guidance, and queries.",
        icon: <LifeBuoy className="size-4 md:size-6" />,
      },
      {
        title: "Backup & Recovery",
        description: "Ensure data safety through regular backups and disaster recovery plans.",
        icon: <CheckCircle className="size-4 md:size-6" />,
      },
      {
        title: "Feature Updates",
        description: "Implement new features, upgrades, and enhancements to keep the system current.",
        icon: <Rocket className="size-4 md:size-6" />,
      },
      {
        title: "Strategic Improvements",
        description: "Advise on system enhancements and long-term optimization strategies.",
        icon: <Layers className="size-4 md:size-6" />,
      },
      {
        title: "User Training & Knowledge",
        description: "Educate users to effectively operate and manage systems.",
        icon: <Users className="size-4 md:size-6" />,
      },
    ],
  },
];
