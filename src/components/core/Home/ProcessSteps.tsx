import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { BsClock } from "react-icons/bs";
import { LuClock } from "react-icons/lu";


const steps = [
    {
        id: 1,
        title: "Requirement Gathering",
        description:
            "Understand client goals, target audience, and project scope in detail.",
        time: "2 Days",
    },
    {
        id: 2,
        title: "Planning & Strategy",
        description:
            "Create roadmap, timelines, and resource allocation to ensure smooth execution.",
        time: "3 Days",
    },
    {
        id: 3,
        title: "Design & Prototyping",
        description:
            "Develop UI/UX mockups, get approvals, and build clickable prototypes.",
        time: "5 Days",
    },
    {
        id: 4,
        title: "Development",
        description:
            "Code the product using modern tech stack, ensuring scalability and performance.",
        time: "10 Days",
    },
    {
        id: 5,
        title: "Testing & QA",
        description:
            "Run multiple test cycles for functionality, security, and usability.",
        time: "4 Days",
    },
    {
        id: 6,
        title: "Deployment & Delivery",
        description:
            "Launch the product, monitor initial performance, and deliver documentation.",
        time: "1 Day",
    },
];
  
  
export default function ProcessSteps() {
    return (
        <section className="py-32">
            <div className="container px-10">
                <div className="text-left">
                    <h2 className="mb-2 text-3xl font-semibold lg:text-4xl">
                        Our <span className="text-orange-600">Process</span>
                    </h2>
                    <p className="mb-6 text-xl font-medium lg:text-2xl text-gray-400">
                        How We Deliver Your Project
                    </p>
                    <Button className="rounded-full bg-orange-600 p-1 h-auto pl-8 text-base gap-2 text-white">Get A Quote <span><FaArrowRight className="size-10 bg-white rounded-full text-orange-600 p-2 -rotate-45" /></span> </Button>
                </div>

                <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-y-6">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="flex flex-col border-r  [&:nth-child(3)]:border-r-0 last:border-r-0 border-gray-200 px-10 sm:mt-4 md:mt-6"
                        >
                            <div className="relative">
                                <h1 className="mb-16 text-9xl font-medium bg-gradient-to-r from-black to-transparent bg-clip-text text-transparent">
                                    0{step.id}
                                </h1>
                                <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-100"></div>
                            </div>
                            <p className="text-md mt-4 mb-2 font-semibold">{step.title}</p>
                            <p className="text-md mb-6 text-muted-foreground">{step.description}</p>
                            <span className="inline-flex items-center justify-center rounded-md border-2 border-gray-200 px-4 text-xs font-semibold whitespace-nowrap w-fit gap-1.5 py-2.5">
                                <LuClock className="scale-115" />
                                {step.time}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      
    );
}
  