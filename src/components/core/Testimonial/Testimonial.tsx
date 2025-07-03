import TestimonialCard from "./TestimonialCard";

function Testimonial() {
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
const testimonials2 = [
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
      <section className="py-12 bg-gradient-to-b from-gray-50 sm:py-16 lg:pb-20 lg:pt-32 mb-20">
        <div className="px-4 mx-auto w-full sm:px-6 lg:px-0">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <p className="text-lg font-medium text-gray-600 font-pj">
                2,157 people have said how good Rareblocks
              </p>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
                Our happy clients say about us
              </h2>
            </div>

            <div className="mt-8 text-center md:mt-16 md:order-3">
              <a
                href="#"
                title=""
                className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-500 underline underline-offset-8 hover:underline-offset-4 hover:text-gray-500"
              >
                {" "}
                Check all 2,157 reviews
              </a>
            </div>

            <div className="relative mt-10 md:mt-24 md:order-2 w-full overflow-hidden">
              <div className="absolute -top-[400px] w-full">
                <svg
                  className="w-full"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <g clipPath="url(#clip0_105_323)">
                    {" "}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M106.973 87.6003C103.915 93.0385 96.0852 93.0385 93.027 87.6003L50.4686 11.9213C47.4696 6.58851 51.3234 7.97602e-06 57.4416 5.67316e-06L142.558 0C148.677 -5.34872e-07 152.53 6.58849 149.531 11.9213L106.973 87.6003ZM87.6003 106.973C93.0385 103.915 93.0385 96.0851 87.6003 93.0269L11.9213 50.4685C6.58848 47.4696 -1.12708e-05 51.3233 -1.15382e-05 57.4415L-1.52588e-05 142.558C-1.55262e-05 148.677 6.58849 152.53 11.9213 149.531L87.6003 106.973ZM106.973 112.4C103.915 106.961 96.0852 106.962 93.027 112.4L50.4686 188.079C47.4697 193.412 51.3234 200 57.4416 200H142.558C148.677 200 152.53 193.411 149.531 188.079L106.973 112.4ZM112.4 93.027C106.961 96.0853 106.961 103.915 112.4 106.973L188.079 149.531C193.412 152.53 200 148.677 200 142.558V57.4417C200 51.3235 193.411 47.4697 188.079 50.4687L112.4 93.027Z"
                      fill="url(#paint0_linear_105_323)"
                    />{" "}
                  </g>{" "}
                  <defs>
                    {" "}
                    <linearGradient
                      id="paint0_linear_105_323"
                      x1="100"
                      y1="0"
                      x2="100"
                      y2="200"
                      gradientUnits="userSpaceOnUse"
                    >
                      {" "}
                      <stop stopColor="#e7e7e7" />{" "}
                      <stop offset="1" stopColor="#fff" />{" "}
                    </linearGradient>{" "}
                    <clipPath id="clip0_105_323">
                      {" "}
                      <rect width="200" height="200" fill="white" />{" "}
                    </clipPath>{" "}
                  </defs>{" "}
                </svg>
              </div>

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
                    <TestimonialCard
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
                    <TestimonialCard
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

export default Testimonial;
