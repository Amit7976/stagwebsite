import React from "react";
import { Rocket, Layers, PenTool, Code, Zap, Users, CheckCircle, LifeBuoy, BarChart3, Search } from "lucide-react";

export const Business = [
  {
    id: "BusinessBenefits",
    subheading: "Startup MVP (Minimum Viable Product) development helps validate your idea, attract investors, and enter the market quickly. Here’s why it’s essential:",
    features: [
      {
        icon: <Rocket className="stroke-muted-foreground size-7" />,
        title: "Rapid Market Entry",
        desc: "Launch your core product quickly to test the idea, gather user feedback, and iterate efficiently.",
      },
      {
        icon: <Layers className="stroke-muted-foreground size-7" />,
        title: "Focused Feature Set",
        desc: "Include only essential features to solve the main problem, reducing development time and cost.",
      },
      {
        icon: <PenTool className="stroke-muted-foreground size-7" />,
        title: "Cost-Effective Development",
        desc: "Minimize initial investment by building a lean version of your product before scaling.",
      },
      {
        icon: <Code className="stroke-muted-foreground size-7" />,
        title: "Scalable Architecture",
        desc: "Develop a flexible foundation that can grow as user base and feature requirements increase.",
      },
      {
        icon: <Zap className="stroke-muted-foreground size-7" />,
        title: "Fast Iteration & Feedback",
        desc: "Quickly implement user feedback to improve the product and validate your business model.",
      },
      {
        icon: <Users className="stroke-muted-foreground size-7" />,
        title: "User-Centric Design",
        desc: "Focus on intuitive interfaces and seamless user experience to attract early adopters.",
      },
      {
        icon: <LifeBuoy className="stroke-muted-foreground size-7" />,
        title: "Post-Launch Support",
        desc: "Provide ongoing maintenance, updates, and improvements based on real user data.",
      },
    ],
  },
];

export const allPricingData = [
  {
    id: "Pricing",
    heading: "Estimated Pricing",
    subheading: "Startup MVP development pricing depends on complexity, platform, and required integrations:",
    note: "These are starting estimates; final pricing depends on the scope, technology stack, and desired features.",
    cards: [
      {
        icon: PenTool,
        title: "Basic MVP",
        duration: "3-4 weeks",
        description: "Core features to validate your idea quickly.",
        price: "$2,000 / Rs.1,60,000",
        ctaVariant: "outline",
      },
      {
        icon: Code,
        title: "Standard MVP",
        duration: "5-6 weeks",
        description: "Enhanced MVP with additional features and integrations.",
        price: "$4,000 / Rs.3,20,000",
        ctaVariant: "outline",
      },
      {
        icon: Layers,
        title: "Advanced MVP",
        duration: "6-8 weeks",
        description: "Full-featured MVP with scalability, analytics, and user management.",
        price: "$7,000 / Rs.5,60,000",
        ctaVariant: "outline",
      },
      {
        icon: Rocket,
        title: "Enterprise MVP",
        duration: "8+ weeks",
        description: "Customized MVP for large-scale launch, multi-platform support, and advanced integrations.",
        price: "$10,000+ / Rs.8,00,000+",
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
        "MVP (Minimum Viable Product) development focuses on building a lean version of a product to validate a startup idea quickly.",
        "It includes only core functionalities to solve the main problem for early users, allowing startups to test the concept, gather feedback, and iterate efficiently.",
        "MVP development reduces risk, saves costs, and accelerates market entry for new ventures.",
      ],
    },
    cards: [
      {
        badge: "Planning",
        title: "Requirement Analysis & Strategy",
        desc: "Define startup goals, target audience, and essential MVP features.",
      },
      {
        badge: "Design",
        title: "UI/UX & Prototyping",
        desc: "Create user-friendly, intuitive designs and interactive prototypes.",
      },
      {
        badge: "Development",
        title: "Frontend & Backend Implementation",
        desc: "Build core functionalities with a scalable architecture for future growth.",
      },
      {
        badge: "Testing",
        title: "Quality Assurance & Feedback",
        desc: "Test the MVP for functionality, usability, and collect early user feedback.",
      },
      {
        badge: "Deployment",
        title: "Launch & Monitoring",
        desc: "Deploy the MVP to production and monitor usage for insights.",
      },
      {
        badge: "Support",
        title: "Post-Launch Iteration",
        desc: "Implement improvements, fix bugs, and add features based on user feedback.",
      },
      {
        badge: "Analytics",
        title: "User Behavior & Metrics",
        desc: "Track user interactions and key performance indicators to guide future development.",
      }
    ],
  },
];

export const FeaturesData = [
  {
    id: "Features",
    heading: "How Hirebie Delivers IT",
    subheading: "We help startups bring their ideas to market quickly and efficiently:",
    features: [
      {
        title: "Discovery & Consultation",
        description: "Understand startup goals, problem statement, and target audience.",
        icon: <Search className="size-4 md:size-6" />,
      },
      {
        title: "Prototyping & UI/UX Design",
        description: "Create intuitive and interactive designs for core features.",
        icon: <Layers className="size-4 md:size-6" />,
      },
      {
        title: "Tech Stack Selection",
        description: "Select scalable and cost-effective technologies for MVP development.",
        icon: <Code className="size-4 md:size-6" />,
      },
      {
        title: "Agile Development",
        description: "Develop MVP iteratively for fast delivery and user feedback.",
        icon: <Zap className="size-4 md:size-6" />,
      },
      {
        title: "Testing & QA",
        description: "Ensure functionality, usability, and gather early user insights.",
        icon: <CheckCircle className="size-4 md:size-6" />,
      },
      {
        title: "Deployment & Launch",
        description: "Deploy the MVP with monitoring, analytics, and basic support.",
        icon: <Rocket className="size-4 md:size-6" />,
      },
      {
        title: "Post-Launch Support",
        description: "Provide maintenance, updates, and feature improvements based on feedback.",
        icon: <LifeBuoy className="size-4 md:size-6" />,
      },
      {
        title: "Analytics & Insights",
        description: "Track usage, behavior, and metrics to guide further development.",
        icon: <BarChart3 className="size-4 md:size-6" />,
      },
    ],
  },
];
