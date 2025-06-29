"use client";
import React from "react";

// Importing icons from react-icons
import { FaArrowUp, FaArrowDown, FaInfinity } from "react-icons/fa6";

export default function PlatformPerformanceInsights() {

    const cardData = [
        {
            icon: FaArrowUp,
            value: "250+",
            sabValue:"Companies",
            description: "Companies like yours trust Hirebie to build, launch, and grow digital products without the usual stress or guesswork.",
            iconColor: "text-green-500",
        },
        {
            icon: FaArrowUp,
            value: "5,000+",
            sabValue: "Hours Saved",
            description: "We help you reclaim valuable time by automating routine tasks - so your team can focus on what really drives revenue.",
            iconColor: "text-green-500",
        },
        {
            icon: FaArrowUp,
            value: "150+",
            sabValue: "Projects Delivered",
            description: "From websites to custom apps, we deliver high-quality projects on time - and we adapt to your goals as they evolve.",
            iconColor: "text-green-500",
        },
        {
            icon: FaArrowUp,
            value: "90%",
            sabValue: "Retention Rate",
            description: "Most of our clients stay with us long-term because we act like an extended team - always listening, always improving.",
            iconColor: "text-green-500",
        },
        {
            icon: FaArrowUp,
            value: "+120%",
            sabValue: "Client Growth",
            description: "Our clients see real growth - from stronger customer engagement to faster launches. Your wins are our wins.",
            iconColor: "text-green-500",
        },
        {
            icon: FaInfinity,
            value: "infinite",
            sabValue: "Possibilities",
            description: "No matter how your needs change, Hirebie scales with you - giving you tech, design, and support that grows alongside your business.",
            iconColor: "text-gray-500",
        },
      ];


    return (
        <section className="py-32">
            <div className="px-10">
                <h1 className="text-center text-4xl font-semibold lg:text-5xl">
                    Why Choose <span className="text-orange-600">Us</span>
                </h1>
                <div className="grid gap-6 pt-9 text-center md:grid-cols-3 lg:pt-20">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            data-slot="card"
                            className="text-card-foreground flex flex-col rounded-xl border shadow-sm border-none bg-accent p-8 lg:p-10"
                        >
                            <p className="mb-1 flex items-center justify-center text-2xl font-semibold lg:text-3xl">
                                <card.icon className={`h-4 ${card.iconColor}`} aria-hidden="true" />
                                {card.value}
                            </p>
                            <p className="mb-5 text-lg font-medium text-gray-500 lg:text-xl">
                                {card.sabValue}
                            </p>
                            <p className="text-muted-foreground">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
