"use client"
import React from "react";
import styles from "./CompaniesLogo.module.css";

function CompaniesLogo() {
  const logos = [
    {
      src: "/images/CompaniesLogos/CashplayLogo.png",
      alt: "Cashplay",
    },
    {
      src: "/images/CompaniesLogos/company-logo-catererss.png",
      alt: "Catererss",
    },
    {
      src: "/images/CompaniesLogos/company-logo-ekapde.png",
      alt: "Ekapde",
    },
    {
      src: "/images/CompaniesLogos/FrisconSolutionLogo.png",
      alt: "Friscon Solution",
    },
    {
      src: "/images/CompaniesLogos/WedwebaiLogo.png",
      alt: "Wedwebai",
    },
    {
      src: "/images/CompaniesLogos/wishfin-logo.svg",
      alt: "Wishfin",
    },
    {
      src: "/images/CompaniesLogos/k4-media-and-technologies-logo.png",
      alt: "K4 Media and Technologies",
    },
    {
      src: "/images/CompaniesLogos/CashplayLogo.png",
      alt: "Cashplay",
    },
    {
      src: "/images/CompaniesLogos/company-logo-catererss.png",
      alt: "Catererss",
    },
    {
      src: "/images/CompaniesLogos/company-logo-ekapde.png",
      alt: "Ekapde",
    },
    {
      src: "/images/CompaniesLogos/FrisconSolutionLogo.png",
      alt: "Friscon Solution",
    },
    {
      src: "/images/CompaniesLogos/WedwebaiLogo.png",
      alt: "Wedwebai",
    },
    {
      src: "/images/CompaniesLogos/wishfin-logo.svg",
      alt: "Wishfin",
    },
    {
      src: "/images/CompaniesLogos/k4-media-and-technologies-logo.png",
      alt: "K4 Media and Technologies",
    },
  ];

  return (
    <section className="bg-gradient-to-t from-gray-50 dark:from-neutral-900 mt-0">
      <div className="w-full flex flex-col gap-6 justify-center items-center px-10 py-10 md:py-20">
        <h2 className="scroll-m-20 text-3xl font-medium tracking-tight lg:text-5xl">
          Trusted by Leading Companies
        </h2>
        <p className="text-xl text-muted-foreground text-center">
          Top firms rely on our recruiting services to find exceptional talent.
        </p>
      </div>

      {/* // LOGOS */}
      <div className="w-full inline-flex flex-nowrap overflow-hidden bg-gradient-to-b from-gray-50 dark:from-neutral-900 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] p-14 md:p-24">
        <ul
          x-ref="logos"
          className={`flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-marquee ${styles.logo}`}
        >
          {logos.map((logo, index) => (
            <li key={index}>
              <img src={logo.src} alt={logo.alt} />
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
.animate-marquee {
    display: inline-flex;
    animation: marquee 30s linear infinite;
    }
    
    @keyframes marquee {
        0% {
            transform: translateX(0%);
            }
            100% {
                transform: translateX(-50%);
                }
                }
      `}</style>
    </section>
  );
}

export default CompaniesLogo;
