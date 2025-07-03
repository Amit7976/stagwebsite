import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
function Introduction() {
  return (
    <>

      <Separator className="my-20 bg-gray-500 rounded-full" />
      <div className="p-10 space-y-10">
        <h3 className="font-bold text-4xl">1. Introduction to Cookies</h3>
        <p><b>What Are Cookies?</b></p>
        <p>Cookies are small text files placed on your device by a website you visit. These files consist of data that the website sends to your browser, which then stores it on your device. Cookies are essential for the functioning of many websites, including <Link href={"/"} className='text-orange-600'>Hirebie</Link>, as they enable the website to remember your preferences, track your activities, and provide a more personalized experience.</p>
        <p><b>Technical Definition</b></p>
        <p>From a technical perspective, cookies are pieces of data created by a web server and stored on a user's device by a web browser. Each cookie consists of a name-value pair, where the name is a unique identifier and the value contains the information. Cookies are sent back to the server every time the user visits the website, allowing the server to retrieve the stored data and tailor the user experience based on this information.</p>
        <p><b>Cookie Lifecycle</b></p>
        <p>Cookies have different lifecycles depending on their type. Some cookies are designed to expire after a single session, while others persist for a longer period. Session cookies, for instance, are temporary and only last as long as your browser session. They are deleted when you close your browser. On the other hand, persistent cookies remain on your device for a set period or until you delete them manually. These cookies are used to remember your login details, language preferences, and other settings for future visits.</p>
        <p><b>Types of Cookies</b></p>
        <p>Cookies can be categorized into several types based on their functions and duration:</p>
        <ul className="list-disc px-10 space-y-4">
          <li><b>Session Cookies:</b> These cookies are temporary and expire once you close your browser. They are used to manage your session, such as keeping you logged in while navigating different pages of the site.</li>
          <li><b>Persistent Cookies:</b> These cookies remain on your device for a set period. They are used to remember your preferences and settings for future visits.</li>
          <li><b>First-Party Cookies:</b> Created and set by the website you are visiting, first-party cookies are used to manage your interactions with the site, such as keeping track of your cart or login session.</li>
          <li><b>Third-Party Cookies:</b> These cookies are set by a domain other than the one you are visiting. They are often used for tracking and advertising purposes, as well as integrating social media features.</li>
        </ul>
        <p><b>Why Does <Link href={"/"} className='text-orange-600'>Hirebie</Link> Use Cookies?</b></p>
        <p><b>Enhancing User Experience</b></p>
        <p>At <Link href={"/"} className='text-orange-600'>Hirebie</Link>, cookies are used to enhance your overall experience on our website. They help us provide a seamless user experience by remembering your login credentials, storing your preferences, and ensuring that your session remains active while you browse our platform. For example, if you log in to your <Link href={"/"} className='text-orange-600'>Hirebie</Link> account, a cookie will remember your session so that you don’t need to log in again every time you visit a new page.</p>
        <p><b>Personalization</b></p>
        <p>Cookies allow us to personalize your experience on our website. By analyzing the information collected through cookies.</p>
        <p><b>Analytics and Performance</b></p>
        <p>We use cookies to track the performance of our website. Analytics cookies collect data on how you use our site, including the pages you visit, the time spent on each page, and the links you click. This information helps us identify areas for improvement, measure the effectiveness of our features, and optimize the overall performance of the website.</p>
        <p><b>Advertising and Marketing</b></p>
        <p>Cookies are also used for advertising and marketing purposes. By tracking your browsing behavior, cookies help us deliver targeted advertisements that are relevant to your interests. We use cookies to manage our advertising campaigns, measure their effectiveness, and reach potential users who might benefit from <Link href={"/"} className='text-orange-600'>Hirebie</Link>’s services.</p>
        <p><b>Security</b></p>
        <p>Security is a critical aspect of our website, and cookies play a role in maintaining a secure environment for our users. We use cookies to implement security features that protect your account and personal information. For example, cookies can help detect and prevent fraudulent activities, such as unauthorized access attempts or suspicious behavior.</p>
        <p><b>Session Management</b></p>
        <p>Cookies are essential for managing your sessions on our platform. They help us maintain your session state as you navigate through different pages, ensuring that you stay logged in and can access your account features without interruptions.</p>
        <p><b>Understanding User Behavior</b></p>
        <p>By analyzing the data collected from cookies, we gain insights into user behavior on our site. This information allows us to make informed decisions about our services, improve user satisfaction, and develop new features that cater to the needs of our users.</p>
        <p><b>How Do Cookies Work?</b></p>
        <p><b>Setting and Retrieving Cookies</b></p>
        <p>When you visit our website, our server sends a cookie to your browser, which then stores it on your device. Whenever you revisit our site, your browser sends the stored cookie back to the server. This process allows the website to recognize you and retrieve any previously stored information.</p>
        <p><b>Cookie Storage</b></p>
        <p>Cookies are stored in a designated location on your device. Each cookie contains data such as the domain name, expiration date, and a unique identifier. This information is used by the server to retrieve the cookie’s contents and apply the appropriate settings or preferences.</p>
        <p><b>Managing Cookie Information</b></p>
        <p>Most modern browsers offer tools for managing cookie settings. You can view, delete, or block cookies through your browser’s privacy or security settings. However, disabling cookies may affect the functionality of our website and limit your ability to access certain features.</p>
        <p><b>Importance of Cookies in Modern Web Browsing</b></p>
        <p><b>Efficiency and Functionality</b></p>
        <p>Cookies are integral to the efficiency and functionality of modern websites. They enable features such as personalized content, secure logins, and session management. Without cookies, websites would lack the ability to provide a personalized experience, and many of the conveniences that users have come to expect would be unavailable.</p>
        <p><b>User Experience</b></p>
        <p>Cookies play a significant role in shaping the user experience. They allow websites to remember your preferences, provide relevant content, and ensure that your interactions with the site are smooth and enjoyable. The ability to maintain a consistent user experience across sessions is a key benefit of cookie technology.</p>
        <p><b>Technological Advancements</b></p>
        <p>As web technologies continue to advance, cookies remain a fundamental component of online interactions. Innovations in cookie management, such as improved security measures and enhanced tracking capabilities, reflect the ongoing evolution of the web and the need for effective tools to manage user experiences.</p>
        <p><b>Legal and Regulatory Considerations</b></p>
        <p>The use of cookies is subject to legal and regulatory frameworks designed to protect user privacy. These regulations require websites to inform users about cookie practices, obtain consent for certain types of cookies, and provide options for managing cookie preferences.</p>
      </div>
    </>
  )
}

export default Introduction