import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  { src: "/img1.jpg", title: "IMAGE 1", description: "Web Developer\nSubscribe To My Channel For More Videos" },
  { src: "/img2.jpg", title: "IMAGE 2", description: "Web Developer\nSubscribe To My Channel For More Videos" },
  { src: "/img3.jpg", title: "IMAGE 3", description: "Web Developer\nSubscribe To My Channel For More Videos" }
];

const HeroCarousel = ({ heading, message }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const setSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-screen">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
        >
          <Image src={image.src} layout="fill" objectFit="cover" alt={image.title} />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white p-5">
            <h2 className="text-5xl font-bold">{image.title}</h2>
            <p className="py-5 text-xl whitespace-pre-line">{image.description}</p>
            <Link href="/contact/#contact">
              <a className="px-10 py-2 border font-bold transition duration-300 transform hover:scale-105 hover:bg-white hover:text-[#4e4636]">
                Réservez
              </a>
            </Link>
          </div>
        </div>
      ))}
      <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 text-4xl text-white bg-black bg-opacity-50 p-2 hover:bg-opacity-75">
        &#10094;
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 text-4xl text-white bg-black bg-opacity-50 p-2 hover:bg-opacity-75">
        &#10095;
      </button>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlide(index)}
            className={`w-3 h-3 rounded-full border-2 ${index === currentIndex ? "border-blue-500 bg-blue-500" : "border-white bg-transparent"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
