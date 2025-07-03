import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FaArrowRightLong, FaRss } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { PiChatsDuotone } from "react-icons/pi";
import { TfiAnnouncement } from "react-icons/tfi";

function MainContent() {
  const allEmails = [
    {
      title: "Contact",
      email: "contact@hirebie.com",
      description: "For general communication and queries.",
    },
    {
      title: "Help",
      email: "help@hirebie.com",
      description: "Assistance and support for any issues or questions.",
    },
    {
      title: "Say hello",
      email: "hello@hirebie.com",
      description: "For greeting or general mail.",
    },
    {
      title: "Support Team",
      email: "support@hirebie.com",
      description: "For resolving issues and answering questions.",
    },
    {
      title: "General Inquiries",
      email: "info@hirebie.com",
      description: "General information about Us and our services.",
    },
    {
      title: "Join our team",
      email: "career@hirebie.com",
      description: "Inquiries about job openings and career opportunities.",
    },
    {
      title: "Legal work",
      email: "legal@hirebie.com",
      description: "Legal inquiries and compliance matters.",
    },
    {
      title: "Customer Feedback",
      email: "feedback@hirebie.com",
      description:
        "For Share your experiences and provide feedback on our services.",
    },
  ];

  return (
    <>
      <section className="h-fit w-full grid grid-cols-1 lg:grid-cols-5 gap-2 p-5 md:p-10">
        <div className="col-span-2 p-0 p-4 md:p-16 md:px-10 order-last lg:order-first">
          <div className="divide-y divide-gray-200 dark:divide-neutral-800">
            <div className="flex gap-x-7 py-6">
              <FaRss className="flex-shrink-0 size-6 mt-1.5 text-gray-800 dark:text-neutral-200" />
              <Link href={"/social"} className="grow">
                <h3 className="font-semibold text-gray-800 dark:text-neutral-200">
                  Social Media
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                  Explore all our social media platforms
                </p>
                <p className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium font-sans2 font-sans2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200">
                  Explore Now
                  <FaArrowRightLong className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1" />
                </p>
              </Link>
            </div>

            <div className="flex gap-x-7 py-6">
              <PiChatsDuotone className="flex-shrink-0 size-6 mt-1.5 text-gray-800 dark:text-neutral-200" />
              <Link href={"/faqs"} className="grow">
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
              <Link href={"/career"} className="grow">
                <h3 className="font-semibold text-gray-800 dark:text-neutral-200">
                  We're hiring
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                  We're thrilled to announce that we're expanding our team and
                  looking for talented individuals like you to join us.
                </p>
                <p className="group inline-flex items-center gap-x-2 font-medium text-sm text-[#FD4D05] decoration-2 hover:underline focus:outline-none focus:underline mt-2">
                  Job openings
                  <FaArrowRightLong className="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0" />
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-3 bg-gray-100 dark:bg-neutral-900 rounded-3xl my-5 py-6 p-4 md:p-16">
          <div className="mb-10 space-y-3">
            <h2 className="text-4xl font-white font-semibold">
              Want Service? <span className="text-orange-600">We have</span> skilled <span className="text-orange-600">Professionals</span>. Let's get in <span className="text-orange-600">touch</span>
            </h2>
            <p className="text-lg font-medium text-gray-400">
              Get in touch with our team for any assistance or information you
              require
            </p>
          </div>
          <form>
            <div className="space-y-4">
              <div className="relative">
                <Input
                  type="text"
                  id="hs-tac-input-name"
                  className="peer p-4 block w-full bg-transparent  border-0 dark:bg-neutral-800 border-b-2 dark:border-0 dark:rounded-xl rounded-none border-black text-base text-black font-medium tracking-wide placeholder:text-transparent focus:outline-none focus:ring-0 disabled:opacity-50 disabled:pointer-events-none capitalize h-16 focus:pt-6 focus:pb-4 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-4 autofill:pt-6 autofill:pb-4"
                  autoComplete="name"
                  placeholder="Name"
                />
                <label
                  className="absolute top-0 start-0 p-4 h-full text-gray-500 text-base font-medium truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-2"
                >
                  Name
                </label>
              </div>

              <div className="relative">
                <Input
                  type="tel"
                  id="hs-tac-input-number"
                  className="peer h-16 p-4 block w-full bg-transparent  border-0 dark:bg-neutral-800 border-b-2 dark:border-0 dark:rounded-xl rounded-none border-black text-base text-black font-medium tracking-wide placeholder:text-transparent focus:outline-none focus:ring-0 disabled:opacity-50 disabled:pointer-events-none lowercase focus:pt-6 focus:pb-4 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-4 autofill:pt-6 autofill:pb-4"
                  placeholder="Phone Number"
                />
                <label
                  className="absolute top-0 start-0 p-4 h-full text-gray-500 text-base font-medium truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-2"
                >
                  Phone Number
                </label>
              </div>

              <div className="relative">
                <Input
                  type="email"
                  id="hs-tac-input-email"
                  className="peer h-16 p-4 block w-full bg-transparent  border-0 dark:bg-neutral-800 border-b-2 dark:border-0 dark:rounded-xl rounded-none border-black text-base text-black font-medium tracking-wide placeholder:text-transparent focus:outline-none focus:ring-0 disabled:opacity-50 disabled:pointer-events-none lowercase focus:pt-6 focus:pb-4 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-4 autofill:pt-6 autofill:pb-4"
                  placeholder="Email"
                />
                <label
                  className="absolute top-0 start-0 p-4 h-full text-gray-500 text-base font-medium truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-2"
                >
                  Email
                </label>
              </div>
              <div className="relative">
                <Input
                  type="text"
                  id="hs-tac-input-company"
                  className="peer h-16 p-4 block w-full bg-transparent  border-0 dark:bg-neutral-800 border-b-2 dark:border-0 dark:rounded-xl rounded-none border-black text-base text-black font-medium tracking-wide placeholder:text-transparent focus:outline-none focus:ring-0 disabled:opacity-50 disabled:pointer-events-none capitalize focus:pt-6 focus:pb-4 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-4 autofill:pt-6 autofill:pb-4"
                  placeholder="Company"
                />
                <label
                  className="absolute top-0 start-0 p-4 h-full text-gray-500 text-base font-medium truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-2"
                >
                  Company (Optional)
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="hs-tac-message"
                  className="peer h-40 p-4 block w-full bg-transparent border-0 dark:bg-neutral-800 border-b-2 dark:border-0 dark:rounded-xl rounded-none border-black text-base text-black font-medium tracking-wide placeholder:text-transparent focus:outline-none focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-4 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-4 autofill:pt-6 autofill:pb-4"
                  placeholder="This is a textarea placeholder"
                ></textarea>
                <label
                  className="absolute top-0 start-0 p-4 h-full text-gray-500 text-base font-medium truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-2"
                >
                  Why do you want to contact us?
                </label>
              </div>
            </div>

            <div className="mt-10">
              <Button
                variant={"outline"}
                className="flex items-center gap-x-2 py-4 md:py-3 w-full md:w-1/2 h-auto bg-orange-600 dark:bg-orange-600 hover:bg-orange-700 dark:hover:bg-orange-700 hover:text-white active:scale-95 duration-300 text-base text-gray-100 font-medium rounded-full focus:outline-none"
              >
                Submit
                <FaArrowRightLong className="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0" />
              </Button>
            </div>
          </form>
        </div>
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
                  <h5 className="text-lg font-semibold">{email.title}</h5>
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
