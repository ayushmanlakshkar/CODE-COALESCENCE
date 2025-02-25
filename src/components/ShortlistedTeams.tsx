import { ChevronLeft, ChevronRight } from "lucide-react";
import team1 from "../assets/page1.avif";
import team2 from "../assets/page2.avif";
import team3 from "../assets/page3.avif";
import { useRef, useState, useEffect } from "react";

export const ShortlistedTeams = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: 0, // Ensure the first image is visible on mount
        behavior: "smooth",
      });
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.6; // Adjust scroll distance

      let newScrollLeft =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;

      // Ensure we don't overshoot the edges
      newScrollLeft = Math.max(
        0,
        Math.min(newScrollLeft, scrollWidth - clientWidth)
      );

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      // Update active index based on position
      setActiveIndex((prevIndex) =>
        direction === "left"
          ? Math.max(prevIndex - 1, 0)
          : Math.min(prevIndex + 1, 2)
      );
    }
  };

  return (
    <section
      id="shortlisted-teams"
      className="pt-16 md:pt-32 relative bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            className="absolute left-4 z-10 bg-black/60 p-3 rounded-full hover:bg-black/80 transition-all"
            onClick={() => scroll("left")}
            disabled={activeIndex === 0} // Disable at first image
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 px-12 py-4 scrollbar-hide scroll-smooth justify-center"
          >
            {[team1, team2, team3].map((team, index) => (
              <div
                key={index}
                className={`min-w-[260px] md:min-w-[320px] relative transition-transform duration-500 ease-in-out 
                  ${
                    index === activeIndex
                      ? "scale-[1.05] shadow-2xl z-10"
                      : "scale-[0.9] opacity-70"
                  }
                `}
                onClick={() => setActiveIndex(index)}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-transparent hover:border-primary transition-all duration-300">
                  <img
                    src={team}
                    alt={`Team ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-4 z-10 bg-black/60 p-3 rounded-full hover:bg-black/80 transition-all"
            onClick={() => scroll("right")}
            disabled={activeIndex === 2} // Disable at last image
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};
