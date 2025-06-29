"use client";

import React from "react";

const images = [
    "https://www.shadcnblocks.com/images/block/placeholder-1.svg",
    "https://www.shadcnblocks.com/images/block/placeholder-2.svg",
    "https://www.shadcnblocks.com/images/block/placeholder-3.svg",
    "https://www.shadcnblocks.com/images/block/placeholder-4.svg",
    "https://www.shadcnblocks.com/images/block/placeholder-5.svg",
    "https://www.shadcnblocks.com/images/block/placeholder-6.svg",
];

export default function Showcase() {
    return (
        <section className="overflow-hidden bg-white dark:bg-neutral-950">
            <div className="px-0">
                <div className="w-full overflow-hidden  relative [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <div className="flex whitespace-nowrap animate-marquee gap-8">
                        {images.concat(images).map((src, idx) => (
                            <div key={idx} className="px-4 w-72">
                                <div className="w-72">
                                    <img
                                        src={src}
                                        alt={`placeholder-${idx}`}
                                        className={`h-48 w-72 border-2 border-gray-200 rounded-md object-cover ${idx % 2 === 0 ? "mt-16" : "mt-7"
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
