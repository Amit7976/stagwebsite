"use client";
import {
    Card,
    CardContent,
    CardFooter
} from "@/components/ui/card";
import { LoaderLink } from "@/components/ui/loaderLinks";
import { TestimonialType } from "@/models/TestimonialModel";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function Testimonial() {

      const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);
      const [loading, setLoading] = useState(true);
    
      const fetchTestimonials = async () => {
        try {
          const res = await fetch("/api/testimonials");
          const data = await res.json();
          if (data.success) {
            setTestimonials(data.data);
          }
        } catch (error) {
          console.error("Error fetching Testimonials:", error);
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        fetchTestimonials();
      }, []);
    
    
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
      if (loading) {
        return (
          <div className="flex items-center justify-center h-96 col-span-2">
            <div className="loader"></div>
          </div>
        )
      }
    
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    
    
    return (
        <section className="overflow-hidden">
            <div className="max-w-5xl mx-auto flex flex-col items-start md:items-center gap-3 md:gap-6 px-4">
                <h2 className="mb-2 text-center text-3xl font-semibold lg:text-6xl">
                    Our happy <span className="text-orange-600">Clients</span>
                </h2>
                <p className="text-muted-foreground text-center text-xl font-medium">
                    All of our 1000+ clients are happy
                </p>
               <LoaderLink href="/s/contact" className="flex items-center rounded-full bg-orange-600 p-1 h-auto pl-8 text-base gap-2 text-white">Get A Quote <span><FaArrowRight className="size-10 bg-white rounded-full text-orange-600 p-2 -rotate-45" /></span> </LoaderLink>
            </div>

            <LoaderLink href="/s/testimonials" className="mt-16 w-full overflow-hidden">
                <div className="flex whitespace-nowrap animate-marquee gap-8">
                    {testimonials.concat(testimonials).map((item, index) => (
                        <Card key={index} className="shadow-sm min-w-96 py-6 px-0 select-none border-gray-300 dark:border-neutral-800">
                            <CardContent className="flex gap-4">
                                <span data-slot="avatar" className="relative flex shrink-0 overflow-hidden h-9">
                                    <Image
                                        width={100}
                                        height={40}
                                        src={item.companyLogo}
                                        alt={item.companyName}
                                        className="object-contain"
                                    />
                                </span>
                                <div className="text-sm">
                                    <p className="font-semibold">{item.companyName}</p>
                                    <p className="text-muted-foreground">{item.authorTitle}</p>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <q className="whitespace-pre-wrap">{item.content}</q>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </LoaderLink>
            <div className="mt-6 w-full overflow-hidden">
                <div className="flex whitespace-nowrap animate-marquee2 gap-8">
                    {testimonials.concat(testimonials).map((item, index) => (
                        <Card key={index} className="shadow-sm min-w-96 py-6 px-0 select-none border-gray-300 dark:border-neutral-800">
                            <CardContent className="flex gap-4">
                                <span data-slot="avatar" className="relative flex shrink-0 overflow-hidden h-9">
                                    <Image
                                        width={100}
                                        height={40}
                                        src={item.companyLogo}
                                        alt={item.companyName}
                                        className="object-contain"
                                    />
                                </span>
                                <div className="text-sm">
                                    <p className="font-semibold">{item.companyName}</p>
                                    <p className="text-muted-foreground">{item.authorTitle}</p>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <q className="whitespace-pre-wrap">{item.content}</q>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

            <style jsx>{`
.animate-marquee {
    display: inline-flex;
    animation: marquee 100s linear infinite;
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
                  animation: marquee2 80s linear infinite;
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
