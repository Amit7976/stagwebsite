"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

type Service = {
    title: string;
    image: string;
    features: string[];
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const services: Service[] = [
    {
        title: "Develop and Manage Projects",
        image: "/images/Services/DevelopAndManageProjects.jpg",
        features: [
            "Custom Web & Mobile App Development",
            "Backend & API Development",
            "Full-stack Development Support",
            "Scalable Cloud Infrastructure Setup",
            "Database Design & Management",
            "Project Planning & Agile Management",
            "Quality Assurance & Testing",
            "Continuous Deployment & Monitoring",
            "Technical Support & Maintenance",
        ],
    },
    {
        title: "Build & Promote Your Brand",
        image: "/images/Services/BuildAndPromoteYourBran.png",
        features: [
            "Logo & Visual Identity Design",
            "Brand Guidelines Creation",
            "Custom Business Cards & Stationery",
            "Branded Marketing Materials",
            "Social Media Branding Assets",
            "Animated Logos & Intro Videos",
            "Product Packaging Design",
            "Promotional Merchandise Design",
            "Ongoing Brand Evolution Support",
        ],
    },
    {
        title: "Marketing & Digital Growth",
        image: "/images/Services/internet-business-seo-strategy.png",
        features: [
            "SEO Optimization for Websites",
            "Social Media Management",
            "Content Creation & Copywriting",
            "Email Marketing Campaigns",
            "Online Ad Campaign Setup (Google/Facebook)",
            "Performance Analytics & Reporting",
            "Influencer & Partnership Marketing",
            "PR & Media Outreach Support",
            "Reputation Management Services",
        ],
    },
    {
        title: "Design & User Experience",
        image: "/images/Services/DesignAndUserExperience.jpg",
        features: [
            "UI/UX Design for Websites & Apps",
            "Interactive Prototypes & Wireframes",
            "Responsive Design for All Devices",
            "A/B Testing & User Feedback Loops",
            "Custom Illustrations & Icons",
            "Micro-interactions & Animations",
            "Accessibility & Inclusive Design",
            "Design System Development",
            "Ongoing UI/UX Improvements",
        ],
    },
    {
        title: "Extra Value for Your Business",
        image: "/images/Services/webHosting.png",
        features: [
            "Domain & Hosting Assistance",
            "CMS Setup & Training",
            "Custom Admin Dashboards",
            "Payment Gateway Integration",
            "Third-party API Integrations",
            "Local & Cloud Backups",
            "Data Privacy & Compliance Consulting",
            "Client Training & Documentation",
            "Dedicated Account Manager",
        ],
    },
];

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Banner() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [activeBox, setActiveBox] = useState<string>('');
    const [showOverlayIndex, setShowOverlayIndex] = useState<number>(0);
    const [bodyContent, setBodyContent] = useState<string[]>([]);
    const [showBox, setShowBox] = useState<boolean>(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowOverlayIndex(activeIndex);
        }, 200);
        return () => clearTimeout(timer);
    }, [activeIndex]);

    const handleClick = (features: string[], title: string) => {
        setShowBox(false); // hide first
        setTimeout(() => {
            setBodyContent(features);

            // Smooth scroll to block instead of window.location.href
            const block = document.getElementById("servicesBlocks");
            if (block) {
                block.scrollIntoView({ behavior: "smooth", block: "start" });
            }

            setActiveBox(title);
            setShowBox(true); // then show with animation
        }, 100);
    };

    return (
        <>
            {/* Heading Section */}
            <div className="px-4 md:px-10">
                <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 mb-10 lg:mb-20">
                    <h2 className="mb-2 text-center text-4xl font-semibold lg:text-6xl">
                        Build<span className="text-orange-600">.</span> Brand
                        <span className="text-orange-600">.</span> Grow
                        <span className="text-orange-600">.</span> <br /> All in One{" "}
                        <span className="text-orange-600">Solution</span>
                    </h2>
                    <p className="text-center text-muted-foreground text-lg font-medium font-sans2">
                        From custom development to stunning branding and smart promotion,
                        Hirebie helps you launch, scale, and stand out.
                    </p>
                </div>
            </div>

            {/* Service Cards */}
            <div id="servicesBlocks" className="mx-auto mt-10 mb-20 px-2 md:px-14">
                <div className="flex gap-4 overflow-x-auto px-2 flex-nowrap lg:flex-rap overflow-y-scroll lg:overflow-y-auto">
                    {services.map((service, index) => {
                        const isActive = activeIndex === index;
                        const showOverlay = showOverlayIndex === index && isActive;

                        return (
                            <div
                                key={index}
                                className={`relative overflow-hidden h-96 rounded-2xl duration-500 cursor-pointer shrink-0 lg:shrink ${isActive ? 'w-[90%] lg:w-full' : 'w-[90%] sm:w-1/2'}`}
                                onMouseEnter={() => setActiveIndex(index)}
                                onClick={() => handleClick(service.features, service.title)}
                            >
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover object-center bg-neutral-200"
                                />
                                <div
                                    className={`absolute bottom-0 bg-gradient-to-t from-black/60 to-transparent text-white p-4 w-full h-full flex flex-col justify-end gap-2 transition-opacity duration-500 
                  ${showOverlay ? "opacity-100" : "opacity-100 lg:opacity-0"}`}
                                >
                                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Features Box with Slide Down Animation */}
            {bodyContent.length > 0 && (
                <div
                    className={`bg-neutral-100 dark:bg-neutral-900 p-10 max-w-7xl mx-auto rounded-3xl transform transition-all duration-700 ease-out 
          ${showBox ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
                >
                    <h3 className="text-2xl font-medium font-sans2 lg:text-3xl text-center mb-10">
                        {activeBox}
                    </h3>

                    <ul className="col-span-3 grid gap-x-10 gap-y-10 lg:grid-cols-3">
                        {bodyContent.map((feature, featureIdx) => (
                            <li
                                key={featureIdx}
                                className="flex gap-1 text-muted-foreground text-lg font-sans2"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-check mr-2 inline-block w-4"
                                    aria-hidden="true"
                                >
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}

export default Banner;
