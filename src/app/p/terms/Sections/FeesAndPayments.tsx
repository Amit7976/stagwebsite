import { Separator } from '@/components/ui/separator'
import React from 'react'

function FeesAndPayments() {
return (
<>
<Separator className="my-20 bg-gray-500 rounded-full" />
<div className="p-10 space-y-10">
<h3 className="font-bold text-4xl">4. Fees and Payments</h3>
<p>At JobBoost, we strive to provide transparent and fair pricing for our services. This section outlines the various fees associated with our platform, including registration fees for candidates and companies, charges for boosting job posts, the placement fee for successful job placements, and details about payment methods, refunds, and cancellations. We are committed to ensuring that you understand our fee structure and the processes involved in making payments.</p>
<div className="space-y-6">
<h4 className="font-bold text-2xl text-gray-800 mt-12">4.1. Registration Fees</h4>
<h5 className="font-bold text-xl text-gray-600 mt-10">4.1.1. Candidate Registration Fee</h5>
<p>To create a profile on JobBoost and gain access to our job search features, candidates are required to pay a one-time registration fee of ₹9. This fee is charged to cover the initial costs associated with setting up and maintaining your profile. The registration fee is non-refundable and is required at the time of account creation.</p>
<p>   <b className="font-bold text-2xl text-gray-700">This fee allows you to:</b></p>
<ul className="list-disc px-10 space-y-4">
<li><b>Create and Manage Your Profile:</b> Set up your job seeker profile, including your resume, personal details, and career preferences.</li>
<li><b>Access Job Listings:</b> Search for job opportunities across various industries and locations.</li>
<li><b>Apply for Jobs:</b> Submit applications for job openings directly through the JobBoost platform.</li>
<li><b>Receive Job Alerts:</b> Get notifications about new job postings that match your skills and interests.</li>
</ul>
<h5 className="font-bold text-xl text-gray-600 mt-10">4.1.2. Company Registration Fee</h5>
<p>Companies seeking to post job openings and access recruitment tools must pay a one-time registration fee of ₹99. This fee covers the costs associated with setting up a company profile, including the ability to post job vacancies and manage recruitment processes. Like the candidate registration fee, the company registration fee is non-refundable and is charged at the time of account creation.</p>
<p>   <b className="font-bold text-2xl text-gray-700">The company registration fee includes:</b></p>
<ul className="list-disc px-10 space-y-4">
<li><b>Job Posting Features:</b> Create and manage job listings for various positions within your organization.</li>
<li><b>Access to Recruitment Tools:</b> Use tools for applicant tracking, interview scheduling, and candidate communication.</li>
<li><b>Company Profile Management:</b> Maintain and update your company’s profile, including company information, job postings, and recruitment details.</li>
</ul>
</div>
<div className="space-y-6">
<h4 className="font-bold text-2xl text-gray-800 mt-12">4.2. Job Post Boosting Fees</h4>
<h5 className="font-bold text-xl text-gray-600 mt-10">4.2.1. Overview of Job Post Boosting</h5>
<p>To increase the visibility of job postings, JobBoost offers a job post boosting service. This service allows employers to enhance the prominence of their job listings to reach a larger audience. Boosting a job post involves additional costs based on the level of visibility and duration of the boost.</p>
<h5 className="font-bold text-xl text-gray-600 mt-10">4.2.2. Boosting Options and Costs</h5>
<p>Job post boosting is available in several packages, each with different features and price points. The options include:</p>
<ul className="list-disc px-10 space-y-4">
<li><b>Basic Boost:</b> Increases the visibility of the job post through featured placement on the JobBoost homepage and search results. This package typically includes a limited duration for boosted visibility and is designed for employers looking for a cost-effective way to attract candidates.</li>
<li><b>Standard Boost:</b> Offers more prominent placement and extended visibility compared to the Basic Boost package. It may include additional features such as highlighted job listings and enhanced job post graphics.</li>
<li><b>Premium Boost:</b> Provides maximum visibility with top placement on job search results, extended duration, and premium features like job post highlights, increased job post views, and additional marketing efforts.</li>
</ul>
<h5 className="font-bold text-xl text-gray-600 mt-10">4.2.3. Payment for Boosting Services</h5>
<p>Payment for job post boosting services is required upfront and is processed through secure payment methods available on the JobBoost platform. The cost of each boosting package is displayed on the website, and you can select the package that best suits your recruitment needs.</p>
<h5 className="font-bold text-xl text-gray-600 mt-10">4.2.4. Changes to Boosting Packages</h5>
<p>If you wish to change or upgrade your boosting package, you may do so by contacting JobBoost’s support team. Any changes to your boosting package will be subject to the terms of the new package and any additional fees associated with the upgrade.</p>
</div>
<div className="space-y-6">
<h4 className="font-bold text-2xl text-gray-800 mt-12">4.3. Candidate Placement Fee</h4>
<h5 className="font-bold text-xl text-gray-600 mt-10">4.3.1. Overview of Placement Fee</h5>
<p>JobBoost charges a placement fee of 30% of the candidate’s first salary upon successful employment. This fee is a percentage of the gross salary offered by the employer and is charged as compensation for the job placement services provided by JobBoost.</p>
<h5 className="font-bold text-xl text-gray-600 mt-10">4.3.2. Calculation of Placement Fee</h5>
<p>The placement fee is calculated as 30% of the total gross salary paid to the candidate for their first month of employment. For example, if the candidate’s first month salary is ₹50,000, the placement fee would be ₹15,000. This fee is deducted from the candidate’s first salary and paid to JobBoost.</p>
<h5 className="font-bold text-xl text-gray-600 mt-10">4.3.3. Payment Process</h5>
<p>The placement fee is collected through the payroll process. Employers are responsible for deducting the fee from the candidate’s salary and remitting it to JobBoost. We provide a detailed invoice for the placement fee, which includes a breakdown of the amount due and payment instructions.</p>
<h5 className="font-bold text-xl text-gray-600 mt-10">4.3.4. Fee Adjustment and Disputes</h5>
<p>If there are any discrepancies or disputes regarding the placement fee, please contact JobBoost’s support team. We will review the issue and provide assistance to resolve any concerns related to the fee calculation or payment process.</p>
</div>
<div className="space-y-6">
<h4 className="font-bold text-2xl text-gray-800 mt-12">4.4. Payment Methods</h4>
<h5 className="font-bold text-xl text-gray-600 mt-10">4.4.1. Accepted Payment Methods</h5>
<p>JobBoost accepts various payment methods to ensure a smooth and secure transaction process. These methods include:</p>
<ul className="list-disc px-10 space-y-4">
<li><b>Credit/Debit Cards:</b> Visa, MasterCard, and other major credit/debit cards.</li>
<li><b>Net Banking:</b> Payments through internet banking services from various banks.</li>
<li><b>Digital Wallets:</b> Payments via popular digital wallets like Paytm, Google Pay, and PhonePe.</li>
<li><b>UPI Payments:</b> Unified Payments Interface (UPI) for quick and easy transactions.</li>
</ul>
<h5 className="font-bold text-xl text-gray-600 mt-10">4.4.2. Payment Security</h5>
<p>We use secure payment gateways to process all transactions. Our payment systems are designed to protect your financial information through encryption and secure processing methods. We do not store your credit card details or financial information beyond what is necessary for processing payments.</p>
<h5 className="font-bold text-xl text-gray-600 mt-10">4.4.3. Payment Confirmation</h5>
<p>Upon successful payment, you will receive a confirmation email with details of the transaction. This confirmation includes a receipt for the registration fee, boosting services, or placement fee, as applicable.</p>
</div>
<div className="space-y-6"><h4 className="font-bold text-2xl text-gray-800 mt-12">4.5. Refunds and Cancellations</h4>
<h5 className="font-bold text-xl text-gray-600 mt-10">4.5.1. Registration Fees</h5>
<p>Registration fees for both candidates and companies are non-refundable. Once the registration fee is paid, it covers the costs of setting up your account and providing access to our services, and therefore, refunds are not available.</p>
<h5 className="font-bold text-xl text-gray-600 mt-10">4.5.2. Job Post Boosting Services</h5>
<p>Refunds for job post boosting services are generally not provided. However, if you encounter issues with the boosting services or believe there has been an error, please contact our support team. We will review the situation and determine if a refund or credit is warranted based on the specific circumstances.</p>
<h5 className="font-bold text-xl text-gray-600 mt-10">4.5.3. Placement Fee Refunds</h5>
<p>The placement fee is collected as a percentage of the candidate’s first salary. Refunds are not typically provided for this fee, as it is based on successful employment and placement services provided. However, if there are extenuating circumstances or disputes, you may contact our support team for assistance.</p>
<h5 className="font-bold text-xl text-gray-600 mt-10">4.5.4. Cancellation of Services</h5>
<p>You may cancel additional services such as job post boosting by contacting our support team. Cancellation policies vary depending on the service and the stage of the process. Please refer to the specific service terms for details on cancellations.</p>
</div>
<div className="space-y-6">
<h4 className="font-bold text-2xl text-gray-800 mt-12">4.6. Financial Transactions and Records</h4>
<h5 className="font-bold text-xl text-gray-600 mt-10">4.6.1. Transaction Records</h5>
<p>All financial transactions are recorded in our system, and you can access your transaction history through your JobBoost account. This includes records of registration fees, job post boosting charges, and placement fees.</p>
<h5 className="font-bold text-xl text-gray-600 mt-10">4.6.2. Financial Statements</h5>
<p>We provide monthly financial statements for your account, which include details of all payments made and received. These statements are available in your account dashboard and can be downloaded for your records.</p>
<h5 className="font-bold text-xl text-gray-600 mt-10">4.6.3. Invoice Requests</h5>
<p>If you require invoices for any payments made to JobBoost, you can request them through our support team. We will provide invoices with detailed information about the services rendered and the amounts paid.</p>
</div>

</div>
</>
)
}

export default FeesAndPayments