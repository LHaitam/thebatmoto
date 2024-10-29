import React from "react";
import Link from "next/link";

const Tarification = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <h2
          className="text-center text-6xl mb-[-6] text-[#c5ae87] "
          style={{
            fontFamily: "Sacramento",
            fontStyle: "italic",
          }}
        >
          Notre tarif
        </h2>
      </div>
      <div>
        <h3
          className="text-4xl mt-[-6px]  font-semibold text-center mx-6"
          style={{
            textDecoration: "line-through",
            textDecorationColor: "#c5ae87",
          }}
        >
          195€
        </h3>
        <h3 className="text-4xl mt-[-6px]  font-semibold text-center mx-6">
          180€ (prix de lancement)
        </h3>
      </div>
      <div className="mx-8 mt-12">
        <h3 className="text-xl font-semibold mb-4 text-center">
          Une Seule Séance est Suffisante
        </h3>
        <p className="text-lg mb-4 text-center">
          Notre séance d&apos;auriculothérapie coûte 180€ au lieu de 195€.
        </p>
        <p className="text-lg mb-4 text-center">
          Les résultats sont garantis*.
        </p>
        <p className="text-sm text-black text-center">
          *En cas de résultat insatisfaisant, une séance gratuite vous sera
          offerte.
        </p>
      </div>
      <div className="mx-8 mt-12">
        <h3 className="text-xl font-semibold mb-4 text-center">
          Satisfait ou Satisfait !
        </h3>
        <p className="text-lg mb-4 text-center">
          Nous offrons une garantie de 12 mois sur nos séances.
          <br /> Si le résultat n&apos;est pas satisfaisant, une séance gratuite
          sera offerte.
        </p>
      </div>
      <Link className="px-10 py-2 border-2 border-black font-bold mt-10 mb-8 transition duration-300 transform hover:scale-105 hover:bg-white hover:text-[#c5ae87]"
        href="/contact/#contact">
        {" "}
        Réservez
      </Link>
    </div>
  );
};

export default Tarification;
