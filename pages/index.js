import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Apropos from "../components/Apropos";
import Faq from "../components/Faq";
import Tarification from "../components/Tarification";

export default function Home() {
  return (
    <>
      <Hero
        heading="LASER RUSH"
        message="Une nouvelle vision sans addiction."
      />
      <section>
        <section className="pt-6" id="apropos">
          <Apropos />
        </section>
        <section id="faq">
          <Faq />
        </section>
        <section className="pt-6" id="tarification">
          <Tarification />
        </section>
      </section>
    </>
  );
}
