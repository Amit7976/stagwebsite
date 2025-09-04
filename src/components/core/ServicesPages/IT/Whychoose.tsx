import React from "react";
import { Wrench, Layers, Cpu, Briefcase, MessageSquare } from "lucide-react";

const WhyChooseHirebie = () => {
  const points = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Custom Solutions",
      desc: "We don’t believe in one-size-fits-all. Every app is tailored to your unique needs.",
    },
    {
      icon: <Layers className="w-6 h-6 " />,
      title: "End-to-End Service",
      desc: "From concept to launch and beyond, we handle it all.",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Cutting-Edge Technologies",
      desc: "We work with the latest tools and frameworks like Flutter, React Native, Swift, Kotlin, and more.",
    },
    {
      icon: <Briefcase className="w-6 h-6 " />,
      title: "Proven Expertise",
      desc: "Our portfolio spans industries like e-commerce, healthcare, education, and logistics.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Transparent Communication",
      desc: "You’ll always be in the loop with regular updates and progress reports.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black dark:text-white">
          Why Choose{" "}
          <span className="text-orange-600 dark:text-orange-600">Hirebie</span>{" "}
          for Mobile App Development?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          {points.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl border-2 transition-all duration-300 hover:-translate-y-1 hover:border-black dark:hover:border-white border-primary/20 bg-muted/0 p-5"
            >
              <div className="flex flex-col items-center justify-center gap-4 mb-2">
                {item.icon}
              </div>
              <h3 className="max-w-xs text-center text-xl font-semibold text-black dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground md:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseHirebie;
