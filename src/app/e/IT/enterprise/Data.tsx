import React from "react";
import { Layers, Code, ShieldCheck, BarChart3, CheckCircle, Rocket, LifeBuoy, Search, KanbanSquare, Users, Zap } from "lucide-react";

export const Business = [
  {
    id: "BusinessBenefits",
    subheading: "Enterprise software solutions help businesses streamline operations, improve efficiency, and scale effectively. Here’s why they matter:",
    features: [
      {
        icon: <Layers className="stroke-muted-foreground size-7" />,
        title: "Streamlined Operations",
        desc: "Integrates multiple business processes into a single platform to reduce manual work and improve efficiency.",
      },
      {
        icon: <Users className="stroke-muted-foreground size-7" />,
        title: "Enhanced Collaboration",
        desc: "Facilitates communication and coordination across departments and teams in real-time.",
      },
      {
        icon: <ShieldCheck className="stroke-muted-foreground size-7" />,
        title: "Robust Security",
        desc: "Protects sensitive business data with role-based access, encryption, and compliance features.",
      },
      {
        icon: <BarChart3 className="stroke-muted-foreground size-7" />,
        title: "Data-Driven Insights",
        desc: "Leverage dashboards and analytics to make informed business decisions and track KPIs effectively.",
      },
      {
        icon: <Zap className="stroke-muted-foreground size-7" />,
        title: "Automation & Efficiency",
        desc: "Automate repetitive tasks, workflows, and processes to save time and reduce errors.",
      },
      {
        icon: <Rocket className="stroke-muted-foreground size-7" />,
        title: "Scalability",
        desc: "Enterprise solutions can grow with your business, supporting more users, processes, and integrations.",
      },
      {
        icon: <LifeBuoy className="stroke-muted-foreground size-7" />,
        title: "Support & Maintenance",
        desc: "Ongoing technical support, updates, and troubleshooting to ensure smooth operation.",
      },
    ],
  },
];

export const allPricingData = [
  {
    id: "Pricing",
    heading: "Estimated Pricing",
    subheading: "Enterprise software pricing varies depending on complexity, modules, integrations, and deployment options:",
    note: "These are starting estimates. Final pricing depends on custom features, integrations, and SLAs.",
    cards: [
      {
        icon: Code,
        title: "Small Enterprise Solution",
        duration: "4-6 weeks",
        description: "Core modules with essential functionalities.",
        price: "$3,000 / Rs.2,40,000",
        ctaVariant: "outline",
      },
      {
        icon: Layers,
        title: "Mid-Level Enterprise Platform",
        duration: "6-10 weeks",
        description: "Includes additional modules, reporting, and basic integrations.",
        price: "$6,000 / Rs.4,80,000",
        ctaVariant: "outline",
      },
      {
        icon: KanbanSquare,
        title: "Advanced Enterprise Solution",
        duration: "10-16 weeks",
        description: "Full-featured platform with advanced analytics, automation, and multi-department integrations.",
        price: "$10,000 / Rs.8,00,000",
        ctaVariant: "outline",
      },
      {
        icon: Rocket,
        title: "Custom Enterprise Software",
        duration: "16+ weeks",
        description: "Tailored solutions for complex workflows, ERP/CRM integration, and high scalability.",
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
        "Enterprise Software Solutions refer to custom-built or off-the-shelf software designed to manage and automate business processes for organizations.",
        "They cover various functions like ERP, CRM, HRMS, supply chain, finance, and analytics, all in a secure, scalable platform.",
        "These solutions improve efficiency, reduce manual errors, enable collaboration, and provide actionable insights for strategic decision-making.",
      ],
    },
    cards: [
      {
        badge: "Planning",
        title: "Requirement Analysis",
        desc: "Understand organizational workflows, processes, and pain points to define solution requirements.",
      },
      {
        badge: "Design",
        title: "System & Architecture Design",
        desc: "Create a robust architecture, module design, and integration plan for scalable and secure software.",
      },
      {
        badge: "Development",
        title: "Module Implementation",
        desc: "Develop individual modules and features tailored to the organization’s needs.",
      },
      {
        badge: "Integration",
        title: "ERP/CRM & Third-party Integrations",
        desc: "Integrate with existing systems, APIs, and tools to ensure seamless workflows.",
      },
      {
        badge: "Testing",
        title: "QA & Optimization",
        desc: "Ensure the solution is bug-free, optimized, and meets all functional and security requirements.",
      },
      {
        badge: "Deployment",
        title: "Launch & Training",
        desc: "Deploy the platform, provide staff training, and set up support channels.",
      },
    ],
  },
];

export const FeaturesData = [
  {
    id: "Features",
    heading: "How Hirebie Delivers IT",
    subheading: "Our process ensures enterprise platforms are efficient, secure, and scalable:",
    features: [
      {
        title: "Consultation & Requirement Gathering",
        description: "We understand your business processes and define solution requirements.",
        icon: <Search className="size-4 md:size-6" />,
      },
      {
        title: "Architecture & Module Design",
        description: "Design a scalable, secure, and modular system architecture.",
        icon: <Layers className="size-4 md:size-6" />,
      },
      {
        title: "Development & Customization",
        description: "Build and customize modules to match your business workflows.",
        icon: <Code className="size-4 md:size-6" />,
      },
      {
        title: "Integration & Automation",
        description: "Integrate with existing tools, automate workflows, and optimize processes.",
        icon: <Zap className="size-4 md:size-6" />,
      },
      {
        title: "Testing & QA",
        description: "Rigorous testing for performance, security, and usability.",
        icon: <CheckCircle className="size-4 md:size-6" />,
      },
      {
        title: "Deployment & Training",
        description: "Deploy the software and train employees for smooth adoption.",
        icon: <Rocket className="size-4 md:size-6" />,
      },
      {
        title: "Support & Maintenance",
        description: "Ongoing updates, troubleshooting, and feature enhancements.",
        icon: <LifeBuoy className="size-4 md:size-6" />,
      },
      {
        title: "Analytics & Insights",
        description: "Provide dashboards and reporting tools for data-driven decision making.",
        icon: <BarChart3 className="size-4 md:size-6" />,
      },
    ],
  },
];
