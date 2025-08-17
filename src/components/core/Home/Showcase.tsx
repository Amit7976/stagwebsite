"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const images = [
    {
        src: "/images/work/personal_gym.jpeg",
        alt: "Personal Gym Website",
        link: "https://personal-gym-trainer-inky.vercel.app/",
    },
    {
        src: "/images/work/portfolio.jpeg",
        alt: "Portfolio Website",
        link: "https://amit-aaportfolio.vercel.app/",
    },
    {
        src: "/images/work/jobboost.jpeg",
        alt: "JobBoost Platform",
        link: "/e/notDeployed",
    },
    {
        src: "/images/work/catererss.jpeg",
        alt: "Catering Services",
        link: "https://catererss.vercel.app/",
    },
    {
        src: "/images/work/cashplay_admin.jpeg",
        alt: "Cashplay Admin Panel",
        link: "/e/notDeployed",
    },
    {
        src: "/images/work/event_list.jpeg",
        alt: "Event Listing App",
        link: "/e/notDeployed",
    },
    {
        src: "/images/work/trandy_clothes.jpeg",
        alt: "Trendy Clothes Store",
        link: "/e/notDeployed",
    },
    {
        src: "/images/work/blog.jpeg",
        alt: "Blog Website",
        link: "https://blogs.hirebie.com/",
    },
    {
        src: "/images/work/quricky.jpeg",
        alt: "Quirky Website",
        link: "/e/notDeployed",
    },
    {
        src: "/images/work/wedwebai.jpeg",
        alt: "WedWebAI Platform",
        link: "/e/notDeployed",
    },
    {
        src: "/images/work/event_admin.jpeg",
        alt: "Event Admin Panel",
        link: "/e/notDeployed",
    },
];

export default function Showcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    // Auto scroll effect
    useEffect(() => {
        if (!containerRef.current) return;

        let animationFrame: number;
        const scrollSpeed = 0.5; // speed

        const scroll = () => {
            if (!isPaused && containerRef.current) {
                containerRef.current.scrollLeft += scrollSpeed;

                // reset for infinite loop
                if (
                    containerRef.current.scrollLeft >=
                    containerRef.current.scrollWidth / 2
                ) {
                    containerRef.current.scrollLeft = 0;
                }
            }
            animationFrame = requestAnimationFrame(scroll);
        };

        scroll();
        return () => cancelAnimationFrame(animationFrame);
    }, [isPaused]);

    return (
        <section className="overflow-hidden bg-white dark:bg-neutral-950">
            <div className="px-0">
                <div
                    ref={containerRef}
                    className="flex overflow-x-scroll scrollbar-hide gap-8 cursor-grab active:cursor-grabbing"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                >
                    {images.concat(images).map((img, idx) => (
                        <Link
                            key={idx}
                            href={img.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 w-3/4 md:w-96 shrink-0 block"
                        >
                            <div className="w-full md:w-96">
                                <Image
                                    width={800}
                                    height={800}
                                    src={img.src}
                                    alt={img.alt}
                                    className={`w-full h-52 md:h-56 md:w-96 border-2 border-gray-200 dark:border-neutral-900 rounded-md object-fill ${idx % 2 === 0 ? "mt-16" : "mt-7"
                                        }`}
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
        </section>
    );
}
