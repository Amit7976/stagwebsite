import React from "react";
import { Database, Server, ShieldCheck, BarChart3, CheckCircle, Zap, Layers, LifeBuoy, Box, Search, Repeat } from "lucide-react";

export const Business = [
  {
    id: "BusinessBenefits",
    subheading: "A well-designed database is the backbone of any application. Here’s why it matters:",
    features: [
      {
        icon: <Database className="stroke-muted-foreground size-7" />,
        title: "Data Organization & Integrity",
        desc: "Structured data ensures consistency, avoids duplication, and makes retrieval fast and accurate.",
      },
      {
        icon: <ShieldCheck className="stroke-muted-foreground size-7" />,
        title: "Security & Access Control",
        desc: "Proper database design allows role-based access, encryption, and protection against unauthorized access.",
      },
      {
        icon: <BarChart3 className="stroke-muted-foreground size-7" />,
        title: "Performance Optimization",
        desc: "Indexing, normalization, and query optimization help your applications run faster and handle more users.",
      },
      {
        icon: <Layers className="stroke-muted-foreground size-7" />,
        title: "Scalability & Flexibility",
        desc: "Well-structured databases can scale vertically or horizontally to handle growing data and complex queries.",
      },
      {
        icon: <Zap className="stroke-muted-foreground size-7" />,
        title: "Automated Backups & Recovery",
        desc: "Ensures data is safe, recoverable, and minimizes downtime in case of failures or disasters.",
      },
      {
        icon: <Server className="stroke-muted-foreground size-7" />,
        title: "Efficient Resource Management",
        desc: "Optimized database design reduces server load, storage usage, and operational costs.",
      },
    ],
  },
];

export const allPricingData = [
  {
    id: "Pricing",
    heading: "Estimated Pricing",
    subheading: "Database design & management pricing depends on size, complexity, and additional services such as backup, monitoring, and optimization.",
    note: "These are starting estimates; final costs vary depending on features, integrations, and service level agreements (SLAs).",
    cards: [
      {
        icon: Database,
        title: "Basic Database Setup",
        duration: "1-2 weeks",
        description: "Single database with basic tables and queries.",
        price: "$300 / Rs.24,000",
        ctaVariant: "outline",
      },
      {
        icon: Layers,
        title: "Intermediate Database Design",
        duration: "3-5 weeks",
        description: "Normalized schema, stored procedures, indexing, and backup setup.",
        price: "$800 / Rs.64,000",
        ctaVariant: "outline",
      },
      {
        icon: Server,
        title: "Advanced Database & Management",
        duration: "4-8 weeks",
        description: "Complex schema, replication, performance tuning, and monitoring.",
        price: "$1,500 / Rs.1,20,000",
        ctaVariant: "outline",
      },
      {
        icon: ShieldCheck,
        title: "Enterprise Database Solution",
        duration: "8+ weeks",
        description: "High-availability, disaster recovery, security hardening, and multi-database integration.",
        price: "$3,000+ / Rs.2,40,000+",
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
        "Database Design & Management is the process of structuring, organizing, securing, and maintaining data to ensure it is accurate, accessible, and scalable.",
        "It includes designing schemas, tables, relationships, normalization, indexing, and defining backup and security policies.",
        "Proper database management ensures applications run efficiently, data is reliable, and business operations are supported effectively.",
      ],
    },
    cards: [
      {
        badge: "Analysis",
        title: "Requirement Analysis",
        desc: "Understand data needs, business rules, and usage patterns to create an optimal design.",
      },
      {
        badge: "Design",
        title: "Schema & Data Modeling",
        desc: "Design logical and physical schema with normalization, relationships, and constraints.",
      },
      {
        badge: "Implementation",
        title: "Database Creation & Configuration",
        desc: "Set up databases, tables, indexes, stored procedures, and triggers.",
      },
      {
        badge: "Optimization",
        title: "Performance Tuning",
        desc: "Optimize queries, indexing, and storage for speed and efficiency.",
      },
      {
        badge: "Security",
        title: "Backup & Security Management",
        desc: "Implement access control, encryption, audit trails, and automated backups.",
      },
      {
        badge: "Maintenance",
        title: "Monitoring & Updates",
        desc: "Regular monitoring, updates, and optimization for reliability and scalability.",
      },
    ],
  },
];

export const FeaturesData = [
  {
    id: "Features",
    heading: "How Hirebie Delivers IT",
    subheading: "Our approach ensures databases are secure, scalable, and optimized for your business needs:",
    features: [
      {
        title: "Consultation & Requirement Gathering",
        description: "We analyze your data and application requirements to create a robust database plan.",
        icon: <Search className="size-4 md:size-6" />,
      },
      {
        title: "Database Architecture Design",
        description: "We design logical and physical data models for performance, scalability, and security.",
        icon: <Layers className="size-4 md:size-6" />,
      },
      {
        title: "Implementation & Optimization",
        description: "We set up the database, write optimized queries, and ensure indexing and normalization.",
        icon: <Database className="size-4 md:size-6" />,
      },
      {
        title: "Automation & Backup",
        description: "Set up automated backups, replication, and recovery strategies.",
        icon: <Repeat className="size-4 md:size-6" />,
      },
      {
        title: "Monitoring & Maintenance",
        description: "Continuous performance monitoring and updates to keep databases reliable.",
        icon: <BarChart3 className="size-4 md:size-6" />,
      },
      {
        title: "Security & Compliance",
        description: "Ensure data is protected, encrypted, and meets industry standards.",
        icon: <ShieldCheck className="size-4 md:size-6" />,
      },
      {
        title: "Post-Launch Support",
        description: "Ongoing support for queries, optimization, and scaling as business grows.",
        icon: <LifeBuoy className="size-4 md:size-6" />,
      },
      {
        title: "Reporting & Analytics",
        description: "Set up dashboards and analytics tools to get actionable insights from your data.",
        icon: <CheckCircle className="size-4 md:size-6" />,
      },
    ],
  },
];
