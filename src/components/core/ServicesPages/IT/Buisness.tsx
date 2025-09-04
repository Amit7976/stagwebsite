import React from "react";
import {
  Eye,
  Smartphone,
  WifiOff,
  Bell,
  HeartHandshake,
  Trophy,
  ShoppingCart,
  BarChart3,
} from "lucide-react";

const Business = () => {
  const features = [
    {
      icon: <Bell className="stroke-muted-foreground size-7" />,
      title: "Direct Customer Engagement",
      desc: "Mobile apps allow businesses to communicate directly with users via push notifications, in-app messages, and personalized content, creating a stronger connection.",
    },
    {
      icon: <Eye className="stroke-muted-foreground size-7" />,
      title: "Improved Brand Visibility",
      desc: "Every time users scroll through their phone, your app’s icon serves as a reminder of your brand—keeping you at the top of their minds.",
    },
    {
      icon: <HeartHandshake className="stroke-muted-foreground size-7" />,
      title: "Enhanced Customer Loyalty",
      desc: "With features like rewards programs, loyalty points, and personalized offers, mobile apps help keep customers coming back.",
    },
    {
      icon: <Trophy className="stroke-muted-foreground size-7" />,
      title: "Competitive Advantage",
      desc: "In industries where competition is fierce, having a mobile app can set you apart and attract tech-savvy customers who value convenience.",
    },
    {
      icon: <ShoppingCart className="stroke-muted-foreground size-7" />,
      title: "Increased Sales & Revenue",
      desc: "Mobile commerce is booming. Apps offer faster checkouts, one-click payments, and personalized recommendations—driving higher conversions.",
    },
    {
      icon: <BarChart3 className="stroke-muted-foreground size-7" />,
      title: "Better Customer Insights",
      desc: "Apps can track user behavior, preferences, and patterns, allowing businesses to make data-driven decisions for product and service improvements.",
    },
    {
      icon: <WifiOff className="stroke-muted-foreground size-7" />,
      title: "Offline Accessibility",
      desc: "Unlike websites, mobile apps can offer certain functionalities without an internet connection, increasing usability in all conditions.",
    },
    {
      icon: <Smartphone className="stroke-muted-foreground size-7" />,
      title: "Integration with Device Features",
      desc: "Apps can use device features like GPS, camera, biometrics, and sensors to provide advanced services (e.g., location-based offers, AR features).",
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
                A well-developed mobile app isn’t just a tool—it’s a business
                asset that can transform the way you connect with your
                customers. Here’s why businesses invest heavily in mobile app
                development:{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container">
        <div className="grid items-stretch gap-8 py-20 md:gid-cols-2 lg:grid-cols-4">
          {features.map((item, idx) => (
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

export default Business;
