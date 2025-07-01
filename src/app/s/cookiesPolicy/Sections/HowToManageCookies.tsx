import { Separator } from '@/components/ui/separator'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'

function HowToManageCookies() {
  return (
      <>
          <Separator className="my-20 bg-gray-500 rounded-full" />
<div className="p-10 space-y-10">
<h3 className="font-bold text-4xl">4. How to Manage Cookies</h3>
<p>Managing cookies is an essential part of maintaining your online privacy and ensuring that your web experience aligns with your preferences. In this section, we explain how you can manage cookies through your browser settings, opt out of specific cookies, and understand the impact of disabling cookies.</p>

<div className="space-y-6">
<h4 className="font-bold text-2xl text-gray-800 mt-12">4.1. Managing Cookies Through Browser Settings</h4>
<p><b>Overview</b></p>
<p>Browsers provide built-in tools and settings to help you manage cookies. These settings allow you to view, delete, and block cookies, giving you control over what data is collected during your browsing sessions. Each browser has different methods for managing cookies, so it’s important to know how to access and use these features.</p>
<p><b>Steps to Manage Cookies in Popular Browsers</b></p>
<ul className="list-disc px-10 space-y-4">
<li>Google Chrome</li>
<ul className="list-disc px-10 space-y-4">
<li className='flex items-center gap-1 flex-wrap'><b>Viewing and Deleting Cookies:</b> Open Chrome and click on the three vertical dots in the upper-right corner of the browser. Go to Settings <FaAngleRight /> Privacy and security <FaAngleRight /> Cookies and other site data <FaAngleRight /> See all site data and permissions. Here you can view and delete individual cookies or clear all cookies.</li>
<li><b>Blocking or Allowing Cookies:</b> In the same Cookies and other site data section, you can choose to block all cookies or allow cookies from specific sites. You can also manage site-specific cookies by adding sites to the Block or Allow lists.</li>
</ul>
<li>Mozilla Firefox</li>
<ul className="list-disc px-10 space-y-4">
<li className='flex items-center gap-1 flex-wrap'><b>Viewing and Deleting Cookies:</b> Click on the three horizontal lines in the upper-right corner of Firefox. Go to Options <FaAngleRight /> Privacy & Security <FaAngleRight /> Cookies and Site Data <FaAngleRight /> Manage Data. Here, you can view, remove, or clear cookies.</li>
<li><b>Blocking or Allowing Cookies:</b> In the Cookies and Site Data section, you can select Manage Exceptions to block or allow cookies from specific websites. You can also choose between different levels of cookie acceptance in the Enhanced Tracking Protection settings.</li>
</ul>
<li>Microsoft Edge</li>
<ul className="list-disc px-10 space-y-4">
<li className='flex items-center gap-1 flex-wrap'><b>Viewing and Deleting Cookies:</b> Click on the three horizontal dots in the upper-right corner. Go to Settings <FaAngleRight /> Privacy, search, and services <FaAngleRight /> Cookies and site permissions <FaAngleRight /> See all site data and permissions. You can view and delete cookies from here.</li>
<li><b>Blocking or Allowing Cookies:</b> In the Cookies and site permissions section, you can block all cookies, allow cookies, or manage specific site permissions. You can also set cookie preferences for individual websites.</li>
</ul>
<li>Safari</li>
<ul className="list-disc px-10 space-y-4">
<li className='flex items-center gap-1 flex-wrap'><b>Viewing and Deleting Cookies:</b> Open Safari and go to Preferences <FaAngleRight /> Privacy <FaAngleRight /> Manage Website Data. Here, you can view, remove, or clear cookies and website data.</li>
<li><b>Blocking or Allowing Cookies:</b> In the Privacy tab, you can choose to block all cookies or manage cookies through the Cookies and website data settings. You can also use Manage Website Data to handle cookies from specific sites.</li>
</ul>
</ul>
<p><b>Advanced Cookie Management</b></p>
<p>For more advanced cookie management, you might consider using browser extensions or privacy tools that provide additional features for controlling cookies. These tools can offer enhanced cookie management options and additional privacy features.</p>
</div>
<div className="space-y-6">
<h4 className="font-bold text-2xl text-gray-800 mt-12">4.2. How to Opt-Out of Cookies</h4>
<p><b>Overview</b></p>
<p>Opting out of cookies involves taking steps to prevent cookies from being set on your device. This can include blocking cookies from specific sources, disabling third-party cookies, or using privacy tools.</p>
<p><b>Ways to Opt-Out of Cookies</b></p>
<ul className="list-disc px-10 space-y-4">
<li>Opt-Out of Advertising Cookies</li>
<ul className="list-disc px-10 space-y-4">
<li><b>Network Advertising Initiative (NAI) Opt-Out Page:</b> You can visit the NAI Opt-Out page to manage your preferences for various advertising networks. This page allows you to opt out of targeted advertising from participating companies.</li>
<li><b>Digital Advertising Alliance (DAA) Opt-Out Page:</b> The DAA Opt-Out page provides options to opt out of behavioral advertising and manage your ad preferences.</li>
</ul>
<li>Browser-Specific Opt-Out Options</li>
<ul className="list-disc px-10 space-y-4">
<li className='flex items-center gap-1 flex-wrap'><b>Google Chrome:</b> Visit Settings <FaAngleRight /> Privacy and security <FaAngleRight /> Cookies and other site data <FaAngleRight /> See all site data and permissions <FaAngleRight /> Add to block cookies from specific sites.</li>
<li className='flex items-center gap-1 flex-wrap'><b>Mozilla Firefox:</b> Use Options <FaAngleRight /> Privacy & Security <FaAngleRight /> Cookies and Site Data <FaAngleRight /> Manage Exceptions to block cookies from specific websites.</li>
<li className='flex items-center gap-1 flex-wrap'><b>Microsoft Edge:</b> Go to Settings <FaAngleRight /> Privacy, search, and services <FaAngleRight /> Cookies and site permissions <FaAngleRight /> Manage and delete cookies and site data to block or allow cookies.</li>
</ul>
<li>Opt-Out Cookies</li>
<ul className="list-disc px-10 space-y-4">
<li>Some cookies offer an opt-out option through the cookie itself. When you visit a website that uses cookies for advertising, you might see an opt-out link or option. Clicking on this link will set a cookie that prevents further tracking for that particular purpose.</li>
</ul>
</ul>
<p><b>Using Privacy Tools</b></p>
<ul className="list-disc px-10 space-y-4">
<li><b>Privacy Browser Extensions:</b> Consider using browser extensions like Privacy Badger or uBlock Origin to block cookies and trackers from third-party sources.</li>
<li><b>Privacy-focused Browsers:</b> Some browsers, like Brave or Tor, are designed with built-in privacy features that limit cookie tracking and enhance your online security.</li>
</ul>
</div>
<div className="space-y-6">
<h4 className="font-bold text-2xl text-gray-800 mt-12">4.3. Impact of Disabling Cookies</h4>
<p><b>Overview</b></p>
<p>Disabling cookies can have a significant impact on your browsing experience. While managing cookies can help protect your privacy, it may also affect your ability to use certain features on websites.</p>
<p><b>Effects of Disabling Cookies</b></p>
<ul className="list-disc px-10 space-y-4">
<li><b>Reduced Functionality:</b> Disabling cookies might prevent you from accessing features that require cookies, such as staying logged in to your account, managing your shopping cart, or saving your preferences.</li>
<li><b>Limited Personalization:</b> Without cookies, you will not receive personalized content or advertisements. For example, you might see generic job listings instead of tailored recommendations based on your previous searches.</li>
<li><b>Ad Experience:</b> While you can opt out of targeted advertising, you will still see ads, but they will not be tailored to your interests. You might also experience more repetitive or irrelevant ads.</li>
<li><b>Analytics and Performance:</b> Disabling analytics cookies means that we have less data to understand how our site is performing and how we can improve it. This may result in slower updates or fewer enhancements based on user feedback.</li>
</ul>
<p><b>Balancing Privacy and Usability</b></p>
<ul className="list-disc px-10 space-y-4">
<li><b>Choosing What to Disable:</b> Instead of disabling all cookies, consider managing your preferences to balance privacy and usability. For example, you can block third-party cookies while allowing first-party cookies to maintain essential site features.</li>
<li><b>Temporary Measures:</b> If you are concerned about cookies but do not want to permanently disable them, you can use your browser’s private or incognito mode. This mode allows you to browse without saving cookies between sessions.</li>
</ul>
</div>
          </div>
      </>
  )
}

export default HowToManageCookies