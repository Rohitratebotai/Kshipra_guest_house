import { useState } from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai"; // Import star icon

export function Testimonial() {
  const testimonialData = [
    {
      context_text:
        "Absolutely loved my stay here! The guest house is very clean, well-maintained, and located just a short drive from Mahakaleshwar Temple. The staff was polite and very helpful, and the rooms were spacious and comfortable. A perfect place to stay for anyone visiting Ujjain.",
      name: "Priya Sharma",
      rating: 5, // Add rating
    },

    {
      context_text:
        "Great location and a peaceful environment. I stayed here with my parents during our temple visit, and we felt right at home. The area is quiet but still close to all major landmarks. Service was prompt and friendly. Highly recommended for family stays!",
      name: " Ravi Deshmukh",
      rating: 4.5, // Add rating
    },

    {
      context_text:
        "The Waterfront Resort is an ideal place to relax. The surroundings are beautiful, with stunning views of Mulshi Lake. We really enjoyed the nature walk to the lake, and the pool was great for unwinding. Chef Jaisingh’s barbecue was delicious, and the fruit custard dessert was a delightful treat. Loved every moment of our stay!",
      name: "Ajay Rajak",
      rating: 5, // Add rating
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = testimonialData.length;

  function previous() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  function next() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  return (
    <div className="w-full flex justify-center">
      <section className="flex bg-white justify-center items-center w-full max-w-6xl px-4 py-12 sm:py-16 md:py-20">
        <div className="w-full max-w-2xl mx-auto font-comic">
          {testimonialData.map(
            (item, index) =>
              index === current && (
                <div key={index} className="flex flex-col">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <BiMessageRoundedDetail className="text-btn h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14" />
                  </div>

                  {/* Testimonial Text */}
                  <div className="text-center mb-8">
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg italic">"{item.context_text}"</p>
                  </div>

                  {/* User Info */}
                  <div className="text-center mb-4">
                    <h6 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900">{item.name}</h6>
                  </div>

                  {/* Star Ratings */}
                  <div className="flex justify-center mb-8">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <AiFillStar key={i} className="text-yellow-500 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                    ))}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={previous}
                      className="p-2 rounded-full bg-btn text-white hover:bg-btn-secondary transition duration-300 focus:outline-none focus:ring-2 focus:bg-btn-secondary"
                      aria-label="Previous testimonial"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={next}
                      className="p-2 rounded-full bg-btn text-white hover:bg-btn-secondary transition duration-300 focus:outline-none focus:ring-2 focus:bg-btn-secondary"
                      aria-label="Next testimonial"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* Indicator Dots */}
                  <div className="flex justify-center mt-6 gap-2">
                    {testimonialData.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${idx === current ? "bg-btn w-4" : "bg-gray-300"
                          }`}
                        aria-label={`Go to testimonial ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              )
          )}
        </div>
      </section>
    </div>
  );
}