import React from "react";
import { PenTool, Layers, Rocket, BarChart3, LifeBuoy, CheckCircle, Search, Users, Palette } from "lucide-react";

export const Business = [
  {
    id: "BusinessBenefits",
    subheading: "Website redesign & modernization refreshes your online presence, improves user experience, and enhances business performance. Here’s why it matters:",
    features: [
      {
        icon: <Palette className="stroke-muted-foreground size-7" />,
        title: "Modern UI/UX",
        desc: "Revamp your site with an intuitive, visually appealing interface that engages users and reduces bounce rates.",
      },
      {
        icon: <Rocket className="stroke-muted-foreground size-7" />,
        title: "Improved Performance",
        desc: "Optimize site speed, responsiveness, and technical performance for a smooth user experience.",
      },
      {
        icon: <Layers className="stroke-muted-foreground size-7" />,
        title: "Scalable Architecture",
        desc: "Update your backend and frontend to support growth, new features, and integrations.",
      },
      {
        icon: <CheckCircle className="stroke-muted-foreground size-7" />,
        title: "Enhanced Security",
        desc: "Modernize security protocols, SSL, and compliance measures to protect user data.",
      },
      {
        icon: <BarChart3 className="stroke-muted-foreground size-7" />,
        title: "SEO & Visibility Boost",
        desc: "Redesign with SEO-friendly practices to improve rankings and increase organic traffic.",
      },
      {
        icon: <Users className="stroke-muted-foreground size-7" />,
        title: "Better User Engagement",
        desc: "Interactive elements, personalization, and modern design increase engagement and retention.",
      },
      {
        icon: <LifeBuoy className="stroke-muted-foreground size-7" />,
        title: "Ongoing Maintenance",
        desc: "Continuous monitoring, updates, and feature enhancements keep your site modern and functional.",
      },
      {
        icon: <Search className="stroke-muted-foreground size-7" />,
        title: "Competitive Advantage",
        desc: "Stay ahead of competitors with a fresh, up-to-date website that reflects current trends and technologies.",
      }
    ],
  },
];

export const allPricingData = [
  {
    id: "Pricing",
    heading: "Estimated Pricing",
    subheading: "Website redesign & modernization costs depend on website complexity, features, and level of customization:",
    note: "These are starting estimates; final pricing depends on integrations, design requirements, and technical upgrades.",
    cards: [
      {
        icon: PenTool,
        title: "Basic Redesign",
        duration: "2-3 weeks",
        description: "UI/UX refresh and performance optimization for small websites.",
        price: "$1,000 / Rs.80,000",
        ctaVariant: "outline",
      },
      {
        icon: Layers,
        title: "Standard Redesign",
        duration: "3-5 weeks",
        description: "Enhanced UI/UX, mobile responsiveness, and basic SEO improvements.",
        price: "$2,500 / Rs.2,00,000",
        ctaVariant: "outline",
      },
      {
        icon: Rocket,
        title: "Advanced Modernization",
        duration: "5-8 weeks",
        description: "Complete redesign with new architecture, performance tuning, and SEO optimization.",
        price: "$5,000 / Rs.4,00,000",
        ctaVariant: "outline",
      },
      {
        icon: BarChart3,
        title: "Enterprise-Level Redesign",
        duration: "8+ weeks",
        description: "Full-scale modernization including integrations, analytics, multi-language support, and advanced features.",
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
        "Website redesign & modernization involves revamping your existing website to improve design, functionality, performance, and user experience.",
        "It includes updating UI/UX, optimizing performance, enhancing security, making the site mobile-friendly, and ensuring SEO best practices.",
        "Modernized websites help businesses stay competitive, improve engagement, and deliver a seamless user experience.",
      ],
    },
    cards: [
      {
        badge: "Planning",
        title: "Requirement Analysis & Strategy",
        desc: "Identify improvement areas, business goals, and user needs for redesign.",
      },
      {
        badge: "Design",
        title: "UI/UX Revamp",
        desc: "Create a visually appealing and user-friendly interface aligned with modern trends.",
      },
      {
        badge: "Development",
        title: "Frontend & Backend Modernization",
        desc: "Update codebase, frameworks, and architecture for better performance and scalability.",
      },
      {
        badge: "Testing",
        title: "QA & Optimization",
        desc: "Ensure compatibility, speed, accessibility, and SEO compliance across devices.",
      },
      {
        badge: "Deployment",
        title: "Launch & Monitoring",
        desc: "Deploy the updated website with monitoring, analytics, and performance tracking.",
      },
      {
        badge: "Support",
        title: "Ongoing Maintenance",
        desc: "Regular updates, security patches, and feature enhancements to keep the website modern.",
      },
    ],
  },
];

export const FeaturesData = [
  {
    id: "Features",
    heading: "How Hirebie Delivers IT",
    subheading: "We transform outdated websites into modern, high-performing digital experiences:",
    features: [
      {
        title: "Discovery & Consultation",
        description: "Assess current site, identify gaps, and understand business and user requirements.",
        icon: <Search className="size-4 md:size-6" />,
      },
      {
        title: "UI/UX Design",
        description: "Redesign layout, visual elements, and user flows for better engagement.",
        icon: <Palette className="size-4 md:size-6" />,
      },
      {
        title: "Tech Stack & Architecture",
        description: "Update backend/frontend frameworks, optimize database, and improve architecture.",
        icon: <Layers className="size-4 md:size-6" />,
      },
      {
        title: "Performance & SEO Optimization",
        description: "Enhance page speed, responsiveness, and search engine ranking.",
        icon: <BarChart3 className="size-4 md:size-6" />,
      },
      {
        title: "Testing & QA",
        description: "Ensure cross-browser/device compatibility, speed, and functionality.",
        icon: <CheckCircle className="size-4 md:size-6" />,
      },
      {
        title: "Deployment & Launch",
        description: "Deploy the modernized site with monitoring and analytics.",
        icon: <Rocket className="size-4 md:size-6" />,
      },
      {
        title: "Post-Launch Support",
        description: "Provide continuous updates, maintenance, and feature enhancements.",
        icon: <LifeBuoy className="size-4 md:size-6" />,
      },
      { title: "User Training & Documentation",
        description: "Offer training sessions and documentation for easy content management.",
        icon: <Users className="size-4 md:size-6" />,
      }
    ],
  },
];
