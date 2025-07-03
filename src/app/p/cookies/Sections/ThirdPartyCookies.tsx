import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'

function ThirdPartyCookies() {
  return (
    <>
      <Separator className="my-20 bg-gray-500 rounded-full" />
      <div className="p-10 space-y-10">
        <h3 className="font-bold text-4xl">3. Third-Party Cookies</h3>

        <div className="space-y-6">
          <h4 className="font-bold text-2xl text-gray-800 dark:text-neutral-300 mt-12">3.1. What Are Third-Party Cookies?</h4>
          <p><b>Definition and Overview</b></p>
          <p>Third-party cookies are cookies that are set by a domain other than the one you are currently visiting. While first-party cookies are created and managed by the website you are on, third-party cookies are created by external entities and are used for a variety of purposes beyond the scope of the current website. These cookies are often placed on your device through embedded content such as advertisements, social media widgets, or analytics tools.</p>
          <p><b>How Third-Party Cookies Are Set</b></p>
          <p>When you visit a website like <Link href={"/"} className='text-orange-600'>Hirebie</Link>, your browser requests content from the website’s server. If the page includes content from another domain, such as an advertisement or a social media plugin, that external domain can set its own cookies on your device. These cookies are known as third-party cookies because they are managed by a third party, not the website you are directly visiting.</p>
          <ul className="list-disc px-10 space-y-4">
            <li>Common Uses of Third-Party Cookies</li>
            <ul className="list-disc px-10 space-y-4">
              <li><b>Advertising:</b> Third-party cookies are commonly used to deliver targeted advertisements based on your browsing history. Advertisers can track your behavior across multiple sites to show you relevant ads and measure the effectiveness of their campaigns.</li>
              <li><b>Analytics:</b> These cookies help third-party services collect data on how users interact with websites. Analytics cookies track metrics like page views, session duration, and referral sources to provide insights into website performance.</li>
              <li><b>Social Media Integration:</b> Social media platforms often use third-party cookies to enable features like social sharing buttons, embedded content, and user login functions. These cookies can track your interactions with social media content and provide data to the social media provider.</li>
            </ul>
            <li>Examples of Third-Party Cookies</li>
            <ul className="list-disc px-10 space-y-4">
              <li><b>Google Analytics Cookies:</b> Cookies like _ga, _gid, and _gat are used by Google Analytics to track user interactions and generate reports on website performance.</li>
              <li><b>Advertising Cookies:</b> Cookies such as IDE from Google DoubleClick and fr from Facebook are used to track user behavior for targeted advertising.</li>
              <li><b>Social Media Cookies:</b> Cookies like datr from Facebook and pinterest_session from Pinterest are used to enable social media features and track engagement.</li>
            </ul>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-bold text-2xl text-gray-800 dark:text-neutral-300 mt-12">3.2. How Does <Link href={"/"} className='text-orange-600'>Hirebie</Link> Use Third-Party Cookies?</h4>
          <p><b>Advertising and Marketing</b></p>
          <p>At <Link href={"/"} className='text-orange-600'>Hirebie</Link>, we use third-party cookies to manage and optimize our advertising efforts. These cookies help us deliver relevant ads to users based on their interests and browsing behavior.</p>
          <ul className="list-disc px-10 space-y-4">
            <li><b>Targeted Advertising:</b> Third-party advertising cookies track your interactions with our site and other sites you visit. This data is used to serve targeted ads for <Link href={"/"} className='text-orange-600'>Hirebie</Link>'s services and solutions. For example, if you browse our IT service pages, you may see ads for <Link href={"/"} className='text-orange-600'>Hirebie</Link> on other websites or platforms.</li>
            <li><b>Ad Performance Measurement:</b> We use third-party analytics tools to measure the effectiveness of our advertising campaigns. These cookies help us track metrics like ad impressions, clicks, and conversions. By analyzing this data, we can evaluate the success of our campaigns and make improvements.</li>
            <li><b>Retargeting:</b> Retargeting cookies are used to reach users who have previously visited <Link href={"/"} className='text-orange-600'>Hirebie</Link> but did not complete a desired action, such as contact for a service. These cookies help us display follow-up ads to encourage users to contact with us.</li>
          </ul>
          <p><b>Analytics and Performance Monitoring</b></p>
          <p>Third-party analytics cookies help us monitor the performance of our website and understand user behavior.</p>
          <ul className="list-disc px-10 space-y-4">
            <li><b>Traffic Analysis:</b> We use analytics cookies from third-party providers like Google Analytics to track how users navigate through our site. This data includes information on which pages are visited most often, how long users stay on each page, and the paths users take through the site.</li>
            <li><b>User Behavior Insights:</b> By analyzing the data collected from these cookies, we gain insights into user behavior, which helps us identify trends, detect issues, and make data-driven decisions to enhance the user experience.</li>
            <li><b>Site Optimization:</b> Performance monitoring cookies provide data that helps us optimize the site’s speed, reliability, and functionality. For instance, these cookies can reveal if certain pages are slow to load or if users encounter errors.</li>
          </ul>
          <p><b>Social Media Integration</b></p>
          <p>We use third-party cookies from social media platforms to enhance our site’s functionality and user engagement.</p>
          <ul className="list-disc px-10 space-y-4">
            <li><b>Social Sharing:</b> Social media cookies enable features like sharing <Link href={"/"} className='text-orange-600'>Hirebie</Link> case studies, blog posts, or service updates on your social media profiles or logging in using social media accounts. These cookies track interactions with social media widgets and provide data to the social media platforms.</li>
            <li><b>Social Media Tracking:</b> These cookies also track your engagement with social media content related to <Link href={"/"} className='text-orange-600'>Hirebie</Link>. For example, they help us see how often our services used by clients.</li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-bold text-2xl text-gray-800 dark:text-neutral-300 mt-12">3.3. Managing Third-Party Cookies</h4>
          <p><b>How to Manage Third-Party Cookies</b></p>
          <p>You have control over third-party cookies through various methods. These methods allow you to manage your cookie preferences and ensure that you are comfortable with the data being collected.</p>
          <ul className="list-disc px-10 space-y-4">
            <li><b>Browser Settings:</b> Most web browsers offer settings that allow you to view, delete, or block third-party cookies. You can access these settings through the privacy or security section of your browser’s options menu. Here’s how to manage cookies in popular browsers:</li>
            <ul className="list-disc px-10 space-y-4">
              <li className='flex items-center gap-1 flex-wrap'><b>Google Chrome:</b> Go to Settings <FaAngleRight /> Privacy and security <FaAngleRight /> Cookies and other site data. Here, you can block or delete cookies and view which cookies are stored.</li>
              <li className='flex items-center gap-1 flex-wrap'><b>Mozilla Firefox:</b> Go to Options <FaAngleRight /> Privacy & Security <FaAngleRight /> Cookies and Site Data. You can manage cookies and data from this menu.</li>
              <li className='flex items-center gap-1 flex-wrap'><b>Microsoft Edge:</b> Go to Settings <FaAngleRight /> Cookies and site permissions <FaAngleRight /> Manage and delete cookies and site data to control third-party cookies.</li>
              <li className='flex items-center gap-1 flex-wrap'><b>Safari:</b> Go to Preferences <FaAngleRight /> Privacy <FaAngleRight /> Cookies and website data to manage your cookie settings.</li>
            </ul>
            <li><b>Opt-Out Tools:</b> Many third-party cookie providers offer opt-out tools that let you manage your preferences for specific types of cookies. For example, you can use the Network Advertising Initiative (NAI) opt-out page or the Digital Advertising Alliance (DAA) opt-out page to adjust your ad tracking preferences.</li>
            <li><b>Do Not Track Requests:</b> Some browsers offer a “Do Not Track” (DNT) feature that sends a signal to websites indicating that you do not want to be tracked. However, not all sites honor DNT requests, and the effectiveness of this feature may vary.</li>
          </ul>
          <p><b>Impact of Managing Third-Party Cookies</b></p>
          <p>Managing third-party cookies may affect your experience on <Link href={"/"} className='text-orange-600'>Hirebie</Link>’s website and other sites you visit. For example, disabling third-party cookies may result in less relevant advertisements or the inability to use certain social media features.</p>
          <ul className="list-disc px-10 space-y-4">
            <li><b>Advertising Limitations:</b> If you block third-party cookies, you may still see ads, but they will be less relevant to your interests. You may also see fewer personalized ad experiences.</li>
            <li><b>Reduced Functionality:</b> Blocking cookies used for social media integration may prevent you from sharing content or using social media features on our site.</li>
            <li><b>Limited Analytics:</b> Disabling analytics cookies may impact our ability to measure and improve website performance. While you can still access the site, we might have less data to optimize user experience.</li>
          </ul>
          <p><b>How We Handle Your Choices</b></p>
          <p><Link href={"/"} className='text-orange-600'>Hirebie</Link> respects your choices regarding third-party cookies. We provide tools and information to help you manage your cookie preferences, and we aim to be transparent about the data we collect and how it is used. If you choose to block or delete third-party cookies, we will continue to provide you with access to our services, but some features and experiences may be affected.</p>
        </div>
      </div>

    </>
  )
}

export default ThirdPartyCookies