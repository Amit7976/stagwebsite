import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import React from 'react'

function ContactInformation() {
  return (
    <>
      <Separator className="my-20 bg-gray-500 rounded-full" />
      <div className="p-10 space-y-10">
        <h3 className="font-bold text-4xl">7. Contact Information</h3>
        <p>Effective communication is essential for addressing any questions, concerns, or feedback related to our Cookies Policy. This section provides detailed information on how to contact <Link href={"/"} className='text-orange-600'>Hirebie</Link>, our contact details, and how users can provide feedback and suggestions.</p>

        <div className="space-y-6">
          <h4 className="font-bold text-2xl text-gray-800 dark:text-neutral-300 mt-12">7.1. How to Contact Us</h4>
          <p><b>Overview</b></p>
          <p>If you have questions or concerns about our Cookies Policy, we are here to help. We offer various ways for you to reach out to us, ensuring that your inquiries are addressed promptly and effectively.</p>
        </div>
        <div className="space-y-6">
          <h5 className="font-bold text-xl text-gray-600 mt-10">7.1.1 Contacting Us via Email</h5>
          <p>Email is a primary method for reaching out to our support team for questions or concerns related to the Cookies Policy.</p>
          <ul className="list-disc px-10 space-y-4">
            <li><b>Email Address:</b> You can send your inquiries to support@hirebie.com.</li>
            <li><b>Purpose:</b> Use this email for detailed questions, concerns about the Cookies Policy, or any other issues you may be facing.</li>
            <li><b>Response Time:</b> We aim to respond to email inquiries within 48 hours. For urgent matters, please indicate the urgency in your email.</li>
          </ul>
        </div>
        <div className="space-y-6">
          <h5 className="font-bold text-xl text-gray-600 mt-10">7.1.2 Contacting Us via Phone</h5>
          <p>For direct and immediate assistance, you can contact our support team by phone.</p>
          <ul className="list-disc px-10 space-y-4">
            <li><b>Phone Number:</b> +91-8000344468</li>
            <li><b>Purpose:</b> Call us for urgent questions, technical support, or if you prefer speaking to a support representative.</li>
            <li><b>Availability:</b> Our phone support is available from 9:00 AM to 6:00 PM (IST), Monday through Friday.</li>
          </ul>
        </div>
        <div className="space-y-6">
          <h5 className="font-bold text-xl text-gray-600 mt-10">7.1.3 Contacting Us via Contact Form</h5>
          <p>We provide an online contact form for general inquiries and specific issues related to our Cookies Policy.</p>
          <ul className="list-disc px-10 space-y-4">
            <li><b>Contact Form:</b> Available at <Link href={"/"} className='text-orange-600'>Hirebie</Link> Contact Form.</li>
            <li><b>Purpose:</b> Use the form for general inquiries or to submit detailed questions about the Cookies Policy.</li>
            <li><b>Response Time:</b> We review and respond to contact form submissions within 2 business days.</li>
          </ul>
        </div>
        <div className="space-y-6">
          <h5 className="font-bold text-xl text-gray-600 mt-10">7.1.4 Visiting Our Office</h5>
          <p>For in-person discussions or formal requests, you can visit our office.</p>
          <ul className="list-disc px-10 space-y-4">
            <li><b>Office Address:</b> <Link href={"/"} className='text-orange-600'>Hirebie</Link> Pvt. Ltd., [Office Address], [City], [State], [PIN Code], India.</li>
            <li><b>Purpose:</b> Visit us for official matters, formal meetings, or if you require face-to-face assistance.</li>
            <li><b>Office Hours:</b> Our office is open from 9:00 AM to 6:00 PM (IST), Monday through Friday.</li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-bold text-2xl text-gray-800 dark:text-neutral-300 mt-12">7.2. Contact Details</h4>
          <p><b>Overview</b></p>
          <p>Providing clear and accurate contact details ensures that users can easily reach out to us for support or to provide feedback.</p>
        </div>
        <div className="space-y-6">
          <h5 className="font-bold text-xl text-gray-600 mt-10">7.2.1 Email Address for Cookies Policy Inquiries</h5>
          <ul className="list-disc px-10 space-y-4">
            <li><b>Email Address:</b> support@hirebie.com</li>
            <li><b>Description:</b> Use this email for questions or concerns about our Cookies Policy.</li>
          </ul>
        </div>
        <div className="space-y-6">
          <h5 className="font-bold text-xl text-gray-600 mt-10">7.2.2 Phone Number for Support</h5>
          <ul className="list-disc px-10 space-y-4">
            <li><b>Phone Number:</b> +91-XXXXXXXXXX</li>
            <li><b>Description:</b> Call us for immediate support or urgent inquiries.</li>
          </ul>
        </div>
        <div className="space-y-6">
          <h5 className="font-bold text-xl text-gray-600 mt-10">7.2.3 Contact Form URL</h5>
          <ul className="list-disc px-10 space-y-4">
            <li><b>Contact Form:</b> <Link href={"/"} className='text-orange-600'>Hirebie</Link> Contact Form</li>
            <li><b>Description:</b> Submit your inquiries or issues via the online contact form.</li>
          </ul>
        </div>
        <div className="space-y-6">
          <h5 className="font-bold text-xl text-gray-600 mt-10">7.2.4 Office Address</h5>
          <ul className="list-disc px-10 space-y-4">
            <li><b>Office Address:</b> <Link href={"/"} className='text-orange-600'>Hirebie</Link> Pvt. Ltd., [Office Address], [City], [State], [PIN Code], India.</li>
            <li><b>Description:</b> Visit us for formal meetings or in-person support.</li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-bold text-2xl text-gray-800 dark:text-neutral-300 mt-12">7.3. Feedback and Suggestions</h4>
          <p><b>Overview</b></p>
          <p>We value your feedback and suggestions as they help us improve our services and Cookies Policy. Here’s how you can provide feedback and suggestions.</p>
        </div>
        <div className="space-y-6">
          <h5 className="font-bold text-xl text-gray-600 mt-10">7.3.1 Providing Feedback</h5>
          <p>We encourage users to share their feedback on our Cookies Policy or any aspect of our services:</p>
          <ul className="list-disc px-10 space-y-4">
            <li><b>Feedback Email:</b> Send your feedback to feedback@hirebie.com .</li>
            <ul className="list-disc px-10 space-y-4">
              <li><b>Purpose:</b> Share your thoughts on our Cookies Policy, suggest improvements, or let us know about your experience.</li>
              <li><b>Response Time:</b> We appreciate all feedback and aim to acknowledge your suggestions within 5 business days.</li>
            </ul>
            <li><b>Online Feedback Form:</b> Submit feedback through our online feedback form.</li>
            <ul className="list-disc px-10 space-y-4">
              <li><b>Feedback Form:</b> Available at <Link href={"/"} className='text-orange-600'>Hirebie</Link> Feedback Form.</li>
              <li><b>Purpose:</b> Provide detailed feedback or suggestions for improving our Cookies Policy or services.</li>
              <li><b>Response Time:</b> We review and respond to feedback form submissions within 3 business days.</li>
            </ul>
          </ul>
        </div>
        <div className="space-y-6">
          <h5 className="font-bold text-xl text-gray-600 mt-10">7.3.2 Suggestions for Improvement</h5>
          <p>If you have specific suggestions for improving our Cookies Policy or services, we welcome your input:</p>
          <ul className="list-disc px-10 space-y-4">
            <li><b>Suggestions Email:</b> Send your suggestions to hello@hirebie.com.</li>
            <ul className="list-disc px-10 space-y-4">
              <li><b>Purpose:</b> Share your ideas for improving our Cookies Policy, features, or user experience.</li>
              <li><b>Response Time:</b> We review all suggestions and aim to incorporate valuable ideas into our services.</li>
            </ul>
            <li><b>Feedback Channels:</b> Use our contact form or email addresses to suggest new features or improvements.</li>
            <ul className="list-disc px-10 space-y-4">
              <li><b>Purpose:</b> Provide constructive feedback or propose new features for <Link href={"/"} className='text-orange-600'>Hirebie</Link>.</li>
              <li><b>Response Time:</b> We evaluate suggestions and provide feedback based on feasibility and impact.</li>
            </ul>
          </ul>
        </div>
        <div className="space-y-6">
          <h5 className="font-bold text-xl text-gray-600 mt-10">7.3.3 Reporting Issues</h5>
          <p>If you encounter any issues with our Cookies Policy or have concerns about privacy, report them through the following channels:</p>
          <ul className="list-disc px-10 space-y-4">
            <li><b>Issue Reporting Email:</b> Report issues to support@hirebie.com.</li>
            <ul className="list-disc px-10 space-y-4">
              <li><b>Purpose:</b> Report any problems or concerns related to our Cookies Policy or privacy practices.</li>
              <li><b>Response Time:</b> We investigate reported issues and provide resolutions within 5 business days.</li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ContactInformation