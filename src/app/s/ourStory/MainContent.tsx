import CompaniesLogo from "@/components/MainUi/CompaniesLogo/CompaniesLogo";
import Team from "@/components/MainUi/Team/Team";
import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
function MainContent() {
  const values = [
    {
      title: "Be world-class",
      description:
        "Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.",
    },
    {
      title: "Share everything you know",
      description:
        "Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.",
    },
    {
      title: "Always learning",
      description:
        "Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.",
    },
    {
      title: "Be supportive",
      description:
        "Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.",
    },
    {
      title: "Take responsibility",
      description:
        "Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.",
    },
    {
      title: "Enjoy downtime",
      description:
        "Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.",
    },
  ];
  const blogs = [
    {
      title:
        "Unity’s inside sales team drives 80% of its revenue with Preline.",
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
      link: "/amit",
    },
    {
      title:
        "Living Spaces creates a unified experience across the customer journey.",
      image:
        "https://images.unsplash.com/photo-1669739432571-aee1f057c41f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80",
      link: "/amit",
    },
    {
      title: "Atlassian powers sales and support at scale with Preline.",
      image:
        "https://images.unsplash.com/photo-1657299171054-e679f630a776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      link: "/amit",
    },
  ];
  return (
    <>
      <section className="relative isolate px-6 py-24 sm:py-2 overflow-hidden lg:px-0">
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
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
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
        <div className="w-full mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-7/12">
              <div className="mt-10 lg:mt-0 pl-14">
                <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-7xl">
                  We’re changing the way people connect.
                </h2>
                <p className="mb-5 text-xl text-gray-500 dark:text-dark-6 leading-8">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less.
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-5/12">
              <div className="flex items-center -mx-3 sm:-mx-4 translate-x-16">
                <div className="w-full px-3 sm:px-4 xl:w-1/3">
                  <div className="relative z-10 my-4">
                    <Image
                      width={800}
                      height={800}
                      src="https://i.ibb.co/9y7nYCD/image-3.jpg"
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
                      src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                      alt=""
                      className="w-full rounded-2xl shadow-xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <Image
                      width={800}
                      height={800}
                      src="https://i.ibb.co/rfHFq15/image-2.jpg"
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
                      src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                      alt=""
                      className="w-full rounded-2xl shadow-xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <Image
                      width={800}
                      height={800}
                      src="https://i.ibb.co/rfHFq15/image-2.jpg"
                      alt=""
                      className="w-full rounded-2xl shadow-xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <Image
                      width={800}
                      height={800}
                      src="https://i.ibb.co/rfHFq15/image-2.jpg"
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

      <section className="relative isolate px-6 py-24 sm:py-2 overflow-hidden lg:px-14 my-20 grid grid-cols-5 gap-40">
        <div className="col-span-3 space-y-12">
          <h3 className="text-5xl font-bold text-black">Our mission</h3>
          <p className="text-2xl font-normal text-gray-500 leading-10">
            Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
            arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
            feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget.
            Eleifend egestas fringilla sapien.
          </p>
          <p className="text-lg font-normal text-gray-500 leading-8">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
            enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
            praesent donec est. Odio penatibus risus viverra tellus varius sit
            neque erat velit. Faucibus commodo massa rhoncus, volutpat.
            Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id.
          </p>
          <p className="text-lg font-normal text-gray-500 leading-8">
            Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
            odio id et. Id blandit molestie auctor fermentum dignissim. Lacus
            diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
            hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem
            vel integer orci.
          </p>
        </div>
        <div className="col-span-2 w-full py-20 space-y-12">
          <div className="space-y-3">
            <p className="text-6xl font-semibold">44 million</p>
            <p className="text-xl font-normal text-gray-500">
              Transactions every 24 hours
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-6xl font-semibold">$119 trillion</p>
            <p className="text-xl font-normal text-gray-500">
              Assets under holding
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-6xl font-semibold">46,000</p>
            <p className="text-xl font-normal text-gray-500">
              New users annually
            </p>
          </div>
        </div>
      </section>

      <section className="borer-2 p-10 pt-20">
        <Image
          src={
            "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          }
          alt="Jobboost Team"
          width={800}
          height={800}
          className="w-full h-[600px] rounded-3xl object-cover"
        />
      </section>

      <section className="my-40 relative isolate px-6 py-24 sm:py-2 overflow-hidden lg:px-14">
        <div className="w-full max-w-4xl space-y-4">
          <h3 className="text-5xl font-bold text-black">Our Values</h3>
          <p className="text-[1.35rem] font-normal text-gray-500 leading-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            minus aliquam officia. Sunt sequi quidem a inventore laborum
          </p>
        </div>
        <div className="grid grid-cols-3 gap-12 mt-20">
          {values.map((value, index) => (
            <div key={index} className="space-y-3">
              <h4 className="font-semibold text-xl text-black">
                {value.title}
              </h4>
              <p className="font-normal text-lg text-gray-500 leading-8">
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

      <section>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="w-full mx-auto text-start mb-10 lg:mb-8 px-6 space-y-3">
            <h2 className="text-5xl font-bold text-black">From the blog</h2>
            <p className="text-[1.35rem] font-normal text-gray-500 leading-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
              nihil.
            </p>
          </div>

          <Carousel
            className="h-auto"
            opts={{
              align: "start",
              dragFree: false,
            }}
          >
            <CarouselContent className="flex">
              {blogs.map((blog, index) => (
                <CarouselItem key={index} className="basis-1/3 pl-5 flex-grow">
                  <div
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-delay="0"
                    data-aos-duration={`${index * 300 + 200}`}
                    data-aos-easing="ease"
                    data-aos-mirror="false"
                    data-aos-once="true"
                    className="w-full rounded-xl flex flex-col h-full min-h-[330px]"
                  >
                    <a
                      className="group hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/10"
                      href={blog.link}
                    >
                      <div className="aspect-w-16 aspect-h-10">
                        <Image
                          className="w-full object-cover rounded-xl h-[250px]"
                          src={blog.image}
                          alt={blog.title}
                          width={800}
                          height={800}
                        />
                      </div>
                      <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                        {blog.title}
                      </h3>
                      <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
                        Learn more
                        <svg
                          className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </p>
                    </a>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="select-none" />
            <CarouselNext className="select-none" />
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default MainContent;
