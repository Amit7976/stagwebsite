"use client";
import React, { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import gsap from "gsap";
import Image from "next/image";

const services = [
    {
        name: "Website Development",
        image: "/images/work/services/website.svg",
    },
    {
        name: "Web App Development",
        image: "/images/work/services/web_app.svg",
    },
    {
        name: "Mobile App Development",
        image: "/images/work/services/mobile_app.svg",
    },
    {
        name: "UI/UX Design & Prototyping",
        image: "/images/work/services/ui_ux.svg",
    },
    {
        name: "Game Development",
        image: "/images/work/services/game_dev.svg",
    },
    {
        name: "API Development & Integration",
        image: "/images/work/services/api.svg",
    },
    {
        name: "Cybersecurity Solutions",
        image: "/images/work/services/cyber_security.svg",
    },
    {
        name: "Cloud Infrastructure & DevOps",
        image: "/images/work/services/cloud_dev_ops.svg",
    },
    {
        name: "SEO & Performance Optimization",
        image: "/images/work/services/seo.svg",
    },
    {
        name: "Database Design & Management",
        image: "/images/work/services/database.svg",
    },
    {
        name: "Website Redesign & Modernization",
        image: "/images/work/services/website_redesign.svg",
    },
    {
        name: "Legacy System Modernization",
        image: "/images/work/services/system_update.svg",
    },
    {
        name: "SaaS Product Development",
        image: "/images/work/services/saas.svg",
    },
    {
        name: "E-commerce Development",
        image: "/images/work/services/ecommerce.svg",
    },
    {
        name: "IT Consulting & Audits",
        image: "/images/work/services/it_consulting.svg",
    },
    {
        name: "Maintenance & Support",
        image: "/images/work/services/support.svg",
    },
    {
        name: "Enterprise Software Solutions",
        image: "/images/work/services/erp.svg",
    },
    {
        name: "Startup Tech Advisory",
        image: "/images/work/services/startup.svg",
    },
    {
        name: "Startup MVP Development",
        image: "/images/work/services/mvp.svg",
    },
];
  


export default function Services() {
    const [activeService, setActiveService] = useState(services[0]);
    const imageRef = useRef(null);
    const listRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray(".service-item");

            items.forEach((item) => {
                const el = item as HTMLElement;
                gsap.from(el, {
                    opacity: 0,
                    x: -50,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                        scrub: true,
                    },
                });
            });
        }, listRef);

        return () => ctx.revert();
    }, []);


    // === Animate image on change ===
    useEffect(() => {
        if (imageRef.current) {
            gsap.fromTo(
                imageRef.current,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.6, ease: "power2.in" }
            );
        }
    }, [activeService]);

    return (
        <section>
            <div className="w-full px-6 md:px-20">
                <h1 className="mb-10 text-4xl font-bold md:text-5xl lg:mb-20 lg:text-6xl">
                    IT <span className="text-orange-600">Services</span>
                </h1>

                <div className="md:grid md:grid-cols-5 gap-10 relative">
                    <div ref={listRef} className="col-span-3 pb-4">
                        {services.map((service, index) => (
                            <React.Fragment key={service.name}>
                                {index !== 0 && (
                                    <div className="bg-border shrink-0 h-px w-full"></div>
                                )}
                                <button
                                    onClick={() => setActiveService(service)}
                                    className="w-full text-left service-item"
                                >
                                    <div className="flex items-center py-3 gap-7 md:gap-16 lg:gap-20">
                                        <span
                                            className={`size-2.5 shrink-0 rounded-full md:size-3 ${activeService.name === service.name
                                                ? "bg-orange-600"
                                                : "bg-muted"
                                                }`}
                                        ></span>
                                        <h3
                                            className={`text-[clamp(1.65rem,3vw,2.15rem)] cursor-pointer font-bold ${activeService.name === service.name
                                                ? "text-primary"
                                                : "text-muted-foreground"
                                                }`}
                                        >
                                            {service.name}
                                        </h3>
                                    </div>
                                </button>
                            </React.Fragment>
                        ))}
                    </div>

                    <div className="col-span-2">
                        <div className="sticky top-20">
                            <Card className="p-4 flex items-center justify-center h-72 md:h-auto border-gray-200 dark:border-neutral-900">
                                <Image
                                    width={600}
                                    height={600}
                                    ref={imageRef}
                                    key={activeService.image} // force img re-render
                                    src={activeService.image}
                                    alt={activeService.name}
                                    className="max-h-full transition-transform"
                                />
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
