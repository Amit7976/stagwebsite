"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
    {
        name: "SaaS Product Development",
        image: "https://www.shadcnblocks.com/images/block/placeholder-1.svg",
    },
    {
        name: "Web Development",
        image: "https://www.shadcnblocks.com/images/block/placeholder-2.svg",
    },
    {
        name: "Mobile App Development",
        image: "https://www.shadcnblocks.com/images/block/placeholder-1.svg",
    },
    {
        name: "UI/UX Design",
        image: "https://www.shadcnblocks.com/images/block/placeholder-2.svg",
    },
    {
        name: "Cloud & DevOps",
        image: "https://www.shadcnblocks.com/images/block/placeholder-1.svg",
    },
    {
        name: "MVP Development",
        image: "https://www.shadcnblocks.com/images/block/placeholder-2.svg",
    },
    {
        name: "Maintenance & Support",
        image: "https://www.shadcnblocks.com/images/block/placeholder-1.svg",
    },
    {
        name: "Branding & Identity",
        image: "https://www.shadcnblocks.com/images/block/placeholder-2.svg",
    },
    {
        name: "Startup Consulting",
        image: "https://www.shadcnblocks.com/images/block/placeholder-3.svg",
    },
    {
        name: "Digital Marketing",
        image: "https://www.shadcnblocks.com/images/block/placeholder-2.svg",
    },
    {
        name: "SEO & Content",
        image: "https://www.shadcnblocks.com/images/block/placeholder-1.svg",
    },
    {
        name: "E-commerce Solutions",
        image: "https://www.shadcnblocks.com/images/block/placeholder-3.svg",
    },
    {
        name: "Custom ERP",
        image: "https://www.shadcnblocks.com/images/block/placeholder-1.svg",
    },
    {
        name: "CRM Solutions",
        image: "https://www.shadcnblocks.com/images/block/placeholder-1.svg",
    },
    {
        name: "Business Analytics",
        image: "https://www.shadcnblocks.com/images/block/placeholder-3.svg",
    },
    {
        name: "Cybersecurity",
        image: "https://www.shadcnblocks.com/images/block/placeholder-1.svg",
    },
    {
        name: "API Development",
        image: "https://www.shadcnblocks.com/images/block/placeholder-2.svg",
    },
    {
        name: "Investor Relations Support",
        image: "https://www.shadcnblocks.com/images/block/placeholder-1.svg",
    },
];


export default function Services() {
    const [activeService, setActiveService] = useState(services[0]);

    return (
        <section>
            <div className="container max-w-7xl mx-auto">
                <h1 className="mb-10 text-4xl font-bold md:text-5xl lg:mb-20 lg:text-6xl">
                    Our <span className="text-orange-600">Services</span>
                </h1>
                <div className="md:grid md:grid-cols-5 gap-10 relative">
                    <div className="col-span-3 pb-4"> {/* Force scroll */}
                        {services.map((service, index) => (
                            <React.Fragment key={service.name}>
                                {index !== 0 && (
                                    <div className="bg-border shrink-0 h-px w-full"></div>
                                )}
                                <button
                                    onClick={() => setActiveService(service)}
                                    className="w-full text-left"
                                >
                                    <div className="flex items-center py-3 gap-7 md:gap-16 lg:gap-20">
                                        <span
                                            className={`size-2.5 shrink-0 rounded-full md:size-3 ${activeService.name === service.name
                                                ? "bg-orange-600"
                                                : "bg-muted"
                                                }`}
                                        ></span>
                                        <h2
                                            className={`text-[clamp(1.65rem,3vw,2.15rem)] cursor-pointer font-bold ${activeService.name === service.name
                                                ? "text-primary"
                                                : "text-muted-foreground"
                                                }`}
                                        >
                                            {service.name}
                                        </h2>
                                    </div>
                                </button>
                            </React.Fragment>
                        ))}
                    </div>

                    <div className="col-span-2">
                        <div className="sticky top-20">
                            <Card className="p-4 flex items-center justify-center h-72 md:h-auto border-gray-200 dark:border-neutral-900">
                                <img
                                    src={activeService.image}
                                    alt={activeService.name}
                                    className="max-h-full"
                                />
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
