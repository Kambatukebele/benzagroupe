import React, { useState, useRef, useEffect } from "react";
import CardPortfolio from "./CardPortfolio";
import { portfolios } from "../../data";
const DownPortfolio = () => {
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const carousel = carouselRef.current;
    const slides = carousel.children;
    const slideWidth = slides[0].offsetWidth;

    const scrollCarousel = () => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const interval = setInterval(() => {
      scrollCarousel();
    }, 3000);

    carousel.scrollTo({
      left: slideWidth * index,
      behavior: "smooth",
    });

    return () => clearInterval(interval);
  }, [index]);
  return (
    <div
      className="flex w-full justify-start items-center gap-2 overflow-auto whitespace-break-spaces no-scrollbar"
      ref={carouselRef}
    >
      {portfolios.map((portfolio) => {
        return <CardPortfolio key={portfolio.id} {...portfolio} />;
      })}
    </div>
  );
};
export default DownPortfolio;
