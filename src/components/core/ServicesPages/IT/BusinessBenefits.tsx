// import React from "react";

// type Feature = {
//     icon: React.ReactNode;
//     title: string;
//     desc: string;
// };

// interface BusinessBenefits {
//     subheading: string;
//     features: Feature[];
// }

// const BusinessBenefits: React.FC<BusinessBenefits> = ({ subheading, features }) => {
//     return (
//         <section className="px-20 w-full">
//             {/* Hero Section */}
//             <div className="relative bg-cover bg-center bg-no-repeat py-10 md:py-16 xl:px-6 xl:py-28 after:absolute after:rounded-4xl after:inset-0 after:z-1 after:block after:size-full after:bg-black/40 after:content-[''] h-[70vh] flex items-center rounded-4xl hero-bg">
//                 <div className="container z-[2]">
//                     <div className="flex flex-col items-center justify-center gap-12 text-center">
//                         <div className="flex max-w-3xl flex-col gap-8">
//                             <h2 className="text-2xl tracking-tight text-white md:text-7xl scale-105 font-medium">
//                                 Business <span className="text-orange-600">Benefits</span>
//                             </h2>
//                             <div className="text-2xl font-medium tracking-tight text-neutral-300">
//                                 {subheading}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Features Section */}
//             <div className="container">
//                 {/* First 4 Features */}
//                 <div className="grid items-stretch gap-8 py-20 md:grid-cols-2 lg:grid-cols-4">
//                     {features.slice(0, 4).map((item, idx) => (
//                         <div
//                             key={idx}
//                             className="group relative overflow-hidden rounded-xl border-2 transition-all duration-300 hover:-translate-y-1 hover:border-black dark:hover:border-white border-primary/20 bg-muted/0 p-6"
//                         >
//                             <div className="flex flex-col items-center justify-center gap-4">
//                                 {item.icon}
//                                 <div className="max-w-xs text-center text-xl font-semibold">
//                                     {item.title}
//                                 </div>
//                                 <div className="text-muted-foreground max-w-lg text-center text-base">
//                                     {item.desc}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Remaining Features */}
//                 <div className="grid justify-between items-stretch sm:grid-cols-2 md:grid-cols-4 gap-8">
//                     {features.slice(4).map((item, idx) => (
//                         <div
//                             key={idx}
//                             className="group relative overflow-hidden rounded-xl border-2 transition-all duration-300 hover:-translate-y-1 hover:border-black dark:hover:border-white border-primary/20 bg-muted/0 p-6"
//                         >
//                             <div className="flex flex-col items-center justify-center gap-4">
//                                 {item.icon}
//                                 <div className="max-w-xs text-center text-xl font-semibold">
//                                     {item.title}
//                                 </div>
//                                 <div className="text-muted-foreground max-w-lg text-center text-base">
//                                     {item.desc}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default BusinessBenefits;