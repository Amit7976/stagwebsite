import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

import {
    CopyCheck,
    DollarSign,
    MessagesSquare,
} from "lucide-react";
import Image from "next/image";

export default function MainFeatures() {
    return (
        <section className="">
            <div className="">
                <div className="px-20 grid gap-40 lg:grid-cols-2">
                    {/* Left Column - Accordion */}
                    <div>
                        <Badge className="mb-4">Platform</Badge>
                        <h1 className="mb-8 text-3xl font-medium lg:text-5xl">
                            Build your own platform
                        </h1>

                        <Accordion type="single" collapsible defaultValue="item-1">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    <div className="flex items-center gap-2">
                                        <span className="flex size-9 items-center justify-center rounded-lg bg-muted">
                                            <CopyCheck className="w-5" />
                                        </span>
                                        <span className="font-medium lg:text-lg">
                                            Can I use this for commercial projects?
                                        </span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    Yes, all blocks are yours to use.
                                    <div className="mt-8 h-px bg-muted">
                                        <div
                                            className="h-px animate-progress bg-primary"
                                            style={{ animationDuration: "8000ms" }}
                                        ></div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger>
                                    <div className="flex items-center gap-2">
                                        <span className="flex size-9 items-center justify-center rounded-lg bg-muted">
                                            <DollarSign className="w-5" />
                                        </span>
                                        <span className="font-medium lg:text-lg">
                                            Are there any hidden fees?
                                        </span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    Nope, no hidden fees here 🚀
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>
                                    <div className="flex items-center gap-2">
                                        <span className="flex size-9 items-center justify-center rounded-lg bg-muted">
                                            <DollarSign className="w-5" />
                                        </span>
                                        <span className="font-medium lg:text-lg">
                                            Are there any hidden fees?
                                        </span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    Nope, no hidden fees here 🚀
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger>
                                    <div className="flex items-center gap-2">
                                        <span className="flex size-9 items-center justify-center rounded-lg bg-muted">
                                            <MessagesSquare className="w-5" />
                                        </span>
                                        <span className="font-medium lg:text-lg">
                                            Do you provide support?
                                        </span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    Yes! Our support team is here to help you.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    {/* Right Column - Carousel (static for now) */}

                    <div className="pl-4 h-96 bg-neutral-100 dark:bg-neutral-900 col-span-1 p-4 rounded-4xl">
                        <Image
                            width={400}
                            height={400}
                            src="/images/logo_icons/icon.svg"
                            alt="placeholder"
                            className="object-contain w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
