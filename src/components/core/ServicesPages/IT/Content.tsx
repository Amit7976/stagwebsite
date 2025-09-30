import React from "react";

interface Card {
  badge: string;
  title: string;
  desc: string;
}

interface ContentProps {
  sectionClassName?: string;
  cards: Card[];
  bigCard: {
    badge: string;
    title: string;
    description: string[];
  };
}

export default function Content({
  sectionClassName = "dark:bg-black/20 py-20",
  cards,
  bigCard,
}: ContentProps) {
  return (
    <section className={sectionClassName}>
      <div className="px-4 md:px-10">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {/* Big Featured Card */}
          <div className="col-span-1 lg:col-span-2">
            <div className="group lg:col-span-2 lg:row-span-2 text-card-foreground flex flex-col gap-6 rounded-xl shadow-sm h-full items-start border-2 border-transparent bg-gray-100 dark:bg-neutral-950 p-5 duration-500 hover:border-primary md:p-20">
              <div className="flex flex-col gap-6">
                <span className="inline-flex items-center justify-center rounded border-2 px-5 py-1 text-xs font-medium font-sans2 bg-transparent w-fit text-orange-600">
                  {bigCard.badge}
                </span>
                <div className="flex flex-col gap-6">
                  <h3 className="text-2xl font-medium lg:text-6xl leading-tight">
                    {bigCard.title}
                  </h3>
                  {bigCard.description.map((desc, idx) => (
                    <p
                      key={idx}
                      className="text-base md:text-xl lg:font-medium text-muted-foreground"
                    >
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 flex flex-col gap-5">
            {/* Small Cards */}
            {cards.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex-1">
                <div className="group text-card-foreground flex flex-col gap-6 rounded-xl shadow-sm h-full items-start border-2 border-transparent bg-gray-100 dark:bg-neutral-950 p-5 duration-500 hover:border-primary">
                  <div className="flex flex-col gap-6">
                    <span className="inline-flex items-center justify-center rounded border-2 px-5 py-1 text-xs font-medium font-sans2 bg-transparent w-fit text-orange-600">
                      {item.badge}
                    </span>
                    <div className="flex flex-col gap-6">
                      <h3 className="text-xl font-medium">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {cards.slice(3).map((item, idx) => (
            <div key={idx}>
              <div className="group text-card-foreground flex flex-col gap-6 rounded-xl shadow-sm h-full items-start border-2 border-transparent bg-gray-50 dark:bg-neutral-950 p-5 duration-500 hover:border-primary">
                <div className="flex flex-col gap-6">
                  <span className="inline-flex items-center justify-center rounded border-2 px-5 py-1 text-xs font-medium font-sans2 bg-transparent w-fit text-orange-600">
                    {item.badge}
                  </span>
                  <div className="flex flex-col gap-6">
                    <h3 className="text-xl font-medium">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
