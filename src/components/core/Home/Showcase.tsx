"use client";

import React from "react";

const images = [
    "/images/work/personal_gym.jpeg",
    "/images/work/portfolio.jpeg",
    "/images/work/jobboost.jpeg",
    "/images/work/catererss.jpeg",
    "/images/work/cashplay_admin.jpeg",
    "/images/work/event_list.jpeg",
    "/images/work/trandy_clothes.jpeg",
    "/images/work/blog.jpeg",
    "/images/work/quricky.jpeg",
    "/images/work/wedwebai.jpeg",
    "/images/work/event_admin.jpeg",
];

export default function Showcase() {
    return (
        <section className="overflow-hidden bg-white dark:bg-neutral-950">
            <div className="px-0">
                <div className="w-full overflow-hidden  relative md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <div className="flex whitespace-nowrap animate-marquee gap-8">
                        {images.concat(images).map((src, idx) => (
                            <div key={idx} className="px-4 w-72">
                                <div className="w-72">
                                    <img
                                        src={src}
                                        alt={`placeholder-${idx}`}
                                        className={`h-44 w-72 border-2 border-gray-200 dark:border-neutral-900 rounded-md object-fill ${idx % 2 === 0 ? "mt-16" : "mt-7"
                                            }`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Add the CSS in your global stylesheet or tailwind config */}
            <style jsx>{`
.animate-marquee {
    display: inline-flex;
    animation: marquee 100s linear infinite;
    }
    
    @keyframes marquee {
        0% {
            transform: translateX(0%);
            }
            100% {
                transform: translateX(-50%);
                }
                }
      `}</style>
        </section>
    );
}
