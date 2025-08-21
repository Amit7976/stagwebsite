import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTA() {
    return (
        <section className="bg-background">
            <div>
                <div
                    data-slot="card"
                    className=" flex flex-col gap-6 py-6 group relative w-full overflow-hidden rounded-4xl border border-none  shadow-none"
                >
                    <div
                        data-slot="card-content"
                        className="px-6 py-12 lg:px-28 lg:py-24"
                    >
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            {/* Left Content */}
                            <div className="flex flex-col justify-center space-y-6">
                                <p className="flex items-center gap-2 text-2xl font-medium tracking-tight text-foreground">
                                    <img
                                        className="size-8 object-contain"
                                        alt="Copy paste icon"
                                        src="/images/logo_icons/icon.svg"
                                    />
                                    Increase impact, not effort.
                                </p>

                                <h1 className="mt-3 text-9xl font-bold tracking-tighter text-foreground">
                                    Let's Create Something{" "}
                                    <span className="bg-linear-to-b from-background to-foreground bg-clip-text text-transparent">
                                        Amazing!
                                    </span>
                                </h1>

                                {/* Buttons */}
                                <div className="mt-4 flex gap-2">
                                    <Button className="h-13 w-fit rounded-full px-8 text-lg shadow-xs">
                                        Let&apos;s Talk
                                    </Button>

                                    <Button
                                        variant="outline"
                                        className="size-13 -rotate-45 rounded-full transition-all ease-in-out hover:rotate-0"
                                    >
                                        <ArrowRight className="size-4" />
                                    </Button>
                                </div>
                            </div>

                            {/* Right Illustration */}
                            <div className="absolute -right-70 -bottom-70 -rotate-45 transition-all ease-in-out group-hover:rotate-0">
                                <img
                                    src="/images/Home/home_hero_round_animation.svg"
                                    className="size-150 md:size-220"
                                    alt="Solar System Illustration"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
