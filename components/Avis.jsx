"use client";
import React from "react";

const avis = [
  {
    name: "Ahmed B.",
    comment:
      "Une expérience incroyable ! Les motos sont puissantes et bien entretenues. Je recommande fortement The Bat Moto.",
    rating: 5,
  },
  {
    name: "Sarah M.",
    comment:
      "Service client impeccable et les motos sont parfaites pour explorer Marrakech. Bravo à léquipe !",
    rating: 4,
  },
  {
    name: "Youssef L.",
    comment:
      "Je suis ravi davoir loué une moto chez The Bat Moto. Super qualité et une aventure mémorable.",
    rating: 5,
  },
  {
    name: "Nadia K.",
    comment:
      "Tout était au top ! Facilité de réservation, motos performantes et service impeccable.",
    rating: 5,
  },
];

const Avis = () => {
  return (
    <section
      id="avis"
      className="flex flex-col items-center justify-center py-12 text-gray-800"
    >
      {/* Titre */}
      <h2
        className="text-6xl mb-6 text-[#f9cb0c]"
        style={{
          fontFamily: "Bangers",
        }}
      >
        Avis Clients
      </h2>

      {/* Texte introductif */}
      <p className="text-center text-lg mb-8 max-w-3xl">
        Chez <strong>The Bat Moto</strong>, nous nous engageons à offrir une expérience exceptionnelle à tous nos clients. Voici ce qu&apos;ils pensent de nos services.
      </p>

      {/* Liste des avis */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl">
        {avis.map((review, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105"
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900">{review.name}</h3>
              <div className="flex text-yellow-500">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i}>&#9733;</span> // Étoile pleine
                ))}
                {Array.from({ length: 5 - review.rating }).map((_, i) => (
                  <span key={i} className="text-gray-300">
                    &#9733;
                  </span> // Étoile vide
                ))}
              </div>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Avis;
