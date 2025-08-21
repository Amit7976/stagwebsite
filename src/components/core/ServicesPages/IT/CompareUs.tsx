import { Check, X, Moon, Globe, Cpu, LayoutDashboard, Settings2, Type, Recycle, Search, Smartphone } from "lucide-react";

export default function CompareUs() {
    const features = [
        {
            name: "Dark Mode",
            description: "Built-in dark mode vs requires extra setup.",
            icon: <Moon className="text-gray-500" />,
            hirebie: <Check className="text-green-600 size-5" />,
            competitor: <X className="text-destructive size-5" />,
        },
        {
            name: "PWA Support",
            description: "Installable app-like experience.",
            icon: <Smartphone className="text-gray-500" />,
            hirebie: <Check className="text-green-600 size-5" />,
            competitor: <X className="text-destructive size-5" />,
        },
        {
            name: "Web SEO",
            description: "SEO-first with modern practices.",
            icon: <Search className="text-gray-500" />,
            hirebie: <Check className="text-green-600 size-5" />,
            competitor: <X className="text-destructive size-5" />,
        },
        {
            name: "Modern Design",
            description: "Clean, utility-first design vs outdated patterns.",
            icon: <LayoutDashboard className="text-gray-500" />,
            hirebie: <Check className="text-green-600 size-5" />,
            competitor: <X className="text-destructive size-5" />,
        },
        {
            name: "Reusable Library",
            description: "Reusable, component-based library.",
            icon: <Recycle className="text-gray-500" />,
            hirebie: <Check className="text-green-600 size-5" />,
            competitor: <X className="text-destructive size-5" />,
        },
        {
            name: "TypeScript Support",
            description: "First-class TypeScript support.",
            icon: <Type className="text-gray-500" />,
            hirebie: <Check className="text-green-600 size-5" />,
            competitor: <Check className="text-yellow-500 size-5" />, // partial support
        },
        {
            name: "Customization",
            description: "Highly customizable vs limited.",
            icon: <Settings2 className="text-gray-500" />,
            hirebie: <Check className="text-green-600 size-5" />,
            competitor: <X className="text-destructive size-5" />,
        },
    ];

    return (
        <section className="py-32">
            <div className="">
                <h2 className="mb-4 text-center text-4xl font-semibold">Compare Us</h2>
                <p className="text-muted-foreground mb-8 text-center">
                    Why <span className="font-bold text-foreground">Hirebie</span> is better than the competition.
                </p>
                <div className="divide-border border-border bg-background mx-auto max-w-7xl divide-y overflow-x-auto rounded-lg shadow">
                    {/* Header Row */}
                    <div className="bg-muted text-foreground hidden rounded-t-lg text-left text-base font-semibold sm:flex">
                        <div className="w-16 px-6 py-4"></div>
                        <div className="flex-1 px-6 py-4">Feature</div>
                        <div className="w-40 px-6 py-4">Hirebie</div>
                        <div className="w-40 px-6 py-4">Competitor</div>
                    </div>

                    {/* Features Rows */}
                    {features.map((f, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-start text-left sm:flex-row sm:items-center"
                        >
                            {/* Icon + mobile label */}
                            <div className="flex w-full items-center justify-start px-6 pt-4 sm:w-16 sm:justify-center sm:py-4">
                                {f.icon}
                                <span className="ml-3 text-base font-medium sm:hidden">{f.name}</span>
                            </div>

                            {/* Feature description */}
                            <div className="w-full flex-1 px-6 pb-2 sm:py-4">
                                <div className="hidden font-medium sm:block">{f.name}</div>
                                <div className="text-muted-foreground mb-2 mt-2 text-sm sm:mb-0">
                                    {f.description}
                                </div>
                            </div>

                            {/* Hirebie */}
                            <div className="flex w-full items-center justify-start px-6 pb-2 sm:w-40 sm:justify-center sm:py-4">
                                {f.hirebie}
                                <span className="text-muted-foreground ml-2 text-xs font-medium sm:hidden">
                                    Hirebie
                                </span>
                            </div>

                            {/* Competitor */}
                            <div className="border-border flex w-full items-center justify-start px-6 pb-4 sm:w-40 sm:justify-center sm:border-0 sm:py-4">
                                {f.competitor}
                                <span className="text-muted-foreground ml-2 text-xs font-medium sm:hidden">
                                    Competitor
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
