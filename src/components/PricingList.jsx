import { useEffect, useRef } from "react";
import { check, service3 } from "../assets";
import { pricing } from "../constants";

const PricingList = () => {
  const scrollRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    const scrollStep = 1; // Change this value for speed
    const scrollDelay = 10; // Delay between scrolls (ms)

    const autoScroll = () => {
      if (scrollContainer) {
        scrollAmount += scrollStep;
        scrollContainer.scrollLeft = scrollAmount;

        // Reset scroll when it reaches the end
        if (
          scrollAmount >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollAmount = 0;
        }
      }
    };

    const scrollInterval = setInterval(autoScroll, scrollDelay);

    return () => clearInterval(scrollInterval); // Clean up interval on component unmount
  }, []);

  return (
    <div
      ref={scrollRef}
      className="flex gap-[1rem] max-lg:flex-nowrap overflow-x-auto py-4 scrollbar-hide"
    >
      {pricing.map((item) => (
        <div
          key={item.id}
          className="min-w-[19rem] w-[22rem] max-lg:w-[19rem] h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-[22rem] flex-shrink-0 even:py-14 odd:py-8 odd:my-4 hover:scale-105 transition-transform duration-2000"
        >
          <h4 className="h4 mb-4">{item.title}</h4>

          <img
            src={service3}
            className="w-full h-full object-cover"
            width={520}
            height={400}
            alt="Scary robot"
          />
        </div>
      ))}
    </div>
  );
};

export default PricingList;
