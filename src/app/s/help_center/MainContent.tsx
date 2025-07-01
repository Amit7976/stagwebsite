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
      title: "What is JobBoost?",
      link: "/pages/faqs/What is JobBoost",
    },
    {
      title: "Is JobBoost free?",
      link: "/pages/faqs/Is JobBoost free",
    },
    {
      title: "I am forget password",
      link: "/pages/faqs/I am forget password",
    },
    {
      title: "My personal information is secure?",
      link: "/pages/faqs/My personal information is secure",
    },
    {
      title: "Search jobs on JobBoost?",
      link: "/pages/faqs/search jobs on JobBoost?",
    },
    {
      title: "How i update my profile on JobBoost?",
      link: "/pages/faqs/how i update my profile on JobBoost",
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
        "Begin your journey with Jobboost by learning the basics and setting up your account.",
      icon: <HiOutlineRocketLaunch className="w-1/4 h-auto p-3" />,
      image: "",
    },
    {
      title: "Terms of Service",
      link: "/pages/terms",
      description:
        "Read the terms of service to understand the rules and guidelines for using Jobboost.",
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
        "Bug Reporting System for Improving Your Job Search Experience at Jobboost",
      icon: <IoHammerOutline className="w-1/4 h-auto p-3" />,
      image: "",
    },
    {
      title: "FAQ",
      link: "/pages/faqs",
      description: "Explore frequently asked questions to get quick answers about using Jobboost.",
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
      description: "Get started with the Jobboost mobile app and stay connected on the go.",
      icon: <MdOutlineInstallDesktop className="w-1/4 h-auto p-3" />,
      image: "",
    },
    {
      title: "Feature Updates",
      link: "/pages/announcement",
      description: "Stay informed about the latest features and enhancements to Jobboost.",
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
      description: "Share your thoughts and suggestions to help us improve Jobboost.",
      icon: <VscFeedback className="w-1/4 h-auto p-3" />,
      image: "",
    },
    {
      title: "System Status",
      link: "/pages/systemStatus",
      description: "Check the current operational status of Jobboost’s systems.",
      icon: <GrSystem className="w-1/4 h-auto p-3" />,
      image: "",
    },
    {
      title: "Account Recovery",
      link: "/pages/accountRecovery",
      description: "Recover your Jobboost account if you’ve lost access.",
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
      description: "Export your data from Jobboost for your personal records.",
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
      <section className="min-h-screen py-10 w-full pt-32">
        <div className="w-full flex justify-center items-center flex-col gap-6">
          <h2 className="text-2xl w-full text-center font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            How we can help you
          </h2>
          <p className="text-sm w-full max-w-7xl text-center font-medium leading-tight text-gray-500 sm:text-base lg:text-base">
            We are glad having you here looking for the answer.
          </p>
          <Input
            id="searchInput"
            type="text"
            placeholder="Frequently Asked Question Search...."
            className="px-10 h-16 text-lg sm:mx-auto w-6/12 border-2 focus:outline-none m-auto rounded-full text-gray-800 mt-5"
          />
          <Button
            variant={"outline"}
            size={"lg"}
            title="Click to search in FAQ page"
            className="w-fit h-12 mx-auto flex gap-1 items-center border-2"
            onClick={handleSearch}
          >
            <CiLink className="text-xl" />
            Click to Search
          </Button>
        </div>
        <div className="w-full my-28 ">
          <Image
            src={"/images/help_center/help.svg"}
            alt="Help graphics"
            width={800}
            height={800}
            className="w-full h-auto"
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
                      className="no-underline bg-gray-100 px-6 py-2 h-auto rounded-lg flex-shrink-0 hover:bg-gray-300 duration-500 font-medium"
                    >
                      {question.title}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="bg-blue-50 p-10 grid grid-cols-5 gap-10 my-20 px-10">
          {popularLinks.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="bg-white col-span-1 p-6 hover:no-underline rounded-xl flex items-center flex-col gap-y-3 hover:scale-105 duration-500"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={800}
                loading="lazy"
                className="w-1/3 h-auto p-2"
              />
              <h4 className="text-lg font-medium">{item.title}</h4>
            </Link>
          ))}
        </div>

        <div id="importantLinks" className="space-y-10 mt-32 px-10">
          <h3 className="text-4xl font-semibold mb-5 flex items-center gap-3">Important <span className="underline">Links</span><Link href={'#importantLinks'}><PiLinkSimpleBold className="hover:text-blue-500" /></Link></h3>
          <div className="grid grid-cols-4 gap-20">
            {helpLinks.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="bg-gray-50 col-span-1 p-6 hover:no-underline rounded-xl flex items-center justify-center flex-col gap-y-3"
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
