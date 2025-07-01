import React from "react";
import Image from "next/image";
import Link from "next/link";
import Introduction from "./Sections/Introduction";
import CookiesAndTrackingTechnologies from "./Sections/CookiesAndTrackingTechnologies";
import DataProtectionRights from "./Sections/DataProtectionRights";
import DataUsage from "./Sections/DataUsage";
import DataRetentionPolicies from "./Sections/DataRetentionPolicies";
import InformationCollection from "./Sections/InformationCollection";
import ThirdPartyServices from "./Sections/ThirdPartyServices";
import InternationalDataTransfers from "./Sections/InternationalDataTransfers";
import DataProtectionForMinors from "./Sections/DataProtectionForMinors";
import DataProtectionForUsers from "./Sections/DataProtectionForUsers";
import LegalCompliance from "./Sections/LegalCompliance";
import SecurityMeasures from "./Sections/SecurityMeasures";
import UpdatesToThePrivacyPolicy from "./Sections/UpdatesToThePrivacyPolicy";
import YourRightsRegardingData from "./Sections/YourRightsRegardingData";

function MainContent() {
  return (
    <>
      <div className="py-32 w-full max-w-6xl mx-auto font-sans leading-relaxed text-xl">
        <header className="space-y-10 ">
          <Link href={'/'}>
              <Image
            src={"/images/logo/cut_logo_long.png"}
            alt="Jobboost Logo"
            width={800}
            height={800}
            className="w-56 h-auto"
          />
          </Link>
          <h2 className="text-[9rem] leading-[8rem] font-bold text-gray-400">
            <span className="text-5xl text-black">Privacy</span>
            <br />
            Policy
          </h2>
        </header>
        
        <Introduction />
        <InformationCollection />
        <DataUsage />
        <DataProtectionRights />
        <DataRetentionPolicies />
        <CookiesAndTrackingTechnologies />
        <ThirdPartyServices/>
        <InternationalDataTransfers />
        <DataProtectionForMinors />
        <SecurityMeasures />
        <YourRightsRegardingData/>
        <DataProtectionForUsers />
        <LegalCompliance />
        <UpdatesToThePrivacyPolicy />
      </div>
    </>
  );
}

export default MainContent;
