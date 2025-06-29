import React from 'react'

function Products() {
    return (
        <>
            <section>
                <div className="px-10">
                    <div className="flex flex-col space-y-10 md:space-y-16">

                        {/* === IT Solutions === */}
                        <div className="lg:flex lg:gap-x-4">
                            <div className="lg:w-1/2">
                                <div className="mb-6 md:mb-8 lg:mb-0">
                                    <img
                                        src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
                                        alt="IT Solutions"
                                        className="aspect-4/3 w-full rounded-md border border-border object-cover"
                                    />
                                </div>
                            </div>
                            <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
                                <div>
                                    <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                                        Complete IT Solutions
                                    </h3>
                                    <p className="text-muted-foreground lg:text-lg mb-3">
                                        Our comprehensive IT solutions help you navigate the digital landscape with confidence.
                                        We ensure your business stays secure, scalable, and future-ready with services tailored
                                        to your specific needs.
                                    </p>
                                    <ul className="list-disc list-inside text-muted-foreground lg:text-lg space-y-2">
                                        <li>Network setup & infrastructure management</li>
                                        <li>Cloud migration and scalable storage solutions</li>
                                        <li>Data security and disaster recovery</li>
                                        <li>24/7 technical support and maintenance</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* === Brand Development === */}
                        <div className="flex-row-reverse lg:flex lg:gap-x-4">
                            <div className="lg:w-1/2">
                                <div className="mb-6 md:mb-8 lg:mb-0">
                                    <img
                                        src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
                                        alt="Brand Development"
                                        className="aspect-4/3 w-full rounded-md border border-border object-cover"
                                    />
                                </div>
                            </div>
                            <div className="lg:flex lg:w-1/2 lg:items-center lg:pr-24 2xl:pr-32">
                                <div>
                                    <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                                        Brand Development
                                    </h3>
                                    <p className="text-muted-foreground lg:text-lg mb-3">
                                        Build a brand that speaks for itself. We transform your vision into a compelling identity
                                        that captures your audience’s trust and sets you apart from competitors.
                                    </p>
                                    <ul className="list-disc list-inside text-muted-foreground lg:text-lg space-y-2">
                                        <li>Brand strategy and positioning</li>
                                        <li>Logo and visual identity design</li>
                                        <li>Marketing materials and content creation</li>
                                        <li>Consistent brand messaging across channels</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* === Internship Program === */}
                        <div className="lg:flex lg:gap-x-4">
                            <div className="lg:w-1/2">
                                <div className="mb-6 md:mb-8 lg:mb-0">
                                    <img
                                        src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
                                        alt="Internship Program"
                                        className="aspect-4/3 w-full rounded-md border border-border object-cover"
                                    />
                                </div>
                            </div>
                            <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
                                <div>
                                    <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                                        Internship Opportunities
                                    </h3>
                                    <p className="text-muted-foreground lg:text-lg mb-3">
                                        Our internship program bridges the gap between academics and industry experience.
                                        We empower fresh talent with real-world projects, practical training, and career growth.
                                    </p>
                                    <ul className="list-disc list-inside text-muted-foreground lg:text-lg space-y-2">
                                        <li>Hands-on training on live projects</li>
                                        <li>Guidance from experienced professionals</li>
                                        <li>Career development & soft skills workshops</li>
                                        <li>Networking opportunities with industry experts</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Products
