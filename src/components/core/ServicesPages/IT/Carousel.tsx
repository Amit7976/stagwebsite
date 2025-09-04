"use client";
import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Build once, run everywhere.",
    src: "https://images.unsplash.com/photo-1600267165477-6d4cc741b379?q=80&w=2400&auto=format&fit=crop",
  },
  {
    title: "Optimized apps for speed & efficiency.",
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2400&auto=format&fit=crop",
  },
  {
    title: "Seamless publishing on App Store & Play Store.",
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2400&auto=format&fit=crop",
  },
  {
    title: "Protecting apps with advanced security.",
    src: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2400&auto=format&fit=crop",
  },
  {
    title: "Syncing apps seamlessly with the cloud.",
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2400&auto=format&fit=crop",
  },
  {
    title: "Powering businesses with custom e-commerce apps.",
    src: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=2400&auto=format&fit=crop",
  },
];

export default function MobileAppCarousel() {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -340 : 340,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full py-16 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900 mb-40">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-neutral-800 dark:text-neutral-100 mb-12">
          Explore Mobile App Development
        </h2>

        <div className="relative">
          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            title="Scroll left"
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-full shadow-lg p-2 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-2"
          >
            {slides.map((item, idx) => (
              <div
                key={idx}
                className="min-w-[260px] md:min-w-[340px] bg-white dark:bg-neutral-800 rounded-2xl shadow-md hover:shadow-xl overflow-hidden hover:scale-[1.03] transition-transform duration-300"
              >
                <div className="relative w-full h-48 md:h-56">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 340px"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            title="Scroll right"
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-full shadow-lg p-2 transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
