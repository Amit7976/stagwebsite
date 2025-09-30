import React from "react";
import { Layers, Code, Rocket, BarChart3, LifeBuoy, CheckCircle, Users, Zap, Search, PenTool, ShieldCheck } from "lucide-react";

export const Business = [
  {
    id: "BusinessBenefits",
    subheading: "SaaS product development helps businesses deliver scalable, accessible, and subscription-based solutions. Here’s why it’s important:",
    features: [
      {
        icon: <Layers className="stroke-muted-foreground size-7" />,
        title: "Scalability & Flexibility",
        desc: "Build solutions that can scale seamlessly as your user base grows, adapting to changing requirements.",
      },
      {
        icon: <Rocket className="stroke-muted-foreground size-7" />,
        title: "Rapid Deployment",
        desc: "Deploy updates, features, and improvements quickly, keeping your platform competitive.",
      },
      {
        icon: <Users className="stroke-muted-foreground size-7" />,
        title: "User-Centric Design",
        desc: "Provide intuitive interfaces and seamless user experiences across devices and platforms.",
      },
      {
        icon: <Zap className="stroke-muted-foreground size-7" />,
        title: "Automation & Efficiency",
        desc: "Automate business processes, notifications, and workflows to enhance productivity.",
      },
      {
        icon: <ShieldCheck className="stroke-muted-foreground size-7" />,
        title: "Security & Compliance",
        desc: "Protect user data and comply with regulatory standards like GDPR, HIPAA, or SOC 2.",
      },
      {
        icon: <BarChart3 className="stroke-muted-foreground size-7" />,
        title: "Analytics & Insights",
        desc: "Gain insights into user behavior, product performance, and growth opportunities.",
      },
      {
        icon: <LifeBuoy className="stroke-muted-foreground size-7" />,
        title: "Support & Maintenance",
        desc: "Ongoing monitoring, bug fixes, and feature updates to ensure high reliability.",
      },
    ],
  },
];

export const allPricingData = [
  {
    id: "Pricing",
    heading: "Estimated Pricing",
    subheading: "SaaS product development costs vary depending on features, integrations, and platform complexity:",
    note: "These are starting estimates; final pricing depends on custom modules, APIs, and deployment requirements.",
    cards: [
      {
        icon: PenTool,
        title: "Basic SaaS MVP",
        duration: "4-6 weeks",
        description: "Minimal features, core functionality, and basic subscription management.",
        price: "$3,000 / Rs.2,40,000",
        ctaVariant: "outline",
      },
      {
        icon: Layers,
        title: "Standard SaaS Product",
        duration: "6-10 weeks",
        description: "Feature-rich platform with integrations, analytics, and multi-user support.",
        price: "$6,000 / Rs.4,80,000",
        ctaVariant: "outline",
      },
      {
        icon: Code,
        title: "Advanced SaaS Solution",
        duration: "10-16 weeks",
        description: "Custom modules, automation, and advanced analytics for business-scale usage.",
        price: "$10,000 / Rs.8,00,000",
        ctaVariant: "outline",
      },
      {
        icon: Rocket,
        title: "Enterprise SaaS Platform",
        duration: "16+ weeks",
        description: "Fully customized SaaS platform with high scalability, multi-tenant architecture, and enterprise integrations.",
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
        "SaaS (Software as a Service) product development involves creating cloud-based software delivered over the internet.",
        "Users can access the software via web browsers or mobile apps without installation, paying via subscription plans.",
        "SaaS platforms are scalable, secure, and allow continuous updates, providing businesses with a flexible solution for digital services.",
      ],
    },
    cards: [
      {
        badge: "Planning",
        title: "Requirement Analysis & Strategy",
        desc: "Define business goals, target users, and essential features for the SaaS product.",
      },
      {
        badge: "Design",
        title: "UI/UX & Prototyping",
        desc: "Create intuitive, visually appealing, and user-friendly interfaces for the platform.",
      },
      {
        badge: "Development",
        title: "Frontend & Backend Implementation",
        desc: "Develop core functionalities, subscription models, APIs, and integrations.",
      },
      {
        badge: "Testing",
        title: "QA & Optimization",
        desc: "Ensure cross-browser compatibility, mobile responsiveness, and bug-free operation.",
      },
      {
        badge: "Deployment",
        title: "Launch & Cloud Hosting",
        desc: "Deploy the SaaS platform on cloud infrastructure with monitoring and scalability.",
      },
      {
        badge: "Maintenance",
        title: "Support & Continuous Updates",
        desc: "Provide regular updates, new features, security patches, and customer support.",
      },
      
    ],
  },
];

export const FeaturesData = [
  {
    id: "Features",
    heading: "How Hirebie Delivers IT",
    subheading: "We build scalable, secure, and user-friendly SaaS solutions from concept to launch:",
    features: [
      {
        title: "Discovery & Consultation",
        description: "Understand business needs, target audience, and define SaaS strategy.",
        icon: <Search className="size-4 md:size-6" />,
      },
      {
        title: "Prototyping & UI/UX Design",
        description: "Craft interactive and intuitive prototypes for smooth user experience.",
        icon: <Layers className="size-4 md:size-6" />,
      },
      {
        title: "Technology Stack Selection",
        description: "Choose scalable, secure, and maintainable technology stack for your SaaS product.",
        icon: <Code className="size-4 md:size-6" />,
      },
      {
        title: "Agile Development",
        description: "Develop modules iteratively for faster delivery and flexibility.",
        icon: <Zap className="size-4 md:size-6" />,
      },
      {
        title: "Testing & QA",
        description: "Rigorous testing for functionality, security, and performance.",
        icon: <CheckCircle className="size-4 md:size-6" />,
      },
      {
        title: "Deployment & Launch",
        description: "Deploy the SaaS platform with cloud hosting, monitoring, and security measures.",
        icon: <Rocket className="size-4 md:size-6" />,
      },
      {
        title: "Post-Launch Support",
        description: "Provide updates, feature enhancements, monitoring, and user support.",
        icon: <LifeBuoy className="size-4 md:size-6" />,
      },
      {
        title: "Analytics & Insights",
        description: "Integrate dashboards for data-driven decision-making and growth tracking.",
        icon: <BarChart3 className="size-4 md:size-6" />,
      },
    ],
  },
];
