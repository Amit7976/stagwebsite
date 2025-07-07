"use client";
import React from "react";

// 🚀 DATA ARRAY: easy to update, maintain, or fetch from CMS later
export const overviewData = [
    {
        title: "Develop and Manage Projects",
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
  

export default function SectionOverview() {
    return (
        <section>
            <div className="px-4 md:px-10">
                <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 mb-10 lg:mb-20">
                    <h2 className="mb-2 text-center text-3xl font-semibold lg:text-6xl">
                        Build<span className="text-orange-600">.</span> Brand<span className="text-orange-600">.</span> Grow<span className="text-orange-600">.</span> <br /> All in One <span className="text-orange-600">Solution</span>
                    </h2>
                    <p className="text-center text-muted-foreground lg:text-lg">
                        From custom development to stunning branding and smart promotion,
                        Hirebie helps you launch, scale, and stand out.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    {overviewData.map((section, idx) => (
                        <div key={idx} className="w-full lg:max-w-none">
                            {idx > 0 && (
                                <div
                                    data-orientation="horizontal"
                                    role="none"
                                    data-slot="separator-root"
                                    className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-16 w-full"
                                ></div>
                            )}

                            <div className="mx-auto inline-block w-full gap-x-10 lg:grid lg:grid-cols-4">
                                <h3 className="mb-4 text-2xl font-semibold lg:text-3xl">
                                    {section.title}
                                </h3>
                                <ul className="col-span-3 grid gap-x-10 gap-y-4 lg:grid-cols-3">
                                    {section.features.map((feature, featureIdx) => (
                                        <li
                                            key={featureIdx}
                                            className="flex gap-1 text-muted-foreground"
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
