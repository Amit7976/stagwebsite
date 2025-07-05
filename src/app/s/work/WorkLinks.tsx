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
            heading: "Cateress",
            link: "https://amit7976.github.io/Catererss",
            image: "/images/work/catererss.jpeg",
        },
        {
            heading: "Cateress",
            link: "https://amit7976.github.io/Catererss",
            image: "/images/work/catererss.jpeg",
        },
        {
            heading: "Cateress",
            link: "https://amit7976.github.io/Catererss",
            image: "/images/work/catererss.jpeg",
        },
    ];

    return (
        <section className="py-32">
            <div className="px-10">
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {works.map((work, i) => (
                        <Link
                            key={i}
                            href={work.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="before:content-[] relative min-h-auto w-full overflow-hidden rounded-[.5rem] bg-cover bg-center bg-no-repeat p-5 transition-all duration-300 before:absolute before:top-0 before:left-0 before:z-10 before:block before:size-full before:bg-black/50 before:transition-all before:duration-300 hover:before:bg-black/30 h-72"
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
