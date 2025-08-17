"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { toast } from "sonner";


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Zod Schema
const InquirySchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(10, "Phone number is too short"),
    companyName: z.string().optional(),
    servicesInterested: z.string().min(2, "Please enter a service"),
    message: z.string().min(5, "Message must be at least 5 characters"),
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        servicesInterested: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const classes =
        "peer p-4 block w-full bg-transparent border-0 dark:bg-neutral-800 border-b-2 dark:border-0 dark:rounded-xl rounded-none border-black text-3xl text-black dark:text-white font-medium tracking-wide placeholder:text-transparent focus:outline-none focus:ring-0 disabled:opacity-50 disabled:pointer-events-none capitalize h-16 focus:pt-6 focus:pb-4 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-4 autofill:pt-6 autofill:pb-4 md:text-lg font-sans2";

    const labelClass =
        "absolute top-0 start-0 p-4 h-full text-gray-500 text-base font-medium truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-2";

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = InquirySchema.safeParse(formData);
        if (!result.success) {
            const errors = result.error.issues.map((err) => err.message).join("\n");
            toast.error(errors);
            return;
        }

        try {
            setLoading(true);
            const res = await fetch("/api/Inquiries", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success("Your inquiry has been submitted successfully!");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    companyName: "",
                    servicesInterested: "",
                    message: "",
                });
            } else {
                toast.error(data.message || "Something went wrong");
            }
        } catch (err) {
            toast.error("Server error. Please try again later.");
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <section className="col-span-3 bg-gray-100 dark:bg-neutral-900 rounded-3xl my-5 py-6 p-4 md:p-16">
            <div className="mb-10 space-y-3">
                <h2 className="text-4xl font-white font-semibold">
                    Want Service? <span className="text-orange-600">We have</span> skilled{" "}
                    <span className="text-orange-600">Professionals</span>. Let&#39;s get
                    in <span className="text-orange-600">touch</span>
                </h2>
                <p className="text-lg font-medium text-gray-400">
                    Get in touch with our team for any assistance or information you
                    require
                </p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                    <div className="relative">
                        <Input
                            type="text"
                            id="name"
                            className={`${classes}`}
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                        />
                        <label className={`${labelClass}`}>Name</label>
                    </div>

                    <div className="relative">
                        <Input
                            type="email"
                            id="email"
                            className={`${classes} lowercase`}
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                        />
                        <label className={`${labelClass}`}>Email</label>
                    </div>

                    <div className="w-full grid grid-cols-2 md:grid-cols-2 gap-4">
                        <div className="relative">
                            <Input
                                type="tel"
                                id="phone"
                                className={`${classes}`}
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                            />
                            <label className={`${labelClass}`}>Phone Number</label>
                        </div>

                        <div className="relative">
                            <Input
                                type="text"
                                id="companyName"
                                className={`${classes}`}
                                value={formData.companyName}
                                onChange={handleChange}
                                placeholder="Company"
                            />
                            <label className={`${labelClass}`}>Company (Optional)</label>
                        </div>
                    </div>

                    <div className="relative">
                        <Input
                            type="text"
                            id="servicesInterested"
                            className={`${classes}`}
                            value={formData.servicesInterested}
                            onChange={handleChange}
                            placeholder="ServicesInterested"
                        />
                        <label className={`${labelClass}`}>Interested Services</label>
                    </div>

                    <div className="relative">
                        <textarea
                            id="message"
                            className={`${classes} h-40`}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="This is a textarea placeholder"
                        />
                        <label className={`${labelClass}`}>
                            Why do you want to contact us?
                        </label>
                    </div>
                </div>

                <div className="mt-10">
                    <Button
                        type="submit"
                        variant={"outline"}
                        disabled={loading}
                        className="flex items-center gap-x-2 py-4 md:py-3 w-full md:w-1/2 h-auto bg-orange-600 dark:bg-orange-600 hover:bg-orange-700 dark:hover:bg-orange-700 hover:text-white active:scale-95 duration-300 text-base text-gray-100 font-medium rounded-full focus:outline-none"
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </Button>
                </div>
            </form>
        </section>
    );
}

export default ContactForm;
