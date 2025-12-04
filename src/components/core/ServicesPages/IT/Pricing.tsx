// import { Button } from "@/components/ui/button";
// import {
//     ArrowRight,
//     LucideIcon,
// } from "lucide-react";

// const StepCard = ({
//     icon: Icon,
//     title,
//     duration,
//     description,
//     price,
//     ctaVariant = "outline",
// }: {
//     icon: LucideIcon;
//     title: string;
//     duration?: string;
//     description: string;
//     price?: string;
//     ctaVariant?: "default" | "outline";
// }) => (
//     <div className="group relative overflow-hidden rounded-xl border-2 transition-all duration-300 hover:-translate-y-1 hover:border-black dark:hover:border-white border-primary/20 bg-muted/0">
//         <div className="p-8">
//             <div className="flex items-start gap-3">
//                 <div className="rounded-lg p-3 bg-primary/10 text-primary">
//                     <Icon className="h-6 w-6" />
//                 </div>
//                 <div>
//                     <h3 className="text-xl font-semibold">{title}</h3>
//                     {duration && (
//                         <div className="text-muted-foreground mt-1 text-sm">{duration}</div>
//                     )}
//                 </div>
//             </div>

//             <p className="text-muted-foreground mt-6 leading-relaxed">
//                 {description}
//             </p>

//             <div className="border-border mt-8 border-t pt-6 flex items-center justify-between">
//                 <div>
//                     <div className="text-lg font-semibold">
//                         {price ?? "Included in package"}
//                     </div>
//                 </div>
//                 <Button
//                     variant={ctaVariant}
//                     size="sm"
//                     className="gap-1.5 group-hover:shadow-md"
//                 >
//                     Get Started{" "}
//                     <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
//                 </Button>
//             </div>
//         </div>
//     </div>
// );

// export default function Pricing({
//     heading,
//     subheading,
//     note,
//     cards,
// }: {
//     heading: string;
//     subheading: string;
//     note: string;
//     cards: {
//         icon: LucideIcon;
//         title: string;
//         duration?: string;
//         description: string;
//         price?: string;
//         ctaVariants?: "default" | "outline";
//     }[];
// }) {
//     return (
//         <section className="dark:bg-black/20 py-32">
//             <div className="container px-20 space-y-16">
//                 {/* Section Heading */}
//                 <div className="space-y-4 text-center">
//                     <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
//                         {heading}
//                     </h2>
//                     <p className="text-muted-foreground mx-auto max-w-2xl text-lg tracking-tight md:text-xl">
//                         {subheading}
//                     </p>
//                 </div>

//                 {/* Steps Grid */}
//                 <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
//                     {cards.map((card, index) => (
//                         <StepCard key={index} {...card} />
//                     ))}
//                 </div>
//                 <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mt-8">
//                     <strong>Note:</strong> {note}
//                 </p>
//             </div>
//         </section>
//     );
// }