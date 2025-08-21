import { Monitor, Smartphone, Tablet } from "lucide-react";

interface PlatformIndependentProps {
    heading?: string;
    description?: string;
    platforms?: {
        desktop?: {
            title: string;
            subtitle: string;
            description: string;
            buttonText: string;
        };
        ios?: {
            title: string;
            subtitle: string;
            description: string;
        };
        android?: {
            title: string;
            subtitle: string;
            description: string;
        };
    };
}

const PlatformIndependent = ({
    heading = "Available on Every Platform",
    description = "Our Progressive Web App (PWA) is designed to work seamlessly across all your devices. Whether you're on desktop, iOS, or Android, you can enjoy the same smooth experience anywhere.",
    platforms = {
        desktop: {
            title: "Desktop",
            subtitle: "Windows / macOS",
            description: "Use it directly on your PC or Mac with full functionality.",
            buttonText: "Download",
        },
        ios: {
            title: "Mobile",
            subtitle: "iOS",
            description: "Add our app to your iPhone or iPad for quick access on the go.",
        },
        android: {
            title: "Mobile / Tablet",
            subtitle: "Android",
            description: "Install it on any Android device and stay connected anytime, anywhere.",
        },
    },
}: PlatformIndependentProps) => {
    return (
        <section className="py-32">
            <div className="container">
                {/* Header Section */}
                <div className="mb-20 text-center">
                    <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        {heading}
                    </h2>
                    <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-lg">
                        {description}
                    </p>
                </div>

                {/* Download Options - Minimal Grid */}
                <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-3">
                    {/* Desktop */}
                    <div className="text-center">
                        <div className="bg-background mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full shadow-sm">
                            <Monitor className="h-10 w-10" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold">
                            {platforms.desktop?.subtitle}
                        </h3>
                        <p className="text-muted-foreground mb-6 text-base">
                            {platforms.desktop?.description}
                        </p>
                    </div>

                    {/* iOS */}
                    <div className="text-center">
                        <div className="bg-background mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full shadow-sm">
                            <Smartphone className="h-10 w-10" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold">
                            {platforms.ios?.subtitle}
                        </h3>
                        <p className="text-muted-foreground mb-6 text-base">
                            {platforms.ios?.description}
                        </p>
                    </div>

                    {/* Android */}
                    <div className="text-center">
                        <div className="bg-background mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full shadow-sm">
                            <Tablet className="h-10 w-10" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold">
                            {platforms.android?.subtitle}
                        </h3>
                        <p className="text-muted-foreground mb-6 text-base">
                            {platforms.android?.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { PlatformIndependent };
