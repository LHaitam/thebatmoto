import React from "react";
import Link from "next/link";

const HeroVideo = ({ heading, message, videoSrc }) => {
  return (
    <div className="relative flex items-center justify-center h-screen mb-12 bg-cover">
      {/* Video Background */}
      <video
        className="absolute inset-0 object-cover w-full h-full"
        src="/bg.webm"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bg.mp4" type="video/mp4" />
        <source src="/bg.webm" type="video/webm" />
        Votre navigateur ne supporte pas la lecture des vidéos HTML5.
      </video>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      {/* Content */}
      <div className="relative z-10 p-5 text-white flex flex-col items-center justify-center text-center">
        <h2 className="text-8xl font-bold" style={{ fontFamily: "Bangers, cursive" }}>
          {heading}
        </h2>
        <p className="py-5 text-xl">{message}</p>
        <Link
          className="px-10 py-2 border font-bold transition duration-300 transform hover:scale-105 hover:bg-white hover:text-[#4e4636]"
          href="/contact/#contact"
          passHref
        >
          Réservez
        </Link>
      </div>
    </div>
  );
};

export default HeroVideo;
