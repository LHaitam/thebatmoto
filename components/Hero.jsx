import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const images = [
  "/bg.webp",
  "/bg1.webp",
  "/bg2.webp",
  "/bg3.webp",
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

  return (
    <div className="relative flex items-center justify-center h-screen mb-12 bg-cover">
      {images.map((image, index) => (
        <div
          key={index}
<<<<<<< HEAD
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={image} fill style={{ objectFit: "cover" }} alt={`Slide ${index + 1}`} />
=======
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
        >
          <Image src={image} layout="fill" objectFit="cover" alt={`Slide ${index + 1}`} />
>>>>>>> 8341a4fc7edf60027117f29de372fef12fe08c91
        </div>
      ))}
      <div className="p-5 text-white z-[2] flex flex-col items-center justify-center absolute">
        <h2 className="text-5xl font-bold text-center">{heading}</h2>
        <p className="py-5 text-xl text-center">{message}</p>
        <Link className="px-10 py-2 border font-bold transition duration-300 transform hover:scale-105 hover:bg-white hover:text-[#4e4636]" href="/contact/#contact" passHref>
            Réservez
        </Link>
      </div>
<<<<<<< HEAD
      <button
        onClick={prevSlide}
        aria-label="Slide précédent"
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-4xl text-white text-opacity-20 p-2 hover:bg-opacity-75"
        style={{ zIndex: 100 }}
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        aria-label="Slide suivant"
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-4xl text-white text-opacity-20 p-2 hover:bg-opacity-75"
        style={{ zIndex: 100 }}
      >
=======
      <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 text-4xl text-white text-opacity-20 p-2 hover:bg-opacity-75" style={{ zIndex: 100 }}>
        &#10094;
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 text-4xl text-white text-opacity-20 p-2 hover:bg-opacity-75" style={{ zIndex: 100 }}>
>>>>>>> 8341a4fc7edf60027117f29de372fef12fe08c91
        &#10095;
      </button>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
<<<<<<< HEAD
            aria-label={`Aller au slide ${index + 1}`}
            className={`w-3 h-3 rounded-full border-2 ${
              index === currentIndex ? "border-[#c5ae87] bg-[#f3eee7]" : "border-white bg-transparent"
            }`}
=======
            className={`w-3 h-3 rounded-full border-2 ${index === currentIndex ? "border-[#c5ae87] bg-[#f3eee7]" : "border-white bg-transparent"}`}
>>>>>>> 8341a4fc7edf60027117f29de372fef12fe08c91
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
