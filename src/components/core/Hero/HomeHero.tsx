import { Button } from '@/components/ui/button';
import { FaArrowRight } from 'react-icons/fa6';
import HomeHeroHeading from './HomeHeroHeading';
export default function HomeHero() {
    return (
        <>
            <section className="relative md:h-svh max-h-[1400px] md:min-h-[600px] w-full bg-[url('/images/Home/abstract_light.png')] dark:bg-[url('/images/Home/abstract_dark.jpg')] bg-cover bg-center bg-no-repeat">
                <div className="relative z-10 mx-auto flex size-full max-w-[125rem] px-2 md:px-4 py-9 pt-40 md:pt-60 overflow-hidden">
                    <div className="flex w-full flex-col justify-between gap-10">
                        <div className="flex flex-col items-center justify-center gap-7 mx-auto sm:max-w-[37.5rem] md:max-w-[50rem] z-10">

                            <HomeHeroHeading />

                            <p className="md:text-balance text-center text-lg md:text-2xl text-neutral-700 dark:text-gray-300 font-medium">We craft exceptional digital solutions that help brands stand out and make a lasting impact in the digital landscape.</p>
                            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                                <Button className="rounded-full bg-orange-600 p-1 h-auto pl-8 text-base gap-2 hover:bg-orange-700 text-white">Get A Quote <span><FaArrowRight className="size-10 bg-white rounded-full text-orange-600 p-2 -rotate-45" /></span> </Button>
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

                    <div className="left-0 md::-bottom-80 md:-left-120 z-0 mt-32 -mb-24 flex h-full w-full items-center justify-center absolute md:w-240">
                        <img
                            className="infinite absolute w-full rotate-12 animate-spin ease-linear opacity-25 invert-25"
                            style={{ animationDuration: "10s" }}
                            src="https://www.shadcnblocks.com/images/block/illustrations/tokyo-solar-system-around-a-smiley.svg"
                            alt=""
                        />
                        <div className="z-10 size-32 rounded-full bg-neutral-200 dark:bg-neutral-950 p-7"></div>
                    </div>
                </div>
            </section>
        </>
    )
}
