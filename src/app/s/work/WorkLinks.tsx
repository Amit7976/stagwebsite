import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function WorkLinks() {
    const works = [
        {
            heading: "Roadmint",
            link: "https://roadmint.vercel.app/",
            image: "/images/work/roadmint_pc.jpeg",
        },
        {
            heading: "GeoRadius",
            link: "https://georadiusnews.vercel.app/",
            image: "/images/work/geo-radius-news.png",
        },
        {
            heading: "Cateress",
            link: "https://amit7976.github.io/Catererss",
            image: "/images/work/catererss.jpeg",
        },
        {
            heading: "Portfolio",
            link: "https://portfolio-amit7976s-projects.vercel.app",
            image: "/images/work/portfolio.jpeg",
        },
        {
            heading: "Personal Gym",
            link: "https://amit7976.github.io/Personal_Gym_Trainer",
            image: "/images/work/personal_gym.jpeg",
        },
        {
            heading: "TrandyClothes",
            link: "https://amit7976.github.io/TrandyClothes",
            image: "/images/work/trandy_clothes.jpeg",
        },
        {
            heading: "Event List",
            link: "https://eventlist-delta.vercel.app",
            image: "/images/work/event_list.jpeg",
        },
        {
            heading: "Blog Website",
            link: "https://blog-website-next-app.vercel.app",
            image: "/images/work/blog.jpeg",
        },
        {
            heading: "User Management",
            link: "https://user-management-mu-two.vercel.app",
            image: "/images/work/user-management.png",
        },
        {
            heading: "Password Generator Chrome Extension",
            link: "#",
            image: "/images/work/Advance-Password-Generator.png",
        },
    ];

    return (
        <section className="">
            <div className="px-10">
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2">
                    {works.map((work, i) => (
                        <Link
                            key={i}
                            href={work.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="before:content-[] relative min-h-auto w-full overflow-hidden rounded-3xl bg-cover bg-top bg-no-repeat p-5 transition-all duration-500 before:absolute before:top-0 before:left-0 before:z-10 before:block before:size-full before:bg-black/10 before:transition-all before:duration-300 hover:before:bg-black/40 h-96 border-2 border-gray-200 hover:border-black dark:border-neutral-800 dark:hover:border-white"
                            style={{ backgroundImage: `url(${work.image})` }}
                        >
                            <div className="relative z-20 flex size-full flex-col justify-end">
                                <div className="flex w-full flex-col gap-4">
                                    <div className="text-white text-2xl font-semibold">
                                        {work.heading}
                                    </div>
                                    {/* <Button variant="outline" className="w-fit px-10">
                                        Live View
                                    </Button> */}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WorkLinks;
