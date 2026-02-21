import React, { useState, useEffect } from "react";

const FirstHeroSection = () => {
  const slides = [
    {
      id: 1,
      url: "https://naturalbabymama.com/wp-content/uploads/2021/05/The-best-eco-friendly-reusable-water-bottles-feature-image-1-1-920x613.png",
      title: "Pure Refreshment",
    },
    {
      id: 2,
      url: "https://tse3.mm.bing.net/th/id/OIP.3hT_g7dJr2SDwg4q_wPKuAHaEO?w=1006&h=575&rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "Eco-Friendly Choice",
    },
    {
      id: 3,
      url: "https://welaremedialmassage.com.au/img/tip-2.webp",
      title: "Natural Minerals",
    },
    {
      id: 4,
      url: "https://img.freepik.com/premium-photo/person-holds-up-stainless-water-bottle-front-lake_674594-30237.jpg",
      title: "Stay Hydrated",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic slide logic (2 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
      );
    }, 2000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [slides.length]);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden group">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.url}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg transition-all duration-500">
          {slides[currentIndex].title}
        </h2>
        <button className="mt-8 px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full transition-all shadow-lg">
          Explore Products
        </button>
      </div>

      {/* Slide Indicators (Dots) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FirstHeroSection;
