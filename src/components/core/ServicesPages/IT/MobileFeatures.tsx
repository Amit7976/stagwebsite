import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Search,
  Palette,
  Settings,
  Code,
  TestTube,
  Rocket,
  Headphones,
  TrendingUp,
} from "lucide-react";

const MobileFeatures = () => {
  const hirebieProcess = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Discovery & Planning",
      description:
        "We start by identifying your vision, business goals, and target audience. Our strategy team then creates a roadmap outlining timelines, resources, and technology stacks.",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description:
        "Our design experts focus on user-centered design principles, ensuring your app is not only beautiful but also easy to navigate. We create interactive prototypes before development starts so you can visualize your app early in the process.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Technology Selection",
      description:
        "We choose the right development approach—Native, Cross-Platform, or Hybrid—based on your performance requirements, budget, and audience.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Agile Development",
      description:
        "We follow agile methodologies, dividing the project into short sprints. This allows for flexibility, early feedback, and faster delivery.",
    },
    {
      icon: <TestTube className="w-6 h-6" />,
      title: "Rigorous Testing",
      description:
        "We conduct functional testing, UI/UX testing, performance optimization, and security testing to ensure your app is flawless.",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Deployment",
      description:
        "We handle the entire publishing process, ensuring your app meets App Store and Play Store guidelines for smooth approval.",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Post-Launch Support",
      description:
        "Once your app is live, we provide maintenance, updates, and new feature integrations to keep it relevant and competitive.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Marketing Assistance",
      description:
        "Beyond development, we also assist with app store optimization (ASO), so your app reaches the right audience quickly.",
    },
  ];

  return (
    <section>
      <div className="px-6 md:px-14">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="mb-6 text-3xl font-medium sm:text-4xl lg:text-6xl">
            How Hirebie Delivers It
          </h2>
          <p className="mb-4 text-base sm:text-lg text-muted-foreground mx-auto max-w-2xl">
            At Hirebie, mobile app development isn&apos;t just about writing
            code—it&apos;s about building digital products that solve problems,
            delight users, and drive business growth.
          </p>
        </div>

        <div className="relative">
          {/* Timeline vertical line (only on desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500/20 to-red-500/20 rounded-full" />

          <div className="space-y-12 md:space-y-0">
            {hirebieProcess.map((step, index) => (
              <div
                key={index}
                className={`
                  flex flex-col md:flex-row items-center gap-8 
                  ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
                `}
              >
                {/* Step Badge (mobile top, desktop side) */}
                <div className="w-full flex justify-center md:hidden mb-4">
                  <div className="inline-flex items-center justify-center rounded border-2 px-5 py-1 text-xs font-medium font-sans2 bg-transparent text-orange-600">
                    Step {index + 1}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 w-full">
                  <Card
                    className={`${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    } group relative overflow-hidden rounded-xl border-2 transition-all duration-300 hover:-translate-y-1 hover:border-black dark:hover:border-white border-primary/20 bg-muted/0 p-6`}
                  >
                    <CardHeader>
                      <div className="flex gap-4 items-center mb-[-1.5rem]">
                        <div className="flex size-12 items-center justify-center rounded-full bg-accent mb-4">
                          {step.icon}
                        </div>
                        <CardTitle className="font-semibold text-xl md:text-xl mb-3 break-words">
                          {step.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm text-muted-foreground md:text-base">
                        {step.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot (only desktop) */}
                <div className="hidden md:flex w-6 h-6 bg-orange-500 rounded-full border-4 border-black shadow-lg z-10 flex-shrink-0" />

                {/* Step Badge for desktop (left/right) */}
                <div className="hidden md:block flex-1 w-full md:w-auto">
                  <div
                    className={`${
                      index % 2 === 0
                        ? "md:ml-8 text-left"
                        : "md:mr-8 text-right"
                    }`}
                  >
                    <div className="inline-flex items-center justify-center rounded border-2 px-5 py-1 text-xs font-medium font-sans2 bg-transparent w-fit text-orange-600">
                      Step {index + 1}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileFeatures;
