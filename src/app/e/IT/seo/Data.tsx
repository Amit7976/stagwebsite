import React from "react";
import { BarChart3, Rocket, Search, CheckCircle, Zap, Layers, Users, LifeBuoy } from "lucide-react";

export const Business = [
  {
    id: "BusinessBenefits",
    subheading: "SEO & Performance Optimization ensures your website or app ranks well, loads fast, and provides an excellent user experience. Here’s why it’s crucial:",
    features: [
      {
        icon: <Search className="stroke-muted-foreground size-7" />,
        title: "Improved Search Engine Ranking",
        desc: "Optimize your website content, structure, and keywords to rank higher in search results and attract organic traffic.",
      },
      {
        icon: <BarChart3 className="stroke-muted-foreground size-7" />,
        title: "Data-Driven Insights",
        desc: "Track user behavior, traffic patterns, and engagement metrics to make informed optimization decisions.",
      },
      {
        icon: <Zap className="stroke-muted-foreground size-7" />,
        title: "Faster Load Times",
        desc: "Optimize images, scripts, and server performance to reduce page load times and enhance user experience.",
      },
      {
        icon: <Rocket className="stroke-muted-foreground size-7" />,
        title: "Enhanced Conversion Rates",
        desc: "Improve website usability and performance to increase leads, sales, and customer satisfaction.",
      },
      {
        icon: <Layers className="stroke-muted-foreground size-7" />,
        title: "Technical SEO Optimization",
        desc: "Ensure proper indexing, crawlability, mobile optimization, and structured data for better search engine performance.",
      },
      {
        icon: <CheckCircle className="stroke-muted-foreground size-7" />,
        title: "Continuous Monitoring & Updates",
        desc: "Regularly monitor performance and implement updates to maintain high SEO and site speed standards.",
      },
      {
        icon: <LifeBuoy className="stroke-muted-foreground size-7" />,
        title: "Ongoing Support",
        desc: "Provide ongoing assistance for SEO strategy, analytics tracking, and performance improvements.",
      },
    ],
  },
];

export const allPricingData = [
  {
    id: "Pricing",
    heading: "Estimated Pricing",
    subheading: "SEO & Performance Optimization pricing depends on website size, complexity, and required optimization:",
    note: "These are starting estimates; final pricing depends on the depth of SEO work, content optimization, and performance enhancements.",
    cards: [
      {
        icon: Search,
        title: "Basic SEO & Optimization",
        duration: "2 weeks",
        description: "Keyword optimization, meta tags, basic performance tweaks.",
        price: "$300 / Rs.24,000",
        ctaVariant: "outline",
      },
      {
        icon: BarChart3,
        title: "Standard SEO Package",
        duration: "4 weeks",
        description: "Content optimization, performance tuning, and analytics setup.",
        price: "$700 / Rs.56,000",
        ctaVariant: "outline",
      },
      {
        icon: Rocket,
        title: "Advanced SEO & Performance",
        duration: "6-8 weeks",
        description: "Technical SEO, backlink strategy, advanced performance enhancements.",
        price: "$1,500 / Rs.1,20,000",
        ctaVariant: "outline",
      },
      {
        icon: Layers,
        title: "Enterprise SEO & Optimization",
        duration: "8+ weeks",
        description: "Comprehensive strategy, custom analytics, ongoing monitoring, and performance audits.",
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
        "SEO & Performance Optimization ensures your website or app ranks higher in search engines and provides fast, smooth user experiences.",
        "It includes keyword research, on-page and technical SEO, link building, site speed optimization, and analytics tracking.",
        "Optimized performance and search visibility increase traffic, engagement, and conversions, while reducing bounce rates.",
      ],
    },
    cards: [
      {
        badge: "SEO",
        title: "Keyword & Content Optimization",
        desc: "Optimize website content and metadata to improve search engine rankings and attract relevant traffic.",
      },
      {
        badge: "Technical",
        title: "Technical SEO & Site Structure",
        desc: "Ensure proper indexing, crawlability, mobile responsiveness, and structured data implementation.",
      },
      {
        badge: "Performance",
        title: "Website Performance & Speed",
        desc: "Optimize images, scripts, caching, and server performance to reduce load times and improve UX.",
      },
      {
        badge: "Analytics",
        title: "Monitoring & Reporting",
        desc: "Track traffic, engagement, and conversions using analytics tools to guide improvements.",
      },
      {
        badge: "Support",
        title: "Ongoing SEO Support",
        desc: "Continuously implement SEO updates and performance improvements for sustainable growth.",
      },
      {
        badge: "Training",
        title: "User Training & Documentation",
        desc: "Offer training sessions and documentation for easy content management.",
      },
    ],
  },
];

export const FeaturesData = [
  {
    id: "Features",
    heading: "How Hirebie Delivers IT",
    subheading: "We improve search visibility and website performance to maximize user engagement and conversions:",
    features: [
      {
        title: "Keyword Research & Analysis",
        description: "Identify relevant keywords and optimize content strategy for search visibility.",
        icon: <Search className="size-4 md:size-6" />,
      },
      {
        title: "Technical SEO",
        description: "Ensure proper indexing, structured data, mobile responsiveness, and site hierarchy.",
        icon: <Layers className="size-4 md:size-6" />,
      },
      {
        title: "Performance Optimization",
        description: "Optimize page speed, scripts, and server performance for better UX and SEO ranking.",
        icon: <Zap className="size-4 md:size-6" />,
      },
      {
        title: "Analytics & Reporting",
        description: "Track user behavior, traffic, and performance to guide SEO strategy.",
        icon: <BarChart3 className="size-4 md:size-6" />,
      },
      {
        title: "Conversion & UX Improvements",
        description: "Enhance website usability, reduce bounce rates, and improve conversion rates.",
        icon: <Rocket className="size-4 md:size-6" />,
      },
      {
        title: "Continuous Monitoring",
        description: "Ongoing audits, updates, and performance checks to maintain high SEO standards.",
        icon: <CheckCircle className="size-4 md:size-6" />,
      },
      {
        title: "Support & Guidance",
        description: "Provide advice and technical support for SEO strategy and performance improvements.",
        icon: <LifeBuoy className="size-4 md:size-6" />,
      },
    ],
  },
];
