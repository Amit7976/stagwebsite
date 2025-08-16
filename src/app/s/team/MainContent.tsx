"use client"
// import Team from "@/components/MainUi/Team/Team";
import Team from "@/components/MainUi/Team/Team";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

interface Admin {
  _id: string;
  firstName: string;
  lastName: string;
  department: string;
  image?: string;
}

function MainContent() {

    const [team, setMembers] = useState<Admin[]>([]);
    const [loading, setLoading] = useState(true);
  
    // ✅ Fetch job type team
    const fetchMembers = async () => {
      try {
        const res = await fetch("/api/team?type=intern");
        const data = await res.json();
        if (data.success) {
          setMembers(data.data);
        }
      } catch (error) {
        console.error("Error fetching job team:", error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchMembers();
    }, []);
  
  
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
    if (loading) {
      return (
        <div className="flex items-center justify-center h-96 col-span-2">
          <div className="loader"></div>
        </div>
      )
    }
  
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
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

          <div className="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-20 gap-x-8 md:grid-cols-1 gap-y-12 lg:gap-x-16 xl:gap-x-20">
            <div>
              <Image
                width={800}
                height={800}
                className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter"
                src="https://res.cloudinary.com/dkox4p2a0/image/upload/v1754656446/hirebie/admins/1754656446641_Screenshot%202025-08-08%20180351.jpg"
                alt=""
              />
              <p className="mt-5 text-lg font-bold text-gray-900 dark:text-neutral-300 sm:text-xl sm:mt-8 font-pj">
                Nikhil Bharat Luniya
              </p>
              <p className="mt-2 text-base font-normal text-gray-600 dark:text-neutral-400 font-pj">
                Founder of Taxplore Business Solutions Pvt Ltd
              </p>
            </div>
          </div>



          <div className="max-w-3xl mx-auto mt-12 space-y-8 sm:space-y-0 sm:flex sm:items-center sm:justify-center sm:mt-16 sm:gap-x-16">
            <div>
              <Image
                width={800}
                height={800}
                className="w-auto mx-auto h-11 grayscale-100"
                src="/images/CompaniesLogos/taxplore.png"
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
          {team.map((team, index) => (
            <div key={index}>
              <div className="aspect-w-1 aspect-h-1">
                <Image
                  width={800}
                  height={800}
                  className="bg-gray-200 dark:bg-neutral-800 h-full aspect-square grayscale hover:grayscale-0 duration-1000 hover:scale-110 -z-[0] hover:z-50 relative hover:rounded-xl object-cover"
                  src={team.image || ""}
                  alt={team.firstName + " " + team.lastName}
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
              Real people, ready to help you build a powerful brand
            </h2>
            <p className="mt-6 text-lg text-gray-900 dark:text-neutral-400">
              Our team of experts is here to guide you at every step-so you can focus on growth, while we help your brand stand out.
            </p>

            <Link
              href="/s/contact"
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
