"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


gsap.registerPlugin(ScrollTrigger);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Products() {
    const containerRef = useRef<HTMLDivElement>(null);

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    useEffect(() => {
        if (!containerRef.current) return;
        const sections = containerRef.current.querySelectorAll('.reveal-section');

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////

        sections.forEach((section: Element) => {
            const leftPart = section.querySelector('.from-left') as HTMLElement | null;
            const rightPart = section.querySelector('.from-right') as HTMLElement | null;

            // if (leftPart) {
            //     gsap.fromTo(
            //         leftPart,
            //         { x: -100, opacity: 0 },
            //         {
            //             x: 0,
            //             opacity: 1,
            //             ease: 'power2.out',
            //             scrollTrigger: {
            //                 trigger: section,
            //                 start: 'top 100%',
            //                 scrub: true,
            //             } as gsap.plugins.ScrollTriggerInstanceVars,
            //         }
            //     );
            // }

            if (rightPart) {
                // 👇 TIMELINE for rightPart with heading + body stagger
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 100%',
                        scrub: true,
                    } as gsap.plugins.ScrollTriggerInstanceVars,
                });

                // 1️⃣ Slide container from right
                // tl.fromTo(
                //     rightPart,
                //     { x: -40, opacity: 0 },
                //     {
                //         x: 0,
                //         opacity: 1,
                //         stagger: 0.5,
                //         ease: "power3.out",
                //         duration: 1,
                //     },
                //     0
                // );

                /////////////////////////////////////////////////////////////////////////////////////////////////////////////

                // 2️⃣ Animate heading and body with slight offset
                const headingRight = rightPart.querySelector('h3') as HTMLElement | null;
                const bodyElsRight = rightPart.querySelectorAll('p, ul') as NodeListOf<HTMLElement>;

                if (headingRight) {
                    tl.from(
                        headingRight,
                        {
                            y: 10,
                            opacity: 1,
                            ease: "power3.out",
                            duration: 1,
                        },
                    );
                }

                if (bodyElsRight.length) {
                    tl.fromTo(
                        bodyElsRight,
                        { x: -40, opacity: 0 },
                        {
                            x: 0,
                            opacity: 1,
                            stagger: 0.5,
                            ease: "power3.out",
                            duration: 1,
                        },
                        0
                    );
                }


                /////////////////////////////////////////////////////////////////////////////////////////////////////////////

                const headingLeft = leftPart?.querySelector('h3') as HTMLElement | null;
                const bodyElsLeft = leftPart?.querySelectorAll('p, ul') as NodeListOf<HTMLElement>;

                if (headingLeft) {
                    tl.from(
                        headingLeft,
                        {
                            y: 10,
                            opacity: 1,
                            ease: "power3.out",
                            duration: 1,
                        },
                    );
                }

                if (bodyElsLeft && bodyElsLeft.length) {
                    tl.fromTo(
                        bodyElsLeft,
                        { x: -40, opacity: 0 },
                        {
                            x: 0,
                            opacity: 1,
                            stagger: 0.5,
                            ease: "power3.out",
                            duration: 1,
                        },
                        0
                    );
                }
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <>
            <section ref={containerRef} className='w-full overflow-x-hidden'>
                <div className="px-5 md:px-10">
                    <div className="flex flex-col space-y-10 md:space-y-16">

                        {/* === IT Solutions === */}
                        <div className="reveal-section lg:flex lg:gap-x-4">
                            <div className="from-left lg:w-1/2">
                                <div className="mb-6 md:mb-8 lg:mb-0">
                                    <Image
                                        width={600}
                                        height={600}
                                        src="/images/work/it_solution_light.svg"
                                        alt="IT Solutions"
                                        className="aspect-4/3 w-full rounded-md object-contain dark:hidden"
                                    />
                                    <Image
                                        width={600}
                                        height={600}
                                        src="/images/work/it_solution.svg"
                                        alt="IT Solutions"
                                        className="aspect-4/3 w-full rounded-md object-contain hidden dark:block"
                                    />
                                </div>
                            </div>
                            <div className="from-right lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
                                <div>
                                    <h3 className="opacity-0 mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                                        Complete IT Solutions
                                    </h3>
                                    <p className="font-medium text-muted-foreground font-sans2 text-lg mb-3">
                                        Our comprehensive IT solutions help you navigate the digital landscape with confidence.
                                        We ensure your business stays secure, scalable, and future-ready with services tailored
                                        to your specific needs.
                                    </p>
                                    <ul className="list-disc text-muted-foreground font-sans2 text-lg space-y-2">
                                        <li>Network setup & infrastructure management</li>
                                        <li>Cloud migration and scalable storage solutions</li>
                                        <li>Data security and disaster recovery</li>
                                        <li>24/7 technical support and maintenance</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* === Brand Development === */}
                        <div className="reveal-section flex-row-reverse lg:flex lg:gap-x-4">
                            <div className="from-right lg:w-1/2">
                                <div className="mb-6 md:mb-8 lg:mb-0">
                                    <Image
                                        width={600}
                                        height={600}
                                        src="/images/work/brand.png"
                                        alt="Brand Development"
                                        className="aspect-4/3 w-full rounded-md object-contain dark:hidden"
                                    />
                                    <Image
                                        width={600}
                                        height={600}
                                        src="/images/work/brand_light.png"
                                        alt="Brand Development"
                                        className="aspect-4/3 w-full rounded-md object-contain hidden dark:block"
                                    />
                                </div>
                            </div>
                            <div className="from-left lg:flex lg:w-1/2 lg:items-center lg:pr-24 2xl:pr-32">
                                <div>
                                    <h3 className="opacity-0 mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                                        Brand Development
                                    </h3>
                                    <p className="font-medium text-muted-foreground font-sans2 text-lg mb-3">
                                        Build a brand that speaks for itself. We transform your vision into a compelling identity
                                        that captures your audience’s trust and sets you apart from competitors.
                                    </p>
                                    <ul className="list-disc text-muted-foreground font-sans2 text-lg space-y-2">
                                        <li>Brand strategy and positioning</li>
                                        <li>Logo and visual identity design</li>
                                        <li>Marketing materials and content creation</li>
                                        <li>Consistent brand messaging across channels</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* === Internship Program === */}
                        <div className="reveal-section lg:flex lg:gap-x-4">
                            <div className="from-left lg:w-1/2">
                                <div className="mb-6 md:mb-8 lg:mb-0">
                                    <Image
                                        width={600}
                                        height={600}
                                        src="/images/work/career.svg"
                                        alt="Internship Program"
                                        className="aspect-4/3 w-full rounded-md object-contain"
                                    />
                                </div>
                            </div>
                            <div className="from-right lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
                                <div>
                                    <h3 className="opacity-0 mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                                        Internship Opportunities
                                    </h3>
                                    <p className="font-medium text-muted-foreground font-sans2 text-lg mb-3">
                                        Our internship program bridges the gap between academics and industry experience.
                                        We empower fresh talent with real-world projects, practical training, and career growth.
                                    </p>
                                    <ul className="list-disc text-muted-foreground font-sans2 text-lg space-y-2">
                                        <li>Hands-on training on live projects</li>
                                        <li>Guidance from experienced professionals</li>
                                        <li>Career development & soft skills workshops</li>
                                        <li>Networking opportunities with industry experts</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Products
