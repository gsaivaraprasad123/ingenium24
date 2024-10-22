import { useEffect, useRef } from "react";
import { service3 } from "../assets";
import { executives } from "../constants";

const ExecutiveLine = () => {
  const scrollRef = useRef(null);

  // Auto-scroll effect with faster speed and infinite reverse scroll
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const scrollStep = 100; // Adjust this value for scroll speed
    const scrollDelay = 20; // Adjust this value for interval timing (ms)

    const autoScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft -= scrollStep; // Reverse scrolling

        // When the scroll reaches the start of the duplicated content, reset to the end
        if (scrollContainer.scrollLeft <= 0) {
          scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2; // Reset to the end for infinite reverse scroll
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
      {[...executives, ...executives].map((item, index) => (
        <div
          key={index}
          className="min-w-[15rem] w-[18rem] max-lg:w-[15rem] h-full px-4 bg-n-8 border border-n-6 rounded-[1.5rem] lg:w-[18rem] flex-shrink-0 even:py-10 odd:py-6 odd:my-2 hover:scale-105 transition-transform duration-2000"
        >
          <h4 className="h4 mb-4">{item.title}</h4>

          <img
            src={service3}
            className="w-full h-full object-cover"
            width={420}
            height={300}
            alt="Scary robot"
          />

          <ul>
            {item.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex py-2 border-t border-n-6">
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExecutiveLine;
