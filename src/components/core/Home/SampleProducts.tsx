"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SampleProducts() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // === Text reveal ===
            gsap.from(".text-block > *", {
                y: 60,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".text-block",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                    scrub: true,
                },
            });

            // === Tablet Zoom ===
            gsap.from(".tablet-image", {
                scale: 0.8,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".tablet-image",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                    scrub: true,
                },
            });

            // === PC slide from side ===
            gsap.from(".pc-image", {
                x: -50,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".pc-image",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                    scrub: true,
                },
            });

            // === Mobile from bottom up ===
            gsap.from(".mobile-image", {
                y: 100,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".mobile-image",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                    scrub: true,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section ref={containerRef} className="relative">
                <div className="px-10">
                    <div className="grid grid-cols-1 items-center gap-2 md:gap-4 lg:grid-cols-2">
                        {/* Text Content */}
                        <div className="text-block flex w-full max-w-[31.25rem] flex-col gap-9 lg:max-w-[37.5rem] lg:py-[20%] xl:py-[26%]">
                            <p className="font-mono text-[clamp(0.875rem,0.875vw,1rem)] text-muted-foreground">
                                Sample Products
                            </p>
                            <h1 className="font-bebas_neue text-[clamp(3.5rem,calc(6.5vw+2.3rem),9.5rem)] leading-[0.85] tracking-[-0.03em] text-foreground">
                                See It<span className="text-orange-600">.</span>
                                <br />
                                Touch It<span className="text-orange-600">.</span>
                            </h1>
                            <p className="text-[clamp(1.125rem,1.125vw,1.4rem)] leading-normal text-muted-foreground">
                                Experience the quality and features of our sample products
                                before you commit. Get inspired to build your next big project
                                with real, tangible examples.
                            </p>
                        </div>

                        {/* Overlapping Images */}
                        <div>
                            <div className="relative ml-8 aspect-square w-full max-w-[56.25rem] lg:absolute lg:right-0 lg:bottom-0 lg:w-1/2">
                                {/* Big Image - Tablet */}
                                <div className="tablet-image absolute right-0 bottom-0 w-[85%] overflow-hidden border-4 border-white dark:border-neutral-950 rounded-3xl">
                                    <div className="relative w-full pb-[108.82%]">
                                        <div className="absolute top-0 right-0 bottom-0 left-0">
                                            <Image
                                                src="/images/work/roadmint_tablet.jpeg"
                                                alt="Main Sample Product"
                                                width={400}
                                                height={400}
                                                className="block size-full object-cover object-top"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Left Overlap - PC */}
                                <div className="pc-image absolute bottom-0 left-0 w-[60%] has-[60%]: overflow-hidden rounded-2xl">
                                    <div className="relative w-full pb-[52.63%]">
                                        <div className="absolute top-0 right-0 bottom-0 left-0">
                                            <Image
                                                src="/images/work/roadmint_pc.jpeg"
                                                alt="Side Sample Product"
                                                width={400}
                                                height={200}
                                                className="block h-full w-full object-cover object-top border-4 border-white dark:border-neutral-950 rounded-2xl"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Right Overlap - Mobile */}
                                <div className="mobile-image absolute right-[5%] bottom-0 w-[40%] h-[70%] overflow-hidden">
                                    <div className="relative w-full pb-[128.85%] h-full">
                                        <div className="absolute top-0 right-0 bottom-0 left-0">
                                            <Image
                                                src="/images/work/roadmint_mobile.jpg"
                                                alt="Extra Sample Product"
                                                width={200}
                                                height={400}
                                                className="block h-full w-full object-cover object-top border-4 border-white dark:border-neutral-950 rounded-2xl"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
