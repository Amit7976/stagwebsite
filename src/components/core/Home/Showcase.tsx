import { cn } from "@/lib/utils";
import {
    IconAdjustmentsBolt,
    IconCloud,
    IconCurrencyDollar,
    IconEaseInOut,
    IconHeart,
    IconHelp,
    IconRouteAltLeft,
    IconTerminal2,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Showcase() {
    const features = [
        { title: "Web Development", description: "₹12,000 – ₹15,000 (Initial) + 10% + GST", icon: <IconTerminal2 /> },
        { title: "SEO Services (On-Page / Off-Page)", description: "Custom scope based + 10% + GST", icon: <IconEaseInOut /> },
        { title: "Digital Marketing Strategy", description: "Full digital strategy + execution", icon: <IconCloud /> },
        { title: "Social Media Management", description: "₹12,000 – ₹15,000 + 10% + GST", icon: <IconRouteAltLeft /> },
        { title: "Social Media Post Creation", description: "₹500 per post + 10% + GST", icon: <IconHelp /> },
        { title: "Content Marketing & Blogging", description: "Blog / article writing + SEO content", icon: <IconHeart /> },
        { title: "Email Marketing & Newsletter", description: "Campaigns + subscriber management", icon: <IconAdjustmentsBolt /> },
        { title: "Video & Media Marketing", description: "Short-videos / ads / media content", icon: <IconCloud /> },
        { title: "Branding Kit & Logo Design", description: "₹8,000 + 10% + GST", icon: <IconEaseInOut /> },
        { title: "Website Maintenance & Hosting", description: "Monthly / yearly plans", icon: <IconTerminal2 /> },
        { title: "E-commerce Store Setup & Management", description: "Catalog + product management + shop setup", icon: <IconCurrencyDollar /> },
        { title: "Online Reputation & Review Management", description: "Reviews, feedback & ORM services", icon: <IconHelp /> },
        { title: "Consultancy & Business Strategy Calls", description: "₹2,500 (3-call pack)", icon: <IconAdjustmentsBolt /> },
        { title: "ISO / Certification Assistance", description: "₹8,000 + 10% + GST", icon: <IconHeart /> },
        { title: "HR & Recruitment Services", description: "₹12,000 + 10% + GST", icon: <IconRouteAltLeft /> },
        { title: "Accounting / Bookkeeping Services", description: "Based on client needs (e.g. Zoho-Books)", icon: <IconCurrencyDollar /> },
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 p-10">
            {features.map((feature, index) => (
                    <Feature key={feature.title} {...feature} index={index} />
            ))}
        </div>
    );
}

const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
            <Link
                key={title}
                href={
                    '/s/contact?service=' +
                    encodeURIComponent(title)
                }
                className={cn(
                    "flex flex-col border-y lg:border-r py-10 relative group/feature dark:border-neutral-800 cursor-pointer",
                    index === 0 && "border-t-0 dark:border-neutral-800 hover:border-red-600",
                    index === 15 && "border-b-0 dark:border-neutral-800 hover:border-red-600",
                    index < 2 && "sm:border-t-0 dark:border-neutral-800 hover:border-red-600",
                    index > 13 && "sm:border-b-0 dark:border-neutral-800 hover:border-red-600",
                    ((index + 1) % 2 === 0) && "sm:border-l dark:border-neutral-800 hover:border-red-600",
                    (index === 0 || index % 4 === 0) && "lg:border-l dark:border-neutral-800 hover:border-red-600",
                    index < 12 && "lg:border-b dark:border-neutral-800 hover:border-red-600",
                    (index === 2 || index === 3) && "lg:border-t-0 dark:border-neutral-800 hover:border-red-600",
                    (index === 12 || index === 13) && "lg:border-b-0 dark:border-neutral-800 hover:border-red-600",
                )}
            >
                {index < 12 && (
                    <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
                )}
                {index >= 12 && (
                    <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
                )}
                <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
                    {icon}
                </div>
                <div className="text-lg font-bold mb-2 relative z-10 px-10">
                    <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 group-hover/feature:bg-orange-600 dark:group-hover/feature:bg-orange-600 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 transition-all duration-200 origin-center" />
                    <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                        {title}
                    </span>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                    {description}
                </p>
            </Link>
    );
};
