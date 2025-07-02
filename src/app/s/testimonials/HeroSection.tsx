import Image from "next/image";
import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { RiDoubleQuotesL } from "react-icons/ri";
import Link from "next/link";

function HeroSection() {
  return (
    <>
      <section className="w-full h-screen flex items-center justify-center">
        <h4 className="sr-only">At Hirebie, we empower businesses and individuals with tailored solutions and trusted services. Hear from our clients about how our work has transformed their journeys and helped them grow.</h4>
        <h4 className="text-[3.5vw] font-bold text-center text-wrap whitespace-nowrap duration-500">
          <span className="text-nowrap block">
            At
            <Link href={'/'} className="text-[#F75000]"> Hirebie</Link>, we empower
            <span className="hover:text-7xl font-extrabold duration-500 pl-2 select-none bg-clip-text text-transparent bg-[url('/images/Home/business.jpg')] bg-bottom bg-contain">
              businesses
            </span>
            and individuals
          </span>
          <span className="text-nowrap block">
            with tailored solutions and trusted services. Hear
            <Image
              src={"/images/Random/profile/profile1.webp"}
              alt="Hirebie client"
              width={800}
              height={800}
              className="w-10 h-10 mx-2 inline-block rounded-full object-cover hover:w-28 duration-500"
            />
            from
          </span>
          <span className="text-nowrap block">
            our clients about how our work has transformed their
            <Image
              src={"/images/Random/profile/profile2.webp"}
              alt="Hirebie client"
              width={800}
              height={800}
              className="w-10 h-10 mx-2 inline-block rounded-full object-cover hover:w-28 duration-500"
            />
          </span>
          <span className="text-nowrap block">
            journeys and helped them
            <Image
              src={"/images/Random/profile/profile3.webp"}
              alt="Hirebie client"
              width={800}
              height={800}
              className="w-10 h-10 mx-2 inline-block rounded-full object-cover hover:w-28 duration-500"
            />
            grow.
          </span>
        </h4>
      </section>

    </>
  );
}

export default HeroSection;
