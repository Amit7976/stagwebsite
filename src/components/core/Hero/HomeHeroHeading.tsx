"use client"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function HomeHeroHeading() {
    useEffect(() => {
        gsap.utils.toArray(".hero-word").forEach((word) => {
            const el = word as HTMLElement;
            const isSpecial = el.classList.contains("hero-word-special");

            gsap.fromTo(
                el,
                { y: 0 },
                {
                    y: isSpecial ? -20 : 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".hero-words-wrapper",
                        start: "top 15%",
                        end: "bottom top",
                        scrub: true,
                        immediateRender: false,
                        // markers: true,
                    },

                }
            );
        });
    }, []);


    return (
        <>
            <h2 className='sr-only'>We(Hirebie) Create IT Solutions thatHelpGrow Your Business</h2>
            <h1 className="text-[6.5vw] md:text-6xl font-medium text-center text-black dark:text-neutral-400 text-wrap duration-500 text-shadow-lg uppercase hero-words-wrapper">
                <span className="inline-bloc hero-word">We</span>{" "}
                <span className="inline-block hero-word">Create</span>{" "}

                {/* IT Solutions word with hover image */}
                <span className="relative group inline-block text-orange-600 font-bold uppercase hero-word hero-word-special">
                    IT Solutions
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 opacity-0 group-hover:opacity-100 transition">
                        <Image
                            src="/images/Home/it.jpg"
                            alt="IT"
                            width={800}
                            height={800}
                            className="rounded shadow-lg"
                        />
                    </span>
                </span>{" "}

                <span className="inline-block hero-word">that</span>{" "}

                {/* Help word with hover image */}
                <span className="relative group inline-block text-orange-600 font-bold uppercase hero-word hero-word-special">
                    Help
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 opacity-0 group-hover:opacity-100 transition">
                        <Image
                            src="/images/Home/help.jpg"
                            alt="Help"
                            width={800}
                            height={800}
                            className="rounded shadow-lg"
                        />
                    </span>
                </span>{" "}

                <span className="inline-block hero-word">Grow Your</span>{" "}

                {/* Business word with hover image */}
                <span className="relative group inline-block text-[#ff005d] font-bold uppercase hero-word hero-word-special">
                    Business
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 opacity-0 group-hover:opacity-100 transition">
                        <Image
                            src="/images/Home/business.jpg"
                            alt="Business"
                            width={800}
                            height={800}
                            className="rounded shadow-lg"
                        />
                    </span>
                </span>
            </h1>
        </>
    )
}
