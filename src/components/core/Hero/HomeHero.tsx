import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";

import { RiDoubleQuotesL } from "react-icons/ri";
import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TbExternalLink } from "react-icons/tb";

function HomeHero() {
    return (
        <div className='w-screen overflow-x-hidden'>
            <div aria-hidden="true" className="flex absolute top-44 start-1/2 transform -translate-x-1/2 -z-10">
                <div className="bg-linear-to-l from-red-300/50 to-purple-100 blur-3xl w-100 h-175 rotate-[-60deg] transform -translate-x-40 dark:from-red-900/50 dark:to-purple-900"></div>
                <div className="bg-linear-to-bl from-red-50 via-red-100 to-red-50 blur-3xl w-[1440px] h-200 rounded-fulls origin-top-left -rotate-12 -translate-x-60 dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-red-900/70"></div>
            </div>


            <div className="px-4 sm:px-6 lg:p-8">
                <div className="h-120 md:h-[80dvh] relative flex flex-col bg-[url('/images/Home/herobanner.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl">
                    <div className="bg-white/80 w-full h-full">

                    </div>
                    <section className="mt-24 mb-20 absolute w-full">
                        <div className="w-full mt-16 mb-8 flex items-center justify-center">
                            <h4 className="text-[3.5vw] font-semibold text-center text-neutral-700 text-wrap whitespace-nowrap duration-500 uppercase leading-18">
                                <span className="text-nowrap block">
                                    <Link href={'/'} className="text-[#F75000] font-bold uppercase">Hirebie </Link>
                                    Create
                                    <HoverCard>
                                        <HoverCardTrigger>
                                            <span className="hover:text-[3.7vw] font-extrabold duration-500 px-4 select-none cursor-pointer bg-clip-text text-transparent bg-[url('/images/Home/it.jpg')] bg-center bg-cover uppercase">
                                                IT Solutions
                                            </span>
                                        </HoverCardTrigger>
                                        <HoverCardContent>
                                            <Image
                                                src={"/images/Home/it.jpg"}
                                                alt="Jobboost logo"
                                                width={800}
                                                height={800}
                                                className="w-96 bottom-full border-0"
                                            />
                                        </HoverCardContent>
                                    </HoverCard>
                                </span>
                                <span>
                                    that
                                </span>
                                <span className="text-nowrap px-4">
                                    <HoverCard>
                                        <HoverCardTrigger>
                                            <span className="hover:text-[3.7vw] font-extrabold duration-500 pl-2 select-none cursor-pointer bg-clip-text text-transparent bg-[url('/images/Home/help.jpg')] bg-center bg-cover uppercase">
                                                 Help
                                            </span>
                                        </HoverCardTrigger>
                                        <HoverCardContent className="right-full">
                                            <Image
                                                src={"/images/Home/help.jpg"}
                                                alt="Jobboost logo"
                                                width={800}
                                                height={800}
                                                className="w-96"
                                            />
                                        </HoverCardContent>
                                    </HoverCard>
                                </span>
                                <span>Grow Your</span>
                                <span className="text-nowrap px-4 block">
                                    <HoverCard>
                                        <HoverCardTrigger>
                                            <span className="hover:text-[3.7vw] font-extrabold duration-500 pl-2 select-none cursor-pointer bg-clip-text text-transparent bg-[url('/images/Home/business.jpg')] bg-bottom bg-cover uppercase">
                                                Business
                                            </span>
                                        </HoverCardTrigger>
                                        <HoverCardContent>
                                            <Image
                                                src={"/images/Home/business.jpg"}
                                                alt="Jobboost logo"
                                                width={800}
                                                height={800}
                                                className="w-96"
                                            />
                                        </HoverCardContent>
                                    </HoverCard>
                                </span>
                            </h4>
                        </div>

                        <div className="w-full flex justify-center">
                            <Button className="rounded-full bg-orange-600 p-3 h-auto px-8 text-base gap-2">Get A Quote <span><TbExternalLink className="size-5" /></span> </Button>
                        </div>

                    </section>
                </div>
            </div>
        </div>
    )
}

export default HomeHero
