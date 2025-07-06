import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'

export default function Projects() {
    return (
        <>
            <section className="px-4 md:px-10">
                <div className="text-left mb-14">
                    <h2 className="mb-4 text-3xl font-semibold lg:text-6xl">
                        Top <span className="text-orange-600">Details</span>
                    </h2>
                    <Button variant={'ghost'} className="rounded-full bg-orange-600 p-1 h-auto pl-8 text-base gap-2 text-white">Get A Quote <span><FaArrowRight className="size-10 bg-white rounded-full text-orange-600 p-2 -rotate-45" /></span> </Button>
                </div>
                <div className="relative z-10 mt-8 grid grid-cols-1 gap-6 md:grid-cols-5">

                    {/* === Geo Radius News Application === */}
                    <div className="bg-gray-100 dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 text-card-foreground rounded-xl border-2 col-span-1 shadow-xl flex flex-col pl-6 py-6 overflow-hidden md:col-span-3 md:flex-row gap-6 md:gap-12">
                        <div className="flex-1 flex flex-col justify-between">
                            <h4 className="font-semibold text-3xl">Geo Radius News <br /> Application</h4>
                            <p className="text-muted-foreground text-sm font-medium mt-2">
                                Jan 2025 - Jun 2025
                            </p>
                            <p className="text-muted-foreground text-sm font-medium mt-2">
                                Associated with Manipal University Jaipur
                            </p>
                            <p className="text-muted-foreground mt-3 text-base leading-snug font-medium">
                                Geo Radius News is more than just a news platform; it gives voice to local people and
                                makes sure people in power notice and make required changes. Real-time reporting and
                                verifications keep people informed, and inaccurate info is filtered easily. From sudden
                                road closures to lost pets or emergency alerts — the app ensures vital information reaches
                                those who need it most, saving time and money.
                            </p>
                            <Link
                                href="https://georadiusnews.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block text-primary font-semibold"
                            >
                                Live Link
                            </Link>
                        </div>
                        <div className="flex-1 relative w-full my-auto overflow-hidden rounded-l-xl h-2/3">
                            <Image
                                width={600}
                                height={600}
                                src="/images/work/geo-radius-news.png"
                                alt="Geo Radius News"
                                className="object-left object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    {/* === Cateress.com === */}
                    <div className="bg-gray-100 dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 text-card-foreground gap-6 rounded-xl border-2 py-6 col-span-1 shadow-xl md:col-span-2 flex flex-col justify-center">
                        <div className="px-6">
                            <h4 className="font-semibold text-3xl">Cateress Company <br /> Website</h4>
                            <p className="text-muted-foreground text-sm font-medium mt-2">
                                Mar 2023 - Apr 2023
                            </p>
                            <p className="text-muted-foreground text-sm font-medium mt-2">
                                For Catererss
                            </p>
                            <p className="text-muted-foreground mt-3 text-base leading-snug font-medium">
                                Led the design and development of catererss.com. Role: Lead Developer.
                                Worked closely with the owner to create a dynamic site. Achieved a 30%
                                traffic increase in the first month. Positive feedback on UX and design.
                            </p>
                            <Link
                                href="https://amit7976.github.io/Catererss"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block text-primary font-semibold"
                            >
                                Live Link
                            </Link>
                        </div>
                        <div className="px-6 flex items-center justify-center">
                            <Image
                                width={600}
                                height={600}
                                src="/images/work/catererss.jpeg"
                                alt="Cateress.com"
                                className="object-cover aspect-[2/1.1] rounded-xl"
                            />
                        </div>
                    </div>

                    {/* === Random Chat Web Application === */}
                    <div className="bg-gray-100 dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 text-card-foreground flex flex-col gap-6 rounded-xl border-2 py-6 col-span-1 shadow-xl md:col-span-2">
                        <div className="px-6">
                            <Image
                                width={600}
                                height={600}
                                src="/images/work/quricky.jpeg"
                                alt="Random Chat App"
                                className="object-cover aspect-[2/1] rounded-xl mb-6"
                            />
                            <h4 className="font-semibold text-3xl">Quricky <br /> Application</h4>
                            <p className="text-muted-foreground text-sm font-medium mt-3">
                                Mar 2024 - Apr 2024
                            </p>
                            <p className="text-muted-foreground text-sm font-medium mt-2">
                                For Quricky
                            </p>
                            <p className="text-muted-foreground mt-3 text-base leading-snug font-medium">
                                This chat app works without Socket.io/WebSocket, making it efficient and scalable.
                                Stores chat data locally for offline access. Unique random matching connects users instantly.
                                Advanced features: emojis, GIFs, image uploads, message search.
                            </p>
                        </div>
                    </div>

                    {/* === Roadmint === */}
                    <div className="bg-gray-100 dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 text-card-foreground flex flex-col gap-6 rounded-xl border-2 p-6 pb-0 col-span-1 shadow-xl overflow-hidden md:col-span-3">
                        <div className="px-0">
                            <h4 className="font-semibold text-3xl">Roadmint <br /> Application</h4>
                            <p className="text-muted-foreground text-sm font-medium mt-2">
                                Jun 2025
                            </p>
                            <p className="text-muted-foreground text-sm font-medium mt-2">
                                For Roadmint
                            </p>
                            <p className="text-muted-foreground mt-3 text-base leading-snug font-medium">
                                Personalized, day-wise learning roadmaps for any topic. No login, free, and instant.
                                Generate structured plans, track progress, export roadmap - no nonsense, just learning.
                            </p>
                            <Link
                                href="https://roadmint.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block text-primary font-semibold"
                            >
                                Live Link
                            </Link>
                        </div>
                        <div className="relative mt-0 ml-8 w-full h-full overflow-hidden md:mx-auto rounded-t-xl">
                            <Image
                                width={600}
                                height={600}
                                src="/images/work/roadmint_pc.jpeg"
                                alt="Roadmint"
                                className="object-cover object-top w-full absolute"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}