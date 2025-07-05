import { Card } from "@/components/ui/card";
import { BsGraphUpArrow } from "react-icons/bs";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { ImFlag } from "react-icons/im";

export default function Tactics() {
    return (
        <section className="py-32">
            <div className="container">
                <div className="relative py-20 md:py-24 lg:py-28">
                    <h2 className="mx-auto max-w-5xl text-center text-5xl font-medium sm:text-6xl lg:text-7xl xl:text-[85px]">
                        <span className="text-muted-foreground">
                            Real solutions for real growth.
                        </span>
                        <br />
                        <span>We do the heavy lifting for you.</span>
                    </h2>

                    {/* Mobile View */}
                    <div className="lg:hidden">
                        <div className="grid translate-y-4 justify-items-center gap-4">
                            {/* IT Solutions */}
                            <Card className="bg-card text-card-foreground flex-col border flex max-w-lg transform items-center gap-4 rounded-2xl p-6 shadow-lg transition-transform hover:scale-105">
                                <div className="shrink-0 rounded-full bg-muted p-3.5">
                                    <HiOutlineComputerDesktop />
                                </div>
                                <div className="font-semibold text-center">
                                    <p>Powerful IT Solutions</p>
                                    <p className="text-muted-foreground">
                                        Custom web, app, and software development that helps your business scale.
                                    </p>
                                </div>
                            </Card>

                            {/* Marketing */}
                            <Card className="bg-card text-card-foreground flex-col border flex max-w-lg transform items-center gap-4 rounded-2xl p-6 shadow-lg transition-transform hover:scale-105">
                                <div className="shrink-0 rounded-full bg-muted p-3.5">
                                    <BsGraphUpArrow />
                                </div>
                                <div className="font-semibold text-center">
                                    <p>Growth Marketing</p>
                                    <p className="text-muted-foreground">
                                        Smart, data-driven marketing strategies to grow your audience faster.
                                    </p>
                                </div>
                            </Card>

                            {/* Brand Development */}
                            <Card className="bg-card text-card-foreground flex-col border flex max-w-lg transform items-center gap-4 rounded-2xl p-6 shadow-lg transition-transform hover:scale-105">
                                <div className="shrink-0 rounded-full bg-muted p-3.5">
                                    <ImFlag />
                                </div>
                                <div className="font-semibold text-center">
                                    <p>Brand Development</p>
                                    <p className="text-muted-foreground">
                                        We build strong brands with design, strategy, and storytelling.
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* Desktop Absolute Cards */}
                    <div className="absolute inset-0 max-lg:hidden">
                        <div className="absolute cursor-pointer top-0 left-[10%]">
                            <Card className="bg-card text-card-foreground flex-col border-2 flex max-w-lg transform items-center gap-4 rounded-2xl p-6 shadow-lg transition-transform hover:scale-105">
                                <div className="shrink-0 rounded-full bg-muted p-3.5"><HiOutlineComputerDesktop /></div>
                                <div className="font-semibold text-center">
                                    <p>Powerful IT Solutions</p>
                                    <p className="text-muted-foreground">
                                        Custom web, app, and software development that helps your business scale.
                                    </p>
                                </div>
                            </Card>
                        </div>

                        <div className="absolute cursor-pointer right-[10%] top-[20%]">
                            <Card className="bg-card text-card-foreground flex-col border-2 flex max-w-lg transform items-center gap-4 rounded-2xl p-6 shadow-lg transition-transform hover:scale-105">
                                <div className="shrink-0 rounded-full bg-muted p-3.5"><BsGraphUpArrow /></div>
                                <div className="font-semibold text-center">
                                    <p>Growth Marketing</p>
                                    <p className="text-muted-foreground">
                                        Smart, data-driven marketing strategies to grow your audience faster.
                                    </p>
                                </div>
                            </Card>
                        </div>

                        <div className="absolute cursor-pointer bottom-[10%] left-[40%]">
                            <Card className="bg-card text-card-foreground flex-col border-2 flex max-w-lg transform items-center gap-4 rounded-2xl p-6 shadow-lg transition-transform hover:scale-105">
                                <div className="shrink-0 rounded-full bg-muted p-3.5"><ImFlag /></div>
                                <div className="font-semibold text-center">
                                    <p>Brand Development</p>
                                    <p className="text-muted-foreground">
                                        We build strong brands with design, strategy, and storytelling.
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
