"use client";
import React from "react";

function ServicesMarquee() {
  const services = [
    "SaaS Product Development",
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Cloud & DevOps",
    "SaaS Product Development",
    "Mobile App Development",
    "UI/UX Design",
    "Web Development",
    "MVP Development",
    "Maintenance & Support",
    "Branding & Identity",
    "Startup Consulting",
    "Digital Marketing",
    "UI/UX Design",
    "SEO & Content",
    "Web Development",
    "Branding & Identity",
    "E-commerce Solutions",
    "Mobile App Development",
    "Maintenance & Support",
    "UI/UX Design",
    "Custom ERP",
    "Web Development",
    "CRM Solutions",
    "Business Analytics",
    "Cybersecurity",
    "Mobile App Development",
    "UI/UX Design",
    "Branding & Identity",
    "API Development",
    "Maintenance & Support",
    "Web Development",
    "Investor Relations Support",
    "SaaS Product Development",
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Cloud & DevOps",
    "SaaS Product Development",
    "Mobile App Development",
    "UI/UX Design",
    "Web Development",
    "MVP Development",
    "Maintenance & Support",
    "Branding & Identity",
    "Startup Consulting",
    "Digital Marketing",
    "UI/UX Design",
    "SEO & Content",
    "Web Development",
    "Branding & Identity",
    "E-commerce Solutions",
    "Mobile App Development",
    "Maintenance & Support",
    "UI/UX Design",
    "Custom ERP",
    "Web Development",
    "CRM Solutions",
    "Business Analytics",
    "Cybersecurity",
    "Mobile App Development",
    "UI/UX Design",
    "Branding & Identity",
    "API Development",
    "Maintenance & Support",
    "Web Development",
    "Investor Relations Support",
    "SaaS Product Development",
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Cloud & DevOps",
    "SaaS Product Development",
    "Mobile App Development",
    "UI/UX Design",
    "Web Development",
    "MVP Development",
    "Maintenance & Support",
    "Branding & Identity",
    "Startup Consulting",
    "Digital Marketing",
    "UI/UX Design",
    "SEO & Content",
    "Web Development",
    "Branding & Identity",
    "E-commerce Solutions",
    "Mobile App Development",
    "Maintenance & Support",
    "UI/UX Design",
    "Custom ERP",
    "Web Development",
    "CRM Solutions",
    "Business Analytics",
    "Cybersecurity",
    "Mobile App Development",
    "UI/UX Design",
    "Branding & Identity",
    "API Development",
    "Maintenance & Support",
    "Web Development",
    "Investor Relations Support",
  ];

  return (
    <section className="bg-white dark:bg-neutral-950">
      <div className="text-center bg-neutral-200 dark:bg-black overflow-hidden rounded-b-4xl">
        <div className="w-full inline-flex flex-nowrap overflow-hidden relative [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          {/* Row 1 */}
          <div className="flex animate-marquee whitespace-nowrap">
            {services.map((service, index) => (
              <p
                key={index}
                className="text-xl font-medium text-gray-800 inline-block dark:text-gray-300 bg-gray-100 dark:bg-neutral-950 px-8 py-2 my-3 mx-4 rounded-full"
              >
                {service}
              </p>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 400s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
}

export default ServicesMarquee;
