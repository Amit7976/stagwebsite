import React from "react";
export default function Content() {
    return (
        <section className="dark:bg-black/20 py-20">
            <div className="px-4 md:px-10">
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                    {/* Big Featured Card */}
                    <div className="col-span-1 lg:col-span-2">
                        <div className="group lg:col-span-2 lg:row-span-2 text-card-foreground flex flex-col gap-6 rounded-xl shadow-sm h-full items-start border-2 border-transparent bg-gray-100 dark:bg-neutral-950 p-5 duration-500 hover:border-primary md:p-20">
                            <div className="flex flex-col gap-6">
                                <span className="inline-flex items-center justify-center rounded border-2 px-5 py-1 text-xs font-medium font-sans2 bg-transparent w-fit text-orange-600">
                                    Research
                                </span>
                                <div className="flex flex-col gap-6">
                                    <h3 className="text-2xl font-medium lg:text-6xl leading-tight">
                                        What It Is
                                    </h3>
                                    <p className="text-base md:text-xl lg:font-medium text-muted-foreground">
                                        In today’s digital-first world, a business without a strong online presence is like a store without an entrance. Website & Web App Development Services refer to the complete process of designing, developing, and deploying websites and web-based applications that are tailored to meet the specific needs of businesses, organizations, and individuals.
                                    </p>
                                    <p className="text-base md:text-xl lg:font-medium text-muted-foreground">
                                        A website is often the first touchpoint for potential customers—it showcases your brand, products, and services. A web application, on the other hand, is an interactive platform built to perform specific functions, such as e-commerce portals, booking systems, dashboards, CRMs, or custom tools.
                                    </p><p className="text-base md:text-xl lg:font-medium text-muted-foreground">
                                        At its core, web development involves multiple stages:

                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 flex flex-col gap-5">
                        {/* Small Cards */}
                        {[
                            {
                                badge: "Strategy",
                                title: "Planning & Strategy",
                                desc: "Understanding your business objectives, target audience, and goals.",
                            },
                            {
                                badge: "Design",
                                title: "UI/UX Design",
                                desc: "Creating an intuitive and visually appealing interface that engages users.",
                            },
                            {
                                badge: "Frontend",
                                title: "Frontend Development",
                                desc: "Building the client-facing side using technologies like HTML, CSS, JavaScript, React, Vue, or Angular."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="flex-1">
                                <div className="group text-card-foreground flex flex-col gap-6 rounded-xl shadow-sm h-full items-start border-2 border-transparent bg-gray-100 dark:bg-neutral-950 p-5 duration-500 hover:border-primary">
                                    <div className="flex flex-col gap-6">
                                        <span className="inline-flex items-center justify-center rounded border-2 px-5 py-1 text-xs font-medium font-sans2 bg-transparent w-fit text-orange-600">
                                            {item.badge}
                                        </span>
                                        <div className="flex flex-col gap-6">
                                            <h3 className="text-xl font-medium">{item.title}</h3>
                                            <p className="text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {[

                        {
                            badge: "Backend",
                            title: "Backend Development",
                            desc: "Implementing server-side logic with languages such as Node.js, Python, PHP, or Java, and integrating databases like MySQL, MongoDB, or PostgreSQL."
                        },
                        {
                            badge: "Testing",
                            title: "Testing & Optimization",
                            desc: "Ensuring the website/app works seamlessly on all devices and browsers."
                        },
                        {
                            badge: "Deployment",
                            title: "Deployment & Maintenance",
                            desc: "Launching the project and keeping it up-to-date for security, performance, and scalability."
                        }


                    ].map((item, idx) => (
                        <div key={idx}>
                            <div className="group text-card-foreground flex flex-col gap-6 rounded-xl shadow-sm h-full items-start border-2 border-transparent bg-gray-50 dark:bg-neutral-950 p-5 duration-500 hover:border-primary">
                                <div className="flex flex-col gap-6">
                                    <span className="inline-flex items-center justify-center rounded border-2 px-5 py-1 text-xs font-medium font-sans2 bg-transparent w-fit text-orange-600">
                                        {item.badge}
                                    </span>
                                    <div className="flex flex-col gap-6">
                                        <h3 className="text-xl font-medium">{item.title}</h3>
                                        <p className="text-muted-foreground">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
