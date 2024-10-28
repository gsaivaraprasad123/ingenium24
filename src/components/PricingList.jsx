import { useEffect, useRef } from "react";
import { service3 } from "../assets";
import { pricing } from "../constants";

const PricingList = () => {
  const scrollRef = useRef(null);

  // Auto-scroll effect with faster speed and infinite scroll
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const scrollStep = 100; // Increase this value for faster scrolling
    const scrollDelay = 20; // Reduce this value for quicker intervals (ms)

    const autoScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollStep;

        // When the scroll reaches the end of the duplicated content, reset to the start
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0; // Reset to the start for infinite scroll
        }
      }
    };

    const scrollInterval = setInterval(autoScroll, scrollDelay);

    return () => clearInterval(scrollInterval); // Clean up interval on component unmount
  }, []);

  return (
    <div
      ref={scrollRef}
      className="flex gap-[0.5rem] max-lg:flex-nowrap overflow-x-auto py-2 scrollbar-hide"
    >
      {/* Duplicate content for infinite scroll */}
      {[...pricing, ...pricing].map((item, index) => (
        <div
          key={index}
          className="min-w-[15rem] w-[18rem] max-lg:w-[15rem] h-full px-4 bg-n-8 border border-n-6 rounded-[1.5rem] lg:w-[18rem] flex-shrink-0 even:py-10 odd:py-6 odd:my-2 hover:scale-105 transition-transform duration-2000"
        >
          <h4 className="h4 mb-4">{item.title}</h4>

          <img
            src={item.image}
            className="w-full h-full object-cover"
            width={420}
            height={300}
            alt="Scary robot"
          />

          {item.features.map((feature, index) => (
            <li key={index} className="flex py-2 border-t border-n-6">
              <p className="body-2 ml-4">{feature}</p>
            </li>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PricingList;
