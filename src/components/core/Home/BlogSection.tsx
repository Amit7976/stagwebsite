"use client"
import { Skeleton } from '@/components/ui/skeleton';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { Blog } from "@/lib/utils";
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// PLACEHOLDER FOR LATEST BLOGS
function LatestBlogPlaceholder() {
    return (
        <div className="flex items-center space-x-4 w-full overflow-hidden">
            <Skeleton className="w-full size-20 rounded-xl flex-shrink-0" />
            <div className="w-full">
                <div className="space-y-2 w-full">
                    <Skeleton className="h-3 w-full rounded-full" />
                    <Skeleton className="h-3 w-1/2 rounded-full" />
                </div>
                <div className="space-y-2 w-full pt-1">
                    <Skeleton className="h-2 w-full rounded-full" />
                    <Skeleton className="h-2 w-2/3 rounded-full" />
                </div>
            </div>
        </div>
    );
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  
export default function BlogSection() {

    // FETCH 5 LATEST BLOGS
    const [latestBlogs, setLatestBlogs] = useState<Blog[]>([])
    const [latestBlogsLoading, setLatestBlogsLoading] = useState(true);

    const fetchLatestBlogs = async () => {
        try {
            const response = await axios.get('/api/blogs/latestBlogs');
            setLatestBlogs(response.data.latestBlogs);
            // console.log(response.data.latestBlogs);

        } catch (error) {
            console.error('Error fetching blogs:', error);
        } finally {
            setLatestBlogsLoading(false);
        }
    }

    useEffect(() => {
        fetchLatestBlogs();
    }, []);


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    return (
        <section>
            <div className="px-2 md:px-10">
                <h1 className="mb-12 max-w-xl text-4xl font-bold tracking-tight text-foreground lg:text-6xl pl-2 lg:pl-0">
                    Our <span className="text-orange-600">Blogs</span>
                </h1>
                <div className="flex flex-col gap-24">
                    {latestBlogs.slice(0, 3).map((blog, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-0 lg:gap-16 lg:flex-row"
                        >
                            {/* Image */}
                            <Link href={`/s/blogs/${blog.category}/${blog._id}`} className="flex lg:h-60 w-full lg:w-96 shrink-0 items-center justify-center overflow-hidden">
                                <Image
                                    width={600}
                                    height={600}
                                    src={blog.image}
                                    alt={blog.title}
                                    className="lg:h-60 w-full object-cover rounded-3xl bg-muted"
                                />
                            </Link>

                            {/* Card */}
                            <Card className="flex flex-col gap-6 border-none shadow-none bg-transparent text-card-foreground py-6 rounded-xl">
                                <CardContent className="p-0">
                                    <div className="mb-5 flex lg:h-90 flex-col lg:flex-row items-start border-b py-3 lg:py-10 lg:mb-0 lg:gap-32 lg:border-t border-neutral-800">
                                        <div className="flex h-full w-full flex-col items-start justify-between pr-8">
                                            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground">
                                                {blog.title}
                                            </h2>
                                            <p className="mt-3 text-sm font-semibold tracking-widest uppercase text-muted-foreground">
                                                {new Date(blog.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", })}
                                            </p>
                                        </div>
                                        <div className="flex h-full w-full flex-col items-start justify-between gap-6 mt-3 lg:mt-0">
                                            <p className="text-lg lg:text-xl font-normal leading-relaxed tracking-tight text-muted-foreground">
                                                {blog.shortDescription}
                                            </p>
                                            <button className="inline-flex items-center gap-4 text-primary hover:gap-6 transition-all">
                                                <a
                                                    href={`/s/blogs/${blog.category}/${blog._id}`}
                                                    className="text-lg font-semibold tracking-tight"
                                                >
                                                    Read
                                                </a>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-arrow-right"
                                                >
                                                    <path d="M5 12h14"></path>
                                                    <path d="m12 5 7 7-7 7"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
