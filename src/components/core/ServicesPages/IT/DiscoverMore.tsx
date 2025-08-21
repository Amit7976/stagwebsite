import { LoaderLink } from "@/components/ui/loaderLinks";
import { Megaphone, Rocket, Bug, Search, Code2, Database, Server, ShieldCheck } from "lucide-react";

export default function DiscoverMore() {
    const services = [
        { icon: Megaphone, label: "Marketing" },
        { icon: Rocket, label: "Deployment" },
        { icon: Bug, label: "Testing" },
        { icon: Search, label: "SEO" },
        { icon: Code2, label: "Development" },
        { icon: Database, label: "Database" },
        { icon: Server, label: "Hosting" },
        { icon: ShieldCheck, label: "Security" },
    ];

    return (
        <section className="relative bg-background py-24 md:py-40">
            <div className="relative z-0 container">
                <div className="flex w-full flex-col items-center gap-8">
                    {/* Icons Grid */}
                    <div className="w-full max-w-[43.125rem]">
                        <div className="w-full max-w-[43.125rem]">
                            <LoaderLink href="/s/services" className="flex w-full items-end justify-center gap-[2.8%]">
                                <div className="relative w-full max-w-[8.25rem] origin-bottom scale-[.83] overflow-hidden rounded-[20%] border border-neutral-0 dark:border-stone-800 bg-neutral-0 dark:bg-stone-900 opacity-70 shadow-[inset_0_1px_1px_0_var(--color-stone-200)] dark:shadow-[inset_0_1px_1px_0_var(--color-stone-700)] blur-[3px] before:absolute before:top-0 before:left-0 before:z-10 before:block before:size-full before:bg-linear-to-tr before:from-stone-150 dark:before:from-stone-950 before:to-transparent before:content-['']">
                                    <div>
                                        <div data-slot="aspect-ratio" className="flex">
                                            <Megaphone className="p-8 dark:p-6 w-40 h-30 text-neutral-500 dark:text-neutral-300" />
                                        </div>    </div>
                                </div>
                                <div className="relative w-full max-w-[8.25rem] origin-bottom scale-90 overflow-hidden rounded-[20%] border border-neutral-0 bg-neutral-0 dark:border-stone-900 dark:bg-stone-900 shadow-[inset_0_1px_1px_0_var(--color-stone-200)] dark:shadow-[inset_0_1px_1px_0_var(--color-stone-700)] before:absolute before:top-0 before:left-0 before:z-10 before:block before:h-full before:w-full before:bg-linear-to-tr before:from-white/50 dark:before:from-black/50 before:to-transparent before:content-['']">
                                    <div>
                                        <div data-slot="aspect-ratio" className="flex">
                                            <Rocket className="p-8 dark:p-6 w-40 h-30 text-neutral-500 dark:text-neutral-300" />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full max-w-[8.25rem] overflow-hidden rounded-[20%] border border-neutral-0 dark:border-stone-800 bg-neutral-0 dark:bg-stone-900 shadow-[inset_0_1px_1px_0_var(--color-stone-200)] dark:shadow-[inset_0_1px_1px_0_var(--color-stone-700)]">
                                    <div>
                                        <div data-slot="aspect-ratio" className="flex">
                                            <Bug className="p-8 dark:p-6 w-40 h-30 text-neutral-500 dark:text-neutral-300" />
                                        </div>
                                    </div>
                                </div>
                                <div className="relative w-full max-w-[8.25rem] origin-bottom scale-90 overflow-hidden rounded-[20%] border border-neutral-0 bg-neutral-0 dark:border-stone-900 dark:bg-stone-900 shadow-[inset_0_1px_1px_0_var(--color-stone-200)] dark:shadow-[inset_0_1px_1px_0_var(--color-stone-700)] before:absolute before:top-0 before:left-0 before:z-10 before:block before:h-full before:w-full before:bg-linear-to-tl before:from-white/50 dark:before:from-black/50 before:to-transparent before:content-['']">
                                    <div>
                                        <div data-slot="aspect-ratio" className="flex">
                                            <Search className="p-8 dark:p-6 w-40 h-30 text-neutral-500 dark:text-neutral-300" />
                                        </div>
                                    </div>
                                </div>
                                <div className="relative w-full max-w-[8.25rem] origin-bottom scale-[.83] overflow-hidden rounded-[20%] border border-neutral-0 dark:border-stone-800 bg-neutral-0 dark:bg-stone-900 opacity-70 shadow-[inset_0_1px_1px_0_var(--color-stone-200)] dark:shadow-[inset_0_1px_1px_0_var(--color-stone-700)] blur-[3px] before:absolute before:top-0 before:left-0 before:z-10 before:block before:h-full before:w-full before:bg-linear-to-tl before:from-stone-150 dark:before:from-stone-950 before:to-transparent before:content-['']">
                                    <div>
                                        <div data-slot="aspect-ratio" className="flex">
                                            <Code2 className="p-8 dark:p-6 w-40 h-30 text-neutral-500 dark:text-neutral-300" />
                                        </div>
                                    </div>
                                </div>
                            </LoaderLink>
                            <div className="flex w-full items-start justify-center gap-[2.8%] pt-[3%]">
                                <div className="relative w-full max-w-[7.625rem] origin-bottom scale-[.83] overflow-hidden rounded-[20%] border border-stone-50 dark:border-stone-950 bg-neutral-0 dark:bg-stone-900 opacity-70 shadow-[inset_0_1px_1px_0_var(--color-stone-200)] dark:shadow-[inset_0_1px_1px_0_var(--color-stone-700)] blur-[3px] before:absolute before:top-0 before:left-0 before:z-10 before:block before:h-full before:w-full before:bg-linear-to-tr before:from-stone-150 dark:before:from-stone-950 before:to-transparent before:content-['']">
                                    <div>
                                        <div data-slot="aspect-ratio" className="flex">
                                            <Database className="p-8 dark:p-6 w-40 h-30 text-neutral-500 dark:text-neutral-300" />
                                        </div>
                                    </div>
                                </div>
                                <div className="relative w-full max-w-[7.625rem] overflow-hidden rounded-[20%] border border-stone-50 dark:border-stone-950 bg-neutral-0 dark:bg-stone-900 opacity-90 shadow-[inset_0_1px_1px_0_var(--color-stone-200)] dark:shadow-[inset_0_1px_1px_0_var(--color-stone-700)] before:absolute before:top-0 before:left-0 before:z-10 before:block before:h-full before:w-full before:bg-linear-to-t before:from-stone-150 dark:before:from-stone-950 before:to-transparent before:content-['']">
                                    <div>
                                        <div data-slot="aspect-ratio" className="flex">
                                            <Server className="p-8 dark:p-6 w-40 h-30 text-neutral-500 dark:text-neutral-300" />
                                        </div>
                                    </div>
                                </div>
                                <div className="relative w-full max-w-[7.625rem] overflow-hidden rounded-[20%] border border-stone-50 dark:border-stone-950 bg-neutral-0 dark:bg-stone-900 opacity-90 shadow-[inset_0_1px_1px_0_var(--color-stone-200)] dark:shadow-[inset_0_1px_1px_0_var(--color-stone-700)] before:absolute before:top-0 before:left-0 before:z-10 before:block before:h-full before:w-full before:bg-linear-to-t before:from-stone-150 dark:before:from-stone-950 before:to-transparent before:content-['']">
                                    <div>
                                        <div data-slot="aspect-ratio" className="flex">
                                            <ShieldCheck className="p-8 dark:p-6 w-40 h-30 text-neutral-500 dark:text-neutral-300" />
                                        </div>
                                    </div>
                                </div>
                                <div className="relative w-full max-w-[7.625rem] origin-bottom scale-[.83] overflow-hidden rounded-[20%] border border-stone-50 dark:border-stone-950 bg-neutral-0 dark:bg-stone-900 opacity-70 shadow-[inset_0_1px_1px_0_var(--color-stone-200)] dark:shadow-[inset_0_1px_1px_0_var(--color-stone-700)] blur-[3px] before:absolute before:top-0 before:left-0 before:z-10 before:block before:h-full before:w-full before:bg-linear-to-tl before:from-stone-150 dark:before:from-stone-950 before:to-transparent before:content-['']">
                                    <div>
                                        <div data-slot="aspect-ratio" className="flex">
                                            <Megaphone className="p-8 dark:p-6 w-40 h-30 text-neutral-500 dark:text-neutral-300" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Heading */}
                    <div className="flex flex-col items-center justify-center text-center font-sans2">
                        <h1 className="mb-5 text-5xl leading-tight font-semibold text-foreground md:text-7xl">
                            Discover More
                        </h1>
                        <p className="max-w-[35rem] text-xl text-muted-foreground">
                            Add a touch of magic to your day. Explore our web development services.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
