import Image from "next/image";
import React from "react";
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from "@/components/ui/tooltip";
import Link from "next/link";


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function Hero() {
  return (
    <>
      <section className="min-h-96 lg:min-h-screen py-10 px-4 lg:p-0 flex justify-center items-center relative">
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-5xl w-full font-bold lg:flex lg:flex-col gap-6 justify-center items-center dark:text-white">
            <span>Easy-to-Use Bug Reporting </span>
            <span>System to Improve Your </span>
            <span>Experience at Hirebie</span>
          </h2>

          <Image
            src={"/images/Random/underline.svg"}
            alt="underline"
            width={800}
            height={800}
            className="w-3/4 mx-auto mt-3"
          />

          <p className="text-xl text-center font-medium mt-2 text-gray-500">
            Use this page to report bugs and contribute to a better <br />
            Hirebie experience for everyone.
          </p>


          <div className="flex flex-col w-max gap-6 mx-auto mt-10">
            <Link
              href={"#bugForm"}
              className="text-white bg-[#FD500A] border-2 border-[#FD500A] hover:bg-white hover:text-[#FD500A] rounded-lg duration-500 py-3 px-14 h-auto font-medium text-sm"
            >
              Report by website
            </Link>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    href="mailto:support@hirebie.com"
                    target="_blank"
                    className="text-[#FD500A] border-2 border-[#FD500A] hover:text-white hover:bg-[#FD500A] rounded-lg duration-500 py-3 px-14 h-auto font-medium text-sm"
                  >
                    Report by Email
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-base font-medium">
                    Use this option when the UI doesn&#39;t work
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-10 w-20 b-20 hidden lg:block">
          <Image
            src={"/images/Random/profile/profile1.webp"}
            alt="profile pic"
            width={800}
            height={800}
            className="w-20 h-20 rounded-full object-cover"
          />
          <p className="flex justify-center text-sm bg-gray-600 text-white h-auto w-56 py-3 px-6 items-center rounded-full rounded-ss-none absolute top-3/4 left-2/4">
            Heading size is too small
          </p>
        </div>
        <div className="absolute bottom-16 left-56 w-20 b-20 hidden lg:block">
          <Image
            src={"/images/Random/profile/profile2.webp"}
            alt="profile pic"
            width={800}
            height={800}
            className="w-20 h-20 rounded-full object-cover"
          />
          <p className="flex justify-center text-sm bg-gray-600 text-white h-auto w-56 py-3 px-6 items-center rounded-full rounded-ss-none absolute top-3/4 left-2/4">
            Text is not visible on the screen
          </p>
        </div>
        <div className="absolute bottom-1/2 right-10 w-20 b-20 hidden lg:block">
          <Image
            src={"/images/Random/profile/profile3.webp"}
            alt="profile pic"
            width={800}
            height={800}
            className="w-20 h-20 rounded-full object-cover"
          />
          <p className="flex justify-center text-sm bg-gray-600 text-white h-auto w-56 py-3 px-6 items-center rounded-full rounded-se-none absolute top-3/4 right-2/4">
            Button on Homepage not working
          </p>
        </div>
        <div className="absolute bottom-16 right-56 w-20 b-20 hidden lg:block">
          <Image
            src={"/images/Random/profile/profile1.webp"}
            alt="profile pic"
            width={800}
            height={800}
            className="w-20 h-20 rounded-full object-cover"
          />
          <p className="flex justify-center text-sm bg-gray-600 text-white h-auto w-56 py-3 px-6 items-center rounded-full rounded-se-none absolute top-3/4 right-2/4">
            Service page not loading
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero;
