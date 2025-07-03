import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function FeaturedStories() {
 const FeaturedStories = [
    {
      title: "enterprise-tech startups to bet your",
      company: "Jobboost",
      logo: "/images/CompaniesLogos/jobboost_logo.png",
      link: "/job/1",
      publishDate: '10-05-2024',
    },
    {
      title: "America’s Best Startup Employers",
      company: "Jobboost",
      logo: "/images/CompaniesLogos/jobboost_logo.png",
      link: "/job/1",
      publishDate: '10-05-2024',
    },
    {
      title: "Productboard draws a blueprint for produ",
      company: "Jobboost",
      logo: "/images/CompaniesLogos/jobboost_logo.png",
      link: "/job/1",
      publishDate: '10-05-2024',
    },
    {
      title: "An all-star cast of VCs, including Tiger Global and Sequoia, has invested another $72 million into Productboard",
      company: "Jobboost",
      logo: "/images/CompaniesLogos/jobboost_logo.png",
      link: "/job/1",
      publishDate: '10-05-2024',
    },
    {
      title: "Productboard raises $72M to help developers turn user feedback into new features",
      company: "Jobboost",
      logo: "/images/CompaniesLogos/jobboost_logo.png",
      link: "/job/1",
      publishDate: '10-05-2024',
    },
    {
      title: "NEXT BILLION DOLLAR STARTUPS 2021",
      company: "Jobboost",
      logo: "/images/CompaniesLogos/jobboost_logo.png",
      link: "/job/1",
      publishDate: '10-05-2024',
    },
    {
      title: "Sequoia-Backed Productboard Raises $125 Million in New Round",
      company: "Jobboost",
      logo: "/images/CompaniesLogos/jobboost_logo.png",
      link: "/job/1",
      publishDate: '10-05-2024',
    },
  ];
    return (
      <>
          <section className="my-20">
              <h3 className="font-semibold text-4xl text-center w-full">Featured Stories</h3>
               <div className="my-20 flex items-center justify-center w-full max-w-7xl mx-auto">
          <Carousel
            className="h-auto"
            opts={{
              align: "start",
              dragFree: false,
            }}
          >
            <CarouselContent className="flex">
              {FeaturedStories.map((item, index) => (
                <CarouselItem key={index} className="basis-1/4 pl-10 flex-grow">
                  <Link href={item.link} className="border-2 w-full rounded-xl flex flex-col h-full min-h-[330px]">
                    <Card className="flex flex-col h-full">
                      <CardHeader className="select-none h-44">
                              <Image
                                width={800}
                                height={800}
                                src={item.logo}
                                          alt={item.company}
                                          className="w-auto h-full object-contain"
                              />
                      </CardHeader>
                      <CardContent className="flex-grow overflow-hidden">
                          <p className="text-sm mt-2 truncate text-gray-400 font-medium">
                            {item.company}
                          </p>
                          <p className="text-lg font-medium mt-2 line-clamp-2">
                            {item.title}
                          </p>
                      </CardContent>
                      <CardFooter className="flex items-center justify-between w-full select-none">
                          <span className="text-sm font-medium text-gray-500">
                            {item.publishDate}
                          </span>
                      </CardFooter>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="select-none" />
            <CarouselNext className="select-none" />
          </Carousel>
        </div>
          </section>
      </>
  )
}

export default FeaturedStories