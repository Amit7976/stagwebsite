import React from "react";
import {
    Eye,Smartphone,WifiOff,Bell,HeartHandshake,Trophy,ShoppingCart,BarChart3,PenTool,Rocket,Users,ShoppingBag,Wrench,Layers,Cpu,Briefcase,MessageSquare,
    Search,
    Palette,
    Settings,
    Code,
    TestTube,
    TrendingUp,
    Headphones
} from "lucide-react";
export const Business = [
    {
        id: "Businessbenefits",
        subheading: "A well-developed mobile app isn’t just a tool—it’s a business asset that can transform the way you connect with your customers. Here’s why businesses invest heavily in mobile app development:",
        features: [
            {
                icon: <Bell className="stroke-muted-foreground size-7" />,
                title: "Direct Customer Engagement",
                desc: "Mobile apps allow businesses to communicate directly with users via push notifications, in-app messages, and personalized content, creating a stronger connection.",
            },
            {
                icon: <Eye className="stroke-muted-foreground size-7" />,
                title: "Improved Brand Visibility",
                desc: "Every time users scroll through their phone, your app’s icon serves as a reminder of your brand—keeping you at the top of their minds.",
            },
            {
                icon: <HeartHandshake className="stroke-muted-foreground size-7" />,
                title: "Enhanced Customer Loyalty",
                desc: "With features like rewards programs, loyalty points, and personalized offers, mobile apps help keep customers coming back.",
            },
            {
                icon: <Trophy className="stroke-muted-foreground size-7" />,
                title: "Competitive Advantage",
                desc: "In industries where competition is fierce, having a mobile app can set you apart and attract tech-savvy customers who value convenience.",
            },
            {
                icon: <ShoppingCart className="stroke-muted-foreground size-7" />,
                title: "Increased Sales & Revenue",
                desc: "Mobile commerce is booming. Apps offer faster checkouts, one-click payments, and personalized recommendations—driving higher conversions.",
            },
            {
                icon: <BarChart3 className="stroke-muted-foreground size-7" />,
                title: "Better Customer Insights",
                desc: "Apps can track user behavior, preferences, and patterns, allowing businesses to make data-driven decisions for product and service improvements.",
            },
            {
                icon: <WifiOff className="stroke-muted-foreground size-7" />,
                title: "Offline Accessibility",
                desc: "Unlike websites, mobile apps can offer certain functionalities without an internet connection, increasing usability in all conditions.",
            },
            {
                icon: <Smartphone className="stroke-muted-foreground size-7" />,
                title: "Integration with Device Features",
                desc: "Apps can use device features like GPS, camera, biometrics, and sensors to provide advanced services (e.g., location-based offers, AR features).",
            },
        ],
    }
];
export const contentData = [

    {
        id: "Content",
        sectionClassName: "dark:bg-black/20 py-20",
        bigCard: {
            badge: "Research",
            title: "What It Is",
            description: [
                "In the age of smartphones, mobile applications have become the heartbeat of modern business strategies. Mobile App Development Services involve the process of creating software applications specifically designed to run on mobile devices such as smartphones and tablets. These applications are optimized for performance, usability, and functionality on platforms like iOS, Android, and sometimes cross-platform frameworks that work on both.",
                "The process goes far beyond simply writing code. It starts with a deep understanding of the client’s goals, target audience, and the problems the app is meant to solve.",
                "From there, it moves through various stages:",
            ],
        },
        cards: [
            {
                badge: "Strategy",
                title: "Requirement Analysis & Strategy",
                desc: "Understanding business objectives, audience behavior, and competition to shape the app's vision.",
            },
            {
                badge: "Design",
                title: "UI/UX Design",
                desc: "Crafting interfaces that are visually appealing, intuitive, and engaging.",
            },
            {
                badge: "Frontend",
                title: "App Development",
                desc: "Writing clean, efficient, and scalable code to build the app's features and functionality.",
            },
            {
                badge: "Testing",
                title: "Testing & Quality Assurance",
                desc: "Eliminating bugs, improving speed, and ensuring the app performs seamlessly.",
            },
            {
                badge: "Deployment",
                title: "Deployment & Maintenance",
                desc: "Publishing the app on platforms like the Google Play Store and Apple App Store.",
            },
            {
                badge: "Backend",
                title: "Post-Launch Maintenance",
                desc: "Updating features, fixing issues, and ensuring security.",
            },
        ],
    },
];

export const allPricingData = [

    {
        id: "Pricing", // unique key
        heading: "Estimated Pricing ",
        subheading: "The cost of developing a mobile app depends on multiple factors—platform choice, complexity, design requirements, integrations, and more. At Hirebie, we provide clear and flexible pricing:",
        note: "Final pricing depends on additional features like payment gateways, real-time chat, third-party integrations, AR/VR capabilities, or advanced analytics.",
        cards: [
            {
                icon: PenTool,
                title: "Basic Utility App",
                duration: "3-4 weeks",
                description: "Simple apps with core features for daily use.",
                price: "$2,000 / Rs.1,60,000",
                ctaVariant: "outline"
            },


            {
                icon: ShoppingBag,
                title: "E-Commerce App",
                duration: "5-7 weeks",
                description: "Sell products online with secure payments.",
                price: "$4,000 / Rs.3,20,000",
                ctaVariant: "outline"
            },

            {
                icon: Users,
                title: "Social Networking App",
                duration: "6-10 weeks",
                description: "Profiles, messaging, and community features.",
                price: "$6,000 / Rs.4,80,000",
                ctaVariant: "outline"
            },

            {
                icon: Rocket,
                title: "Enterprise-Level App",
                duration: "10+ Weeks",
                description: "Scalable, secure apps for large organizations.",
                price: "$10,000+ / Rs.8,00,000+",
                ctaVariant: "outline"
            },
        ],
    },
];
export const WhyChooseHirebie = [
    {
        id: "WhyChooseHirebie",
        heading: "for Mobile App Development?",
        points: [
            {
                icon: <Wrench className="w-6 h-6" />,
                title: "Custom Solutions",
                desc: "We don’t believe in one-size-fits-all. Every app is tailored to your unique needs.",
            },
            {
                icon: <Layers className="w-6 h-6 " />,
                title: "End-to-End Service",
                desc: "From concept to launch and beyond, we handle it all.",
            },
            {
                icon: <Cpu className="w-6 h-6" />,
                title: "Cutting-Edge Technologies",
                desc: "We work with the latest tools and frameworks like Flutter, React Native, Swift, Kotlin, and more.",
            },
            {
                icon: <Briefcase className="w-6 h-6 " />,
                title: "Proven Expertise",
                desc: "Our portfolio spans industries like e-commerce, healthcare, education, and logistics.",
            },
            {
                icon: <MessageSquare className="w-6 h-6" />,
                title: "Transparent Communication",
                desc: "You’ll always be in the loop with regular updates and progress reports.",
            },
        ],
    },
];
export const FeaturesData = [
  {
    id: "Features",
    heading: "How Hirebie Delivers IT",
    subheading: "At Hirebie, mobile app development isn’t just about writing code—it’s about building digital products that solve problems, delight users, and drive business growth. Here’s how we bring your ideas to life:",
    steps: [
      {
        icon: <Search className="w-6 h-6" />,
        title: "Discovery & Planning",
        description:
          "We start by identifying your vision, business goals, and target audience. Our strategy team then creates a roadmap outlining timelines, resources, and technology stacks.",
      },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description:
        "Our design experts focus on user-centered design principles, ensuring your app is not only beautiful but also easy to navigate. We create interactive prototypes before development starts so you can visualize your app early in the process.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Technology Selection",
      description:
        "We choose the right development approach—Native, Cross-Platform, or Hybrid—based on your performance requirements, budget, and audience.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Agile Development",
      description:
        "We follow agile methodologies, dividing the project into short sprints. This allows for flexibility, early feedback, and faster delivery.",
    },
    {
      icon: <TestTube className="w-6 h-6" />,
      title: "Rigorous Testing",
      description:
        "We conduct functional testing, UI/UX testing, performance optimization, and security testing to ensure your app is flawless.",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Deployment",
      description:
        "We handle the entire publishing process, ensuring your app meets App Store and Play Store guidelines for smooth approval.",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Post-Launch Support",
      description:
        "Once your app is live, we provide maintenance, updates, and new feature integrations to keep it relevant and competitive.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Marketing Assistance",
      description:
        "Beyond development, we also assist with app store optimization (ASO), so your app reaches the right audience quickly.",
    },
  ],
  },
]