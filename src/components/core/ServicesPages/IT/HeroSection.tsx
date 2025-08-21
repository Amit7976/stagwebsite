"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const stacks = [
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "Docker",
];

const Hero: React.FC = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % stacks.length);
        }, 2000); // change every 2s
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="dark relative h-svh max-h-[1400px] w-full bg-[url(https://www.shadcnblocks.com/images/block/full-width-backgrounds/andrew-kliatskyi-uBg4k82xnI4-unsplash.jpg)] bg-cover bg-[100%] bg-no-repeat before:absolute before:left-0 before:top-0 before:size-full before:bg-[radial-gradient(circle_at_100%_-100%,transparent_40%,rgba(0,0,0,.75)_85%)] before:content-['']">
            <div className="container relative z-10 flex size-full max-w-[103.125rem] flex-col justify-between pb-14 pt-24 md:justify-end">
                <div className="flex h-full flex-col justify-between gap-6 md:justify-end px-10 pb-10">
                    {/* Heading */}
                    <h1 className="text-foreground lg:leading-[3rem]! xl:leading-[5.5rem]! text-4xl font-bold leading-[2.25rem] lg:text-5xl xl:text-7xl">
                        <div className="mb-2">Web Development</div>
                        <div className="relative h-[calc(2.25rem*3)] md:h-[2.25rem] lg:h-[3rem] xl:h-[5.5rem] overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: "100%" }}
                                    animate={{ opacity: 1, y: "0%" }}
                                    exit={{ opacity: 0, y: "-100%" }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="absolute left-0 top-0 w-full"
                                >
                                    {stacks[index]}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </h1>

                    {/* Subtext + Buttons */}
                    <div className="flex flex-col gap-8">
                        <p className="text-foreground text-lg lg:text-2xl">
                            Increase impact, not effort.
                        </p>

                        <div className="flex flex-wrap items-center justify-end gap-5 h-20 pl-10">
                            <div className="flex flex-wrap items-center gap-5 fixed bottom-10 left-10 z-[999999]">
                                <Link
                                    href="#"
                                    data-slot="button"
                                    className="rounded-full px-7 py-3.5 text-xs font-semibold uppercase lg:px-9 lg:py-5 lg:text-base bg-orange-600 text-white"
                                >
                                    Get a Quotation
                                </Link>
                                <Link
                                    href="#"
                                    data-slot="button"
                                    className="border-2 border-neutral-500 bg-neutral-950 rounded-full px-7 py-3.5 text-xs font-semibold uppercase text-white lg:px-9 lg:py-5 lg:text-base"
                                >
                                    Request Custom Quotation
                                </Link>
                            </div>

                            {/* Scroll Button */}
                            <Button
                                data-slot="button"
                                className="font-medium font-sans2 text-xl text-white"
                                variant={"ghost"}
                            >
                                <div>Scroll to explore</div>
                                <ArrowDown className="size-3! lg:size-4! stroke-white animate-bounce ease-in" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
