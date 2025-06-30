"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner"
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LuCircleDashed } from "react-icons/lu";
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
    } catch (error: any) {
      if (error.response && error.response.status === 409) {
        toast.error("Submission Failed", {
          description: error.response.data.msg,
        });
      } else {
        toast.error("An unexpected error occurred", {
          description: error.message || "Failed to save FAQ",
        });
      }
      console.error('Error saving FAQ:', error);
    } finally {
      setLoading(false); // Reset loading state after form submission is completed
    }
  }


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  // MAKE LOADING STATE OF BUTTON WHEN API IS WORKING
  const [loading, setLoading] = useState(false);


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  // FOOTER ALL LINKS
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
  


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  return (
    <footer className="mt-40 p-0 lg:p-10 border-t-2 border-neutral-200 text-neutral-200 dark:border-neutral-800 rounded-t-4xl">






      {/* <Toaster /> */}

      <div className="container mx-auto px-4">
        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-5 gap-10">
          {Object.entries(menuItems).map(([section, items]) => (
            <ul key={section} className="">
              <li>
                <h6 className="text-base font-bold text-black dark:text-white select-none">
                  {section}
                </h6>
              </li>
              {items.map(({ text, link }) => (
                <li
                  key={text}
                  className={`my-2.5  ${link ? "opacity-100" : "opacity-40"}`}
                >
                  {link ? (
                    <a
                      href={link}
                      className="text-sm font-medium text-neutral-500"
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-neutral-500">
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
                <AccordionTrigger className="hover:no-underline text-base font-semibold text-black dark:text-white">{section}</AccordionTrigger>
                <AccordionContent>
                  {items.map(({ text, link }) => (
                    <div key={text} className={`w-full ${link ? "opacity-100" : "opacity-40"}`}>
                      {link ? (
                        <Link
                          href={link}
                          className="text-base font-medium hover:underline text-neutral-500 w-full h-full block py-2.5 pl-5"
                        >
                          {text}
                        </Link>
                      ) : (
                        <span className="text-base font-medium text-neutral-600 w-full h-full block py-2.5 pl-5">{text}</span>
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
            <Link href="/" className="flex flex-col items-center">
              <Image
                src="/images/Logo/logo.svg"
                alt="Hirebie Logo"
                width={80}
                height={80}
                className="w-60 h-auto"
              />
              <div>
                <h3 className="text-2xl font-bold text-[#ED1C24] sr-only">Hirebie</h3>
                <p className="text-base mt-1 text-neutral-400 dark:text-white font-medium">IT & Career Growth Platform</p>
              </div>
            </Link>

            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4 flex flex-col items-end">
                  <FormField
                    control={form.control}
                    name="newsletter"
                    render={({ field }) => (
                      <FormItem>
                        <h3 className="text-2xl font-bold text-black dark:text-white">Newsletter</h3>
                        <FormDescription className="text-sm font-medium text-neutral-500 mt-1 w-full">
                          Subscribe to our newsletter to get latest updates and news
                        </FormDescription>
                        <div className="gap-4 items-center mt-3">
                          <div className="px-3 text-sm relative">
                            <FormMessage className="bg-white px-10 py-2 rounded-lg absolute bottom-2 shadow-xl" />
                          </div>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="What is your work email"
                              className="text-base px-6 pt-5 pb-6 mt-2 rounded-full outline-none border-2 border-neutral-400 text-neutral-500 shadow-none min-w-full lg:min-w-96 font-medium tracking-wider"
                              {...field} />
                          </FormControl>
                        </div>
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="bg-[#FC4C02] rounded-full py-2 mt-2 w-fit h-10 disabled:opacity-90"
                    disabled={loading} // Disable the button when loading
                  >
                    {loading ? (
                      <>
                        <div className="flex items-end gap-2 px-5">
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
          <p className="mt-2 font-medium text-sm text-neutral-500">
            © 2025 <Link href={"/"}>Hirebie</Link> Pvt. Ltd.{" "}
            <Link href={"/"}>Hirebie</Link> and the{" "}
            <Link href={"/"}>Hirebie</Link> logo are registered trademarks of
            the company. All services are currently available only within
            India. For any inquiries or support, please contact us through our{" "}
            <Link href={"/contact"} className="text-[#FF4A02]">
              Contact Page
            </Link>
            . Please see our{" "}
            <Link href={"/terms"} className="text-[#FF4A02]">
              Terms of Service
            </Link>{" "}
            for more details.
          </p>
          <p className="mt-5 font-medium text-sm text-neutral-500">
            Read our{" "}
            <Link href={"/communityGuidelines"} className="text-[#FF4A02]">
              Community Guidelines
            </Link>{" "}
            and{" "}
            <Link href={"/privacy"} className="text-[#FF4A02]">
              Privacy Policy
            </Link>{" "}
            to understand how we operate and manage your information. For
            detailed information on how we protect your data, visit our{" "}
            <Link href={"/privacy"} className="text-[#FF4A02]">
              Privacy Policy
            </Link>
            . By using our services, you agree to our{" "}
            <Link href={"/terms"} className="text-[#FF4A02]">
              Terms of Service
            </Link>{" "}
            . Thank you for choosing Hirebie.
          </p>
        </div>
      </div>
    </footer >
  );
}

export default Footer;
``