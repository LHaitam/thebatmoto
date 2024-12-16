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
        <title>The Bat Moto - Location de motos à Marrakech</title>
        <meta
          name="description"
          content="Découvrez The Bat Moto, votre agence de location de motos à Marrakech. Profitez d'une expérience unique avec des motos puissantes et un service de qualité."
        />
      </Head>
      <Hero
        heading="THE BAT MOTO"
        message="Plongez dans l'univers du héros. Louez une moto et découvrez Marrakech avec style, puissance et liberté."
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
