import React from 'react'

export default function MainContent() {
    const menuItems = {
        Services: [
            { text: "Idea Validation", link: "/services/idea-validation" },
            { text: "MVP Development", link: "/services/mvp-development" },
            { text: "Web & Mobile Apps", link: "/services/web-mobile-apps" },
            { text: "UI/UX Design", link: "/services/ui-ux-design" },
            { text: "Product Engineering", link: "/services/product-engineering" },
            { text: "Cloud & DevOps", link: "/services/cloud-devops" },
            { text: "Cybersecurity", link: "/services/cybersecurity" },
            { text: "IT Consulting", link: "/services/it-consulting" },
        ],
        Launch: [
            { text: "Branding & Identity", link: "/launch/branding" },
            { text: "Website Development", link: "/launch/website" },
            { text: "E-commerce Solutions", link: "/launch/ecommerce" },
            { text: "Custom SaaS Platforms", link: "/launch/saas" },
            { text: "Marketplace Solutions", link: "/launch/marketplace" },
        ],
        Growth: [
            { text: "Digital Marketing", link: "/growth/digital-marketing" },
            { text: "SEO & Content", link: "/growth/seo-content" },
            { text: "Performance Marketing", link: "/growth/performance-marketing" },
            { text: "CRM & Automation", link: "/growth/crm-automation" },
            { text: "Business Analytics", link: "/growth/business-analytics" },
        ],
        Solutions: [
            { text: "Startups", link: "/solutions/startups" },
            { text: "SMBs", link: "/solutions/smbs" },
            { text: "Enterprises", link: "/solutions/enterprises" },
            { text: "Healthcare", link: "/solutions/healthcare" },
            { text: "EdTech", link: "/solutions/edtech" },
            { text: "FinTech", link: "/solutions/fintech" },
        ],
        Resources: [
            { text: "Case Studies", link: "/resources/case-studies" },
            { text: "Success Stories", link: "/resources/success-stories" },
            { text: "Blog", link: "/resources/blog" },
            { text: "Guides & Playbooks", link: "/resources/guides" },
            { text: "Webinars", link: "/resources/webinars" },
        ],
        Company: [
            { text: "About Hirebie", link: "/company/about" },
            { text: "Our Mission", link: "/company/mission" },
            { text: "Team & Culture", link: "/company/team" },
            { text: "Careers", link: "/company/careers" },
            { text: "Contact Us", link: "/company/contact" },
            { text: "Investor Relations", link: "/company/investors" },
        ],
        Support: [
            { text: "Help Center", link: "/support/help-center" },
            { text: "Client Portal", link: "/support/client-portal" },
            { text: "FAQs", link: "/support/faqs" },
            { text: "Report an Issue", link: "/support/report-issue" },
        ],
        Policies: [
            { text: "Terms & Conditions", link: "/legal/terms" },
            { text: "Privacy Policy", link: "/legal/privacy" },
            { text: "Security Policy", link: "/legal/security" },
            { text: "Cookies Policy", link: "/legal/cookies" },
        ],
        Community: [
            { text: "Partner Program", link: "/community/partners" },
            { text: "Events", link: "/community/events" },
            { text: "Hirebie Forum", link: "/community/forum" },
            { text: "Startup Accelerator", link: "/community/accelerator" },
        ],
        Social: [
            { text: "LinkedIn", link: "https://www.linkedin.com/company/hirebie-india" },
            { text: "Instagram", link: "https://www.instagram.com/Hirebie_in/" },
            { text: "Facebook", link: "https://www.facebook.com/Hirebie.team" },
            { text: "X (Twitter)", link: "https://x.com/Hirebie_20" },
            { text: "WhatsApp", link: "https://api.whatsapp.com/send/?phone=919660050909" },
        ],
      };
    return (
        <>
            <div className="p-10">
                <h2 className="text-5xl lg:text-9xl font-bold text-black dark:text-white select-none">
                    Sitemap
                </h2>
            </div>
            <div className="w-full space-y-28 p-10 md:py-28 md:px-20">
                {Object.entries(menuItems).map(([section, items]) => (
                    <div key={section}>
                        <h6 className="text-base lg:text-5xl font-bold text-gray-700 dark:text-neutral-400 select-none">
                            {section}
                        </h6>
                        <ul key={section} className="flex items-center flex-wrap gap-10 my-16">
                            {items.map(({ text, link }) => (
                                <li
                                    key={text}
                                    className={`my-2.5  ${link ? "opacity-100" : "opacity-40"}`}
                                >
                                    {link ? (
                                        <a
                                            href={link}
                                            className="text-lg font-medium text-gray-900 bg-gray-300 flex-shrink-0 rounded-xl px-20 py-4"
                                        >
                                            {text}
                                        </a>
                                    ) : (
                                        <span className="text-lg font-medium text-gray-900 bg-gray-300 flex-shrink-0 rounded-xl px-20 py-4">
                                            {text}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    )
}