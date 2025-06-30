"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter
} from "@/components/ui/card";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

// testimonialsData.js
export const testimonials = [
    {
        name: "John Doe",
        title: "CEO & Founder",
        image: "/images/logo/logo.svg",
        quote: "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat."
    },
    {
        name: "Jane Doe",
        title: "CTO",
        image: "/images/logo/logo.svg",
        quote: "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat."
    },
    {
        name: "John Smith",
        title: "COO",
        image: "/images/logo/logo.svg",
        quote: "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat."
    },
    {
        name: "Jane Smith",
        title: "Tech Lead",
        image: "/images/logo/logo.svg",
        quote: "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat."
    },
    {
        name: "Richard Doe",
        title: "Designer",
        image: "/images/logo/logo.svg",
        quote: "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat."
    },
    {
        name: "Gordon Doe",
        title: "Developer",
        image: "/images/logo/logo.svg",
        quote: "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat."
    },
];

export default function Testimonial() {
    return (
        <section className="overflow-hidden">
            <div className="max-w-5xl mx-auto flex flex-col items-start md:items-center gap-3 md:gap-6 px-4">
                <h2 className="mb-2 text-center text-3xl font-semibold lg:text-6xl">
                    Our happy <span className="text-orange-600">Clients</span>
                </h2>
                <p className="text-muted-foreground text-center lg:text-lg">
                    All of our 1000+ clients are happy
                </p>
                <Button className="rounded-full bg-orange-600 p-1 h-auto pl-8 text-base gap-2 text-white">Get A Quote <span><FaArrowRight className="size-10 bg-white rounded-full text-orange-600 p-2 -rotate-45" /></span> </Button>
            </div>

            <div className="mt-16 w-full overflow-hidden">
                <div className="flex whitespace-nowrap animate-marquee gap-8">
                    {testimonials.concat(testimonials).map((item, index) => (
                        <Card key={index} className="shadow-sm min-w-96 py-6 px-0 select-none border-gray-300 dark:border-neutral-800">
                            <CardContent className="mb-4 flex gap-4">
                                <span data-slot="avatar" className="relative flex shrink-0 overflow-hidden h-9">
                                    <Image
                                        width={40}
                                        height={40}
                                        src={item.image}
                                        alt={item.name}
                                        className="object-cover"
                                    />
                                </span>
                                <div className="text-sm">
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="text-muted-foreground">{item.title}</p>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <q className="whitespace-pre-wrap">{item.quote}</q>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
            <div className="mt-6 w-full overflow-hidden">
                <div className="flex whitespace-nowrap animate-marquee2 gap-8">
                    {testimonials.concat(testimonials).map((item, index) => (
                        <Card key={index} className="shadow-sm min-w-96 py-6 px-0 select-none border-gray-300 dark:border-neutral-800">
                            <CardContent className="mb-4 flex gap-4">
                                <span data-slot="avatar" className="relative flex shrink-0 overflow-hidden h-9">
                                    <Image
                                        width={40}
                                        height={40}
                                        src={item.image}
                                        alt={item.name}
                                        className="object-cover"
                                    />
                                </span>
                                <div className="text-sm">
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="text-muted-foreground">{item.title}</p>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <q className="whitespace-pre-wrap">{item.quote}</q>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

            <style jsx>{`
.animate-marquee {
    display: inline-flex;
    animation: marquee 40s linear infinite;
    }
    
    @keyframes marquee {
        0% {
            transform: translateX(0%);
            }
            100% {
                transform: translateX(-50%);
                }
                }

                .animate-marquee2 {
                  display: inline-flex;
                  animation: marquee2 40s linear infinite;
                }
        @keyframes marquee2 {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
        </section>
    );
}
