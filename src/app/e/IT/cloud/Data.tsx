import React from "react";
import {
  Cloud,
  Server,
  ShieldCheck,
  Cpu,
  Zap,
  Repeat,
  Box,
  GitBranch,
  Monitor,
  Database,
  AlertCircle,
  HardDrive,
  LifeBuoy,
  BarChart3,
  CheckCircle,
} from "lucide-react";

export const Business = [
  {
    id: "BusinessBenefits",
    subheading: "Cloud infrastructure and DevOps practices can transform your business efficiency and agility. Here’s how:",
    features: [
      {
        icon: <Cloud className="stroke-muted-foreground size-7" />,
        title: "Scalable & Flexible Infrastructure",
        desc: "Easily scale computing resources up or down based on demand without over-provisioning or downtime.",
      },
      {
        icon: <ShieldCheck className="stroke-muted-foreground size-7" />,
        title: "Enhanced Security & Compliance",
        desc: "Modern cloud platforms provide built-in security, monitoring, and compliance features to protect your data and applications.",
      },
      {
        icon: <Zap className="stroke-muted-foreground size-7" />,
        title: "Faster Time-to-Market",
        desc: "DevOps practices enable continuous integration and deployment, reducing release cycles and improving delivery speed.",
      },
      {
        icon: <Repeat className="stroke-muted-foreground size-7" />,
        title: "Automation & Efficiency",
        desc: "Infrastructure as Code (IaC) and automated pipelines reduce manual errors, increase consistency, and save time.",
      },
      {
        icon: <Server className="stroke-muted-foreground size-7" />,
        title: "High Availability & Reliability",
        desc: "Cloud platforms offer redundancy, failover mechanisms, and disaster recovery to keep services running 24/7.",
      },
      {
        icon: <Cpu className="stroke-muted-foreground size-7" />,
        title: "Cost Optimization",
        desc: "Pay-as-you-go pricing and resource monitoring help reduce operational costs while maximizing performance.",
      },
      {
        icon: <Box className="stroke-muted-foreground size-7" />,
        title: "Global Reach",
        desc: "Deploy applications closer to users worldwide using cloud regions and content delivery networks for low latency.",
      },
    ],
  },
];

export const allPricingData = [
  {
    id: "Pricing",
    heading: "Estimated Pricing",
    subheading: "Pricing varies depending on infrastructure, automation, and DevOps setup complexity. Here’s a starting point:",
    note: "Final cost depends on compute instances, storage, network usage, CI/CD pipelines, monitoring tools, and level of customization.",
    cards: [
      {
        icon: Server,
        title: "Basic Cloud Setup",
        duration: "1-2 weeks",
        description: "Single server setup with basic CI/CD pipeline.",
        price: "$500 / Rs.40,000",
        ctaVariant: "outline",
      },
      {
        icon: Database,
        title: "Standard Cloud & DevOps",
        duration: "3-5 weeks",
        description: "Multi-server setup with automated CI/CD and monitoring.",
        price: "$1,200 / Rs.96,000",
        ctaVariant: "outline",
      },
      {
        icon: GitBranch,
        title: "Advanced Cloud Architecture",
        duration: "4-8 weeks",
        description: "High availability, containerization, and automated scaling.",
        price: "$2,500 / Rs.2,00,000",
        ctaVariant: "outline",
      },
      {
        icon: Monitor,
        title: "Enterprise Cloud & DevOps",
        duration: "8+ weeks",
        description: "Full-scale infrastructure, DevSecOps, monitoring, and optimization.",
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
        "Cloud Infrastructure refers to on-demand computing resources, including servers, storage, networking, and software hosted in the cloud.",
        "DevOps is a set of practices that combine software development and IT operations to automate and improve the software delivery lifecycle.",
        "Together, they enable businesses to deploy, scale, and maintain applications efficiently and securely.",
      ],
    },
    cards: [
      {
        badge: "Planning",
        title: "Cloud Strategy & Assessment",
        desc: "Analyze current infrastructure, business goals, and compliance needs to design a cloud adoption plan.",
      },
      {
        badge: "Design",
        title: "Architecture & Design",
        desc: "Design cloud architecture, network topology, CI/CD pipelines, and security configurations.",
      },
      {
        badge: "Implementation",
        title: "Cloud Deployment & Migration",
        desc: "Deploy workloads, migrate applications, and optimize resources for performance and cost.",
      },
      {
        badge: "Automation",
        title: "Infrastructure as Code",
        desc: "Automate provisioning, scaling, and configuration using tools like Terraform, Ansible, or CloudFormation.",
      },
      {
        badge: "Testing",
        title: "Monitoring & Optimization",
        desc: "Ensure reliability, performance, and security through continuous monitoring, logging, and alerting.",
      },
      {
        badge: "Maintenance",
        title: "Ongoing Management",
        desc: "Regular updates, backups, and incident management to keep systems secure and efficient.",
      },
    ],
  },
];

export const FeaturesData = [
  {
    id: "Features",
    heading: "How Hirebie Delivers IT",
    subheading: "Our Cloud & DevOps services ensure seamless, secure, and scalable digital operations:",
    features: [
      {
        title: "Consultation & Assessment",
        description: "We evaluate your current infrastructure, business needs, and define a cloud adoption strategy.",
        icon: <AlertCircle className="size-4 md:size-6" />,
      },
      {
        title: "Architecture Design",
        description: "Design highly available, scalable, and secure cloud architecture.",
        icon: <HardDrive className="size-4 md:size-6" />,
      },
      {
        title: "CI/CD & Automation",
        description: "Implement pipelines for continuous integration, testing, and deployment.",
        icon: <GitBranch className="size-4 md:size-6" />,
      },
      {
        title: "Containerization & Orchestration",
        description: "Use Docker, Kubernetes, or serverless platforms to ensure consistent deployments.",
        icon: <Box className="size-4 md:size-6" />,
      },
      {
        title: "Monitoring & Optimization",
        description: "Track performance, security, and costs to optimize cloud operations.",
        icon: <BarChart3 className="size-4 md:size-6" />,
      },
      {
        title: "Security & Compliance",
        description: "Implement policies, encryption, and audits to keep data safe and compliant.",
        icon: <ShieldCheck className="size-4 md:size-6" />,
      },
      {
        title: "Post-Launch Support",
        description: "Continuous support, updates, and performance tuning to maintain peak efficiency.",
        icon: <LifeBuoy className="size-4 md:size-6" />,
      },
      {
        title: "Cost Management",
        description: "Optimize resources and reduce unnecessary spending with cloud cost analysis tools.",
        icon: <CheckCircle className="size-4 md:size-6" />,
      },
    ],
  },
];
