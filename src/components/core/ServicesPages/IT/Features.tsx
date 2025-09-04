import {
  Search,
  BarChart3,
  LifeBuoy,
  CheckCircle,
  Rocket,
  KanbanSquare,
  Layers,
  Palette,
} from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeaturesProps {
  heading?: string;
  subheading?: string;
  features?: Feature[];
}

const Features = ({
  heading = "How Hirebie Delivers IT",
  subheading = "At Hirebie, we take a strategy-first approach to web and web app development. Our process is transparent, collaborative, and results-driven. Here’s how we bring your ideas to life:",
  features = [
    {
      title: "Discovery & Consultation",
      description:
        "We start with in-depth discussions to understand your business model, target audience, and unique needs. This phase ensures the end product aligns perfectly with your goals.",
      icon: <Search className="size-4 md:size-6" />,
    },
    {
      title: "Tailored Design & Prototyping",
      description:
        "Our UI/UX designers craft layouts, color schemes, and interactive prototypes that ensure your platform is both visually appealing and user-friendly.",
      icon: <Palette className="size-4 md:size-6" />,
    },
    {
      title: "Technology Stack Selection",
      description:
        "Based on your requirements—speed, scalability, security—we choose the right tech stack (e.g., React + Node.js, Next.js, Django, Laravel) to power your solution.",
      icon: <Layers className="size-4 md:size-6" />,
    },
    {
      title: "Agile Development Process",
      description:
        "We follow agile methodologies, delivering features in small, testable increments. This allows for flexibility, faster delivery, and continuous improvement.",
      icon: <KanbanSquare className="size-4 md:size-6" />,
    },
    {
      title: "Quality Assurance & Testing",
      description:
        "Our QA experts conduct manual and automated testing to ensure everything works perfectly—across devices, browsers, and operating systems.",
      icon: <CheckCircle className="size-4 md:size-6" />,
    },
    {
      title: "Deployment & Launch",
      description:
        "We handle the technical setup, domain configuration, server deployment, and security hardening—ensuring a smooth, zero-downtime launch.",
      icon: <Rocket className="size-4 md:size-6" />,
    },
    {
      title: "Post-Launch Support & Maintenance",
      description:
        "Hirebie doesn’t just deliver and disappear. We provide ongoing monitoring, updates, performance optimization, and feature enhancements to keep your platform at peak performance.",
      icon: <LifeBuoy className="size-4 md:size-6" />,
    },
    {
      title: "SEO & Performance Optimization",
      description:
        "We ensure your site or app ranks well on search engines and loads lightning-fast, improving user experience and search visibility.",
      icon: <BarChart3 className="size-4 md:size-6" />,
    },
  ],
}: FeaturesProps) => {
  return (
    <section className="">
      <div className="px-14">
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-4xl font-medium md:pl-5 sm:text-5xl lg:text-6xl">
            {heading}
          </h2>
          <p className="mb-4 text-lg text-muted-foreground md:pl-5  mx-auto  max-w-2xl ">
            {subheading}
          </p>
        </div>
        <div className="mx-auto mt-14 grid gap-x-20 gap-y-8 md:grid-cols-2 md:gap-y-6 lg:mt-20">
          {features.map((feature, idx) => (
            <div className="flex gap-6 rounded-lg md:block md:p-5" key={idx}>
              <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
                {feature.icon}
              </span>
              <div>
                <h3 className="font-medium md:mb-2 md:text-xl">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground md:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Features };
