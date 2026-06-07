// import React from "react";

// interface Card {
//     icon: React.ReactNode;
//     title: string;
//     desc: string;
// }

// interface WhyChooseProps {
//     heading: string;
//     points: Card[];
// }

// const WhyChoose: React.FC<WhyChooseProps> = ({ heading, points }) => {
//     return (
//         <section className="py-20 px-6 bg-white dark:bg-black transition-colors duration-300">
//             <div className="max-w-6xl mx-auto text-center">
//                 <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black dark:text-white">
//                     <span className="text-black dark:text-white">Why Choose </span>
//                     <span className="text-orange-600 dark:text-orange-600">Hirebie </span>
//                     {heading}{" "}
//                 </h2>
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
//                     {points.map((item, idx) => (
//                         <div
//                             key={idx}
//                             className="group relative overflow-hidden rounded-xl border-2 transition-all duration-300 hover:-translate-y-1 hover:border-black dark:hover:border-white border-primary/20 bg-muted/0 p-5"
//                         >
//                             <div className="flex flex-col items-center justify-center gap-4 mb-2">
//                                 {item.icon}
//                             </div>
//                             <h3 className="max-w-xs text-center text-xl font-semibold text-black dark:text-white">
//                                 {item.title}
//                             </h3>
//                             <p className="text-sm text-muted-foreground md:text-base">
//                                 {item.desc}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };
// export default WhyChoose;

