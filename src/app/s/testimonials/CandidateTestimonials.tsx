import CompanyTestimonialCard from "@/components/core/Testimonial/CompanyTestimonialCard";

function CandidateTestimonials() {
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
  ];
  const testimonials2 = [
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
  ];
  const testimonials3 = [
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
  return (
    <>
      <section className="w-full my-10 mb-0">
        <div className="text-center px-10">
          <p className="text-lg font-medium text-gray-600 dark:text-neutral-400">
            Testimonials from top companies
          </p>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl xl:text-5xl">
            <span className="text-[#FB4C04] font-semibold">Hirebie</span>{" "}
            is appreciated by companies
          </h2>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-b from-white dark:from-neutral-950 to-transparent w-full h-20 sticky top-0"></div>
          <div className="bg-gradient-to-t from-white dark:from-neutral-950 to-transparent w-full h-20 fixed bottom-0"></div>
          <div className="w-full p-4 md:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none gap-6 items-start bg-gray-50 dark:bg-neutral-950 pb-40">
            <div className="col-span-1 h-auto space-y-6">
              {testimonials.map((testimonial, index) => (
                <CompanyTestimonialCard
                  key={index}
                  stars={testimonial.stars}
                  text={testimonial.text}
                  imgSrc={testimonial.imgSrc}
                  name={testimonial.name}
                />
              ))}
            </div>
            <div className="col-span-1 h-auto space-y-6">
              {testimonials2.map((testimonial, index) => (
                <CompanyTestimonialCard
                  key={index}
                  stars={testimonial.stars}
                  text={testimonial.text}
                  imgSrc={testimonial.imgSrc}
                  name={testimonial.name}
                />
              ))}
            </div>
            <div className="col-span-1 h-auto space-y-6">
              {testimonials3.map((testimonial, index) => (
                <CompanyTestimonialCard
                  key={index}
                  stars={testimonial.stars}
                  text={testimonial.text}
                  imgSrc={testimonial.imgSrc}
                  name={testimonial.name}
                />
              ))}
            </div>
          </div>
         </div>
      </section>
    </>
  );
}

export default CandidateTestimonials;
