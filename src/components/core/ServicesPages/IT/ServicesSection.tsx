import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Code, PenTool, Bug, Rocket, Search } from "lucide-react";

const StepCard = ({
    icon: Icon,
    title,
    duration,
    description,
    items,
    deliverables,
    price,
    ctaVariant = "outline",
}: {
    icon: any;
    title: string;
    duration?: string;
    description: string;
    items: string[];
    deliverables: string[];
    price?: string;
    ctaVariant?: "default" | "outline";
}) => (
    <div className="group relative overflow-hidden rounded-xl border-2 transition-all duration-300 hover:-translate-y-1 hover:border-black dark:hover:border-white border-primary/20 bg-muted/0">
        <div className="p-8">
            <div className="flex items-start gap-3">
                <div className="rounded-lg p-3 bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                </div>
                <div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    {duration && (
                        <div className="text-muted-foreground mt-1 text-sm">{duration}</div>
                    )}
                </div>
            </div>

            <p className="text-muted-foreground mt-6 leading-relaxed">{description}</p>

            <div className="mt-6 space-y-4">
                <div>
                    <h4 className="mb-3 text-sm font-medium">What's included:</h4>
                    <ul className="space-y-2 text-sm">
                        {items.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="mb-2 text-sm font-medium">Deliverables:</h4>
                    <div className="flex flex-wrap gap-2">
                        {deliverables.map((d, idx) => (
                            <span
                                key={idx}
                                className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground"
                            >
                                {d}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="border-border mt-8 border-t pt-6 flex items-center justify-between">
                <div>
                    <div className="text-lg font-semibold">{price ?? "Included in package"}</div>
                    <div className="text-muted-foreground text-xs">Custom quotes available</div>
                </div>
                <Button variant={ctaVariant} size="sm" className="gap-1.5 group-hover:shadow-md">
                    Get Started <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                </Button>
            </div>
        </div>
    </div>
);

export default function ServicesSection() {
    return (
        <section className="dark:bg-black/20 py-32">
            <div className="container px-20 space-y-16">
                {/* Section Heading */}
                <div className="space-y-4 text-center">
                    <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit">
                        Our Services
                    </span>
                    <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                        Web Development Lifecycle
                    </h2>
                    <p className="text-muted-foreground mx-auto max-w-2xl text-lg tracking-tight md:text-xl">
                        Everything under one roof — from idea to live product. Free perks are marked clearly.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                    <StepCard
                        icon={PenTool}
                        title="2) Design"
                        duration="1-3 weeks"
                        description="Designing delightful, accessible, and conversion-focused interfaces."
                        items={[
                            "Wireframes & User Flows",
                            "Visual UI Mockups",
                            "Design System Tokens",
                            "Responsive Layout Planning (Free)",
                        ]}
                        deliverables={["Figma Files", "Clickable Prototype", "Design Specs"]}
                    />

                    <StepCard
                        icon={Code}
                        title="3) Development"
                        duration="3-6 weeks"
                        description="Modern, scalable, and clean code — built for speed and maintainability."
                        items={[
                            "Frontend (Next.js/React)",
                            "Backend (Node.js/Express)",
                            "API Integration",
                            "Auth, RBAC & Security Basics (Free)",
                        ]}
                        deliverables={["Source Code", "Env & Scripts", "README/Docs"]}
                    />

                    <StepCard
                        icon={Bug}
                        title="4) Testing"
                        duration="1-2 weeks"
                        description="We test what we build so you can sleep at night — no flaky vibes."
                        items={[
                            "Unit & Integration Tests",
                            "Accessibility & Performance Audits",
                            "Cross-browser & Device Testing",
                            "Basic QA Cycle (Free)",
                        ]}
                        deliverables={["Test Reports", "Lighthouse Scores", "Bug Tracker Access"]}
                    />

                    <StepCard
                        icon={Rocket}
                        title="5) Deployment"
                        duration="2-5 days"
                        description="Smooth, zero-drama launches with best-practice DevOps."
                        items={[
                            "Hosting Setup Guidance (Free)",
                            "CI/CD Pipeline",
                            "Domain & DNS",
                            "Free SSL + Security Headers (Free)",
                        ]}
                        deliverables={["Deployment Guide", "Rollback Plan", "Monitoring Setup"]}
                        price="Included / On-Demand"
                        ctaVariant="outline"
                    />
                </div>
            </div>
        </section>
    );
}
