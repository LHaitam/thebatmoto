"use client";
import React from "react";

const motos = [
  {
    name: "Sym Orbit 2",
    image: "/orbit.jpg",
    description:
      "Compact et agile, idéal pour naviguer dans les rues animées de Marrakech.",
    features: ["Puissance : 125cc", "Économique et pratique", "Maniabilité exceptionnelle"],
  },
  {
    name: "Yamaha TMAX",
    image: "/tmax.jpg",
    description:
      "Une moto puissante et élégante, parfaite pour une conduite dynamique.",
    features: ["Puissance : 560cc", "Transmission automatique", "Design premium"],
  },
  {
    name: "Honda X-ADV",
    image: "/xadv.jpg",
    description:
      "Polyvalente et robuste, adaptée pour les explorations urbaines et rurales.",
    features: ["Puissance : 745cc", "Technologie avancée", "Confort inégalé"],
  },
  {
    name: "Leonardo Enzo",
    image: "/leonardo-enzo.jpg",
    description:
      "Un modèle unique combinant style futuriste et performance exceptionnelle.",
    features: ["Design avant-gardiste", "Puissance impressionnante", "Équipements haut de gamme"],
  },
];

const NosMotos = () => {
  return (
    <section id="nos-motos" className="flex flex-col items-center justify-center py-12 bg-white text-black">
      {/* Titre et Introduction */}
      <h2
        className="text-6xl mb-6 text-[#f9cb0c]"
        style={{
          fontFamily: "Bangers",
        }}
      >
        Nos Motos
      </h2>
      <p className="text-center text-lg mb-8 max-w-3xl">
        Découvrez notre gamme de motos puissantes et élégantes, parfaites pour explorer Marrakech avec style, performance et confort.
      </p>

      {/* Grille des motos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 max-w-7xl">
        {motos.map((moto, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            {/* Image avec overlay et titre */}
            <div className="relative">
              <img
                src={moto.image}
                alt={moto.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{moto.name}</h3>
              </div>
            </div>

            {/* Contenu de la carte */}
            <div className="p-5">
              <p className="mb-3">{moto.description}</p>
              <ul className="list-disc list-inside text-sm mb-3">
                {moto.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NosMotos;
