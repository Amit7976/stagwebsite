"use client"
import Footer from '@/components/core/Footer/Footer';
import HomeHeader from '@/components/core/Header/HomeHeader';
import HomeHero from '@/components/core/Hero/HomeHero';
import BlogSection from '@/components/core/Home/BlogSection';
import FindUsOnline from '@/components/core/Home/FindUsOnline';
import InAppFeature from '@/components/core/Home/InAppFeature';
import SectionOverview from '@/components/core/Home/OverviewSection';
import WhyChoose from '@/components/core/Home/WhyChoose';
import ProcessSteps from '@/components/core/Home/ProcessSteps';
import Products from '@/components/core/Home/Products';
import SampleProducts from '@/components/core/Home/SampleProducts';
import Services from '@/components/core/Home/Services';
import ServicesMarquee from '@/components/core/Home/ServicesMarquee';
import Showcase from '@/components/core/Home/Showcase';
import Testimonial from '@/components/core/Home/Testimonial';
import WebsiteSolutions from '@/components/core/Home/WebsiteSolutions';
import { FAQ } from '@/components/core/Home/FAQ';
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
        } as any);
    }, []);

    return (
        <>
            <main data-scroll-container ref={scrollRef} className='relative min-h-screen w-full bg-white dark:bg-neutral-950'>
                <HomeHeader />
                <HomeHero />
                <ServicesMarquee />
                <Showcase />
                <Products />
                <InAppFeature />
                <WebsiteSolutions />
                <SampleProducts />
                <SectionOverview />
                <WhyChoose />
                <Services />
                <ProcessSteps />
                <Testimonial />
                <BlogSection />
                <FindUsOnline />
                <FAQ />
                <Footer />
            </main>
        </>
    );
};

export default Home;