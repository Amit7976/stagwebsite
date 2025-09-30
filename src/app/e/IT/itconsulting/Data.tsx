import React from "react";
import { Search, ShieldCheck, BarChart3, CheckCircle, LifeBuoy, Layers, Zap, Users } from "lucide-react";

export const Business = [
  {
    id: "BusinessBenefits",
    subheading: "IT Consulting & Audits help businesses optimize technology investments, improve security, and streamline operations. Here’s why they’re essential:",
    features: [
      {
        icon: <Search className="stroke-muted-foreground size-7" />,
        title: "Expert Guidance",
        desc: "Receive professional advice on IT strategy, infrastructure, software selection, and technology adoption.",
      },
      {
        icon: <ShieldCheck className="stroke-muted-foreground size-7" />,
        title: "Security & Compliance",
        desc: "Identify vulnerabilities, enforce security best practices, and ensure compliance with industry regulations.",
      },
      {
        icon: <BarChart3 className="stroke-muted-foreground size-7" />,
        title: "Performance Optimization",
        desc: "Analyze IT systems and workflows to identify inefficiencies and recommend improvements.",
      },
      {
        icon: <Layers className="stroke-muted-foreground size-7" />,
        title: "Scalability & Future-Proofing",
        desc: "Plan technology investments that can grow with your business and adapt to future needs.",
      },
      {
        icon: <Zap className="stroke-muted-foreground size-7" />,
        title: "Process Automation",
        desc: "Streamline operations and reduce manual tasks with automation and system integration.",
      },
      {
        icon: <Users className="stroke-muted-foreground size-7" />,
        title: "Stakeholder Alignment",
        desc: "Ensure IT projects align with business goals and deliver measurable value to stakeholders.",
      },
      {
        icon: <LifeBuoy className="stroke-muted-foreground size-7" />,
        title: "Ongoing Support",
        desc: "Receive guidance, audits, and follow-up recommendations to maintain IT health and performance.",
      },
    ],
  },
];

export const allPricingData = [
  {
    id: "Pricing",
    heading: "Estimated Pricing",
    subheading: "IT consulting & audit pricing varies based on company size, scope, and depth of analysis:",
    note: "Final pricing depends on audit complexity, number of systems, and consulting duration.",
    cards: [
      {
        icon: Search,
        title: "Basic IT Assessment",
        duration: "1 week",
        description: "High-level IT audit and recommendations.",
        price: "$500 / Rs.40,000",
        ctaVariant: "outline",
      },
      {
        icon: ShieldCheck,
        title: "Standard IT Consulting",
        duration: "2-3 weeks",
        description: "Detailed audit, risk assessment, and strategic recommendations.",
        price: "$1,200 / Rs.96,000",
        ctaVariant: "outline",
      },
      {
        icon: BarChart3,
        title: "Advanced IT Strategy & Audit",
        duration: "4-6 weeks",
        description: "Full-scale IT audit, roadmap creation, and process optimization.",
        price: "$2,500 / Rs.2,00,000",
        ctaVariant: "outline",
      },
      {
        icon: Layers,
        title: "Enterprise IT Consulting",
        duration: "6+ weeks",
        description: "Comprehensive IT assessment, strategic planning, implementation guidance, and ongoing support.",
        price: "$5,000+ / Rs.4,00,000+",
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
        "IT Consulting & Audits help organizations evaluate, plan, and optimize their IT infrastructure, processes, and investments.",
        "This includes assessing hardware, software, networks, security, compliance, and overall technology strategy.",
        "The goal is to improve efficiency, reduce risk, ensure compliance, and align IT operations with business objectives.",
      ],
    },
    cards: [
      {
        badge: "Assessment",
        title: "Current IT Audit",
        desc: "Analyze current IT systems, infrastructure, and processes to identify gaps and risks.",
      },
      {
        badge: "Strategy",
        title: "IT Roadmap Planning",
        desc: "Define a strategic plan to improve systems, implement new technologies, and optimize operations.",
      },
      {
        badge: "Implementation",
        title: "Advisory & Execution",
        desc: "Guide teams in deploying solutions, integrations, and recommended changes.",
      },
      {
        badge: "Optimization",
        title: "Process & Performance Improvement",
        desc: "Implement efficiency measures, automation, and monitoring to optimize IT workflows.",
      },
      {
        badge: "Compliance",
        title: "Security & Regulatory Compliance",
        desc: "Ensure IT systems comply with standards, regulations, and industry best practices.",
      },
      {
        badge: "Support",
        title: "Ongoing Monitoring & Advisory",
        desc: "Provide follow-up audits, support, and continuous improvement recommendations.",
      },
    ],
  },
];

export const FeaturesData = [
  {
    id: "Features",
    heading: "How Hirebie Delivers IT",
    subheading: "Our consulting ensures your IT environment is secure, efficient, and aligned with business goals:",
    features: [
      {
        title: "Initial Assessment",
        description: "Understand your current IT landscape, challenges, and opportunities.",
        icon: <Search className="size-4 md:size-6" />,
      },
      {
        title: "Risk & Compliance Audit",
        description: "Identify vulnerabilities, compliance gaps, and potential risks.",
        icon: <ShieldCheck className="size-4 md:size-6" />,
      },
      {
        title: "Process Optimization",
        description: "Streamline IT processes to improve efficiency and reduce costs.",
        icon: <Zap className="size-4 md:size-6" />,
      },
      {
        title: "Strategic Roadmap",
        description: "Create a technology roadmap aligned with business objectives.",
        icon: <BarChart3 className="size-4 md:size-6" />,
      },
      {
        title: "Implementation Guidance",
        description: "Assist in deploying tools, solutions, and automation strategies.",
        icon: <Layers className="size-4 md:size-6" />,
      },
      {
        title: "Training & Knowledge Transfer",
        description: "Educate staff to effectively manage IT systems and processes.",
        icon: <Users className="size-4 md:size-6" />,
      },
      {
        title: "Continuous Support",
        description: "Provide ongoing advisory, monitoring, and follow-up audits.",
        icon: <LifeBuoy className="size-4 md:size-6" />,
      },
      {
        title: "Reporting & Insights",
        description: "Generate actionable reports to guide IT strategy and improvements.",
        icon: <CheckCircle className="size-4 md:size-6" />,
      },
    ],
  },
];
