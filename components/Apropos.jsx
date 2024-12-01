import React from "react";
import Link from "next/link";

const Apropos = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <h2
          className="text-6xl mb-[-6] text-[#f9cb0c]"
          style={{
            fontFamily: "Bangers",
            fontStyle: "italic",
          }}
        >
          À propos de nous
        </h2>
      </div>
      <div>
        <h3 className="text-4xl mt-[-6px] mb-6 font-semibold text-center mx-auto">
          BIENVENUE CHEZ THE BAT MOTO
        </h3>
      </div>
      <div className="mx-8">
        <p className="mb-4 text-lg text-justify lg:text-center">
          À Marrakech, une expérience unique vous attend. Que vous soyez un
          aventurier ou un explorateur urbain, <strong>The Bat Moto</strong> vous offre
          une opportunité inégalée de parcourir la ville rouge avec style, puissance
          et l’aura d’un véritable héros.
        </p>
        <p className="mb-4 text-lg text-justify lg:text-center">
          Inspirée par le légendaire Chevalier Noir, notre agence de location de
          motos propose des véhicules puissants et élégants, parfaits pour vous
          offrir une expérience digne d’un super-héros. Chaque moto incarne la
          sophistication et la performance pour une aventure sur mesure.
        </p>
        <p className="mb-4 text-lg text-justify lg:text-center">
          Chez <strong>The Bat Moto</strong>, nous croyons en l&apos;importance d&apos;allier sécurité,
          confort et design. Notre équipe est dédiée à vous fournir un service
          impeccable, vous garantissant une expérience mémorable à chaque tour de roue.
        </p>
        <p className="mb-4 text-lg text-justify lg:text-center">
          De plus, nous proposons des options de location flexibles pour répondre
          à vos besoins. Que ce soit pour une balade rapide ou une exploration
          prolongée de Marrakech et de ses environs, nous avons ce qu&apos;il vous faut.
        </p>
      </div>

      <div>
        <h3 className="text-4xl mt-[6px] mb-6 font-semibold text-center">
          Roulez comme un héros, explorez comme une légende !
        </h3>
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
