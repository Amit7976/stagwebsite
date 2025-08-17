"use client";

import React from "react";

import {
    Newspaper,
    Files,
    LayoutDashboard,
    Rocket,
    ClipboardCheck,
    KeyRound,
    Megaphone,
    Users,
    RectangleEllipsis,
    Mail,
    Component as LucideComponent,
    Sparkles,
    ChevronRight,
} from "lucide-react";

const services = [
    {
        title: "Blog Websites",
        desc: "Professional blog layouts",
        icon: <Newspaper size={16} />,
    },
    {
        title: "Portfolio",
        desc: "Showcase your creative work",
        icon: <Files size={16} />,
    },
    {
        title: "Dashboard UI",
        desc: "Modern admin interfaces",
        icon: <LayoutDashboard size={16} />,
    },
    {
        title: "Landing Pages",
        desc: "High-converting designs",
        icon: <Rocket size={16} />,
    },
    {
        title: "Documentation",
        desc: "Knowledge base layouts",
        icon: <ClipboardCheck size={16} />,
    },
    {
        title: "Authentication",
        desc: "Sign-in and signup flows",
        icon: <KeyRound size={16} />,
    },
    {
        title: "Marketing Sites",
        desc: "Promote your products",
        icon: <Megaphone size={16} />,
    },
    {
        title: "Social Media",
        desc: "Community platforms",
        icon: <Users size={16} />,
    },
    {
        title: "Forms",
        desc: "Input and survey layouts",
        icon: <RectangleEllipsis size={16} />,
    },
    {
        title: "Email Templates",
        desc: "Responsive email designs",
        icon: <Mail size={16} />,
    },
    {
        title: "Components",
        desc: "Reusable UI elements",
        icon: <LucideComponent size={16} />,
    },
    {
        title: "Animations",
        desc: "Interactive transitions",
        icon: <Sparkles size={16} />,
    },
];

export default function WebsiteSolutions() {
    return (
        <section>
            <div className="px-4 md:px-10">
                {/* Section Intro */}
                <div className="mx-auto flex flex-col justify-between gap-3 md:flex-row md:items-end md:gap-12">
                    <div className="flex basis-1/2 flex-col gap-3">
                        <h2 className="text-4xl font-semibold md:text-6xl">
                            Websites We Can <br /> Build For <span className="text-orange-600">You</span>
                        </h2>
                    </div>
                    <p className="w-fit basis-1/2 text-xl font-medium text-muted-foreground">
                        Need a modern blog, a high-converting landing page, or a full social
                        platform? Hirebie helps you launch websites that stand out and grow
                        your business fast.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="mx-auto mt-16 grid gap-6 grid-cols-2 sm:gap-8 md:mt-32 md:gap-y-6 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-10 xl:grid-cols-4">
                    {services.map((service, idx) => (
                        <a
                            href="#"
                            key={idx}
                            className="group flex flex-col gap-1 rounded-lg transition-colors p-4 md:hover:bg-muted bg-neutral-100 dark:bg-neutral-900"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                                <div className="w-10 h-10 sm:w-auto sm:h-auto flex items-center scale-150 sm:scale-100 ml-2.5 sm:ml-0"> {service.icon}</div>
                                <div className="flex items-center justify-start gap-1">
                                    <p className="text-[4vw] sm:text-[2.5vw] lg:text-[1.1vw] font-medium">{service.title}</p>
                                    <ChevronRight className="size-5 md:size-4 shrink-0 transition-transform md:group-hover:translate-x-0.5" />
                                </div>
                            </div>
                            <p className="text-[3.5vw] sm:text-[2vw] lg:text-[1vw] text-muted-foreground">{service.desc}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}