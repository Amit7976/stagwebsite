import Footer from '@/components/MainUi/Footer/Footer';
import Header from '@/components/MainUi/Header/Header';
import React from 'react'

function page() {
    const menuItems = {
    Explores: [
      { text: "Jobs Listings", link: "/jobs" },
      { text: "Companies", link: "" },
      { text: "Job Seekers", link: "/candidates" },
      { text: "Login/Sign Up", link: "" },
      { text: "Employer Portal", link: "" },
    ],
    Learn: [
      { text: "Courses", link: "" },
      { text: "Articles", link: "" },
      { text: "Guides", link: "" },
      { text: "Career Advice", link: "" },
    ],
    Resources: [
      { text: "Blogs", link: "/blogs" },
      { text: "Live Events", link: "" },
      { text: "Webinars", link: "" },
      { text: "Sitemap", link: "/sitemap" },
    ],
    Products: [
      { text: "Resume Builder", link: "/resumeBuilder" },
      { text: "ATS Tool", link: "/atsTool" },
      { text: "Store", link: "/store" },
      { text: "Idea Hub", link: "/ideaHub" },
    ],
    Help: [
      { text: "Help Center", link: "/helpCenter" },
      { text: "FAQs", link: "/faqs" },
      { text: "Complain", link: "/complain" },
      { text: "Bug Report", link: "/bugReport" },
    ],
    "For Job Seekers": [
      { text: "Go Pro", link: "" },
      { text: "Announcement", link: "" },
      { text: "Job Alerts", link: "/jobAlerts" },
      { text: "Testimonials", link: "/testimonials" },
    ],
    Social: [
      { text: "Instagram", link: "https://www.instagram.com/jobboost_in/" },
      {
        text: "Facebook",
        link: "https://www.facebook.com/profile.php?id=61558875241634&mibextid=ZbWKwL",
      },
      { text: "Tweeter(X)", link: "https://x.com/jobboost_20" },
      {
        text: "LinkedIn",
        link: "https://www.linkedin.com/company/jobboost-india",
      },
      {
        text: "Whatsapp",
        link: "https://api.whatsapp.com/send/?phone=919660050909",
      },
    ],
    Solutions: [
      { text: "Human Resources", link: "" },
      { text: "Sales & Marketing", link: "" },
      { text: "Revenue", link: "" },
      { text: "Investor", link: "" },
    ],
    Company: [
      { text: "Our Story", link: "/ourStory" },
      { text: "Press", link: "" },
      { text: "Contact", link: "/contact" },
      { text: "Team", link: "/team" },
      { text: "Career", link: "/career" },
    ],
    Policies: [
      { text: "Terms and Conditions", link: "/terms" },
      { text: "Privacy Policy", link: "/privacy" },
      { text: "Community Guidelines", link: "" },
      { text: "Legal", link: "" },
      { text: "Cookies Policy", link: "" },
    ],
  };
  return (
    <>
      <Header position='sticky'/>
      
      <div className="p-10">
        <h2 className="text-base lg:text-9xl font-bold text-black select-none">
                  Sitemap
                </h2>
      </div>
      <div className="w-full space-y-28 py-28 px-20">
          {Object.entries(menuItems).map(([section, items]) => (
            <div>
              <h6 className="text-base lg:text-5xl font-bold text-gray-700 select-none">
                  {section}
                </h6>
            <ul key={section} className="flex items-center flex-wrap gap-10 my-16">
              {items.map(({ text, link }) => (
                <li
                  key={text}
                  className={`my-2.5  ${link ? "opacity-100" : "opacity-40"}`}
                >
                  {link ? (
                    <a
                      href={link}
                      className="text-lg font-medium text-gray-900 bg-gray-300 flex-shrink-0 rounded-xl px-20 py-4"
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-lg font-medium text-gray-900 bg-gray-300 flex-shrink-0 rounded-xl px-20 py-4">
                      {text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
                </div>
          ))}
      </div>
      
      <Footer/>
      </>
  )
}

export default page