import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import TestimonialCard from "@/components/MainUi/Testimonial/TestimonialCard";

function CandidateTestimonials() {
      const testimonials = [
        {
          stars: 5,
          text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
          imgSrc:
            "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
          name: "Leslie Alexander",
          jobTitle: "Freelance React Developer",
        },
        {
          stars: 4,
          text: "The service was excellent. The site looks amazing and works perfectly.",
          imgSrc:
            "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female-2.png",
          name: "Jane Doe",
          jobTitle: "Product Manager",
        },
        {
          stars: 5,
          text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
          imgSrc:
            "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
          name: "Leslie Alexander",
          jobTitle: "Freelance React Developer",
        },
        {
          stars: 5,
          text: "You made it so simple. My new site is so I just choose the page, make the change.",
          imgSrc:
            "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
          name: "Leslie Alexander",
          jobTitle: "Freelance React Developer",
        },
        {
          stars: 5,
          text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
          imgSrc:
            "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
          name: "Leslie Alexander",
          jobTitle: "Freelance React Developer",
        },
        {
          stars: 5,
          text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
          imgSrc:
            "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
          name: "Leslie Alexander",
          jobTitle: "Freelance React Developer",
        },
        {
          stars: 5,
          text: "My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
          imgSrc:
            "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
          name: "Leslie Alexander",
          jobTitle: "Freelance React Developer",
        },
        {
          stars: 5,
          text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
          imgSrc:
            "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
          name: "Leslie Alexander",
          jobTitle: "Freelance React Developer",
        },
        {
          stars: 5,
          text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
          imgSrc:
            "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
          name: "Leslie Alexander",
          jobTitle: "Freelance React Developer",
        },
        {
          stars: 5,
          text: "You made it so simple. with than my old site. I just choose the page, make the change.",
          imgSrc:
            "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
          name: "Leslie Alexander",
          jobTitle: "Freelance React Developer",
        },
      ];
      const testimonials2 = [
        {
          stars: 5,
          text: "You made it so simple. My new site is s I just choose the page, make the change. You made it so simple. My new site is s I just choose the page, make the change. You made it so simple. My new site is s I just choose the page, make the change. You made it so simple. My new site is s I just choose the page, make the change. ",
          imgSrc:
            "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
          name: "Leslie Alexander",
          jobTitle: "Freelance React Developer",
        },
        {
          stars: 4,
          text: "The service was excellent. The site looks amazing and works perfectly.",
          imgSrc:
            "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female-2.png",
          name: "Jane Doe",
          jobTitle: "Product Manager",
        },
        {
          stars: 5,
          text: "You made it so simple. with than my old site. I just choose the page, make the change.",
          imgSrc:
            "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
          name: "Leslie Alexander",
          jobTitle: "Freelance React Developer",
        },
        {
          stars: 5,
          text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
          imgSrc:
            "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
          name: "Leslie Alexander",
          jobTitle: "Freelance React Developer",
        },
        {
          stars: 5,
          text: "I just choose the page, make the change.",
          imgSrc:
            "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
          name: "Leslie Alexander",
          jobTitle: "Freelance React Developer",
        },
        {
          stars: 5,
          text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
          imgSrc:
            "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
          name: "Leslie Alexander",
          jobTitle: "Freelance React Developer",
        },
        {
          stars: 5,
          text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
          imgSrc:
            "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
          name: "Leslie Alexander",
          jobTitle: "Freelance React Developer",
        },
        {
          stars: 5,
          text: "You made it so simple.  to work with than my old site. I just choose the page, make the change.",
          imgSrc:
            "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
          name: "Leslie Alexander",
          jobTitle: "Freelance React Developer",
        },
        {
          stars: 5,
          text: "You made it so simple. My new site is so ite. I just choose the page, make the change.",
          imgSrc:
            "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
          name: "Leslie Alexander",
          jobTitle: "Freelance React Developer",
        },
        {
          stars: 5,
          text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
          imgSrc:
            "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
          name: "Leslie Alexander",
          jobTitle: "Freelance React Developer",
        },
      ];
      const testimonials3 = [
        {
          stars: 5,
          text: " my old site. I just choose the page, make the change.",
          imgSrc:
            "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
          name: "Leslie Alexander",
          jobTitle: "Freelance React Developer",
        },
        {
          stars: 4,
          text: "The service was excellent.",
          imgSrc:
            "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female-2.png",
          name: "Jane Doe",
          jobTitle: "Product Manager",
        },
        {
          stars: 5,
          text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
          imgSrc:
            "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
          name: "Leslie Alexander",
          jobTitle: "Freelance React Developer",
        },
        {
          stars: 5,
          text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
          imgSrc:
            "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
          name: "Leslie Alexander",
          jobTitle: "Freelance React Developer",
        },
        {
          stars: 5,
          text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
          imgSrc:
            "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
          name: "Leslie Alexander",
          jobTitle: "Freelance React Developer",
        },
        {
          stars: 5,
          text: "You made it so simple. My new site is so much faster and.",
          imgSrc:
            "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
          name: "Leslie Alexander",
          jobTitle: "Freelance React Developer",
        },
        {
          stars: 5,
          text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
          imgSrc:
            "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
          name: "Leslie Alexander",
          jobTitle: "Freelance React Developer",
        },
        {
          stars: 5,
          text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
          imgSrc:
            "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
          name: "Leslie Alexander",
          jobTitle: "Freelance React Developer",
        },
        {
          stars: 5,
          text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
          imgSrc:
            "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
          name: "Leslie Alexander",
          jobTitle: "Freelance React Developer",
        },
        {
          stars: 5,
          text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
          imgSrc:
            "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
          name: "Leslie Alexander",
          jobTitle: "Freelance React Developer",
        },
      ];
  return (
    <>
      <section className="w-full my-10 mb-0">
        <div className="w-full text-center space-y-5 pb-10">
          <p className="text-3xl font-bold">Don't take our words for it.</p>
          <h4 className="text-5xl font-bold text-gray-500">
            Trust Placed Candidates
          </h4>
        </div>

        <div className="h-[150vh] w-full p-10 mb-0 list-none grid grid-cols-3 gap-6 items-start bg-gray-50 overflow-scroll pb-40 [mask-image:_linear-gradient(to_top,transparent_0,_black_328px,_black_calc(100%-100px),transparent_100%)]">
          <div className="col-span-1 h-auto space-y-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                stars={testimonial.stars}
                text={testimonial.text}
                imgSrc={testimonial.imgSrc}
                name={testimonial.name}
                jobTitle={testimonial.jobTitle}
              />
            ))}
          </div>
          <div className="col-span-1 h-auto space-y-6">
            {testimonials2.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                stars={testimonial.stars}
                text={testimonial.text}
                imgSrc={testimonial.imgSrc}
                name={testimonial.name}
                jobTitle={testimonial.jobTitle}
              />
            ))}
          </div>
          <div className="col-span-1 h-auto space-y-6">
            {testimonials3.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                stars={testimonial.stars}
                text={testimonial.text}
                imgSrc={testimonial.imgSrc}
                name={testimonial.name}
                jobTitle={testimonial.jobTitle}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CandidateTestimonials;
