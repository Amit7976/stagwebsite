import React from "react";
import { Keyboard, Volume2, Eye } from "lucide-react";


const AiInclude = () => {
    return (
        <section className="px-20 w-full">
            {/* Hero Section */}
            <div
                className="relative bg-cover bg-center bg-no-repeat py-10 md:py-16 xl:px-6 xl:py-28 after:absolute after:rounded-4xl after:inset-0 after:z-1 after:block after:size-full after:bg-black/40 after:content-[''] h-[70vh] flex items-center rounded-4xl"
                style={{
                    backgroundImage:
                        "url('https://library.shadcnblocks.com/images/block/photos/futuristic-device-design-qcufu.png')",
                }}
            >
                <div className="container z-[2]">
                    <div className="flex flex-col items-center justify-center gap-12 text-center">
                        <div className="flex max-w-3xl flex-col gap-8">
                            <h2 className="text-2xl tracking-tight text-white md:text-7xl scale-105 font-medium">
                                "Optional AI-powered feature or tools"
                            </h2>
                            <div className="text-2xl font-medium tracking-tight text-neutral-300">
                                You can request to add optional AI features and tools in your web application as per your needs.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="container">
                <div className="grid items-start gap-8 py-20 lg:grid-cols-3">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <Keyboard className="stroke-muted-foreground size-7" />
                        <div className="max-w-xs text-center text-xl font-semibold">
                            Keyboard Navigation
                        </div>
                        <div className="text-muted-foreground max-w-lg text-center text-base">
                            Ensure all interactive elements are accessible via keyboard alone,
                            allowing users with motor impairments to navigate easily and
                            efficiently without a mouse.
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-4">
                        <Volume2 className="stroke-muted-foreground size-7" />
                        <div className="max-w-xs text-center text-xl font-semibold">
                            Screen Reader Friendly
                        </div>
                        <div className="text-muted-foreground max-w-lg text-center text-base">
                            Use semantic HTML and proper ARIA labels to help screen readers
                            convey structure and meaning clearly to users with visual
                            impairments.
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-4">
                        <Eye className="stroke-muted-foreground size-7" />
                        <div className="max-w-xs text-center text-xl font-semibold">
                            Color Contrast Check
                        </div>
                        <div className="text-muted-foreground max-w-lg text-center text-base">
                            Maintain strong color contrast between text and background to
                            support users with low vision and improve readability across
                            different lighting conditions.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AiInclude;
