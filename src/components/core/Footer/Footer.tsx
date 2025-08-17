"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoaderLink } from "@/components/ui/loaderLinks";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LuCircleDashed } from "react-icons/lu";
import { toast } from "sonner";
import { z } from "zod";



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// FROM SCHEMA FOR VALIDATION
const FormSchema = z.object({
  newsletter: z.string().min(12, { message: "Email must be at least 12 characters." }).email({ message: 'Must be a valid email' }),
})


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function Footer() {


  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      newsletter: "",
    },
  })


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  // POST SUBSCRIBER EMAIL WHEN SUBMIT THE FORM
  async function onSubmit(formData: z.infer<typeof FormSchema>) {
    setLoading(true); // Set loading state to true when form submission starts

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('email', formData.newsletter);

      const response = await axios.post('/api/newsletter', formDataToSend);
      const responseData = response.data;

      if (responseData.success) {
        toast.success('Hurray🎉 You Subscribed Hirebie', {
          description: 'You have successfully subscribed to the Hirebie newsletter.',
        })
      } else {
        toast.error("Submission Failed", {
          description: responseData.msg,
        });
      }
    } catch (error) {
      if (error && typeof error === "object") {
        const err = error as AxiosError<{ msg: string }>;

        console.log('====================================');
        console.log(err);
        console.log('====================================');
        if (err.response?.status === 409) {
          if (err.response.data.msg === "Already subscribed") {
            toast.error("Already subscribed");
          } else { 
            toast.error("Submission Failed###", {
              description: err.response.data?.msg,
            });
          }
        } else {
          toast.error("An unexpected error occurred", {
            description: err.message || "Failed to save FAQ",
          });
        }

        console.error("Error saving FAQ:", err);
      } else {
        console.error("Unknown error:", error);
      }
    } finally {
      setLoading(false);
    }

  }


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  // MAKE LOADING STATE OF BUTTON WHEN API IS WORKING
  const [loading, setLoading] = useState(false);


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  // FOOTER ALL LINKS
  const menuItems = {
    Services: [
      { text: "Idea Validation", link: "" },
      { text: "MVP Development", link: "" },
      { text: "Web & Mobile Apps", link: "" },
      { text: "UI/UX Design", link: "" },
      { text: "Product Engineering", link: "" },
      { text: "Cloud & DevOps", link: "" },
      { text: "Cybersecurity", link: "" },
      { text: "IT Consulting", link: "" },
    ],
    Launch: [
      { text: "Branding & Identity", link: "" },
      { text: "Website Development", link: "" },
      { text: "E-commerce Solutions", link: "" },
      { text: "Custom SaaS Platforms", link: "" },
      { text: "Marketplace Solutions", link: "" },
    ],
    Growth: [
      { text: "Digital Marketing", link: "" },
      { text: "SEO & Content", link: "" },
      { text: "Performance Marketing", link: "" },
      { text: "CRM & Automation", link: "" },
      { text: "Business Analytics", link: "" },
    ],
    Solutions: [
      { text: "Startups", link: "" },
      { text: "SMBs", link: "" },
      { text: "Enterprises", link: "" },
      { text: "Healthcare", link: "" },
      { text: "EdTech", link: "" },
      { text: "FinTech", link: "" },
    ],
    Company: [
      { text: "Our Story", link: "/s/our-story" },
      { text: "Team & Culture", link: "/s/team" },
      { text: "Press & Media", link: "/s/press-media" },
      { text: "Contact Us", link: "/s/contact" },
      { text: "Success Stories", link: "" },
    ],
    Career: [
      { text: "Careers", link: "/s/career" },
      { text: "Corporate Training", link: "" },
      { text: "Project Certification", link: "" },
      { text: "Projects Store", link: "/s/store" },
    ],
    Support: [
      { text: "Help Center", link: "/s/help-center" },
      { text: "Security Tips", link: "/s/security-tips" },
      { text: "FAQs", link: "/s/faqs" },
      { text: "Report an Issue", link: "/s/bug-report" },
      { text: "Testimonials", link: "/s/testimonials" },
    ],
    Policies: [
      { text: "Terms & Conditions", link: "/p/terms" },
      { text: "Privacy Policy", link: "/p/privacy" },
      { text: "Security Policy", link: "" },
      { text: "Cookies Policy", link: "/p/cookies" },
    ],
    Community: [
      { text: "Blog", link: "/s/blogs" },
      { text: "Announcement", link: "/s/announcement" },
      { text: "Events", link: "/s/events" },
      { text: "Hirebie Forum", link: "" },
      { text: "Startup Accelerator", link: "" },
    ],
    Social: [
      { text: "LinkedIn", link: "https://www.linkedin.com/company/hirebie" },
      { text: "Instagram", link: "https://www.instagram.com/hirebie_team" },
      { text: "Facebook", link: "https://www.facebook.com/Hirebie.team" },
      { text: "X (Twitter)", link: "https://x.com/hirebie_it" },
      { text: "WhatsApp", link: "https://www.whatsapp.com/channel/0029Vb6D884C1FuGbIvocK38" },
    ],
  };



  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  return (
    <footer className="mt-10 p-0 lg:p-10">

      {/* <Toaster /> */}

      <div className="container mx-auto px-4">
        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-5 gap-10">
          {Object.entries(menuItems).map(([section, items]) => (
            <ul key={section} className="list-none">
              <li>
                <h6 className="text-base font-semibold text-black dark:text-white select-none">
                  {section}
                </h6>
              </li>
              {items.map(({ text, link }) => (
                <li
                  key={text}
                  className={`my-2.5  ${link ? "opacity-100" : "opacity-30"}`}
                >
                  {link ? (
                    <LoaderLink
                      href={link}
                      className="text-sm font-medium font-sans2 text-neutral-500 dark:text-neutral-400"
                    >
                      {text}
                    </LoaderLink>
                  ) : (
                    <span className="text-sm font-medium font-sans2 text-black dark:text-white">
                      {text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden p-5">
          {Object.entries(menuItems).map(([section, items]) => (
            <Accordion key={section} type="single" collapsible>
              <AccordionItem value="{section}">
                <AccordionTrigger className="hover:no-underline text-xl font-semibold text-black dark:text-white/70">{section}</AccordionTrigger>
                <AccordionContent>
                  {items.map(({ text, link }) => (
                    <div key={text} className={`w-full ${link ? "opacity-100" : "opacity-40"}`}>
                      {link ? (
                        <LoaderLink
                          href={link}
                          className="text-xl text-left font-medium hover:underline text-neutral-600 dark:text-neutral-300 w-full h-full block py-2.5 pl-5"
                        >
                          {text}
                        </LoaderLink>
                      ) : (
                        <span className="text-xl font-medium text-black dark:text-white w-full h-full block py-2.5 pl-5">{text}</span>
                      )}
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>



        {/* Footer Bottom Section */}
        <div className="bg-neutral-100 text-neutral-100 dark:bg-neutral-900 rounded-xl p-9 my-10 ">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <LoaderLink href="/" className="flex-col items-start gap-2 hidden md:flex">
              <Image
                src="/images/logo/logo.svg"
                alt="Hirebie Logo"
                width={80}
                height={80}
                className="w-40 h-auto"
              />
              <div>
                <h3 className="text-2xl font-bold text-[#ED1C24] sr-only">Hirebie</h3>
                <p className="text-base mt-1 text-neutral-400 dark:text-white font-medium">IT Services and IT Consulting</p>
              </div>
            </LoaderLink>

            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4 flex flex-col items-end">
                  <FormField
                    control={form.control}
                    name="newsletter"
                    render={({ field }) => (
                      <FormItem>
                        <h3 className="text-3xl lg:text-2xl font-bold text-black dark:text-white">Newsletter</h3>
                        <FormDescription className="text-xl lg:text-lg font-medium text-neutral-500 mt-1 w-full">
                          Subscribe to our newsletter to get latest updates and news
                        </FormDescription>
                        <div className="gap-4 items-center mt-3">
                          <div className="px-3 text-lg relative">
                            <FormMessage className="bg-white dark:bg-neutral-900 px-10 py-2 rounded-lg absolute bottom-2 shadow-xl" />
                          </div>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="What is your work email"
                              className="text-base px-6 h-14 lg:h-12 rounded-full outline-none border-2 border-neutral-400 text-white shadow-none min-w-full lg:min-w-96 font-medium tracking-wider"
                              {...field} />
                          </FormControl>
                        </div>
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="bg-[#FC4C02] border-orange-900 border-2 font-medium font-sans2 rounded-full items-center text-lg lg:text-base py-2 mt-2 w-full lg:w-fit h-14 lg:h-11 disabled:opacity-90"
                    disabled={loading} // Disable the button when loading
                  >
                    {loading ? (
                      <>
                        <div className="flex items-center gap-2 px-5 text-white">
                          <LuCircleDashed className="h-4 w-4 animate-spin font-bold mb-0.5" /> Please wait...
                        </div>
                      </>
                    ) : (
                      <span className="px-14 text-white">Subscribe</span>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>


        <div className="w-full border-t border-neutral-800 py-10">
          <p className="mt-2 font-normal font-sans2 text-base text-neutral-500">
            © 2025 <LoaderLink href={"/"}>Hirebie</LoaderLink> Pvt. Ltd.{" "}
            <LoaderLink href={"/"}>Hirebie</LoaderLink> and the{" "}
            <LoaderLink href={"/"}>Hirebie</LoaderLink> logo are registered trademarks of
            the company. All services are currently available only within
            India. For any inquiries or support, please contact us through our{" "}
            <LoaderLink href={"/s/contact"} className="text-[#FF4A02]">
              Contact Page
            </LoaderLink>
            . Please see our{" "}
            <LoaderLink href={"/p/terms"} className="text-[#FF4A02]">
              Terms of Service
            </LoaderLink>{" "}
            for more details.
          </p>
          <p className="mt-5 font-normal font-sans2 text-base text-neutral-500">
            Read our{" "}
            <LoaderLink href={"/p/cookies"} className="text-[#FF4A02]">
              Cookies Policy
            </LoaderLink>{" "}
            and{" "}
            <LoaderLink href={"/p/privacy"} className="text-[#FF4A02]">
              Privacy Policy
            </LoaderLink>{" "}
            to understand how we operate and manage your information. For
            detailed information on how we protect your data, visit our{" "}
            <LoaderLink href={"/p/privacy"} className="text-[#FF4A02]">
              Privacy Policy
            </LoaderLink>
            . By using our services, you agree to our{" "}
            <LoaderLink href={"/p/terms"} className="text-[#FF4A02]">
              Terms of Service
            </LoaderLink>{" "}
            . Thank you for choosing Hirebie.
          </p>
        </div>
      </div>
    </footer >
  );
}

export default Footer;