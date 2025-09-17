import React from "react";
import {
  Eye,
  Clock,
  Wallet,
  TrendingUp,
  Users,
  Layers,
  BadgeCheck,
PenTool, Code, Bug, Rocket,  
BarChart3,
LifeBuoy,
CheckCircle,
KanbanSquare,
Palette,
Search} from "lucide-react";
import { features } from "process";

export const Business = [
  {
    id: "Businessbenefits",
    subheading: "A high-quality website or web app can be a game-changer for any business. Here’s why:",

    features: [
      {
        icon: <Clock className="stroke-muted-foreground size-7" />,
        title: "24/7 Online Presence",
        desc: "Your customers can learn about your business, explore your services, and even make purchases—anytime, anywhere—without being restricted by store hours or location.",
      },
      {
        icon: <Eye className="stroke-muted-foreground size-7" />,
        title: "First Impressions Matter",
        desc: "A sleek, fast-loading, and well-designed website builds trust instantly. In fact, studies show that users form an opinion about a site within 0.05 seconds—make it count.",
      },
      {
        icon: <BadgeCheck className="stroke-muted-foreground size-7" />,
        title: "Increased Credibility & Brand Value",
        desc: "An outdated or poorly designed site sends the wrong message. A professionally developed platform positions your brand as modern, reliable, and trustworthy.",
      },
      {
        icon: <TrendingUp className="stroke-muted-foreground size-7" />,
        title: "Wider Reach & Market Expansion",
        desc: "Unlike physical stores, a website can reach global audiences without the need for a physical presence—opening up entirely new revenue streams.",
      },
      {
        icon: <Users className="stroke-muted-foreground size-7" />,
        title: "Better Customer Engagement",
        desc: "Web apps allow for personalized user experiences, chat support, feedback systems, and interactive tools that increase customer satisfaction.",
      },
      {
        icon: <Layers className="stroke-muted-foreground size-7" />,
        title: "Scalability & Flexibility",
        desc: "Custom web development ensures your site/app can evolve as your business grows—adding new features, integrating third-party tools, or handling more users.",
      },
      {
        icon: <Wallet className="stroke-muted-foreground size-7" />,
        title: "Cost Efficiency in the Long Run",
        desc: "While there is an upfront investment, a well-built website or app reduces long-term costs by automating processes, minimizing errors, and increasing sales conversions.",
      },
    ],
  },
]
export const allPricingData = [
  {
    id: "Pricing", // unique key
    heading: "Estimated Pricing ",
    subheading: "Pricing for Website & Web App Development varies depending on project complexity, features, and timelines. At Hirebie, we offer transparent pricing tailored to your needs:",
    note: "These are starting estimates. The final cost depends on features (e.g., payment gateways, APIs, dashboards, multi-language support), integrations, and level of customization.",
    cards: [
      {
        icon: PenTool,
        title: "Basic Business Website",
        duration: "1-2 weeks",
        description: "A simple website for your business.",
        price: "$500 / Rs.40,000",
        ctaVariant: "outline"
      },
      {
        icon: Code,
        title: "E-Commerce Website",
        duration: "3-5 weeks",
        description: "A robust platform to sell products online.",
        price: "$1,000 / Rs.80,000",
      ctaVariant: "outline"
      },
      {
        icon: Bug,
        title: "Custom Web Application",
        duration: "4-8 weeks",
        description: "We ensure your app is free of bugs and glitches.",
        price: "$2,000 / Rs.1,60,000",
        ctaVariant: "outline"
        
      },
      {
        icon: Rocket,
        title: "Enterprise-Grade Web App",
        duration: "8+ weeks",
        description: "High-performance apps for large-scale businesses.",
        price: "$5,000+ / Rs.4,00,000+",
        ctaVariant: "outline"
      },
    ],
  },
]
export const contentData = [
    {
        id: "Content",
        sectionClassName: "dark:bg-black/20 py-20",
        bigCard: {
            badge: "Research",
            title: "What It Is",
            description: [
                "In today’s digital-first world, a business without a strong online presence is like a store without an entrance. Website & Web App Development Services refer to the complete process of designing, developing, and deploying websites and web-based applications that are tailored to meet the specific needs of businesses, organizations, and individuals.",
                "A website is often the first touchpoint for potential customers—it showcases your brand, products, and services. A web application, on the other hand, is an interactive platform built to perform specific functions, such as e-commerce portals, booking systems, dashboards, CRMs, or custom tools.",
                "At its core, web development involves multiple stages:",
            ],
        },
        cards: [
            {
                badge: "Strategy",
                title: "Planning & Strategy",
                desc: "Understanding your business objectives, target audience, and goals.",
            },
            {
                badge: "Design",
                title: "UI/UX Design",
                desc: "Creating an intuitive and visually appealing interface that engages users.",
            },
            {
                badge: "Frontend",
                title: "Frontend Development",
                desc: "Building the client-facing side using technologies like HTML, CSS, JavaScript, React, Vue, or Angular.",
            },
            {
                badge: "Backend",
                title: "Backend Development",
                desc: "Implementing server-side logic with languages such as Node.js, Python, PHP, or Java, and integrating databases like MySQL, MongoDB, or PostgreSQL.",
            },
            {
                badge: "Testing",
                title: "Testing & Optimization",
                desc: "Ensuring the website/app works seamlessly on all devices and browsers.",
            },
            {
                badge: "Deployment",
                title: "Deployment & Maintenance",
                desc: "Launching the project and keeping it up-to-date for security, performance, and scalability.",
            },
        ],
    },
]
export const FeaturesData = [
  { 
    id: "Features",
    heading: "How Hirebie Delivers IT",
    subheading: "At Hirebie, we take a strategy-first approach to web and web app development. Our process is transparent, collaborative, and results-driven. Here’s how we bring your ideas to life:",
    features: [
      {
        title: "Discovery & Consultation",
      description:
        "We start with in-depth discussions to understand your business model, target audience, and unique needs. This phase ensures the end product aligns perfectly with your goals.",
      icon: <Search className="size-4 md:size-6" />,
    },
    {
      title: "Tailored Design & Prototyping",
      description:
        "Our UI/UX designers craft layouts, color schemes, and interactive prototypes that ensure your platform is both visually appealing and user-friendly.",
      icon: <Palette className="size-4 md:size-6" />,
    },
    {
      title: "Technology Stack Selection",
      description:
        "Based on your requirements—speed, scalability, security—we choose the right tech stack (e.g., React + Node.js, Next.js, Django, Laravel) to power your solution.",
      icon: <Layers className="size-4 md:size-6" />,
    },
    {
      title: "Agile Development Process",
      description:
        "We follow agile methodologies, delivering features in small, testable increments. This allows for flexibility, faster delivery, and continuous improvement.",
      icon: <KanbanSquare className="size-4 md:size-6" />,
    },
    {
      title: "Quality Assurance & Testing",
      description:
        "Our QA experts conduct manual and automated testing to ensure everything works perfectly—across devices, browsers, and operating systems.",
      icon: <CheckCircle className="size-4 md:size-6" />,
    },
    {
      title: "Deployment & Launch",
      description:
        "We handle the technical setup, domain configuration, server deployment, and security hardening—ensuring a smooth, zero-downtime launch.",
      icon: <Rocket className="size-4 md:size-6" />,
    },
    {
      title: "Post-Launch Support & Maintenance",
      description:
        "Hirebie doesn’t just deliver and disappear. We provide ongoing monitoring, updates, performance optimization, and feature enhancements to keep your platform at peak performance.",
      icon: <LifeBuoy className="size-4 md:size-6" />,
    },
    {
      title: "SEO & Performance Optimization",
      description:
        "We ensure your site or app ranks well on search engines and loads lightning-fast, improving user experience and search visibility.",
      icon: <BarChart3 className="size-4 md:size-6" />,
    },
  ],
  },
];