import React from "react";
import { Search, Layers, Rocket, BarChart3, LifeBuoy, CheckCircle, Users, Zap } from "lucide-react";

export const Business = [
  {
    id: "BusinessBenefits",
    subheading: "Startup Tech Advisory helps new ventures make strategic technology decisions, ensuring scalable, cost-effective, and future-ready solutions. Here’s why it’s crucial:",
    features: [
      {
        icon: <Search className="stroke-muted-foreground size-7" />,
        title: "Technology Strategy",
        desc: "Identify the right tech stack, architecture, and tools aligned with your business goals and growth plans.",
      },
      {
        icon: <Layers className="stroke-muted-foreground size-7" />,
        title: "System Architecture Planning",
        desc: "Design scalable, secure, and maintainable systems that can grow with your startup.",
      },
      {
        icon: <Rocket className="stroke-muted-foreground size-7" />,
        title: "Market & Competitor Analysis",
        desc: "Evaluate market trends and competitors to select technologies that provide a competitive edge.",
      },
      {
        icon: <BarChart3 className="stroke-muted-foreground size-7" />,
        title: "Performance & Cost Optimization",
        desc: "Recommend solutions that optimize performance while keeping costs under control.",
      },
      {
        icon: <Zap className="stroke-muted-foreground size-7" />,
        title: "Automation & Efficiency",
        desc: "Identify opportunities to automate processes and streamline workflows using the right tools.",
      },
      {
        icon: <Users className="stroke-muted-foreground size-7" />,
        title: "Team & Resource Guidance",
        desc: "Advise on hiring, resource allocation, and technology adoption for effective execution.",
      },
      {
        icon: <LifeBuoy className="stroke-muted-foreground size-7" />,
        title: "Ongoing Advisory & Support",
        desc: "Provide continuous guidance as your startup evolves, helping make informed technology decisions.",
      },
    ],
  },
];

export const allPricingData = [
  {
    id: "Pricing",
    heading: "Estimated Pricing",
    subheading: "Startup Tech Advisory pricing varies depending on project scope, duration, and advisory depth:",
    note: "These are starting estimates; final pricing depends on the size of the startup, complexity of tech requirements, and level of involvement.",
    cards: [
      {
        icon: Search,
        title: "Basic Advisory",
        duration: "2-4 weeks",
        description: "Technology assessment, initial roadmap, and tool recommendations.",
        price: "$500 / Rs.40,000",
        ctaVariant: "outline",
      },
      {
        icon: Layers,
        title: "Standard Advisory",
        duration: "4-6 weeks",
        description: "Detailed architecture planning, process automation recommendations, and performance optimization.",
        price: "$1,500 / Rs.1,20,000",
        ctaVariant: "outline",
      },
      {
        icon: BarChart3,
        title: "Advanced Advisory",
        duration: "6-8 weeks",
        description: "Full strategic guidance including system architecture, cost optimization, and competitor analysis.",
        price: "$3,000 / Rs.2,40,000",
        ctaVariant: "outline",
      },
      {
        icon: Rocket,
        title: "Enterprise Advisory",
        duration: "8+ weeks",
        description: "Ongoing advisory for complex, scalable systems and long-term technology planning.",
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
        "Startup Tech Advisory focuses on helping new businesses make informed decisions about technology adoption, architecture, and tools.",
        "It ensures that the startup's technology infrastructure is scalable, cost-effective, secure, and aligned with long-term business goals.",
        "Advisory services can include system design, performance optimization, automation strategies, tool selection, and ongoing guidance.",
      ],
    },
    cards: [
      {
        badge: "Strategy",
        title: "Technology Assessment & Roadmap",
        desc: "Analyze current needs, define tech goals, and create a roadmap for future growth.",
      },
      {
        badge: "Architecture",
        title: "System Architecture Planning",
        desc: "Design scalable and maintainable systems suitable for startup growth and market demands.",
      },
      {
        badge: "Optimization",
        title: "Performance & Cost Recommendations",
        desc: "Identify areas to optimize efficiency, reduce costs, and improve system performance.",
      },
      {
        badge: "Automation",
        title: "Process Automation",
        desc: "Recommend tools and practices to streamline workflows and improve productivity.",
      },
      {
        badge: "Support",
        title: "Ongoing Advisory",
        desc: "Provide continuous guidance and adjustments as the startup evolves.",
      },
      { badge: "Team",
        title: "Resource & Team Guidance",
        desc: "Advise on hiring, team structure, and technology adoption for effective execution.",
      },
    ],
  },
];

export const FeaturesData = [
  {
    id: "Features",
    heading: "How Hirebie Delivers IT",
    subheading: "We provide structured, strategic, and actionable advice to help startups succeed:",
    features: [
      {
        title: "Discovery & Consultation",
        description: "Understand startup vision, business model, and tech requirements.",
        icon: <Search className="size-4 md:size-6" />,
      },
      {
        title: "Strategic Planning",
        description: "Develop a technology roadmap and architecture plan aligned with goals.",
        icon: <Layers className="size-4 md:size-6" />,
      },
      {
        title: "Performance & Cost Analysis",
        description: "Evaluate efficiency, cost-effectiveness, and scalability of proposed solutions.",
        icon: <BarChart3 className="size-4 md:size-6" />,
      },
      {
        title: "Implementation Guidance",
        description: "Provide actionable recommendations for development and deployment.",
        icon: <Rocket className="size-4 md:size-6" />,
      },
      {
        title: "Automation & Tools",
        description: "Suggest automation strategies and appropriate tools for workflow efficiency.",
        icon: <Zap className="size-4 md:size-6" />,
      },
      {
        title: "User & Team Support",
        description: "Advise on resource allocation, training, and technical onboarding.",
        icon: <Users className="size-4 md:size-6" />,
      },
      {
        title: "Ongoing Advisory",
        description: "Continuous support as the startup scales and technology needs evolve.",
        icon: <LifeBuoy className="size-4 md:size-6" />,
      },
      {
        title: "Monitoring & Analytics",
        description: "Provide insights and metrics to track technology performance and progress.",
        icon: <CheckCircle className="size-4 md:size-6" />,
      },
    ],
  },
];
