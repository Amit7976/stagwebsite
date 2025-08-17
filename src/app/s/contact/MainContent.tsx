"use client"
import { ICompanyMail } from "@/models/companyMailModel";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRightLong, FaRss } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { PiChatsDuotone } from "react-icons/pi";
import { TfiAnnouncement } from "react-icons/tfi";
import ContactForm from "./ContactForm";


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


function MainContent() {

  const [allEmails, setAllEmails] = useState<ICompanyMail[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchAllEmails = async () => {
    try {
      const res = await fetch("/api/companyMails");
      const data = await res.json();
      if (data.success) {
        setAllEmails(data.data);
      }
    } catch (error) {
      console.error("Error fetching Emails:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllEmails();
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
      <section className="h-fit w-full grid grid-cols-1 lg:grid-cols-5 gap-2 p-5 md:p-10">
        <div className="col-span-2 p-4 md:p-16 md:px-10 order-last lg:order-first">
          <div className="divide-y divide-gray-200 dark:divide-neutral-800">
            <div className="flex gap-x-7 py-6">
              <FaRss className="flex-shrink-0 size-6 mt-1.5 text-gray-800 dark:text-neutral-200" />
              <Link href={"/s/social"} className="grow">
                <h3 className="font-semibold text-gray-800 dark:text-neutral-200">
                  Social Media
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                  Explore all our social media platforms
                </p>
                <p className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium font-sans2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200">
                  Explore Now
                  <FaArrowRightLong className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1" />
                </p>
              </Link>
            </div>

            <div className="flex gap-x-7 py-6">
              <PiChatsDuotone className="flex-shrink-0 size-6 mt-1.5 text-gray-800 dark:text-neutral-200" />
              <Link href={"/s/faqs"} className="grow">
                <h3 className="font-semibold text-gray-800 dark:text-neutral-200">
                  FAQ
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                  Search our FAQ for answers to anything you might ask.
                </p>
                <p className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium font-sans2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200">
                  Visit FAQ
                  <FaArrowRightLong className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1" />
                </p>
              </Link>
            </div>

            <div className="flex gap-x-7 py-6">
              <GoMail className="flex-shrink-0 size-6 mt-1.5 text-gray-800 dark:text-neutral-200" />
              <Link href={"mailto::contact@hirebie.com"} className="grow">
                <h3 className="font-semibold text-gray-800 dark:text-neutral-200">
                  Contact us by email
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                  If you wish to write us an email instead please use
                </p>
                <p className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium font-sans2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200">
                  contact@hirebie.com
                </p>
              </Link>
            </div>

            <div className=" flex gap-x-7 py-6">
              <TfiAnnouncement className="flex-shrink-0 size-6 mt-1.5 text-gray-800 dark:text-neutral-200" />
              <Link href={"/s/career"} className="grow">
                <h3 className="font-semibold text-gray-800 dark:text-neutral-200">
                  We&#39;re hiring
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                  We&#39;re thrilled to announce that we&#39;re expanding our team and
                  looking for talented individuals like you to join us.
                </p>
                <p className="group inline-flex items-center gap-x-2 font-medium text-sm text-[#FD4D05] decoration-2 hover:underline focus:outline-none focus:underline mt-2">
                  Job openings
                  <FaArrowRightLong className="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-focus:translate-x-0.5" />
                </p>
              </Link>
            </div>
          </div>
        </div>

        <ContactForm />
      </section>

      <section className="mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-5 lg:p-20">
          <div className="col-span-1 space-y-4">
            <h3 className="text-4xl font-bold">Get in touch</h3>
            <p className="text-base font-medium">
              Here are all our contact email addresses. Contact us for quick and
              dedicated support!
            </p>
          </div>
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-14">
            {allEmails.map((email, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-neutral-900 rounded-xl p-10 pb-5 col-span-1"
              >
                <Link
                  href={"mailto::" + email.email}
                  className="space-y-3 pb-0 w-full"
                >
                  <h5 className="text-lg font-semibold">{email.name}</h5>
                  <p className="text-base font-normal text-orange-500">
                    {email.email}
                  </p>
                  <p className="text-sm font-medium text-gray-500">
                    {email.description}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default MainContent;
