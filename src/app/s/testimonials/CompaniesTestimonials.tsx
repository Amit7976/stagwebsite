import CompanyTestimonialCard from "@/components/MainUi/Testimonial/CompanyTestimonialCard";
import TestimonialCard from "@/components/MainUi/Testimonial/TestimonialCard";
import React from "react";

function CompaniesTestimonials() {
  const testimonials = [
    {
      stars: 5,
      text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
      imgSrc: "/images/CompaniesLogos/WedwebaiLogo.png",
      name: "Leslie Alexander",
    },
    {
      stars: 4,
      text: "The service was excellent. The site looks amazing and works perfectly.",
      imgSrc: "/images/CompaniesLogos/FrisconSolutionLogo.png",
      name: "Jane Doe",
      jobTitle: "Product Manager",
    },
    {
      stars: 5,
      text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
      imgSrc: "/images/CompaniesLogos/WedwebaiLogo.png",
      name: "Leslie Alexander",
    },
    {
      stars: 5,
      text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
      imgSrc: "/images/CompaniesLogos/FrisconSolutionLogo.png",
      name: "Leslie Alexander",
    },
    {
      stars: 5,
      text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
      imgSrc: "/images/CompaniesLogos/WedwebaiLogo.png",
      name: "Leslie Alexander",
    },
    {
      stars: 5,
      text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
      imgSrc: "/images/CompaniesLogos/WedwebaiLogo.png",
      name: "Leslie Alexander",
    },
    {
      stars: 5,
      text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
      imgSrc: "/images/CompaniesLogos/FrisconSolutionLogo.png",
      name: "Leslie Alexander",
    },
    {
      stars: 5,
      text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
      imgSrc: "/images/CompaniesLogos/WedwebaiLogo.png",
      name: "Leslie Alexander",
    },
    {
      stars: 5,
      text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
      imgSrc: "/images/CompaniesLogos/WedwebaiLogo.png",
      name: "Leslie Alexander",
    },
    {
      stars: 5,
      text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
      imgSrc: "/images/CompaniesLogos/FrisconSolutionLogo.png",
      name: "Leslie Alexander",
    },
  ];

  const testimonials2 = [
    {
      stars: 5,
      text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
      imgSrc: "/images/CompaniesLogos/WedwebaiLogo.png",
      name: "Leslie Alexander",
    },
    {
      stars: 4,
      text: "The service was excellent. The site looks amazing and works perfectly.",
      imgSrc: "/images/CompaniesLogos/FrisconSolutionLogo.png",
      name: "Jane Doe",
      jobTitle: "Product Manager",
    },
    {
      stars: 5,
      text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
      imgSrc: "/images/CompaniesLogos/WedwebaiLogo.png",
      name: "Leslie Alexander",
    },
    {
      stars: 5,
      text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
      imgSrc: "/images/CompaniesLogos/FrisconSolutionLogo.png",
      name: "Leslie Alexander",
    },
    {
      stars: 5,
      text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
      imgSrc: "/images/CompaniesLogos/WedwebaiLogo.png",
      name: "Leslie Alexander",
    },
    {
      stars: 5,
      text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
      imgSrc: "/images/CompaniesLogos/WedwebaiLogo.png",
      name: "Leslie Alexander",
    },
    {
      stars: 5,
      text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
      imgSrc: "/images/CompaniesLogos/FrisconSolutionLogo.png",
      name: "Leslie Alexander",
    },
    {
      stars: 5,
      text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
      imgSrc: "/images/CompaniesLogos/WedwebaiLogo.png",
      name: "Leslie Alexander",
    },
    {
      stars: 5,
      text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
      imgSrc: "/images/CompaniesLogos/FrisconSolutionLogo.png",
      name: "Leslie Alexander",
    },
    {
      stars: 5,
      text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
      imgSrc: "/images/CompaniesLogos/WedwebaiLogo.png",
      name: "Leslie Alexander",
    },
  ];

  return (
    <>
      <section className="pb-12 sm:pb-16 lg:pb-20 mb-20">
        <div className="px-4 mx-auto w-full sm:px-6 lg:px-0">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <p className="text-lg font-medium text-gray-600">
                Testimonials from top companies
              </p>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
                <span className="text-[#FB4C04] font-semibold">Jobboost</span>{" "}
                gets appreciation from top companies
              </h2>
            </div>

            <div className="relative mt-10 md:mt-24 md:order-2 w-full overflow-hidden">
              <div
                x-data="{}"
                x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
                className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] p-8"
              >
                <ul
                  x-ref="logos"
                  className="flex items-center flex-shrink-0 h-auto justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-slow"
                >
                  {testimonials.map((testimonial, index) => (
                    <CompanyTestimonialCard
                      key={index}
                      stars={testimonial.stars}
                      text={testimonial.text}
                      imgSrc={testimonial.imgSrc}
                      name={testimonial.name}
                    />
                  ))}
                </ul>
                <ul
                  x-ref="logos"
                  className="flex items-center flex-shrink-0 h-auto justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-slow"
                >
                  {testimonials2.map((testimonial, index) => (
                    <CompanyTestimonialCard
                      key={index}
                      stars={testimonial.stars}
                      text={testimonial.text}
                      imgSrc={testimonial.imgSrc}
                      name={testimonial.name}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CompaniesTestimonials;
