import Head from "next/head";
import Hero from "../components/Hero";
import Apropos from "../components/Apropos";
import Faq from "../components/Faq";
import NosMotos from "../components/NosMotos";
import Avis from "../components/Avis";


export default function Home() {
  return (
    <>
      <Head>
        <title>THE BAT MOTO - Une nouvelle vision sans addiction</title>
        <meta
          name="description"
          content="Découvrez les bienfaits de l&apos;auriculothérapie pour traiter l&apos;obésité morbide, les problèmes de sommeil, arrêter le tabac, les drogues et autres addictions."
        />
      </Head>
      <Hero
        heading="THE BAT MOTO"
        message="Vivez l&apos;expérience d&apos;un vrai héros à Marrakech. Explorez la ville avec style et puissance."
      />
      <section>
        <section className="pt-[150px] -mt-[150px]" id="apropos">
          <Apropos />
        </section>
        <section className="pt-[80px] -mt-[80px]" id="nos-motos">
          <NosMotos />
        </section>
        <section className="pt-[80px] -mt-[80px]" id="faq">
          <Faq />
        </section>
        <section className="pt-[80px] -mt-[80px]" id="avis">
          <Avis />
        </section>
      </section>
    </>
  );
}
