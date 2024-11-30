"use client";

import { useState, useEffect } from "react";

const Hero = () => {
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Clean up on unmount
  }, [images.length]);

  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] overflow-hidden rounded-lg shadow-lg">
      {/* Image Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-contain flex-shrink-0"
          />
        ))}
      </div>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex justify-center items-center text-white z-10">
        {/* <h1 className="text-3xl sm:text-4xl font-bold bg-black bg-opacity-60 px-6 py-3 rounded-md shadow-lg text-center">
          Welcome to My Father's Blog
        </h1> */}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            } transition-all duration-500`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
