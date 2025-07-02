"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { CiLink } from "react-icons/ci";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { IoHammerOutline } from "react-icons/io5";
import { CiMoneyBill } from "react-icons/ci";
import { RxFileText } from "react-icons/rx";
import { MdOutlinePolicy } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";
import { MdSecurity } from "react-icons/md";
import { MdOutlineInstallDesktop } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { VscFeedback } from "react-icons/vsc";
import { GrSystem } from "react-icons/gr";
import { PiLinkSimpleBold, PiPassword } from "react-icons/pi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { BsChatDots, BsDatabase } from "react-icons/bs";
import { useRouter } from "next/navigation";


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function MainContent() {


  const popularQuestions = [
    {
      title: "What is Hirebie?",
      link: "/pages/faqs/What is Hirebie",
    },
    {
      title: "How does Hirebie work?",
      link: "/pages/faqs/How does Hirebie work",
    },
    {
      title: "How do I get a custom quote on Hirebie?",
      link: "/pages/faqs/How do I get a custom quote on Hirebie",
    },
    {
      title: "What services does Hirebie provide?",
      link: "/pages/faqs/What services does Hirebie provide",
    },
    {
      title: "How can I contact the Hirebie team?",
      link: "/pages/faqs/How can I contact the Hirebie team",
    },
    {
      title: "Does Hirebie offer project revisions?",
      link: "/pages/faqs/Does Hirebie offer project revisions",
    },
  ];
  


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  const popularLinks = [
    {
      title: "FAQs",
      link: "/pages/faqs",
      image: "/images/help_center/icons/faq.png",
    },
    {
      title: "Articles",
      link: "/pages/articles",
      image: "/images/help_center/icons/article.png",
    },
    {
      title: "Contact US",
      link: "/pages/contact",
      image: "/images/help_center/icons/contact.png",
    },
    {
      title: "Blogs",
      link: "/pages/blogs",
      image: "/images/help_center/icons/blog.png",
    },
    {
      title: "Full Guides",
      link: "/pages/guides",
      image: "/images/help_center/icons/guide.png",
    },
  ];


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  const helpLinks = [
    {
      title: "Getting Started",
      link: "/pages/gettingStarted",
      description:
        "Begin your journey with Hirebie by learning the basics and setting up your account.",
      icon: <HiOutlineRocketLaunch className="w-1/4 h-auto p-3" />,
      image: "",
    },
    {
      title: "Terms of Service",
      link: "/pages/terms",
      description:
        "Read the terms of service to understand the rules and guidelines for using Hirebie.",
      icon: <RxFileText className="w-1/4 h-auto p-3" />,
      image: "",
    },
    {
      title: "Privacy Policy",
      link: "/pages/privacy",
      description: "Review our privacy policy to learn how we protect and manage your personal information.",
      icon: <MdOutlinePolicy className="w-1/4 h-auto p-3" />,
      image: "",
    },
    {
      title: "Billing",
      link: "/pages/billing",
      description:
        "Access your billing information, manage payment methods, and view transaction history.",
      icon: <CiMoneyBill className="w-1/4 h-auto p-3" />,
      image: "",
    },
    {
      title: "Troubleshooting",
      link: "/pages/bugReport",
      description:
        "Bug Reporting System for Improving Your Job Search Experience at Hirebie",
      icon: <IoHammerOutline className="w-1/4 h-auto p-3" />,
      image: "",
    },
    {
      title: "FAQ",
      link: "/pages/faqs",
      description: "Explore frequently asked questions to get quick answers about using Hirebie.",
      icon: <LuMessagesSquare className="w-1/4 h-auto p-3" />,
      image: "",
    },
    {
      title: "Security",
      link: "/pages/security",
      description:
        "Learn about the measures we take to keep your account and data secure.",
      icon: <MdSecurity className="w-1/4 h-auto p-3" />,
      image: "",
    },
    {
      title: "Mobile App",
      link: "/pages/mobileApp",
      description: "Get started with the Hirebie mobile app and stay connected on the go.",
      icon: <MdOutlineInstallDesktop className="w-1/4 h-auto p-3" />,
      image: "",
    },
    {
      title: "Feature Updates",
      link: "/pages/announcement",
      description: "Stay informed about the latest features and enhancements to Hirebie.",
      icon: <CiViewList className="w-1/4 h-auto p-3" />,
      image: "",
    },
    {
      title: "Live Chat",
      link: "/pages/liveChat",
      description: "Chat live with our support team for immediate assistance.",
      icon: <BsChatDots className="w-1/4 h-auto p-3" />,
      image: "",
    },
    {
      title: "Feedback",
      link: "/pages/feedback",
      description: "Share your thoughts and suggestions to help us improve Hirebie.",
      icon: <VscFeedback className="w-1/4 h-auto p-3" />,
      image: "",
    },
    {
      title: "System Status",
      link: "/pages/systemStatus",
      description: "Check the current operational status of Hirebie’s systems.",
      icon: <GrSystem className="w-1/4 h-auto p-3" />,
      image: "",
    },
    {
      title: "Account Recovery",
      link: "/pages/accountRecovery",
      description: "Recover your Hirebie account if you’ve lost access.",
      icon: <MdOutlineAccountCircle className="w-1/4 h-auto p-2" />,
      image: "",
    },
    {
      title: "Password Reset",
      link: "/pages/passwordReset",
      description: "Reset your password if you’ve forgotten it or want to update it.",
      icon: <PiPassword className="w-1/4 h-auto p-3" />,
      image: "",
    },
    {
      title: "Data Export",
      link: "/pages/dataExport",
      description: "Export your data from Hirebie for your personal records.",
      icon: <BsDatabase className="w-1/4 h-auto p-3" />,
      image: "",
    },
  ];


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  const router = useRouter();


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  const handleSearch = () => {
    const searchInputElement = document.getElementById('searchInput') as HTMLInputElement | null;
    if (searchInputElement) {
      const searchInput = searchInputElement.value;
      if (searchInput.trim() !== '') {
        // Navigate to /faq with the search query as a parameter
        router.push(`/faqs/${encodeURIComponent(searchInput)}`);
      }
    }
  };


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  return (
    <>
      <section className="min-h-screen py-10 w-full pt-32 dark:bg-neutral-950">
        <div className="w-full flex justify-center items-center flex-col gap-6">
          <h2 className="text-2xl w-full text-center font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
            How we can help you
          </h2>
          <p className="text-sm w-full max-w-7xl text-center font-medium leading-tight text-gray-500 dark:text-neutral-400 sm:text-base lg:text-base">
            We are glad having you here looking for the answer.
          </p>
          <Input
            id="searchInput"
            type="text"
            placeholder="Frequently Asked Question Search...."
            className="px-4 md:px-10 h-16 text-lg sm:mx-auto w-11/12 md:w-8/12 lg:w-6/12 border-2 focus:outline-none m-auto md:rounded-full text-gray-800 dark:text-white mt-5"
          />
          <Button
            variant={"outline"}
            size={"lg"}
            title="Click to search in FAQ page"
            className="h-12 flex gap-1 items-center border-2 px-20 border-gray-200 min-w-fit w-1/8"
            onClick={handleSearch}
          >
            <CiLink className="text-xl" />
            Click to Search
          </Button>
        </div>
        <div className="w-full my-28 dark:contrast-[0.9]">
          <Image
            src={"/images/help_center/help.svg"}
            alt="Help graphics"
            width={800}
            height={800}
            className="w-full h-auto dark:invert dark:hue-rotate-[180deg] hidden md:block"
          />
        </div>

        <div className="w-full max-w-7xl mx-auto my-20">
          <Accordion type="single" defaultValue="item-1" collapsible>
            <AccordionItem value="item-1" className="border-none">
              <div className="flex justify-between px-10">
                <AccordionTrigger className="gap-2 hover:no-underline">
                  Popular Questions
                </AccordionTrigger>
                <Link
                  href={"/faqs"}
                  className="flex gap-2 items-center text-sm font-medium"
                >
                  FAQ Page
                  <FaAngleRight />
                </Link>
              </div>
              <AccordionContent>
                <div className="px-10 py-5 flex flex-wrap gap-6">
                  {popularQuestions.map((question, index) => (
                    <Link
                      key={index}
                      href={question.link}
                      className="no-underline bg-gray-100 dark:bg-neutral-900 px-6 py-2 h-auto rounded-lg flex-shrink-0 hover:bg-gray-300 duration-500 font-medium"
                    >
                      {question.title}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="bg-red-50 dark:bg-neutral-900 p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 my-20 px-10">
          {popularLinks.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="bg-white dark:bg-neutral-800 col-span-1 p-6 hover:no-underline rounded-xl flex items-center flex-col gap-y-3 hover:scale-105 duration-500"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={800}
                loading="lazy"
                className="w-1/3 h-auto p-2 dark:invert"
              />
              <h4 className="text-lg font-medium">{item.title}</h4>
            </Link>
          ))}
        </div>

        <div id="importantLinks" className="mt-32 px-10">
          <h3 className="text-4xl font-semibold mb-10 flex items-center gap-3">Important <span className="underline">Links</span><Link href={'#importantLinks'}><PiLinkSimpleBold className="hover:text-blue-500" /></Link></h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
            {helpLinks.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="bg-gray-50 dark:bg-neutral-900 col-span-1 p-6 hover:no-underline rounded-xl flex items-center justify-center flex-col gap-y-3"
              >
                {item.icon ? (
                  item.icon
                ) : (
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="w-1/3 h-auto p-2"
                  />
                )}
                <h4 className="text-lg font-medium">{item.title}</h4>
                <p className="text-sm font-normal text-center text-gray-400 mb-1">
                  {item.description}
                </p>
                <Button variant={"secondary"}>{item.title}</Button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default MainContent;
