"use client";
import { Card } from "@/components/ui/card";

// Importing icons from react-icons
import { FaAnglesUp, FaInfinity } from "react-icons/fa6";

export default function WhyChoose() {

    const cardData = [
        {
            icon: FaAnglesUp,
            value: "250+",
            sabValue:"Companies",
            description: "Companies like yours trust Hirebie to build, launch, and grow digital products without the usual stress or guesswork.",
            iconColor: "text-green-500",
        },
        {
            icon: FaAnglesUp,
            value: "5,000+",
            sabValue: "Hours Saved",
            description: "We help you reclaim valuable time by automating routine tasks - so your team can focus on what really drives revenue.",
            iconColor: "text-green-500",
        },
        {
            icon: FaAnglesUp,
            value: "150+",
            sabValue: "Projects Delivered",
            description: "From websites to custom apps, we deliver high-quality projects on time - and we adapt to your goals as they evolve.",
            iconColor: "text-green-500",
        },
        {
            icon: FaAnglesUp,
            value: "90%",
            sabValue: "Retention Rate",
            description: "Most of our clients stay with us long-term because we act like an extended team - always listening, always improving.",
            iconColor: "text-green-500",
        },
        {
            icon: FaAnglesUp,
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
        <section>
            <div className="px-4 md:px-10">
                <h1 className="text-center text-4xl font-semibold lg:text-5xl">
                    Why Choose <span className="text-orange-600">Us</span>
                </h1>
                <div className="grid gap-6 pt-9 text-center md:grid-cols-3 lg:pt-20">
                    {cardData.map((card, index) => (
                        <Card
                            key={index}
                            className="p-8 lg:p-10 border-0 dark:bg-neutral-900 gap-1"
                        >
                            <p className="mb-1 flex items-center justify-center text-2xl font-semibold lg:text-3xl">
                                <span className="relative">
                                    <card.icon className={`h-4 ${card.iconColor}`} aria-hidden="true" />
                                    <span className="w-full h-full bg-gradient-to-t from-white dark:from-neutral-900 to-transparent absolute top-0 left-0 z-50"></span>
                               </span>
                                {card.value}
                            </p>
                            <p className="mb-5 text-lg font-medium text-gray-500 lg:text-xl">
                                {card.sabValue}
                            </p>
                            <p className="text-muted-foreground">{card.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
