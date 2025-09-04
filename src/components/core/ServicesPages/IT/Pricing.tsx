import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  PenTool,
  Rocket,
  LucideIcon,
  Users,
  ShoppingBag,
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
            The cost of developing a mobile app depends on multiple
            factors—platform choice, complexity, design requirements,
            integrations, and more. At Hirebie, we provide clear and flexible
            pricing:
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          <StepCard
            icon={PenTool}
            title="Basic Utility App"
            duration="3-4 weeks"
            description="Simple apps with core features for daily use."
            price=" $2,000 / Rs.1,60,000"
          />

          <StepCard
            icon={ShoppingBag}
            title="E-Commerce App"
            duration="5-7 weeks"
            description="Sell products online with secure payments."
            price=" $4,000 / Rs.3,20,000"
          />

          <StepCard
            icon={Users}
            title="Social Networking App"
            duration="6-10 weeks"
            description="Profiles, messaging, and community features."
            price=" $6,000 / Rs.4,80,000"
          />

          <StepCard
            icon={Rocket}
            title="Enterprise-Level App"
            duration="10+ Weeks"
            description="Scalable, secure apps for large organizations."
            price="$10,000+ / Rs.8,00,000+"
            ctaVariant="outline"
          />
        </div>
        <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mt-8">
          <strong>Note: </strong>Final pricing depends on additional features
          like payment gateways, real-time chat, third-party integrations, AR/VR
          capabilities, or advanced analytics.
        </p>
      </div>
    </section>
  );
}
