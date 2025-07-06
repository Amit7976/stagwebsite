// components/WorkRolesSection.jsx
import { ArrowRight, Atom, BarChart3, Cable, CalendarCheck, Handshake, MessageCircle, PanelsLeftRight, Repeat, ShieldCheck, Users, Workflow, Wrench } from "lucide-react";

export default function WorkRolesSection() {
    const workRoles = [
        {
            title: "Development Time",
            desc: "We design, build & deliver with you. From day one to launch, we act as your extended tech team.",
            links: [
                { text: "See how we build", href: "#processSteps" },
            ],
            iconBlocks: [
                {
                    icon: <Workflow className="w-8 h-8 shrink-0 text-primary" />,
                    title: "Agile & Collaborative",
                },
                {
                    icon: <Cable className="w-8 h-8 shrink-0 text-primary" />,
                    title: "Integrated with Your Workflow",
                },
                {
                    icon: <Atom className="w-8 h-8 shrink-0 text-primary" />,
                    title: "Quality at Every Stage",
                },
                {
                    icon: <MessageCircle className="w-8 h-8 shrink-0 text-primary" />,
                    title: "Transparent Communication",
                },
                {
                    icon: <PanelsLeftRight className="w-8 h-8 shrink-0 text-primary" />,
                    title: "Scalable Architecture Planning",
                },
                {
                    icon: <CalendarCheck className="w-8 h-8 shrink-0 text-primary" />,
                    title: "On-Time Delivery Guarantees",
                },
            ],
        },
        {
            title: "After Delivery",
            desc: "Launch is just the start! We stay with you to maintain, update & help your business evolve.",
            links: [
                { text: "Learn about our support", href: "#" },
            ],
            iconBlocks: [
                {
                    icon: <Repeat className="w-8 h-8 shrink-0 text-primary" />,
                    title: "Proactive Updates",
                },
                {
                    icon: <Wrench className="w-8 h-8 shrink-0 text-primary" />,
                    title: "Ongoing Maintenance",
                },
                {
                    icon: <ShieldCheck className="w-8 h-8 shrink-0 text-primary" />,
                    title: "Security & Compliance",
                },
                {
                    icon: <Handshake className="w-8 h-8 shrink-0 text-primary" />,
                    title: "Long-Term Partnership",
                },
                {
                    icon: <Users className="w-8 h-8 shrink-0 text-primary" />,
                    title: "Dedicated Support Team",
                },
                {
                    icon: <BarChart3 className="w-8 h-8 shrink-0 text-primary" />,
                    title: "Monthly Performance Reviews",
                },
            ],
        },
    ];

    return (
        <section className="">
            <div className="px-10">
                <div className="mb-12 text-center gap-10 px-5">
                    <h2 className="text-3xl md:text-6xl font-medium">Tech & <span className="text-orange-600 font-semibold">Support</span></h2>
                    <p className="mt-4 text-muted-foreground text-xl">From agile development to continuous updates and dedicated support</p>
                </div>
                <div className="grid lg:grid-cols-2 border-2 border-gray-200 dark:border-neutral-800 divide-gray-200 dark:divide-neutral-800 rounded-xl divide-x-2">
                    {workRoles.map((role, i) => (
                        <div key={i} className="p-6 md:p-12 md:pb-5 flex flex-col gap-6">
                            <h2 className="text-3xl font-semibold md:text-4xl">{role.title}</h2>
                            <p className="text-lg text-muted-foreground">{role.desc}</p>

                            <div className="flex flex-col gap-4">
                                {role.links.map((link, i) => (
                                    <a key={i} href={link.href} className="flex items-center gap-2 text-lg font-medium">
                                        {link.text} <ArrowRight className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>

                            <div className="mt-6 flex flex-col">
                                {role.iconBlocks.map((block, i) => (
                                    <div key={i} className={`flex items-start gap-5 py-6 ${(i != 5) && (i != 0) ? "border-y border-dashed border-neutral-600" : ""}`}>
                                        {block.icon}
                                        <div>
                                            <p className="font-medium">{block.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
