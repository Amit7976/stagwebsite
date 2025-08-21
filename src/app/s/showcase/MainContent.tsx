"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const images = [
    "/images/work/Advance-Password-Generator.png",
    "/images/work/blog.jpeg",
    "/images/work/cashplay_admin.jpeg",
    "/images/work/catererss.jpeg",
    "/images/work/event_admin.jpeg",
    "/images/work/event_list.jpeg",
    "/images/work/geo-radius-news.png",
    "/images/work/jobboost.jpeg",
    "/images/work/personal_gym.jpeg",
    "/images/work/portfolio.jpeg",
    "/images/work/quricky.jpeg",
    "/images/work/roadmint_mobile.jpg",
    "/images/work/roadmint_pc.jpeg",,
    "/images/work/trandy_clothes.jpeg",
    "/images/work/user-management.png",
    "/images/work/wedwebai.jpeg",
];


const MainContent = () => {

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const closeLightbox = () => setSelectedIndex(null);
    const showPrev = useCallback(
        () =>
            setSelectedIndex((prev) =>
                prev !== null ? (prev - 1 + images.length) % images.length : null
            ),
        []
    );
    const showNext = useCallback(
        () =>
            setSelectedIndex((prev) =>
                prev !== null ? (prev + 1) % images.length : null
            ),
        []
    );

    // Keyboard Controls
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === "ArrowRight" || e.key === "ArrowDown") showNext();
            if (e.key === "ArrowLeft" || e.key === "ArrowUp") showPrev();
            if (e.key === "Escape") closeLightbox();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [selectedIndex, showNext, showPrev]);

    // Mouse wheel support
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (selectedIndex === null) return;
            if (e.deltaY > 0) showNext();
            else if (e.deltaY < 0) showPrev();
        };
        window.addEventListener("wheel", handleWheel);
        return () => window.removeEventListener("wheel", handleWheel);
    }, [selectedIndex, showNext, showPrev]);

    return (
        <section className="pt-10 pb-20 px-5">
            <section className="pt-28 pb-20">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col items-center gap-10 text-center">
                        {/* Badge */}
                        <Link
                            href="#main"
                            className="flex items-center gap-2 rounded-full px-2 py-1 text-xl transition-colors hover:bg-muted"
                        >
                            <span
                                data-slot="badge"
                                className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-lg font-medium w-fit whitespace-nowrap shrink-0 border-transparent bg-primary text-primary-foreground hover:bg-primary/90"
                            >
                                Hirebie
                            </span>
                            Our Projects Gallery
                            <FaArrowRightLong className="w-4 h-auto" />
                        </Link>

                        {/* Title */}
                        <h1 className="text-4xl font-semibold lg:text-7xl">
                            Explore the Projects We’ve Built
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            Here you’ll find the creative and technical work we’ve done for our
                            amazing clients. From web apps to mobile apps - a showcase of our
                            journey.
                        </p>
                        
                    </div>
                </div>
            </section>
            {/* Grid */}
            <div id="main" className="columns-2 md:columns-4 gap-4 pt-10">
                {images.map((img, i) => (
                    <motion.div
                        key={i}
                        className="mb-4 overflow-hidden rounded-2xl cursor-pointer border-4 border-gray-100 dark:border-neutral-800 hover:border-foreground dark:hover:border-foreground duration-500 break-inside-avoid hover:scale-105"
                        initial={{ opacity: 0, y: i % 2 === 0 ? 50 : -50, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        onClick={() => setSelectedIndex(i)}
                    >
                        <Image
                            src={img!}
                            alt={`Gallery Image ${i}`}
                            width={400}
                            height={300}
                            className="w-full h-auto rounded-2xl object-contain"
                        />
                    </motion.div>
                ))}
            </div>
            {/* Lightbox */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Close */}
                        <Button
                            onClick={closeLightbox}
                            className="absolute top-5 right-5 text-white hover:bg-neutral-900 hover:text-white h-20 w-20 z-[99999]"
                            variant='ghost'
                        >   
                            <X className="w-10 h-10 size-1" />
                        </Button>

                        {/* Left */}
                        <Button
                            onClick={showPrev}
                            className="absolute top-0 left-0 text-white hover:bg-neutral-900 hover:text-white h-screen w-40 "
                            variant='ghost'
                        >
                            <ChevronLeft className="w-10 h-10 size-1" />
                        </Button>

                        {/* Image with Drag */}
                        <motion.div
                            key={selectedIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={(_, info) => {
                                if (info.offset.x > 100) showPrev();
                                if (info.offset.x < -100) showNext();
                            }}
                            className="relative max-w-4xl max-h-[85vh] flex items-center justify-center"
                        >
                            <Image
                                src={images[selectedIndex]!}
                                alt="Selected"
                                width={1000}
                                height={800}
                                className="max-h-[85vh] w-auto rounded-xl object-contain shadow-2xl"
                            />
                        </motion.div>

                        {/* Right */}
                        <Button
                            onClick={showNext}
                            className="absolute top-0 right-0 text-white hover:bg-neutral-900 hover:text-white h-screen w-40 "
                            variant='ghost'
                        >
                            <ChevronRight className="w-10 h-10 size-1" />
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default MainContent;
