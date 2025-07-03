import React from "react";
import { Separator } from "@/components/ui/separator";

function UserRegistration() {
  return (
    <>
      <Separator className="my-20 bg-gray-500 rounded-full" />
      <div className="p-10 space-y-10">
          <h3 className="font-bold text-4xl">2. User Registration</h3>
          <div className="space-y-6">
            <h4 className="font-bold text-2xl text-gray-800 mt-12">
              2.1. Overview
            </h4>
            <p>
              User registration is a fundamental step in accessing JobBoost’s
              services. This section outlines the process and requirements for
              registering as both a job seeker (candidate) and an employer.
              Registration grants users access to various features of the
              JobBoost platform, including job searches, application processes,
              and job postings. It is essential to understand and comply with
              the registration terms to ensure a smooth experience on JobBoost.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-2xl text-gray-800 mt-12">
              2.2. Candidate Registration
            </h4>
            <div className="space-y-6">
              <h5 className="font-bold text-xl text-gray-600 mt-10">
                2.2.1. Registration Process
              </h5>
              <p>
                To become a registered candidate on JobBoost, you must complete
                the registration process by providing specific personal and
                professional information. This process involves creating a
                candidate account that allows you to search for job
                opportunities, apply for positions, and manage your career
                profile. The steps involved in the candidate registration
                process are as follows:
              </p>

              <ul className="list-disc px-10 space-y-4">
                <li>
                  <b>Access the Registration Page:</b> Visit the JobBoost
                  website and navigate to the candidate registration page. This
                  page can be accessed from the home page or the &#34;Sign Up&#34;
                  section.
                </li>
                <li>
                  <b>Provide Personal Information:</b> Fill out the registration
                  form with accurate personal details including your full name,
                  contact number, email address, and current location. This
                  information is required to create your account and ensure that
                  you receive job notifications and updates.
                </li>
                <li>
                  <b>Create a Password:</b> Choose a strong password for your
                  account. Your password should be a combination of letters,
                  numbers, and special characters to ensure security. You will
                  need to remember this password for future logins.
                </li>
                <li>
                  <b>Upload Your Resume:</b> You will be required to upload a
                  current resume or CV. This document should include your
                  educational background, work experience, skills, and contact
                  details. A well-crafted resume helps employers evaluate your
                  qualifications.
                </li>
                <li>
                  <b>Agree to Terms and Conditions:</b> Before completing the
                  registration, you must read and accept the JobBoost Terms and
                  Conditions and Privacy Policy. This agreement confirms that
                  you understand and agree to the rules and practices governing
                  the use of the platform.
                </li>
                <li>
                  <b>Verification:</b> After submitting your registration
                  details, you will receive a verification email or SMS. Follow
                  the instructions in the email or SMS to verify your account.
                  This step is crucial to activate your account and start using
                  JobBoost’s features.
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="font-bold text-xl text-gray-600 mt-10">
                2.2.2. Responsibilities of Candidates
              </h5>
              <p>As a registered candidate, you are responsible for:</p>

              <ul className="list-disc px-10 space-y-4">
                <li>
                  <b>Providing Accurate Information:</b> Ensure that all
                  information provided during registration is truthful,
                  accurate, and complete. Misrepresentations can lead to account
                  suspension or termination.
                </li>
                <li>
                  <b>Maintaining Account Security:</b> Protect your account
                  credentials and notify JobBoost immediately if you suspect any
                  unauthorized access.
                </li>
                <li>
                  <b>Keeping Information Updated:</b> Regularly update your
                  resume, contact details, and other personal information to
                  reflect your current status and qualifications.
                </li>
                <li>
                  <b>Following Platform Guidelines:</b> Adhere to JobBoost’s
                  guidelines for job applications, including not engaging in
                  fraudulent or deceptive practices.
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="font-bold text-xl text-gray-600 mt-10">
                2.2.3. Registration Fee
              </h5>
              <p>
                To create a candidate account, a one-time registration fee of ₹9
                is charged. This fee is non-refundable and covers the costs
                associated with setting up your profile and providing access to
                basic job search features. By paying this fee, you gain access
                to:
              </p>

              <ul className="list-disc px-10 space-y-4">
                <li>
                  <b>Job Search Tools:</b> Access to search for job
                  opportunities based on various filters such as location,
                  industry, and job type.
                </li>
                <li>
                  <b>Application Features:</b> The ability to apply for jobs and
                  submit your resume to potential employers.
                </li>
                <li>
                  <b>Career Management:</b> Tools to manage your applications,
                  track job opportunities, and receive notifications about new
                  job listings.
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-2xl text-gray-800 mt-12">
              2.3. Company Registration
            </h4>
            <div className="space-y-6">
              <h5 className="font-bold text-xl text-gray-600 mt-10">
                2.3.1. Registration Process
              </h5>
              <p>
                To create a company profile on JobBoost, employers must follow
                these steps:
              </p>
              <ul className="list-disc px-10 space-y-4">
                <li>
                  <b>Visit the Company Registration Page:</b> Access the company
                  registration page from the JobBoost homepage or the &#34;Sign Up
                  for Companies&#34; section.
                </li>
                <li>
                  <b>Enter Company Details:</b> Provide the required company
                  information including the company name, contact information,
                  business registration number, and a brief description of your
                  company. Accurate details help ensure your company profile is
                  complete and searchable by job seekers.
                </li>
                <li>
                  <b>Create an Employer Account:</b> Choose a username and
                  password for your employer account. Ensure that your password
                  is secure and different from passwords used on other sites.
                </li>
                <li>
                  <b>Provide Payment Information:</b> Pay the one-time
                  registration fee of ₹99. This fee is non-refundable and is
                  required for setting up your company profile and accessing job
                  posting features.
                </li>
                <li>
                  <b>Agree to Terms and Conditions:</b> Read and accept the
                  JobBoost Terms and Conditions and Privacy Policy. This
                  agreement signifies that you understand and agree to
                  JobBoost’s rules and practices.
                </li>
                <li>
                  <b>Verification:</b> After registration and payment, you will
                  receive a verification email. Follow the instructions to
                  verify your company’s account and complete the registration
                  process.
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="font-bold text-xl text-gray-600 mt-10">
                2.3.2. Responsibilities of Employers
              </h5>
              <p>As a registered employer, you must:</p>
              <ul className="list-disc px-10 space-y-4">
                <li>
                  <b>Provide Accurate Company Information:</b> Ensure that all
                  information about your company, job postings, and recruitment
                  practices is accurate and up-to-date.
                </li>
                <li>
                  <b>Manage Job Postings:</b> Create and manage job listings on
                  JobBoost. This includes providing accurate job descriptions,
                  requirements, and application details.
                </li>
                <li>
                  <b>Ensure Compliance:</b> Follow all applicable laws and
                  regulations related to employment and recruitment. Ensure that
                  job postings comply with JobBoost’s policies and legal
                  requirements.
                </li>
                <li>
                  <b>Handle Applications Professionally:</b> Review job
                  applications, conduct interviews, and make hiring decisions
                  based on merit and qualifications.
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="font-bold text-xl text-gray-600 mt-10">
                2.3.3. Registration Fee
              </h5>
              <p>
                To create a company account, a one-time registration fee of ₹99
                is required. This fee is non-refundable and includes:
              </p>
              <ul className="list-disc px-10 space-y-4">
                <li>
                  <b>Job Posting Features:</b> Access to post job openings,
                  review applications, and manage the recruitment process.
                </li>
                <li>
                  <b>Recruitment Tools:</b> Basic tools for candidate screening,
                  interview scheduling, and application tracking.
                </li>
                <li>
                  <b>Platform Access:</b> The ability to use JobBoost’s services
                  for job recruitment and employer branding.
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-2xl text-gray-800 mt-12">
              2.4. Account Maintenance and Security
            </h4>
            <div className="space-y-6">
              <h5 className="font-bold text-xl text-gray-600 mt-10">
                2.4.1. Account Management
              </h5>
              <p>
                Both candidates and employers are responsible for managing their
                accounts effectively. This includes:
              </p>
              <ul className="list-disc px-10 space-y-4">
                <li>
                  <b>Monitoring Account Activity:</b> Regularly check your
                  account for updates, notifications, and messages.
                </li>
                <li>
                  <b>Updating Information:</b> Keep your profile information
                  current, including resume updates for candidates and job
                  postings for employers.
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="font-bold text-xl text-gray-600 mt-10">
                2.4.2. Security Measures
              </h5>
              <p>To protect your account:</p>
              <ul className="list-disc px-10 space-y-4">
                <li>
                  <b>Use Strong Passwords:</b> Create a unique and secure
                  password for your account.
                </li>
                <li>
                  <b>Enable Two-Factor Authentication:</b> If available, use
                  two-factor authentication for additional security.
                </li>
                <li>
                  <b>Report Security Issues:</b> Notify JobBoost immediately if
                  you suspect unauthorized access or other security concerns.
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-2xl text-gray-800 mt-12">
              2.5. Account Termination
            </h4>
            <div className="space-y-6">
              <h5 className="font-bold text-xl text-gray-600 mt-10">
                2.5.1. Termination by JobBoost
              </h5>
              <p>
                JobBoost reserves the right to terminate accounts if users
                violate Terms and Conditions, engage in fraudulent activities,
                or fail to comply with platform guidelines. Reasons for account
                termination include:
              </p>
              <ul className="list-disc px-10 space-y-4">
                <li>
                  <b>Violation of Terms:</b> Breach of these Terms or our
                  policies.
                </li>
                <li>
                  <b>Fraudulent Activity:</b> Engaging in deceptive practices or
                  misrepresenting information.
                </li>
                <li>
                  <b>Inactivity:</b> Prolonged periods of inactivity or failure
                  to update information.
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="font-bold text-xl text-gray-600 mt-10">
                2.5.2. Termination by Users
              </h5>
              <p>
                Users can terminate their accounts at any time. This process
                involves:
              </p>
              <ul className="list-disc px-10 space-y-4">
                <li>
                  <b>Following the Instructions:</b> Follow the account
                  deactivation instructions on the JobBoost website.
                </li>
                <li>
                  <b>No Refunds:</b> Fees paid for registration and services are
                  non-refundable.
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="font-bold text-xl text-gray-600 mt-10">
                2.5.3. Effects of Termination
              </h5>
              <p>Upon account termination:</p>
              <ul className="list-disc px-10 space-y-4">
                <li>
                  <b>Access to Services:</b> You will lose access to JobBoost’s
                  services and features.
                </li>
                <li>
                  <b>Data Retention:</b> We may retain certain data for legal or
                  business purposes, but your account information will no longer
                  be accessible.
                </li>
              </ul>
            </div>
          </div>
        </div>
    </>
  );
}

export default UserRegistration;
