import React from "react";
import Link from "next/link";

const Apropos = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <h2
          className="text-6xl mb-[-6] text-[#c5ae87]"
          style={{
            fontFamily: "Sacramento",
            fontStyle: "italic",
          }}
        >
          À propos de nous
        </h2>
      </div>
      <div>
        <h3 className="text-4xl mt-[-6px] mb-6 font-semibold text-center mx-auto">
          BIENVENUE CHEZ LASER RUSH
        </h3>
      </div>
      <div className="mx-8">
        <p className="mb-4 text-lg text-justify lg:text-center">
          La demande d&apos;auriculothérapie n&apos;a jamais été aussi élevée. Souvent,
          le grand public se trouve désemparé, ne sachant pas vers quel
          prestataire se tourner ni sur quels critères se baser pour faire le
          meilleur choix.
        </p>
        <p className="mb-4 text-lg text-justify lg:text-center">
          C&apos;est là que Laser Rush entre en jeu, votre cabinet spécialisé où
          nous vous proposons une approche holistique pour vous accompagner vers
          un mieux-être. Forts de notre expertise, nous vous aidons à vous
          libérer de toutes vos addictions, ainsi que des problèmes liés à
          l&apos;obésité, au sucre, au sommeil et bien d&apos;autres encore. Notre méthode,
          issue de la médecine chinoise et dérivée de l&apos;acupuncture, est indolore
          et efficace contre toute addiction, sans aucun effet secondaire.
        </p>
        <p className="mb-4 text-lg text-justify lg:text-center">
          Chez Laser Rush, nous nous engageons à vous offrir des résultats
          durables, garantissant votre satisfaction à chaque étape de votre
          parcours vers une vie équilibrée et épanouie. Nous vous assurons
          également un service client exceptionnel et des tarifs compétitifs,
          pour que vous repartiez avec le sourire.
        </p>
        <p className="mb-4 text-lg text-justify lg:text-center">
          De plus, nous vous offrons une garantie de 12 mois ; si une séance ne
          vous apporte pas les résultats escomptés, nous vous proposons une
          autre séance gratuitement.
        </p>
      </div>

      <div>
        <h3 className="text-4xl mt-[6px] mb-6 font-semibold text-center">
          Illuminez, libérez, prospérez !
        </h3>
      </div>
      <Link className="px-10 py-2 border-2 border-black font-bold mt-10 mb-8 transition duration-300 transform hover:scale-105 hover:bg-white hover:text-[#c5ae87]"
        href="contact/#contact">
        Réservez
      </Link>
    </div>
  );
};

export default Apropos;
