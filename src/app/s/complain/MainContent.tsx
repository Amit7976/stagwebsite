import Image from "next/image";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaRegUser, FaUserTie } from "react-icons/fa6";
import { IoBusinessOutline } from "react-icons/io5";
import AgainstCandidate from "./AgainstCandidate";
import AgainstRecruiter from "./AgainstRecruiter";
import AgainstCompany from "./AgainstCompany";

function MainContent() {
  return (
    <>
      <section className="py-10 px-10">
        <Tabs defaultValue="againstCandidate" className="w-full">
          <TabsList className="grid grid-cols-3 gap-10">
            <TabsTrigger
              value="againstCandidate"
              className="text-start hover:bg-gray-100 p-4 md:p-5 rounded-xl dark:hover:bg-neutral-700"
            >
              <span className="flex flex-col gap-3">
                <FaRegUser className="flex-shrink-0 size-5 md:size-6 text-gray-500 dark:text-neutral-200" />
                <span className="grow">
                  <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                    Against Candidate
                  </span>
                  <span className="block mt-1 text-gray-500 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                    Provide details about any problems you experienced with a
                    candidate during the hiring process.
                  </span>
                </span>
              </span>
            </TabsTrigger>

            <TabsTrigger
              value="againstRecruiter"
              className="text-start hover:bg-gray-100 p-4 md:p-5 rounded-xl dark:hover:bg-neutral-700"
            >
              <span className="flex flex-col gap-3">
                <FaUserTie className="flex-shrink-0 mt-2 size-5 md:size-6 text-gray-800 dark:text-neutral-200" />
                <span className="grow">
                  <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                    Against Recruiter
                  </span>
                  <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                    Provide details of any issues or negative experiences you
                    had with the recruiter during the hiring process.
                  </span>
                </span>
              </span>
            </TabsTrigger>

            <TabsTrigger
              value="againstCompany"
              className="text-start hover:bg-gray-100 p-4 md:p-5 rounded-xl dark:hover:bg-neutral-700"
            >
              <span className="flex flex-col gap-3">
                <IoBusinessOutline className="flex-shrink-0 mt-2 size-5 md:size-6 text-gray-800 dark:text-neutral-200" />
                <span className="grow">
                  <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                    Against Company
                  </span>
                  <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                    Complaints regarding Company operations, customer service,
                    treatment of employees or any other concern.
                  </span>
                </span>
              </span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="againstCandidate" className="mt-10 p-10 pb-0">
            <AgainstCandidate />
          </TabsContent>
          <TabsContent value="againstRecruiter" className="mt-10 p-10 pb-0">
            <AgainstRecruiter />
          </TabsContent>
          <TabsContent value="againstCompany" className="mt-10 p-10 pb-0">
            <AgainstCompany />
          </TabsContent>
        </Tabs>
      </section>
      {/* <AgainstCandidate /> */}
    </>
  );
}

export default MainContent;
