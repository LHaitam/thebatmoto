import React from "react";
import Link from "next/link";

const Apropos = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <h2
          className="text-6xl text-[#f9cb0c] text-center mx-10 my-10  "style={{
            fontFamily: "Bangers",
          }}
        >
          À propos de The Bat Moto 🦇🛵
        </h2>
      </div>
      <div className="mx-8">
        <p className="mb-4 text-lg text-justify lg:text-center">
          Bienvenue chez <strong>The Bat Moto</strong>, votre agence de location de motos à Marrakech. Inspirée par l’esprit d’aventure et de liberté, notre mission est de vous offrir une expérience unique pour explorer la magnifique ville rouge et ses environs.
        </p>
        <p className="mb-4 text-lg text-justify lg:text-center">
          Que vous souhaitiez parcourir les petites ruelles de l’ancienne Médina, découvrir les paysages époustouflants des montagnes de l’Atlas ou vous aventurer dans les palmeraies, nos motos fiables et stylées sont là pour vous accompagner.
        </p>
        <p className="mb-4 text-lg text-justify lg:text-center">
          Nous comprenons l’importance de votre temps. Avec <strong>The Bat Moto</strong>, évitez les longues attentes de taxi et profitez d’une mobilité totale pour voyager à votre rythme, en toute liberté et sécurité.
        </p>
        <p className="mb-4 text-lg text-justify lg:text-center">
          Chez <strong>The Bat Moto</strong>, chaque client est un héros. Nous mettons un point d’honneur à vous offrir un service personnalisé, des véhicules parfaitement entretenus et une assistance professionnelle tout au long de votre aventure.
        </p>
        <p className="mb-4 text-lg text-justify lg:text-center">
          Prêt à vivre Marrakech autrement ? Enfourchez une de nos motos et laissez l’aventure commencer 🦇🛵
        </p>
      </div>
      <Link
        className="px-10 py-2 border-2 border-[#f9cb0c] font-bold mt-10 mb-8 transition duration-300 transform hover:scale-105 hover:bg-[#FFD700] hover:text-black"
        href="/contact/#contact"
      >
        Réservez
      </Link>
    </div>
  );
};

export default Apropos;
