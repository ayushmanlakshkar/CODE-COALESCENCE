import React, { useState } from 'react';
import page1 from '../assets/page1.avif';
import page2 from '../assets/page2.avif';
import page3 from '../assets/page3.avif';

const pages = [page1, page2, page3];

export const ShortlistedTeams = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');

  const handleNextPage = () => {
    if (isAnimating) return;
    setDirection('next');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
      setIsAnimating(false);
    }, 500);
  };

  const handlePrevPage = () => {
    if (isAnimating) return;
    setDirection('prev');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage((prevPage) => (prevPage - 1 + pages.length) % pages.length);
      setIsAnimating(false);
    }, 500);
  };

  const goToPage = (pageIndex) => {
    if (isAnimating) return;
    setDirection(pageIndex > currentPage ? 'next' : 'prev');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage(pageIndex);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section id="shortlisted-teams" className="pt-16 md:pt-32 relative">
      <div className="w-full md:w-11/12 mx-auto justify-center flex flex-col items-center md:px-20 relative">
        <div className="flex w-full justify-center items-center overflow-hidden">
          <button 
            onClick={handlePrevPage} 
            className="text-white md:mx-7 text-4xl md:text-6xl z-20 hover:opacity-75 transition-opacity disabled:opacity-50"
            aria-label="Previous slide"
            disabled={isAnimating}
          >
            &#9664;
          </button>
          
          <div className="relative w-full md:w-6/12">
            <img
              className={`w-full object-contain transition-all duration-500 ${
                isAnimating 
                  ? direction === 'next' 
                    ? 'opacity-0 translate-x-full' 
                    : 'opacity-0 -translate-x-full'
                  : 'opacity-80 translate-x-0'
              }`}
              src={pages[currentPage]}
              alt={`Page ${currentPage + 1}`}
            />
          </div>
          
          <button 
            onClick={handleNextPage} 
            className="text-white md:mx-7 text-4xl md:text-6xl z-20 hover:opacity-75 transition-opacity disabled:opacity-50"
            aria-label="Next slide"
            disabled={isAnimating}
          >
            &#9654;
          </button>
        </div>
        
        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`h-3 w-3 mx-2 rounded-full transition-all duration-300 ${
                currentPage === index 
                  ? 'bg-secondary scale-125' 
                  : 'bg-gray-400 hover:bg-gray-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentPage === index ? 'true' : 'false'}
              disabled={isAnimating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};