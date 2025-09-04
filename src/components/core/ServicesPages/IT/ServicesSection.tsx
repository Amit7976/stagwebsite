import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  PenTool,
  Bug,
  Rocket,
  LucideIcon,
} from "lucide-react";

const StepCard = ({
  icon: Icon,
  title,
  duration,
  description,
  price,
  ctaVariant = "outline",
}: {
  icon: LucideIcon;
  title: string;
  duration?: string;
  description: string;
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

      <p className="text-muted-foreground mt-6 leading-relaxed">
        {description}
      </p>

      <div className="border-border mt-8 border-t pt-6 flex items-center justify-between">
        <div>
          <div className="text-lg font-semibold">
            {price ?? "Included in package"}
          </div>
        </div>
        <Button
          variant={ctaVariant}
          size="sm"
          className="gap-1.5 group-hover:shadow-md"
        >
          Get Started{" "}
          <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
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
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Estimated <span className="text-orange-600">Pricing</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg tracking-tight md:text-xl">
            Pricing for Website & Web App Development varies depending on
            project complexity, features, and timelines. At Hirebie, we offer
            transparent pricing tailored to your needs:
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          <StepCard
            icon={PenTool}
            title="Basic Business Website"
            duration="1-2 weeks"
            description="A simple yet functional app for basic needs."
            price=" $500 / Rs.40,000"
          />

          <StepCard
            icon={Code}
            title="E-Commerce Website"
            duration="3-5 weeks"
            description="A robust app to sell products online with secure payments."
            price=" $1,000 / Rs.80,000"
          />

          <StepCard
            icon={Bug}
            title="Custom Web Application"
            duration="4-8 weeks"
            description="We test what we build so you can sleep at night — no flaky vibes."
            price=" $2,000 / Rs.1,60,000"
          />

          <StepCard
            icon={Rocket}
            title="Enterprise-Grade Web App"
            duration="8+ Weeks"
            description="Smooth, zero-drama launches with best-practice DevOps."
            price="$5,000+ / Rs.4,00,000+"
            ctaVariant="outline"
          />
        </div>
        <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mt-8">
          <strong>Note:</strong> These are starting estimates. The final cost
          depends on features (e.g., payment gateways, APIs, dashboards,
          multi-language support), integrations, and level of customization.
        </p>
      </div>
    </section>
  );
}
