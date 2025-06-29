import { Button } from '@/components/ui/button';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";

import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';


function HomeHero() {
    return (
        <>
            <section className="relative h-svh max-h-[1400px] min-h-[600px] w-full bg-[url('/images/Home/abstract_light.png')] dark:bg-[url('/images/Home/abstract_dark.jpg')] bg-cover bg-center bg-no-repeat">
                <div className="relative z-10 mx-auto flex size-full max-w-[125rem] px-4 py-9 pt-60 overflow-hidden">
                    <div className="flex w-full flex-col justify-between gap-10">
                        <div className="flex flex-col items-center justify-center gap-7 mx-auto sm:max-w-[37.5rem] md:max-w-[50rem]">

                            <h2 className='sr-only'>We Create IT Solutions thatHelpGrow Your Business</h2>
                            <div className="text-[3.5vw] font-semibold dark:font-medium text-center text-black dark:text-neutral-400 text-wrap whitespace-nowrap duration-500 text-shadow-lg uppercase leading-18">
                                <span className="text-nowrap block">
                                    <HoverCard>
                                        <HoverCardTrigger href='/' className="font-bold italic font-sans uppercase pr-3">
                                            We
                                        </HoverCardTrigger>
                                        <HoverCardContent>
                                            <Image
                                                src={"/images/logo/logo.svg"}
                                                alt="Jobboost logo"
                                                width={800}
                                                height={800}
                                                className="w-96 h-40 bottom-full border-0"
                                            />
                                        </HoverCardContent>
                                    </HoverCard>
                                    <span>Create</span>
                                    <HoverCard>
                                        <HoverCardTrigger className="text-orange-600 font-bold font-sans uppercase pl-2">
                                            IT Solutions
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
                                        <HoverCardTrigger className="text-orange-600 font-bold uppercase">
                                            Help
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
                                <span className="text-nowrap block">
                                    <HoverCard>
                                        <HoverCardTrigger className="text-[#ff005d] font-bold font-sans uppercase">
                                            Business
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
                            </div>

                            <p className="text-balance text-center text-lg md:text-2xl">We craft exceptional digital solutions that help brands stand out and make a lasting impact in the digital landscape.</p>
                            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                                <Button className="rounded-full bg-orange-600 p-1 h-auto pl-8 text-base gap-2 text-white">Get A Quote <span><FaArrowRight className="size-10 bg-white rounded-full text-orange-600 p-2 -rotate-45" /></span> </Button>
                            </div>
                        </div>
                    </div>
                    {/* Spinning graphics */}
                    <div className="absolute -top-100 -right-120 z-0 hidden h-full w-240 items-center justify-center md:flex">
                        <img
                            className="infinite absolute w-full rotate-12 animate-spin ease-linear opacity-25 invert-25"
                            style={{ animationDuration: "10s" }}
                            src="https://www.shadcnblocks.com/images/block/illustrations/tokyo-solar-system-around-a-smiley.svg"
                            alt=""
                        />
                        <div className="z-10 size-32 rounded-full bg-neutral-200 dark:bg-neutral-700 p-7"></div>
                    </div>

                    <div className="-bottom-80 -left-120 z-0 mt-32 -mb-24 flex h-full w-full items-center justify-center md:absolute md:w-240">
                        <img
                            className="infinite absolute w-full rotate-12 animate-spin ease-linear opacity-25 invert-25"
                            style={{ animationDuration: "10s" }}
                            src="https://www.shadcnblocks.com/images/block/illustrations/tokyo-solar-system-around-a-smiley.svg"
                            alt=""
                        />
                        <div className="z-10 size-32 rounded-full bg-neutral-200 dark:bg-neutral-700 p-7"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeHero