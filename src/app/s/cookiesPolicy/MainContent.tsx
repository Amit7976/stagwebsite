import React from "react";
import Image from "next/image";
import Link from "next/link";
import Introduction from "./Sections/Introduction";
import TypesOfCookiesWeUse from "./Sections/TypesOfCookiesWeUse";
import ThirdPartyCookies from "./Sections/ThirdPartyCookies";
import HowToManageCookies from "./Sections/HowToManageCookies";
import CookiePolicyUpdates from "./Sections/CookiePolicyUpdates";
import CookiesPolicyForHirebieServices from "./Sections/CookiesPolicyForHirebieServices";
import ContactInformation from "./Sections/ContactInformation";
import LegalCompliance from "./Sections/LegalCompliance";
import CookiePolicyForMobileApps from "./Sections/CookiePolicyForMobileApps";


function MainContent() {
  return (
    <>
      <div className="py-32 w-full max-w-6xl mx-auto font-sans leading-relaxed text-xl">
        <header className="space-y-10 ">
          <Link href={'/'}>
              <Image
            src={"/images/logo/logo.svg"}
            alt="Hirebie Logo"
            width={800}
            height={800}
            className="w-56 h-auto"
          />
          </Link>
          <h2 className="text-[10rem] leading-[8rem] font-bold text-gray-400">
            <span className="text-5xl text-black">Cookies</span>
            <br />
            Policy
          </h2>
        </header>
        
        <Introduction />
        <TypesOfCookiesWeUse />
        <ThirdPartyCookies />
        <HowToManageCookies />
        <CookiePolicyUpdates />
        <CookiesPolicyForHirebieServices/>
        <ContactInformation />
        <LegalCompliance />
        <CookiePolicyForMobileApps/>
      </div>
    </>
  );
}

export default MainContent;
