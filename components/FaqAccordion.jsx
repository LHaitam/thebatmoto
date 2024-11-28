"use client";
import React, { useEffect } from "react";

const FaqAccordion = () => {
  useEffect(() => {
    const handleAccordionClick = (event) => {
      event.currentTarget.classList.toggle("active");
      const panel = event.currentTarget.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    };

    const acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", handleAccordionClick);
    }

    return () => {
      for (let i = 0; i < acc.length; i++) {
        acc[i].removeEventListener("click", handleAccordionClick);
      }
    };
  }, []);

  return (
    <section
      id="FAQ"
      className="flex flex-col items-center justify-center overflow-hidden pb-[100px]"
    >
      <button className="accordion">QUI SOMMES-NOUS ?</button>
      <div className="panel">
        <p className="text-l mt-5 bg-[#ffffff]/80 text-black lg:mt-[10px] ">
          <strong>The Bat Moto</strong> est votre agence de location de motos à
          Marrakech, inspirée par l'univers du légendaire Chevalier Noir. Nous
          proposons des motos élégantes et puissantes pour que vous exploriez
          Marrakech avec style et performance.
        </p>
      </div>

      <button className="accordion">POURQUOI CHOISIR THE BAT MOTO ?</button>
      <div className="panel">
        <p className="text-l mt-5 bg-[#ffffff]/80 text-black lg:mt-[10px] ">
          En choisissant <strong>The Bat Moto</strong>, vous bénéficiez :
        </p>
        <ul className="mt-3 list-disc list-inside bg-[#ffffff]/80 text-black lg:mt-[10px] p-4 rounded-lg">
          <li>De motos de qualité, parfaitement entretenues.</li>
          <li>D'une expérience unique sous le thème du héros légendaire.</li>
          <li>D'un service client exceptionnel pour répondre à vos besoins.</li>
        </ul>
      </div>

      <button className="accordion">QUI PEUT LOUER UNE MOTO ?</button>
      <div className="panel">
        <p className="text-l mt-5 bg-[#ffffff]/80 text-black lg:mt-[10px] ">
          Toute personne âgée de 18 ans ou plus, possédant un permis de conduire
          valide, peut louer une moto chez <strong>The Bat Moto</strong>. Nous
          accueillons aussi bien les résidents locaux que les touristes en quête
          d'aventure.
        </p>
      </div>

      <button className="accordion">QUELLES SONT NOS GARANTIES ?</button>
      <div className="panel">
        <p className="text-l mt-5 bg-[#ffffff]/80 text-black lg:mt-[10px] ">
          Nous offrons :
        </p>
        <ul className="mt-3 list-disc list-inside bg-[#ffffff]/80 text-black lg:mt-[10px] p-4 rounded-lg">
          <li>Des motos entretenues et sécurisées.</li>
          <li>Un équipement optionnel, comme les casques et protections.</li>
          <li>Une assistance 24h/24 en cas de problème.</li>
        </ul>
      </div>

      <button className="accordion">COMMENT RÉSERVER UNE MOTO ?</button>
      <div className="panel">
        <p className="text-l mt-5 bg-[#ffffff]/80 text-black lg:mt-[10px] ">
          La réservation est simple et rapide. Vous pouvez :
        </p>
        <ul className="mt-3 list-disc list-inside bg-[#ffffff]/80 text-black lg:mt-[10px] p-4 rounded-lg">
          <li>Réserver en ligne via notre site web.</li>
          <li>Nous appeler directement.</li>
          <li>Visiter notre agence à Marrakech.</li>
        </ul>
        <p className="mt-3">N'attendez plus pour vivre une expérience inoubliable sur les routes de Marrakech !</p>
      </div>
    </section>
  );
};

export default FaqAccordion;
