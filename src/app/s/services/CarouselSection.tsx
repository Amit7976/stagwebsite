"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
    {
        image: "/images/Services/web_app.jpg",
        title: "Web App Development",
        description:
            "Custom, scalable web applications built to elevate your business and delight your users.",
    },
    {
        image: "/images/Services/mobile_app.jpg",
        title: "Mobile App Solutions",
        description:
            "Intuitive, high-performance mobile apps for iOS and Android to keep you connected on the go.",
    },
    {
        image: "/images/Services/ui_ux.jpg",
        title: "UI/UX Design",
        description:
            "Pixel-perfect user interfaces and seamless user experiences that keep people coming back.",
    },
    {
        image: "/images/Services/seo.jpg",
        title: "SEO & Digital Marketing",
        description:
            "Drive traffic, rank higher, and grow your audience with our result-oriented SEO strategies.",
    },
    {
        image: "/images/Services/analytics.jpg",
        title: "Data Analytics",
        description:
            "Unlock powerful insights with our analytics services to make smarter, data-driven decisions.",
    },
];
  

export default function CarouselSection() {
    return (
        <section className="p-0 md:p-12 w-full overflow-hidden">
            <div className="hover:scale-110 duration-500">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView={1}
                    spaceBetween={20}
                    loop={true}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: true }}
                    speed={1000}
                    breakpoints={{
                        768: { slidesPerView: 1 },
                        1024: { slidesPerView: 1 },
                    }}
                    className="w-full"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative flex h-96 lg:h-[700px] flex-col items-end justify-between pb-10 px-10 md:px-20 lg:rounded-xl overflow-hidden bg-muted">
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    className="absolute top-0 left-0 h-full w-full object-cover z-0"
                                />
                                <div className="relative z-10 mt-20 md:mt-40 text-right text-white">
                                    <h1 className="max-w-lg text-4xl md:text-6xl font-medium tracking-tight">
                                        {slide.title}
                                    </h1>
                                    <p className="my-6 max-w-lg text-lg">{slide.description}</p>
                                </div>
                                <div className="relative z-10 flex w-full justify-end">
                                    <Button
                                        variant="outline"
                                        className="rounded-full group text-md"
                                    >
                                        Get A Quote
                                        <ArrowRight className="size-4 -rotate-45 ml-2 transition-all group-hover:rotate-0 group-hover:ml-3" />
                                    </Button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
