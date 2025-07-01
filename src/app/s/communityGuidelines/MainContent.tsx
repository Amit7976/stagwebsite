import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProfessionalConductAndRespectfulCommunication from "./Sections/ProfessionalConductAndRespectfulCommunication";
import JobPostingAccuracyAndIntegrity from "./Sections/JobPostingAccuracyAndIntegrity";
import PrivacyAndDataProtection from "./Sections/PrivacyAndDataProtection";
import SecurityAndAccountManagement from "./Sections/SecurityAndAccountManagement";
import ProhibitedBehaviorsAndContent from "./Sections/ProhibitedBehaviorsAndContent";
import UserResponsibilitiesAndConduct from "./Sections/UserResponsibilitiesAndConduct";
import FeesAndCharges from "./Sections/FeesAndCharges";
import TerminationOfServicesAndDisputeResolution from "./Sections/TerminationOfServicesAndDisputeResolution";
import UpdatesToCommunityGuidelines from "./Sections/UpdatesToCommunityGuidelines";

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
            <span className="text-8xl text-gray-400">Community</span>
            <br />
            Guidelines
          </h2>
        </header>
        
        <ProfessionalConductAndRespectfulCommunication />
        <JobPostingAccuracyAndIntegrity />
        <PrivacyAndDataProtection />
        <SecurityAndAccountManagement />
        <ProhibitedBehaviorsAndContent />
        <UserResponsibilitiesAndConduct />
        <FeesAndCharges />
        <TerminationOfServicesAndDisputeResolution />
        <UpdatesToCommunityGuidelines />
      </div>
    </>
  );
}

export default MainContent;
