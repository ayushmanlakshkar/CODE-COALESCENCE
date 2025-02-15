import { HelpCircle, ChevronDown, RefreshCw, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import FaqItem from "./FaqItem";

interface Faq {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: Faq[];
}

const INITIAL_DISPLAY_COUNT = 5; // Start with 5 FAQs
const LOAD_MORE_COUNT = 3; // Reveal 3 more FAQs per click

function FaqSection({ faqs }: FaqSectionProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_DISPLAY_COUNT);

  const handleLoadMore = () => {
    if (visibleCount >= faqs.length) {
      setVisibleCount(INITIAL_DISPLAY_COUNT); // Reset to default
    } else {
      setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, faqs.length)); // Ensure it doesn’t exceed total FAQs
    }
  };

  return (
    <section id="faq" className="pt-16 md:pt-32 pb-10 relative bg-transparent">
      <div className="max-w-4xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center flex justify-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="flex gap-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              FAQ
              <HelpCircle className="w-9 h-9 md:w-12 md:h-12 text-primary" />
            </span>
          </h2>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.slice(0, visibleCount).map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Load More / Reset Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="px-6 py-3 flex gap-3 justify-center items-center cursor-pointer text-white font-semibold text-lg 
               bg-gradient-to-r from-primary to-secondary rounded-2xl shadow-lg 
               hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            {visibleCount >= faqs.length ? (
              <>
                Show less <ChevronUp className="w-5 h-5" />
              </>
            ) : (
              <>
                Show More <ChevronDown className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
