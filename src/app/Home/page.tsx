"use client"
import Footer from '@/components/core/Footer/Footer';
import HomeHeader from '@/components/core/Header/HomeHeader';
import HomeHero from '@/components/core/Hero/HomeHero';
import ServicesMarquee from '@/components/core/Home/ServicesMarquee';
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useEffect, useRef } from 'react';

function Home() {
    const scrollRef = useRef(null);

    useEffect(() => {
        if (!scrollRef.current) return;

        new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
        });
    }, []);

    return (
        <main data-scroll-container ref={scrollRef} className='relative min-h-screen w-full overflow-x-hidden bg-white dark:bg-neutral-950'>
            <HomeHeader />
            <HomeHero />
            <ServicesMarquee />
            <Footer />
        </main>
    );
};

export default Home;