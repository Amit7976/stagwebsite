import Image from 'next/image';
import React from 'react'
import { GrTechnology } from 'react-icons/gr'
import { MdOutlineSupportAgent } from 'react-icons/md';
import { SiTailscale } from "react-icons/si";
export default function Section1() {
    return (
        <>
            <section className="px-4 md:px-10">
                <div className="mb-12 flex flex-col lg:flex-row items-center lg:gap-10 lg:px-5">
                    <h2 className="text-3xl md:text-6xl font-medium">Digital Solutions That Grow <span className="text-orange-600 font-semibold">With You</span></h2>
                    <p className="mt-4 text-muted-foreground text-xl">
                        From custom-built products to long-term partnerships and future-proof architectures, we ensure your business stays ready for what’s next - every step of the way.
                    </p>
                </div>
                <div className="mt-12 mb-6 flex flex-col gap-6 xl:flex-row">

                    {/* <!-- Card 1 --> */}
                    <div className="flex w-full flex-col justify-between overflow-hidden rounded-2xl border-2 bg-gray-100 dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 md:px-12 md:pt-10 text-card-foreground shadow-sm">
                        <div className="md:mb-12 flex flex-col gap-3 p-4 pb-6 md:p-0">
                            <GrTechnology className='size-5' />
                            <h4 className="text-xl font-semibold">Custom Solutions</h4>
                            <p className="text-base font-normal text-muted-foreground">
                                We craft tailor-made digital products that align perfectly with your vision, solving real business problems with precision.
                            </p>
                        </div>
                        <Image width={600} height={600} src="/images/work/customSolution.jpg" alt="Custom Solutions" className="max-h-52 w-full md:rounded-t-md object-cover shadow-[0_0_10px_rgb(0,0,0,0.2)]" />
                    </div>

                    {/* <!-- Card 2 --> */}
                    <div className="w-full overflow-hidden rounded-2xl border-2 bg-gray-100 dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 text-card-foreground shadow-sm">
                        <div className="md:px-12 xl:pl-0">
                            <Image width={600} height={600} src="/images/work/support.jpg" alt="Partnership" className="max-h-48 w-full md:rounded-br-md object-cover shadow-[0_0_10px_rgb(0,0,0,0.2)]" />
                        </div>
                        <div className="flex flex-2 w-full flex-col p-4 pt-6 md:p-10 md:gap-3">
                            <MdOutlineSupportAgent className='size-6' />
                            <h4 className="text-xl font-semibold">Long Term Support</h4>
                            <p className="text-base font-normal text-muted-foreground">
                                We stay connected after delivery — offering regular updates, improvements & support to help you keep growing.
                            </p>
                        </div>
                    </div>

                </div>

                {/* <!-- Card 3 --> */}
                <div className="flex w-full flex-col items-center justify-center md:gap-6 overflow-hidden rounded-2xl border-2 bg-gray-100 dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 text-card-foreground shadow-sm md:flex-row">
                    <div className="flex flex-col gap-3 p-4 pb-6 md:p-10 flex-3">
                        <SiTailscale className='size-6' />
                        <h4 className="text-xl font-semibold">Scalable by Design</h4>
                        <p className="text-base font-normal text-muted-foreground">
                            Our solutions are built to evolve with your business. From the start, we focus on modular architectures, future-proof tech stacks, and flexible workflows that adapt to new challenges as you grow.
                        </p>
                        <p className="text-base font-normal text-muted-foreground">
                            Whether you’re expanding your user base, adding new features, or entering new markets, our development approach ensures you can scale efficiently without compromising performance, security, or user experience.
                        </p>
                    </div>
                    <div className="w-full pl-12 md:pt-12 flex-2">
                        <Image width={600} height={600} src="/images/work/ScalableDesign.png" alt="Scalable" className="max-h-96 w-full rounded-tl-md object-cover shadow-[0_0_10px_rgb(0,0,0,0.2)]" />
                    </div>
                </div>
            </section>

        </>
    )
}