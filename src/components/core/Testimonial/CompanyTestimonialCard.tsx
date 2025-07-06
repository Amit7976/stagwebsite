import Image from "next/image";
import { FaStar } from "react-icons/fa6";

interface Testimonial {
  stars: number;
  text: string;
  imgSrc: string;
  name: string;
}

function CompanyTestimonialCard({ stars, text, imgSrc, name }: Testimonial) {
  return (
    <li className="h-full">
      <div className="flex flex-col overflow-hidden shadow-xl w-full max-w-lg h-full rounded-xl">
        <div className="flex flex-col justify-between flex-1 p-6 bg-white dark:bg-neutral-900 lg:py-8 lg:px-7">
          <div className="flex-1">
            <div className="flex items-center">
              {[...Array(stars)].map((_, index) => (
                <FaStar
                  key={index}
                  color="#FDB241"
                  width={20}
                  height={20}
                />
              ))}
            </div>

            <blockquote className="flex-1 mt-8">
              <p className="text-lg leading-relaxed text-gray-900 dark:text-neutral-200 font-pj">
                “{text}”
              </p>
            </blockquote>
          </div>

          <div className="flex items-center mt-5 w-40 h-14 overflow-hidden rounded-xl object-cover p-2">
            <Image
              width={200}
              height={200}
              className="flex-shrink-0 w-full h-auto"
              src={imgSrc}
              alt={name}
            />
          </div>
        </div>
      </div>
    </li>
  );
}

export default CompanyTestimonialCard;
