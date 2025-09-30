import React from "react";
import { Layers, Rocket, BarChart3, LifeBuoy, CheckCircle, Zap, Users, Search, Code } from "lucide-react";

export const Business = [
  {
    id: "BusinessBenefits",
    subheading: "Legacy System Modernization updates outdated systems to improve performance, security, and maintainability. Here’s why it’s crucial:",
    features: [
      {
        icon: <Layers className="stroke-muted-foreground size-7" />,
        title: "Modern Architecture",
        desc: "Upgrade legacy systems to scalable, maintainable, and modular architectures.",
      },
      {
        icon: <Rocket className="stroke-muted-foreground size-7" />,
        title: "Improved Performance",
        desc: "Enhance system speed, reliability, and responsiveness with modern technologies.",
      },
      {
        icon: <CheckCircle className="stroke-muted-foreground size-7" />,
        title: "Enhanced Security",
        desc: "Implement modern security standards and practices to protect critical business data.",
      },
      {
        icon: <BarChart3 className="stroke-muted-foreground size-7" />,
        title: "Cost Reduction",
        desc: "Reduce maintenance costs by replacing outdated systems and inefficient workflows.",
      },
      {
        icon: <Zap className="stroke-muted-foreground size-7" />,
        title: "Automation & Efficiency",
        desc: "Introduce automation to streamline processes and improve operational efficiency.",
      },
      {
        icon: <Users className="stroke-muted-foreground size-7" />,
        title: "Better User Experience",
        desc: "Update user interfaces and workflows to increase usability and adoption.",
      },
      {
        icon: <LifeBuoy className="stroke-muted-foreground size-7" />,
        title: "Ongoing Support & Monitoring",
        desc: "Provide continuous maintenance, monitoring, and updates for long-term stability.",
      },
    ],
  },
];

export const allPricingData = [
  {
    id: "Pricing",
    heading: "Estimated Pricing",
    subheading: "Legacy system modernization pricing varies depending on system complexity and scope of updates:",
    note: "These are starting estimates; final pricing depends on system size, integrations, and customization required.",
    cards: [
      {
        icon: Layers,
        title: "Basic Modernization",
        duration: "3-4 weeks",
        description: "UI updates, minor performance improvements, and security patches.",
        price: "$2,000 / Rs.1,60,000",
        ctaVariant: "outline",
      },
      {
        icon: Code,
        title: "Standard Modernization",
        duration: "4-6 weeks",
        description: "System architecture updates, integration improvements, and performance tuning.",
        price: "$5,000 / Rs.4,00,000",
        ctaVariant: "outline",
      },
      {
        icon: Rocket,
        title: "Advanced Modernization",
        duration: "6-8 weeks",
        description: "Full modernization including backend overhaul, automation, and analytics integration.",
        price: "$10,000 / Rs.8,00,000",
        ctaVariant: "outline",
      },
      {
        icon: BarChart3,
        title: "Enterprise Modernization",
        duration: "8+ weeks",
        description: "Comprehensive modernization with multi-system integration, scalability, and ongoing support.",
        price: "$15,000+ / Rs.12,00,000+",
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
        "Legacy System Modernization involves updating outdated software, infrastructure, and workflows to improve performance, security, and maintainability.",
        "Modernization can include UI/UX updates, backend refactoring, automation, cloud migration, and integration with modern tools and technologies.",
        "It helps businesses reduce operational costs, enhance security, improve user experience, and ensure long-term scalability.",
      ],
    },
    cards: [
      {
        badge: "Planning",
        title: "System Assessment & Strategy",
        desc: "Evaluate current systems, identify pain points, and create a modernization roadmap.",
      },
      {
        badge: "Design",
        title: "Architecture & Workflow Updates",
        desc: "Redesign system architecture, optimize workflows, and introduce modular, scalable solutions.",
      },
      {
        badge: "Development",
        title: "Backend & Frontend Modernization",
        desc: "Update codebase, implement automation, and improve integration with modern platforms.",
      },
      {
        badge: "Testing",
        title: "Quality Assurance & Optimization",
        desc: "Ensure system reliability, performance, and security compliance.",
      },
      {
        badge: "Deployment",
        title: "Launch & Monitoring",
        desc: "Deploy updated systems with monitoring and performance tracking.",
      },
      {
        badge: "Support",
        title: "Ongoing Maintenance",
        desc: "Provide continuous updates, support, and system monitoring.",
      },
    ],
  },
];

export const FeaturesData = [
  {
    id: "Features",
    heading: "How Hirebie Delivers IT",
    subheading: "We transform outdated systems into modern, scalable, and secure platforms:",
    features: [
      {
        title: "Discovery & Consultation",
        description: "Assess legacy systems, understand business needs, and identify modernization goals.",
        icon: <Search className="size-4 md:size-6" />,
      },
      {
        title: "Architecture & Design",
        description: "Plan scalable, maintainable, and secure system architecture.",
        icon: <Layers className="size-4 md:size-6" />,
      },
      {
        title: "Performance & Automation",
        description: "Improve system performance and automate workflows for efficiency.",
        icon: <Zap className="size-4 md:size-6" />,
      },
      {
        title: "Development & Integration",
        description: "Refactor code, integrate modern technologies, and optimize backend/frontend.",
        icon: <Code className="size-4 md:size-6" />,
      },
      {
        title: "Testing & QA",
        description: "Validate functionality, security, and performance improvements.",
        icon: <CheckCircle className="size-4 md:size-6" />,
      },
      {
        title: "Deployment & Monitoring",
        description: "Deploy modernized systems with analytics, monitoring, and reporting.",
        icon: <Rocket className="size-4 md:size-6" />,
      },
      {
        title: "Post-Launch Support",
        description: "Continuous maintenance, updates, and support to ensure stability and scalability.",
        icon: <LifeBuoy className="size-4 md:size-6" />,
      },
      {
        title: "User Experience Improvements",
        description: "Update interfaces and workflows for better usability and adoption.",
        icon: <Users className="size-4 md:size-6" />,
      },
    ],
  },
];
