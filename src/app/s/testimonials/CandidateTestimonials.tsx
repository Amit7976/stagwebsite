"use client"
import CompanyTestimonialCard from "@/components/core/Testimonial/CompanyTestimonialCard";
import { TestimonialType } from "@/models/TestimonialModel";
import { useEffect, useState } from "react";

function CandidateTestimonials() {
  const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTestimonials = async () => {
    try {
      const res = await fetch("/api/testimonials");
      const data = await res.json();
      if (data.success) {
        setTestimonials(data.data);
      }
    } catch (error) {
      console.error("Error fetching Testimonials:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96 col-span-2">
        <div className="loader"></div>
      </div>
    )
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////


  return (
    <>
      <section className="w-full my-10 mb-0">
        <div className="text-center px-10">
          <p className="text-lg font-medium text-gray-600 dark:text-neutral-400">
            Testimonials from top companies
          </p>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl xl:text-5xl">
            <span className="text-[#FB4C04] font-semibold">Hirebie</span>{" "}
            is appreciated by companies
          </h2>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-b from-white dark:from-neutral-950 to-transparent w-full h-20 sticky top-0"></div>
          <div className="bg-gradient-to-t from-white dark:from-neutral-950 to-transparent w-full h-20 fixed bottom-0"></div>
          <div className="w-full p-4 md:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none gap-6 items-start bg-gray-50 dark:bg-neutral-950 pb-40">
            {testimonials.map((testimonial, index) => (
              <div className="col-span-1 h-auto space-y-6">
                <CompanyTestimonialCard
                  key={index}
                  stars={testimonial.star}
                  text={testimonial.content}
                  imgSrc={testimonial.companyLogo}
                  name={testimonial.authorName}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CandidateTestimonials;
