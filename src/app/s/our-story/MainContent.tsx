import BlogSection from "@/components/core/Home/BlogSection";
import CompaniesLogo from "@/components/MainUi/CompaniesLogo/CompaniesLogo";
import Team from "@/components/MainUi/Team/Team";
import Image from "next/image";
function MainContent() {
  const values = [
    {
      title: "Be World-Class",
      description:
        "We aim for nothing less than exceptional. Good enough isn’t good enough - we push for work that stands out and delivers results."
    },
    {
      title: "Share Everything You Know",
      description:
        "Knowledge grows when it’s shared. We believe in open collaboration, helping each other learn, and growing as a team."
    },
    {
      title: "Always Be Learning",
      description:
        "We’re curious by nature - staying updated, exploring new ideas, and embracing change to stay ahead."
    },
    {
      title: "Be Supportive",
      description:
        "We lift each other up. We celebrate wins, help through challenges, and build trusted partnerships with our clients."
    },
    {
      title: "Take Responsibility",
      description:
        "We own our actions and outcomes. We’re accountable, transparent, and ready to go the extra mile."
    },
    {
      title: "Enjoy Downtime",
      description:
        "We work hard and rest well. Balance keeps us creative, fresh, and ready for what’s next."
    },
  ];
  
  return (
    <>
      <section className="relative isolate px-6 py-10 lg:py-0 sm:py-2 overflow-hidden lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50 dark:fill-neutral-800">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
        </div>
        <div className="w-full mx-auto lg:py-40">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="mt-10 lg:mt-0 md:pl-14">
                <h2 className="mb-5 text-5xl font-bold text-dark dark:text-white sm:text-7xl">
                  We’re changing the way businesses grow.
                </h2>
                <p className="my-8 text-xl text-neutral-500 dark:text-neutral-400 dark:text-dark-6 leading-8">
                  At Hirebie, we empower businesses and individuals with smart, tailored solutions that drive real impact.
                  From creative design and development to strategic support, our team works closely with clients to turn ideas into results.
                  Discover how we help you build, scale, and succeed - your growth is our mission.
                </p>

              </div>
            </div>
            <div className="w-full lg:w-6/12">
              <div className="flex flex-col md:flex-row items-center md:-mx-3 md:sm:-mx-4 md:translate-x-16">
                <div className="w-full px-3 sm:px-4 xl:w-1/3">
                  <div className="relative z-10 my-4">
                    <Image
                      width={800}
                      height={800}
                      src="/images/work/portfolio.jpeg"
                      alt=""
                      className="w-full rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/3">
                  <div className="py-3 sm:py-4">
                    <Image
                      width={800}
                      height={800}
                      src="/images/work/jobboost.jpeg"
                      alt=""
                      className="w-full rounded-2xl shadow-xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <Image
                      width={800}
                      height={800}
                      src="/images/work/blog.jpeg"
                      alt=""
                      className="w-full rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/3">
                  <div className="py-3 sm:py-4">
                    <Image
                      width={800}
                      height={800}
                      src="/images/work/catererss.jpeg"
                      alt=""
                      className="w-full rounded-2xl shadow-xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <Image
                      width={800}
                      height={800}
                      src="/images/work/wedwebai.jpeg"
                      alt=""
                      className="w-full rounded-2xl shadow-xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <Image
                      width={800}
                      height={800}
                      src="/images/work/event_list.jpeg"
                      alt=""
                      className="w-full rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate px-6 py-24 sm:py-2 overflow-hidden lg:px-14 my-10 md:my-20 grid grid-cols-1 lg:grid-cols-5 gap-y-20 gap-x-40">
        <div className="col-span-1 lg:col-span-3 space-y-12">
          <h3 className="text-5xl font-bold text-black dark:text-white">Our Mission</h3>
          <p className="text-2xl font-normal text-neutral-500 dark:text-neutral-400 leading-10">
            At Hirebie, our mission is to empower businesses and individuals with
            innovative solutions that fuel growth and success. We believe in building
            trusted partnerships, delivering high-quality work, and transforming ideas
            into real results.
          </p>
          <p className="text-lg font-normal text-neutral-500 dark:text-neutral-400 leading-8">
            From web development and design to branding and strategic consulting,
            we’re dedicated to providing tailored services that make a difference.
            We don’t just deliver projects - we help you create a roadmap for
            sustainable growth and lasting impact.
          </p>
          <p className="text-lg font-normal text-neutral-500 dark:text-neutral-400 leading-8">
            We’re passionate about helping startups, small businesses, and
            entrepreneurs scale their ideas with confidence. Our team works closely
            with you every step of the way, ensuring your goals become our goals -
            because your success is our success.
          </p>
        </div>

        <div className="col-span-1 lg:col-span-2 w-full py-4 lg:py-20 space-y-12">
          <div className="space-y-3 text-center">
            <p className="text-6xl font-semibold">20+</p>
            <p className="text-xl font-normal text-neutral-500 dark:text-neutral-400">
              Successful projects delivered
            </p>
          </div>
          <div className="space-y-3 text-center">
            <p className="text-6xl font-semibold">10+</p>
            <p className="text-xl font-normal text-neutral-500 dark:text-neutral-400">
              Clients served worldwide
            </p>
          </div>
          <div className="space-y-3 text-center">
            <p className="text-6xl font-semibold">~1</p>
            <p className="text-xl font-normal text-neutral-500 dark:text-neutral-400">
              Years of empowering businesses
            </p>
          </div>
        </div>

      </section>

      <section className="borer-2 p-10 md:pt-20">
        <Image
          src={
            "/images/logo/logo.svg"
          }
          alt="Jobboost Team"
          width={800}
          height={800}
          className="w-full rounded-3xl object-contain"
        />
      </section>

      <section className="my-10 lg:my-10 relative isolate px-6 py-14 md:py-24 sm:py-2 overflow-hidden lg:px-14">
        <div className="w-full max-w-4xl space-y-4">
          <h3 className="text-5xl font-bold text-black dark:text-white">Our Values</h3>
          <p className="text-[1.35rem] font-normal text-neutral-500 dark:text-neutral-400 leading-10">
            At Hirebie, our values guide how we work, create, and grow - together.
            We believe in staying curious, supporting each other, and delivering
            excellence with honesty and heart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20">
          {values.map((value, index) => (
            <div key={index} className="space-y-3">
              <h4 className="font-medium text-xl text-black dark:text-white">
                {value.title}
              </h4>
              <p className="font-normal text-lg text-neutral-500 dark:text-neutral-400 leading-8">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="">
        <CompaniesLogo />
      </section>

      <section className="px-8 py-24 mx-auto md:px-12 lg:px-12 w-full my-10">
        <Team />
      </section>

      
      <BlogSection />
    </>
  );
}

export default MainContent;
