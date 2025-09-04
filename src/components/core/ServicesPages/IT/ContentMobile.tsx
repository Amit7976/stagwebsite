import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Globe, Layers } from "lucide-react";

const appTypes = [
  {
    title: "Native Apps",
    description:
      "Developed for a specific platform (e.g., Swift for iOS, Kotlin for Android) with high performance and seamless integration.",
    technologies: ["Swift", "Kotlin"],
  },
  {
    title: "Cross-Platform Apps",
    description:
      "Built with frameworks like Flutter or React Native, allowing them to run on multiple platforms from a single codebase.",
    technologies: ["Flutter", "React Native"],
  },
  {
    title: "Hybrid Apps",
    description:
      "A mix of native and web technologies, offering flexibility and cost-effectiveness.",
    technologies: ["Native", "Web"],
  },
];

export default function Content() {
  return (
    <section className="dark:bg-black/20 py-20">
      <div className="px-4 md:px-10 max-w-7xl mx-auto">
        {/* What It Is */}
        <div className="mb-16">
          <div className="group text-card-foreground flex flex-col gap-6 rounded-xl shadow-sm items-start  md:p-20">
            <div className="flex flex-col gap-6">
              <h3 className="text-center text-2xl font-medium lg:text-6xl leading-tight">
                What It Is
              </h3>
              <p className="text-center text-base md:text-xl lg:font-medium text-muted-foreground">
                In the age of smartphones, mobile applications have become the
                heartbeat of modern business strategies. Mobile App Development
                Services involve the process of creating software applications
                specifically designed to run on mobile devices such as
                smartphones and tablets. These applications are optimized for
                performance, usability, and functionality on platforms like iOS,
                Android, and sometimes cross-platform frameworks that work on
                both.
              </p>
              <p className="text-center text-base md:text-xl lg:font-medium text-muted-foreground">
                The process goes far beyond simply writing code. It starts with
                a deep understanding of the client’s goals, target audience, and
                the problems the app is meant to solve.
              </p>
              <p className="text-center text-base md:text-xl lg:font-medium text-muted-foreground">
                From there, it moves through various stages:
              </p>
            </div>
          </div>
        </div>

        {/* Process Cards */}
        <div className="row-span-1 flex flex-row flex-wrap gap-5 mb-20">
          {[
            {
              badge: "Strategy",
              title: "Requirement Analysis & Strategy",
              desc: "Understanding business objectives, audience behavior, and competition to shape the app's vision.",
            },
            {
              badge: "Design",
              title: "UI/UX Design",
              desc: "Crafting interfaces that are visually appealing, intuitive, and engaging.",
            },
            {
              badge: "Frontend",
              title: "App Development",
              desc: "Writing clean, efficient, and scalable code to build the app's features and functionality.",
            },
            {
              badge: "Testing",
              title: "Testing & Quality Assurance",
              desc: "Eliminating bugs, improving speed, and ensuring the app performs seamlessly.",
            },
            {
              badge: "Deployment",
              title: "Deployment & Maintenance",
              desc: "Publishing the app on platforms like the Google Play Store and Apple App Store.",
            },
            {
              badge: "Backend",
              title: "Post-Launch Maintenance",
              desc: "Updating features, fixing issues, and ensuring security.",
            },
          ].map((item, idx) => (
            <div key={idx} className="w-full md:w-[48%] lg:w-[32%]">
              <div className="group text-card-foreground flex flex-col gap-6 rounded-xl shadow-sm h-full items-start border-2 border-transparent bg-gray-50 dark:bg-neutral-950 p-5 duration-500 hover:border-primary">
                <span className="inline-flex items-center justify-center rounded border-2 px-5 py-1 text-xs font-medium font-sans2 bg-transparent w-fit text-orange-600">
                  {item.badge}
                </span>
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Three Main Categories */}
        <div>
          <div className="text-center mb-16">
            <h2 className="mb-6 text-2xl lg:text-6xl font-medium">
              Three Main Categories
            </h2>
            <p className="text-muted-foreground max-w-4xl mx-auto text-lg">
              Mobile apps are built in three main categories, each with its own
              advantages and use cases.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {appTypes.map((type, index) => (
              <Card
                key={index}
                className="
                   rounded-xl shadow-sm items-start border-2 border-transparent bg-gray-100 dark:bg-neutral-950  duration-500 hover:border-primary "
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-accent rounded-md p-2 shrink-0">
                      {index === 0 && <Zap className="w-6 h-6" />}
                      {index === 1 && <Globe className="w-6 h-6" />}
                      {index === 2 && <Layers className="w-6 h-6 " />}
                    </div>
                    <CardTitle className="text-xl truncate">
                      {type.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-6 text-base leading-relaxed text-muted-foreground">
                    {type.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {type.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="inline-flex items-center justify-center rounded border-gray-6000 transparent  border-2 px-5 py-1 text-xs font-medium font-sans2  w-fit text-orange-600  bg-white dark:bg-black transition-colors duration-300 "
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
