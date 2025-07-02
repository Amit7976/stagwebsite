import { FaStar } from "react-icons/fa6";

interface Testimonial {
  stars: number;
  text: string;
  imgSrc: string;
  name: string;
}

function TestimonialCard({ stars, text, imgSrc, name }: Testimonial) {
  return (
    <li className="z-10 my-2">
      <div className="flex flex-col overflow-hidden shadow-xl w-full max-w-lg h-full rounded-xl">
        <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
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
              <p className="text-lg leading-relaxed text-gray-900 font-pj">
                “{text}”
              </p>
            </blockquote>
          </div>

          <div className="flex items-center mt-8">
            <img
              className="flex-shrink-0 object-cover rounded-full w-11 h-11"
              src={imgSrc}
              alt={name}
            />
            <div className="ml-4">
              <p className="text-base font-bold text-gray-900 font-pj">
                {name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default TestimonialCard;
