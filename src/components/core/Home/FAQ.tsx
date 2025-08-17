import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQProps {
  heading?: string;
  description?: string;
  items?: FaqItem[];
  supportHeading?: string;
  supportDescription?: string;
  supportButtonText?: string;
  supportButtonUrl?: string;
  faqsButtonUrl?: string;
  faqsButtonText?: string;
}

const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "What services does Hirebie offer?",
    answer:
      "Hirebie is your one-stop shop for tech, talent, and branding-covering everything from website, mobile, and game development to UI/UX design, DevOps, cybersecurity, and growth marketing.",
  },
  {
    id: "faq-2",
    question: "Who does Hirebie work with? (Industries or business types)",
    answer:
      "Hirebie works with startups, SMBs, enterprises, and even niche industries like FinTech, EdTech, and healthcare-tailoring services to meet your specific goals.",
  },
  {
    id: "faq-3",
    question: "What’s Hirebie’s project delivery process like?",
    answer:
      "We follow a slick process: 1) Requirement gathering, 2) Planning & strategy, 3) Design & prototyping, 4) Development, 5) Testing & QA, and 6) Deployment & delivery-with clear timelines every step of the way.",
  },
  {
    id: "faq-4",
    question: "Why choose Hirebie over others?",
    answer:
      "Numbers speak: 250+ companies trust us, 150+ projects delivered, 5,000+ hours saved, a 90% client retention rate, and over 120% client growth. We don’t just deliver - we accelerate.",
  },
  {
    id: "faq-5",
    question: "Are Hirebie’s services available globally or only in India?",
    answer:
      "Yes, Hirebie works globally. We’ve served 100+ clients worldwide, while still having a strong presence in India.",
  },
  {
    id: "faq-6",
    question: "How can I get in touch for help or inquiries?",
    answer:
      "You can reach us via our Contact Page, or email us at hello@hirebie.com for general inquiries or contact@hirebie.com for help.",
  },
  {
    id: "faq-7",
    question: "What about privacy and policy details?",
    answer:
      "Transparency is our game. Check our footer menu for easy access to Terms of Service, Privacy Policy, Security Policy, and Cookies Policy.",
  },
];



const FAQ = ({
  description = "Find answers to common questions about our products. Can't find what you're looking for? Contact our support team.",
  items = faqItems,
  supportHeading = "Need more support?",
  supportDescription = "Our dedicated support team is here to help you with any questions or concerns. Get in touch with us for personalized assistance.",
  supportButtonText = "Contact Support",
  supportButtonUrl = "/s/contact",
  faqsButtonText = "More FAQs",
  faqsButtonUrl = "/s/faqs",
}: FAQProps) => {
  return (
    <section className="px-4 md:px-10">
      <div className="container space-y-5">
        <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-6xl">
            FAQ<span className="text-orange-600">s</span>
          </h2>
          <p className="text-muted-foreground text-xl font-medium">{description}</p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full lg:max-w-7xl"
        >
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-gray-300 dark:border-neutral-800">
              <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60 cursor-pointer mt-3">
                <div className="font-medium font-sans2 sm:py-1 lg:py-4 text-lg">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div className="text-neutral-700 dark:text-neutral-300 text-lg">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mx-auto flex max-w-6xl flex-col items-center pt-10 rounded-lg bg-accent dark:bg-neutral-900 p-4 text-center md:rounded-xl md:p-6 lg:p-8">
          <div className="relative">
            <Avatar className="absolute mb-4 size-16 origin-bottom -translate-x-[60%] scale-[80%] border md:mb-5">
              <AvatarImage src="/images/Home/avatar/avatar-2.webp" />
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
            <Avatar className="absolute mb-4 size-16 origin-bottom translate-x-[60%] scale-[80%] border md:mb-5">
              <AvatarImage src="/images/Home/avatar/avatar-3.webp" />
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
            <Avatar className="mb-4 size-16 border md:mb-5">
              <AvatarImage src="/images/Home/avatar/avatar-1.webp" />
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
          </div>
          <h3 className="mb-2 max-w-3xl font-semibold text-xl font-sans2">
            {supportHeading}
          </h3>
          <p className="mb-8 max-w-3xl text-muted-foreground text-lg font-sans2">
            {supportDescription}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            <Button className="w-full sm:w-auto text-lg lg:text-base text-orange-600 border-2 border-orange-600 bg-transparent hover:bg-orange-600 hover:text-white hover:border-orange-700 duration-300 h-14 lg:h-11 rounded-full px-10" asChild>
              <a href={faqsButtonUrl} target="_blank">
                {faqsButtonText}
              </a>
            </Button>
            <Button className="w-full sm:w-auto text-lg lg:text-base text-white bg-orange-600 h-14 lg:h-11 rounded-full px-8" asChild>
              <a href={supportButtonUrl} target="_blank">
                {supportButtonText}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { FAQ };
