"use client";

import React from "react";

const featuresLeft = [
    { text: "Dark Mode" },
    { text: "Real-time Sync" },
    { text: "Secure Auth" },
    { text: "Drag & Drop" },
];

const featuresRight = [
    { text: "API Integrations" },
    { text: "Role Access" },
    { text: "Multi-Language" },
    { text: "Auto Save" },
];

export default function InAppFeature() {
    return (
        <section>
            <div className="relative container flex flex-col items-center overflow-hidden py-32">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-5xl font-semibold tracking-tighter text-foreground md:text-6xl">
                        App Loaded with <span className="text-orange-600">Features</span>
                    </h1>
                    <p className="my-4 tracking-tighter text-muted-foreground/60 md:text-xl">
                        Experience a comprehensive suite of powerful features designed to
                        elevate your workflow.
                    </p>
                </div>

                <div className="relative z-10 mx-auto mt-12 min-h-full max-w-3xl md:w-1/2">
                    {/* Left Features */}
                    <div className="absolute -left-52 z-10 hidden h-full flex-col items-end justify-between md:flex lg:-left-62">
                        {featuresLeft.map((feature, index) => (
                            <div
                                key={index}
                                className="flex gap-3 font-[cursive] text-xs md:text-xl tracking-tight"
                                style={{ opacity: 1 }}
                            >
                                {feature.text}
                                <svg width="61" className="mt-4 w-10 md:w-16" height="26" viewBox="0 0 61 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.9646 1.91797C17.3747 7.75772 32.6529 11.57 48.5386 15.7286C49.4358 15.9635 58.8632 18.2083 58.5163 17.679C55.5766 13.1937 48.1816 12.4253 45.0204 8.60143C41.6482 4.52239 53.6346 15.2056 58.7437 16.5867C60.5905 17.0859 54.584 17.7874 53.7729 17.9579C48.9299 18.9758 45.2528 21.6554 41.1771 24.3266" stroke="#1C1C1C" strokeWidth="2.46548" strokeLinecap="round"></path></svg>
                            </div>
                        ))}
                    </div>

                    {/* Right Features */}
                    <div className="absolute -right-58 z-10 hidden h-full flex-col justify-between md:flex lg:-right-64">
                        {featuresRight.map((feature, index) => (
                            <div
                                key={index}
                                className="flex gap-3 font-[cursive] text-xs md:text-xl tracking-tight"
                                style={{ opacity: 1 }}
                            >
                                <svg width="61" className="mt-4 w-10 scale-x-[-1] md:w-16" height="26" viewBox="0 0 61 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.9646 1.91797C17.3747 7.75772 32.6529 11.57 48.5386 15.7286C49.4358 15.9635 58.8632 18.2083 58.5163 17.679C55.5766 13.1937 48.1816 12.4253 45.0204 8.60143C41.6482 4.52239 53.6346 15.2056 58.7437 16.5867C60.5905 17.0859 54.584 17.7874 53.7729 17.9579C48.9299 18.9758 45.2528 21.6554 41.1771 24.3266" stroke="#1C1C1C" strokeWidth="2.46548" strokeLinecap="round"></path></svg>
                                {feature.text}
                            </div>
                        ))}
                    </div>

                    {/* Main Card */}
                    <div className="relative z-0" style={{ opacity: 1 }}>
                        <div
                            data-slot="card"
                            className="text-card-foreground flex flex-col gap-6 group h-130 w-full rounded-4xl border border-border bg-background p-2 shadow-none lg:p-3"
                        >
                            <div
                                data-slot="card-content"
                                className="px-6 size-full rounded-3xl border-2 border-background bg-muted"
                            >
                                <img
                                    src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
                                    className="size-full"
                                    alt="App Preview"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
