import React from "react";
import {
    PenTool,
    Monitor,
    Smartphone,
    Eye,
    Palette,
    Users,
    Sparkles,
    BarChart3,
    Layers,
    HeartHandshake,
    Rocket,
    Layout,
    Search,
    KanbanSquare,
    CheckCircle,
    LifeBuoy,
} from "lucide-react";

export const Business = [
    {
        id: "Benefits",
        subheading:
            "A well-crafted UI/UX design is more than just aesthetics—it’s about creating intuitive, engaging, and user-friendly experiences that keep people coming back. Here’s why businesses invest in professional UI/UX design:",
        features: [
            {
                icon: <Eye className="stroke-muted-foreground size-7" />,
                title: "Improved Usability",
                desc: "Good UI/UX ensures smooth navigation, easy interaction, and reduces user frustration.",
            },
            {
                icon: <Palette className="stroke-muted-foreground size-7" />,
                title: "Stronger Brand Identity",
                desc: "Design consistency builds trust and reinforces your brand’s personality across platforms.",
            },
            {
                icon: <Users className="stroke-muted-foreground size-7" />,
                title: "Higher User Engagement",
                desc: "Visually appealing and intuitive designs increase time spent on the app or website.",
            },
            {
                icon: <HeartHandshake className="stroke-muted-foreground size-7" />,
                title: "Enhanced Customer Loyalty",
                desc: "A delightful user experience encourages repeat visits and long-term retention.",
            },
            {
                icon: <BarChart3 className="stroke-muted-foreground size-7" />,
                title: "Boosted Conversions",
                desc: "Seamless design directly impacts sales, sign-ups, and other key business goals.",
            },
            {
                icon: <Sparkles className="stroke-muted-foreground size-7" />,
                title: "Competitive Advantage",
                desc: "Great design sets you apart, making your digital product memorable in a crowded market.",
            },
            {
                icon: <Layers className="stroke-muted-foreground size-7" />,
                title: "Cross-Platform Consistency",
                desc: "Ensures the same polished experience across mobile, web, and desktop platforms.",
            },
            {
                icon: <Rocket className="stroke-muted-foreground size-7" />,
                title: "Future-Ready Experiences",
                desc: "Designs optimized for accessibility, responsiveness, and evolving tech standards.",
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
                "UI (User Interface) and UX (User Experience) Design Services focus on creating digital experiences that are functional, aesthetically pleasing, and user-centered. UI/UX design ensures that products are not only visually appealing but also intuitive and easy to use.",
                "The process goes beyond visuals—it’s about understanding user psychology, business goals, and industry trends.",
                "Here are the key stages of professional UI/UX design:",
            ],
        },
        cards: [
            {
                badge: "Research",
                title: "User Research & Analysis",
                desc: "Understanding user needs, pain points, and behaviors through surveys, personas, and analytics.",
            },
            {
                badge: "Structure",
                title: "Information Architecture & Wireframing",
                desc: "Organizing content and creating wireframes for seamless navigation flow.",
            },
            {
                badge: "Design",
                title: "Visual Design & Prototyping",
                desc: "Crafting pixel-perfect UI with interactive prototypes to validate user journeys.",
            },
            {
                badge: "Testing",
                title: "Usability Testing",
                desc: "Testing designs with real users to identify improvements and ensure accessibility.",
            },
            {
                badge: "Handoff",
                title: "Design to Development Handoff",
                desc: "Delivering developer-friendly design systems with tools like Figma, Adobe XD, or Sketch.",
            },
            {
                badge: "Support",
                title: "Post-Launch Iteration",
                desc: "Refining design based on user feedback and performance metrics.",
            },
        ],
    },
];

export const allPricingData = [
    {
        id: "Pricing",
        heading: "Estimated Pricing",
        subheading:
            "The cost of UI/UX design depends on project complexity, number of screens, platform requirements, and level of customization. At Hirebie, we provide transparent and flexible pricing:",
        note: "Final pricing depends on factors like advanced animations, accessibility compliance, multi-platform design systems, and ongoing support.",
        cards: [
            {
                icon: PenTool,
                title: "Landing Page Design",
                duration: "1-2 weeks",
                description: "Clean, conversion-focused landing page design.",
                price: "$800 / Rs.65,000",
                ctaVariant: "outline",
            },
            {
                icon: Smartphone,
                title: "Mobile App UI/UX",
                duration: "3-5 weeks",
                description: "End-to-end design for iOS/Android apps with intuitive flows.",
                price: "$2,500 / Rs.2,00,000",
                ctaVariant: "outline",
            },
            {
                icon: Monitor,
                title: "Web Application UI/UX",
                duration: "4-6 weeks",
                description: "Scalable UI/UX for SaaS platforms or enterprise apps.",
                price: "$4,000 / Rs.3,20,000",
                ctaVariant: "outline",
            },
            {
                icon: Rocket,
                title: "Full Product Design",
                duration: "6-10 weeks",
                description: "Comprehensive design including branding, style guides, and multi-platform systems.",
                price: "$6,000+ / Rs.4,80,000+",
                ctaVariant: "outline",
            },
        ],
    },
]
export const WhyChooseHirebie = [
    {
        id: "WhyChooseHirebie",
        heading: "for UI/UX Design & Prototyping?",
        points: [
            {
                icon: <PenTool className="w-6 h-6" />,
                title: "User-Centered Design",
                desc: "We focus on creating interfaces that are intuitive, engaging, and easy to navigate.",
            },
            {
                icon: <Layout  className="w-6 h-6" />,
                title: "Prototyping & Testing",
                desc: "Interactive prototypes allow for early feedback and refinement before development begins.",
            },
            {
                icon: <Users className="w-6 h-6" />,
                title: "Collaborative Approach",
                desc: "We work closely with stakeholders to ensure design aligns with business goals.",
            },
            {
                icon: <Eye className="w-6 h-6" />,
                title: "Visual Excellence",
                desc: "Attention to detail ensures every visual element enhances the user experience.",
            },
            {
                icon: <Layers className="w-6 h-6" />,
                title: "Scalable Designs",
                desc: "Our designs are built to adapt and grow with your product over time.",
            },
        ],
    },
];
export const FeaturesData = [
  {
    id: "Features",
    heading: "How Hirebie Delivers IT",
    subheading: "At Hirebie, we craft user experiences that are intuitive, engaging, and visually stunning. Here’s how we turn ideas into interactive prototypes:",
    steps: [
      {
        icon: <Search className="w-6 h-6" />,
        title: "User Research & Analysis",
        description:
          "We begin by understanding your users through interviews, surveys, and analytics. This research informs design decisions that meet real user needs.",
      },
      {
        icon: <Palette className="w-6 h-6" />,
        title: "Wireframing & Layout Design",
        description:
          "Our designers create wireframes that outline the structure and layout of your app or website, ensuring a logical flow and seamless navigation.",
      },
      {
        icon: <Layers className="w-6 h-6" />,
        title: "Interactive Prototyping",
        description:
          "We build interactive prototypes to visualize user journeys, test functionality, and gather early feedback before development begins.",
      },
      {
        icon: <KanbanSquare  className="w-6 h-6" />,
        title: "Visual Design & Branding",
        description:
          "Our team crafts a visually appealing interface, choosing colors, typography, and imagery that align with your brand and resonate with users.",
      },
      {
        icon: <CheckCircle className="w-6 h-6" />,
        title: "Usability Testing",
        description:
          "We test prototypes with real users to identify pain points and refine interactions, ensuring a smooth, intuitive experience.",
      },
      {
        icon: <Rocket className="w-6 h-6" />,
        title: "Design Handoff & Documentation",
        description:
          "We provide developers with detailed design specifications, assets, and guidelines for seamless implementation.",
      },
      {
        icon: <LifeBuoy className="w-6 h-6" />,
        title: "Post-Design Support",
        description:
          "Even after the design phase, we offer support to update UI elements, refine interactions, and maintain design consistency as your product evolves.",
      },
      {
        icon: <BarChart3 className="w-6 h-6" />,
        title: "Performance & Accessibility Optimization",
        description:
          "We ensure your design is accessible, responsive, and optimized for performance across all devices and screen sizes.",
      },
    ],
  },
];

