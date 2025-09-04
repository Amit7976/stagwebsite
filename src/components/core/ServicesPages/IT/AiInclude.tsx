import React from "react";
import {
  Eye,
  Clock,
  Wallet,
  TrendingUp,
  Users,
  Layers,
  BadgeCheck,
} from "lucide-react";

const AiInclude = () => {
  const features = [
    {
      icon: <Clock className="stroke-muted-foreground size-7" />,
      title: "24/7 Online Presence",
      desc: "Your customers can learn about your business, explore your services, and even make purchases—anytime, anywhere—without being restricted by store hours or location.",
    },
    {
      icon: <Eye className="stroke-muted-foreground size-7" />,
      title: "First Impressions Matter",
      desc: "A sleek, fast-loading, and well-designed website builds trust instantly. In fact, studies show that users form an opinion about a site within 0.05 seconds—make it count.",
    },
    {
      icon: <BadgeCheck className="stroke-muted-foreground size-7" />,
      title: "Increased Credibility & Brand Value",
      desc: "An outdated or poorly designed site sends the wrong message. A professionally developed platform positions your brand as modern, reliable, and trustworthy.",
    },
    {
      icon: <TrendingUp className="stroke-muted-foreground size-7" />,
      title: "Wider Reach & Market Expansion",
      desc: "Unlike physical stores, a website can reach global audiences without the need for a physical presence—opening up entirely new revenue streams.",
    },
    {
      icon: <Users className="stroke-muted-foreground size-7" />,
      title: "Better Customer Engagement",
      desc: "Web apps allow for personalized user experiences, chat support, feedback systems, and interactive tools that increase customer satisfaction.",
    },
    {
      icon: <Layers className="stroke-muted-foreground size-7" />,
      title: "Scalability & Flexibility",
      desc: "Custom web development ensures your site/app can evolve as your business grows—adding new features, integrating third-party tools, or handling more users.",
    },
    {
      icon: <Wallet className="stroke-muted-foreground size-7" />,
      title: "Cost Efficiency in the Long Run",
      desc: "While there is an upfront investment, a well-built website or app reduces long-term costs by automating processes, minimizing errors, and increasing sales conversions.",
    },
  ];

  return (
    <section className="px-20 w-full">
      <div className="relative bg-cover bg-center bg-no-repeat py-10 md:py-16 xl:px-6 xl:py-28 after:absolute after:rounded-4xl after:inset-0 after:z-1 after:block after:size-full after:bg-black/40 after:content-[''] h-[70vh] flex items-center rounded-4xl aiinclude-hero-bg">
        <div className="container z-[2]">
          <div className="flex flex-col items-center justify-center gap-12 text-center">
            <div className="flex max-w-3xl flex-col gap-8">
              <h2 className="text-2xl tracking-tight text-white md:text-7xl scale-105 font-medium">
                Business <span className="text-orange-600">Benefits </span>
              </h2>
              <div className="text-2xl font-medium tracking-tight text-neutral-300">
                A high-quality website or web app can be a game-changer for any
                business. Here’s why:
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container">
        <div className="grid items-stretch gap-8 py-20 md:gid-cols-2 lg:grid-cols-4">
          {features.slice(0, 4).map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl border-2 transition-all duration-300 hover:-translate-y-1 hover:border-black dark:hover:border-white border-primary/20 bg-muted/0 p-6"
            >
              <div className="flex flex-col items-center justify-center gap-4">
                {item.icon}
                <div className="max-w-xs text-center text-xl font-semibold">
                  {item.title}
                </div>
                <div className="text-muted-foreground max-w-lg text-center text-base">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" grid justify-between items-stretch sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          {features.slice(4).map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl border-2 transition-all duration-300 hover:-translate-y-1 hover:border-black dark:hover:border-white border-primary/20 bg-muted/0 p-6"
            >
              <div className="flex flex-col items-center justify-center gap-4">
                {item.icon}
                <div className="max-w-xs text-center text-xl font-semibold">
                  {item.title}
                </div>
                <div className="text-muted-foreground max-w-lg text-center text-base">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiInclude;
