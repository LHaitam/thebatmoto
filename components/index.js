import Head from "next/head";
import Hero from "../components/Hero";
import Apropos from "../components/Apropos";
import Faq from "../components/Faq";
import Tarification from "../components/Tarification";

export default function Home() {
  return (
    <>
      <Head>
        <title>LASER RUSH - Une nouvelle vision sans addiction</title>
        <meta
          name="description"
          content="Découvrez les bienfaits de l'auriculothérapie pour traiter l'obésité morbide, les problèmes de sommeil, arrêter le tabac, les drogues et autres addictions."
        />
      </Head>
      <Hero
        heading="LASER RUSH"
        message="Une nouvelle vision sans addiction."
      />
      <section>
        <section className="pt-[150px] -mt-[150px]" id="apropos">
          <Apropos />
        </section>
        <section className="pt-[80px] -mt-[80px]" id="faq">
          <Faq />
        </section>
        <section className="pt-[150px] -mt-[150px]" id="tarification">
          <Tarification />
        </section>
      </section>
    </>
  );
}
