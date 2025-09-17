import React from "react";
import {
  Network,
  PlugZap,
  Database,
  ShieldCheck,
  Layers,
  Workflow,
  Cloud,
  Code,
  Cog,
  Rocket,
  GitPullRequest,
  Search,
  Settings,
  BarChart3,
  LifeBuoy,
  TestTube,
} from "lucide-react";

export const Business = [
  {
    id: "Businessbenefits",
    subheading:
      "API Development & Integration ensures smooth communication between different systems, applications, and platforms. Here’s why it matters:",
    features: [
      {
        icon: <Network className="stroke-muted-foreground size-7" />,
        title: "Seamless Connectivity",
        desc: "APIs allow different platforms, apps, and services to work together effortlessly—eliminating silos.",
      },
      {
        icon: <PlugZap className="stroke-muted-foreground size-7" />,
        title: "Faster Development Cycles",
        desc: "Instead of reinventing the wheel, APIs let developers quickly plug in pre-built services.",
      },
      {
        icon: <Database className="stroke-muted-foreground size-7" />,
        title: "Real-Time Data Access",
        desc: "Integrations ensure instant synchronization of information across applications and databases.",
      },
      {
        icon: <ShieldCheck className="stroke-muted-foreground size-7" />,
        title: "Enhanced Security",
        desc: "APIs can enforce authentication, authorization, and encryption—keeping data secure.",
      },
      {
        icon: <Workflow className="stroke-muted-foreground size-7" />,
        title: "Business Process Automation",
        desc: "APIs automate workflows like payments, CRM updates, shipping, and notifications—saving time and cost.",
      },
      {
        icon: <Layers className="stroke-muted-foreground size-7" />,
        title: "Scalability & Flexibility",
        desc: "Easily extend applications by integrating with third-party services like payment gateways, cloud storage, or analytics.",
      },
      {
        icon: <Cloud className="stroke-muted-foreground size-7" />,
        title: "Cloud-Native Benefits",
        desc: "APIs are the backbone of SaaS, cloud apps, and microservices—enabling scalable and resilient systems.",
      },
    ],
  },
];

export const allPricingData = [
  {
    id: "Pricing",
    heading: "Estimated Pricing ",
    subheading:
      "Pricing for API Development & Integration depends on complexity, third-party services, and security requirements. At Hirebie, we provide transparent pricing:",
    note: "These are base estimates. The final cost may vary depending on API complexity, authentication methods, cloud usage, and integrations.",
    cards: [
      {
        icon: Code,
        title: "Basic API Integration",
        duration: "1-2 weeks",
        description: "Integration of simple third-party APIs (e.g., payment, maps, emails).",
        price: "$400 / Rs.32,000",
        ctaVariant: "outline",
      },
      {
        icon: Cog,
        title: "Custom API Development",
        duration: "2-4 weeks",
        description: "Building secure APIs tailored for your business workflows.",
        price: "$1,000 / Rs.80,000",
        ctaVariant: "outline",
      },
      {
        icon: Database,
        title: "Advanced System Integration",
        duration: "4-6 weeks",
        description: "Integrating multiple services (ERP, CRM, cloud, analytics).",
        price: "$2,500 / Rs.2,00,000",
        ctaVariant: "outline",
      },
      {
        icon: Rocket,
        title: "Enterprise API Solutions",
        duration: "6-10+ weeks",
        description: "High-performance, secure, and scalable API ecosystems for enterprises.",
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
      badge: "Integration",
      title: "What It Is",
      description: [
        "API (Application Programming Interface) Development & Integration refers to building and connecting APIs that allow applications to communicate with each other.",
        "APIs make it possible to integrate third-party services (like payment gateways, CRMs, cloud storage, or AI models) directly into your system—without reinventing functionality.",
        "At its core, API services ensure automation, seamless communication, and real-time data exchange across multiple platforms.",
      ],
    },
    cards: [
      {
        badge: "Planning",
        title: "Requirement Analysis",
        desc: "Understanding the business use case and integration points.",
      },
      {
        badge: "Development",
        title: "Custom API Development",
        desc: "Building REST, GraphQL, or SOAP APIs with authentication & security.",
      },
      {
        badge: "Integration",
        title: "Third-Party Integrations",
        desc: "Connecting external APIs (payment, maps, chat, cloud) into your app.",
      },
      {
        badge: "Security",
        title: "Authentication & Encryption",
        desc: "Implementing OAuth2, JWT, and SSL for secure communication.",
      },
      {
        badge: "Testing",
        title: "API Testing & Monitoring",
        desc: "Ensuring reliability, performance, and bug-free integration.",
      },
      {
        badge: "Deployment",
        title: "Deployment & Maintenance",
        desc: "Managing API lifecycle, monitoring, scaling, and updates.",
      },
    ],
  },
];
export const WhyChooseHirebie = [
    {
        id: "WhyChooseHirebie",
        heading: "for API Development & Integration?",
        points: [
            {
                icon: <Code className="w-6 h-6" />,
                title: "Robust API Development",
                desc: "We design APIs that are fast, scalable, and easy to integrate with any platform.",
            },
            {
                icon: <GitPullRequest className="w-6 h-6" />,
                title: "Seamless Integration",
                desc: "Connect your apps and services effortlessly with our well-documented APIs.",
            },
            {
                icon: <Cloud className="w-6 h-6" />,
                title: "Cloud-Ready Solutions",
                desc: "Our APIs are optimized for cloud environments, ensuring high availability and performance.",
            },
            {
                icon: <Database className="w-6 h-6" />,
                title: "Data Security & Management",
                desc: "We prioritize secure data exchange and follow best practices in API authentication and authorization.",
            },
            {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Reliable & Scalable",
                desc: "Our APIs handle high traffic loads and scale seamlessly as your business grows.",
            },
        ],
    },
];
export const FeaturesData = [
  {
    id: "Features",
    heading: "How Hirebie Delivers IT",
    subheading: "At Hirebie, API development isn’t just about endpoints—it’s about connecting systems, enabling automation, and powering seamless digital experiences. Here’s how we bring your integrations to life:",
    steps: [
      {
        icon: <Search className="w-6 h-6" />,
        title: "Requirement Analysis",
        description:
          "We start by understanding your systems, data flow, and integration goals. This ensures that the API solution aligns perfectly with your business needs.",
      },
      {
        icon: <Layers className="w-6 h-6" />,
        title: "API Architecture & Design",
        description:
          "Our team designs scalable and secure API architectures, defining endpoints, data structures, authentication, and error handling.",
      },
      {
        icon: <Settings className="w-6 h-6" />,
        title: "Technology Selection",
        description:
          "We choose the best technology stack—REST, GraphQL, gRPC, or SOAP—based on performance, scalability, and client requirements.",
      },
      {
        icon: <Code className="w-6 h-6" />,
        title: "API Development",
        description:
          "We develop APIs following best practices, ensuring maintainability, security, and high performance for all types of integrations.",
      },
      {
        icon: <TestTube className="w-6 h-6" />,
        title: "Testing & Validation",
        description:
          "Rigo rous testing is conducted, including unit tests, load testing, and security testing to guarantee reliable and secure APIs.",
      },
      {
        icon: <Rocket className="w-6 h-6" />,
        title: "Deployment & Documentation",
        description:
          "We deploy APIs to your environment and provide comprehensive documentation for your developers, enabling smooth adoption and integration.",
      },
      {
        icon: <LifeBuoy className="w-6 h-6" />,
        title: "Monitoring & Maintenance",
        description:
          "Post-deployment, we provide continuous monitoring, performance tuning, updates, and support to ensure your APIs remain secure and efficient.",
      },
      {
        icon: <BarChart3 className="w-6 h-6" />,
        title: "Integration Assistance",
        description:
          "We help integrate your APIs with third-party systems, mobile apps, or internal platforms, ensuring seamless data flow and automation.",
      },
    ],
  },
];
