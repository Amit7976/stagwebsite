"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll, { ILocomotiveScrollOptions } from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function SmoothScrollProvider() {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!scrollRef.current) return;

        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
        } as ILocomotiveScrollOptions & { el: HTMLElement });

        return () => {
            scroll.destroy();
        };
    }, []);

    return (
        <div data-scroll-container ref={scrollRef}>
        </div>
    );
}
