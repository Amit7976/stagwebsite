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
        <h4 className="text-[3vw] font-bold text-center text-wrap whitespace-nowrap duration-500">
          <span className="text-nowrap block">
            At
            <Link href={'/'} className="text-[#F75000]"> Jobboost</Link>, we connect
            <span className="hover:text-7xl font-extrabold duration-500 pl-2 select-none cursor-pointer bg-clip-text text-transparent bg-[url('/images/Random/indianFlag.webp')] bg-top">
              India
            </span>
            ’s top talent with
          </span>
          <span className="text-nowrap block">
            leading companies. Hear
            <HoverCard>
              <HoverCardTrigger>
                <Image
                  src={"/images/Random/profile/profile1.webp"}
                  alt="Jobboost logo"
                  width={800}
                  height={800}
                  className="w-10 h-10 mx-2 inline-block rounded-full object-cover hover:w-28 duration-500 cursor-pointer"
                />
              </HoverCardTrigger>
              <HoverCardContent>
                <div>
                  <RiDoubleQuotesL className="text-lg" />
                  <p className="text-sm font-medium text-gray-600 my-3 text-start text-wrap">
                    "We're incredibly happy with the way JobBoost has helped us
                    find our dream job and connect with our top talent. Their
                    expertise and ability to find the right candidates has been
                    truly exceptional."
                  </p>
                  <p className="text-xs font-medium text-black text-start">
                    Amit Gupta
                  </p>
                  <p className="text-xs font-medium text-gray-400 text-start">
                    Employee at Ekapde
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
            from our clients and candidates
          </span>
          <span className="text-nowrap block">
            about how our
            <HoverCard>
              <HoverCardTrigger>
                <Image
                  src={"/images/Random/profile/profile2.webp"}
                  alt="Jobboost logo"
                  width={800}
                  height={800}
                  className="w-10 h-10 mx-2 inline-block rounded-full object-cover hover:w-28 duration-500 cursor-pointer"
                />
              </HoverCardTrigger>
              <HoverCardContent>
                <div>
                  <RiDoubleQuotesL className="text-lg" />
                  <p className="text-sm font-medium text-gray-600 my-3 text-start text-wrap">
                    "Our experience with JobBoost has been fantastic. They've
                    not only helped us find our dream jobs but also connected us
                    with top-notch talent. Their skill in sourcing the right
                    candidates is truly impressive."
                  </p>
                  <p className="text-xs font-medium text-black text-start">
                    Khushi Verma
                  </p>
                  <p className="text-xs font-medium text-gray-400 text-start">
                    Employee at Friscon Solution
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
            recruitment services have transformed their
          </span>{" "}
          <span className="text-nowrap block">
            careers and empowered
            <HoverCard>
              <HoverCardTrigger>
                <Image
                  src={"/images/Random/profile/profile3.webp"}
                  alt="Jobboost logo"
                  width={800}
                  height={800}
                  className="w-10 h-10 mx-2 inline-block rounded-full object-cover hover:w-28 duration-500 cursor-pointer"
                />
              </HoverCardTrigger>
              <HoverCardContent>
                <div>
                  <RiDoubleQuotesL className="text-lg" />
                  <p className="text-sm font-medium text-gray-600 my-3 text-start text-wrap">
                    "JobBoost has exceeded our expectations by helping us secure
                    our dream positions and connect with exceptional talent.
                    Their proficiency in identifying the perfect candidates has
                    been remarkable."
                  </p>
                  <p className="text-xs font-medium text-black text-start">
                    Nidhi Sharma
                  </p>
                  <p className="text-xs font-medium text-gray-400 text-start">
                    Employee at Wishfin
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
            businesses.
          </span>
        </h4>
      </section>
    </>
  );
}

export default HeroSection;
