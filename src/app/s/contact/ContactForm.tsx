"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { z } from "zod";
import { encrypt, decrypt } from "@/lib/crypto";

// 🔥 Cleaned + Structured Service Data
const SERVICES = {
    web: [
        "Web Development",
        "Website Maintenance & Hosting",
        "Web App Development",
        "Website Redesign & Modernization",
        "E-commerce Development",
        "Blog Websites",
        "Portfolio Websites",
        "Documentation Websites",
        "Marketing Sites",
    ],

    branding: [
        "Branding Kit & Logo Design",
        "Logo & Visual Identity Design",
        "Brand Guidelines Creation",
        "Social Media Branding Assets",
        "Product Packaging Design",
        "Promotional Merchandise Design",
        "Animated Logos & Intro Videos",
        "Business Cards & Stationery",
    ],

    marketing: [
        "Digital Marketing Strategy",
        "SEO Services (On-Page / Off-Page)",
        "SEO & Performance Optimization",
        "Social Media Management",
        "Social Media Post Creation",
        "Email Marketing & Newsletter",
        "Content Marketing & Blogging",
        "Video & Media Marketing",
        "Online Ad Campaign Setup (Google/Facebook)",
        "Performance Analytics & Reporting",
        "Reputation Management Services",
    ],

    uiux: [
        "UI/UX Design for Websites & Apps",
        "Interactive Prototypes & Wireframes",
        "Responsive Design",
        "Custom Illustrations & Icons",
        "Micro-interactions & Animations",
        "Design System Development",
        "A/B Testing & User Feedback",
    ],

    development: [
        "Custom Web & Mobile App Development",
        "Mobile App Development",
        "Backend & API Development",
        "Full-stack Development Support",
        "Cloud Infrastructure & DevOps",
        "Database Design & Management",
        "Technical Support & Maintenance",
        "SaaS Product Development",
        "Startup MVP Development",
    ],

    business: [
        "Consultancy & Business Strategy Calls",
        "ISO / Certification Assistance",
        "HR & Recruitment Services",
        "Accounting / Bookkeeping Services",
        "Domain & Hosting Assistance",
        "CMS Setup & Training",
        "Payment Gateway Integration",
        "Data Privacy Compliance Consulting",
        "Client Training & Documentation",
        "Dedicated Account Manager",
    ],
};

// Zod Schema
const InquirySchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(10, "Phone number is too short"),
    companyName: z.string().optional(),
    servicesInterested: z.string().min(2, "Please enter a service"),
    message: z.string().min(5, "Message must be at least 5 characters"),
});

function ContactForm({ service }: { service: string | string[] | null }) {
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        servicesInterested: "",
        message: "",
    });

    // Auto-expand textarea
    const autoResize = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height =
                textareaRef.current.scrollHeight + "px";
        }
    };

    useEffect(() => {
        autoResize();
    }, [formData.servicesInterested]);

    // Load encrypted localStorage
    useEffect(() => {
        const raw = localStorage.getItem("contact_user");
        if (raw) {
            const decrypted = decrypt(raw);
            if (decrypted) {
                setFormData((prev) => ({ ...prev, ...decrypted }));
            }
        }
    }, []);

    // URL-based service
    useEffect(() => {
        if (service) {
            const s = Array.isArray(service) ? service[0] : service;
            setSelectedServices([s]);
        }
    }, [service]);

    // Update input from selected chips
    useEffect(() => {
        setFormData((prev) => ({
            ...prev,
            servicesInterested: selectedServices.join(", "),
        }));
    }, [selectedServices]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    // Smart Recommendation System
    const getRecommendations = () => {
        // If nothing selected → show any 6 sellable items
        if (selectedServices.length === 0) {
            return Object.values(SERVICES).flat().slice(0, 6);
        }

        const term = selectedServices[0].toLowerCase();

        // Keyword-based checks
        const isMarketing =
            term.includes("seo") ||
            term.includes("marketing") ||
            term.includes("social") ||
            term.includes("email") ||
            term.includes("content") ||
            term.includes("blog") ||
            term.includes("newsletter") ||
            term.includes("video") ||
            term.includes("media") ||
            term.includes("post") ||
            term.includes("ad") ||
            term.includes("facebook") ||
            term.includes("google") ||
            term.includes("performance") ||
            term.includes("analytics") ||
            term.includes("reputation") ||
            term.includes("growth");

        const isBranding =
            term.includes("brand") ||
            term.includes("logo") ||
            term.includes("identity") ||
            term.includes("guideline") ||
            term.includes("packaging") ||
            term.includes("stationery");

        const isUIUX =
            term.includes("ui") ||
            term.includes("ux") ||
            term.includes("design") ||
            term.includes("wireframe") ||
            term.includes("prototype") ||
            term.includes("illustration") ||
            term.includes("animation");

        const isDevelopment =
            term.includes("development") ||
            term.includes("app") ||
            term.includes("api") ||
            term.includes("backend") ||
            term.includes("full-stack") ||
            term.includes("cloud") ||
            term.includes("database") ||
            term.includes("devops") ||
            term.includes("software") ||
            term.includes("mobile");

        const isBusiness =
            term.includes("hr") ||
            term.includes("recruitment") ||
            term.includes("accounting") ||
            term.includes("bookkeeping") ||
            term.includes("consultancy") ||
            term.includes("iso") ||
            term.includes("domain") ||
            term.includes("hosting");

        let related: string[] = [];

        if (isMarketing) {
            related = [
                ...SERVICES.marketing,
                ...SERVICES.web,
                ...SERVICES.branding,
            ];
        } else if (isBranding) {
            related = [
                ...SERVICES.branding,
                ...SERVICES.marketing,
                ...SERVICES.uiux,
            ];
        } else if (isUIUX) {
            related = [
                ...SERVICES.uiux,
                ...SERVICES.web,
                ...SERVICES.development,
            ];
        } else if (isDevelopment) {
            related = [
                ...SERVICES.development,
                ...SERVICES.web,
                ...SERVICES.uiux,
            ];
        } else if (isBusiness) {
            related = [
                ...SERVICES.business,
                ...SERVICES.web,
                ...SERVICES.marketing,
            ];
        } else {
            // Fallback → All services (sellable only)
            related = Object.values(SERVICES).flat();
        }

        // Remove already selected + limit to 6
        return related
            .filter((item) => !selectedServices.includes(item))
            .slice(0, 6);
    };


    const addService = (item: string) => {
        if (!selectedServices.includes(item)) {
            setSelectedServices([...selectedServices, item]);
        }
    };

    const removeService = (item: string) => {
        setSelectedServices(selectedServices.filter((s) => s !== item));
    };

    // Submit Handler
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = InquirySchema.safeParse(formData);
        if (!result.success) {
            toast.error(result.error.issues.map((err) => err.message).join("\n"));
            return;
        }

        try {
            setLoading(true);

            localStorage.setItem(
                "contact_user",
                encrypt({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    companyName: formData.companyName,
                })
            );

            const res = await fetch("/api/Inquiries", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (res.ok) {
                toast.success("Your inquiry has been submitted successfully!");
                setSelectedServices([]);
                setFormData((prev) => ({
                    ...prev,
                    servicesInterested: "",
                    message: "",
                }));
            } else {
                toast.error(data.message);
            }
        } catch (err) {
            toast.error("Server error. Please try again." + err);
        } finally {
            setLoading(false);
        }
    };

    const classes =
        "peer px-4 py-6 block w-full bg-transparent border-0 dark:bg-neutral-800 border-b-2 dark:border-0 rounded-2xl border-black text-black dark:text-white font-medium tracking-wide placeholder:text-transparent focus:outline-none focus:ring-0 h-16 md:text-lg font-sans2";

    const labelClass =
        "absolute top-0 start-0 p-4 h-full text-gray-500 text-base font-medium truncate pointer-events-none transition duration-200 peer-focus:text-xs peer-focus:-translate-y-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-2";

    return (
        <section className="col-span-3 bg-gray-100 dark:bg-neutral-900 rounded-3xl my-5 py-6 p-4 md:p-16">

            <div className="mb-10 space-y-3">
                <h2 className="text-4xl font-semibold">
                    Want Service? <span className="text-orange-600">We have</span> skilled{" "}
                    <span className="text-orange-600">Professionals</span>. Let’s get in{" "}
                    <span className="text-orange-600">touch</span>
                </h2>
                <p className="text-gray-400 text-lg">
                    Get in touch with our team for any assistance or information.
                </p>
            </div>

            <form onSubmit={handleSubmit}>

                <div className="space-y-6">

                    {/* NAME */}
                    <div className="relative">
                        <Input id="name" className={classes} value={formData.name} onChange={handleChange} placeholder="Name" />
                        <label className={labelClass}>Name</label>
                    </div>

                    {/* EMAIL */}
                    <div className="relative">
                        <Input id="email" type="email" className={`${classes} lowercase`} value={formData.email} onChange={handleChange} placeholder="Email" />
                        <label className={labelClass}>Email</label>
                    </div>

                    {/* PHONE + COMPANY */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative">
                            <Input id="phone" type="tel" className={classes} value={formData.phone} onChange={handleChange} placeholder="Phone" />
                            <label className={labelClass}>Phone Number</label>
                        </div>
                        <div className="relative">
                            <Input id="companyName" type="text" className={classes} value={formData.companyName} onChange={handleChange} placeholder="Company" />
                            <label className={labelClass}>Company (Optional)</label>
                        </div>
                    </div>

                    {/* SERVICES TEXTAREA + RECOMMENDATIONS */}
                    <div className="relative">
                        <textarea
                            id="servicesInterested"
                            ref={textareaRef}
                            className={`${classes} h-auto resize-none overflow-hidden`}
                            value={formData.servicesInterested}
                            onChange={handleChange}
                            placeholder="Interested Services"
                        />
                        <label className={labelClass}>Interested Services</label>

                        {/* Selected Chips */}
                        {selectedServices.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-3">
                                {selectedServices.map((item) => (
                                    <span key={item} className="px-6 pt-3 pb-2.5 bg-orange-600 text-white rounded-full font-medium flex items-center gap-2">
                                        {item}
                                        <button type="button" title="Remove" aria-label="Remove" className="cursor-pointer" onClick={() => removeService(item)}>✕</button>
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Recommendations */}
                        <div className="flex flex-wrap gap-2 mt-3">
                            {getRecommendations().map((item) => (
                                <button key={item} type="button" onClick={() => addService(item)} className="px-6 pt-3 pb-2.5 cursor-pointer bg-neutral-800 text-white rounded-full font-medium hover:bg-neutral-600 transition">
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* MESSAGE */}
                    <div className="relative">
                        <textarea
                            id="message"
                            className={`${classes} h-40`}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your message"
                        />
                        <label className={labelClass}>Why do you want to contact us?</label>
                    </div>
                </div>

                <div className="mt-10">
                    <Button disabled={loading} className="bg-orange-600 hover:bg-orange-700 w-full md:w-1/2 py-4 rounded-full text-white">
                        {loading ? "Submitting..." : "Submit"}
                    </Button>
                </div>
            </form>
        </section>
    );
}

export default ContactForm;

