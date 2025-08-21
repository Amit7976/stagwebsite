
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
                                        Deep Discovery
                                    </h3>
                                    <p className="text-base md:text-xl lg:font-medium text-muted-foreground">
                                        Before we start building anything, we dive deep to understand your business
                                        from every angle, your goals, target audience, industry trends, and your unique challenges.
                                        This discovery phase helps us uncover real opportunities and align our strategy
                                        with your long-term vision, so we lay a rock-solid foundation for everything that follows.
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
                                title: "Smart Strategy",
                                desc: "We plan custom solutions that actually work for you.",
                            },
                            {
                                badge: "Design",
                                title: "Creative Design",
                                desc: "We craft beautiful designs that stand out and convert.",
                            },
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
                            badge: "Develop",
                            title: "Agile Development",
                            desc: "Our  build robust, scalable digital solutions tailored to your evolving business needs. From custom web apps to complex system integrations, we work in agile sprints to deliver faster, adapt quickly, and keep you involved every step of the way."
                        },
                        {
                            badge: "Marketing",
                            title: "Data-Driven Marketing",
                            desc: "Our team tracks audience insights, optimizes ad spend, and fine-tunes strategies to maximize ROI. The result? Marketing that reaches the right people and delivers measurable growth for your brand."
                        },
                        {
                            badge: "Support",
                            title: "Ongoing Support & Growth",
                            desc: "We stay by your side with dedicated support, regular performance reviews, and proactive updates to keep your digital products secure, up-to-date, and growing along with your business ambitions."
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
