import { Separator } from "@/components/ui/separator";
import React from "react";
import Introduction from "./Sections/Introduction";
import Image from "next/image";
import UserRegistration from "./Sections/UserRegistration";
import JobListingsAndApplications from "./Sections/JobListingsAndApplications";
import FeesAndPayments from "./Sections/FeesAndPayments";
import IntellectualPropertyRights from "./Sections/IntellectualPropertyRights";
import LimitationOfLiability from "./Sections/LimitationOfLiability";
import Termination from "./Sections/Termination";
import UserConduct from "./Sections/UserConduct";
import PrivacyPolicy from "./Sections/PrivacyPolicy";
import GoverningLawAndDisputeResolution from "./Sections/GoverningLawAndDisputeResolution";
import ChangesToTheTerms from "./Sections/ChangesToTheTerms";
import ContactInformation from "./Sections/ContactInformation";
import Disclaimers from "./Sections/Disclaimers";
import TermsOfUseForSpecificFeatures from "./Sections/TermsOfUseForSpecificFeatures";
import Miscellaneous from "./Sections/Miscellaneous";
import AdditionalTermsForMobileApplications from "./Sections/AdditionalTermsForMobileApplications";
import UserFeedbackAndSuggestions from "./Sections/UserFeedbackAndSuggestions";
import Link from "next/link";

function MainContent() {
  return (
    <>
      <div className="py-32 w-full max-w-6xl mx-auto font-sans leading-relaxed text-xl">
        <header className="space-y-10">
          <Link href={'/'}>
              <Image
            src={"/images/logo/cut_logo_long.png"}
            alt="Jobboost Logo"
            width={800}
            height={800}
            className="w-56 h-auto"
          />
          </Link>
          <h2 className="text-[9rem] leading-[8rem] font-bold">
            <span className="text-8xl text-gray-400">Terms and</span>
            <br />
            Conditions
          </h2>
        </header>
        <Separator className="my-20 bg-gray-500 rounded-full" />
        <div className="p-10 space-y-10">
          <p className="font-medium">
            Welcome to JobBoost! These Terms and Conditions (&#34;Terms&#34;) govern
            your use of the JobBoost website and services. By accessing or using
            our services, you agree to these Terms. If you do not agree with
            these Terms, please do not use our services.
          </p>
          <p>
            JobBoost, an innovative platform in the realm of Indian recruitment,
            provides a comprehensive suite of services designed to connect job
            seekers with employers across various industries. These Terms and
            Conditions outline the legal agreement between you (referred to as
            &#34;User,&#34; &#34;Client,&#34; or &#34;You&#34;) and JobBoost regarding the use of our
            website, located at jobboost.in, and all associated services
            provided therein.
          </p>
        </div>
        <Introduction />
        <UserRegistration />
        <JobListingsAndApplications />
        <FeesAndPayments/>
        <IntellectualPropertyRights />
        <UserConduct />
        <LimitationOfLiability />
        <Termination />
        <PrivacyPolicy />
        <GoverningLawAndDisputeResolution />
        <ChangesToTheTerms />
        <ContactInformation />
        <Disclaimers />
        <TermsOfUseForSpecificFeatures/>
        <Miscellaneous />
        <AdditionalTermsForMobileApplications />
        <UserFeedbackAndSuggestions/>
      </div>
    </>
  );
}

export default MainContent;
