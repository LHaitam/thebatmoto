import Head from "next/head";
import Hero from "../components/Hero";
import Apropos from "../components/Apropos";
import Faq from "../components/Faq";
import Tarification from "../components/Tarification";

export default function Home() {
  return (
    <>
      <Head>
        <title>THE BAT MOTO - Explorez Marrakech avec style</title>
        <meta
          name="description"
          content="The Bat Moto, votre agence de location de motos à Marrakech. Offrez-vous une expérience unique et mémorable en explorant la ville rouge et ses environs avec nos motos élégantes et puissantes."
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
