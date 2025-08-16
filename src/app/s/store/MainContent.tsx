import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";

function MainContent() {
  return (
    <>
      {/* <!-- ========== MAIN CONTENT ========== --> */}
      <main
        id="content"
        className="relative w-full px-4 flex flex-col justify-center sm:items-center mx-auto size-full before:absolute before:top-0 before:start-1/2 before:bg-[url('/images/Random/blocks_light.svg')] dark:before:bg-[url('/images/Random/blocks_dark.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2 py-0 sm:px-20"
      >
        <div className="relative w-full">
          <div className="flex flex-col md:flex-row md:items-center w-full justify-between gap-10 lg:px-10 md:px-0 mt-16 mb-20">
            <Image
              src="/images/logo/logo.svg"
              alt="Hirebie Logo"
              width={800}
              height={800}
              className="w-56 h-auto"
            />
            <h6 className="text-2xl text-black dark:text-white font-medium sm:text-xl">
              Be the first to knows when our Store is{" "}
              <b className="text-red-500">live</b>
            </h6>
          </div>

          <div className="w-full">
            <h2 className="text-4xl font-bold text-black dark:text-white sm:text-9xl text-left space-y-6 flex flex-col">
              <span className="text-gray-500 sm:text-6xl">Projects Store</span>{" "}
              <span>Coming Soon</span>
            </h2>
          </div>

          <form className="w-full py-12">
            <div className="my-10 space-y-6 flex flex-col md:flex-row items-center gap-5 md:gap-10 w-full">
              <div className="mt-6 space-y-6 w-full">
                <div>
                  <div className="relative">
                    <Input
                      type="text"
                      id="hs-cover-with-gradient-form-name-1"
                      className="py-5 ps-11 pe-4 block w-full bg-gray-200 dark:bg-white/10 border-2 border-gray-300 dark:border-white/20 font-medium text-gray-600 dark:text-white placeholder:text-gray-500 dark:placeholder:text-white rounded-lg focus:border-orange-500 tracking-wide sm:px-10 h-auto sm:py-6 sm:ps-14 text-lg capitalize"
                      placeholder="Full name"
                    />
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                      <svg
                        className="flex-shrink-0 size-6 text-orange-600 dark:text-neutral-500"
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
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <Input
                      type="email"
                      id="hs-cover-with-gradient-form-email-1"
                      className="py-5 ps-11 pe-4 block w-full bg-gray-200 dark:bg-white/10 border-2 border-gray-300 dark:border-white/20 font-medium text-gray-600 dark:text-white placeholder:text-gray-500 dark:placeholder:text-white rounded-lg focus:border-orange-500 tracking-wide sm:px-10 h-auto sm:py-6 sm:ps-14 text-lg"
                      placeholder="Email address"
                    />
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                      <svg
                        className="flex-shrink-0 size-6 text-orange-600 dark:text-neutral-500"
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
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid w-full">
                <Button
                  type="submit"
                  variant={"outline"}
                  className="sm:px-16 sm:py-3.5 py-5 px-10 mt-5 h-auto w-fit inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border-2 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none mx-auto"
                >
                  Join the waitlist
                  <FaAngleRight />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </main>
      {/* <!-- ========== END MAIN CONTENT ========== --> */}
    </>
  );
}

export default MainContent;
