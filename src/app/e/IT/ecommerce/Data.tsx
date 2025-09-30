import React from "react";
import { ShoppingCart, CreditCard, Package, Users, Zap, ShieldCheck, Rocket, LifeBuoy, BarChart3, CheckCircle, Search, Layers, PenTool } from "lucide-react";

export const Business = [
  {
    id: "BusinessBenefits",
    subheading: "A well-built e-commerce platform can drive sales, improve customer experience, and expand your business globally. Here’s why:",
    features: [
      {
        icon: <ShoppingCart className="stroke-muted-foreground size-7" />,
        title: "24/7 Online Store",
        desc: "Your customers can browse, shop, and pay anytime, anywhere, increasing sales opportunities around the clock.",
      },
      {
        icon: <CreditCard className="stroke-muted-foreground size-7" />,
        title: "Secure Payments",
        desc: "Integrate multiple payment gateways securely, building trust and convenience for your customers.",
      },
      {
        icon: <Users className="stroke-muted-foreground size-7" />,
        title: "Personalized Shopping Experience",
        desc: "Offer recommendations, loyalty programs, and targeted promotions based on user behavior and preferences.",
      },
      {
        icon: <Zap className="stroke-muted-foreground size-7" />,
        title: "Fast & Optimized Performance",
        desc: "Ensure smooth browsing, quick load times, and responsive design across all devices.",
      },
      {
        icon: <ShieldCheck className="stroke-muted-foreground size-7" />,
        title: "Reliable Security & Compliance",
        desc: "Protect customer data, comply with standards like PCI DSS, and prevent fraud or breaches.",
      },
      {
        icon: <Rocket className="stroke-muted-foreground size-7" />,
        title: "Scalability & Growth",
        desc: "Handle high traffic volumes, product expansion, and internationalization without compromising performance.",
      },
      {
        icon: <BarChart3 className="stroke-muted-foreground size-7" />,
        title: "Analytics & Insights",
        desc: "Track sales, customer behavior, and marketing performance for data-driven business decisions.",
      },
    ],
  },
];

export const allPricingData = [
  {
    id: "Pricing",
    heading: "Estimated Pricing",
    subheading: "E-commerce website pricing depends on platform complexity, features, integrations, and customization levels:",
    note: "Final costs may vary depending on payment gateway integration, multi-language support, custom modules, and analytics setup.",
    cards: [
      {
        icon: PenTool,
        title: "Basic E-commerce Store",
        duration: "2-3 weeks",
        description: "Simple online store with essential product pages and checkout.",
        price: "$800 / Rs.64,000",
        ctaVariant: "outline",
      },
      {
        icon: Package,
        title: "Standard E-commerce Website",
        duration: "4-6 weeks",
        description: "Includes product categories, payment gateways, and customer accounts.",
        price: "$1,500 / Rs.1,20,000",
        ctaVariant: "outline",
      },
      {
        icon: Layers,
        title: "Advanced E-commerce Platform",
        duration: "6-10 weeks",
        description: "Multi-vendor support, advanced analytics, automation, and marketing tools.",
        price: "$3,000 / Rs.2,40,000",
        ctaVariant: "outline",
      },
      {
        icon: Rocket,
        title: "Enterprise E-commerce Solution",
        duration: "10+ weeks",
        description: "Custom modules, internationalization, integration with ERP/CRM, and high scalability.",
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
        "E-commerce development refers to building online platforms for buying and selling products or services.",
        "It involves creating a user-friendly interface, secure payment processing, inventory management, order tracking, and analytics.",
        "A well-designed e-commerce site improves conversions, enhances user experience, and supports business growth globally.",
      ],
    },
    cards: [
      {
        badge: "Planning",
        title: "Requirement Analysis",
        desc: "Identify target audience, product range, features, and business goals.",
      },
      {
        badge: "Design",
        title: "UI/UX Design",
        desc: "Create a visually appealing, responsive, and intuitive user interface for seamless shopping.",
      },
      {
        badge: "Development",
        title: "Frontend & Backend Development",
        desc: "Build product pages, shopping cart, payment gateways, and admin dashboards.",
      },
      {
        badge: "Testing",
        title: "QA & Optimization",
        desc: "Ensure cross-browser compatibility, fast load times, and secure transactions.",
      },
      {
        badge: "Deployment",
        title: "Launch & Maintenance",
        desc: "Deploy the site, monitor performance, and provide regular updates and support.",
      },
      {
        badge: "Marketing",
        title: "SEO & Analytics Integration",
        desc: "Optimize the site for search engines and integrate analytics for actionable insights.",
      },
    ],
  },
];

export const FeaturesData = [
  {
    id: "Features",
    heading: "How Hirebie Delivers IT",
    subheading: "Our approach ensures seamless, secure, and scalable online stores:",
    features: [
      {
        title: "Consultation & Planning",
        description: "We analyze your business goals and define the optimal e-commerce strategy.",
        icon: <Search className="size-4 md:size-6" />,
      },
      {
        title: "Custom Design & Prototyping",
        description: "Craft responsive, user-friendly interfaces with mockups and prototypes.",
        icon: <Layers className="size-4 md:size-6" />,
      },
      {
        title: "Payment & Checkout Integration",
        description: "Integrate multiple secure payment gateways and streamline the checkout process.",
        icon: <CreditCard className="size-4 md:size-6" />,
      },
      {
        title: "Inventory & Order Management",
        description: "Build tools for managing products, orders, stock, and shipping efficiently.",
        icon: <Package className="size-4 md:size-6" />,
      },
      {
        title: "Performance Optimization",
        description: "Ensure fast loading, responsive design, and scalability for high traffic.",
        icon: <Zap className="size-4 md:size-6" />,
      },
      {
        title: "Security & Compliance",
        description: "Protect user data and comply with PCI DSS and other standards.",
        icon: <ShieldCheck className="size-4 md:size-6" />,
      },
      {
        title: "Analytics & Insights",
        description: "Integrate dashboards and analytics tools for actionable business insights.",
        icon: <BarChart3 className="size-4 md:size-6" />,
      },
      {
        title: "Post-Launch Support",
        description: "Ongoing updates, performance monitoring, and feature enhancements.",
        icon: <LifeBuoy className="size-4 md:size-6" />,
      },
    ],
  },
];
