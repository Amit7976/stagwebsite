// import Team from "@/components/MainUi/Team/Team";
import Team from "@/components/MainUi/Team/Team";
import Image from "next/image";
import Link from "next/link";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

function MainContent() {
  const otherMembers = [
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-1.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-2.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-3.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-4.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-5.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-6.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-7.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-8.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-9.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-10.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-11.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-12.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-13.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-14.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-15.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-16.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-17.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-18.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-19.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-20.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-21.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-22.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-23.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-24.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-25.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-26.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-27.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-28.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-29.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-30.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-31.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-32.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-33.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-34.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-35.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-4.jpg",
      name: "krishna",
    },
    {
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-3.jpg",
      name: "krishna",
    },
  ];
  return (
    <>
      <section className="px-8 py-14 md:py-24 mx-auto md:px-12 lg:px-32 w-full">
        <Team />
      </section>


      <section className="py-12 bg-white dark:bg-neutral-950 sm:py-16 lg:py-40">
        <div className="px-4 mx-auto max-w-7xl md:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-neutral-200 sm:text-4xl xl:text-5xl font-pj">
              Our Investors & Board of Directors
            </h2>
          </div>

          <div className="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-20 gap-x-8 md:grid-cols-4 gap-y-12 lg:gap-x-16 xl:gap-x-20">
            <div>
              <Image
                width={800}
                height={800}
                className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter"
                src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-1.png"
                alt=""
              />
              <p className="mt-5 text-lg font-bold text-gray-900 dark:text-neutral-300 sm:text-xl sm:mt-8 font-pj">
                Jerome Bell
              </p>
              <p className="mt-2 text-base font-normal text-gray-600 dark:text-neutral-400 font-pj">
                Co founder, Chairman, Executive Director
              </p>
            </div>

            <div>
              <Image
                width={800}
                height={800}
                className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter"
                src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-2.png"
                alt=""
              />
              <p className="mt-5 text-lg font-bold text-gray-900 dark:text-neutral-300 sm:text-xl sm:mt-8 font-pj">
                Jerome Bell
              </p>
              <p className="mt-2 text-base font-normal text-gray-600 dark:text-neutral-400 font-pj">
                Co founder, Chairman, Executive Director
              </p>
            </div>

            <div>
              <Image
                width={800}
                height={800}
                className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter"
                src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-3.png"
                alt=""
              />
              <p className="mt-5 text-lg font-bold text-gray-900 dark:text-neutral-300 sm:text-xl sm:mt-8 font-pj">
                Jerome Bell
              </p>
              <p className="mt-2 text-base font-normal text-gray-600 dark:text-neutral-400 font-pj">
                Co founder, Chairman, Executive Director
              </p>
            </div>

            <div>
              <Image
                width={800}
                height={800}
                className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter"
                src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-4.png"
                alt=""
              />
              <p className="mt-5 text-lg font-bold text-gray-900 dark:text-neutral-300 sm:text-xl sm:mt-8 font-pj">
                Jerome Bell
              </p>
              <p className="mt-2 text-base font-normal text-gray-600 dark:text-neutral-400 font-pj">
                Co founder, Chairman, Executive Director
              </p>
            </div>
          </div>



          <div className="max-w-3xl mx-auto mt-12 space-y-8 sm:space-y-0 sm:flex sm:items-center sm:justify-center sm:mt-16 sm:gap-x-16">
            <div>
              <Image
                width={800}
                height={800}
                className="w-auto mx-auto h-11"
                src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/logo-waverio.svg"
                alt=""
              />
            </div>

            <div>
              <Image
                width={800}
                height={800}
                className="w-auto mx-auto h-11"
                src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/logo-squarestone.svg"
                alt=""
              />
            </div>

            <div>
              <Image
                width={800}
                height={800}
                className="w-auto mx-auto h-11"
                src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/logo-creaty.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 dark:bg-neutral-950 py-20 lg:p-20 pb-40">
        <div className="pb-14">
          <div className="px-4 mx-auto lg:max-w-7xl sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold leading-tight text-center text-gray-600 dark:text-neutral-300 sm:text-4xl lg:text-5xl">
              Other valued members
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 xl:grid-cols-7 rounded-3xl overflow-hidden">
          {otherMembers.map((otherMember, index) => (
            <div key={index}>
              <div className="aspect-w-1 aspect-h-1">
                <Image
                  width={800}
                  height={800}
                  className="bg-gray-200 dark:bg-neutral-800 h-full aspect-square grayscale hover:grayscale-0 duration-1000 hover:scale-110 -z-[0] hover:z-50 relative hover:rounded-xl"
                  src={otherMember.image}
                  alt={otherMember.name}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-10 bg-white dark:bg-neutral-950 sm:pt-16 lg:pt-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl lg:leading-tight">
              Real humans are here to help you building your brand
            </h2>
            <p className="mt-6 text-lg text-gray-900 dark:text-neutral-400">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
            <Link
              href="/contact"
              title=""
              className="inline-flex items-center justify-center px-12 py-4 mt-12 text-base font-semibold text-white transition-all duration-200 bg-orange-600 border border-transparent rounded-md hover:bg-orange-700 focus:bg-orange-700"
              role="button"
            >
              <IoChatbubbleEllipsesOutline className="w-5 h-5 mr-3 -ml-1" />
              Get in touch
            </Link>
          </div>
        </div>

        <div className="container mx-auto 2xl:px-12">
          <Image
            width={800}
            height={800}
            className="w-full mt-6"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/team/4/group-of-people.png"
            alt=""
          />
        </div>
      </section>
    </>
  );
}

export default MainContent;
