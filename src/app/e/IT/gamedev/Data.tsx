import React from "react";
import {
    Gamepad2,
    Cpu,
    MonitorPlay,
    Users,
    Rocket,
    Trophy,
    PenTool,
    ShoppingBag,
    BarChart3,
    Zap,
    Layers,
    HeartHandshake,
    Code,
    Gamepad,
    Search,
    LifeBuoy,
    CheckCircle,
    KanbanSquare,
    Palette
} from "lucide-react";

export const Business = [
    {
        id: "BusinessBenefits",
        subheading:
            "Game development isn’t just entertainment—it’s an industry that combines creativity, technology, and user engagement. Here’s why businesses and creators invest in professional game development:",
        features: [
            {
                icon: <Gamepad2 className="stroke-muted-foreground size-7" />,
                title: "Immersive User Experience",
                desc: "Games captivate users with interactive storytelling, visuals, and mechanics that create lasting engagement.",
            },
            {
                icon: <MonitorPlay className="stroke-muted-foreground size-7" />,
                title: "Cross-Platform Reach",
                desc: "Develop games for PC, mobile, and consoles—ensuring maximum audience reach across multiple devices.",
            },
            {
                icon: <HeartHandshake className="stroke-muted-foreground size-7" />,
                title: "Community Building",
                desc: "Multiplayer features, leaderboards, and guilds foster a strong gaming community and loyalty.",
            },
            {
                icon: <Trophy className="stroke-muted-foreground size-7" />,
                title: "Brand Recognition",
                desc: "Well-designed games increase brand visibility and can even be used for marketing through gamification.",
            },
            {
                icon: <Zap className="stroke-muted-foreground size-7" />,
                title: "Revenue Generation",
                desc: "Monetization options include ads, in-app purchases, premium models, and NFT/game asset sales.",
            },
            {
                icon: <BarChart3 className="stroke-muted-foreground size-7" />,
                title: "Data-Driven Insights",
                desc: "Track user behavior and engagement metrics to improve gameplay and retention strategies.",
            },
            {
                icon: <Cpu className="stroke-muted-foreground size-7" />,
                title: "Integration with Latest Tech",
                desc: "Leverage AI, AR/VR, blockchain, and advanced graphics engines to create next-gen gaming experiences.",
            },
            {
                icon: <Layers className="stroke-muted-foreground size-7" />,
                title: "Scalable Architecture",
                desc: "Games are built to handle millions of users with scalable servers, cloud gaming, and secure backends.",
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
                "Game Development Services involve the design, development, and deployment of video games across platforms like PC, consoles, mobile, and the web. It combines creativity, storytelling, and cutting-edge technology to deliver interactive entertainment experiences.",
                "The process includes everything from conceptualization and storyboarding to coding, testing, and deployment.",
                "Game development is carried out in different stages:",
            ],
        },
        cards: [
            {
                badge: "Concept",
                title: "Ideation & Storyboarding",
                desc: "Defining game mechanics, narratives, and user engagement goals.",
            },
            {
                badge: "Design",
                title: "Game Art & UI/UX",
                desc: "Creating characters, environments, and interfaces that enhance immersion.",
            },
            {
                badge: "Development",
                title: "Coding & Game Engine Integration",
                desc: "Building games using engines like Unity, Unreal, or custom frameworks.",
            },
            {
                badge: "Testing",
                title: "Quality Assurance",
                desc: "Ensuring smooth gameplay, eliminating bugs, and optimizing performance.",
            },
            {
                badge: "Launch",
                title: "Publishing & Deployment",
                desc: "Releasing games on Steam, PlayStation, Xbox, App Stores, or custom platforms.",
            },
            {
                badge: "Support",
                title: "Post-Launch Updates",
                desc: "Adding new features, balancing gameplay, and providing long-term support.",
            },
        ],
    },
];

export const allPricingData = [
    {
        id: "Pricing",
        heading: "Estimated Pricing",
        subheading:
            "The cost of game development depends on complexity, platform, graphics, multiplayer support, and monetization features. At Hirebie, we provide scalable and transparent pricing:",
        note: "Final pricing depends on additional features like AR/VR, NFTs, blockchain integration, advanced multiplayer, or high-end graphics optimization.",
        cards: [
            {
                icon: PenTool,
                title: "Casual 2D Game",
                duration: "3-5 weeks",
                description: "Simple 2D mobile/web games with core mechanics.",
                price: "$3,000 / Rs.2,40,000",
                ctaVariant: "outline",
            },
            {
                icon: ShoppingBag,
                title: "Mobile 3D Game",
                duration: "6-8 weeks",
                description: "Engaging 3D mobile games with multiplayer support.",
                price: "$6,000 / Rs.4,80,000",
                ctaVariant: "outline",
            },
            {
                icon: Users,
                title: "Multiplayer Online Game",
                duration: "8-12 weeks",
                description: "Real-time multiplayer with community features.",
                price: "$10,000 / Rs.8,00,000",
                ctaVariant: "outline",
            },
            {
                icon: Rocket,
                title: "AAA-Style Game",
                duration: "12+ Weeks",
                description: "High-end graphics, AR/VR, cross-platform scalability.",
                price: "$20,000+ / Rs.16,00,000+",
                ctaVariant: "outline",
            },
        ],
    },
];
export const WhyChooseHirebie = [
    {
        id: "WhyChooseHirebie",
        heading: "for Game Development?",
        points: [
            {
                icon: <Gamepad className="w-6 h-6" />,
                title: "Immersive Gameplay",
                desc: "We design engaging and interactive experiences that keep players hooked.",
            },
            {
                icon: <Rocket className="w-6 h-6" />,
                title: "Cutting-Edge Technology",
                desc: "From Unity to Unreal Engine, we use the best tools for smooth and stunning games.",
            },
            {
                icon: <Code className="w-6 h-6" />,
                title: "Custom Game Mechanics",
                desc: "Every game has unique mechanics tailored to your target audience and vision.",
            },
            {
                icon: <Layers className="w-6 h-6" />,
                title: "Full Lifecycle Support",
                desc: "We handle everything from concept, design, development, to post-launch support.",
            },
            {
                icon: <Users className="w-6 h-6" />,
                title: "Community & Multiplayer Focus",
                desc: "We create games with social, multiplayer, or community-driven features for higher engagement.",
            },
        ],
    },
];
export const FeaturesData = [
  {
    id: "Features",
    heading: "How We Deliver IT",
    subheading:
      "Our game development process is designed to turn your vision into immersive and engaging experiences. Here's how we bring your game ideas to life:",
    features: [
      {
        title: "Concept & Discovery",
        description:
          "We start by understanding your game idea, target audience, and platform. This ensures the concept aligns with player expectations and business goals.",
        icon: <Search className="size-4 md:size-6" />,
      },
      {
        title: "Game Design & Prototyping",
        description:
          "Our designers create gameplay mechanics, storyboards, and prototypes to test fun, engagement, and flow before full-scale development.",
        icon: <Palette className="size-4 md:size-6" />,
      },
      {
        title: "Technology & Engine Selection",
        description:
          "Based on your game type and platform, we select the right engine and tech stack (e.g., Unity, Unreal Engine, Godot) for optimal performance and scalability.",
        icon: <Layers className="size-4 md:size-6" />,
      },
      {
        title: "Agile Game Development",
        description:
          "We follow an agile process to iteratively develop features, refine gameplay, and respond to feedback—ensuring a polished final product.",
        icon: <KanbanSquare className="size-4 md:size-6" />,
      },
      {
        title: "Quality Assurance & Testing",
        description:
          "Our QA team tests gameplay, performance, and cross-platform compatibility to guarantee a bug-free and enjoyable player experience.",
        icon: <CheckCircle className="size-4 md:size-6" />,
      },
      {
        title: "Deployment & Launch",
        description:
          "We handle publishing, server setup for multiplayer games, and platform submission processes for a smooth launch across stores or platforms.",
        icon: <Rocket className="size-4 md:size-6" />,
      },
      {
        title: "Post-Launch Support & Updates",
        description:
          "We provide ongoing updates, patches, and live operations support to keep players engaged and maintain long-term success.",
        icon: <LifeBuoy className="size-4 md:size-6" />,
      },
      {
        title: "Performance & Analytics Optimization",
        description:
          "We optimize game performance, monitor player data, and implement analytics to improve gameplay, retention, and monetization.",
        icon: <BarChart3 className="size-4 md:size-6" />,
      },
    ],
  },
];
