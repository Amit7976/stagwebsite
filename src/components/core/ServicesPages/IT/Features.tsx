import React from "react";

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


const Features = ({ heading, subheading, features }: FeaturesProps) => {
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
          {features?.map((feature, idx) => (
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
