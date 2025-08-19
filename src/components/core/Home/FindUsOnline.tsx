"use client";

import Link from "next/link";
import React from "react";
import {
    FaBehance,
    FaDribbble,
    FaGithub,
    FaCodepen,
    FaFigma,
    FaQuora,
} from "react-icons/fa6";

const socials = [
    {
        name: "Behance",
        icon: FaBehance,
        url: "https://www.behance.net/hirebie",
        status: "Online",
        followers: "2,500",
    },
    {
        name: "Dribbble",
        icon: FaDribbble,
        url: "https://dribbble.com/hirebie",
        status: "Online",
        followers: "1,800",
    },
    {
        name: "GitHub",
        icon: FaGithub,
        url: "https://github.com/hirebie",
        status: "Offline",
        followers: "5,000",
    },
    {
        name: "CodePen",
        icon: FaCodepen,
        url: "https://codepen.io/hirebie",
        status: "Online",
        followers: "900",
    },
    {
        name: "Figma",
        icon: FaFigma,
        url: "https://www.figma.com/@hirebie",
        status: "Online",
        followers: "1,200",
    },
    {
        name: "Quora",
        icon: FaQuora,
        url: "https://www.quora.com/profile/Hirebie",
        status: "Offline",
        followers: "700",
    },
];

export default function FindUsOnline() {
    return (
        <section>
            <div className="lg:px-10 flex flex-col items-center justify-center">
                <h2 className="mb-4 text-center text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
                    Find Us <span className="text-orange-600">On</span>
                </h2>
                <p className="mb-8 max-w-2xl text-center text-muted-foreground text-xl font-medium">
                    Connect with us on your favorite creative and dev platforms.
                </p>
                <div className="mb-10 grid w-full gap-6 grid-cols-3">
                    {socials.map((social, index) => (
                        <div key={index}>
                            <div
                                className="group flex-1 flex-col items-center gap-2 rounded-2xl border-0 bg-background p-8 transition-colors duration-200 hover:bg-muted hidden md:flex"
                            >
                                <div className="flex flex-col items-center gap-2">
                                    <social.icon className="h-8 w-8 text-foreground/80" />
                                    <h5 className="mb-1 text-lg font-semibold">{social.name}</h5>
                                    <a
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mb-1 text-xs break-all underline"
                                    >
                                        {social.url}
                                    </a>
                                    <div className="mt-2 flex items-center justify-center gap-2">
                                        <span
                                            className={`h-2 w-2 rounded-full ${social.status === "Online"
                                                ? "bg-green-500"
                                                : "bg-gray-400"
                                                }`}
                                            title={social.status}
                                        ></span>
                                        <span className="text-xs text-muted-foreground">
                                            {social.status}
                                        </span>
                                        <span className="mx-2 text-xs text-muted-foreground">•</span>
                                        <span className="text-xs font-medium text-foreground">
                                            {social.followers} followers
                                        </span>
                                    </div>
                                </div>

                            </div>
                            <Link
                                href={social.url}
                                target="_blank"
                                className="group flex flex-1 flex-col items-center gap-2 rounded-2xl border-0 bg-background p-8 transition-colors duration-200 hover:bg-muted md:hidden"
                            >
                                <div className="flex flex-col items-center gap-2">
                                    <social.icon className="h-8 w-8 text-foreground/80" />
                                    <h5 className="mb-1 text-lg font-semibold">{social.name}</h5>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
